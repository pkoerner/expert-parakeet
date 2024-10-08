(ns domain.spec
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]))


(def question-types
  #{:question.type/free-text :question.type/single-choice :question.type/multiple-choice})


(def semesters
  #{:semester/winter :semester/summer})


(def user-roles
  #{:role/student :role/corrector :role/lecturer})


(s/def :general/non-blank-string (s/and string? (complement string/blank?)))


(s/def :question/id string?)
(s/def :question/type question-types)
(s/def :question/statement :general/non-blank-string)
(s/def :question/possible-solutions (s/coll-of ::solution :min-count 1 :distinct true :into #{}))
(s/def :question/correct-solutions (s/coll-of ::solution :distinct true :into #{}))
(s/def :question/evaluation-criteria string?)
(s/def :question/max-points nat-int?)
(s/def :question/categories (s/coll-of :general/non-blank-string :distinct true :into #{}))


(s/def :question/free-text-question
  (s/and
    (s/keys :req [:question/id
                  :question/type
                  :question/statement
                  :question/max-points
                  :question/evaluation-criteria
                  :question/categories])
    #(= (:question/type %) :question.type/free-text)))


(s/def :question/single-choice-question
  (s/and
    (s/keys :req [:question/id
                  :question/type
                  :question/statement
                  :question/max-points
                  :question/possible-solutions
                  :question/correct-solutions
                  :question/categories])
    #(= (:question/type %) :question.type/single-choice)
    #(= (count (:question/correct-solutions %)) 1)
    (fn [q]
      (every? #(some (partial = %) (:question/possible-solutions q))
              (:question/correct-solutions q)))))


(s/def :question/multiple-choice-question
  (s/and
    (s/keys :req [:question/id
                  :question/type
                  :question/statement
                  :question/max-points
                  :question/possible-solutions
                  :question/correct-solutions
                  :question/categories])
    #(= (:question/type %) :question.type/multiple-choice)
    (fn [q]
      (every? #(some (partial = %) (:question/possible-solutions q))
              (:question/correct-solutions q)))))


(s/def :question/question
  (s/or :free-text :question/free-text-question
        :single-choice :question/single-choice-question
        :multiple-choice :question/multiple-choice-question))


(s/def :solution/id string?)
(s/def :solution/statement string?)
(s/def ::solution (s/keys :req [:solution/id :solution/statement]))

(s/def :question-set/id :general/non-blank-string)
(s/def :question-set/name :general/non-blank-string)
(s/def :question-set/questions (s/coll-of :question/question))
(s/def :question-set/required-points nat-int?)


(s/def ::question-set
  (s/and
    (s/keys :req [:question-set/id
                  :question-set/name
                  :question-set/questions
                  :question-set/required-points])))


(s/def :course/id :general/non-blank-string)
(s/def :course/name :general/non-blank-string)
(s/def :course/questions (s/coll-of :question/question))
(s/def :course/question-sets (s/coll-of ::question-set))


(s/def :course/course
  (s/keys :req [:course/id
                :course/name
                :course/questions
                :course/question-sets]))


(s/def :course-iteration/id string?)
(s/def :course-iteration/course :course/course)
(s/def :course-iteration/year pos-int?)
(s/def :course-iteration/semester semesters)
(s/def :course-iteration/members (s/coll-of ::membership))
(s/def :course-iteration/question-sets (s/coll-of ::question-set))


(s/def :course-iteration/course-iteration
  (s/keys :req [:course-iteration/id
                :course-iteration/course
                :course-iteration/year
                :course-iteration/semester
                :course-iteration/members
                :course-iteration/question-sets]))


(s/def :user/id string?)
(s/def :user/github-id string?)


(s/def ::user
  (s/keys :req [:user/id
                :user/github-id]))


(s/def :membership/id string?)
(s/def :membership/user ::user)
(s/def :membership/role user-roles)


(s/def ::membership
  (s/keys :req [:membership/id
                :membership/user
                :membership/role]))


(s/def :answer/id string?)
(s/def :answer/question :question/question)
(s/def :answer/creator ::user)
(s/def :answer/selected-solutions (s/coll-of ::solution :min-count 1))
(s/def :answer/answer string?)


(s/def ::answer
  (s/keys :req [:answer/id
                :answer/question
                :answer/creator
                (or :answer/selected-solutions :answer/answer)]))


(s/def :correction/id string?)
(s/def :correction/corrector ::user) ; No distinction between autograding and human corrector
(s/def :correction/answer ::answer)
(s/def :correction/feedback string?)
(s/def :correction/points nat-int?)


(s/def ::correction
  (s/keys :req [:correction/id
                :correction/answer
                :correction/points]
          :opt [:correction/corrector
                :correction/feedback]))
