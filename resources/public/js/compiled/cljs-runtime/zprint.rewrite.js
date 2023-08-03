goog.provide('zprint.rewrite');
zprint.rewrite.prewalk_subtree = (function zprint$rewrite$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_(loc))){
return loc;
} else {
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : p_QMARK_.call(null,loc)))){
var temp__5802__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5802__auto__)){
var n = temp__5802__auto__;
var G__31257 = rewrite_clj.zip.next(n);
loc = G__31257;
continue;
} else {
var G__31258 = rewrite_clj.zip.next(loc);
loc = G__31258;
continue;
}
} else {
var G__31260 = rewrite_clj.zip.next(loc);
loc = G__31260;
continue;
}
}
break;
}
});
zprint.rewrite.prewalk = (function zprint$rewrite$prewalk(zloc,p_QMARK_,f){
return rewrite_clj.zip.replace(zloc,rewrite_clj.zip.root(zprint.rewrite.prewalk_subtree(p_QMARK_,f,(function (){var G__31230 = zloc;
var G__31230__$1 = (((G__31230 == null))?null:rewrite_clj.zip.node(G__31230));
if((G__31230__$1 == null)){
return null;
} else {
return rewrite_clj.zip.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__31230__$1);
}
})())));
});
/**
 * Given a zloc, get something out of it that is sortable.
 */
zprint.rewrite.get_sortable = (function zprint$rewrite$get_sortable(zloc){
var nloc = zloc;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(nloc),new cljs.core.Keyword(null,"token","token",-1211463215))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.string(nloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_element = rewrite_clj.zip.right(nloc);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(next_element),new cljs.core.Keyword(null,"token","token",-1211463215))){
return rewrite_clj.zip.string(next_element);
} else {
return "";
}
})())].join('');
} else {
var G__31268 = rewrite_clj.zip.down(nloc);
nloc = G__31268;
continue;
}
break;
}
});
/**
 * Sort the everything in the vector to the right of zloc.
 */
zprint.rewrite.sort_val = (function zprint$rewrite$sort_val(zloc){
var dep_val = zloc;
var dep_seq = (function (){var nloc = zloc;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(nloc)){
var G__31269 = rewrite_clj.zip.right(nloc);
var G__31270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,nloc);
nloc = G__31269;
out = G__31270;
continue;
} else {
return out;
}
break;
}
})();
var dep_count = cljs.core.count(dep_seq);
var sorted_seq = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(zprint.rewrite.get_sortable,dep_seq);
var nloc = zloc;
var new_loc = sorted_seq;
var last_loc = null;
while(true){
if(cljs.core.truth_(new_loc)){
var new_z = cljs.core.first(new_loc);
var new_node = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(new_z),new cljs.core.Keyword(null,"uneval","uneval",1932037707)))?rewrite_clj.parser.parse_string(rewrite_clj.zip.string(new_z)):rewrite_clj.zip.node(new_z));
var replaced_loc = clojure.zip.replace(nloc,new_node);
var G__31272 = rewrite_clj.zip.right(replaced_loc);
var G__31273 = cljs.core.next(new_loc);
var G__31274 = replaced_loc;
nloc = G__31272;
new_loc = G__31273;
last_loc = G__31274;
continue;
} else {
return rewrite_clj.zip.up(last_loc);
}
break;
}
});
/**
 * Do a down and a sort-val
 */
zprint.rewrite.sort_down = (function zprint$rewrite$sort_down(zloc){
return zprint.rewrite.sort_val(rewrite_clj.zip.down(rewrite_clj.zip.right(zloc)));
});
/**
 * Reorder the dependencies in a project.clj file.
 */
zprint.rewrite.sort_dependencies = (function zprint$rewrite$sort_dependencies(caller,options,zloc){
var new_dep = zprint.rewrite.prewalk(zloc,(function (p1__31251_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(p1__31251_SHARP_),new cljs.core.Keyword(null,"token","token",-1211463215))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.sexpr(p1__31251_SHARP_),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605))));
}),zprint.rewrite.sort_down);
return new_dep;
});

//# sourceMappingURL=zprint.rewrite.js.map
