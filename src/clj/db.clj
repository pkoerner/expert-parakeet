(ns db
  (:require
    [datahike.api :as d]
    [db.dummy-data :as dummy-data]
    [db.schema :refer [db-schema]]
    [nano-id.core :refer [nano-id]]))


(def id-len 10)


;; use mem db

(def cfg
  {:store {:backend :mem
           :id "expert-db"}
   :initial-tx db-schema})


;; use file db


#_(def cfg
      {:store {:backend :file
               :path "/tmp/expert-db"}
       :initial-tx schema})


(defn create-conn
  []
  (if (d/database-exists? cfg)
    (println "Found existing DB at:" (get-in cfg [:store :path]))
    (d/create-database cfg))

  (d/connect cfg))


(def conn (create-conn))


(do (d/transact conn dummy-data/dummy-data) nil)


;; provide the db attr of the id you want to check for collisions
(defn generate-id
  [attr]
  (loop [id (nano-id id-len)]
    (if (seq (d/q '[:find ?e
                    :in $ ?attr ?id
                    :where [?e ?attr ?id]]
                  @conn attr id))
      (recur (nano-id id-len))
      id)))


(defn kurse-von-studierendem
  [user-id]
  (mapv first
        (d/q '[:find (pull ?k [:course/id
                               {:course/class [:class/class-name]}
                               :course/year
                               :course/semester
                               {:course/question-sets [:question-set/id :question-set/name
                                             {:question-set/questions [:question/id
                                                            :question/points]}]}])
               :in $ ?u
               :where
               [?u :user/courses ?k]]
             @conn [:user/id user-id])))


(defn bewertete-antworten-von-test
  [user-id test-id]
  (mapv first
        (d/q '[:find (pull ?a [:answer/points
                               {:answer/question [:question/id :question/type]}])
               :in $ ?u ?t
               :where
               [?a :answer/user ?u]
               [?a :answer/question ?f]
               [?t :question-set/questions ?f]
               [?a :answer/points]]
             @conn [:user/id user-id] [:kurs test-id])))


(defn fragen-fuer-user
  [korrektorin-id]
  (mapv first
        (d/q '[:find (pull ?kurs [:course/semester
                                  :course/year
                                  {:course/class [:class/class-name]}
                                  {:course/question-sets [:question-set/id :question-set/name
                                                {:question-set/questions [:question/id :question/type]}]}])
               :in $ ?korr
               :where
               [?korr :user/courses ?kurs]]
             @conn [:user/id korrektorin-id])))


(defn antworten-von-frage
  [frage-id]
  (map
    #(zipmap [:answer/id :user/id :antwort/timestamp] %)
    (d/q '[:find ?antwort-id ?user-id ?timestamp
           :in $ ?frage-id
           :where
           [?frage :question/id ?frage-id]
           [?antwort :answer/question ?frage]
           [?antwort :answer/id ?antwort-id ?tx]
           [?tx :db/txInstant ?timestamp]
           [?antwort :answer/user ?user]
           [?user :user/id ?user-id]]
         @conn frage-id)))


(defn alle-antworten-mit-korrekturen
  []
  (mapv first
        (d/q '[:find (pull ?antwort [:answer/id])
               :in $
               :where
               [?korrektur :correction/answer ?antwort]]
             @conn)))


(defn korrekturen-von-korrektorin-korrigiert
  [korrektorin-id]
  (mapv first
        (d/q '[:find (pull ?k [{:correction/answer [:answer/id]}])
               :in $ ?korr
               :where
               [?k :correction/corrector ?korr]]
             @conn [:user/id korrektorin-id])))


(defn test-by-id
  [id]
  (d/pull @conn
          [:question-set/id {:question-set/questions [:question/id :question/question-statement :question/points :question/type :question/possible-solutions]}]
          [:question-set/id id]))


(defn all-tests
  []
  (mapv first (d/q '[:find ?id
                     :where [_ :question-set/id ?id]]
                   @conn)))


(defn all-faecher
  []
  (mapv first (d/q '[:find (pull ?e [:fach/id :fach/fachtitel])
                     :where [?e :fach/id]]
                   @db/conn)))


(defn kurse-for-fach
  [fach-id]
  (mapv first (d/q '[:find (pull ?e [:kurs/id :kurs/semester :kurs/jahr
                                     {:kurs/tests [:test/id
                                                   :test/name
                                                   {:test/fragen [:frage/id :frage/frage-text
                                                                  :frage/punkte :frage/typ :frage/choices
                                                                  :frage/loesungskriterien
                                                                  :frage/single-choice-loesung
                                                                  :frage/multiple-choice-loesung]}]}])
                     :in $ ?fach-id
                     :where
                     [?f :fach/id ?fach-id]
                     [?e :kurs/fach ?f]
                     [?e :kurs/id]]
                   @db/conn fach-id)))


(defn all-fragen
  []
  (mapv first (d/q '[:find (pull ?e [:question/id])
                     :where [?e :question/id]]
                   @db/conn)))


(defn add-fach
  [fach-name]
  (let [id (generate-id :fach/id)
        tx-result (d/transact conn
                              [{:db/id -1
                                :fach/id id
                                :fach/fachtitel fach-name}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:fach/id :fach/fachtitel]
            [:fach/id id])))


(defn all-kurse
  []
  (mapv first (d/q '[:find (pull ?e [:kurs/id {:kurs/fach [:fach/id :fach/fachtitel]} :kurs/jahr
                                     :kurs/semester :kurs/jahr {:kurs/tests [:test/id]}])
                     :where [?e :kurs/id]]
                   @db/conn)))


(defn kurs-by-id
  [id]
  (d/pull @conn
          [:kurs/id {:kurs/fach [:fach/id :fach/fachtitel]}
           :kurs/jahr :kurs/semester
           {:kurs/tests [:test/id :test/name]}]
          [:kurs/id id]))


(defn add-kurs
  [fach-id jahr semester]
  (let [id (generate-id :kurs/id)
        tx-result (d/transact conn
                              [{:db/id     -1
                                :kurs/id   id
                                :kurs/fach [:fach/id fach-id]
                                :kurs/jahr jahr
                                :kurs/semester semester
                                :kurs/tests []}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:kurs/id :kurs/fach :kurs/jahr :kurs/semester :kurs/tests]
            [:kurs/id id])))


(defn frage-by-id
  [id]
  (d/pull @db/conn
          [:question/id :question/question-statement :question/points :question/type]
          [:question/id id]))


(defn add-frage
  [frage]
  (let [id (generate-id :frage/id)
        typ (:frage/typ frage)
        trans-map (apply assoc {:db/id        -1
                                :frage/id     id
                                :frage/typ    typ
                                :frage/punkte (:frage/punkte frage)
                                :frage/frage-text (:frage/frage-text frage)}
                         (cond (= typ :frage.typ/text)
                               [:frage/loesungskriterien (:frage/loesungskriterien frage)]
                               (= typ :frage.typ/single-choice)
                               [:frage/choices (:frage/choices frage)
                                :frage/single-choice-loesung (:frage/single-choice-loesung frage)]
                               (= typ :frage.typ/multiple-choice)
                               [:frage/choices (:frage/choices frage)
                                :frage/multiple-choice-loesung (:frage/multiple-choice-loesung frage)]))
        tx-result (d/transact conn [trans-map])
        db-after (:db-after tx-result)]
    (d/pull db-after  [:frage/id :frage/frage-text :frage/punkte :frage/typ :frage/choices
                       :frage/loesungskriterien :frage/single-choice-loesung
                       :frage/multiple-choice-loesung]
            [:frage/id id])))


(defn add-test
  [test-name kurs-id bestehensgrenze fragen start ende]
  (let [id (generate-id :test/id)
        fragen-ids (doall (map (fn [frage]
                                 (if (:frage/id frage)
                                   (:frage/id frage)
                                   (:frage/id (add-frage frage)))) ; frage war noch nicht in db
                               fragen))
        tx-result-test (d/transact conn
                                   [{:db/id                 -1
                                     :test/id               id
                                     :test/name             test-name
                                     :question-set/start            start
                                     :question-set/end             ende
                                     :question-set/passing-score bestehensgrenze
                                     :test/fragen (mapv (fn [f-id] [:frage/id f-id]) fragen-ids)}])
        kurs (kurs-by-id kurs-id)
        _tx-result-kurs (d/transact conn [{:db/id         -1
                                           :kurs/id       (:kurs/id kurs)
                                           :kurs/semester (:kurs/semester kurs)
                                           :kurs/jahr     (:kurs/jahr kurs)
                                           :kurs/tests    (conj (:kurs/tests kurs) [:test/id id])}])
        db-after (:db-after tx-result-test)]
    (d/pull db-after [:test/id :test/name] [:test/id id])))


(defn user-add-antwort
  [user-id frage-id antwort]
  (let [id (generate-id :answer/id)
        tx-result (d/transact conn
                              [{:db/id -1
                                :answer/id id
                                :answer/question [:question/id frage-id]
                                :answer/user [:user/id user-id]
                                :answer/answer antwort}])
        db-after (:db-after tx-result)]
    (d/pull db-after [:answer/id {:answer/question [:question/id]}] [:answer/id id])))


(defn user-add-antworten
  [user-id antworten]
  (mapv
    (fn [[frage-id antwort]]
      (db/user-add-antwort user-id frage-id antwort))
    antworten))


(defn all-antwort
  []
  (d/q '[:find (pull ?e [:answer/id :answer/user :answer/question :answer/answer])
         :where [?e :answer/id]]
       @db/conn))


(defn antworten-fuer-korrektur
  [antwort-id]
  (mapv first
        (d/q '[:find (pull ?antwort [:answer/id
                                     :answer/points
                                     :answer/answer
                                     {:answer/question [:question/question-statement :question/points :frage/loesungskriterien]}])
               :in $ ?antwort
               :where
               [?antwort :answer/question ?frage]
               [?frage :question/type ?typ]
               [(= ?typ :frage.typ/text)]]
             @conn [:answer/id antwort-id])))


(defn korrekturen-von-antwort
  [antwort-id]
  (map
    #(zipmap [:corrector/feedback :korrektur/timestamp] %)
    (d/q '[:find ?korr-text ?timestamp
           :in $ ?antwort-id
           :where
           [?antwort :answer/id ?antwort-id]
           [?korrektur :correction/answer ?antwort ?tx]
           [?tx :db/txInstant ?timestamp]
           [?korrektur :corrector/feedback ?korr-text]]
         @conn antwort-id)))


(defn korrektor-add-korrektur
  [ant-id {text :corrector/feedback punkte :korrektur/punkte korr-id :korrektor/id}]
  (let [tx-result (d/transact conn
                              [{:db/id -1
                                :corrector/feedback text
                                :correction/corrector [:user/id korr-id]
                                :correction/answer [:answer/id ant-id]}
                               {:answer/id ant-id
                                :answer/points punkte}])
        db-after (:db-after tx-result)
        ids (:tempids tx-result)]
    (d/pull db-after [:corrector/feedback {:correction/answer [:answer/points]}] (get ids -1))))


(comment 
  (set! *print-length* 5)

  (ffirst (d/q '[:find (count ?e)
                 :where 
                 [?e :question/id]] @conn)))


(comment 
  (d/pull @conn [:question-set/questions] [:question-set/id 1])
  (d/pull @conn [:question-set/id {:question-set/questions [:question/question-statement]}] [:question-set/id 1])
  (d/pull @conn [:question/question-statement] [:question/id 1])
  )
