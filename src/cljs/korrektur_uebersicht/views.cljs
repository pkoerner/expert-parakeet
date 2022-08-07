(ns korrektur-uebersicht.views
  (:require
    [day8.re-frame.http-fx]
    [korrektur-uebersicht.events]
    [korrektur-uebersicht.sub]
    [re-frame.core :as rf]))


;; For now, we only look at user (korrektor) with id 1
(def user-id 1)


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


(defn show-antwort
  [{_antwort-id :antwort/id test-name :test/name datum :antwort/datum uhrzeit :antwort/uhrzeit fachtitel :fach/fachtitel
    semester :kurs/semester jahr :kurs/jahr studi :user/id}]
  [:p
   [:input
    {:type  "button"
     :value (str test-name ", beantwortet von " studi " um " uhrzeit ", " datum " (" fachtitel ", " semester ", " jahr ")")
     ;; :on-click #(rf/dispatch [])
     }]])


(defn show-antworten
  []
  (let [antworten @(rf/subscribe [:antworten/erhalten])]
    [:div
     (map show-antwort antworten)]))


(defn overview
  []
  [:div
   [:h1 "Korrektur Übersicht"]
   [headline user-id]
   [show-antworten]])
