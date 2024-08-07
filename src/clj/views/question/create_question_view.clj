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
  #{:question/statement :question/type :question/max-points
    :question/possible-solutions :question/correct-solutions
    :question/evaluation-criteria})


(defn- free-text-inputs
  [errors question-data]
  (h/html
    [:fieldset#free-text
     (optional-error-display :question/evaluation-criteria errors)
     (hform/label {:class "form-label"} "evaluation-criteria" "Evaluation criteria")
     (hform/text-area {:class "form-control"} "evaluation-criteria" (question-data :question/evaluation-criteria))]))


(defn- choice-input
  [errors question-data choice-type _radio?]
  (let [was-selected (= choice-type (question-data :question/type))
        possible-solutions-error (optional-error-display :question/possible-solutions errors)
        solution-error (optional-error-display :question/correct-solutions errors)
        possible-solutions (question-data :question/possible-solutions)
        solutions (question-data :question/correct-solutions)
        question-type-container (str choice-type "-container")
        possible-solution-input-id (str "possible-" choice-type "-solution")
        solution-container-div-id (str possible-solution-input-id "-container")
        add-possible-solution-btn-id (str "add-" possible-solution-input-id "-btn")
        solution-list-id (str choice-type "-solution")]
    [:fieldset {:id choice-type}
     [:div {:id question-type-container}
      possible-solutions-error
      [:label {:for solution-container-div-id} "Possible answers:"] [:br]
      [:div {:id solution-container-div-id}
       (when was-selected
         (apply script
                (concat ["window.onload = () => {"]
                        (for [curr-solution possible-solutions]
                          (str "expert_parakeet.question.create_question_view.add_to_possible_solution("
                               "'" solution-container-div-id "',"
                               "'" possible-solution-input-id "',"
                               "'" solution-list-id "',"
                               "'" curr-solution "',"
                               (contains? (set solutions) curr-solution)
                               ");\n"))
                        ["};"])))]
      [:button.btn.btn-outline-info.btn-sm {:id add-possible-solution-btn-id :type "button"} "+"]
      ;; When the add button is clicked
      (script "expert_parakeet.question.create_question_view.register_adding_solution_behavior("
              "'" add-possible-solution-btn-id "',"
              "'" solution-container-div-id "',"
              "'" possible-solution-input-id "',"
              "'" solution-list-id "'"
              ")")]
     [:div
      solution-error
      [:label {:for solution-list-id} "Correct answers:"]
      [:ul {:id solution-list-id}]]]))


(defn- single-choice-inputs
  [errors question-data]
  (choice-input errors question-data "single-choice" true))


(defn- multiple-choice-inputs
  [errors question-data]
  (choice-input errors question-data "multiple-choice" false))


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
   This way the form can be re/prepopulated."
  [categories post-destination & {:keys [errors question-data] :or {errors {} question-data {}}}]
  (let [question-types (->> question-types
                            (map name)
                            (sort))
        question-types-js-arr (str "[" (string/join ", " (map #(str "'" % "'") question-types)) "]")]
    (h/html
      (hpage/include-js "/cljs/goog/base.js"
                        "/cljs/main.js")
      (script "goog.require('expert_parakeet.question.create_question_view');")
      [:div#dummy-forms
       [:form#new-category-form {:onsubmit "expert_parakeet.question.create_question_view.add_new_category(event)"}]]
      [:div.container
       [:h2 "Create question"]
       (hform/form-to
         {:onsubmit (str "expert_parakeet.question.create_question_view.remove_doms_when_hidden(" question-types-js-arr ")")}
         [:post post-destination]

         [:div
          (hform/label {:class "form-label"} "statement" "Question statement")
          (optional-error-display :question/statement errors)
          (hform/text-area {:class "form-control" :required true} "statement" (question-data :question/statement))]

         [:div
          (hform/label {:class "form-label"} "max-points" "Maxmimum number of points")
          (optional-error-display :question/max-points errors)
          [:input {:id "max-points"
                   :class "form-control"
                   :name "max-points"
                   :type "number"
                   :min "0"
                   :step "1"
                   :required true
                   :value (question-data :question/max-points)}]]

         [:div
          (hform/label {:class "form-label"} "type" "Question type")
          (optional-error-display :question/type errors)
          (let [selected-type (get question-data :question/type (first question-types))
                type-names {"free-text" "Free text"
                            "single-choice" "Single choice"
                            "multiple-choice" "Multiple choice"}
                options (->> question-types (map (juxt type-names identity)))]
            (hform/drop-down {:class "form-select" :required true} "type" options selected-type))]

         (single-choice-inputs errors question-data)
         (multiple-choice-inputs errors question-data)
         (free-text-inputs errors question-data)

         [:div
          [:fieldset
           [:legend {:class "form-label"} "Categories"]
           (optional-error-display :question/categories errors)
           (let [prev-categories (set (question-data :question/categories))
                 all-categories (set (concat categories prev-categories))]
             [:div#category-container.ps-1 {:style "max-height: 150px; overflow-y: scroll"}
              (->> all-categories
                   (sort)
                   (map (fn [cat]
                          (let [id (str "mult-select-" cat)]
                            [:div.form-check
                             (hform/check-box {:class "form-check-input"}
                                              id
                                              (contains? prev-categories cat)
                                              cat)
                             (hform/label {:class "form-check-label"} id cat)]))))])
           [:div.input-group
            (hform/text-field {:class "form-control" :form "new-category-form" :required true :placeholder "Create new category"} "new-category")
            (hform/submit-button {:class "btn btn-outline-secondary" :form "new-category-form"} "+")]]]

         (h/raw (anti-forgery-field))
         (hform/submit-button {:class "btn btn-primary"} "Submit"))
       (script "expert_parakeet.question.create_question_view.register_question_type_switch('type', " question-types-js-arr ");")])))


(defn- possible-solutions-view
  [{:question/keys [possible-solutions]}]
  [:p.lead [:b "Possible answers: "]
   [:ul.list-group (for [el possible-solutions]
                     [:li.list-group-item el])]])


(defn- single-choice-question-view
  [{:question/keys [correct-solutions] :as question}]
  [:div
   (possible-solutions-view question)
   [:p.lead [:b "With the correct answer: "] (first correct-solutions)]])


(defn- multiple-choice-question-view
  [{:question/keys [correct-solutions] :as question}]
  [:div
   (possible-solutions-view question)

   [:p.lead [:b "With the correct answers: "]
    [:ul.list-group (for [el correct-solutions]
                      [:li.list-group-item el])]]])


(defn- free-text-question-view
  [{:question/keys [evaluation-criteria]}]
  [:div
   [:p.lead [:b "With the evaluation criteria: "] evaluation-criteria]])


(s/fdef question-success-view
        :args (s/cat :question :question/question)
        :ret #(instance? hiccup.util.RawString %))


(defn question-success-view
  "Takes a valid question as argument of one of the question types.
   The question is displayed with all its values with a success message."
  [{:question/keys [type statement max-points categories] :as question}]
  (h/html
    [:div.container

     [:h1 "The question of type \"" type "\" was successfully created."]
     [:div.container
      [:h2 "Question: "]
      [:p.lead [:b "Question statement "] statement]
      (case type
        :question.type/free-text (free-text-question-view question)
        :question.type/single-choice (single-choice-question-view question)
        :question.type/multiple-choice (multiple-choice-question-view question))
      [:p.lead [:b "Reachable points "] max-points]
      [:p.lead [:b "Categories "]
       [:ul.list-group (for [cat categories]
                         [:li.list-group-item cat])]]]]))
