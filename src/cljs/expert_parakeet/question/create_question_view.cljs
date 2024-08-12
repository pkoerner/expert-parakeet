(ns expert-parakeet.question.create-question-view
  (:require
    [goog.dom :as dom]))


(defn- gen-dom-id
  "Generate a new random id which is unused in the current dom.
   The prefix parameter will be prefixed to a random number to generate it."
  [prefix]
  (loop []
    (let [id (str prefix (rand-int 1000000))]
      (if (dom/getElement id)
        (recur)
        id))))


(defn register-question-type-switch
  "Takes an id for an element, a `select` dom element, and an array of ids for other dom elements as arguments.
   It registers an onchange handler for the `select` element and hides all dom elements from the Array, except the one currently selected."
  [switch-id question-type-fields]
  (letfn [(hide-all-except
            [question-type-id]
            (let [e (dom/getElement question-type-id)]
              (set! (.-hidden e) false)
              (doseq [other-id question-type-fields
                      :when (not= other-id question-type-id)]
                (let [other-e (dom/getElement other-id)]
                  (set! (.-hidden other-e) true)))))]

    (let [type-switch (dom/getElement switch-id)]
      (hide-all-except (.-value type-switch))
      (set! (.-onchange type-switch)
            (fn [event] (hide-all-except (-> event (.-target) (.-value))))))))


(defn delete-element
  "Delete the dom element specified by the given id"
  [id]
  (-> id (dom/getElement) (dom/removeNode)))


(defn add-new-choice
  "Create a new choice in the given container.
   It will use either a radio button or a checkbox."
  [event choice-type radio?]
  (let [form (.-target event)
        choice-statement (-> form (.-elements) (aget 0) (.-value))]
    (if (or (not (string? choice-statement))
            (empty? choice-statement))
      (js/window.alert "Invalid new choice")
      (let [container (dom/getElement (str choice-type "-container"))
            div-id (gen-dom-id (str choice-type "-div-"))
            input-id (gen-dom-id (str choice-type "-input-"))
            possible-input-name (str "possible-" choice-type "-solutions")
            correct-input-name (str "correct-" choice-type "-solutions")
            delete-button (dom/createDom "button"
                                         #js {:class "btn btn-danger"
                                              :type "button"}
                                         "-")
            new-element (dom/createDom "div"
                                       #js {:class "list-group-item p-2 d-flex justify-content-between align-items-center"
                                            :id div-id}
                                       (dom/createDom "div"
                                                      #js {:class "form-check d-flex align-items-center"}
                                                      (dom/createDom "input"
                                                                     #js {:type "hidden"
                                                                          :name possible-input-name
                                                                          :value choice-statement})
                                                      (dom/createDom "input"
                                                                     #js {:class "form-check-input me-2"
                                                                          :id input-id
                                                                          :type (if radio? "radio" "checkbox")
                                                                          :name correct-input-name
                                                                          :value choice-statement
                                                                          :required radio?})
                                                      (dom/createDom "label"
                                                                     #js {:class "form-check-label"
                                                                          :for input-id}
                                                                     choice-statement))
                                       delete-button)]
        (set! (.-onclick delete-button) (fn [] (delete-element div-id)))
        (.reset form)
        (dom/appendChild container new-element)))
    (.preventDefault event)))


(defn add-new-category
  "Creates a new category entry for the list of categories.
   The user still needs to select it but it makes it possible to add new categories for questions.
  
   Notes: The current implementation relies heavily on the current display of categories.
   This will need to change when the clj code changes. (Bad but inevitable from my point of view.)"
  [event]
  (let [form (.-target event)
        new-cat (dom/getElement "new-category")
        new-cat-name (.-value new-cat)]
    (if (or (not (string? new-cat-name))
            (empty? new-cat-name))
      (js/window.alert "Invalid new category")
      (let [new-cat-id (str "category-" new-cat-name)
            new-cat-div (dom/createDom "div"
                                       #js {:class "form-check"}
                                       (dom/createDom "input"
                                                      #js {:class "form-check-input"
                                                           :id new-cat-id
                                                           :name "categories"
                                                           :type "checkbox"
                                                           :value new-cat-name})
                                       (dom/createDom "label"
                                                      #js {:class "form-check-label"
                                                           :for new-cat-id}
                                                      new-cat-name))]
        (.reset form)
        (-> "category-container" (dom/getElement) (dom/appendChild new-cat-div))))
    (.preventDefault event)))
