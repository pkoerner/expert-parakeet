(ns services.correction-service.correction-service-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [db :refer [Database-Protocol]]
    [services.correction-service.correction-service :refer [->CorrectionService]]
    [services.correction-service.p-correction-service :refer [get-corrections-from-user-as]]))


(deftest test-get-corrections-from-user-as
  (testing "CorrectionService implementation calls database query for the :student role"
    (let [was-called (atom false)
          user-id-param "0"
          db-stub (reify Database-Protocol
                    (get-all-corrections-from-user
                      [_this user-id]
                      (swap! was-called (fn [_] true))
                      (t/is (= user-id user-id-param))
                      []))
          correction-service (->CorrectionService db-stub)]
      (get-corrections-from-user-as correction-service user-id-param :student)
      (t/is @was-called)))
  (testing "CorrectionService implementation calls database query for the :corrector role"
    (let [was-called (atom false)
          user-id-param "0"
          db-stub (reify Database-Protocol
                    (get-all-corrections-from-corrector
                      [_this user-id]
                      (swap! was-called (fn [_] true))
                      (t/is (= user-id user-id-param))
                      []))
          correction-service (->CorrectionService db-stub)]
      (get-corrections-from-user-as correction-service user-id-param :corrector)
      (t/is @was-called))))
