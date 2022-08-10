(ns orga.frage-erstellen.views
  (:require
    [orga.frage-erstellen.events]
    [orga.frage-erstellen.sub]
    [re-com.core :as rc :refer [at v-box h-box]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]))


(defn fragentyp-auswaehlen
  []
  (let [tabs [{:id :frage.typ/single-choice :label "single choice"}
              {:id :frage.typ/multiple-choice :label "multiple choice"}
              {:id :frage.typ/text :label "text"}]
        frage-typ (reagent/atom :frage.typ/single-choice)]
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
                    (rf/dispatch [:frage-erstellen/update :frage/frage-typ typ]))]]]))


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
                    (rf/dispatch [:frage-erstellen/update :frage/frage-punkte val]))])]])


(defn choices-hinzufuegen
  []
  (let [current-choice-text (reagent/atom "")]
    [v-box :src (at)
     :children
     [[rc/title :src (at)
       :level :level2
       :label "Auswahlmöglichkeiten:"]
      [:ul
       (conj (for [choice @(rf/subscribe [:frage/choices])]
               [:li {:key choice} choice])    ; add delete button
             [:li
              [h-box :src (at)
               :align :center
               :gap "5px"
               :children
               [[rc/input-text :src (at)
                 :model current-choice-text
                 :width "300px"
                 :on-change #(reset! current-choice-text %)]
                [rc/md-icon-button :src (at)
                 :md-icon-name "zmdi-plus"
                 :emphasise?   true
                 :on-click     #(rf/dispatch [:frage-erstellen/add-choice @current-choice-text])]]]])]]]))


(defn single-choice-erstellen
  []
  [v-box :src (at)
   :children
   [[choices-hinzufuegen]
    [rc/title
     :level :level2
     :label "Musterlösung:"]
    [v-box
     :gap "5px"
     :children
     (let [choices @(rf/subscribe [:frage/choices])
           antwort (reagent/atom nil)]
       (doall (for [[choice-id choice-text] (map vector (range (count choices)) choices)]
                ^{:key choice-id}
                [rc/radio-button :src (at)
                 :label choice-text
                 :value choice-text
                 :model antwort
                 :on-change (fn [val]
                              (rf/dispatch [:frage-erstellen/update :frage/single-choice-loesung val])
                              (reset! antwort val))])))]]])


(defn multiple-choice-erstellen
  []
  [v-box :src (at)
   :children
   [[choices-hinzufuegen]
    [rc/title
     :level :level2
     :label "Musterlösung:"]
    [v-box
     :gap "5px"
     :children
     (let [antwort (reagent/atom #{})
           choices @(rf/subscribe [:frage/choices])]
       (mapv
         (fn [choice-text]
           (let [model (reagent/atom false)]
             (rc/checkbox :src (at)
                          :attr {:key choice-text}
                          :model model
                          :label choice-text
                          :on-change
                          (fn [val]
                            (reset! model val)
                            (if val
                              (swap! antwort conj choice-text)
                              (swap! antwort disj choice-text))
                            (rf/dispatch [:frage-erstellen/update :frage/multiple-choice-loesung @antwort])))))
         choices))]]])


(defn text-erstellen
      []
      [v-box :src (at)
       :children
       [[rc/title
         :level :level2
         :label "Lösungskriterien (sichtbar für Korrektoren):"]
        (let [model (reagent/atom nil)]
             [rc/input-textarea :src (at)
              :model model
              :on-change (fn [val] (reset! model val)
                             (rf/dispatch [:frage-erstellen/update :frage/loesungskriterien val]))])
        ]])

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
    (let [typ @(rf/subscribe [:frage/typ])]
      (cond (= typ :frage.typ/single-choice) [single-choice-erstellen]
            (= typ :frage.typ/multiple-choice) [multiple-choice-erstellen]
            (= typ :frage.typ/text) [text-erstellen]
            :else [:h1 "not implemented"]))
    [punkte-input]]])
