(ns student-overview-events
  (:require
    [ajax.core :refer [GET]]
    [cljs.tools.reader.edn :as edn]
    [re-frame.core :as rf]))


(rf/reg-event-fx
  :retrieve-kurse-for-this-student
  (fn [{:keys [db]} [_ user-id]]
    {:db db
     :dispatch (GET (str "/api/kurse-from-user/" user-id)
                    {:handler (fn [resp]
                                (rf/dispatch [:update-kurse-for-this-student
                                              (edn/read-string (str "[" resp "]"))]))})}))


(rf/reg-event-fx
  :retrieve-fach-for-this-kurs
  (fn [{:keys [db]} [_ kurs-id]]
    {:db db
     :dispatch (GET (str "/api/fach-from-kurs/" kurs-id)
                    {:handler (fn [resp]
                                (rf/dispatch [:update-fach-for-this-kurs
                                              [kurs-id (edn/read-string resp)]]))})}))


(rf/reg-event-fx
  :retrieve-tests-for-this-kurs
  (fn [{:keys [db]} [_ kurs-id]]
    {:db db
     :dispatch (GET (str "/api/tests-from-kurs/" kurs-id)
                    {:handler (fn [resp]
                                (rf/dispatch [:update-tests-for-this-kurs
                                              [kurs-id (edn/read-string (str "[" resp "]"))]]))})}))


(rf/reg-event-fx
  :retrieve-fragen-for-this-test
  (fn [{:keys [db]} [_ test-id]]
    {:db db
     :dispatch (GET (str "/api/fragen-from-test/" test-id)
                    {:handler (fn [resp]
                                (rf/dispatch [:update-fragen-for-test
                                              [test-id (edn/read-string (str "[" resp "]"))]]))})}))


(rf/reg-event-fx
  :retrieve-antwort-for-this-user-frage
  (fn [{:keys [db]} [_ [user-id frage-id]]]
    {:db db
     :dispatch (GET (str "/api/antworten-from-user-frage/" user-id "/" frage-id)
                    {:handler (fn [resp]
                                (rf/dispatch [:update-antwort-for-this-user-frage
                                              [user-id frage-id (edn/read-string (str "[" resp "]"))]]))})}))


(rf/reg-event-db
  :update-kurse-for-this-student
  (fn [db [_ kurse]]
    (assoc db :kurse kurse)))


(rf/reg-event-db
  :update-tests-for-this-kurs
  (fn [db [_ [kurs-id tests]]]
    (assoc db [:tests-by-kurs kurs-id] tests)))


(rf/reg-event-db
  :update-fach-for-this-kurs
  (fn [db [_ [kurs-id fach]]]
    (assoc db [:fach-by-kurs kurs-id] fach)))


(rf/reg-event-db
  :update-fragen-for-test
  (fn [db [_ [test-id fragen]]]
    (assoc db [:fragen-by-test test-id] fragen)))


(rf/reg-event-db
  :update-antwort-for-this-user-frage
  (fn [db [_ [user-id frage-id antworten]]]
    (assoc db [:antwort-by-user-frage user-id frage-id] antworten)))
