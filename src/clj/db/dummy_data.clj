(ns db.dummy-data)


;; in production the ids are nano-ids, therefore an id is stored
;; as a string. For readability reasons we leave ids as strings
;; in the dummy data

(def questions
  [{:question/id "1"
    :question/type :question.type/free-text
    :question/question-statement "Describe a use case for transient data structures"
    :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return"
    :question/points 3}
   {:question/id "2"
    :question/type :question.type/free-text
    :question/question-statement "What is the JVM?"
    :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine"
    :question/points 3}
   {:question/id "3"
    :question/type :question.type/free-text
    :question/question-statement "What are some advantages and disadvantages of example-based and generative testing?"
    :question/evaluation-criteria "The following aspects are explained: Oracle, performance, test-coverage"
    :question/points 2}
   {:question/id "4"
    :question/type :question.type/single-choice
    :question/question-statement "Transient data structures are:"
    :question/possible-solutions #{"mutable" "immutable"}
    :question/single-choice-solution "mutable"
    :question/points 1}
   {:question/id "5"
    :question/type :question.type/multiple-choice
    :question/question-statement "Which keywords are suitable for generative testing?"
    :question/possible-solutions #{"Oracle" "inverse function" "specs" "fast and low memory usage"}
    :question/multiple-choice-solution #{"Oracle" "inverse function" "specs"}
    :question/points 1}
   {:question/id "6"
    :question/question-statement "What type of programming lanuage is java?"
    :question/type :question.type/single-choice
    :question/possible-solutions #{"object oriented" "functional" "logic"}
    :question/single-choice-solution "object oriented"
    :question/points 1}
   {:question/id "7"
    :question/question-statement "When was the movie Alien by ridley scott released?"
    :question/type :question.type/single-choice
    :question/possible-solutions #{"1979" "1976" "2000" "1966"}
    :question/single-choice-solution "1979"
    :question/points 1}
   {:question/id "8"
    :question/type :question.type/free-text
    :question/question-statement "Which one is the greates movie of all time? ;D"
    :question/evaluation-criteria "Alien !!!"
    :question/points 1}])


(def question-sets
  [{:question-set/id "1"
    :question-set/name "Test 01: Generative Testing"
    :question-set/questions [[:question/id "4"] [:question/id "5"] [:question/id "1"] [:question/id "3"]]}
   {:question-set/id "2"
    :question-set/name "Week 1:"
    :question-set/questions [[:question/id "6"] [:question/id "2"]]}
   {:question-set/id "3"
    :question-set/name "Test 00: Alien"
    :question-set/questions [[:question/id "7"] [:question/id "8"]]}])


(def courses
  [{:course/id "0"
    :course/course-name "Specialization Functional Programming: Clojure"
    :course/question-sets [[:question-set/id "1"] [:question/id "3"] [:question/id "4"] [:question/id "5"] [:question/id "7"] [:question/id "8"]]}
   {:course/id "1"
    :course/course-name "Programming 1"
    :course/question-sets [[:question-set/id "2"] [:question/id "6"]]}])


(def course-iterations
  [{:course-iteration/id "1"
    :course-iteration/course [:course/id "0"]
    :course-iteration/year 2022
    :course-iteration/semester "WiSe"
    :course-iteration/question-sets [[:question-set/id "3"] [:question-set/id "1"]]}
   {:course-iteration/id "2"
    :course-iteration/course [:course/id "1"]
    :course-iteration/year 2020
    :course-iteration/semester "SoSe"
    :course-iteration/question-sets [[:question-set/id "2"]]}])


(def user-roles
  [{:role/id "0"
    :role/course-iteration "1"
    :role/name "student"}
   {:role/id "1"
    :role/course-iteration "2"
    :role/name "student"}
   {:role/id "2"
    :role/course-iteration "1"
    :role/name "corrector"}
   {:role/id "3"
    :role/course-iteration "2"
    :role/name "student"}
   {:role/id "4"
    :role/course-iteration "1"
    :role/name "admin"}
   {:role/id "5"
    :role/course-iteration "2"
    :role/name "student"}])


(def users
  [{:user/id "0"
    :user/git-id "12345"
    :user/course-iterations [[:course-iteration/id "1"] [:course-iteration/id "2"]]}
   {:user/id "2"
    :user/git-id "45678"
    :user/course-iterations [[:course-iteration/id "1"]]}
   {:user/id "3"
    :user/git-id "13579"
    :user/course-iterations [[:course-iteration/id "2"]]}])


(def answers
  [{:answer/id "1"
    :answer/question [:question/id "1"]
    :answer/user [:user/id "0"]
    :answer/answer ["transients are a non persistent data structures in clojure. They are used to increase performance."]
    :answer/points 1}
   {:answer/id "2"
    :answer/question [:question/id "3"]
    :answer/user [:user/id "0"]
    :answer/answer ["generative Tests are only a good choice, if you have an oracle or you can write an inverse function. But they have very high costs compared to example based testing"]
    :answer/points 1}
   {:answer/id "3"
    :answer/question [:question/id "1"]
    :answer/user [:user/id "2"]
    :answer/answer ["I like transients"]
    :answer/points 0}
   {:answer/id "4"
    :answer/question [:question/id "2"]
    :answer/user [:user/id "0"]
    :answer/answer [" JVM, i.e., Java Virtual Machine.
    JVM is the engine that drives the Java code.
    Mostly in other Programming Languages, compiler produce code for a particular system but Java compiler produce Bytecode for a Java Virtual Machine.
    When we compile a Java program, then bytecode is generated. Bytecode is the source code that can be used to run on any platform.
    Bytecode is an intermediary language between Java source and the host system.
    It is the medium which compiles Java code to bytecode which gets interpreted on a different machine and hence it makes it Platform/Operating system independent."]
    :answer/points 3}
   {:answer/id "5"
    :answer/question [:question/id "4"]
    :answer/user [:user/id "2"]
    :answer/answer ["immutable"]
    :answer/points 0}
   {:answer/id "6"
    :answer/question [:question/id "3"]
    :answer/user [:user/id "2"]
    :answer/answer ["example based testing is good for documentation"]
    :answer/points 0}
   {:answer/id "7"
    :answer/question [:question/id "5"]
    :answer/user [:user/id "0"]
    :answer/answer ["Oracle" "inverse function" "specs"]
    :answer/points 1}
   {:answer/id "8"
    :answer/question [:question/id "4"]
    :answer/user [:user/id "0"]
    :answer/answer ["mutable"]
    :answer/points 1}
   {:answer/id "9"
    :answer/question [:question/id "6"]
    :answer/user [:user/id "0"]
    :answer/answer ["object oriented"]
    :answer/points 1}
   {:answer/id "10"
    :answer/question [:question/id "5"]
    :answer/user [:user/id "2"]
    :answer/answer ["Oracle" "specs"]
    :answer/points 1}
   {:answer/id "11"
    :answer/question [:question/id "7"]
    :answer/user [:user/id "0"]
    :answer/answer ["1979"]
    :answer/points 1}
   {:answer/id "12"
    :answer/question [:question/id "8"]
    :answer/user [:user/id "0"]
    :answer/answer ["Alien is the best movie of all time <3"]
    :answer/points 1}
   {:answer/id "13"
    :answer/question [:question/id "6"]
    :answer/user [:user/id "3"]
    :answer/answer ["logic"]
    :answer/points 0}
   {:answer/id "14"
    :answer/question [:question/id "2"]
    :answer/user [:user/id "3"]
    :answer/answer ["I don't know, pls give me points :D"]
    :answer/points 0}])


(def corrections
  [{:correction/answer [:answer/id "1"]
    :correction/corrector [:user/id "0"]
    :correction/feedback "Can you say something about the rules of handling with transients?"}
   {:correction/answer [:answer/id "2"]
    :correction/corrector [:user/id "0"]
    :correction/feedback "Please elaborate about the aspects of example-based testing"}
   {:correction/answer [:answer/id "4"]
    :correction/corrector [:user/id "0"]
    :correction/feedback "Superb!"}
   {:correction/answer [:answer/id "12"]
    :correction/corrector [:user/id "0"]
    :correction/feedback "Approved"}
   {:correction/answer [:answer/id "14"]
    :correction/corrector [:user/id "3"]
    :correction/feedback "we do not give away points!"}])


(def dummy-data
  (concat
    questions
    question-sets
    courses
    course-iterations
    user-roles
    users
    answers
    corrections))
