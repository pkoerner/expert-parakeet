(ns services.course-iteration-service.p-course-iteration-service)


(defprotocol PCourseIterationService

  (create-course-iteration
    [self course-iteration]
    "Creates a course-iteration entry in the database and returns a course-iteration map.")

  (validate-course-iteration
    [self course-iteration-form-data]
    "Validates the values for the creation of a course-iteration. Returns a map of error keys or the validated course iteration.")

  (get-all-course-iterations
    [self]
    "Returns a collection of all available course iterations.")

  (get-all-course-iterations-for-user
    [self user-github-id]
    "Returns a collection of all available course iterations for a student.")

  (create-course-iteration-registration
    [self course-iteration-id user-id]
    "Register a user for a particular course iteration"))
