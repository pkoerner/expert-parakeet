(ns core
  (:gen-class)
  (:require
    [auth :refer [wrap-authentication]]
    [compojure.core :refer [defroutes GET POST]]
    [compojure.route :as route]
    [controllers.course-iteration.course-iteration-controller :refer [create-course-iteration-get submit-create-course-iteration!]]
    [controllers.question.question-controller :refer [create-question-get
                                                      submit-create-question!]]
    [db]
    [domain]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :refer [secure-site-defaults
                                      site-defaults wrap-defaults]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.middleware.resource :refer [wrap-resource]]
    [services.course-iteration-service.course-iteration-service :refer [->CourseIterationService]]
    [services.course-service.course-service :refer [->CourseService]]
    [services.course-service.p-course-service :refer [get-all-courses]]
    [services.question-service.p-question-service :refer [get-question-categories]]
    [services.question-service.question-service :refer [->QuestionService]]
    [services.question-set-service.p-question-set-service :refer [get-all-question-sets]]
    [services.question-set-service.question-set-service :refer [->QuestionSetService]]
    [util.ring-extensions :refer [html-response]]))


(def db db/create-database)


(def ^:private services
  {:course-service (->CourseService db)
   :course-iteration-service (->CourseIterationService db)
   :question-set-service (->QuestionSetService db)
   :question-service (->QuestionService db)})


;; all routes that dont need authentication go here
(defroutes public-routes
  (GET "/" req (html-response
                 (if (auth/is-logged-in req)
                   [:p (str "Hello, " (str (get-in req [:session :user :id])))]
                   [:a {:href "/oauth2/github"} "Login"])))) ; TODO remove route, just an example to show login workin



;; all routes that require authentication go here
(defroutes private-routes
  (GET "/private" _ "Only for logged in users.") ; TODO remove route, just example to show authenticated routes working

  (GET "/create-course-iteration" req
       (html-response (create-course-iteration-get req "/create-course-iteration"
                                                   (partial get-all-courses (:course-service services))
                                                   (partial get-all-question-sets (:question-set-service services)))))
  (POST "/create-course-iteration" req
        (submit-create-course-iteration! req "/create-course-iteration" (:course-iteration-service services)))

  (GET "/create-question" req
       (html-response (create-question-get req (partial get-question-categories (:question-service services)) "/create-question")))
  (POST "/create-question" req
        (submit-create-question! req "/create-question" (:question-service services)))

  (route/not-found "Not Found"))


(defroutes combined-routes
  public-routes
  (wrap-authentication private-routes))


;; oauth2 middleware callback requires cookie setting :same-site to be lax, see: https://github.com/weavejester/ring-oauth2
(def app
  (-> combined-routes
      (wrap-resource "public") ; serving of static resources
      (wrap-defaults (-> site-defaults (assoc-in [:session :cookie-attrs :same-site] :lax)))))


;; in production, the app will be running behind a reverse proxy that does TLS
(def app-proxied (-> combined-routes (wrap-defaults (-> secure-site-defaults (assoc-in [:session :cookie-attrs :same-site] :lax) (assoc :proxy true)))))

(def app-dev (wrap-reload #'app))


(defn start-dev-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))


(defn -main
  [& _args]
  (run-jetty app-proxied {:port 8081 :join? false}))
