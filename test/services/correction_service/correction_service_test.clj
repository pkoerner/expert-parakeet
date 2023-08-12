(ns services.correction-service.correction-service-test
  (:require
   [clojure.test :as t :refer [deftest testing]]
   [db :refer [Database-Protocol]]
   [services.correction-service.p-correction-service :refer [perform-auto-correction]]
   [services.correction-service.correction-service :refer [->CorrectionService]]))

(deftest test-performing-auto-correction-for-single-choice-questions
  (testing "test that wrongly answered single-choice questions receive zero points"
    (let [db-stub (reify Database-Protocol
                    (get-answers-for-auto-correction
                      [_ _]
                      [#:answer{:id "555",
                                :answer ["immutable"],
                                :question #:question{:points 1, :single-choice-solution "mutable"}}]))
          correction-service (->CorrectionService db-stub)
          auto-correction-points (perform-auto-correction correction-service "555")]
      (t/is (= auto-correction-points 0))))
  (testing "test that correctly answered single-choice questions receive full points"
    (let [db-stub (reify Database-Protocol
                    (get-answers-for-auto-correction
                      [_ _]
                      [#:answer{:id "555",
                                :answer ["mutable"],
                                :question #:question{:points 42, :single-choice-solution "mutable"}}]))
          correction-service (->CorrectionService db-stub)
          auto-correction-points (perform-auto-correction correction-service "555")]
      (t/is (= auto-correction-points 42)))))



