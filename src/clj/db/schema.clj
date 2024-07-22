(ns db.schema
  (:require
    [clojure.spec.alpha :as s]
    [domain.spec]
    [provisdom.spectomic.core :as spectomic]))


(def question-schema
  (spectomic/datomic-schema
    [[:question/id {:db/unique :db.unique/identity
                    :db/index true}]
     :question/type ; optimize using :db.type/ref to enum type with :db/ident (https://docs.datomic.com/reference/best.html#idents-for-enumerated-types)
     :question/question-statement
     :question/points
     :question/evaluation-criteria
     :question/possible-solutions
     :question/single-choice-solution
     :question/multiple-choice-solution
     :question/categories]))


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


(def user-roles-schema
  (spectomic/datomic-schema
    [[:role/id {:db/unique :db.unique/identity
                :db/index true}]
     :role/course-iteration
     :role/name]))


(def user-schema
  (spectomic/datomic-schema
    [[:user/id {:db/unique :db.unique/identity
                :db/index true}]
     [:user/git-id {:db/unique :db.unique/identity}]
     :user/course-iterations]))


(def course-schema
  (spectomic/datomic-schema
    [[:course/id {:db/doc "External course id"
                  :db/unique :db.unique/identity
                  :db/index true}]
     [:course/course-name {:db/doc "Name of this course"}]
     [:course/questions {:db/doc "All questions owned by this course"}]
     [:course/question-sets {:db/doc "All question sets owned by this course, consisting out of questions owned by this course"}]]))


(def course-iteration-schema
  (spectomic/datomic-schema
    [[:course-iteration/id {:db/doc "External course iteration id"
                            :db/unique :db.unique/identity
                            :db/index true}]
     [:course-iteration/course {:db/doc "The course this course iteration belongs to"}]
     [:course-iteration/year {:db/doc "The year in which this course iteration is being held"}]
     [:course-iteration/semester {:db/doc "The semester in which this course iteration is being held"}]
     [:course-iteration/question-sets {:db/doc "The question sets available in this course iteration for students to answer"}]]))


(def db-schema
  (concat question-schema answer-schema correction-schema question-set-schema user-roles-schema user-schema course-schema course-iteration-schema))


;; override global :db/id schema that was set by spectomic (for internal use) because its predicate tries to lookup datomic
;; datomic is not on the classpath
;; because the spec is global datahike accidentally uses it when verifying the database schema
(s/def :db/id any?)
