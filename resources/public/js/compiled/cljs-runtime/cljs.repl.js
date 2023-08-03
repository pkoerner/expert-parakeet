goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45525){
var map__45527 = p__45525;
var map__45527__$1 = cljs.core.__destructure_map(map__45527);
var m = map__45527__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45527__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45541_45900 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45542_45901 = null;
var count__45543_45902 = (0);
var i__45544_45903 = (0);
while(true){
if((i__45544_45903 < count__45543_45902)){
var f_45905 = chunk__45542_45901.cljs$core$IIndexed$_nth$arity$2(null,i__45544_45903);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45905], 0));


var G__45906 = seq__45541_45900;
var G__45907 = chunk__45542_45901;
var G__45908 = count__45543_45902;
var G__45909 = (i__45544_45903 + (1));
seq__45541_45900 = G__45906;
chunk__45542_45901 = G__45907;
count__45543_45902 = G__45908;
i__45544_45903 = G__45909;
continue;
} else {
var temp__5804__auto___45910 = cljs.core.seq(seq__45541_45900);
if(temp__5804__auto___45910){
var seq__45541_45911__$1 = temp__5804__auto___45910;
if(cljs.core.chunked_seq_QMARK_(seq__45541_45911__$1)){
var c__5568__auto___45912 = cljs.core.chunk_first(seq__45541_45911__$1);
var G__45913 = cljs.core.chunk_rest(seq__45541_45911__$1);
var G__45914 = c__5568__auto___45912;
var G__45915 = cljs.core.count(c__5568__auto___45912);
var G__45916 = (0);
seq__45541_45900 = G__45913;
chunk__45542_45901 = G__45914;
count__45543_45902 = G__45915;
i__45544_45903 = G__45916;
continue;
} else {
var f_45918 = cljs.core.first(seq__45541_45911__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45918], 0));


var G__45919 = cljs.core.next(seq__45541_45911__$1);
var G__45920 = null;
var G__45921 = (0);
var G__45922 = (0);
seq__45541_45900 = G__45919;
chunk__45542_45901 = G__45920;
count__45543_45902 = G__45921;
i__45544_45903 = G__45922;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45924 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45924], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45924)))?cljs.core.second(arglists_45924):arglists_45924)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45559_45928 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45560_45929 = null;
var count__45561_45930 = (0);
var i__45562_45931 = (0);
while(true){
if((i__45562_45931 < count__45561_45930)){
var vec__45585_45932 = chunk__45560_45929.cljs$core$IIndexed$_nth$arity$2(null,i__45562_45931);
var name_45933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45585_45932,(0),null);
var map__45588_45934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45585_45932,(1),null);
var map__45588_45935__$1 = cljs.core.__destructure_map(map__45588_45934);
var doc_45936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45588_45935__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45588_45935__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45933], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45937], 0));

if(cljs.core.truth_(doc_45936)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45936], 0));
} else {
}


var G__45944 = seq__45559_45928;
var G__45945 = chunk__45560_45929;
var G__45946 = count__45561_45930;
var G__45947 = (i__45562_45931 + (1));
seq__45559_45928 = G__45944;
chunk__45560_45929 = G__45945;
count__45561_45930 = G__45946;
i__45562_45931 = G__45947;
continue;
} else {
var temp__5804__auto___45948 = cljs.core.seq(seq__45559_45928);
if(temp__5804__auto___45948){
var seq__45559_45949__$1 = temp__5804__auto___45948;
if(cljs.core.chunked_seq_QMARK_(seq__45559_45949__$1)){
var c__5568__auto___45950 = cljs.core.chunk_first(seq__45559_45949__$1);
var G__45951 = cljs.core.chunk_rest(seq__45559_45949__$1);
var G__45952 = c__5568__auto___45950;
var G__45953 = cljs.core.count(c__5568__auto___45950);
var G__45954 = (0);
seq__45559_45928 = G__45951;
chunk__45560_45929 = G__45952;
count__45561_45930 = G__45953;
i__45562_45931 = G__45954;
continue;
} else {
var vec__45616_45955 = cljs.core.first(seq__45559_45949__$1);
var name_45956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616_45955,(0),null);
var map__45619_45957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616_45955,(1),null);
var map__45619_45958__$1 = cljs.core.__destructure_map(map__45619_45957);
var doc_45959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45619_45958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45619_45958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45956], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45960], 0));

if(cljs.core.truth_(doc_45959)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45959], 0));
} else {
}


var G__45961 = cljs.core.next(seq__45559_45949__$1);
var G__45962 = null;
var G__45963 = (0);
var G__45964 = (0);
seq__45559_45928 = G__45961;
chunk__45560_45929 = G__45962;
count__45561_45930 = G__45963;
i__45562_45931 = G__45964;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45626 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45627 = null;
var count__45628 = (0);
var i__45629 = (0);
while(true){
if((i__45629 < count__45628)){
var role = chunk__45627.cljs$core$IIndexed$_nth$arity$2(null,i__45629);
var temp__5804__auto___45968__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___45968__$1)){
var spec_45969 = temp__5804__auto___45968__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45969)], 0));
} else {
}


var G__45974 = seq__45626;
var G__45975 = chunk__45627;
var G__45976 = count__45628;
var G__45977 = (i__45629 + (1));
seq__45626 = G__45974;
chunk__45627 = G__45975;
count__45628 = G__45976;
i__45629 = G__45977;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__45626);
if(temp__5804__auto____$1){
var seq__45626__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45626__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45626__$1);
var G__45981 = cljs.core.chunk_rest(seq__45626__$1);
var G__45982 = c__5568__auto__;
var G__45983 = cljs.core.count(c__5568__auto__);
var G__45984 = (0);
seq__45626 = G__45981;
chunk__45627 = G__45982;
count__45628 = G__45983;
i__45629 = G__45984;
continue;
} else {
var role = cljs.core.first(seq__45626__$1);
var temp__5804__auto___45985__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___45985__$2)){
var spec_45987 = temp__5804__auto___45985__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45987)], 0));
} else {
}


var G__45988 = cljs.core.next(seq__45626__$1);
var G__45989 = null;
var G__45990 = (0);
var G__45991 = (0);
seq__45626 = G__45988;
chunk__45627 = G__45989;
count__45628 = G__45990;
i__45629 = G__45991;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45994 = cljs.core.ex_cause(t);
via = G__45993;
t = G__45994;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45744 = datafied_throwable;
var map__45744__$1 = cljs.core.__destructure_map(map__45744);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45744__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45745 = cljs.core.last(via);
var map__45745__$1 = cljs.core.__destructure_map(map__45745);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45745__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45745__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45746 = data;
var map__45746__$1 = cljs.core.__destructure_map(map__45746);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45748__$1 = cljs.core.__destructure_map(map__45748);
var top_data = map__45748__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45754 = phase;
var G__45754__$1 = (((G__45754 instanceof cljs.core.Keyword))?G__45754.fqn:null);
switch (G__45754__$1) {
case "read-source":
var map__45755 = data;
var map__45755__$1 = cljs.core.__destructure_map(map__45755);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45755__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45755__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45757 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45757__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45757,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45757);
var G__45757__$2 = (cljs.core.truth_((function (){var fexpr__45763 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45763.cljs$core$IFn$_invoke$arity$1 ? fexpr__45763.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45763.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45757__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45757__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45757__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45773 = top_data;
var G__45773__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45773,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45773);
var G__45773__$2 = (cljs.core.truth_((function (){var fexpr__45775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45775.cljs$core$IFn$_invoke$arity$1 ? fexpr__45775.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45775.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45773__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45773__$1);
var G__45773__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45773__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45773__$2);
var G__45773__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45773__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45773__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45773__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45773__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45781 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45781,(3),null);
var G__45787 = top_data;
var G__45787__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45787,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45787);
var G__45787__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45787__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45787__$1);
var G__45787__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45787__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45787__$2);
var G__45787__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45787__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45787__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45787__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45787__$4;
}

break;
case "execution":
var vec__45794 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45794,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45794,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45794,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45794,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45714_SHARP_){
var or__5045__auto__ = (p1__45714_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__45798 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45798.cljs$core$IFn$_invoke$arity$1 ? fexpr__45798.cljs$core$IFn$_invoke$arity$1(p1__45714_SHARP_) : fexpr__45798.call(null,p1__45714_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__45800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45800__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45800,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45800);
var G__45800__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45800__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45800__$1);
var G__45800__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45800__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45800__$2);
var G__45800__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45800__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45800__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45800__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45800__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45754__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45821){
var map__45823 = p__45821;
var map__45823__$1 = cljs.core.__destructure_map(map__45823);
var triage_data = map__45823__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45823__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45837 = phase;
var G__45837__$1 = (((G__45837 instanceof cljs.core.Keyword))?G__45837.fqn:null);
switch (G__45837__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45839 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45840 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45841 = loc;
var G__45842 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45843_46113 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45844_46114 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45845_46115 = true;
var _STAR_print_fn_STAR__temp_val__45846_46116 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45845_46115);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45846_46116);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45814_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45814_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45844_46114);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45843_46113);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45839,G__45840,G__45841,G__45842) : format.call(null,G__45839,G__45840,G__45841,G__45842));

break;
case "macroexpansion":
var G__45858 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45859 = cause_type;
var G__45860 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45861 = loc;
var G__45862 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45858,G__45859,G__45860,G__45861,G__45862) : format.call(null,G__45858,G__45859,G__45860,G__45861,G__45862));

break;
case "compile-syntax-check":
var G__45863 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45864 = cause_type;
var G__45865 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45866 = loc;
var G__45867 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45863,G__45864,G__45865,G__45866,G__45867) : format.call(null,G__45863,G__45864,G__45865,G__45866,G__45867));

break;
case "compilation":
var G__45868 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45869 = cause_type;
var G__45870 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45871 = loc;
var G__45872 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45868,G__45869,G__45870,G__45871,G__45872) : format.call(null,G__45868,G__45869,G__45870,G__45871,G__45872));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45873 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45874 = symbol;
var G__45875 = loc;
var G__45876 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45877_46137 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45878_46138 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45879_46139 = true;
var _STAR_print_fn_STAR__temp_val__45880_46140 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45879_46139);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45880_46140);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45818_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45818_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45878_46138);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45877_46137);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45873,G__45874,G__45875,G__45876) : format.call(null,G__45873,G__45874,G__45875,G__45876));
} else {
var G__45881 = "Execution error%s at %s(%s).\n%s\n";
var G__45882 = cause_type;
var G__45883 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45884 = loc;
var G__45885 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45881,G__45882,G__45883,G__45884,G__45885) : format.call(null,G__45881,G__45882,G__45883,G__45884,G__45885));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45837__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
