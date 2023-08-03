goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20999 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21000 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21000);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___21259 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___21259)){
var new_db_21260 = temp__5804__auto___21259;
var fexpr__21017_21261 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21017_21261.cljs$core$IFn$_invoke$arity$1 ? fexpr__21017_21261.cljs$core$IFn$_invoke$arity$1(new_db_21260) : fexpr__21017_21261.call(null,new_db_21260));
} else {
}

var seq__21018 = cljs.core.seq(effects_without_db);
var chunk__21019 = null;
var count__21020 = (0);
var i__21021 = (0);
while(true){
if((i__21021 < count__21020)){
var vec__21045 = chunk__21019.cljs$core$IIndexed$_nth$arity$2(null,i__21021);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(1),null);
var temp__5802__auto___21264 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21264)){
var effect_fn_21265 = temp__5802__auto___21264;
(effect_fn_21265.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21265.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21265.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21267 = seq__21018;
var G__21268 = chunk__21019;
var G__21269 = count__21020;
var G__21270 = (i__21021 + (1));
seq__21018 = G__21267;
chunk__21019 = G__21268;
count__21020 = G__21269;
i__21021 = G__21270;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21018);
if(temp__5804__auto__){
var seq__21018__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21018__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21018__$1);
var G__21271 = cljs.core.chunk_rest(seq__21018__$1);
var G__21272 = c__5568__auto__;
var G__21273 = cljs.core.count(c__5568__auto__);
var G__21274 = (0);
seq__21018 = G__21271;
chunk__21019 = G__21272;
count__21020 = G__21273;
i__21021 = G__21274;
continue;
} else {
var vec__21057 = cljs.core.first(seq__21018__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21057,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21057,(1),null);
var temp__5802__auto___21275 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21275)){
var effect_fn_21276 = temp__5802__auto___21275;
(effect_fn_21276.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21276.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21276.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21277 = cljs.core.next(seq__21018__$1);
var G__21278 = null;
var G__21279 = (0);
var G__21280 = (0);
seq__21018 = G__21277;
chunk__21019 = G__21278;
count__21020 = G__21279;
i__21021 = G__21280;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20202__auto___21281 = re_frame.interop.now();
var duration__20203__auto___21282 = (end__20202__auto___21281 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20203__auto___21282,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20202__auto___21281);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20999);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___21285 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___21285)){
var new_db_21286 = temp__5804__auto___21285;
var fexpr__21066_21287 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21066_21287.cljs$core$IFn$_invoke$arity$1 ? fexpr__21066_21287.cljs$core$IFn$_invoke$arity$1(new_db_21286) : fexpr__21066_21287.call(null,new_db_21286));
} else {
}

var seq__21070 = cljs.core.seq(effects_without_db);
var chunk__21071 = null;
var count__21072 = (0);
var i__21073 = (0);
while(true){
if((i__21073 < count__21072)){
var vec__21093 = chunk__21071.cljs$core$IIndexed$_nth$arity$2(null,i__21073);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21093,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21093,(1),null);
var temp__5802__auto___21289 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21289)){
var effect_fn_21290 = temp__5802__auto___21289;
(effect_fn_21290.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21290.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21290.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21291 = seq__21070;
var G__21292 = chunk__21071;
var G__21293 = count__21072;
var G__21294 = (i__21073 + (1));
seq__21070 = G__21291;
chunk__21071 = G__21292;
count__21072 = G__21293;
i__21073 = G__21294;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21070);
if(temp__5804__auto__){
var seq__21070__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21070__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21070__$1);
var G__21301 = cljs.core.chunk_rest(seq__21070__$1);
var G__21302 = c__5568__auto__;
var G__21303 = cljs.core.count(c__5568__auto__);
var G__21304 = (0);
seq__21070 = G__21301;
chunk__21071 = G__21302;
count__21072 = G__21303;
i__21073 = G__21304;
continue;
} else {
var vec__21102 = cljs.core.first(seq__21070__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21102,(1),null);
var temp__5802__auto___21311 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21311)){
var effect_fn_21312 = temp__5802__auto___21311;
(effect_fn_21312.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21312.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21312.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21313 = cljs.core.next(seq__21070__$1);
var G__21314 = null;
var G__21315 = (0);
var G__21316 = (0);
seq__21070 = G__21313;
chunk__21071 = G__21314;
count__21072 = G__21315;
i__21073 = G__21316;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21115){
var map__21116 = p__21115;
var map__21116__$1 = cljs.core.__destructure_map(map__21116);
var effect = map__21116__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__21127 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21128 = null;
var count__21129 = (0);
var i__21130 = (0);
while(true){
if((i__21130 < count__21129)){
var effect = chunk__21128.cljs$core$IIndexed$_nth$arity$2(null,i__21130);
re_frame.fx.dispatch_later(effect);


var G__21317 = seq__21127;
var G__21318 = chunk__21128;
var G__21319 = count__21129;
var G__21320 = (i__21130 + (1));
seq__21127 = G__21317;
chunk__21128 = G__21318;
count__21129 = G__21319;
i__21130 = G__21320;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21127);
if(temp__5804__auto__){
var seq__21127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21127__$1);
var G__21321 = cljs.core.chunk_rest(seq__21127__$1);
var G__21322 = c__5568__auto__;
var G__21323 = cljs.core.count(c__5568__auto__);
var G__21324 = (0);
seq__21127 = G__21321;
chunk__21128 = G__21322;
count__21129 = G__21323;
i__21130 = G__21324;
continue;
} else {
var effect = cljs.core.first(seq__21127__$1);
re_frame.fx.dispatch_later(effect);


var G__21325 = cljs.core.next(seq__21127__$1);
var G__21326 = null;
var G__21327 = (0);
var G__21328 = (0);
seq__21127 = G__21325;
chunk__21128 = G__21326;
count__21129 = G__21327;
i__21130 = G__21328;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21149 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21150 = null;
var count__21151 = (0);
var i__21152 = (0);
while(true){
if((i__21152 < count__21151)){
var vec__21187 = chunk__21150.cljs$core$IIndexed$_nth$arity$2(null,i__21152);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___21331 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21331)){
var effect_fn_21332 = temp__5802__auto___21331;
(effect_fn_21332.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21332.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21332.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21333 = seq__21149;
var G__21334 = chunk__21150;
var G__21335 = count__21151;
var G__21336 = (i__21152 + (1));
seq__21149 = G__21333;
chunk__21150 = G__21334;
count__21151 = G__21335;
i__21152 = G__21336;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21149);
if(temp__5804__auto__){
var seq__21149__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21149__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21149__$1);
var G__21337 = cljs.core.chunk_rest(seq__21149__$1);
var G__21338 = c__5568__auto__;
var G__21339 = cljs.core.count(c__5568__auto__);
var G__21340 = (0);
seq__21149 = G__21337;
chunk__21150 = G__21338;
count__21151 = G__21339;
i__21152 = G__21340;
continue;
} else {
var vec__21205 = cljs.core.first(seq__21149__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21205,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21205,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___21341 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___21341)){
var effect_fn_21342 = temp__5802__auto___21341;
(effect_fn_21342.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21342.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21342.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21343 = cljs.core.next(seq__21149__$1);
var G__21344 = null;
var G__21345 = (0);
var G__21346 = (0);
seq__21149 = G__21343;
chunk__21150 = G__21344;
count__21151 = G__21345;
i__21152 = G__21346;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21222 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21223 = null;
var count__21224 = (0);
var i__21225 = (0);
while(true){
if((i__21225 < count__21224)){
var event = chunk__21223.cljs$core$IIndexed$_nth$arity$2(null,i__21225);
re_frame.router.dispatch(event);


var G__21349 = seq__21222;
var G__21350 = chunk__21223;
var G__21351 = count__21224;
var G__21352 = (i__21225 + (1));
seq__21222 = G__21349;
chunk__21223 = G__21350;
count__21224 = G__21351;
i__21225 = G__21352;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21222);
if(temp__5804__auto__){
var seq__21222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21222__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21222__$1);
var G__21353 = cljs.core.chunk_rest(seq__21222__$1);
var G__21354 = c__5568__auto__;
var G__21355 = cljs.core.count(c__5568__auto__);
var G__21356 = (0);
seq__21222 = G__21353;
chunk__21223 = G__21354;
count__21224 = G__21355;
i__21225 = G__21356;
continue;
} else {
var event = cljs.core.first(seq__21222__$1);
re_frame.router.dispatch(event);


var G__21357 = cljs.core.next(seq__21222__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__21222 = G__21357;
chunk__21223 = G__21358;
count__21224 = G__21359;
i__21225 = G__21360;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21235 = cljs.core.seq(value);
var chunk__21236 = null;
var count__21237 = (0);
var i__21238 = (0);
while(true){
if((i__21238 < count__21237)){
var event = chunk__21236.cljs$core$IIndexed$_nth$arity$2(null,i__21238);
clear_event(event);


var G__21361 = seq__21235;
var G__21362 = chunk__21236;
var G__21363 = count__21237;
var G__21364 = (i__21238 + (1));
seq__21235 = G__21361;
chunk__21236 = G__21362;
count__21237 = G__21363;
i__21238 = G__21364;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21235);
if(temp__5804__auto__){
var seq__21235__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21235__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21235__$1);
var G__21365 = cljs.core.chunk_rest(seq__21235__$1);
var G__21366 = c__5568__auto__;
var G__21367 = cljs.core.count(c__5568__auto__);
var G__21368 = (0);
seq__21235 = G__21365;
chunk__21236 = G__21366;
count__21237 = G__21367;
i__21238 = G__21368;
continue;
} else {
var event = cljs.core.first(seq__21235__$1);
clear_event(event);


var G__21369 = cljs.core.next(seq__21235__$1);
var G__21370 = null;
var G__21371 = (0);
var G__21372 = (0);
seq__21235 = G__21369;
chunk__21236 = G__21370;
count__21237 = G__21371;
i__21238 = G__21372;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
