goog.provide('re_com.v_table');
re_com.v_table.scrollbar_thickness = (10);
re_com.v_table.scrollbar_margin = (2);
re_com.v_table.scrollbar_tot_thick = (re_com.v_table.scrollbar_thickness + ((2) * re_com.v_table.scrollbar_margin));
re_com.v_table.px = cljs.core.memoize(re_com.util.px);
/**
 * Make a call to this function in the click event of your row renderer, then every time they Alt+Click on a row,
 *   The raw cljs object used to render that row will be popped into DevTools :-)
 *   Here is what the line might look like:
 *   :on-click (handler-fn (v-table/show-row-data-on-alt-click row row-index event))
 */
re_com.v_table.show_row_data_on_alt_click = (function re_com$v_table$show_row_data_on_alt_click(row,row_index,event){
if(cljs.core.truth_(event.altKey)){
return console.log(["ROW-INDEX[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_index),"]"].join(''),row);
} else {
return null;
}
});
/**
 * Render a horizontal or vertical scrollbar
 * 
 *   Arguments:
 * - type           [keyword] scrollbar type (:horizontal or :vertical)
 * - length         [number] px size of the long edge. If not specified, scrollbar will fill space provided
 * - width          [optional number, default = 10] px size of the short edge
 * - content-length [number] px length of the content this scrollbar will be in charge of
 * - scroll-pos     [number] current px scroll position for the beginning of the scrollbar 'thumb'
 * - on-change      [fn] called every time the thumb is dragged. Args: new-scroll-pos
 * - style          [map] CSS style map
 * 
 */
re_com.v_table.scrollbar = (function re_com$v_table$scrollbar(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53018 = arguments.length;
var i__5770__auto___53019 = (0);
while(true){
if((i__5770__auto___53019 < len__5769__auto___53018)){
args__5775__auto__.push((arguments[i__5770__auto___53019]));

var G__53021 = (i__5770__auto___53019 + (1));
i__5770__auto___53019 = G__53021;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.v_table.scrollbar.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.v_table.scrollbar.cljs$core$IFn$_invoke$arity$variadic = (function (p__52355){
var map__52358 = p__52355;
var map__52358__$1 = cljs.core.__destructure_map(map__52358);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52358__$1,new cljs.core.Keyword(null,"width","width",-384071477),(10));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var horizontal_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
var radius = re_com.v_table.px((width / (2)));
var scrollbar_color = "#eee";
var scrollbar_hover_color = "#ccc";
var thumb_color = "#bbb";
var thumb_hover_color = "#999";
var thumb_drag_color = "#777";
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var pos_on_scrollbar = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var pos_on_thumb = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var tracker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var calcs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var on_drag_change = (function re_com$v_table$on_drag_change(_delta_x,_delta_y,curr_x,curr_y,_ctrlKey,_shiftKey,_event){
var curr_pos = ((horizontal_QMARK_)?curr_x:curr_y);
var pos_on_scrollbar__$1 = (curr_pos - cljs.core.deref(pos_on_scrollbar));
var new_internal_scroll_pos = (pos_on_scrollbar__$1 - cljs.core.deref(pos_on_thumb));
var beginning_or_beyond_QMARK_ = (new_internal_scroll_pos <= (0));
var end_or_beyond_QMARK_ = (new_internal_scroll_pos >= new cljs.core.Keyword(null,"max-scroll-pos","max-scroll-pos",-325462965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)));
var new_external_scroll_pos = Math.round((new_internal_scroll_pos * new cljs.core.Keyword(null,"scrollbar-content-ratio","scrollbar-content-ratio",1658723056).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))));
if(beginning_or_beyond_QMARK_){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1((0)) : on_change.call(null,(0)));
} else {
if(end_or_beyond_QMARK_){
var G__52377 = Math.round((new cljs.core.Keyword(null,"max-scroll-pos","max-scroll-pos",-325462965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) * new cljs.core.Keyword(null,"scrollbar-content-ratio","scrollbar-content-ratio",1658723056).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__52377) : on_change.call(null,G__52377));
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_external_scroll_pos) : on_change.call(null,new_external_scroll_pos));

}
}
});
var on_drag_end = (function re_com$v_table$on_drag_end(_ctrlKey,_shiftKey,_event){
cljs.core.reset_BANG_(dragging_QMARK_,false);

return cljs.core.reset_BANG_(tracker,null);
});
var on_mouse_enter = (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
});
var on_mouse_leave = (function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
});
var scrollbar_mouse_down = (function re_com$v_table$scrollbar_mouse_down(event){
var target = event.target;
var bounding_rect = (((target == null))?cljs.core.PersistentArrayMap.EMPTY:target.getBoundingClientRect());
var click_pos = ((horizontal_QMARK_)?(event.clientX - bounding_rect.left):(event.clientY - bounding_rect.top));
var op = (((click_pos <= new cljs.core.Keyword(null,"internal-scroll-pos","internal-scroll-pos",1183420691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))))?cljs.core._:cljs.core._PLUS_);
var new_internal_scroll_pos = (new cljs.core.Keyword(null,"internal-scroll-pos","internal-scroll-pos",1183420691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) + (function (){var G__52397 = (new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) / new cljs.core.Keyword(null,"thumb-ratio","thumb-ratio",634209799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)));
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(G__52397) : op.call(null,G__52397));
})());
var new_external_scroll_pos = (function (){var G__52399 = new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs));
var G__52400 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__52399,G__52400) : op.call(null,G__52399,G__52400));
})();
var beginning_or_beyond_QMARK_ = (new_internal_scroll_pos <= (0));
var end_or_beyond_QMARK_ = (new_internal_scroll_pos >= new cljs.core.Keyword(null,"max-scroll-pos","max-scroll-pos",-325462965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)));
if(beginning_or_beyond_QMARK_){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1((0)) : on_change.call(null,(0)));
} else {
if(end_or_beyond_QMARK_){
var G__52406 = Math.round((new cljs.core.Keyword(null,"max-scroll-pos","max-scroll-pos",-325462965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs)) * new cljs.core.Keyword(null,"scrollbar-content-ratio","scrollbar-content-ratio",1658723056).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calcs))));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__52406) : on_change.call(null,G__52406));
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_external_scroll_pos) : on_change.call(null,new_external_scroll_pos));

}
}
});
var thumb_mouse_down = (function re_com$v_table$thumb_mouse_down(event,internal_scroll_pos){
var parent = event.target.parentNode;
var bounding_rect = (((parent == null))?cljs.core.PersistentArrayMap.EMPTY:parent.getBoundingClientRect());
cljs.core.reset_BANG_(pos_on_scrollbar,((horizontal_QMARK_)?bounding_rect.left:bounding_rect.top));

cljs.core.reset_BANG_(pos_on_thumb,((horizontal_QMARK_)?((event.clientX - cljs.core.deref(pos_on_scrollbar)) - internal_scroll_pos):((event.clientY - cljs.core.deref(pos_on_scrollbar)) - internal_scroll_pos)));

cljs.core.reset_BANG_(tracker,re_com.dmm_tracker.make_dmm_tracker(on_drag_change,on_drag_end));

re_com.dmm_tracker.captureMouseMoves(cljs.core.deref(tracker),event);

cljs.core.reset_BANG_(dragging_QMARK_,true);

return event.stopPropagation();
});
return (function() { 
var re_com$v_table$scrollbar_renderer__delegate = function (p__52419){
var map__52422 = p__52419;
var map__52422__$1 = cljs.core.__destructure_map(map__52422);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"length","length",588987862));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52422__$1,new cljs.core.Keyword(null,"width","width",-384071477),(10));
var content_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"content-length","content-length",441319507));
var scroll_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52422__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var thumb_ratio = (content_length / length);
var thumb_length = (function (){var x__5130__auto__ = (1.5 * width__$1);
var y__5131__auto__ = (length / thumb_ratio);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var show_QMARK_ = (content_length > length);
var max_scroll_pos = (length - thumb_length);
var scrollbar_content_ratio = ((content_length - length) / max_scroll_pos);
var internal_scroll_pos = (scroll_pos / scrollbar_content_ratio);
cljs.core.reset_BANG_(calcs,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"length","length",588987862),length,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos,new cljs.core.Keyword(null,"thumb-ratio","thumb-ratio",634209799),thumb_ratio,new cljs.core.Keyword(null,"thumb-length","thumb-length",725479795),thumb_length,new cljs.core.Keyword(null,"max-scroll-pos","max-scroll-pos",-325462965),max_scroll_pos,new cljs.core.Keyword(null,"scrollbar-content-ratio","scrollbar-content-ratio",1658723056),scrollbar_content_ratio,new cljs.core.Keyword(null,"internal-scroll-pos","internal-scroll-pos",1183420691),internal_scroll_pos], null));

return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"width","width",-384071477),((horizontal_QMARK_)?(cljs.core.truth_(length)?re_com.v_table.px(length):null):re_com.v_table.px(width__$1)),new cljs.core.Keyword(null,"height","height",1025178622),((horizontal_QMARK_)?re_com.v_table.px(width__$1):(cljs.core.truth_(length)?re_com.v_table.px(length):null)),new cljs.core.Keyword(null,"class","class",-2030961996),[((horizontal_QMARK_)?"horizontal":"vertical"),"-scrollbar"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((show_QMARK_)?(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.deref(mouse_over_QMARK_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref(dragging_QMARK_);
}
})())?scrollbar_hover_color:scrollbar_color):null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),radius,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),on_mouse_enter,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),on_mouse_leave,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
if(show_QMARK_){
scrollbar_mouse_down(event);
} else {
}

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),144], null)),new cljs.core.Keyword(null,"width","width",-384071477),((horizontal_QMARK_)?re_com.v_table.px(((show_QMARK_)?thumb_length:(0))):re_com.v_table.px(width__$1)),new cljs.core.Keyword(null,"height","height",1025178622),((horizontal_QMARK_)?re_com.v_table.px(width__$1):re_com.v_table.px(((show_QMARK_)?thumb_length:(0)))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.deref(mouse_over_QMARK_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref(dragging_QMARK_);
}
})())?(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))?thumb_drag_color:thumb_hover_color):thumb_color),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),radius,((horizontal_QMARK_)?new cljs.core.Keyword(null,"margin-left","margin-left",2015598377):new cljs.core.Keyword(null,"margin-top","margin-top",392161226)),re_com.v_table.px(internal_scroll_pos)]),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
thumb_mouse_down(event,internal_scroll_pos);

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),""], null)], null);
};
var re_com$v_table$scrollbar_renderer = function (var_args){
var p__52419 = null;
if (arguments.length > 0) {
var G__53069__i = 0, G__53069__a = new Array(arguments.length -  0);
while (G__53069__i < G__53069__a.length) {G__53069__a[G__53069__i] = arguments[G__53069__i + 0]; ++G__53069__i;}
  p__52419 = new cljs.core.IndexedSeq(G__53069__a,0,null);
} 
return re_com$v_table$scrollbar_renderer__delegate.call(this,p__52419);};
re_com$v_table$scrollbar_renderer.cljs$lang$maxFixedArity = 0;
re_com$v_table$scrollbar_renderer.cljs$lang$applyTo = (function (arglist__53070){
var p__52419 = cljs.core.seq(arglist__53070);
return re_com$v_table$scrollbar_renderer__delegate(p__52419);
});
re_com$v_table$scrollbar_renderer.cljs$core$IFn$_invoke$arity$variadic = re_com$v_table$scrollbar_renderer__delegate;
return re_com$v_table$scrollbar_renderer;
})()
;
}));

(re_com.v_table.scrollbar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.v_table.scrollbar.cljs$lang$applyTo = (function (seq52348){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52348));
}));

/**
 * Render section 1 - the content component
 */
re_com.v_table.top_left_content = (function re_com$v_table$top_left_content(top_left_renderer,column_header_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),169], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-top-left rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px((function (){var or__5045__auto__ = column_header_height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(top_left_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_left_renderer], null):"")], null);
});
/**
 * The row-header section 'content' component. Takes a function that renders row-headers and draws all of
 *   them in section 2 (sections explained below).
 *   When in virtual? mode, only a screen-full of row-headers are passed to this component at any one time.
 *   This component is also responsible for setting the vertical scroll position of this section based on scroll-y
 * 
 *   Arguments:
 * - row-header-renderer function that knows how to render row-headers (will be passed the 0-based row-index and row to get the data from)
 * - key-fn              function/keyword that returns a unique id out of the row map/object, or nil to use the row's 0-based row-index
 * - top-row-index       the 0-based index of the row that is currently at the top of the viewport (for virtual mode)
 * - rows                a vector of row maps (or objects) to render the row-headers from
 * - scroll-y            current horizontal scrollbar position in px
 *   
 */
re_com.v_table.row_header_content = (function re_com$v_table$row_header_content(row_header_renderer,key_fn,top_row_index,rows,scroll_y,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),195], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-row-header-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),re_com.v_table.px(scroll_y,new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_header_renderer,index,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(row) : key_fn.call(null,row)):index)], null));
}),cljs.core.iterate(cljs.core.inc,top_row_index),rows)], null);
});
/**
 * Render section 2 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.row_header_viewport = (function re_com$v_table$row_header_viewport(row_header_renderer,key_fn,top_row_index,rows,scroll_y,row_header_selection_fn,p__52469,selection_allowed_QMARK_,row_viewport_height,content_rows_height,class$,style,attr,sel_class,sel_style,sel_attr,content_class,content_style,content_attr){
var vec__52476 = p__52469;
var selection_renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(0),null);
var on_mouse_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(1),null);
var on_mouse_enter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(2),null);
var on_mouse_leave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(3),null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),216], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-row-headers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"max-height","max-height",-612563804),re_com.v_table.px(content_rows_height)], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(row_header_selection_fn)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
(on_mouse_down.cljs$core$IFn$_invoke$arity$5 ? on_mouse_down.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"row-header","row-header",1799050794),row_header_selection_fn,content_rows_height,(0),event) : on_mouse_down.call(null,new cljs.core.Keyword(null,"row-header","row-header",1799050794),row_header_selection_fn,content_rows_height,(0),event));

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
(on_mouse_enter.cljs$core$IFn$_invoke$arity$1 ? on_mouse_enter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row-header","row-header",1799050794)) : on_mouse_enter.call(null,new cljs.core.Keyword(null,"row-header","row-header",1799050794)));

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
(on_mouse_leave.cljs$core$IFn$_invoke$arity$1 ? on_mouse_leave.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row-header","row-header",1799050794)) : on_mouse_leave.call(null,new cljs.core.Keyword(null,"row-header","row-header",1799050794)));

return null;
})], null):null),attr], 0)),new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(row_viewport_height)?"none":"auto"),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(row_viewport_height)?re_com.v_table.px(row_viewport_height):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selection_allowed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,sel_class,sel_style,sel_attr], null):null),(cljs.core.truth_(row_header_renderer)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_header_content,row_header_renderer,key_fn,top_row_index,rows,scroll_y,content_class,content_style,content_attr], null):"")], null)], null);
});
/**
 * Render section 3 - the content component
 */
re_com.v_table.bottom_left_content = (function re_com$v_table$bottom_left_content(bottom_left_renderer,column_footer_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),242], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-bottom-left rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px((function (){var or__5045__auto__ = column_footer_height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(bottom_left_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bottom_left_renderer], null):"")], null);
});
/**
 * The column-header section 'content' component. Takes a function that renders column-headers and draws all of
 *   them in section 4 (sections explained below).
 *   This component is also responsible for setting the horizontal scroll position of this section based on scroll-x
 * 
 *   Arguments:
 * - column-header-renderer function that knows how to render column-headers
 * - scroll-x               current horizontal scrollbar position in px
 *   
 */
re_com.v_table.column_header_content = (function re_com$v_table$column_header_content(column_header_renderer,scroll_x,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),264], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-column-header-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),re_com.v_table.px(scroll_x,new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_header_renderer], null)], null);
});
/**
 * Render section 4 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.column_header_viewport = (function re_com$v_table$column_header_viewport(column_header_renderer,scroll_x,column_header_selection_fn,p__52505,selection_allowed_QMARK_,row_viewport_width,column_header_height,content_rows_width,class$,style,attr,sel_class,sel_style,sel_attr,content_class,content_style,content_attr){
var vec__52506 = p__52505;
var selection_renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52506,(0),null);
var on_mouse_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52506,(1),null);
var on_mouse_enter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52506,(2),null);
var on_mouse_leave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52506,(3),null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),281], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-column-headers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(column_header_selection_fn)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
(on_mouse_down.cljs$core$IFn$_invoke$arity$5 ? on_mouse_down.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"column-header","column-header",-1495823888),column_header_selection_fn,column_header_height,content_rows_width,event) : on_mouse_down.call(null,new cljs.core.Keyword(null,"column-header","column-header",-1495823888),column_header_selection_fn,column_header_height,content_rows_width,event));

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
(on_mouse_enter.cljs$core$IFn$_invoke$arity$1 ? on_mouse_enter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column-header","column-header",-1495823888)) : on_mouse_enter.call(null,new cljs.core.Keyword(null,"column-header","column-header",-1495823888)));

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
(on_mouse_leave.cljs$core$IFn$_invoke$arity$1 ? on_mouse_leave.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column-header","column-header",-1495823888)) : on_mouse_leave.call(null,new cljs.core.Keyword(null,"column-header","column-header",-1495823888)));

return null;
})], null):null),attr], 0)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(row_viewport_width)?re_com.v_table.px(row_viewport_width):null),new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px((function (){var or__5045__auto__ = column_header_height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selection_allowed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,sel_class,sel_style,sel_attr], null):null),(cljs.core.truth_(column_header_renderer)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_header_content,column_header_renderer,scroll_x,content_class,content_style,content_attr], null):"")], null)], null);
});
/**
 * The rows section 'content' component. Takes a function that renders rows and draws all of them in section 5 (sections explained below).
 *   When in virtual? mode, only a screen-full of rows are passed to this component at any one time.
 *   This component is also responsible for setting the horizontal and vertical scroll position of this section based on scroll-x and scroll-y
 * 
 *   Arguments:
 * - row-renderer  function that knows how to render rows (will be passed the 0-based row-index and row to render)
 * - key-fn        function/keyword that returns a unique id out of the row map/object, or nil to use the row's 0-based row-index
 * - top-row-index the 0-based index of the row that is currently at the top of the viewport (for virtual mode)
 * - rows          a vector of row maps (or objects) to render
 * - scroll-x      current horizontal scrollbar position in px
 * - scroll-y      current horizontal scrollbar position in px
 *   
 */
re_com.v_table.row_content = (function re_com$v_table$row_content(row_renderer,key_fn,top_row_index,rows,scroll_x,scroll_y,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),317], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-row-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),re_com.v_table.px(scroll_x,new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),re_com.v_table.px(scroll_y,new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_renderer,index,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(row) : key_fn.call(null,row)):index)], null));
}),cljs.core.iterate(cljs.core.inc,top_row_index),rows)], null);
});
/**
 * Render section 5 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.row_viewport = (function re_com$v_table$row_viewport(row_renderer,key_fn,top_row_index,rows,scroll_x,scroll_y,row_selection_fn,p__52546,selection_allowed_QMARK_,row_viewport_height,row_viewport_width,row_viewport_id,content_rows_height,content_rows_width,class$,style,attr,sel_class,sel_style,sel_attr,content_class,content_style,content_attr){
var vec__52547 = p__52546;
var selection_renderer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52547,(0),null);
var on_mouse_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52547,(1),null);
var on_mouse_enter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52547,(2),null);
var on_mouse_leave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52547,(3),null);
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),339], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-rows rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"max-height","max-height",-612563804),re_com.v_table.px(content_rows_height)], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(row_selection_fn)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
(on_mouse_down.cljs$core$IFn$_invoke$arity$5 ? on_mouse_down.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"row","row",-570139521),row_selection_fn,content_rows_height,content_rows_width,event) : on_mouse_down.call(null,new cljs.core.Keyword(null,"row","row",-570139521),row_selection_fn,content_rows_height,content_rows_width,event));

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
(on_mouse_enter.cljs$core$IFn$_invoke$arity$1 ? on_mouse_enter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521)) : on_mouse_enter.call(null,new cljs.core.Keyword(null,"row","row",-570139521)));

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
(on_mouse_leave.cljs$core$IFn$_invoke$arity$1 ? on_mouse_leave.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521)) : on_mouse_leave.call(null,new cljs.core.Keyword(null,"row","row",-570139521)));

return null;
})], null):null),attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),row_viewport_id], null)], 0)),new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(row_viewport_height)?"none":"auto"),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(row_viewport_width)?re_com.v_table.px(row_viewport_width):null),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(row_viewport_height)?re_com.v_table.px(row_viewport_height):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(selection_allowed_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,sel_class,sel_style,sel_attr], null):null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_content,row_renderer,key_fn,top_row_index,rows,scroll_x,scroll_y,content_class,content_style,content_attr], null)], null)], null);
});
/**
 * The column-footer section 'content' component. Takes a function that renders column-footers and draws all of
 *   them in section 6 (sections explained below).
 *   This component is also responsible for setting the horizontal scroll position of this section based on scroll-x
 * 
 *   Arguments:
 * - column-footer-renderer function that knows how to render column-footers
 * - scroll-x            current horizontal scrollbar position in px
 *   
 */
re_com.v_table.column_footer_content = (function re_com$v_table$column_footer_content(column_footer_renderer,scroll_x,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),372], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-column-footer-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),re_com.v_table.px(scroll_x,new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_footer_renderer], null)], null);
});
/**
 * Render section 6 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.column_footer_viewport = (function re_com$v_table$column_footer_viewport(column_footer_renderer,scroll_x,row_viewport_width,column_footer_height,class$,style,attr,content_class,content_style,content_attr){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),386], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-column-footers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(row_viewport_width)?re_com.v_table.px(row_viewport_width):null),new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px((function (){var or__5045__auto__ = column_footer_height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(column_footer_renderer)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_footer_content,column_footer_renderer,scroll_x,content_class,content_style,content_attr], null):"")], null);
});
/**
 * Render section 7 - the content component
 */
re_com.v_table.top_right_content = (function re_com$v_table$top_right_content(top_right_renderer,column_header_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),404], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-top-right rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px((function (){var or__5045__auto__ = column_header_height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(top_right_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [top_right_renderer], null):"")], null);
});
/**
 * The row-footer section 'content' component. Takes a function that renders row-footers and draws all of
 *   them in section 8 (sections explained below).
 *   When in virtual? mode, only a screen-full of row-footers are passed to this component at any one time.
 *   This component is also responsible for setting the vertical scroll position of this section based on scroll-y
 * 
 *   Arguments:
 * - row-footer-renderer function that knows how to render row-footers (will be passed the 0-based row-index and row to get the data from)
 * - key-fn              function/keyword that returns a unique id out of the row map/object, or nil to use the row's 0-based row-index
 * - top-row-index       the 0-based index of the row that is currently at the top of the viewport (for virtual mode)
 * - rows                a vector of row maps (or objects) to render the row-footers from
 * - scroll-y            current horizontal scrollbar position in px
 *   
 */
re_com.v_table.row_footer_content = (function re_com$v_table$row_footer_content(row_footer_renderer,key_fn,top_row_index,rows,scroll_y,class$,style,attr){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),430], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-row-footer-content rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),re_com.v_table.px(scroll_y,new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (index,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_footer_renderer,index,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(row) : key_fn.call(null,row)):index)], null));
}),cljs.core.iterate(cljs.core.inc,top_row_index),rows)], null);
});
/**
 * Render section 8 - the viewport component (which renders the content component as its child)
 */
re_com.v_table.row_footer_viewport = (function re_com$v_table$row_footer_viewport(row_footer_renderer,key_fn,top_row_index,rows,scroll_y,row_viewport_height,content_rows_height,class$,style,attr,content_class,content_style,content_attr){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),449], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-row-footers rc-v-table-viewport ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"max-height","max-height",-612563804),re_com.v_table.px(content_rows_height)], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(row_viewport_height)?"none":"auto"),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(row_viewport_height)?re_com.v_table.px(row_viewport_height):null),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(row_footer_renderer)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_footer_content,row_footer_renderer,key_fn,top_row_index,rows,scroll_y,content_class,content_style,content_attr], null):"")], null);
});
/**
 * Render section 9 - the content component
 */
re_com.v_table.bottom_right_content = (function re_com$v_table$bottom_right_content(bottom_right_renderer,column_footer_height,class$,style,attr){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),468], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-bottom-right rc-v-table-content ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px((function (){var or__5045__auto__ = column_footer_height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(bottom_right_renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bottom_right_renderer], null):"")], null);
});
re_com.v_table.v_table_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-wrapper",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-table]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer container of the v-table"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"left-section","left-section",1725153983),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-left-section",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The left v-box container section of the table, containing sections 1,2,3"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-top-left rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Top left section (1)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-row-headers rc-v-table-viewport",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Row header viewport section (2)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-selection-rect","row-header-selection-rect",-1802701930),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-selection",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The row-header rectangle used for click+drag selection of row headers"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-content","row-header-content",-594512165),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-row-header-content rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The v-box containing one row header (row-header-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-bottom-left rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Bottom left section (3)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"middle-section","middle-section",-353695846),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-middle-section",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The middle v-box container section of the table, containing sections 4,5,6"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-column-headers rc-v-table-viewport",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Column header viewport section (4)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-selection-rect","column-header-selection-rect",-790796749),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-selection",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The column-header rectangle used for click+drag selection of column headers"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-content","column-header-content",-2026517060),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-column-header-content rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The box containing the column header (column-header-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-rows rc-v-table-viewport",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Main row viewport section (5)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-selection-rect","row-selection-rect",-1945553775),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-selection",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The ROW rectangle used for click+drag selection of rows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-content","row-content",-203238520),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-row-content rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The v-box containing one row (row-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-footers","column-footers",-1188771065),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-column-footers rc-v-table-viewport",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Column footer viewport section (6)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-footer-content","column-footer-content",-2077092556),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-column-footer-content rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The box containing the column footer (column-footer-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-h-scroll",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The horizontal scrollbar"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"right-section","right-section",-1581313735),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-right-section",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The right container section v-box of the table, containing sections 7,8,9"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-top-right rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Top right section (7)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-footers","row-footers",-681026731),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-row-footers rc-v-table-viewport",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Row footer viewport section (8)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-footer-content","row-footer-content",1483533894),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-row-footer-content rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The v-box containing one row footer (row-footer-render renders in here)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-bottom-right rc-v-table-content",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Bottom right section (9)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"v-scroll-section","v-scroll-section",-72114244),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-v-scroll-section",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The v-box containing the vertical scrollbar:"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"name-label","name-label",1051389241),"-",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Legacy"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-table-v-scroll",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The vertical scrollbar"], null)], null):null);
re_com.v_table.v_table_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.v_table.v_table_parts_desc)):null);
re_com.v_table.v_table_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"atom containing vec of maps",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"One element for each row displayed in the table. Typically, a vector of maps, but can be a seq of anything, with your functions like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":key-fn"], null)," extracting values."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"nil",new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.ifn_or_nil_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function/keyword or nil. Given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null),", it should return its unique identifier which is used by Reagent as a unique id. If not specified or nil passed, the element's 0-based row-index will be used"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"virtual?","virtual?",1554264002),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, only those rows that are visible are rendered to the DOM. Otherwise DOM will be generated for all rows, which might be prohibitive if there are a large number of rows."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px height of each row, in sections 2, 5 and 8."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px height of the column header. Impacts the upper sections 1, 4 and 7. If not provided, defaults to 0, meaning these three sections will not be visible."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-footer-height","column-footer-height",-1662618224),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px height of the column footer. Impacts the lower sections 3, 6 and 9. If not provided, defaults to 0, meaning these three sections will not be visible."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-content-width","row-content-width",-1986261648),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px width of sections 4, 5, 6. The renderers for these sections are expected to return hiccup to fill these spaces."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Standard CSS max-width setting of the entire table. If not provided, table will fill available space"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top-left-renderer","top-left-renderer",2010514596),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function taking no args which returns the hiccup for the top left (section 1). The hiccup should fill the height specified via ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header-height"], null),". The width of the three left sections is self-determined as the maximum of their own content."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-renderer","row-header-renderer",-355094585),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"row-index, row -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function. Given the 0-based row-index and an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null),", it will return the hiccup for the row header (section 2)."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bottom-left-renderer","bottom-left-renderer",768170713),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"A function taking no args which returns the hiccup for the bottom left (section 3)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-renderer","column-header-renderer",-1886265578),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"A function taking no args which returns the hiccup for the column header (section 4)."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-renderer","row-renderer",314053346),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"row-index, row -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function. Given the 0-based row-index and an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null),", it will return the hiccup for a single content row (section 5). This renderer is called once for each displayed row. As vertical scrolling occurs, more calls will be made."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-footer-renderer","column-footer-renderer",1437275846),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"A function taking no args which returns the hiccup for the entire column footer (section 6)."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top-right-renderer","top-right-renderer",-1691262321),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"A function taking no args which returns the hiccup for the top right (section 7)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-footer-renderer","row-footer-renderer",2060844986),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"row-index, row -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function. Given the 0-based row-index and an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null),", it will return the hiccup for the row footer (section 8)."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bottom-right-renderer","bottom-right-renderer",1863950426),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"A function taking no args which returns the hiccup for the bottom right (section 9)."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-selection-fn","row-header-selection-fn",1835057464),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"(5 args) -> ",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"See v-table docstring for arg details. If present, this function will be called on mouse-down, mouse-move and mouse-up events, allowing you to capture user selection of cells, columns or rows in section 2."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-selection-fn","column-header-selection-fn",2096757610),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"(5 args) -> ",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"See v-table docstring for arg details. If present, this function will be called on mouse-down, mouse-move and mouse-up events, allowing you to capture user selection of cells, columns or rows in section 4."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-selection-fn","row-selection-fn",274335562),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"(5 args) -> ",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"See v-table docstring for arg details. If present, this function will be called on mouse-down, mouse-move and mouse-up events, allowing you to capture user selection of cells, columns or rows in section 5."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-viewport-width","row-viewport-width",1520708232),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px width of the row viewport area (section 5). If not specified, the component takes all the horizontal space available."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-viewport-height","row-viewport-height",-532496779),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px height of the row viewport area (section 5). If not specified,the component takes all the vertical space available."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-row-viewport-height","max-row-viewport-height",2061202688),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"maximum"], null)], null)," px height of the row viewport area (section 5), excluding height of sections 4 and 6 (and horizontal scrollbar). If not specified, value determined by parent height and number of rows"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"scroll-rows-into-view","scroll-rows-into-view",-984076694),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"atom containing map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.map_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Scrolls the table to a particular row range. Must be an atom. The map contains the keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":start-row"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":end-row"], null)," (row indexes)."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"scroll-columns-into-view","scroll-columns-into-view",1543196851),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"atom containing map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.map_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Scrolls the table of a particular column range. Must be an atom. Map that contains the keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":start-col"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":end-col"], null)," in pixel units."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"remove-empty-row-space?","remove-empty-row-space?",2140501449),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"If true, removes whitespace between the last row and the horizontal scrollbar. Useful for tables without many rows where otherwise there would be a big gap between the last row and the horizontal scrollbar at the bottom of the available space."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (these are applied to the table's outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.v_table.v_table_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Renders a scrollable table with optional fixed column and row headers and footers, totalling nine addressable sections
 *   By default, it only displays rows that are visible, so is very efficient for large data structures
 *   The table supports click+drag selections within the rows section (5), row header section (2) and col header section (4)
 * 
 *   The table is laid out using an h-box for the outer component, with four v-box 'container
 *   sections' sitting next to each other:
 * 
 *   +-----+---------+-----+-+
 *   |     |         |     | |
 *   |     |         |     | |
 *   |     |         |     | |
 *   |LEFT | MIDDLE  |RIGHT|VS
 *   |     |         |     | |
 *   |     |         |     | |
 *   |     |         |     | |
 *   |- - -|- - - - -|- - -|-|
 *   +-----+---HS----+-----+-+
 * 
 *   The four 'container section' v-boxes are named:
 * - LEFT:   contains the row headers (and corresponding two corner sections)
 * - MIDDLE: contains the main content area (the rows), along with column headers and footers and the horizontal scrollbar (HS)
 * - RIGHT:  contains the row footers (and corresponding two corner sections)
 * - VS:     contains the vertical scrollbar
 * 
 *   Each container section holds 'sections' which are numbered:
 * 
 *   +-----+---------+-----+
 *   |  1  |    4    |  7  |
 *   +-----+---------+-----+-+
 *   |     |         |     | |
 *   |  2  |    5    |  8  |VS
 *   |     |         |     | |
 *   +-----+---------+-----+ +
 *   |  3  |    6    |  9  |
 *   +-----+---------+-----+
 *      +---HS----+
 * 
 *   The nine 'sections' are named:
 * - 1: top-left
 * - 2: row-headers
 * - 3: bottom-left
 * - 4: column-headers
 * - 5: rows
 * - 6: column-footers
 * - 7: top-right
 * - 8: row-footers
 * - 9: bottom-right
 * 
 *   The corner sections (1, 3, 7, 9) are fixed (i.e. do not scroll) and consist of a single 'content' area
 * 
 *   The other sections are scrollable: (2, 8) vertical, (4, 6) horizontal and (5) vertical & horizontal as
 *   a 'viewport' onto their (potentially larger) 'content' area
 * 
 * 
 *   Arguments:
 * 
 * - model                    [mandatory atom containing vector of maps (or other data structures)]
 *                            The data to be displayed, consisting of rows. Each row is normally a map but could be anything)
 *                            Rows MUST contain a unique id (specified via :key-fn arg)
 *                            They are passed to the row-renderer (section 5), row-header-renderer (section 2) and row-footer-renderer (section 8)
 *                            NOTE: data for sections 1, 3, 4, 6, 7 and 9 are not included in model
 * 
 * - key-fn                   [optional fn or keyword to extract a unique id from the row data, or not specified/nil to indicate
 *                            that v-table should use the internally generated 0-based row-id]
 *                            A row is passed to key-fn and it returns the unique identifier for that row
 * 
 * - virtual?                 [optional bool, default = true]
 *                            When true, use virtual feature where only a screen-full (viewport) of rows are rendered at any one time
 *                            Use true for tables with many rows to reduce initialisation time and resource usage
 *                            You can use false for smaller tables to improve performance of vertical scrolling
 * 
 * - remove-empty-row-space?  [optional bool, default = true]
 *                            Specifies whether to remove empty row space (the space between the last row and the horizontal scrollbar)
 *                            for small tables that don't fill the space available to the v-table
 *                            This will cause the horizontal scrollbar section to be nestled against the last row, and whatever is
 *                            underneath the v-table to be brought up with it
 * 
 * - max-width                [optional string, default = nil (table will fill available space)]
 *                            MAXIMUM width of the entire v-table
 *                            NOTE: This is specified as a normal CSS value, e.g. "1024px" or "90%"
 * 
 * 
 *   ========== SECTION 1 - top-left
 * 
 * - top-left-renderer        [optional (fn [])]
 *                            Render the top left section
 *                            Height is determined by the :column-header-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 * 
 *   ========== SECTION 2 - row-headers
 * 
 * - row-header-renderer      [optional (fn [row-index row])]
 *                            Render a single row header
 *                            Height is determined by the row-height arg
 *                            Width is determined by the component itself
 *                            Passed args: row-index (0-based), row (a map, or other data structure from model)
 * 
 * - row-header-selection-fn  [optional (fn [selection-event coords ctrlKey shiftKey event])]
 *                            If provided, indicates that the row header section is selectable via click+drag
 *                            Passed args: see row-selection-fn below for details
 *                            Use the :row-header-selection-rect style-part to style the selection rectangle
 * 
 * 
 *   ========== SECTION 3 - bottom-left
 * 
 * - bottom-left-renderer     [optional (fn [])]
 *                            Render the bottom left section
 *                            Height is determined by the column-footer-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 *                            NOTE: The width of the LEFT container section (encompassing sections 1, 2 and 3 above)
 *                                  is determined by the widest section
 * 
 * 
 *   ========== SECTION 4 - column-headers
 * 
 * - column-header-renderer   [optional (fn [])]
 *                            Render the entire column header
 *                            Height is determined by the column-header-height arg
 *                            Width is determined by the width available to the v-table OR the row-viewport-width arg if specified
 *                            Passed args: none
 * 
 * - column-header-height     [optional number, default = 0]
 *                            px height of the column header section
 * 
 * - column-header-selection-fn  [optional (fn [selection-event coords ctrlKey shiftKey event])]
 *                            if provided, indicates that the column header section is selectable via click+drag
 *                            Passed args: see row-selection-fn below for details
 *                            Use the :column-header-selection-rect style-part to style the selection rectangle
 * 
 * 
 *   ========== SECTION 5 - rows (main content area)
 * 
 * - row-renderer             [mandatory (fn [row-index row])]
 *                            Render a single content row
 *                            [DJ] Wants to state that columns are not virtual and all horizontal content is rendered
 *                            Height is determined by the row-height arg
 *                            Width is determined by the width available to the v-table OR the row-viewport-width arg if specified
 *                            Passed args: row-index (0-based), row (a map, or other data structure from model)
 * 
 * - row-height               [mandatory number]
 *                            px height of each row
 * 
 * - row-content-width        [mandatory number]
 *                            px width of the content rendered by row-renderer
 * 
 * - row-viewport-width       [optional number, default = nil (take up all available width)]
 *                            px width of the row viewport area
 *                            If not specified, takes up all width available to it
 * 
 * - row-viewport-height      [optional number, default = nil (take up all available height)]
 *                            px height of the row viewport area
 *                            If not specified, takes up all height available to it
 * 
 * - max-row-viewport-height  [optional number, default = nil (determined by parent height and number of rows)]
 *                            MAXIMUM px height of the row viewport area
 *                            Conveniently excludes height of col header and footer and horizontal scrollbar
 *                            For this to be effective, the parent of the v-table component should have ':size none'
 * 
 * - row-selection-fn         [optional (fn [selection-event coords ctrlKey shiftKey event])]
 *                            If provided, indicates that the row section is selectable via click+drag
 *                            The fn will be called (on mouse-down, mouse-move and mouse-up) with four positional args
 *                            Passed args:
 *                                  selection-event: One of :selection-start, :selecting or :selection-end
 *                                  coords:          {:start-row integer   ;; rows are returned as zero-based row numbers (except column-header which returns px)
 *                                                    :end-row   integer
 *                                                    :start-col integer   ;; cols are returned as px offsets
 *                                                    :end-col   integer}
 *                                  ctrlKey:         When true, Control key is currently pressed
 *                                  shiftKey:        When true, Shift key is currently pressed
 *                                  event            The original MouseEvent (https://developer.mozilla.org/en/docs/Web/API/MouseEvent)
 *                            Use the :selection-rect style-part to style the selection rectangle
 * 
 * 
 *   ========== SECTION 6 - column-footers
 * 
 * - column-footer-renderer   [optional (fn [])]
 *                            Render the entire column footer
 *                            Height is determined by the column-footer-height arg
 *                            Width is determined by the width available to the v-table OR the row-viewport-width arg if specified
 *                            Passed args: none
 * 
 * - column-footer-height     [optional number, default = 0]
 *                            px height of the column footer section
 * 
 * 
 *   ========== SECTION 7 - top right
 * 
 * - top-right-renderer       [optional (fn [])]
 *                            Render the top right section
 *                            Height is determined by the column-header-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 * 
 *   ========== SECTION 8 - row-footers
 * 
 * - row-footer-renderer      [optional (fn [row-index row])]
 *                            Render a single row footer
 *                            Height is determined by the row-height arg
 *                            Width is determined by the component itself
 *                            Passed args: row-index (0-based), row (a map, or other data structure from model)
 * 
 * 
 *   ========== SECTION 9 - bottom-right
 * 
 * - bottom-right-renderer    [optional (fn [])]
 *                            Render the bottom right section
 *                            Height is determined by the column-footer-height arg
 *                            Width is determined by the component itself
 *                            Passed args: none
 * 
 *                            NOTE: The width of the RIGHT container section (encompassing sections 7, 8 and 9 above)
 *                                  is determined by the widest section
 * 
 * 
 *   ========== Scrolling the table so that a block of rows/columns become visible
 * 
 * - scroll-rows-into-view    [optional atom map]
 *                            Set this argument to scroll the table to a particular row range
 *                            map example:
 *                              {:start-row   12   ;; Start row number (zero-based) to be scrolled into view
 *                               :end-row     14}  ;; End row number to be scrolled into view
 * 
 * - scroll-columns-into-view [optional atom map]
 *                            Set this argument to scroll the table to a particular column range (in this case columns are pixels!)
 *                            map example:
 *                              {:start-col   200  ;; Start column px offset to be scrolled into view
 *                               :end-col     300} ;; End column px offset to be scrolled into view
 * 
 * 
 *   ========== Styling different parts of the table (and setting attributes for those parts)
 * 
 * - class                    Add extra class(es) to the outer container
 * 
 * - parts                    [optional nested map]
 *                            Allows classes, styles and attributes (e.g. custom event handlers) to be specified for each part of the table
 * 
 *                            Keys can be:
 * 
 *                             - :wrapper                             The outer container of the table
 * 
 *                             - :left-section                        The left v-box container section of the table, containing:
 *                                - :top-left                         Top left section (1)
 *                                - :row-headers                      Row header viewport section (2)
 *                                   - :row-header-selection-rect     The row-header rectangle used for click+drag selection of row headers
 *                                   - :row-header-content            The v-box containing one row header (row-header-render renders in here)
 *                                - :bottom-left                      Bottom left section (3)
 * 
 *                             - :middle-section                      The middle v-box container section of the table, containing:
 *                                - :column-headers                   Column header viewport section (4)
 *                                   - :column-header-selection-rect  The column-header rectangle used for click+drag selection of column headers
 *                                   - :column-header-content         The box containing the column header (column-header-render renders in here)
 *                                - :rows                             Main row viewport section (5)
 *                                   - :row-selection-rect            The ROW rectangle used for click+drag selection of rows
 *                                                                    Defaults to being above the rows (:z-index 1). Set to 0 to place it underneath rows
 *                                   - :row-content                   The v-box containing one row (row-render renders in here)
 *                                - :column-footers                   Column footer viewport section (6)
 *                                   - :column-footer-content         The box containing the column footer (column-footer-render renders in here)
 *                                - :h-scroll                         The horizontal scrollbar
 *                                                                    
 *                             - :right-section                       The right container section v-box of the table, containing:
 *                                - :top-right                        Top right section (7)
 *                                - :row-footers                      Row footer viewport section (8)
 *                                   - :row-footer-content            The v-box containing one row footer (row-footer-render renders in here)
 *                                - :bottom-right                     Bottom right section (9)
 *                                                                    
 *                             - :v-scroll-section                    The v-box containing the vertical scrollbar:
 *                                - :v-scroll                         The vertical scrollbar
 * 
 */
re_com.v_table.v_table = (function re_com$v_table$v_table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53097 = arguments.length;
var i__5770__auto___53098 = (0);
while(true){
if((i__5770__auto___53098 < len__5769__auto___53097)){
args__5775__auto__.push((arguments[i__5770__auto___53098]));

var G__53100 = (i__5770__auto___53098 + (1));
i__5770__auto___53098 = G__53100;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.v_table.v_table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.v_table.v_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__52754){
var map__52755 = p__52754;
var map__52755__$1 = cljs.core.__destructure_map(map__52755);
var args = map__52755__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"model","model",331153215));
var virtual_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52755__$1,new cljs.core.Keyword(null,"virtual?","virtual?",1554264002),true);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var row_viewport_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"row-viewport-width","row-viewport-width",1520708232));
var row_viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"row-viewport-height","row-viewport-height",-532496779));
var max_row_viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"max-row-viewport-height","max-row-viewport-height",2061202688));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.v_table.v_table_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var scroll_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var scroll_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var content_rows_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var content_rows_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var row_viewport_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("row-viewport-");
var row_viewport_element = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rl_row_viewport_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var rl_row_viewport_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var x__5133__auto__ = (row_height * cljs.core.count(cljs.core.deref(model)));
var y__5134__auto__ = max_row_viewport_height;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
var internal_scroll_rows_into_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var internal_scroll_columns_into_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var m_size = reagent.ratom.make_reaction((function (){
return cljs.core.count(cljs.core.deref(model));
}));
var rows_per_viewport = reagent.ratom.make_reaction((function (){
return Math.round((cljs.core.deref(rl_row_viewport_height) / row_height));
}));
var max_scroll_x = reagent.ratom.make_reaction((function (){
return (cljs.core.deref(content_rows_width) - cljs.core.deref(rl_row_viewport_width));
}));
var max_scroll_y = reagent.ratom.make_reaction((function (){
return (cljs.core.deref(content_rows_height) - cljs.core.deref(rl_row_viewport_height));
}));
var top_row_index = reagent.ratom.make_reaction((function (){
return ((cljs.core.deref(scroll_y) / row_height) | (0));
}));
var bot_row_index = reagent.ratom.make_reaction((function (){
var x__5133__auto__ = (cljs.core.deref(top_row_index) + (cljs.core.deref(rows_per_viewport) - (1)));
var y__5134__auto__ = cljs.core.deref(m_size);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
}));
var virtual_scroll_y = reagent.ratom.make_reaction((function (){
return cljs.core.mod(cljs.core.deref(scroll_y),row_height);
}));
var virtual_rows = reagent.ratom.make_reaction((function (){
if((cljs.core.deref(m_size) > (0))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(model),(function (){var x__5133__auto__ = cljs.core.deref(top_row_index);
var y__5134__auto__ = cljs.core.deref(m_size);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),(function (){var x__5133__auto__ = ((cljs.core.deref(top_row_index) + cljs.core.deref(rows_per_viewport)) + (2));
var y__5134__auto__ = cljs.core.deref(m_size);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
} else {
return null;
}
}));
var on_h_scroll_change = (function (p1__52711_SHARP_){
return cljs.core.reset_BANG_(scroll_x,p1__52711_SHARP_);
});
var on_v_scroll_change = (function (p1__52712_SHARP_){
return cljs.core.reset_BANG_(scroll_y,p1__52712_SHARP_);
});
var on_viewport_resize = (function re_com$v_table$on_viewport_resize(event){
var target = event.target;
var bounding_rect = (((target == null))?cljs.core.PersistentArrayMap.EMPTY:target.getBoundingClientRect());
cljs.core.reset_BANG_(rl_row_viewport_width,(function (){var or__5045__auto____$1 = row_viewport_width;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return bounding_rect.width;
}
})());

cljs.core.reset_BANG_(rl_row_viewport_height,(function (){var or__5045__auto____$1 = row_viewport_height;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return bounding_rect.height;
}
})());

cljs.core.reset_BANG_(scroll_x,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_x);
var y__5134__auto__ = cljs.core.deref(scroll_x);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

return cljs.core.reset_BANG_(scroll_y,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_y);
var y__5134__auto__ = cljs.core.deref(scroll_y);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
});
var on_wheel = (function re_com$v_table$on_wheel(event){
var delta_x = event.deltaX;
var new_delta_x = delta_x;
var delta_y = event.deltaY;
var new_delta_y = delta_y;
cljs.core.reset_BANG_(scroll_x,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_x);
var y__5134__auto__ = (cljs.core.deref(scroll_x) + new_delta_x);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

return cljs.core.reset_BANG_(scroll_y,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_y);
var y__5134__auto__ = (cljs.core.deref(scroll_y) + new_delta_y);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
});
var dmm_tracker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_parent_bounding_rect = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_content_x_start = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_content_y_start = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_content_x_end = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_content_y_end = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selection_renderer = (function re_com$v_table$selection_renderer(class$,style,attr){
var selecting_down_QMARK_ = (cljs.core.deref(sel_content_y_end) > cljs.core.deref(sel_content_y_start));
var selecting_right_QMARK_ = (cljs.core.deref(sel_content_x_end) > cljs.core.deref(sel_content_x_start));
var width = ((selecting_right_QMARK_)?(cljs.core.deref(sel_content_x_end) - cljs.core.deref(sel_content_x_start)):(cljs.core.deref(sel_content_x_start) - cljs.core.deref(sel_content_x_end)));
var height = ((selecting_down_QMARK_)?(cljs.core.deref(sel_content_y_end) - cljs.core.deref(sel_content_y_start)):(cljs.core.deref(sel_content_y_start) - cljs.core.deref(sel_content_y_end)));
var top = ((selecting_down_QMARK_)?(cljs.core.deref(sel_content_y_start) - cljs.core.deref(scroll_y)):((cljs.core.deref(sel_content_y_start) - cljs.core.deref(scroll_y)) - height));
var left = ((selecting_right_QMARK_)?(cljs.core.deref(sel_content_x_start) - cljs.core.deref(scroll_x)):((cljs.core.deref(sel_content_x_start) - cljs.core.deref(scroll_x)) - width));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-selection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.v_table.px(top),new cljs.core.Keyword(null,"left","left",-399115937),re_com.v_table.px(left),new cljs.core.Keyword(null,"width","width",-384071477),re_com.v_table.px(width),new cljs.core.Keyword(null,"height","height",1025178622),re_com.v_table.px(height),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0,0,255,0.1)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(0,0,255,0.4)"], null),style], 0))], null),attr], 0)),""], null);
});
var coords_debug = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var event_debug = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var selection_target = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sel_max_content_rows_px = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sel_max_content_cols_px = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var selection_coords = (function re_com$v_table$selection_coords(){
if(cljs.core.truth_(cljs.core.deref(sel_parent_bounding_rect))){
var selecting_down_QMARK_ = (cljs.core.deref(sel_content_y_end) > cljs.core.deref(sel_content_y_start));
var selecting_right_QMARK_ = (cljs.core.deref(sel_content_x_end) > cljs.core.deref(sel_content_x_start));
var use_rows_numbers_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),new cljs.core.Keyword(null,"column-header","column-header",-1495823888));
var start_row_px = ((selecting_down_QMARK_)?cljs.core.deref(sel_content_y_start):cljs.core.deref(sel_content_y_end));
var end_row_px = ((selecting_down_QMARK_)?cljs.core.deref(sel_content_y_end):cljs.core.deref(sel_content_y_start));
var start_col_px = ((selecting_right_QMARK_)?cljs.core.deref(sel_content_x_start):cljs.core.deref(sel_content_x_end));
var end_col_px = ((selecting_right_QMARK_)?cljs.core.deref(sel_content_x_end):cljs.core.deref(sel_content_x_start));
var start_row_px_clipped = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(sel_max_content_rows_px);
var y__5134__auto__ = start_row_px;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var end_row_px_clipped = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(sel_max_content_rows_px);
var y__5134__auto__ = end_row_px;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var coords = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-row","start-row",164678470),((use_rows_numbers_QMARK_)?((start_row_px_clipped / row_height) | (0)):start_row_px_clipped),new cljs.core.Keyword(null,"end-row","end-row",-545103581),((use_rows_numbers_QMARK_)?((end_row_px_clipped / row_height) | (0)):end_row_px_clipped),new cljs.core.Keyword(null,"start-col","start-col",668080143),(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(sel_max_content_cols_px);
var y__5134__auto__ = start_col_px;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),new cljs.core.Keyword(null,"end-col","end-col",-724155879),(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(sel_max_content_cols_px);
var y__5134__auto__ = end_col_px;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})()], null);
if(cljs.core.truth_(re_com.config.debug_QMARK_)){
cljs.core.reset_BANG_(coords_debug,coords);
} else {
}

return coords;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dragging_outside_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var on_drag_change = (function re_com$v_table$on_drag_change(sel_fn,_delta_x,_delta_y,curr_x,curr_y,ctrlKey,shiftKey,event){
var top_offset = cljs.core.deref(sel_parent_bounding_rect).top;
var left_offset = cljs.core.deref(sel_parent_bounding_rect).left;
var bottom_offset = cljs.core.deref(sel_parent_bounding_rect).bottom;
var right_offset = cljs.core.deref(sel_parent_bounding_rect).right;
var scroll_delta_y = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(dragging_outside_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),new cljs.core.Keyword(null,"column-header","column-header",-1495823888));
} else {
return and__5043__auto__;
}
})())?(((curr_y < top_offset))?(curr_y - top_offset):(((curr_y > bottom_offset))?(curr_y - bottom_offset):(0)
)):(0));
var scroll_delta_x = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(dragging_outside_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),new cljs.core.Keyword(null,"row-header","row-header",1799050794));
} else {
return and__5043__auto__;
}
})())?(((curr_x < left_offset))?(curr_x - left_offset):(((curr_x > right_offset))?(curr_x - right_offset):(0)
)):(0));
cljs.core.reset_BANG_(sel_content_x_end,((curr_x + (- left_offset)) + cljs.core.deref(scroll_x)));

cljs.core.reset_BANG_(sel_content_y_end,((curr_y + (- top_offset)) + cljs.core.deref(scroll_y)));

cljs.core.reset_BANG_(scroll_x,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_x);
var y__5134__auto__ = (cljs.core.deref(scroll_x) + scroll_delta_x);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

cljs.core.reset_BANG_(scroll_y,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_y);
var y__5134__auto__ = (cljs.core.deref(scroll_y) + scroll_delta_y);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());

if(cljs.core.truth_(re_com.config.debug_QMARK_)){
cljs.core.reset_BANG_(event_debug,event);
} else {
}

var G__52878 = new cljs.core.Keyword(null,"selecting","selecting",-1699771909);
var G__52879 = selection_coords();
var G__52880 = ctrlKey;
var G__52881 = shiftKey;
var G__52882 = event;
return (sel_fn.cljs$core$IFn$_invoke$arity$5 ? sel_fn.cljs$core$IFn$_invoke$arity$5(G__52878,G__52879,G__52880,G__52881,G__52882) : sel_fn.call(null,G__52878,G__52879,G__52880,G__52881,G__52882));
});
var on_drag_end = (function re_com$v_table$on_drag_end(sel_fn,ctrlKey,shiftKey,event){
if(cljs.core.truth_(re_com.config.debug_QMARK_)){
cljs.core.reset_BANG_(coords_debug,null);
} else {
}

if(cljs.core.truth_(re_com.config.debug_QMARK_)){
cljs.core.reset_BANG_(event_debug,event);
} else {
}

var G__52887_53126 = new cljs.core.Keyword(null,"selection-end","selection-end",696987835);
var G__52888_53127 = selection_coords();
var G__52889_53128 = ctrlKey;
var G__52890_53129 = shiftKey;
var G__52891_53130 = event;
(sel_fn.cljs$core$IFn$_invoke$arity$5 ? sel_fn.cljs$core$IFn$_invoke$arity$5(G__52887_53126,G__52888_53127,G__52889_53128,G__52890_53129,G__52891_53130) : sel_fn.call(null,G__52887_53126,G__52888_53127,G__52889_53128,G__52890_53129,G__52891_53130));

cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(dragging_outside_QMARK_,false);

cljs.core.reset_BANG_(sel_parent_bounding_rect,null);

return cljs.core.reset_BANG_(dmm_tracker,null);
});
var on_mouse_down = (function re_com$v_table$on_mouse_down(sel_target,sel_fn,max_rows_px,max_cols_px,event){
cljs.core.reset_BANG_(selection_target,sel_target);

cljs.core.reset_BANG_(sel_max_content_rows_px,(max_rows_px - (1)));

cljs.core.reset_BANG_(sel_max_content_cols_px,(max_cols_px - (1)));

cljs.core.reset_BANG_(sel_parent_bounding_rect,event.currentTarget.getBoundingClientRect());

var top_offset = (- cljs.core.deref(sel_parent_bounding_rect).top);
var left_offset = (- cljs.core.deref(sel_parent_bounding_rect).left);
cljs.core.reset_BANG_(sel_content_x_start,((event.clientX + left_offset) + cljs.core.deref(scroll_x)));

cljs.core.reset_BANG_(sel_content_y_start,((event.clientY + top_offset) + cljs.core.deref(scroll_y)));

cljs.core.reset_BANG_(sel_content_x_end,cljs.core.deref(sel_content_x_start));

cljs.core.reset_BANG_(sel_content_y_end,cljs.core.deref(sel_content_y_start));

if(cljs.core.truth_(re_com.config.debug_QMARK_)){
cljs.core.reset_BANG_(event_debug,event);
} else {
}

var G__52900_53131 = new cljs.core.Keyword(null,"selection-start","selection-start",-888859581);
var G__52901_53132 = selection_coords();
var G__52902_53133 = event.ctrlKey;
var G__52903_53134 = event.shiftKey;
var G__52904_53135 = event;
(sel_fn.cljs$core$IFn$_invoke$arity$5 ? sel_fn.cljs$core$IFn$_invoke$arity$5(G__52900_53131,G__52901_53132,G__52902_53133,G__52903_53134,G__52904_53135) : sel_fn.call(null,G__52900_53131,G__52901_53132,G__52902_53133,G__52903_53134,G__52904_53135));

cljs.core.reset_BANG_(dmm_tracker,re_com.dmm_tracker.make_dmm_tracker(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_drag_change,sel_fn),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_drag_end,sel_fn)));

re_com.dmm_tracker.captureMouseMoves(cljs.core.deref(dmm_tracker),event);

cljs.core.reset_BANG_(dragging_QMARK_,true);

return cljs.core.reset_BANG_(dragging_outside_QMARK_,false);
});
var on_mouse_enter = (function re_com$v_table$on_mouse_enter(sel_target){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(dragging_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),sel_target);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.reset_BANG_(dragging_outside_QMARK_,false);
} else {
return null;
}
});
var on_mouse_leave = (function re_com$v_table$on_mouse_leave(sel_target){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(dragging_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),sel_target);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.reset_BANG_(dragging_outside_QMARK_,true);
} else {
return null;
}
});
var selection_fns = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_renderer,on_mouse_down,on_mouse_enter,on_mouse_leave], null);
if(cljs.core.not((function (){var or__5045__auto____$1 = window.hasOwnProperty("addResizeListener");
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return window.hasOwnProperty("removeResizeListener");
}
})())){
return console.error("Your project is missing detect-element-resize.js or detect-element-resize-externs.js\n         could not setup v-table. See https://re-com.day8.com.au/#/v-table requirements");
} else {
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"v-table",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function re_com$v_table$v_table_component_did_mount(){
cljs.core.reset_BANG_(row_viewport_element,document.getElementById(row_viewport_id));

return window.addResizeListener(cljs.core.deref(row_viewport_element),on_viewport_resize);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function re_com$v_table$v_table_component_will_unmount(){
window.removeResizeListener(cljs.core.deref(row_viewport_element),on_viewport_resize);

return cljs.core.reset_BANG_(row_viewport_element,null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var re_com$v_table$v_table_render__delegate = function (p__52913){
var map__52914 = p__52913;
var map__52914__$1 = cljs.core.__destructure_map(map__52914);
var args__$1 = map__52914__$1;
var bottom_left_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"bottom-left-renderer","bottom-left-renderer",768170713));
var row_footer_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-footer-renderer","row-footer-renderer",2060844986));
var bottom_right_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"bottom-right-renderer","bottom-right-renderer",1863950426));
var max_row_viewport_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"max-row-viewport-height","max-row-viewport-height",2061202688));
var row_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-renderer","row-renderer",314053346));
var virtual_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52914__$1,new cljs.core.Keyword(null,"virtual?","virtual?",1554264002),true);
var top_left_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"top-left-renderer","top-left-renderer",2010514596));
var column_footer_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"column-footer-renderer","column-footer-renderer",1437275846));
var row_header_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-header-renderer","row-header-renderer",-355094585));
var row_viewport_width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-viewport-width","row-viewport-width",1520708232));
var remove_empty_row_space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52914__$1,new cljs.core.Keyword(null,"remove-empty-row-space?","remove-empty-row-space?",2140501449),true);
var scroll_rows_into_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"scroll-rows-into-view","scroll-rows-into-view",-984076694));
var row_selection_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-selection-fn","row-selection-fn",274335562));
var column_header_selection_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"column-header-selection-fn","column-header-selection-fn",2096757610));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var row_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var top_right_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"top-right-renderer","top-right-renderer",-1691262321));
var row_content_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-content-width","row-content-width",-1986261648));
var column_footer_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"column-footer-height","column-footer-height",-1662618224));
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52914__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null);
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var scroll_columns_into_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"scroll-columns-into-view","scroll-columns-into-view",1543196851));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var row_viewport_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-viewport-height","row-viewport-height",-532496779));
var column_header_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"column-header-renderer","column-header-renderer",-1886265578));
var row_header_selection_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52914__$1,new cljs.core.Keyword(null,"row-header-selection-fn","row-header-selection-fn",1835057464));
var or__5045__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.v_table.v_table_args_desc),args__$1));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
cljs.core.reset_BANG_(content_rows_width,row_content_width);

cljs.core.reset_BANG_(content_rows_height,(cljs.core.deref(m_size) * row_height__$1));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(re_com.util.deref_or_value(scroll_rows_into_view),cljs.core.deref(internal_scroll_rows_into_view))){
var map__52934_53153 = re_com.util.deref_or_value(scroll_rows_into_view);
var map__52934_53154__$1 = cljs.core.__destructure_map(map__52934_53153);
var start_row_53155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52934_53154__$1,new cljs.core.Keyword(null,"start-row","start-row",164678470));
var end_row_53156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52934_53154__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var new_scroll_y_53157 = (((((start_row_53155 == null)) && ((end_row_53156 == null))))?null:(((start_row_53155 <= cljs.core.deref(top_row_index)))?(start_row_53155 * row_height__$1):(((end_row_53156 >= cljs.core.deref(bot_row_index)))?(((end_row_53156 * row_height__$1) + row_height__$1) + (- cljs.core.deref(rl_row_viewport_height))):null
)));
if((!((new_scroll_y_53157 == null)))){
cljs.core.reset_BANG_(scroll_y,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_y);
var y__5134__auto__ = new_scroll_y_53157;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
} else {
}

cljs.core.reset_BANG_(internal_scroll_rows_into_view,re_com.util.deref_or_value(scroll_rows_into_view));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(re_com.util.deref_or_value(scroll_columns_into_view),cljs.core.deref(internal_scroll_columns_into_view))){
var map__52939_53158 = re_com.util.deref_or_value(scroll_columns_into_view);
var map__52939_53159__$1 = cljs.core.__destructure_map(map__52939_53158);
var start_col_53160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52939_53159__$1,new cljs.core.Keyword(null,"start-col","start-col",668080143));
var end_col_53161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52939_53159__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var left_col_px_53162 = cljs.core.deref(scroll_x);
var right_col_px_53164 = ((cljs.core.deref(scroll_x) + cljs.core.deref(rl_row_viewport_width)) + (-1));
var new_scroll_x_53165 = (((start_col_53160 < left_col_px_53162))?start_col_53160:(((end_col_53161 > right_col_px_53164))?(end_col_53161 - cljs.core.deref(rl_row_viewport_width)):null
));
if((!((new_scroll_x_53165 == null)))){
cljs.core.reset_BANG_(scroll_x,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_x);
var y__5134__auto__ = new_scroll_x_53165;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
} else {
}

cljs.core.reset_BANG_(internal_scroll_columns_into_view,re_com.util.deref_or_value(scroll_columns_into_view));
} else {
}

if((cljs.core.deref(scroll_y) > cljs.core.deref(max_scroll_y))){
cljs.core.reset_BANG_(scroll_y,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (function (){var x__5133__auto__ = cljs.core.deref(max_scroll_y);
var y__5134__auto__ = cljs.core.deref(scroll_y);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
} else {
}

return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5045__auto____$2 = debug_as;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(remove_empty_row_space_QMARK_)?((((function (){var or__5045__auto____$2 = column_header_height;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (0);
}
})() + (function (){var or__5045__auto____$2 = max_row_viewport_height__$1;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (cljs.core.deref(content_rows_height) + (1));
}
})()) + (function (){var or__5045__auto____$2 = column_footer_height;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (0);
}
})()) + re_com.v_table.scrollbar_tot_thick):null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-wheel","on-wheel",-1971630708),(function (event){
on_wheel(event);

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1164], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-left-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-section","left-section",1725153983),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-section","left-section",1725153983),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-section","left-section",1725153983),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.top_left_content,top_left_renderer,column_header_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_header_viewport,row_header_renderer,key_fn,cljs.core.deref(top_row_index),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_rows):cljs.core.deref(model)),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_scroll_y):cljs.core.deref(scroll_y)),row_header_selection_fn,selection_fns,(function (){var and__5043__auto__ = row_header_selection_fn;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(sel_parent_bounding_rect);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),new cljs.core.Keyword(null,"row-header","row-header",1799050794));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})(),row_viewport_height__$1,cljs.core.deref(content_rows_height),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-header-selection-rect","row-header-selection-rect",-1802701930),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-header-selection-rect","row-header-selection-rect",-1802701930),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-header-selection-rect","row-header-selection-rect",-1802701930),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-header-content","row-header-content",-594512165),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-header-content","row-header-content",-594512165),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-header-content","row-header-content",-594512165),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.bottom_left_content,bottom_left_renderer,column_footer_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1218], null)),new cljs.core.Keyword(null,"size","size",1098693007),re_com.v_table.px(re_com.v_table.scrollbar_tot_thick)], null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1224], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-middle-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-section","middle-section",-353695846),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),re_com.v_table.px(cljs.core.deref(content_rows_width))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-section","middle-section",-353695846),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-section","middle-section",-353695846),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(row_viewport_width__$1)?"none":"auto"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_header_viewport,column_header_renderer,cljs.core.deref(scroll_x),column_header_selection_fn,selection_fns,(function (){var and__5043__auto__ = column_header_selection_fn;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(sel_parent_bounding_rect);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),new cljs.core.Keyword(null,"column-header","column-header",-1495823888));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})(),row_viewport_width__$1,column_header_height,cljs.core.deref(content_rows_width),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-header-selection-rect","column-header-selection-rect",-790796749),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-header-selection-rect","column-header-selection-rect",-790796749),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-header-selection-rect","column-header-selection-rect",-790796749),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-header-content","column-header-content",-2026517060),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-header-content","column-header-content",-2026517060),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-header-content","column-header-content",-2026517060),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_viewport,row_renderer,key_fn,cljs.core.deref(top_row_index),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_rows):cljs.core.deref(model)),cljs.core.deref(scroll_x),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_scroll_y):cljs.core.deref(scroll_y)),row_selection_fn,selection_fns,(function (){var and__5043__auto__ = row_selection_fn;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(sel_parent_bounding_rect);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selection_target),new cljs.core.Keyword(null,"row","row",-570139521));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})(),row_viewport_height__$1,row_viewport_width__$1,row_viewport_id,cljs.core.deref(content_rows_height),cljs.core.deref(content_rows_width),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-selection-rect","row-selection-rect",-1945553775),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-selection-rect","row-selection-rect",-1945553775),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-selection-rect","row-selection-rect",-1945553775),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-content","row-content",-203238520),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-content","row-content",-203238520),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-content","row-content",-203238520),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.column_footer_viewport,column_footer_renderer,cljs.core.deref(scroll_x),row_viewport_width__$1,column_footer_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-footers","column-footers",-1188771065),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-footers","column-footers",-1188771065),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-footers","column-footers",-1188771065),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-footer-content","column-footer-content",-2077092556),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-footer-content","column-footer-content",-2077092556),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-footer-content","column-footer-content",-2077092556),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.scrollbar,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1304], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-h-scroll ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"length","length",588987862),cljs.core.deref(rl_row_viewport_width),new cljs.core.Keyword(null,"width","width",-384071477),re_com.v_table.scrollbar_thickness,new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.deref(content_rows_width),new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),cljs.core.deref(scroll_x),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_h_scroll_change,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.v_table.scrollbar_margin,(0)], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1319], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-right-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-section","right-section",-1581313735),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-section","right-section",-1581313735),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-section","right-section",-1581313735),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.top_right_content,top_right_renderer,column_header_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.row_footer_viewport,row_footer_renderer,key_fn,cljs.core.deref(top_row_index),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_rows):cljs.core.deref(model)),(cljs.core.truth_(virtual_QMARK___$1)?cljs.core.deref(virtual_scroll_y):cljs.core.deref(scroll_y)),row_viewport_height__$1,cljs.core.deref(content_rows_height),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-footers","row-footers",-681026731),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-footers","row-footers",-681026731),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-footers","row-footers",-681026731),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-footer-content","row-footer-content",1483533894),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-footer-content","row-footer-content",1483533894),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-footer-content","row-footer-content",1483533894),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.bottom_right_content,bottom_right_renderer,column_footer_height,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1366], null)),new cljs.core.Keyword(null,"size","size",1098693007),re_com.v_table.px(re_com.v_table.scrollbar_tot_thick)], null)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1372], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-v-scroll-section ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-scroll-section","v-scroll-section",-72114244),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-scroll-section","v-scroll-section",-72114244),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-scroll-section","v-scroll-section",-72114244),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1377], null)),new cljs.core.Keyword(null,"size","size",1098693007),re_com.v_table.px((function (){var or__5045__auto____$2 = column_header_height;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (0);
}
})())], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1380], null)),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.scrollbar,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1383], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-table-v-scroll ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.Keyword(null,"length","length",588987862),cljs.core.deref(rl_row_viewport_height),new cljs.core.Keyword(null,"width","width",-384071477),re_com.v_table.scrollbar_thickness,new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.deref(content_rows_height),new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),cljs.core.deref(scroll_y),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_v_scroll_change,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),re_com.v_table.scrollbar_margin], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1395], null)),new cljs.core.Keyword(null,"size","size",1098693007),re_com.v_table.px((function (){var or__5045__auto____$2 = column_footer_height;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return (0);
}
})())], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),1398], null)),new cljs.core.Keyword(null,"size","size",1098693007),re_com.v_table.px(re_com.v_table.scrollbar_tot_thick)], null)], null)], null)], null)], null);
}
};
var re_com$v_table$v_table_render = function (var_args){
var p__52913 = null;
if (arguments.length > 0) {
var G__53214__i = 0, G__53214__a = new Array(arguments.length -  0);
while (G__53214__i < G__53214__a.length) {G__53214__a[G__53214__i] = arguments[G__53214__i + 0]; ++G__53214__i;}
  p__52913 = new cljs.core.IndexedSeq(G__53214__a,0,null);
} 
return re_com$v_table$v_table_render__delegate.call(this,p__52913);};
re_com$v_table$v_table_render.cljs$lang$maxFixedArity = 0;
re_com$v_table$v_table_render.cljs$lang$applyTo = (function (arglist__53215){
var p__52913 = cljs.core.seq(arglist__53215);
return re_com$v_table$v_table_render__delegate(p__52913);
});
re_com$v_table$v_table_render.cljs$core$IFn$_invoke$arity$variadic = re_com$v_table$v_table_render__delegate;
return re_com$v_table$v_table_render;
})()
], null));
}
}
}));

(re_com.v_table.v_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.v_table.v_table.cljs$lang$applyTo = (function (seq52746){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52746));
}));


//# sourceMappingURL=re_com.v_table.js.map
