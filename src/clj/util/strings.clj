(ns util.strings
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as str]))


(def ellipsis "...")


(defn shorten
  "Shorten a string to the given maximum length.
   
   If the string is shorter, it is returned unchanged.
   If the string is longer, the overhang will be chopped off and replaced with the ellipsis symbol (three dots)."
  [s max-len]
  (let [len (count s)
        ellipsis-len (count ellipsis)]
    (if (> len max-len)
      (str (subs s 0 (max 0 (- max-len ellipsis-len))) ellipsis)
      s)))


(s/fdef shorten
        :args (s/cat :s string? :max-len nat-int?)
        :ret string?
        :fn (s/or :fit (s/and #(<= (count (:ret %)) (-> % :args :max-len))
                              #(= (:ret %) (-> % :args :s)))
                  :trunc (s/and #(= (count (:ret %)) (max (-> % :args :max-len) (count ellipsis)))
                                #(str/ends-with? (:ret %) ellipsis)
                                #(str/starts-with? (-> % :args :s) (subs (:ret %) 0 (- (count (:ret %)) (count ellipsis)))))))
