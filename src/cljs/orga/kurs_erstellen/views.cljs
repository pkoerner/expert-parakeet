(ns orga.kurs-erstellen.views
  (:require
    [cljs-time.core :as time]
    [orga.kurs-erstellen.events]
    [orga.kurs-erstellen.sub]
    [re-com.core :as rc :refer [at v-box h-box]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]))


(defn fach-auswaehlen
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Fach:"]
    (let [faecher @(rf/subscribe [:kurs-erstellen/faecher])
          model (reagent/atom nil)]
      (cond
        (nil? faecher) (rc/throbber)                  ; still fetching faecher
        (seq faecher) [rc/single-dropdown
                       :src (at)
                       :choices faecher
                       :id-fn :fach/id
                       :label-fn :fach/fachtitel
                       :width "400px"
                       :model model
                       :on-change (fn [fach-id]
                                    (reset! model fach-id)
                                    (rf/dispatch [:kurs-erstellen/update :fach-id fach-id]))]
        :else [rc/label :label "Keine Fächer gefunden"]))]])


(defn jahr-input
  []
  (let [current-year (str (time/year (time/today)))
        model (reagent/atom current-year)]
    (rf/dispatch [:kurs-erstellen/update :jahr current-year]) ; init year
    [h-box :src (at)
     :align :center
     :gap "10px"
     :children
     [[rc/title :src (at)
       :level :level2
       :label "Jahr:"]
      [rc/input-text :src (at)
       :model model
       :validation-regex #"^([0-9]*)$"
       :width "300px"
       :on-change (fn [val]
                    (reset! model val)
                    (rf/dispatch [:kurs-erstellen/update :jahr val]))]]]))


(defn semester-input
  []
  (let [semester (reagent/atom "SoSe")]
    (rf/dispatch [:kurs-erstellen/update :semester "SoSe"]) ; init
    [h-box :src (at)
     :gap "5px"
     :align :center
     :children
     (concat
       [[rc/title :src (at)
         :level :level2
         :label "Semester:"]]
       (mapv
         (fn [[sem-name sem-short]]
           [rc/radio-button :src (at)
            :attr {:key sem-short}
            :label sem-name
            :value sem-short
            :model semester
            :on-change (fn [val]
                         (reset! semester val)
                         (rf/dispatch [:kurs-erstellen/update :semester val]))])
         [["Sommer" "SoSe"]
          ["Winter" "WiSe"]]))]))


(defn kurs-erstellen
  []
  [rc/box
   :padding "15px"
   :child
   [v-box :src (at)
    :gap "5px"
    :children
    [[rc/title :src (at)
      :level :level1
      :label "Kurs erstellen"]
     [rc/line]
     [fach-auswaehlen]
     [h-box :src (at)
      :align :center
      :gap "10px"
      :children
      [[jahr-input]
       [semester-input]]]
     [rc/button :src (at)
      :class "button-primary"
      :disabled? @(rf/subscribe [:kurs-erstellen/gesendet])
      :on-click #(rf/dispatch [:kurs-erstellen/erstellen])
      :label "Erstellen"]
     (when @(rf/subscribe [:kurs-erstellen/angekommen])
       [rc/alert-box :src (at)
        :heading "Kurs wurde gespeichert"
        :alert-type :info])
     (when @(rf/subscribe [:kurs-erstellen/failure])
       [rc/alert-box :src (at)
        :heading "Ein Fehler ist aufgetreten"
        :body [:label (str @(rf/subscribe [:kurs-erstellen/failure]))]
        :alert-type :danger])]]])
