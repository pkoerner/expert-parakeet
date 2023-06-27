(ns db.schema
  (:require
    [domain.spec]
    [provisdom.spectomic.core :as spectomic]))


(def frage-schema
  (spectomic/datomic-schema
    [[:frage/id {:db/unique :db.unique/identity
                 :db/index true}]
     :question/type ; optimize using :db.type/ref to enum type with :db/ident (https://docs.datomic.com/on-prem/best-practices.html#idents-for-enumerated-types)
     :question/question-statement
     :question/points
     :question/evaluation-criteria
     :question/possible-solutions
     :question/single-choice-solution
     :question/multiple-choice-solution]))


;; manche Felder bleiben leer (abhaengig vom Fragentyp)


(def antwort-schema
  (spectomic/datomic-schema
    [[:answer/id {:db/unique :db.unique/identity
                   :db/index true}]
     :answer/user
     :answer/question
     :answer/answer
     :answer/points]))


(def korrektur-schema
  (spectomic/datomic-schema
    [:correction/corrector
     :correction/answer
     :corrector/feedback]))


(def test-schema
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


(def fach-schema
  (spectomic/datomic-schema
    [[:class/id {:db/unique :db.unique/identity
                :db/index true}]
     :class/class-name
     :class/question-sets]))


(def kurs-schema
  (spectomic/datomic-schema
    [[:course/id {:db/unique :db.unique/identity
                :db/index true}]
     :course/class
     :course/year
     :course/semester
     :course/question-sets]))


(def schema
  (concat frage-schema antwort-schema korrektur-schema test-schema user-schema fach-schema kurs-schema))
