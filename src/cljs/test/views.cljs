(ns test.views
  (:require
    [re-com.core :refer [at v-box box gap button input-textarea line title radio-button checkbox throbber]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [test.events]))


(defn textfrage-beantworten-body
  [frage-id initial antwort-in-db-fkt]
  (let [antwort (reagent/atom initial)]
    [v-box
     :src (at)
     :attr {:key (str frage-id)}
     :gap "5px"
     :children
     [[input-textarea
       :src (at)
       :model antwort
       :placeholder "Der Sinn des Lebens ist 42 weil..."
       ;; :change-on-blur? false
       :on-change (fn [val]
                    (antwort-in-db-fkt val)
                    (reset! antwort val))]]]))


(defn single-choice-beantworten-body
  [frage-id choices initial antwort-in-db-fkt]
  (let [antwort (reagent/atom initial)]
    [v-box :src (at)
     :attr {:key (str frage-id)}
     :gap "5px"
     :children
     (mapv
       (fn [choice-idx choice-text]
         [radio-button :src (at)
          :attr {:key (str choice-idx)}
          :label choice-text
          :value choice-text
          :model antwort
          :on-change (fn [val]
                       (antwort-in-db-fkt val)
                       (reset! antwort val))])
       (range (count choices)) choices)]))


(defn multiple-choice-beantworten-body
  [frage-id choices initial antwort-in-db-fkt]
  [v-box :src (at)
   :attr {:key (str frage-id)}
   :gap "5px"
   :children
   (mapv
     (fn [choice-idx choice-text]
       (let [model (reagent/atom (contains? initial choice-text))]
         [checkbox :src (at)
          :model model
          :attr {:key choice-idx}
          :label choice-text
          :on-change (fn [val]
                       (reset! model val)
                       (antwort-in-db-fkt val choice-text))]))
     (range (count choices)) choices)])


(defn Questions
  []
  (fn []
    [v-box
     :src (at)
     :children
     (conj
       (mapv
         (fn [frage]
           [v-box :src (at)
            :children
            [[title :src (at)
              :label (str (:frage/frage-text frage) " - " (:frage/punkte frage) " Punkte")
              :level :level2]
             (let [save-ans-to-db-fkt
                   (fn [antwort] (rf/dispatch [:frage/beantworten (:frage/id frage) antwort]))]
               (cond
                 (= (:frage/typ frage) :frage.typ/text)
                 (textfrage-beantworten-body (:frage/id frage) "" save-ans-to-db-fkt) ; "" is initial value
                 (= (:frage/typ frage) :frage.typ/single-choice)
                 (single-choice-beantworten-body (:frage/id frage) (shuffle (:frage/choices frage))
                                                 nil save-ans-to-db-fkt)
                 (= (:frage/typ frage) :frage.typ/multiple-choice)
                 (multiple-choice-beantworten-body
                   (:frage/id frage) (shuffle (:frage/choices frage)) #{}
                   (fn [in-answer? choice-text]
                     (rf/dispatch [:frage/multiple-choice-beantworten (:frage/id frage) in-answer? choice-text])))
                 :else [:label "Fragentyp nicht implementiert"]))]])
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


