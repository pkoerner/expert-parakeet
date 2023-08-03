goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45222,res){
var map__45223 = p__45222;
var map__45223__$1 = cljs.core.__destructure_map(map__45223);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45223__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45223__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45224 = res;
var G__45224__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45224);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45224__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45224__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45231 = arguments.length;
switch (G__45231) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45276,msg,handlers,timeout_after_ms){
var map__45282 = p__45276;
var map__45282__$1 = cljs.core.__destructure_map(map__45282);
var runtime = map__45282__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45282__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45581 = arguments.length;
var i__5770__auto___45582 = (0);
while(true){
if((i__5770__auto___45582 < len__5769__auto___45581)){
args__5775__auto__.push((arguments[i__5770__auto___45582]));

var G__45583 = (i__5770__auto___45582 + (1));
i__5770__auto___45582 = G__45583;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45349,ev,args){
var map__45351 = p__45349;
var map__45351__$1 = cljs.core.__destructure_map(map__45351);
var runtime = map__45351__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45353 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45358 = null;
var count__45359 = (0);
var i__45360 = (0);
while(true){
if((i__45360 < count__45359)){
var ext = chunk__45358.cljs$core$IIndexed$_nth$arity$2(null,i__45360);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45590 = seq__45353;
var G__45591 = chunk__45358;
var G__45592 = count__45359;
var G__45593 = (i__45360 + (1));
seq__45353 = G__45590;
chunk__45358 = G__45591;
count__45359 = G__45592;
i__45360 = G__45593;
continue;
} else {
var G__45594 = seq__45353;
var G__45595 = chunk__45358;
var G__45596 = count__45359;
var G__45597 = (i__45360 + (1));
seq__45353 = G__45594;
chunk__45358 = G__45595;
count__45359 = G__45596;
i__45360 = G__45597;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45353);
if(temp__5804__auto__){
var seq__45353__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45353__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45353__$1);
var G__45598 = cljs.core.chunk_rest(seq__45353__$1);
var G__45599 = c__5568__auto__;
var G__45600 = cljs.core.count(c__5568__auto__);
var G__45601 = (0);
seq__45353 = G__45598;
chunk__45358 = G__45599;
count__45359 = G__45600;
i__45360 = G__45601;
continue;
} else {
var ext = cljs.core.first(seq__45353__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45603 = cljs.core.next(seq__45353__$1);
var G__45604 = null;
var G__45605 = (0);
var G__45606 = (0);
seq__45353 = G__45603;
chunk__45358 = G__45604;
count__45359 = G__45605;
i__45360 = G__45606;
continue;
} else {
var G__45608 = cljs.core.next(seq__45353__$1);
var G__45609 = null;
var G__45610 = (0);
var G__45611 = (0);
seq__45353 = G__45608;
chunk__45358 = G__45609;
count__45359 = G__45610;
i__45360 = G__45611;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45326){
var G__45327 = cljs.core.first(seq45326);
var seq45326__$1 = cljs.core.next(seq45326);
var G__45328 = cljs.core.first(seq45326__$1);
var seq45326__$2 = cljs.core.next(seq45326__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45327,G__45328,seq45326__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45409,p__45410){
var map__45412 = p__45409;
var map__45412__$1 = cljs.core.__destructure_map(map__45412);
var runtime = map__45412__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45412__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45413 = p__45410;
var map__45413__$1 = cljs.core.__destructure_map(map__45413);
var msg = map__45413__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45417 = cljs.core.deref(state_ref);
var map__45417__$1 = cljs.core.__destructure_map(map__45417);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45417__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45417__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45429){
var map__45430 = p__45429;
var map__45430__$1 = cljs.core.__destructure_map(map__45430);
var runtime = map__45430__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45430__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45435,msg){
var map__45436 = p__45435;
var map__45436__$1 = cljs.core.__destructure_map(map__45436);
var runtime = map__45436__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45436__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45448,key,p__45449){
var map__45450 = p__45448;
var map__45450__$1 = cljs.core.__destructure_map(map__45450);
var state = map__45450__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45451 = p__45449;
var map__45451__$1 = cljs.core.__destructure_map(map__45451);
var spec = map__45451__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45451__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45461,key,spec){
var map__45463 = p__45461;
var map__45463__$1 = cljs.core.__destructure_map(map__45463);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45463__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45466_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45466_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45467_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45467_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45469_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45469_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45470_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45470_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45471_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45471_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45486,key){
var map__45487 = p__45486;
var map__45487__$1 = cljs.core.__destructure_map(map__45487);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45487__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45499,msg){
var map__45502 = p__45499;
var map__45502__$1 = cljs.core.__destructure_map(map__45502);
var runtime = map__45502__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45502__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45513,p__45514){
var map__45516 = p__45513;
var map__45516__$1 = cljs.core.__destructure_map(map__45516);
var runtime = map__45516__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45516__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45517 = p__45514;
var map__45517__$1 = cljs.core.__destructure_map(map__45517);
var msg = map__45517__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45517__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45517__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45533 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45535 = null;
var count__45536 = (0);
var i__45537 = (0);
while(true){
if((i__45537 < count__45536)){
var map__45550 = chunk__45535.cljs$core$IIndexed$_nth$arity$2(null,i__45537);
var map__45550__$1 = cljs.core.__destructure_map(map__45550);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45550__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45649 = seq__45533;
var G__45650 = chunk__45535;
var G__45651 = count__45536;
var G__45652 = (i__45537 + (1));
seq__45533 = G__45649;
chunk__45535 = G__45650;
count__45536 = G__45651;
i__45537 = G__45652;
continue;
} else {
var G__45655 = seq__45533;
var G__45656 = chunk__45535;
var G__45657 = count__45536;
var G__45658 = (i__45537 + (1));
seq__45533 = G__45655;
chunk__45535 = G__45656;
count__45536 = G__45657;
i__45537 = G__45658;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45533);
if(temp__5804__auto__){
var seq__45533__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45533__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45533__$1);
var G__45660 = cljs.core.chunk_rest(seq__45533__$1);
var G__45661 = c__5568__auto__;
var G__45662 = cljs.core.count(c__5568__auto__);
var G__45663 = (0);
seq__45533 = G__45660;
chunk__45535 = G__45661;
count__45536 = G__45662;
i__45537 = G__45663;
continue;
} else {
var map__45557 = cljs.core.first(seq__45533__$1);
var map__45557__$1 = cljs.core.__destructure_map(map__45557);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45557__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45664 = cljs.core.next(seq__45533__$1);
var G__45665 = null;
var G__45666 = (0);
var G__45667 = (0);
seq__45533 = G__45664;
chunk__45535 = G__45665;
count__45536 = G__45666;
i__45537 = G__45667;
continue;
} else {
var G__45668 = cljs.core.next(seq__45533__$1);
var G__45669 = null;
var G__45670 = (0);
var G__45671 = (0);
seq__45533 = G__45668;
chunk__45535 = G__45669;
count__45536 = G__45670;
i__45537 = G__45671;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
