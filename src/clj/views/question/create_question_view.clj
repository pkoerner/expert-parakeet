(ns views.question.create-question-view
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [domain.spec :refer [question-types]]
    [hiccup.form :as hform]
    [hiccup.page :as hpage]
    [hiccup2.core :as h]
    [ring.util.anti-forgery :refer [anti-forgery-field]]
    [util.forms :refer [as-coll]]
    [util.hiccup-extensions :refer [optional-error-display script]]))


(defn- free-text-inputs
  "Build input(s) for free text questions.
   The containing element needs to to have the id `free-text` to be accessible from clojurescript.
   The id/name strings must not be changed, they are used in the clojurescript and in the validation logic."
  [errors question-data]
  (h/html
    [:fieldset#free-text
     [:legend {:class "form-label"} "Evaluation criteria"]
     (optional-error-display :evaluation-criteria errors)
     (hform/text-area {:class "form-control"} "evaluation-criteria" (get question-data :evaluation-criteria))]))


(defn- choice-input
  "Build input(s) for single-/multiple-choice questions.
   The containing element needs to to have the correct id to be accessible from clojurescript.
   The id/name strings must not be changed, they are used in the clojurescript and in the validation logic."
  [errors question-data choice-type radio?]
  (let [possible-solutions-error (optional-error-display (keyword (str "possible-" choice-type "-solutions")) errors)
        correct-solutions-error (optional-error-display (keyword (str "correct-" choice-type "-solutions")) errors)
        possible-solutions (as-coll (get question-data (keyword (str "possible-" choice-type "-solutions"))))
        correct-solutions (set (as-coll (get question-data (keyword (str "correct-" choice-type "-solutions")))))
        choice-container (str choice-type "-container")
        new-choice-form-id  (str "new-" choice-type "-form")
        new-choice-input-id  (str "new-" choice-type)
        possible-input-name (str "possible-" choice-type "-solutions")
        correct-input-name (str "correct-" choice-type "-solutions")]
    [:fieldset {:id choice-type}
     [:legend {:class "form-label"} "Choices"]
     possible-solutions-error
     correct-solutions-error
     [:div {:id choice-container :class "list-group"}
      ;; keep this in sync with the cljs function!
      (map-indexed (fn [idx stmt]
                     (let [div-id (str choice-type "-div-" idx)
                           input-id (str choice-type "-input-" idx)]
                       [:div {:id div-id :class "list-group-item p-2 d-flex justify-content-between align-items-center"}
                        [:div {:class "form-check d-flex align-items-center"}
                         [:input {:type "hidden" :name possible-input-name :value stmt}]
                         [:input {:class "form-check-input me-2"
                                  :id input-id
                                  :type (if radio? "radio" "checkbox")
                                  :name correct-input-name
                                  :value stmt
                                  :checked (contains? correct-solutions stmt)
                                  :required radio?}]
                         [:label {:class "form-check-label" :for input-id} stmt]]
                        [:button {:class "btn btn-danger"
                                  :type "button"
                                  :onclick (str "expert_parakeet.question.create_question_view.delete_element('" div-id "')")}
                         "-"]]))
                   possible-solutions)]
     [:div.input-group
      (hform/text-field {:class "form-control" :form new-choice-form-id :required true :placeholder "Create new choice"} new-choice-input-id)
      (hform/submit-button {:class "btn btn-outline-secondary" :form new-choice-form-id} "+")]]))


(defn- single-choice-inputs
  "Build input(s) for single-choice questions.
   The containing element needs to to have the id `single-choice` to be accessible from clojurescript.
   The id/name strings must not be changed, they are used in the clojurescript and in the validation logic."
  [errors question-data]
  (choice-input errors question-data "single-choice" true))


(defn- multiple-choice-inputs
  "Build input(s) for multiple-choice questions.
   The containing element needs to to have the id `multiple-choice` to be accessible from clojurescript.
   The id/name strings must not be changed, they are used in the clojurescript and in the validation logic."
  [errors question-data]
  (choice-input errors question-data "multiple-choice" false))


(s/fdef create-question-form
        :args (s/cat :categories :question/categories
                     :post-destination :general/non-blank-string
                     :kwargs (s/cat :errors (s/? #{:errors})
                                    :error-map (s/? (s/map-of keyword? string?))
                                    :question-data (s/? #{:question-data})
                                    :question-data-map (s/? map?)))
        :ret #(instance? hiccup.util.RawString %))


(defn create-question-form
  "Takes as arguments a collection of categories and a destination to which the form's post request should be sent.
   Optional keyword arguemnts:
   `:errors`: Takes a map with form data keys mapped to error messages.
   These are displayed as errors in the form with their corresponding input field.
   `:question-data`: Takes a map with form data keys mapped to values.
   When present, the values are put into the input fields corresponding to the name.
   This way the form can be re-/prepopulated."
  [categories post-destination & {:keys [errors question-data] :or {errors {} question-data {}}}]
  (let [question-types (->> question-types
                            (map name)
                            (sort))
        question-types-js-arr (str "[" (string/join ", " (map #(str "'" % "'") question-types)) "]")]
    (h/html
      (hpage/include-js "/cljs/goog/base.js"
                        "/cljs/main.js")
      (script "goog.require('expert_parakeet.question.create_question_view');")
      ;; we use dummy forms so that the input fields, that are used to specify the name of the element to add, do not interfere with the outer form
      [:div#dummy-forms
       [:form#new-category-form {:onsubmit "expert_parakeet.question.create_question_view.add_new_category(event)"}]
       [:form#new-single-choice-form {:onsubmit "expert_parakeet.question.create_question_view.add_new_choice(event, 'single-choice', true)"}]
       [:form#new-multiple-choice-form {:onsubmit "expert_parakeet.question.create_question_view.add_new_choice(event, 'multiple-choice', false)"}]]
      [:div.container
       [:h2 "Create question"]
       (hform/form-to
         [:post post-destination]

         [:div
          (hform/label {:class "form-label"} "statement" "Question statement")
          (optional-error-display :statement errors)
          (hform/text-area {:class "form-control" :required true} "statement" (get question-data :statement))]

         [:div
          (hform/label {:class "form-label"} "max-points" "Maximum number of points")
          (optional-error-display :max-points errors)
          [:input {:id "max-points"
                   :class "form-control"
                   :name "max-points"
                   :type "number"
                   :min "0"
                   :step "1"
                   :required true
                   :value (get question-data :max-points 1)}]]

         [:div
          (hform/label {:class "form-label"} "type" "Question type")
          (optional-error-display :type errors)
          (let [selected-type (get question-data :type (first question-types))
                type-names {"free-text" "Free text"
                            "single-choice" "Single choice"
                            "multiple-choice" "Multiple choice"}
                options (->> question-types (map (juxt type-names identity)))]
            (hform/drop-down {:class "form-select" :required true} "type" options selected-type))]

         (single-choice-inputs errors question-data)
         (multiple-choice-inputs errors question-data)
         (free-text-inputs errors question-data)
         (script "expert_parakeet.question.create_question_view.register_question_type_switch('type', " question-types-js-arr ");")

         [:div
          [:fieldset
           [:legend {:class "form-label"} "Categories"]
           (optional-error-display :categories errors)
           (let [prev-categories (set (as-coll (get question-data :categories)))
                 all-categories (set (concat categories prev-categories))]
             [:div#category-container.ps-1 {:style "max-height: 150px; overflow-y: scroll"}
              ;; keep this in sync with the cljs function!
              (->> all-categories
                   (sort)
                   (map-indexed (fn [idx cat]
                                  (let [id (str "category-" idx)]
                                    [:div.form-check
                                     (hform/check-box {:class "form-check-input"
                                                       :name "categories"}
                                                      id
                                                      (contains? prev-categories cat)
                                                      cat)
                                     [:input {:class "form-check-input"
                                              :id id
                                              :type "checkbox"
                                              :name "categories"
                                              :value cat
                                              :checked (contains? prev-categories cat)}]
                                     [:label {:class "form-check-label" :for id} cat]]))))])
           [:div.input-group
            (hform/text-field {:class "form-control" :form "new-category-form" :required true :placeholder "Create new category"} "new-category")
            (hform/submit-button {:class "btn btn-outline-secondary" :form "new-category-form"} "+")]]]

         (h/raw (anti-forgery-field))
         (hform/submit-button {:class "btn btn-primary"} "Submit"))])))


(defn- possible-solutions-view
  "Part of the success view: show possible choices."
  [{:question/keys [possible-solutions]}]
  [:p.lead [:b "Possible choices: "]
   [:ul.list-group (for [el possible-solutions]
                     [:li.list-group-item (el :solution/statement)])]])


(defn- single-choice-question-view
  "Part of the success view: show possible and choices for single-choice questions."
  [{:question/keys [correct-solutions] :as question}]
  [:div
   (possible-solutions-view question)
   [:p.lead [:b "With the correct choice: "] (-> correct-solutions
                                                 (first)
                                                 :solution/statement)]])


(defn- multiple-choice-question-view
  "Part of the success view: show possible and choices for multiple-choice questions."
  [{:question/keys [correct-solutions] :as question}]
  [:div
   (possible-solutions-view question)
   [:p.lead [:b "With the correct choices: "]
    [:ul.list-group (for [el correct-solutions]
                      [:li.list-group-item (el :solution/statement)])]]])


(defn- free-text-question-view
  "Part of the success view: show free-text-question-specific data."
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
      [:p.lead [:b "Question statement: "] statement]
      (case type
        :question.type/free-text (free-text-question-view question)
        :question.type/single-choice (single-choice-question-view question)
        :question.type/multiple-choice (multiple-choice-question-view question))
      [:p.lead [:b "Maximum points: "] max-points]
      [:p.lead [:b "Categories: "]
       [:ul.list-group (for [cat categories]
                         [:li.list-group-item cat])]]]]))
