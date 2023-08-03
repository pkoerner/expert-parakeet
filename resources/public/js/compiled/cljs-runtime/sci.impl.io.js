goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__27851 = arguments.length;
switch (G__27851) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__27854 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__27855 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__27855);

try{var G__27856 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__27856);

return G__27856;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__27854);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__27858 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__27860 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__27860);

try{var G__27862 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__27862);

return G__27862;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__27858);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__27866 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__27867 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__27867);

try{var G__27869 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__27869);

return G__27869;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__27866);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__27876 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__27877 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__27877);

try{var G__27886 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__27886);

return G__27886;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__27876);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__27916 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__27917 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27917);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27916);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28293 = arguments.length;
var i__5770__auto___28294 = (0);
while(true){
if((i__5770__auto___28294 < len__5769__auto___28293)){
args__5775__auto__.push((arguments[i__5770__auto___28294]));

var G__28299 = (i__5770__auto___28294 + (1));
i__5770__auto___28294 = G__28299;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__27941 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__27942 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__27943 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__27944 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__27945 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__27946 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__27947 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__27948 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__27949 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__27950 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__27951 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__27952 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__27953 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__27954 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27948);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__27949);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__27950);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__27951);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__27952);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__27953);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27954);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27947);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__27946);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__27945);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__27944);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__27943);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__27942);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27941);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq27929){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27929));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__27990 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__27991 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27991);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27990);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28315 = arguments.length;
var i__5770__auto___28316 = (0);
while(true){
if((i__5770__auto___28316 < len__5769__auto___28315)){
args__5775__auto__.push((arguments[i__5770__auto___28316]));

var G__28317 = (i__5770__auto___28316 + (1));
i__5770__auto___28316 = G__28317;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28012 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28013 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28014 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28015 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28016 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__28018 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28019 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28020 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28021 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28022 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28023 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28018);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28019);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28020);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28021);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28022);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28023);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28017);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28016);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28015);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28014);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28013);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28012);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq27998){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27998));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28332 = arguments.length;
var i__5770__auto___28333 = (0);
while(true){
if((i__5770__auto___28333 < len__5769__auto___28332)){
args__5775__auto__.push((arguments[i__5770__auto___28333]));

var G__28335 = (i__5770__auto___28333 + (1));
i__5770__auto___28333 = G__28335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28070 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28071 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28072 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28073 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28074 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28075 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__28076 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28077 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28078 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28079 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28080 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28081 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28082 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28076);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28077);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28078);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28079);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28080);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28081);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28082);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28075);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28074);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28073);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28072);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28071);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28069);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq28050){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28050));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28349 = arguments.length;
var i__5770__auto___28350 = (0);
while(true){
if((i__5770__auto___28350 < len__5769__auto___28349)){
args__5775__auto__.push((arguments[i__5770__auto___28350]));

var G__28353 = (i__5770__auto___28350 + (1));
i__5770__auto___28350 = G__28353;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28115 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28116 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28117 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28118 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28119 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28120 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__28121 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28122 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28123 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28124 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28125 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28126 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28121);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28122);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28123);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28124);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28125);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28126);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28120);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28119);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28118);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28117);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28116);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28115);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq28102){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28102));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28364 = arguments.length;
var i__5770__auto___28365 = (0);
while(true){
if((i__5770__auto___28365 < len__5769__auto___28364)){
args__5775__auto__.push((arguments[i__5770__auto___28365]));

var G__28366 = (i__5770__auto___28365 + (1));
i__5770__auto___28365 = G__28366;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28147 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28148 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28149 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28150 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28151 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__28153 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28154 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28155 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__28156 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28157 = null;
var _STAR_print_newline_STAR__temp_val__28158 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28153);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28154);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28155);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28156);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28158);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28152);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28151);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28150);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28149);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28148);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28147);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq28131){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28131));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28389 = arguments.length;
var i__5770__auto___28391 = (0);
while(true){
if((i__5770__auto___28391 < len__5769__auto___28389)){
args__5775__auto__.push((arguments[i__5770__auto___28391]));

var G__28396 = (i__5770__auto___28391 + (1));
i__5770__auto___28391 = G__28396;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__28181 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28182 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28183 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28184 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28185 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28186 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__28187 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28188 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28189 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28190 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28191 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28192 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28187);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28188);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28189);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28190);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28191);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28192);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28186);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28185);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28184);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28183);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28182);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28181);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq28170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28170));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28428 = arguments.length;
var i__5770__auto___28429 = (0);
while(true){
if((i__5770__auto___28429 < len__5769__auto___28428)){
args__5775__auto__.push((arguments[i__5770__auto___28429]));

var G__28431 = (i__5770__auto___28429 + (1));
i__5770__auto___28429 = G__28431;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__28209 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__28210 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28211 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__28212 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__28213 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__28214 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__28215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__28216 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__28217 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__28218 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__28219 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__28220 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__28221 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__28222 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28216);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28217);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28218);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__28219);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__28220);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28221);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28222);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28215);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28214);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__28213);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__28212);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28211);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28210);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28209);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq28199){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28199));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28464 = arguments.length;
var i__5770__auto___28465 = (0);
while(true){
if((i__5770__auto___28465 < len__5769__auto___28464)){
args__5775__auto__.push((arguments[i__5770__auto___28465]));

var G__28466 = (i__5770__auto___28465 + (1));
i__5770__auto___28465 = G__28466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__28231__auto__","s__28231__auto__",1993027451,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__28233__auto__","x__28233__auto__",1316501381,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__28231__auto__","s__28231__auto__",1993027451,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__28233__auto__","x__28233__auto__",1316501381,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__28231__auto__","s__28231__auto__",1993027451,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq28234){
var G__28235 = cljs.core.first(seq28234);
var seq28234__$1 = cljs.core.next(seq28234);
var G__28236 = cljs.core.first(seq28234__$1);
var seq28234__$2 = cljs.core.next(seq28234__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28235,G__28236,seq28234__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
