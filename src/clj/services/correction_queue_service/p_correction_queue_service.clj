(ns services.correction-queue-service.p-correction-queue-service)


(defprotocol PCorrectionQueueService

  (get-unassigned-answer-for-question
    [self question-id]
    "Returns an answer that is not corrected and not assigned.")

  (get-assigned-answer-for-question
    [self user-id question-id]
    "Returns an answer that is assigned to the user and not corrected.")
  
  (assign-answer-to-user
    [self user-id answer-id]
    "Adds an assignment of the user to the question into the database.")
  
  (get-correction-statistics
    [self question-id]
    "Returns 3-tuple with stats.")
  
  (get-all-assignments
    [self]
    "Returns all assignments currently in database.")
  )
