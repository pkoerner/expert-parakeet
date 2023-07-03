(ns orga.frage-erstellen.events
  (:require
    [cljs.tools.reader.edn :as edn]
    [re-frame.core :as rf]))


(rf/reg-event-db
  :frage-erstellen/init
  (fn [db _]
    (assoc db :frage {})))


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
    (if (not (get-in db [:frage :question/multiple-choice-solution]))
      (assoc-in db [:frage :question/multiple-choice-solution] #{choice-text})  ; init as set, in-answer must be true
      (if in-answer?
        (update-in db [:frage :question/multiple-choice-solution] conj choice-text)
        (update-in db [:frage :question/multiple-choice-solution] disj choice-text)))))


(rf/reg-event-db
  :frage-erstellen/add-choice
  (fn [db [_ choice]]
    (if (not (get-in db [:frage :question/possible-solutions]))
      (assoc-in db [:frage :question/possible-solutions] [choice])      ; init as vector
      (update-in db [:frage :question/possible-solutions] conj choice))))


(defn remove-idx
  [v idx]
  (vec (concat (subvec v 0 idx) (subvec v (inc idx))))) ; removes element at idx from vector, should probably be in util namespace?


(rf/reg-event-db
  :frage-erstellen/remove-choice
  (fn [db [_ choice-idx choice-text]]
    (-> db
        (update-in [:frage :question/possible-solutions] remove-idx choice-idx)
        (update-in [:frage :question/multiple-choice-solution] disj choice-text))))


(rf/reg-event-fx
  :frage-erstellen/erstellen
  (fn [{:keys [db]} _]
    (let [typ (get-in db [:frage :question/type])
          frage
          (apply assoc
                 {:question/question-statement (get-in db [:frage :question/question-statement])
                  :question/points     (edn/read-string (get-in db [:frage :question/points]))
                  :question/type        typ}
                 (cond (= typ :question.type/free-text)
                       [:question/evaluation-criteria (get-in db [:frage :question/evaluation-criteria])]
                       (= typ :question.type/single-choice)
                       [:question/possible-solutions (get-in db [:frage :question/possible-solutions])
                        :question/single-choice-solution (get-in db [:frage :question/single-choice-solution])]
                       (= typ :question.type/multiple-choice)
                       [:question/possible-solutions (get-in db [:frage :question/possible-solutions])
                        :question/multiple-choice-solution
                        (let [multiple-choice-lsg (get-in db [:frage :question/multiple-choice-solution])]
                          (if (nil? multiple-choice-lsg)
                            #{}
                            (set multiple-choice-lsg)))]))] ; choices kann coll sein, mult-choi-lsg muss set!
      (rf/dispatch [:test-erstellen/update :frage-erstellen? false])
      (rf/dispatch [:test-erstellen/fragen-hinzufuegen [frage]]))))


