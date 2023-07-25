(ns services.question-service.question-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.question-service.p-question-service :refer [PQuestionService]]
    [views.question :as view]))


(deftype QuestionService
  [])


(s/fdef get-question-by-id
        :args (s/cat :self #(satisfies? PQuestionService %) :question-id string?)
        :ret  (s/keys :req [:question/id
                            :question/question-statement
                            :question/points
                            :question/type]))


(defn get-question-by-id
  [_ question-id]
  (db/get-question-by-id question-id))


(s/fdef validate-user-for-question
  :args (s/cat :self #(satisfies? PQuestionService %)
               :user-id :user/id
               :question-id :question/id)
  :ret (s/coll-of keyword?))


(defn validate-user-for-question
  " Checks if a user is assgined to a
requested question. If so an
empty error map is returned. Otherwise
an error-set with a specified error is returned. "
  [_ user-id question-id]
  (let [users-questions (db/get-question-ids-for-user user-id)
        error-set view/question-errors]
    (if (.contains users-questions {:question/id question-id})
      (disj view/question-errors :not-assigned-to-question)
      error-set)))


(extend QuestionService
  PQuestionService
  {:validate-user-for-question validate-user-for-question
   :get-question-by-id get-question-by-id})
