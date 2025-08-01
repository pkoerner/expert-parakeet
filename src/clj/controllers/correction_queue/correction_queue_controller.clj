(ns controllers.correction-queue.correction-queue-controller
  (:require
   [util.ring-extensions :refer [html-response]]
   [views.correction-queue.correction-queue-overview-view :as overview-view]
   [views.correction-queue.correction-queue-view :as view]
   [views.correction-queue.assignments-view :as assignments-view]
   [hiccup2.core :as h]
   [ring.util.response :refer [redirect]]))

(defn correction-queue-overview-get [req post-destination get-all-question-set-fn]
  (let [question-sets (get-all-question-set-fn)
        question-sets-free-text-questions (mapv (fn [x] (update x :question-set/questions (partial filter #(= :question.type/free-text (:question/type %))))) question-sets)]
    (html-response (overview-view/create-correction-queue-overview-view post-destination question-sets-free-text-questions))))

(defn correction-queue-get [req post-destination get-unassigned-answer-fn]
  (let [question-id (get-in req [:params :question-id])
        answer (get-unassigned-answer-fn question-id)
        pd (str post-destination "/" question-id)]
    (html-response (view/create-correction-queue-view pd answer))))

(defn correction-queue-assignments-get [req post-destination get-assignments-fn]
  (let [user-github-id (get-in req [:session :user :id])
        question-id (get-in req [:params :question-id])
        answers (get-assignments-fn user-github-id question-id)
        pd (str post-destination "/" question-id)]
    (html-response (assignments-view/create-correction-queue-view pd answers))))


(defn submit-next! [add-assignment-fn user-id answer-id pd]
  (add-assignment-fn user-id answer-id)
  (redirect pd))

(defn submit-save! [add-assignment-fn add-correction-fn user-id answer-id correction pd]
  (add-assignment-fn user-id answer-id)
  (add-correction-fn answer-id correction)
  (redirect pd)
  )

(defn submit-correction-queue!
  [req post-destination add-assignment-fn save-correction-fn]
  (let [question-id (get-in req [:params :question-id])
        answer-id (get-in req [:params :answer-id])
        user-id (get-in req [:session :user :id])
        pd (str post-destination "/" question-id)
        form-data (-> req :params (dissoc :__anti-forgery-token))
        correction (-> {}
                       (assoc :correction/feedback (:feedback form-data))
                       (assoc :correction/points (Long/parseLong (:points form-data)))
                       (assoc :corrector/id user-id))
        action (:action form-data)]
    (case action
      "save" (submit-save! add-assignment-fn save-correction-fn user-id answer-id correction pd)
      "save-next" (submit-next! add-assignment-fn user-id answer-id pd) ; TODO: Was soll das machen?
      "next" (submit-next! add-assignment-fn user-id answer-id pd))))