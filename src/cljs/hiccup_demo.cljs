(ns hiccup-demo
  (:require
    [reagent.core :as r]
    [reagent.dom :as rd]))


;; https://github.com/weavejester/hiccup

(comment
  ;; Hiccup wird genutzt, um HTML als Clojure Vektoren darzustellen
  ;; Es wird von der Reagent Bibliothek mitgeliefert

  ;; Aufbau der Hiccup-Vectoren:
  ;; 1. Element: Ein Keyword, stellt dar welches HTML-Element der Vektor darstellen soll
  ;; [:div] -> <div></div>
  ;; Zusätzliche Elemente: Entweder andere Hiccup Vektoren oder Strings

  [:div "Hello World"]
  ;; -> <div>Hello World</div>
  [:div
   [:h1 "Hello World"]
   [:p "Lorem Ipsum"]]
  ;; -> <div><h1>Hello World</h1><p>Lorem Ipsum</p></div>

  ;; 2. Element des Vektor kann eine Map sein, die Attribute darstellt
  [:div {:id "id-name", :class "example-class"} "Attribute"]
  ;; -> <div class="example-class" id="id-name">Attribute</div>

  ;; Statt eines Keywords als erstes Element kann auch ein Symbol angegeben werden
  ;; Dieses Symbol wird als Funktion evaluiert und gibt einen Hiccup Vektor zurück

  (defn header
    []
    [:h1 "Head"])

  [:div
   [header]]

  ;; Sequenzen werden expandiert
  [:ul (for [x (range 3)] [:li x])]
  [:ul (map (fn [s] [:li (str s)]) (range 3))]
  ;; -> <ul><li>0</li><li>1</li><li>2</li></ul>

  ;; Shortcuts!
  [:div#id-name]
  ;; ->
  [:div {:id "id-name"}]

  [:div.class-name]
  ;; ->
  [:div {:class "class-name"}]

  [:div#id-name.class-1.class-2]
  ;; -> <div class="class-1 class-2" id="id-name"></div>


  ;; Zusätzliche Funktionalität durch Hiccup verbunden mit Reagent

  {:style "color: red; font-weight: bold;"}
  ;; ->
  {:style {:color "red", :font-weight "bold"}}

  ;; Das class Attribut kann auch eine Collection annehmen
  [:div {:class ["c1" "c2"]}]
  ;; -> <div class="c1 c2"></div>

  ;; Es gibt Attribute, die einfach nur "da sind" oder nicht (z.B. "checked")
  ;; Diese werden in einer Map mit der Value true oder false angegeben

  [:input {:type "checkbox" :checked false}]
  ;; -> <input type="checkbox">
  [:input {:type "checkbox" :checked true}]
  ;; -> <input type="checkbox" checked="">

  ;; Die Attribute in der Attribut-Map werden je nach Typ unterschiedlich an das HTML weiter gegeben
  ;; Strings -> Weitergabe als Strings
  ;; Nummern -> Falls als Style-Attribut: Weitergabe als px, sonst als String
  ;; Boolean -> Falls false: Attribut ignorieren, falls true: Ohne Attribut zurück geben
  ;; Keywords -> Weitergabe ohne ns: :a/b -> b als String
  ;; nil -> Ignoriere Attribut

  ;; Sequeezing:
  [:div>ul>li "Hello"]
  ;; ->
  [:div
   [:ul
    [:li "Hello"]]]
  )


(defn Root
  []
  [:div
   ;; [:p {:style "color: red; font-weight: bold;"} "Hi"] Funktioniert nur bei reinem Hiccup
   [:p {:style {:color "red", :font-weight "bold"}} "Hello"]
   ;; [:div {:class ["c1" "c2"]}]
   ;; [:input {:type "checkbox" :checked false}]
   ;; [:input {:type "checkbox" :checked true}]
   ;; [:div {:class "hello", :id 12, :style {:width 20}}]
   ;; [:div {:id :a/b, :class nil}]
   ;; [form]
   ;; (if (:finished @data)
   ;; [:p "Ihre Eingabe: "]
   ;; [form2])
   ;; [user-input]
   ])


;; Nutzen von Forms mit Hiccup

(defn form
  []
  [:div#login-form
   [:form {:method :post :action "/"}
    [:p
     [:label "Name: "
      [:input {:type "text" :name "name"}]]]
    [:p
     [:label "Passwort: "
      [:input {:type "password" :name "pwd"}]]]
    [:p
     [:button {:type :submit} "Log in"]]]])


;; React Events: https://reactjs.org/docs/events.html

;; Ein React-Event kann einer Komponente als Key übergeben werden, und eine Funktion
;; die bei dem Event aufgerufen werden soll als value

;; Wenn Hiccup mit Reagent verwendet wird, wird jede Komponente die ratom referenziert bei Veränderung des ratoms
;; automatisch neu dereferenziert

(defonce data (r/atom {}))


(defn click
  [d k]
  (if (k d)
    (update d k inc)
    (assoc d k 1)))


(defn drink
  [d drink]
  (assoc d :fav-drink drink))


(defn done
  [d]
  (assoc d :finished true))


(defn form2
  []
  [:div#react-form
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! data click :clicks)
            :on-double-click #(swap! data click :double-clicks)}]
   [:p
    [:label "Lieblingsgetränk: "
     [:input {:type "text" :name "fav-drink"
              :on-change #(swap! data drink (-> % .-target .-value))}]]]
   [:p
    [:input {:type "button" :value "Submit"
             :on-click #(swap! data done)}]]])


(defn user-input
  []
  (let [d @data]
    (if (not-empty d)
      [:div
       (if (:clicks d) [:p "Anzahl Klicks: " (:clicks d)] [:p])
       (if (:double-clicks d) [:p "Anzahl Klicks: " (:double-clicks d)] [:p])
       (if (and (:fav-drink d) (not-empty (:fav-drink d))) [:p "Ihr Lieblingsgetränk: " (:fav-drink d)] [:p])]
      [:div])))


(rd/render [Root]
           (. js/document (getElementById "app")))
