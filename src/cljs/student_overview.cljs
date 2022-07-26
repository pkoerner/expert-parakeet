(ns student-overview
  (:require
    [re-com.core :refer [at button h-box]]))


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


(defn main
  []
  [:div
   [:h1 "Hello from Student Overview"]
   [headline user-id]])
