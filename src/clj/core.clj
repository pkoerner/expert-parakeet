(ns core
  (:use ring.adapter.jetty))

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})

(defn start-server [& args]
  (run-jetty handler {:port 8080}))
