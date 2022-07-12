(ns cljshello
  (:require
    [ajax.core :refer [GET POST PUT]]
    [cljs.tools.reader.edn :as edn]
    [re-com.core :refer [at h-box v-box box p gap button label input-textarea line title]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [reagent.dom :as rd]))


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


(rf/reg-sub
  :questions
  (fn [db _] (:test db)))


(defn TextQuestion
  [{:keys [frage-text punkte id]}]
  (let [antwort (reagent/atom "")]
    [v-box
     :src (at)
     :attr {:key (str id)}
     :gap "5px"
     :children
     [[title
       :label (str frage-text " - " punkte " Punkte")
       :level :level2]
      [label
       :label "Antwort"]
      [v-box
       :children [[input-textarea
                   :src (at)
                   :model antwort
                   :placeholder "Der Sinn des Lebens ist 42 weil..."
                   ;; :change-on-blur? false
                   :on-change (fn [val]
                                (rf/dispatch [:update-antwort id val])
                                (reset! antwort val))]]]]]))

(rf/reg-event-db
  :update-antwort
  (fn [db [_ id antwort-text]]
      (assoc-in db [:antworten id] antwort-text)))


(defn Questions
  []
  (fn []
    [v-box
     :src (at)
     :children
     (conj
       (mapv TextQuestion (:test/fragen @(rf/subscribe :test)))
       [gap
        :size "10px"]
       [button
        :src (at)
        :class "button-primary"
        :on-click #(rf/dispatch [:check-answers])
        :label "Abschicken"])]))


(defn Corrections
  []
  [v-box
   :children
   (mapv (fn [c]
           [title :label (str "Correction: " c)
            :level :level2])
         @(rf/subscribe [:corrections]))])


(rf/reg-event-db
  :check-answers
  (fn [db [_]]
    (PUT (str "api/test/" (get-in db [:test :test/id]) "/antwort")
         {:handler (fn [resp]
                        (rf/dispatch [:update-corrections (edn/read-string resp)]))
           :params  (str (:antworten db))
           :format :raw})
    (assoc db :waiting-for-answer true)))


(rf/reg-event-db
  :update-corrections
  (fn [db [_ corrections]]
    (assoc db :corrections corrections)))


(rf/reg-sub
  :corrections
  (fn [db _] (:corrections db)))


;; (set! re-com.box/visualise-flow? true)


(rf/reg-sub
  :debug
  (fn [db _] db))


(defn Root
  []
   [box
   :padding "15px"
   :child
   [v-box
    :size "auto"
    :gap "15px"
    :children [[title :label "Test" :level :level1]
               [line]
               [Questions]
               [Corrections]
               ]]])


(defn main
      []
      (rf/dispatch [:init-db])
      (rd/render [Root]
                 (. js/document (getElementById "app"))))

