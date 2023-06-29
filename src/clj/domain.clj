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


(defn kurse-mit-gesamt-punkten
  [kurse test->antwort]
  (map (fn [kurs]
         (update kurs :course/question-sets (partial map (partial calc-question-set-points test->antwort))))
       kurse))


;; changes a map that has a coll in it (as var) to a coll of maps
;; all maps have the keys and vals of the outer map and the keys and vals of one inner map
(defn unpack-map-in-map
  [key-of-coll input-map]
  (let [map-without-coll (dissoc input-map key-of-coll)]
    (map
     #(merge map-without-coll %)
     (key-of-coll input-map))))


(defn freitext-fragen
  [kurse-mit-inneren-tests]
  (let [tests-mit-inneren-fragen (flatten (map (partial unpack-map-in-map :course/question-sets) kurse-mit-inneren-tests))
        fragen-mit-innerem-fach (flatten (map (partial unpack-map-in-map :question-set/questions) tests-mit-inneren-fragen))
        fragen (map #(dissoc (assoc % :class/class-name (:class/class-name (:course/class %))) :course/class) fragen-mit-innerem-fach)
        nur-freitext-fragen (filter #(= :question.type/free-text (:question/type %)) fragen)]
    nur-freitext-fragen))


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
