(ns services.question-set-service.question-set-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]))


;; todo replace all direct db calls and inject repositories
(deftype QuestionSetService
  [])


(s/fdef get-all-question-sets
        :args (s/cat :self #(satisfies? PQuestionSetService %))
        :ret (s/coll-of (s/keys :req [:question-set/id])))


(defn get-all-question-sets
  [_]
  (db/get-all-question-sets db/db))


(extend QuestionSetService
  PQuestionSetService
  {:get-all-question-sets get-all-question-sets})
