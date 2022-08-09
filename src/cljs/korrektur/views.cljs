(ns korrektur.views
  (:require
    [korrektur.events]
    [korrektur.subs]
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


<<<<<<< HEAD
(defn korrektur-form
  [{ant-punkte :antwort/punkte frag-punkte :frage/punkte :as m}]
  [:div
   [:p "Korrekturtext: "
    [:input
     {:type  "text"
      :value (get m :korrektur/korrektur-text "Korrekturtext")
      :on-change #(rf/dispatch [:korrektur/schreiben (-> % .-target .-value)])}]]
   [:p "Punkte: "
    [:input
     {:type "number"
      :value (get m :korrektur/punkte ant-punkte)
      :on-change #(rf/dispatch [:korrektur/punkte (-> % .-target .-value)])}]
    (str " von " frag-punkte)]
   [:p
    [:input {:type  "button"
             :value "Korrigieren"
             :on-click #(rf/dispatch [:korrektur/senden])}]]])


(defn korrektur-erfolgreich
  [gesendet]
  ;; Add more precise error handling
  (if gesendet
    [:p {:style {:color "green"}} "Korrektur abgesendet"]
    [:p]))


(defn show-antwort-to-korrigieren
  []
  (let [korrektur @(rf/subscribe [:korrektur/erhalten])]
    [:div
     [:h2 (str (:frage/frage-text korrektur) " - " (:frage/punkte korrektur) " Punkte")]
     [:p (str "Lösungsvorschlag: ")]
     [:p (:frage/loesung korrektur)]
     [:p (str "Antwort von " (:user/id korrektur) ":")]
     [:p (:antwort/antwort-text korrektur)]
     [korrektur-form korrektur]
     [korrektur-erfolgreich (:gesendet korrektur)]]))


(defn overview
  []
  [:div
   [headline]
   [show-antwort-to-korrigieren]])
