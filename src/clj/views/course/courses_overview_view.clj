(ns views.course.courses-overview-view
  (:require
   [clojure.spec.alpha :as s]
   [clojure.string :as string]
   [hiccup.form :as hform]
   [hiccup.element :as helement]
   [hiccup2.core :as h]
   [ring.util.anti-forgery :refer [anti-forgery-field]]))

(defn courses-overview-form
  [courses]
  (h/html
   (helement/ordered-list courses)))