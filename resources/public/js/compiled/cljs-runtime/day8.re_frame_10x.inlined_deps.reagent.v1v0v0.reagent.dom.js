goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14587 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14588 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14588);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__14589 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14590 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14590);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14589);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14587);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__14599 = arguments.length;
switch (G__14599) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__14608 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14608,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14608,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__14613_14645 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__14614_14646 = null;
var count__14615_14647 = (0);
var i__14616_14648 = (0);
while(true){
if((i__14616_14648 < count__14615_14647)){
var vec__14627_14650 = chunk__14614_14646.cljs$core$IIndexed$_nth$arity$2(null,i__14616_14648);
var container_14651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14627_14650,(0),null);
var comp_14652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14627_14650,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_14652,container_14651);


var G__14653 = seq__14613_14645;
var G__14654 = chunk__14614_14646;
var G__14655 = count__14615_14647;
var G__14656 = (i__14616_14648 + (1));
seq__14613_14645 = G__14653;
chunk__14614_14646 = G__14654;
count__14615_14647 = G__14655;
i__14616_14648 = G__14656;
continue;
} else {
var temp__5804__auto___14657 = cljs.core.seq(seq__14613_14645);
if(temp__5804__auto___14657){
var seq__14613_14658__$1 = temp__5804__auto___14657;
if(cljs.core.chunked_seq_QMARK_(seq__14613_14658__$1)){
var c__5568__auto___14659 = cljs.core.chunk_first(seq__14613_14658__$1);
var G__14660 = cljs.core.chunk_rest(seq__14613_14658__$1);
var G__14661 = c__5568__auto___14659;
var G__14662 = cljs.core.count(c__5568__auto___14659);
var G__14663 = (0);
seq__14613_14645 = G__14660;
chunk__14614_14646 = G__14661;
count__14615_14647 = G__14662;
i__14616_14648 = G__14663;
continue;
} else {
var vec__14630_14665 = cljs.core.first(seq__14613_14658__$1);
var container_14666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630_14665,(0),null);
var comp_14667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14630_14665,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_14667,container_14666);


var G__14668 = cljs.core.next(seq__14613_14658__$1);
var G__14669 = null;
var G__14670 = (0);
var G__14671 = (0);
seq__14613_14645 = G__14668;
chunk__14614_14646 = G__14669;
count__14615_14647 = G__14670;
i__14616_14648 = G__14671;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
