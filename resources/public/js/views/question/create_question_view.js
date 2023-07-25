/// some
// " (string/join ", "  (map #(str "\"" % "\"") (map name question-types))) "
// id=type

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
 * 
 * @param {String} addSolutionButtonId 
 * @param {String} solutionContainerDivId 
 * @param {String} solutionInputId 
 * @param {String} solutionListId 
 */
function registerAddingSolutionBehavior(
  addSolutionButtonId,
  solutionContainerDivId,
  solutionInputId,
  solutionListId
) {
  document.getElementById(addSolutionButtonId).onclick = () => {
    const solutionContainer = document.getElementById(solutionContainerDivId);
    const lastNode = Array.from(solutionContainer.children)
      .filter((x) => x.nodeName === "INPUT")
      .slice(-1)[0];

    let newSolutionNode;
    if (lastNode != null) {
      const lineBreak = document.createElement("br");
      solutionContainer.appendChild(lineBreak);

      newSolutionNode = lastNode.cloneNode();
      // num is needed to always get a distinct id.
      const num = parseInt(newSolutionNode.getAttribute("num")) + 1;
      newSolutionNode.setAttribute("num", num);
      newSolutionNode.id = solutionInputId + num;
    } else {
      newSolutionNode = document.createElement("input");
      newSolutionNode.id = solutionInputId;
      newSolutionNode.name = "possible-solutions";
      newSolutionNode.setAttribute('num', 0);
    }

    solutionContainer.appendChild(newSolutionNode);

    let liContainer = null;
    let removeFromCorrectSolutionsBtn = null;
    const addCorrectSolutionBtn = createButton(
      "✓",
      // Adds the solution to the list of correct solutions.
      // Creates a button to remove it from this list again.
      // All references are kept to remove them, if the possible-solution itself is removed.
      function () {
        const liContainerId = "li-" + newSolutionNode.id;

        if (document.getElementById(liContainerId) != null) {
          return;
        }

        liContainer = document.createElement("li");
        liContainer.id = liContainerId;

        const answerInputDisplay = document.createElement('span');
        answerInputDisplay.innerText = newSolutionNode.value;
        answerInputDisplay.readOnly = true;

        const answerInputHidden = document.createElement('input');
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
      },
      ["btn", "btn-outline-info", "btn-sm"]
    );

    solutionContainer.appendChild(addCorrectSolutionBtn);

    const removeSolutionBtn = createButton(
      "-",
      function () {
        newSolutionNode?.remove();
        lineBreak?.remove();
        liContainer?.remove();
        addCorrectSolutionBtn?.remove();
        removeSolutionBtn?.remove();
      },
      ["btn", "btn-outline-info", "btn-sm"]
    );
    solutionContainer.appendChild(removeSolutionBtn);
  };
}
