(ns korrektur.subs
  (:require
    [re-frame.core :as rf]))


(rf/reg-sub
  :korrektur/erhalten
  (fn [db _] (:korrektur db)))
