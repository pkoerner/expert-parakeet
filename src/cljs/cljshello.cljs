(ns cljshello
  (:require
    [ajax.core :refer [GET POST]]
    [cljs.tools.reader.edn :as edn]
    [re-frame.core :as rf]
    ;; [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rd]))


(defn Hello
  []
  [:h1 "Hello World!"])


(rf/reg-event-db
  :init-db
  (fn [db _]
    (GET "/api/test/1"
         {:handler (fn [resp]
                     (rf/dispatch [:update-test (edn/read-string resp)]))})
    db))


(rf/reg-event-db
  :update-test
  (fn [db [_ test]]
    (assoc db :test test)))


(rf/reg-event-db
  :check-answer
  (fn [{:keys [answers _test-id] :as db}]
    (POST "/api/test/"
          {:handler (fn [resp]
                      (rf/dispatch [:update-correct (edn/read-string resp)]))
           :body answers
           :format :raw})
    db))


(rf/reg-event-db
  :update-correct
  (fn [db [_ val]]
    (assoc db :correct val)))


(rf/reg-event-db
  :update-answer
  (fn [db [_ answer]]
    (update-in db [:answers] merge answer)))


(rf/reg-sub
  :test
  (fn [db _] (:test db)))


(defn TextQuestion
  [{:keys [question points question-id]}]
  [:div {:key question-id} [:h3.title.is-4 (str question " - " points " Punkte")]
   [:div.field
    [:label.label "Antwort"]
    [:div.control
     [:textarea.textarea
      {:placeholder "Der Sinn des Lebens ist 42 weil..."
       :on-change #(rf/dispatch [:update-answer {question-id (-> % .-target .-value)}])}]]]])


(defn Questions
  [questions]
  [:form (map TextQuestion questions)
   [:div.control
    [:button.button.is-link
     {:type "button"
      :on-click #(rf/dispatch [:check-answer])}
     "Abschicken"]]])


(defn Root
  []
  [:div.container
   [Questions (:questions @(rf/subscribe [:test]))]])


(defn main
  []
  (rf/dispatch [:init-db])
  (rd/render [Root]
             (. js/document (getElementById "app"))))


