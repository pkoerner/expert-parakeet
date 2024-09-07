(ns views.course.selected-course-view
  (:require
   [clojure.spec.alpha :as s]
   [clojure.string :as string]
   [hiccup.form :as hform]
   [hiccup.element :as helement]
   [hiccup2.core :as h]
   [ring.util.anti-forgery :refer [anti-forgery-field]]))

(defn selected-course-view 
  []
  (h/html []))