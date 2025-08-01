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

(defn get-correction-statistics [this question-id] [20 12 1]) ; TODO: Implement

(defn get-all-assignments [this]
  (db/get-all-assignments (.db this)))

(defn get-all-uncorrected-assignments-for-user-and-question [this user-id question-id]
  (db/get-all-uncorrected-assignments-for-user-and-question (.db this) user-id question-id))

(extend CorrectionQueueService
  PCorrectionQueueService
  {:get-unassigned-answer-for-question get-unassigned-answer-for-question
   :get-assigned-answer-for-question get-assigned-answer-for-question
   :assign-answer-to-user assign-answer-to-user
   :get-correction-statistics get-correction-statistics
   :get-all-assignments get-all-assignments
   :get-all-uncorrected-assignments-for-user-and-question get-all-uncorrected-assignments-for-user-and-question})
