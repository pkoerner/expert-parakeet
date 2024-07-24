(ns views.correction.correction-overview-view
  (:require
    [clojure.spec.alpha :as s]
    [hiccup2.core :as h]))


(defn- page-query-params
  [active-tab page]
  (str "?tab=" active-tab "&page=" page))


(defn- tab-item
  [label href class]
  [:li.nav-item
   [:a.nav-link {:href href :class class} label]])


(defn- nav-tabs
  [tabs active-tab]
  [:ul.nav.nav-tabs
   (map (fn [[tab-name label]] (tab-item label (page-query-params tab-name 1) (if (= tab-name active-tab) "active" nil))) tabs)])


(defn- page-item
  [label href class]
  [:li.page-item {:class class}
   [:a.page-link {:href href} label]])


(defn- pagination
  [number-of-pages active-page active-tab]
  [:nav
   [:ul.pagination
    (page-item "Previous" (page-query-params active-tab (dec active-page)) (if (= 1 active-page) "disabled" nil))
    (map (fn [page]
           (page-item page (page-query-params active-tab page) (if (= page active-page) "active" nil)))
         (range 1 (inc number-of-pages)))
    (page-item "Next" (page-query-params active-tab (inc active-page)) (if (= number-of-pages active-page) "disabled" nil))]])


(defn- card-entry
  [label value]
  [:p [:span.font-weight-bold.mr-1 label] value])


(defn- display-corrections
  [corrections]
  (map (fn [correction]
         [:div.card.my-2
          [:div.card-body
           [:h5.card-title (correction :question/statement)]
           [:div.card-text
            (card-entry "Given answer: " (or (not-empty (correction :answer/answer)) "No answer given"))
            (card-entry "Feedback:" (correction :correction/feedback))
            (card-entry "Points: " (str (correction :answer/points) " of " (correction :question/max-points)))]]])
       corrections))


(s/def ::correction (s/keys :req [:correction/feedback :answer/points :question/max-points :question/statement :answer/answer]))


(s/fdef correction-overview
        :args (s/and (s/cat :corrections (s/coll-of ::correction)
                            :tabs (s/map-of :general/non-blank-string :general/non-blank-string)
                            :active-tab :general/non-blank-string
                            :number-of-pages pos-int?
                            :active-page pos-int?)
                     #(> (:active-page %) 0)
                     #(> (:number-of-pages %) 0)
                     #(>= (:number-of-pages %) (:active-page %))
                     #(contains? (:tabs %) (:active-tab %)))
        :ret  #(instance? hiccup.util.RawString %))


(defn correction-overview
  [corrections tabs active-tab number-of-pages active-page]
  (h/html
    [:div
     [:h2 "Correction overview"]

     (nav-tabs tabs active-tab)
     (display-corrections corrections)
     (pagination number-of-pages active-page active-tab)]))
