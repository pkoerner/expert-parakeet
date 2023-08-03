goog.provide('orga.frage_erstellen.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","init","frage-erstellen/init",2103253056),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("frage","typ","frage/typ",-1331093329),new cljs.core.Keyword("frage.typ","single-choice","frage.typ/single-choice",435008084)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","entfernen","frage-erstellen/entfernen",-694366501),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"frage","frage",1781615088));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","update","frage-erstellen/update",1714123886),(function (db,p__49870){
var vec__49871 = p__49870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49871,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),key], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","multiple-choice-lsg-update","frage-erstellen/multiple-choice-lsg-update",-637760088),(function (db,p__49874){
var vec__49879 = p__49874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49879,(0),null);
var in_answer_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49879,(1),null);
var choice_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49879,(2),null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201)], null)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([choice_text]));
} else {
if(cljs.core.truth_(in_answer_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201)], null),cljs.core.conj,choice_text);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201)], null),cljs.core.disj,choice_text);
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","add-choice","frage-erstellen/add-choice",1643453694),(function (db,p__49889){
var vec__49890 = p__49889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49890,(0),null);
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49890,(1),null);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","choices","frage/choices",1490655378)], null)))){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","choices","frage/choices",1490655378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [choice], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","choices","frage/choices",1490655378)], null),cljs.core.conj,choice);
}
}));
orga.frage_erstellen.events.remove_idx = (function orga$frage_erstellen$events$remove_idx(v,idx){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),idx),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(idx + (1)))));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","remove-choice","frage-erstellen/remove-choice",-201455691),(function (db,p__49908){
var vec__49909 = p__49908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49909,(0),null);
var choice_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49909,(1),null);
var choice_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49909,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","choices","frage/choices",1490655378)], null),orga.frage_erstellen.events.remove_idx,choice_idx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201)], null),cljs.core.disj,choice_text);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frage-erstellen","erstellen","frage-erstellen/erstellen",1575836472),(function (p__49946,_){
var map__49947 = p__49946;
var map__49947__$1 = cljs.core.__destructure_map(map__49947);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword(null,"db","db",993250759));
var typ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","typ","frage/typ",-1331093329)], null));
var frage = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("frage","frage-text","frage/frage-text",2141142109),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","frage-text","frage/frage-text",2141142109)], null)),new cljs.core.Keyword("frage","punkte","frage/punkte",1651228526),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","punkte","frage/punkte",1651228526)], null)),new cljs.core.Keyword("frage","typ","frage/typ",-1331093329),typ], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,new cljs.core.Keyword("frage.typ","text","frage.typ/text",2140567343)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frage","loesungskriterien","frage/loesungskriterien",-107931651),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","loesungskriterien","frage/loesungskriterien",-107931651)], null))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,new cljs.core.Keyword("frage.typ","single-choice","frage.typ/single-choice",435008084)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frage","choices","frage/choices",1490655378),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","choices","frage/choices",1490655378)], null)),new cljs.core.Keyword("frage","single-choice-loesung","frage/single-choice-loesung",-1762027571),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","single-choice-loesung","frage/single-choice-loesung",-1762027571)], null))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,new cljs.core.Keyword("frage.typ","multiple-choice","frage.typ/multiple-choice",-292709527)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frage","choices","frage/choices",1490655378),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","choices","frage/choices",1490655378)], null)),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201),(function (){var multiple_choice_lsg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frage","frage",1781615088),new cljs.core.Keyword("frage","multiple-choice-loesung","frage/multiple-choice-loesung",1252180201)], null));
if((multiple_choice_lsg == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.set(multiple_choice_lsg);
}
})()], null):null))));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frage], 0));
}));

//# sourceMappingURL=orga.frage_erstellen.events.js.map
