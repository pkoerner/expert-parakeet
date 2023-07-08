(ns domain.spec
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as string]
            [util.time :as time]))

(s/def :general/non-blank-string (s/and string? (complement string/blank?)))


(s/def :question/id string?)
(s/def :question/type #{:question.type/free-text :question.type/single-choice :question.type/multiple-choice})
(s/def :question/question-statement string?)
(s/def :question/points int?)


(s/def :question/evaluation-criteria string?)


(s/def :question/question
  (s/and
    (s/keys :req [:question/id :question/type :question/question-statement :question/points
                  :question/evaluation-criteria])
    #(= (:question/type %) :question.type/free-text)))


(s/def :question/possible-solutions (s/coll-of string?))

(s/def :question/single-choice-solution string?)


(s/def :question/single-choice-question
  (s/and
    (s/keys :req [:question/id :question/type :question/question-statement :question/points
                  :question/possible-solutions :question/single-choice-solution])
    #(= (:question/type %) :question.type/single-choice)))


(s/def :question/multiple-choice-solution (s/coll-of string?))


(s/def :question/multiple-choice-question
  (s/and
    (s/keys :req [:question/id :question/type :question/question-statement :question/points
                  :question/possible-solutions :question/multiple-choice-solution])
    #(= (:question/type %) :question.type/multiple-choice)))


(s/def ::question
  (s/or :free-text :question/question ; text -> free-text
        :single-choice :question/single-choice-question
        :multiple-choice :question/multiple-choice-question))


(s/def :question-set/id string?)
(s/def :question-set/name string?)
(s/def :question-set/questions (s/coll-of ::question))


;; inst? checks for an input to be
;; of type java.util.Date.
(s/def :question-set/start inst?)
(s/def :question-set/end  inst?)
(s/def :question-set/passing-score nat-int?)


(s/def ::question-set
  (s/and
    (s/keys :req [:question-set/id :question-set/name
                  :question-set/start :question-set/end
                  :question-set/questions :question-set/passing-score])
    #(time/start-before-end? (:question-set/start %)
                             (:question-set/end %))))


;; TODO: remove comment once we moved to MA
;; old entity was called: fach
(s/def :course/id string?)
(s/def :course/course-name string?)
(s/def :course/question-sets (s/coll-of ::question-set))


(s/def ::course
  (s/keys :req [:course/id :course/course-name
                :course/question-sets]))


;; TODO: remove comment once we moved to MA
;; old entity was called: kurs
(s/def :course-iteration/id string?)
(s/def :course-iteration/course ::course)
(s/def :course-iteration/year pos-int?)
(s/def :course-iteration/semester string?)
(s/def :course-iteration/question-sets (s/coll-of ::question-set))


(s/def ::course-iteration
  (s/keys :req [:course-iteration/id :course-iteration/course
                :course-iteration/year :course-iteration/semester
                :course-iteration/question-sets]))


(s/def :user/id string?)
(s/def :user/course-iterations (s/coll-of ::course-iteration))


(s/def ::user
  (s/keys :req [:user/id :user/course-iterations]))


(s/def :answer/id string?)
(s/def :answer/user ::user)
(s/def :answer/question ::question)


(s/def :answer/answer
  (s/and (s/coll-of string?)))


(s/def :answer/points pos-int?)


(s/def ::answer
  (s/keys :req [:answer/user :answer/answer :answer/question]))


(s/def :correction/corrector ::user) ; No distinction between autograding and human corrector
(s/def :correction/answer ::answer)
(s/def :correction/feedback string?)


(s/def ::correction
  (s/keys :req [:correction/corrector :correction/answer :correction/feedback]))


