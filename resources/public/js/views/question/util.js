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
 * @param {String} text
 * @param {Function} onClick
 * @returns A button Dom element.
 */
function createButton(text, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = text;
  button.onclick = onClick;
  return button;
}
