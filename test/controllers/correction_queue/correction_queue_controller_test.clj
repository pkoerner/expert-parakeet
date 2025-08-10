(ns controllers.correction-queue.correction-queue-controller-test
  (:require
   [clojure.string :as string]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.correction-queue.correction-queue-controller :refer [correction-queue-overview-get correction-queue-unassiged-get correction-queue-assignments-get]]))

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
                              :question/type :question.type/free-text}]}])

(def ^{:private true}
  answer
  {:answer/id "5",
   :answer/answer "I like transients",
   :answer/question {:question/id "1",
                     :question/statement "Describe a use case for transient data structures",
                     :question/max-points 3,
                     :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return",
                     :question/categories [],
                     :question/type
                     :question.type/free-text},
   :answer/creator {:user/id "2",
                    :user/github-id "45678"}})

(def ^{:private true}
  answers
  [{:answer/id "5",
    :answer/answer "I like transients",
    :answer/question {:question/id "1",
                      :question/statement "Describe a use case for transient data structures",
                      :question/max-points 3,
                      :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return",
                      :question/categories [],
                      :question/type
                      :question.type/free-text},
    :answer/creator {:user/id "2",
                     :user/github-id "45678"}}
   {:answer/id "50",
    :answer/answer "I dont like transients",
    :answer/question {:question/id "1",
                      :question/statement "Describe a use case for transient data structures",
                      :question/max-points 3,
                      :question/evaluation-criteria "The following aspects are explained: performance improvement, mutable variant of persistent data structures, must be made persistent before function return",
                      :question/categories [],
                      :question/type
                      :question.type/free-text},
    :answer/creator {:user/id "2",
                     :user/github-id "45678"}}])



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

(deftest test-correction-queue-overview-get-3
  (let [mock-request (request 0 1 1)
        get-question-sets-uncorrected-free-text-fn (fn [_user-id] [])
        get-number-of-assigned-and-unassigned-answers-fn (fn [_user-id _question-id] [1 1])]
    (testing "correction-queue-overview-get response does not contain any questions if there are no uncorrected questions left"
      (let [post-destination "post-destination"
            res (correction-queue-overview-get mock-request
                                               post-destination
                                               get-number-of-assigned-and-unassigned-answers-fn
                                               get-question-sets-uncorrected-free-text-fn)]
        (t/is (string/includes? res ":status 200"))
        (t/is (not (string/includes? res "Question Statement")))))))

(deftest test-correction-queue-unassigned-get
  (let [mock-request (request 0 1 1)
        get-unassigned-answer-fn (fn [_question-id] answer)
        get-statistics-fn (fn [_user-id _question-id] [10 5 1])]
    (testing "test-correction-queue-unassigned-get response contains answer, form to submit correction and statistics"
      (let [post-destination "post-destination"
            res (correction-queue-unassiged-get mock-request
                                               post-destination
                                               get-unassigned-answer-fn
                                               get-statistics-fn)]
        (t/is (string/includes? res ":status 200"))
        (t/is (string/includes? res "I like transients"))
        (t/is (string/includes? res "form"))
        (t/is (string/includes? res "Question-Statistics: 10 total answers / 5 corrected answers / 1 corrected by you"))))))

(deftest test-correction-queue-assigned-get
  (let [mock-request (request 0 1 1)
        get-assignments-fn (fn [_user-id _question-id] answers)]
    (testing "test-correction-queue-assigned-get response contains all assigned answers and form to submit corrections"
      (let [post-destination "post-destination"
            res (correction-queue-assignments-get mock-request
                                                  post-destination
                                                  get-assignments-fn)]
        (t/is (string/includes? res ":status 200"))
        (t/is (string/includes? res "I like transients"))
        (t/is (string/includes? res "I dont like transients"))
        (t/is (string/includes? res "form"))))))
