(ns services.correction-queue-service.correction-queue-service-test
  (:require
   [clojure.test :as t :refer [deftest testing]]
   [db :refer [Database-Protocol]]
   [services.correction-queue-service.p-correction-queue-service :refer [get-unassigned-answer-for-question
                                                                         get-assigned-answer-for-question
                                                                         assign-answer-to-user
                                                                         get-all-assignments
                                                                         get-all-uncorrected-assignments-for-user-and-question
                                                                         get-correction-queue-statistics
                                                                         get-number-of-assigned-and-unassigned-answers]]
   [services.correction-queue-service.correction-queue-service :refer [->CorrectionQueueService]]))

(deftest test-get-unassiged-answer-for-question!
  (testing "CorrectionQueueService implementation calls database query for get unassigned answer for question."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-unassigned-answer-for-question
                      [_this _question]
                      (swap! was-called (fn [_] true))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (get-unassigned-answer-for-question correction-queue-service "1")
      (t/is @was-called))))

(deftest test-get-assiged-answer-for-question!
  (testing "CorrectionQueueService implementation calls database query for get assigned answer for question."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-assigned-answer-for-question
                      [_this _user _question]
                      (swap! was-called (fn [_] true))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (get-assigned-answer-for-question correction-queue-service "1" "1")
      (t/is @was-called))))

(deftest test-assign-answer-to-user!
  (testing "CorrectionQueueService implementation calls database query to assign an answer to a user."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (add-assignment!
                      [_this _user _answer]
                      (swap! was-called (fn [_] true))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (assign-answer-to-user correction-queue-service "1" "1")
      (t/is @was-called))))

(deftest test-get-all-assignments!
  (testing "CorrectionQueueService implementation calls database query to get all assignments."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-all-assignments
                      [_this]
                      (swap! was-called (fn [_] true))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (get-all-assignments correction-queue-service)
      (t/is @was-called))))

(deftest test-get-all-uncorrected-assignments-for-user-and-question!
  (testing "CorrectionQueueService implementation calls database query to get all uncorrected assignments."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-all-uncorrected-assignments-for-user-and-question
                      [_this _user _question]
                      (swap! was-called (fn [_] true))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (get-all-uncorrected-assignments-for-user-and-question correction-queue-service "1" "1")
      (t/is @was-called))))

(deftest test-get-correction-queue-statistics!
  (testing "CorrectionQueueService implementation calls multiple database queries to get correction queue statistics."
    (let [was-called (atom {:answer-count-was-called false
                            :correction-count-was-called false
                            :correction-by-user-count-was-called false})
          db-stub (reify Database-Protocol
                    (get-answer-count
                      [_this _question]
                      (swap! was-called (fn [m] (update m :answer-count-was-called (fn [_] true))))
                      {})
                    (get-correction-count
                      [_this _question]
                      (swap! was-called (fn [m] (update m :correction-count-was-called (fn [_] true))))
                      {})
                    (get-correction-by-user-count
                      [_this _user _question]
                      (swap! was-called (fn [m] (update m :correction-by-user-count-was-called (fn [_] true))))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (get-correction-queue-statistics correction-queue-service "1" "1")
      (let [temp @was-called
            answer-count-was-called (temp :answer-count-was-called)
            correction-count-was-called (temp :correction-count-was-called)
            correction-by-user-count-was-called (temp :correction-by-user-count-was-called)]
      (t/is answer-count-was-called)
      (t/is correction-count-was-called)
      (t/is correction-by-user-count-was-called)))))

(deftest test-get-number-of-assigned-and-unassigned-answers!
  (testing "CorrectionQueueService implementation calls two database queries to get the number of assigned and unassigned answers."
    (let [was-called (atom {:assigned-answer-count-was-called false
                            :unassigned-answer-count-was-called false})
          db-stub (reify Database-Protocol
                    (get-assigned-answer-count
                      [_this _user _question]
                      (swap! was-called (fn [m] (update m :assigned-answer-count-was-called (fn [_] true))))
                      {})
                    (get-unassigned-answer-count
                      [_this _question]
                      (swap! was-called (fn [m] (update m :unassigned-answer-count-was-called (fn [_] true))))
                      {}))
          correction-queue-service (->CorrectionQueueService db-stub)]
      (get-number-of-assigned-and-unassigned-answers correction-queue-service "1" "1")
      (let [temp @was-called
            assigned-answer-count-was-called (temp :assigned-answer-count-was-called)
            unassigned-answer-count-was-called (temp :unassigned-answer-count-was-called)]
      (t/is assigned-answer-count-was-called)
      (t/is unassigned-answer-count-was-called)))))
