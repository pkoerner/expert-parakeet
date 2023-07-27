(ns services.question-service.p-question-service)


(defprotocol PQuestionService

  (create-question!
    [self question]
    "Creates a course-iteration entry in the database and returns a course-iteration map.")

  (get-question-categories
    [self]
    "Returns a collection of all `:question/categories`.")

  (validate-question
    [self
     question-statement achivable-points type
     possible-solutions single-choice-solution multiple-choice-solution
     evaluation-criteria
     categories]
    "Takes all possible values for a question as arguments and validates them.
     If there was no parsing/validation error, a valid question map is returned.
     If there were parsing/validation errors, a map is returned that atleast contains an `:error` key 
     mapped to a map of keys from the :question namespace to `str` error messages."))
