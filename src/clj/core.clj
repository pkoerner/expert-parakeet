(ns core
  (:require
   [auth :refer [wrap-authentication]]
   [compojure.core :refer [defroutes GET]]
   [compojure.route :as route]
   [db]
   [domain]
   [hiccup2.core :as h]
   [ring.adapter.jetty :refer [run-jetty]]
   [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
   [ring.middleware.reload :refer [wrap-reload]]
   [ring.util.response :refer [header response]]
   [views.student-overview]))
 

(defn html-response
  [html]
  (-> html h/html str response (header "Content-Type" "text/html; charset=utf-8")))


;; all routes that dont need authentication go here
(defroutes public-routes
  (GET "/" req (html-response
                (if (auth/is-logged-in req)
                  (let [user-id "0"] ; TODO: Replace the '0' with (str (get-in req [:session :user :id]))
                    (views.student-overview/overview
                     (domain/course-iterations-with-total-points
                      (db/get-course-iterations-of-student user-id)
                      (partial db/get-graded-answers-of-question-set user-id))))
                  [:a {:href "/oauth2/github"} "Login"])))) ; TODO remove route, just an example to show login working



;; all routes that require authentication go here
(defroutes private-routes
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
