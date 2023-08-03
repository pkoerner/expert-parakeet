goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48159 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48159(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48160 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48160(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47178 = coll;
var G__47179 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47178,G__47179) : shadow.dom.lazy_native_coll_seq.call(null,G__47178,G__47179));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47195 = arguments.length;
switch (G__47195) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47202 = arguments.length;
switch (G__47202) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47206 = arguments.length;
switch (G__47206) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47210 = arguments.length;
switch (G__47210) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47220 = arguments.length;
switch (G__47220) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47228 = arguments.length;
switch (G__47228) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47241){if((e47241 instanceof Object)){
var e = e47241;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47241;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47250 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47251 = null;
var count__47252 = (0);
var i__47253 = (0);
while(true){
if((i__47253 < count__47252)){
var el = chunk__47251.cljs$core$IIndexed$_nth$arity$2(null,i__47253);
var handler_48196__$1 = ((function (seq__47250,chunk__47251,count__47252,i__47253,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47250,chunk__47251,count__47252,i__47253,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48196__$1);


var G__48198 = seq__47250;
var G__48199 = chunk__47251;
var G__48200 = count__47252;
var G__48201 = (i__47253 + (1));
seq__47250 = G__48198;
chunk__47251 = G__48199;
count__47252 = G__48200;
i__47253 = G__48201;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47250);
if(temp__5804__auto__){
var seq__47250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47250__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47250__$1);
var G__48202 = cljs.core.chunk_rest(seq__47250__$1);
var G__48204 = c__5568__auto__;
var G__48205 = cljs.core.count(c__5568__auto__);
var G__48206 = (0);
seq__47250 = G__48202;
chunk__47251 = G__48204;
count__47252 = G__48205;
i__47253 = G__48206;
continue;
} else {
var el = cljs.core.first(seq__47250__$1);
var handler_48207__$1 = ((function (seq__47250,chunk__47251,count__47252,i__47253,el,seq__47250__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47250,chunk__47251,count__47252,i__47253,el,seq__47250__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48207__$1);


var G__48209 = cljs.core.next(seq__47250__$1);
var G__48210 = null;
var G__48211 = (0);
var G__48212 = (0);
seq__47250 = G__48209;
chunk__47251 = G__48210;
count__47252 = G__48211;
i__47253 = G__48212;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47273 = arguments.length;
switch (G__47273) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events__$1){
var seq__47288 = cljs.core.seq(events__$1);
var chunk__47289 = null;
var count__47290 = (0);
var i__47291 = (0);
while(true){
if((i__47291 < count__47290)){
var vec__47306 = chunk__47289.cljs$core$IIndexed$_nth$arity$2(null,i__47291);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47306,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48221 = seq__47288;
var G__48222 = chunk__47289;
var G__48223 = count__47290;
var G__48224 = (i__47291 + (1));
seq__47288 = G__48221;
chunk__47289 = G__48222;
count__47290 = G__48223;
i__47291 = G__48224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47288);
if(temp__5804__auto__){
var seq__47288__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47288__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47288__$1);
var G__48225 = cljs.core.chunk_rest(seq__47288__$1);
var G__48226 = c__5568__auto__;
var G__48227 = cljs.core.count(c__5568__auto__);
var G__48228 = (0);
seq__47288 = G__48225;
chunk__47289 = G__48226;
count__47290 = G__48227;
i__47291 = G__48228;
continue;
} else {
var vec__47311 = cljs.core.first(seq__47288__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47311,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48232 = cljs.core.next(seq__47288__$1);
var G__48233 = null;
var G__48234 = (0);
var G__48235 = (0);
seq__47288 = G__48232;
chunk__47289 = G__48233;
count__47290 = G__48234;
i__47291 = G__48235;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47317 = cljs.core.seq(styles);
var chunk__47318 = null;
var count__47319 = (0);
var i__47320 = (0);
while(true){
if((i__47320 < count__47319)){
var vec__47336 = chunk__47318.cljs$core$IIndexed$_nth$arity$2(null,i__47320);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48237 = seq__47317;
var G__48238 = chunk__47318;
var G__48239 = count__47319;
var G__48240 = (i__47320 + (1));
seq__47317 = G__48237;
chunk__47318 = G__48238;
count__47319 = G__48239;
i__47320 = G__48240;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47317);
if(temp__5804__auto__){
var seq__47317__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47317__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47317__$1);
var G__48241 = cljs.core.chunk_rest(seq__47317__$1);
var G__48242 = c__5568__auto__;
var G__48243 = cljs.core.count(c__5568__auto__);
var G__48244 = (0);
seq__47317 = G__48241;
chunk__47318 = G__48242;
count__47319 = G__48243;
i__47320 = G__48244;
continue;
} else {
var vec__47344 = cljs.core.first(seq__47317__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47344,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48246 = cljs.core.next(seq__47317__$1);
var G__48247 = null;
var G__48248 = (0);
var G__48249 = (0);
seq__47317 = G__48246;
chunk__47318 = G__48247;
count__47319 = G__48248;
i__47320 = G__48249;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47374_48250 = key;
var G__47374_48251__$1 = (((G__47374_48250 instanceof cljs.core.Keyword))?G__47374_48250.fqn:null);
switch (G__47374_48251__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48256 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48256,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48256,"aria-");
}
})())){
el.setAttribute(ks_48256,value);
} else {
(el[ks_48256] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47403){
var map__47404 = p__47403;
var map__47404__$1 = cljs.core.__destructure_map(map__47404);
var props = map__47404__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47404__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47406 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47411 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47411,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47411;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47415 = arguments.length;
switch (G__47415) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47421){
var vec__47426 = p__47421;
var seq__47427 = cljs.core.seq(vec__47426);
var first__47428 = cljs.core.first(seq__47427);
var seq__47427__$1 = cljs.core.next(seq__47427);
var nn = first__47428;
var first__47428__$1 = cljs.core.first(seq__47427__$1);
var seq__47427__$2 = cljs.core.next(seq__47427__$1);
var np = first__47428__$1;
var nc = seq__47427__$2;
var node = vec__47426;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47436 = nn;
var G__47437 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47436,G__47437) : create_fn.call(null,G__47436,G__47437));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47438 = nn;
var G__47439 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47438,G__47439) : create_fn.call(null,G__47438,G__47439));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47449 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47449,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47449,(1),null);
var seq__47453_48282 = cljs.core.seq(node_children);
var chunk__47454_48283 = null;
var count__47455_48284 = (0);
var i__47456_48285 = (0);
while(true){
if((i__47456_48285 < count__47455_48284)){
var child_struct_48286 = chunk__47454_48283.cljs$core$IIndexed$_nth$arity$2(null,i__47456_48285);
var children_48288 = shadow.dom.dom_node(child_struct_48286);
if(cljs.core.seq_QMARK_(children_48288)){
var seq__47515_48289 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48288));
var chunk__47517_48290 = null;
var count__47518_48291 = (0);
var i__47519_48292 = (0);
while(true){
if((i__47519_48292 < count__47518_48291)){
var child_48293 = chunk__47517_48290.cljs$core$IIndexed$_nth$arity$2(null,i__47519_48292);
if(cljs.core.truth_(child_48293)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48293);


var G__48294 = seq__47515_48289;
var G__48295 = chunk__47517_48290;
var G__48296 = count__47518_48291;
var G__48297 = (i__47519_48292 + (1));
seq__47515_48289 = G__48294;
chunk__47517_48290 = G__48295;
count__47518_48291 = G__48296;
i__47519_48292 = G__48297;
continue;
} else {
var G__48298 = seq__47515_48289;
var G__48299 = chunk__47517_48290;
var G__48300 = count__47518_48291;
var G__48301 = (i__47519_48292 + (1));
seq__47515_48289 = G__48298;
chunk__47517_48290 = G__48299;
count__47518_48291 = G__48300;
i__47519_48292 = G__48301;
continue;
}
} else {
var temp__5804__auto___48302 = cljs.core.seq(seq__47515_48289);
if(temp__5804__auto___48302){
var seq__47515_48303__$1 = temp__5804__auto___48302;
if(cljs.core.chunked_seq_QMARK_(seq__47515_48303__$1)){
var c__5568__auto___48305 = cljs.core.chunk_first(seq__47515_48303__$1);
var G__48306 = cljs.core.chunk_rest(seq__47515_48303__$1);
var G__48307 = c__5568__auto___48305;
var G__48308 = cljs.core.count(c__5568__auto___48305);
var G__48309 = (0);
seq__47515_48289 = G__48306;
chunk__47517_48290 = G__48307;
count__47518_48291 = G__48308;
i__47519_48292 = G__48309;
continue;
} else {
var child_48310 = cljs.core.first(seq__47515_48303__$1);
if(cljs.core.truth_(child_48310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48310);


var G__48311 = cljs.core.next(seq__47515_48303__$1);
var G__48312 = null;
var G__48313 = (0);
var G__48314 = (0);
seq__47515_48289 = G__48311;
chunk__47517_48290 = G__48312;
count__47518_48291 = G__48313;
i__47519_48292 = G__48314;
continue;
} else {
var G__48315 = cljs.core.next(seq__47515_48303__$1);
var G__48316 = null;
var G__48317 = (0);
var G__48318 = (0);
seq__47515_48289 = G__48315;
chunk__47517_48290 = G__48316;
count__47518_48291 = G__48317;
i__47519_48292 = G__48318;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48288);
}


var G__48320 = seq__47453_48282;
var G__48321 = chunk__47454_48283;
var G__48322 = count__47455_48284;
var G__48323 = (i__47456_48285 + (1));
seq__47453_48282 = G__48320;
chunk__47454_48283 = G__48321;
count__47455_48284 = G__48322;
i__47456_48285 = G__48323;
continue;
} else {
var temp__5804__auto___48324 = cljs.core.seq(seq__47453_48282);
if(temp__5804__auto___48324){
var seq__47453_48325__$1 = temp__5804__auto___48324;
if(cljs.core.chunked_seq_QMARK_(seq__47453_48325__$1)){
var c__5568__auto___48326 = cljs.core.chunk_first(seq__47453_48325__$1);
var G__48327 = cljs.core.chunk_rest(seq__47453_48325__$1);
var G__48328 = c__5568__auto___48326;
var G__48329 = cljs.core.count(c__5568__auto___48326);
var G__48330 = (0);
seq__47453_48282 = G__48327;
chunk__47454_48283 = G__48328;
count__47455_48284 = G__48329;
i__47456_48285 = G__48330;
continue;
} else {
var child_struct_48331 = cljs.core.first(seq__47453_48325__$1);
var children_48332 = shadow.dom.dom_node(child_struct_48331);
if(cljs.core.seq_QMARK_(children_48332)){
var seq__47534_48334 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48332));
var chunk__47536_48335 = null;
var count__47537_48336 = (0);
var i__47538_48337 = (0);
while(true){
if((i__47538_48337 < count__47537_48336)){
var child_48338 = chunk__47536_48335.cljs$core$IIndexed$_nth$arity$2(null,i__47538_48337);
if(cljs.core.truth_(child_48338)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48338);


var G__48339 = seq__47534_48334;
var G__48340 = chunk__47536_48335;
var G__48341 = count__47537_48336;
var G__48342 = (i__47538_48337 + (1));
seq__47534_48334 = G__48339;
chunk__47536_48335 = G__48340;
count__47537_48336 = G__48341;
i__47538_48337 = G__48342;
continue;
} else {
var G__48343 = seq__47534_48334;
var G__48344 = chunk__47536_48335;
var G__48345 = count__47537_48336;
var G__48346 = (i__47538_48337 + (1));
seq__47534_48334 = G__48343;
chunk__47536_48335 = G__48344;
count__47537_48336 = G__48345;
i__47538_48337 = G__48346;
continue;
}
} else {
var temp__5804__auto___48348__$1 = cljs.core.seq(seq__47534_48334);
if(temp__5804__auto___48348__$1){
var seq__47534_48349__$1 = temp__5804__auto___48348__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47534_48349__$1)){
var c__5568__auto___48350 = cljs.core.chunk_first(seq__47534_48349__$1);
var G__48352 = cljs.core.chunk_rest(seq__47534_48349__$1);
var G__48353 = c__5568__auto___48350;
var G__48354 = cljs.core.count(c__5568__auto___48350);
var G__48355 = (0);
seq__47534_48334 = G__48352;
chunk__47536_48335 = G__48353;
count__47537_48336 = G__48354;
i__47538_48337 = G__48355;
continue;
} else {
var child_48357 = cljs.core.first(seq__47534_48349__$1);
if(cljs.core.truth_(child_48357)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48357);


var G__48359 = cljs.core.next(seq__47534_48349__$1);
var G__48360 = null;
var G__48361 = (0);
var G__48362 = (0);
seq__47534_48334 = G__48359;
chunk__47536_48335 = G__48360;
count__47537_48336 = G__48361;
i__47538_48337 = G__48362;
continue;
} else {
var G__48363 = cljs.core.next(seq__47534_48349__$1);
var G__48364 = null;
var G__48365 = (0);
var G__48366 = (0);
seq__47534_48334 = G__48363;
chunk__47536_48335 = G__48364;
count__47537_48336 = G__48365;
i__47538_48337 = G__48366;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48332);
}


var G__48368 = cljs.core.next(seq__47453_48325__$1);
var G__48369 = null;
var G__48370 = (0);
var G__48371 = (0);
seq__47453_48282 = G__48368;
chunk__47454_48283 = G__48369;
count__47455_48284 = G__48370;
i__47456_48285 = G__48371;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47582 = cljs.core.seq(node);
var chunk__47583 = null;
var count__47584 = (0);
var i__47585 = (0);
while(true){
if((i__47585 < count__47584)){
var n = chunk__47583.cljs$core$IIndexed$_nth$arity$2(null,i__47585);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48375 = seq__47582;
var G__48376 = chunk__47583;
var G__48377 = count__47584;
var G__48378 = (i__47585 + (1));
seq__47582 = G__48375;
chunk__47583 = G__48376;
count__47584 = G__48377;
i__47585 = G__48378;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47582);
if(temp__5804__auto__){
var seq__47582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47582__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47582__$1);
var G__48383 = cljs.core.chunk_rest(seq__47582__$1);
var G__48384 = c__5568__auto__;
var G__48385 = cljs.core.count(c__5568__auto__);
var G__48386 = (0);
seq__47582 = G__48383;
chunk__47583 = G__48384;
count__47584 = G__48385;
i__47585 = G__48386;
continue;
} else {
var n = cljs.core.first(seq__47582__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48387 = cljs.core.next(seq__47582__$1);
var G__48388 = null;
var G__48389 = (0);
var G__48390 = (0);
seq__47582 = G__48387;
chunk__47583 = G__48388;
count__47584 = G__48389;
i__47585 = G__48390;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47593 = arguments.length;
switch (G__47593) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47600 = arguments.length;
switch (G__47600) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47614 = arguments.length;
switch (G__47614) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48402 = arguments.length;
var i__5770__auto___48403 = (0);
while(true){
if((i__5770__auto___48403 < len__5769__auto___48402)){
args__5775__auto__.push((arguments[i__5770__auto___48403]));

var G__48404 = (i__5770__auto___48403 + (1));
i__5770__auto___48403 = G__48404;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47635_48405 = cljs.core.seq(nodes);
var chunk__47636_48406 = null;
var count__47637_48407 = (0);
var i__47638_48408 = (0);
while(true){
if((i__47638_48408 < count__47637_48407)){
var node_48409 = chunk__47636_48406.cljs$core$IIndexed$_nth$arity$2(null,i__47638_48408);
fragment.appendChild(shadow.dom._to_dom(node_48409));


var G__48411 = seq__47635_48405;
var G__48412 = chunk__47636_48406;
var G__48413 = count__47637_48407;
var G__48414 = (i__47638_48408 + (1));
seq__47635_48405 = G__48411;
chunk__47636_48406 = G__48412;
count__47637_48407 = G__48413;
i__47638_48408 = G__48414;
continue;
} else {
var temp__5804__auto___48415 = cljs.core.seq(seq__47635_48405);
if(temp__5804__auto___48415){
var seq__47635_48416__$1 = temp__5804__auto___48415;
if(cljs.core.chunked_seq_QMARK_(seq__47635_48416__$1)){
var c__5568__auto___48418 = cljs.core.chunk_first(seq__47635_48416__$1);
var G__48419 = cljs.core.chunk_rest(seq__47635_48416__$1);
var G__48420 = c__5568__auto___48418;
var G__48421 = cljs.core.count(c__5568__auto___48418);
var G__48422 = (0);
seq__47635_48405 = G__48419;
chunk__47636_48406 = G__48420;
count__47637_48407 = G__48421;
i__47638_48408 = G__48422;
continue;
} else {
var node_48423 = cljs.core.first(seq__47635_48416__$1);
fragment.appendChild(shadow.dom._to_dom(node_48423));


var G__48425 = cljs.core.next(seq__47635_48416__$1);
var G__48426 = null;
var G__48427 = (0);
var G__48428 = (0);
seq__47635_48405 = G__48425;
chunk__47636_48406 = G__48426;
count__47637_48407 = G__48427;
i__47638_48408 = G__48428;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47631));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47650_48429 = cljs.core.seq(scripts);
var chunk__47651_48430 = null;
var count__47652_48431 = (0);
var i__47653_48432 = (0);
while(true){
if((i__47653_48432 < count__47652_48431)){
var vec__47666_48433 = chunk__47651_48430.cljs$core$IIndexed$_nth$arity$2(null,i__47653_48432);
var script_tag_48434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47666_48433,(0),null);
var script_body_48435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47666_48433,(1),null);
eval(script_body_48435);


var G__48437 = seq__47650_48429;
var G__48438 = chunk__47651_48430;
var G__48439 = count__47652_48431;
var G__48440 = (i__47653_48432 + (1));
seq__47650_48429 = G__48437;
chunk__47651_48430 = G__48438;
count__47652_48431 = G__48439;
i__47653_48432 = G__48440;
continue;
} else {
var temp__5804__auto___48441 = cljs.core.seq(seq__47650_48429);
if(temp__5804__auto___48441){
var seq__47650_48442__$1 = temp__5804__auto___48441;
if(cljs.core.chunked_seq_QMARK_(seq__47650_48442__$1)){
var c__5568__auto___48443 = cljs.core.chunk_first(seq__47650_48442__$1);
var G__48445 = cljs.core.chunk_rest(seq__47650_48442__$1);
var G__48446 = c__5568__auto___48443;
var G__48447 = cljs.core.count(c__5568__auto___48443);
var G__48448 = (0);
seq__47650_48429 = G__48445;
chunk__47651_48430 = G__48446;
count__47652_48431 = G__48447;
i__47653_48432 = G__48448;
continue;
} else {
var vec__47672_48449 = cljs.core.first(seq__47650_48442__$1);
var script_tag_48450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47672_48449,(0),null);
var script_body_48451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47672_48449,(1),null);
eval(script_body_48451);


var G__48452 = cljs.core.next(seq__47650_48442__$1);
var G__48453 = null;
var G__48454 = (0);
var G__48455 = (0);
seq__47650_48429 = G__48452;
chunk__47651_48430 = G__48453;
count__47652_48431 = G__48454;
i__47653_48432 = G__48455;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47678){
var vec__47680 = p__47678;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47680,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47680,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47702 = arguments.length;
switch (G__47702) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47723 = cljs.core.seq(style_keys);
var chunk__47724 = null;
var count__47725 = (0);
var i__47726 = (0);
while(true){
if((i__47726 < count__47725)){
var it = chunk__47724.cljs$core$IIndexed$_nth$arity$2(null,i__47726);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48470 = seq__47723;
var G__48471 = chunk__47724;
var G__48472 = count__47725;
var G__48473 = (i__47726 + (1));
seq__47723 = G__48470;
chunk__47724 = G__48471;
count__47725 = G__48472;
i__47726 = G__48473;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47723);
if(temp__5804__auto__){
var seq__47723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47723__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47723__$1);
var G__48475 = cljs.core.chunk_rest(seq__47723__$1);
var G__48476 = c__5568__auto__;
var G__48477 = cljs.core.count(c__5568__auto__);
var G__48478 = (0);
seq__47723 = G__48475;
chunk__47724 = G__48476;
count__47725 = G__48477;
i__47726 = G__48478;
continue;
} else {
var it = cljs.core.first(seq__47723__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48479 = cljs.core.next(seq__47723__$1);
var G__48480 = null;
var G__48481 = (0);
var G__48482 = (0);
seq__47723 = G__48479;
chunk__47724 = G__48480;
count__47725 = G__48481;
i__47726 = G__48482;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47741,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47745 = k47741;
var G__47745__$1 = (((G__47745 instanceof cljs.core.Keyword))?G__47745.fqn:null);
switch (G__47745__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47741,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47746){
var vec__47747 = p__47746;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47747,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47747,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47740){
var self__ = this;
var G__47740__$1 = this;
return (new cljs.core.RecordIter((0),G__47740__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47742,other47743){
var self__ = this;
var this47742__$1 = this;
return (((!((other47743 == null)))) && ((((this47742__$1.constructor === other47743.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47742__$1.x,other47743.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47742__$1.y,other47743.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47742__$1.__extmap,other47743.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47741){
var self__ = this;
var this__5350__auto____$1 = this;
var G__47758 = k47741;
var G__47758__$1 = (((G__47758 instanceof cljs.core.Keyword))?G__47758.fqn:null);
switch (G__47758__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47741);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47740){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__47762 = cljs.core.keyword_identical_QMARK_;
var expr__47763 = k__5352__auto__;
if(cljs.core.truth_((pred__47762.cljs$core$IFn$_invoke$arity$2 ? pred__47762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47763) : pred__47762.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47763)))){
return (new shadow.dom.Coordinate(G__47740,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47762.cljs$core$IFn$_invoke$arity$2 ? pred__47762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47763) : pred__47762.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47763)))){
return (new shadow.dom.Coordinate(self__.x,G__47740,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47740),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47740){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47740,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47744){
var extmap__5385__auto__ = (function (){var G__47783 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47744,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47744)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47783);
} else {
return G__47783;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47744),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47744),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47797,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47810 = k47797;
var G__47810__$1 = (((G__47810 instanceof cljs.core.Keyword))?G__47810.fqn:null);
switch (G__47810__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47797,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47812){
var vec__47814 = p__47812;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47796){
var self__ = this;
var G__47796__$1 = this;
return (new cljs.core.RecordIter((0),G__47796__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47798,other47799){
var self__ = this;
var this47798__$1 = this;
return (((!((other47799 == null)))) && ((((this47798__$1.constructor === other47799.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47798__$1.w,other47799.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47798__$1.h,other47799.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47798__$1.__extmap,other47799.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47797){
var self__ = this;
var this__5350__auto____$1 = this;
var G__47825 = k47797;
var G__47825__$1 = (((G__47825 instanceof cljs.core.Keyword))?G__47825.fqn:null);
switch (G__47825__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47797);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47796){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__47827 = cljs.core.keyword_identical_QMARK_;
var expr__47828 = k__5352__auto__;
if(cljs.core.truth_((pred__47827.cljs$core$IFn$_invoke$arity$2 ? pred__47827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47828) : pred__47827.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47828)))){
return (new shadow.dom.Size(G__47796,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47827.cljs$core$IFn$_invoke$arity$2 ? pred__47827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47828) : pred__47827.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47828)))){
return (new shadow.dom.Size(self__.w,G__47796,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47796),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47796){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47796,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47802){
var extmap__5385__auto__ = (function (){var G__47840 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47802,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47840);
} else {
return G__47840;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47802),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47802),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__48547 = (i + (1));
var G__48548 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48547;
ret = G__48548;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47891){
var vec__47895 = p__47891;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47895,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47904 = arguments.length;
switch (G__47904) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48554 = ps;
var G__48555 = (i + (1));
el__$1 = G__48554;
i = G__48555;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47935 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47935,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47935,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47935,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47939_48562 = cljs.core.seq(props);
var chunk__47940_48563 = null;
var count__47941_48564 = (0);
var i__47942_48565 = (0);
while(true){
if((i__47942_48565 < count__47941_48564)){
var vec__47955_48566 = chunk__47940_48563.cljs$core$IIndexed$_nth$arity$2(null,i__47942_48565);
var k_48567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47955_48566,(0),null);
var v_48568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47955_48566,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_48567);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48567),v_48568);


var G__48570 = seq__47939_48562;
var G__48571 = chunk__47940_48563;
var G__48572 = count__47941_48564;
var G__48573 = (i__47942_48565 + (1));
seq__47939_48562 = G__48570;
chunk__47940_48563 = G__48571;
count__47941_48564 = G__48572;
i__47942_48565 = G__48573;
continue;
} else {
var temp__5804__auto___48574 = cljs.core.seq(seq__47939_48562);
if(temp__5804__auto___48574){
var seq__47939_48575__$1 = temp__5804__auto___48574;
if(cljs.core.chunked_seq_QMARK_(seq__47939_48575__$1)){
var c__5568__auto___48576 = cljs.core.chunk_first(seq__47939_48575__$1);
var G__48577 = cljs.core.chunk_rest(seq__47939_48575__$1);
var G__48578 = c__5568__auto___48576;
var G__48579 = cljs.core.count(c__5568__auto___48576);
var G__48580 = (0);
seq__47939_48562 = G__48577;
chunk__47940_48563 = G__48578;
count__47941_48564 = G__48579;
i__47942_48565 = G__48580;
continue;
} else {
var vec__47969_48582 = cljs.core.first(seq__47939_48575__$1);
var k_48583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969_48582,(0),null);
var v_48584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969_48582,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_48583);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48583),v_48584);


var G__48585 = cljs.core.next(seq__47939_48575__$1);
var G__48586 = null;
var G__48587 = (0);
var G__48588 = (0);
seq__47939_48562 = G__48585;
chunk__47940_48563 = G__48586;
count__47941_48564 = G__48587;
i__47942_48565 = G__48588;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47978 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47978,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47978,(1),null);
var seq__47981_48593 = cljs.core.seq(node_children);
var chunk__47983_48594 = null;
var count__47984_48595 = (0);
var i__47985_48596 = (0);
while(true){
if((i__47985_48596 < count__47984_48595)){
var child_struct_48597 = chunk__47983_48594.cljs$core$IIndexed$_nth$arity$2(null,i__47985_48596);
if((!((child_struct_48597 == null)))){
if(typeof child_struct_48597 === 'string'){
var text_48598 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48598),child_struct_48597].join(''));
} else {
var children_48599 = shadow.dom.svg_node(child_struct_48597);
if(cljs.core.seq_QMARK_(children_48599)){
var seq__48035_48600 = cljs.core.seq(children_48599);
var chunk__48037_48601 = null;
var count__48038_48602 = (0);
var i__48039_48603 = (0);
while(true){
if((i__48039_48603 < count__48038_48602)){
var child_48604 = chunk__48037_48601.cljs$core$IIndexed$_nth$arity$2(null,i__48039_48603);
if(cljs.core.truth_(child_48604)){
node.appendChild(child_48604);


var G__48605 = seq__48035_48600;
var G__48606 = chunk__48037_48601;
var G__48607 = count__48038_48602;
var G__48608 = (i__48039_48603 + (1));
seq__48035_48600 = G__48605;
chunk__48037_48601 = G__48606;
count__48038_48602 = G__48607;
i__48039_48603 = G__48608;
continue;
} else {
var G__48609 = seq__48035_48600;
var G__48610 = chunk__48037_48601;
var G__48611 = count__48038_48602;
var G__48612 = (i__48039_48603 + (1));
seq__48035_48600 = G__48609;
chunk__48037_48601 = G__48610;
count__48038_48602 = G__48611;
i__48039_48603 = G__48612;
continue;
}
} else {
var temp__5804__auto___48613 = cljs.core.seq(seq__48035_48600);
if(temp__5804__auto___48613){
var seq__48035_48614__$1 = temp__5804__auto___48613;
if(cljs.core.chunked_seq_QMARK_(seq__48035_48614__$1)){
var c__5568__auto___48615 = cljs.core.chunk_first(seq__48035_48614__$1);
var G__48616 = cljs.core.chunk_rest(seq__48035_48614__$1);
var G__48617 = c__5568__auto___48615;
var G__48618 = cljs.core.count(c__5568__auto___48615);
var G__48619 = (0);
seq__48035_48600 = G__48616;
chunk__48037_48601 = G__48617;
count__48038_48602 = G__48618;
i__48039_48603 = G__48619;
continue;
} else {
var child_48623 = cljs.core.first(seq__48035_48614__$1);
if(cljs.core.truth_(child_48623)){
node.appendChild(child_48623);


var G__48627 = cljs.core.next(seq__48035_48614__$1);
var G__48628 = null;
var G__48629 = (0);
var G__48630 = (0);
seq__48035_48600 = G__48627;
chunk__48037_48601 = G__48628;
count__48038_48602 = G__48629;
i__48039_48603 = G__48630;
continue;
} else {
var G__48631 = cljs.core.next(seq__48035_48614__$1);
var G__48632 = null;
var G__48633 = (0);
var G__48634 = (0);
seq__48035_48600 = G__48631;
chunk__48037_48601 = G__48632;
count__48038_48602 = G__48633;
i__48039_48603 = G__48634;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48599);
}
}


var G__48635 = seq__47981_48593;
var G__48636 = chunk__47983_48594;
var G__48637 = count__47984_48595;
var G__48638 = (i__47985_48596 + (1));
seq__47981_48593 = G__48635;
chunk__47983_48594 = G__48636;
count__47984_48595 = G__48637;
i__47985_48596 = G__48638;
continue;
} else {
var G__48639 = seq__47981_48593;
var G__48640 = chunk__47983_48594;
var G__48641 = count__47984_48595;
var G__48642 = (i__47985_48596 + (1));
seq__47981_48593 = G__48639;
chunk__47983_48594 = G__48640;
count__47984_48595 = G__48641;
i__47985_48596 = G__48642;
continue;
}
} else {
var temp__5804__auto___48643 = cljs.core.seq(seq__47981_48593);
if(temp__5804__auto___48643){
var seq__47981_48644__$1 = temp__5804__auto___48643;
if(cljs.core.chunked_seq_QMARK_(seq__47981_48644__$1)){
var c__5568__auto___48645 = cljs.core.chunk_first(seq__47981_48644__$1);
var G__48646 = cljs.core.chunk_rest(seq__47981_48644__$1);
var G__48647 = c__5568__auto___48645;
var G__48648 = cljs.core.count(c__5568__auto___48645);
var G__48649 = (0);
seq__47981_48593 = G__48646;
chunk__47983_48594 = G__48647;
count__47984_48595 = G__48648;
i__47985_48596 = G__48649;
continue;
} else {
var child_struct_48650 = cljs.core.first(seq__47981_48644__$1);
if((!((child_struct_48650 == null)))){
if(typeof child_struct_48650 === 'string'){
var text_48651 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48651),child_struct_48650].join(''));
} else {
var children_48652 = shadow.dom.svg_node(child_struct_48650);
if(cljs.core.seq_QMARK_(children_48652)){
var seq__48059_48654 = cljs.core.seq(children_48652);
var chunk__48061_48655 = null;
var count__48062_48656 = (0);
var i__48063_48657 = (0);
while(true){
if((i__48063_48657 < count__48062_48656)){
var child_48658 = chunk__48061_48655.cljs$core$IIndexed$_nth$arity$2(null,i__48063_48657);
if(cljs.core.truth_(child_48658)){
node.appendChild(child_48658);


var G__48659 = seq__48059_48654;
var G__48660 = chunk__48061_48655;
var G__48661 = count__48062_48656;
var G__48662 = (i__48063_48657 + (1));
seq__48059_48654 = G__48659;
chunk__48061_48655 = G__48660;
count__48062_48656 = G__48661;
i__48063_48657 = G__48662;
continue;
} else {
var G__48663 = seq__48059_48654;
var G__48664 = chunk__48061_48655;
var G__48665 = count__48062_48656;
var G__48666 = (i__48063_48657 + (1));
seq__48059_48654 = G__48663;
chunk__48061_48655 = G__48664;
count__48062_48656 = G__48665;
i__48063_48657 = G__48666;
continue;
}
} else {
var temp__5804__auto___48667__$1 = cljs.core.seq(seq__48059_48654);
if(temp__5804__auto___48667__$1){
var seq__48059_48668__$1 = temp__5804__auto___48667__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48059_48668__$1)){
var c__5568__auto___48669 = cljs.core.chunk_first(seq__48059_48668__$1);
var G__48670 = cljs.core.chunk_rest(seq__48059_48668__$1);
var G__48671 = c__5568__auto___48669;
var G__48672 = cljs.core.count(c__5568__auto___48669);
var G__48673 = (0);
seq__48059_48654 = G__48670;
chunk__48061_48655 = G__48671;
count__48062_48656 = G__48672;
i__48063_48657 = G__48673;
continue;
} else {
var child_48674 = cljs.core.first(seq__48059_48668__$1);
if(cljs.core.truth_(child_48674)){
node.appendChild(child_48674);


var G__48675 = cljs.core.next(seq__48059_48668__$1);
var G__48676 = null;
var G__48677 = (0);
var G__48678 = (0);
seq__48059_48654 = G__48675;
chunk__48061_48655 = G__48676;
count__48062_48656 = G__48677;
i__48063_48657 = G__48678;
continue;
} else {
var G__48679 = cljs.core.next(seq__48059_48668__$1);
var G__48680 = null;
var G__48681 = (0);
var G__48682 = (0);
seq__48059_48654 = G__48679;
chunk__48061_48655 = G__48680;
count__48062_48656 = G__48681;
i__48063_48657 = G__48682;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48652);
}
}


var G__48683 = cljs.core.next(seq__47981_48644__$1);
var G__48684 = null;
var G__48685 = (0);
var G__48686 = (0);
seq__47981_48593 = G__48683;
chunk__47983_48594 = G__48684;
count__47984_48595 = G__48685;
i__47985_48596 = G__48686;
continue;
} else {
var G__48687 = cljs.core.next(seq__47981_48644__$1);
var G__48688 = null;
var G__48689 = (0);
var G__48690 = (0);
seq__47981_48593 = G__48687;
chunk__47983_48594 = G__48688;
count__47984_48595 = G__48689;
i__47985_48596 = G__48690;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48696 = arguments.length;
var i__5770__auto___48697 = (0);
while(true){
if((i__5770__auto___48697 < len__5769__auto___48696)){
args__5775__auto__.push((arguments[i__5770__auto___48697]));

var G__48698 = (i__5770__auto___48697 + (1));
i__5770__auto___48697 = G__48698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48086){
var G__48087 = cljs.core.first(seq48086);
var seq48086__$1 = cljs.core.next(seq48086);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48087,seq48086__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48095 = arguments.length;
switch (G__48095) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__44474__auto___48712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_48114){
var state_val_48115 = (state_48114[(1)]);
if((state_val_48115 === (1))){
var state_48114__$1 = state_48114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48114__$1,(2),once_or_cleanup);
} else {
if((state_val_48115 === (2))){
var inst_48110 = (state_48114[(2)]);
var inst_48111 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48114__$1 = (function (){var statearr_48123 = state_48114;
(statearr_48123[(7)] = inst_48110);

return statearr_48123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48114__$1,inst_48111);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43963__auto__ = null;
var shadow$dom$state_machine__43963__auto____0 = (function (){
var statearr_48126 = [null,null,null,null,null,null,null,null];
(statearr_48126[(0)] = shadow$dom$state_machine__43963__auto__);

(statearr_48126[(1)] = (1));

return statearr_48126;
});
var shadow$dom$state_machine__43963__auto____1 = (function (state_48114){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_48114);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e48127){var ex__43966__auto__ = e48127;
var statearr_48129_48713 = state_48114;
(statearr_48129_48713[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_48114[(4)]))){
var statearr_48130_48714 = state_48114;
(statearr_48130_48714[(1)] = cljs.core.first((state_48114[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48715 = state_48114;
state_48114 = G__48715;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
shadow$dom$state_machine__43963__auto__ = function(state_48114){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43963__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43963__auto____1.call(this,state_48114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43963__auto____0;
shadow$dom$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43963__auto____1;
return shadow$dom$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_48132 = f__44479__auto__();
(statearr_48132[(6)] = c__44474__auto___48712);

return statearr_48132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
