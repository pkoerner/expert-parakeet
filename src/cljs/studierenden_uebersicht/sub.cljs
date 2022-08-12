(ns studierenden-uebersicht.sub
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :kurse
  (fn [db _] (:kurse db)))


