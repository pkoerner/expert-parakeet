(ns controllers.correction-queue.correction-queue-controller
  (:require
   [util.ring-extensions :refer [html-response]]
   [views.correction-queue.correction-queue-overview-view :as overview-view]
   [views.correction-queue.correction-queue-view :as unassigned-view]
   [views.correction-queue.assignments-view :as assignments-view]
   [ring.util.response :refer [redirect]]))

; TODO: Filtering should happen in db query
(defn filter-free-text-questions [question-sets]
  (mapv (fn [x] (update x :question-set/questions (partial filter #(= :question.type/free-text (:question/type %))))) question-sets))

(defn get-answer-counts [question-sets user-id get-answer-counts-fn]
  (into {}
        (mapcat (fn [question-set]
                  (let [question-ids (map :question/id (:question-set/questions question-set))]
                    (map (fn [question-id] [question-id (get-answer-counts-fn user-id question-id)])
                         question-ids)))
                question-sets)))

(defn filter-questions-where-no-correction-left [question-sets answer-counts]
  (filter
   (fn [question-set]
     (some
      (fn [question]
        (let [[assigned unassigned] (answer-counts (:question/id question))]
          (not= 0 (+ assigned unassigned))))
      (:question-set/questions question-set)))
   question-sets))

(defn correction-queue-overview-get [req post-destination get-all-question-set-fn get-answer-counts-fn]
  (let [user-id (get-in req [:session :user :id])
        question-sets (get-all-question-set-fn)
        question-sets-free-text-questions (filter-free-text-questions question-sets)
        answer-count (get-answer-counts question-sets-free-text-questions user-id get-answer-counts-fn)
        question-sets-no-finished-sets (filter-questions-where-no-correction-left question-sets-free-text-questions answer-count)]
    (html-response (overview-view/create-correction-queue-overview-view post-destination question-sets-no-finished-sets answer-count))))

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

(defn submit-correction-queue!
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