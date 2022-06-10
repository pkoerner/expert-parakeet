(ns core
  (:require
    [compojure.core :refer [GET, defroutes]]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]))

(defroutes app
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)])))


(defn handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})


(defn start-server
  [& _args]
  (run-jetty app {:port 8081}))
