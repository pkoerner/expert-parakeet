goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__49145 = e.target.readyState;
var fexpr__49144 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__49144.cljs$core$IFn$_invoke$arity$1 ? fexpr__49144.cljs$core$IFn$_invoke$arity$1(G__49145) : fexpr__49144.call(null,G__49145));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__49162,handler){
var map__49167 = p__49162;
var map__49167__$1 = cljs.core.__destructure_map(map__49167);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49167__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49167__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49167__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__49157_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__49157_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___49253 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___49253)){
var response_type_49258 = temp__5804__auto___49253;
(this$__$1.responseType = cljs.core.name(response_type_49258));
} else {
}

var seq__49169_49259 = cljs.core.seq(headers);
var chunk__49170_49260 = null;
var count__49171_49261 = (0);
var i__49172_49262 = (0);
while(true){
if((i__49172_49262 < count__49171_49261)){
var vec__49186_49263 = chunk__49170_49260.cljs$core$IIndexed$_nth$arity$2(null,i__49172_49262);
var k_49264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49186_49263,(0),null);
var v_49265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49186_49263,(1),null);
this$__$1.setRequestHeader(k_49264,v_49265);


var G__49266 = seq__49169_49259;
var G__49267 = chunk__49170_49260;
var G__49268 = count__49171_49261;
var G__49269 = (i__49172_49262 + (1));
seq__49169_49259 = G__49266;
chunk__49170_49260 = G__49267;
count__49171_49261 = G__49268;
i__49172_49262 = G__49269;
continue;
} else {
var temp__5804__auto___49270 = cljs.core.seq(seq__49169_49259);
if(temp__5804__auto___49270){
var seq__49169_49271__$1 = temp__5804__auto___49270;
if(cljs.core.chunked_seq_QMARK_(seq__49169_49271__$1)){
var c__5568__auto___49272 = cljs.core.chunk_first(seq__49169_49271__$1);
var G__49273 = cljs.core.chunk_rest(seq__49169_49271__$1);
var G__49274 = c__5568__auto___49272;
var G__49275 = cljs.core.count(c__5568__auto___49272);
var G__49276 = (0);
seq__49169_49259 = G__49273;
chunk__49170_49260 = G__49274;
count__49171_49261 = G__49275;
i__49172_49262 = G__49276;
continue;
} else {
var vec__49192_49277 = cljs.core.first(seq__49169_49271__$1);
var k_49278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49192_49277,(0),null);
var v_49279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49192_49277,(1),null);
this$__$1.setRequestHeader(k_49278,v_49279);


var G__49281 = cljs.core.next(seq__49169_49271__$1);
var G__49282 = null;
var G__49283 = (0);
var G__49284 = (0);
seq__49169_49259 = G__49281;
chunk__49170_49260 = G__49282;
count__49171_49261 = G__49283;
i__49172_49262 = G__49284;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
