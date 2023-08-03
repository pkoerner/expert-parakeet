// We don't wont to use more JS in our application. In the long run we need a way to use cljs instead and replace this code sooner or later.

/**
 * Take an id for an element a `select` dom element and an array of ids for other dom elements as arguments.
 * It registers an onchange handler for the `select` element and hides all dom elements from the Array, except the one currently selected.
 * @param {String} switchId
 * @param {Array[String]} questionTypeFields
 */
function registerQuestionTypeSwitch(switchId, questionTypeFields) {
  function hideAllExcept(questionTypeId) {
    document.getElementById(questionTypeId).hidden = false;
    questionTypeFields
      .filter((x) => x != questionTypeId)
      .map((x) => document.getElementById(x))
      .forEach((x) => (x.hidden = true));
  }

  const typeSwitch = document.getElementById(switchId);
  hideAllExcept(typeSwitch.value);
  typeSwitch.onchange = (event) => hideAllExcept(event.target.value);
}

/**
 * Takes an array of ids of dom elements as arguments. These elements are removed if they are hidden.
 *
 * It is used to remove all question type inputs that are hidden at the time of a submit to not send the not visible data in the post.
 * @param {Array[String]} questionTypeFields
 */
function removeHiddenQuestionTypeInputsOnSubmit(questionTypeFields) {
  questionTypeFields
    .map((x) => document.getElementById(x))
    .filter((x) => x.hidden)
    .forEach((x) => x.remove());
}

/**
 * Creates a new list element for the list under the `solutionListId`.
 * The id of the list element will be the passed in `solutionContainerId`.
 * Inside of the list element are a span for displaying the answer and a hidden input field for sending the answer
 * when the form is posted. The values of the span and the input are set to the value of the passed in `newSolutionNode`.
 * A remove button is added into the list element as well, which will remove the Element from the list if pressed.
 * @param {String} solutionListId
 * @param {Node} newSolutionNode
 * @param {String} solutionContainerId
 * @returns null.
 */
function addToSolutions(solutionListId, newSolutionNode, solutionContainerId) {
  if (document.getElementById(solutionContainerId) != null) {
    return;
  }
  const newSolutionValue = newSolutionNode.value;

  liContainer = document.createElement("li");
  liContainer.id = solutionContainerId;

  const answerInputDisplay = document.createElement("span");
  answerInputDisplay.innerText = newSolutionValue;
  answerInputDisplay.readOnly = true;

  const answerInputHidden = document.createElement("input");
  answerInputHidden.name = solutionListId;
  answerInputHidden.value = newSolutionValue;
  answerInputHidden.type = "hidden";

  liContainer.appendChild(answerInputDisplay);
  liContainer.appendChild(answerInputHidden);

  removeFromCorrectSolutionsBtn = createButton(
    "✗",
    () => liContainer.remove(),
    ["btn", "btn-outline-info", "btn-sm"]
  );

  liContainer.appendChild(removeFromCorrectSolutionsBtn);

  document.getElementById(solutionListId).appendChild(liContainer);
}

/**
 * Adds a new possible solution to the element under the `possibleSolutionContainerDivId`.
 * The value found in the element under `possibleSolutionInputId` is expected to be the value to add to the possible solutions.
 * Additionally two buttons are created.
 * The first, is a button to add the possible solution to the solutions which can be found under `solutionListId`
 * (`addToSolutions` is used for this).
 * The second, is a button to remove the elements created with this function from the document.
 *
 * When the optional parameter `possibleSolutionValue` is passed to this function, the value of the created node is set to this.
 * When the optional parameter `isSolution` is passed as a truthy value to this function as well, 
 * this value is immediately added as an element of the list under `solutionListId`.
 * 
 * Usage: This function can add new input fields for single/multiple-choice questions and if the document is 
 * constructed from earlier send data this function is called to display all previously added possible solutions again.
 * @param {String} possibleSolutionContainerDivId
 * @param {String} possibleSolutionInputId
 * @param {String} solutionListId
 * @param {String} possibleSolutionValue (optional)
 * @param {Boolean} isSolution (optional)
 */
function addPossibleSolution(
  possibleSolutionContainerDivId,
  possibleSolutionInputId,
  solutionListId,
  possibleSolutionValue = "",
  isSolution = null
) {
  const possibleSolutionContainer = document.getElementById(
    possibleSolutionContainerDivId
  );
  const lastNode = Array.from(possibleSolutionContainer.children)
    .filter((x) => x.nodeName === "INPUT")
    .slice(-1)[0];

  let possibleSolutionNode;
  const lineBreak = document.createElement("br");
  if (lastNode != null) {
    possibleSolutionContainer.appendChild(lineBreak);

    possibleSolutionNode = lastNode.cloneNode();
    // num is needed to always get a distinct id.
    const num = parseInt(possibleSolutionNode.getAttribute("num")) + 1;
    possibleSolutionNode.setAttribute("num", num);
    possibleSolutionNode.id = possibleSolutionInputId + num;
  } else {
    possibleSolutionNode = document.createElement("input");
    possibleSolutionNode.id = possibleSolutionInputId;
    possibleSolutionNode.name = "possible-solutions";
    possibleSolutionNode.setAttribute("num", 0);
    possibleSolutionNode.classList.add("form-control");
  }
  possibleSolutionNode.value = possibleSolutionValue;

  possibleSolutionContainer.appendChild(possibleSolutionNode);

  const solutionLiId = "li-" + possibleSolutionNode.id;
  const addToSolutionsBtn = createButton(
    "✓",
    // Adds the solution to the list of correct solutions.
    // Creates a button to remove it from this list again.
    // All references are kept to remove them, if the possible-solution itself is removed.
    () =>
      addToSolutions(
        solutionListId,
        possibleSolutionNode,
        solutionLiId
      ),
    ["btn", "btn-outline-info", "btn-sm"]
  );

  if (isSolution) {
    addToSolutions(solutionListId, possibleSolutionNode, solutionLiId);
  }

  possibleSolutionContainer.appendChild(addToSolutionsBtn);

  const removePossibleSolutionBtn = createButton(
    "-",
    function () {
      possibleSolutionNode?.remove();
      addToSolutionsBtn?.remove();
      removePossibleSolutionBtn?.remove();
      if (typeof lineBreak !== "undefined") {
        lineBreak?.remove();
      }
      document.getElementById(solutionLiId)?.remove();
    },
    ["btn", "btn-outline-info", "btn-sm"]
  );
  possibleSolutionContainer.appendChild(removePossibleSolutionBtn);
}

/**
 * Registers the `addPossibleSolution` function for the onclick action of the button found under `addPossibleSolutionButtonId`.
 * When the button is clicked a new possible-solution element is added to the `possibleSolutionsContainerDivId` with the
 * respective buttons.
 * 
 * For more detail refer to `addPossibleSolution`.
 * @param {String} addPossibleSolutionButtonId
 * @param {String} possibleSolutionsContainerDivId
 * @param {String} possibleSolutionInputId
 * @param {String} solutionListId
 */
function registerAddingSolutionBehavior(
  addPossibleSolutionButtonId,
  possibleSolutionsContainerDivId,
  possibleSolutionInputId,
  solutionListId
) {
  document.getElementById(addPossibleSolutionButtonId).onclick = () => {
    addPossibleSolution(
      possibleSolutionsContainerDivId,
      possibleSolutionInputId,
      solutionListId
    );
  };
}

/**
 * Creates a new category entry for the list of categories.
 * The user still needs to select it but it makes it possible to add new categories for questions.
 *
 * Notes: The current implementation heavily relies on the current display of categories.
 * This will need to change when the clj code changes. (Bad but inevitable from my point of view.)
 * @returns `null`
 */
function addNewCategory() {
  const newCat = document.getElementById("new-category");
  const newCatName = newCat.value;
  if (typeof newCatName !== "string" || !newCatName) {
    window.alert("Die Kategorie sollte nicht leer sein!");
    return;
  }

  const newCatDiv = document.createElement("div");
  newCatDiv.classList.add("form-check");
  const newCatId = `mult-select-${newCatName}`;
  newCatDiv.innerHTML = `
<input class="form-check-input" id="${newCatId}" name="categories" type="checkbox" value="${newCatName}">
<label class="form-check-label" for="${newCatId}">${newCatName}</label>`;

  const categoryDiv = document.getElementById("category-container");
  categoryDiv.appendChild(newCatDiv);
}
