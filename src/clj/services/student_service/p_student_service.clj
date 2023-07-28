(ns services.student-service.p-student-service)

(defprotocol PStudentService

  (get-all-question-sets-for-student
    [self, user-id]
    "Returns a collection of all available course iterations with the question-sets for a student."))
