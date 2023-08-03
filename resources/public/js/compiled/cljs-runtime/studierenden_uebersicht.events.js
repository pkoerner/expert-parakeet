goog.provide('studierenden_uebersicht.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kurse","laden","kurse/laden",1212393559),(function (p__55147,_){
var map__55148 = p__55147;
var map__55148__$1 = cljs.core.__destructure_map(map__55148);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55148__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/user/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"id","id",-1388402092)], null))),"/kurse"].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kurse","angekommen","kurse/angekommen",1156620959)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kurse","angekommen","kurse/angekommen",1156620959),(function (db,p__55151){
var vec__55152 = p__55151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55152,(0),null);
var daten = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55152,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549)),new cljs.core.Keyword(null,"kurse","kurse",-1744995182),daten);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kurse","entfernen","kurse/entfernen",-354457681),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"kurse","kurse",-1744995182));
}));

//# sourceMappingURL=studierenden_uebersicht.events.js.map
