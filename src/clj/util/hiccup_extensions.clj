(ns util.hiccup-extensions)


(defn script
  [& script-src]
  [:script {:type "text/javascript"}
   (h/raw (apply str script-src))])
