(ns services.question-service.p-question-service)


(defprotocol PQuestionService

  (get-question-by-id
    [self question-id]
    "Returns a question from database referenced by an id.")

  (validate-user-for-question
    [self user-id question-id]
    "Checks if a user is assgined to a certain question."))
