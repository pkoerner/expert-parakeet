(ns services.question-set-service.p-question-set-service)


(defprotocol PQuestionSetService

  (get-all-question-sets
    [self]
    "Returns a collection of all available question-sets.")
  
  (get-all-question-sets-with-questions
    [self]
    "Returns a collection of all available question-sets and the corresponding questions.")

  (get-question-set-by-id
    [self question-set-id]
    "Returns a single question-set corresponding to an id.")

  (validate-user-for-question-set
    [self user-id question-set-id]
    "Checks in databse if user is assigned to a certain question-set."))
