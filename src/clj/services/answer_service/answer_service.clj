(ns services.answer-service.answer-service
  (:require
   [db]
   [services.answer-service.p-answer-service :refer [PAnswerService]]))

(deftype AnswerService [db])

(defn add-user-answer-to-question!
 [this user-id question-id answer]
 (db/add-user-answer! (.db this) user-id question-id answer))

(extend AnswerService
  PAnswerService
  {:add-user-answer-to-question! add-user-answer-to-question!})