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
     :correction/feedback]))


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
     :user/git-id
     :user/course-iterations]))


(def course-schema
  (spectomic/datomic-schema
    [[:course/id {:db/unique :db.unique/identity
                  :db/index true}]
     :course/course-name
     :course/question-sets]))


(def course-iteration-schema
  (spectomic/datomic-schema
    [[:course-iteration/id {:db/unique :db.unique/identity
                            :db/index true}]
     :course-iteration/course
     :course-iteration/year
     :course-iteration/semester
     :course-iteration/question-sets]))


(def db-schema
  (concat question-schema answer-schema correction-schema question-set-schema user-schema course-schema course-iteration-schema))
