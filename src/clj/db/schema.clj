(ns db.schema
  (:require
    [domain.spec]
    [provisdom.spectomic.core :as spectomic]))


(def question-schema
  (spectomic/datomic-schema
    [[:question/id {:db/unique :db.unique/identity
                    :db/index true}]
     :question/type ; optimize using :db.type/ref to enum type with :db/ident (https://docs.datomic.com/on-prem/best-practices.html#idents-for-enumerated-types)
     :question/question-statement
     :question/points
     :question/evaluation-criteria
     :question/possible-solutions
     :question/single-choice-solution
     :question/multiple-choice-solution]))


;; manche Felder bleiben leer (abhaengig vom Fragentyp)


(def answer-schema
  (spectomic/datomic-schema
    [[:answer/id {:db/unique :db.unique/identity
                  :db/index true}]
     :answer/user
     :answer/question
     :answer/answer
     :answer/points]))


(def correction-schema
  (spectomic/datomic-schema
    [:correction/corrector
     :correction/answer
     :corrector/feedback]))


(def question-set-schema
  (spectomic/datomic-schema
    [[:question-set/id {:db/unique :db.unique/identity
                        :db/index true}]
     :question-set/name
     :question-set/start
     :question-set/end
     :question-set/questions
     :question-set/passing-score]))


(def user-schema
  (spectomic/datomic-schema
    [[:user/id {:db/unique :db.unique/identity
                :db/index true}]
     :user/courses]))


(def class-schema
  (spectomic/datomic-schema
    [[:class/id {:db/unique :db.unique/identity
                 :db/index true}]
     :class/class-name
     :class/question-sets]))


(def course-schema
  (spectomic/datomic-schema
    [[:course/id {:db/unique :db.unique/identity
                  :db/index true}]
     :course/class
     :course/year
     :course/semester
     :course/question-sets]))


(def db-schema
  (concat question-schema answer-schema correction-schema question-set-schema user-schema class-schema course-schema))
