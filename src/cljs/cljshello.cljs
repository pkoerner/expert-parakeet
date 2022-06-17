(ns cljshello
  (:require
    [ajax.core :refer [GET POST]]
    [cljs.tools.reader.edn :as edn]
    [re-frame.core :as rf]
    ;; [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rd]))


(defn Hello
  []
  [:h1 "Hello World!"])


(rf/reg-event-db
  :init-db
  (fn [db _]
    (POST "/backend/random"
          {:handler (fn [resp]
                      (rf/dispatch [:update-challenge (edn/read-string resp)]))})
    db))


(rf/reg-event-db
  :update-challenge
  (fn [db [_ [a b]]]
    (assoc db :a a :b b)))


(rf/reg-event-db
  :check-answer
  (fn [db [_ val]]
    (GET "/backend/check-random"
         {:handler (fn [resp]
                     (rf/dispatch [:update-correct (edn/read-string resp)]))
          :params {:a (:a db), :b (:b db), :res val}
          :format :raw})
    ;;  (= val (str res))
    db))


(rf/reg-event-db
  :update-correct
  (fn [db [_ val]]
    (assoc db :correct val)))


(rf/reg-sub
  :values
  (fn [db _] db))


(defn Calc
  []
  (let [vals @(rf/subscribe [:values])
        a (:a vals)
        b (:b vals)]
    [:div
     (str a "+" b "=")
     [:input {:type "number"
              :on-change #(rf/dispatch [:check-answer (-> % .-target .-value)])}]]))


(defn React-to-user
  []
  (let [ans (:correct @(rf/subscribe [:values]))]
    (if (not (nil? ans))
      [:div
       (if ans "Correct" "False")
       ans]
      [:div])))


(rf/dispatch [:init-db])


(defn Root
  []
  [:div
   [Hello]
   [Calc]
   [React-to-user]])


(rd/render [Root]
           (. js/document (getElementById "app")))
