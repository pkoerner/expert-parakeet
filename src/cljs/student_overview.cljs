(ns student-overview
  (:require
    [ajax.core :refer [GET]]
    [cljs.tools.reader.edn :as edn]
    [re-com.core :refer [at button h-box v-box title]]
    [re-frame.core :as rf]))


;; For now, we only look at user with id 0
(def user-id 0)


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
  :retrieve-antworten-for-this-user-frage
  (fn [{:keys [db]} [_ [user-id frage-id]]]
    {:db db
     :dispatch (GET (str "/api/antworten-from-user-frage/" user-id "/" frage-id) ; get frage ids out of test
                    {:handler (fn [resp]
                                (rf/dispatch [:update-antworten-for-this-user-frage
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
  :update-antworten-for-this-user-frage
  (fn [db [_ [user-id frage-id antworten]]]
    (assoc db [:antworten-by-user-frage user-id frage-id] antworten)))


(rf/reg-sub
  :kurse
  (fn [db _] (:kurse db)))


(rf/reg-sub
  :fach-from-kurs
  (fn [db [_ kurs-id]] (get db [:fach-by-kurs kurs-id])))


(rf/reg-sub
  :tests-from-kurs
  (fn [db [_ kurs-id]] (get db [:tests-by-kurs kurs-id])))


(rf/reg-sub
  :antworten-from-user-frage
  (fn [db [_ user-id frage-id]] (get db [:antworten-by-user-frage user-id frage-id])))


(defn headline
  [user-id]
  [:div
   [h-box
    :gap      "10px"
    :children [[:div "Logged in as: " user-id]
               [button
                :src (at)
                :class "button-primary"
                ;; :on-click #(rf/dispatch [:logout])
                :label "Logout"]]]])


(defn show-test
  [user-id {_test-id :test/id name :test/name}]
  (let [frage-id 1]
    (rf/dispatch [:retrieve-antworten-for-this-user-frage [user-id frage-id]])
    (let [antworten @(rf/subscribe [:antworten-from-user-frage user-id frage-id])]
      [button
       :label (str name " - " antworten)])))


(defn show-kurs
  [user-id {id :kurs/id jahr :kurs/jahr semester :kurs/semester}]
  (rf/dispatch [:retrieve-fach-for-this-kurs id])
  (rf/dispatch [:retrieve-tests-for-this-kurs id])
  (let [fach @(rf/subscribe [:fach-from-kurs id])
        tests @(rf/subscribe [:tests-from-kurs id])]
    [v-box
     :src (at)
     :attr {:key (str id)}
     :gap "5px"
     :children
     [[title
       :label (str (:fach/fachtitel fach) " - " semester " - " jahr ":")
       :level :level2]
      (map (partial show-test user-id) tests)]]))


(defn show-kurse-and-tests
  [user-id]
  (rf/dispatch [:retrieve-kurse-for-this-student user-id])
  (let [kurse @(rf/subscribe [:kurse])]
    [:div (map (partial show-kurs user-id) kurse)]))


(defn main
  []
  [:div
   [:h1 "Hello from Student Overview"]
   [headline user-id]
   [show-kurse-and-tests user-id]])
