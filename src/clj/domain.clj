(ns domain)


(defn calc-max-points-of-question-set
  [question-set]
  (apply + (map :question/points (:question-set/questions question-set))))


;; TODO: wir müssen noch entscheiden ob der beste oder
;; der letzte Versuch gewertet wird.
;; They apparently decided to use the first one.
;; The function calculates the sum of max. values
(defn calc-achieved-points
  "This function calculates the sum
   of points of answers. For each
   question the answer with the
   highest points is taken."
  [antworten]
  (->> antworten
       (group-by #(get-in % [:answer/question :question/id]))
       (map (fn [[_ antworten]]
              (apply max (map :answer/points antworten))))
       (apply +)))


(defn calc-question-set-points
  "This function calculates the points a student achived in a qeustion-set.
   The `question-set->answer` function defines which answers of the question-setshould be considered for the calculation.
   :return: Contains the maximal achivable points as well as the achived points."
  [question-set->answer question-set]
  (-> question-set
      (assoc :question-set/max-points (calc-max-points-of-question-set test))
      (assoc :question-set/achived-points (calc-achieved-points
                                     (question-set->answer (:question-set/id question-set))))
      (select-keys [:question-set/id :question-set/name :question-set/max-points :question-set/achived-points])))


(defn courses-with-total-points
  "Updatest the input courses and calculates the total number of achived points in it.
   The `question-set->answer` function is used to determine which answers for a question set should be used."
  [courses question-set->answer]
  (map (fn [course]
         (update course :course/question-sets (partial map (partial calc-question-set-points question-set->answer))))
       courses))


; (Look into tests for clarification.)
(defn unpack-map-in-map
  "Takes a map `input-map` and a key in that map `key-of-coll` under which a collection of maps can be found.
   Each map in that collection gets all key-value pairs from the outer map and only the collection is returned."
  [key-of-coll input-map]
  (let [map-without-coll (dissoc input-map key-of-coll)]
    (map
     #(merge map-without-coll %)
     (key-of-coll input-map))))


(defn extract-free-text-questions
  "Takes as input multiple courses containing their questions. 
   Extracts all free text questions from each course and returns them."
  [courses-with-inner-question-sets]
  (let [question-sets-with-inner-questions (flatten (map (partial unpack-map-in-map :course/question-sets) courses-with-inner-question-sets))
        questions-with-inner-course (flatten (map (partial unpack-map-in-map :question-set/questions) question-sets-with-inner-questions))
        questions (map #(dissoc (assoc % :class/class-name (:class/class-name (:course/class %))) :course/class) questions-with-inner-course)
        only-free-text-questions (filter #(= :question.type/free-text (:question/type %)) questions)]
    only-free-text-questions))


(defn sortierte-antworten-von-freitext-fragen
  [fct-antworten-von-frage freitext-fragen]
  (let [freitext-fragen-mit-inneren-antworten (map #(assoc % :frage/antworten (fct-antworten-von-frage (:question/id %))) freitext-fragen)
        antworten (flatten (map (partial unpack-map-in-map :frage/antworten) freitext-fragen-mit-inneren-antworten))]
    (sort-by :answer/timestamp antworten)))


(defn remove-antworten-with-identical-user-frage-test-id
  [antworten]
  (let [antworten-vec (vec antworten)]
    (loop [a []
           i 0
           prev-ids #{}]
      (if (= i (count antworten))
        a
        (let [current-ids {:user/id (:user/id (get antworten-vec i)), :question/id (:question/id (get antworten-vec i)),
                           :question-set/id (:question-set/id (get antworten-vec i)), :course/id (:course/id (get antworten-vec i))}]
          (if (contains? prev-ids current-ids)
            (recur a (inc i) prev-ids)
            (recur (conj a (get antworten-vec i)) (inc i) (conj prev-ids current-ids))))))))


(defn antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id
  [antworten-mit-korrekturen antworten]
  (let [antworten-ohne-duplicates (reverse (remove-antworten-with-identical-user-frage-test-id (reverse antworten)))
        antworten-ohne-user-id (map #(dissoc % :user/id) antworten-ohne-duplicates)
        korrigiert-ids (into #{} (map :answer/id antworten-mit-korrekturen))
        antworten-ohne-korrekturen (remove #(contains? korrigiert-ids (:answer/id %)) antworten-ohne-user-id)]
    antworten-ohne-korrekturen))


(defn timestamp-to-datum-and-uhrzeit
  [antwort-map]
  (map
   #(let [date (:answer/timestamp %)]
      (dissoc
       (assoc % :antwort/datum (.format (java.text.SimpleDateFormat. "dd.MM.yyyy") date)
              :antwort/uhrzeit (.format (java.text.SimpleDateFormat. "HH:mm") date))
       :answer/timestamp))
   antwort-map))


(defn get-antwort-with-given-id
  [id antworten]
  (first (filter #(= id (:answer/id %)) antworten)))


(defn antworten-korrigiert
  [korrektur-map antworten]
  (let [korrekturen-with-antwort-id (flatten (map #(unpack-map-in-map :correction/answer %) korrektur-map))
        antworten-mit-korrekturen (map #(merge % (get-antwort-with-given-id (:answer/id %) antworten)) korrekturen-with-antwort-id)
        antworten-ohne-studi (map #(dissoc % :user/id) antworten-mit-korrekturen)
        antwort-ids-for-this-korrektor (into #{} (map :answer/id antworten))]
    (filter #(contains? antwort-ids-for-this-korrektor (:answer/id %)) antworten-ohne-studi)))


(defn korrekturen-into-antwort
  [korrekturen-von-antwort antwort]
  (let [korrekturen (korrekturen-von-antwort (:answer/id antwort))
        korrekturen-sorted (reverse (sort-by :correction/timestamp korrekturen))]
    (if (first korrekturen-sorted)
      (merge antwort (first korrekturen-sorted))
      antwort)))


(defn antworten-fuer-korrektur-ansicht
  [[antwort-map]]
  (let [antwort-unpacked-frage-nested (update (merge antwort-map (:answer/question antwort-map)) :answer/answer first)
        antwort-unpacked (select-keys antwort-unpacked-frage-nested [:user/id :question/question-statement :question/points :frage/loesung
                                                                     :answer/answer :answer/points :answer/id])]
    antwort-unpacked))


(defn check-incoming-korrektur
  [korrektur passende-antwort]
  (if-not (first passende-antwort)
    (assoc korrektur :error :keine-passende-antwort)
    (let [frage-punkte (get-in (first passende-antwort) [:answer/question :question/points])]
      (cond
        (not frage-punkte)
        (assoc korrektur :error :keine-passende-antwort)
        (or (not (:correction/feedback korrektur)) (empty? (:correction/feedback korrektur)))
        (assoc korrektur :error :korrektur-text-missing)
        (or (not (:korrektur/punkte korrektur)) (empty? (:korrektur/punkte korrektur)))
        (assoc korrektur :error :korrektur-punkte-missing)
        (not (nat-int? (read-string (:korrektur/punkte korrektur))))
        (assoc korrektur :error :punkte-invalid)
        (> (read-string (:korrektur/punkte korrektur)) frage-punkte)
        (assoc korrektur :error :punkte-zu-viel)
        :else (update korrektur :korrektur/punkte read-string)))))


(defn add-korrektur-if-no-error
  [add-korrektur-fct ant-id korrektur]
  (if (:error korrektur)
    korrektur
    (add-korrektur-fct ant-id korrektur)))
