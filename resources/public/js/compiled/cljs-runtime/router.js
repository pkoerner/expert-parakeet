goog.provide('router');
router.href = reitit.frontend.easy.href;
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (p__28005){
var map__28006 = p__28005;
var map__28006__$1 = cljs.core.__destructure_map(map__28006);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28006__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(reitit.frontend.easy.push_state,name,path_params,query_params);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("router","push-state","router/push-state",2026957021),(function (_,p__28007){
var vec__28008 = p__28007;
var seq__28009 = cljs.core.seq(vec__28008);
var first__28010 = cljs.core.first(seq__28009);
var seq__28009__$1 = cljs.core.next(seq__28009);
var ___$1 = first__28010;
var route = seq__28009__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("router","navigated","router/navigated",1771617139),(function (db,p__28011){
var vec__28012 = p__28011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28012,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28012,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("router","current-route","router/current-route",-2103253427),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
router.routes = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","overview","router/overview",-1393601818),new cljs.core.Keyword(null,"view","view",1247994814),studierenden_uebersicht.views.overview,new cljs.core.Keyword(null,"link-text","link-text",224432076),"\u00DCbersicht",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kurse","laden","kurse/laden",1212393559)], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kurse","entfernen","kurse/entfernen",-354457681)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["korrektur-uebersicht",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","korrektur-overview","router/korrektur-overview",-552471088),new cljs.core.Keyword(null,"view","view",1247994814),korrektur_uebersicht.views.overview,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Korrektur-\u00DCbersicht",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur-uebersicht","hole-unkorrigierte-antworten","korrektur-uebersicht/hole-unkorrigierte-antworten",-693367934)], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur-uebersicht","entferne-unkorrigierte-antworten","korrektur-uebersicht/entferne-unkorrigierte-antworten",-841198143)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bisherige-korrekturen",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","bisherige-korekturen","router/bisherige-korekturen",-866422416),new cljs.core.Keyword(null,"view","view",1247994814),korrektur_uebersicht.views.previous_corrections,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Korrektur-\u00DCbersicht",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur-uebersicht","hole-korrigierte-antworten","korrektur-uebersicht/hole-korrigierte-antworten",1041464582)], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur-uebersicht","entferne-korrigierte-antworten","korrektur-uebersicht/entferne-korrigierte-antworten",-830713870)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test/:id",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","test","router/test",1799959030),new cljs.core.Keyword(null,"view","view",1247994814),test.views.Root,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Test",new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.int_QMARK_], null)], null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),new cljs.core.Keyword(null,"start","start",-355208981),(function (params){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","laden","test/laden",1310728287),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","entfernen","test/entfernen",-184950905)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frage/erstellen",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","frage-erstellen","router/frage-erstellen",-449140538),new cljs.core.Keyword(null,"view","view",1247994814),orga.frage_erstellen.views.frage_erstellen,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Neue Frage erstellen",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frage-erstellen","init","frage-erstellen/init",2103253056)], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frage-erstellen","entfernen","frage-erstellen/entfernen",-694366501)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["antwort-fuer-korrektur/:aid",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("router","korrektur","router/korrektur",2076494736),new cljs.core.Keyword(null,"view","view",1247994814),korrektur.views.overview,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Korrektur",new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aid","aid",1491999513),cljs.core.int_QMARK_], null)], null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aid","aid",1491999513)], null)], null),new cljs.core.Keyword(null,"start","start",-355208981),(function (params){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","laden","korrektur/laden",-1804124820),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"aid","aid",1491999513)], null))], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","entfernen","korrektur/entfernen",1457652350)], null));
})], null)], null)], null)], null)], null);
router.on_navigate = (function router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("router","navigated","router/navigated",1771617139),new_match], null));
} else {
return null;
}
});
router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
router.init_routes_BANG_ = (function router$init_routes_BANG_(){
console.log("initializing routes");

return reitit.frontend.easy.start_BANG_(router.router,router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});
router.nav = (function router$nav(p__28015){
var map__28016 = p__28015;
var map__28016__$1 = cljs.core.__destructure_map(map__28016);
var dests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016__$1,new cljs.core.Keyword(null,"dests","dests",259411416));
var router__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28016__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function router$nav_$_iter__28017(s__28018){
return (new cljs.core.LazySeq(null,(function (){
var s__28018__$1 = s__28018;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28018__$1);
if(temp__5804__auto__){
var s__28018__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28018__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28018__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28020 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28019 = (0);
while(true){
if((i__28019 < size__5522__auto__)){
var route_name = cljs.core._nth(c__5521__auto__,i__28019);
var route = reitit.core.match_by_name(router__$1,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route)));
cljs.core.chunk_append(b__28020,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),((active)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(router.href.cljs$core$IFn$_invoke$arity$1 ? router.href.cljs$core$IFn$_invoke$arity$1(route_name) : router.href.call(null,route_name)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),text], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(router.href.cljs$core$IFn$_invoke$arity$1 ? router.href.cljs$core$IFn$_invoke$arity$1(route_name) : router.href.call(null,route_name))], null),text], null))], null));

var G__28023 = (i__28019 + (1));
i__28019 = G__28023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28020),router$nav_$_iter__28017(cljs.core.chunk_rest(s__28018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28020),null);
}
} else {
var route_name = cljs.core.first(s__28018__$2);
var route = reitit.core.match_by_name(router__$1,route_name);
var text = new cljs.core.Keyword(null,"link-text","link-text",224432076).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route)));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),route_name], null),((active)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),(router.href.cljs$core$IFn$_invoke$arity$1 ? router.href.cljs$core$IFn$_invoke$arity$1(route_name) : router.href.call(null,route_name)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),text], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(router.href.cljs$core$IFn$_invoke$arity$1 ? router.href.cljs$core$IFn$_invoke$arity$1(route_name) : router.href.call(null,route_name))], null),text], null))], null),router$nav_$_iter__28017(cljs.core.rest(s__28018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(dests);
})()], null);
});
router.router_component = (function router$router_component(p__28021){
var map__28022 = p__28021;
var map__28022__$1 = cljs.core.__destructure_map(map__28022);
var router__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28022__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var current_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("router","current-route","router/current-route",-2103253427)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router.nav,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dests","dests",259411416),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("router","overview","router/overview",-1393601818),new cljs.core.Keyword("router","korrektur-overview","router/korrektur-overview",-552471088),new cljs.core.Keyword("router","frage-erstellen","router/frage-erstellen",-449140538)], null),new cljs.core.Keyword(null,"router","router",1091916230),router__$1,new cljs.core.Keyword(null,"current-route","current-route",2067529448),current_route], null)], null),(cljs.core.truth_(current_route)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_route))], null):null)], null);
});

//# sourceMappingURL=router.js.map
