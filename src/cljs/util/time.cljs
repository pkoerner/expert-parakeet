(ns util.time
  (:require
    [cljs-time.core :as time]))


;; datum impl DateTimeProtocol http://www.andrewmcveigh.com/cljs-time/latest/cljs-time.core.html
;; zeit ist int (900 = 9:00)
;; returns map
(defn input->time-map
  [datum zeit]
  {:jahr (time/year datum)
   :monat (time/month datum)
   :tag (time/day datum)
   :stunde (int (/ zeit 100))
   :minute (rem zeit 100)})
