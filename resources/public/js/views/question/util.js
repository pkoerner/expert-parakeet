/**
 * Creates an Html dom Element from the provided html dom description.
 * @param {String} htmlText Html dom element.
 * @returns A dom Element.
 */
function createNodeFromText(htmlText) {
  const placeholder = document.createElement("div");
  placeholder.innerHTML = htmlText;
  return placeholder.firstElementChild;
}

/**
 * Creates a button dom element with type button. The displayed field of the button is text
 * and onclick is set to the passed in onClick function.
 * Optionally an array of css classes can be passed to the function as well.
 * @param {String} text
 * @param {Function} onClick
 * @param {Array[String]} classes
 * @returns A button Dom element.
 */
function createButton(text, onClick, classes=[]) {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = text;
  button.onclick = onClick;
  classes.forEach(x => button.classList.add(x));
  return button;
}
