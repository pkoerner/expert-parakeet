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


(defn korrektur-form
  [{frag-punkte :frage/punkte :as m}]
  [:div
   [:p "Korrekturtext: "
    [:input
     {:type  "text"
      :value (get m :korrektur/korrektur-text "Korrekturtext")
      :on-change #(rf/dispatch [:korrektur/schreiben (-> % .-target .-value)])}]]
   [:p "Punkte: "
    [:input
     {:type "number"
      :value (get m :korrektur/punkte 0)
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
    [:p {:style {:color "green"}} (str "Korrektur abgesendet " gesendet)]
    [:p]))


(defn show-antwort-to-korrigieren
  []
  (let [korrektur @(rf/subscribe [:korrektur/erhalten])]
    [:div
     [:h2 (str (:frage/frage-text korrektur) " - " (:frage/punkte korrektur) " Punkte")]
     [:p (str "Lösungsvorschlag: ")]
     [:p (:frage/loesungskriterien korrektur)]
     [:p (str "Antwort:")]
     [:p (:antwort/antwort korrektur)]
     [korrektur-form korrektur]
     [korrektur-erfolgreich (:gesendet korrektur)]]))


(defn overview
  []
  [:div
   [headline]
   [show-antwort-to-korrigieren]])
