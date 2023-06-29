(ns korrektur-uebersicht.views
  (:require
    [day8.re-frame.http-fx]
    [korrektur-uebersicht.events]
    [korrektur-uebersicht.sub]
    [re-frame.core :as rf]))


(defn headline
  []
  (let [user @(rf/subscribe [:korrektor])]
    [:div
     [:p (str "Logged in as: " user)
      [:input
       {:type  "button"
        :value "Logout"
        ;; :on-click #(rf/dispatch [:logout])
        }]]]))


(defn button-to-korrigiert
  [unkorrigiert]
  [:div
   [:p
    [:input
     {:type  "button"
      :value (if unkorrigiert "Zu bisher korrigierten Antworten" "Zu unkorrigierten Antworten")
      :on-click #(rf/dispatch (if unkorrigiert
                                [:router/push-state {:name :router/bisherige-korekturen}]
                                [:router/push-state {:name :router/korrektur-overview}]))}]]])


(defn show-antwort
  [{antwort-id :antwort/id test-name :test/name datum :answer/date uhrzeit :answer/time fachtitel :fach/fachtitel
    semester :kurs/semester jahr :kurs/jahr}]
  [:p
   [:input
    {:type  "button"
     :value (str test-name ", beantwortet um " uhrzeit ", " datum " (" fachtitel ", " semester ", " jahr ", Antwort-Id " antwort-id ")")
     :on-click #(rf/dispatch [:router/push-state {:name :router/korrektur
                                                  :path-params {:aid antwort-id}}])}]])


(defn show-antworten
  [unkorrigiert]
  (let [antworten (if unkorrigiert
                    @(rf/subscribe [:antworten-unkorrigiert/erhalten])
                    @(rf/subscribe [:antworten-korrigiert/erhalten]))]
    [:div
     (map show-antwort antworten)]))


(defn overview
  []
  [:div
   [:h1 "Korrektur Übersicht"]
   [headline]
   [button-to-korrigiert true]
   [show-antworten true]])


(defn previous-corrections
  []
  [:div
   [:h1 "Bisherige Korrekturen"]
   [headline]
   [button-to-korrigiert false]
   [show-antworten false]])
