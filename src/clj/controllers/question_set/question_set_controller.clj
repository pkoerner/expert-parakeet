(ns controllers.question-set.question-set-controller
  (:require
    [db]
    [services.question-set-service.question-set-service :refer [validate-user-for-question-set
                                                                get-question-set-by-id]]
    [views.question-set :as view]))


(defn question-set-get
  "Returns a form for a question-set
   if the current user is assigned to
   this question-set. If not an error
   view will be displayed."
  [req question-set-service]
  (let [question-set
        (get-question-set-by-id question-set-service (-> req :route-params :id))
        permission-error
        (validate-user-for-question-set question-set-service (str (-> req :session :user :id)) (-> req :route-params :id))]
    (if (empty? permission-error)
      (view/question-set-form question-set)
      (view/no-assignement-form permission-error))))
