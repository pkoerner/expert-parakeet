(ns core
  (:require
    [compojure.core :refer [GET, POST, defroutes]]
    ;; [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.reload :refer [wrap-reload]]))


(defroutes routes
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))
  (POST "/api/check-random" [a b res :as params]
        (prn a b res params)
        (= (+ a b) res)))


(defn app
  []
  (-> routes
      (wrap-reload)))


(defn handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})


(defn start-server
  [& _args]
  (run-jetty (app) {:port 8081 :join? false}))
