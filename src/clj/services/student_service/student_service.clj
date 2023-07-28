(ns services.student-service.student-service
  (:require
   [clojure.spec.alpha :as s]
   [db]
   [services.student-service.p-student-service :refer [PStudentService]]
   [domain]))

(deftype StudentService
         [])

(s/fdef get-all-question-sets
  :args (s/cat :self #(satisfies? PStudentService %) :user-id :user/id)
  :ret (s/coll-of (s/keys :req [:question-set/id])))

(defn get-all-question-sets-for-student
  [_, user-id]
  (domain/course-iterations-with-total-points
   (db/get-course-iterations-of-student user-id)
   (partial db/get-graded-answers-of-question-set user-id)))


(extend StudentService
  PStudentService
  {:get-all-question-sets-for-student get-all-question-sets-for-student})