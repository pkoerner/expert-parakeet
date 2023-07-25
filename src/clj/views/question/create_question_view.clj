(ns views.question.create-question-view
  (:require
    [clojure.string :as string]
    [domain.spec :refer [question-types]]
    [hiccup.form :as hform]
    [hiccup.page :as hpage]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]))


(defn- optional-error-display
  [key dict]
  (let [error-messages (dict key)]
    (when error-messages
      [:div (into [] (concat
                       [:div]
                       (map (fn [x] [:p [:span {:style "color: red;"} x]])
                            (string/split error-messages #"\n"))))])))


(defn- script
  [& script-src]
  [:script {:type "text/javascript"}
   (h/raw (apply str script-src))])


(defn- free-text-inputs
  [errors]
  (h/html
    [:div#free-text
     (optional-error-display :question/evaluation-criteria errors)
     [:label {:for "evaluation-criteria"} "Bewertungskriterien:"] [:br]
     [:input#evaluation-criteria {:name "evaluation-criteria"}]]))


(defn- possible-answers-input
  [choice-type possible-solutions-error solution-error]
  (let [container-div-id (str choice-type "input")
        solution-container-div-id (str "additional-" choice-type)
        add-solution-btn-id (str "add-" choice-type "-btn")
        solution-input-id (str "possible-" choice-type "-solutions")
        solution-list-id (str choice-type "-solutions")]
    (h/html
      [:div {:id container-div-id}
       possible-solutions-error
       [:label {:for "possible-solutions"} "Antwort Möglichkeiten:"] [:br]
       [:div {:id solution-container-div-id}]
       [:button.btn.btn-outline-info.btn-sm {:id add-solution-btn-id :type "button"} "+"]
       ;; When the add button is klicked
       (script "
registerAddingSolutionBehavior(
    '" add-solution-btn-id "', '" solution-container-div-id "', '" solution-input-id "', '" solution-list-id "'
)")]

      [:div
       solution-error
       [:label {:for solution-list-id} "Korrekte Antwort(/en):"] [:br]
       [:ul {:id solution-list-id}]])))


(defn- single-choice-inputs
  [errors]
  (h/html
    [:div#single-choice
     (possible-answers-input "single-choice"
                             (optional-error-display :question/possible-solutions errors)
                             (optional-error-display :question/single-choice-solution errors))]))


(defn- multiple-choice-inputs
  [errors]
  (h/html
    [:div#multiple-choice
     (possible-answers-input "multiple-choice"
                             (optional-error-display :question/possible-solutions errors)
                             (optional-error-display :question/multiple-choice-solution errors))]))


(defn question-form
  [categories post-destination & {:keys [errors] :or {errors {}}}]
  (let [question-types-js-arr (str "[" (string/join ", "  (map #(str "'" % "'") (map name question-types))) "]")]
    (h/html
      (hpage/include-js "js/views/question/util.js"
                        "js/views/question/create_question_view.js")
      [:div.container-fluid
       [:h1 "Frage erstellung:"]
       (hform/form-to
         {:enctype "multipart/form-data"
          :onsubmit (str "removeHiddenQuestionTypeInputsOnSubmit(" question-types-js-arr ")")}
         [:post post-destination]

         [:div.form-group
          (optional-error-display :question/question-statement errors)
          [:label {:for "question-statement"} "Fragestellung:"] [:br]
          [:input#question-statement.form-control {:name "question-statement"}]]

         [:div.form-group
          (optional-error-display :question/points errors)
          [:label {:for "achivable-points"} "Maximalpunktzahl:"] [:br]
          [:input#achivable-points.form-control {:name "achivable-points"
                                                 :type "number"
                                                 :min "0"
                                                 :step ".1"
                                                 :value "5"}]]

         [:div.form-group
          (optional-error-display :question/type errors)
          [:label {:for "type"} "Fragentyp"] [:br]
          [:select#type.form-control {:name "type"}
           (hform/select-options (map (fn [type] [type type]) question-types))]]

         (single-choice-inputs errors)
         (multiple-choice-inputs errors)
         (free-text-inputs errors)

         [:div.form-group
          [:label {:for "new-category"} "Neue Kategorie erstellen:"]
          [:input#new-category.form-control {:type "text"}]
          [:button.btn.btn-outline-info.btn-sm {:type "button" :onclick "addNewCategory()"} "+"]]

         [:div {:clas "form-group"}
          (optional-error-display :question/categories errors)
          [:label {:for "category-container"} "Kategorien:"] [:br]
          [:div#category-container {:style "max-height: 150px; overflow-y: scroll;" :multiple true}
           (map (fn [cat]
                  (let [id (str "mult-select-" cat)]
                    [:div.form-check
                     [:input.form-check-input {:id id :type "checkbox" :name "category" :value cat}]
                     [:label.form-check-label {:for id} cat]])) (sort categories))]]

         (h/raw (anti-forgery-field))
         (hform/submit-button {:class "btn btn-primary"} "submit"))
       (script "
registerQuestionTypeSwitch('type', " question-types-js-arr ");
")])))


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
