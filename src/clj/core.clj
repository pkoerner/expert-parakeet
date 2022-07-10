(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET defroutes]]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]))


(defroutes routes
  (GET "/api/random" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/random3" [] (str [(rand-int 10) (rand-int 10)]))
  (GET "/api/check-random" [a :<< as-int b :<< as-int res :<< as-int]
       (str (= (+ a b) res)))
  (GET "/api/demo-questions" []
       (str [{:question-id 0 :question "Fühlen Sie sich prüfungsbereit?" :points 0}
             {:question-id 1 :question "Was ist der Sinn des Lebens?" :points 42}]))
  (GET "/api/demo-check" [answers]
       (str (mapv (fn [[id ans]] (str "Antwort für Frage " id " ist korrekt (Antwort: " ans ")"))
                  (read-string answers))))
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
