(ns expert-parakeet.core
  (:require
    [goog.dom :as dom]))


(defn on-page-load
  "Example for cljs.
   For including this in the html, include the resources/public/cljs/main.js file.
   Afterwards call `goog.require('expert-parakeet.core');` in one script tag.
   Then call `expert_parakeet.core.on_page_load();` in another script tag."
  []
  (let [elements (dom/getElementsByTagName "body")
        element (first elements)]
    (set! (.-textContent element) (str (.-textContent element) "Hello from ClojureScript!"))))

