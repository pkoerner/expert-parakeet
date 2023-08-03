goog.provide('korrektur_uebersicht.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur-uebersicht","hole-unkorrigierte-antworten","korrektur-uebersicht/hole-unkorrigierte-antworten",-693367934),(function (p__49499,_){
var map__49501 = p__49499;
var map__49501__$1 = cljs.core.__destructure_map(map__49501);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49501__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/korrektur/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektor","korrektor",1254086858),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur-uebersicht","speichere-unkorrigierte-antworten","korrektur-uebersicht/speichere-unkorrigierte-antworten",2031289248)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur-uebersicht","speichere-unkorrigierte-antworten","korrektur-uebersicht/speichere-unkorrigierte-antworten",2031289248),(function (db,p__49508){
var vec__49510 = p__49508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49510,(0),null);
var daten = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49510,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),false),new cljs.core.Keyword(null,"antworten-unkorrigiert","antworten-unkorrigiert",-1170197105),daten);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur-uebersicht","entferne-unkorrigierte-antworten","korrektur-uebersicht/entferne-unkorrigierte-antworten",-841198143),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"antworten-unkorrigiert","antworten-unkorrigiert",-1170197105));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur-uebersicht","hole-korrigierte-antworten","korrektur-uebersicht/hole-korrigierte-antworten",1041464582),(function (p__49521,_){
var map__49522 = p__49521;
var map__49522__$1 = cljs.core.__destructure_map(map__49522);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49522__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/bisherige-korrekturen/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektor","korrektor",1254086858),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur-uebersicht","speichere-korrigierte-antworten","korrektur-uebersicht/speichere-korrigierte-antworten",-919477379)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur-uebersicht","speichere-korrigierte-antworten","korrektur-uebersicht/speichere-korrigierte-antworten",-919477379),(function (db,p__49527){
var vec__49528 = p__49527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49528,(0),null);
var daten = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49528,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),false),new cljs.core.Keyword(null,"antworten-korrigiert","antworten-korrigiert",-526627122),daten);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur-uebersicht","entferne-korrigierte-antworten","korrektur-uebersicht/entferne-korrigierte-antworten",-830713870),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"antworten-korrigiert","antworten-korrigiert",-526627122));
}));

//# sourceMappingURL=korrektur_uebersicht.events.js.map
