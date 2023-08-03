goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30768 = arguments.length;
var i__5770__auto___30769 = (0);
while(true){
if((i__5770__auto___30769 < len__5769__auto___30768)){
args__5775__auto__.push((arguments[i__5770__auto___30769]));

var G__30770 = (i__5770__auto___30769 + (1));
i__5770__auto___30769 = G__30770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__29110 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29110,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29110,(1),null);
var vec__29113 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29113,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29113,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29333){
var vec__29335 = p__29333;
var seq__29336 = cljs.core.seq(vec__29335);
var first__29337 = cljs.core.first(seq__29336);
var seq__29336__$1 = cljs.core.next(seq__29336);
var method_name = first__29337;
var ___$2 = seq__29336__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__29072__auto__","x__29072__auto__",99820791,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__29073__auto__","args__29073__auto__",1339897812,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__29074__auto__","methods__29074__auto__",1393322192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29072__auto__","x__29072__auto__",99820791,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__29074__auto__","methods__29074__auto__",1393322192,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29072__auto__","x__29072__auto__",99820791,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__29073__auto__","args__29073__auto__",1339897812,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__29077__auto__","x__29077__auto__",-2105100245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__29078__auto__","args__29078__auto__",1355006369,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__29079__auto__","meta__29079__auto__",-1431595506,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29077__auto__","x__29077__auto__",-2105100245,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__29081__auto__","method__29081__auto__",-1424749306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__29079__auto__","meta__29079__auto__",-1431595506,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__29081__auto__","method__29081__auto__",-1424749306,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__29081__auto__","method__29081__auto__",-1424749306,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29077__auto__","x__29077__auto__",-2105100245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__29078__auto__","args__29078__auto__",1355006369,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__29077__auto__","x__29077__auto__",-2105100245,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq29086){
var G__29087 = cljs.core.first(seq29086);
var seq29086__$1 = cljs.core.next(seq29086);
var G__29088 = cljs.core.first(seq29086__$1);
var seq29086__$2 = cljs.core.next(seq29086__$1);
var G__29089 = cljs.core.first(seq29086__$2);
var seq29086__$3 = cljs.core.next(seq29086__$2);
var G__29093 = cljs.core.first(seq29086__$3);
var seq29086__$4 = cljs.core.next(seq29086__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29087,G__29088,G__29089,G__29093,seq29086__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30852 = arguments.length;
var i__5770__auto___30853 = (0);
while(true){
if((i__5770__auto___30853 < len__5769__auto___30852)){
args__5775__auto__.push((arguments[i__5770__auto___30853]));

var G__30854 = (i__5770__auto___30853 + (1));
i__5770__auto___30853 = G__30854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__29564 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__29566 = null;
var count__29567 = (0);
var i__29568 = (0);
while(true){
if((i__29568 < count__29567)){
var vec__30009 = chunk__29566.cljs$core$IIndexed$_nth$arity$2(null,i__29568);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30009,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30009,(1),null);
var extend_via_metadata_30856 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_30857 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_30858 = sci.impl.vars.getName(proto_ns_30857);
var pns_str_30859 = (cljs.core.truth_(extend_via_metadata_30856)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_30858):null);
var seq__30022_30861 = cljs.core.seq(mmap);
var chunk__30023_30862 = null;
var count__30024_30863 = (0);
var i__30025_30864 = (0);
while(true){
if((i__30025_30864 < count__30024_30863)){
var vec__30109_30867 = chunk__30023_30862.cljs$core$IIndexed$_nth$arity$2(null,i__30025_30864);
var meth_name_30868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30109_30867,(0),null);
var f_30869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30109_30867,(1),null);
var meth_str_30902 = cljs.core.name(meth_name_30868);
var meth_sym_30903 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_30902);
var env_30904 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_30905 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_30904,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_30858,meth_sym_30903], null));
var multi_method_30906 = cljs.core.deref(multi_method_var_30905);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_30906,atype,(cljs.core.truth_(extend_via_metadata_30856)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_30859,meth_str_30902);
return ((function (seq__30022_30861,chunk__30023_30862,count__30024_30863,i__30025_30864,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_30902,meth_sym_30903,env_30904,multi_method_var_30905,multi_method_30906,vec__30109_30867,meth_name_30868,f_30869,extend_via_metadata_30856,proto_ns_30857,pns_30858,pns_str_30859,vec__30009,proto,mmap){
return (function() { 
var G__30907__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_30869,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_30869,this$,args);
}
};
var G__30907 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__30908__i = 0, G__30908__a = new Array(arguments.length -  1);
while (G__30908__i < G__30908__a.length) {G__30908__a[G__30908__i] = arguments[G__30908__i + 1]; ++G__30908__i;}
  args = new cljs.core.IndexedSeq(G__30908__a,0,null);
} 
return G__30907__delegate.call(this,this$,args);};
G__30907.cljs$lang$maxFixedArity = 1;
G__30907.cljs$lang$applyTo = (function (arglist__30911){
var this$ = cljs.core.first(arglist__30911);
var args = cljs.core.rest(arglist__30911);
return G__30907__delegate(this$,args);
});
G__30907.cljs$core$IFn$_invoke$arity$variadic = G__30907__delegate;
return G__30907;
})()
;
;})(seq__30022_30861,chunk__30023_30862,count__30024_30863,i__30025_30864,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_30902,meth_sym_30903,env_30904,multi_method_var_30905,multi_method_30906,vec__30109_30867,meth_name_30868,f_30869,extend_via_metadata_30856,proto_ns_30857,pns_30858,pns_str_30859,vec__30009,proto,mmap))
})():f_30869));


var G__30913 = seq__30022_30861;
var G__30914 = chunk__30023_30862;
var G__30915 = count__30024_30863;
var G__30916 = (i__30025_30864 + (1));
seq__30022_30861 = G__30913;
chunk__30023_30862 = G__30914;
count__30024_30863 = G__30915;
i__30025_30864 = G__30916;
continue;
} else {
var temp__5804__auto___30917 = cljs.core.seq(seq__30022_30861);
if(temp__5804__auto___30917){
var seq__30022_30918__$1 = temp__5804__auto___30917;
if(cljs.core.chunked_seq_QMARK_(seq__30022_30918__$1)){
var c__5568__auto___30919 = cljs.core.chunk_first(seq__30022_30918__$1);
var G__30920 = cljs.core.chunk_rest(seq__30022_30918__$1);
var G__30921 = c__5568__auto___30919;
var G__30922 = cljs.core.count(c__5568__auto___30919);
var G__30923 = (0);
seq__30022_30861 = G__30920;
chunk__30023_30862 = G__30921;
count__30024_30863 = G__30922;
i__30025_30864 = G__30923;
continue;
} else {
var vec__30128_30924 = cljs.core.first(seq__30022_30918__$1);
var meth_name_30925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30128_30924,(0),null);
var f_30926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30128_30924,(1),null);
var meth_str_30927 = cljs.core.name(meth_name_30925);
var meth_sym_30928 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_30927);
var env_30929 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_30930 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_30929,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_30858,meth_sym_30928], null));
var multi_method_30931 = cljs.core.deref(multi_method_var_30930);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_30931,atype,(cljs.core.truth_(extend_via_metadata_30856)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_30859,meth_str_30927);
return ((function (seq__30022_30861,chunk__30023_30862,count__30024_30863,i__30025_30864,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_30927,meth_sym_30928,env_30929,multi_method_var_30930,multi_method_30931,vec__30128_30924,meth_name_30925,f_30926,seq__30022_30918__$1,temp__5804__auto___30917,extend_via_metadata_30856,proto_ns_30857,pns_30858,pns_str_30859,vec__30009,proto,mmap){
return (function() { 
var G__30933__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_30926,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_30926,this$,args);
}
};
var G__30933 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__30935__i = 0, G__30935__a = new Array(arguments.length -  1);
while (G__30935__i < G__30935__a.length) {G__30935__a[G__30935__i] = arguments[G__30935__i + 1]; ++G__30935__i;}
  args = new cljs.core.IndexedSeq(G__30935__a,0,null);
} 
return G__30933__delegate.call(this,this$,args);};
G__30933.cljs$lang$maxFixedArity = 1;
G__30933.cljs$lang$applyTo = (function (arglist__30936){
var this$ = cljs.core.first(arglist__30936);
var args = cljs.core.rest(arglist__30936);
return G__30933__delegate(this$,args);
});
G__30933.cljs$core$IFn$_invoke$arity$variadic = G__30933__delegate;
return G__30933;
})()
;
;})(seq__30022_30861,chunk__30023_30862,count__30024_30863,i__30025_30864,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_30927,meth_sym_30928,env_30929,multi_method_var_30930,multi_method_30931,vec__30128_30924,meth_name_30925,f_30926,seq__30022_30918__$1,temp__5804__auto___30917,extend_via_metadata_30856,proto_ns_30857,pns_30858,pns_str_30859,vec__30009,proto,mmap))
})():f_30926));


var G__30937 = cljs.core.next(seq__30022_30918__$1);
var G__30938 = null;
var G__30939 = (0);
var G__30940 = (0);
seq__30022_30861 = G__30937;
chunk__30023_30862 = G__30938;
count__30024_30863 = G__30939;
i__30025_30864 = G__30940;
continue;
}
} else {
}
}
break;
}


var G__30941 = seq__29564;
var G__30942 = chunk__29566;
var G__30943 = count__29567;
var G__30944 = (i__29568 + (1));
seq__29564 = G__30941;
chunk__29566 = G__30942;
count__29567 = G__30943;
i__29568 = G__30944;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29564);
if(temp__5804__auto__){
var seq__29564__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29564__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29564__$1);
var G__30947 = cljs.core.chunk_rest(seq__29564__$1);
var G__30948 = c__5568__auto__;
var G__30949 = cljs.core.count(c__5568__auto__);
var G__30950 = (0);
seq__29564 = G__30947;
chunk__29566 = G__30948;
count__29567 = G__30949;
i__29568 = G__30950;
continue;
} else {
var vec__30280 = cljs.core.first(seq__29564__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30280,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30280,(1),null);
var extend_via_metadata_30953 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_30954 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_30955 = sci.impl.vars.getName(proto_ns_30954);
var pns_str_30956 = (cljs.core.truth_(extend_via_metadata_30953)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_30955):null);
var seq__30286_30958 = cljs.core.seq(mmap);
var chunk__30287_30959 = null;
var count__30288_30960 = (0);
var i__30289_30961 = (0);
while(true){
if((i__30289_30961 < count__30288_30960)){
var vec__30383_30963 = chunk__30287_30959.cljs$core$IIndexed$_nth$arity$2(null,i__30289_30961);
var meth_name_30964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383_30963,(0),null);
var f_30965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30383_30963,(1),null);
var meth_str_30968 = cljs.core.name(meth_name_30964);
var meth_sym_30969 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_30968);
var env_30970 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_30971 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_30970,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_30955,meth_sym_30969], null));
var multi_method_30972 = cljs.core.deref(multi_method_var_30971);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_30972,atype,(cljs.core.truth_(extend_via_metadata_30953)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_30956,meth_str_30968);
return ((function (seq__30286_30958,chunk__30287_30959,count__30288_30960,i__30289_30961,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_30968,meth_sym_30969,env_30970,multi_method_var_30971,multi_method_30972,vec__30383_30963,meth_name_30964,f_30965,extend_via_metadata_30953,proto_ns_30954,pns_30955,pns_str_30956,vec__30280,proto,mmap,seq__29564__$1,temp__5804__auto__){
return (function() { 
var G__31007__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_30965,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_30965,this$,args);
}
};
var G__31007 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__31009__i = 0, G__31009__a = new Array(arguments.length -  1);
while (G__31009__i < G__31009__a.length) {G__31009__a[G__31009__i] = arguments[G__31009__i + 1]; ++G__31009__i;}
  args = new cljs.core.IndexedSeq(G__31009__a,0,null);
} 
return G__31007__delegate.call(this,this$,args);};
G__31007.cljs$lang$maxFixedArity = 1;
G__31007.cljs$lang$applyTo = (function (arglist__31010){
var this$ = cljs.core.first(arglist__31010);
var args = cljs.core.rest(arglist__31010);
return G__31007__delegate(this$,args);
});
G__31007.cljs$core$IFn$_invoke$arity$variadic = G__31007__delegate;
return G__31007;
})()
;
;})(seq__30286_30958,chunk__30287_30959,count__30288_30960,i__30289_30961,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_30968,meth_sym_30969,env_30970,multi_method_var_30971,multi_method_30972,vec__30383_30963,meth_name_30964,f_30965,extend_via_metadata_30953,proto_ns_30954,pns_30955,pns_str_30956,vec__30280,proto,mmap,seq__29564__$1,temp__5804__auto__))
})():f_30965));


var G__31011 = seq__30286_30958;
var G__31012 = chunk__30287_30959;
var G__31013 = count__30288_30960;
var G__31014 = (i__30289_30961 + (1));
seq__30286_30958 = G__31011;
chunk__30287_30959 = G__31012;
count__30288_30960 = G__31013;
i__30289_30961 = G__31014;
continue;
} else {
var temp__5804__auto___31015__$1 = cljs.core.seq(seq__30286_30958);
if(temp__5804__auto___31015__$1){
var seq__30286_31016__$1 = temp__5804__auto___31015__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30286_31016__$1)){
var c__5568__auto___31017 = cljs.core.chunk_first(seq__30286_31016__$1);
var G__31018 = cljs.core.chunk_rest(seq__30286_31016__$1);
var G__31019 = c__5568__auto___31017;
var G__31020 = cljs.core.count(c__5568__auto___31017);
var G__31021 = (0);
seq__30286_30958 = G__31018;
chunk__30287_30959 = G__31019;
count__30288_30960 = G__31020;
i__30289_30961 = G__31021;
continue;
} else {
var vec__30396_31022 = cljs.core.first(seq__30286_31016__$1);
var meth_name_31023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30396_31022,(0),null);
var f_31024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30396_31022,(1),null);
var meth_str_31025 = cljs.core.name(meth_name_31023);
var meth_sym_31026 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_31025);
var env_31027 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_31028 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_31027,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_30955,meth_sym_31026], null));
var multi_method_31029 = cljs.core.deref(multi_method_var_31028);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_31029,atype,(cljs.core.truth_(extend_via_metadata_30953)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_30956,meth_str_31025);
return ((function (seq__30286_30958,chunk__30287_30959,count__30288_30960,i__30289_30961,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_31025,meth_sym_31026,env_31027,multi_method_var_31028,multi_method_31029,vec__30396_31022,meth_name_31023,f_31024,seq__30286_31016__$1,temp__5804__auto___31015__$1,extend_via_metadata_30953,proto_ns_30954,pns_30955,pns_str_30956,vec__30280,proto,mmap,seq__29564__$1,temp__5804__auto__){
return (function() { 
var G__31034__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31024,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_31024,this$,args);
}
};
var G__31034 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__31035__i = 0, G__31035__a = new Array(arguments.length -  1);
while (G__31035__i < G__31035__a.length) {G__31035__a[G__31035__i] = arguments[G__31035__i + 1]; ++G__31035__i;}
  args = new cljs.core.IndexedSeq(G__31035__a,0,null);
} 
return G__31034__delegate.call(this,this$,args);};
G__31034.cljs$lang$maxFixedArity = 1;
G__31034.cljs$lang$applyTo = (function (arglist__31036){
var this$ = cljs.core.first(arglist__31036);
var args = cljs.core.rest(arglist__31036);
return G__31034__delegate(this$,args);
});
G__31034.cljs$core$IFn$_invoke$arity$variadic = G__31034__delegate;
return G__31034;
})()
;
;})(seq__30286_30958,chunk__30287_30959,count__30288_30960,i__30289_30961,seq__29564,chunk__29566,count__29567,i__29568,fq,meth_str_31025,meth_sym_31026,env_31027,multi_method_var_31028,multi_method_31029,vec__30396_31022,meth_name_31023,f_31024,seq__30286_31016__$1,temp__5804__auto___31015__$1,extend_via_metadata_30953,proto_ns_30954,pns_30955,pns_str_30956,vec__30280,proto,mmap,seq__29564__$1,temp__5804__auto__))
})():f_31024));


var G__31037 = cljs.core.next(seq__30286_31016__$1);
var G__31038 = null;
var G__31039 = (0);
var G__31040 = (0);
seq__30286_30958 = G__31037;
chunk__30287_30959 = G__31038;
count__30288_30960 = G__31039;
i__30289_30961 = G__31040;
continue;
}
} else {
}
}
break;
}


var G__31041 = cljs.core.next(seq__29564__$1);
var G__31042 = null;
var G__31043 = (0);
var G__31044 = (0);
seq__29564 = G__31041;
chunk__29566 = G__31042;
count__29567 = G__31043;
i__29568 = G__31044;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq29540){
var G__29541 = cljs.core.first(seq29540);
var seq29540__$1 = cljs.core.next(seq29540);
var G__29542 = cljs.core.first(seq29540__$1);
var seq29540__$2 = cljs.core.next(seq29540__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29541,G__29542,seq29540__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__30429){
var vec__30430 = p__30429;
var seq__30431 = cljs.core.seq(vec__30430);
var first__30432 = cljs.core.first(seq__30431);
var seq__30431__$1 = cljs.core.next(seq__30431);
var args = first__30432;
var body = seq__30431__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__30419__auto__","farg__30419__auto__",-1204969033,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__30420__auto__","m__30420__auto__",-976121241,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__30419__auto__","farg__30419__auto__",-1204969033,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__30421__auto__","meth__30421__auto__",439437717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__30420__auto__","m__30420__auto__",-976121241,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__30421__auto__","meth__30421__auto__",439437717,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30485){
var vec__30486 = p__30485;
var seq__30487 = cljs.core.seq(vec__30486);
var first__30488 = cljs.core.first(seq__30487);
var seq__30487__$1 = cljs.core.next(seq__30487);
var meth_name = first__30488;
var fn_body = seq__30487__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30482_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__30482_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31085 = arguments.length;
var i__5770__auto___31086 = (0);
while(true){
if((i__5770__auto___31086 < len__5769__auto___31085)){
args__5775__auto__.push((arguments[i__5770__auto___31086]));

var G__31087 = (i__5770__auto___31086 + (1));
i__5770__auto___31086 = G__31087;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__30494_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__30494_SHARP_)));
}),impls);
var protocol_var = (function (){var G__30522 = ctx;
var G__30523 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__30524 = protocol_name;
var fexpr__30521 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__30521.cljs$core$IFn$_invoke$arity$3 ? fexpr__30521.cljs$core$IFn$_invoke$arity$3(G__30522,G__30523,G__30524) : fexpr__30521.call(null,G__30522,G__30523,G__30524));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30535){
var vec__30542 = p__30535;
var seq__30543 = cljs.core.seq(vec__30542);
var first__30544 = cljs.core.first(seq__30543);
var seq__30543__$1 = cljs.core.next(seq__30543);
var type = first__30544;
var meths = seq__30543__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq30495){
var G__30496 = cljs.core.first(seq30495);
var seq30495__$1 = cljs.core.next(seq30495);
var G__30497 = cljs.core.first(seq30495__$1);
var seq30495__$2 = cljs.core.next(seq30495__$1);
var G__30498 = cljs.core.first(seq30495__$2);
var seq30495__$3 = cljs.core.next(seq30495__$2);
var G__30499 = cljs.core.first(seq30495__$3);
var seq30495__$4 = cljs.core.next(seq30495__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30496,G__30497,G__30498,G__30499,seq30495__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31089 = arguments.length;
var i__5770__auto___31090 = (0);
while(true){
if((i__5770__auto___31090 < len__5769__auto___31089)){
args__5775__auto__.push((arguments[i__5770__auto___31090]));

var G__31091 = (i__5770__auto___31090 + (1));
i__5770__auto___31090 = G__31091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__30558_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__30558_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30595){
var vec__30598 = p__30595;
var seq__30599 = cljs.core.seq(vec__30598);
var first__30600 = cljs.core.first(seq__30599);
var seq__30599__$1 = cljs.core.next(seq__30599);
var proto = first__30600;
var meths = seq__30599__$1;
var protocol_var = (function (){var G__30619 = ctx;
var G__30620 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__30621 = proto;
var fexpr__30618 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__30618.cljs$core$IFn$_invoke$arity$3 ? fexpr__30618.cljs$core$IFn$_invoke$arity$3(G__30619,G__30620,G__30621) : fexpr__30618.call(null,G__30619,G__30620,G__30621));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq30562){
var G__30563 = cljs.core.first(seq30562);
var seq30562__$1 = cljs.core.next(seq30562);
var G__30564 = cljs.core.first(seq30562__$1);
var seq30562__$2 = cljs.core.next(seq30562__$1);
var G__30565 = cljs.core.first(seq30562__$2);
var seq30562__$3 = cljs.core.next(seq30562__$2);
var G__30566 = cljs.core.first(seq30562__$3);
var seq30562__$4 = cljs.core.next(seq30562__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30563,G__30564,G__30565,G__30566,seq30562__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__30644_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__30644_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__30644_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__30669 = cljs.core._EQ_;
var expr__30670 = p;
if(cljs.core.truth_((pred__30669.cljs$core$IFn$_invoke$arity$2 ? pred__30669.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__30670) : pred__30669.call(null,cljs.core.IDeref,expr__30670)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__30669.cljs$core$IFn$_invoke$arity$2 ? pred__30669.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__30670) : pred__30669.call(null,cljs.core.ISwap,expr__30670)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__30669.cljs$core$IFn$_invoke$arity$2 ? pred__30669.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__30670) : pred__30669.call(null,cljs.core.IReset,expr__30670)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30670)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__30727 = clazz;
var G__30727__$1 = (((G__30727 == null))?null:cljs.core.meta(G__30727));
if((G__30727__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__30727__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__30731_SHARP_){
return cljs.core.get_method(p1__30731_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
