goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16722 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16723 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16723);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17046 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17046)){
var new_db_17047 = temp__5804__auto___17046;
var fexpr__16748_17048 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16748_17048.cljs$core$IFn$_invoke$arity$1 ? fexpr__16748_17048.cljs$core$IFn$_invoke$arity$1(new_db_17047) : fexpr__16748_17048.call(null,new_db_17047));
} else {
}

var seq__16750 = cljs.core.seq(effects_without_db);
var chunk__16751 = null;
var count__16752 = (0);
var i__16753 = (0);
while(true){
if((i__16753 < count__16752)){
var vec__16775 = chunk__16751.cljs$core$IIndexed$_nth$arity$2(null,i__16753);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(1),null);
var temp__5802__auto___17050 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17050)){
var effect_fn_17051 = temp__5802__auto___17050;
(effect_fn_17051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17051.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17052 = seq__16750;
var G__17053 = chunk__16751;
var G__17054 = count__16752;
var G__17055 = (i__16753 + (1));
seq__16750 = G__17052;
chunk__16751 = G__17053;
count__16752 = G__17054;
i__16753 = G__17055;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16750);
if(temp__5804__auto__){
var seq__16750__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16750__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16750__$1);
var G__17058 = cljs.core.chunk_rest(seq__16750__$1);
var G__17059 = c__5568__auto__;
var G__17060 = cljs.core.count(c__5568__auto__);
var G__17061 = (0);
seq__16750 = G__17058;
chunk__16751 = G__17059;
count__16752 = G__17060;
i__16753 = G__17061;
continue;
} else {
var vec__16787 = cljs.core.first(seq__16750__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(1),null);
var temp__5802__auto___17068 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17068)){
var effect_fn_17069 = temp__5802__auto___17068;
(effect_fn_17069.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17069.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17069.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17070 = cljs.core.next(seq__16750__$1);
var G__17071 = null;
var G__17072 = (0);
var G__17073 = (0);
seq__16750 = G__17070;
chunk__16751 = G__17071;
count__16752 = G__17072;
i__16753 = G__17073;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15861__auto___17074 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15862__auto___17075 = (end__15861__auto___17074 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15862__auto___17075,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15861__auto___17074);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16722);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17076 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17076)){
var new_db_17078 = temp__5804__auto___17076;
var fexpr__16796_17079 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16796_17079.cljs$core$IFn$_invoke$arity$1 ? fexpr__16796_17079.cljs$core$IFn$_invoke$arity$1(new_db_17078) : fexpr__16796_17079.call(null,new_db_17078));
} else {
}

var seq__16797 = cljs.core.seq(effects_without_db);
var chunk__16798 = null;
var count__16799 = (0);
var i__16800 = (0);
while(true){
if((i__16800 < count__16799)){
var vec__16816 = chunk__16798.cljs$core$IIndexed$_nth$arity$2(null,i__16800);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16816,(1),null);
var temp__5802__auto___17080 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17080)){
var effect_fn_17081 = temp__5802__auto___17080;
(effect_fn_17081.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17081.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17081.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17082 = seq__16797;
var G__17083 = chunk__16798;
var G__17084 = count__16799;
var G__17085 = (i__16800 + (1));
seq__16797 = G__17082;
chunk__16798 = G__17083;
count__16799 = G__17084;
i__16800 = G__17085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16797);
if(temp__5804__auto__){
var seq__16797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16797__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16797__$1);
var G__17086 = cljs.core.chunk_rest(seq__16797__$1);
var G__17087 = c__5568__auto__;
var G__17088 = cljs.core.count(c__5568__auto__);
var G__17089 = (0);
seq__16797 = G__17086;
chunk__16798 = G__17087;
count__16799 = G__17088;
i__16800 = G__17089;
continue;
} else {
var vec__16822 = cljs.core.first(seq__16797__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16822,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16822,(1),null);
var temp__5802__auto___17090 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17090)){
var effect_fn_17091 = temp__5802__auto___17090;
(effect_fn_17091.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17091.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17091.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17094 = cljs.core.next(seq__16797__$1);
var G__17095 = null;
var G__17096 = (0);
var G__17097 = (0);
seq__16797 = G__17094;
chunk__16798 = G__17095;
count__16799 = G__17096;
i__16800 = G__17097;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16867){
var map__16869 = p__16867;
var map__16869__$1 = cljs.core.__destructure_map(map__16869);
var effect = map__16869__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16869__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__16893 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16894 = null;
var count__16895 = (0);
var i__16896 = (0);
while(true){
if((i__16896 < count__16895)){
var effect = chunk__16894.cljs$core$IIndexed$_nth$arity$2(null,i__16896);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__17103 = seq__16893;
var G__17104 = chunk__16894;
var G__17105 = count__16895;
var G__17106 = (i__16896 + (1));
seq__16893 = G__17103;
chunk__16894 = G__17104;
count__16895 = G__17105;
i__16896 = G__17106;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16893);
if(temp__5804__auto__){
var seq__16893__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16893__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16893__$1);
var G__17108 = cljs.core.chunk_rest(seq__16893__$1);
var G__17109 = c__5568__auto__;
var G__17110 = cljs.core.count(c__5568__auto__);
var G__17111 = (0);
seq__16893 = G__17108;
chunk__16894 = G__17109;
count__16895 = G__17110;
i__16896 = G__17111;
continue;
} else {
var effect = cljs.core.first(seq__16893__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__17112 = cljs.core.next(seq__16893__$1);
var G__17113 = null;
var G__17114 = (0);
var G__17115 = (0);
seq__16893 = G__17112;
chunk__16894 = G__17113;
count__16895 = G__17114;
i__16896 = G__17115;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16937 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16938 = null;
var count__16939 = (0);
var i__16940 = (0);
while(true){
if((i__16940 < count__16939)){
var vec__16969 = chunk__16938.cljs$core$IIndexed$_nth$arity$2(null,i__16940);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16969,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16969,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17117 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17117)){
var effect_fn_17118 = temp__5802__auto___17117;
(effect_fn_17118.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17118.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17118.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17119 = seq__16937;
var G__17120 = chunk__16938;
var G__17121 = count__16939;
var G__17122 = (i__16940 + (1));
seq__16937 = G__17119;
chunk__16938 = G__17120;
count__16939 = G__17121;
i__16940 = G__17122;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16937);
if(temp__5804__auto__){
var seq__16937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16937__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16937__$1);
var G__17128 = cljs.core.chunk_rest(seq__16937__$1);
var G__17129 = c__5568__auto__;
var G__17130 = cljs.core.count(c__5568__auto__);
var G__17131 = (0);
seq__16937 = G__17128;
chunk__16938 = G__17129;
count__16939 = G__17130;
i__16940 = G__17131;
continue;
} else {
var vec__16995 = cljs.core.first(seq__16937__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16995,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17133 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17133)){
var effect_fn_17134 = temp__5802__auto___17133;
(effect_fn_17134.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17134.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17134.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17136 = cljs.core.next(seq__16937__$1);
var G__17137 = null;
var G__17138 = (0);
var G__17139 = (0);
seq__16937 = G__17136;
chunk__16938 = G__17137;
count__16939 = G__17138;
i__16940 = G__17139;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__17015 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17016 = null;
var count__17017 = (0);
var i__17018 = (0);
while(true){
if((i__17018 < count__17017)){
var event = chunk__17016.cljs$core$IIndexed$_nth$arity$2(null,i__17018);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__17141 = seq__17015;
var G__17142 = chunk__17016;
var G__17143 = count__17017;
var G__17144 = (i__17018 + (1));
seq__17015 = G__17141;
chunk__17016 = G__17142;
count__17017 = G__17143;
i__17018 = G__17144;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17015);
if(temp__5804__auto__){
var seq__17015__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17015__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17015__$1);
var G__17145 = cljs.core.chunk_rest(seq__17015__$1);
var G__17146 = c__5568__auto__;
var G__17147 = cljs.core.count(c__5568__auto__);
var G__17148 = (0);
seq__17015 = G__17145;
chunk__17016 = G__17146;
count__17017 = G__17147;
i__17018 = G__17148;
continue;
} else {
var event = cljs.core.first(seq__17015__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__17149 = cljs.core.next(seq__17015__$1);
var G__17150 = null;
var G__17151 = (0);
var G__17152 = (0);
seq__17015 = G__17149;
chunk__17016 = G__17150;
count__17017 = G__17151;
i__17018 = G__17152;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__17035 = cljs.core.seq(value);
var chunk__17036 = null;
var count__17037 = (0);
var i__17038 = (0);
while(true){
if((i__17038 < count__17037)){
var event = chunk__17036.cljs$core$IIndexed$_nth$arity$2(null,i__17038);
clear_event(event);


var G__17153 = seq__17035;
var G__17154 = chunk__17036;
var G__17155 = count__17037;
var G__17156 = (i__17038 + (1));
seq__17035 = G__17153;
chunk__17036 = G__17154;
count__17037 = G__17155;
i__17038 = G__17156;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17035);
if(temp__5804__auto__){
var seq__17035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17035__$1);
var G__17158 = cljs.core.chunk_rest(seq__17035__$1);
var G__17159 = c__5568__auto__;
var G__17160 = cljs.core.count(c__5568__auto__);
var G__17161 = (0);
seq__17035 = G__17158;
chunk__17036 = G__17159;
count__17037 = G__17160;
i__17038 = G__17161;
continue;
} else {
var event = cljs.core.first(seq__17035__$1);
clear_event(event);


var G__17163 = cljs.core.next(seq__17035__$1);
var G__17164 = null;
var G__17165 = (0);
var G__17166 = (0);
seq__17035 = G__17163;
chunk__17036 = G__17164;
count__17037 = G__17165;
i__17038 = G__17166;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
