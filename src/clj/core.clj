(ns core
  (:require
    [auth :refer [wrap-authentication]]
    [compojure.core :refer [defroutes GET POST]]
    [compojure.route :as route]
    [controllers.course-iteration.course-iteration-controller :refer [create-course-iteration-get submit-create-course-iteration!]]
    [domain]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
    [ring.middleware.reload :refer [wrap-reload]]
    [util.ring-extensions :refer [html-response]]))


;; all routes that dont need authentication go here
(defroutes public-routes
  (GET "/" req (html-response
                 (if (auth/is-logged-in req)
                   [:p (str "Hello, " (str (get-in req [:session :user :id])))]
                   [:a {:href "/oauth2/github"} "Login"])))) ; TODO remove route, just an example to show login working


;; all routes that require authentication go here
(defroutes private-routes
  (GET "/private" _ "Only for logged in users.") ; TODO remove route, just example to show authenticated routes working

  (GET "/create-course-iteration" _
    (html-response (create-course-iteration-get "/create-course-iteration")))
  (POST "/create-course-iteration" req
    (html-response (submit-create-course-iteration! req)))
  
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
