goog.provide('korrektur.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","laden","korrektur/laden",-1804124820),(function (p__26027,p__26028){
var map__26043 = p__26027;
var map__26043__$1 = cljs.core.__destructure_map(map__26043);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26044 = p__26028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26044,(0),null);
var antwort_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26044,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/antwort-fuer-korrektur/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(antwort_id)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","angekommen","korrektur/angekommen",-387856466)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","angekommen","korrektur/angekommen",-387856466),(function (db,p__26047){
var vec__26048 = p__26047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26048,(0),null);
var korrektur__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26048,(1),null);
var k = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(korrektur__$1,new cljs.core.Keyword("correction","points","correction/points",-465455985),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("antwort","punkte","antwort/punkte",724861504).cljs$core$IFn$_invoke$arity$1(korrektur__$1)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),false),new cljs.core.Keyword(null,"korrektur","korrektur",588821201),k);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","entfernen","korrektur/entfernen",1457652350),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"korrektur","korrektur",588821201));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","schreiben","korrektur/schreiben",-586410871),(function (db,p__26051){
var vec__26052 = p__26051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052,(0),null);
var korrektur_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektur","korrektur",588821201),new cljs.core.Keyword("korrektur","korrektur-text","korrektur/korrektur-text",-723796016)], null),korrektur_text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("correction","points","correction/points",-465455985),(function (db,p__26057){
var vec__26058 = p__26057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(0),null);
var korrektur_punkte = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26058,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektur","korrektur",588821201),new cljs.core.Keyword("correction","points","correction/points",-465455985)], null),korrektur_punkte);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","senden","korrektur/senden",36706152),(function (p__26061,_){
var map__26062 = p__26061;
var map__26062__$1 = cljs.core.__destructure_map(map__26062);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26062__$1,new cljs.core.Keyword(null,"db","db",993250759));
var antwort_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektur","korrektur",588821201),new cljs.core.Keyword("antwort","id","antwort/id",-255154989)], null));
var korrektur__$1 = cljs.core.select_keys(new cljs.core.Keyword(null,"korrektur","korrektur",588821201).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","korrektur-text","korrektur/korrektur-text",-723796016),new cljs.core.Keyword("correction","points","correction/points",-465455985)], null));
var korrektur_korrektor = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(korrektur__$1,new cljs.core.Keyword("korrektor","id","korrektor/id",1061817191),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektor","korrektor",1254086858),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/korrektur-fuer-antwort/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(antwort_id)].join(''),new cljs.core.Keyword(null,"params","params",710516235),korrektur_korrektor,new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","erfolgreich-gesendet","korrektur/erfolgreich-gesendet",-884913390)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","nicht-gesendet","korrektur/nicht-gesendet",2033030611)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","erfolgreich-gesendet","korrektur/erfolgreich-gesendet",-884913390),(function (db,p__26063){
var vec__26064 = p__26063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26064,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26064,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektur","korrektur",588821201),new cljs.core.Keyword(null,"gesendet","gesendet",1491846254)], null),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("korrektur","nicht-gesendet","korrektur/nicht-gesendet",2033030611),(function (db,p__26067){
var vec__26068 = p__26067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26068,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26068,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektur","korrektur",588821201),new cljs.core.Keyword(null,"gesendet","gesendet",1491846254),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"backend-not-responding","backend-not-responding",-2105957103)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektur","korrektur",588821201),new cljs.core.Keyword(null,"gesendet","gesendet",1491846254),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(result));
}));

//# sourceMappingURL=korrektur.events.js.map
