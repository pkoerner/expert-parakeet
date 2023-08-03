goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__50164){
var map__50175 = p__50164;
var map__50175__$1 = cljs.core.__destructure_map(map__50175);
var args = map__50175__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50175__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50175__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__50185 = src;
var map__50185__$1 = cljs.core.__destructure_map(map__50185);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50185__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__50197 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50197,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__50197;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__50202 = arguments.length;
switch (G__50202) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__50223_50512 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__50221_SHARP_,p2__50220_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__50220_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__50221_SHARP_ + (1)));
}),stack));
var chunk__50224_50513 = null;
var count__50225_50514 = (0);
var i__50226_50515 = (0);
while(true){
if((i__50226_50515 < count__50225_50514)){
var map__50286_50516 = chunk__50224_50513.cljs$core$IIndexed$_nth$arity$2(null,i__50226_50515);
var map__50286_50517__$1 = cljs.core.__destructure_map(map__50286_50516);
var i_50518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286_50517__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_50519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286_50517__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_50520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286_50517__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_50521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286_50517__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_50522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50286_50517__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_50520)){
if(cljs.core.truth_(src_50521)){
var vec__50289_50523 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_50521,/:/);
var file_50524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50289_50523,(0),null);
var line_50525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50289_50523,(1),null);
if(cljs.core.truth_(args_50522)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50518),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_50520)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_50524),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50525),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_50522,el_50519);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50518),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_50520)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_50524),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50525),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_50519);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50518),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_50520)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_50522,el_50519);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50518),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_50519);
}


var G__50528 = seq__50223_50512;
var G__50529 = chunk__50224_50513;
var G__50530 = count__50225_50514;
var G__50531 = (i__50226_50515 + (1));
seq__50223_50512 = G__50528;
chunk__50224_50513 = G__50529;
count__50225_50514 = G__50530;
i__50226_50515 = G__50531;
continue;
} else {
var temp__5804__auto___50532 = cljs.core.seq(seq__50223_50512);
if(temp__5804__auto___50532){
var seq__50223_50534__$1 = temp__5804__auto___50532;
if(cljs.core.chunked_seq_QMARK_(seq__50223_50534__$1)){
var c__5568__auto___50537 = cljs.core.chunk_first(seq__50223_50534__$1);
var G__50538 = cljs.core.chunk_rest(seq__50223_50534__$1);
var G__50539 = c__5568__auto___50537;
var G__50540 = cljs.core.count(c__5568__auto___50537);
var G__50541 = (0);
seq__50223_50512 = G__50538;
chunk__50224_50513 = G__50539;
count__50225_50514 = G__50540;
i__50226_50515 = G__50541;
continue;
} else {
var map__50308_50543 = cljs.core.first(seq__50223_50534__$1);
var map__50308_50544__$1 = cljs.core.__destructure_map(map__50308_50543);
var i_50545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308_50544__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_50546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308_50544__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_50547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308_50544__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_50548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308_50544__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_50549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50308_50544__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_50547)){
if(cljs.core.truth_(src_50548)){
var vec__50321_50552 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_50548,/:/);
var file_50553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50321_50552,(0),null);
var line_50554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50321_50552,(1),null);
if(cljs.core.truth_(args_50549)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50545),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_50547)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_50553),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50554),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_50549,el_50546);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50545),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_50547)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_50553),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50554),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_50546);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50545),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_50547)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_50549,el_50546);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_50545),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_50546);
}


var G__50560 = cljs.core.next(seq__50223_50534__$1);
var G__50561 = null;
var G__50562 = (0);
var G__50563 = (0);
seq__50223_50512 = G__50560;
chunk__50224_50513 = G__50561;
count__50225_50514 = G__50562;
i__50226_50515 = G__50563;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__50336 = cljs.core.seq(problems);
var chunk__50337 = null;
var count__50338 = (0);
var i__50339 = (0);
while(true){
if((i__50339 < count__50338)){
var map__50367 = chunk__50337.cljs$core$IIndexed$_nth$arity$2(null,i__50339);
var map__50367__$1 = cljs.core.__destructure_map(map__50367);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50367__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__50370_50564 = problem;
var G__50370_50565__$1 = (((G__50370_50564 instanceof cljs.core.Keyword))?G__50370_50564.fqn:null);
switch (G__50370_50565__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__50573 = seq__50336;
var G__50574 = chunk__50337;
var G__50575 = count__50338;
var G__50576 = (i__50339 + (1));
seq__50336 = G__50573;
chunk__50337 = G__50574;
count__50338 = G__50575;
i__50339 = G__50576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50336);
if(temp__5804__auto__){
var seq__50336__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50336__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50336__$1);
var G__50577 = cljs.core.chunk_rest(seq__50336__$1);
var G__50578 = c__5568__auto__;
var G__50579 = cljs.core.count(c__5568__auto__);
var G__50580 = (0);
seq__50336 = G__50577;
chunk__50337 = G__50578;
count__50338 = G__50579;
i__50339 = G__50580;
continue;
} else {
var map__50389 = cljs.core.first(seq__50336__$1);
var map__50389__$1 = cljs.core.__destructure_map(map__50389);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50389__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__50393_50584 = problem;
var G__50393_50585__$1 = (((G__50393_50584 instanceof cljs.core.Keyword))?G__50393_50584.fqn:null);
switch (G__50393_50585__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__50597 = cljs.core.next(seq__50336__$1);
var G__50598 = null;
var G__50599 = (0);
var G__50600 = (0);
seq__50336 = G__50597;
chunk__50337 = G__50598;
count__50338 = G__50599;
i__50339 = G__50600;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__50402){
var map__50404 = p__50402;
var map__50404__$1 = cljs.core.__destructure_map(map__50404);
var src = map__50404__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50404__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50614 = arguments.length;
var i__5770__auto___50615 = (0);
while(true){
if((i__5770__auto___50615 < len__5769__auto___50614)){
args__5775__auto__.push((arguments[i__5770__auto___50615]));

var G__50616 = (i__5770__auto___50615 + (1));
i__5770__auto___50615 = G__50616;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__50431){
var map__50433 = p__50431;
var map__50433__$1 = cljs.core.__destructure_map(map__50433);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50433__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__50628__delegate = function (p__50439){
var map__50443 = p__50439;
var map__50443__$1 = cljs.core.__destructure_map(map__50443);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50443__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__50628 = function (var_args){
var p__50439 = null;
if (arguments.length > 0) {
var G__50636__i = 0, G__50636__a = new Array(arguments.length -  0);
while (G__50636__i < G__50636__a.length) {G__50636__a[G__50636__i] = arguments[G__50636__i + 0]; ++G__50636__i;}
  p__50439 = new cljs.core.IndexedSeq(G__50636__a,0,null);
} 
return G__50628__delegate.call(this,p__50439);};
G__50628.cljs$lang$maxFixedArity = 0;
G__50628.cljs$lang$applyTo = (function (arglist__50638){
var p__50439 = cljs.core.seq(arglist__50638);
return G__50628__delegate(p__50439);
});
G__50628.cljs$core$IFn$_invoke$arity$variadic = G__50628__delegate;
return G__50628;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq50423){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50423));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50639 = arguments.length;
var i__5770__auto___50640 = (0);
while(true){
if((i__5770__auto___50640 < len__5769__auto___50639)){
args__5775__auto__.push((arguments[i__5770__auto___50640]));

var G__50641 = (i__5770__auto___50640 + (1));
i__5770__auto___50640 = G__50641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__50469){
var map__50473 = p__50469;
var map__50473__$1 = cljs.core.__destructure_map(map__50473);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__50646__delegate = function (p__50478){
var map__50479 = p__50478;
var map__50479__$1 = cljs.core.__destructure_map(map__50479);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50479__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50479__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__50646 = function (var_args){
var p__50478 = null;
if (arguments.length > 0) {
var G__50648__i = 0, G__50648__a = new Array(arguments.length -  0);
while (G__50648__i < G__50648__a.length) {G__50648__a[G__50648__i] = arguments[G__50648__i + 0]; ++G__50648__i;}
  p__50478 = new cljs.core.IndexedSeq(G__50648__a,0,null);
} 
return G__50646__delegate.call(this,p__50478);};
G__50646.cljs$lang$maxFixedArity = 0;
G__50646.cljs$lang$applyTo = (function (arglist__50649){
var p__50478 = cljs.core.seq(arglist__50649);
return G__50646__delegate(p__50478);
});
G__50646.cljs$core$IFn$_invoke$arity$variadic = G__50646__delegate;
return G__50646;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq50452){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50452));
}));


//# sourceMappingURL=re_com.debug.js.map
