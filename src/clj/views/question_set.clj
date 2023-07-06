(ns views.question_set
  (:require
    [db]
    [hiccup.core :as core]
    [hiccup.form :as form]))


(defn extract-question-statement-from-question-set
  [question-set-id]
  (mapv :question/question-statement
        (:question-set/questions
          (db/get-question-set-by-id question-set-id))))


(defn extract-question-from-question-set
  [question-set-id]
  (:question-set/questions
    (db/get-question-set-by-id question-set-id)))


(defn extract-question-id-from-question
  [question]
  (:question/id question))


(defn extract-question-statement-from-question
  [question]
  (:question/question-statement question))


(defn extract-question-type-from-question
  [question]
  (:question/type question))


(defn extract-possible-solutions-from-question
  [question]
  (:question/possible-solutions question))


;; I dont know how this exactly works.
;; This function and the subsequent usage
;; in the dispatch-question-type is
;; sourced from: https://github.com/yokolet/hiccup-samples
;; TODO: add answer-id to the lablaed radio
(defn labeled-radio
  [label]
  [:label (form/radio-button {:ng-model "question.answer"} "question.answer" false label)
   (str label "    ")])


(defn dispatch-question-type
  [question-type, question]
  (cond
    (= question-type :question.type/free-text) (form/text-area "answer")
    (= question-type :question.type/single-choice) [:div {:class "form-group"}
                                                    (reduce conj
                                                            [:div {:class "btn-group"}]
                                                            (map labeled-radio (extract-possible-solutions-from-question question)))]
    (= question-type :question.type/multiple-choice) (for [possible-solution (extract-possible-solutions-from-question question)]
                                                       [:div
                                                        [:p possible-solution]
                                                        (form/check-box possible-solution)])))


(defn question-set-form
  [question-set-id]
  (form/form-to [:put "/answer/id"]
  (for [question (extract-question-from-question-set question-set-id)]
     [:div [:p
            {:id (extract-question-id-from-question question)}
            (extract-question-statement-from-question question)]
      [:div (dispatch-question-type
              (extract-question-type-from-question question)
              question)]])
   (form/submit-button "submit")))
