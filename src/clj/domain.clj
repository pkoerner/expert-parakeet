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
      (assoc :question-set/max-points (calc-max-points-of-question-set question-set))
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


(defn sort-answers-of-free-text-questions-by-timestamp
  "Sorts the answers of the provided free-text-questions by timestamp.
   Uses the `question-set->answer` function to determine which answers should be used from the questions."
  [question-set->answer free-text-questions]
  (let [free-text-questions-with-inner-answers (map #(assoc % :frage/antworten (question-set->answer (:question/id %))) free-text-questions)
        answers (flatten (map (partial unpack-map-in-map :frage/antworten) free-text-questions-with-inner-answers))]
    (sort-by :answer/timestamp answers)))

;; previous name was "remove-answers-with-identical-user-and-questions-question-set-id"
(defn answers-with-distinct-ids
  "Takes a collection of `answers` as input. 
   It only keeps one answer for each test by comparing the 
   `:user/id`, `:question/id`, `:question-set/id`, and `:course/id` of every question. 
   It does this without considering the timestamp or points.
   It is practicly random."
  [answers]
  (let [answers-vec (vec answers)]
    (loop [a []
           i 0
           prev-ids #{}]
      (if (= i (count answers))
        a
        (let [current-ids {:user/id (:user/id (get answers-vec i)), :question/id (:question/id (get answers-vec i)),
                           :question-set/id (:question-set/id (get answers-vec i)), :course/id (:course/id (get answers-vec i))}]
          (if (contains? prev-ids current-ids)
            (recur a (inc i) prev-ids)
            (recur (conj a (get answers-vec i)) (inc i) (conj prev-ids current-ids))))))))


(defn uncorrected-answers-with-distinct-ids
  "Takes a collection of already corrected answers `corrected-answers` and a collection of `answers` as input.
   Returns one answer per question. For the question no answer has been corrected."
  [corrected-answers answers]
  (let [distinct-answers (reverse (answers-with-distinct-ids (reverse answers)))
        answers-without-user-id (map #(dissoc % :user/id) distinct-answers)
        corrected-answers-ids (into #{} (map :answer/id corrected-answers))
        answers-without-correction (remove #(contains? corrected-answers-ids (:answer/id %)) answers-without-user-id)]
    answers-without-correction))


(defn timestamp-to-date-and-time
  "Takes an answer with a timestamp. 
   Removes the timestamp and assocs the date and the time of the timestamp to the answer."
  [answer]
  (map
   #(let [date (:answer/timestamp %)]
      (dissoc
       (assoc % :answer/date (.format (java.text.SimpleDateFormat. "dd.MM.yyyy") date)
              :answer/time (.format (java.text.SimpleDateFormat. "HH:mm") date))
       :answer/timestamp))
   answer))


(defn get-answer-by-id
  "Takes a col of answers and returns the first answer from that col with the provided id."
  [id answers]
  (first (filter #(= id (:answer/id %)) answers)))


(defn corrected-answers
  "Takes a col of corrections and a col of answers.
   Returns only the answers that have already been corrected without the user in the map."
  [corrections answers]
  (let [corrections-with-answer-id (flatten (map #(unpack-map-in-map :correction/answer %) corrections))
        answers-with-corrections (map #(merge % (get-answer-by-id (:answer/id %) answers)) corrections-with-answer-id)
        answers-without-user (map #(dissoc % :user/id) answers-with-corrections)
        answer-ids-for-corrector (into #{} (map :answer/id answers))]
    (filter #(contains? answer-ids-for-corrector (:answer/id %)) answers-without-user)))


(defn merge-latest-correction-with-answer
  "Takes a col of corrections of an answer and the answer as input.
   Merges the newest correction of the provided col with the provided answer."
  [corrections-of-answer answer]
  (let [corrections (corrections-of-answer (:answer/id answer))
        sorted-corrections (reverse (sort-by :correction/timestamp corrections))]
    (if (first sorted-corrections)
      (merge answer (first sorted-corrections))
      answer)))


(defn answers-for-correction-view
  "Takes a col which contains one answer as input.
   In the answer `:question/answer` is a vector containing answers.
   Merges the question of the answer with the answer and returns the `:question/answer` as a single string."
  [[answer]]
  (let [answer-unpacked-question-nested (update (merge answer (:answer/question answer)) :answer/answer first)
        answer-unpacked (select-keys answer-unpacked-question-nested [:user/id :question/question-statement :question/points :frage/loesung
                                                                     :answer/answer :answer/points :answer/id])]
    answer-unpacked))


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
