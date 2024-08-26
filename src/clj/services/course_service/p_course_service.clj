(ns services.course-service.p-course-service)


(defprotocol PCourseService

  (get-all-courses
    [self]
    "Returns a collection of all available courses.")

  (create-course
    [self course]
    "Creates a course entry in the database and returns a course map.")

  (validate-course
    [self course-form-data]
    "Validates the values for the creation of a course. Returns a map of error keys or the validated course."))
