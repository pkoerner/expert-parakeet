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

function addToSolutions(solutionListId, newSolutionNode, solutionContainerId) {
  if (document.getElementById(solutionContainerId) != null) {
    return;
  }

  liContainer = document.createElement("li");
  liContainer.id = solutionContainerId;

  const answerInputDisplay = document.createElement("span");
  answerInputDisplay.innerText = newSolutionNode.value;
  answerInputDisplay.readOnly = true;

  const answerInputHidden = document.createElement("input");
  answerInputHidden.name = solutionListId;
  answerInputHidden.value = newSolutionNode.value;
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

function addPossibleSolution(
  possibleSolutionContainerDivId,
  possibleSolutionInputId,
  possibleSolutionListId,
  possibleSolutionValue = "",
  isSolution = null
) {
  const possibleSolutionContainer = document.getElementById(possibleSolutionContainerDivId);
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
    () => addToSolutions(possibleSolutionListId, possibleSolutionNode, solutionLiId),
    ["btn", "btn-outline-info", "btn-sm"]
  );

  if (isSolution) {
    addToSolutions(possibleSolutionListId, possibleSolutionNode, solutionLiId);
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
 *
 * @param {String} addPossibleSolutionButtonId
 * @param {String} possibleSolutionsContainerDivId
 * @param {String} possibleSolutionInputId
 * @param {String} possibleSolutionListId
 */
function registerAddingSolutionBehavior(
  addPossibleSolutionButtonId,
  possibleSolutionsContainerDivId,
  possibleSolutionInputId,
  possibleSolutionListId
) {
  document.getElementById(addPossibleSolutionButtonId).onclick = () => {
    addPossibleSolution(
      possibleSolutionsContainerDivId,
      possibleSolutionInputId,
      possibleSolutionListId
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