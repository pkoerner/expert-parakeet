(ns controllers.question-set.question-set-controller
  (:require
    [services.question-set-service.p-question-set-service :refer [get-question-set-by-id
                                                                  validate-user-for-question-set]]
    [util.ring-extensions :refer [html-response]]
    [views.question-set.question-set-view :as view]))


(defn question-set-get
  "Returns a view for a question-set
   if the current user is assigned to
   this question-set. If not an error
   view will be displayed."
  [req question-set-service]
  (let [question-set-id (-> req :route-params :id)
        user-id (str (-> req :session :user :id))
        question-set (get-question-set-by-id question-set-service question-set-id)
        permission-error (validate-user-for-question-set question-set-service user-id question-set-id)]
    (if (empty? permission-error)
      (html-response (view/question-set-form question-set))
      (html-response (view/no-assignement-form permission-error)))))
