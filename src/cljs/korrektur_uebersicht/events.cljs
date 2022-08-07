(ns korrektur-uebersicht.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [vars]))


(rf/reg-event-fx
  :korrektur-uebersicht/hole-unkorrigierte-antworten
  (fn [{:keys [db]} _]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/korrektur/" (get-in db [:korrektor :id]))
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:korrektur-uebersicht/speichere-unkorrigierte-antworten]}}))


(rf/reg-event-db
  :korrektur-uebersicht/speichere-unkorrigierte-antworten
  (fn [db [_ daten]]
    (-> db
        (assoc :laedt false)
        (assoc :antworten-unkorrigiert daten))))


(rf/reg-event-db
  :korrektur-uebersicht/entferne-unkorrigierte-antworten
  (fn [db _]
    (dissoc db :antworten-unkorrigiert)))


(rf/reg-event-fx
  :korrektur-uebersicht/hole-korrigierte-antworten
  (fn [{:keys [db]} _]
    {:db          (assoc db :laedt true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/bisherige-korrekturen/" (get-in db [:korrektor :id]))
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:korrektur-uebersicht/speichere-korrigierte-antworten]}}))


(rf/reg-event-db
  :korrektur-uebersicht/speichere-korrigierte-antworten
  (fn [db [_ daten]]
    (-> db
        (assoc :laedt false)
        (assoc :antworten-korrigiert daten))))


(rf/reg-event-db
  :korrektur-uebersicht/entferne-korrigierte-antworten
  (fn [db _]
    (dissoc db :antworten-korrigiert)))
