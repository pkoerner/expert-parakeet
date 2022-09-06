(ns orga.frage-vorschau.views
  (:require
    [re-com.core :as rc :refer [at v-box]]
    [test.views :refer [single-choice-beantworten-body multiple-choice-beantworten-body]]))


(defn frage-vorschau
  [frage]
  (let [{id     :frage/id
         typ    :frage/typ
         punkte :frage/punkte
         text   :frage/frage-text} frage]
    [v-box :src (at)
     :children
     [[rc/label :src (at)
       :label (str text " - " punkte " Punkte")]
      (cond
        (= typ :frage.typ/text)
        (rc/label
          :label (:frage/loesungskriterien frage))
        (= typ :frage.typ/single-choice)
        (single-choice-beantworten-body id (:frage/choices frage)
                                        (:frage/single-choice-loesung frage) #() true)
        (= typ :frage.typ/multiple-choice)
        (multiple-choice-beantworten-body id (:frage/choices frage)
                                          (set (:frage/multiple-choice-loesung frage)) #() true)
        :else [:label "Fragentyp nicht implementiert"])]]))
