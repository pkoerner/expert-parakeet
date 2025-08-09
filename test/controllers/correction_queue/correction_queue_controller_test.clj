(ns controllers.correction-queue.correction-queue-controller-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.correction-queue.correction-queue-controller :refer [correction-queue-overview-get]]))

(defn- request
  [tab page _user-id]
  {:params {:tab tab :page page} :session {:user {:id "0"}}})

(def ^{:private true} question-sets
  [{:question-set/id "1", 
    :question-set/name "Test 01: Generative Testing", 
    :question-set/questions [{:question/id "1", 
                              :question/statement "Describe a use case for transient data structures", 
                              :question/max-points 3, 
                              :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return", 
                              :question/categories [], 
                              :question/type :question.type/free-text} 
                             {:question/id "2", 
                              :question/statement "What are some advantages and disadvantages of example-based and generative testing?", 
                              :question/max-points 2, 
                              :question/evaluation-criteria "The following aspects are explained: Oracle, performance, test-coverage", 
                              :question/categories [],
                              :question/type :question.type/free-text}]}]
)

(deftest test-correction-queue-overview-get-1
  (let [mock-request (request 0 1 1)
        get-question-sets-uncorrected-free-text-fn (fn [_user-id] [])
        get-number-of-assigned-and-unassigned-answers-fn (fn [_user-id _question-id] [])]
    (testing "correction-queue-overview-get response has status OK"
      (let [post-destination "post-destination"
            res (correction-queue-overview-get mock-request
                                               post-destination
                                               get-number-of-assigned-and-unassigned-answers-fn
                                               get-question-sets-uncorrected-free-text-fn)]
        (t/is (string/includes? res ":status 200"))))))

(deftest test-correction-queue-overview-get-2
  (let [mock-request (request 0 1 1)
        get-question-sets-uncorrected-free-text-fn (fn [_user-id] question-sets)
        get-number-of-assigned-and-unassigned-answers-fn (fn [_user-id _question-id] [1 1])]
    (testing "correction-queue-overview-get response contains all free-text questions when there are still answers left to correct"
      (let [post-destination "post-destination"
            res (correction-queue-overview-get mock-request
                                               post-destination
                                               get-number-of-assigned-and-unassigned-answers-fn
                                               get-question-sets-uncorrected-free-text-fn)]
        (t/is (string/includes? res ":status 200"))

        ; Test if all free-text questions are included in the result (use question statement as question statements are distinct in these question-sets)
        (t/is (string/includes? res "Describe a use case for transient data structures"))
        (t/is (string/includes? res "What are some advantages and disadvantages of example-based and generative testing?"))))))