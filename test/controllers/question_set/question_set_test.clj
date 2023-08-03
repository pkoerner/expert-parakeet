(ns controllers.question-set.question-set-test
  (:require
   [clojure.test :as test :refer [deftest testing]]
   [controllers.question-set.question-set-controller :refer [question-set-get]]
   [services.question-set-service.question-set-service :refer [validate-user-for-question-set]]
   [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]))

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
    :question/points 1}])


(def question-sets
  [{:question-set/id "2"
    :question-set/name "Week 1:"
    :question-set/questions [[:question/id "1"] [:question/id "2"]]}
   {:question-set/id "3"
    :question-set/name "Test 00: Alien"
    :question-set/questions [[:question/id "3"] [:question/id "4"]]}])


(def courses
  [{:course/id "0"
    :course/course-name "Specialization Functional Programming: Clojure"
    :course/question-sets [[:question/id "2"] [:question/id "3"]]}])


(def course-iterations
  [{:course-iteration/id "1"
    :course-iteration/course [:course/id "0"]
    :course-iteration/year 2022
    :course-iteration/semester "WiSe"
    :course-iteration/question-sets [[:question-set/id "3"] [:question-set/id "1"]]}])


(def users
  [{:user/id "0"
    :user/course-iterations [[:course-iteration/id "1"]]}
   {:user/id "2"
    :user/course-iterations [[:course-iteration/id "1"]]}])


(def dummy-data
  (concat
   questions
   question-sets
   courses
   course-iterations
   users))



(deftype QuestionSetServiceMock [])

(extend QuestionSetServiceMock
  PQuestionSetService
  {:get-all-question-sets 
   (fn [_] 
     [#:question-set{:id "2", :name "Week 1:"}
      #:question-set{:id "1", :name "Test 01: Generative Testing"}
      #:question-set{:id "3", :name "Test 00: Alien"}])
   :get-question-set-by-id 
   (fn [_]
     #:question{:id "1",
                :question-statement "A nice question.",
                :points 3,
                :type :question.type/free-text})
   :validate-user-for-question-set 
   (validate-user-for-question-set "mock" "mock" "mock")})


(deftest test-generated-question-set-get
      (testing ""
        (let [empty-request {}
              result question-set-get empty-request QuestionSetServiceMock]
        (test/is (= 1 1)))))