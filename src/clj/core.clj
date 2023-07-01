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
           ;; for consistency /question-sets would be better
           (GET "/question-sets" []
                (response (db/get-all-question-sets)))

           (POST "/question-set" [:as r]
                 (let [{:keys [test-name kurs-id punkte-grenze fragen start ende]} (:body-params r)]
                   (response (db/add-question-set! test-name kurs-id (read-string punkte-grenze)
                                                   fragen (time/of start) (time/of ende)))))

           (GET "/question-sets/:id" [id]
                (response (db/get-question-set-by-id id)))
           ;; fragen
           ;; do we need these route, why can't we embed the questions in the test
           (GET "/question" []
                (response (db/get-all-questions)))
           (GET "/question/:id" [id]
                (response (db/get-question-by-id id)))

           (GET "/course" []
                (response (db/get-all-courses)))


           (GET "/course-iteration/:id" [id]
                (response (db/get-course-iteration-by-id id)))

           (GET "/course-iteration/for-course/:course-id" [fach-id]
                (response (db/get-course-iterations-of-course fach-id)))

           ;; Changing /antwort to /answers as we query for all answers from db
           (GET "/answers" []
                (response (db/get-all-answers)))
           ;; antworten
           (POST "/user/:user-id/answers" [user-id :as r]
                 (let [answers (:body-params r)]
                   (response (db/add-multiple-user-answers! user-id answers))))

           (GET "/user/:user-id/course-iterations" [user-id]
                (response (domain/course-iterations-with-total-points
                            (db/get-course-iterations-of-student user-id)
                            (partial db/get-graded-answers-of-question-set user-id))))

           (GET "/course" []
                (response (db/get-all-courses)))

           (POST "/course" [:as r]
                 (let [fach-name (get-in r [:body-params :fach-name])]
                   (response (db/add-course! fach-name))))

           (GET "/course-iteration" []
                (response (db/get-all-courses)))

           (POST "/course-iteration" [:as r]
                 (let [body (:body-params r)]
                   (response (db/add-course-iteration! (:fach-id body) (read-string (:jahr body)) (:semester body)))))

           (GET "/course-iteration/:id" [id]
                (response (db/get-course-iteration-by-id id)))

           (GET "/correction/:user-id" [user-id]
                (response
                  (->> (db/get-questions-for-user user-id)
                       (domain/extract-free-text-questions)
                       (domain/sort-answers-of-free-text-questions-by-timestamp db/get-answers-for-question)
                       (domain/uncorrected-answers-with-distinct-ids (db/get-all-answers-with-corrections))
                       (domain/timestamp-to-date-and-time))))
           (GET "/corrections-to-date/:user-id" [user-id]
                (response
                  (->> (db/get-questions-for-user user-id)
                       (domain/extract-free-text-questions)
                       (domain/sort-answers-of-free-text-questions-by-timestamp db/get-answers-for-question)
                       (domain/corrected-answers (db/get-all-corrections-of-corrector user-id))
                       (domain/timestamp-to-date-and-time))))
           (GET "/answer-to-correction/:ans-id" [ans-id]
                (response
                  (->> (db/get-answers-for-correction ans-id)
                       (domain/answers-for-correction-view)
                       (domain/merge-latest-correction-with-answer db/get-corrections-of-answer))))
           (POST "/answer-to-correction/:ans-id" [ans-id :as r]
                 (let [korrektur (:body-params r)]
                   (response
                     (->> (domain/validate-incoming-correction korrektur (db/get-answers-for-correction ans-id))
                          (domain/add-correction-if-no-error db/add-correction! ans-id))))))
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
