(ns expert-parakeet.question.create-question-view
  (:require
    [goog.dom :as dom]))


(defn register-question-type-switch
  "Takes an id for an element, a `select` dom element, and an array of ids for other dom elements as arguments.
   It registers an onchange handler for the `select` element and hides all dom elements from the Array, except the one currently selected."
  [switch-id question-type-fields]
  (letfn [(hide-all-except
            [question-type-id]
            (set! (.-hidden (dom/getElement question-type-id)) false)
            (doseq [x question-type-fields
                    :when (not= x question-type-id)]
              (set! (.-hidden (dom/getElement x)) true)))]
    (let [type-switch (dom/getElement switch-id)]
      (hide-all-except (.-value type-switch))
      (set! (.-onchange type-switch)
            (fn [event] (hide-all-except (-> event (.-target) (.-value))))))))


(defn remove-doms-when-hidden
  "Takes an array of ids of dom elements as arguments. These elements are removed if they are hidden.
   
   It is used to remove all question type inputs that are hidden at the time of a submit to not send the not visible data in the post."
  [to-remove]
  (doseq [x to-remove
          :when (-> x (dom/getElement) (.-hidden))]
    (-> x (dom/getElement) (dom/removeNode))))


(defn- add-to-solutions
  "Creates a new list element for the list under the `solution-list-id`.
   The id of the list element will be the passed in `solution-container-id`.
   Inside of the list element are a span for displaying the answer and a hidden input field for sending the answer
   when the form is posted. The values of the span and the input are set to the value of the passed in `new-solution-node`.
   A remove button is added into the list element as well, which will remove the Element from the list if pressed."
  [solution-list-id new-solution-node solution-container-id]
  (when (not (dom/getElement  solution-container-id))
    (let [new-solution-value (.-value new-solution-node)
          solution-container (dom/createDom "li"
                                            #js {:id solution-container-id}
                                            (dom/createDom "span"
                                                           #js {:innerText new-solution-value
                                                                :readOnly true})
                                            (dom/createDom "input"
                                                           #js {:name solution-list-id
                                                                :value new-solution-value
                                                                :type "hidden"})
                                            (dom/createDom "button"
                                                           #js {:onclick (fn [] (-> solution-container-id (dom/getElement) (dom/removeNode)))
                                                                :class "btn btn-outline-info btn-sm"
                                                                :type "button"}
                                                           "✗"))]
      (-> solution-list-id (dom/getElement) (dom/appendChild solution-container)))))


(defn- add-to-possible-solution
  "Adds a new possible solution to the element under the `possible-solution-container-div-id`.
   The value found in the element under `possible-solution-input-id` is expected to be the value to add to the possible solutions.
   Additionally two buttons are created.
   The first, is a button to add the possible solution to the solutions which can be found under `solution-list-id`
   (`addToSolutions` is used for this).
   The second, is a button to remove the elements created with this function from the document.
   
   When the optional parameter `possible-solution-value` is passed to this function, the value of the created node is set to this.
   When the optional parameter `is-solution` is passed as a truthy value to this function as well, 
   this value is immediately added as an element of the list under `solution-list-id`.
   
   Usage: This function can add new input fields for single/multiple-choice questions and if the document is 
   constructed from earlier send data this function is called to display all previously added possible solutions again."
  [possible-solution-container-div-id possible-solution-input-id solution-list-id possible-solution-value is-solution]
  (let [possible-solution-container (dom/getElement possible-solution-container-div-id)
        last-node (->> possible-solution-container
                       (dom/getChildren)
                       (filter #(= (.-nodeName %) "INPUT"))
                       (last))
        possible-solution-node (if last-node
                                 (let [num (-> last-node (.-num) (js/parseInt) inc)
                                       id (str possible-solution-input-id num)
                                       cloned-node (.cloneNode last-node)]

                                   (set! (.-num cloned-node) num)
                                   (set! (.-id cloned-node) id)
                                   (set! (.-value cloned-node) possible-solution-value)
                                   cloned-node)
                                 (-> (dom/createDom "input"
                                                    #js {:id possible-solution-input-id
                                                         :name "possible-solutions"
                                                         :num 0
                                                         :class "form-control"
                                                         :value possible-solution-value})))]
    (-> possible-solution-container (dom/appendChild possible-solution-node))
    (let [solution-li-id (str "li-" (.-id possible-solution-node))
          add-to-solutions-btn (dom/createDom "button"
                                              #js {:onclick (fn [] (add-to-solutions solution-list-id possible-solution-node solution-li-id))
                                                   :class "btn btn-outline-info btn-sm"
                                                   :type "button"}
                                              "✓")
          remove-possible-solution-btn (dom/createDom "button"
                                                      #js {:class "btn btn-outline-info btn-sm"
                                                           :type "button"}
                                                      "-")]
      (set! (.-onclick remove-possible-solution-btn)
            (fn []
              (-> possible-solution-node (dom/getElement) (dom/removeNode))
              (-> add-to-solutions-btn (dom/getElement) (dom/removeNode))
              (-> solution-li-id (dom/getElement) (dom/removeNode))
              (-> remove-possible-solution-btn (dom/getElement) (dom/removeNode))))
      (when is-solution
        (add-to-solutions solution-list-id possible-solution-node solution-li-id))
      (-> possible-solution-container (dom/appendChild add-to-solutions-btn))
      (-> possible-solution-container (dom/appendChild remove-possible-solution-btn))
      (-> possible-solution-container (dom/appendChild (dom/createDom "br"))))))


(defn register-adding-solution-behavior
  "Registers the `add-to-possible-solution` function for the onclick action of the button found under `add-possible-solution-btn-id`.
   When the button is clicked a new possible-solution element is added to the `possible-solutions-container-div-id` with the
   respective buttons.
   
   For more detail refer to `add-to-possible-solution`."
  [add-possible-solution-btn-id possible-solutions-container-div-id possible-solution-input-id solution-list-id]
  (let [add-possible-solution-btn (dom/getElement add-possible-solution-btn-id)]
    (set! (.-onclick add-possible-solution-btn)
          (fn []
            (add-to-possible-solution possible-solutions-container-div-id possible-solution-input-id solution-list-id
                                      ""
                                      false)))))


(defn add-new-category
  "Creates a new category entry for the list of categories.
   The user still needs to select it but it makes it possible to add new categories for questions.
  
   Notes: The current implementation heavily relies on the current display of categories.
   This will need to change when the clj code changes. (Bad but inevitable from my point of view.)"
  []
  (let [new-cat (dom/getElement "new-category")
        new-cat-name (.-value new-cat)]
    (if (or (not (string? new-cat-name))
            (empty? new-cat-name))
      (js/window.alert "Die Kategorie sollte nicht leer sein!")
      (let [new-cat-id (str "mult-select-" new-cat-name)
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
        (-> "category-container" (dom/getElement) (dom/appendChild new-cat-div))))))
