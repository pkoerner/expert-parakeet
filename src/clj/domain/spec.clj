(ns domain.spec
  (:require
   [clojure.spec.alpha :as s]))


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

(s/def ::question-set
  (s/keys :req [:question-set/id :question-set/name 
                :question-set/start :question-set/end
                :question-set/questions :question-set/passing-score]))


(s/def :class/id string?)
(s/def :class/class-name string?)
(s/def :class/question-sets (s/coll-of ::question-set))


(s/def ::class
  (s/keys :req [:class/id :class/class-name
                :class/question-sets]))


(s/def :course/id string?)
(s/def :course/class ::class)
(s/def :course/year pos-int?)
(s/def :course/semester string?)
(s/def :course/question-sets (s/coll-of ::question-set))


(s/def ::course
  (s/keys :req [:course/id :course/class
                :course/year :course/semester
                :course/question-sets]))


(s/def :user/id string?)
(s/def :user/courses (s/coll-of ::course))


(s/def ::user
  (s/keys :req [:user/id :user/courses]))


(s/def :answer/id string?)
(s/def :answer/user ::user)
(s/def :answer/question ::question)


(s/def :answer/answer
  (s/and (s/coll-of string?)))


(s/def :answer/points pos-int?)


(s/def ::answer
  (s/keys :req [:answer/user :answer/answer :answer/question]))


(s/def :correction/corrector ::user) ;; No distinction between autograding and human corrector
(s/def :correction/answer ::answer)
(s/def :corrector/feedback string?)

(s/def ::correction
  (s/keys :req [:correction/corrector :correction/answer :corrector/feedback]))




(s/def :fach/id string?)
(s/def :fach/fachtitel string?)


(s/def ::fach
  (s/keys :req [:fach/id :fach/fachtitel]))


(s/def :kurs/id string?)
(s/def :kurs/fach ::fach)
(s/def :kurs/jahr pos-int?)
(s/def :kurs/semester string?)
(s/def :kurs/tests (s/coll-of ::test))


(s/def ::kurs
  (s/keys :req [:kurs/id :kurs/fach
                :kurs/jahr :kurs/semester
                :kurs/tests]))

