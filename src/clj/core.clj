(ns core
  (:require
    [compojure.core :refer [GET POST defroutes]]
    [compojure.coercions :refer [as-int]]
    [ring.util.response :refer [response]]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.middleware.params :refer [wrap-params]]))


(defroutes routes
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/check-random"[a :<< as-int b :<< as-int res :<< as-int]
        (str (= (+ a b) res)))
  (route/not-found "Not Found"))


(def app
  (-> routes
      wrap-params))

(def app-dev (wrap-reload #'app))

(defn handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
