(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET defroutes]]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.cors :refer [wrap-cors]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]))


(defroutes routes
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/check-random" [a :<< as-int b :<< as-int res :<< as-int]
       (str (= (+ a b) res)))
  (route/not-found "Not Found"))


(def allowed-origins [#"http://localhost:8080" #"http://localhost:8081" #"\*"])
(def allowed-methods [:get :post :put :delete])
(def allowed-headers #{:accept :content-type})


(def app
  (-> routes
      wrap-params
      (wrap-cors :access-control-allow-origin allowed-origins
                 :access-control-allow-methods allowed-methods)))


(def app-dev (wrap-reload #'app))


(defn handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
