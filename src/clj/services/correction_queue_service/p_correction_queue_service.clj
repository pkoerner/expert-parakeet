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

  (get-all-assignments
    [self]
    "Returns all assignments currently in database.")

  (get-all-uncorrected-assignments-for-user-and-question
    [this user-id question-id]
    "Returns all uncorrected assignemts for this user and question.")

  (get-correction-queue-statistics
    [this user-id question-id]
    "Returns a 3-tuple consisting of the total number of answers, corrections and corrections by the user for this question")

  (get-number-of-assigned-and-unassigned-answers
    [this user-id question-id]
    "Returns tupel of two numerical values, the first representing the number of uncorrected answers assigned to this user, the second the number of uncorrected and unassigned answers to this question.")

  (get-question-sets-for-overview-statistics
    [this user-id]
    "Returns question sets containing only the free-text questions.
     Questions that have no uncorrected answers associated to them are filtered out, as are question-sets where there is no question associated after filtering.
     Each question additionally contains the number of uncorrected answers assigned to this user (key :n-assigned) and the number of uncorrected and unassigned answers to this question (key :n-unassigned)."))
