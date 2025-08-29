(ns controllers.course-iteration.registration-controller
  (:require
    [ring.util.response :refer [redirect]]
    [services.course-iteration-service.p-course-iteration-service :refer [create-course-iteration-registration]]
    [util.ring-extensions :refer [html-response]]
    [views.course-iteration.registration-view :as view]))


(defn create-registration-get
  [req post-destination get-course-iterations-fun]
  (html-response
    (view/registration-get post-destination
                           (str (-> req :session :user :id))
                           (get-course-iterations-fun))))


(defn submit-create-registration
  [req redirect-url course-iteration-service]
  (let [form-data (-> req :params (dissoc :__anti-forgery-token))
        user-id (str (-> req :session :user :id))
        course-iteration-id (:course-iteration-id form-data)]
    (create-course-iteration-registration
      course-iteration-service
      course-iteration-id
      user-id)
    (redirect redirect-url)))
