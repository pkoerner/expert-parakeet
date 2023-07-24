(ns controller.question.question-controller
  (:require
    [db]
    [util.ring-extensions :refer [html-response]]
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
  [req put-destination-root & {:keys [get-question-fun]
          :or {get-question-fun db/get-question-by-id}}]
  (let [question-id (-> req :route-params :id)
        user-id     (str (-> req :session :user :id))
        question    (get-question-fun question-id)
        permission-error (validate-user-for-question user-id question-id)]
    (if (empty? permission-error)
      (view/question-form question (str put-destination-root question-id))
      (view/no-question-assignment permission-error))))


(defn- add-to-db-and-get-success-msg
  [user-id question-id answer]
  (let [db-result (db/add-user-answer! user-id question-id answer)]
    (view/submit-success-view (:question/id db-result))))


(defn question-put!
  [req]
  (println req)
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