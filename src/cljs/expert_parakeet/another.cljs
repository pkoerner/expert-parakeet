(ns expert-parakeet.another
  (:require [goog.dom :as dom]))

(defn on-page-load []
  (let [element (dom/getElement "body")]
    (set! (.-textContent element) "Hello there!")))

(on-page-load)