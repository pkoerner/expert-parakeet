(ns orga.test-erstellen.events
  (:require
    [ajax.core :as ajax]
    [re-frame.core :as rf]
    [util.time :as time]
    [vars]))


(rf/reg-event-db
  :test-erstellen/init
  (fn [db _]
    (rf/dispatch [:test-erstellen/lade-faecher])
    db))


(rf/reg-event-db
  :test-erstellen/entfernen
  (fn [db _]
    (rf/dispatch [:frage-erstellen/entfernen])
    (dissoc db :test-erstellen)))


(rf/reg-event-fx
  :test-erstellen/lade-faecher
  (fn [{:keys [db]} _]
    {:db          (assoc-in db [:test-erstellen :laedt-faecher] true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/course")
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:test-erstellen/faecher-angekommen]}}))


(rf/reg-event-db
  :test-erstellen/faecher-angekommen
  (fn [db [_ faecher]]
    (-> db
        (assoc-in [:test-erstellen :faecher] faecher)
        (assoc-in [:test-erstellen :laedt-faecher] false))))


(rf/reg-event-fx
  :test-erstellen/lade-kurse
  (fn [{:keys [db]} [_ fach-id]]
    {:db          (assoc-in db [:test-erstellen :laedt-kurse] true)
     :http-xhrio  {:method          :get
                   :uri             (str vars/base-url "/kurs/for-fach/" fach-id)
                   :timeout         8000
                   :response-format (ajax/transit-response-format)
                   :on-success      [:test-erstellen/kurse-angekommen]}}))


(rf/reg-event-db
  :test-erstellen/kurse-angekommen
  (fn [db [_ kurse]]
    (-> db
        (assoc-in [:test-erstellen :kurse] kurse)
        (assoc-in [:test-erstellen :laedt-kurse] false))))


(rf/reg-event-db
  :test-erstellen/update
  (fn [db [_ key value]]
    (assoc-in db [:test-erstellen key] value)))


(rf/reg-event-db
  :test-erstellen/fragen-hinzufuegen
  (fn [db [_ fragen]]
    (update-in db [:test-erstellen :fragen] (comp set concat) fragen)))


(rf/reg-event-db
  :test-erstellen/frage-entfernen
  (fn [db [_ frage]]
    (update-in db [:test-erstellen :fragen] disj frage)))


(rf/reg-event-fx
  :test-erstellen/test-in-db-speichern
  (fn [{:keys [db]}]
    {:db         db
     :http-xhrio {:method          :post
                  :uri             (str vars/base-url "/question-set")
                  :params          {:test-name (get-in db [:test-erstellen :test-name])
                                    :start     (time/input->time-map (get-in db [:test-erstellen :start-datum])
                                                                     (get-in db [:test-erstellen :start-zeit]))
                                    :ende      (time/input->time-map (get-in db [:test-erstellen :end-datum])
                                                                     (get-in db [:test-erstellen :end-zeit]))
                                    :kurs-id (get-in db [:test-erstellen :kurs-id])
                                    :punkte-grenze (get-in db [:test-erstellen :grenze])
                                    :fragen (get-in db [:test-erstellen :fragen])} ; die neu erstellten Fragen haben noch keine id -> werden im backend in db gespeichert
                  :format          (ajax/transit-request-format)
                  :response-format (ajax/transit-response-format)
                  :on-success      [:test-erstellen/erfolgreich-gesendet]}}))


(rf/reg-event-db
  :test-erstellen/erfolgreich-gesendet
  (fn [db _]
    (assoc-in db [:test-erstellen :angekommen] true)))
