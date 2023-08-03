goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51120 = arguments.length;
var i__5770__auto___51121 = (0);
while(true){
if((i__5770__auto___51121 < len__5769__auto___51120)){
args__5775__auto__.push((arguments[i__5770__auto___51121]));

var G__51122 = (i__5770__auto___51121 + (1));
i__5770__auto___51121 = G__51122;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50533){
var G__50535 = cljs.core.first(seq50533);
var seq50533__$1 = cljs.core.next(seq50533);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50535,seq50533__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50587 = cljs.core.seq(sources);
var chunk__50588 = null;
var count__50589 = (0);
var i__50590 = (0);
while(true){
if((i__50590 < count__50589)){
var map__50629 = chunk__50588.cljs$core$IIndexed$_nth$arity$2(null,i__50590);
var map__50629__$1 = cljs.core.__destructure_map(map__50629);
var src = map__50629__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50629__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50629__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50629__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50629__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50637){var e_51124 = e50637;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51124);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51124.message)].join('')));
}

var G__51125 = seq__50587;
var G__51126 = chunk__50588;
var G__51127 = count__50589;
var G__51128 = (i__50590 + (1));
seq__50587 = G__51125;
chunk__50588 = G__51126;
count__50589 = G__51127;
i__50590 = G__51128;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50587);
if(temp__5804__auto__){
var seq__50587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50587__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50587__$1);
var G__51130 = cljs.core.chunk_rest(seq__50587__$1);
var G__51131 = c__5568__auto__;
var G__51132 = cljs.core.count(c__5568__auto__);
var G__51133 = (0);
seq__50587 = G__51130;
chunk__50588 = G__51131;
count__50589 = G__51132;
i__50590 = G__51133;
continue;
} else {
var map__50645 = cljs.core.first(seq__50587__$1);
var map__50645__$1 = cljs.core.__destructure_map(map__50645);
var src = map__50645__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50645__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50647){var e_51134 = e50647;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51134);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51134.message)].join('')));
}

var G__51135 = cljs.core.next(seq__50587__$1);
var G__51136 = null;
var G__51137 = (0);
var G__51138 = (0);
seq__50587 = G__51135;
chunk__50588 = G__51136;
count__50589 = G__51137;
i__50590 = G__51138;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50656 = cljs.core.seq(js_requires);
var chunk__50657 = null;
var count__50658 = (0);
var i__50659 = (0);
while(true){
if((i__50659 < count__50658)){
var js_ns = chunk__50657.cljs$core$IIndexed$_nth$arity$2(null,i__50659);
var require_str_51139 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51139);


var G__51140 = seq__50656;
var G__51141 = chunk__50657;
var G__51142 = count__50658;
var G__51143 = (i__50659 + (1));
seq__50656 = G__51140;
chunk__50657 = G__51141;
count__50658 = G__51142;
i__50659 = G__51143;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50656);
if(temp__5804__auto__){
var seq__50656__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50656__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50656__$1);
var G__51144 = cljs.core.chunk_rest(seq__50656__$1);
var G__51145 = c__5568__auto__;
var G__51146 = cljs.core.count(c__5568__auto__);
var G__51147 = (0);
seq__50656 = G__51144;
chunk__50657 = G__51145;
count__50658 = G__51146;
i__50659 = G__51147;
continue;
} else {
var js_ns = cljs.core.first(seq__50656__$1);
var require_str_51148 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51148);


var G__51149 = cljs.core.next(seq__50656__$1);
var G__51150 = null;
var G__51151 = (0);
var G__51152 = (0);
seq__50656 = G__51149;
chunk__50657 = G__51150;
count__50658 = G__51151;
i__50659 = G__51152;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50663){
var map__50664 = p__50663;
var map__50664__$1 = cljs.core.__destructure_map(map__50664);
var msg = map__50664__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50665(s__50666){
return (new cljs.core.LazySeq(null,(function (){
var s__50666__$1 = s__50666;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50666__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__50671 = cljs.core.first(xs__6360__auto__);
var map__50671__$1 = cljs.core.__destructure_map(map__50671);
var src = map__50671__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__50666__$1,map__50671,map__50671__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50664,map__50664__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50665_$_iter__50667(s__50668){
return (new cljs.core.LazySeq(null,((function (s__50666__$1,map__50671,map__50671__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50664,map__50664__$1,msg,info,reload_info){
return (function (){
var s__50668__$1 = s__50668;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__50668__$1);
if(temp__5804__auto____$1){
var s__50668__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50668__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50668__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50670 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50669 = (0);
while(true){
if((i__50669 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__50669);
cljs.core.chunk_append(b__50670,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51153 = (i__50669 + (1));
i__50669 = G__51153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50670),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50665_$_iter__50667(cljs.core.chunk_rest(s__50668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50670),null);
}
} else {
var warning = cljs.core.first(s__50668__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50665_$_iter__50667(cljs.core.rest(s__50668__$2)));
}
} else {
return null;
}
break;
}
});})(s__50666__$1,map__50671,map__50671__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50664,map__50664__$1,msg,info,reload_info))
,null,null));
});})(s__50666__$1,map__50671,map__50671__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50664,map__50664__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50665(cljs.core.rest(s__50666__$1)));
} else {
var G__51154 = cljs.core.rest(s__50666__$1);
s__50666__$1 = G__51154;
continue;
}
} else {
var G__51155 = cljs.core.rest(s__50666__$1);
s__50666__$1 = G__51155;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50673_51156 = cljs.core.seq(warnings);
var chunk__50674_51157 = null;
var count__50675_51158 = (0);
var i__50676_51159 = (0);
while(true){
if((i__50676_51159 < count__50675_51158)){
var map__50681_51160 = chunk__50674_51157.cljs$core$IIndexed$_nth$arity$2(null,i__50676_51159);
var map__50681_51161__$1 = cljs.core.__destructure_map(map__50681_51160);
var w_51162 = map__50681_51161__$1;
var msg_51163__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681_51161__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681_51161__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681_51161__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50681_51161__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51166)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51164),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51165),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51163__$1)].join(''));


var G__51167 = seq__50673_51156;
var G__51168 = chunk__50674_51157;
var G__51169 = count__50675_51158;
var G__51170 = (i__50676_51159 + (1));
seq__50673_51156 = G__51167;
chunk__50674_51157 = G__51168;
count__50675_51158 = G__51169;
i__50676_51159 = G__51170;
continue;
} else {
var temp__5804__auto___51171 = cljs.core.seq(seq__50673_51156);
if(temp__5804__auto___51171){
var seq__50673_51172__$1 = temp__5804__auto___51171;
if(cljs.core.chunked_seq_QMARK_(seq__50673_51172__$1)){
var c__5568__auto___51173 = cljs.core.chunk_first(seq__50673_51172__$1);
var G__51174 = cljs.core.chunk_rest(seq__50673_51172__$1);
var G__51175 = c__5568__auto___51173;
var G__51176 = cljs.core.count(c__5568__auto___51173);
var G__51177 = (0);
seq__50673_51156 = G__51174;
chunk__50674_51157 = G__51175;
count__50675_51158 = G__51176;
i__50676_51159 = G__51177;
continue;
} else {
var map__50684_51178 = cljs.core.first(seq__50673_51172__$1);
var map__50684_51179__$1 = cljs.core.__destructure_map(map__50684_51178);
var w_51180 = map__50684_51179__$1;
var msg_51181__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684_51179__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684_51179__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684_51179__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50684_51179__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51184)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51182),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51183),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51181__$1)].join(''));


var G__51185 = cljs.core.next(seq__50673_51172__$1);
var G__51186 = null;
var G__51187 = (0);
var G__51188 = (0);
seq__50673_51156 = G__51185;
chunk__50674_51157 = G__51186;
count__50675_51158 = G__51187;
i__50676_51159 = G__51188;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50662_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50662_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50697){
var map__50701 = p__50697;
var map__50701__$1 = cljs.core.__destructure_map(map__50701);
var msg = map__50701__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50701__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50701__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50702 = cljs.core.seq(updates);
var chunk__50704 = null;
var count__50705 = (0);
var i__50706 = (0);
while(true){
if((i__50706 < count__50705)){
var path = chunk__50704.cljs$core$IIndexed$_nth$arity$2(null,i__50706);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50877_51189 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50881_51190 = null;
var count__50882_51191 = (0);
var i__50883_51192 = (0);
while(true){
if((i__50883_51192 < count__50882_51191)){
var node_51193 = chunk__50881_51190.cljs$core$IIndexed$_nth$arity$2(null,i__50883_51192);
if(cljs.core.not(node_51193.shadow$old)){
var path_match_51194 = shadow.cljs.devtools.client.browser.match_paths(node_51193.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51194)){
var new_link_51195 = (function (){var G__50942 = node_51193.cloneNode(true);
G__50942.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51194),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50942;
})();
(node_51193.shadow$old = true);

(new_link_51195.onload = ((function (seq__50877_51189,chunk__50881_51190,count__50882_51191,i__50883_51192,seq__50702,chunk__50704,count__50705,i__50706,new_link_51195,path_match_51194,node_51193,path,map__50701,map__50701__$1,msg,updates,reload_info){
return (function (e){
var seq__50946_51198 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50948_51199 = null;
var count__50949_51200 = (0);
var i__50950_51201 = (0);
while(true){
if((i__50950_51201 < count__50949_51200)){
var map__50959_51206 = chunk__50948_51199.cljs$core$IIndexed$_nth$arity$2(null,i__50950_51201);
var map__50959_51207__$1 = cljs.core.__destructure_map(map__50959_51206);
var task_51208 = map__50959_51207__$1;
var fn_str_51209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50959_51207__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50959_51207__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51211 = goog.getObjectByName(fn_str_51209,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51210)].join(''));

(fn_obj_51211.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51211.cljs$core$IFn$_invoke$arity$2(path,new_link_51195) : fn_obj_51211.call(null,path,new_link_51195));


var G__51213 = seq__50946_51198;
var G__51214 = chunk__50948_51199;
var G__51215 = count__50949_51200;
var G__51216 = (i__50950_51201 + (1));
seq__50946_51198 = G__51213;
chunk__50948_51199 = G__51214;
count__50949_51200 = G__51215;
i__50950_51201 = G__51216;
continue;
} else {
var temp__5804__auto___51217 = cljs.core.seq(seq__50946_51198);
if(temp__5804__auto___51217){
var seq__50946_51218__$1 = temp__5804__auto___51217;
if(cljs.core.chunked_seq_QMARK_(seq__50946_51218__$1)){
var c__5568__auto___51219 = cljs.core.chunk_first(seq__50946_51218__$1);
var G__51220 = cljs.core.chunk_rest(seq__50946_51218__$1);
var G__51221 = c__5568__auto___51219;
var G__51222 = cljs.core.count(c__5568__auto___51219);
var G__51223 = (0);
seq__50946_51198 = G__51220;
chunk__50948_51199 = G__51221;
count__50949_51200 = G__51222;
i__50950_51201 = G__51223;
continue;
} else {
var map__50963_51224 = cljs.core.first(seq__50946_51218__$1);
var map__50963_51225__$1 = cljs.core.__destructure_map(map__50963_51224);
var task_51226 = map__50963_51225__$1;
var fn_str_51227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963_51225__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963_51225__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51229 = goog.getObjectByName(fn_str_51227,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51228)].join(''));

(fn_obj_51229.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51229.cljs$core$IFn$_invoke$arity$2(path,new_link_51195) : fn_obj_51229.call(null,path,new_link_51195));


var G__51230 = cljs.core.next(seq__50946_51218__$1);
var G__51231 = null;
var G__51232 = (0);
var G__51233 = (0);
seq__50946_51198 = G__51230;
chunk__50948_51199 = G__51231;
count__50949_51200 = G__51232;
i__50950_51201 = G__51233;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51193);
});})(seq__50877_51189,chunk__50881_51190,count__50882_51191,i__50883_51192,seq__50702,chunk__50704,count__50705,i__50706,new_link_51195,path_match_51194,node_51193,path,map__50701,map__50701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51194], 0));

goog.dom.insertSiblingAfter(new_link_51195,node_51193);


var G__51234 = seq__50877_51189;
var G__51235 = chunk__50881_51190;
var G__51236 = count__50882_51191;
var G__51237 = (i__50883_51192 + (1));
seq__50877_51189 = G__51234;
chunk__50881_51190 = G__51235;
count__50882_51191 = G__51236;
i__50883_51192 = G__51237;
continue;
} else {
var G__51238 = seq__50877_51189;
var G__51239 = chunk__50881_51190;
var G__51240 = count__50882_51191;
var G__51241 = (i__50883_51192 + (1));
seq__50877_51189 = G__51238;
chunk__50881_51190 = G__51239;
count__50882_51191 = G__51240;
i__50883_51192 = G__51241;
continue;
}
} else {
var G__51242 = seq__50877_51189;
var G__51243 = chunk__50881_51190;
var G__51244 = count__50882_51191;
var G__51245 = (i__50883_51192 + (1));
seq__50877_51189 = G__51242;
chunk__50881_51190 = G__51243;
count__50882_51191 = G__51244;
i__50883_51192 = G__51245;
continue;
}
} else {
var temp__5804__auto___51246 = cljs.core.seq(seq__50877_51189);
if(temp__5804__auto___51246){
var seq__50877_51247__$1 = temp__5804__auto___51246;
if(cljs.core.chunked_seq_QMARK_(seq__50877_51247__$1)){
var c__5568__auto___51248 = cljs.core.chunk_first(seq__50877_51247__$1);
var G__51249 = cljs.core.chunk_rest(seq__50877_51247__$1);
var G__51250 = c__5568__auto___51248;
var G__51251 = cljs.core.count(c__5568__auto___51248);
var G__51252 = (0);
seq__50877_51189 = G__51249;
chunk__50881_51190 = G__51250;
count__50882_51191 = G__51251;
i__50883_51192 = G__51252;
continue;
} else {
var node_51253 = cljs.core.first(seq__50877_51247__$1);
if(cljs.core.not(node_51253.shadow$old)){
var path_match_51254 = shadow.cljs.devtools.client.browser.match_paths(node_51253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51254)){
var new_link_51255 = (function (){var G__50968 = node_51253.cloneNode(true);
G__50968.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51254),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50968;
})();
(node_51253.shadow$old = true);

(new_link_51255.onload = ((function (seq__50877_51189,chunk__50881_51190,count__50882_51191,i__50883_51192,seq__50702,chunk__50704,count__50705,i__50706,new_link_51255,path_match_51254,node_51253,seq__50877_51247__$1,temp__5804__auto___51246,path,map__50701,map__50701__$1,msg,updates,reload_info){
return (function (e){
var seq__50973_51256 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50975_51257 = null;
var count__50976_51258 = (0);
var i__50977_51259 = (0);
while(true){
if((i__50977_51259 < count__50976_51258)){
var map__50982_51260 = chunk__50975_51257.cljs$core$IIndexed$_nth$arity$2(null,i__50977_51259);
var map__50982_51261__$1 = cljs.core.__destructure_map(map__50982_51260);
var task_51262 = map__50982_51261__$1;
var fn_str_51263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50982_51261__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50982_51261__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51265 = goog.getObjectByName(fn_str_51263,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51264)].join(''));

(fn_obj_51265.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51265.cljs$core$IFn$_invoke$arity$2(path,new_link_51255) : fn_obj_51265.call(null,path,new_link_51255));


var G__51266 = seq__50973_51256;
var G__51267 = chunk__50975_51257;
var G__51268 = count__50976_51258;
var G__51269 = (i__50977_51259 + (1));
seq__50973_51256 = G__51266;
chunk__50975_51257 = G__51267;
count__50976_51258 = G__51268;
i__50977_51259 = G__51269;
continue;
} else {
var temp__5804__auto___51270__$1 = cljs.core.seq(seq__50973_51256);
if(temp__5804__auto___51270__$1){
var seq__50973_51271__$1 = temp__5804__auto___51270__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50973_51271__$1)){
var c__5568__auto___51272 = cljs.core.chunk_first(seq__50973_51271__$1);
var G__51273 = cljs.core.chunk_rest(seq__50973_51271__$1);
var G__51274 = c__5568__auto___51272;
var G__51275 = cljs.core.count(c__5568__auto___51272);
var G__51276 = (0);
seq__50973_51256 = G__51273;
chunk__50975_51257 = G__51274;
count__50976_51258 = G__51275;
i__50977_51259 = G__51276;
continue;
} else {
var map__50984_51277 = cljs.core.first(seq__50973_51271__$1);
var map__50984_51278__$1 = cljs.core.__destructure_map(map__50984_51277);
var task_51279 = map__50984_51278__$1;
var fn_str_51280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50984_51278__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50984_51278__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51282 = goog.getObjectByName(fn_str_51280,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51281)].join(''));

(fn_obj_51282.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51282.cljs$core$IFn$_invoke$arity$2(path,new_link_51255) : fn_obj_51282.call(null,path,new_link_51255));


var G__51283 = cljs.core.next(seq__50973_51271__$1);
var G__51284 = null;
var G__51285 = (0);
var G__51286 = (0);
seq__50973_51256 = G__51283;
chunk__50975_51257 = G__51284;
count__50976_51258 = G__51285;
i__50977_51259 = G__51286;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51253);
});})(seq__50877_51189,chunk__50881_51190,count__50882_51191,i__50883_51192,seq__50702,chunk__50704,count__50705,i__50706,new_link_51255,path_match_51254,node_51253,seq__50877_51247__$1,temp__5804__auto___51246,path,map__50701,map__50701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51254], 0));

goog.dom.insertSiblingAfter(new_link_51255,node_51253);


var G__51287 = cljs.core.next(seq__50877_51247__$1);
var G__51288 = null;
var G__51289 = (0);
var G__51290 = (0);
seq__50877_51189 = G__51287;
chunk__50881_51190 = G__51288;
count__50882_51191 = G__51289;
i__50883_51192 = G__51290;
continue;
} else {
var G__51291 = cljs.core.next(seq__50877_51247__$1);
var G__51292 = null;
var G__51293 = (0);
var G__51294 = (0);
seq__50877_51189 = G__51291;
chunk__50881_51190 = G__51292;
count__50882_51191 = G__51293;
i__50883_51192 = G__51294;
continue;
}
} else {
var G__51295 = cljs.core.next(seq__50877_51247__$1);
var G__51296 = null;
var G__51297 = (0);
var G__51298 = (0);
seq__50877_51189 = G__51295;
chunk__50881_51190 = G__51296;
count__50882_51191 = G__51297;
i__50883_51192 = G__51298;
continue;
}
}
} else {
}
}
break;
}


var G__51299 = seq__50702;
var G__51300 = chunk__50704;
var G__51301 = count__50705;
var G__51302 = (i__50706 + (1));
seq__50702 = G__51299;
chunk__50704 = G__51300;
count__50705 = G__51301;
i__50706 = G__51302;
continue;
} else {
var G__51303 = seq__50702;
var G__51304 = chunk__50704;
var G__51305 = count__50705;
var G__51306 = (i__50706 + (1));
seq__50702 = G__51303;
chunk__50704 = G__51304;
count__50705 = G__51305;
i__50706 = G__51306;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50702);
if(temp__5804__auto__){
var seq__50702__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50702__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50702__$1);
var G__51307 = cljs.core.chunk_rest(seq__50702__$1);
var G__51308 = c__5568__auto__;
var G__51309 = cljs.core.count(c__5568__auto__);
var G__51310 = (0);
seq__50702 = G__51307;
chunk__50704 = G__51308;
count__50705 = G__51309;
i__50706 = G__51310;
continue;
} else {
var path = cljs.core.first(seq__50702__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50986_51311 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50990_51312 = null;
var count__50991_51313 = (0);
var i__50992_51314 = (0);
while(true){
if((i__50992_51314 < count__50991_51313)){
var node_51315 = chunk__50990_51312.cljs$core$IIndexed$_nth$arity$2(null,i__50992_51314);
if(cljs.core.not(node_51315.shadow$old)){
var path_match_51316 = shadow.cljs.devtools.client.browser.match_paths(node_51315.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51316)){
var new_link_51317 = (function (){var G__51027 = node_51315.cloneNode(true);
G__51027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51316),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51027;
})();
(node_51315.shadow$old = true);

(new_link_51317.onload = ((function (seq__50986_51311,chunk__50990_51312,count__50991_51313,i__50992_51314,seq__50702,chunk__50704,count__50705,i__50706,new_link_51317,path_match_51316,node_51315,path,seq__50702__$1,temp__5804__auto__,map__50701,map__50701__$1,msg,updates,reload_info){
return (function (e){
var seq__51028_51322 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51030_51323 = null;
var count__51031_51324 = (0);
var i__51032_51325 = (0);
while(true){
if((i__51032_51325 < count__51031_51324)){
var map__51038_51329 = chunk__51030_51323.cljs$core$IIndexed$_nth$arity$2(null,i__51032_51325);
var map__51038_51330__$1 = cljs.core.__destructure_map(map__51038_51329);
var task_51331 = map__51038_51330__$1;
var fn_str_51332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038_51330__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51038_51330__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51334 = goog.getObjectByName(fn_str_51332,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51333)].join(''));

(fn_obj_51334.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51334.cljs$core$IFn$_invoke$arity$2(path,new_link_51317) : fn_obj_51334.call(null,path,new_link_51317));


var G__51335 = seq__51028_51322;
var G__51336 = chunk__51030_51323;
var G__51337 = count__51031_51324;
var G__51338 = (i__51032_51325 + (1));
seq__51028_51322 = G__51335;
chunk__51030_51323 = G__51336;
count__51031_51324 = G__51337;
i__51032_51325 = G__51338;
continue;
} else {
var temp__5804__auto___51339__$1 = cljs.core.seq(seq__51028_51322);
if(temp__5804__auto___51339__$1){
var seq__51028_51340__$1 = temp__5804__auto___51339__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51028_51340__$1)){
var c__5568__auto___51341 = cljs.core.chunk_first(seq__51028_51340__$1);
var G__51342 = cljs.core.chunk_rest(seq__51028_51340__$1);
var G__51343 = c__5568__auto___51341;
var G__51344 = cljs.core.count(c__5568__auto___51341);
var G__51345 = (0);
seq__51028_51322 = G__51342;
chunk__51030_51323 = G__51343;
count__51031_51324 = G__51344;
i__51032_51325 = G__51345;
continue;
} else {
var map__51039_51346 = cljs.core.first(seq__51028_51340__$1);
var map__51039_51347__$1 = cljs.core.__destructure_map(map__51039_51346);
var task_51348 = map__51039_51347__$1;
var fn_str_51349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51039_51347__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51039_51347__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51354 = goog.getObjectByName(fn_str_51349,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51350)].join(''));

(fn_obj_51354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51354.cljs$core$IFn$_invoke$arity$2(path,new_link_51317) : fn_obj_51354.call(null,path,new_link_51317));


var G__51355 = cljs.core.next(seq__51028_51340__$1);
var G__51356 = null;
var G__51357 = (0);
var G__51358 = (0);
seq__51028_51322 = G__51355;
chunk__51030_51323 = G__51356;
count__51031_51324 = G__51357;
i__51032_51325 = G__51358;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51315);
});})(seq__50986_51311,chunk__50990_51312,count__50991_51313,i__50992_51314,seq__50702,chunk__50704,count__50705,i__50706,new_link_51317,path_match_51316,node_51315,path,seq__50702__$1,temp__5804__auto__,map__50701,map__50701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51316], 0));

goog.dom.insertSiblingAfter(new_link_51317,node_51315);


var G__51359 = seq__50986_51311;
var G__51360 = chunk__50990_51312;
var G__51361 = count__50991_51313;
var G__51362 = (i__50992_51314 + (1));
seq__50986_51311 = G__51359;
chunk__50990_51312 = G__51360;
count__50991_51313 = G__51361;
i__50992_51314 = G__51362;
continue;
} else {
var G__51363 = seq__50986_51311;
var G__51364 = chunk__50990_51312;
var G__51365 = count__50991_51313;
var G__51366 = (i__50992_51314 + (1));
seq__50986_51311 = G__51363;
chunk__50990_51312 = G__51364;
count__50991_51313 = G__51365;
i__50992_51314 = G__51366;
continue;
}
} else {
var G__51367 = seq__50986_51311;
var G__51368 = chunk__50990_51312;
var G__51369 = count__50991_51313;
var G__51370 = (i__50992_51314 + (1));
seq__50986_51311 = G__51367;
chunk__50990_51312 = G__51368;
count__50991_51313 = G__51369;
i__50992_51314 = G__51370;
continue;
}
} else {
var temp__5804__auto___51371__$1 = cljs.core.seq(seq__50986_51311);
if(temp__5804__auto___51371__$1){
var seq__50986_51372__$1 = temp__5804__auto___51371__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50986_51372__$1)){
var c__5568__auto___51373 = cljs.core.chunk_first(seq__50986_51372__$1);
var G__51374 = cljs.core.chunk_rest(seq__50986_51372__$1);
var G__51375 = c__5568__auto___51373;
var G__51376 = cljs.core.count(c__5568__auto___51373);
var G__51377 = (0);
seq__50986_51311 = G__51374;
chunk__50990_51312 = G__51375;
count__50991_51313 = G__51376;
i__50992_51314 = G__51377;
continue;
} else {
var node_51378 = cljs.core.first(seq__50986_51372__$1);
if(cljs.core.not(node_51378.shadow$old)){
var path_match_51379 = shadow.cljs.devtools.client.browser.match_paths(node_51378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51379)){
var new_link_51380 = (function (){var G__51042 = node_51378.cloneNode(true);
G__51042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51042;
})();
(node_51378.shadow$old = true);

(new_link_51380.onload = ((function (seq__50986_51311,chunk__50990_51312,count__50991_51313,i__50992_51314,seq__50702,chunk__50704,count__50705,i__50706,new_link_51380,path_match_51379,node_51378,seq__50986_51372__$1,temp__5804__auto___51371__$1,path,seq__50702__$1,temp__5804__auto__,map__50701,map__50701__$1,msg,updates,reload_info){
return (function (e){
var seq__51043_51384 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51045_51385 = null;
var count__51046_51386 = (0);
var i__51047_51387 = (0);
while(true){
if((i__51047_51387 < count__51046_51386)){
var map__51053_51388 = chunk__51045_51385.cljs$core$IIndexed$_nth$arity$2(null,i__51047_51387);
var map__51053_51389__$1 = cljs.core.__destructure_map(map__51053_51388);
var task_51390 = map__51053_51389__$1;
var fn_str_51391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053_51389__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51053_51389__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51393 = goog.getObjectByName(fn_str_51391,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51392)].join(''));

(fn_obj_51393.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51393.cljs$core$IFn$_invoke$arity$2(path,new_link_51380) : fn_obj_51393.call(null,path,new_link_51380));


var G__51395 = seq__51043_51384;
var G__51396 = chunk__51045_51385;
var G__51397 = count__51046_51386;
var G__51398 = (i__51047_51387 + (1));
seq__51043_51384 = G__51395;
chunk__51045_51385 = G__51396;
count__51046_51386 = G__51397;
i__51047_51387 = G__51398;
continue;
} else {
var temp__5804__auto___51399__$2 = cljs.core.seq(seq__51043_51384);
if(temp__5804__auto___51399__$2){
var seq__51043_51403__$1 = temp__5804__auto___51399__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51043_51403__$1)){
var c__5568__auto___51404 = cljs.core.chunk_first(seq__51043_51403__$1);
var G__51405 = cljs.core.chunk_rest(seq__51043_51403__$1);
var G__51406 = c__5568__auto___51404;
var G__51407 = cljs.core.count(c__5568__auto___51404);
var G__51408 = (0);
seq__51043_51384 = G__51405;
chunk__51045_51385 = G__51406;
count__51046_51386 = G__51407;
i__51047_51387 = G__51408;
continue;
} else {
var map__51054_51410 = cljs.core.first(seq__51043_51403__$1);
var map__51054_51411__$1 = cljs.core.__destructure_map(map__51054_51410);
var task_51412 = map__51054_51411__$1;
var fn_str_51413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51054_51411__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51054_51411__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51415 = goog.getObjectByName(fn_str_51413,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51414)].join(''));

(fn_obj_51415.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51415.cljs$core$IFn$_invoke$arity$2(path,new_link_51380) : fn_obj_51415.call(null,path,new_link_51380));


var G__51416 = cljs.core.next(seq__51043_51403__$1);
var G__51417 = null;
var G__51418 = (0);
var G__51419 = (0);
seq__51043_51384 = G__51416;
chunk__51045_51385 = G__51417;
count__51046_51386 = G__51418;
i__51047_51387 = G__51419;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51378);
});})(seq__50986_51311,chunk__50990_51312,count__50991_51313,i__50992_51314,seq__50702,chunk__50704,count__50705,i__50706,new_link_51380,path_match_51379,node_51378,seq__50986_51372__$1,temp__5804__auto___51371__$1,path,seq__50702__$1,temp__5804__auto__,map__50701,map__50701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51379], 0));

goog.dom.insertSiblingAfter(new_link_51380,node_51378);


var G__51420 = cljs.core.next(seq__50986_51372__$1);
var G__51421 = null;
var G__51422 = (0);
var G__51423 = (0);
seq__50986_51311 = G__51420;
chunk__50990_51312 = G__51421;
count__50991_51313 = G__51422;
i__50992_51314 = G__51423;
continue;
} else {
var G__51424 = cljs.core.next(seq__50986_51372__$1);
var G__51425 = null;
var G__51426 = (0);
var G__51427 = (0);
seq__50986_51311 = G__51424;
chunk__50990_51312 = G__51425;
count__50991_51313 = G__51426;
i__50992_51314 = G__51427;
continue;
}
} else {
var G__51428 = cljs.core.next(seq__50986_51372__$1);
var G__51429 = null;
var G__51430 = (0);
var G__51431 = (0);
seq__50986_51311 = G__51428;
chunk__50990_51312 = G__51429;
count__50991_51313 = G__51430;
i__50992_51314 = G__51431;
continue;
}
}
} else {
}
}
break;
}


var G__51432 = cljs.core.next(seq__50702__$1);
var G__51433 = null;
var G__51434 = (0);
var G__51435 = (0);
seq__50702 = G__51432;
chunk__50704 = G__51433;
count__50705 = G__51434;
i__50706 = G__51435;
continue;
} else {
var G__51436 = cljs.core.next(seq__50702__$1);
var G__51437 = null;
var G__51438 = (0);
var G__51439 = (0);
seq__50702 = G__51436;
chunk__50704 = G__51437;
count__50705 = G__51438;
i__50706 = G__51439;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51057){
var map__51058 = p__51057;
var map__51058__$1 = cljs.core.__destructure_map(map__51058);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51058__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51065){
var map__51066 = p__51065;
var map__51066__$1 = cljs.core.__destructure_map(map__51066);
var _ = map__51066__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51067,done,error){
var map__51068 = p__51067;
var map__51068__$1 = cljs.core.__destructure_map(map__51068);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51068__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51072,done,error){
var map__51073 = p__51072;
var map__51073__$1 = cljs.core.__destructure_map(map__51073);
var msg = map__51073__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51077){
var map__51078 = p__51077;
var map__51078__$1 = cljs.core.__destructure_map(map__51078);
var src = map__51078__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51078__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51080 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51080) : done.call(null,G__51080));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51082){
var map__51083 = p__51082;
var map__51083__$1 = cljs.core.__destructure_map(map__51083);
var msg__$1 = map__51083__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51083__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51084){var ex = e51084;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51086){
var map__51087 = p__51086;
var map__51087__$1 = cljs.core.__destructure_map(map__51087);
var env = map__51087__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51094){
var map__51096 = p__51094;
var map__51096__$1 = cljs.core.__destructure_map(map__51096);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51096__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51096__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51107){
var map__51108 = p__51107;
var map__51108__$1 = cljs.core.__destructure_map(map__51108);
var svc = map__51108__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
