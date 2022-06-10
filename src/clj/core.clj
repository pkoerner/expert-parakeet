(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET POST defroutes context]]
    [compojure.route :as route]
    [db :as db]
    [domain-functions :as df]
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
           (GET "/antwort/add" []
                (db/add-antwort-three-args 1 1 "Hallo"))
           ;; antworten
           ;; maybe better route /test/:test-id/antworten
           (POST "/test/:test-id/antwort" [test-id :<< as-int :as r]
                 (println "Neue Antworten für Test" test-id)
                 (response (db/add-antworten test-id (:body-params r))))

           (GET "/studierenden-uebersicht/user/:uid" [uid :<< as-int]
                (response
                  (df/studierenden-uebersicht-map uid db/kurse-by-user-id db/fach-by-kurs-id db/tests-by-kurs-id db/antworten-by-frage-user-id db/fragen-by-test-id))))
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
