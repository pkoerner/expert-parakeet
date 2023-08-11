(ns views.question.create-question-view
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [domain.spec :refer [question-types]]
    [hiccup.form :as hform]
    [hiccup.page :as hpage]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [util.hiccup-extensions :refer [optional-error-display script]]))


(def create-question-error-keys
  "Possible keys for which errors can be displayed in the `question-form`."
  #{:question/question-statement :question/type :question/points
    :question/possible-solutions :question/single-choice-solution :question/multiple-choice-solution
    :question/evaluation-criteria})


(defn- free-text-inputs
  [errors question-data]
  (h/html
    [:div#free-text
     (optional-error-display :question/evaluation-criteria errors)
     [:label {:for "evaluation-criteria"} "Bewertungskriterien:"] [:br]
     [:input#evaluation-criteria.form-control {:name "evaluation-criteria"
                                               :value (question-data :question/evaluation-criteria)}]]))


(defn- possible-answers-input
  [choice-type
   possible-solutions-error solution-error
   was-selected possible-solutions solutions]
  (let [question-type-container (str choice-type "-container")
        possible-solution-input-id (str "possible-" choice-type "-solution")
        solution-container-div-id (str possible-solution-input-id "-container")
        add-possible-solution-btn-id (str "add-" possible-solution-input-id "-btn")
        solution-list-id (str choice-type "-solution")]
    (h/html
      [:div {:id question-type-container}
       possible-solutions-error
       [:label {:for solution-container-div-id} "Antwort Möglichkeiten:"] [:br]
       [:div.form-group {:id solution-container-div-id}
        (when was-selected
          (apply script
                 (concat ["window.onload = () => {"]
                         (for [curr-solution possible-solutions]
                           (str "
expert_parakeet.question.create_question_view.add_to_possible_solution(
  '" solution-container-div-id "',
  '" possible-solution-input-id "',
  '" solution-list-id "',
  '" curr-solution "',
  " (contains?  (set solutions) curr-solution) "
);\n"))
                         ["};"])))]
       [:button.btn.btn-outline-info.btn-sm {:id add-possible-solution-btn-id :type "button"} "+"]
       ;; When the add button is klicked
       (script "
expert_parakeet.question.create_question_view.register_adding_solution_behavior(
    '" add-possible-solution-btn-id "', '" solution-container-div-id "', '" possible-solution-input-id "', '" solution-list-id "'
)")]

      [:div
       solution-error
       [:label {:for solution-list-id} "Korrekte Antwort(/en):"] [:br]
       [:ul {:id solution-list-id}]])))


(defn- single-choice-inputs
  [errors question-data]
  (letfn [(as-coll
            [coll-or-single]
            (if (or (nil? coll-or-single)
                    (coll? coll-or-single))
              coll-or-single
              [coll-or-single]))]
    (h/html
      [:div#single-choice
       (possible-answers-input "single-choice"
                               (optional-error-display :question/possible-solutions errors)
                               (optional-error-display :question/single-choice-solution errors)
                               (= :question.type/single-choice (question-data :question/type))
                               (question-data :question/possible-solutions)
                               (as-coll (question-data :question/single-choice-solution)))])))


(defn- multiple-choice-inputs
  [errors question-data]
  (h/html
    [:div#multiple-choice
     (possible-answers-input "multiple-choice"
                             (optional-error-display :question/possible-solutions errors)
                             (optional-error-display :question/multiple-choice-solution errors)
                             (= :question.type/multiple-choice (question-data :question/type))
                             (question-data :question/possible-solutions)
                             (question-data :question/multiple-choice-solution))]))


(s/fdef question-form
        :args (s/cat :categories (s/coll-of :question/categories)
                     :post-destination :general/non-blank-string
                     :errors (s/cat :errors  (s/? #{:errors})
                                    :error-map (s/? (s/map-of create-question-error-keys string?))
                                    :question-data (s/? #{:question-data})
                                    :question-data-map (s/? map?)))
        :ret #(instance? hiccup.util.RawString %))


(defn question-form
  "Takes as arguments a collection of arguments and a destination to which the form post should be send.
   Optional keyword arguemnts:  
   `:errors`: Takes a map with keys from the `:question` namespace mapped to strings. 
   These are displayed as errors in the form with their corresponding input field.  
   `:question-data`: Takes a map  with keys from the `:question` namespace mapped to valid values.  
   When present the values are set put into the input fields corresponding to the name.
   This way the form can be re/prepopulated.  "
  [categories post-destination & {:keys [errors question-data] :or {errors {} question-data {}}}]
  (let [question-types-js-arr (str "[" (string/join ", "  (map #(str "'" % "'") (map name question-types))) "]")]
    (h/html
      (hpage/include-js "cljs/goog/base.js"
                        "cljs/main.js")
      (script "goog.require('expert_parakeet.question.create_question_view');")
      [:div.container
       [:h1 "Fragenerstellung:"]
       (hform/form-to
         {:enctype "multipart/form-data"
          :onsubmit (str "expert_parakeet.question.create_question_view.remove_doms_when_hidden(" question-types-js-arr ")")}
         [:post post-destination]

         [:div.form-group
          (optional-error-display :question/question-statement errors)
          [:label {:for "question-statement"} "Fragestellung:"] [:br]
          [:input#question-statement.form-control {:name "question-statement" :value (question-data :question/question-statement)}]]

         [:div.form-group
          (optional-error-display :question/points errors)
          [:label {:for "achivable-points"} "Maximalpunktzahl:"] [:br]
          [:input#achivable-points.form-control {:name "achivable-points"
                                                 :type "number"
                                                 :min "0"
                                                 :step ".1"
                                                 :value (let [points (question-data :question/points)]
                                                          (if points points "5"))}]]

         [:div.form-group
          (optional-error-display :question/type errors)
          [:label {:for "type"} "Fragentyp"] [:br]
          [:select#type.form-control {:name "type"}
           (hform/select-options
             (let [prev-type (question-types (question-data :question/type))
                   default-selected (if prev-type prev-type (first question-types))
                   without-selected (remove #{default-selected} question-types)
                   to-select-option (fn [type] [type type])]

               (conj (map to-select-option without-selected)
                     (to-select-option default-selected))))]]

         (single-choice-inputs errors question-data)
         (multiple-choice-inputs errors question-data)
         (free-text-inputs errors question-data)

         [:div.form-group
          [:label {:for "new-category"} "Neue Kategorie erstellen:"]
          [:input#new-category.form-control {:type "text"}]
          [:button.btn.btn-outline-info.btn-sm {:type "button" :onclick "expert_parakeet.question.create_question_view.add_new_category()"} "+"]]

         [:div {:clas "form-group"}
          (optional-error-display :question/categories errors)
          [:label {:for "category-container"} "Kategorien:"] [:br]
          [:div#category-container {:style "max-height: 150px; overflow-y: scroll;" :multiple true}
           (map (fn [cat]
                  (let [id (str "mult-select-" cat)]
                    [:div.form-check
                     [:input.form-check-input {:id id :type "checkbox" :name "categories" :value cat
                                               :checked (some #{cat} (question-data :question/categories))}]
                     [:label.form-check-label {:for id} cat]]))
                (sort categories))]]

         (h/raw (anti-forgery-field))
         (hform/submit-button {:class "btn btn-primary"} "submit"))
       (script "
expert_parakeet.question.create_question_view.register_question_type_switch('type', " question-types-js-arr ");
")])))


(defn- possible-solutions-view
  [{:question/keys [possible-solutions]}]
  [:p.lead [:b "Antwortmöglichkeiten: "]
   [:ul.list-group (for [el possible-solutions]
                     [:li.list-group-item el])]])


(defn- single-choice-question-view
  [{:question/keys [single-choice-solution] :as question}]
  [:div
   (possible-solutions-view question)
   [:p.lead [:b "Mit der korrekten Antwort: "] single-choice-solution]])


(defn- multiple-choice-question-view
  [{:question/keys [multiple-choice-solution] :as question}]
  [:div
   (possible-solutions-view question)

   [:p.lead [:b "Mit den korrekten Antworten: "]
    [:ul.list-group (for [el multiple-choice-solution]
                      [:li.list-group-item el])]]])


(defn- free-text-question-view
  [{:question/keys [evaluation-criteria]}]
  [:div
   [:p.lead [:b "Mit dem Bewertungskriterium: "] evaluation-criteria]])


(s/fdef question-success-view
        :args (s/cat :question (s/or :free-text-question :question/question
                                     :single-choice-question :question/single-choice-question
                                     :multiple-choice-question :question/multiple-choice-question))
        :ret #(instance? hiccup.util.RawString %))


(defn question-success-view
  "Takes a valid question as argument of one of the question types.
   The question is displayed with all its values with a success message."
  [{:question/keys [type question-statement points categories] :as question}]
  (h/html
    [:div.container

     [:h1 "Die Frage vom typ \"" type "\" wurde erfolgreich erstellt."]
     [:div.container
      [:h2 "Frage: "]
      [:p.lead [:b "Fragestellung: "] question-statement]
      (case type
        :question.type/free-text (free-text-question-view question)
        :question.type/single-choice (single-choice-question-view question)
        :question.type/multiple-choice (multiple-choice-question-view question))
      [:p.lead [:b "Erreichbare Punkte: "] points]
      [:p.lead [:b "Kategorien:"]
       [:ul.list-group (for [cat categories]
                         [:li.list-group-item cat])]]]]))
