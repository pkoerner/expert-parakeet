goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20227){
var map__20228 = p__20227;
var map__20228__$1 = cljs.core.__destructure_map(map__20228);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__20238_20273 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20239_20274 = null;
var count__20240_20275 = (0);
var i__20241_20276 = (0);
while(true){
if((i__20241_20276 < count__20240_20275)){
var vec__20255_20277 = chunk__20239_20274.cljs$core$IIndexed$_nth$arity$2(null,i__20241_20276);
var k_20278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255_20277,(0),null);
var cb_20279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255_20277,(1),null);
try{var G__20259_20280 = cljs.core.deref(re_frame.trace.traces);
(cb_20279.cljs$core$IFn$_invoke$arity$1 ? cb_20279.cljs$core$IFn$_invoke$arity$1(G__20259_20280) : cb_20279.call(null,G__20259_20280));
}catch (e20258){var e_20281 = e20258;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20278,"while storing",cljs.core.deref(re_frame.trace.traces),e_20281], 0));
}

var G__20282 = seq__20238_20273;
var G__20283 = chunk__20239_20274;
var G__20284 = count__20240_20275;
var G__20285 = (i__20241_20276 + (1));
seq__20238_20273 = G__20282;
chunk__20239_20274 = G__20283;
count__20240_20275 = G__20284;
i__20241_20276 = G__20285;
continue;
} else {
var temp__5804__auto___20286 = cljs.core.seq(seq__20238_20273);
if(temp__5804__auto___20286){
var seq__20238_20287__$1 = temp__5804__auto___20286;
if(cljs.core.chunked_seq_QMARK_(seq__20238_20287__$1)){
var c__5568__auto___20288 = cljs.core.chunk_first(seq__20238_20287__$1);
var G__20289 = cljs.core.chunk_rest(seq__20238_20287__$1);
var G__20290 = c__5568__auto___20288;
var G__20291 = cljs.core.count(c__5568__auto___20288);
var G__20292 = (0);
seq__20238_20273 = G__20289;
chunk__20239_20274 = G__20290;
count__20240_20275 = G__20291;
i__20241_20276 = G__20292;
continue;
} else {
var vec__20260_20293 = cljs.core.first(seq__20238_20287__$1);
var k_20294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20260_20293,(0),null);
var cb_20295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20260_20293,(1),null);
try{var G__20264_20297 = cljs.core.deref(re_frame.trace.traces);
(cb_20295.cljs$core$IFn$_invoke$arity$1 ? cb_20295.cljs$core$IFn$_invoke$arity$1(G__20264_20297) : cb_20295.call(null,G__20264_20297));
}catch (e20263){var e_20298 = e20263;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20294,"while storing",cljs.core.deref(re_frame.trace.traces),e_20298], 0));
}

var G__20299 = cljs.core.next(seq__20238_20287__$1);
var G__20300 = null;
var G__20301 = (0);
var G__20302 = (0);
seq__20238_20273 = G__20299;
chunk__20239_20274 = G__20300;
count__20240_20275 = G__20301;
i__20241_20276 = G__20302;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
