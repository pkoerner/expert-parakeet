(ns controllers.correction-queue.correction-queue-controller
  (:require
   [util.ring-extensions :refer [html-response]]
   [views.correction-queue.correction-queue-overview-view :as overview-view]
   [views.correction-queue.unassigned-correction-queue-view :as unassigned-view]
   [views.correction-queue.assigned-correction-queue-view :as assignments-view]
   [ring.util.response :refer [redirect]]))


(defn- get-answer-counts [question-sets user-id get-answer-counts-fn]
  (into {}
        (mapcat (fn [question-set]
                  (let [question-ids (map :question/id (:question-set/questions question-set))]
                    (map (fn [question-id] [question-id (get-answer-counts-fn user-id question-id)])
                         question-ids)))
                question-sets)))

(defn correction-queue-overview-get [req post-destination get-answer-counts-fn get-question-sets-uncorrected-free-text-fn]
  (let [user-id (get-in req [:session :user :id])
        question-sets (get-question-sets-uncorrected-free-text-fn user-id)
        answer-count (get-answer-counts question-sets user-id get-answer-counts-fn)]
    (html-response (overview-view/create-correction-queue-overview-view post-destination question-sets answer-count))))

(defn correction-queue-unassiged-get [req post-destination get-unassigned-answer-fn get-statistics-fn]
  (let [user-id (get-in req [:session :user :id])
        question-id (get-in req [:params :question-id])
        answer (get-unassigned-answer-fn question-id)
        pd (format "%s/%s" post-destination question-id)
        correction-statistics (get-statistics-fn user-id question-id)]
    (unassigned-view/create-correction-queue-view pd answer correction-statistics)))

(defn correction-queue-assignments-get [req post-destination get-assignments-fn]
  (let [user-id (get-in req [:session :user :id])
        question-id (get-in req [:params :question-id])
        answers (get-assignments-fn user-id question-id)
        pd (format "%s/%s" post-destination question-id)]
    (assignments-view/create-correction-queue-view pd answers)))


(defn submit-next! [add-assignment-fn user-id answer-id pd]
  (add-assignment-fn user-id answer-id)
  (redirect pd))

(defn submit-save! [add-assignment-fn add-correction-fn user-id answer-id correction pd]
  (add-assignment-fn user-id answer-id)
  (add-correction-fn answer-id correction)
  (redirect pd))

(defn submit-unassigned-correction-queue!
  [req post-destination add-assignment-fn save-correction-fn]
  (let [question-id (get-in req [:params :question-id])
        answer-id (get-in req [:params :answer-id])
        user-id (get-in req [:session :user :id])
        pd (format "%s/%s" post-destination question-id)
        form-data (-> req :params (dissoc :__anti-forgery-token))
        correction (-> {}
                       (assoc :correction/feedback (:feedback form-data))
                       (assoc :correction/points (Long/parseLong (:points form-data)))
                       (assoc :corrector/id user-id))
        action (:action form-data)]
    (case action
      "submit" (submit-save! add-assignment-fn save-correction-fn user-id answer-id correction pd)
      "next" (submit-next! add-assignment-fn user-id answer-id pd))))

(defn submit-assigned-correction-queue!
  [req post-destination add-assignment-fn save-correction-fn]
  (let [question-id (get-in req [:params :question-id])
        answer-id (get-in req [:params :answer-id])
        user-id (get-in req [:session :user :id])
        pd (format "%s/%s" post-destination question-id)
        form-data (-> req :params (dissoc :__anti-forgery-token))
        correction (-> {}
                       (assoc :correction/feedback (:feedback form-data))
                       (assoc :correction/points (Long/parseLong (:points form-data)))
                       (assoc :corrector/id user-id))
        action (:action form-data)]
    (case action
      "submit" (submit-save! add-assignment-fn save-correction-fn user-id answer-id correction pd))))