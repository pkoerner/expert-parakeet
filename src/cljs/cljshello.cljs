(ns cljshello
  (:require
    ;[reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rd]
    [re-frame.core :as rf]
    ))

(defn Hello []
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

(defn Calc []
      (let [vals @(rf/subscribe [:values])
            a (:a vals)
            b (:b vals)]
            [:div
             (str a "+" b "=")
             [:input {:type "number"
                      :on-change #(rf/dispatch [:check-answer (-> % .-target .-value)])}]]))

(defn React-to-user []
      (let [ans (:correct @(rf/subscribe [:values]))]
           (if (not (nil? ans))
             [:div
              (if ans "Correct" "False")
              ans]
             [:div])))

(rf/dispatch [:init-db])

(defn Root []
  [:div
   [Hello]
   [Calc]
   [React-to-user]])

(rd/render [Root]
           (. js/document (getElementById "app")))