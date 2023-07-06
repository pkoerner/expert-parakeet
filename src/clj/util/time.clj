(ns util.time)


(defn of
  "Constructs Java.util.Date object from
   a given a map containing the keys
   :year, :month, :day, :hour, and
   :minutes."
  [{:keys [year month day hour minute]}]
  (java.util.Date. (- year 1900) month day hour minute))

(defn is-date-object?
  "Checks if provided argument
   is an instance of the java.util.Date
   class."
  [timestamp]
  (instance? java.util.Date timestamp))

(defn start-before-end?
  "Returns true if bot arguments
   are java.util.Date instances
   and the start date is earlier
   than the end date."
  [start end]
  (and (is-date-object? start) 
       (is-date-object? end) 
       (= -1 (compare start end))))