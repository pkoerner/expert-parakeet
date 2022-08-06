(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET POST defroutes context]]
    [compojure.route :as route]
    [db :as db]
    [domain]
    [muuntaja.middleware :refer [wrap-format]]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.cors :refer [wrap-cors]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.util.response :refer [response]]))


(defroutes routes
  (context "/api" []
           ;; tests
           ;; maybe better route /tests
           (GET "/test" []
                (response (db/all-tests)))
           (GET "/test/:id" [id :<< as-int]
                (response (db/test-by-id id)))
           ;; fragen
           ;; do we need these route, why can't we embed the questions in the test
           (GET "/frage" []
                (response (db/all-fragen)))
           (GET "/frage/:id" [id :<< as-int]
                (response (db/frage-by-id id)))

           (GET "/antwort" []
                (response (db/all-antwort)))
           ;; antworten
           ;; maybe better route /test/:test-id/antworten
           (POST "/test/:test-id/antwort" [test-id :<< as-int]
                 (println "Neue Antworten für Test" test-id))

           (GET "/user/:uid/kurse" [uid :<< as-int]
                (response (domain/kurse-mit-gesamt-punkten
                            (db/kurse-von-studierendem uid)
                            (partial db/antworten-von-test uid))))

           (GET "/korrektur/:uid" [uid :<< as-int]
                (response
                  (->> (db/fragen-fuer-user uid)
                       (domain/freitext-fragen)
                       (domain/sortierte-antworten-von-freitext-fragen db/antworten-von-frage)
                       (domain/antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id (db/alle-antworten-mit-korrekturen))
                       (domain/timestamp-to-datum-and-uhrzeit))))
           (GET "/bisherige-korrekturen/:uid" [uid :<< as-int]
                (response
                  (->> (db/fragen-fuer-user uid)
                       (domain/freitext-fragen)
                       (domain/sortierte-antworten-von-freitext-fragen db/antworten-von-frage)
                       (domain/antworten-korrigiert (db/antworten-von-korrektorin-korrigiert uid))
                       (domain/timestamp-to-datum-and-uhrzeit)))))
  (route/not-found "Not Found"))


(def allowed-origins [#"http://localhost:8080" #"http://localhost:8081" #"http://localhost:8082" #"\*"])
(def allowed-methods [:get :post :put :delete])
(def allowed-headers #{:accept :content-type})


(def app
  (-> routes
      wrap-format ; handle content negotiation
      wrap-params
      (wrap-cors :access-control-allow-origin allowed-origins
                 :access-control-allow-methods allowed-methods)))


(def app-dev (wrap-reload #'app))


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
