(ns orga.frage-erstellen.views
  (:require
    [orga.frage-erstellen.events]
    [orga.frage-erstellen.sub]
    [re-com.core :as rc :refer [at v-box h-box]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [test.views :refer [single-choice-beantworten-body multiple-choice-beantworten-body textfrage-beantworten-body]]))


(defn fragentyp-auswaehlen
  []
  (let [tabs [{:id :frage.typ/single-choice :label "single choice"}
              {:id :frage.typ/multiple-choice :label "multiple choice"}
              {:id :frage.typ/text :label "text"}]
        frage-typ (reagent/atom :frage.typ/single-choice)]
    (rf/dispatch [:frage-erstellen/update :frage/typ :frage.typ/single-choice])
    [h-box
     :align :center
     :gap "10px"
     :children
     [[rc/title :src (at)
       :level :level2
       :label "Fragentyp:"]
      [rc/horizontal-bar-tabs :src (at)
       :model frage-typ
       :tabs tabs
       :on-change (fn [typ]
                    (reset! frage-typ typ)
                    (rf/dispatch [:frage-erstellen/update :frage/typ typ]))]]]))


(defn frage-text-input
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Frage:"]
    (let [frage-text (reagent/atom nil)]
      [rc/input-text :src (at)
       :model frage-text
       :width "300px"
       :on-change (fn [val]
                    (reset! frage-text val)
                    (rf/dispatch [:frage-erstellen/update :frage/frage-text val]))])]])


(defn punkte-input
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Punkte:"]
    (let [punkte (reagent/atom "")]
      [rc/input-text :src (at)
       :model punkte
       :validation-regex #"^([0-9]*)$"
       :width "300px"
       :on-change (fn [val]
                    (reset! punkte val)
                    (rf/dispatch [:frage-erstellen/update :frage/punkte val]))])]])


(defn choices-list
  []
  [v-box :src (at)
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Auswahlmöglichkeiten:"]
    [v-box :src (at)
     :gap "5px"
     :children
     (let [choices @(rf/subscribe [:frage-erstellen/choices])]
       (mapv
         (fn [choice-idx choice-text]
           [h-box :src (at)
            :attr {:key choice-idx}
            :gap "10px"
            :children
            [[rc/label :label (str "- " choice-text)]
             [rc/md-icon-button :src (at)
              :md-icon-name "zmdi-minus"
              :emphasise? true
              :on-click #(rf/dispatch [:frage-erstellen/remove-choice choice-idx choice-text])]]])
         (range (count choices)) choices))]]])


(defn add-new-choice
  [current-choice-text-atom]
  (rf/dispatch [:frage-erstellen/add-choice @current-choice-text-atom])
  (reset! current-choice-text-atom "")
  (. (. js/document (getElementById "add-choice-inp")) focus))


(defn choice-hinzufuegen
  []
  (let [current-choice-text (reagent/atom "")]
    [h-box :src (at)
     :attr {:key "add choice"}
     :align :center
     :gap "10px"
     :children
     [[rc/input-text :src (at)
       :attr {:id           "add-choice-inp"
              :on-key-press (fn [e]
                              (when (= 13 (.-charCode e)) ; enter
                                (add-new-choice current-choice-text)))}
       :model current-choice-text
       :width "300px"
       :change-on-blur? false
       :on-change #(reset! current-choice-text %)]
      [rc/md-icon-button :src (at)
       :md-icon-name "zmdi-plus"
       :emphasise? true
       :on-click #(add-new-choice current-choice-text)]]]))


(defn single-choice-erstellen
  []
  [v-box :src (at)
   :gap "10px"
   :children
   [[choices-list]
    [choice-hinzufuegen]
    [rc/title
     :level :level2
     :label "Musterlösung:"]
    [single-choice-beantworten-body 1 @(rf/subscribe [:frage-erstellen/choices]) ; 1 is dummy id
     @(rf/subscribe [:frage-erstellen/single-choice-loesung])         ; initial value for radio buttons
     (fn [antwort] (rf/dispatch [:frage-erstellen/update :frage/single-choice-loesung antwort]))
     false]]])


(defn multiple-choice-erstellen
  []
  [v-box :src (at)
   :gap "10px"
   :children
   [[choices-list]
    [choice-hinzufuegen]
    [rc/title
     :level :level2
     :label "Musterlösung:"]
    [multiple-choice-beantworten-body 1 @(rf/subscribe [:frage-erstellen/choices])
     @(rf/subscribe [:frage-erstellen/multiple-choice-loesung])       ; initial value for checkboxes
     (fn [in-answer? choice-text]
       (rf/dispatch [:frage-erstellen/multiple-choice-lsg-update in-answer? choice-text]))
     false]]])


(defn text-frage-erstellen
  []
  [v-box :src (at)
   :children
   [[rc/title
     :level :level2
     :label "Lösungskriterien (sichtbar für Korrektoren):"]
    [textfrage-beantworten-body 1
     @(rf/subscribe [:frage-erstellen/loesungskriterien])
     (fn [antwort] (rf/dispatch [:frage-erstellen/update :frage/loesungskriterien antwort]))]]])


(defn can-erstellen?
  []
  (let [frage @(rf/subscribe [:frage-erstellen/frage])
        typ (:frage/typ frage)]
    (and
      (seq (:frage/frage-text frage))
      (seq (:frage/punkte frage))
      (cond                                                 ; hat loesung?
        (= typ :frage.typ/single-choice) (:frage/single-choice-loesung frage)
        (= typ :frage.typ/text) true
        (= typ :frage.typ/multiple-choice) true)         ; spaeter: zuordnungsfrage braucht zuordnungsmap als loesung
      (cond                                                 ; hat choices
        (or (= typ :frage.typ/single-choice)
            (= typ :frage.typ/multiple-choice)) (seq (:frage/choices frage))
        (= typ :frage.typ/text) true))))


(defn frage-erstellen
  []
  [v-box :src (at)
   :size "auto"
   :gap "5px"
   :children
   [[rc/title :src (at)
     :level :level1
     :label "Frage erstellen"]
    [rc/line]
    [fragentyp-auswaehlen]
    [frage-text-input]
    [punkte-input]
    (let [typ @(rf/subscribe [:frage-erstellen/typ])]
      (cond (= typ :frage.typ/single-choice) [single-choice-erstellen]
            (= typ :frage.typ/multiple-choice) [multiple-choice-erstellen]
            (= typ :frage.typ/text) [text-frage-erstellen]
            :else [:h1 "not implemented"]))
    [rc/button :src (at)
     :class "button-primary"
     :on-click #(rf/dispatch [:frage-erstellen/erstellen])
     :disabled? (not (can-erstellen?))
     :label "Frage erstellen"]]])

