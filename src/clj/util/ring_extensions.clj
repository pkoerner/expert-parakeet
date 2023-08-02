(ns util.ring-extensions
  (:require
    [hiccup2.core :as h]
    [ring.util.response :refer [header response]]))


(defn html-response
  [html]
  (-> html h/html str response (header "Content-Type" "text/html; charset=utf-8")))


(defn extract-errors
  [request]
  (let [query-params (:query-params request)]
    (when query-params
      (->> query-params
           (map (fn [[key val]] [(read-string key) val]))
           (into {})))))
