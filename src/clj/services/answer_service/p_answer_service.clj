(ns services.answer-service.p-answer-service)

(defprotocol PAnswerService
    
  (add-user-answer-to-question!
   [self user-id question-id answer]
   "Adds an answer in from of a string/string-vector to the database."))