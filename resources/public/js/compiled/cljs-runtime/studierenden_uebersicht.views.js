goog.provide('studierenden_uebersicht.views');
studierenden_uebersicht.views.headline = (function studierenden_uebersicht$views$headline(){
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Logged in as: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Logout"], null)], null)], null)], null);
});
studierenden_uebersicht.views.show_test = (function studierenden_uebersicht$views$show_test(p__27260){
var map__27261 = p__27260;
var map__27261__$1 = cljs.core.__destructure_map(map__27261);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27261__$1,new cljs.core.Keyword("test","id","test/id",-1375668830));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27261__$1,new cljs.core.Keyword("test","name","test/name",1848775871));
var max_punkte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27261__$1,new cljs.core.Keyword("question-set","max-points","question-set/max-points",1901952052));
var erreichte_punkte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27261__$1,new cljs.core.Keyword("question-set","achived-points","question-set/achived-points",-2041626766));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - Bisher erreichte Punkte: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(erreichte_punkte)," von ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_punkte)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("router","push-state","router/push-state",2026957021),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","test","router/test",1799959030),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)], null));
})], null)], null)], null);
});
studierenden_uebersicht.views.show_kurs = (function studierenden_uebersicht$views$show_kurs(p__27262){
var map__27263 = p__27262;
var map__27263__$1 = cljs.core.__destructure_map(map__27263);
var jahr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword("kurs","jahr","kurs/jahr",1257379887));
var semester = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword("kurs","semester","kurs/semester",333712076));
var fach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword("kurs","fach","kurs/fach",-1363533240));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword("kurs","tests","kurs/tests",-1046166422));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("fach","fachtitel","fach/fachtitel",-1946171092).cljs$core$IFn$_invoke$arity$1(fach))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(semester)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(jahr),":"].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(studierenden_uebersicht.views.show_test,tests)], null);
});
studierenden_uebersicht.views.show_kurse_and_tests = (function studierenden_uebersicht$views$show_kurse_and_tests(){
var kurse = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kurse","kurse",-1744995182)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2(studierenden_uebersicht.views.show_kurs,kurse)], null);
});
studierenden_uebersicht.views.overview = (function studierenden_uebersicht$views$overview(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Studierenden \u00DCbersicht"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [studierenden_uebersicht.views.headline], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [studierenden_uebersicht.views.show_kurse_and_tests], null)], null);
});

//# sourceMappingURL=studierenden_uebersicht.views.js.map
