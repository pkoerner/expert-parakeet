(ns test.views
  (:require
    [re-com.core :refer [at v-box box gap button label input-textarea line title radio-button checkbox throbber]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [test.events]))


(defn TextQuestion
  [{frage-text :frage/frage-text punkte :frage/punkte id :frage/id}]
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
                                (rf/dispatch [:frage/beantworten id [val]])
                                (reset! antwort val))]]]]]))


(defn SingleChoiceQuestion
  [{frage-text :frage/frage-text punkte :frage/punkte id :frage/id choices :frage/choices}]
  (let [antwort (reagent/atom nil)]
    [v-box :src (at)
     :attr {:key (str id)}
     :gap "5px"
     :children
     [[title :src (at)
       :label (str frage-text " - " punkte " Punkte")
       :level :level2]
      (doall (for [[choice-id choice-text] (map vector (range (count choices)) (shuffle choices))]
               ^{:key choice-id}
               [radio-button :src (at)
                :label choice-text
                :value choice-text
                :model antwort
                :on-change (fn [val]
                             (rf/dispatch [:frage/beantworten id [val]])
                             (reset! antwort val))]))]]))


(defn MultipleChoiceQuestion
  [{frage-text :frage/frage-text punkte :frage/punkte id :frage/id choices :frage/choices}]
  (let [antwort (reagent/atom #{})]
    [v-box :src (at)
     :attr {:key (str id)}
     :gap "5px"
     :children
     [[title :src (at)
       :label (str frage-text " - " punkte " Punkte")
       :level :level2]
      [v-box :src (at)
       :children
       (mapv
         (fn [choice-text]
           (let [model (reagent/atom false)]
             [checkbox :src (at)
              :model model                      ; required
              :label choice-text
              :on-change (fn [val]
                           (reset! model val)
                           (if val
                             (swap! antwort conj choice-text)
                             (swap! antwort disj choice-text))
                           (rf/dispatch [:frage/beantworten id @antwort]))]))
         (shuffle choices))]]]))


(defn Questions
  []
  (fn []
    [v-box
     :src (at)
     :children
     (conj
       (mapv (fn [frage]
               (cond
                 (= (:frage/typ frage) :frage.typ/text) (TextQuestion frage)
                 (= (:frage/typ frage) :frage.typ/single-choice) (SingleChoiceQuestion frage)
                 (= (:frage/typ frage) :frage.typ/multiple-choice) (MultipleChoiceQuestion frage)
                 :else [:label "Fragentyp nicht implementiert"]))
             @(rf/subscribe [:fragen]))
       [gap
        :size "10px"]
       [button
        :src (at)
        :class "button-primary"
        :on-click #(rf/dispatch [:antworten/senden])
        :disabled? (rf/subscribe [:antworten/gesendet])
        :label "Abschicken"])]))


;; not in use
;; for debugging
(defn Corrections
  []
  [v-box
   :children
   (mapv (fn [c]
           [title :label (str "Correction: " c)
            :level :level2])
         @(rf/subscribe [:corrections]))])


(defn Root
  []
  [box
   :padding "15px"
   :child
   [v-box
    :size "auto"
    :gap "15px"
    :children
    [[title :label "Test" :level :level1]
     [line]
     (if @(rf/subscribe [:laedt])
       [throbber]
       [Questions])]]])


