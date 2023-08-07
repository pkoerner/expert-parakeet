(ns expert-parakeet.core
  (:require [goog.dom :as dom]))

(defn on-page-load []
  (let [element (dom/getElement "body")]
    (set! (.-textContent element) (str (.-textContent element) "Hello from ClojureScript!"))))

(on-page-load)