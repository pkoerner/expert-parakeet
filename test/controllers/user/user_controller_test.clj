(ns controllers.user.user-controller-test
  (:require
    [clojure.test :as t :refer [deftest testing]]
    [controllers.user.user-controller :refer [login submit-create-user]]
    [services.user-service.p-user-service :refer [PUserService]]))


(def authenticated-session {:user {:oauth-github-id "github-id"}})


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
                         (get-user-id-by-github-id
                           [_self _github-id]
                           "some-user-id"))
          response (login request user-service)]
      (t/is (-> response :session :user :id))))
  (testing "authenticated login is redirected to create user page, when user doesn't exist"
    (let [request {:session authenticated-session}
          user-service (reify PUserService
                         (get-user-id-by-github-id
                           [_self _github-id]
                           nil))
          response (login request user-service)]
      (t/is (= 302 (response :status)))
      (t/is (= "/create-user" (get-in response [:headers "Location"])))
      (t/is (nil? (-> response :session :user :id))))))


(deftest test-submit-create-user
  (testing "submit is unauthorized when github id is already in use"
    (let [request {:session authenticated-session}
          user-service (reify PUserService
                         (github-id-in-use?
                           [_self _github-id]
                           true))
          response (submit-create-user request "/" user-service)]
      (t/is (= 401 (response :status)))))
  (testing "The create-user! function is called with the correct values"
    (let [request {:session authenticated-session
                   :params {:user-name "satan"
                            :matriculation-id "666"}}
          redirect-url "/redirect-url"
          user-service (reify PUserService
                         (github-id-in-use?
                           [_self _github-id]
                           false)

                         (create-user!
                           [_self github-id name matriculation-id]
                           (t/is (and
                                   (= github-id (-> request :session :user :oauth-github-id))
                                   (= name (-> request :params :user-name))
                                   (= matriculation-id (-> request :params :matriculation-id))))))
          response (submit-create-user request redirect-url user-service)]
      (t/is (= 302 (response :status)))
      (t/is (= redirect-url (get-in response [:headers "Location"]))))))
