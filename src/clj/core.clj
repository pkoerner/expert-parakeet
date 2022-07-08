(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET defroutes context]]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]))


(defn get-test-by-id
  [id]
  {:test-id id
   :questions [{:question-id 0 :question "Fühlen Sie sich prüfungsbereit?" :points 0}
               {:question-id 1 :question "Was ist der Sinn des Lebens?" :points 42}]})


(defroutes routes
  (context "/api" []
           (GET "/test" [] [])
           (GET "/test/:test-id" [test-id] (str (get-test-by-id test-id)))
           (GET "/check-random" [a :<< as-int b :<< as-int res :<< as-int]
                (str (= (+ a b) res))))

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
