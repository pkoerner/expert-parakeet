(ns util.ring-extensions
  (:require
    [hiccup2.core :as h]
    [ring.util.response :refer [header response]]))


(def ^:private bootstrap-include
  [:link {:rel "stylesheet"
          :href "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          :integrity "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          :crossorigin "anonymous"}])


(defn html-response
  [html]
  (-> (h/html bootstrap-include html) str response (header "Content-Type" "text/html; charset=utf-8")))
