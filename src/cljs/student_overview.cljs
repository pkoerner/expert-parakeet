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
  (fn [{:keys [db]} _]
    {:db db
     :dispatch (GET (str "/api/kurse-from-user/" user-id)
                    {:handler (fn [resp]
                                (rf/dispatch [:update-kurse-for-this-student
                                              (edn/read-string (str "[" resp "]"))]))})}))


(rf/reg-event-db
  :update-kurse-for-this-student
  (fn [db [_ kurse]]
    (assoc db :kurse kurse)))


(rf/reg-sub
  :kurse
  (fn [db _] (:kurse db)))


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


(defn show-kurs
  [{fach :kurs/fach jahr :kurs/jahr semester :kurs/semester}]
  [v-box
   :src (at)
   ;; :attr {:key (str id)}
   :gap "5px"
   :children
   [[title
     :label (str fach " - " semester " - " jahr ":")
     :level :level2]]])


(defn show-kurse-and-tests
  []
  (rf/dispatch [:retrieve-kurse-for-this-student])
  (let [kurse @(rf/subscribe [:kurse])]
    [:div (map show-kurs kurse)]))


(defn main
  []
  [:div
   [:h1 "Hello from Student Overview"]
   [headline user-id]
   [show-kurse-and-tests]])
