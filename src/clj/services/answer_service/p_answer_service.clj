(ns services.answer-service.p-answer-service)


(defprotocol PAnswerService

  (add-user-answer-to-question!
    [self user-id question-id answer-or-solution-ids]
    "Adds an answer in form of a string or solution-id-vector to the database.")
  
  (get-unassigned-answer-for-question
    [self question-id]
    "Returns one unassigned, uncorrected answer.")
  
  (get-assigned-answer-for-question
   [self question-id]
   "Returns one uncorrected answer that is assigned to the current user.")
  )
