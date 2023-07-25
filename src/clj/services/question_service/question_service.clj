(ns services.question-service.question-service
  (:require
    [db]
    [services.question-service.p-question-service :refer [PQuestionService]]
    [views.question :as view]))


(deftype QuestionService
  [])


(defn get-question-by-id
  [_ question-id]
  (db/get-question-by-id question-id))


(defn validate-user-for-question
  " Checks if a user is assgined to a
requested question. If so an
empty error map is returned. Otherwise
an error-map with a specified error is returned. "
  [_ user-id question-id]
  (let [users-questions (db/get-question-ids-for-user user-id)
        error-map view/question-errors]
    (if (.contains users-questions {:question/id question-id})
      (dissoc view/question-errors :not-assigned-to-question)
      error-map)))


(extend QuestionService
  PQuestionService
  {:validate-user-for-question validate-user-for-question
   :get-question-by-id get-question-by-id})
