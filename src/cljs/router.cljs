(ns router
  (:require
    [re-frame.core :as re-frame]
    [reitit.coercion.spec :as rss]
    [reitit.core :as r]
    [reitit.frontend :as rf]
    [reitit.frontend.controllers :as rfc]
    [reitit.frontend.easy :as rfe]
    [studierenden-uebersicht.views :as stud]
    [test.views :as test]))


(def href rfe/href)


;; Effects ;;;

;; Triggering navigation from events.

(re-frame/reg-fx :push-state
                 (fn [{:keys [name path-params query-params]}]
                   (apply rfe/push-state name path-params query-params)))


;; Events ;;;

(re-frame/reg-event-fx ::push-state
                       (fn [_ [_ & route]]
                         {:push-state route}))


(re-frame/reg-event-db ::navigated
                       (fn [db [_ new-match]]
                         (let [old-match   (:current-route db)
                               controllers (rfc/apply-controllers (:controllers old-match) new-match)]
                           (assoc db :current-route (assoc new-match :controllers controllers)))))


;; Subscriptions ;;;

(re-frame/reg-sub ::current-route
                  (fn [db]
                    (:current-route db)))


;; Routes ;;;

(def routes
  ["/"
   [""
    {:name      ::overview
     :view      stud/overview
     :link-text "Übersicht"
     :controllers
     [{:start #(re-frame/dispatch [:kurse/laden])
       :stop  #(re-frame/dispatch [:kurse/entfernen])}]}]
   ["test/:id"
    {:name      ::test
     :view      test/Root
     :link-text "Test"
     :parameters {:path {:id int?}}
     :controllers
     [{:parameters {:path [:id]}
       :start (fn [params]
                (re-frame/dispatch [:test/laden (get-in params [:path :id])]))
       :stop (fn [_]
               (re-frame/dispatch [:test/entfernen]))}]}]])


(defn on-navigate
  [new-match]
  (when new-match
    (re-frame/dispatch [::navigated new-match])))


(def router
  (rf/router
    routes
    {:data {:coercion rss/coercion}}))


(defn init-routes!
  []
  (js/console.log "initializing routes")
  (rfe/start!
    router
    on-navigate
    {:use-fragment false}))


;; Views

(defn nav
  [{:keys [dests router current-route]}]
  [:ul
   (for [route-name dests
         :let       [route (r/match-by-name router route-name)
                     text (-> route :data :link-text)
                     active (= route-name (-> current-route :data :name))]]
     [:li {:key route-name}
      (if active
        ;; active link
        [:a {:href (href route-name)
             :style {:color "red"}} text]
        ;; Create a normal links that user can click
        [:a {:href (href route-name)} text])])])


(defn router-component
  [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [::current-route])]
    [:div
     [nav {:dests [::overview] :router router :current-route current-route}]
     (when current-route
       [(-> current-route :data :view)])]))
