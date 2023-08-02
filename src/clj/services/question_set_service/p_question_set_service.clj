(ns services.question-set-service.p-question-set-service)


(defprotocol PQuestionSetService

  (get-all-question-sets
    [self]
    "Returns a collection of all available question-sets."))
