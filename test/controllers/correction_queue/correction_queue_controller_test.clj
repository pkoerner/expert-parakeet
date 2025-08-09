(ns controllers.correction-queue.correction-queue-controller-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.correction-queue.correction-queue-controller :refer [correction-queue-overview-get]]))

(defn- request
  [tab page _user-id]
  {:params {:tab tab :page page} :session {:user {:id "0"}}})

(def ^{:private true} question-sets
  [{:question-set/id "2",
    :question-set/name "Test 00: Alien",
    :question-set/questions [{:question/id "5",
                              :question/statement "When was the movie Alien by ridley scott released?",
                              :question/max-points 1,
                              :question/categories [],
                              :question/type :question.type/single-choice,
                              :question/possible-solutions [{:solution/id "7", :solution/statement "1979"}
                                                            {:solution/id "8", :solution/statement "1976"}
                                                            {:solution/id "9", :solution/statement "2000"}
                                                            {:solution/id "10", :solution/statement "1966"}],
                              :question/correct-solutions [{:solution/id "7", :solution/statement "1979"}]}
                             {:question/id "6",
                              :question/statement "Which one is the greates movie of all time? ;D",
                              :question/max-points 1,
                              :question/evaluation-criteria "Alien !!!",
                              :question/categories [],
                              :question/type :question.type/free-text}]}
   {:question-set/id "3",
    :question-set/name "Week 1",
    :question-set/questions [{:question/id "7",
                              :question/statement "What is the JVM?",
                              :question/max-points 3,
                              :question/evaluation-criteria "Something like this (from Wikipedia): https://en.wikipedia.org/wiki/Java_virtual_machine",
                              :question/categories [],
                              :question/type :question.type/free-text}
                             {:question/id "8",
                              :question/statement "What type of programming lanuage is java?",
                              :question/max-points 1,
                              :question/categories [],
                              :question/type :question.type/single-choice,
                              :question/possible-solutions [{:solution/id "11", :solution/statement "object oriented"}
                                                            {:solution/id "12", :solution/statement "functional"}
                                                            {:solution/id "13", :solution/statement "logic"}],
                              :question/correct-solutions [{:solution/id "11", :solution/statement "object oriented"}]}]}
   {:question-set/id "1",
    :question-set/name "Test 01: Generative Testing",
    :question-set/questions [{:question/id "1",
                              :question/statement "Describe a use case for transient data structures",
                              :question/max-points 3,
                              :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return", :question/categories [], :question/type :question.type/free-text}
                             {:question/id "2",
                              :question/statement "What are some advantages and disadvantages of example-based and generative testing?",
                              :question/max-points 2,
                              :question/evaluation-criteria "The following aspects are explained: Oracle, performance, test-coverage",
                              :question/categories [],
                              :question/type :question.type/free-text}
                             {:question/id "3",
                              :question/statement "Transient data structures are:",
                              :question/max-points 1,
                              :question/categories [],
                              :question/type :question.type/single-choice,
                              :question/possible-solutions [{:solution/id "1", :solution/statement "mutable"}
                                                            {:solution/id "2", :solution/statement "immutable"}],
                              :question/correct-solutions [{:solution/id "1", :solution/statement "mutable"}]}
                             {:question/id "4",
                              :question/statement "Which keywords are suitable for generative testing?",
                              :question/max-points 1,
                              :question/categories ["Cat1" "Cat2" "Cat3"],
                              :question/type :question.type/multiple-choice,
                              :question/possible-solutions [{:solution/id "3", :solution/statement "Oracle"}
                                                            {:solution/id "4", :solution/statement "inverse function"}
                                                            {:solution/id "5", :solution/statement "specs"}
                                                            {:solution/id "6", :solution/statement "fast and low memory usage"}],
                              :question/correct-solutions [{:solution/id "3", :solution/statement "Oracle"}
                                                           {:solution/id "4", :solution/statement "inverse function"}
                                                           {:solution/id "5", :solution/statement "specs"}]}]}])

(deftest test-correction-queue-overview-get-1
  (let [mock-request (request 0 1 1)
        get-all-question-sets-with-questions-fn (fn [] [])
        get-number-of-assigned-and-unassigned-answers-fn (fn [] [])]
    (testing "correction-queue-overview-get response has status OK"
      (let [post-destination "post-destination"
            res (correction-queue-overview-get mock-request
                                               post-destination
                                               get-all-question-sets-with-questions-fn
                                               get-number-of-assigned-and-unassigned-answers-fn)]
        (t/is (string/includes? res ":status 200"))))))


(deftest test-correction-queue-overview-get-2
  (let [mock-request (request 0 1 1)
        get-all-question-sets-with-questions-fn (fn [] question-sets)
        get-number-of-assigned-and-unassigned-answers-fn (fn [_user-id _question-id] [1 1])]
    (testing "correction-queue-overview-get response contains all free-text questions and no other question"
      (let [post-destination "post-destination"
            res (correction-queue-overview-get mock-request
                                               post-destination
                                               get-all-question-sets-with-questions-fn
                                               get-number-of-assigned-and-unassigned-answers-fn)]
        (t/is (string/includes? res ":status 200"))

        ; Test if all free-text questions are included in the result (use question statement as question statements are distinct in these question-sets)
        (t/is (string/includes? res "Which one is the greates movie of all time? ;D"))
        (t/is (string/includes? res "What is the JVM?"))
        (t/is (string/includes? res "Describe a use case for transient data structures"))

        ; Test if no question is included that is not of type free-text
        (t/is (not (string/includes? res "When was the movie Alien by ridley scott released?")))
        (t/is (not (string/includes? res "What type of programming lanuage is java?")))
        (t/is (not (string/includes? res "Transient data structures are:")))
        (t/is (not (string/includes? res "Which keywords are suitable for generative testing?")))))))


(deftest test-correction-queue-overview-get-3
  (let [mock-request (request 0 1 1)
        get-all-question-sets-with-questions-fn (fn [] question-sets)
        get-number-of-assigned-and-unassigned-answers-fn (fn [_user-id _question-id] [0 0])]
    (testing "correction-queue-overview-get response contains no questions if there are no answers left to correct"
      (let [post-destination "post-destination"
            res (correction-queue-overview-get mock-request
                                               post-destination
                                               get-all-question-sets-with-questions-fn
                                               get-number-of-assigned-and-unassigned-answers-fn)]
        (t/is (string/includes? res ":status 200"))
        (t/is (not (string/includes? res "Question Statement")))))))



