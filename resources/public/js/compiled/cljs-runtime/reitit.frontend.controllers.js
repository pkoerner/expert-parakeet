goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__54477,match){
var map__54478 = p__54477;
var map__54478__$1 = cljs.core.__destructure_map(map__54478);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__54485(s__54486){
return (new cljs.core.LazySeq(null,(function (){
var s__54486__$1 = s__54486;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__54486__$1);
if(temp__5804__auto__){
var s__54486__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54486__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__54486__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__54488 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__54487 = (0);
while(true){
if((i__54487 < size__5522__auto__)){
var vec__54495 = cljs.core._nth(c__5521__auto__,i__54487);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54495,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54495,(1),null);
cljs.core.chunk_append(b__54488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__54584 = (i__54487 + (1));
i__54487 = G__54584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54488),reitit$frontend$controllers$get_identity_$_iter__54485(cljs.core.chunk_rest(s__54486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54488),null);
}
} else {
var vec__54507 = cljs.core.first(s__54486__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54507,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__54485(cljs.core.rest(s__54486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__54519 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54519) : f.call(null,G__54519));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__54525_54600 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__54526_54601 = null;
var count__54527_54602 = (0);
var i__54528_54603 = (0);
while(true){
if((i__54528_54603 < count__54527_54602)){
var controller_54605 = chunk__54526_54601.cljs$core$IIndexed$_nth$arity$2(null,i__54528_54603);
reitit.frontend.controllers.apply_controller(controller_54605,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54606 = seq__54525_54600;
var G__54607 = chunk__54526_54601;
var G__54608 = count__54527_54602;
var G__54609 = (i__54528_54603 + (1));
seq__54525_54600 = G__54606;
chunk__54526_54601 = G__54607;
count__54527_54602 = G__54608;
i__54528_54603 = G__54609;
continue;
} else {
var temp__5804__auto___54610 = cljs.core.seq(seq__54525_54600);
if(temp__5804__auto___54610){
var seq__54525_54611__$1 = temp__5804__auto___54610;
if(cljs.core.chunked_seq_QMARK_(seq__54525_54611__$1)){
var c__5568__auto___54612 = cljs.core.chunk_first(seq__54525_54611__$1);
var G__54613 = cljs.core.chunk_rest(seq__54525_54611__$1);
var G__54614 = c__5568__auto___54612;
var G__54615 = cljs.core.count(c__5568__auto___54612);
var G__54616 = (0);
seq__54525_54600 = G__54613;
chunk__54526_54601 = G__54614;
count__54527_54602 = G__54615;
i__54528_54603 = G__54616;
continue;
} else {
var controller_54617 = cljs.core.first(seq__54525_54611__$1);
reitit.frontend.controllers.apply_controller(controller_54617,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__54618 = cljs.core.next(seq__54525_54611__$1);
var G__54619 = null;
var G__54620 = (0);
var G__54621 = (0);
seq__54525_54600 = G__54618;
chunk__54526_54601 = G__54619;
count__54527_54602 = G__54620;
i__54528_54603 = G__54621;
continue;
}
} else {
}
}
break;
}

var seq__54543_54622 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__54544_54623 = null;
var count__54545_54624 = (0);
var i__54546_54625 = (0);
while(true){
if((i__54546_54625 < count__54545_54624)){
var controller_54626 = chunk__54544_54623.cljs$core$IIndexed$_nth$arity$2(null,i__54546_54625);
reitit.frontend.controllers.apply_controller(controller_54626,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54629 = seq__54543_54622;
var G__54630 = chunk__54544_54623;
var G__54631 = count__54545_54624;
var G__54632 = (i__54546_54625 + (1));
seq__54543_54622 = G__54629;
chunk__54544_54623 = G__54630;
count__54545_54624 = G__54631;
i__54546_54625 = G__54632;
continue;
} else {
var temp__5804__auto___54639 = cljs.core.seq(seq__54543_54622);
if(temp__5804__auto___54639){
var seq__54543_54640__$1 = temp__5804__auto___54639;
if(cljs.core.chunked_seq_QMARK_(seq__54543_54640__$1)){
var c__5568__auto___54641 = cljs.core.chunk_first(seq__54543_54640__$1);
var G__54642 = cljs.core.chunk_rest(seq__54543_54640__$1);
var G__54643 = c__5568__auto___54641;
var G__54644 = cljs.core.count(c__5568__auto___54641);
var G__54645 = (0);
seq__54543_54622 = G__54642;
chunk__54544_54623 = G__54643;
count__54545_54624 = G__54644;
i__54546_54625 = G__54645;
continue;
} else {
var controller_54646 = cljs.core.first(seq__54543_54640__$1);
reitit.frontend.controllers.apply_controller(controller_54646,new cljs.core.Keyword(null,"start","start",-355208981));


var G__54647 = cljs.core.next(seq__54543_54640__$1);
var G__54648 = null;
var G__54649 = (0);
var G__54650 = (0);
seq__54543_54622 = G__54647;
chunk__54544_54623 = G__54648;
count__54545_54624 = G__54649;
i__54546_54625 = G__54650;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
