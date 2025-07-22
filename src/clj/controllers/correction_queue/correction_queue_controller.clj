(ns controllers.correction-queue.correction-queue-controller
  (:require
   [util.ring-extensions :refer [html-response]]
   [views.correction-queue.correction-queue-overview-view :as overview-view]
   [views.correction-queue.correction-queue-view :as view]))

(defn correction-queue-overview-get [req post-destination get-all-question-set-fn]
  (let [question-sets (get-all-question-set-fn)]
    (html-response (overview-view/create-correction-queue-overview-view post-destination question-sets))))

(defn correction-queue-get [req post-destination get-unassigned-answer-fn]
  (let [question-id (-> req :route-params :id)
        answer (get-unassigned-answer-fn question-id)]
    (html-response (view/create-correction-queue-view post-destination answer))))