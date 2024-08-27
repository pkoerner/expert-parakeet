(ns services.course-service.p-course-service)


(defprotocol PCourseService

  (get-all-courses
    [self]
    "Returns a collection of all available courses.")

  (create-course
    [self course-name]
    "Creates a course entry in the database and returns a course map.")

  (validate-course
    [self course-name]
    "Validates the values for the creation of a course. Returns a map of error keys.")
  
  (get-courses-of-user 
    [self user-id]
    "Get all courses that the logged in user is member of"))
