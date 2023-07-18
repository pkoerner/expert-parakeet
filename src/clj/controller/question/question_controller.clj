(ns controller.question.question-controller
  (:require
   [db]
   [views.question :as view]))


(defn- validate-user-for-question
  "Checks if a user is assgined to a
   requested question. If so an
   empty error map is returned. Otherwise
   an error-map with a specified error is returned."
  [user-id question-id]
  (let [users-questions (db/get-question-ids-for-user user-id)
        error-map view/question-errors]
    (if (.contains users-questions {:question/id question-id})
      (dissoc view/question-errors :not-assigned-to-question)
      error-map)))

(defn question-get
  [req & {:keys [get-question-fun]
          :or {get-question-fun db/get-question-by-id}}]
  (let [question
        (get-question-fun (-> req :route-params :id))
        permission-error
        (validate-user-for-question (str (-> req :session :user :id)) (-> req :route-params :id))]
    (if (empty? permission-error)
      (view/question-form question)
      (view/no-question-assignment permission-error))))