(ns core
  (:require
    [auth :refer [wrap-authentication]]
    [compojure.core :refer [defroutes GET PUT]]
    [compojure.route :as route]
    [controller.question-set.question-set-controller :refer [question-set-get]]
    [controller.question.question-controller :refer [question-get question-put!]]
    [db]
    [domain]
    [hiccup2.core :as h]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.util.response :refer [header response]]))


(defn html-response
  [html]
  (-> html h/html str response (header "Content-Type" "text/html; charset=utf-8")))


;; all routes that dont need authentication go here
(defroutes public-routes
  (GET "/" req (html-response
                 (if (auth/is-logged-in req)
                   [:p (str "Hello, " (str (get-in req [:session :user :id])))]
                   [:a {:href "/oauth2/github"} "Login"])))) ; TODO remove route, just an example to show login working


;; all routes that require authentication go here
(defroutes private-routes
  (GET "/question-set/:id"
       req
       (html-response (question-set-get req)))
  (GET "/question/:id"
       req
       (html-response (question-get req "/question/")))
  (PUT "/question/:id"
       req
       (html-response (question-put! req)))
  (GET "/private" _ "Only for logged in users.") ; TODO remove route, just example to show authenticated routes working
  (route/not-found "Not Found"))


(defroutes combined-routes
  public-routes
  (wrap-authentication private-routes))


;; oauth2 middleware callback requires cookie setting same site to be lax, see: https://github.com/weavejester/ring-oauth2
(def app (-> combined-routes (wrap-defaults (-> site-defaults (assoc-in [:session :cookie-attrs :same-site] :lax)))))


(def app-dev (wrap-reload #'app))


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
