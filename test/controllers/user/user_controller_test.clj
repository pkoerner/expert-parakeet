(ns controllers.user.user-controller-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [controllers.user.user-controller :refer [login submit-create-user]]
    [services.user-service.p-user-service :refer [PUserService]]))


(def authenticated-session {:user {:oauth-github-id "git-id"}})


(deftest test-login
  (testing "unauthenticated login request is redirected to oauth"
    (let [request {}
          user-service (reify PUserService)
          response (login request user-service)]
      (t/is (= 302 (response :status)))
      (t/is (= "/oauth2/github" (get-in response [:headers "Location"])))
      (t/is (nil? (-> response :session :user :id)))))
  (testing "authenticated login is logged in, when user exists"
    (let [request {:session authenticated-session}
          user-service (reify PUserService
                         (get-user-id-by-git-id
                           [_self _git-id]
                           "some-user-id"))
          response (login request user-service)]
      (t/is (-> response :session :user :id))))
  (testing "authenticated login is redirected to create user page, when user doesn't exist"
    (let [request {:session authenticated-session}
          user-service (reify PUserService
                         (get-user-id-by-git-id
                           [_self _git-id]
                           nil))
          response (login request user-service)]
      (t/is (= 302 (response :status)))
      (t/is (= "/create-user" (get-in response [:headers "Location"])))
      (t/is (nil? (-> response :session :user :id))))))


(deftest test-submit-create-user
  (testing "submit is unauthorized when git id is already in use"
    (let [request {:session authenticated-session}
          user-service (reify PUserService
                         (git-id-in-use?
                           [_self _git-id]
                           true))
          response (submit-create-user request "/" user-service)]
      (t/is (= 401 (response :status)))))
  (testing "The create-user! function is called with the correct values"
    (let [request {:session authenticated-session}
          redirect-url "/redirect-url"
          user-service (reify PUserService
                         (git-id-in-use?
                           [_self _git-id]
                           false)

                         (create-user!
                           [_self git-id]
                           (t/is (= git-id (-> request :session :user :oauth-github-id)))))
          response (submit-create-user request redirect-url user-service)]
      (t/is (= 302 (response :status)))
      (t/is (= redirect-url (get-in response [:headers "Location"]))))))
