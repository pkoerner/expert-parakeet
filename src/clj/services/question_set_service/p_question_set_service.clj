(ns services.question-set-service.p-question-set-service)


(defprotocol PQuestionSetService

  (get-all-question-sets
    [self]
    "Returns a collection of all available question-sets.")
  
  (get-all-question-sets-for-student
   [self, user-id]
   "Returns a collection of all available course iterations with the question-sets for a student."))  