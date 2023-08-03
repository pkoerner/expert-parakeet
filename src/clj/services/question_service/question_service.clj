(ns services.question-service.question-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.question-service.p-question-service :refer [PQuestionService]]
    [views.question.question-view :as view]))


(deftype QuestionService
  [db])


(s/fdef get-question-by-id
        :args (s/cat :self #(satisfies? PQuestionService %) :question-id string?)
        :ret  (s/keys :req [:question/id
                            :question/question-statement
                            :question/points
                            :question/type]))


(defn get-question-and-possible-solutions-by-id
  [this question-id]
  (db/get-question-and-possible-solutions-by-id (.db this) question-id))


(s/fdef validate-user-for-question
        :args (s/cat :self #(satisfies? PQuestionService %)
                     :user-id :user/id
                     :question-id :question/id)
        :ret (s/coll-of keyword?))


(defn- get-question-ids-for-user
  [db user-id]
  (db/get-question-ids-for-user db user-id))


(defn validate-user-for-question
  " Checks if a user is assgined to a
requested question. If so an
empty error map is returned. Otherwise
an error-set with a specified error is returned. "
  [this user-id question-id]
  (let [users-questions (get-question-ids-for-user (.db this) user-id)
        error-set view/question-errors]
    (if (.contains users-questions {:question/id question-id})
      (disj view/question-errors :not-assigned-to-question)
      error-set)))


(extend QuestionService
  PQuestionService
  {:validate-user-for-question validate-user-for-question
   :get-question-by-id get-question-and-possible-solutions-by-id})
