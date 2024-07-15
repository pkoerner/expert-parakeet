(ns util.hiccup-extensions
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as string]
    [hiccup2.core :as h]))


(s/fdef script
        :args (s/cat :script-src (s/* string?))
        :ret  #(instance? clojure.lang.PersistentVector %))


(defn script
  "Takes any number of arguments and joins them into a string, which is returned in a javascript script tag.
   
   As it takes a variable number of arguments, arguments to js functions from clj can be written without a string joining.
   
   Example:
   ```clj
(script \"
registerAddingSolutionBehavior(
    '\" add-solution-btn-id \"', '\" solution-container-div-id \"', '\" solution-input-id \"', '\" solution-list-id \"'
);\")
   ```"
  [& script-src]
  [:script {:type "text/javascript"}
   (h/raw (apply str script-src))])


(s/fdef optional-error-display
        :args (s/cat :key any? :error-map map?)
        :ret  (s/or :key-absent nil?
                    :key-persent #(instance? clojure.lang.PersistentVector %)))


(defn optional-error-display
  "Takes a key and a map possibly containing an error under this key. If there is no value under the key, nil is returned.
   If there is a value, and it is a string, the string is split on line breaks and each resulting string is depicted in a paragraph with
   red styling. All paragraphs are joined into one div."
  [key error-map]
  (let [error-messages (error-map key)]
    (when (and error-messages (string? error-messages))
      (into [] (concat
                 [:div]
                 (map (fn [x] [:p [:span {:style "color: red;"} x]])
                      (string/split error-messages #"\n")))))))
