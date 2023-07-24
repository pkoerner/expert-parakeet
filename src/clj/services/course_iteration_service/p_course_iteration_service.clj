(ns services.course-iteration-service.p-course-iteration-service)


(defprotocol PCourseIterationService

  (create-course-iteration
    [self course-id year semester question-set-ids]
    "Creates a course-iteration entry in the database and returns a course-iteration map.")

  (validate-course-iteration
    [self course-id year semester question-set-ids]
    "Validates the values for the createion of a course-iteration. Returns a map of error keys with"))
