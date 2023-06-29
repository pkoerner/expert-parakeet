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
      :value (get m :correction/points 0)
      :on-change #(rf/dispatch [:correction/points (-> % .-target .-value)])}]
    (str " von " frag-punkte)]
   [:p
    [:input {:type  "button"
             :value "Korrigieren"
             :on-click #(rf/dispatch [:korrektur/senden])}]]])


(defn error-handling
  [error status]
  (case error
    :no-fitting-answer "Antwort, die korrigiert werden sollte, nicht vorhanden."
    :correction-feedback-missing "Korrekturtext angeben."
    :correction-points-missing "Punkte angeben."
    :invalid-points "Eingabe keine gültige Punktzahl."
    :exceeding-number-of-points "Angegebene Punktzahl zu groß."
    :backend-not-responding (str "Servererror (Statuscode " status ").")))


(defn korrektur-erfolgreich
  [gesendet]
  (if-not gesendet
    [:p]
    (if-not (:error gesendet)
      [:p {:style {:color "green"}}
       (str "Korrektur \"" (:korrektur/korrektur-text gesendet) "\" ("
            (get-in gesendet [:korrektur/antwort :antwort/punkte]) " Punkte) erfolgreich gespeichert.")]
      [:p {:style {:color "red"}}
       (str "Error: " (error-handling (:error gesendet) (:status gesendet)))])))


(defn show-antwort-to-korrigieren
  []
  (let [korrektur @(rf/subscribe [:korrektur/erhalten])]
    [:div
     [:h2 (str (:frage/frage-text korrektur) " - " (:frage/punkte korrektur) " Punkte")]
     [:p (str "Antwort-Id " (:antwort/id korrektur))]
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
