(ns controller.question.question-controller
  (:require
    [db]
    [services.question-service.p-question-service :refer [get-question-by-id
                                                          validate-user-for-question]]
    [util.ring-extensions :refer [html-response]]
    [views.question :as view]))


(defn question-get
  [req put-destination-root question-service]
  (let [question-id (-> req :route-params :id)
        user-id     (str (-> req :session :user :id))
        question    (get-question-by-id question-service question-id)
        permission-error (validate-user-for-question question-service user-id question-id)]
    (if (empty? permission-error)
      (view/question-form question (str put-destination-root question-id))
      (view/no-question-assignment permission-error))))


(defn- add-to-db-and-get-success-msg
  [user-id question-id answer]
  (let [db-result (db/add-user-answer! user-id question-id answer)]
    (view/submit-success-view (:question/id db-result))))


(defn question-put!
  [req]
  (let [form-data (-> req (:params) (dissoc :__anti-forgery-token))
        user-id (str (-> req :session :user :id))
        question-id (:id form-data)
        answer (:answer form-data)
        multiple-answers (->> form-data
                              (keys)
                              (filter #(and (not= % :_method) (not= % :answer) (not= % :id)))
                              (into [])
                              (map name)
                              (into []))]
    (if (empty? multiple-answers)
      (html-response (add-to-db-and-get-success-msg user-id question-id answer))
      (html-response (add-to-db-and-get-success-msg user-id question-id multiple-answers)))))
