(ns core
  (:require
    [compojure.coercions :refer [as-int]]
    [compojure.core :refer [GET PUT defroutes context]]
    [compojure.route :as route]
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
           (GET "/tests-from-kurs/:id" [id :<< as-int]
                (db/tests-by-kurs-id id))
           ;; fragen
           (GET "/frage" []
                (str (db/all-fragen)))
           (GET "/frage/:id" [id :<< as-int]
                (str (db/frage-by-id id)))
           (GET "/fragen-from-test/:id" [id :<< as-int]
                (db/fragen-by-test-id id))

           (GET "/antwort" []
                (str (db/all-antwort)))
           (GET "/antwort/add" []
                (db/add-antwort-three-args 1 1 "Hallo"))
           ;; antworten
           (PUT "api/test/:test-id/antwort" [test-id :<< as-int antworten]
                (prn antworten)
                (db/add-antwort test-id antworten))
           (GET "/antworten-from-user-frage/:uid/:fid" [uid :<< as-int fid :<< as-int]
                (db/antworten-by-frage-user-id fid uid))
           ;; kurse
           (GET "/kurse-from-user/:id" [id :<< as-int]
                (prn (-> {}
                         (assoc :user-id id)
                         (assoc :kurse (into []  (db/kurs-by-user-id id)))))
                (str
                  (-> {}
                      (assoc :user-id id)
                      (assoc :kurse (into []  (db/kurs-by-user-id id))))))
           ;; Faecher
           (GET "/fach-from-kurs/:id" [id :<< as-int]
                (db/fach-by-kurs-id id)))
  (route/not-found "Not Found"))


(def app
  (-> routes
      wrap-params))


(def app-dev (wrap-reload #'app))


(defn start-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))
