(ns controllers.question.question-controller-test
  (:require
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
      [_self question-form-data]
      (validate-question question-form-data))))


(deftest test-submit-create-question!
  (let [db-stub (reify Database-Protocol)]
    (testing "Test that the db-add-function gets called with valid parameters."
      (let [test-request {:__anti-forgery-token ""
                          :params {}}
            question-service (->QuestionService db-stub)
            basic-valid-input {:statement "Valid question statement"
                               :categories ["Valid Category"]
                               :max-points "5"}
            post-destination "S"
            free-text-question (merge basic-valid-input {:type "free-text"
                                                         :evaluation-criteria "Valid evaluation criteria"})
            single-choice-question (merge basic-valid-input {:type "single-choice"
                                                             :possible-single-choice-solutions ["Solution1" "Solution2" "Solution3"]
                                                             :correct-single-choice-solutions ["Solution1"]})
            multiple-choice-question (merge basic-valid-input {:type "multiple-choice"
                                                               :possible-multiple-choice-solutions ["Solution1" "Solution2" "Solution3"]
                                                               :correct-multiple-choice-solutions ["Solution1" "Solution2"]})]
        (t/are [question-form-data]
               (let [was-called (atom false)
                     db-add-fun-stub (fn [question]
                                       (reset! was-called true)
                                       (-> question
                                           (update :question/possible-solutions (fn [sols]
                                                                                  (if-let [sols (seq sols)]
                                                                                    (mapv (fn [sol] #:solution{:id "sol-id-XYZ" :statement sol}) sols)
                                                                                    nil)))
                                           (update :question/correct-solutions (fn [sols]
                                                                                 (if-let [sols (seq sols)]
                                                                                   (mapv (fn [sol] #:solution{:id "sol-id-XYZ" :statement sol}) sols)
                                                                                   nil)))
                                           (assoc :question/id "question-id")))
                     question-service-stub (stub-question-service
                                             :create-question! db-add-fun-stub
                                             :validate-question (partial validate-question question-service))]
                 (submit-create-question! (update test-request :params merge question-form-data)
                                          post-destination
                                          question-service-stub)
                 @was-called)
          free-text-question
          single-choice-question
          multiple-choice-question)))


    (testing "Test that the db-add-function is not called with invalid parameters"
      (let [test-request {:__anti-forgery-token ""
                          :params {}}
            question-service (->QuestionService db-stub)
            basic-valid-input {:statement "Valid question statement"
                               :categories ["Valid Category"]
                               :max-points "5"}
            post-destination "S"
            single-choice-question1 (merge basic-valid-input {:type "single-choice"
                                                              :possible-single-choice-solutions ["Solution1" "Solution2" "Solution3"]
                                                              :correct-single-choice-solutions ["Unknown solution"]})
            single-choice-question2 (merge basic-valid-input {:type "single-choice"
                                                              :possible-single-choice-solutions ["Solution1" "Solution2" "Solution3"]
                                                              :correct-single-choice-solutions ["Solution1" "Solution2"]})
            multiple-choice-question (merge basic-valid-input {:type "multiple-choice"
                                                               :possible-multiple-choice-solutions ["Solution1" "Solution2" "Solution3"]
                                                               :correct-multiple-choice-solutions ["Solution1" "Unknown solution"]})]
        (t/are [question-form-data]
               (let [was-not-called (atom true)
                     db-add-fun-stub (fn [question]
                                       (reset! was-not-called false)
                                       (-> question
                                           (update :question/possible-solution (fn [sols]
                                                                                 (if-let [sols (seq sols)]
                                                                                   (mapv (fn [sol] #:solution{:id "sol-id-XYZ" :statement sol}) sols)
                                                                                   nil)))
                                           (update :question/correct-solution (fn [sols]
                                                                                (if-let [sols (seq sols)]
                                                                                  (mapv (fn [sol] #:solution{:id "sol-id-XYZ" :statement sol}) sols)
                                                                                  nil)))
                                           (assoc :question/id "question-id")))
                     question-service-stub (stub-question-service
                                             :create-question! db-add-fun-stub
                                             :validate-question (partial validate-question question-service))]
                 (submit-create-question! (update test-request :params merge question-form-data)
                                          post-destination
                                          question-service-stub)
                 @was-not-called)
          single-choice-question1
          single-choice-question2
          multiple-choice-question)))))
