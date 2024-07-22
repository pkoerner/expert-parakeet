(ns db.schema
  (:require
    [clojure.spec.alpha :as s]
    [domain.spec]
    [provisdom.spectomic.core :as spectomic]))


(defn- to-ident
  [enum-value]
  {:db/ident enum-value})


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
  [#:db{:ident :course/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External course id"}
   #:db{:ident :course/name
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "Name of this course"}
   #:db{:ident :course/questions
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "All questions owned by this course"}
   #:db{:ident :course/question-sets
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "All question sets owned by this course, consisting out of questions owned by this course"}])


(def semester-schema
  (mapv to-ident domain.spec/semesters))


(def course-iteration-schema
  [#:db{:ident :course-iteration/id,
        :valueType :db.type/string,
        :cardinality :db.cardinality/one,
        :doc "External course iteration id",
        :unique :db.unique/identity,
        :index true}
   #:db{:ident :course-iteration/course,
        :valueType :db.type/ref,
        :cardinality :db.cardinality/one,
        :doc "The course this course iteration belongs to"}
   #:db{:ident :course-iteration/year,
        :valueType :db.type/long,
        :cardinality :db.cardinality/one,
        :doc "The year in which this course iteration is being held"}
   #:db{:ident :course-iteration/semester,
        :valueType :db.type/ref,
        :cardinality :db.cardinality/one,
        :doc "The semester in which this course iteration is being held"}
   #:db{:ident :course-iteration/question-sets,
        :cardinality :db.cardinality/many,
        :valueType :db.type/ref,
        :doc "The question sets available in this course iteration for students to answer"}])


(def db-schema
  (concat question-schema answer-schema correction-schema question-set-schema user-roles-schema user-schema course-schema semester-schema course-iteration-schema))


;; override global :db/id schema that was set by spectomic (for internal use) because its predicate tries to lookup datomic
;; datomic is not on the classpath
;; because the spec is global datahike accidentally uses it when verifying the database schema
(s/def :db/id any?)
