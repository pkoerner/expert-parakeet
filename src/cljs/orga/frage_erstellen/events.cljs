(ns orga.frage-erstellen.events
  (:require
    [re-frame.core :as rf]))


(rf/reg-event-db
  :frage-erstellen/init
  (fn [db _]
    (assoc db :frage {:frage/typ :frage.typ/single-choice})))


(rf/reg-event-db
  :frage-erstellen/entfernen
  (fn [db _]
    (dissoc db :frage)))


(rf/reg-event-db
  :frage-erstellen/update
  (fn [db [_ key value]]
    (assoc-in db [:frage key] value)))


(rf/reg-event-db
  :frage-erstellen/multiple-choice-lsg-update
  (fn [db [_ in-answer? choice-text]]
    (if (not (get-in db [:frage :frage/multiple-choice-loesung]))
      (assoc-in db [:frage :frage/multiple-choice-loesung] #{choice-text})  ; init as set, in-answer must be true
      (if in-answer?
        (update-in db [:frage :frage/multiple-choice-loesung] conj choice-text)
        (update-in db [:frage :frage/multiple-choice-loesung] disj choice-text)))))


(rf/reg-event-db
  :frage-erstellen/add-choice
  (fn [db [_ choice]]
    (if (not (get-in db [:frage :frage/choices]))
      (assoc-in db [:frage :frage/choices] [choice])      ; init as vector
      (update-in db [:frage :frage/choices] conj choice))))


(defn remove-idx
  [v idx]
  (vec (concat (subvec v 0 idx) (subvec v (inc idx))))) ; removes element at idx from vector, should probably be in util namespace?


(rf/reg-event-db
  :frage-erstellen/remove-choice
  (fn [db [_ choice-idx choice-text]]
    (-> db
        (update-in [:frage :frage/choices] remove-idx choice-idx)
        (update-in [:frage :frage/multiple-choice-loesung] disj choice-text))))


(rf/reg-event-fx
  :frage-erstellen/erstellen
  (fn [{:keys [db]} _]
    (let [typ (get-in db [:frage :frage/typ])
          frage
          (apply assoc
                 {:frage/frage-text (get-in db [:frage :frage/frage-text])
                  :frage/punkte     (get-in db [:frage :frage/punkte])
                  :frage/typ        typ}
                 (cond (= typ :frage.typ/text)
                       [:frage/loesungskriterien (get-in db [:frage :frage/loesungskriterien])]
                       (= typ :frage.typ/single-choice)
                       [:frage/choices (get-in db [:frage :frage/choices])
                        :frage/single-choice-loesung (get-in db [:frage :frage/single-choice-loesung])]
                       (= typ :frage.typ/multiple-choice)
                       [:frage/choices (get-in db [:frage :frage/choices])
                        :frage/multiple-choice-loesung
                        (let [multiple-choice-lsg (get-in db [:frage :frage/multiple-choice-loesung])]
                          (if (nil? multiple-choice-lsg)
                            #{}
                            (set multiple-choice-lsg)))]))] ; choices kann coll sein, mult-choi-lsg muss set!
      (print frage))))


