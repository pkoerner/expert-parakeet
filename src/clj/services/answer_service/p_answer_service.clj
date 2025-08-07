(ns services.answer-service.p-answer-service)


(defprotocol PAnswerService

  (add-user-answer-to-question!
    [self user-id question-id answer-or-solution-ids]
    "Adds an answer in form of a string or solution-id-vector to the database."))
