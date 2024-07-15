(ns services.user-service.user-service-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [db :refer [Database-Protocol]]
    [services.user-service.p-user-service :refer [create-user! get-user-id-by-git-id git-id-in-use?]]
    [services.user-service.user-service :refer [->UserService]]))


(deftest test-git-id-in-use?
  (testing "UserService implementation calls database query for user id by git id."
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-user-id-by-git-id
                      [_this _git-id]
                      (swap! was-called (fn [_] true))
                      {}))
          user-service (->UserService db-stub)]
      (git-id-in-use? user-service "some-git-id")
      (t/is @was-called)))
  (testing "Returns false if no user exists for git-id"
    (let [db-stub (reify Database-Protocol
                    (get-user-id-by-git-id
                      [_this _git-id]
                      nil))
          user-service (->UserService db-stub)
          result (git-id-in-use? user-service "some-git-id")]
      (t/is (= result false))))
  (testing "Returns true if user exists for git-id"
    (let [db-stub (reify Database-Protocol
                    (get-user-id-by-git-id
                      [_this _git-id]
                      "some-user-id"))
          user-service (->UserService db-stub)
          result (git-id-in-use? user-service "some-git-id")]
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
      (create-user! user-service "some-git-id"))))


(deftest test-get-user-id-by-git-id
  (testing "UserService implementation calls database query for user id by git id"
    (let [was-called (atom false)
          db-stub (reify Database-Protocol
                    (get-user-id-by-git-id
                      [_this _git-id]
                      (swap! was-called (fn [_] true))
                      {}))
          user-service (->UserService db-stub)]
      (get-user-id-by-git-id user-service "some-git-id")
      (t/is @was-called))))
