(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET defroutes context]]
    [compojure.route :as route]
    [db :as db]
    [datahike.api :as d]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]))


(defroutes routes
  (context "/api" []
           ;; tests
           (GET "/test" [] 
                (str (mapv first (d/q '[:find ?id
                                  :where [_ :test/id ?id]] 
                                @db/conn))))
           (GET "/test/:id" [id :<< as-int] 
                (str (d/pull @db/conn 
                             [:test/id {:test/fragen [:frage/frage-text :frage/punkte :frage/typ]}] 
                             [:test/id id])))
           ;; fragen
           (GET "/frage" [] 
                (str (mapv first (d/q '[:find (pull ?e [:frage/id])
                                        :where [?e :frage/id]] 
                                      @db/conn))))
           (GET "/frage/:id" [id :<< as-int] 
                (str (d/pull @db/conn 
                             [:frage/frage-text :frage/punkte :frage/typ] 
                             [:frage/id id])))
           )
  (route/not-found "Not Found"))

(def app
  (-> routes
      wrap-params))

(def app-dev (wrap-reload #'app))

(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
