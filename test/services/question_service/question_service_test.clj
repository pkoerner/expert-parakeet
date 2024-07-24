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
            basic-valid-input {:question/statement "Valid question statement"
                               :question/categories ["Category"]
                               :question/max-points 5}
            valid-free-text-question (-> basic-valid-input
                                         (assoc :question/type :question.type/free-text)
                                         (assoc :question/evaluation-criteria "Some valid evaluation criteria."))
            solution "Valid possible solution1"
            solution2 "Valid possible solution2"
            valid-single-choice-question (-> basic-valid-input
                                             (assoc :question/type :question.type/single-choice)
                                             (assoc :question/possible-solutions [solution solution2])
                                             (assoc :question/single-choice-solution solution))
            valid-multiple-choice-question-multiple-answers (-> basic-valid-input
                                                                (assoc :question/type :question.type/multiple-choice)
                                                                (assoc :question/possible-solutions [solution solution2])
                                                                (assoc :question/correct-solutions [solution solution2]))

            valid-multiple-choice-question-single-answers (-> valid-multiple-choice-question-multiple-answers
                                                              (assoc :question/correct-solutions solution))]

        (t/are [input-map]
               (let [{:question/keys [question-statement points type
                                      possible-solutions single-choice-solution multiple-choice-solution
                                      evaluation-criteria
                                      categories]} input-map
                     result (validate-question question-service
                                               question-statement points type
                                               possible-solutions single-choice-solution multiple-choice-solution
                                               evaluation-criteria
                                               categories)]
                 (and (empty? (result :errors))
                      (every? #(contains? result %) [:question/statement :question/max-points :question/type
                                                     :question/possible-solutions :question/single-choice-solution :question/correct-solutions
                                                     :question/evaluation-criteria
                                                     :question/categories])))

          valid-free-text-question
          valid-single-choice-question
          valid-multiple-choice-question-multiple-answers
          valid-multiple-choice-question-single-answers)))


    (testing "Test that invalid questions are returned with errors."
      (let [question-service (->QuestionService db-stub)
            solution "Valid possible solution1"
            solution2 "Valid possible solution2"
            valid-input-for-all {:question/statement "Valid question statement"
                                 :question/categories ["Category"]
                                 :question/max-points 5
                                 :question/type :question.type/free-text
                                 :question/evaluation-criteria "Some valid evaluation criteria."
                                 :question/possible-solutions [solution solution2]
                                 :question/single-choice-solution solution
                                 :question/correct-solutions [solution solution2]}]

        (t/are [input-map error-key]
               (let [{:question/keys [question-statement points type
                                      possible-solutions single-choice-solution multiple-choice-solution
                                      evaluation-criteria
                                      categories]} input-map
                     result (validate-question question-service
                                               question-statement points type
                                               possible-solutions single-choice-solution multiple-choice-solution
                                               evaluation-criteria
                                               categories)]
                 (not-empty (get-in result [:errors error-key])))

          (-> valid-input-for-all (assoc :question/categories 200))
          :question/categories

          (-> valid-input-for-all (assoc :question/statement ""))
          :question/statement

          (-> valid-input-for-all (assoc :question/max-points "Fail"))
          :question/max-points

          (-> valid-input-for-all (assoc :question/type "Not a type"))
          :question/type

          (-> valid-input-for-all (assoc :question/evaluation-criteria 300))
          :question/evaluation-criteria

          (-> valid-input-for-all (assoc :question/type :question.type/single-choice)
              (assoc :question/possible-solutions 300))
          :question/possible-solutions

          (-> valid-input-for-all (assoc :question/type :question.type/single-choice)
              ;; should not be a collection
              (assoc :question/single-choice-solution [solution]))
          :question/single-choice-solution

          (-> valid-input-for-all (assoc :question/type :question.type/single-choice)
              (assoc :question/single-choice-solution "Should also be in the possible-solutions"))
          :question/single-choice-solution

          (-> valid-input-for-all (assoc :question/type :question.type/multiple-choice)
              (assoc :question/correct-solutions 300))
          :question/correct-solutions)))))


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
                      (swap! was-called (fn [_] true))
                      {}))
          question-service (->QuestionService db-stub)]
      (create-question! question-service {})
      (t/is @was-called))))
