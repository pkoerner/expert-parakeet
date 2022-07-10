(ns cljshello
  (:require
    [ajax.core :refer [GET]]
    [cljs.tools.reader.edn :as edn]
    [re-com.core :refer [at h-box v-box box p gap button label input-textarea line title]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [reagent.dom :as rd]))


(defn SimpleTextArea
  []
  (let [text-val (reagent/atom nil)]                    ; state ist nicht global, wundervoll
    (fn []
      ;; muss fn zurückgeben, damit let funktioniert
      [input-textarea
       :src (at)                                        ; debugging
       :model text-val
       ;; :model "text-val"
       :on-change #(reset! text-val %)])))


(defn Button
  []
  (let [click-counter (reagent/atom 0)
        click-outcomes
        [""
         "Netflix server shutdown"
         "Donald Trump released from prison"
         "Toy disabled"]
        clicked-second-button? (reagent/atom false)]
    (fn []
      [v-box
       :src (at)
       :gap "10px"
       :children
       [[h-box
         :src (at)
         :gap "10px"
         :children
         [[button
           :label "No clicking!"
           :tooltip (when-not (>= @click-counter (dec (count click-outcomes))) "Seriously, NO CLICKING!")
           :disabled? (>= @click-counter (dec (count click-outcomes)))
           :on-click #(swap! click-counter inc) ; muss function sein
           :class "btn btn-danger"]
          [box
           :src (at)
           :align :center
           :child [label
                   :src (at)
                   :label (nth click-outcomes @click-counter)]]]]
        [p
         "Ein kleiner Paragraph."]
        [h-box
         :src (at)
         :gap "10px"
         :children [[button
                     :label "Känguru Weisheit"
                     :on-click #(swap! clicked-second-button? not)
                     :class "btn btn-primary"]
                    (when @clicked-second-button?
                      [box
                       :src (at)
                       :align :center
                       :child [label
                               :src (at)
                               :label "Dein Code, mein Code, das sind doch bürgerliche Kategorien."]])]]]])))


(def questions (reagent/atom [])) ; wir könnten als state auch globale reagent atome definieren

(def answers (reagent/atom {}))


(defn init-state
  []
  (GET "api/demo-questions"
       {:handler (fn [resp]
                   (reset! questions (edn/read-string resp)))}))


(init-state)


(rf/reg-event-db                                            ; oder bei der db bleiben
 :init-db
 (fn [db _]
   (assoc db :corrections [])))


(rf/dispatch [:init-db])


(defn TextQuestion
  [{:keys [question points question-id]}]
  (let [answer (reagent/atom "")]
    [v-box
     :src (at)
     :attr {:key (str question-id)}
     :gap "5px"
     :children
     [[title
       :label (str question " - " points " Punkte")
       :level :level2]
      [label
       :label "Antwort"]
      [v-box
       :children [[input-textarea
                   :src (at)
                   :model answer
                   :placeholder "Der Sinn des Lebens ist 42 weil..."
                   ;; :change-on-blur? false
                   :on-change (fn [val]
                                (swap! answers assoc question-id val)
                                (reset! answer val))]]]]]))


(defn Questions
  []
  (fn []
    [v-box
     :src (at)
     :children
     (conj
       (mapv TextQuestion @questions)
       [gap
        :size "10px"]
       [button
        :src (at)
        :class "button-primary"
        :on-click #(rf/dispatch [:check-answers @answers])
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
  (fn [db [_ answers]]
    (GET "api/demo-check"                          ; hier noch get
         {:handler (fn [resp]
                     (rf/dispatch [:update-corrections (edn/read-string resp)])) ; hier könnten wir auch resp in globales atom schreiben
          :params  {:answers (str answers)}
          :format  :raw})
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
    :children [[p (str "Questions: " @questions)]
               [p (str "Answers: " @answers)]
               [p (str "db: " @(rf/subscribe [:debug]))]
               [title :label "Test" :level :level1]
               [line]
               [Questions]
               [Corrections]
               [title :label "Sonstiges" :level :level2]
               [Button]
               [SimpleTextArea]]]])


(rd/render [Root]
           (. js/document (getElementById "app")))
