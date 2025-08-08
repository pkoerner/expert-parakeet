(ns db.dummy-data)


;; in production the ids are nano-ids, therefore an id is stored
;; as a string. For readability reasons we leave ids as strings
;; in the dummy data

(def id-counter (atom {}))


(defn- gen-id!
  [key]
  (str (get (swap! id-counter update key #(if (nil? %)
                                            1
                                            (inc %)))
            key)))


(def course-fp-id (gen-id! :course))
(def course-prog-id (gen-id! :course))


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
  [question-statement max-points categories evaluation-criteria course-id]
  {:question/id (gen-id! :question)
   :question/type :question.type/free-text
   :question/statement question-statement
   :question/evaluation-criteria evaluation-criteria
   :question/max-points max-points
   :question/categories (vec categories)
   :question/course [:course/id course-id]})


(defn- solution
  [statement]
  {:solution/id (gen-id! :solution)
   :solution/statement statement})


(defn- choice-question
  [question-statement max-points categories correct-solutions course-id & other-solutions]
  (let [base {:question/id (gen-id! :question)
              :question/statement question-statement
              :question/max-points max-points
              :question/categories (vec categories)
              :question/course [:course/id course-id]}]
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


(def q-transient-use-case
  (text-question "Describe a use case for transient data structures"
                 3 []
                 "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return"
                 course-fp-id))


(def q-compare-testing
  (text-question "What are some advantages and disadvantages of example-based and generative testing?"
                 2 []
                 "The following aspects are explained: Oracle, performance, test-coverage" course-fp-id))


(def q-transient-mutable
  (choice-question "Transient data structures are:"
                   1
                   []
                   "mutable"
                   course-fp-id
                   "immutable"))


(def q-generative-testing
  (choice-question "Which keywords are suitable for generative testing?"
                   1 ["Cat2" "Cat1" "Cat3"]
                   ["Oracle" "inverse function" "specs"]
                   course-fp-id
                   "fast and low memory usage"))


(def questions-fp
  `[~q-transient-use-case
    ~q-compare-testing
    ~@q-transient-mutable
    ~@q-generative-testing])


(def q-alien-release
  (choice-question "When was the movie Alien by ridley scott released?"
                   1 []
                   "1979"
                   course-fp-id
                   "1976" "2000" "1966"))


(def q-best-film
  (text-question "Which one is the greates movie of all time? ;D"
                 1 []
                 "Alien !!!" course-fp-id))


(def questions-alien
  `[~@q-alien-release
    ~q-best-film])


(def q-jvm
  (text-question "What is the JVM?"
                 3 []
                 "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine" course-prog-id))


(def q-java
  (choice-question "What type of programming lanuage is java?"
                   1
                   []
                   "object oriented"
                   course-prog-id
                   ;; "functional"
                   ;; "logic"
                   ))


(def questions-prog
  `[~q-jvm
    ~@q-java])


(def questions
  (vec (concat questions-fp
               questions-alien
               questions-prog)))


(def question-set-fp
  {:question-set/id (gen-id! :question-set)
   :question-set/name "Test 01: Generative Testing"
   :question-set/questions (db-refs :question/id questions-fp)})


(def question-set-alien
  {:question-set/id (gen-id! :question-set)
   :question-set/name "Test 00: Alien"
   :question-set/questions (db-refs :question/id questions-alien)})


(def question-set-prog
  {:question-set/id (gen-id! :question-set)
   :question-set/name "Week 1"
   :question-set/questions (db-refs :question/id questions-prog)})


(def question-sets
  [question-set-fp question-set-alien question-set-prog])


(def course-fp
  {:course/id course-fp-id
   :course/name "Functional Programming: Clojure"
   ;; :course/questions (db-refs :question/id questions-fp)
   ;; :course/question-sets (db-refs :question-set/id [question-set-fp question-set-alien])
   })


(def course-prog
  {:course/id course-prog-id
   :course/name "Programming"
   ;; :course/questions (db-refs :question/id questions-prog)
   ;; :course/question-sets (db-refs :question-set/id [question-set-prog])
   })


(def courses
  [course-fp
   course-prog])


(def user1
  {:user/id (gen-id! :user)
   :user/github-id "12345"})


(def user2
  {:user/id (gen-id! :user)
   :user/github-id "45678"})


(def user3
  {:user/id (gen-id! :user)
   :user/github-id "13579"})


(def users
  [user1
   user2
   user3])


(def course-it-fp-members
  (mapv (partial apply member) [[user1 :role/student]
                                [user2 :role/student]
                                [user3 :role/corrector]]))


(def course-it-fp
  {:course-iteration/id (gen-id! :course-iteration)
   :course-iteration/course [:course/id course-fp-id]
   :course-iteration/year 2022
   :course-iteration/semester :semester/winter
   :course-iteration/members (db-refs :membership/id course-it-fp-members)
   :course-iteration/question-sets (db-refs :question-set/id [question-set-fp question-set-alien])})


(def course-it-prog-members
  (mapv (partial apply member) [[user1 :role/student]
                                [user2 :role/corrector]
                                [user3 :role/student]]))


(def course-it-prog
  {:course-iteration/id (gen-id! :course-iteration)
   :course-iteration/course [:course/id course-prog-id]
   :course-iteration/year 2020
   :course-iteration/semester :semester/summer
   :course-iteration/members (db-refs :membership/id course-it-prog-members)
   :course-iteration/question-sets (db-refs :question-set/id [question-set-prog])})


(def course-iterations
  [course-it-fp
   course-it-prog])


(def memberships
  (vec (concat course-it-fp-members
               course-it-prog-members)))


(def a1 (answer user1 q-transient-use-case "transients are a non persistent data structures in clojure. They are used to increase performance."))
(def a2 (answer user1 q-compare-testing "generative Tests are only a good choice, if you have an oracle or you can write an inverse function. But they have very high costs compared to example based testing"))
(def a3 (answer user1 q-transient-mutable [0])); ["mutable"]
(def a4 (answer user1 q-generative-testing [0 1 2])) ; ["Oracle" "inverse function" "specs"]

(def a5 (answer user2 q-transient-use-case "I like transients"))
(def a6 (answer user2 q-compare-testing "example based testing is good for documentation"))
(def a7 (answer user2 q-transient-mutable [1])); ["immutable"]
(def a8 (answer user2 q-generative-testing [0 2])) ; ["Oracle" "specs"]

(def a9 (answer user1 q-alien-release [0])); ["1979"]
(def a10 (answer user1 q-best-film "Alien is the best movie of all time <3"))


(def a11 (answer user1 q-jvm "JVM, i.e., Java Virtual Machine. JVM is the engine that drives the Java code. Mostly in other Programming Languages, compiler produce code for a particular system but Java compiler produce Bytecode for a Java Virtual Machine. When we compile a Java program, then bytecode is generated. Bytecode is the source code that can be used to run on any platform. Bytecode is an intermediary language between Java source and the host system. It is the medium which compiles Java code to bytecode which gets interpreted on a different machine and hence it makes it Platform/Operating system independent."))
(def a12 (answer user1 q-java [0])); ["object oriented"]

(def a13 (answer user3 q-jvm "I don't know, pls give me points :D"))
(def a14 (answer user3 q-java [2])) ; ["logic"]


(def answers
  [;; fp: testing
   a1
   a2
   a3
   a4

   a5
   a6
   a7
   a8

   ;; fp: alien
   a9
   a10

   ;; prog: java
   a11
   a12

   a13
   a14])


(def corrections
  [;; for user1, testing question set
   (correction user3 a1 1 "Can you say something about the rules of handling with transients?")
   (correction user3 a2 1 "Please elaborate about the aspects of example-based testing")

   ;; for user1, alien question set
   (correction user3 a10 1 "Approved")

   ;; for user1, java question set
   (correction user2 a11 3 "Superb!")

   ;; for user3, java question set 
   (correction user2 a13 0 "we do not give away points!")])


(def dummy-data
  (vec (concat
         users
         memberships
         [course-fp course-prog] ; Kurse zuerst
         questions              ; Dann Fragen
         question-sets          ; Dann Question-Sets
         course-iterations      ; Dann Kurs-Iterationen (verweisen auf Question-Sets)
         answers
         corrections)))
