(ns core
  (:require [ring.adapter.jetty :refer [run-jetty]]))

(defn handler [_request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})

(defn start-server [& _args]
  (run-jetty handler {:port 8080}))
