(ns services.course-service.course-service
  (:require
    [clojure.spec.alpha :as s]
    [db]
    [services.course-service.p-course-service :refer [PCourseService]]))


;; todo replace all direct db calls and inject repositories
(deftype CourseService
  [])


(s/fdef get-all-courses
        :args (s/cat :self #(satisfies? PCourseService %))
        :ret (s/coll-of (s/keys :req [:course/id :course/course-name])))


(defn get-all-courses
  [_]
  (db/get-all-courses))


(extend CourseService
  PCourseService
  {:get-all-courses get-all-courses})
