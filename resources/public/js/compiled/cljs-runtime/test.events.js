goog.provide('test.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("test","laden","test/laden",1310728287),(function (p__26071,p__26072){
var map__26073 = p__26071;
var map__26073__$1 = cljs.core.__destructure_map(map__26073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26073__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26074 = p__26072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26074,(0),null);
var test_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26074,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/test/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test_id)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","angekommen","test/angekommen",1254763191)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("test","angekommen","test/angekommen",1254763191),(function (db,p__26079){
var vec__26080 = p__26079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26080,(0),null);
var test__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26080,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"laedt","laedt",-1372192549),false),new cljs.core.Keyword(null,"test","test",577538877),test__$1);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("test","entfernen","test/entfernen",-184950905),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"test","test",577538877));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage","beantworten","frage/beantworten",120007190),(function (db,p__26086){
var vec__26087 = p__26086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26087,(0),null);
var frage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26087,(1),null);
var antwort = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26087,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antworten","antworten",1165926592),frage_id], null),antwort);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage","multiple-choice-beantworten","frage/multiple-choice-beantworten",1979351251),(function (db,p__26094){
var vec__26096 = p__26094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(0),null);
var frage_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(1),null);
var in_answer_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(2),null);
var choice_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(3),null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antworten","antworten",1165926592),frage_id], null)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antworten","antworten",1165926592),frage_id], null),cljs.core.PersistentHashSet.createAsIfByAssoc([choice_text]));
} else {
if(cljs.core.truth_(in_answer_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antworten","antworten",1165926592),frage_id], null),cljs.core.conj,choice_text);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"antworten","antworten",1165926592),frage_id], null),cljs.core.disj,choice_text);
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("antworten","senden","antworten/senden",1247363267),(function (p__26112,_){
var map__26113 = p__26112;
var map__26113__$1 = cljs.core.__destructure_map(map__26113);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26113__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null)));
var antworten = new cljs.core.Keyword(null,"antworten","antworten",1165926592).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[vars.base_url,"/user/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id),"antworten"].join(''),new cljs.core.Keyword(null,"params","params",710516235),antworten,new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("antworten","erfolgreich-gesendet","antworten/erfolgreich-gesendet",-1948719763)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("antworten","erfolgreich-gesendet","antworten/erfolgreich-gesendet",-1948719763),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"gesendet","gesendet",1491846254),true);
}));

//# sourceMappingURL=test.events.js.map
