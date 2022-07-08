(ns cljshello
  (:require
    [ajax.core :refer [GET]]
    [cljs.tools.reader.edn :as edn]
    [re-com.core :refer [at h-box v-box box p gap button label input-textarea throbber line title]]
    [re-frame.core :as rf]
    [reagent.core :as reagent]
    [reagent.dom :as rd]))


(defn SimpleTextArea
  []
  (let [text-val (reagent/atom nil)]                    ; state ist nicht global, wundervoll
    (fn []
      ;; muss fn zurückgeben, damit let funktioniert
      [input-textarea
       :class "textarea"
       :model text-val
       ;; :model "text-val"
       :on-change #(reset! text-val %)])))


(defn TextQuestion
  [{:keys [question points question-id]} answer]
  [v-box
   :attr {:key (str question-id)}
   :gap "5px"
   :children [[title
               :label (str question " - " points " Punkte")
               :level :level2]
              [label
               :label "Antwort"]
              [v-box
               :children [[input-textarea
                           :model answer
                           :placeholder "Der Sinn des Lebens ist 42 weil..."
                           :on-change #(reset! answer %)]]]]])


(defn Questions
  [questions]
  (let [answers
        (reduce (fn [a q-id] (assoc a q-id (reagent/atom ""))) ; aua viele atome, aber textarea model brauchen jeweils eins
                {}
                (map :question-id questions))]
    (fn []
      [v-box
       :children
       (conj
         (mapv (fn [q] (TextQuestion q (get answers (:question-id q))))
              questions)
         [gap
          :size "10px"]
         [button
          :src (at)
          :class "button-primary"
          :on-click #(rf/dispatch [:check-answer])          ;; funktioniert noch nicht
          :label "Abschicken"])])))


;; (set! re-com.box/visualise-flow? true)

(defn Button
  []
  (let [click-counter (reagent/atom 0)
        click-outcomes
        [""                                             ; start blank
         "Netflix server shutdown"
         "Donald Trump released from prison"
         "Toy disabled"]
        clicked-second-button? (reagent/atom false)]
    (fn []
      [v-box
       :src (at)                                   ; hilft beim debugging, zeigt fehlerzeile
       :gap "10px"
       :children
       [[h-box
         :src (at)
         :gap "10px"
         :children [[button
                     :label "No clicking!"
                     :tooltip (when-not (= (:outcome-index @click-counter) (dec (count click-outcomes))) "Seriously, NO CLICKING!")
                     :disabled? (>= @click-counter (dec (count click-outcomes)))
                     :on-click #(swap! click-counter inc) ; muss function sein
                     :class "btn btn-danger"]
                    [box
                     :src (at)
                     :align :center
                     :child [label
                             :src (at)
                             :label (nth click-outcomes @click-counter)]]]]
        [p
         "Ein kleiner Paragraph."]
        [h-box
         :src (at)
         :gap "10px"
         :children [[button
                     :label "Känguru Weisheit"
                     :on-click #(swap! clicked-second-button? not)
                     :class "btn btn-primary"]
                    (when @clicked-second-button?
                      [box
                       :src (at)
                       :align :center
                       :child [label
                               :src (at)
                               :label "Dein Code, mein Code, das sind doch bürgerliche Kategorien."]])]]]])))


(defn Root
  []
  [box
   :padding "15px"
   :child
   [v-box
    :size "auto"
    :gap "15px"
    :children [[title
                :label "Test"
                :level :level1]
               [line]
               [Questions
                [{:question-id 0 :question "Fühlen Sie sich prüfungsbereit?" :points 0}
                 {:question-id 1 :question "Was ist der Sinn des Lebens?" :points 42}]]
               [title
                :label "Sonstiges"
                :level :level2]
               [Button]
               [SimpleTextArea]]]])


(rd/render [Root]
           (. js/document (getElementById "app")))
