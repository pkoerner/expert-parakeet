goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.token_fn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$compression$token_fn(p__17194){
var vec__17195 = p__17194;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17195,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17195,(1),null);
return (function (s){
var temp__5804__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5804__auto__)){
var chunk = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count(chunk)], null);
} else {
return null;
}
});
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.tokenizer = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$compression$tokenizer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17230 = arguments.length;
var i__5770__auto___17231 = (0);
while(true){
if((i__5770__auto___17231 < len__5769__auto___17230)){
args__5775__auto__.push((arguments[i__5770__auto___17231]));

var G__17232 = (i__5770__auto___17231 + (1));
i__5770__auto___17231 = G__17232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.token_fn,tags_PLUS_regexes);
return (function (s){
return cljs.core.some((function (p1__17202_SHARP_){
return (p1__17202_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17202_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__17202_SHARP_.call(null,s));
}),fs);
});
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.tokenizer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.tokenizer.cljs$lang$applyTo = (function (seq17203){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17203));
}));

/**
 * Tokenizer used during stylesheet compression.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.stylesheet_tokenizer = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),/^and\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.compress_stylesheet = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5802__auto__ = day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.stylesheet_tokenizer(s1);
if(cljs.core.truth_(temp__5802__auto__)){
var map__17217 = temp__5802__auto__;
var map__17217__$1 = cljs.core.__destructure_map(map__17217);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__17244 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__17245 = [s2,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17222 = tag;
var G__17222__$1 = (((G__17222 instanceof cljs.core.Keyword))?G__17222.fqn:null);
switch (G__17222__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "and":
return "and ";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__17244;
s2 = G__17245;
continue;
} else {
return s2;
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.compression.js.map
