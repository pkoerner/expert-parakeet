(ns services.question-service
  (:require
   [db]
   [hiccup.form :as form]))

(defn extract-question-statement-from-question-set
  [question-set-id]
  (mapv :question/question-statement
        (:question-set/questions
         (db/get-question-set-by-id question-set-id))))

(defn extract-question-set-name
  [question-set-id]
  (:question-set/name
   (db/get-question-set-by-id question-set-id)))

(defn extract-questions-from-question-set
  [question-set-id]
  (:question-set/questions
   (db/get-question-set-by-id question-set-id)))


(defn extrac-question-points-from-question
  [question]
  (:question/points question))


(defn extract-question-id-from-question
  [question]
  (:question/id question))


(defn extract-question-statement-from-question
  [question]
  (:question/question-statement question))


(defn extract-question-type-from-question
  [question]
  (:question/type question))

(defn extract-question-from-question-set
  [question-set-id]
  (:question-set/questions
   (db/get-question-set-by-id question-set-id)))

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
  [question]
  (cond
    (= (extract-question-type-from-question question)
       :question.type/free-text)
    (form/text-area "answer")
    (= (extract-question-type-from-question question)
       :question.type/single-choice)
    [:div {:class "form-group"} (reduce conj
                                        [:div {:class "btn-group"}]
                                        (for [possible-solution (extract-possible-solutions-from-question question)]
                                          [:div
                                           [:p possible-solution]
                                           (labeled-radio possible-solution)]))]
    (= (extract-question-type-from-question question)
       :question.type/multiple-choice)
    (for [possible-solution (extract-possible-solutions-from-question question)]
      [:div
       [:p possible-solution]
       (form/check-box possible-solution)])))