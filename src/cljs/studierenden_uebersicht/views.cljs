(ns studierenden-uebersicht.views
  (:require
    [day8.re-frame.http-fx]
    [re-com.core :refer [at button h-box v-box title]]
    [re-frame.core :as rf]
    [studierenden-uebersicht.events]
    [studierenden-uebersicht.sub]))


(defn headline
  []
  (let [user @(rf/subscribe [:user])]
    [:div
     [h-box
      :gap      "10px"
      :children [[:div "Logged in as: " user]
                 [button
                  :src (at)
                  :class "button-primary"
                  ;; :on-click #(rf/dispatch [:logout])
                  :label "Logout"]]]]))


(defn show-test
  [{id :test/id
    name :test/name
    max-punkte :test/max-punkte
    erreichte-punkte :test/erreichte-punkte}]
  [button
   :label (str name " - Bisher erreichte Punkte: " erreichte-punkte " von " max-punkte)
   :on-click #(rf/dispatch [:router/push-state {:name :router/test
                                                :path-params {:id id}}])])


(defn show-kurs
  [{id :kurs/id
    jahr :kurs/jahr
    semester :kurs/semester
    fach :kurs/fach
    tests :kurs/tests}]
  [v-box
   :src (at)
   :attr {:key id}
   :gap "5px"
   :children
   [[title
     :label (str (:fach/fachtitel fach) " - " semester " - " jahr ":")
     :level :level2]
    (map show-test tests)]])


(defn show-kurse-and-tests
  []
  (let [kurse @(rf/subscribe [:kurse])]
    [:div
     (map show-kurs kurse)]))


(defn overview
  []
  [:div
   [:h1 "Studierenden Übersicht"]
   [headline]
   [show-kurse-and-tests]])

