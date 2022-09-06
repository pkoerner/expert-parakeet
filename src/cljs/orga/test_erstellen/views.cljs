(ns orga.test-erstellen.views
  (:require
    [cljs.tools.reader.edn :as edn]
    [orga.frage-erstellen.views :refer [frage-erstellen]]
    [orga.frage-vorschau.views :refer [frage-vorschau]]
    [orga.test-erstellen.events]
    [orga.test-erstellen.sub]
    [re-com.core :as rc :refer [at v-box h-box]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]))


(defn test-name-input
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Testname:"]
    (let [test-name (reagent/atom nil)]
      [rc/input-text :src (at)
       :model test-name
       :width "300px"
       :on-change (fn [val]
                    (reset! test-name val)
                    (rf/dispatch [:test-erstellen/update :test-name val]))])]])


(defn bearbeitungs-zeitraum
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Bearbeitungszeitraum:"]
    (rc/gap :size "5px")
    [rc/label :label "Start:"]
    (let [model (reagent/atom nil)]
      [rc/datepicker-dropdown :src (at)
       :model model
       :show-today? true
       :show-weeks? true
       :on-change (fn [date]
                    (rf/dispatch [:test-erstellen/update :start-datum date])
                    (reset! model date))])
    (let [model (reagent/atom 0)]
      (rf/dispatch [:test-erstellen/update :start-zeit 0])
      [rc/input-time :src (at)
       :model model
       :on-change (fn [time]
                    (rf/dispatch [:test-erstellen/update :start-zeit time])
                    (reset! model time))])
    [rc/gap :size "10px"]
    [rc/label :label "Ende:"]
    (let [model (reagent/atom nil)]
      [rc/datepicker-dropdown :src (at)
       :model model
       :show-today? true
       :show-weeks? true
       :on-change (fn [date]
                    (rf/dispatch [:test-erstellen/update :end-datum date])
                    (reset! model date))])
    (let [model (reagent/atom 0)]
      (rf/dispatch [:test-erstellen/update :end-zeit 0])
      [rc/input-time :src (at)
       :model model
       :on-change (fn [time]
                    (rf/dispatch [:test-erstellen/update :end-zeit time])
                    (reset! model time))])]])


(defn fach-auswaehlen
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Fach:"]
    (let [faecher @(rf/subscribe [:test-erstellen/faecher])
          model (reagent/atom nil)]
      (if (seq faecher)
        [rc/single-dropdown
         :src (at)
         :choices faecher
         :id-fn :fach/id
         :label-fn :fach/fachtitel
         :width "400px"
         :model model
         :on-change (fn [fach-id]
                      (reset! model fach-id)
                      (rf/dispatch [:test-erstellen/update :fach-id fach-id])
                      (rf/dispatch [:test-erstellen/lade-kurse fach-id]))]
        [rc/label :label "Keine Fächer gefunden"]))]])


(defn kurs-auswaehlen
  []
  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Kurs:"]
    (let [kurse @(rf/subscribe [:test-erstellen/kurse])
          model (reagent/atom (first kurse))]
      (if (seq kurse)
        [rc/single-dropdown
         :src (at)
         :choices kurse
         :id-fn :kurs/id
         :label-fn (fn [kurs] (str (:kurs/semester kurs) " " (:kurs/jahr kurs)))
         :width "400px"
         :placeholder "Fach"
         :model model
         :on-change (fn [kurs-id]
                      (reset! model kurs-id)
                      (rf/dispatch [:test-erstellen/update :kurs-id kurs-id]))]
        [rc/label :label "Keine Kurse gefunden"]))]])


(defn test-fragen-importieren
  []
  (if @(rf/subscribe [:test-erstellen/fragen-importieren?])
    [h-box :src (at)
     :gap "10px"
     :children
     [[rc/button :src (at)
       :class "button-primary"
       :on-click #(rf/dispatch [:test-erstellen/update :fragen-importieren? false])
       :label "Doch nicht"]
      [v-box
       :gap "10px"
       :children (mapv
                   (fn [kurs]
                     [v-box :src (at)
                      :children
                      [[rc/title :src (at)
                        :label (str (:kurs/semester kurs) " " (:kurs/jahr kurs))
                        :level :level2]
                       [v-box :src (at)
                        :gap "5px"
                        :children
                        (mapv (fn [test]
                                [rc/button :src (at)
                                 :class "button-primary"
                                 :on-click (fn [_]
                                             (rf/dispatch [:test-erstellen/fragen-hinzufuegen (:test/fragen test)])
                                             (rf/dispatch [:test-erstellen/update :fragen-importieren? false]))
                                 :label (:test/name test)])
                              (:kurs/tests kurs))]]])
                   (reverse (sort-by :kurs/jahr @(rf/subscribe [:test-erstellen/kurse]))))]]]
    [rc/button :src (at)
     :class "button-primary"
     :on-click #(rf/dispatch [:test-erstellen/update :fragen-importieren? true])
     :label "Fragen importieren"]))


(defn fragen-liste
  []
  (let [fragen @(rf/subscribe [:test-erstellen/fragen])]
    [v-box :src (at)
     :children [[rc/title
                 :label "Fragen:"
                 :level :level2]
                [v-box :src (at)
                 :children
                 (mapv
                   (fn [frage]
                     [h-box
                      :align :center
                      :children
                      [[rc/title :src (at)
                        :level :level3
                        :label (str "- " (:frage/punkte frage) "P " (:frage/frage-text frage))]
                       [rc/info-button
                        :info [frage-vorschau frage]]
                       [rc/gap
                        :size "10px"]
                       [rc/button :src (at)
                        :class "button-primary"
                        :on-click #(rf/dispatch [:test-erstellen/frage-entfernen frage])
                        :label "Entfernen"]]])
                   fragen)]]]))


(defn bestehendsgrenze-input
  []

  [h-box :src (at)
   :align :center
   :gap "10px"
   :children
   [[rc/title :src (at)
     :level :level2
     :label "Bestehensgrenze:"]
    (let [punkte (reagent/atom "0")]
      (rf/dispatch [:test-erstellen/update :grenze "0"])
      [rc/input-text :src (at)
       :model punkte
       :validation-regex #"^([0-9]*)$"
       :width "50px"
       :on-change (fn [val]
                    (reset! punkte val)
                    (rf/dispatch [:test-erstellen/update :grenze val]))])
    [rc/label
     :label (str "/ " @(rf/subscribe [:test-erstellen/max-punkte]))]]])


(defn frage-erstellen-section
  []
  (if @(rf/subscribe [:test-erstellen/frage-erstellen?])
    [v-box :src (at)
     :children
     [[rc/button :src (at)
       :class "button-primary"
       :on-click #(rf/dispatch [:test-erstellen/update :frage-erstellen? false])
       :label "Doch nicht"]
      [frage-erstellen]]]
    [rc/button :src (at)
     :class "button-primary"
     :on-click (fn [_]
                 (rf/dispatch [:test-erstellen/update :frage-erstellen? true])
                 (rf/dispatch [:frage-erstellen/init]))
     :label "Neue Frage erstellen"]))


(defn can-test-erstellen
  []
  (and (seq @(rf/subscribe [:test-erstellen/name]))
       @(rf/subscribe [:test-erstellen/has-zeit])
       @(rf/subscribe [:test-erstellen/fach-id])
       @(rf/subscribe [:test-erstellen/kurs-id])
       (let [grenze (edn/read-string @(rf/subscribe [:test-erstellen/grenze]))]
         (and (int? grenze) (<= grenze @(rf/subscribe [:test-erstellen/max-punkte]))))
       (seq @(rf/subscribe [:test-erstellen/fragen]))))


(defn test-erstellen
  []
  [rc/box
   :padding "15px"
   :child
   [v-box :src (at)
    :size "auto"
    :gap "10px"
    :children
    [[rc/title :src (at)
      :level :level1
      :label "Test erstellen"]
     [rc/line]
     [test-name-input]
     [bearbeitungs-zeitraum]
     (if @(rf/subscribe [:test-erstellen/laedt-faecher])
       [rc/throbber]
       [fach-auswaehlen])
     (when @(rf/subscribe [:test-erstellen/fach-id])
       (if @(rf/subscribe [:test-erstellen/laedt-kurse])
         [rc/throbber]
         [v-box :src (at)
          :children
          [[kurs-auswaehlen]
           [test-fragen-importieren]]]))
     [fragen-liste]
     [frage-erstellen-section]
     [bestehendsgrenze-input]
     [rc/gap :size "15px"]
     [rc/button :src (at)
      :label "Test erstellen"
      :class "button-primary"
      :disabled? (or (not (can-test-erstellen)) @(rf/subscribe [:test-erstellen/gesendet]))
      :on-click (fn [_]
                  (rf/dispatch [:test-erstellen/update :gesendet true])
                  (rf/dispatch [:test-erstellen/test-in-db-speichern]))]
     (when @(rf/subscribe [:test-erstellen/angekommen])
       [rc/alert-box :src (at)
        :heading "Test wurde gespeichert"
        :alert-type :info])]]])
