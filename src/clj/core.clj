(ns core
  (:require
   [compojure.coercions :refer [as-int]]
   [compojure.core :refer [GET defroutes]]
   [compojure.route :as route]
   [ring.adapter.jetty :refer [run-jetty]]
   [ring.middleware.defaults :refer :all]
   [ring.middleware.params :refer [wrap-params]]
   [ring.middleware.reload :refer [wrap-reload]]
   [ring.middleware.oauth2 :refer [wrap-oauth2]]
   [ring.util.request :refer [body-string]]))


(defroutes routes
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/check-random" [a :<< as-int b :<< as-int res :<< as-int]
    (str (= (+ a b) res)))
  (GET "/api/access-token" request (str (-> request :ring.middleware.oauth2/access-tokens :github)))
  (route/not-found "Not Found"))


(def app
  (let [profiles {:github
                  {:authorize-uri    "https://github.com/login/oauth/authorize"
                   :access-token-uri "https://github.com/login/oauth/access_token"
                   :client-id        "top secret"
                   :client-secret    "bottom secret"
                   :scopes           ["user:email"]
                   :launch-uri       "/api/oauth2/github"
                   :redirect-uri     "/api/oauth2/github/callback"
                   :landing-uri      "/api/access-token"}}]
    (-> routes
        (wrap-oauth2 profiles)
        (wrap-defaults (assoc-in site-defaults [:session :cookie-attrs :same-site] :lax))
        wrap-params)))


(def app-dev (wrap-reload #'app))

(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
