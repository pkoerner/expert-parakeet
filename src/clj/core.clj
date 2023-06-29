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
    [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.util.response :refer [response]]
    [util.time :as time]))


(defroutes routes
  (context "/api" []
           ;; tests
           ;; maybe better route /tests
           (GET "/test" []
                (response (db/get-all-question-sets)))

           (POST "/test" [:as r]
                 (let [{:keys [test-name kurs-id punkte-grenze fragen start ende]} (:body-params r)]
                   (response (db/add-test test-name kurs-id (read-string punkte-grenze)
                                          fragen (time/of start) (time/of ende)))))
    
           (GET "/test/:id" [id]
                (response (db/get-question-set-by-id id)))
           ;; fragen
           ;; do we need these route, why can't we embed the questions in the test
           (GET "/frage" []
                (response (db/get-all-questions)))
           (GET "/frage/:id" [id]
                (response (db/get-question-by-id id)))

           (GET "/fach" []
                (response (db/all-faecher)))


           (GET "/kurs/:id" [id]
                (response (db/kurs-by-id id)))

           (GET "/kurs/for-fach/:fach-id" [fach-id]
                (response (db/kurse-for-fach fach-id)))

           (GET "/antwort" []
                (response (db/get-all-answers)))
           ;; antworten
           (POST "/user/:user-id/antworten" [user-id :as r]
                 (let [antworten (:body-params r)]
                   (response (db/add-multiple-user-answers! user-id antworten))))

           (GET "/user/:user-id/kurse" [user-id]
                (response (domain/courses-with-total-points
                            (db/get-courses-of-student user-id)
                            (partial db/get-graded-answers-of-question-set user-id))))

           (GET "/fach" []
                (response (db/all-faecher)))

           (POST "/fach" [:as r]
                 (let [fach-name (get-in r [:body-params :fach-name])]
                   (response (db/add-fach fach-name))))

           (GET "/kurs" []
                (response (db/all-kurse)))

           (GET "/kurs/:id" [id]
                (response (db/kurs-by-id id)))

           (POST "/kurs" [:as r]
                 (let [body (:body-params r)]
                   (response (db/add-kurs (:fach-id body) (read-string (:jahr body)) (:semester body)))))

           (GET "/korrektur/:user-id" [user-id]
                (response
                  (->> (db/get-questions-for-user user-id)
                       (domain/extract-free-text-questions)
                       (domain/sort-answers-of-free-text-questions-by-timestamp db/get-answers-for-question)
                       (domain/uncorrected-answers-with-distinct-ids (db/get-all-answers-with-corrections))
                       (domain/timestamp-to-date-and-time))))
           (GET "/bisherige-korrekturen/:user-id" [user-id]
                (response
                  (->> (db/get-questions-for-user user-id)
                       (domain/extract-free-text-questions)
                       (domain/sort-answers-of-free-text-questions-by-timestamp db/get-answers-for-question)
                       (domain/corrected-answers (db/get-all-corrections-of-corrector user-id))
                       (domain/timestamp-to-date-and-time))))
           (GET "/antwort-fuer-korrektur/:aid" [aid]
                (response
                  (->> (db/get-answers-for-correction aid)
                       (domain/answers-for-correction-view)
                       (domain/merge-latest-correction-with-answer db/get-corrections-of-answer))))
           (POST "/korrektur-fuer-antwort/:aid" [aid :as r]
                 (let [korrektur (:body-params r)]
                   (response
                     (->> (domain/check-incoming-korrektur korrektur (db/get-answers-for-correction aid))
                          (domain/add-korrektur-if-no-error db/add-correction! aid))))))
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
      (wrap-defaults (-> api-defaults
                         (assoc-in [:session :cookie-attrs :same-site] :none)
                         (assoc-in [:session :cookie-attrs :secure] true)))
      wrap-params))


(def app-dev (wrap-reload #'app))


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
