(ns db.schema
  (:require
    [clojure.spec.alpha :as s]
    [domain.spec]
    [provisdom.spectomic.core :as spectomic]))


(defn- to-ident
  [enum-value]
  {:db/ident enum-value})


(def question-type-schema
  (mapv to-ident domain.spec/question-types))


(def question-schema
  [#:db{:ident :question/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true}
   #:db{:ident :question/type
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}
   #:db{:ident :question/question-statement
        :valueType :db.type/string
        :cardinality :db.cardinality/one}
   #:db{:ident :question/points
        :valueType :db.type/double
        :cardinality :db.cardinality/one}
   #:db{:ident :question/evaluation-criteria
        :valueType :db.type/string
        :cardinality :db.cardinality/one}
   #:db{:ident :question/possible-solutions
        :valueType :db.type/string
        :cardinality :db.cardinality/many}
   #:db{:ident :question/single-choice-solution
        :valueType :db.type/string
        :cardinality :db.cardinality/one}
   #:db{:ident :question/multiple-choice-solution
        :valueType :db.type/string
        :cardinality :db.cardinality/many}
   #:db{:ident :question/categories
        :valueType :db.type/string
        :cardinality :db.cardinality/many}])


;; manche Felder bleiben leer (abhaengig vom Fragentyp)



(def solution-schema
  [#:db{:ident :solution/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true}
   #:db{:ident :solution/statement
        :valueType :db.type/string
        :cardinality :db.cardinality/one}])


(def answer-schema
  [#:db{:ident :answer/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true}
   #:db{:ident :answer/question
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}
   #:db{:ident :answer/creator
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}
   #:db{:ident :answer/selected-solutions
        :valueType :db.type/ref
        :cardinality :db.cardinality/many}
   #:db{:ident :answer/answer
        :valueType :db.type/string
        :cardinality :db.cardinality/one}])


(def correction-schema
  [#:db{:ident :correction/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true}
   #:db{:ident :correction/corrector
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}
   #:db{:ident :correction/answer
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}
   #:db{:ident :correction/feedback
        :valueType :db.type/string
        :cardinality :db.cardinality/one}
   #:db{:ident :correction/points
        :valueType :db.type/double
        :cardinality :db.cardinality/one}])


(def question-set-schema
  [#:db{:ident :question-set/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true}
   #:db{:ident :question-set/name
        :valueType :db.type/string
        :cardinality :db.cardinality/one}
   #:db{:ident :question-set/questions
        :cardinality :db.cardinality/many
        :valueType :db.type/ref}
   #:db{:ident :question-set/start
        :valueType :db.type/instant
        :cardinality :db.cardinality/one}
   #:db{:ident :question-set/end
        :valueType :db.type/instant
        :cardinality :db.cardinality/one}
   #:db{:ident :question-set/passing-score
        :valueType :db.type/double
        :cardinality :db.cardinality/one}])


(def user-roles-schema
  (mapv to-ident domain.spec/user-roles))


(def membership-schema
  [#:db{:ident :membership/user
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}
   #:db{:ident :membership/role
        :valueType :db.type/ref
        :cardinality :db.cardinality/one}])


(def user-schema
  [#:db{:ident :user/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External user id"}
   #:db{:ident :user/git-id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "GitHub user id, used for authentication"}])


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
  [#:db{:ident :course-iteration/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "External course iteration id"
        :unique :db.unique/identity
        :index true}
   #:db{:ident :course-iteration/course
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The course this course iteration belongs to"}
   #:db{:ident :course-iteration/year
        :valueType :db.type/long
        :cardinality :db.cardinality/one
        :doc "The year in which this course iteration is being held"}
   #:db{:ident :course-iteration/semester
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The semester in which this course iteration is being held"}
   #:db{:ident :course-iteration/members
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "The members (as membership references) of this course iteration"}
   #:db{:ident :course-iteration/question-sets
        :cardinality :db.cardinality/many
        :valueType :db.type/ref
        :doc "The question sets available in this course iteration for students to answer"}])


(def db-schema
  (concat question-type-schema
          question-schema
          solution-schema
          answer-schema
          correction-schema
          question-set-schema
          user-roles-schema
          membership-schema
          user-schema
          course-schema
          semester-schema
          course-iteration-schema))


;; override global :db/id schema that was set by spectomic (for internal use) because its predicate tries to lookup datomic
;; datomic is not on the classpath
;; because the spec is global datahike accidentally uses it when verifying the database schema
(s/def :db/id any?)
