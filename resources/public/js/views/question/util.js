// We don't wont to use more JS in our application. In the long run we need a way to use cljs instead and replace this code sooner or later.

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
function createButton(text, onClick, classes = []) {
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = text;
  button.onclick = onClick;
  classes.forEach((x) => button.classList.add(x));
  return button;
}

/**
 * Clears the passed in url parameters from the displayed url.
 * 
 * Notes: It's intended to make the url less cluttered for the user.
 */
function clearUrlParameters() {
  const urlWithoutParameters =
    location.protocol + "//" + location.host + location.pathname;
  window.history.replaceState({}, document.title, urlWithoutParameters);
}
