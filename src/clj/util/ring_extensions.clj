(ns util.ring-extensions
  (:require [clojure.string :as string]
            [hiccup2.core :as h]
            [ring.util.codec :refer [form-encode]]
            [ring.util.response :refer [header response]]))


(def ^:private bootstrap-include
  [:link {:rel "stylesheet"
          :href "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          :integrity "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          :crossorigin "anonymous"}])


(defn html-response
  [html]
  (-> (h/html bootstrap-include html) str response (header "Content-Type" "text/html; charset=utf-8")))


(defn extract-errors
  [request]
  (let [query-params (:query-params request)]
    (if query-params
      (->> query-params
           (map (fn [[key val]] [(read-string key) val]))
           (into {}))
      {})))


(defn construct-url
  [base-uri param-map]
  (->> param-map
       (map (fn [[key msg]] [(form-encode key) (form-encode msg)]))
       (map (fn [[key msg]] (str key "=" msg)))
       (string/join "&")
       (str base-uri "?")))
