(ns cljshello
  (:require
    [ajax.core :refer [GET POST]]
    [re-frame.core :as rf]
    ;; [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rd]))


(GET "http://localhost/backend/random" )

(defn Hello
  []
  [:h1 "Hello World!"])


(rf/reg-event-db
  :init-db
  (fn [_ _]
    (let
      [a (rand-int 5)
       b (rand-int 5)
       res (+ a b)]
      {:a a, :b b, :res res})))


(rf/reg-event-db
  :check-answer
  (fn [db [_ val]]
    (let [res (:res db)]
      (prn val res)
      (assoc db :correct (= val (str res))))))


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
