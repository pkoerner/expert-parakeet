(ns controllers.answer.answer-controller
  (:require
   [services.answer-service.p-answer-service :refer [add-user-answer-to-question!]]
   [views.answer.answer-view :as view]
   [util.ring-extensions :refer [html-response]]))

(defn- add-to-db-and-get-success-msg
  [user-id question-id answer db-add-fun]
  (let [db-result (db-add-fun user-id question-id answer)]
    (view/submit-success-view (:question/id db-result))))


(defn submit-user-answer!
  [req answer-service]
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
      (html-response (add-to-db-and-get-success-msg user-id question-id answer (partial add-user-answer-to-question! answer-service)))
      (html-response (add-to-db-and-get-success-msg user-id question-id multiple-answers (partial add-user-answer-to-question! answer-service))))))