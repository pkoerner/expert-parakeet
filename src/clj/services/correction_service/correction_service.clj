(ns services.correction-service.correction-service
  (:require
   [db]
   [services.correction-service.p-correction-service :refer [PCorrectionService]]))

(deftype CorrectionService
         [db])

(defn perform-auto-correction
  "Returns the number of points assigned to a single or multiple choice
   question if the answer is correct. If the answer diviates from
   the possible-solutions zero ponts are returned."
  [this answer-id]
  (let [answer (first (db/get-answers-for-auto-correction (.db this) answer-id))]
    (println answer)
    (if (empty? answer)
      (identity 1)
      (cond
        (contains? (answer :answer/question) :question/single-choice-solution)
        (if (= (first (answer :answer/answer))
               (get-in answer [:answer/question :question/single-choice-solution]))
          (get-in answer [:answer/question :question/points])
          (identity 0))
        (contains? (answer :answer/question) :question/multiple-choice-solution)
        (if (= (answer :answer/answer)
               (get-in answer [:answer/question :question/multiple-choice-solution]))
          (get-in answer [:answer/question :question/points])
          (identity 0))))))


(defn add-auto-correction-to-answer!
  [this answer-id]
  (db/add-correction! (.db this) answer-id {:corrector/id "2"
                                            :correction/points (perform-auto-correction (.db this) answer-id)
                                            :correction/feedback "feedback"}))

(extend CorrectionService
  PCorrectionService
  {:add-user-answer-to-question! add-auto-correction-to-answer!
   :perform-auto-correction perform-auto-correction})