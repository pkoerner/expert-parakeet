(ns services.question-set-service.question-set-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [domain]
    [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]))


;; todo replace all direct db calls and inject repositories
(deftype QuestionSetService
  [db])


(s/fdef get-all-question-sets
        :args (s/cat :self #(satisfies? PQuestionSetService %))
        :ret (s/coll-of (s/keys :req [:question-set/id])))


(defn- get-all-question-sets
  [this]
  (db/get-all-question-sets (.db this)))


(extend QuestionSetService
  PQuestionSetService
  {:get-all-question-sets get-all-question-sets})
