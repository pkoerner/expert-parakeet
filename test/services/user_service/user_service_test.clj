(ns services.user-service.user-service-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [db :refer [Database-Protocol]]
    [services.user-service.p-user-service :refer [create-user! get-user-id-by-github-id github-id-in-use?]]
    [services.user-service.user-service :refer [->UserService]]))


(deftest test-github-id-in-use?
  (testing "UserService implementation calls database query for user id by github id."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-user-id-by-github-id
                      [_this _git-id]
                      (swap! was-called (fn [_] true))
                      {}))
          user-service (->UserService db-stub)]
      (github-id-in-use? user-service "some-github-id")
      (t/is @was-called)))
  (testing "Returns false if no user exists for github-id"
    (let [db-stub (reify Database-Protocol
                    (get-user-id-by-github-id
                      [_this _git-id]
                      nil))
          user-service (->UserService db-stub)
          result (github-id-in-use? user-service "some-github-id")]
      (t/is (= result false))))
  (testing "Returns true if user exists for github-id"
    (let [db-stub (reify Database-Protocol
                    (get-user-id-by-github-id
                      [_this _git-id]
                      "some-user-id"))
          user-service (->UserService db-stub)
          result (github-id-in-use? user-service "some-github-id")]
      (t/is (= result true)))))


(deftest test-create-user
  (testing "UserService implementation calls database query to create a user"
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (add-user!
                      [_this _git-id]
                      (swap! was-called (fn [_] true))
                      {}))
          user-service (->UserService db-stub)]
      (create-user! user-service "some-github-id"))))


(deftest test-get-user-id-by-github-id
  (testing "UserService implementation calls database query for user id by github id"
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-user-id-by-github-id
                      [_this _git-id]
                      (swap! was-called (fn [_] true))
                      {}))
          user-service (->UserService db-stub)]
      (get-user-id-by-github-id user-service "some-github-id")
      (t/is @was-called))))
