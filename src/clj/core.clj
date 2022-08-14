(ns core
  (:require
    [auth :refer [extract-token wrap-authentication]]
    [compojure.core :refer [GET POST defroutes context]]
    [compojure.route :as route]
    [db :as db]
    [domain]
    [muuntaja.middleware :refer [wrap-format]]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.cors :refer [wrap-cors]]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.util.response :refer [response]]))


(defroutes routes
  (context "/api" []
           ;; tests
           ;; maybe better route /tests
           (GET "/test" []
                (response (db/all-tests)))
           (GET "/test/:id" [id]
                (response (db/test-by-id id)))
           ;; fragen
           ;; do we need these route, why can't we embed the questions in the test
           (GET "/frage" []
                (response (db/all-fragen)))
           (GET "/frage/:id" [id]
                (response (db/frage-by-id id)))

           (GET "/antwort" []
                (response (db/all-antwort)))
           ;; antworten
           (POST "/user/:user-id/antworten" [user-id :as r]
                 (let [antworten (:body-params r)]
                   (response (db/user-add-antworten user-id antworten))))

           (GET "/user/:user-id/kurse" [user-id]
                (response (domain/kurse-mit-gesamt-punkten
                            (db/kurse-von-studierendem user-id)
                            (partial db/bewertete-antworten-von-test user-id))))

           (GET "/korrektur/:user-id" [user-id]
                (response
                  (->> (db/fragen-fuer-user user-id)
                       (domain/freitext-fragen)
                       (domain/sortierte-antworten-von-freitext-fragen db/antworten-von-frage)
                       (domain/antworten-unkorrigiert-und-nur-eine-pro-user-frage-test-id (db/alle-antworten-mit-korrekturen))
                       (domain/timestamp-to-datum-and-uhrzeit))))
           (GET "/bisherige-korrekturen/:user-id" [user-id]
                (response
                  (->> (db/fragen-fuer-user user-id)
                       (domain/freitext-fragen)
                       (domain/sortierte-antworten-von-freitext-fragen db/antworten-von-frage)
                       (domain/antworten-korrigiert (db/korrekturen-von-korrektorin-korrigiert user-id))
                       (domain/timestamp-to-datum-and-uhrzeit))))
           (GET "/antwort-fuer-korrektur/:aid" [aid]
             (response
               (->> (db/antworten-fuer-korrektur aid)
                    (domain/antworten-fuer-korrektur-ansicht)
                    (domain/korrekturen-into-antwort db/korrekturen-von-antwort))))
           (POST "/korrektur-fuer-antwort/:aid" [aid :as r]
             (let [korrektur (:body-params r)]
               (response
                 (->> (domain/check-incoming-korrektur korrektur (db/antworten-fuer-korrektur aid))
                      (domain/add-korrektur-if-no-error db/korrektor-add-korrektur aid))))))
  (GET "/api/access-token" request (str (extract-token request)))
  (GET "/api/session" request (str (:session request)))
  (route/not-found "Not Found"))


(def allowed-origins [#"http://localhost:8080" #"http://localhost:8081" #"http://localhost:8082" #"\*"])
(def allowed-methods [:get :post :put :delete])
(def allowed-headers #{:accept :content-type})


(def app
  (-> routes
      wrap-authentication
      (wrap-cors :access-control-allow-origin allowed-origins
                 :access-control-allow-methods allowed-methods
                 :access-control-allow-credentials "true")
      wrap-format ; handle content negotiation
      (wrap-defaults (-> site-defaults
                         (assoc-in [:session :cookie-attrs :same-site] :none)
                         (assoc-in [:session :cookie-attrs :secure] true)))
      wrap-params))


(def app-dev (wrap-reload #'app))


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
