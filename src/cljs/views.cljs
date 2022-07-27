(ns views
  (:require
    [re-com.core :refer [at v-box box gap button label input-textarea line title]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [reagent.dom :as rd]))

(defn TextQuestion
  [{frage-text :frage/frage-text punkte :frage/punkte id :frage/id}]
  (let [antwort (reagent/atom "")]
    [v-box
     :src (at)
     :attr {:key (str id)}
     :gap "5px"
     :children
     [[title
       :label (str frage-text " - " punkte " Punkte")
       :level :level2]
      [label
       :label "Antwort"]
      [v-box
       :children [[input-textarea
                   :src (at)
                   :model antwort
                   :placeholder "Der Sinn des Lebens ist 42 weil..."
                   ;; :change-on-blur? false
                   :on-change (fn [val]
                                (rf/dispatch [:frage-beantworten id val])
                                (reset! antwort val))]]]]]))

(defn Questions
  []
  (fn []
    [v-box
     :src (at)
     :children
     (conj
       (mapv TextQuestion @(rf/subscribe [:fragen]))
       [gap
        :size "10px"]
       [button
        :src (at)
        :class "button-primary"
        :on-click #(rf/dispatch [:antworten-abschicken])
        :label "Abschicken"])]))

(defn Corrections
  []
  [v-box
   :children
   (mapv (fn [c]
           [title :label (str "Correction: " c)
            :level :level2])
         @(rf/subscribe [:corrections]))])

(defn Root
  []
  [box
   :padding "15px"
   :child
   [v-box
    :size "auto"
    :gap "15px"
    :children [[title :label "Test" :level :level1]
               [line]
               [Questions]
               #_[Corrections]]]])
