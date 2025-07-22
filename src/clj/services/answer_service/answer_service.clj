(ns services.answer-service.answer-service
  (:require
    [db]
    [services.answer-service.p-answer-service :refer [PAnswerService]]))


(deftype AnswerService
  [db])


(defn add-user-answer-to-question!
  [this user-id question-id answer-or-solution-ids]
  (db/add-user-answer! (.db this) user-id question-id answer-or-solution-ids))

(defn get-unassigned-answer-for-question
  [this question-id]
  (first (db/get-all-answers (.db this)))) ; TODO: Implement Method correctly

(defn get-assigned-answer-for-question
  [this question-id]
  (first (db/get-all-answers (.db this)))) ; TODO: Implement Method correctly

(extend AnswerService
  PAnswerService
  {:add-user-answer-to-question! add-user-answer-to-question!
   :get-unassigned-answer-for-question get-unassigned-answer-for-question
   :get-assigned-answer-for-question get-assigned-answer-for-question})
