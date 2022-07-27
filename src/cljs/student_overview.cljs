(ns student-overview
  (:require
    [re-com.core :refer [at button h-box v-box title]]
    [re-frame.core :as rf]
    [student-overview-events]
    [student-overview-subscriptions]))


;; For now, we only look at user with id 0
(def user-id 0)


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


(defn calc-total-points-per-test
  [fragen]
  (reduce
    #(+ %1 (:frage/punkte %2))
    0 fragen))


(defn calc-reached-points-per-frage
  [user-id frage-id]
  (rf/dispatch [:retrieve-antwort-for-this-user-frage [user-id frage-id]])
  (let [antwort @(rf/subscribe [:antwort-from-user-frage user-id frage-id])]
    (:antwort/punkte (first antwort))))


(defn show-test
  [user-id {test-id :test/id name :test/name}]
  (rf/dispatch [:retrieve-fragen-for-this-test test-id])
  (let [fragen @(rf/subscribe [:fragen-from-test test-id])]
    [button
     :label (str name " - Bisher erreichte Punkte: "
                 (reduce
                   #(+ %1 (calc-reached-points-per-frage user-id (:frage/id %2)))
                   0 fragen)
                 " von " (calc-total-points-per-test fragen))]))


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
