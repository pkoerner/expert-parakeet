(ns services.question-service.question-service-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [db :refer [Database-Protocol]]
    [services.question-service.p-question-service :refer [create-question!
                                                          get-question-categories validate-question]]
    [services.question-service.question-service :refer [->QuestionService]]))


(deftest test-validate-question
  (let [db-stub (reify Database-Protocol)]
    (testing "Test that valid questions are returned without errors and containing all keys."
      (let [question-service (->QuestionService db-stub)
            basic-valid-input {:statement "Valid question statement"
                               :categories ["Category"]
                               :max-points "5"}
            valid-free-text-question (merge basic-valid-input
                                            {:type "free-text"
                                             :evaluation-criteria "Some valid evaluation criteria."})
            solution "Valid possible solution1"
            solution2 "Valid possible solution2"
            valid-single-choice-question (merge basic-valid-input
                                                {:type "single-choice"
                                                 :possible-single-choice-solutions [solution solution2]
                                                 :correct-single-choice-solutions [solution]})
            valid-multiple-choice-question-multiple-answers (merge basic-valid-input
                                                                   {:type :question.type/multiple-choice
                                                                    :possible-multiple-choice-solutions [solution solution2]
                                                                    :correct-multiple-choice-solutions [solution solution2]})

            valid-multiple-choice-question-single-answers (merge valid-multiple-choice-question-multiple-answers
                                                                 {:correct-multiple-choice-solutions [solution]})]

        (t/are [question-form-data]
               (let [result (validate-question question-service question-form-data)]
                 (empty? (:errors result)))

          valid-free-text-question
          valid-single-choice-question
          valid-multiple-choice-question-multiple-answers
          valid-multiple-choice-question-single-answers)))


    (testing "Test that invalid questions are returned with errors."
      (let [question-service (->QuestionService db-stub)
            solution "Valid possible solution1"
            solution2 "Valid possible solution2"
            valid-input-for-all {:statement "Valid question statement"
                                 :categories ["Category"]
                                 :max-points "5"
                                 :type "free-text"
                                 :evaluation-criteria "Some valid evaluation criteria."
                                 :possible-single-choice-solutions [solution solution2]
                                 :correct-single-choice-solutions [solution]
                                 :possible-multiple-choice-solutions [solution solution2]
                                 :correct-multiple-choice-solutions [solution solution2]}]

        (t/are [question-form-data error-key]
               (let [result (validate-question question-service question-form-data)]
                 (not-empty (get-in result [:errors error-key])))

          (merge valid-input-for-all {:statement ""})
          :statement

          (merge valid-input-for-all {:max-points "Fail"})
          :max-points

          (merge valid-input-for-all {:type "Not a type"})
          :type

          ;; too many correct choices
          (merge valid-input-for-all
                 {:type "single-choice"
                  :correct-single-choice-solutions [solution solution2]})
          :correct-single-choice-solutions

          ;; unknown correct choices
          (merge valid-input-for-all
                 {:type "single-choice"
                  :correct-single-choice-solutions ["new and unknown choice"]})
          :correct-single-choice-solutions

          ;; unknown correct choices
          (merge valid-input-for-all
                 {:type "multiple-choice"
                  :correct-multiple-choice-solutions ["new and unknown choice"]})
          :correct-multiple-choice-solutions)))))


(deftest test-get-question-categories
  (testing "QuestionService implementation calls database query for all question categories."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-all-question-categories
                      [_this]
                      (swap! was-called (fn [_] true))
                      {}))
          question-service (->QuestionService db-stub)]
      (get-question-categories question-service)
      (t/is @was-called))))


(deftest test-create-question!
  (testing "QuestionService implementation calls database query for to create a question."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (add-question!
                      [_this _question]
                      ;; course-id
                      (swap! was-called (fn [_] true))
                      {}))
          question-service (->QuestionService db-stub)]
      (create-question! question-service "1" {})
      (t/is @was-called))))
