(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET defroutes context]]
    [compojure.route :as route]
    [datahike.api :as d]
    [db :as db]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]))


(defroutes routes
  (context "/api" []
           ;; tests
           (GET "/test" []
                (str (db/all-tests)))
           (GET "/test/:id" [id :<< as-int]
                (str (db/test-by-id id)))
           ;; fragen
           (GET "/frage" []
                (str (db/all-fragen)))
           (GET "/frage/:id" [id :<< as-int]
                (str (db/frage-by-id id))))
  (route/not-found "Not Found"))


(def app
  (-> routes
      wrap-params))


(def app-dev (wrap-reload #'app))


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
