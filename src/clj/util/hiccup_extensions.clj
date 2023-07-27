(ns util.hiccup-extensions
  (:require
    [clojure.string :as string]
    [hiccup2.core :as h]))


(defn script
  [& script-src]
  [:script {:type "text/javascript"}
   (h/raw (apply str script-src))])


(defn optional-error-display
  [key dict]
  (let [error-messages (dict key)]
    (when error-messages
      [:div (into [] (concat
                       [:div]
                       (map (fn [x] [:p [:span {:style "color: red;"} x]])
                            (string/split error-messages #"\n"))))])))
