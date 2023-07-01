(ns util.time)


(defn of
  "Constructs Java.util.Date object from
   a given a map containing the keys
   :year, :month, :day, :hour, and
   :minutes."
  [{:keys [year month day hour minute]}]
  (java.util.Date. (- year 1900) month day hour minute))
