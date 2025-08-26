(ns db.schema
  (:require
    [domain.spec]))


(defn- to-ident
  [enum-value]
  {:db/ident enum-value})


(def ident-pull
  [:db/ident])


(def user-pull
  [:user/id
   :user/github-id])


(def user-schema
  [#:db{:ident :user/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External user id"}
   #:db{:ident :user/github-id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "GitHub user id, used for authentication"}])


(def user-role-pull ident-pull)


(def user-role-schema
  (mapv to-ident domain.spec/user-roles))


(def membership-pull
  [:membership/id
   {:membership/user user-pull}
   {:membership/role user-role-pull}])


(def membership-schema
  [#:db{:ident :membership/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External membership id"}
   #:db{:ident :membership/user
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The user of this membership relation"}
   #:db{:ident :membership/role
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The role the given user has in a course iteration"}])


(def solution-pull
  [:solution/id
   :solution/statement])


(def solution-schema
  [#:db{:ident :solution/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External solution id"}
   #:db{:ident :solution/statement
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "Solution statement"}])


(def question-type-pull ident-pull)


(def question-type-schema
  (mapv to-ident domain.spec/question-types))


(def question-slim-pull
  [:question/id
   {:question/type question-type-pull}
   :question/statement
   :question/max-points])


(def question-pull
  (conj question-slim-pull
        :question/evaluation-criteria
        {:question/possible-solutions solution-pull}
        {:question/correct-solutions solution-pull}
        [:question/categories :default []]))


(def question-schema
  [#:db{:ident :question/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External question id"}
   #:db{:ident :question/type
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "Question type (enum value)"}
   #:db{:ident :question/statement
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "Question statement"}
   #:db{:ident :question/max-points
        :valueType :db.type/long
        :cardinality :db.cardinality/one
        :doc "Maximum points that can be achieved"}
   #:db{:ident :question/evaluation-criteria
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "Optional evaluation criteria for manual correction"}
   #:db{:ident :question/possible-solutions
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "References all possible solutions for single/multiple-choice questions"}
   #:db{:ident :question/correct-solutions
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "References the correct solution(s) for single/multiple-choice questions"}
   #:db{:ident :question/categories
        :valueType :db.type/string
        :cardinality :db.cardinality/many
        :doc "Categories/Tags for this question"}])


(def answer-slim-pull
  [:answer/id
   {:answer/question question-slim-pull}
   {:answer/creator user-pull}
   {:answer/selected-solutions solution-pull}
   :answer/answer])


(def answer-pull
  [:answer/id
   {:answer/question question-pull}
   {:answer/creator user-pull}
   {:answer/selected-solutions solution-pull}
   :answer/answer])


(def answer-schema
  [#:db{:ident :answer/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External answer id"}
   #:db{:ident :answer/question
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The answered question"}
   #:db{:ident :answer/creator
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The creator of this answer"}
   #:db{:ident :answer/selected-solutions
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "The selected solution(s), mutually exclusive with :answer/answer"}
   #:db{:ident :answer/answer
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "The free text answer, mutually exclusve with :answer/selected-solutions"}])


(def correction-slim-pull
  [:correction/id
   {:correction/corrector user-pull}
   {:correction/answer answer-slim-pull}
   :correction/feedback
   :correction/points])


(def correction-pull
  [:correction/id
   {:correction/corrector user-pull}
   {:correction/answer answer-pull}
   :correction/feedback
   :correction/points])


(def correction-schema
  [#:db{:ident :correction/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External correction id"}
   #:db{:ident :correction/corrector
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The corrector (optional of automatic corrections)"}
   #:db{:ident :correction/answer
        :valueType :db.type/ref
        :cardinality :db.cardinality/one
        :doc "The referenced answer"}
   #:db{:ident :correction/feedback
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "The feedback text for the student (optional for automatic corrections)"}
   #:db{:ident :correction/points
        :valueType :db.type/long
        :cardinality :db.cardinality/one
        :doc "The points given by the correction"}])


(def question-set-no-questions-pull
  [:question-set/id
   :question-set/name
   ;; no questions
   :question-set/required-points])


(def question-set-slim-pull
  [:question-set/id
   :question-set/name
   {:question-set/questions question-slim-pull}
   :question-set/required-points])


(def question-set-pull
  [:question-set/id
   :question-set/name
   {:question-set/questions question-pull}
   :question-set/required-points])


(def question-set-schema
  [#:db{:ident :question-set/id
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :unique :db.unique/identity
        :index true
        :doc "External question set id"}
   #:db{:ident :question-set/name
        :valueType :db.type/string
        :cardinality :db.cardinality/one
        :doc "The name of this question set"}
   #:db{:ident :question-set/questions
        :cardinality :db.cardinality/many
        :valueType :db.type/ref
        :doc "The questions contained in this question set"}
   #:db{:ident :question-set/required-points
        :valueType :db.type/long
        :cardinality :db.cardinality/one
        :doc "The points required for the student to pass"}])


(def course-slim-pull
  [:course/id
   :course/name
   {:course/question-sets question-set-no-questions-pull}
   ;; no questions for slim pull
   ])


(def course-pull
  [:course/id
   :course/name
   {:course/questions question-pull}
   {:course/question-sets question-set-pull}])


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


(def semester-pull ident-pull)


(def semester-schema
  (mapv to-ident domain.spec/semesters))


(def course-iteration-very-slim-pull
  [:course-iteration/id
   {:course-iteration/course course-slim-pull}
   :course-iteration/year
   {:course-iteration/semester semester-pull}
   ;; no members, no registrations and no question sets
   ])


(def course-iteration-slim-pull
  [:course-iteration/id
   {:course-iteration/course course-slim-pull}
   :course-iteration/year
   {:course-iteration/semester semester-pull}
   ;; no members and no registrations
   {:course-iteration/question-sets question-set-no-questions-pull}])


(def course-iteration-pull
  [:course-iteration/id
   {:course-iteration/course course-slim-pull}
   :course-iteration/year
   {:course-iteration/semester semester-pull}
   {:course-iteration/members membership-pull}
   {:course-iteration/registrations user-pull}
   {:course-iteration/question-sets question-set-slim-pull}])


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
        :doc "The semester in which this course iteration is being held (enum value)"}
   #:db{:ident :course-iteration/members
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "The members (as membership references) of this course iteration"}
   #:db{:ident :course-iteration/registrations
        :valueType :db.type/ref
        :cardinality :db.cardinality/many
        :doc "The users who want to register for this course iteration"}
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
          user-role-schema
          membership-schema
          user-schema
          course-schema
          semester-schema
          course-iteration-schema))
