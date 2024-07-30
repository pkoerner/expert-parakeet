(ns controllers.question.question-controller-test
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.question.question-controller :refer [create-question-get
                                                      submit-create-question!]]
    [db :refer [Database-Protocol]]
    [services.question-service.p-question-service :refer [PQuestionService
                                                          validate-question]]
    [services.question-service.question-service :refer [->QuestionService]]))


(deftest test-create-question-get
  (let [empty-request {}
        get-categories-fun (fn [] [])]
    (testing "Returns a form object on normal invocation."
      (let [post-destination "post-destination"
            res (create-question-get empty-request
                                     get-categories-fun
                                     post-destination)]
        (t/is (and (string/includes? res "form")
                   (string/includes? res post-destination)))))

    (testing "All categories are displayed."
      (let [categories ["Cat1" "Cat2" "Hello World ok!"]
            res (create-question-get empty-request
                                     (fn [] categories)
                                     "post-destination")]
        (t/is (every? #(string/includes? res %) categories))))))


(deftest test-create-question-get-error-display
  (let [get-categories-fun (fn [] [])]


    (testing "Errors are displayed"
      (t/are [error-map]
             (let [request-with-params {:query-params error-map}
                   res (create-question-get request-with-params get-categories-fun "post-destination")]
               (every? (fn [[_key error]]
                         (string/includes? res error))
                       error-map))

        {(str :question/type) "No valid type"}
        {(str :question/statement) "No valid question statement!"}
        {(str :question/max-points) "No valid question points"}
        {(str :question/categories) "No valid question categories"}
        {(str :question/evaluation-criteria) "No valid evaluation criteria"}
        {(str :question/possible-solutions) "No valid possible solutions"}
        {(str :question/correct-solutions) "No valid single choice solution"}
        {(str :question/correct-solutions) "No valid multiple choice solutions"}))

    (testing "unknown keys are not displayed"
      (t/are [error-map]
             (let [request-with-params {:query-params error-map}
                   res (create-question-get request-with-params get-categories-fun "post-destination")]
               (every? (fn [[_key error]]
                         (not (string/includes? res error)))
                       error-map))

        {"Donno" "No valid type"}
        {"Something" "No valid question statement!"}
        {":something-else" "No valid question points"}))))


(defn- stub-question-service
  [& {:keys [create-question! get-question-categories validate-question]
      :or {create-question! (fn [& _] {})
           get-question-categories (fn [& _] {})
           validate-question (fn [& _] {})}}]

  (reify PQuestionService
    (create-question!
      [_self question]
      (create-question! question))

    (get-question-categories
      [_self]
      (get-question-categories))

    (validate-question
      [_self
       question-statement achivable-points type
       possible-solutions correct-solutions
       evaluation-criteria
       categories]
      (validate-question question-statement achivable-points type
                         possible-solutions correct-solutions
                         evaluation-criteria
                         categories))))


(defn- valid-question
  [question]
  (let [question (assoc question :question/id "some id")]
    (or (s/valid? :question/question
                  (select-keys question
                               [:question/id
                                :question/statement
                                :question/type
                                :question/max-points
                                :question/evaluation-criteria
                                :question/categories]))
        (s/valid? :question/single-choice-question
                  (select-keys question
                               [:question/id
                                :question/statement
                                :question/type
                                :question/max-points
                                :question/possible-solutions
                                :question/correct-solutions
                                :question/categories]))
        (s/valid? :question/multiple-choice-question
                  (select-keys question
                               [:question/id
                                :question/statement
                                :question/type
                                :question/max-points
                                :question/possible-solutions
                                :question/correct-solutions
                                :question/categories])))))


;; TODO: rework parsing/validating question form parameters
#_(deftest test-submit-create-question!
  (let [db-stub (reify Database-Protocol)]
    (testing "Test that the db-add-function get's called with the correct values with different parameters."
      (let [test-request {:__anti-forgery-token ""
                          :multipart-params {}}
            question-service (->QuestionService db-stub)
            basic-valid-input {"question-statement" "Valid question statement"
                               "categories" ["Valid Category"]
                               "achivable-points" 5}
            redirect-uri "S"
            free-text-question (merge basic-valid-input {"type" "free-text"
                                                         "evaluation-criteria" "Valid evaluation criteria"})
            single-choice-question (merge basic-valid-input {"type" "single-choice"
                                                             "single-choice-solution" "Solution1"
                                                             "possible-solutions" ["Solution1"]})
            multiple-choice-question (merge basic-valid-input {"type" "multiple-choice"
                                                               "multiple-choice-solution" ["Solution1" "Solution2"]
                                                               "possible-solutions" ["Solution1" "Solution2" "Solution3"]})]
        (t/are [question]
               (let [was-valid (atom false)
                     db-add-fun-stub (fn [question]
                                       (swap! was-valid (fn [_] (valid-question question)))
                                       question)
                     question-service-stub (stub-question-service
                                             :create-question! db-add-fun-stub
                                             :validate-question (partial validate-question question-service))]
                 (submit-create-question! (->> question
                                               (map (fn [[key val]] {(str key) val}))
                                               (into {})
                                               (assoc test-request :multipart-params))
                                          redirect-uri
                                          question-service-stub)
                 @was-valid)
          free-text-question
          single-choice-question
          multiple-choice-question)))


    (testing "Test that the db-add-function is not called with invalid parameters"
      (let [test-request {:__anti-forgery-token ""
                          :multipart-params {}}
            question-service (->QuestionService db-stub)
            basic-valid-input {"question-statement" "Valid question statement"
                               "categories" ["Valid Category"]
                               "achivable-points" 5}
            redirect-uri "S"
            free-text-question-invalid (merge basic-valid-input {"type" "free-text"
                                                                 "evaluation-criteria" 123})
            single-choice-question (merge basic-valid-input {"type" "single-choice"
                                                             "single-choice-solution" "Solution not in possible-solutions"
                                                             "possible-solutions" ["Solution1"]})
            multiple-choice-question (merge basic-valid-input {"type" "multiple-choice"
                                                               "multiple-choice-solution" ["Solution1" "Solution2" "Solution not in possible-solutions"]
                                                               "possible-solutions" ["Solution1" "Solution2" "Solution3"]})]
        (t/are [question]
               (let [was-not-called (atom true)
                     db-add-fun-stub (fn [question]
                                       (swap! was-not-called (fn [_] false))
                                       question)
                     question-service-stub (stub-question-service
                                             :create-question! db-add-fun-stub
                                             :validate-question (partial validate-question question-service))]
                 (submit-create-question! (->> question
                                               (map (fn [[key val]] {(str key) val}))
                                               (into {})
                                               (assoc test-request :multipart-params))
                                          redirect-uri
                                          question-service-stub)
                 @was-not-called)
          free-text-question-invalid
          single-choice-question
          multiple-choice-question)))))
