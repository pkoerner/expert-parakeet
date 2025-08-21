(ns db.xss-dummy-data)


;; in production the ids are nano-ids, therefore an id is stored
;; as a string. For readability reasons we leave ids as strings
;; in the dummy data


(def xss-payload "<script>alert('XSS')</script>")

(def id-counter (atom {}))


(defn- gen-id!
  [key]
  (str (get (swap! id-counter update key #(if (nil? %)
                                            1
                                            (inc %)))
            key)))


(defn- db-ref
  [attr m]
  [attr (get m attr)])


(defn- db-refs
  [attr coll]
  (->> coll
       (filter #(contains? % attr))
       (mapv (partial db-ref attr))))


(defn- member
  [user role]
  {:membership/id (gen-id! :membership)
   :membership/user (db-ref :user/id user)
   :membership/role role})


(defn- text-question
  [question-statement max-points categories evaluation-criteria]
  {:question/id (gen-id! :question)
   :question/type :question.type/free-text
   :question/statement question-statement
   :question/evaluation-criteria evaluation-criteria
   :question/max-points max-points
   :question/categories (vec categories)})


(defn- solution
  [statement]
  {:solution/id (gen-id! :solution)
   :solution/statement statement})


(defn- choice-question
  [question-statement max-points categories correct-solutions & other-solutions]
  (let [base {:question/id (gen-id! :question)
              :question/statement question-statement
              :question/max-points max-points
              :question/categories (vec categories)}]
    (if (string? correct-solutions)
      (let [correct-solution (solution correct-solutions)
            other-solutions (map solution other-solutions)
            all-solutions (list* correct-solution other-solutions)
            possible-solutions (db-refs :solution/id all-solutions)
            correct-solutions (db-refs :solution/id [correct-solution])]
        (vec (concat all-solutions [(merge base {:question/type :question.type/single-choice
                                                 :question/possible-solutions possible-solutions
                                                 :question/correct-solutions correct-solutions})])))
      (let [correct-solutions (map solution correct-solutions)
            other-solutions (map solution other-solutions)
            all-solutions (concat correct-solutions other-solutions)
            possible-solutions (db-refs :solution/id all-solutions)
            correct-solutions (db-refs :solution/id correct-solutions)]
        (vec (concat all-solutions [(merge base {:question/type :question.type/multiple-choice
                                                 :question/possible-solutions possible-solutions
                                                 :question/correct-solutions correct-solutions})]))))))


(defn- answer
  [creator question-or-question-with-solutions text-answer-or-solution-indices]
  (let [base {:answer/id (gen-id! :answer)
              :answer/creator (db-ref :user/id creator)}]
    (if (string? text-answer-or-solution-indices)
      (merge base {:answer/question (db-ref :question/id question-or-question-with-solutions)
                   :answer/answer text-answer-or-solution-indices})
      (merge base {:answer/question (db-ref :question/id (last question-or-question-with-solutions))
                   :answer/selected-solutions (->> text-answer-or-solution-indices
                                                   (map (partial get question-or-question-with-solutions))
                                                   (db-refs :solution/id))}))))


(defn- correction
  [corrector answer points feedpack]
  {:correction/id (gen-id! :correction)
   :correction/answer (db-ref :answer/id answer)
   :correction/corrector (db-ref :user/id corrector)
   :correction/feedback feedpack
   :correction/points points})


(def q-text
  (text-question xss-payload
                 3 [xss-payload]
                 xss-payload))


(def q-choice
  (choice-question xss-payload
                   1 [xss-payload]
                   xss-payload xss-payload))


(def questions-xss
  `[~q-text
    ~@q-choice])


(def questions
  (vec (concat questions-xss)))


(def question-set-fp
  {:question-set/id (gen-id! :question-set)
   :question-set/name xss-payload
   :question-set/questions (db-refs :question/id questions-xss)})


(def question-sets
  [question-set-fp])


(def course-fp
  {:course/id (gen-id! :course)
   :course/name xss-payload
   :course/questions (db-refs :question/id questions-xss)
   :course/question-sets (db-refs :question-set/id [question-set-fp])})


(def courses
  [course-fp])


(def user1-student
  {:user/id (gen-id! :user)
   :user/github-id (str "1" xss-payload)})


(def user2-not-in-course
  {:user/id (gen-id! :user)
   :user/github-id (str "2" xss-payload)})


(def user3-corrector
  {:user/id (gen-id! :user)
   :user/github-id (str "3" xss-payload)})


(def users
  [user1-student
   user2-not-in-course
   user3-corrector])


(def course-it-fp-members
  (mapv (partial apply member) [[user1-student :role/student]
                                [user3-corrector :role/corrector]]))


(def course-it-fp
  {:course-iteration/id (gen-id! :course-iteration)
   :course-iteration/course (db-ref :course/id course-fp)
   :course-iteration/year 2022
   :course-iteration/semester :semester/winter
   :course-iteration/members (db-refs :membership/id course-it-fp-members)
   :course-iteration/question-sets (course-fp :course/question-sets)})


(def course-iterations
  [course-it-fp])


(def memberships
  (vec (concat course-it-fp-members)))


(def a1 (answer user1-student q-text xss-payload))
(def a2 (answer user1-student q-choice [0 1]))


(def answers
  [;; fp: testing
   a1
   a2])


(def a1-corr
  (correction user3-corrector a1 1 xss-payload))


(def a2-corr
  (correction user3-corrector a2 1 xss-payload))


(def corrections
  [;; for user1, testing question set
   a1-corr
   a2-corr])


(def xss-data
  (vec (concat
         users
         memberships
         questions
         question-sets
         courses
         course-iterations
         answers
         corrections)))
