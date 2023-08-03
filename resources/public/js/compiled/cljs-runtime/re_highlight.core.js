goog.provide('re_highlight.core');
goog.scope(function(){
  re_highlight.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$highlight_DOT_js$lib$core=shadow.js.require("module$node_modules$highlight_DOT_js$lib$core", {});
var module$node_modules$highlight_DOT_js$lib$languages$clojure=shadow.js.require("module$node_modules$highlight_DOT_js$lib$languages$clojure", {});
re_highlight.core.hljs_highlight_element = re_highlight.core.goog$module$goog$object.get(module$node_modules$highlight_DOT_js$lib$core,"highlightElement");
re_highlight.core.hljs_init_highlighting = re_highlight.core.goog$module$goog$object.get(module$node_modules$highlight_DOT_js$lib$core,"initHighlighting");
re_highlight.core.hljs_register_language = re_highlight.core.goog$module$goog$object.get(module$node_modules$highlight_DOT_js$lib$core,"registerLanguage");
/**
 * Return true if the Highlight.js library exposes the API we expect to see in
 * a compatible version, otherwise false. If this returns false, it is likely
 * that your transitive dependencies are pulling in a different version of
 * Highlight.js to the version that re-highlight depends on.
 */
re_highlight.core.hljs_compatible_QMARK_ = (function re_highlight$core$hljs_compatible_QMARK_(){
return ((cljs.core.fn_QMARK_(re_highlight.core.hljs_highlight_element)) && (((cljs.core.fn_QMARK_(re_highlight.core.hljs_init_highlighting)) && (cljs.core.fn_QMARK_(re_highlight.core.hljs_register_language)))));
});
re_highlight.core.register_language = (function re_highlight$core$register_language(label,js_obj){
if(cljs.core.fn_QMARK_(re_highlight.core.hljs_register_language)){
return (re_highlight.core.hljs_register_language.cljs$core$IFn$_invoke$arity$2 ? re_highlight.core.hljs_register_language.cljs$core$IFn$_invoke$arity$2(label,js_obj) : re_highlight.core.hljs_register_language.call(null,label,js_obj));
} else {
return null;
}
});
re_highlight.core.register_language("clojure",module$node_modules$highlight_DOT_js$lib$languages$clojure);
re_highlight.core.did_mount = (function re_highlight$core$did_mount(this$){
var temp__5804__auto__ = re_highlight.core.goog$module$goog$object.get(reagent.dom.dom_node(this$),"firstChild");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return (re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1 ? re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1(el) : re_highlight.core.hljs_highlight_element.call(null,el));
} else {
return null;
}
});
re_highlight.core.did_update = (function re_highlight$core$did_update(this$,old_argv,old_state,snapshot){
var temp__5804__auto__ = re_highlight.core.goog$module$goog$object.get(reagent.dom.dom_node(this$),"firstChild");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
re_highlight.core.goog$module$goog$object.set(re_highlight.core.hljs_init_highlighting,"called",false);

return (re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1 ? re_highlight.core.hljs_highlight_element.cljs$core$IFn$_invoke$arity$1(el) : re_highlight.core.hljs_highlight_element.call(null,el));
} else {
return null;
}
});
re_highlight.core.render = (function re_highlight$core$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22173 = arguments.length;
var i__5770__auto___22174 = (0);
while(true){
if((i__5770__auto___22174 < len__5769__auto___22173)){
args__5775__auto__.push((arguments[i__5770__auto___22174]));

var G__22176 = (i__5770__auto___22174 + (1));
i__5770__auto___22174 = G__22176;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_highlight.core.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_highlight.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (p__22132,children){
var map__22133 = p__22132;
var map__22133__$1 = cljs.core.__destructure_map(map__22133);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),language], null)], null),children)], null);
}));

(re_highlight.core.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_highlight.core.render.cljs$lang$applyTo = (function (seq22112){
var G__22113 = cljs.core.first(seq22112);
var seq22112__$1 = cljs.core.next(seq22112);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22113,seq22112__$1);
}));

re_highlight.core.highlight = (function re_highlight$core$highlight(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),re_highlight.core.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),re_highlight.core.did_update,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),re_highlight.core.render], null));
});

//# sourceMappingURL=re_highlight.core.js.map
