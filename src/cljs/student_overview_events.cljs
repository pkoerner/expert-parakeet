(ns student-overview-events
  (:require
    [ajax.core :as ajax]
    [cljs.tools.reader.edn :as edn]
    [re-frame.core :as rf]))


(def <sub (comp deref rf/subscribe))

(def >evt rf/dispatch)


(rf/reg-event-fx
  :retrieve-kurse-for-this-student
  (fn [{:keys [db]} [_ user-id]]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             (str "/api/kurse-from-user/" user-id)
                   :timeout         8000
                   :response-format (ajax/text-response-format)
                   :on-success      [:update-kurse-for-this-student]}}))


(rf/reg-event-fx
  :retrieve-fach-for-this-kurs
  (fn [{:keys [db]} [_ kurs-id]]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             (str "/api/fach-from-kurs/" kurs-id)
                   :timeout         8000
                   :response-format (ajax/text-response-format)
                   :on-success      [:update-fach-for-this-kurs]}}))


(rf/reg-event-fx
  :retrieve-tests-for-this-kurs
  (fn [{:keys [db]} [_ kurs-id]]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             (str "/api/tests-from-kurs/" kurs-id)
                   :timeout         8000
                   :response-format (ajax/text-response-format)
                   :on-success      [:update-tests-for-this-kurs]}}))


(rf/reg-event-fx
  :retrieve-fragen-for-this-test
  (fn [{:keys [db]} [_ test-id]]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             (str "/api/fragen-from-test/" test-id)
                   :timeout         8000
                   :response-format (ajax/text-response-format)
                   :on-success      [:update-fragen-for-test]}}))


(rf/reg-event-fx
  :retrieve-antwort-for-this-user-frage
  (fn [{:keys [db]} [_ [user-id frage-id]]]
    {:db          (assoc db :loading true)
     :http-xhrio  {:method          :get
                   :uri             (str "/api/antworten-from-user-frage/" user-id "/" frage-id)
                   :timeout         8000
                   :response-format (ajax/text-response-format)
                   :on-success      [:update-antwort-for-this-user-frage]}}))


(rf/reg-event-db
  :update-kurse-for-this-student
  (fn [db [_ kurse]]
    (let [{k :kurse} (edn/read-string kurse)]
      (-> db
          (assoc :loading false)
          (assoc :kurse k)))))


(rf/reg-event-db
  :update-tests-for-this-kurs
  (fn [db [_ kurs-tests]]
    (let [{kurs-id :kurs-id t :tests} (edn/read-string kurs-tests)]
      (-> db
          (assoc :loading false)
          (assoc [:tests-by-kurs kurs-id] t)))))


(rf/reg-event-db
  :update-fach-for-this-kurs
  (fn [db [_ kurs-fach]]
    (let [{kurs-id :kurs-id [f] :fach} (edn/read-string kurs-fach)]
      (-> db
          (assoc :loading false)
          (assoc [:fach-by-kurs kurs-id] f)))))


(rf/reg-event-db
  :update-fragen-for-test
  (fn [db [_ test-fragen]]
    (let [{test-id :test-id f :fragen} (edn/read-string test-fragen)]
      (-> db
          (assoc :loading false)
          (assoc [:fragen-by-test test-id] f)))))


(rf/reg-event-db
  :update-antwort-for-this-user-frage
  (fn [db [_ user-frage-antworten]]
    (let [{user-id :user-id frage-id :frage-id a :antworten} (edn/read-string user-frage-antworten)]
      (-> db
          (assoc :loading false)
          (assoc [:antwort-by-user-frage user-id frage-id] a)))))
