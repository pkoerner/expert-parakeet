(ns domain)


(defn calc-max-points-of-question-set
  "This funtion calculates the maximal
   achievable number of points for
   a question set."
  [question-set]
  (apply + (map :question/max-points (:question-set/questions question-set))))


;; TODO: wir müssen noch entscheiden ob der beste oder
;; der letzte Versuch gewertet wird.
;; They apparently decided to use the first one.
;; The function calculates the sum of max. values
(defn calc-achieved-points
  "This function calculates the sum
   of points of answers. For each
   question the answer with the
   highest points is taken."
  [answers]
  (->> answers
       (group-by #(get-in % [:answer/question :question/id]))
       (map (fn [[_ answers]]
              (apply max (map :answer/points answers))))
       (apply +)))


(defn calc-question-set-points
  "This function calculates the points a student achieved in a question-set.
   The `question-set->answer` function defines which answers of the question-set should be considered for the calculation.
   :return: Contains the maximal achivable points as well as the achived points."
  [question-set->answer question-set]
  (-> question-set
      (assoc :question-set/max-points (calc-max-points-of-question-set question-set))
      (assoc :question-set/achieved-points (calc-achieved-points
                                             (question-set->answer (:question-set/id question-set))))
      (select-keys [:question-set/id :question-set/name :question-set/max-points :question-set/achieved-points :question-set/passing-score])))


(defn course-iterations-with-total-points
  "Updates the input course-iterations and calculates the total number of achived points in it.
   The `question-set->answer` function is used to determine which answers for a question set should be used."
  [course-iterations question-set->answer]
  (map (fn [course-iteration]
         (update course-iteration :course-iteration/question-sets (partial map (partial calc-question-set-points question-set->answer))))
       course-iterations))


;; (Look into tests for clarification.)
(defn unpack-map-in-map
  "Takes a map `input-map` and a key in that map `key-of-coll` under which a collection of maps can be found.
   Each map in that collection gets all key-value pairs from the outer map and only the collection is returned."
  [key-of-coll input-map]
  (let [map-without-coll (dissoc input-map key-of-coll)]
    (map
      #(merge map-without-coll %)
      (key-of-coll input-map))))


(defn extract-free-text-questions
  "Takes as input multiple course-iterations containing their question-sets. 
   Extracts all free text questions from each course-iteration and returns them."
  [course-iterations-with-inner-question-sets]
  (let [question-sets-with-inner-questions (flatten (map (partial unpack-map-in-map :course-iteration/question-sets) course-iterations-with-inner-question-sets))
        questions-with-inner-course-iteration (flatten (map (partial unpack-map-in-map :question-set/questions) question-sets-with-inner-questions))
        questions (map #(dissoc (assoc % :course/course-name (:course/course-name (:course-iteration/course %))) :course-iteration/course) questions-with-inner-course-iteration)
        only-free-text-questions (filter #(= :question.type/free-text (:question/type %)) questions)]
    only-free-text-questions))


(defn sort-answers-of-free-text-questions-by-timestamp
  "Sorts the answers of the provided free-text-questions by timestamp.
   Uses the `question-set->answer` function to determine which answers should be used from the questions."
  [question-set->answer free-text-questions]
  ;; The question/answers key does not exist outside of this function.
  (let [free-text-questions-with-inner-answers (map #(assoc % :question/answers (question-set->answer (:question/id %))) free-text-questions)
        answers (flatten (map (partial unpack-map-in-map :question/answers) free-text-questions-with-inner-answers))]
    (sort-by :answer/timestamp answers)))


;; previous name was "remove-answers-with-identical-user-and-questions-question-set-id"
(defn answers-with-distinct-ids
  "Takes a collection of `answers` as input. 
   It only keeps one answer for each question by comparing the 
   `:user/id`, `:question/id`, `:question-set/id`, and `:course-iteration/id` of every question. 
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
                           :question-set/id (:question-set/id (get answers-vec i)), :course-iteration/id (:course-iteration/id (get answers-vec i))}]
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
   Merges the question of the answer with the answer and returns the `:question/answer` 
   as a unnested map."
  [[answer]]
  (let [answer-unpacked-question-nested (update (merge answer (:answer/question answer)) :answer/answer first)
        answer-unpacked (select-keys answer-unpacked-question-nested [:user/id
                                                                      :question/statement :question/max-points :question/evaluation-criteria
                                                                      :answer/answer :answer/points :answer/id])]
    answer-unpacked))


(defn validate-incoming-correction
  "Takes a `correction` and a col of answers as input.
   Checks if the answer is 'valid' and returns the correction with points if it is valid
   and else the correction with an `:error` entry.
   
   Possible `:error` entries are:
   * `:no-fitting-answer`: `:question/max-points` in the `:answer/question` was empty.
   * `:correction-feedback-missing`: `:correction/feedback` was empty.
   * `:correction-points-missing`: `:correction/points` was empty.
   * `:invalid-points`: `:correction/points` was not a natural number.
   * `:exceeding-number-of-points`: `:correctino/points` was higher than the maximum question points."
  [correction fitting-answers]
  (if-not (first fitting-answers)
    (assoc correction :error :no-fitting-answer)
    (let [question-points (get-in (first fitting-answers) [:answer/question :question/max-points])]
      (cond
        (not question-points)
        (assoc correction :error :no-fitting-answer)

        (or (not (:correction/feedback correction)) (empty? (:correction/feedback correction)))
        (assoc correction :error :correction-feedback-missing)

        (or (not (:correction/points correction)) (empty? (:correction/points correction)))
        (assoc correction :error :correction-points-missing)

        (not (nat-int? (read-string (:correction/points correction))))
        (assoc correction :error :invalid-points)

        (> (read-string (:correction/points correction)) question-points)
        (assoc correction :error :exceeding-number-of-points)

        :else (update correction :correction/points read-string)))))


(defn add-correction-if-no-error
  "Takes a function as argument, taking an answer-id and a correction.
   If the correction has an error, the correction is returned, 
   otherwise `add-correction-fun` is called."
  [add-correction-fun answer-id correction]
  (if (:error correction)
    correction
    (add-correction-fun answer-id correction)))
