(ns studierenden-uebersicht.views
  (:require
    [day8.re-frame.http-fx]
    [re-frame.core :as rf]
    [studierenden-uebersicht.events]
    [studierenden-uebersicht.sub]))


(defn headline
  []
  (let [user @(rf/subscribe [:user])]
    [:div
     [:p (str "Logged in as: " user)
      [:input
       {:type  "button"
        :value "Logout"
        ;; :on-click #(rf/dispatch [:logout])
        }]]]))


(defn show-test
  [{id :test/id
    name :test/name
    max-punkte :test/max-punkte
    erreichte-punkte :test/erreichte-punkte}]
  [:p
   [:input
    {:type "button"
     :value (str name " - Bisher erreichte Punkte: " erreichte-punkte " von " max-punkte)
     :on-click #(rf/dispatch [:router/push-state {:name :router/test
                                                  :path-params {:id id}}])}]])


(defn show-kurs
  [{_id :kurs/id
    jahr :kurs/jahr
    semester :kurs/semester
    fach :kurs/fach
    tests :kurs/tests}]
  [:div
   [:h2 (str (:fach/fachtitel fach) " - " semester " - " jahr ":")]
   (map show-test tests)])


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

