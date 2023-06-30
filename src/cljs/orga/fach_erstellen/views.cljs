(ns orga.fach-erstellen.views
  (:require
    [orga.fach-erstellen.events]
    [orga.fach-erstellen.sub]
    [re-com.core :as rc :refer [at v-box h-box]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]))


(defn fach-name-input
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Fachname:"]
    (let [fach-name (reagent/atom nil)]
      [rc/input-text :src (at)
       :model fach-name
       :width "300px"
       :on-change (fn [val]
                    (reset! fach-name val)
                    (rf/dispatch [:fach-erstellen/update :fach-name val]))])]])


(defn fach-erstellen
  []
  [rc/box
   :padding "15px"
   :child
   [v-box :src (at)
    :gap "5px"
    :children
    [[rc/title :src (at)
      :level :level1
      :label "Neues Fach erstellen"]
     [rc/line]
     [fach-name-input]
     [rc/button :src (at)
      :class "button-primary"
      :disabled? @(rf/subscribe [:fach-erstellen/gesendet])
      :on-click #(rf/dispatch [:fach-erstellen/erstellen])
      :label "Erstellen"]
     (when @(rf/subscribe [:fach-erstellen/angekommen])
       [rc/alert-box :src (at)
        :heading "Fach wurde erstellt"
        :alert-type :info])
     (when @(rf/subscribe [:fach-erstellen/failure])
       [rc/alert-box :src (at)
        :heading "Ein Fehler ist aufgetreten"
        :body [:label (str @(rf/subscribe [:fach-erstellen/failure]))]
        :alert-type :danger])]]])
