(ns services.correction-service.p-correction-service)

(defprotocol PCorrectionService
  (add-auto-correction-to-answer!
    [this answer-id]
    " Add an automatic correction to an answer if the answered question-type
was either single- or multiple-choics. ")
  (perform-auto-correction
    [this answer-id]
    " Returns the number of points assigned to a single or multiple choice
question if the answer is correct. If the answer diviates from
the possible-solutions zero ponts are returned. "))