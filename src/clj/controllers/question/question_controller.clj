(ns controllers.question.question-controller
  (:require
    [db]
    [services.question-service.p-question-service :refer [get-question-by-id
                                                          validate-user-for-question]]
    [util.ring-extensions :refer [html-response]]
    [views.question.question-view :as view]))


(defn question-get
  [req put-destination-root question-service]
  (let [question-id (-> req :route-params :id)
        user-id     (str (-> req :session :user :id))
        question    (get-question-by-id question-service question-id)
        permission-error (validate-user-for-question question-service user-id question-id)]
    (if (empty? permission-error)
      (html-response (view/question-form question (str put-destination-root question-id)))
      (html-response (view/no-question-assignment permission-error)))))
