(ns services.question-set-service.question-set-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [domain]
    [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]
    [views.question-set.question-set-view :as view]))


;; todo replace all direct db calls and inject repositories
(deftype QuestionSetService
  [db])


;; (defn- get-course-id-from-iteration
;;  [db course-iteration-id]
;;  (-> (db/get-course-iteration-by-id db course-iteration-id)
;;      :course-iteration/course
;;      :course/id))


(s/fdef get-all-question-sets
        :args (s/cat :self #(satisfies? PQuestionSetService %))
        :ret (s/coll-of (s/keys :req [:question-set/id])))


(defn- get-all-question-sets
  [this]
  (db/get-all-question-sets (.db this)))


(s/fdef get-question-set-by-id
        :args (s/cat :self #(satisfies? PQuestionSetService %) :question-set-id string?)
        :ret (s/coll-of (s/keys :req [:question-set/id :question-set/questions])))


(defn get-question-set-by-id
  [this question-set-id]
  (db/get-question-set-by-id (.db this) question-set-id))


(defn- extract-question-sets-of-user
  [db user-id]
  (map
    #(-> % :course-iteration/question-sets)
    (db/get-course-iterations-of-student db user-id)))


(defn- extract-question-set-ids-of-user
  [db user-id]
  (apply concat (map
                  #(map :question-set/id %)
                  (extract-question-sets-of-user db user-id))))


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
  [this user-id question-set-id]
  (let [users-question-sets (extract-question-set-ids-of-user (.db this) user-id)
        error-map view/question-set-errors]
    (if (.contains users-question-sets question-set-id)
      (disj view/question-set-errors :not-assigned-to-question-set)
      error-map)))


(extend QuestionSetService
  PQuestionSetService
  {:get-all-question-sets get-all-question-sets
   :get-question-set-by-id get-question-set-by-id
   :validate-user-for-question-set validate-user-for-question-set})
