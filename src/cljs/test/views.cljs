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
  [frage-id choices initial antwort-in-db-fkt disabled?]
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
          :disabled? disabled?
          :on-change (fn [val]
                       (antwort-in-db-fkt val)
                       (reset! antwort val))])
       (range (count choices)) choices)]))


(defn multiple-choice-beantworten-body
  [frage-id choices initial antwort-in-db-fkt disabled?]
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
          :disabled? disabled?
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
              :label (str (:question/question-statement frage) " - " (:question/points frage) " Punkte")
              :level :level2]
             (let [save-ans-to-db-fkt
                   (fn [antwort] (rf/dispatch [:frage/beantworten (:question/id frage) antwort]))]
               (cond
                 (= (:question/type frage) :question.type/free-text)
                 (textfrage-beantworten-body (:question/id frage) "" save-ans-to-db-fkt) ; "" is initial value
                 (= (:question/type frage) :question.type/single-choice)
                 (single-choice-beantworten-body (:question/id frage) (shuffle (:question/possible-solutions frage))
                                                 nil save-ans-to-db-fkt false)
                 (= (:question/type frage) :question.type/multiple-choice)
                 (multiple-choice-beantworten-body
                   (:question/id frage) (shuffle (:question/possible-solutions frage)) #{}
                   (fn [in-answer? choice-text]
                     (rf/dispatch [:frage/multiple-choice-beantworten (:question/id frage) in-answer? choice-text]))
                   false)
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


