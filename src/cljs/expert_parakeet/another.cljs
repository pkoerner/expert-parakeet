(ns expert-parakeet.another
  (:require [goog.dom :as dom]))

(defn on-page-load []
  (let [elements (dom/getElementsByTagName "body")
        element (first elements)]
    (set! (.-textContent element) "Hello there!")))

(on-page-load)
