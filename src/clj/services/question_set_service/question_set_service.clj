(ns services.question-set-service.question-set-service
  (:require
   [clojure.spec.alpha :as s]
   [db]
   [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]
   [domain]))


;; todo replace all direct db calls and inject repositories
(deftype QuestionSetService
  [db])


(s/fdef get-all-question-sets
  :args (s/cat :self #(satisfies? PQuestionSetService %))
  :ret (s/coll-of (s/keys :req [:question-set/id])))


(defn- get-all-question-sets
  [this]
  (db/get-all-question-sets (.db this)))

(s/fdef get-all-question-sets
  :args (s/cat :self #(satisfies? PQuestionSetService %) :user-id :user/id)
  :ret (s/coll-of (s/keys :req [:question-set/id])))

(defn- get-all-course-iterations-for-student
  [this, user-id]
  (domain/course-iterations-with-total-points
   (db/get-course-iterations-of-student (.db this) user-id)
   (partial db/get-graded-answers-of-question-set user-id)))


(extend QuestionSetService
  PQuestionSetService
  {:get-all-question-sets get-all-question-sets
   :get-all-course-iterations-for-student get-all-course-iterations-for-student})
