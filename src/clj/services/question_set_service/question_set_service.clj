(ns services.question-set-service.question-set-service
  (:require
    [db]
    [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]))


;; todo replace all direct db calls and inject repositories
(deftype QuestionSetService
  []

  PQuestionSetService

  (get-all-question-sets [_] (db/get-all-question-sets)))
