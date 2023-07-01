(ns util.time)


(defn of
  [{:keys [jahr monat tag stunde minute]}]
  (java.util.Date. (- jahr 1900) monat tag stunde minute))
