(ns util.ring-extensions
  (:require
    [clojure.edn]
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [hiccup2.core :as h]
    [ring.util.codec :refer [form-encode]]
    [ring.util.response :refer [header response]]))


(s/fdef html-response
        :args (s/cat :html #(instance? hiccup.util.RawString %))
        :ret (s/cat :html #(instance? hiccup.util.RawString %)))


(defn html-response
  [html]
  (-> (h/html html) str response (header "Content-Type" "text/html; charset=utf-8")))


(s/fdef extract-errors
        :args (s/cat :request map?)
        :ret map?)


(defn extract-errors
  "Takes a ring request map as arguments and extracts the the `:query-params`.
   The keys of the map are converted to keywords if possible.
   
   If there are no `:query-params`, an empty map is returned."
  [request]
  (let [query-params (:query-params request)]
    (if query-params
      (->> query-params
           (map (fn [[key val]] [(clojure.edn/read-string key) val]))
           (into {}))
      {})))


(s/fdef construct-url
        :args (s/cat :base-uri string? :param-map map?)
        :ret string?)


(defn construct-url
  "Takes as an argument a base uri and a map of parameter that should be appended to the uri as http parameters.
   The parameters are encoded and need to be decoded when receiving them on another endpoint.
   
   Example:
   ```clj
(construct-url \"https://google.com/search\", {\"q\" \"Hello there\"}) => https://google.com/search?q=Hello+there
   ```"
  [base-uri param-map]
  (->> param-map
       (map (fn [[key msg]] [(form-encode key) (form-encode msg)]))
       (map (fn [[key msg]] (str key "=" msg)))
       (string/join "&")
       (str base-uri "?")))
