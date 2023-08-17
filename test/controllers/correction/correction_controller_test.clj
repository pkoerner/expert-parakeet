(ns controllers.correction.correction-controller-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [controllers.correction.correction-controller :refer [correction-overview-get]]
    [services.correction-service.p-correction-service :refer [PCorrectionService]]))


(defn- request
  [tab page _user-id]
  {:params {:tab tab :page page} :session {:user {:id "0"}}})


(deftest test-correction-overview-get
  (testing "Correction service is called with correct params on 'corrections' tab"
    (let [was-called (atom false)
          user-id-param "0"
          req (request "corrections" "1" user-id-param)
          correction-service (reify PCorrectionService
                               (get-corrections-from-user-as
                                 [_self user-id role]
                                 (swap! was-called (fn [_] true))
                                 (t/is (= user-id user-id-param))
                                 (t/is (= role :student))
                                 nil))]
      (correction-overview-get req correction-service)
      (t/is @was-called)))

  (testing "Correction service is called with correct params on 'corrected' tab"
    (let [was-called (atom false)
          user-id-param "0"
          req (request "corrected" "1" user-id-param)
          correction-service (reify PCorrectionService
                               (get-corrections-from-user-as
                                 [_self user-id role]
                                 (swap! was-called (fn [_] true))
                                 (t/is (= user-id user-id-param))
                                 (t/is (= role :corrector))
                                 nil))]
      (correction-overview-get req correction-service)
      (t/is @was-called))))
