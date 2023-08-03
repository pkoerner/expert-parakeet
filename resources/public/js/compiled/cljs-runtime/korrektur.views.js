goog.provide('korrektur.views');
korrektur.views.headline = (function korrektur$views$headline(){
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"korrektor","korrektor",1254086858)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Logged in as: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Logout"], null)], null)], null)], null);
});
korrektur.views.korrektur_form = (function korrektur$views$korrektur_form(p__26083){
var map__26084 = p__26083;
var map__26084__$1 = cljs.core.__destructure_map(map__26084);
var m = map__26084__$1;
var frag_punkte = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26084__$1,new cljs.core.Keyword("frage","punkte","frage/punkte",1651228526));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Korrekturtext: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("korrektur","korrektur-text","korrektur/korrektur-text",-723796016),"Korrekturtext"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26077_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","schreiben","korrektur/schreiben",-586410871),p1__26077_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Punkte: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("correction","points","correction/points",-465455985),(0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26078_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("correction","points","correction/points",-465455985),p1__26078_SHARP_.target.value], null));
})], null)], null),[" von ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_punkte)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Korrigieren",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","senden","korrektur/senden",36706152)], null));
})], null)], null)], null)], null);
});
korrektur.views.error_handling = (function korrektur$views$error_handling(error,status){
var G__26085 = error;
var G__26085__$1 = (((G__26085 instanceof cljs.core.Keyword))?G__26085.fqn:null);
switch (G__26085__$1) {
case "no-fitting-answer":
return "Antwort, die korrigiert werden sollte, nicht vorhanden.";

break;
case "correction-feedback-missing":
return "Korrekturtext angeben.";

break;
case "correction-points-missing":
return "Punkte angeben.";

break;
case "invalid-points":
return "Eingabe keine g\u00FCltige Punktzahl.";

break;
case "exceeding-number-of-points":
return "Angegebene Punktzahl zu gro\u00DF.";

break;
case "backend-not-responding":
return ["Servererror (Statuscode ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),")."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26085__$1)].join('')));

}
});
korrektur.views.korrektur_erfolgreich = (function korrektur$views$korrektur_erfolgreich(gesendet){
if(cljs.core.not(gesendet)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(gesendet))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),["Korrektur \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("korrektur","korrektur-text","korrektur/korrektur-text",-723796016).cljs$core$IFn$_invoke$arity$1(gesendet)),"\" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(gesendet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","antwort","korrektur/antwort",-403911449),new cljs.core.Keyword("antwort","punkte","antwort/punkte",724861504)], null)))," Punkte) erfolgreich gespeichert."].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(korrektur.views.error_handling(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(gesendet),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(gesendet)))].join('')], null);
}
}
});
korrektur.views.show_antwort_to_korrigieren = (function korrektur$views$show_antwort_to_korrigieren(){
var korrektur__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("korrektur","erhalten","korrektur/erhalten",1823647449)], null)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frage","frage-text","frage/frage-text",2141142109).cljs$core$IFn$_invoke$arity$1(korrektur__$1))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frage","punkte","frage/punkte",1651228526).cljs$core$IFn$_invoke$arity$1(korrektur__$1))," Punkte"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Antwort-Id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("antwort","id","antwort/id",-255154989).cljs$core$IFn$_invoke$arity$1(korrektur__$1))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"L\u00F6sungsvorschlag: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword("frage","loesungskriterien","frage/loesungskriterien",-107931651).cljs$core$IFn$_invoke$arity$1(korrektur__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Antwort:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword("antwort","antwort","antwort/antwort",-614359327).cljs$core$IFn$_invoke$arity$1(korrektur__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [korrektur.views.korrektur_form,korrektur__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [korrektur.views.korrektur_erfolgreich,new cljs.core.Keyword(null,"gesendet","gesendet",1491846254).cljs$core$IFn$_invoke$arity$1(korrektur__$1)], null)], null);
});
korrektur.views.overview = (function korrektur$views$overview(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korrektur.views.headline], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korrektur.views.show_antwort_to_korrigieren], null)], null);
});

//# sourceMappingURL=korrektur.views.js.map
