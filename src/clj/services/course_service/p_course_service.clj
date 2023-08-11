(ns services.course-service.p-course-service)


(defprotocol PCourseService

  (get-all-courses
    [self]
    "Returns a collection of all available courses."))
