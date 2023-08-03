goog.provide('core');
core.debug_QMARK_ = goog.DEBUG;
core.dev_setup = (function core$dev_setup(){
if(core.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
core.init = (function core$init(){
re_frame.core.clear_subscription_cache_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));

core.dev_setup();

router.init_routes_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router.router_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),router.router], null)], null),document.getElementById("app"));
});
core.with_credentials_interceptor = (function (){var G__28025 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"With Credentials Interceptor",new cljs.core.Keyword(null,"request","request",1772954723),(function (p1__28024_SHARP_){
return cljs.core.assoc_in(p1__28024_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235)], null),true);
})], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__28025) : ajax.core.to_interceptor.call(null,G__28025));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ajax.core.default_interceptors,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,core.with_credentials_interceptor));

//# sourceMappingURL=core.js.map
