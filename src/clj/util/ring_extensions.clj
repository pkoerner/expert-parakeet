(ns util.ring-extensions
  (:require
   [hiccup2.core :as h]
   [ring.util.response :refer [header response]]))


(defn html-response
  [html]
  (-> html h/html str response (header "Content-Type" "text/html; charset=utf-8")))