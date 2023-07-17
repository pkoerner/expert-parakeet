(ns services.course-service.course-service
  (:require
    [db]
    [services.course-service.p-course-service :refer [PCourseService]]))


;; todo replace all direct db calls and inject repositories
(deftype CourseService
  []

  PCourseService

  (get-all-courses [_] (db/get-all-courses)))
