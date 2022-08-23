(ns util.time
  (:require
    [cljs-time.core :as time]
    [cljs-time.format :as format]))


;; todo: in java time umwandeln
(def time-format "HH:mm, dd MMM yyyy")


;; datum impl DateTimeProtocol http://www.andrewmcveigh.com/cljs-time/latest/cljs-time.core.html
;; zeit ist int (900 = 9:00)
(defn input->datetime-str
  [datum zeit]
  (format/unparse (format/formatter time-format)
                  (time/local-date-time (time/year datum)
                                        (time/month datum)
                                        (time/day datum)
                                        (int (/ zeit 100))
                                        (rem zeit 100))))


(defn str->datetime
  [s]
  (format/parse-local (format/formatter time-format) s))
