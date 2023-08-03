goog.provide('events');
events._LT_sub = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,re_frame.core.subscribe);
events._GT_evt = re_frame.core.dispatch;
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"0",new cljs.core.Keyword(null,"name","name",1843675177),"Test_User"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"korrektor","korrektor",1254086858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"1",new cljs.core.Keyword(null,"name","name",1843675177),"Test_Korrektor"], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084),(function (cofx,p__49332){
var vec__49333 = p__49332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49333,(0),null);
var fail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49333,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"laedt","laedt",-1372192549),false),new cljs.core.Keyword(null,"error","error",-978969032),fail),new cljs.core.Keyword(null,"start-oauth2-github","start-oauth2-github",-1339472628),true], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-oauth2-github","start-oauth2-github",-1339472628),(function (_){
return (window.location = "http://localhost:8082/api/oauth2/github");
}));

//# sourceMappingURL=events.js.map
