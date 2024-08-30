(ns services.course-iteration-service.p-course-iteration-service)


(defprotocol PCourseIterationService

  (create-course-iteration
    [self course-id year semester question-set-ids]
    "Creates a course-iteration entry in the database and returns a course-iteration map.")

  (validate-course-iteration
    [self course-id year semester question-set-ids]
    "Validates the values for the creation of a course-iteration. Returns a map of error keys with")

  (get-all-course-iterations-for-user
    [self user-id]
    "Returns a collection of all available course iterations with the course-iterations for a student.")

  (get-all-course-iterations
    [self]
    "Return a list of all course iterations")

  (get-role-of-user 
   [self course-id user-id] 
   "Return the roles of a user in a course")
   
  (add-user-to-course-iteration 
   [self course-id user-id role]
   "Creates a membership and adds it to the course-iteration
    Returns the newly created membership")

  (remove-user-from-course-iteration 
   [self course-iteration-id user-id]
   "Removes the given user from the course-iteration and returns a :role/none back"))


