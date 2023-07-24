(ns core
  (:gen-class)
  (:require
    [auth :refer [wrap-authentication]]
    [compojure.core :refer [defroutes GET POST]]
    [compojure.route :as route]
    [controllers.course-iteration.course-iteration-controller :refer [create-course-iteration-get submit-create-course-iteration!]]
    [domain]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
    [ring.middleware.reload :refer [wrap-reload]]
    [services.course-iteration-service.course-iteration-service :refer [->CourseIterationService]]
    [services.course-service.course-service :refer [->CourseService]]
    [services.course-service.p-course-service :refer [get-all-courses]]
    [services.question-set-service.p-question-set-service :refer [get-all-question-sets]]
    [services.question-set-service.question-set-service :refer [->QuestionSetService]]
    [util.ring-extensions :refer [html-response]]))


(def ^:private services
  {:course-service (->CourseService)
   :course-iteration-service (->CourseIterationService)
   :question-set-service (->QuestionSetService)})


;; all routes that dont need authentication go here
(defroutes public-routes
  (GET "/" req (html-response
                (if (auth/is-logged-in req)
                  (let [user-id "0"] ; TODO: Replace the '0' with (str (get-in req [:session :user :id]))
                    (views.student-overview/overview
                     (domain/course-iterations-with-total-points
                      (db/get-course-iterations-of-student user-id)
                      (partial db/get-graded-answers-of-question-set user-id))))
                  [:a {:href "/oauth2/github"} "Login"])))) ; TODO remove route, just an example to show login working



;; all routes that require authentication go here
(defroutes private-routes
<<<<<<< HEAD
  (GET "/private" _ "Only for logged in users.") ; TODO remove route, just example to show authenticated routes working 
=======
  (GET "/private" _ "Only for logged in users.") ; TODO remove route, just example to show authenticated routes working

  (GET "/create-course-iteration" req
       (html-response (create-course-iteration-get req "/create-course-iteration"
                                                   :get-courses-fun (partial get-all-courses (:course-service services))
                                                   :get-question-sets-fun (partial get-all-question-sets (:question-set-service services)))))
  (POST "/create-course-iteration" req
        (submit-create-course-iteration! req "/create-course-iteration" (:course-iteration-service services)))
>>>>>>> a0b930d8241880272489d01de0af53fefcdd70f8
  (route/not-found "Not Found"))


(defroutes combined-routes
  public-routes
  (wrap-authentication private-routes))


;; oauth2 middleware callback requires cookie setting :same-site to be lax, see: https://github.com/weavejester/ring-oauth2
(def app (-> combined-routes (wrap-defaults (-> site-defaults (assoc-in [:session :cookie-attrs :same-site] :lax)))))


;; in production, the app will be running behind a reverse proxy that does TLS
(def app-proxied (-> combined-routes (wrap-defaults (-> site-defaults (assoc-in [:session :cookie-attrs :same-site] :lax)))))

(def app-dev (wrap-reload #'app))


(defn start-dev-server
  [& _args]
  (run-jetty app-dev {:port 8081 :join? false}))


(defn -main
  [& _args]
  (run-jetty app-proxied {:port 8081 :join? false}))
