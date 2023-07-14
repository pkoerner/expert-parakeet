(ns services.question-set-service
   (:require
    [db]))

(defn extract-question-set-name
  [question-set-id]
  (:question-set/name
   (db/get-question-set-by-id question-set-id)))


(defn extract-question-from-question-set
  [question-set-id]
  (:question-set/questions
   (db/get-question-set-by-id question-set-id)))


(defn extract-question-points-from-question
  [question]
  (:question/points question))


(defn extract-question-id-from-question
  [question]
  (:question/id question))


(defn extract-question-statement-from-question
  [question]
  (:question/question-statement question))