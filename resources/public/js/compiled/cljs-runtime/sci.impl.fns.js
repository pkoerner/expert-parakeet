goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__31247 = (fixed_arity | (0));
switch (G__31247) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31254 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__31253){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31254,G__31253);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32558 = cljs.core._nth(recur_val,(0));
G__31253 = G__32558;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31256 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__31255){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31256,G__31255);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32561 = cljs.core._nth(recur_val,(0));
G__31255 = G__32561;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31266 = cljs.core._nth(params,(0));
var G__31267 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__31264,G__31265){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31266,G__31264);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31267,G__31265);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32563 = cljs.core._nth(recur_val,(0));
var G__32564 = cljs.core._nth(recur_val,(1));
G__31264 = G__32563;
G__31265 = G__32564;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31277 = cljs.core._nth(params,(0));
var G__31278 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__31275,G__31276){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31277,G__31275);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31278,G__31276);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32565 = cljs.core._nth(recur_val,(0));
var G__32566 = cljs.core._nth(recur_val,(1));
G__31275 = G__32565;
G__31276 = G__32566;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31307 = cljs.core._nth(params,(0));
var G__31308 = cljs.core._nth(params,(1));
var G__31309 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__31304,G__31305,G__31306){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31307,G__31304);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31308,G__31305);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31309,G__31306);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32568 = cljs.core._nth(recur_val,(0));
var G__32569 = cljs.core._nth(recur_val,(1));
var G__32570 = cljs.core._nth(recur_val,(2));
G__31304 = G__32568;
G__31305 = G__32569;
G__31306 = G__32570;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31319 = cljs.core._nth(params,(0));
var G__31321 = cljs.core._nth(params,(1));
var G__31322 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__31316,G__31317,G__31318){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31319,G__31316);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31321,G__31317);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31322,G__31318);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32574 = cljs.core._nth(recur_val,(0));
var G__32575 = cljs.core._nth(recur_val,(1));
var G__32576 = cljs.core._nth(recur_val,(2));
G__31316 = G__32574;
G__31317 = G__32575;
G__31318 = G__32576;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31330 = cljs.core._nth(params,(0));
var G__31331 = cljs.core._nth(params,(1));
var G__31332 = cljs.core._nth(params,(2));
var G__31333 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__31326,G__31327,G__31328,G__31329){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31330,G__31326);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31331,G__31327);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31332,G__31328);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31333,G__31329);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32579 = cljs.core._nth(recur_val,(0));
var G__32580 = cljs.core._nth(recur_val,(1));
var G__32581 = cljs.core._nth(recur_val,(2));
var G__32582 = cljs.core._nth(recur_val,(3));
G__31326 = G__32579;
G__31327 = G__32580;
G__31328 = G__32581;
G__31329 = G__32582;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31349 = cljs.core._nth(params,(0));
var G__31350 = cljs.core._nth(params,(1));
var G__31351 = cljs.core._nth(params,(2));
var G__31352 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__31345,G__31346,G__31347,G__31348){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31349,G__31345);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31350,G__31346);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31351,G__31347);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31352,G__31348);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32584 = cljs.core._nth(recur_val,(0));
var G__32585 = cljs.core._nth(recur_val,(1));
var G__32586 = cljs.core._nth(recur_val,(2));
var G__32587 = cljs.core._nth(recur_val,(3));
G__31345 = G__32584;
G__31346 = G__32585;
G__31347 = G__32586;
G__31348 = G__32587;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31362 = cljs.core._nth(params,(0));
var G__31363 = cljs.core._nth(params,(1));
var G__31364 = cljs.core._nth(params,(2));
var G__31365 = cljs.core._nth(params,(3));
var G__31366 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__31357,G__31358,G__31359,G__31360,G__31361){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31362,G__31357);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31363,G__31358);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31364,G__31359);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31365,G__31360);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31366,G__31361);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32591 = cljs.core._nth(recur_val,(0));
var G__32592 = cljs.core._nth(recur_val,(1));
var G__32593 = cljs.core._nth(recur_val,(2));
var G__32594 = cljs.core._nth(recur_val,(3));
var G__32595 = cljs.core._nth(recur_val,(4));
G__31357 = G__32591;
G__31358 = G__32592;
G__31359 = G__32593;
G__31360 = G__32594;
G__31361 = G__32595;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31375 = cljs.core._nth(params,(0));
var G__31376 = cljs.core._nth(params,(1));
var G__31377 = cljs.core._nth(params,(2));
var G__31379 = cljs.core._nth(params,(3));
var G__31380 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__31370,G__31371,G__31372,G__31373,G__31374){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31375,G__31370);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31376,G__31371);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31377,G__31372);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31379,G__31373);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31380,G__31374);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32601 = cljs.core._nth(recur_val,(0));
var G__32602 = cljs.core._nth(recur_val,(1));
var G__32603 = cljs.core._nth(recur_val,(2));
var G__32604 = cljs.core._nth(recur_val,(3));
var G__32605 = cljs.core._nth(recur_val,(4));
G__31370 = G__32601;
G__31371 = G__32602;
G__31372 = G__32603;
G__31373 = G__32604;
G__31374 = G__32605;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31390 = cljs.core._nth(params,(0));
var G__31391 = cljs.core._nth(params,(1));
var G__31392 = cljs.core._nth(params,(2));
var G__31393 = cljs.core._nth(params,(3));
var G__31394 = cljs.core._nth(params,(4));
var G__31395 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__31384,G__31385,G__31386,G__31387,G__31388,G__31389){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31390,G__31384);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31391,G__31385);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31392,G__31386);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31393,G__31387);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31394,G__31388);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31395,G__31389);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32607 = cljs.core._nth(recur_val,(0));
var G__32608 = cljs.core._nth(recur_val,(1));
var G__32609 = cljs.core._nth(recur_val,(2));
var G__32610 = cljs.core._nth(recur_val,(3));
var G__32611 = cljs.core._nth(recur_val,(4));
var G__32612 = cljs.core._nth(recur_val,(5));
G__31384 = G__32607;
G__31385 = G__32608;
G__31386 = G__32609;
G__31387 = G__32610;
G__31388 = G__32611;
G__31389 = G__32612;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31403 = cljs.core._nth(params,(0));
var G__31404 = cljs.core._nth(params,(1));
var G__31405 = cljs.core._nth(params,(2));
var G__31406 = cljs.core._nth(params,(3));
var G__31407 = cljs.core._nth(params,(4));
var G__31408 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__31397,G__31398,G__31399,G__31400,G__31401,G__31402){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31403,G__31397);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31404,G__31398);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31405,G__31399);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31406,G__31400);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31407,G__31401);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31408,G__31402);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32614 = cljs.core._nth(recur_val,(0));
var G__32615 = cljs.core._nth(recur_val,(1));
var G__32616 = cljs.core._nth(recur_val,(2));
var G__32617 = cljs.core._nth(recur_val,(3));
var G__32618 = cljs.core._nth(recur_val,(4));
var G__32619 = cljs.core._nth(recur_val,(5));
G__31397 = G__32614;
G__31398 = G__32615;
G__31399 = G__32616;
G__31400 = G__32617;
G__31401 = G__32618;
G__31402 = G__32619;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31420 = cljs.core._nth(params,(0));
var G__31421 = cljs.core._nth(params,(1));
var G__31422 = cljs.core._nth(params,(2));
var G__31423 = cljs.core._nth(params,(3));
var G__31424 = cljs.core._nth(params,(4));
var G__31425 = cljs.core._nth(params,(5));
var G__31426 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__31413,G__31414,G__31415,G__31416,G__31417,G__31418,G__31419){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31420,G__31413);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31421,G__31414);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31422,G__31415);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31423,G__31416);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31424,G__31417);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31425,G__31418);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31426,G__31419);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32622 = cljs.core._nth(recur_val,(0));
var G__32623 = cljs.core._nth(recur_val,(1));
var G__32624 = cljs.core._nth(recur_val,(2));
var G__32625 = cljs.core._nth(recur_val,(3));
var G__32626 = cljs.core._nth(recur_val,(4));
var G__32627 = cljs.core._nth(recur_val,(5));
var G__32628 = cljs.core._nth(recur_val,(6));
G__31413 = G__32622;
G__31414 = G__32623;
G__31415 = G__32624;
G__31416 = G__32625;
G__31417 = G__32626;
G__31418 = G__32627;
G__31419 = G__32628;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31436 = cljs.core._nth(params,(0));
var G__31437 = cljs.core._nth(params,(1));
var G__31438 = cljs.core._nth(params,(2));
var G__31439 = cljs.core._nth(params,(3));
var G__31440 = cljs.core._nth(params,(4));
var G__31441 = cljs.core._nth(params,(5));
var G__31442 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__31429,G__31430,G__31431,G__31432,G__31433,G__31434,G__31435){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31436,G__31429);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31437,G__31430);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31438,G__31431);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31439,G__31432);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31440,G__31433);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31441,G__31434);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31442,G__31435);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32630 = cljs.core._nth(recur_val,(0));
var G__32631 = cljs.core._nth(recur_val,(1));
var G__32632 = cljs.core._nth(recur_val,(2));
var G__32633 = cljs.core._nth(recur_val,(3));
var G__32634 = cljs.core._nth(recur_val,(4));
var G__32635 = cljs.core._nth(recur_val,(5));
var G__32636 = cljs.core._nth(recur_val,(6));
G__31429 = G__32630;
G__31430 = G__32631;
G__31431 = G__32632;
G__31432 = G__32633;
G__31433 = G__32634;
G__31434 = G__32635;
G__31435 = G__32636;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31455 = cljs.core._nth(params,(0));
var G__31456 = cljs.core._nth(params,(1));
var G__31457 = cljs.core._nth(params,(2));
var G__31458 = cljs.core._nth(params,(3));
var G__31459 = cljs.core._nth(params,(4));
var G__31460 = cljs.core._nth(params,(5));
var G__31461 = cljs.core._nth(params,(6));
var G__31462 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__31447,G__31448,G__31449,G__31450,G__31451,G__31452,G__31453,G__31454){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31455,G__31447);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31456,G__31448);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31457,G__31449);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31458,G__31450);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31459,G__31451);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31460,G__31452);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31461,G__31453);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31462,G__31454);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32638 = cljs.core._nth(recur_val,(0));
var G__32639 = cljs.core._nth(recur_val,(1));
var G__32640 = cljs.core._nth(recur_val,(2));
var G__32641 = cljs.core._nth(recur_val,(3));
var G__32642 = cljs.core._nth(recur_val,(4));
var G__32643 = cljs.core._nth(recur_val,(5));
var G__32644 = cljs.core._nth(recur_val,(6));
var G__32645 = cljs.core._nth(recur_val,(7));
G__31447 = G__32638;
G__31448 = G__32639;
G__31449 = G__32640;
G__31450 = G__32641;
G__31451 = G__32642;
G__31452 = G__32643;
G__31453 = G__32644;
G__31454 = G__32645;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31485 = cljs.core._nth(params,(0));
var G__31486 = cljs.core._nth(params,(1));
var G__31487 = cljs.core._nth(params,(2));
var G__31488 = cljs.core._nth(params,(3));
var G__31489 = cljs.core._nth(params,(4));
var G__31490 = cljs.core._nth(params,(5));
var G__31491 = cljs.core._nth(params,(6));
var G__31492 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__31477,G__31478,G__31479,G__31480,G__31481,G__31482,G__31483,G__31484){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31485,G__31477);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31486,G__31478);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31487,G__31479);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31488,G__31480);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31489,G__31481);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31490,G__31482);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31491,G__31483);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31492,G__31484);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32650 = cljs.core._nth(recur_val,(0));
var G__32651 = cljs.core._nth(recur_val,(1));
var G__32652 = cljs.core._nth(recur_val,(2));
var G__32653 = cljs.core._nth(recur_val,(3));
var G__32654 = cljs.core._nth(recur_val,(4));
var G__32655 = cljs.core._nth(recur_val,(5));
var G__32656 = cljs.core._nth(recur_val,(6));
var G__32657 = cljs.core._nth(recur_val,(7));
G__31477 = G__32650;
G__31478 = G__32651;
G__31479 = G__32652;
G__31480 = G__32653;
G__31481 = G__32654;
G__31482 = G__32655;
G__31483 = G__32656;
G__31484 = G__32657;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31507 = cljs.core._nth(params,(0));
var G__31508 = cljs.core._nth(params,(1));
var G__31509 = cljs.core._nth(params,(2));
var G__31510 = cljs.core._nth(params,(3));
var G__31511 = cljs.core._nth(params,(4));
var G__31512 = cljs.core._nth(params,(5));
var G__31513 = cljs.core._nth(params,(6));
var G__31514 = cljs.core._nth(params,(7));
var G__31515 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__31498,G__31499,G__31500,G__31501,G__31502,G__31503,G__31504,G__31505,G__31506){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31507,G__31498);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31508,G__31499);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31509,G__31500);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31510,G__31501);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31511,G__31502);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31512,G__31503);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31513,G__31504);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31514,G__31505);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31515,G__31506);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32661 = cljs.core._nth(recur_val,(0));
var G__32662 = cljs.core._nth(recur_val,(1));
var G__32663 = cljs.core._nth(recur_val,(2));
var G__32664 = cljs.core._nth(recur_val,(3));
var G__32665 = cljs.core._nth(recur_val,(4));
var G__32666 = cljs.core._nth(recur_val,(5));
var G__32667 = cljs.core._nth(recur_val,(6));
var G__32668 = cljs.core._nth(recur_val,(7));
var G__32669 = cljs.core._nth(recur_val,(8));
G__31498 = G__32661;
G__31499 = G__32662;
G__31500 = G__32663;
G__31501 = G__32664;
G__31502 = G__32665;
G__31503 = G__32666;
G__31504 = G__32667;
G__31505 = G__32668;
G__31506 = G__32669;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31533 = cljs.core._nth(params,(0));
var G__31534 = cljs.core._nth(params,(1));
var G__31535 = cljs.core._nth(params,(2));
var G__31536 = cljs.core._nth(params,(3));
var G__31537 = cljs.core._nth(params,(4));
var G__31538 = cljs.core._nth(params,(5));
var G__31539 = cljs.core._nth(params,(6));
var G__31540 = cljs.core._nth(params,(7));
var G__31541 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__31524,G__31525,G__31526,G__31527,G__31528,G__31529,G__31530,G__31531,G__31532){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31533,G__31524);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31534,G__31525);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31535,G__31526);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31536,G__31527);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31537,G__31528);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31538,G__31529);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31539,G__31530);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31540,G__31531);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31541,G__31532);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32673 = cljs.core._nth(recur_val,(0));
var G__32674 = cljs.core._nth(recur_val,(1));
var G__32675 = cljs.core._nth(recur_val,(2));
var G__32676 = cljs.core._nth(recur_val,(3));
var G__32677 = cljs.core._nth(recur_val,(4));
var G__32678 = cljs.core._nth(recur_val,(5));
var G__32679 = cljs.core._nth(recur_val,(6));
var G__32680 = cljs.core._nth(recur_val,(7));
var G__32681 = cljs.core._nth(recur_val,(8));
G__31524 = G__32673;
G__31525 = G__32674;
G__31526 = G__32675;
G__31527 = G__32676;
G__31528 = G__32677;
G__31529 = G__32678;
G__31530 = G__32679;
G__31531 = G__32680;
G__31532 = G__32681;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31684 = cljs.core._nth(params,(0));
var G__31685 = cljs.core._nth(params,(1));
var G__31686 = cljs.core._nth(params,(2));
var G__31687 = cljs.core._nth(params,(3));
var G__31688 = cljs.core._nth(params,(4));
var G__31689 = cljs.core._nth(params,(5));
var G__31690 = cljs.core._nth(params,(6));
var G__31691 = cljs.core._nth(params,(7));
var G__31692 = cljs.core._nth(params,(8));
var G__31693 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__31674,G__31675,G__31676,G__31677,G__31678,G__31679,G__31680,G__31681,G__31682,G__31683){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31684,G__31674);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31685,G__31675);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31686,G__31676);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31687,G__31677);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31688,G__31678);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31689,G__31679);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31690,G__31680);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31691,G__31681);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31692,G__31682);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31693,G__31683);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32684 = cljs.core._nth(recur_val,(0));
var G__32685 = cljs.core._nth(recur_val,(1));
var G__32686 = cljs.core._nth(recur_val,(2));
var G__32687 = cljs.core._nth(recur_val,(3));
var G__32688 = cljs.core._nth(recur_val,(4));
var G__32689 = cljs.core._nth(recur_val,(5));
var G__32690 = cljs.core._nth(recur_val,(6));
var G__32691 = cljs.core._nth(recur_val,(7));
var G__32692 = cljs.core._nth(recur_val,(8));
var G__32693 = cljs.core._nth(recur_val,(9));
G__31674 = G__32684;
G__31675 = G__32685;
G__31676 = G__32686;
G__31677 = G__32687;
G__31678 = G__32688;
G__31679 = G__32689;
G__31680 = G__32690;
G__31681 = G__32691;
G__31682 = G__32692;
G__31683 = G__32693;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31707 = cljs.core._nth(params,(0));
var G__31708 = cljs.core._nth(params,(1));
var G__31709 = cljs.core._nth(params,(2));
var G__31710 = cljs.core._nth(params,(3));
var G__31711 = cljs.core._nth(params,(4));
var G__31712 = cljs.core._nth(params,(5));
var G__31713 = cljs.core._nth(params,(6));
var G__31714 = cljs.core._nth(params,(7));
var G__31715 = cljs.core._nth(params,(8));
var G__31716 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__31697,G__31698,G__31699,G__31700,G__31701,G__31702,G__31703,G__31704,G__31705,G__31706){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31707,G__31697);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31708,G__31698);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31709,G__31699);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31710,G__31700);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31711,G__31701);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31712,G__31702);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31713,G__31703);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31714,G__31704);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31715,G__31705);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31716,G__31706);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32697 = cljs.core._nth(recur_val,(0));
var G__32698 = cljs.core._nth(recur_val,(1));
var G__32699 = cljs.core._nth(recur_val,(2));
var G__32700 = cljs.core._nth(recur_val,(3));
var G__32701 = cljs.core._nth(recur_val,(4));
var G__32702 = cljs.core._nth(recur_val,(5));
var G__32703 = cljs.core._nth(recur_val,(6));
var G__32704 = cljs.core._nth(recur_val,(7));
var G__32705 = cljs.core._nth(recur_val,(8));
var G__32706 = cljs.core._nth(recur_val,(9));
G__31697 = G__32697;
G__31698 = G__32698;
G__31699 = G__32699;
G__31700 = G__32700;
G__31701 = G__32701;
G__31702 = G__32702;
G__31703 = G__32703;
G__31704 = G__32704;
G__31705 = G__32705;
G__31706 = G__32706;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31731 = cljs.core._nth(params,(0));
var G__31732 = cljs.core._nth(params,(1));
var G__31733 = cljs.core._nth(params,(2));
var G__31734 = cljs.core._nth(params,(3));
var G__31735 = cljs.core._nth(params,(4));
var G__31736 = cljs.core._nth(params,(5));
var G__31737 = cljs.core._nth(params,(6));
var G__31738 = cljs.core._nth(params,(7));
var G__31739 = cljs.core._nth(params,(8));
var G__31740 = cljs.core._nth(params,(9));
var G__31741 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__31720,G__31721,G__31722,G__31723,G__31724,G__31725,G__31726,G__31727,G__31728,G__31729,G__31730){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31731,G__31720);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31732,G__31721);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31733,G__31722);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31734,G__31723);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31735,G__31724);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31736,G__31725);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31737,G__31726);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31738,G__31727);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31739,G__31728);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31740,G__31729);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31741,G__31730);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32710 = cljs.core._nth(recur_val,(0));
var G__32711 = cljs.core._nth(recur_val,(1));
var G__32712 = cljs.core._nth(recur_val,(2));
var G__32713 = cljs.core._nth(recur_val,(3));
var G__32714 = cljs.core._nth(recur_val,(4));
var G__32715 = cljs.core._nth(recur_val,(5));
var G__32716 = cljs.core._nth(recur_val,(6));
var G__32717 = cljs.core._nth(recur_val,(7));
var G__32718 = cljs.core._nth(recur_val,(8));
var G__32719 = cljs.core._nth(recur_val,(9));
var G__32720 = cljs.core._nth(recur_val,(10));
G__31720 = G__32710;
G__31721 = G__32711;
G__31722 = G__32712;
G__31723 = G__32713;
G__31724 = G__32714;
G__31725 = G__32715;
G__31726 = G__32716;
G__31727 = G__32717;
G__31728 = G__32718;
G__31729 = G__32719;
G__31730 = G__32720;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31757 = cljs.core._nth(params,(0));
var G__31758 = cljs.core._nth(params,(1));
var G__31759 = cljs.core._nth(params,(2));
var G__31760 = cljs.core._nth(params,(3));
var G__31761 = cljs.core._nth(params,(4));
var G__31762 = cljs.core._nth(params,(5));
var G__31763 = cljs.core._nth(params,(6));
var G__31764 = cljs.core._nth(params,(7));
var G__31765 = cljs.core._nth(params,(8));
var G__31766 = cljs.core._nth(params,(9));
var G__31767 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__31746,G__31747,G__31748,G__31749,G__31750,G__31751,G__31752,G__31753,G__31754,G__31755,G__31756){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31757,G__31746);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31758,G__31747);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31759,G__31748);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31760,G__31749);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31761,G__31750);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31762,G__31751);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31763,G__31752);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31764,G__31753);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31765,G__31754);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31766,G__31755);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31767,G__31756);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32723 = cljs.core._nth(recur_val,(0));
var G__32724 = cljs.core._nth(recur_val,(1));
var G__32725 = cljs.core._nth(recur_val,(2));
var G__32726 = cljs.core._nth(recur_val,(3));
var G__32727 = cljs.core._nth(recur_val,(4));
var G__32728 = cljs.core._nth(recur_val,(5));
var G__32729 = cljs.core._nth(recur_val,(6));
var G__32730 = cljs.core._nth(recur_val,(7));
var G__32731 = cljs.core._nth(recur_val,(8));
var G__32732 = cljs.core._nth(recur_val,(9));
var G__32733 = cljs.core._nth(recur_val,(10));
G__31746 = G__32723;
G__31747 = G__32724;
G__31748 = G__32725;
G__31749 = G__32726;
G__31750 = G__32727;
G__31751 = G__32728;
G__31752 = G__32729;
G__31753 = G__32730;
G__31754 = G__32731;
G__31755 = G__32732;
G__31756 = G__32733;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31783 = cljs.core._nth(params,(0));
var G__31784 = cljs.core._nth(params,(1));
var G__31785 = cljs.core._nth(params,(2));
var G__31786 = cljs.core._nth(params,(3));
var G__31787 = cljs.core._nth(params,(4));
var G__31788 = cljs.core._nth(params,(5));
var G__31789 = cljs.core._nth(params,(6));
var G__31790 = cljs.core._nth(params,(7));
var G__31791 = cljs.core._nth(params,(8));
var G__31792 = cljs.core._nth(params,(9));
var G__31793 = cljs.core._nth(params,(10));
var G__31794 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__31771,G__31772,G__31773,G__31774,G__31775,G__31776,G__31777,G__31778,G__31779,G__31780,G__31781,G__31782){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31783,G__31771);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31784,G__31772);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31785,G__31773);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31786,G__31774);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31787,G__31775);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31788,G__31776);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31789,G__31777);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31790,G__31778);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31791,G__31779);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31792,G__31780);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31793,G__31781);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31794,G__31782);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32740 = cljs.core._nth(recur_val,(0));
var G__32741 = cljs.core._nth(recur_val,(1));
var G__32742 = cljs.core._nth(recur_val,(2));
var G__32743 = cljs.core._nth(recur_val,(3));
var G__32744 = cljs.core._nth(recur_val,(4));
var G__32745 = cljs.core._nth(recur_val,(5));
var G__32746 = cljs.core._nth(recur_val,(6));
var G__32747 = cljs.core._nth(recur_val,(7));
var G__32748 = cljs.core._nth(recur_val,(8));
var G__32749 = cljs.core._nth(recur_val,(9));
var G__32750 = cljs.core._nth(recur_val,(10));
var G__32751 = cljs.core._nth(recur_val,(11));
G__31771 = G__32740;
G__31772 = G__32741;
G__31773 = G__32742;
G__31774 = G__32743;
G__31775 = G__32744;
G__31776 = G__32745;
G__31777 = G__32746;
G__31778 = G__32747;
G__31779 = G__32748;
G__31780 = G__32749;
G__31781 = G__32750;
G__31782 = G__32751;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31808 = cljs.core._nth(params,(0));
var G__31809 = cljs.core._nth(params,(1));
var G__31810 = cljs.core._nth(params,(2));
var G__31811 = cljs.core._nth(params,(3));
var G__31812 = cljs.core._nth(params,(4));
var G__31813 = cljs.core._nth(params,(5));
var G__31814 = cljs.core._nth(params,(6));
var G__31815 = cljs.core._nth(params,(7));
var G__31816 = cljs.core._nth(params,(8));
var G__31817 = cljs.core._nth(params,(9));
var G__31818 = cljs.core._nth(params,(10));
var G__31819 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__31796,G__31797,G__31798,G__31799,G__31800,G__31801,G__31802,G__31803,G__31804,G__31805,G__31806,G__31807){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31808,G__31796);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31809,G__31797);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31810,G__31798);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31811,G__31799);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31812,G__31800);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31813,G__31801);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31814,G__31802);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31815,G__31803);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31816,G__31804);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31817,G__31805);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31818,G__31806);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31819,G__31807);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32756 = cljs.core._nth(recur_val,(0));
var G__32757 = cljs.core._nth(recur_val,(1));
var G__32758 = cljs.core._nth(recur_val,(2));
var G__32759 = cljs.core._nth(recur_val,(3));
var G__32760 = cljs.core._nth(recur_val,(4));
var G__32761 = cljs.core._nth(recur_val,(5));
var G__32762 = cljs.core._nth(recur_val,(6));
var G__32763 = cljs.core._nth(recur_val,(7));
var G__32764 = cljs.core._nth(recur_val,(8));
var G__32765 = cljs.core._nth(recur_val,(9));
var G__32766 = cljs.core._nth(recur_val,(10));
var G__32767 = cljs.core._nth(recur_val,(11));
G__31796 = G__32756;
G__31797 = G__32757;
G__31798 = G__32758;
G__31799 = G__32759;
G__31800 = G__32760;
G__31801 = G__32761;
G__31802 = G__32762;
G__31803 = G__32763;
G__31804 = G__32764;
G__31805 = G__32765;
G__31806 = G__32766;
G__31807 = G__32767;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31837 = cljs.core._nth(params,(0));
var G__31838 = cljs.core._nth(params,(1));
var G__31839 = cljs.core._nth(params,(2));
var G__31840 = cljs.core._nth(params,(3));
var G__31841 = cljs.core._nth(params,(4));
var G__31842 = cljs.core._nth(params,(5));
var G__31843 = cljs.core._nth(params,(6));
var G__31844 = cljs.core._nth(params,(7));
var G__31845 = cljs.core._nth(params,(8));
var G__31846 = cljs.core._nth(params,(9));
var G__31847 = cljs.core._nth(params,(10));
var G__31848 = cljs.core._nth(params,(11));
var G__31849 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__31824,G__31825,G__31826,G__31827,G__31828,G__31829,G__31830,G__31831,G__31832,G__31833,G__31834,G__31835,G__31836){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31837,G__31824);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31838,G__31825);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31839,G__31826);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31840,G__31827);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31841,G__31828);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31842,G__31829);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31843,G__31830);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31844,G__31831);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31845,G__31832);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31846,G__31833);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31847,G__31834);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31848,G__31835);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31849,G__31836);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32771 = cljs.core._nth(recur_val,(0));
var G__32772 = cljs.core._nth(recur_val,(1));
var G__32773 = cljs.core._nth(recur_val,(2));
var G__32774 = cljs.core._nth(recur_val,(3));
var G__32775 = cljs.core._nth(recur_val,(4));
var G__32776 = cljs.core._nth(recur_val,(5));
var G__32777 = cljs.core._nth(recur_val,(6));
var G__32778 = cljs.core._nth(recur_val,(7));
var G__32779 = cljs.core._nth(recur_val,(8));
var G__32780 = cljs.core._nth(recur_val,(9));
var G__32781 = cljs.core._nth(recur_val,(10));
var G__32782 = cljs.core._nth(recur_val,(11));
var G__32783 = cljs.core._nth(recur_val,(12));
G__31824 = G__32771;
G__31825 = G__32772;
G__31826 = G__32773;
G__31827 = G__32774;
G__31828 = G__32775;
G__31829 = G__32776;
G__31830 = G__32777;
G__31831 = G__32778;
G__31832 = G__32779;
G__31833 = G__32780;
G__31834 = G__32781;
G__31835 = G__32782;
G__31836 = G__32783;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31864 = cljs.core._nth(params,(0));
var G__31865 = cljs.core._nth(params,(1));
var G__31866 = cljs.core._nth(params,(2));
var G__31867 = cljs.core._nth(params,(3));
var G__31868 = cljs.core._nth(params,(4));
var G__31869 = cljs.core._nth(params,(5));
var G__31870 = cljs.core._nth(params,(6));
var G__31871 = cljs.core._nth(params,(7));
var G__31872 = cljs.core._nth(params,(8));
var G__31873 = cljs.core._nth(params,(9));
var G__31874 = cljs.core._nth(params,(10));
var G__31875 = cljs.core._nth(params,(11));
var G__31876 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__31851,G__31852,G__31853,G__31854,G__31855,G__31856,G__31857,G__31858,G__31859,G__31860,G__31861,G__31862,G__31863){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31864,G__31851);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31865,G__31852);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31866,G__31853);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31867,G__31854);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31868,G__31855);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31869,G__31856);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31870,G__31857);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31871,G__31858);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31872,G__31859);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31873,G__31860);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31874,G__31861);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31875,G__31862);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31876,G__31863);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32795 = cljs.core._nth(recur_val,(0));
var G__32796 = cljs.core._nth(recur_val,(1));
var G__32797 = cljs.core._nth(recur_val,(2));
var G__32798 = cljs.core._nth(recur_val,(3));
var G__32799 = cljs.core._nth(recur_val,(4));
var G__32800 = cljs.core._nth(recur_val,(5));
var G__32801 = cljs.core._nth(recur_val,(6));
var G__32802 = cljs.core._nth(recur_val,(7));
var G__32803 = cljs.core._nth(recur_val,(8));
var G__32804 = cljs.core._nth(recur_val,(9));
var G__32805 = cljs.core._nth(recur_val,(10));
var G__32806 = cljs.core._nth(recur_val,(11));
var G__32807 = cljs.core._nth(recur_val,(12));
G__31851 = G__32795;
G__31852 = G__32796;
G__31853 = G__32797;
G__31854 = G__32798;
G__31855 = G__32799;
G__31856 = G__32800;
G__31857 = G__32801;
G__31858 = G__32802;
G__31859 = G__32803;
G__31860 = G__32804;
G__31861 = G__32805;
G__31862 = G__32806;
G__31863 = G__32807;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31901 = cljs.core._nth(params,(0));
var G__31902 = cljs.core._nth(params,(1));
var G__31903 = cljs.core._nth(params,(2));
var G__31904 = cljs.core._nth(params,(3));
var G__31905 = cljs.core._nth(params,(4));
var G__31906 = cljs.core._nth(params,(5));
var G__31907 = cljs.core._nth(params,(6));
var G__31908 = cljs.core._nth(params,(7));
var G__31909 = cljs.core._nth(params,(8));
var G__31910 = cljs.core._nth(params,(9));
var G__31911 = cljs.core._nth(params,(10));
var G__31912 = cljs.core._nth(params,(11));
var G__31913 = cljs.core._nth(params,(12));
var G__31914 = cljs.core._nth(params,(13));
var G__31915 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__31886,G__31887,G__31888,G__31889,G__31890,G__31891,G__31892,G__31893,G__31894,G__31895,G__31896,G__31897,G__31898,G__31899,G__31900){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31901,G__31886);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31902,G__31887);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31903,G__31888);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31904,G__31889);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31905,G__31890);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31906,G__31891);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31907,G__31892);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31908,G__31893);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31909,G__31894);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31910,G__31895);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31911,G__31896);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31912,G__31897);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31913,G__31898);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31914,G__31899);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31915,G__31900);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32824 = cljs.core._nth(recur_val,(0));
var G__32825 = cljs.core._nth(recur_val,(1));
var G__32826 = cljs.core._nth(recur_val,(2));
var G__32827 = cljs.core._nth(recur_val,(3));
var G__32828 = cljs.core._nth(recur_val,(4));
var G__32829 = cljs.core._nth(recur_val,(5));
var G__32830 = cljs.core._nth(recur_val,(6));
var G__32831 = cljs.core._nth(recur_val,(7));
var G__32832 = cljs.core._nth(recur_val,(8));
var G__32833 = cljs.core._nth(recur_val,(9));
var G__32834 = cljs.core._nth(recur_val,(10));
var G__32835 = cljs.core._nth(recur_val,(11));
var G__32836 = cljs.core._nth(recur_val,(12));
var G__32837 = cljs.core._nth(recur_val,(13));
var G__32838 = cljs.core._nth(recur_val,(14));
G__31886 = G__32824;
G__31887 = G__32825;
G__31888 = G__32826;
G__31889 = G__32827;
G__31890 = G__32828;
G__31891 = G__32829;
G__31892 = G__32830;
G__31893 = G__32831;
G__31894 = G__32832;
G__31895 = G__32833;
G__31896 = G__32834;
G__31897 = G__32835;
G__31898 = G__32836;
G__31899 = G__32837;
G__31900 = G__32838;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__31932 = cljs.core._nth(params,(0));
var G__31933 = cljs.core._nth(params,(1));
var G__31934 = cljs.core._nth(params,(2));
var G__31935 = cljs.core._nth(params,(3));
var G__31936 = cljs.core._nth(params,(4));
var G__31937 = cljs.core._nth(params,(5));
var G__31938 = cljs.core._nth(params,(6));
var G__31939 = cljs.core._nth(params,(7));
var G__31940 = cljs.core._nth(params,(8));
var G__31941 = cljs.core._nth(params,(9));
var G__31942 = cljs.core._nth(params,(10));
var G__31943 = cljs.core._nth(params,(11));
var G__31944 = cljs.core._nth(params,(12));
var G__31945 = cljs.core._nth(params,(13));
var G__31946 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__31917,G__31918,G__31919,G__31920,G__31921,G__31922,G__31923,G__31924,G__31925,G__31926,G__31927,G__31928,G__31929,G__31930,G__31931){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__31932,G__31917);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31933,G__31918);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31934,G__31919);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31935,G__31920);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31936,G__31921);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31937,G__31922);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31938,G__31923);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31939,G__31924);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31940,G__31925);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31941,G__31926);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31942,G__31927);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31943,G__31928);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31944,G__31929);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31945,G__31930);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31946,G__31931);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32848 = cljs.core._nth(recur_val,(0));
var G__32849 = cljs.core._nth(recur_val,(1));
var G__32850 = cljs.core._nth(recur_val,(2));
var G__32851 = cljs.core._nth(recur_val,(3));
var G__32852 = cljs.core._nth(recur_val,(4));
var G__32853 = cljs.core._nth(recur_val,(5));
var G__32854 = cljs.core._nth(recur_val,(6));
var G__32855 = cljs.core._nth(recur_val,(7));
var G__32856 = cljs.core._nth(recur_val,(8));
var G__32857 = cljs.core._nth(recur_val,(9));
var G__32858 = cljs.core._nth(recur_val,(10));
var G__32859 = cljs.core._nth(recur_val,(11));
var G__32860 = cljs.core._nth(recur_val,(12));
var G__32861 = cljs.core._nth(recur_val,(13));
var G__32862 = cljs.core._nth(recur_val,(14));
G__31917 = G__32848;
G__31918 = G__32849;
G__31919 = G__32850;
G__31920 = G__32851;
G__31921 = G__32852;
G__31922 = G__32853;
G__31923 = G__32854;
G__31924 = G__32855;
G__31925 = G__32856;
G__31926 = G__32857;
G__31927 = G__32858;
G__31928 = G__32859;
G__31929 = G__32860;
G__31930 = G__32861;
G__31931 = G__32862;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__31971 = cljs.core._nth(params,(0));
var G__31972 = cljs.core._nth(params,(1));
var G__31973 = cljs.core._nth(params,(2));
var G__31974 = cljs.core._nth(params,(3));
var G__31975 = cljs.core._nth(params,(4));
var G__31976 = cljs.core._nth(params,(5));
var G__31977 = cljs.core._nth(params,(6));
var G__31978 = cljs.core._nth(params,(7));
var G__31979 = cljs.core._nth(params,(8));
var G__31980 = cljs.core._nth(params,(9));
var G__31981 = cljs.core._nth(params,(10));
var G__31982 = cljs.core._nth(params,(11));
var G__31983 = cljs.core._nth(params,(12));
var G__31984 = cljs.core._nth(params,(13));
var G__31985 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__31956,G__31957,G__31958,G__31959,G__31960,G__31961,G__31962,G__31963,G__31964,G__31965,G__31966,G__31967,G__31968,G__31969,G__31970){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__31971,G__31956);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__31972,G__31957);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__31973,G__31958);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__31974,G__31959);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__31975,G__31960);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__31976,G__31961);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__31977,G__31962);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__31978,G__31963);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__31979,G__31964);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__31980,G__31965);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__31981,G__31966);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__31982,G__31967);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__31983,G__31968);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__31984,G__31969);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__31985,G__31970);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32872 = cljs.core._nth(recur_val,(0));
var G__32873 = cljs.core._nth(recur_val,(1));
var G__32874 = cljs.core._nth(recur_val,(2));
var G__32875 = cljs.core._nth(recur_val,(3));
var G__32876 = cljs.core._nth(recur_val,(4));
var G__32877 = cljs.core._nth(recur_val,(5));
var G__32878 = cljs.core._nth(recur_val,(6));
var G__32879 = cljs.core._nth(recur_val,(7));
var G__32880 = cljs.core._nth(recur_val,(8));
var G__32881 = cljs.core._nth(recur_val,(9));
var G__32882 = cljs.core._nth(recur_val,(10));
var G__32883 = cljs.core._nth(recur_val,(11));
var G__32884 = cljs.core._nth(recur_val,(12));
var G__32885 = cljs.core._nth(recur_val,(13));
var G__32886 = cljs.core._nth(recur_val,(14));
G__31956 = G__32872;
G__31957 = G__32873;
G__31958 = G__32874;
G__31959 = G__32875;
G__31960 = G__32876;
G__31961 = G__32877;
G__31962 = G__32878;
G__31963 = G__32879;
G__31964 = G__32880;
G__31965 = G__32881;
G__31966 = G__32882;
G__31967 = G__32883;
G__31968 = G__32884;
G__31969 = G__32885;
G__31970 = G__32886;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__32006 = cljs.core._nth(params,(0));
var G__32007 = cljs.core._nth(params,(1));
var G__32008 = cljs.core._nth(params,(2));
var G__32009 = cljs.core._nth(params,(3));
var G__32010 = cljs.core._nth(params,(4));
var G__32011 = cljs.core._nth(params,(5));
var G__32012 = cljs.core._nth(params,(6));
var G__32013 = cljs.core._nth(params,(7));
var G__32014 = cljs.core._nth(params,(8));
var G__32015 = cljs.core._nth(params,(9));
var G__32016 = cljs.core._nth(params,(10));
var G__32017 = cljs.core._nth(params,(11));
var G__32018 = cljs.core._nth(params,(12));
var G__32019 = cljs.core._nth(params,(13));
var G__32020 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__31991,G__31992,G__31993,G__31994,G__31995,G__31996,G__31997,G__31998,G__31999,G__32000,G__32001,G__32002,G__32003,G__32004,G__32005){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32006,G__31991);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32007,G__31992);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32008,G__31993);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32009,G__31994);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32010,G__31995);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32011,G__31996);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32012,G__31997);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32013,G__31998);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32014,G__31999);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32015,G__32000);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32016,G__32001);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32017,G__32002);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32018,G__32003);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32019,G__32004);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32020,G__32005);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32889 = cljs.core._nth(recur_val,(0));
var G__32890 = cljs.core._nth(recur_val,(1));
var G__32891 = cljs.core._nth(recur_val,(2));
var G__32892 = cljs.core._nth(recur_val,(3));
var G__32893 = cljs.core._nth(recur_val,(4));
var G__32894 = cljs.core._nth(recur_val,(5));
var G__32895 = cljs.core._nth(recur_val,(6));
var G__32896 = cljs.core._nth(recur_val,(7));
var G__32897 = cljs.core._nth(recur_val,(8));
var G__32898 = cljs.core._nth(recur_val,(9));
var G__32899 = cljs.core._nth(recur_val,(10));
var G__32900 = cljs.core._nth(recur_val,(11));
var G__32901 = cljs.core._nth(recur_val,(12));
var G__32902 = cljs.core._nth(recur_val,(13));
var G__32903 = cljs.core._nth(recur_val,(14));
G__31991 = G__32889;
G__31992 = G__32890;
G__31993 = G__32891;
G__31994 = G__32892;
G__31995 = G__32893;
G__31996 = G__32894;
G__31997 = G__32895;
G__31998 = G__32896;
G__31999 = G__32897;
G__32000 = G__32898;
G__32001 = G__32899;
G__32002 = G__32900;
G__32003 = G__32901;
G__32004 = G__32902;
G__32005 = G__32903;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32042 = cljs.core._nth(params,(0));
var G__32043 = cljs.core._nth(params,(1));
var G__32044 = cljs.core._nth(params,(2));
var G__32045 = cljs.core._nth(params,(3));
var G__32046 = cljs.core._nth(params,(4));
var G__32047 = cljs.core._nth(params,(5));
var G__32048 = cljs.core._nth(params,(6));
var G__32049 = cljs.core._nth(params,(7));
var G__32050 = cljs.core._nth(params,(8));
var G__32051 = cljs.core._nth(params,(9));
var G__32052 = cljs.core._nth(params,(10));
var G__32053 = cljs.core._nth(params,(11));
var G__32054 = cljs.core._nth(params,(12));
var G__32055 = cljs.core._nth(params,(13));
var G__32056 = cljs.core._nth(params,(14));
var G__32057 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__32026,G__32027,G__32028,G__32029,G__32030,G__32031,G__32032,G__32033,G__32034,G__32035,G__32036,G__32037,G__32038,G__32039,G__32040,G__32041){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32042,G__32026);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32043,G__32027);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32044,G__32028);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32045,G__32029);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32046,G__32030);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32047,G__32031);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32048,G__32032);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32049,G__32033);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32050,G__32034);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32051,G__32035);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32052,G__32036);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32053,G__32037);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32054,G__32038);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32055,G__32039);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32056,G__32040);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32057,G__32041);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32908 = cljs.core._nth(recur_val,(0));
var G__32909 = cljs.core._nth(recur_val,(1));
var G__32910 = cljs.core._nth(recur_val,(2));
var G__32911 = cljs.core._nth(recur_val,(3));
var G__32912 = cljs.core._nth(recur_val,(4));
var G__32913 = cljs.core._nth(recur_val,(5));
var G__32914 = cljs.core._nth(recur_val,(6));
var G__32915 = cljs.core._nth(recur_val,(7));
var G__32916 = cljs.core._nth(recur_val,(8));
var G__32917 = cljs.core._nth(recur_val,(9));
var G__32918 = cljs.core._nth(recur_val,(10));
var G__32919 = cljs.core._nth(recur_val,(11));
var G__32920 = cljs.core._nth(recur_val,(12));
var G__32921 = cljs.core._nth(recur_val,(13));
var G__32922 = cljs.core._nth(recur_val,(14));
var G__32923 = cljs.core._nth(recur_val,(15));
G__32026 = G__32908;
G__32027 = G__32909;
G__32028 = G__32910;
G__32029 = G__32911;
G__32030 = G__32912;
G__32031 = G__32913;
G__32032 = G__32914;
G__32033 = G__32915;
G__32034 = G__32916;
G__32035 = G__32917;
G__32036 = G__32918;
G__32037 = G__32919;
G__32038 = G__32920;
G__32039 = G__32921;
G__32040 = G__32922;
G__32041 = G__32923;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__32083 = cljs.core._nth(params,(0));
var G__32084 = cljs.core._nth(params,(1));
var G__32085 = cljs.core._nth(params,(2));
var G__32086 = cljs.core._nth(params,(3));
var G__32087 = cljs.core._nth(params,(4));
var G__32088 = cljs.core._nth(params,(5));
var G__32089 = cljs.core._nth(params,(6));
var G__32090 = cljs.core._nth(params,(7));
var G__32091 = cljs.core._nth(params,(8));
var G__32092 = cljs.core._nth(params,(9));
var G__32093 = cljs.core._nth(params,(10));
var G__32094 = cljs.core._nth(params,(11));
var G__32095 = cljs.core._nth(params,(12));
var G__32096 = cljs.core._nth(params,(13));
var G__32097 = cljs.core._nth(params,(14));
var G__32098 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__32067,G__32068,G__32069,G__32070,G__32071,G__32072,G__32073,G__32074,G__32075,G__32076,G__32077,G__32078,G__32079,G__32080,G__32081,G__32082){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32083,G__32067);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32084,G__32068);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32085,G__32069);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32086,G__32070);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32087,G__32071);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32088,G__32072);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32089,G__32073);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32090,G__32074);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32091,G__32075);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32092,G__32076);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32093,G__32077);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32094,G__32078);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32095,G__32079);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32096,G__32080);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32097,G__32081);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32098,G__32082);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32929 = cljs.core._nth(recur_val,(0));
var G__32930 = cljs.core._nth(recur_val,(1));
var G__32931 = cljs.core._nth(recur_val,(2));
var G__32932 = cljs.core._nth(recur_val,(3));
var G__32933 = cljs.core._nth(recur_val,(4));
var G__32934 = cljs.core._nth(recur_val,(5));
var G__32935 = cljs.core._nth(recur_val,(6));
var G__32936 = cljs.core._nth(recur_val,(7));
var G__32937 = cljs.core._nth(recur_val,(8));
var G__32938 = cljs.core._nth(recur_val,(9));
var G__32939 = cljs.core._nth(recur_val,(10));
var G__32940 = cljs.core._nth(recur_val,(11));
var G__32941 = cljs.core._nth(recur_val,(12));
var G__32942 = cljs.core._nth(recur_val,(13));
var G__32943 = cljs.core._nth(recur_val,(14));
var G__32944 = cljs.core._nth(recur_val,(15));
G__32067 = G__32929;
G__32068 = G__32930;
G__32069 = G__32931;
G__32070 = G__32932;
G__32071 = G__32933;
G__32072 = G__32934;
G__32073 = G__32935;
G__32074 = G__32936;
G__32075 = G__32937;
G__32076 = G__32938;
G__32077 = G__32939;
G__32078 = G__32940;
G__32079 = G__32941;
G__32080 = G__32942;
G__32081 = G__32943;
G__32082 = G__32944;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32122 = cljs.core._nth(params,(0));
var G__32123 = cljs.core._nth(params,(1));
var G__32124 = cljs.core._nth(params,(2));
var G__32125 = cljs.core._nth(params,(3));
var G__32126 = cljs.core._nth(params,(4));
var G__32127 = cljs.core._nth(params,(5));
var G__32128 = cljs.core._nth(params,(6));
var G__32129 = cljs.core._nth(params,(7));
var G__32130 = cljs.core._nth(params,(8));
var G__32131 = cljs.core._nth(params,(9));
var G__32132 = cljs.core._nth(params,(10));
var G__32133 = cljs.core._nth(params,(11));
var G__32134 = cljs.core._nth(params,(12));
var G__32135 = cljs.core._nth(params,(13));
var G__32136 = cljs.core._nth(params,(14));
var G__32137 = cljs.core._nth(params,(15));
var G__32138 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__32105,G__32106,G__32107,G__32108,G__32109,G__32110,G__32111,G__32112,G__32113,G__32114,G__32115,G__32116,G__32117,G__32118,G__32119,G__32120,G__32121){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32122,G__32105);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32123,G__32106);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32124,G__32107);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32125,G__32108);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32126,G__32109);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32127,G__32110);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32128,G__32111);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32129,G__32112);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32130,G__32113);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32131,G__32114);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32132,G__32115);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32133,G__32116);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32134,G__32117);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32135,G__32118);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32136,G__32119);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32137,G__32120);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32138,G__32121);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32950 = cljs.core._nth(recur_val,(0));
var G__32951 = cljs.core._nth(recur_val,(1));
var G__32952 = cljs.core._nth(recur_val,(2));
var G__32953 = cljs.core._nth(recur_val,(3));
var G__32954 = cljs.core._nth(recur_val,(4));
var G__32955 = cljs.core._nth(recur_val,(5));
var G__32956 = cljs.core._nth(recur_val,(6));
var G__32957 = cljs.core._nth(recur_val,(7));
var G__32958 = cljs.core._nth(recur_val,(8));
var G__32959 = cljs.core._nth(recur_val,(9));
var G__32960 = cljs.core._nth(recur_val,(10));
var G__32961 = cljs.core._nth(recur_val,(11));
var G__32962 = cljs.core._nth(recur_val,(12));
var G__32963 = cljs.core._nth(recur_val,(13));
var G__32964 = cljs.core._nth(recur_val,(14));
var G__32965 = cljs.core._nth(recur_val,(15));
var G__32966 = cljs.core._nth(recur_val,(16));
G__32105 = G__32950;
G__32106 = G__32951;
G__32107 = G__32952;
G__32108 = G__32953;
G__32109 = G__32954;
G__32110 = G__32955;
G__32111 = G__32956;
G__32112 = G__32957;
G__32113 = G__32958;
G__32114 = G__32959;
G__32115 = G__32960;
G__32116 = G__32961;
G__32117 = G__32962;
G__32118 = G__32963;
G__32119 = G__32964;
G__32120 = G__32965;
G__32121 = G__32966;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__32164 = cljs.core._nth(params,(0));
var G__32165 = cljs.core._nth(params,(1));
var G__32166 = cljs.core._nth(params,(2));
var G__32167 = cljs.core._nth(params,(3));
var G__32168 = cljs.core._nth(params,(4));
var G__32169 = cljs.core._nth(params,(5));
var G__32170 = cljs.core._nth(params,(6));
var G__32171 = cljs.core._nth(params,(7));
var G__32172 = cljs.core._nth(params,(8));
var G__32173 = cljs.core._nth(params,(9));
var G__32174 = cljs.core._nth(params,(10));
var G__32175 = cljs.core._nth(params,(11));
var G__32176 = cljs.core._nth(params,(12));
var G__32177 = cljs.core._nth(params,(13));
var G__32178 = cljs.core._nth(params,(14));
var G__32179 = cljs.core._nth(params,(15));
var G__32180 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__32147,G__32148,G__32149,G__32150,G__32151,G__32152,G__32153,G__32154,G__32155,G__32156,G__32157,G__32158,G__32159,G__32160,G__32161,G__32162,G__32163){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32164,G__32147);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32165,G__32148);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32166,G__32149);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32167,G__32150);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32168,G__32151);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32169,G__32152);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32170,G__32153);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32171,G__32154);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32172,G__32155);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32173,G__32156);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32174,G__32157);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32175,G__32158);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32176,G__32159);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32177,G__32160);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32178,G__32161);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32179,G__32162);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32180,G__32163);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32968 = cljs.core._nth(recur_val,(0));
var G__32969 = cljs.core._nth(recur_val,(1));
var G__32970 = cljs.core._nth(recur_val,(2));
var G__32971 = cljs.core._nth(recur_val,(3));
var G__32972 = cljs.core._nth(recur_val,(4));
var G__32973 = cljs.core._nth(recur_val,(5));
var G__32974 = cljs.core._nth(recur_val,(6));
var G__32975 = cljs.core._nth(recur_val,(7));
var G__32976 = cljs.core._nth(recur_val,(8));
var G__32977 = cljs.core._nth(recur_val,(9));
var G__32978 = cljs.core._nth(recur_val,(10));
var G__32979 = cljs.core._nth(recur_val,(11));
var G__32980 = cljs.core._nth(recur_val,(12));
var G__32981 = cljs.core._nth(recur_val,(13));
var G__32982 = cljs.core._nth(recur_val,(14));
var G__32983 = cljs.core._nth(recur_val,(15));
var G__32984 = cljs.core._nth(recur_val,(16));
G__32147 = G__32968;
G__32148 = G__32969;
G__32149 = G__32970;
G__32150 = G__32971;
G__32151 = G__32972;
G__32152 = G__32973;
G__32153 = G__32974;
G__32154 = G__32975;
G__32155 = G__32976;
G__32156 = G__32977;
G__32157 = G__32978;
G__32158 = G__32979;
G__32159 = G__32980;
G__32160 = G__32981;
G__32161 = G__32982;
G__32162 = G__32983;
G__32163 = G__32984;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32215 = cljs.core._nth(params,(0));
var G__32216 = cljs.core._nth(params,(1));
var G__32217 = cljs.core._nth(params,(2));
var G__32218 = cljs.core._nth(params,(3));
var G__32219 = cljs.core._nth(params,(4));
var G__32220 = cljs.core._nth(params,(5));
var G__32221 = cljs.core._nth(params,(6));
var G__32222 = cljs.core._nth(params,(7));
var G__32223 = cljs.core._nth(params,(8));
var G__32224 = cljs.core._nth(params,(9));
var G__32225 = cljs.core._nth(params,(10));
var G__32226 = cljs.core._nth(params,(11));
var G__32227 = cljs.core._nth(params,(12));
var G__32228 = cljs.core._nth(params,(13));
var G__32229 = cljs.core._nth(params,(14));
var G__32230 = cljs.core._nth(params,(15));
var G__32231 = cljs.core._nth(params,(16));
var G__32232 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__32197,G__32198,G__32199,G__32200,G__32201,G__32202,G__32203,G__32204,G__32205,G__32206,G__32207,G__32208,G__32209,G__32210,G__32211,G__32212,G__32213,G__32214){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32215,G__32197);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32216,G__32198);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32217,G__32199);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32218,G__32200);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32219,G__32201);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32220,G__32202);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32221,G__32203);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32222,G__32204);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32223,G__32205);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32224,G__32206);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32225,G__32207);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32226,G__32208);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32227,G__32209);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32228,G__32210);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32229,G__32211);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32230,G__32212);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32231,G__32213);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32232,G__32214);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__32987 = cljs.core._nth(recur_val,(0));
var G__32988 = cljs.core._nth(recur_val,(1));
var G__32989 = cljs.core._nth(recur_val,(2));
var G__32990 = cljs.core._nth(recur_val,(3));
var G__32991 = cljs.core._nth(recur_val,(4));
var G__32992 = cljs.core._nth(recur_val,(5));
var G__32993 = cljs.core._nth(recur_val,(6));
var G__32994 = cljs.core._nth(recur_val,(7));
var G__32995 = cljs.core._nth(recur_val,(8));
var G__32996 = cljs.core._nth(recur_val,(9));
var G__32997 = cljs.core._nth(recur_val,(10));
var G__32998 = cljs.core._nth(recur_val,(11));
var G__32999 = cljs.core._nth(recur_val,(12));
var G__33000 = cljs.core._nth(recur_val,(13));
var G__33001 = cljs.core._nth(recur_val,(14));
var G__33002 = cljs.core._nth(recur_val,(15));
var G__33003 = cljs.core._nth(recur_val,(16));
var G__33004 = cljs.core._nth(recur_val,(17));
G__32197 = G__32987;
G__32198 = G__32988;
G__32199 = G__32989;
G__32200 = G__32990;
G__32201 = G__32991;
G__32202 = G__32992;
G__32203 = G__32993;
G__32204 = G__32994;
G__32205 = G__32995;
G__32206 = G__32996;
G__32207 = G__32997;
G__32208 = G__32998;
G__32209 = G__32999;
G__32210 = G__33000;
G__32211 = G__33001;
G__32212 = G__33002;
G__32213 = G__33003;
G__32214 = G__33004;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__32268 = cljs.core._nth(params,(0));
var G__32269 = cljs.core._nth(params,(1));
var G__32270 = cljs.core._nth(params,(2));
var G__32271 = cljs.core._nth(params,(3));
var G__32272 = cljs.core._nth(params,(4));
var G__32273 = cljs.core._nth(params,(5));
var G__32274 = cljs.core._nth(params,(6));
var G__32275 = cljs.core._nth(params,(7));
var G__32276 = cljs.core._nth(params,(8));
var G__32277 = cljs.core._nth(params,(9));
var G__32278 = cljs.core._nth(params,(10));
var G__32279 = cljs.core._nth(params,(11));
var G__32280 = cljs.core._nth(params,(12));
var G__32281 = cljs.core._nth(params,(13));
var G__32282 = cljs.core._nth(params,(14));
var G__32283 = cljs.core._nth(params,(15));
var G__32284 = cljs.core._nth(params,(16));
var G__32285 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__32247,G__32248,G__32249,G__32250,G__32251,G__32252,G__32253,G__32254,G__32255,G__32256,G__32257,G__32258,G__32259,G__32260,G__32261,G__32262,G__32263,G__32264){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32268,G__32247);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32269,G__32248);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32270,G__32249);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32271,G__32250);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32272,G__32251);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32273,G__32252);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32274,G__32253);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32275,G__32254);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32276,G__32255);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32277,G__32256);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32278,G__32257);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32279,G__32258);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32280,G__32259);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32281,G__32260);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32282,G__32261);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32283,G__32262);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32284,G__32263);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32285,G__32264);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__33012 = cljs.core._nth(recur_val,(0));
var G__33013 = cljs.core._nth(recur_val,(1));
var G__33014 = cljs.core._nth(recur_val,(2));
var G__33015 = cljs.core._nth(recur_val,(3));
var G__33016 = cljs.core._nth(recur_val,(4));
var G__33017 = cljs.core._nth(recur_val,(5));
var G__33018 = cljs.core._nth(recur_val,(6));
var G__33019 = cljs.core._nth(recur_val,(7));
var G__33020 = cljs.core._nth(recur_val,(8));
var G__33021 = cljs.core._nth(recur_val,(9));
var G__33022 = cljs.core._nth(recur_val,(10));
var G__33023 = cljs.core._nth(recur_val,(11));
var G__33024 = cljs.core._nth(recur_val,(12));
var G__33025 = cljs.core._nth(recur_val,(13));
var G__33026 = cljs.core._nth(recur_val,(14));
var G__33027 = cljs.core._nth(recur_val,(15));
var G__33028 = cljs.core._nth(recur_val,(16));
var G__33029 = cljs.core._nth(recur_val,(17));
G__32247 = G__33012;
G__32248 = G__33013;
G__32249 = G__33014;
G__32250 = G__33015;
G__32251 = G__33016;
G__32252 = G__33017;
G__32253 = G__33018;
G__32254 = G__33019;
G__32255 = G__33020;
G__32256 = G__33021;
G__32257 = G__33022;
G__32258 = G__33023;
G__32259 = G__33024;
G__32260 = G__33025;
G__32261 = G__33026;
G__32262 = G__33027;
G__32263 = G__33028;
G__32264 = G__33029;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32319 = cljs.core._nth(params,(0));
var G__32320 = cljs.core._nth(params,(1));
var G__32321 = cljs.core._nth(params,(2));
var G__32322 = cljs.core._nth(params,(3));
var G__32323 = cljs.core._nth(params,(4));
var G__32324 = cljs.core._nth(params,(5));
var G__32325 = cljs.core._nth(params,(6));
var G__32326 = cljs.core._nth(params,(7));
var G__32327 = cljs.core._nth(params,(8));
var G__32328 = cljs.core._nth(params,(9));
var G__32329 = cljs.core._nth(params,(10));
var G__32330 = cljs.core._nth(params,(11));
var G__32331 = cljs.core._nth(params,(12));
var G__32332 = cljs.core._nth(params,(13));
var G__32333 = cljs.core._nth(params,(14));
var G__32334 = cljs.core._nth(params,(15));
var G__32335 = cljs.core._nth(params,(16));
var G__32336 = cljs.core._nth(params,(17));
var G__32337 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__32300,G__32301,G__32302,G__32303,G__32304,G__32305,G__32306,G__32307,G__32308,G__32309,G__32310,G__32311,G__32312,G__32313,G__32314,G__32315,G__32316,G__32317,G__32318){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32319,G__32300);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32320,G__32301);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32321,G__32302);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32322,G__32303);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32323,G__32304);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32324,G__32305);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32325,G__32306);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32326,G__32307);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32327,G__32308);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32328,G__32309);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32329,G__32310);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32330,G__32311);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32331,G__32312);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32332,G__32313);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32333,G__32314);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32334,G__32315);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32335,G__32316);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32336,G__32317);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32337,G__32318);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__33037 = cljs.core._nth(recur_val,(0));
var G__33038 = cljs.core._nth(recur_val,(1));
var G__33039 = cljs.core._nth(recur_val,(2));
var G__33040 = cljs.core._nth(recur_val,(3));
var G__33041 = cljs.core._nth(recur_val,(4));
var G__33042 = cljs.core._nth(recur_val,(5));
var G__33043 = cljs.core._nth(recur_val,(6));
var G__33044 = cljs.core._nth(recur_val,(7));
var G__33045 = cljs.core._nth(recur_val,(8));
var G__33046 = cljs.core._nth(recur_val,(9));
var G__33047 = cljs.core._nth(recur_val,(10));
var G__33048 = cljs.core._nth(recur_val,(11));
var G__33049 = cljs.core._nth(recur_val,(12));
var G__33050 = cljs.core._nth(recur_val,(13));
var G__33051 = cljs.core._nth(recur_val,(14));
var G__33052 = cljs.core._nth(recur_val,(15));
var G__33053 = cljs.core._nth(recur_val,(16));
var G__33054 = cljs.core._nth(recur_val,(17));
var G__33055 = cljs.core._nth(recur_val,(18));
G__32300 = G__33037;
G__32301 = G__33038;
G__32302 = G__33039;
G__32303 = G__33040;
G__32304 = G__33041;
G__32305 = G__33042;
G__32306 = G__33043;
G__32307 = G__33044;
G__32308 = G__33045;
G__32309 = G__33046;
G__32310 = G__33047;
G__32311 = G__33048;
G__32312 = G__33049;
G__32313 = G__33050;
G__32314 = G__33051;
G__32315 = G__33052;
G__32316 = G__33053;
G__32317 = G__33054;
G__32318 = G__33055;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__32367 = cljs.core._nth(params,(0));
var G__32368 = cljs.core._nth(params,(1));
var G__32369 = cljs.core._nth(params,(2));
var G__32370 = cljs.core._nth(params,(3));
var G__32371 = cljs.core._nth(params,(4));
var G__32372 = cljs.core._nth(params,(5));
var G__32373 = cljs.core._nth(params,(6));
var G__32374 = cljs.core._nth(params,(7));
var G__32375 = cljs.core._nth(params,(8));
var G__32376 = cljs.core._nth(params,(9));
var G__32377 = cljs.core._nth(params,(10));
var G__32378 = cljs.core._nth(params,(11));
var G__32379 = cljs.core._nth(params,(12));
var G__32380 = cljs.core._nth(params,(13));
var G__32381 = cljs.core._nth(params,(14));
var G__32382 = cljs.core._nth(params,(15));
var G__32383 = cljs.core._nth(params,(16));
var G__32384 = cljs.core._nth(params,(17));
var G__32385 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__32348,G__32349,G__32350,G__32351,G__32352,G__32353,G__32354,G__32355,G__32356,G__32357,G__32358,G__32359,G__32360,G__32361,G__32362,G__32363,G__32364,G__32365,G__32366){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32367,G__32348);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32368,G__32349);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32369,G__32350);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32370,G__32351);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32371,G__32352);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32372,G__32353);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32373,G__32354);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32374,G__32355);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32375,G__32356);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32376,G__32357);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32377,G__32358);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32378,G__32359);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32379,G__32360);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32380,G__32361);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32381,G__32362);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32382,G__32363);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32383,G__32364);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32384,G__32365);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32385,G__32366);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__33065 = cljs.core._nth(recur_val,(0));
var G__33066 = cljs.core._nth(recur_val,(1));
var G__33067 = cljs.core._nth(recur_val,(2));
var G__33068 = cljs.core._nth(recur_val,(3));
var G__33069 = cljs.core._nth(recur_val,(4));
var G__33070 = cljs.core._nth(recur_val,(5));
var G__33071 = cljs.core._nth(recur_val,(6));
var G__33072 = cljs.core._nth(recur_val,(7));
var G__33073 = cljs.core._nth(recur_val,(8));
var G__33074 = cljs.core._nth(recur_val,(9));
var G__33075 = cljs.core._nth(recur_val,(10));
var G__33076 = cljs.core._nth(recur_val,(11));
var G__33077 = cljs.core._nth(recur_val,(12));
var G__33078 = cljs.core._nth(recur_val,(13));
var G__33079 = cljs.core._nth(recur_val,(14));
var G__33080 = cljs.core._nth(recur_val,(15));
var G__33081 = cljs.core._nth(recur_val,(16));
var G__33082 = cljs.core._nth(recur_val,(17));
var G__33083 = cljs.core._nth(recur_val,(18));
G__32348 = G__33065;
G__32349 = G__33066;
G__32350 = G__33067;
G__32351 = G__33068;
G__32352 = G__33069;
G__32353 = G__33070;
G__32354 = G__33071;
G__32355 = G__33072;
G__32356 = G__33073;
G__32357 = G__33074;
G__32358 = G__33075;
G__32359 = G__33076;
G__32360 = G__33077;
G__32361 = G__33078;
G__32362 = G__33079;
G__32363 = G__33080;
G__32364 = G__33081;
G__32365 = G__33082;
G__32366 = G__33083;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__32417 = cljs.core._nth(params,(0));
var G__32418 = cljs.core._nth(params,(1));
var G__32419 = cljs.core._nth(params,(2));
var G__32420 = cljs.core._nth(params,(3));
var G__32421 = cljs.core._nth(params,(4));
var G__32422 = cljs.core._nth(params,(5));
var G__32423 = cljs.core._nth(params,(6));
var G__32424 = cljs.core._nth(params,(7));
var G__32425 = cljs.core._nth(params,(8));
var G__32426 = cljs.core._nth(params,(9));
var G__32427 = cljs.core._nth(params,(10));
var G__32428 = cljs.core._nth(params,(11));
var G__32429 = cljs.core._nth(params,(12));
var G__32430 = cljs.core._nth(params,(13));
var G__32431 = cljs.core._nth(params,(14));
var G__32432 = cljs.core._nth(params,(15));
var G__32433 = cljs.core._nth(params,(16));
var G__32434 = cljs.core._nth(params,(17));
var G__32435 = cljs.core._nth(params,(18));
var G__32436 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__32397,G__32398,G__32399,G__32400,G__32401,G__32402,G__32403,G__32404,G__32405,G__32406,G__32407,G__32408,G__32409,G__32410,G__32411,G__32412,G__32413,G__32414,G__32415,G__32416){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__32417,G__32397);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32418,G__32398);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32419,G__32399);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32420,G__32400);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32421,G__32401);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32422,G__32402);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32423,G__32403);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32424,G__32404);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32425,G__32405);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32426,G__32406);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32427,G__32407);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32428,G__32408);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32429,G__32409);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32430,G__32410);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32431,G__32411);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32432,G__32412);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32433,G__32413);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32434,G__32414);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32435,G__32415);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__32436,G__32416);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__33087 = cljs.core._nth(recur_val,(0));
var G__33088 = cljs.core._nth(recur_val,(1));
var G__33089 = cljs.core._nth(recur_val,(2));
var G__33090 = cljs.core._nth(recur_val,(3));
var G__33091 = cljs.core._nth(recur_val,(4));
var G__33092 = cljs.core._nth(recur_val,(5));
var G__33093 = cljs.core._nth(recur_val,(6));
var G__33094 = cljs.core._nth(recur_val,(7));
var G__33095 = cljs.core._nth(recur_val,(8));
var G__33096 = cljs.core._nth(recur_val,(9));
var G__33097 = cljs.core._nth(recur_val,(10));
var G__33098 = cljs.core._nth(recur_val,(11));
var G__33099 = cljs.core._nth(recur_val,(12));
var G__33100 = cljs.core._nth(recur_val,(13));
var G__33101 = cljs.core._nth(recur_val,(14));
var G__33102 = cljs.core._nth(recur_val,(15));
var G__33103 = cljs.core._nth(recur_val,(16));
var G__33104 = cljs.core._nth(recur_val,(17));
var G__33105 = cljs.core._nth(recur_val,(18));
var G__33106 = cljs.core._nth(recur_val,(19));
G__32397 = G__33087;
G__32398 = G__33088;
G__32399 = G__33089;
G__32400 = G__33090;
G__32401 = G__33091;
G__32402 = G__33092;
G__32403 = G__33093;
G__32404 = G__33094;
G__32405 = G__33095;
G__32406 = G__33096;
G__32407 = G__33097;
G__32408 = G__33098;
G__32409 = G__33099;
G__32410 = G__33100;
G__32411 = G__33101;
G__32412 = G__33102;
G__32413 = G__33103;
G__32414 = G__33104;
G__32415 = G__33105;
G__32416 = G__33106;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
} else {
var G__32473 = cljs.core._nth(params,(0));
var G__32474 = cljs.core._nth(params,(1));
var G__32475 = cljs.core._nth(params,(2));
var G__32476 = cljs.core._nth(params,(3));
var G__32477 = cljs.core._nth(params,(4));
var G__32478 = cljs.core._nth(params,(5));
var G__32479 = cljs.core._nth(params,(6));
var G__32480 = cljs.core._nth(params,(7));
var G__32481 = cljs.core._nth(params,(8));
var G__32482 = cljs.core._nth(params,(9));
var G__32483 = cljs.core._nth(params,(10));
var G__32484 = cljs.core._nth(params,(11));
var G__32485 = cljs.core._nth(params,(12));
var G__32486 = cljs.core._nth(params,(13));
var G__32487 = cljs.core._nth(params,(14));
var G__32488 = cljs.core._nth(params,(15));
var G__32489 = cljs.core._nth(params,(16));
var G__32490 = cljs.core._nth(params,(17));
var G__32491 = cljs.core._nth(params,(18));
var G__32492 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460,G__32461,G__32462,G__32463,G__32464,G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__32473,G__32453);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__32474,G__32454);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__32475,G__32455);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__32476,G__32456);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__32477,G__32457);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__32478,G__32458);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__32479,G__32459);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__32480,G__32460);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__32481,G__32461);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__32482,G__32462);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__32483,G__32463);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__32484,G__32464);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__32485,G__32465);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__32486,G__32466);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__32487,G__32467);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__32488,G__32468);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__32489,G__32469);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__32490,G__32470);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__32491,G__32471);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__32492,G__32472);
var ret__30417__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___30418__auto__ = (ret__30417__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___30418__auto__){
var recur_val = sci.impl.types.getVal(ret__30417__auto__);
var G__33109 = cljs.core._nth(recur_val,(0));
var G__33110 = cljs.core._nth(recur_val,(1));
var G__33111 = cljs.core._nth(recur_val,(2));
var G__33112 = cljs.core._nth(recur_val,(3));
var G__33113 = cljs.core._nth(recur_val,(4));
var G__33114 = cljs.core._nth(recur_val,(5));
var G__33115 = cljs.core._nth(recur_val,(6));
var G__33116 = cljs.core._nth(recur_val,(7));
var G__33117 = cljs.core._nth(recur_val,(8));
var G__33118 = cljs.core._nth(recur_val,(9));
var G__33119 = cljs.core._nth(recur_val,(10));
var G__33120 = cljs.core._nth(recur_val,(11));
var G__33121 = cljs.core._nth(recur_val,(12));
var G__33122 = cljs.core._nth(recur_val,(13));
var G__33123 = cljs.core._nth(recur_val,(14));
var G__33124 = cljs.core._nth(recur_val,(15));
var G__33125 = cljs.core._nth(recur_val,(16));
var G__33126 = cljs.core._nth(recur_val,(17));
var G__33127 = cljs.core._nth(recur_val,(18));
var G__33128 = cljs.core._nth(recur_val,(19));
G__32453 = G__33109;
G__32454 = G__33110;
G__32455 = G__33111;
G__32456 = G__33112;
G__32457 = G__33113;
G__32458 = G__33114;
G__32459 = G__33115;
G__32460 = G__33116;
G__32461 = G__33117;
G__32462 = G__33118;
G__32463 = G__33119;
G__32464 = G__33120;
G__32465 = G__33121;
G__32466 = G__33122;
G__32467 = G__33123;
G__32468 = G__33124;
G__32469 = G__33125;
G__32470 = G__33126;
G__32471 = G__33127;
G__32472 = G__33128;
continue;
} else {
return ret__30417__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__33133 = cljs.core.next(args_STAR_);
var G__33134 = cljs.core.next(params__$1);
var G__33135 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__33133;
params__$1 = G__33134;
ret = G__33135;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__32513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(0),null);
var vec__32516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32516,(0),null);
var G__33138 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__33138;
continue;
} else {
var G__33140 = recur_val;
args = G__33140;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33141__i = 0, G__33141__a = new Array(arguments.length -  0);
while (G__33141__i < G__33141__a.length) {G__33141__a[G__33141__i] = arguments[G__33141__i + 0]; ++G__33141__i;}
  args = new cljs.core.IndexedSeq(G__33141__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__33142){
var args = cljs.core.seq(arglist__33142);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__33144 = cljs.core.next(args_STAR_);
var G__33145 = cljs.core.next(params__$1);
var G__33146 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__33144;
params__$1 = G__33145;
ret = G__33146;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__32523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32523,(0),null);
var vec__32526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32523,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(0),null);
var G__33147 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__33147;
continue;
} else {
var G__33148 = recur_val;
args = G__33148;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33149__i = 0, G__33149__a = new Array(arguments.length -  0);
while (G__33149__i < G__33149__a.length) {G__33149__a[G__33149__i] = arguments[G__33149__i + 0]; ++G__33149__i;}
  args = new cljs.core.IndexedSeq(G__33149__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__33150){
var args = cljs.core.seq(arglist__33150);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__33153__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__33153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33155__i = 0, G__33155__a = new Array(arguments.length -  0);
while (G__33155__i < G__33155__a.length) {G__33155__a[G__33155__i] = arguments[G__33155__i + 0]; ++G__33155__i;}
  args = new cljs.core.IndexedSeq(G__33155__a,0,null);
} 
return G__33153__delegate.call(this,args);};
G__33153.cljs$lang$maxFixedArity = 0;
G__33153.cljs$lang$applyTo = (function (arglist__33156){
var args = cljs.core.seq(arglist__33156);
return G__33153__delegate(args);
});
G__33153.cljs$core$IFn$_invoke$arity$variadic = G__33153__delegate;
return G__33153;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__32540_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32540_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
