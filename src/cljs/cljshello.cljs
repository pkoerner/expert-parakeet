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
    (GET "/api/random"
         {:handler (fn [resp]
                     (rf/dispatch [:update-challenge (edn/read-string resp)]))})
    db))


(rf/reg-event-db
  :update-challenge
  (fn [db [_ [a b]]]
    (assoc db :a a :b b)))


(rf/reg-event-db
  :check-answer
  (fn [{:keys [answers] :as db}]
    (POST "/api/foobarmachenwirspaeter"
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
  :values
  (fn [db _] db))


(defn Calc
  []
  (let [vals @(rf/subscribe [:values])
        a (:a vals)
        b (:b vals)]
    [:div
     (str a "+" b "=")
     [:input {:type "number"
              :on-change #(rf/dispatch [:update-answer (-> % .-target .-value)])}]
     [:button {:type "button"
               :on-click #(rf/dispatch [:check-answer])}
      "Check"]]))


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
  [{:keys [questions]}]
  [:form (map TextQuestion questions)
   [:div.control
    [:button.button.is-link
     {:type "button"
      :on-click #(rf/dispatch [:check-answer])}
     "Abschicken"]]])


(defn React-to-user
  []
  (let [ans (:correct @(rf/subscribe [:values]))]
    (if (not (nil? ans))
      [:div
       (if ans "Correct" "False")
       ans])))


(rf/dispatch [:init-db])


(defn Root
  []
  [:div.container
   [Questions {:questions
               [{:question-id 0 :question "Fühlen Sie sich prüfungsbereit?" :points 0}
                {:question-id 1 :question "Was ist der Sinn des Lebens?" :points 42}]}]
   [Hello]
   [Calc]
   [React-to-user]])


(rd/render [Root]
           (. js/document (getElementById "app")))
