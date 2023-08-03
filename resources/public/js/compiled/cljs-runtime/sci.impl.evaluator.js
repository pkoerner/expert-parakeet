goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__30193 = xs;
args__$2 = G__30193;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__30269 = xs;
args__$2 = G__30269;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__28981 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__30270 = ctx__$1;
var G__30271 = bindings__$2;
var G__30272 = rest_let_bindings;
ctx__$1 = G__30270;
bindings__$1 = G__30271;
let_bindings__$1 = G__30272;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28981,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28981,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__30274 = nexprs;
exprs__$1 = G__30274;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__29004 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__29005 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__29004,G__29005) : sci.impl.utils.kw_identical_QMARK_.call(null,G__29004,G__29005));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28996_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28996_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28996_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28997_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28997_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28997_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__29016 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29016,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__29016;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__29024 = arguments.length;
switch (G__29024) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__29029 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29029,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29029,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__29033 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29033,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29033,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__29056 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__29057 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__29057);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__29056);
}}catch (e29039){if((e29039 instanceof Error)){
var e = e29039;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__29049 = ctx;
var G__29050 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__29051 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29049,G__29050,G__29051) : sci.impl.evaluator.eval.call(null,G__29049,G__29050,G__29051));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__29052 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29052,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29052,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e29039;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29059_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__29059_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__29059_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29061_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__29061_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__29061_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__29080 = arguments.length;
switch (G__29080) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__29094 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__29094.cljs$core$IFn$_invoke$arity$3 ? fexpr__29094.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__29094.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30365 = arguments.length;
var i__5770__auto___30366 = (0);
while(true){
if((i__5770__auto___30366 < len__5769__auto___30365)){
args__5775__auto__.push((arguments[i__5770__auto___30366]));

var G__30367 = (i__5770__auto___30366 + (1));
i__5770__auto___30366 = G__30367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29097_SHARP_){
if(((cljs.core.seq_QMARK_(p1__29097_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__29097_SHARP_))))){
return cljs.core.second(p1__29097_SHARP_);
} else {
return p1__29097_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__29107 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29107,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29107,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq29102){
var G__29103 = cljs.core.first(seq29102);
var seq29102__$1 = cljs.core.next(seq29102);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29103,seq29102__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__29122 = ctx;
var G__29123 = bindings;
var G__29124 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29122,G__29123,G__29124) : sci.impl.evaluator.eval.call(null,G__29122,G__29123,G__29124));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__30387 = exprs__$3;
exprs__$2 = G__30387;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__29321 = cljs.core.count(args);
switch (G__29321) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg29131 = (function (){var G__29322 = ctx;
var G__29323 = bindings;
var G__29324 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29322,G__29323,G__29324) : sci.impl.evaluator.eval.call(null,G__29322,G__29323,G__29324));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg29131) : f.call(null,arg29131));

break;
case (2):
var arg29132 = (function (){var G__29327 = ctx;
var G__29328 = bindings;
var G__29329 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29327,G__29328,G__29329) : sci.impl.evaluator.eval.call(null,G__29327,G__29328,G__29329));
})();
var args__$1 = cljs.core.rest(args);
var arg29133 = (function (){var G__29330 = ctx;
var G__29331 = bindings;
var G__29332 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29330,G__29331,G__29332) : sci.impl.evaluator.eval.call(null,G__29330,G__29331,G__29332));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg29132,arg29133) : f.call(null,arg29132,arg29133));

break;
case (3):
var arg29134 = (function (){var G__29338 = ctx;
var G__29339 = bindings;
var G__29340 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29338,G__29339,G__29340) : sci.impl.evaluator.eval.call(null,G__29338,G__29339,G__29340));
})();
var args__$1 = cljs.core.rest(args);
var arg29135 = (function (){var G__29341 = ctx;
var G__29342 = bindings;
var G__29343 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29341,G__29342,G__29343) : sci.impl.evaluator.eval.call(null,G__29341,G__29342,G__29343));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29136 = (function (){var G__29344 = ctx;
var G__29345 = bindings;
var G__29346 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29344,G__29345,G__29346) : sci.impl.evaluator.eval.call(null,G__29344,G__29345,G__29346));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg29134,arg29135,arg29136) : f.call(null,arg29134,arg29135,arg29136));

break;
case (4):
var arg29137 = (function (){var G__29347 = ctx;
var G__29348 = bindings;
var G__29349 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29347,G__29348,G__29349) : sci.impl.evaluator.eval.call(null,G__29347,G__29348,G__29349));
})();
var args__$1 = cljs.core.rest(args);
var arg29138 = (function (){var G__29350 = ctx;
var G__29351 = bindings;
var G__29352 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29350,G__29351,G__29352) : sci.impl.evaluator.eval.call(null,G__29350,G__29351,G__29352));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29139 = (function (){var G__29353 = ctx;
var G__29354 = bindings;
var G__29355 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29353,G__29354,G__29355) : sci.impl.evaluator.eval.call(null,G__29353,G__29354,G__29355));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29140 = (function (){var G__29357 = ctx;
var G__29358 = bindings;
var G__29359 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29357,G__29358,G__29359) : sci.impl.evaluator.eval.call(null,G__29357,G__29358,G__29359));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg29137,arg29138,arg29139,arg29140) : f.call(null,arg29137,arg29138,arg29139,arg29140));

break;
case (5):
var arg29141 = (function (){var G__29364 = ctx;
var G__29365 = bindings;
var G__29366 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29364,G__29365,G__29366) : sci.impl.evaluator.eval.call(null,G__29364,G__29365,G__29366));
})();
var args__$1 = cljs.core.rest(args);
var arg29142 = (function (){var G__29368 = ctx;
var G__29369 = bindings;
var G__29370 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29368,G__29369,G__29370) : sci.impl.evaluator.eval.call(null,G__29368,G__29369,G__29370));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29143 = (function (){var G__29375 = ctx;
var G__29376 = bindings;
var G__29377 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29375,G__29376,G__29377) : sci.impl.evaluator.eval.call(null,G__29375,G__29376,G__29377));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29144 = (function (){var G__29378 = ctx;
var G__29379 = bindings;
var G__29380 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29378,G__29379,G__29380) : sci.impl.evaluator.eval.call(null,G__29378,G__29379,G__29380));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29145 = (function (){var G__29381 = ctx;
var G__29382 = bindings;
var G__29383 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29381,G__29382,G__29383) : sci.impl.evaluator.eval.call(null,G__29381,G__29382,G__29383));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg29141,arg29142,arg29143,arg29144,arg29145) : f.call(null,arg29141,arg29142,arg29143,arg29144,arg29145));

break;
case (6):
var arg29146 = (function (){var G__29384 = ctx;
var G__29385 = bindings;
var G__29386 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29384,G__29385,G__29386) : sci.impl.evaluator.eval.call(null,G__29384,G__29385,G__29386));
})();
var args__$1 = cljs.core.rest(args);
var arg29147 = (function (){var G__29388 = ctx;
var G__29389 = bindings;
var G__29390 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29388,G__29389,G__29390) : sci.impl.evaluator.eval.call(null,G__29388,G__29389,G__29390));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29148 = (function (){var G__29392 = ctx;
var G__29393 = bindings;
var G__29394 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29392,G__29393,G__29394) : sci.impl.evaluator.eval.call(null,G__29392,G__29393,G__29394));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29149 = (function (){var G__29395 = ctx;
var G__29396 = bindings;
var G__29397 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29395,G__29396,G__29397) : sci.impl.evaluator.eval.call(null,G__29395,G__29396,G__29397));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29150 = (function (){var G__29403 = ctx;
var G__29404 = bindings;
var G__29405 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29403,G__29404,G__29405) : sci.impl.evaluator.eval.call(null,G__29403,G__29404,G__29405));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29151 = (function (){var G__29406 = ctx;
var G__29407 = bindings;
var G__29408 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29406,G__29407,G__29408) : sci.impl.evaluator.eval.call(null,G__29406,G__29407,G__29408));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg29146,arg29147,arg29148,arg29149,arg29150,arg29151) : f.call(null,arg29146,arg29147,arg29148,arg29149,arg29150,arg29151));

break;
case (7):
var arg29152 = (function (){var G__29409 = ctx;
var G__29410 = bindings;
var G__29411 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29409,G__29410,G__29411) : sci.impl.evaluator.eval.call(null,G__29409,G__29410,G__29411));
})();
var args__$1 = cljs.core.rest(args);
var arg29153 = (function (){var G__29412 = ctx;
var G__29413 = bindings;
var G__29414 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29412,G__29413,G__29414) : sci.impl.evaluator.eval.call(null,G__29412,G__29413,G__29414));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29154 = (function (){var G__29415 = ctx;
var G__29416 = bindings;
var G__29417 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29415,G__29416,G__29417) : sci.impl.evaluator.eval.call(null,G__29415,G__29416,G__29417));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29155 = (function (){var G__29418 = ctx;
var G__29419 = bindings;
var G__29420 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29418,G__29419,G__29420) : sci.impl.evaluator.eval.call(null,G__29418,G__29419,G__29420));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29156 = (function (){var G__29421 = ctx;
var G__29422 = bindings;
var G__29423 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29421,G__29422,G__29423) : sci.impl.evaluator.eval.call(null,G__29421,G__29422,G__29423));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29157 = (function (){var G__29424 = ctx;
var G__29425 = bindings;
var G__29426 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29424,G__29425,G__29426) : sci.impl.evaluator.eval.call(null,G__29424,G__29425,G__29426));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29158 = (function (){var G__29428 = ctx;
var G__29429 = bindings;
var G__29430 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29428,G__29429,G__29430) : sci.impl.evaluator.eval.call(null,G__29428,G__29429,G__29430));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg29152,arg29153,arg29154,arg29155,arg29156,arg29157,arg29158) : f.call(null,arg29152,arg29153,arg29154,arg29155,arg29156,arg29157,arg29158));

break;
case (8):
var arg29159 = (function (){var G__29433 = ctx;
var G__29434 = bindings;
var G__29435 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29433,G__29434,G__29435) : sci.impl.evaluator.eval.call(null,G__29433,G__29434,G__29435));
})();
var args__$1 = cljs.core.rest(args);
var arg29160 = (function (){var G__29436 = ctx;
var G__29437 = bindings;
var G__29438 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29436,G__29437,G__29438) : sci.impl.evaluator.eval.call(null,G__29436,G__29437,G__29438));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29161 = (function (){var G__29439 = ctx;
var G__29440 = bindings;
var G__29441 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29439,G__29440,G__29441) : sci.impl.evaluator.eval.call(null,G__29439,G__29440,G__29441));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29162 = (function (){var G__29442 = ctx;
var G__29443 = bindings;
var G__29444 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29442,G__29443,G__29444) : sci.impl.evaluator.eval.call(null,G__29442,G__29443,G__29444));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29163 = (function (){var G__29445 = ctx;
var G__29446 = bindings;
var G__29447 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29445,G__29446,G__29447) : sci.impl.evaluator.eval.call(null,G__29445,G__29446,G__29447));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29164 = (function (){var G__29451 = ctx;
var G__29452 = bindings;
var G__29453 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29451,G__29452,G__29453) : sci.impl.evaluator.eval.call(null,G__29451,G__29452,G__29453));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29165 = (function (){var G__29463 = ctx;
var G__29464 = bindings;
var G__29465 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29463,G__29464,G__29465) : sci.impl.evaluator.eval.call(null,G__29463,G__29464,G__29465));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29166 = (function (){var G__29467 = ctx;
var G__29468 = bindings;
var G__29469 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29467,G__29468,G__29469) : sci.impl.evaluator.eval.call(null,G__29467,G__29468,G__29469));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg29159,arg29160,arg29161,arg29162,arg29163,arg29164,arg29165,arg29166) : f.call(null,arg29159,arg29160,arg29161,arg29162,arg29163,arg29164,arg29165,arg29166));

break;
case (9):
var arg29167 = (function (){var G__29470 = ctx;
var G__29471 = bindings;
var G__29472 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29470,G__29471,G__29472) : sci.impl.evaluator.eval.call(null,G__29470,G__29471,G__29472));
})();
var args__$1 = cljs.core.rest(args);
var arg29168 = (function (){var G__29473 = ctx;
var G__29474 = bindings;
var G__29475 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29473,G__29474,G__29475) : sci.impl.evaluator.eval.call(null,G__29473,G__29474,G__29475));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29169 = (function (){var G__29476 = ctx;
var G__29477 = bindings;
var G__29478 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29476,G__29477,G__29478) : sci.impl.evaluator.eval.call(null,G__29476,G__29477,G__29478));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29170 = (function (){var G__29479 = ctx;
var G__29480 = bindings;
var G__29481 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29479,G__29480,G__29481) : sci.impl.evaluator.eval.call(null,G__29479,G__29480,G__29481));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29171 = (function (){var G__29482 = ctx;
var G__29483 = bindings;
var G__29484 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29482,G__29483,G__29484) : sci.impl.evaluator.eval.call(null,G__29482,G__29483,G__29484));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29172 = (function (){var G__29485 = ctx;
var G__29486 = bindings;
var G__29487 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29485,G__29486,G__29487) : sci.impl.evaluator.eval.call(null,G__29485,G__29486,G__29487));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29173 = (function (){var G__29488 = ctx;
var G__29489 = bindings;
var G__29490 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29488,G__29489,G__29490) : sci.impl.evaluator.eval.call(null,G__29488,G__29489,G__29490));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29174 = (function (){var G__29491 = ctx;
var G__29492 = bindings;
var G__29493 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29491,G__29492,G__29493) : sci.impl.evaluator.eval.call(null,G__29491,G__29492,G__29493));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29175 = (function (){var G__29494 = ctx;
var G__29495 = bindings;
var G__29496 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29494,G__29495,G__29496) : sci.impl.evaluator.eval.call(null,G__29494,G__29495,G__29496));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg29167,arg29168,arg29169,arg29170,arg29171,arg29172,arg29173,arg29174,arg29175) : f.call(null,arg29167,arg29168,arg29169,arg29170,arg29171,arg29172,arg29173,arg29174,arg29175));

break;
case (10):
var arg29176 = (function (){var G__29498 = ctx;
var G__29499 = bindings;
var G__29500 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29498,G__29499,G__29500) : sci.impl.evaluator.eval.call(null,G__29498,G__29499,G__29500));
})();
var args__$1 = cljs.core.rest(args);
var arg29177 = (function (){var G__29510 = ctx;
var G__29511 = bindings;
var G__29512 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29510,G__29511,G__29512) : sci.impl.evaluator.eval.call(null,G__29510,G__29511,G__29512));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29178 = (function (){var G__29514 = ctx;
var G__29515 = bindings;
var G__29516 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29514,G__29515,G__29516) : sci.impl.evaluator.eval.call(null,G__29514,G__29515,G__29516));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29179 = (function (){var G__29517 = ctx;
var G__29518 = bindings;
var G__29519 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29517,G__29518,G__29519) : sci.impl.evaluator.eval.call(null,G__29517,G__29518,G__29519));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29180 = (function (){var G__29520 = ctx;
var G__29521 = bindings;
var G__29522 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29520,G__29521,G__29522) : sci.impl.evaluator.eval.call(null,G__29520,G__29521,G__29522));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29181 = (function (){var G__29523 = ctx;
var G__29524 = bindings;
var G__29525 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29523,G__29524,G__29525) : sci.impl.evaluator.eval.call(null,G__29523,G__29524,G__29525));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29182 = (function (){var G__29526 = ctx;
var G__29527 = bindings;
var G__29528 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29526,G__29527,G__29528) : sci.impl.evaluator.eval.call(null,G__29526,G__29527,G__29528));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29183 = (function (){var G__29529 = ctx;
var G__29530 = bindings;
var G__29531 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29529,G__29530,G__29531) : sci.impl.evaluator.eval.call(null,G__29529,G__29530,G__29531));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29184 = (function (){var G__29533 = ctx;
var G__29534 = bindings;
var G__29535 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29533,G__29534,G__29535) : sci.impl.evaluator.eval.call(null,G__29533,G__29534,G__29535));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29185 = (function (){var G__29537 = ctx;
var G__29538 = bindings;
var G__29539 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29537,G__29538,G__29539) : sci.impl.evaluator.eval.call(null,G__29537,G__29538,G__29539));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg29176,arg29177,arg29178,arg29179,arg29180,arg29181,arg29182,arg29183,arg29184,arg29185) : f.call(null,arg29176,arg29177,arg29178,arg29179,arg29180,arg29181,arg29182,arg29183,arg29184,arg29185));

break;
case (11):
var arg29186 = (function (){var G__29543 = ctx;
var G__29544 = bindings;
var G__29545 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29543,G__29544,G__29545) : sci.impl.evaluator.eval.call(null,G__29543,G__29544,G__29545));
})();
var args__$1 = cljs.core.rest(args);
var arg29187 = (function (){var G__29546 = ctx;
var G__29547 = bindings;
var G__29548 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29546,G__29547,G__29548) : sci.impl.evaluator.eval.call(null,G__29546,G__29547,G__29548));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29188 = (function (){var G__29549 = ctx;
var G__29550 = bindings;
var G__29551 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29549,G__29550,G__29551) : sci.impl.evaluator.eval.call(null,G__29549,G__29550,G__29551));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29189 = (function (){var G__29552 = ctx;
var G__29553 = bindings;
var G__29554 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29552,G__29553,G__29554) : sci.impl.evaluator.eval.call(null,G__29552,G__29553,G__29554));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29190 = (function (){var G__29555 = ctx;
var G__29556 = bindings;
var G__29557 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29555,G__29556,G__29557) : sci.impl.evaluator.eval.call(null,G__29555,G__29556,G__29557));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29191 = (function (){var G__29558 = ctx;
var G__29559 = bindings;
var G__29560 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29558,G__29559,G__29560) : sci.impl.evaluator.eval.call(null,G__29558,G__29559,G__29560));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29192 = (function (){var G__29561 = ctx;
var G__29562 = bindings;
var G__29563 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29561,G__29562,G__29563) : sci.impl.evaluator.eval.call(null,G__29561,G__29562,G__29563));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29193 = (function (){var G__29570 = ctx;
var G__29571 = bindings;
var G__29572 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29570,G__29571,G__29572) : sci.impl.evaluator.eval.call(null,G__29570,G__29571,G__29572));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29194 = (function (){var G__29574 = ctx;
var G__29575 = bindings;
var G__29576 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29574,G__29575,G__29576) : sci.impl.evaluator.eval.call(null,G__29574,G__29575,G__29576));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29195 = (function (){var G__29577 = ctx;
var G__29578 = bindings;
var G__29579 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29577,G__29578,G__29579) : sci.impl.evaluator.eval.call(null,G__29577,G__29578,G__29579));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29196 = (function (){var G__29583 = ctx;
var G__29584 = bindings;
var G__29585 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29583,G__29584,G__29585) : sci.impl.evaluator.eval.call(null,G__29583,G__29584,G__29585));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg29186,arg29187,arg29188,arg29189,arg29190,arg29191,arg29192,arg29193,arg29194,arg29195,arg29196) : f.call(null,arg29186,arg29187,arg29188,arg29189,arg29190,arg29191,arg29192,arg29193,arg29194,arg29195,arg29196));

break;
case (12):
var arg29197 = (function (){var G__29594 = ctx;
var G__29595 = bindings;
var G__29596 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29594,G__29595,G__29596) : sci.impl.evaluator.eval.call(null,G__29594,G__29595,G__29596));
})();
var args__$1 = cljs.core.rest(args);
var arg29198 = (function (){var G__29597 = ctx;
var G__29598 = bindings;
var G__29599 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29597,G__29598,G__29599) : sci.impl.evaluator.eval.call(null,G__29597,G__29598,G__29599));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29199 = (function (){var G__29603 = ctx;
var G__29604 = bindings;
var G__29605 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29603,G__29604,G__29605) : sci.impl.evaluator.eval.call(null,G__29603,G__29604,G__29605));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29200 = (function (){var G__29607 = ctx;
var G__29608 = bindings;
var G__29609 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29607,G__29608,G__29609) : sci.impl.evaluator.eval.call(null,G__29607,G__29608,G__29609));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29201 = (function (){var G__29610 = ctx;
var G__29611 = bindings;
var G__29612 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29610,G__29611,G__29612) : sci.impl.evaluator.eval.call(null,G__29610,G__29611,G__29612));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29202 = (function (){var G__29614 = ctx;
var G__29615 = bindings;
var G__29616 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29614,G__29615,G__29616) : sci.impl.evaluator.eval.call(null,G__29614,G__29615,G__29616));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29203 = (function (){var G__29618 = ctx;
var G__29619 = bindings;
var G__29620 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29618,G__29619,G__29620) : sci.impl.evaluator.eval.call(null,G__29618,G__29619,G__29620));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29204 = (function (){var G__29621 = ctx;
var G__29622 = bindings;
var G__29623 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29621,G__29622,G__29623) : sci.impl.evaluator.eval.call(null,G__29621,G__29622,G__29623));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29205 = (function (){var G__29628 = ctx;
var G__29629 = bindings;
var G__29630 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29628,G__29629,G__29630) : sci.impl.evaluator.eval.call(null,G__29628,G__29629,G__29630));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29206 = (function (){var G__29631 = ctx;
var G__29632 = bindings;
var G__29633 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29631,G__29632,G__29633) : sci.impl.evaluator.eval.call(null,G__29631,G__29632,G__29633));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29207 = (function (){var G__29634 = ctx;
var G__29635 = bindings;
var G__29636 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29634,G__29635,G__29636) : sci.impl.evaluator.eval.call(null,G__29634,G__29635,G__29636));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29208 = (function (){var G__29637 = ctx;
var G__29638 = bindings;
var G__29639 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29637,G__29638,G__29639) : sci.impl.evaluator.eval.call(null,G__29637,G__29638,G__29639));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg29197,arg29198,arg29199,arg29200,arg29201,arg29202,arg29203,arg29204,arg29205,arg29206,arg29207,arg29208) : f.call(null,arg29197,arg29198,arg29199,arg29200,arg29201,arg29202,arg29203,arg29204,arg29205,arg29206,arg29207,arg29208));

break;
case (13):
var arg29209 = (function (){var G__29641 = ctx;
var G__29642 = bindings;
var G__29643 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29641,G__29642,G__29643) : sci.impl.evaluator.eval.call(null,G__29641,G__29642,G__29643));
})();
var args__$1 = cljs.core.rest(args);
var arg29210 = (function (){var G__29644 = ctx;
var G__29645 = bindings;
var G__29646 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29644,G__29645,G__29646) : sci.impl.evaluator.eval.call(null,G__29644,G__29645,G__29646));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29211 = (function (){var G__29647 = ctx;
var G__29648 = bindings;
var G__29649 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29647,G__29648,G__29649) : sci.impl.evaluator.eval.call(null,G__29647,G__29648,G__29649));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29212 = (function (){var G__29656 = ctx;
var G__29657 = bindings;
var G__29658 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29656,G__29657,G__29658) : sci.impl.evaluator.eval.call(null,G__29656,G__29657,G__29658));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29213 = (function (){var G__29660 = ctx;
var G__29661 = bindings;
var G__29662 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29660,G__29661,G__29662) : sci.impl.evaluator.eval.call(null,G__29660,G__29661,G__29662));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29214 = (function (){var G__29664 = ctx;
var G__29665 = bindings;
var G__29666 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29664,G__29665,G__29666) : sci.impl.evaluator.eval.call(null,G__29664,G__29665,G__29666));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29215 = (function (){var G__29667 = ctx;
var G__29668 = bindings;
var G__29669 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29667,G__29668,G__29669) : sci.impl.evaluator.eval.call(null,G__29667,G__29668,G__29669));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29216 = (function (){var G__29670 = ctx;
var G__29671 = bindings;
var G__29672 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29670,G__29671,G__29672) : sci.impl.evaluator.eval.call(null,G__29670,G__29671,G__29672));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29217 = (function (){var G__29673 = ctx;
var G__29674 = bindings;
var G__29675 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29673,G__29674,G__29675) : sci.impl.evaluator.eval.call(null,G__29673,G__29674,G__29675));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29218 = (function (){var G__29677 = ctx;
var G__29678 = bindings;
var G__29679 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29677,G__29678,G__29679) : sci.impl.evaluator.eval.call(null,G__29677,G__29678,G__29679));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29219 = (function (){var G__29680 = ctx;
var G__29681 = bindings;
var G__29682 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29680,G__29681,G__29682) : sci.impl.evaluator.eval.call(null,G__29680,G__29681,G__29682));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29220 = (function (){var G__29683 = ctx;
var G__29684 = bindings;
var G__29685 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29683,G__29684,G__29685) : sci.impl.evaluator.eval.call(null,G__29683,G__29684,G__29685));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29221 = (function (){var G__29688 = ctx;
var G__29689 = bindings;
var G__29690 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29688,G__29689,G__29690) : sci.impl.evaluator.eval.call(null,G__29688,G__29689,G__29690));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg29209,arg29210,arg29211,arg29212,arg29213,arg29214,arg29215,arg29216,arg29217,arg29218,arg29219,arg29220,arg29221) : f.call(null,arg29209,arg29210,arg29211,arg29212,arg29213,arg29214,arg29215,arg29216,arg29217,arg29218,arg29219,arg29220,arg29221));

break;
case (14):
var arg29222 = (function (){var G__29692 = ctx;
var G__29693 = bindings;
var G__29694 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29692,G__29693,G__29694) : sci.impl.evaluator.eval.call(null,G__29692,G__29693,G__29694));
})();
var args__$1 = cljs.core.rest(args);
var arg29223 = (function (){var G__29701 = ctx;
var G__29702 = bindings;
var G__29703 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29701,G__29702,G__29703) : sci.impl.evaluator.eval.call(null,G__29701,G__29702,G__29703));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29224 = (function (){var G__29704 = ctx;
var G__29705 = bindings;
var G__29706 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29704,G__29705,G__29706) : sci.impl.evaluator.eval.call(null,G__29704,G__29705,G__29706));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29225 = (function (){var G__29708 = ctx;
var G__29709 = bindings;
var G__29710 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29708,G__29709,G__29710) : sci.impl.evaluator.eval.call(null,G__29708,G__29709,G__29710));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29226 = (function (){var G__29711 = ctx;
var G__29712 = bindings;
var G__29713 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29711,G__29712,G__29713) : sci.impl.evaluator.eval.call(null,G__29711,G__29712,G__29713));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29227 = (function (){var G__29714 = ctx;
var G__29715 = bindings;
var G__29716 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29714,G__29715,G__29716) : sci.impl.evaluator.eval.call(null,G__29714,G__29715,G__29716));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29228 = (function (){var G__29717 = ctx;
var G__29718 = bindings;
var G__29719 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29717,G__29718,G__29719) : sci.impl.evaluator.eval.call(null,G__29717,G__29718,G__29719));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29229 = (function (){var G__29720 = ctx;
var G__29721 = bindings;
var G__29722 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29720,G__29721,G__29722) : sci.impl.evaluator.eval.call(null,G__29720,G__29721,G__29722));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29230 = (function (){var G__29723 = ctx;
var G__29724 = bindings;
var G__29725 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29723,G__29724,G__29725) : sci.impl.evaluator.eval.call(null,G__29723,G__29724,G__29725));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29231 = (function (){var G__29729 = ctx;
var G__29730 = bindings;
var G__29731 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29729,G__29730,G__29731) : sci.impl.evaluator.eval.call(null,G__29729,G__29730,G__29731));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29232 = (function (){var G__29732 = ctx;
var G__29733 = bindings;
var G__29734 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29732,G__29733,G__29734) : sci.impl.evaluator.eval.call(null,G__29732,G__29733,G__29734));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29233 = (function (){var G__29735 = ctx;
var G__29736 = bindings;
var G__29737 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29735,G__29736,G__29737) : sci.impl.evaluator.eval.call(null,G__29735,G__29736,G__29737));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29234 = (function (){var G__29738 = ctx;
var G__29739 = bindings;
var G__29740 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29738,G__29739,G__29740) : sci.impl.evaluator.eval.call(null,G__29738,G__29739,G__29740));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29235 = (function (){var G__29741 = ctx;
var G__29742 = bindings;
var G__29743 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29741,G__29742,G__29743) : sci.impl.evaluator.eval.call(null,G__29741,G__29742,G__29743));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg29222,arg29223,arg29224,arg29225,arg29226,arg29227,arg29228,arg29229,arg29230,arg29231,arg29232,arg29233,arg29234,arg29235) : f.call(null,arg29222,arg29223,arg29224,arg29225,arg29226,arg29227,arg29228,arg29229,arg29230,arg29231,arg29232,arg29233,arg29234,arg29235));

break;
case (15):
var arg29236 = (function (){var G__29748 = ctx;
var G__29749 = bindings;
var G__29750 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29748,G__29749,G__29750) : sci.impl.evaluator.eval.call(null,G__29748,G__29749,G__29750));
})();
var args__$1 = cljs.core.rest(args);
var arg29237 = (function (){var G__29751 = ctx;
var G__29752 = bindings;
var G__29753 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29751,G__29752,G__29753) : sci.impl.evaluator.eval.call(null,G__29751,G__29752,G__29753));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29238 = (function (){var G__29754 = ctx;
var G__29755 = bindings;
var G__29756 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29754,G__29755,G__29756) : sci.impl.evaluator.eval.call(null,G__29754,G__29755,G__29756));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29239 = (function (){var G__29757 = ctx;
var G__29758 = bindings;
var G__29759 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29757,G__29758,G__29759) : sci.impl.evaluator.eval.call(null,G__29757,G__29758,G__29759));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29240 = (function (){var G__29763 = ctx;
var G__29764 = bindings;
var G__29765 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29763,G__29764,G__29765) : sci.impl.evaluator.eval.call(null,G__29763,G__29764,G__29765));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29241 = (function (){var G__29766 = ctx;
var G__29767 = bindings;
var G__29768 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29766,G__29767,G__29768) : sci.impl.evaluator.eval.call(null,G__29766,G__29767,G__29768));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29242 = (function (){var G__29769 = ctx;
var G__29770 = bindings;
var G__29771 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29769,G__29770,G__29771) : sci.impl.evaluator.eval.call(null,G__29769,G__29770,G__29771));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29243 = (function (){var G__29772 = ctx;
var G__29773 = bindings;
var G__29774 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29772,G__29773,G__29774) : sci.impl.evaluator.eval.call(null,G__29772,G__29773,G__29774));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29244 = (function (){var G__29775 = ctx;
var G__29776 = bindings;
var G__29777 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29775,G__29776,G__29777) : sci.impl.evaluator.eval.call(null,G__29775,G__29776,G__29777));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29245 = (function (){var G__29778 = ctx;
var G__29779 = bindings;
var G__29780 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29778,G__29779,G__29780) : sci.impl.evaluator.eval.call(null,G__29778,G__29779,G__29780));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29246 = (function (){var G__29781 = ctx;
var G__29782 = bindings;
var G__29783 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29781,G__29782,G__29783) : sci.impl.evaluator.eval.call(null,G__29781,G__29782,G__29783));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29247 = (function (){var G__29784 = ctx;
var G__29785 = bindings;
var G__29786 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29784,G__29785,G__29786) : sci.impl.evaluator.eval.call(null,G__29784,G__29785,G__29786));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29248 = (function (){var G__29787 = ctx;
var G__29788 = bindings;
var G__29789 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29787,G__29788,G__29789) : sci.impl.evaluator.eval.call(null,G__29787,G__29788,G__29789));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29249 = (function (){var G__29790 = ctx;
var G__29791 = bindings;
var G__29792 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29790,G__29791,G__29792) : sci.impl.evaluator.eval.call(null,G__29790,G__29791,G__29792));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29250 = (function (){var G__29793 = ctx;
var G__29794 = bindings;
var G__29795 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29793,G__29794,G__29795) : sci.impl.evaluator.eval.call(null,G__29793,G__29794,G__29795));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg29236,arg29237,arg29238,arg29239,arg29240,arg29241,arg29242,arg29243,arg29244,arg29245,arg29246,arg29247,arg29248,arg29249,arg29250) : f.call(null,arg29236,arg29237,arg29238,arg29239,arg29240,arg29241,arg29242,arg29243,arg29244,arg29245,arg29246,arg29247,arg29248,arg29249,arg29250));

break;
case (16):
var arg29251 = (function (){var G__29801 = ctx;
var G__29802 = bindings;
var G__29803 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29801,G__29802,G__29803) : sci.impl.evaluator.eval.call(null,G__29801,G__29802,G__29803));
})();
var args__$1 = cljs.core.rest(args);
var arg29252 = (function (){var G__29807 = ctx;
var G__29808 = bindings;
var G__29809 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29807,G__29808,G__29809) : sci.impl.evaluator.eval.call(null,G__29807,G__29808,G__29809));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29253 = (function (){var G__29814 = ctx;
var G__29815 = bindings;
var G__29816 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29814,G__29815,G__29816) : sci.impl.evaluator.eval.call(null,G__29814,G__29815,G__29816));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29254 = (function (){var G__29817 = ctx;
var G__29818 = bindings;
var G__29819 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29817,G__29818,G__29819) : sci.impl.evaluator.eval.call(null,G__29817,G__29818,G__29819));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29255 = (function (){var G__29824 = ctx;
var G__29825 = bindings;
var G__29826 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29824,G__29825,G__29826) : sci.impl.evaluator.eval.call(null,G__29824,G__29825,G__29826));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29256 = (function (){var G__29827 = ctx;
var G__29828 = bindings;
var G__29829 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29827,G__29828,G__29829) : sci.impl.evaluator.eval.call(null,G__29827,G__29828,G__29829));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29257 = (function (){var G__29830 = ctx;
var G__29831 = bindings;
var G__29832 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29830,G__29831,G__29832) : sci.impl.evaluator.eval.call(null,G__29830,G__29831,G__29832));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29258 = (function (){var G__29833 = ctx;
var G__29834 = bindings;
var G__29835 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29833,G__29834,G__29835) : sci.impl.evaluator.eval.call(null,G__29833,G__29834,G__29835));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29259 = (function (){var G__29839 = ctx;
var G__29840 = bindings;
var G__29841 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29839,G__29840,G__29841) : sci.impl.evaluator.eval.call(null,G__29839,G__29840,G__29841));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29260 = (function (){var G__29842 = ctx;
var G__29843 = bindings;
var G__29844 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29842,G__29843,G__29844) : sci.impl.evaluator.eval.call(null,G__29842,G__29843,G__29844));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29261 = (function (){var G__29845 = ctx;
var G__29846 = bindings;
var G__29847 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29845,G__29846,G__29847) : sci.impl.evaluator.eval.call(null,G__29845,G__29846,G__29847));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29262 = (function (){var G__29848 = ctx;
var G__29849 = bindings;
var G__29850 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29848,G__29849,G__29850) : sci.impl.evaluator.eval.call(null,G__29848,G__29849,G__29850));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29263 = (function (){var G__29852 = ctx;
var G__29853 = bindings;
var G__29854 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29852,G__29853,G__29854) : sci.impl.evaluator.eval.call(null,G__29852,G__29853,G__29854));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29264 = (function (){var G__29858 = ctx;
var G__29859 = bindings;
var G__29860 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29858,G__29859,G__29860) : sci.impl.evaluator.eval.call(null,G__29858,G__29859,G__29860));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29265 = (function (){var G__29861 = ctx;
var G__29862 = bindings;
var G__29863 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29861,G__29862,G__29863) : sci.impl.evaluator.eval.call(null,G__29861,G__29862,G__29863));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29266 = (function (){var G__29864 = ctx;
var G__29865 = bindings;
var G__29866 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29864,G__29865,G__29866) : sci.impl.evaluator.eval.call(null,G__29864,G__29865,G__29866));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg29251,arg29252,arg29253,arg29254,arg29255,arg29256,arg29257,arg29258,arg29259,arg29260,arg29261,arg29262,arg29263,arg29264,arg29265,arg29266) : f.call(null,arg29251,arg29252,arg29253,arg29254,arg29255,arg29256,arg29257,arg29258,arg29259,arg29260,arg29261,arg29262,arg29263,arg29264,arg29265,arg29266));

break;
case (17):
var arg29267 = (function (){var G__29868 = ctx;
var G__29870 = bindings;
var G__29871 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29868,G__29870,G__29871) : sci.impl.evaluator.eval.call(null,G__29868,G__29870,G__29871));
})();
var args__$1 = cljs.core.rest(args);
var arg29268 = (function (){var G__29874 = ctx;
var G__29875 = bindings;
var G__29876 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29874,G__29875,G__29876) : sci.impl.evaluator.eval.call(null,G__29874,G__29875,G__29876));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29269 = (function (){var G__29877 = ctx;
var G__29878 = bindings;
var G__29879 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29877,G__29878,G__29879) : sci.impl.evaluator.eval.call(null,G__29877,G__29878,G__29879));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29270 = (function (){var G__29880 = ctx;
var G__29881 = bindings;
var G__29882 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29880,G__29881,G__29882) : sci.impl.evaluator.eval.call(null,G__29880,G__29881,G__29882));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29271 = (function (){var G__29883 = ctx;
var G__29884 = bindings;
var G__29885 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29883,G__29884,G__29885) : sci.impl.evaluator.eval.call(null,G__29883,G__29884,G__29885));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29272 = (function (){var G__29886 = ctx;
var G__29887 = bindings;
var G__29888 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29886,G__29887,G__29888) : sci.impl.evaluator.eval.call(null,G__29886,G__29887,G__29888));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29273 = (function (){var G__29890 = ctx;
var G__29891 = bindings;
var G__29892 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29890,G__29891,G__29892) : sci.impl.evaluator.eval.call(null,G__29890,G__29891,G__29892));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29274 = (function (){var G__29893 = ctx;
var G__29894 = bindings;
var G__29895 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29893,G__29894,G__29895) : sci.impl.evaluator.eval.call(null,G__29893,G__29894,G__29895));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29275 = (function (){var G__29896 = ctx;
var G__29897 = bindings;
var G__29898 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29896,G__29897,G__29898) : sci.impl.evaluator.eval.call(null,G__29896,G__29897,G__29898));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29276 = (function (){var G__29899 = ctx;
var G__29900 = bindings;
var G__29901 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29899,G__29900,G__29901) : sci.impl.evaluator.eval.call(null,G__29899,G__29900,G__29901));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29277 = (function (){var G__29902 = ctx;
var G__29903 = bindings;
var G__29904 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29902,G__29903,G__29904) : sci.impl.evaluator.eval.call(null,G__29902,G__29903,G__29904));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29278 = (function (){var G__29905 = ctx;
var G__29906 = bindings;
var G__29907 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29905,G__29906,G__29907) : sci.impl.evaluator.eval.call(null,G__29905,G__29906,G__29907));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29279 = (function (){var G__29909 = ctx;
var G__29910 = bindings;
var G__29911 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29909,G__29910,G__29911) : sci.impl.evaluator.eval.call(null,G__29909,G__29910,G__29911));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29280 = (function (){var G__29913 = ctx;
var G__29914 = bindings;
var G__29915 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29913,G__29914,G__29915) : sci.impl.evaluator.eval.call(null,G__29913,G__29914,G__29915));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29281 = (function (){var G__29919 = ctx;
var G__29920 = bindings;
var G__29921 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29919,G__29920,G__29921) : sci.impl.evaluator.eval.call(null,G__29919,G__29920,G__29921));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29282 = (function (){var G__29922 = ctx;
var G__29923 = bindings;
var G__29924 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29922,G__29923,G__29924) : sci.impl.evaluator.eval.call(null,G__29922,G__29923,G__29924));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg29283 = (function (){var G__29925 = ctx;
var G__29926 = bindings;
var G__29927 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29925,G__29926,G__29927) : sci.impl.evaluator.eval.call(null,G__29925,G__29926,G__29927));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg29267,arg29268,arg29269,arg29270,arg29271,arg29272,arg29273,arg29274,arg29275,arg29276,arg29277,arg29278,arg29279,arg29280,arg29281,arg29282,arg29283) : f.call(null,arg29267,arg29268,arg29269,arg29270,arg29271,arg29272,arg29273,arg29274,arg29275,arg29276,arg29277,arg29278,arg29279,arg29280,arg29281,arg29282,arg29283));

break;
case (18):
var arg29284 = (function (){var G__29936 = ctx;
var G__29937 = bindings;
var G__29938 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29936,G__29937,G__29938) : sci.impl.evaluator.eval.call(null,G__29936,G__29937,G__29938));
})();
var args__$1 = cljs.core.rest(args);
var arg29285 = (function (){var G__29939 = ctx;
var G__29940 = bindings;
var G__29941 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29939,G__29940,G__29941) : sci.impl.evaluator.eval.call(null,G__29939,G__29940,G__29941));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29286 = (function (){var G__29945 = ctx;
var G__29946 = bindings;
var G__29947 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29945,G__29946,G__29947) : sci.impl.evaluator.eval.call(null,G__29945,G__29946,G__29947));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29287 = (function (){var G__29948 = ctx;
var G__29949 = bindings;
var G__29950 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29948,G__29949,G__29950) : sci.impl.evaluator.eval.call(null,G__29948,G__29949,G__29950));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29288 = (function (){var G__29951 = ctx;
var G__29952 = bindings;
var G__29953 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29951,G__29952,G__29953) : sci.impl.evaluator.eval.call(null,G__29951,G__29952,G__29953));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29289 = (function (){var G__29954 = ctx;
var G__29955 = bindings;
var G__29956 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29954,G__29955,G__29956) : sci.impl.evaluator.eval.call(null,G__29954,G__29955,G__29956));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29290 = (function (){var G__29957 = ctx;
var G__29958 = bindings;
var G__29959 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29957,G__29958,G__29959) : sci.impl.evaluator.eval.call(null,G__29957,G__29958,G__29959));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29291 = (function (){var G__29960 = ctx;
var G__29961 = bindings;
var G__29962 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29960,G__29961,G__29962) : sci.impl.evaluator.eval.call(null,G__29960,G__29961,G__29962));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29292 = (function (){var G__29963 = ctx;
var G__29964 = bindings;
var G__29965 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29963,G__29964,G__29965) : sci.impl.evaluator.eval.call(null,G__29963,G__29964,G__29965));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29293 = (function (){var G__29969 = ctx;
var G__29970 = bindings;
var G__29971 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29969,G__29970,G__29971) : sci.impl.evaluator.eval.call(null,G__29969,G__29970,G__29971));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29294 = (function (){var G__29972 = ctx;
var G__29973 = bindings;
var G__29974 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29972,G__29973,G__29974) : sci.impl.evaluator.eval.call(null,G__29972,G__29973,G__29974));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29295 = (function (){var G__29975 = ctx;
var G__29976 = bindings;
var G__29977 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29975,G__29976,G__29977) : sci.impl.evaluator.eval.call(null,G__29975,G__29976,G__29977));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29296 = (function (){var G__29978 = ctx;
var G__29979 = bindings;
var G__29980 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29978,G__29979,G__29980) : sci.impl.evaluator.eval.call(null,G__29978,G__29979,G__29980));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29297 = (function (){var G__29981 = ctx;
var G__29982 = bindings;
var G__29983 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29981,G__29982,G__29983) : sci.impl.evaluator.eval.call(null,G__29981,G__29982,G__29983));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29298 = (function (){var G__29984 = ctx;
var G__29985 = bindings;
var G__29986 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29984,G__29985,G__29986) : sci.impl.evaluator.eval.call(null,G__29984,G__29985,G__29986));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29299 = (function (){var G__29987 = ctx;
var G__29988 = bindings;
var G__29989 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29987,G__29988,G__29989) : sci.impl.evaluator.eval.call(null,G__29987,G__29988,G__29989));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg29300 = (function (){var G__29993 = ctx;
var G__29994 = bindings;
var G__29995 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29993,G__29994,G__29995) : sci.impl.evaluator.eval.call(null,G__29993,G__29994,G__29995));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg29301 = (function (){var G__29996 = ctx;
var G__29997 = bindings;
var G__29998 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29996,G__29997,G__29998) : sci.impl.evaluator.eval.call(null,G__29996,G__29997,G__29998));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg29284,arg29285,arg29286,arg29287,arg29288,arg29289,arg29290,arg29291,arg29292,arg29293,arg29294,arg29295,arg29296,arg29297,arg29298,arg29299,arg29300,arg29301) : f.call(null,arg29284,arg29285,arg29286,arg29287,arg29288,arg29289,arg29290,arg29291,arg29292,arg29293,arg29294,arg29295,arg29296,arg29297,arg29298,arg29299,arg29300,arg29301));

break;
case (19):
var arg29302 = (function (){var G__29999 = ctx;
var G__30000 = bindings;
var G__30001 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__29999,G__30000,G__30001) : sci.impl.evaluator.eval.call(null,G__29999,G__30000,G__30001));
})();
var args__$1 = cljs.core.rest(args);
var arg29303 = (function (){var G__30002 = ctx;
var G__30003 = bindings;
var G__30004 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30002,G__30003,G__30004) : sci.impl.evaluator.eval.call(null,G__30002,G__30003,G__30004));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg29304 = (function (){var G__30006 = ctx;
var G__30007 = bindings;
var G__30008 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30006,G__30007,G__30008) : sci.impl.evaluator.eval.call(null,G__30006,G__30007,G__30008));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg29305 = (function (){var G__30012 = ctx;
var G__30013 = bindings;
var G__30014 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30012,G__30013,G__30014) : sci.impl.evaluator.eval.call(null,G__30012,G__30013,G__30014));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg29306 = (function (){var G__30015 = ctx;
var G__30016 = bindings;
var G__30017 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30015,G__30016,G__30017) : sci.impl.evaluator.eval.call(null,G__30015,G__30016,G__30017));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg29307 = (function (){var G__30018 = ctx;
var G__30019 = bindings;
var G__30020 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30018,G__30019,G__30020) : sci.impl.evaluator.eval.call(null,G__30018,G__30019,G__30020));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg29308 = (function (){var G__30026 = ctx;
var G__30027 = bindings;
var G__30028 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30026,G__30027,G__30028) : sci.impl.evaluator.eval.call(null,G__30026,G__30027,G__30028));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg29309 = (function (){var G__30029 = ctx;
var G__30030 = bindings;
var G__30031 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30029,G__30030,G__30031) : sci.impl.evaluator.eval.call(null,G__30029,G__30030,G__30031));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg29310 = (function (){var G__30036 = ctx;
var G__30037 = bindings;
var G__30038 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30036,G__30037,G__30038) : sci.impl.evaluator.eval.call(null,G__30036,G__30037,G__30038));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg29311 = (function (){var G__30040 = ctx;
var G__30041 = bindings;
var G__30042 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30040,G__30041,G__30042) : sci.impl.evaluator.eval.call(null,G__30040,G__30041,G__30042));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg29312 = (function (){var G__30045 = ctx;
var G__30046 = bindings;
var G__30047 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30045,G__30046,G__30047) : sci.impl.evaluator.eval.call(null,G__30045,G__30046,G__30047));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg29313 = (function (){var G__30048 = ctx;
var G__30049 = bindings;
var G__30050 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30048,G__30049,G__30050) : sci.impl.evaluator.eval.call(null,G__30048,G__30049,G__30050));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg29314 = (function (){var G__30051 = ctx;
var G__30052 = bindings;
var G__30053 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30051,G__30052,G__30053) : sci.impl.evaluator.eval.call(null,G__30051,G__30052,G__30053));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg29315 = (function (){var G__30056 = ctx;
var G__30057 = bindings;
var G__30058 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30056,G__30057,G__30058) : sci.impl.evaluator.eval.call(null,G__30056,G__30057,G__30058));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg29316 = (function (){var G__30059 = ctx;
var G__30060 = bindings;
var G__30061 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30059,G__30060,G__30061) : sci.impl.evaluator.eval.call(null,G__30059,G__30060,G__30061));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg29317 = (function (){var G__30063 = ctx;
var G__30064 = bindings;
var G__30065 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30063,G__30064,G__30065) : sci.impl.evaluator.eval.call(null,G__30063,G__30064,G__30065));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg29318 = (function (){var G__30069 = ctx;
var G__30070 = bindings;
var G__30071 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30069,G__30070,G__30071) : sci.impl.evaluator.eval.call(null,G__30069,G__30070,G__30071));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg29319 = (function (){var G__30072 = ctx;
var G__30073 = bindings;
var G__30074 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30072,G__30073,G__30074) : sci.impl.evaluator.eval.call(null,G__30072,G__30073,G__30074));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg29320 = (function (){var G__30077 = ctx;
var G__30078 = bindings;
var G__30079 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__30077,G__30078,G__30079) : sci.impl.evaluator.eval.call(null,G__30077,G__30078,G__30079));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg29302,arg29303,arg29304,arg29305,arg29306,arg29307,arg29308,arg29309,arg29310,arg29311,arg29312,arg29313,arg29314,arg29315,arg29316,arg29317,arg29318,arg29319,arg29320) : f.call(null,arg29302,arg29303,arg29304,arg29305,arg29306,arg29307,arg29308,arg29309,arg29310,arg29311,arg29312,arg29313,arg29314,arg29315,arg29316,arg29317,arg29318,arg29319,arg29320));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28745_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__28745_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__28745_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e30093){if((e30093 instanceof Error)){
var e = e30093;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e30093;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
