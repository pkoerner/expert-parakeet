(ns services.question-set-service.question-set-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]
    [views.question-set :as view]))


;; todo replace all direct db calls and inject repositories
(deftype QuestionSetService
  [])


(s/fdef get-all-question-sets
        :args (s/cat :self #(satisfies? PQuestionSetService %))
        :ret (s/coll-of (s/keys :req [:question-set/id])))


(defn get-all-question-sets
  [_]
  (db/get-all-question-sets))


(s/fdef get-question-set-by-id
        :args (s/cat :self #(satisfies? PQuestionSetService %) :question-set-id string?)
        :ret (s/coll-of (s/keys :req [:question-set/id :question-set/questions])))


(defn get-question-set-by-id
  [_ question-set-id]
  (db/get-question-set-by-id question-set-id))


(defn- extract-question-sets-of-user
  [user-id]
  (map
    #(-> % :course-iteration/question-sets)
    (db/get-course-iterations-of-student user-id)))


(defn- extract-question-set-ids-of-user
  [user-id]
  (apply concat (map
                  #(map :question-set/id %)
                  (extract-question-sets-of-user user-id))))


(s/fdef validate-user-for-question-set
        :args (s/cat :self #(satisfies? PQuestionSetService %)
                     :user-id :user/id
                     :question-set-id :question-set/id)
        :ret (s/coll-of keyword?))


(defn validate-user-for-question-set
  "Checks if a user is assgined to a
   requested question set. If so an
   empty error map is returned. Otherwise
   an error-map with a specified error is returned."
  [_ user-id question-set-id]
  (let [users-question-sets (extract-question-set-ids-of-user user-id)
        error-map view/question-set-errors]
    (if (.contains users-question-sets question-set-id)
      (disj view/question-set-errors :not-assigned-to-question-set)
      error-map)))


(extend QuestionSetService
  PQuestionSetService
  {:get-all-question-sets get-all-question-sets
   :get-question-set-by-id get-question-set-by-id
   :validate-user-for-question-set validate-user-for-question-set})
