(ns controllers.question-set.question-set-test
  (:require
   [db]
   [clojure.test :as t :refer [deftest testing]]
   [controllers.question-set.question-set-controller :refer [question-set-get]]
   [services.question-set-service.p-question-set-service :refer [PQuestionSetService]]
   [clojure.string :as string]))

(deftest test-question-set-get-validation
  (letfn [(get-question-set-by-id
            []
            {:question-set/name "Der text der Frage"})
          (validate-user-for-question-set-success
            []
            {})
          (validate-user-for-question-set-failure
            []
            {:not-assigned-to-question-set "User not allowed to access question set"})]

    (testing "When the user has access to the question-set, the statement must be in the returned in the html."
      (let [question-set-service (reify PQuestionSetService
                               (get-question-set-by-id [this _id]
                                 (get-question-set-by-id))
                               (validate-user-for-question-set [this _id _user_id]
                                 (validate-user-for-question-set-success)))
            question-set-response (question-set-get {} question-set-service)]
        (t/is (string/includes? question-set-response "Der text der Frage"))))

    (testing "When the user has no access to the question-set, an error message has to be displayed."
      (let [question-set-service (reify PQuestionSetService
                               (get-question-set-by-id [this _id]
                                 (get-question-set-by-id))
                               (validate-user-for-question-set [this _id _user_id]
                                 (validate-user-for-question-set-failure)))
            question-set-response (question-set-get {} question-set-service)]
        (t/is (string/includes? question-set-response "ERROR"))))))

(t/run-test test-question-set-get-validation)
