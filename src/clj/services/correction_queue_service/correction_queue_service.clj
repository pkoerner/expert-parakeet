(ns services.correction-queue-service.correction-queue-service
  (:require
   [db]
   [services.correction-queue-service.p-correction-queue-service :refer [PCorrectionQueueService]]))


(deftype CorrectionQueueService
         [db])

(defn get-unassigned-answer-for-question [this question-id]
 (db/get-unassigned-answer-for-question (.db this) question-id))

(defn get-assigned-answer-for-question [this user-id question-id]
  (db/get-assigned-answer-for-question (.db this) user-id question-id))

(defn assign-answer-to-user [this user-id answer-id]
  (db/add-assignment! (.db this) user-id answer-id))


(defn get-all-assignments [this]
  (db/get-all-assignments (.db this)))

(defn get-all-uncorrected-assignments-for-user-and-question [this user-id question-id]
  (db/get-all-uncorrected-assignments-for-user-and-question (.db this) user-id question-id))

(defn get-correction-queue-statistics [this user-id question-id]
  [(db/get-answer-count (.db this) question-id)
   (db/get-correction-count (.db this) question-id)
   (db/get-correction-by-user-count (.db this) user-id question-id)])

(defn get-number-of-assigned-and-unassigned-answers [this user-id question-id]
  [(db/get-assigned-answer-count (.db this) user-id question-id)
  (db/get-unassigned-answer-count (.db this) question-id)])


(defn get-question-sets-for-overview-statistics [this user-id]
  (let [questions (db/get-questions-with-open-free-text-corrections (.db this) user-id)
        question-sets (->> questions
                           (map (fn [q]
                                  [(first (db/get-question-set-to-question (.db this) (:question/id q)))
                                   q]))
                           (remove (comp nil? first))
                           (group-by first)
                           (map (fn [[qs entries]]
                                  (assoc qs :question-set/questions (mapv second entries))))
                           (vec))]
    (map (fn [qs] (update qs :question-set/questions
                          #(map (fn [q]
                                  (let [question-id (q :question/id)
                                        [n-assigned n-unassigned] (get-number-of-assigned-and-unassigned-answers this user-id question-id)]
                                    (assoc q :n-assigned n-assigned :n-unassigned n-unassigned))) %)))
         question-sets)))

(extend CorrectionQueueService
  PCorrectionQueueService
  {:get-unassigned-answer-for-question get-unassigned-answer-for-question
   :get-assigned-answer-for-question get-assigned-answer-for-question
   :assign-answer-to-user assign-answer-to-user
   :get-all-assignments get-all-assignments
   :get-all-uncorrected-assignments-for-user-and-question get-all-uncorrected-assignments-for-user-and-question
   :get-correction-queue-statistics get-correction-queue-statistics
   :get-number-of-assigned-and-unassigned-answers get-number-of-assigned-and-unassigned-answers
   :get-question-sets-for-overview-statistics get-question-sets-for-overview-statistics})
