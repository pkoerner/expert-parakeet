(ns controllers.question.question-test
  (:require
    [clojure.string :as string]
    [clojure.test :as t :refer [deftest testing]]
    [controllers.question.question-controller :refer [question-get]]
    [db]
    [services.question-service.p-question-service :refer [PQuestionService]]))


(deftest test-question-get-validation
  (letfn [(get-question-by-id
            []
            {:question/statement "Why are we still here?"})
          (validate-user-for-question-success
            []
            {})
          (validate-user-for-question-failure
            []
            {:not-assigned-to-question "User not allowed to access question"})]

    (testing "When the user has access to a question, the statement must be in the returned in the html."
      (let [question-service (reify PQuestionService
                               (get-question-by-id
                                 [_ _id]
                                 (get-question-by-id))

                               (validate-user-for-question
                                 [_ _id _user_id]
                                 (validate-user-for-question-success)))
            question-response (question-get {} "put-destination" question-service)]
        (t/is (string/includes? question-response "Why are we still here?"))))

    (testing "When the user has no access to the question, an error message has to be displayed."
      (let [question-service (reify PQuestionService
                               (get-question-by-id
                                 [_ _id]
                                 (get-question-by-id))

                               (validate-user-for-question
                                 [_ _id _user_id]
                                 (validate-user-for-question-failure)))
            question-response (question-get {} "put-destination" question-service)]
        (t/is (string/includes? question-response "ERROR"))))))
