(ns studierenden-uebersicht.views
  (:require
    [day8.re-frame.http-fx]
    [re-com.core :refer [at button h-box v-box title]]
    [re-frame.core :as rf]
    [studierenden-uebersicht.events]
    [studierenden-uebersicht.sub]))


;; For now, we only look at user with id 0
(def user-id 0)


(defn headline
  [user-id]
  [:div
   [h-box
    :gap      "10px"
    :children [[:div "Logged in as: " user-id]
               [button
                :src (at)
                :class "button-primary"
                ;; :on-click #(rf/dispatch [:logout])
                :label "Logout"]]]])


(defn show-test
  [{name :test/name max-punkte :test/max-punkte erreichte-punkte :test/erreichte-punkte}]
  [button
   :label (str name " - Bisher erreichte Punkte: " erreichte-punkte " von " max-punkte)])


(defn show-kurs
  [{id :kurs/id jahr :kurs/jahr semester :kurs/semester}]
  (let [fach @(rf/subscribe [:fach/zu-bestimmten-kurs id])
        tests @(rf/subscribe [:tests/zu-bestimmten-kurs id])]
    [v-box
     :src (at)
     :attr {:key (str id)}
     :gap "5px"
     :children
     [[title
       :label (str (:fach/fachtitel fach) " - " semester " - " jahr ":")
       :level :level2]
      (map show-test tests)]]))


(defn show-kurse-and-tests
  [user-id]
  (rf/dispatch [:studierenden-uebersicht/hole-daten user-id])
  (let [kurse @(rf/subscribe [:kurse])]
    [:div (map show-kurs kurse)]))


(defn overview
  []
  [:div
   [:h1 "Studierenden Übersicht"]
   [headline user-id]
   [show-kurse-and-tests user-id]])


(defn to-student-overview
  []
  (let [show-overview @(rf/subscribe [:studierenden-uebersicht/aktiv])]
    (if show-overview
      [:div
       [button
        :src (at)
        :class "button-primary"
        :on-click #(rf/dispatch [:studierenden-uebersicht/verstecken])
        :label "Verstecke student-overview"]
       [overview]]
      [button
       :src (at)
       :class "button-primary"
       :on-click #(rf/dispatch [:studierenden-uebersicht/laden])
       :label "Zeige student-overview"])))
