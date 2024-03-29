(ns views.question.question-view
  (:require
    [hiccup.form :as form]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(def question-errors
  #{:not-assigned-to-question})


;; I dont know how this exactly works.
;; This function and the subsequent usage
;; in the dispatch-question-type is
;; sourced from: https://github.com/yokolet/hiccup-samples
;; Changed after review by deleting unnecessary attributes.
(defn labeled-radio
  [label]
  [:label (form/radio-button "answer" false label)
   [:span.mx-1 label]])


(defn dispatch-question-type
  [question]
  (cond
    (= (:question/type question)
       :question.type/free-text)
    (form/text-area {:type "free-text"} "answer")
    (= (:question/type question)
       :question.type/single-choice)
    [:div {:class "form-group"} (reduce conj
                                        [:div {:class "btn-group" :type "single-choice"}]
                                        (for [possible-solution (:question/possible-solutions question)]
                                          [:div
                                           [:p possible-solution]
                                           (labeled-radio possible-solution)]))]
    (= (:question/type question)
       :question.type/multiple-choice)
    (for [possible-solution (:question/possible-solutions question)]
      [:div {:type "multiple-choice"}
       [:p possible-solution]
       (form/check-box possible-solution)])))


(defn question-form
  [question put-destination]
  (h/html
    (form/form-to
      [:put put-destination]
      [:div [:p
             {:id (:question/id question)}
             (:question/question-statement question)]
       (println question)
       (dispatch-question-type question)]
      (h/raw (anti-forgery-field))
      (form/submit-button "submit"))))


(defn no-question-assignment
  [permission-error]
  (when (contains? permission-error :not-assigned-to-question)
    [:p (str "ERROR: Sie sind dieser Frage nicht zugewiesen!")]))
