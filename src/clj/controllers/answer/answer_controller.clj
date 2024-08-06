(ns controllers.answer.answer-controller
  (:require
    [services.answer-service.p-answer-service :refer [add-user-answer-to-question!]]
    [util.ring-extensions :refer [html-response]]
    [views.answer.answer-view :as view]))


(defn- add-to-db-and-get-success-msg
  [user-id question-id answer-or-solution-ids db-add-fun]
  (let [db-result (db-add-fun user-id question-id answer-or-solution-ids)]
    (view/submit-success-view (:answer/id db-result))))


(defn submit-user-answer!
  [req answer-service]
  (let [form-data (-> req (:params) (dissoc :__anti-forgery-token))
        user-id (str (-> req :session :user :id))
        question-id (:id form-data)
        free-text (:free-text form-data)
        solution-ids (:selected-solutions form-data)]
    (if (some? free-text)
      (html-response (add-to-db-and-get-success-msg
                       user-id
                       question-id
                       free-text
                       (partial add-user-answer-to-question! answer-service)))
      (html-response (add-to-db-and-get-success-msg
                       user-id
                       question-id
                       (if (string? solution-ids)
                         [solution-ids]
                         (vec solution-ids))
                       (partial add-user-answer-to-question! answer-service))))))
