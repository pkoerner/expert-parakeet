(ns test.views
  (:require
    [re-com.core :refer [at v-box box gap button input-textarea line title radio-button checkbox throbber]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [test.events]
    [test.subs]))


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
        :on-click #(rf/dispatch [:versuch/senden @(rf/subscribe [:test-id])])
        :label "Abschicken"])]))


(defn neuer-versuch
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


(defn versuch-row
  [n versuch]
  [:tr
   [:td n]
   [:td (get versuch :versuch/status "Nicht Bewertet")]
   [:td (get versuch :versuch/punkte 0)]
   [:td [:a {:on-click
             #(rf/dispatch [:router/push-state
                            {:name :router/versuch-ueberpruefen
                             :path-params {:id (:versuch/id versuch)}}])}
         "Überprüfen"]]])


(defn versuche-tabelle
  []
  (let [versuche @(rf/subscribe [:versuche])]
     [:table
     [:thead
      [:tr
       [:th "Versuch"]
       [:th "Status"]
       [:th "Punkte"]
       [:th "Überprüfen"]]]
     (into [:tbody] (map versuch-row (rest (range)) versuche))]))


(defn overview
  []
  [:div
   [:h2 "Test Name"]
   [:a
    {:on-click #(rf/dispatch [:router/push-state
                              {:name :router/test-neuer-versuch
                               :path-params {:id 1}}])}
    "Neue Versuch starten"]
   [versuche-tabelle]])


(defn fragen-beantwortet
  []
  (fn []
    [v-box
     :src (at)
     :children
     (conj
       (mapv
         (fn [data]
           [v-box :src (at)
            :children
            [[title :src (at)
              :label (str (:frage/frage-text data) " - " (:frage/punkte data) " Punkte")
              :level :level2]
             (let [frage-id (:frage/id data)
                   choices (shuffle (:frage/choices data))
                   antwort (:antwort/antwort data)
                   save-ans-to-db-fkt
                   (fn [antwort] (rf/dispatch [:frage/beantworten frage-id antwort]))
                   save-multiple-choise 
                   (fn [in-answer? choice-text]
                     (rf/dispatch [:frage/multiple-choice-beantworten frage-id in-answer? choice-text]))]
               (case (:frage/typ data)
                 :frage.typ/text (textfrage-beantworten-body 
                                   frage-id antwort
                                   save-ans-to-db-fkt)
                 :frage.typ/single-choice (single-choice-beantworten-body 
                                            frage-id choices antwort 
                                            save-ans-to-db-fkt)
                 :frage.typ/multiple-choice (multiple-choice-beantworten-body 
                                              frage-id choices antwort
                                              save-multiple-choise)
                 [:label "Fragentyp nicht implementiert"]))]])
         @(rf/subscribe [:fragen-mit-antworten]))
       )]))


(defn versuch-ueberpruefen
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
       [fragen-beantwortet])]]])

