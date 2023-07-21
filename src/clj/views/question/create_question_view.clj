(ns views.question.create-question-view
  (:require
    [clojure.string :as string]
    [domain.spec :refer [question-types]]
    [hiccup.form :as hform]
    [hiccup.page :as hpage]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(defn- script
  [& script-src]
  [:script {:type "text/javascript"}
   (h/raw (apply str script-src))])


(defn- free-text-inputs
  []
  (h/html
    [:div#free-text
     [:label {:for "evaluation-criteria"} "Bewertungskriterien:"] [:br]
     [:input#evaluation-criteria {:name "evaluation-criteria"}]]))


(defn- possible-answers-input
  [choice-type]
  (let [container-div-id (str choice-type "input")
        solution-container-div-id (str "additional-" choice-type)
        add-solution-btn-id (str "add-" choice-type "-btn")
        solution-input-id (str "possible-" choice-type "-solutions")
        solution-list-id (str choice-type "-solutions")]
    (h/html
      [:div {:id container-div-id}
       [:label {:for "possible-solutions"} "Antwort Möglichkeiten:"] [:br]
       [:div {:id solution-container-div-id}]
       [:button {:id add-solution-btn-id :type "button"} "+"]
       ;; When the add button is klicked
       (script "
registerAddingSolutionBehavior(
    '" add-solution-btn-id "', '" solution-container-div-id "', '" solution-input-id "', '" solution-list-id "'
)")]

      [:div
       [:label {:for solution-list-id} "Korrekte Antwort(/en):"] [:br]
       [:ul {:id solution-list-id}]])))


(defn- single-choice-inputs
  []
  (h/html
    [:div#single-choice
     (possible-answers-input "single-choice")]))


(defn- multiple-choice-inputs
  []
  (h/html
    [:div#multiple-choice
     (possible-answers-input "multiple-choice")]))


(defn question-form
  [post-destination]
  (let [question-types-js-arr (str "[" (string/join ", "  (map #(str "'" % "'") (map name question-types))) "]")]
    (h/html
      (hpage/include-js "js/views/question/util.js"
                        "js/views/question/create_question_view.js")

      [:h1 "Frage erstellung:"]
      (hform/form-to
        {:enctype "multipart/form-data"
         :onsubmit (str "removeHiddenQuestionTypeInputsOnSubmit(" question-types-js-arr ")")}
        [:post post-destination]

        [:div
         [:label {:for "question-statement"} "Fragestellung:"] [:br]
         [:input#question-statement {:name "question-statement"}]]

        [:div
         [:label {:for "achivable-points"} "Maximalpunktzahl:"] [:br]
         [:input#achivable-points {:name "achivable-points"
                                   :type "number"
                                   :min "0"
                                   :step ".1"
                                   :value "5"}]]

        [:div
         [:label {:for "type"} "Fragentyp"] [:br]
         [:select#type {:name "type"}
          (hform/select-options (map (fn [type] [type type]) question-types))]]



        (single-choice-inputs)
        (multiple-choice-inputs)
        (free-text-inputs)

        (h/raw (anti-forgery-field))
        (hform/submit-button "submit"))
      (script "
registerQuestionTypeSwitch('type', " question-types-js-arr ");
"))))


(defn- single-choice-question-view
  [question]
  [:div
   [:p [:b "Antwortmöglichkeiten: "]
    [:ul (for [el (question :question/possible-solutions)]
           [:li el])]]
   [:p [:b "Mit der korrekten Antwort: "] (question :question/single-choice-solution)]])


(defn- multiple-choice-question-view
  [question]
  [:div

   [:p [:b "Antwortmöglichkeiten: "]
    [:ul (for [el (question :question/possible-solutions)]
           [:li el])]]

   [:p [:b "Mit den korrekten Antworten: "]
    [:ul (for [el (question :question/multiple-choice-solution)]
           [:li el])]]])


(defn- free-text-question-view
  [question]
  [:div
   [:p [:b "Mit dem Bewertungskriterium: "] (question :question/evaluation-criteria)]])


(defn question-success-view
  [question]
  (h/html
    [:h1 "Die Frage vom typ \"" (question :question/type) "\" wurde erfolgreich erstellt."]
    [:div
     [:h2 "Frage: "]
     [:p [:b "Fragestellung: "] (question :question/question-statement)]
     (case (question :question/type)
       :question.type/free-text (free-text-question-view question)
       :question.type/single-choice (single-choice-question-view question)
       :question.type/multiple-choice (multiple-choice-question-view question))
     [:p [:b "Erreichbare Punkte: "] (question :question/points)]]))
