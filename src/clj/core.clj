(ns core
  (:gen-class)
  (:require
    [auth :refer [wrap-authentication]]
    [compojure.core :refer [defroutes GET POST PUT]]
    [compojure.route :as route]
    [controllers.answer.answer-controller :refer [submit-user-answer!]]
    [controllers.correction.correction-controller :refer [correction-overview-get]]
    [controllers.course-iteration.course-iteration-controller :refer [create-course-iteration-get submit-create-course-iteration!]]
    [controllers.course.course-controller :refer [create-course-get submit-create-course!]]
    [controllers.question-set.question-set-controller :refer [question-set-get]]
    [controllers.question.question-controller :refer [create-question-get
                                                      question-get
                                                      submit-create-question!]]
    [controllers.user.user-controller :refer [login create-user-get submit-create-user]]
    [db]
    [domain]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :refer [secure-site-defaults
                                      site-defaults wrap-defaults]]
    [ring.middleware.reload :refer [wrap-reload]]
    [ring.middleware.resource :refer [wrap-resource]]
    [services.answer-service.answer-service :refer [->AnswerService]]
    [services.correction-service.correction-service :refer [->CorrectionService]]
    [services.course-iteration-service.course-iteration-service :refer [->CourseIterationService]]
    [services.course-service.course-service :refer [->CourseService]]
    [services.course-service.p-course-service :refer [get-all-courses]]
    [services.question-service.p-question-service :refer [get-question-categories]]
    [services.question-service.question-service :refer [->QuestionService]]
    [services.question-set-service.p-question-set-service :refer [get-all-question-sets]]
    [services.question-set-service.question-set-service :refer [->QuestionSetService]]
    [services.user-service.user-service :refer [->UserService]]
    [util.ring-extensions :refer [html-response]]
    [views.template :refer [wrap-navbar-and-footer]]))


(def db db/create-database)


(def ^:private services
  {:course-service (->CourseService db)
   :course-iteration-service (->CourseIterationService db)
   :question-set-service (->QuestionSetService db)
   :question-service (->QuestionService db)
   :answer-service (->AnswerService db)
   :user-service (->UserService db)
   :correction-service (->CorrectionService db)})


;; all routes that dont need authentication go here
(defroutes public-routes
  (GET "/" req
       (if (auth/is-logged-in? req)
         (html-response [:div
                         [:p [:i (str "coo coo. ")] (str "Github User " (str (get-in req [:session :user :id])) " authenticated.")]
                         [:img {:src "img/logo.jpeg" :style (str "max-width: 50%; max-height: 50%")}]])
         (html-response [:p "Hello stranger. Please " [:a {:href "/login"} "Login"] "."])))
  (GET "/login" req (login req (services :user-service)))
  (GET "/create-user" req (html-response (create-user-get req "/create-user" (services :user-service))))
  (POST "/create-user" req (submit-create-user req "/login" (services :user-service))))


;; all routes that require authentication go here
(defroutes private-routes
  (GET "/question-set/:id"
       req
       (html-response (question-set-get req (:question-set-service services))))

  (GET "/question/:id"
       req
       (question-get req "/question/" (:question-service services)))

  (PUT "/question/:id"
       req
       (submit-user-answer! req (:answer-service services)))

  (GET "/create-question" req
       (html-response (create-question-get req (partial get-question-categories (:question-service services)) "/create-question")))

  (POST "/create-question" req
        (submit-create-question! req "/create-question" (:question-service services)))

  (GET "/create-course" req
       (html-response (create-course-get req "/create-course")))

  (POST "/create-course" req
        (submit-create-course! req "/create-course" (:course-service services)))

  (GET "/create-course-iteration" req
       (html-response (create-course-iteration-get req "/create-course-iteration"
                                                   (partial get-all-courses (:course-service services))
                                                   (partial get-all-question-sets (:question-set-service services)))))
  (POST "/create-course-iteration" req
        (submit-create-course-iteration! req "/create-course-iteration" (:course-iteration-service services)))

  (GET "/private" _ "Only for logged in users.") ; TODO remove route, just example to show authenticated routes working

  (GET "/correction-overview" req
       (html-response (correction-overview-get req (services :correction-service))))

  (route/not-found "Not Found"))


(defroutes combined-routes
  public-routes
  (wrap-authentication private-routes))


;; oauth2 middleware callback requires cookie setting :same-site to be lax, see: https://github.com/weavejester/ring-oauth2
(def app
  (-> combined-routes
      (wrap-navbar-and-footer)
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
