(ns expert-parakeet.core
  (:require [goog.dom :as dom]))

(defn on-page-load []
  (let [elements (dom/getElementsByTagName "body")
        element (first elements)]
    (set! (.-textContent element) (str (.-textContent element) "Hello from ClojureScript!"))))

(on-page-load)
