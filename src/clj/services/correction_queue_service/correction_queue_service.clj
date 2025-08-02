(ns services.correction-queue-service.correction-queue-service
  (:require
   [db]
   [services.correction-queue-service.p-correction-queue-service :refer [PCorrectionQueueService]]
   [views.question.question-view :as question-view]))


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

(extend CorrectionQueueService
  PCorrectionQueueService
  {:get-unassigned-answer-for-question get-unassigned-answer-for-question
   :get-assigned-answer-for-question get-assigned-answer-for-question
   :assign-answer-to-user assign-answer-to-user
   :get-all-assignments get-all-assignments
   :get-all-uncorrected-assignments-for-user-and-question get-all-uncorrected-assignments-for-user-and-question
   :get-correction-queue-statistics get-correction-queue-statistics})
