goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44551 = arguments.length;
switch (G__44551) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44555 = (function (f,blockable,meta44556){
this.f = f;
this.blockable = blockable;
this.meta44556 = meta44556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44557,meta44556__$1){
var self__ = this;
var _44557__$1 = this;
return (new cljs.core.async.t_cljs$core$async44555(self__.f,self__.blockable,meta44556__$1));
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44557){
var self__ = this;
var _44557__$1 = this;
return self__.meta44556;
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44556","meta44556",-1386839712,null)], null);
}));

(cljs.core.async.t_cljs$core$async44555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44555");

(cljs.core.async.t_cljs$core$async44555.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44555.
 */
cljs.core.async.__GT_t_cljs$core$async44555 = (function cljs$core$async$__GT_t_cljs$core$async44555(f__$1,blockable__$1,meta44556){
return (new cljs.core.async.t_cljs$core$async44555(f__$1,blockable__$1,meta44556));
});

}

return (new cljs.core.async.t_cljs$core$async44555(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44573 = arguments.length;
switch (G__44573) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44578 = arguments.length;
switch (G__44578) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44586 = arguments.length;
switch (G__44586) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47189 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47189) : fn1.call(null,val_47189));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47189) : fn1.call(null,val_47189));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44589 = arguments.length;
switch (G__44589) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___47196 = n;
var x_47199 = (0);
while(true){
if((x_47199 < n__5636__auto___47196)){
(a[x_47199] = x_47199);

var G__47200 = (x_47199 + (1));
x_47199 = G__47200;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44590 = (function (flag,meta44591){
this.flag = flag;
this.meta44591 = meta44591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44592,meta44591__$1){
var self__ = this;
var _44592__$1 = this;
return (new cljs.core.async.t_cljs$core$async44590(self__.flag,meta44591__$1));
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44592){
var self__ = this;
var _44592__$1 = this;
return self__.meta44591;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44591","meta44591",-2006289438,null)], null);
}));

(cljs.core.async.t_cljs$core$async44590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44590");

(cljs.core.async.t_cljs$core$async44590.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44590.
 */
cljs.core.async.__GT_t_cljs$core$async44590 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44590(flag__$1,meta44591){
return (new cljs.core.async.t_cljs$core$async44590(flag__$1,meta44591));
});

}

return (new cljs.core.async.t_cljs$core$async44590(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44598 = (function (flag,cb,meta44599){
this.flag = flag;
this.cb = cb;
this.meta44599 = meta44599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44600,meta44599__$1){
var self__ = this;
var _44600__$1 = this;
return (new cljs.core.async.t_cljs$core$async44598(self__.flag,self__.cb,meta44599__$1));
}));

(cljs.core.async.t_cljs$core$async44598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44600){
var self__ = this;
var _44600__$1 = this;
return self__.meta44599;
}));

(cljs.core.async.t_cljs$core$async44598.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44598.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44599","meta44599",-350051358,null)], null);
}));

(cljs.core.async.t_cljs$core$async44598.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44598");

(cljs.core.async.t_cljs$core$async44598.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44598");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44598.
 */
cljs.core.async.__GT_t_cljs$core$async44598 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44598(flag__$1,cb__$1,meta44599){
return (new cljs.core.async.t_cljs$core$async44598(flag__$1,cb__$1,meta44599));
});

}

return (new cljs.core.async.t_cljs$core$async44598(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44601_SHARP_){
var G__44603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44601_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44603) : fret.call(null,G__44603));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44602_SHARP_){
var G__44604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44602_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44604) : fret.call(null,G__44604));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47212 = (i + (1));
i = G__47212;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47213 = arguments.length;
var i__5770__auto___47214 = (0);
while(true){
if((i__5770__auto___47214 < len__5769__auto___47213)){
args__5775__auto__.push((arguments[i__5770__auto___47214]));

var G__47218 = (i__5770__auto___47214 + (1));
i__5770__auto___47214 = G__47218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44609){
var map__44610 = p__44609;
var map__44610__$1 = cljs.core.__destructure_map(map__44610);
var opts = map__44610__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44607){
var G__44608 = cljs.core.first(seq44607);
var seq44607__$1 = cljs.core.next(seq44607);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44608,seq44607__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44612 = arguments.length;
switch (G__44612) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44474__auto___47223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_44641){
var state_val_44642 = (state_44641[(1)]);
if((state_val_44642 === (7))){
var inst_44637 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
var statearr_44645_47224 = state_44641__$1;
(statearr_44645_47224[(2)] = inst_44637);

(statearr_44645_47224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (1))){
var state_44641__$1 = state_44641;
var statearr_44646_47225 = state_44641__$1;
(statearr_44646_47225[(2)] = null);

(statearr_44646_47225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (4))){
var inst_44620 = (state_44641[(7)]);
var inst_44620__$1 = (state_44641[(2)]);
var inst_44621 = (inst_44620__$1 == null);
var state_44641__$1 = (function (){var statearr_44647 = state_44641;
(statearr_44647[(7)] = inst_44620__$1);

return statearr_44647;
})();
if(cljs.core.truth_(inst_44621)){
var statearr_44648_47227 = state_44641__$1;
(statearr_44648_47227[(1)] = (5));

} else {
var statearr_44649_47229 = state_44641__$1;
(statearr_44649_47229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (13))){
var state_44641__$1 = state_44641;
var statearr_44650_47230 = state_44641__$1;
(statearr_44650_47230[(2)] = null);

(statearr_44650_47230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (6))){
var inst_44620 = (state_44641[(7)]);
var state_44641__$1 = state_44641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44641__$1,(11),to,inst_44620);
} else {
if((state_val_44642 === (3))){
var inst_44639 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44641__$1,inst_44639);
} else {
if((state_val_44642 === (12))){
var state_44641__$1 = state_44641;
var statearr_44659_47231 = state_44641__$1;
(statearr_44659_47231[(2)] = null);

(statearr_44659_47231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (2))){
var state_44641__$1 = state_44641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44641__$1,(4),from);
} else {
if((state_val_44642 === (11))){
var inst_44630 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
if(cljs.core.truth_(inst_44630)){
var statearr_44660_47232 = state_44641__$1;
(statearr_44660_47232[(1)] = (12));

} else {
var statearr_44662_47233 = state_44641__$1;
(statearr_44662_47233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (9))){
var state_44641__$1 = state_44641;
var statearr_44663_47235 = state_44641__$1;
(statearr_44663_47235[(2)] = null);

(statearr_44663_47235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (5))){
var state_44641__$1 = state_44641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44664_47236 = state_44641__$1;
(statearr_44664_47236[(1)] = (8));

} else {
var statearr_44665_47237 = state_44641__$1;
(statearr_44665_47237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (14))){
var inst_44635 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
var statearr_44667_47239 = state_44641__$1;
(statearr_44667_47239[(2)] = inst_44635);

(statearr_44667_47239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (10))){
var inst_44627 = (state_44641[(2)]);
var state_44641__$1 = state_44641;
var statearr_44671_47242 = state_44641__$1;
(statearr_44671_47242[(2)] = inst_44627);

(statearr_44671_47242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44642 === (8))){
var inst_44624 = cljs.core.async.close_BANG_(to);
var state_44641__$1 = state_44641;
var statearr_44672_47243 = state_44641__$1;
(statearr_44672_47243[(2)] = inst_44624);

(statearr_44672_47243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_44673 = [null,null,null,null,null,null,null,null];
(statearr_44673[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_44673[(1)] = (1));

return statearr_44673;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_44641){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44641);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e44674){var ex__43966__auto__ = e44674;
var statearr_44675_47244 = state_44641;
(statearr_44675_47244[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44641[(4)]))){
var statearr_44680_47246 = state_44641;
(statearr_44680_47246[(1)] = cljs.core.first((state_44641[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47248 = state_44641;
state_44641 = G__47248;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_44641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_44641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_44681 = f__44479__auto__();
(statearr_44681[(6)] = c__44474__auto___47223);

return statearr_44681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__44683){
var vec__44685 = p__44683;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44685,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44685,(1),null);
var job = vec__44685;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44474__auto___47257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_44692){
var state_val_44693 = (state_44692[(1)]);
if((state_val_44693 === (1))){
var state_44692__$1 = state_44692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44692__$1,(2),res,v);
} else {
if((state_val_44693 === (2))){
var inst_44689 = (state_44692[(2)]);
var inst_44690 = cljs.core.async.close_BANG_(res);
var state_44692__$1 = (function (){var statearr_44694 = state_44692;
(statearr_44694[(7)] = inst_44689);

return statearr_44694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44692__$1,inst_44690);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0 = (function (){
var statearr_44695 = [null,null,null,null,null,null,null,null];
(statearr_44695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__);

(statearr_44695[(1)] = (1));

return statearr_44695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1 = (function (state_44692){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44692);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e44697){var ex__43966__auto__ = e44697;
var statearr_44698_47262 = state_44692;
(statearr_44698_47262[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44692[(4)]))){
var statearr_44699_47263 = state_44692;
(statearr_44699_47263[(1)] = cljs.core.first((state_44692[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47264 = state_44692;
state_44692 = G__47264;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = function(state_44692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1.call(this,state_44692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_44701 = f__44479__auto__();
(statearr_44701[(6)] = c__44474__auto___47257);

return statearr_44701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44705){
var vec__44706 = p__44705;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44706,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44706,(1),null);
var job = vec__44706;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___47265 = n;
var __47266 = (0);
while(true){
if((__47266 < n__5636__auto___47265)){
var G__44710_47267 = type;
var G__44710_47268__$1 = (((G__44710_47267 instanceof cljs.core.Keyword))?G__44710_47267.fqn:null);
switch (G__44710_47268__$1) {
case "compute":
var c__44474__auto___47270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47266,c__44474__auto___47270,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async){
return (function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = ((function (__47266,c__44474__auto___47270,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async){
return (function (state_44724){
var state_val_44725 = (state_44724[(1)]);
if((state_val_44725 === (1))){
var state_44724__$1 = state_44724;
var statearr_44728_47271 = state_44724__$1;
(statearr_44728_47271[(2)] = null);

(statearr_44728_47271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44725 === (2))){
var state_44724__$1 = state_44724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44724__$1,(4),jobs);
} else {
if((state_val_44725 === (3))){
var inst_44722 = (state_44724[(2)]);
var state_44724__$1 = state_44724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44724__$1,inst_44722);
} else {
if((state_val_44725 === (4))){
var inst_44714 = (state_44724[(2)]);
var inst_44715 = process__$1(inst_44714);
var state_44724__$1 = state_44724;
if(cljs.core.truth_(inst_44715)){
var statearr_44731_47274 = state_44724__$1;
(statearr_44731_47274[(1)] = (5));

} else {
var statearr_44735_47275 = state_44724__$1;
(statearr_44735_47275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44725 === (5))){
var state_44724__$1 = state_44724;
var statearr_44736_47277 = state_44724__$1;
(statearr_44736_47277[(2)] = null);

(statearr_44736_47277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44725 === (6))){
var state_44724__$1 = state_44724;
var statearr_44737_47279 = state_44724__$1;
(statearr_44737_47279[(2)] = null);

(statearr_44737_47279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44725 === (7))){
var inst_44720 = (state_44724[(2)]);
var state_44724__$1 = state_44724;
var statearr_44738_47280 = state_44724__$1;
(statearr_44738_47280[(2)] = inst_44720);

(statearr_44738_47280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47266,c__44474__auto___47270,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async))
;
return ((function (__47266,switch__43962__auto__,c__44474__auto___47270,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0 = (function (){
var statearr_44739 = [null,null,null,null,null,null,null];
(statearr_44739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__);

(statearr_44739[(1)] = (1));

return statearr_44739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1 = (function (state_44724){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44724);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e44741){var ex__43966__auto__ = e44741;
var statearr_44742_47283 = state_44724;
(statearr_44742_47283[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44724[(4)]))){
var statearr_44743_47284 = state_44724;
(statearr_44743_47284[(1)] = cljs.core.first((state_44724[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47285 = state_44724;
state_44724 = G__47285;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = function(state_44724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1.call(this,state_44724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__;
})()
;})(__47266,switch__43962__auto__,c__44474__auto___47270,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async))
})();
var state__44480__auto__ = (function (){var statearr_44745 = f__44479__auto__();
(statearr_44745[(6)] = c__44474__auto___47270);

return statearr_44745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
});})(__47266,c__44474__auto___47270,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async))
);


break;
case "async":
var c__44474__auto___47286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47266,c__44474__auto___47286,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async){
return (function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = ((function (__47266,c__44474__auto___47286,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async){
return (function (state_44766){
var state_val_44767 = (state_44766[(1)]);
if((state_val_44767 === (1))){
var state_44766__$1 = state_44766;
var statearr_44769_47292 = state_44766__$1;
(statearr_44769_47292[(2)] = null);

(statearr_44769_47292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44767 === (2))){
var state_44766__$1 = state_44766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44766__$1,(4),jobs);
} else {
if((state_val_44767 === (3))){
var inst_44761 = (state_44766[(2)]);
var state_44766__$1 = state_44766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44766__$1,inst_44761);
} else {
if((state_val_44767 === (4))){
var inst_44753 = (state_44766[(2)]);
var inst_44754 = async(inst_44753);
var state_44766__$1 = state_44766;
if(cljs.core.truth_(inst_44754)){
var statearr_44777_47297 = state_44766__$1;
(statearr_44777_47297[(1)] = (5));

} else {
var statearr_44778_47298 = state_44766__$1;
(statearr_44778_47298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44767 === (5))){
var state_44766__$1 = state_44766;
var statearr_44779_47299 = state_44766__$1;
(statearr_44779_47299[(2)] = null);

(statearr_44779_47299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44767 === (6))){
var state_44766__$1 = state_44766;
var statearr_44780_47304 = state_44766__$1;
(statearr_44780_47304[(2)] = null);

(statearr_44780_47304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44767 === (7))){
var inst_44759 = (state_44766[(2)]);
var state_44766__$1 = state_44766;
var statearr_44784_47305 = state_44766__$1;
(statearr_44784_47305[(2)] = inst_44759);

(statearr_44784_47305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47266,c__44474__auto___47286,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async))
;
return ((function (__47266,switch__43962__auto__,c__44474__auto___47286,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0 = (function (){
var statearr_44785 = [null,null,null,null,null,null,null];
(statearr_44785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__);

(statearr_44785[(1)] = (1));

return statearr_44785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1 = (function (state_44766){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44766);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e44786){var ex__43966__auto__ = e44786;
var statearr_44787_47309 = state_44766;
(statearr_44787_47309[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44766[(4)]))){
var statearr_44788_47310 = state_44766;
(statearr_44788_47310[(1)] = cljs.core.first((state_44766[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47314 = state_44766;
state_44766 = G__47314;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = function(state_44766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1.call(this,state_44766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__;
})()
;})(__47266,switch__43962__auto__,c__44474__auto___47286,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async))
})();
var state__44480__auto__ = (function (){var statearr_44789 = f__44479__auto__();
(statearr_44789[(6)] = c__44474__auto___47286);

return statearr_44789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
});})(__47266,c__44474__auto___47286,G__44710_47267,G__44710_47268__$1,n__5636__auto___47265,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44710_47268__$1)].join('')));

}

var G__47315 = (__47266 + (1));
__47266 = G__47315;
continue;
} else {
}
break;
}

var c__44474__auto___47316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_44812){
var state_val_44814 = (state_44812[(1)]);
if((state_val_44814 === (7))){
var inst_44808 = (state_44812[(2)]);
var state_44812__$1 = state_44812;
var statearr_44822_47321 = state_44812__$1;
(statearr_44822_47321[(2)] = inst_44808);

(statearr_44822_47321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44814 === (1))){
var state_44812__$1 = state_44812;
var statearr_44823_47322 = state_44812__$1;
(statearr_44823_47322[(2)] = null);

(statearr_44823_47322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44814 === (4))){
var inst_44792 = (state_44812[(7)]);
var inst_44792__$1 = (state_44812[(2)]);
var inst_44793 = (inst_44792__$1 == null);
var state_44812__$1 = (function (){var statearr_44824 = state_44812;
(statearr_44824[(7)] = inst_44792__$1);

return statearr_44824;
})();
if(cljs.core.truth_(inst_44793)){
var statearr_44825_47330 = state_44812__$1;
(statearr_44825_47330[(1)] = (5));

} else {
var statearr_44826_47331 = state_44812__$1;
(statearr_44826_47331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44814 === (6))){
var inst_44792 = (state_44812[(7)]);
var inst_44797 = (state_44812[(8)]);
var inst_44797__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44799 = [inst_44792,inst_44797__$1];
var inst_44800 = (new cljs.core.PersistentVector(null,2,(5),inst_44798,inst_44799,null));
var state_44812__$1 = (function (){var statearr_44827 = state_44812;
(statearr_44827[(8)] = inst_44797__$1);

return statearr_44827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44812__$1,(8),jobs,inst_44800);
} else {
if((state_val_44814 === (3))){
var inst_44810 = (state_44812[(2)]);
var state_44812__$1 = state_44812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44812__$1,inst_44810);
} else {
if((state_val_44814 === (2))){
var state_44812__$1 = state_44812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44812__$1,(4),from);
} else {
if((state_val_44814 === (9))){
var inst_44804 = (state_44812[(2)]);
var state_44812__$1 = (function (){var statearr_44829 = state_44812;
(statearr_44829[(9)] = inst_44804);

return statearr_44829;
})();
var statearr_44830_47340 = state_44812__$1;
(statearr_44830_47340[(2)] = null);

(statearr_44830_47340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44814 === (5))){
var inst_44795 = cljs.core.async.close_BANG_(jobs);
var state_44812__$1 = state_44812;
var statearr_44831_47342 = state_44812__$1;
(statearr_44831_47342[(2)] = inst_44795);

(statearr_44831_47342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44814 === (8))){
var inst_44797 = (state_44812[(8)]);
var inst_44802 = (state_44812[(2)]);
var state_44812__$1 = (function (){var statearr_44832 = state_44812;
(statearr_44832[(10)] = inst_44802);

return statearr_44832;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44812__$1,(9),results,inst_44797);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0 = (function (){
var statearr_44833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__);

(statearr_44833[(1)] = (1));

return statearr_44833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1 = (function (state_44812){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44812);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e44834){var ex__43966__auto__ = e44834;
var statearr_44835_47366 = state_44812;
(statearr_44835_47366[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44812[(4)]))){
var statearr_44836_47370 = state_44812;
(statearr_44836_47370[(1)] = cljs.core.first((state_44812[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47373 = state_44812;
state_44812 = G__47373;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = function(state_44812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1.call(this,state_44812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_44837 = f__44479__auto__();
(statearr_44837[(6)] = c__44474__auto___47316);

return statearr_44837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


var c__44474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_44876){
var state_val_44877 = (state_44876[(1)]);
if((state_val_44877 === (7))){
var inst_44872 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44879_47376 = state_44876__$1;
(statearr_44879_47376[(2)] = inst_44872);

(statearr_44879_47376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (20))){
var state_44876__$1 = state_44876;
var statearr_44880_47378 = state_44876__$1;
(statearr_44880_47378[(2)] = null);

(statearr_44880_47378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (1))){
var state_44876__$1 = state_44876;
var statearr_44881_47379 = state_44876__$1;
(statearr_44881_47379[(2)] = null);

(statearr_44881_47379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (4))){
var inst_44840 = (state_44876[(7)]);
var inst_44840__$1 = (state_44876[(2)]);
var inst_44841 = (inst_44840__$1 == null);
var state_44876__$1 = (function (){var statearr_44882 = state_44876;
(statearr_44882[(7)] = inst_44840__$1);

return statearr_44882;
})();
if(cljs.core.truth_(inst_44841)){
var statearr_44886_47380 = state_44876__$1;
(statearr_44886_47380[(1)] = (5));

} else {
var statearr_44887_47381 = state_44876__$1;
(statearr_44887_47381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (15))){
var inst_44853 = (state_44876[(8)]);
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44876__$1,(18),to,inst_44853);
} else {
if((state_val_44877 === (21))){
var inst_44866 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44888_47382 = state_44876__$1;
(statearr_44888_47382[(2)] = inst_44866);

(statearr_44888_47382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (13))){
var inst_44868 = (state_44876[(2)]);
var state_44876__$1 = (function (){var statearr_44889 = state_44876;
(statearr_44889[(9)] = inst_44868);

return statearr_44889;
})();
var statearr_44890_47384 = state_44876__$1;
(statearr_44890_47384[(2)] = null);

(statearr_44890_47384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (6))){
var inst_44840 = (state_44876[(7)]);
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44876__$1,(11),inst_44840);
} else {
if((state_val_44877 === (17))){
var inst_44861 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
if(cljs.core.truth_(inst_44861)){
var statearr_44891_47385 = state_44876__$1;
(statearr_44891_47385[(1)] = (19));

} else {
var statearr_44892_47386 = state_44876__$1;
(statearr_44892_47386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (3))){
var inst_44874 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44876__$1,inst_44874);
} else {
if((state_val_44877 === (12))){
var inst_44850 = (state_44876[(10)]);
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44876__$1,(14),inst_44850);
} else {
if((state_val_44877 === (2))){
var state_44876__$1 = state_44876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44876__$1,(4),results);
} else {
if((state_val_44877 === (19))){
var state_44876__$1 = state_44876;
var statearr_44893_47387 = state_44876__$1;
(statearr_44893_47387[(2)] = null);

(statearr_44893_47387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (11))){
var inst_44850 = (state_44876[(2)]);
var state_44876__$1 = (function (){var statearr_44895 = state_44876;
(statearr_44895[(10)] = inst_44850);

return statearr_44895;
})();
var statearr_44896_47388 = state_44876__$1;
(statearr_44896_47388[(2)] = null);

(statearr_44896_47388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (9))){
var state_44876__$1 = state_44876;
var statearr_44898_47389 = state_44876__$1;
(statearr_44898_47389[(2)] = null);

(statearr_44898_47389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (5))){
var state_44876__$1 = state_44876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44899_47390 = state_44876__$1;
(statearr_44899_47390[(1)] = (8));

} else {
var statearr_44900_47391 = state_44876__$1;
(statearr_44900_47391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (14))){
var inst_44855 = (state_44876[(11)]);
var inst_44853 = (state_44876[(8)]);
var inst_44853__$1 = (state_44876[(2)]);
var inst_44854 = (inst_44853__$1 == null);
var inst_44855__$1 = cljs.core.not(inst_44854);
var state_44876__$1 = (function (){var statearr_44901 = state_44876;
(statearr_44901[(11)] = inst_44855__$1);

(statearr_44901[(8)] = inst_44853__$1);

return statearr_44901;
})();
if(inst_44855__$1){
var statearr_44906_47392 = state_44876__$1;
(statearr_44906_47392[(1)] = (15));

} else {
var statearr_44907_47393 = state_44876__$1;
(statearr_44907_47393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (16))){
var inst_44855 = (state_44876[(11)]);
var state_44876__$1 = state_44876;
var statearr_44908_47394 = state_44876__$1;
(statearr_44908_47394[(2)] = inst_44855);

(statearr_44908_47394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (10))){
var inst_44847 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44911_47395 = state_44876__$1;
(statearr_44911_47395[(2)] = inst_44847);

(statearr_44911_47395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (18))){
var inst_44858 = (state_44876[(2)]);
var state_44876__$1 = state_44876;
var statearr_44912_47396 = state_44876__$1;
(statearr_44912_47396[(2)] = inst_44858);

(statearr_44912_47396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44877 === (8))){
var inst_44844 = cljs.core.async.close_BANG_(to);
var state_44876__$1 = state_44876;
var statearr_44913_47398 = state_44876__$1;
(statearr_44913_47398[(2)] = inst_44844);

(statearr_44913_47398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0 = (function (){
var statearr_44914 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__);

(statearr_44914[(1)] = (1));

return statearr_44914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1 = (function (state_44876){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44876);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e44915){var ex__43966__auto__ = e44915;
var statearr_44916_47399 = state_44876;
(statearr_44916_47399[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44876[(4)]))){
var statearr_44917_47402 = state_44876;
(statearr_44917_47402[(1)] = cljs.core.first((state_44876[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47405 = state_44876;
state_44876 = G__47405;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__ = function(state_44876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1.call(this,state_44876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43963__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_44920 = f__44479__auto__();
(statearr_44920[(6)] = c__44474__auto__);

return statearr_44920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

return c__44474__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44922 = arguments.length;
switch (G__44922) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44924 = arguments.length;
switch (G__44924) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44953 = arguments.length;
switch (G__44953) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44474__auto___47418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_44980){
var state_val_44981 = (state_44980[(1)]);
if((state_val_44981 === (7))){
var inst_44976 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_44988_47420 = state_44980__$1;
(statearr_44988_47420[(2)] = inst_44976);

(statearr_44988_47420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (1))){
var state_44980__$1 = state_44980;
var statearr_44989_47422 = state_44980__$1;
(statearr_44989_47422[(2)] = null);

(statearr_44989_47422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (4))){
var inst_44957 = (state_44980[(7)]);
var inst_44957__$1 = (state_44980[(2)]);
var inst_44958 = (inst_44957__$1 == null);
var state_44980__$1 = (function (){var statearr_44990 = state_44980;
(statearr_44990[(7)] = inst_44957__$1);

return statearr_44990;
})();
if(cljs.core.truth_(inst_44958)){
var statearr_44991_47429 = state_44980__$1;
(statearr_44991_47429[(1)] = (5));

} else {
var statearr_44992_47430 = state_44980__$1;
(statearr_44992_47430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (13))){
var state_44980__$1 = state_44980;
var statearr_44993_47435 = state_44980__$1;
(statearr_44993_47435[(2)] = null);

(statearr_44993_47435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (6))){
var inst_44957 = (state_44980[(7)]);
var inst_44963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44957) : p.call(null,inst_44957));
var state_44980__$1 = state_44980;
if(cljs.core.truth_(inst_44963)){
var statearr_44994_47440 = state_44980__$1;
(statearr_44994_47440[(1)] = (9));

} else {
var statearr_44995_47441 = state_44980__$1;
(statearr_44995_47441[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (3))){
var inst_44978 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44980__$1,inst_44978);
} else {
if((state_val_44981 === (12))){
var state_44980__$1 = state_44980;
var statearr_44997_47445 = state_44980__$1;
(statearr_44997_47445[(2)] = null);

(statearr_44997_47445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (2))){
var state_44980__$1 = state_44980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44980__$1,(4),ch);
} else {
if((state_val_44981 === (11))){
var inst_44957 = (state_44980[(7)]);
var inst_44967 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44980__$1,(8),inst_44967,inst_44957);
} else {
if((state_val_44981 === (9))){
var state_44980__$1 = state_44980;
var statearr_45008_47452 = state_44980__$1;
(statearr_45008_47452[(2)] = tc);

(statearr_45008_47452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (5))){
var inst_44960 = cljs.core.async.close_BANG_(tc);
var inst_44961 = cljs.core.async.close_BANG_(fc);
var state_44980__$1 = (function (){var statearr_45017 = state_44980;
(statearr_45017[(8)] = inst_44960);

return statearr_45017;
})();
var statearr_45022_47457 = state_44980__$1;
(statearr_45022_47457[(2)] = inst_44961);

(statearr_45022_47457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (14))){
var inst_44974 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_45024_47464 = state_44980__$1;
(statearr_45024_47464[(2)] = inst_44974);

(statearr_45024_47464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (10))){
var state_44980__$1 = state_44980;
var statearr_45025_47465 = state_44980__$1;
(statearr_45025_47465[(2)] = fc);

(statearr_45025_47465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (8))){
var inst_44969 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
if(cljs.core.truth_(inst_44969)){
var statearr_45026_47472 = state_44980__$1;
(statearr_45026_47472[(1)] = (12));

} else {
var statearr_45027_47473 = state_44980__$1;
(statearr_45027_47473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_45028 = [null,null,null,null,null,null,null,null,null];
(statearr_45028[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_45028[(1)] = (1));

return statearr_45028;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_44980){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_44980);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e45033){var ex__43966__auto__ = e45033;
var statearr_45035_47478 = state_44980;
(statearr_45035_47478[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_44980[(4)]))){
var statearr_45041_47479 = state_44980;
(statearr_45041_47479[(1)] = cljs.core.first((state_44980[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47480 = state_44980;
state_44980 = G__47480;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_44980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_44980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_45053 = f__44479__auto__();
(statearr_45053[(6)] = c__44474__auto___47418);

return statearr_45053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_45099){
var state_val_45100 = (state_45099[(1)]);
if((state_val_45100 === (7))){
var inst_45095 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
var statearr_45101_47484 = state_45099__$1;
(statearr_45101_47484[(2)] = inst_45095);

(statearr_45101_47484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (1))){
var inst_45066 = init;
var inst_45068 = inst_45066;
var state_45099__$1 = (function (){var statearr_45102 = state_45099;
(statearr_45102[(7)] = inst_45068);

return statearr_45102;
})();
var statearr_45103_47490 = state_45099__$1;
(statearr_45103_47490[(2)] = null);

(statearr_45103_47490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (4))){
var inst_45073 = (state_45099[(8)]);
var inst_45073__$1 = (state_45099[(2)]);
var inst_45078 = (inst_45073__$1 == null);
var state_45099__$1 = (function (){var statearr_45104 = state_45099;
(statearr_45104[(8)] = inst_45073__$1);

return statearr_45104;
})();
if(cljs.core.truth_(inst_45078)){
var statearr_45105_47500 = state_45099__$1;
(statearr_45105_47500[(1)] = (5));

} else {
var statearr_45106_47501 = state_45099__$1;
(statearr_45106_47501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (6))){
var inst_45073 = (state_45099[(8)]);
var inst_45068 = (state_45099[(7)]);
var inst_45082 = (state_45099[(9)]);
var inst_45082__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45068,inst_45073) : f.call(null,inst_45068,inst_45073));
var inst_45083 = cljs.core.reduced_QMARK_(inst_45082__$1);
var state_45099__$1 = (function (){var statearr_45107 = state_45099;
(statearr_45107[(9)] = inst_45082__$1);

return statearr_45107;
})();
if(inst_45083){
var statearr_45108_47502 = state_45099__$1;
(statearr_45108_47502[(1)] = (8));

} else {
var statearr_45109_47503 = state_45099__$1;
(statearr_45109_47503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (3))){
var inst_45097 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45099__$1,inst_45097);
} else {
if((state_val_45100 === (2))){
var state_45099__$1 = state_45099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45099__$1,(4),ch);
} else {
if((state_val_45100 === (9))){
var inst_45082 = (state_45099[(9)]);
var inst_45068 = inst_45082;
var state_45099__$1 = (function (){var statearr_45113 = state_45099;
(statearr_45113[(7)] = inst_45068);

return statearr_45113;
})();
var statearr_45114_47504 = state_45099__$1;
(statearr_45114_47504[(2)] = null);

(statearr_45114_47504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (5))){
var inst_45068 = (state_45099[(7)]);
var state_45099__$1 = state_45099;
var statearr_45115_47511 = state_45099__$1;
(statearr_45115_47511[(2)] = inst_45068);

(statearr_45115_47511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (10))){
var inst_45093 = (state_45099[(2)]);
var state_45099__$1 = state_45099;
var statearr_45116_47512 = state_45099__$1;
(statearr_45116_47512[(2)] = inst_45093);

(statearr_45116_47512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45100 === (8))){
var inst_45082 = (state_45099[(9)]);
var inst_45089 = cljs.core.deref(inst_45082);
var state_45099__$1 = state_45099;
var statearr_45117_47513 = state_45099__$1;
(statearr_45117_47513[(2)] = inst_45089);

(statearr_45117_47513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43963__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43963__auto____0 = (function (){
var statearr_45118 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45118[(0)] = cljs$core$async$reduce_$_state_machine__43963__auto__);

(statearr_45118[(1)] = (1));

return statearr_45118;
});
var cljs$core$async$reduce_$_state_machine__43963__auto____1 = (function (state_45099){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_45099);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e45120){var ex__43966__auto__ = e45120;
var statearr_45121_47521 = state_45099;
(statearr_45121_47521[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_45099[(4)]))){
var statearr_45122_47523 = state_45099;
(statearr_45122_47523[(1)] = cljs.core.first((state_45099[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47524 = state_45099;
state_45099 = G__47524;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43963__auto__ = function(state_45099){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43963__auto____1.call(this,state_45099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43963__auto____0;
cljs$core$async$reduce_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43963__auto____1;
return cljs$core$async$reduce_$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_45127 = f__44479__auto__();
(statearr_45127[(6)] = c__44474__auto__);

return statearr_45127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

return c__44474__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_45141){
var state_val_45142 = (state_45141[(1)]);
if((state_val_45142 === (1))){
var inst_45136 = cljs.core.async.reduce(f__$1,init,ch);
var state_45141__$1 = state_45141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45141__$1,(2),inst_45136);
} else {
if((state_val_45142 === (2))){
var inst_45138 = (state_45141[(2)]);
var inst_45139 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45138) : f__$1.call(null,inst_45138));
var state_45141__$1 = state_45141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45141__$1,inst_45139);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43963__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43963__auto____0 = (function (){
var statearr_45144 = [null,null,null,null,null,null,null];
(statearr_45144[(0)] = cljs$core$async$transduce_$_state_machine__43963__auto__);

(statearr_45144[(1)] = (1));

return statearr_45144;
});
var cljs$core$async$transduce_$_state_machine__43963__auto____1 = (function (state_45141){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_45141);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e45145){var ex__43966__auto__ = e45145;
var statearr_45146_47531 = state_45141;
(statearr_45146_47531[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_45141[(4)]))){
var statearr_45147_47532 = state_45141;
(statearr_45147_47532[(1)] = cljs.core.first((state_45141[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47533 = state_45141;
state_45141 = G__47533;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43963__auto__ = function(state_45141){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43963__auto____1.call(this,state_45141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43963__auto____0;
cljs$core$async$transduce_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43963__auto____1;
return cljs$core$async$transduce_$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_45149 = f__44479__auto__();
(statearr_45149[(6)] = c__44474__auto__);

return statearr_45149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

return c__44474__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45151 = arguments.length;
switch (G__45151) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_45179){
var state_val_45180 = (state_45179[(1)]);
if((state_val_45180 === (7))){
var inst_45161 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
var statearr_45184_47544 = state_45179__$1;
(statearr_45184_47544[(2)] = inst_45161);

(statearr_45184_47544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (1))){
var inst_45154 = cljs.core.seq(coll);
var inst_45155 = inst_45154;
var state_45179__$1 = (function (){var statearr_45185 = state_45179;
(statearr_45185[(7)] = inst_45155);

return statearr_45185;
})();
var statearr_45186_47545 = state_45179__$1;
(statearr_45186_47545[(2)] = null);

(statearr_45186_47545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (4))){
var inst_45155 = (state_45179[(7)]);
var inst_45159 = cljs.core.first(inst_45155);
var state_45179__$1 = state_45179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45179__$1,(7),ch,inst_45159);
} else {
if((state_val_45180 === (13))){
var inst_45173 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
var statearr_45187_47549 = state_45179__$1;
(statearr_45187_47549[(2)] = inst_45173);

(statearr_45187_47549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (6))){
var inst_45164 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
if(cljs.core.truth_(inst_45164)){
var statearr_45188_47553 = state_45179__$1;
(statearr_45188_47553[(1)] = (8));

} else {
var statearr_45189_47554 = state_45179__$1;
(statearr_45189_47554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (3))){
var inst_45177 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45179__$1,inst_45177);
} else {
if((state_val_45180 === (12))){
var state_45179__$1 = state_45179;
var statearr_45190_47558 = state_45179__$1;
(statearr_45190_47558[(2)] = null);

(statearr_45190_47558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (2))){
var inst_45155 = (state_45179[(7)]);
var state_45179__$1 = state_45179;
if(cljs.core.truth_(inst_45155)){
var statearr_45191_47559 = state_45179__$1;
(statearr_45191_47559[(1)] = (4));

} else {
var statearr_45192_47560 = state_45179__$1;
(statearr_45192_47560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (11))){
var inst_45170 = cljs.core.async.close_BANG_(ch);
var state_45179__$1 = state_45179;
var statearr_45193_47561 = state_45179__$1;
(statearr_45193_47561[(2)] = inst_45170);

(statearr_45193_47561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (9))){
var state_45179__$1 = state_45179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45194_47562 = state_45179__$1;
(statearr_45194_47562[(1)] = (11));

} else {
var statearr_45196_47563 = state_45179__$1;
(statearr_45196_47563[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (5))){
var inst_45155 = (state_45179[(7)]);
var state_45179__$1 = state_45179;
var statearr_45200_47564 = state_45179__$1;
(statearr_45200_47564[(2)] = inst_45155);

(statearr_45200_47564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (10))){
var inst_45175 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
var statearr_45201_47565 = state_45179__$1;
(statearr_45201_47565[(2)] = inst_45175);

(statearr_45201_47565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (8))){
var inst_45155 = (state_45179[(7)]);
var inst_45166 = cljs.core.next(inst_45155);
var inst_45155__$1 = inst_45166;
var state_45179__$1 = (function (){var statearr_45202 = state_45179;
(statearr_45202[(7)] = inst_45155__$1);

return statearr_45202;
})();
var statearr_45203_47566 = state_45179__$1;
(statearr_45203_47566[(2)] = null);

(statearr_45203_47566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_45204 = [null,null,null,null,null,null,null,null];
(statearr_45204[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_45204[(1)] = (1));

return statearr_45204;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_45179){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_45179);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e45205){var ex__43966__auto__ = e45205;
var statearr_45206_47576 = state_45179;
(statearr_45206_47576[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_45179[(4)]))){
var statearr_45207_47577 = state_45179;
(statearr_45207_47577[(1)] = cljs.core.first((state_45179[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47578 = state_45179;
state_45179 = G__47578;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_45179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_45179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_45208 = f__44479__auto__();
(statearr_45208[(6)] = c__44474__auto__);

return statearr_45208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

return c__44474__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45210 = arguments.length;
switch (G__45210) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47581 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47581(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47586 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47586(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47589 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47589(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47590 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47590(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45216 = (function (ch,cs,meta45218){
this.ch = ch;
this.cs = cs;
this.meta45218 = meta45218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45221,meta45218__$1){
var self__ = this;
var _45221__$1 = this;
return (new cljs.core.async.t_cljs$core$async45216(self__.ch,self__.cs,meta45218__$1));
}));

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45221){
var self__ = this;
var _45221__$1 = this;
return self__.meta45218;
}));

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45216.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45218","meta45218",-236284373,null)], null);
}));

(cljs.core.async.t_cljs$core$async45216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45216");

(cljs.core.async.t_cljs$core$async45216.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45216.
 */
cljs.core.async.__GT_t_cljs$core$async45216 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45216(ch__$1,cs__$1,meta45218){
return (new cljs.core.async.t_cljs$core$async45216(ch__$1,cs__$1,meta45218));
});

}

return (new cljs.core.async.t_cljs$core$async45216(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44474__auto___47601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_45398){
var state_val_45399 = (state_45398[(1)]);
if((state_val_45399 === (7))){
var inst_45394 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45400_47603 = state_45398__$1;
(statearr_45400_47603[(2)] = inst_45394);

(statearr_45400_47603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (20))){
var inst_45286 = (state_45398[(7)]);
var inst_45298 = cljs.core.first(inst_45286);
var inst_45299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45298,(0),null);
var inst_45300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45298,(1),null);
var state_45398__$1 = (function (){var statearr_45401 = state_45398;
(statearr_45401[(8)] = inst_45299);

return statearr_45401;
})();
if(cljs.core.truth_(inst_45300)){
var statearr_45402_47604 = state_45398__$1;
(statearr_45402_47604[(1)] = (22));

} else {
var statearr_45403_47605 = state_45398__$1;
(statearr_45403_47605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (27))){
var inst_45228 = (state_45398[(9)]);
var inst_45338 = (state_45398[(10)]);
var inst_45331 = (state_45398[(11)]);
var inst_45333 = (state_45398[(12)]);
var inst_45338__$1 = cljs.core._nth(inst_45331,inst_45333);
var inst_45339 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45338__$1,inst_45228,done);
var state_45398__$1 = (function (){var statearr_45404 = state_45398;
(statearr_45404[(10)] = inst_45338__$1);

return statearr_45404;
})();
if(cljs.core.truth_(inst_45339)){
var statearr_45405_47606 = state_45398__$1;
(statearr_45405_47606[(1)] = (30));

} else {
var statearr_45406_47607 = state_45398__$1;
(statearr_45406_47607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (1))){
var state_45398__$1 = state_45398;
var statearr_45407_47608 = state_45398__$1;
(statearr_45407_47608[(2)] = null);

(statearr_45407_47608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (24))){
var inst_45286 = (state_45398[(7)]);
var inst_45305 = (state_45398[(2)]);
var inst_45306 = cljs.core.next(inst_45286);
var inst_45262 = inst_45306;
var inst_45263 = null;
var inst_45264 = (0);
var inst_45265 = (0);
var state_45398__$1 = (function (){var statearr_45408 = state_45398;
(statearr_45408[(13)] = inst_45264);

(statearr_45408[(14)] = inst_45262);

(statearr_45408[(15)] = inst_45263);

(statearr_45408[(16)] = inst_45265);

(statearr_45408[(17)] = inst_45305);

return statearr_45408;
})();
var statearr_45411_47609 = state_45398__$1;
(statearr_45411_47609[(2)] = null);

(statearr_45411_47609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (39))){
var state_45398__$1 = state_45398;
var statearr_45418_47610 = state_45398__$1;
(statearr_45418_47610[(2)] = null);

(statearr_45418_47610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (4))){
var inst_45228 = (state_45398[(9)]);
var inst_45228__$1 = (state_45398[(2)]);
var inst_45229 = (inst_45228__$1 == null);
var state_45398__$1 = (function (){var statearr_45419 = state_45398;
(statearr_45419[(9)] = inst_45228__$1);

return statearr_45419;
})();
if(cljs.core.truth_(inst_45229)){
var statearr_45420_47611 = state_45398__$1;
(statearr_45420_47611[(1)] = (5));

} else {
var statearr_45421_47613 = state_45398__$1;
(statearr_45421_47613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (15))){
var inst_45264 = (state_45398[(13)]);
var inst_45262 = (state_45398[(14)]);
var inst_45263 = (state_45398[(15)]);
var inst_45265 = (state_45398[(16)]);
var inst_45281 = (state_45398[(2)]);
var inst_45283 = (inst_45265 + (1));
var tmp45414 = inst_45264;
var tmp45415 = inst_45262;
var tmp45416 = inst_45263;
var inst_45262__$1 = tmp45415;
var inst_45263__$1 = tmp45416;
var inst_45264__$1 = tmp45414;
var inst_45265__$1 = inst_45283;
var state_45398__$1 = (function (){var statearr_45422 = state_45398;
(statearr_45422[(13)] = inst_45264__$1);

(statearr_45422[(14)] = inst_45262__$1);

(statearr_45422[(15)] = inst_45263__$1);

(statearr_45422[(16)] = inst_45265__$1);

(statearr_45422[(18)] = inst_45281);

return statearr_45422;
})();
var statearr_45423_47615 = state_45398__$1;
(statearr_45423_47615[(2)] = null);

(statearr_45423_47615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (21))){
var inst_45309 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45428_47617 = state_45398__$1;
(statearr_45428_47617[(2)] = inst_45309);

(statearr_45428_47617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (31))){
var inst_45338 = (state_45398[(10)]);
var inst_45342 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45338);
var state_45398__$1 = state_45398;
var statearr_45431_47622 = state_45398__$1;
(statearr_45431_47622[(2)] = inst_45342);

(statearr_45431_47622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (32))){
var inst_45332 = (state_45398[(19)]);
var inst_45331 = (state_45398[(11)]);
var inst_45333 = (state_45398[(12)]);
var inst_45330 = (state_45398[(20)]);
var inst_45344 = (state_45398[(2)]);
var inst_45345 = (inst_45333 + (1));
var tmp45424 = inst_45332;
var tmp45425 = inst_45331;
var tmp45426 = inst_45330;
var inst_45330__$1 = tmp45426;
var inst_45331__$1 = tmp45425;
var inst_45332__$1 = tmp45424;
var inst_45333__$1 = inst_45345;
var state_45398__$1 = (function (){var statearr_45432 = state_45398;
(statearr_45432[(19)] = inst_45332__$1);

(statearr_45432[(21)] = inst_45344);

(statearr_45432[(11)] = inst_45331__$1);

(statearr_45432[(12)] = inst_45333__$1);

(statearr_45432[(20)] = inst_45330__$1);

return statearr_45432;
})();
var statearr_45433_47623 = state_45398__$1;
(statearr_45433_47623[(2)] = null);

(statearr_45433_47623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (40))){
var inst_45367 = (state_45398[(22)]);
var inst_45371 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45367);
var state_45398__$1 = state_45398;
var statearr_45434_47624 = state_45398__$1;
(statearr_45434_47624[(2)] = inst_45371);

(statearr_45434_47624[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (33))){
var inst_45348 = (state_45398[(23)]);
var inst_45352 = cljs.core.chunked_seq_QMARK_(inst_45348);
var state_45398__$1 = state_45398;
if(inst_45352){
var statearr_45437_47625 = state_45398__$1;
(statearr_45437_47625[(1)] = (36));

} else {
var statearr_45438_47626 = state_45398__$1;
(statearr_45438_47626[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (13))){
var inst_45274 = (state_45398[(24)]);
var inst_45278 = cljs.core.async.close_BANG_(inst_45274);
var state_45398__$1 = state_45398;
var statearr_45439_47627 = state_45398__$1;
(statearr_45439_47627[(2)] = inst_45278);

(statearr_45439_47627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (22))){
var inst_45299 = (state_45398[(8)]);
var inst_45302 = cljs.core.async.close_BANG_(inst_45299);
var state_45398__$1 = state_45398;
var statearr_45440_47628 = state_45398__$1;
(statearr_45440_47628[(2)] = inst_45302);

(statearr_45440_47628[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (36))){
var inst_45348 = (state_45398[(23)]);
var inst_45357 = cljs.core.chunk_first(inst_45348);
var inst_45363 = cljs.core.chunk_rest(inst_45348);
var inst_45364 = cljs.core.count(inst_45357);
var inst_45330 = inst_45363;
var inst_45331 = inst_45357;
var inst_45332 = inst_45364;
var inst_45333 = (0);
var state_45398__$1 = (function (){var statearr_45441 = state_45398;
(statearr_45441[(19)] = inst_45332);

(statearr_45441[(11)] = inst_45331);

(statearr_45441[(12)] = inst_45333);

(statearr_45441[(20)] = inst_45330);

return statearr_45441;
})();
var statearr_45444_47629 = state_45398__$1;
(statearr_45444_47629[(2)] = null);

(statearr_45444_47629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (41))){
var inst_45348 = (state_45398[(23)]);
var inst_45373 = (state_45398[(2)]);
var inst_45374 = cljs.core.next(inst_45348);
var inst_45330 = inst_45374;
var inst_45331 = null;
var inst_45332 = (0);
var inst_45333 = (0);
var state_45398__$1 = (function (){var statearr_45445 = state_45398;
(statearr_45445[(19)] = inst_45332);

(statearr_45445[(25)] = inst_45373);

(statearr_45445[(11)] = inst_45331);

(statearr_45445[(12)] = inst_45333);

(statearr_45445[(20)] = inst_45330);

return statearr_45445;
})();
var statearr_45446_47630 = state_45398__$1;
(statearr_45446_47630[(2)] = null);

(statearr_45446_47630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (43))){
var state_45398__$1 = state_45398;
var statearr_45447_47632 = state_45398__$1;
(statearr_45447_47632[(2)] = null);

(statearr_45447_47632[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (29))){
var inst_45382 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45452_47633 = state_45398__$1;
(statearr_45452_47633[(2)] = inst_45382);

(statearr_45452_47633[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (44))){
var inst_45391 = (state_45398[(2)]);
var state_45398__$1 = (function (){var statearr_45453 = state_45398;
(statearr_45453[(26)] = inst_45391);

return statearr_45453;
})();
var statearr_45454_47634 = state_45398__$1;
(statearr_45454_47634[(2)] = null);

(statearr_45454_47634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (6))){
var inst_45319 = (state_45398[(27)]);
var inst_45318 = cljs.core.deref(cs);
var inst_45319__$1 = cljs.core.keys(inst_45318);
var inst_45320 = cljs.core.count(inst_45319__$1);
var inst_45321 = cljs.core.reset_BANG_(dctr,inst_45320);
var inst_45329 = cljs.core.seq(inst_45319__$1);
var inst_45330 = inst_45329;
var inst_45331 = null;
var inst_45332 = (0);
var inst_45333 = (0);
var state_45398__$1 = (function (){var statearr_45455 = state_45398;
(statearr_45455[(19)] = inst_45332);

(statearr_45455[(28)] = inst_45321);

(statearr_45455[(27)] = inst_45319__$1);

(statearr_45455[(11)] = inst_45331);

(statearr_45455[(12)] = inst_45333);

(statearr_45455[(20)] = inst_45330);

return statearr_45455;
})();
var statearr_45456_47639 = state_45398__$1;
(statearr_45456_47639[(2)] = null);

(statearr_45456_47639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (28))){
var inst_45348 = (state_45398[(23)]);
var inst_45330 = (state_45398[(20)]);
var inst_45348__$1 = cljs.core.seq(inst_45330);
var state_45398__$1 = (function (){var statearr_45457 = state_45398;
(statearr_45457[(23)] = inst_45348__$1);

return statearr_45457;
})();
if(inst_45348__$1){
var statearr_45458_47640 = state_45398__$1;
(statearr_45458_47640[(1)] = (33));

} else {
var statearr_45460_47641 = state_45398__$1;
(statearr_45460_47641[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (25))){
var inst_45332 = (state_45398[(19)]);
var inst_45333 = (state_45398[(12)]);
var inst_45335 = (inst_45333 < inst_45332);
var inst_45336 = inst_45335;
var state_45398__$1 = state_45398;
if(cljs.core.truth_(inst_45336)){
var statearr_45464_47642 = state_45398__$1;
(statearr_45464_47642[(1)] = (27));

} else {
var statearr_45465_47643 = state_45398__$1;
(statearr_45465_47643[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (34))){
var state_45398__$1 = state_45398;
var statearr_45468_47644 = state_45398__$1;
(statearr_45468_47644[(2)] = null);

(statearr_45468_47644[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (17))){
var state_45398__$1 = state_45398;
var statearr_45475_47645 = state_45398__$1;
(statearr_45475_47645[(2)] = null);

(statearr_45475_47645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (3))){
var inst_45396 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45398__$1,inst_45396);
} else {
if((state_val_45399 === (12))){
var inst_45314 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45476_47647 = state_45398__$1;
(statearr_45476_47647[(2)] = inst_45314);

(statearr_45476_47647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (2))){
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45398__$1,(4),ch);
} else {
if((state_val_45399 === (23))){
var state_45398__$1 = state_45398;
var statearr_45477_47648 = state_45398__$1;
(statearr_45477_47648[(2)] = null);

(statearr_45477_47648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (35))){
var inst_45380 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45478_47649 = state_45398__$1;
(statearr_45478_47649[(2)] = inst_45380);

(statearr_45478_47649[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (19))){
var inst_45286 = (state_45398[(7)]);
var inst_45290 = cljs.core.chunk_first(inst_45286);
var inst_45291 = cljs.core.chunk_rest(inst_45286);
var inst_45292 = cljs.core.count(inst_45290);
var inst_45262 = inst_45291;
var inst_45263 = inst_45290;
var inst_45264 = inst_45292;
var inst_45265 = (0);
var state_45398__$1 = (function (){var statearr_45480 = state_45398;
(statearr_45480[(13)] = inst_45264);

(statearr_45480[(14)] = inst_45262);

(statearr_45480[(15)] = inst_45263);

(statearr_45480[(16)] = inst_45265);

return statearr_45480;
})();
var statearr_45481_47654 = state_45398__$1;
(statearr_45481_47654[(2)] = null);

(statearr_45481_47654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (11))){
var inst_45262 = (state_45398[(14)]);
var inst_45286 = (state_45398[(7)]);
var inst_45286__$1 = cljs.core.seq(inst_45262);
var state_45398__$1 = (function (){var statearr_45483 = state_45398;
(statearr_45483[(7)] = inst_45286__$1);

return statearr_45483;
})();
if(inst_45286__$1){
var statearr_45484_47658 = state_45398__$1;
(statearr_45484_47658[(1)] = (16));

} else {
var statearr_45485_47659 = state_45398__$1;
(statearr_45485_47659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (9))){
var inst_45316 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45488_47660 = state_45398__$1;
(statearr_45488_47660[(2)] = inst_45316);

(statearr_45488_47660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (5))){
var inst_45260 = cljs.core.deref(cs);
var inst_45261 = cljs.core.seq(inst_45260);
var inst_45262 = inst_45261;
var inst_45263 = null;
var inst_45264 = (0);
var inst_45265 = (0);
var state_45398__$1 = (function (){var statearr_45489 = state_45398;
(statearr_45489[(13)] = inst_45264);

(statearr_45489[(14)] = inst_45262);

(statearr_45489[(15)] = inst_45263);

(statearr_45489[(16)] = inst_45265);

return statearr_45489;
})();
var statearr_45493_47664 = state_45398__$1;
(statearr_45493_47664[(2)] = null);

(statearr_45493_47664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (14))){
var state_45398__$1 = state_45398;
var statearr_45494_47665 = state_45398__$1;
(statearr_45494_47665[(2)] = null);

(statearr_45494_47665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (45))){
var inst_45388 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45496_47669 = state_45398__$1;
(statearr_45496_47669[(2)] = inst_45388);

(statearr_45496_47669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (26))){
var inst_45319 = (state_45398[(27)]);
var inst_45384 = (state_45398[(2)]);
var inst_45385 = cljs.core.seq(inst_45319);
var state_45398__$1 = (function (){var statearr_45497 = state_45398;
(statearr_45497[(29)] = inst_45384);

return statearr_45497;
})();
if(inst_45385){
var statearr_45500_47670 = state_45398__$1;
(statearr_45500_47670[(1)] = (42));

} else {
var statearr_45501_47671 = state_45398__$1;
(statearr_45501_47671[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (16))){
var inst_45286 = (state_45398[(7)]);
var inst_45288 = cljs.core.chunked_seq_QMARK_(inst_45286);
var state_45398__$1 = state_45398;
if(inst_45288){
var statearr_45503_47675 = state_45398__$1;
(statearr_45503_47675[(1)] = (19));

} else {
var statearr_45505_47676 = state_45398__$1;
(statearr_45505_47676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (38))){
var inst_45377 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45506_47677 = state_45398__$1;
(statearr_45506_47677[(2)] = inst_45377);

(statearr_45506_47677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (30))){
var state_45398__$1 = state_45398;
var statearr_45507_47679 = state_45398__$1;
(statearr_45507_47679[(2)] = null);

(statearr_45507_47679[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (10))){
var inst_45263 = (state_45398[(15)]);
var inst_45265 = (state_45398[(16)]);
var inst_45273 = cljs.core._nth(inst_45263,inst_45265);
var inst_45274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45273,(0),null);
var inst_45275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45273,(1),null);
var state_45398__$1 = (function (){var statearr_45509 = state_45398;
(statearr_45509[(24)] = inst_45274);

return statearr_45509;
})();
if(cljs.core.truth_(inst_45275)){
var statearr_45510_47683 = state_45398__$1;
(statearr_45510_47683[(1)] = (13));

} else {
var statearr_45511_47684 = state_45398__$1;
(statearr_45511_47684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (18))){
var inst_45312 = (state_45398[(2)]);
var state_45398__$1 = state_45398;
var statearr_45512_47685 = state_45398__$1;
(statearr_45512_47685[(2)] = inst_45312);

(statearr_45512_47685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (42))){
var state_45398__$1 = state_45398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45398__$1,(45),dchan);
} else {
if((state_val_45399 === (37))){
var inst_45367 = (state_45398[(22)]);
var inst_45228 = (state_45398[(9)]);
var inst_45348 = (state_45398[(23)]);
var inst_45367__$1 = cljs.core.first(inst_45348);
var inst_45368 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45367__$1,inst_45228,done);
var state_45398__$1 = (function (){var statearr_45518 = state_45398;
(statearr_45518[(22)] = inst_45367__$1);

return statearr_45518;
})();
if(cljs.core.truth_(inst_45368)){
var statearr_45519_47686 = state_45398__$1;
(statearr_45519_47686[(1)] = (39));

} else {
var statearr_45523_47687 = state_45398__$1;
(statearr_45523_47687[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45399 === (8))){
var inst_45264 = (state_45398[(13)]);
var inst_45265 = (state_45398[(16)]);
var inst_45267 = (inst_45265 < inst_45264);
var inst_45268 = inst_45267;
var state_45398__$1 = state_45398;
if(cljs.core.truth_(inst_45268)){
var statearr_45524_47691 = state_45398__$1;
(statearr_45524_47691[(1)] = (10));

} else {
var statearr_45526_47692 = state_45398__$1;
(statearr_45526_47692[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43963__auto__ = null;
var cljs$core$async$mult_$_state_machine__43963__auto____0 = (function (){
var statearr_45529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45529[(0)] = cljs$core$async$mult_$_state_machine__43963__auto__);

(statearr_45529[(1)] = (1));

return statearr_45529;
});
var cljs$core$async$mult_$_state_machine__43963__auto____1 = (function (state_45398){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_45398);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e45530){var ex__43966__auto__ = e45530;
var statearr_45531_47700 = state_45398;
(statearr_45531_47700[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_45398[(4)]))){
var statearr_45532_47701 = state_45398;
(statearr_45532_47701[(1)] = cljs.core.first((state_45398[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47703 = state_45398;
state_45398 = G__47703;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43963__auto__ = function(state_45398){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43963__auto____1.call(this,state_45398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43963__auto____0;
cljs$core$async$mult_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43963__auto____1;
return cljs$core$async$mult_$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_45539 = f__44479__auto__();
(statearr_45539[(6)] = c__44474__auto___47601);

return statearr_45539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45546 = arguments.length;
switch (G__45546) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47709 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47709(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47717 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47717(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47718 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47718(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47721 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47721(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47722 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47722(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47731 = arguments.length;
var i__5770__auto___47732 = (0);
while(true){
if((i__5770__auto___47732 < len__5769__auto___47731)){
args__5775__auto__.push((arguments[i__5770__auto___47732]));

var G__47733 = (i__5770__auto___47732 + (1));
i__5770__auto___47732 = G__47733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45622){
var map__45623 = p__45622;
var map__45623__$1 = cljs.core.__destructure_map(map__45623);
var opts = map__45623__$1;
var statearr_45625_47734 = state;
(statearr_45625_47734[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45630_47735 = state;
(statearr_45630_47735[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_45631_47739 = state;
(statearr_45631_47739[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45612){
var G__45613 = cljs.core.first(seq45612);
var seq45612__$1 = cljs.core.next(seq45612);
var G__45614 = cljs.core.first(seq45612__$1);
var seq45612__$2 = cljs.core.next(seq45612__$1);
var G__45615 = cljs.core.first(seq45612__$2);
var seq45612__$3 = cljs.core.next(seq45612__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45613,G__45614,G__45615,seq45612__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45645 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45646){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45646 = meta45646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45647,meta45646__$1){
var self__ = this;
var _45647__$1 = this;
return (new cljs.core.async.t_cljs$core$async45645(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45646__$1));
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45647){
var self__ = this;
var _45647__$1 = this;
return self__.meta45646;
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45645.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45646","meta45646",-459866692,null)], null);
}));

(cljs.core.async.t_cljs$core$async45645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45645");

(cljs.core.async.t_cljs$core$async45645.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45645.
 */
cljs.core.async.__GT_t_cljs$core$async45645 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45645(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45646){
return (new cljs.core.async.t_cljs$core$async45645(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45646));
});

}

return (new cljs.core.async.t_cljs$core$async45645(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44474__auto___47753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_45747){
var state_val_45749 = (state_45747[(1)]);
if((state_val_45749 === (7))){
var inst_45702 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45702)){
var statearr_45751_47754 = state_45747__$1;
(statearr_45751_47754[(1)] = (8));

} else {
var statearr_45752_47755 = state_45747__$1;
(statearr_45752_47755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (20))){
var inst_45694 = (state_45747[(7)]);
var state_45747__$1 = state_45747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45747__$1,(23),out,inst_45694);
} else {
if((state_val_45749 === (1))){
var inst_45677 = calc_state();
var inst_45678 = cljs.core.__destructure_map(inst_45677);
var inst_45679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45678,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45678,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45678,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45682 = inst_45677;
var state_45747__$1 = (function (){var statearr_45756 = state_45747;
(statearr_45756[(8)] = inst_45679);

(statearr_45756[(9)] = inst_45682);

(statearr_45756[(10)] = inst_45681);

(statearr_45756[(11)] = inst_45680);

return statearr_45756;
})();
var statearr_45758_47756 = state_45747__$1;
(statearr_45758_47756[(2)] = null);

(statearr_45758_47756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (24))){
var inst_45685 = (state_45747[(12)]);
var inst_45682 = inst_45685;
var state_45747__$1 = (function (){var statearr_45762 = state_45747;
(statearr_45762[(9)] = inst_45682);

return statearr_45762;
})();
var statearr_45764_47757 = state_45747__$1;
(statearr_45764_47757[(2)] = null);

(statearr_45764_47757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (4))){
var inst_45694 = (state_45747[(7)]);
var inst_45697 = (state_45747[(13)]);
var inst_45693 = (state_45747[(2)]);
var inst_45694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45693,(0),null);
var inst_45696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45693,(1),null);
var inst_45697__$1 = (inst_45694__$1 == null);
var state_45747__$1 = (function (){var statearr_45774 = state_45747;
(statearr_45774[(7)] = inst_45694__$1);

(statearr_45774[(13)] = inst_45697__$1);

(statearr_45774[(14)] = inst_45696);

return statearr_45774;
})();
if(cljs.core.truth_(inst_45697__$1)){
var statearr_45776_47759 = state_45747__$1;
(statearr_45776_47759[(1)] = (5));

} else {
var statearr_45777_47760 = state_45747__$1;
(statearr_45777_47760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (15))){
var inst_45686 = (state_45747[(15)]);
var inst_45718 = (state_45747[(16)]);
var inst_45718__$1 = cljs.core.empty_QMARK_(inst_45686);
var state_45747__$1 = (function (){var statearr_45778 = state_45747;
(statearr_45778[(16)] = inst_45718__$1);

return statearr_45778;
})();
if(inst_45718__$1){
var statearr_45779_47761 = state_45747__$1;
(statearr_45779_47761[(1)] = (17));

} else {
var statearr_45780_47765 = state_45747__$1;
(statearr_45780_47765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (21))){
var inst_45685 = (state_45747[(12)]);
var inst_45682 = inst_45685;
var state_45747__$1 = (function (){var statearr_45784 = state_45747;
(statearr_45784[(9)] = inst_45682);

return statearr_45784;
})();
var statearr_45786_47766 = state_45747__$1;
(statearr_45786_47766[(2)] = null);

(statearr_45786_47766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (13))){
var inst_45709 = (state_45747[(2)]);
var inst_45710 = calc_state();
var inst_45682 = inst_45710;
var state_45747__$1 = (function (){var statearr_45789 = state_45747;
(statearr_45789[(9)] = inst_45682);

(statearr_45789[(17)] = inst_45709);

return statearr_45789;
})();
var statearr_45790_47767 = state_45747__$1;
(statearr_45790_47767[(2)] = null);

(statearr_45790_47767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (22))){
var inst_45738 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45791_47768 = state_45747__$1;
(statearr_45791_47768[(2)] = inst_45738);

(statearr_45791_47768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (6))){
var inst_45696 = (state_45747[(14)]);
var inst_45700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45696,change);
var state_45747__$1 = state_45747;
var statearr_45792_47772 = state_45747__$1;
(statearr_45792_47772[(2)] = inst_45700);

(statearr_45792_47772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (25))){
var state_45747__$1 = state_45747;
var statearr_45793_47773 = state_45747__$1;
(statearr_45793_47773[(2)] = null);

(statearr_45793_47773[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (17))){
var inst_45687 = (state_45747[(18)]);
var inst_45696 = (state_45747[(14)]);
var inst_45720 = (inst_45687.cljs$core$IFn$_invoke$arity$1 ? inst_45687.cljs$core$IFn$_invoke$arity$1(inst_45696) : inst_45687.call(null,inst_45696));
var inst_45721 = cljs.core.not(inst_45720);
var state_45747__$1 = state_45747;
var statearr_45797_47775 = state_45747__$1;
(statearr_45797_47775[(2)] = inst_45721);

(statearr_45797_47775[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (3))){
var inst_45742 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45747__$1,inst_45742);
} else {
if((state_val_45749 === (12))){
var state_45747__$1 = state_45747;
var statearr_45799_47779 = state_45747__$1;
(statearr_45799_47779[(2)] = null);

(statearr_45799_47779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (2))){
var inst_45685 = (state_45747[(12)]);
var inst_45682 = (state_45747[(9)]);
var inst_45685__$1 = cljs.core.__destructure_map(inst_45682);
var inst_45686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45685__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45685__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45685__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45747__$1 = (function (){var statearr_45801 = state_45747;
(statearr_45801[(15)] = inst_45686);

(statearr_45801[(12)] = inst_45685__$1);

(statearr_45801[(18)] = inst_45687);

return statearr_45801;
})();
return cljs.core.async.ioc_alts_BANG_(state_45747__$1,(4),inst_45688);
} else {
if((state_val_45749 === (23))){
var inst_45729 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45729)){
var statearr_45802_47784 = state_45747__$1;
(statearr_45802_47784[(1)] = (24));

} else {
var statearr_45803_47785 = state_45747__$1;
(statearr_45803_47785[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (19))){
var inst_45724 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45804_47786 = state_45747__$1;
(statearr_45804_47786[(2)] = inst_45724);

(statearr_45804_47786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (11))){
var inst_45696 = (state_45747[(14)]);
var inst_45706 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45696);
var state_45747__$1 = state_45747;
var statearr_45805_47787 = state_45747__$1;
(statearr_45805_47787[(2)] = inst_45706);

(statearr_45805_47787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (9))){
var inst_45686 = (state_45747[(15)]);
var inst_45696 = (state_45747[(14)]);
var inst_45715 = (state_45747[(19)]);
var inst_45715__$1 = (inst_45686.cljs$core$IFn$_invoke$arity$1 ? inst_45686.cljs$core$IFn$_invoke$arity$1(inst_45696) : inst_45686.call(null,inst_45696));
var state_45747__$1 = (function (){var statearr_45809 = state_45747;
(statearr_45809[(19)] = inst_45715__$1);

return statearr_45809;
})();
if(cljs.core.truth_(inst_45715__$1)){
var statearr_45811_47788 = state_45747__$1;
(statearr_45811_47788[(1)] = (14));

} else {
var statearr_45812_47789 = state_45747__$1;
(statearr_45812_47789[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (5))){
var inst_45697 = (state_45747[(13)]);
var state_45747__$1 = state_45747;
var statearr_45813_47790 = state_45747__$1;
(statearr_45813_47790[(2)] = inst_45697);

(statearr_45813_47790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (14))){
var inst_45715 = (state_45747[(19)]);
var state_45747__$1 = state_45747;
var statearr_45816_47791 = state_45747__$1;
(statearr_45816_47791[(2)] = inst_45715);

(statearr_45816_47791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (26))){
var inst_45734 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45819_47792 = state_45747__$1;
(statearr_45819_47792[(2)] = inst_45734);

(statearr_45819_47792[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (16))){
var inst_45726 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45726)){
var statearr_45820_47793 = state_45747__$1;
(statearr_45820_47793[(1)] = (20));

} else {
var statearr_45822_47794 = state_45747__$1;
(statearr_45822_47794[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (10))){
var inst_45740 = (state_45747[(2)]);
var state_45747__$1 = state_45747;
var statearr_45824_47795 = state_45747__$1;
(statearr_45824_47795[(2)] = inst_45740);

(statearr_45824_47795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (18))){
var inst_45718 = (state_45747[(16)]);
var state_45747__$1 = state_45747;
var statearr_45825_47800 = state_45747__$1;
(statearr_45825_47800[(2)] = inst_45718);

(statearr_45825_47800[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45749 === (8))){
var inst_45694 = (state_45747[(7)]);
var inst_45704 = (inst_45694 == null);
var state_45747__$1 = state_45747;
if(cljs.core.truth_(inst_45704)){
var statearr_45826_47801 = state_45747__$1;
(statearr_45826_47801[(1)] = (11));

} else {
var statearr_45827_47803 = state_45747__$1;
(statearr_45827_47803[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43963__auto__ = null;
var cljs$core$async$mix_$_state_machine__43963__auto____0 = (function (){
var statearr_45829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45829[(0)] = cljs$core$async$mix_$_state_machine__43963__auto__);

(statearr_45829[(1)] = (1));

return statearr_45829;
});
var cljs$core$async$mix_$_state_machine__43963__auto____1 = (function (state_45747){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_45747);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e45833){var ex__43966__auto__ = e45833;
var statearr_45834_47807 = state_45747;
(statearr_45834_47807[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_45747[(4)]))){
var statearr_45836_47808 = state_45747;
(statearr_45836_47808[(1)] = cljs.core.first((state_45747[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47809 = state_45747;
state_45747 = G__47809;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43963__auto__ = function(state_45747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43963__auto____1.call(this,state_45747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43963__auto____0;
cljs$core$async$mix_$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43963__auto____1;
return cljs$core$async$mix_$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_45838 = f__44479__auto__();
(statearr_45838[(6)] = c__44474__auto___47753);

return statearr_45838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47813 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47813(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47817 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47817(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47818 = (function() {
var G__47819 = null;
var G__47819__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47819__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47819 = function(p,v){
switch(arguments.length){
case 1:
return G__47819__1.call(this,p);
case 2:
return G__47819__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47819.cljs$core$IFn$_invoke$arity$1 = G__47819__1;
G__47819.cljs$core$IFn$_invoke$arity$2 = G__47819__2;
return G__47819;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45893 = arguments.length;
switch (G__45893) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47818(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47818(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45923 = arguments.length;
switch (G__45923) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45904_SHARP_){
if(cljs.core.truth_((p1__45904_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45904_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45904_SHARP_.call(null,topic)))){
return p1__45904_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45904_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45938 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45939){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45939 = meta45939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45940,meta45939__$1){
var self__ = this;
var _45940__$1 = this;
return (new cljs.core.async.t_cljs$core$async45938(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45939__$1));
}));

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45940){
var self__ = this;
var _45940__$1 = this;
return self__.meta45939;
}));

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45939","meta45939",1581781174,null)], null);
}));

(cljs.core.async.t_cljs$core$async45938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45938");

(cljs.core.async.t_cljs$core$async45938.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45938.
 */
cljs.core.async.__GT_t_cljs$core$async45938 = (function cljs$core$async$__GT_t_cljs$core$async45938(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45939){
return (new cljs.core.async.t_cljs$core$async45938(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45939));
});

}

return (new cljs.core.async.t_cljs$core$async45938(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44474__auto___47833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46077){
var state_val_46078 = (state_46077[(1)]);
if((state_val_46078 === (7))){
var inst_46073 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46079_47837 = state_46077__$1;
(statearr_46079_47837[(2)] = inst_46073);

(statearr_46079_47837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (20))){
var state_46077__$1 = state_46077;
var statearr_46080_47838 = state_46077__$1;
(statearr_46080_47838[(2)] = null);

(statearr_46080_47838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (1))){
var state_46077__$1 = state_46077;
var statearr_46081_47841 = state_46077__$1;
(statearr_46081_47841[(2)] = null);

(statearr_46081_47841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (24))){
var inst_46055 = (state_46077[(7)]);
var inst_46065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46055);
var state_46077__$1 = state_46077;
var statearr_46082_47843 = state_46077__$1;
(statearr_46082_47843[(2)] = inst_46065);

(statearr_46082_47843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (4))){
var inst_45996 = (state_46077[(8)]);
var inst_45996__$1 = (state_46077[(2)]);
var inst_45997 = (inst_45996__$1 == null);
var state_46077__$1 = (function (){var statearr_46083 = state_46077;
(statearr_46083[(8)] = inst_45996__$1);

return statearr_46083;
})();
if(cljs.core.truth_(inst_45997)){
var statearr_46084_47848 = state_46077__$1;
(statearr_46084_47848[(1)] = (5));

} else {
var statearr_46085_47850 = state_46077__$1;
(statearr_46085_47850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (15))){
var inst_46049 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46086_47851 = state_46077__$1;
(statearr_46086_47851[(2)] = inst_46049);

(statearr_46086_47851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (21))){
var inst_46070 = (state_46077[(2)]);
var state_46077__$1 = (function (){var statearr_46087 = state_46077;
(statearr_46087[(9)] = inst_46070);

return statearr_46087;
})();
var statearr_46088_47852 = state_46077__$1;
(statearr_46088_47852[(2)] = null);

(statearr_46088_47852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (13))){
var inst_46021 = (state_46077[(10)]);
var inst_46023 = cljs.core.chunked_seq_QMARK_(inst_46021);
var state_46077__$1 = state_46077;
if(inst_46023){
var statearr_46089_47854 = state_46077__$1;
(statearr_46089_47854[(1)] = (16));

} else {
var statearr_46091_47859 = state_46077__$1;
(statearr_46091_47859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (22))){
var inst_46062 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
if(cljs.core.truth_(inst_46062)){
var statearr_46093_47860 = state_46077__$1;
(statearr_46093_47860[(1)] = (23));

} else {
var statearr_46095_47861 = state_46077__$1;
(statearr_46095_47861[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (6))){
var inst_46055 = (state_46077[(7)]);
var inst_46057 = (state_46077[(11)]);
var inst_45996 = (state_46077[(8)]);
var inst_46055__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45996) : topic_fn.call(null,inst_45996));
var inst_46056 = cljs.core.deref(mults);
var inst_46057__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46056,inst_46055__$1);
var state_46077__$1 = (function (){var statearr_46096 = state_46077;
(statearr_46096[(7)] = inst_46055__$1);

(statearr_46096[(11)] = inst_46057__$1);

return statearr_46096;
})();
if(cljs.core.truth_(inst_46057__$1)){
var statearr_46097_47865 = state_46077__$1;
(statearr_46097_47865[(1)] = (19));

} else {
var statearr_46098_47866 = state_46077__$1;
(statearr_46098_47866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (25))){
var inst_46067 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46099_47870 = state_46077__$1;
(statearr_46099_47870[(2)] = inst_46067);

(statearr_46099_47870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (17))){
var inst_46021 = (state_46077[(10)]);
var inst_46030 = cljs.core.first(inst_46021);
var inst_46032 = cljs.core.async.muxch_STAR_(inst_46030);
var inst_46035 = cljs.core.async.close_BANG_(inst_46032);
var inst_46043 = cljs.core.next(inst_46021);
var inst_46006 = inst_46043;
var inst_46007 = null;
var inst_46008 = (0);
var inst_46009 = (0);
var state_46077__$1 = (function (){var statearr_46100 = state_46077;
(statearr_46100[(12)] = inst_46035);

(statearr_46100[(13)] = inst_46006);

(statearr_46100[(14)] = inst_46007);

(statearr_46100[(15)] = inst_46008);

(statearr_46100[(16)] = inst_46009);

return statearr_46100;
})();
var statearr_46101_47872 = state_46077__$1;
(statearr_46101_47872[(2)] = null);

(statearr_46101_47872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (3))){
var inst_46075 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46077__$1,inst_46075);
} else {
if((state_val_46078 === (12))){
var inst_46051 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46107_47876 = state_46077__$1;
(statearr_46107_47876[(2)] = inst_46051);

(statearr_46107_47876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (2))){
var state_46077__$1 = state_46077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46077__$1,(4),ch);
} else {
if((state_val_46078 === (23))){
var state_46077__$1 = state_46077;
var statearr_46108_47877 = state_46077__$1;
(statearr_46108_47877[(2)] = null);

(statearr_46108_47877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (19))){
var inst_46057 = (state_46077[(11)]);
var inst_45996 = (state_46077[(8)]);
var inst_46060 = cljs.core.async.muxch_STAR_(inst_46057);
var state_46077__$1 = state_46077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46077__$1,(22),inst_46060,inst_45996);
} else {
if((state_val_46078 === (11))){
var inst_46006 = (state_46077[(13)]);
var inst_46021 = (state_46077[(10)]);
var inst_46021__$1 = cljs.core.seq(inst_46006);
var state_46077__$1 = (function (){var statearr_46117 = state_46077;
(statearr_46117[(10)] = inst_46021__$1);

return statearr_46117;
})();
if(inst_46021__$1){
var statearr_46118_47885 = state_46077__$1;
(statearr_46118_47885[(1)] = (13));

} else {
var statearr_46119_47886 = state_46077__$1;
(statearr_46119_47886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (9))){
var inst_46053 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46120_47890 = state_46077__$1;
(statearr_46120_47890[(2)] = inst_46053);

(statearr_46120_47890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (5))){
var inst_46003 = cljs.core.deref(mults);
var inst_46004 = cljs.core.vals(inst_46003);
var inst_46005 = cljs.core.seq(inst_46004);
var inst_46006 = inst_46005;
var inst_46007 = null;
var inst_46008 = (0);
var inst_46009 = (0);
var state_46077__$1 = (function (){var statearr_46127 = state_46077;
(statearr_46127[(13)] = inst_46006);

(statearr_46127[(14)] = inst_46007);

(statearr_46127[(15)] = inst_46008);

(statearr_46127[(16)] = inst_46009);

return statearr_46127;
})();
var statearr_46128_47899 = state_46077__$1;
(statearr_46128_47899[(2)] = null);

(statearr_46128_47899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (14))){
var state_46077__$1 = state_46077;
var statearr_46132_47901 = state_46077__$1;
(statearr_46132_47901[(2)] = null);

(statearr_46132_47901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (16))){
var inst_46021 = (state_46077[(10)]);
var inst_46025 = cljs.core.chunk_first(inst_46021);
var inst_46026 = cljs.core.chunk_rest(inst_46021);
var inst_46027 = cljs.core.count(inst_46025);
var inst_46006 = inst_46026;
var inst_46007 = inst_46025;
var inst_46008 = inst_46027;
var inst_46009 = (0);
var state_46077__$1 = (function (){var statearr_46136 = state_46077;
(statearr_46136[(13)] = inst_46006);

(statearr_46136[(14)] = inst_46007);

(statearr_46136[(15)] = inst_46008);

(statearr_46136[(16)] = inst_46009);

return statearr_46136;
})();
var statearr_46141_47905 = state_46077__$1;
(statearr_46141_47905[(2)] = null);

(statearr_46141_47905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (10))){
var inst_46006 = (state_46077[(13)]);
var inst_46007 = (state_46077[(14)]);
var inst_46008 = (state_46077[(15)]);
var inst_46009 = (state_46077[(16)]);
var inst_46015 = cljs.core._nth(inst_46007,inst_46009);
var inst_46016 = cljs.core.async.muxch_STAR_(inst_46015);
var inst_46017 = cljs.core.async.close_BANG_(inst_46016);
var inst_46018 = (inst_46009 + (1));
var tmp46129 = inst_46006;
var tmp46130 = inst_46007;
var tmp46131 = inst_46008;
var inst_46006__$1 = tmp46129;
var inst_46007__$1 = tmp46130;
var inst_46008__$1 = tmp46131;
var inst_46009__$1 = inst_46018;
var state_46077__$1 = (function (){var statearr_46142 = state_46077;
(statearr_46142[(13)] = inst_46006__$1);

(statearr_46142[(14)] = inst_46007__$1);

(statearr_46142[(15)] = inst_46008__$1);

(statearr_46142[(16)] = inst_46009__$1);

(statearr_46142[(17)] = inst_46017);

return statearr_46142;
})();
var statearr_46143_47909 = state_46077__$1;
(statearr_46143_47909[(2)] = null);

(statearr_46143_47909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (18))){
var inst_46046 = (state_46077[(2)]);
var state_46077__$1 = state_46077;
var statearr_46144_47910 = state_46077__$1;
(statearr_46144_47910[(2)] = inst_46046);

(statearr_46144_47910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46078 === (8))){
var inst_46008 = (state_46077[(15)]);
var inst_46009 = (state_46077[(16)]);
var inst_46011 = (inst_46009 < inst_46008);
var inst_46012 = inst_46011;
var state_46077__$1 = state_46077;
if(cljs.core.truth_(inst_46012)){
var statearr_46145_47912 = state_46077__$1;
(statearr_46145_47912[(1)] = (10));

} else {
var statearr_46146_47913 = state_46077__$1;
(statearr_46146_47913[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_46148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46148[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_46148[(1)] = (1));

return statearr_46148;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46077){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46077);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46149){var ex__43966__auto__ = e46149;
var statearr_46150_47914 = state_46077;
(statearr_46150_47914[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46077[(4)]))){
var statearr_46151_47915 = state_46077;
(statearr_46151_47915[(1)] = cljs.core.first((state_46077[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47916 = state_46077;
state_46077 = G__47916;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46152 = f__44479__auto__();
(statearr_46152[(6)] = c__44474__auto___47833);

return statearr_46152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46154 = arguments.length;
switch (G__46154) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46163 = arguments.length;
switch (G__46163) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46171 = arguments.length;
switch (G__46171) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__44474__auto___47920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46228){
var state_val_46229 = (state_46228[(1)]);
if((state_val_46229 === (7))){
var state_46228__$1 = state_46228;
var statearr_46232_47922 = state_46228__$1;
(statearr_46232_47922[(2)] = null);

(statearr_46232_47922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (1))){
var state_46228__$1 = state_46228;
var statearr_46233_47926 = state_46228__$1;
(statearr_46233_47926[(2)] = null);

(statearr_46233_47926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (4))){
var inst_46183 = (state_46228[(7)]);
var inst_46184 = (state_46228[(8)]);
var inst_46186 = (inst_46184 < inst_46183);
var state_46228__$1 = state_46228;
if(cljs.core.truth_(inst_46186)){
var statearr_46235_47927 = state_46228__$1;
(statearr_46235_47927[(1)] = (6));

} else {
var statearr_46236_47928 = state_46228__$1;
(statearr_46236_47928[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (15))){
var inst_46214 = (state_46228[(9)]);
var inst_46219 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46214);
var state_46228__$1 = state_46228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46228__$1,(17),out,inst_46219);
} else {
if((state_val_46229 === (13))){
var inst_46214 = (state_46228[(9)]);
var inst_46214__$1 = (state_46228[(2)]);
var inst_46215 = cljs.core.some(cljs.core.nil_QMARK_,inst_46214__$1);
var state_46228__$1 = (function (){var statearr_46240 = state_46228;
(statearr_46240[(9)] = inst_46214__$1);

return statearr_46240;
})();
if(cljs.core.truth_(inst_46215)){
var statearr_46241_47929 = state_46228__$1;
(statearr_46241_47929[(1)] = (14));

} else {
var statearr_46242_47930 = state_46228__$1;
(statearr_46242_47930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (6))){
var state_46228__$1 = state_46228;
var statearr_46243_47931 = state_46228__$1;
(statearr_46243_47931[(2)] = null);

(statearr_46243_47931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (17))){
var inst_46221 = (state_46228[(2)]);
var state_46228__$1 = (function (){var statearr_46251 = state_46228;
(statearr_46251[(10)] = inst_46221);

return statearr_46251;
})();
var statearr_46252_47938 = state_46228__$1;
(statearr_46252_47938[(2)] = null);

(statearr_46252_47938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (3))){
var inst_46226 = (state_46228[(2)]);
var state_46228__$1 = state_46228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46228__$1,inst_46226);
} else {
if((state_val_46229 === (12))){
var _ = (function (){var statearr_46253 = state_46228;
(statearr_46253[(4)] = cljs.core.rest((state_46228[(4)])));

return statearr_46253;
})();
var state_46228__$1 = state_46228;
var ex46247 = (state_46228__$1[(2)]);
var statearr_46254_47944 = state_46228__$1;
(statearr_46254_47944[(5)] = ex46247);


if((ex46247 instanceof Object)){
var statearr_46256_47945 = state_46228__$1;
(statearr_46256_47945[(1)] = (11));

(statearr_46256_47945[(5)] = null);

} else {
throw ex46247;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (2))){
var inst_46182 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46183 = cnt;
var inst_46184 = (0);
var state_46228__$1 = (function (){var statearr_46257 = state_46228;
(statearr_46257[(11)] = inst_46182);

(statearr_46257[(7)] = inst_46183);

(statearr_46257[(8)] = inst_46184);

return statearr_46257;
})();
var statearr_46258_47949 = state_46228__$1;
(statearr_46258_47949[(2)] = null);

(statearr_46258_47949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (11))){
var inst_46192 = (state_46228[(2)]);
var inst_46194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46228__$1 = (function (){var statearr_46260 = state_46228;
(statearr_46260[(12)] = inst_46192);

return statearr_46260;
})();
var statearr_46261_47950 = state_46228__$1;
(statearr_46261_47950[(2)] = inst_46194);

(statearr_46261_47950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (9))){
var inst_46184 = (state_46228[(8)]);
var _ = (function (){var statearr_46262 = state_46228;
(statearr_46262[(4)] = cljs.core.cons((12),(state_46228[(4)])));

return statearr_46262;
})();
var inst_46200 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46184) : chs__$1.call(null,inst_46184));
var inst_46201 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46184) : done.call(null,inst_46184));
var inst_46202 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46200,inst_46201);
var ___$1 = (function (){var statearr_46263 = state_46228;
(statearr_46263[(4)] = cljs.core.rest((state_46228[(4)])));

return statearr_46263;
})();
var state_46228__$1 = state_46228;
var statearr_46269_47954 = state_46228__$1;
(statearr_46269_47954[(2)] = inst_46202);

(statearr_46269_47954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (5))){
var inst_46212 = (state_46228[(2)]);
var state_46228__$1 = (function (){var statearr_46270 = state_46228;
(statearr_46270[(13)] = inst_46212);

return statearr_46270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46228__$1,(13),dchan);
} else {
if((state_val_46229 === (14))){
var inst_46217 = cljs.core.async.close_BANG_(out);
var state_46228__$1 = state_46228;
var statearr_46274_47961 = state_46228__$1;
(statearr_46274_47961[(2)] = inst_46217);

(statearr_46274_47961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (16))){
var inst_46224 = (state_46228[(2)]);
var state_46228__$1 = state_46228;
var statearr_46280_47962 = state_46228__$1;
(statearr_46280_47962[(2)] = inst_46224);

(statearr_46280_47962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (10))){
var inst_46184 = (state_46228[(8)]);
var inst_46205 = (state_46228[(2)]);
var inst_46206 = (inst_46184 + (1));
var inst_46184__$1 = inst_46206;
var state_46228__$1 = (function (){var statearr_46283 = state_46228;
(statearr_46283[(14)] = inst_46205);

(statearr_46283[(8)] = inst_46184__$1);

return statearr_46283;
})();
var statearr_46287_47964 = state_46228__$1;
(statearr_46287_47964[(2)] = null);

(statearr_46287_47964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46229 === (8))){
var inst_46210 = (state_46228[(2)]);
var state_46228__$1 = state_46228;
var statearr_46288_47968 = state_46228__$1;
(statearr_46288_47968[(2)] = inst_46210);

(statearr_46288_47968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_46289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46289[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_46289[(1)] = (1));

return statearr_46289;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46228){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46228);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46295){var ex__43966__auto__ = e46295;
var statearr_46296_47972 = state_46228;
(statearr_46296_47972[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46228[(4)]))){
var statearr_46298_47973 = state_46228;
(statearr_46298_47973[(1)] = cljs.core.first((state_46228[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47974 = state_46228;
state_46228 = G__47974;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46300 = f__44479__auto__();
(statearr_46300[(6)] = c__44474__auto___47920);

return statearr_46300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46305 = arguments.length;
switch (G__46305) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44474__auto___47977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46345){
var state_val_46346 = (state_46345[(1)]);
if((state_val_46346 === (7))){
var inst_46321 = (state_46345[(7)]);
var inst_46323 = (state_46345[(8)]);
var inst_46321__$1 = (state_46345[(2)]);
var inst_46323__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46321__$1,(0),null);
var inst_46324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46321__$1,(1),null);
var inst_46325 = (inst_46323__$1 == null);
var state_46345__$1 = (function (){var statearr_46347 = state_46345;
(statearr_46347[(7)] = inst_46321__$1);

(statearr_46347[(8)] = inst_46323__$1);

(statearr_46347[(9)] = inst_46324);

return statearr_46347;
})();
if(cljs.core.truth_(inst_46325)){
var statearr_46348_47987 = state_46345__$1;
(statearr_46348_47987[(1)] = (8));

} else {
var statearr_46349_47988 = state_46345__$1;
(statearr_46349_47988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (1))){
var inst_46310 = cljs.core.vec(chs);
var inst_46311 = inst_46310;
var state_46345__$1 = (function (){var statearr_46350 = state_46345;
(statearr_46350[(10)] = inst_46311);

return statearr_46350;
})();
var statearr_46351_47989 = state_46345__$1;
(statearr_46351_47989[(2)] = null);

(statearr_46351_47989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (4))){
var inst_46311 = (state_46345[(10)]);
var state_46345__$1 = state_46345;
return cljs.core.async.ioc_alts_BANG_(state_46345__$1,(7),inst_46311);
} else {
if((state_val_46346 === (6))){
var inst_46341 = (state_46345[(2)]);
var state_46345__$1 = state_46345;
var statearr_46357_47996 = state_46345__$1;
(statearr_46357_47996[(2)] = inst_46341);

(statearr_46357_47996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (3))){
var inst_46343 = (state_46345[(2)]);
var state_46345__$1 = state_46345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46345__$1,inst_46343);
} else {
if((state_val_46346 === (2))){
var inst_46311 = (state_46345[(10)]);
var inst_46313 = cljs.core.count(inst_46311);
var inst_46314 = (inst_46313 > (0));
var state_46345__$1 = state_46345;
if(cljs.core.truth_(inst_46314)){
var statearr_46361_48002 = state_46345__$1;
(statearr_46361_48002[(1)] = (4));

} else {
var statearr_46362_48003 = state_46345__$1;
(statearr_46362_48003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (11))){
var inst_46311 = (state_46345[(10)]);
var inst_46334 = (state_46345[(2)]);
var tmp46358 = inst_46311;
var inst_46311__$1 = tmp46358;
var state_46345__$1 = (function (){var statearr_46364 = state_46345;
(statearr_46364[(10)] = inst_46311__$1);

(statearr_46364[(11)] = inst_46334);

return statearr_46364;
})();
var statearr_46366_48004 = state_46345__$1;
(statearr_46366_48004[(2)] = null);

(statearr_46366_48004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (9))){
var inst_46323 = (state_46345[(8)]);
var state_46345__$1 = state_46345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46345__$1,(11),out,inst_46323);
} else {
if((state_val_46346 === (5))){
var inst_46339 = cljs.core.async.close_BANG_(out);
var state_46345__$1 = state_46345;
var statearr_46367_48005 = state_46345__$1;
(statearr_46367_48005[(2)] = inst_46339);

(statearr_46367_48005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (10))){
var inst_46337 = (state_46345[(2)]);
var state_46345__$1 = state_46345;
var statearr_46368_48007 = state_46345__$1;
(statearr_46368_48007[(2)] = inst_46337);

(statearr_46368_48007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (8))){
var inst_46311 = (state_46345[(10)]);
var inst_46321 = (state_46345[(7)]);
var inst_46323 = (state_46345[(8)]);
var inst_46324 = (state_46345[(9)]);
var inst_46328 = (function (){var cs = inst_46311;
var vec__46316 = inst_46321;
var v = inst_46323;
var c = inst_46324;
return (function (p1__46301_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46301_SHARP_);
});
})();
var inst_46329 = cljs.core.filterv(inst_46328,inst_46311);
var inst_46311__$1 = inst_46329;
var state_46345__$1 = (function (){var statearr_46369 = state_46345;
(statearr_46369[(10)] = inst_46311__$1);

return statearr_46369;
})();
var statearr_46370_48012 = state_46345__$1;
(statearr_46370_48012[(2)] = null);

(statearr_46370_48012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_46373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46373[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_46373[(1)] = (1));

return statearr_46373;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46345){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46345);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46374){var ex__43966__auto__ = e46374;
var statearr_46375_48019 = state_46345;
(statearr_46375_48019[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46345[(4)]))){
var statearr_46377_48020 = state_46345;
(statearr_46377_48020[(1)] = cljs.core.first((state_46345[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48021 = state_46345;
state_46345 = G__48021;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46379 = f__44479__auto__();
(statearr_46379[(6)] = c__44474__auto___47977);

return statearr_46379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46387 = arguments.length;
switch (G__46387) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44474__auto___48027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46413){
var state_val_46414 = (state_46413[(1)]);
if((state_val_46414 === (7))){
var inst_46393 = (state_46413[(7)]);
var inst_46393__$1 = (state_46413[(2)]);
var inst_46394 = (inst_46393__$1 == null);
var inst_46395 = cljs.core.not(inst_46394);
var state_46413__$1 = (function (){var statearr_46418 = state_46413;
(statearr_46418[(7)] = inst_46393__$1);

return statearr_46418;
})();
if(inst_46395){
var statearr_46419_48028 = state_46413__$1;
(statearr_46419_48028[(1)] = (8));

} else {
var statearr_46420_48029 = state_46413__$1;
(statearr_46420_48029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (1))){
var inst_46388 = (0);
var state_46413__$1 = (function (){var statearr_46421 = state_46413;
(statearr_46421[(8)] = inst_46388);

return statearr_46421;
})();
var statearr_46422_48030 = state_46413__$1;
(statearr_46422_48030[(2)] = null);

(statearr_46422_48030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (4))){
var state_46413__$1 = state_46413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46413__$1,(7),ch);
} else {
if((state_val_46414 === (6))){
var inst_46407 = (state_46413[(2)]);
var state_46413__$1 = state_46413;
var statearr_46423_48034 = state_46413__$1;
(statearr_46423_48034[(2)] = inst_46407);

(statearr_46423_48034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (3))){
var inst_46410 = (state_46413[(2)]);
var inst_46411 = cljs.core.async.close_BANG_(out);
var state_46413__$1 = (function (){var statearr_46424 = state_46413;
(statearr_46424[(9)] = inst_46410);

return statearr_46424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46413__$1,inst_46411);
} else {
if((state_val_46414 === (2))){
var inst_46388 = (state_46413[(8)]);
var inst_46390 = (inst_46388 < n);
var state_46413__$1 = state_46413;
if(cljs.core.truth_(inst_46390)){
var statearr_46425_48042 = state_46413__$1;
(statearr_46425_48042[(1)] = (4));

} else {
var statearr_46427_48043 = state_46413__$1;
(statearr_46427_48043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (11))){
var inst_46388 = (state_46413[(8)]);
var inst_46398 = (state_46413[(2)]);
var inst_46399 = (inst_46388 + (1));
var inst_46388__$1 = inst_46399;
var state_46413__$1 = (function (){var statearr_46429 = state_46413;
(statearr_46429[(8)] = inst_46388__$1);

(statearr_46429[(10)] = inst_46398);

return statearr_46429;
})();
var statearr_46430_48046 = state_46413__$1;
(statearr_46430_48046[(2)] = null);

(statearr_46430_48046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (9))){
var state_46413__$1 = state_46413;
var statearr_46432_48047 = state_46413__$1;
(statearr_46432_48047[(2)] = null);

(statearr_46432_48047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (5))){
var state_46413__$1 = state_46413;
var statearr_46434_48048 = state_46413__$1;
(statearr_46434_48048[(2)] = null);

(statearr_46434_48048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (10))){
var inst_46403 = (state_46413[(2)]);
var state_46413__$1 = state_46413;
var statearr_46435_48052 = state_46413__$1;
(statearr_46435_48052[(2)] = inst_46403);

(statearr_46435_48052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46414 === (8))){
var inst_46393 = (state_46413[(7)]);
var state_46413__$1 = state_46413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46413__$1,(11),out,inst_46393);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_46438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46438[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_46438[(1)] = (1));

return statearr_46438;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46413){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46413);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46439){var ex__43966__auto__ = e46439;
var statearr_46440_48053 = state_46413;
(statearr_46440_48053[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46413[(4)]))){
var statearr_46441_48057 = state_46413;
(statearr_46441_48057[(1)] = cljs.core.first((state_46413[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48058 = state_46413;
state_46413 = G__48058;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46444 = f__44479__auto__();
(statearr_46444[(6)] = c__44474__auto___48027);

return statearr_46444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46446 = (function (f,ch,meta46447){
this.f = f;
this.ch = ch;
this.meta46447 = meta46447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46448,meta46447__$1){
var self__ = this;
var _46448__$1 = this;
return (new cljs.core.async.t_cljs$core$async46446(self__.f,self__.ch,meta46447__$1));
}));

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46448){
var self__ = this;
var _46448__$1 = this;
return self__.meta46447;
}));

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46452 = (function (f,ch,meta46447,_,fn1,meta46453){
this.f = f;
this.ch = ch;
this.meta46447 = meta46447;
this._ = _;
this.fn1 = fn1;
this.meta46453 = meta46453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46454,meta46453__$1){
var self__ = this;
var _46454__$1 = this;
return (new cljs.core.async.t_cljs$core$async46452(self__.f,self__.ch,self__.meta46447,self__._,self__.fn1,meta46453__$1));
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46454){
var self__ = this;
var _46454__$1 = this;
return self__.meta46453;
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46445_SHARP_){
var G__46457 = (((p1__46445_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46445_SHARP_) : self__.f.call(null,p1__46445_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46457) : f1.call(null,G__46457));
});
}));

(cljs.core.async.t_cljs$core$async46452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46447","meta46447",-150354885,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46446","cljs.core.async/t_cljs$core$async46446",1036983279,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46453","meta46453",1411690376,null)], null);
}));

(cljs.core.async.t_cljs$core$async46452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46452");

(cljs.core.async.t_cljs$core$async46452.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46452.
 */
cljs.core.async.__GT_t_cljs$core$async46452 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46452(f__$1,ch__$1,meta46447__$1,___$2,fn1__$1,meta46453){
return (new cljs.core.async.t_cljs$core$async46452(f__$1,ch__$1,meta46447__$1,___$2,fn1__$1,meta46453));
});

}

return (new cljs.core.async.t_cljs$core$async46452(self__.f,self__.ch,self__.meta46447,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46472 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46472) : self__.f.call(null,G__46472));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46447","meta46447",-150354885,null)], null);
}));

(cljs.core.async.t_cljs$core$async46446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46446");

(cljs.core.async.t_cljs$core$async46446.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46446.
 */
cljs.core.async.__GT_t_cljs$core$async46446 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46446(f__$1,ch__$1,meta46447){
return (new cljs.core.async.t_cljs$core$async46446(f__$1,ch__$1,meta46447));
});

}

return (new cljs.core.async.t_cljs$core$async46446(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46478 = (function (f,ch,meta46479){
this.f = f;
this.ch = ch;
this.meta46479 = meta46479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46480,meta46479__$1){
var self__ = this;
var _46480__$1 = this;
return (new cljs.core.async.t_cljs$core$async46478(self__.f,self__.ch,meta46479__$1));
}));

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46480){
var self__ = this;
var _46480__$1 = this;
return self__.meta46479;
}));

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46479","meta46479",-1412542840,null)], null);
}));

(cljs.core.async.t_cljs$core$async46478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46478");

(cljs.core.async.t_cljs$core$async46478.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46478.
 */
cljs.core.async.__GT_t_cljs$core$async46478 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46478(f__$1,ch__$1,meta46479){
return (new cljs.core.async.t_cljs$core$async46478(f__$1,ch__$1,meta46479));
});

}

return (new cljs.core.async.t_cljs$core$async46478(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46498 = (function (p,ch,meta46499){
this.p = p;
this.ch = ch;
this.meta46499 = meta46499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46500,meta46499__$1){
var self__ = this;
var _46500__$1 = this;
return (new cljs.core.async.t_cljs$core$async46498(self__.p,self__.ch,meta46499__$1));
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46500){
var self__ = this;
var _46500__$1 = this;
return self__.meta46499;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46499","meta46499",1931458690,null)], null);
}));

(cljs.core.async.t_cljs$core$async46498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46498");

(cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46498.
 */
cljs.core.async.__GT_t_cljs$core$async46498 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46498(p__$1,ch__$1,meta46499){
return (new cljs.core.async.t_cljs$core$async46498(p__$1,ch__$1,meta46499));
});

}

return (new cljs.core.async.t_cljs$core$async46498(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46522 = arguments.length;
switch (G__46522) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44474__auto___48101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46550){
var state_val_46551 = (state_46550[(1)]);
if((state_val_46551 === (7))){
var inst_46546 = (state_46550[(2)]);
var state_46550__$1 = state_46550;
var statearr_46554_48106 = state_46550__$1;
(statearr_46554_48106[(2)] = inst_46546);

(statearr_46554_48106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (1))){
var state_46550__$1 = state_46550;
var statearr_46555_48107 = state_46550__$1;
(statearr_46555_48107[(2)] = null);

(statearr_46555_48107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (4))){
var inst_46530 = (state_46550[(7)]);
var inst_46530__$1 = (state_46550[(2)]);
var inst_46531 = (inst_46530__$1 == null);
var state_46550__$1 = (function (){var statearr_46560 = state_46550;
(statearr_46560[(7)] = inst_46530__$1);

return statearr_46560;
})();
if(cljs.core.truth_(inst_46531)){
var statearr_46561_48112 = state_46550__$1;
(statearr_46561_48112[(1)] = (5));

} else {
var statearr_46564_48116 = state_46550__$1;
(statearr_46564_48116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (6))){
var inst_46530 = (state_46550[(7)]);
var inst_46535 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46530) : p.call(null,inst_46530));
var state_46550__$1 = state_46550;
if(cljs.core.truth_(inst_46535)){
var statearr_46566_48117 = state_46550__$1;
(statearr_46566_48117[(1)] = (8));

} else {
var statearr_46570_48121 = state_46550__$1;
(statearr_46570_48121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (3))){
var inst_46548 = (state_46550[(2)]);
var state_46550__$1 = state_46550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46550__$1,inst_46548);
} else {
if((state_val_46551 === (2))){
var state_46550__$1 = state_46550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46550__$1,(4),ch);
} else {
if((state_val_46551 === (11))){
var inst_46538 = (state_46550[(2)]);
var state_46550__$1 = state_46550;
var statearr_46574_48122 = state_46550__$1;
(statearr_46574_48122[(2)] = inst_46538);

(statearr_46574_48122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (9))){
var state_46550__$1 = state_46550;
var statearr_46575_48124 = state_46550__$1;
(statearr_46575_48124[(2)] = null);

(statearr_46575_48124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (5))){
var inst_46533 = cljs.core.async.close_BANG_(out);
var state_46550__$1 = state_46550;
var statearr_46578_48125 = state_46550__$1;
(statearr_46578_48125[(2)] = inst_46533);

(statearr_46578_48125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (10))){
var inst_46543 = (state_46550[(2)]);
var state_46550__$1 = (function (){var statearr_46580 = state_46550;
(statearr_46580[(8)] = inst_46543);

return statearr_46580;
})();
var statearr_46581_48128 = state_46550__$1;
(statearr_46581_48128[(2)] = null);

(statearr_46581_48128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46551 === (8))){
var inst_46530 = (state_46550[(7)]);
var state_46550__$1 = state_46550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46550__$1,(11),out,inst_46530);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_46582 = [null,null,null,null,null,null,null,null,null];
(statearr_46582[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_46582[(1)] = (1));

return statearr_46582;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46550){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46550);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46585){var ex__43966__auto__ = e46585;
var statearr_46588_48133 = state_46550;
(statearr_46588_48133[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46550[(4)]))){
var statearr_46589_48134 = state_46550;
(statearr_46589_48134[(1)] = cljs.core.first((state_46550[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48135 = state_46550;
state_46550 = G__48135;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46591 = f__44479__auto__();
(statearr_46591[(6)] = c__44474__auto___48101);

return statearr_46591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46596 = arguments.length;
switch (G__46596) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46670){
var state_val_46671 = (state_46670[(1)]);
if((state_val_46671 === (7))){
var inst_46665 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46676_48146 = state_46670__$1;
(statearr_46676_48146[(2)] = inst_46665);

(statearr_46676_48146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (20))){
var inst_46635 = (state_46670[(7)]);
var inst_46646 = (state_46670[(2)]);
var inst_46647 = cljs.core.next(inst_46635);
var inst_46617 = inst_46647;
var inst_46618 = null;
var inst_46619 = (0);
var inst_46620 = (0);
var state_46670__$1 = (function (){var statearr_46681 = state_46670;
(statearr_46681[(8)] = inst_46618);

(statearr_46681[(9)] = inst_46617);

(statearr_46681[(10)] = inst_46619);

(statearr_46681[(11)] = inst_46620);

(statearr_46681[(12)] = inst_46646);

return statearr_46681;
})();
var statearr_46683_48148 = state_46670__$1;
(statearr_46683_48148[(2)] = null);

(statearr_46683_48148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (1))){
var state_46670__$1 = state_46670;
var statearr_46684_48150 = state_46670__$1;
(statearr_46684_48150[(2)] = null);

(statearr_46684_48150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (4))){
var inst_46606 = (state_46670[(13)]);
var inst_46606__$1 = (state_46670[(2)]);
var inst_46607 = (inst_46606__$1 == null);
var state_46670__$1 = (function (){var statearr_46687 = state_46670;
(statearr_46687[(13)] = inst_46606__$1);

return statearr_46687;
})();
if(cljs.core.truth_(inst_46607)){
var statearr_46688_48153 = state_46670__$1;
(statearr_46688_48153[(1)] = (5));

} else {
var statearr_46689_48154 = state_46670__$1;
(statearr_46689_48154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (15))){
var state_46670__$1 = state_46670;
var statearr_46693_48155 = state_46670__$1;
(statearr_46693_48155[(2)] = null);

(statearr_46693_48155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (21))){
var state_46670__$1 = state_46670;
var statearr_46695_48156 = state_46670__$1;
(statearr_46695_48156[(2)] = null);

(statearr_46695_48156[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (13))){
var inst_46618 = (state_46670[(8)]);
var inst_46617 = (state_46670[(9)]);
var inst_46619 = (state_46670[(10)]);
var inst_46620 = (state_46670[(11)]);
var inst_46628 = (state_46670[(2)]);
var inst_46632 = (inst_46620 + (1));
var tmp46690 = inst_46618;
var tmp46691 = inst_46617;
var tmp46692 = inst_46619;
var inst_46617__$1 = tmp46691;
var inst_46618__$1 = tmp46690;
var inst_46619__$1 = tmp46692;
var inst_46620__$1 = inst_46632;
var state_46670__$1 = (function (){var statearr_46697 = state_46670;
(statearr_46697[(8)] = inst_46618__$1);

(statearr_46697[(14)] = inst_46628);

(statearr_46697[(9)] = inst_46617__$1);

(statearr_46697[(10)] = inst_46619__$1);

(statearr_46697[(11)] = inst_46620__$1);

return statearr_46697;
})();
var statearr_46699_48157 = state_46670__$1;
(statearr_46699_48157[(2)] = null);

(statearr_46699_48157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (22))){
var state_46670__$1 = state_46670;
var statearr_46701_48158 = state_46670__$1;
(statearr_46701_48158[(2)] = null);

(statearr_46701_48158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (6))){
var inst_46606 = (state_46670[(13)]);
var inst_46615 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46606) : f.call(null,inst_46606));
var inst_46616 = cljs.core.seq(inst_46615);
var inst_46617 = inst_46616;
var inst_46618 = null;
var inst_46619 = (0);
var inst_46620 = (0);
var state_46670__$1 = (function (){var statearr_46705 = state_46670;
(statearr_46705[(8)] = inst_46618);

(statearr_46705[(9)] = inst_46617);

(statearr_46705[(10)] = inst_46619);

(statearr_46705[(11)] = inst_46620);

return statearr_46705;
})();
var statearr_46707_48164 = state_46670__$1;
(statearr_46707_48164[(2)] = null);

(statearr_46707_48164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (17))){
var inst_46635 = (state_46670[(7)]);
var inst_46639 = cljs.core.chunk_first(inst_46635);
var inst_46640 = cljs.core.chunk_rest(inst_46635);
var inst_46641 = cljs.core.count(inst_46639);
var inst_46617 = inst_46640;
var inst_46618 = inst_46639;
var inst_46619 = inst_46641;
var inst_46620 = (0);
var state_46670__$1 = (function (){var statearr_46714 = state_46670;
(statearr_46714[(8)] = inst_46618);

(statearr_46714[(9)] = inst_46617);

(statearr_46714[(10)] = inst_46619);

(statearr_46714[(11)] = inst_46620);

return statearr_46714;
})();
var statearr_46716_48165 = state_46670__$1;
(statearr_46716_48165[(2)] = null);

(statearr_46716_48165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (3))){
var inst_46667 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46670__$1,inst_46667);
} else {
if((state_val_46671 === (12))){
var inst_46655 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46721_48166 = state_46670__$1;
(statearr_46721_48166[(2)] = inst_46655);

(statearr_46721_48166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (2))){
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46670__$1,(4),in$);
} else {
if((state_val_46671 === (23))){
var inst_46663 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46724_48167 = state_46670__$1;
(statearr_46724_48167[(2)] = inst_46663);

(statearr_46724_48167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (19))){
var inst_46650 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46725_48171 = state_46670__$1;
(statearr_46725_48171[(2)] = inst_46650);

(statearr_46725_48171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (11))){
var inst_46617 = (state_46670[(9)]);
var inst_46635 = (state_46670[(7)]);
var inst_46635__$1 = cljs.core.seq(inst_46617);
var state_46670__$1 = (function (){var statearr_46729 = state_46670;
(statearr_46729[(7)] = inst_46635__$1);

return statearr_46729;
})();
if(inst_46635__$1){
var statearr_46731_48173 = state_46670__$1;
(statearr_46731_48173[(1)] = (14));

} else {
var statearr_46734_48174 = state_46670__$1;
(statearr_46734_48174[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (9))){
var inst_46657 = (state_46670[(2)]);
var inst_46658 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46670__$1 = (function (){var statearr_46743 = state_46670;
(statearr_46743[(15)] = inst_46657);

return statearr_46743;
})();
if(cljs.core.truth_(inst_46658)){
var statearr_46744_48176 = state_46670__$1;
(statearr_46744_48176[(1)] = (21));

} else {
var statearr_46745_48178 = state_46670__$1;
(statearr_46745_48178[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (5))){
var inst_46609 = cljs.core.async.close_BANG_(out);
var state_46670__$1 = state_46670;
var statearr_46750_48179 = state_46670__$1;
(statearr_46750_48179[(2)] = inst_46609);

(statearr_46750_48179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (14))){
var inst_46635 = (state_46670[(7)]);
var inst_46637 = cljs.core.chunked_seq_QMARK_(inst_46635);
var state_46670__$1 = state_46670;
if(inst_46637){
var statearr_46758_48184 = state_46670__$1;
(statearr_46758_48184[(1)] = (17));

} else {
var statearr_46759_48185 = state_46670__$1;
(statearr_46759_48185[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (16))){
var inst_46653 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46764_48186 = state_46670__$1;
(statearr_46764_48186[(2)] = inst_46653);

(statearr_46764_48186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (10))){
var inst_46618 = (state_46670[(8)]);
var inst_46620 = (state_46670[(11)]);
var inst_46626 = cljs.core._nth(inst_46618,inst_46620);
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46670__$1,(13),out,inst_46626);
} else {
if((state_val_46671 === (18))){
var inst_46635 = (state_46670[(7)]);
var inst_46644 = cljs.core.first(inst_46635);
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46670__$1,(20),out,inst_46644);
} else {
if((state_val_46671 === (8))){
var inst_46619 = (state_46670[(10)]);
var inst_46620 = (state_46670[(11)]);
var inst_46623 = (inst_46620 < inst_46619);
var inst_46624 = inst_46623;
var state_46670__$1 = state_46670;
if(cljs.core.truth_(inst_46624)){
var statearr_46774_48189 = state_46670__$1;
(statearr_46774_48189[(1)] = (10));

} else {
var statearr_46775_48190 = state_46670__$1;
(statearr_46775_48190[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43963__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43963__auto____0 = (function (){
var statearr_46778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43963__auto__);

(statearr_46778[(1)] = (1));

return statearr_46778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43963__auto____1 = (function (state_46670){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46670);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46783){var ex__43966__auto__ = e46783;
var statearr_46784_48191 = state_46670;
(statearr_46784_48191[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46670[(4)]))){
var statearr_46788_48195 = state_46670;
(statearr_46788_48195[(1)] = cljs.core.first((state_46670[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48197 = state_46670;
state_46670 = G__48197;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43963__auto__ = function(state_46670){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43963__auto____1.call(this,state_46670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43963__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43963__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46789 = f__44479__auto__();
(statearr_46789[(6)] = c__44474__auto__);

return statearr_46789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));

return c__44474__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46808 = arguments.length;
switch (G__46808) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46828 = arguments.length;
switch (G__46828) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46839 = arguments.length;
switch (G__46839) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44474__auto___48236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46869){
var state_val_46874 = (state_46869[(1)]);
if((state_val_46874 === (7))){
var inst_46864 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
var statearr_46883_48245 = state_46869__$1;
(statearr_46883_48245[(2)] = inst_46864);

(statearr_46883_48245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (1))){
var inst_46842 = null;
var state_46869__$1 = (function (){var statearr_46884 = state_46869;
(statearr_46884[(7)] = inst_46842);

return statearr_46884;
})();
var statearr_46886_48252 = state_46869__$1;
(statearr_46886_48252[(2)] = null);

(statearr_46886_48252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (4))){
var inst_46845 = (state_46869[(8)]);
var inst_46845__$1 = (state_46869[(2)]);
var inst_46846 = (inst_46845__$1 == null);
var inst_46847 = cljs.core.not(inst_46846);
var state_46869__$1 = (function (){var statearr_46889 = state_46869;
(statearr_46889[(8)] = inst_46845__$1);

return statearr_46889;
})();
if(inst_46847){
var statearr_46891_48254 = state_46869__$1;
(statearr_46891_48254[(1)] = (5));

} else {
var statearr_46892_48255 = state_46869__$1;
(statearr_46892_48255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (6))){
var state_46869__$1 = state_46869;
var statearr_46893_48257 = state_46869__$1;
(statearr_46893_48257[(2)] = null);

(statearr_46893_48257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (3))){
var inst_46866 = (state_46869[(2)]);
var inst_46867 = cljs.core.async.close_BANG_(out);
var state_46869__$1 = (function (){var statearr_46894 = state_46869;
(statearr_46894[(9)] = inst_46866);

return statearr_46894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46869__$1,inst_46867);
} else {
if((state_val_46874 === (2))){
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46869__$1,(4),ch);
} else {
if((state_val_46874 === (11))){
var inst_46845 = (state_46869[(8)]);
var inst_46858 = (state_46869[(2)]);
var inst_46842 = inst_46845;
var state_46869__$1 = (function (){var statearr_46898 = state_46869;
(statearr_46898[(10)] = inst_46858);

(statearr_46898[(7)] = inst_46842);

return statearr_46898;
})();
var statearr_46899_48259 = state_46869__$1;
(statearr_46899_48259[(2)] = null);

(statearr_46899_48259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (9))){
var inst_46845 = (state_46869[(8)]);
var state_46869__$1 = state_46869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46869__$1,(11),out,inst_46845);
} else {
if((state_val_46874 === (5))){
var inst_46842 = (state_46869[(7)]);
var inst_46845 = (state_46869[(8)]);
var inst_46849 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46845,inst_46842);
var state_46869__$1 = state_46869;
if(inst_46849){
var statearr_46901_48262 = state_46869__$1;
(statearr_46901_48262[(1)] = (8));

} else {
var statearr_46902_48263 = state_46869__$1;
(statearr_46902_48263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (10))){
var inst_46861 = (state_46869[(2)]);
var state_46869__$1 = state_46869;
var statearr_46903_48264 = state_46869__$1;
(statearr_46903_48264[(2)] = inst_46861);

(statearr_46903_48264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46874 === (8))){
var inst_46842 = (state_46869[(7)]);
var tmp46900 = inst_46842;
var inst_46842__$1 = tmp46900;
var state_46869__$1 = (function (){var statearr_46904 = state_46869;
(statearr_46904[(7)] = inst_46842__$1);

return statearr_46904;
})();
var statearr_46905_48267 = state_46869__$1;
(statearr_46905_48267[(2)] = null);

(statearr_46905_48267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_46906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46906[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_46906[(1)] = (1));

return statearr_46906;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46869){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46869);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e46908){var ex__43966__auto__ = e46908;
var statearr_46909_48279 = state_46869;
(statearr_46909_48279[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46869[(4)]))){
var statearr_46910_48280 = state_46869;
(statearr_46910_48280[(1)] = cljs.core.first((state_46869[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48281 = state_46869;
state_46869 = G__48281;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_46911 = f__44479__auto__();
(statearr_46911[(6)] = c__44474__auto___48236);

return statearr_46911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46914 = arguments.length;
switch (G__46914) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44474__auto___48304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_46958){
var state_val_46959 = (state_46958[(1)]);
if((state_val_46959 === (7))){
var inst_46954 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
var statearr_46960_48319 = state_46958__$1;
(statearr_46960_48319[(2)] = inst_46954);

(statearr_46960_48319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (1))){
var inst_46921 = (new Array(n));
var inst_46922 = inst_46921;
var inst_46923 = (0);
var state_46958__$1 = (function (){var statearr_46961 = state_46958;
(statearr_46961[(7)] = inst_46923);

(statearr_46961[(8)] = inst_46922);

return statearr_46961;
})();
var statearr_46962_48333 = state_46958__$1;
(statearr_46962_48333[(2)] = null);

(statearr_46962_48333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (4))){
var inst_46926 = (state_46958[(9)]);
var inst_46926__$1 = (state_46958[(2)]);
var inst_46927 = (inst_46926__$1 == null);
var inst_46928 = cljs.core.not(inst_46927);
var state_46958__$1 = (function (){var statearr_46963 = state_46958;
(statearr_46963[(9)] = inst_46926__$1);

return statearr_46963;
})();
if(inst_46928){
var statearr_46964_48351 = state_46958__$1;
(statearr_46964_48351[(1)] = (5));

} else {
var statearr_46965_48358 = state_46958__$1;
(statearr_46965_48358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (15))){
var inst_46948 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
var statearr_46967_48367 = state_46958__$1;
(statearr_46967_48367[(2)] = inst_46948);

(statearr_46967_48367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (13))){
var state_46958__$1 = state_46958;
var statearr_46969_48372 = state_46958__$1;
(statearr_46969_48372[(2)] = null);

(statearr_46969_48372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (6))){
var inst_46923 = (state_46958[(7)]);
var inst_46944 = (inst_46923 > (0));
var state_46958__$1 = state_46958;
if(cljs.core.truth_(inst_46944)){
var statearr_46970_48373 = state_46958__$1;
(statearr_46970_48373[(1)] = (12));

} else {
var statearr_46971_48374 = state_46958__$1;
(statearr_46971_48374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (3))){
var inst_46956 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46958__$1,inst_46956);
} else {
if((state_val_46959 === (12))){
var inst_46922 = (state_46958[(8)]);
var inst_46946 = cljs.core.vec(inst_46922);
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46958__$1,(15),out,inst_46946);
} else {
if((state_val_46959 === (2))){
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46958__$1,(4),ch);
} else {
if((state_val_46959 === (11))){
var inst_46938 = (state_46958[(2)]);
var inst_46939 = (new Array(n));
var inst_46922 = inst_46939;
var inst_46923 = (0);
var state_46958__$1 = (function (){var statearr_46979 = state_46958;
(statearr_46979[(7)] = inst_46923);

(statearr_46979[(8)] = inst_46922);

(statearr_46979[(10)] = inst_46938);

return statearr_46979;
})();
var statearr_46980_48391 = state_46958__$1;
(statearr_46980_48391[(2)] = null);

(statearr_46980_48391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (9))){
var inst_46922 = (state_46958[(8)]);
var inst_46936 = cljs.core.vec(inst_46922);
var state_46958__$1 = state_46958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46958__$1,(11),out,inst_46936);
} else {
if((state_val_46959 === (5))){
var inst_46923 = (state_46958[(7)]);
var inst_46931 = (state_46958[(11)]);
var inst_46926 = (state_46958[(9)]);
var inst_46922 = (state_46958[(8)]);
var inst_46930 = (inst_46922[inst_46923] = inst_46926);
var inst_46931__$1 = (inst_46923 + (1));
var inst_46932 = (inst_46931__$1 < n);
var state_46958__$1 = (function (){var statearr_46995 = state_46958;
(statearr_46995[(12)] = inst_46930);

(statearr_46995[(11)] = inst_46931__$1);

return statearr_46995;
})();
if(cljs.core.truth_(inst_46932)){
var statearr_46996_48396 = state_46958__$1;
(statearr_46996_48396[(1)] = (8));

} else {
var statearr_46997_48397 = state_46958__$1;
(statearr_46997_48397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (14))){
var inst_46951 = (state_46958[(2)]);
var inst_46952 = cljs.core.async.close_BANG_(out);
var state_46958__$1 = (function (){var statearr_46999 = state_46958;
(statearr_46999[(13)] = inst_46951);

return statearr_46999;
})();
var statearr_47001_48399 = state_46958__$1;
(statearr_47001_48399[(2)] = inst_46952);

(statearr_47001_48399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (10))){
var inst_46942 = (state_46958[(2)]);
var state_46958__$1 = state_46958;
var statearr_47002_48400 = state_46958__$1;
(statearr_47002_48400[(2)] = inst_46942);

(statearr_47002_48400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46959 === (8))){
var inst_46931 = (state_46958[(11)]);
var inst_46922 = (state_46958[(8)]);
var tmp46998 = inst_46922;
var inst_46922__$1 = tmp46998;
var inst_46923 = inst_46931;
var state_46958__$1 = (function (){var statearr_47003 = state_46958;
(statearr_47003[(7)] = inst_46923);

(statearr_47003[(8)] = inst_46922__$1);

return statearr_47003;
})();
var statearr_47004_48401 = state_46958__$1;
(statearr_47004_48401[(2)] = null);

(statearr_47004_48401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_47006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47006[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_47006[(1)] = (1));

return statearr_47006;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_46958){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_46958);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e47007){var ex__43966__auto__ = e47007;
var statearr_47008_48410 = state_46958;
(statearr_47008_48410[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_46958[(4)]))){
var statearr_47009_48417 = state_46958;
(statearr_47009_48417[(1)] = cljs.core.first((state_46958[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48424 = state_46958;
state_46958 = G__48424;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_46958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_46958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_47010 = f__44479__auto__();
(statearr_47010[(6)] = c__44474__auto___48304);

return statearr_47010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47012 = arguments.length;
switch (G__47012) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44474__auto___48456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44479__auto__ = (function (){var switch__43962__auto__ = (function (state_47058){
var state_val_47059 = (state_47058[(1)]);
if((state_val_47059 === (7))){
var inst_47054 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47063_48461 = state_47058__$1;
(statearr_47063_48461[(2)] = inst_47054);

(statearr_47063_48461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (1))){
var inst_47014 = [];
var inst_47015 = inst_47014;
var inst_47016 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47058__$1 = (function (){var statearr_47064 = state_47058;
(statearr_47064[(7)] = inst_47015);

(statearr_47064[(8)] = inst_47016);

return statearr_47064;
})();
var statearr_47065_48464 = state_47058__$1;
(statearr_47065_48464[(2)] = null);

(statearr_47065_48464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (4))){
var inst_47019 = (state_47058[(9)]);
var inst_47019__$1 = (state_47058[(2)]);
var inst_47020 = (inst_47019__$1 == null);
var inst_47021 = cljs.core.not(inst_47020);
var state_47058__$1 = (function (){var statearr_47066 = state_47058;
(statearr_47066[(9)] = inst_47019__$1);

return statearr_47066;
})();
if(inst_47021){
var statearr_47067_48466 = state_47058__$1;
(statearr_47067_48466[(1)] = (5));

} else {
var statearr_47068_48467 = state_47058__$1;
(statearr_47068_48467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (15))){
var inst_47015 = (state_47058[(7)]);
var inst_47046 = cljs.core.vec(inst_47015);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47058__$1,(18),out,inst_47046);
} else {
if((state_val_47059 === (13))){
var inst_47041 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47070_48474 = state_47058__$1;
(statearr_47070_48474[(2)] = inst_47041);

(statearr_47070_48474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (6))){
var inst_47015 = (state_47058[(7)]);
var inst_47043 = inst_47015.length;
var inst_47044 = (inst_47043 > (0));
var state_47058__$1 = state_47058;
if(cljs.core.truth_(inst_47044)){
var statearr_47072_48483 = state_47058__$1;
(statearr_47072_48483[(1)] = (15));

} else {
var statearr_47076_48484 = state_47058__$1;
(statearr_47076_48484[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (17))){
var inst_47051 = (state_47058[(2)]);
var inst_47052 = cljs.core.async.close_BANG_(out);
var state_47058__$1 = (function (){var statearr_47077 = state_47058;
(statearr_47077[(10)] = inst_47051);

return statearr_47077;
})();
var statearr_47080_48486 = state_47058__$1;
(statearr_47080_48486[(2)] = inst_47052);

(statearr_47080_48486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (3))){
var inst_47056 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47058__$1,inst_47056);
} else {
if((state_val_47059 === (12))){
var inst_47015 = (state_47058[(7)]);
var inst_47034 = cljs.core.vec(inst_47015);
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47058__$1,(14),out,inst_47034);
} else {
if((state_val_47059 === (2))){
var state_47058__$1 = state_47058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47058__$1,(4),ch);
} else {
if((state_val_47059 === (11))){
var inst_47015 = (state_47058[(7)]);
var inst_47023 = (state_47058[(11)]);
var inst_47019 = (state_47058[(9)]);
var inst_47031 = inst_47015.push(inst_47019);
var tmp47087 = inst_47015;
var inst_47015__$1 = tmp47087;
var inst_47016 = inst_47023;
var state_47058__$1 = (function (){var statearr_47089 = state_47058;
(statearr_47089[(7)] = inst_47015__$1);

(statearr_47089[(8)] = inst_47016);

(statearr_47089[(12)] = inst_47031);

return statearr_47089;
})();
var statearr_47091_48489 = state_47058__$1;
(statearr_47091_48489[(2)] = null);

(statearr_47091_48489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (9))){
var inst_47016 = (state_47058[(8)]);
var inst_47027 = cljs.core.keyword_identical_QMARK_(inst_47016,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47058__$1 = state_47058;
var statearr_47093_48496 = state_47058__$1;
(statearr_47093_48496[(2)] = inst_47027);

(statearr_47093_48496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (5))){
var inst_47023 = (state_47058[(11)]);
var inst_47016 = (state_47058[(8)]);
var inst_47024 = (state_47058[(13)]);
var inst_47019 = (state_47058[(9)]);
var inst_47023__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47019) : f.call(null,inst_47019));
var inst_47024__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47023__$1,inst_47016);
var state_47058__$1 = (function (){var statearr_47095 = state_47058;
(statearr_47095[(11)] = inst_47023__$1);

(statearr_47095[(13)] = inst_47024__$1);

return statearr_47095;
})();
if(inst_47024__$1){
var statearr_47100_48502 = state_47058__$1;
(statearr_47100_48502[(1)] = (8));

} else {
var statearr_47102_48503 = state_47058__$1;
(statearr_47102_48503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (14))){
var inst_47023 = (state_47058[(11)]);
var inst_47019 = (state_47058[(9)]);
var inst_47036 = (state_47058[(2)]);
var inst_47037 = [];
var inst_47038 = inst_47037.push(inst_47019);
var inst_47015 = inst_47037;
var inst_47016 = inst_47023;
var state_47058__$1 = (function (){var statearr_47103 = state_47058;
(statearr_47103[(7)] = inst_47015);

(statearr_47103[(14)] = inst_47038);

(statearr_47103[(8)] = inst_47016);

(statearr_47103[(15)] = inst_47036);

return statearr_47103;
})();
var statearr_47104_48511 = state_47058__$1;
(statearr_47104_48511[(2)] = null);

(statearr_47104_48511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (16))){
var state_47058__$1 = state_47058;
var statearr_47105_48514 = state_47058__$1;
(statearr_47105_48514[(2)] = null);

(statearr_47105_48514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (10))){
var inst_47029 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
if(cljs.core.truth_(inst_47029)){
var statearr_47107_48516 = state_47058__$1;
(statearr_47107_48516[(1)] = (11));

} else {
var statearr_47109_48517 = state_47058__$1;
(statearr_47109_48517[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (18))){
var inst_47048 = (state_47058[(2)]);
var state_47058__$1 = state_47058;
var statearr_47110_48518 = state_47058__$1;
(statearr_47110_48518[(2)] = inst_47048);

(statearr_47110_48518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47059 === (8))){
var inst_47024 = (state_47058[(13)]);
var state_47058__$1 = state_47058;
var statearr_47113_48519 = state_47058__$1;
(statearr_47113_48519[(2)] = inst_47024);

(statearr_47113_48519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43963__auto__ = null;
var cljs$core$async$state_machine__43963__auto____0 = (function (){
var statearr_47116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47116[(0)] = cljs$core$async$state_machine__43963__auto__);

(statearr_47116[(1)] = (1));

return statearr_47116;
});
var cljs$core$async$state_machine__43963__auto____1 = (function (state_47058){
while(true){
var ret_value__43964__auto__ = (function (){try{while(true){
var result__43965__auto__ = switch__43962__auto__(state_47058);
if(cljs.core.keyword_identical_QMARK_(result__43965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43965__auto__;
}
break;
}
}catch (e47117){var ex__43966__auto__ = e47117;
var statearr_47118_48528 = state_47058;
(statearr_47118_48528[(2)] = ex__43966__auto__);


if(cljs.core.seq((state_47058[(4)]))){
var statearr_47119_48531 = state_47058;
(statearr_47119_48531[(1)] = cljs.core.first((state_47058[(4)])));

} else {
throw ex__43966__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48533 = state_47058;
state_47058 = G__48533;
continue;
} else {
return ret_value__43964__auto__;
}
break;
}
});
cljs$core$async$state_machine__43963__auto__ = function(state_47058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43963__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43963__auto____1.call(this,state_47058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43963__auto____0;
cljs$core$async$state_machine__43963__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43963__auto____1;
return cljs$core$async$state_machine__43963__auto__;
})()
})();
var state__44480__auto__ = (function (){var statearr_47123 = f__44479__auto__();
(statearr_47123[(6)] = c__44474__auto___48456);

return statearr_47123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44480__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
