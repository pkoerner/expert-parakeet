goog.provide('re_com.simple_v_table');
re_com.simple_v_table.swap_BANG__sort_by_column = (function re_com$simple_v_table$swap_BANG__sort_by_column(p__53041,new_key_fn,new_comp){
var map__53044 = p__53041;
var map__53044__$1 = cljs.core.__destructure_map(map__53044);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_fn,new_key_fn)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asc","asc",356854569),order)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"comp","comp",1191953630),new_comp,new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new_key_fn,new cljs.core.Keyword(null,"comp","comp",1191953630),new_comp,new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null);
}
});
re_com.simple_v_table.sort_icon = (function re_com$simple_v_table$sort_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"], null)], null)], null);
});
re_com.simple_v_table.arrow_down_icon = (function re_com$simple_v_table$arrow_down_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M7 10l5 5 5-5H7z"], null)], null)], null);
});
re_com.simple_v_table.arrow_up_icon = (function re_com$simple_v_table$arrow_up_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"width","width",-384071477),"24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M7 14l5-5 5 5H7z"], null)], null)], null);
});
re_com.simple_v_table.column_header_item = (function re_com$simple_v_table$column_header_item(p__53067,parts,sort_by_column){
var map__53068 = p__53067;
var map__53068__$1 = cljs.core.__destructure_map(map__53068);
var column = map__53068__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var row_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"row-label-fn","row-label-fn",1457434308));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var vertical_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333));
var header_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"header-label","header-label",765876429));
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53068__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var map__53071 = sort_by;
var map__53071__$1 = cljs.core.__destructure_map(map__53071);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53071__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),row_label_fn);
var comp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53071__$1,new cljs.core.Keyword(null,"comp","comp",1191953630),cljs.core.compare);
var map__53072 = cljs.core.deref(sort_by_column);
var map__53072__$1 = cljs.core.__destructure_map(map__53072);
var current_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53072__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53072__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var on_click = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sort_by_column,re_com.simple_v_table.swap_BANG__sort_by_column,key_fn,comp);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-simple-v-table-column-header-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-column-header-item","simple-column-header-item",-1259129102),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622)],["ellipsis",align,vertical_align,"24px","nowrap","bold","hidden",re_com.util.px((cljs.core.truth_(sort_by)?(width - (24)):width)),"0px 12px","inline-block",re_com.util.px(height)]),(cljs.core.truth_(sort_by)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-column-header-item","simple-column-header-item",-1259129102),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], null),(cljs.core.truth_(sort_by)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-column-header-item","simple-column-header-item",-1259129102),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),header_label], null),(cljs.core.truth_(sort_by)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),"24px",new cljs.core.Keyword(null,"height","height",1025178622),"24px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),align,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),vertical_align], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_key_fn,key_fn))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.sort_icon], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"desc","desc",2093485764)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.arrow_down_icon], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.arrow_up_icon], null)))], null):null)], null);
});
/**
 * :column-header-renderer AND :top-left-renderer - Render the table header
 */
re_com.simple_v_table.column_header_renderer = (function re_com$simple_v_table$column_header_renderer(columns,parts,sort_by_column){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-simple-v-table-column-header noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-column-header","simple-column-header",-1241463404),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-column-header","simple-column-header",-1241463404),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
re_com.v_table.show_row_data_on_alt_click(columns,(0),event);

return null;
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-column-header","simple-column-header",-1241463404),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0))], null),(function (){var iter__5523__auto__ = (function re_com$simple_v_table$column_header_renderer_$_iter__53083(s__53084){
return (new cljs.core.LazySeq(null,(function (){
var s__53084__$1 = s__53084;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53084__$1);
if(temp__5804__auto__){
var s__53084__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53084__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53084__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53086 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53085 = (0);
while(true){
if((i__53085 < size__5522__auto__)){
var column = cljs.core._nth(c__5521__auto__,i__53085);
cljs.core.chunk_append(b__53086,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.column_header_item,column,parts,sort_by_column], null));

var G__53213 = (i__53085 + (1));
i__53085 = G__53213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53086),re_com$simple_v_table$column_header_renderer_$_iter__53083(cljs.core.chunk_rest(s__53084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53086),null);
}
} else {
var column = cljs.core.first(s__53084__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.column_header_item,column,parts,sort_by_column], null),re_com$simple_v_table$column_header_renderer_$_iter__53083(cljs.core.rest(s__53084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(columns);
})());
});
/**
 * Render a single row item (column) of a single row
 */
re_com.simple_v_table.row_item = (function re_com$simple_v_table$row_item(row,p__53088,cell_style,parts){
var map__53089 = p__53088;
var map__53089__$1 = cljs.core.__destructure_map(map__53089);
var column = map__53089__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53089__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53089__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53089__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var vertical_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53089__$1,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333));
var row_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53089__$1,new cljs.core.Keyword(null,"row-label-fn","row-label-fn",1457434308));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-simple-v-table-row-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-row-item","simple-row-item",1270085292),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622)],["ellipsis",align,vertical_align,"nowrap","hidden",re_com.util.px(width),["0px ","12px"].join(''),"inline-block",re_com.util.px(height)]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-row-item","simple-row-item",1270085292),new cljs.core.Keyword(null,"style","style",-496642736)], null)),((cljs.core.fn_QMARK_(cell_style))?(cell_style.cljs$core$IFn$_invoke$arity$2 ? cell_style.cljs$core$IFn$_invoke$arity$2(row,column) : cell_style.call(null,row,column)):cell_style)], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-row-item","simple-row-item",1270085292),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),(row_label_fn.cljs$core$IFn$_invoke$arity$1 ? row_label_fn.cljs$core$IFn$_invoke$arity$1(row) : row_label_fn.call(null,row))], null);
});
/**
 * :row-renderer AND :row-header-renderer: Render a single row of the table data
 */
re_com.simple_v_table.row_renderer = (function re_com$simple_v_table$row_renderer(columns,on_click_row,on_enter_row,on_leave_row,row_height,row_style,cell_style,parts,table_row_line_color,row_index,row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-simple-v-table-row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-row","simple-row",-252554766),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px(row_height),new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_row_line_color)].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(on_click_row)?"pointer":null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-row","simple-row",-252554766),new cljs.core.Keyword(null,"style","style",-496642736)], null)),((cljs.core.fn_QMARK_(row_style))?(row_style.cljs$core$IFn$_invoke$arity$1 ? row_style.cljs$core$IFn$_invoke$arity$1(row) : row_style.call(null,row)):row_style)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
re_com.v_table.show_row_data_on_alt_click(row,row_index,event);

if(cljs.core.truth_(on_click_row)){
(on_click_row.cljs$core$IFn$_invoke$arity$1 ? on_click_row.cljs$core$IFn$_invoke$arity$1(row_index) : on_click_row.call(null,row_index));
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(cljs.core.truth_(on_enter_row)?(function (event){
(on_enter_row.cljs$core$IFn$_invoke$arity$1 ? on_enter_row.cljs$core$IFn$_invoke$arity$1(row_index) : on_enter_row.call(null,row_index));

return null;
}):null),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(cljs.core.truth_(on_leave_row)?(function (event){
(on_leave_row.cljs$core$IFn$_invoke$arity$1 ? on_leave_row.cljs$core$IFn$_invoke$arity$1(row_index) : on_leave_row.call(null,row_index));

return null;
}):null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-row","simple-row",-252554766),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0))], null),(function (){var iter__5523__auto__ = (function re_com$simple_v_table$row_renderer_$_iter__53093(s__53094){
return (new cljs.core.LazySeq(null,(function (){
var s__53094__$1 = s__53094;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53094__$1);
if(temp__5804__auto__){
var s__53094__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53094__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53094__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53096 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53095 = (0);
while(true){
if((i__53095 < size__5522__auto__)){
var column = cljs.core._nth(c__5521__auto__,i__53095);
cljs.core.chunk_append(b__53096,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.row_item,row,column,cell_style,parts], null));

var G__53229 = (i__53095 + (1));
i__53095 = G__53229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53096),re_com$simple_v_table$row_renderer_$_iter__53093(cljs.core.chunk_rest(s__53094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53096),null);
}
} else {
var column = cljs.core.first(s__53094__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.simple_v_table.row_item,row,column,cell_style,parts], null),re_com$simple_v_table$row_renderer_$_iter__53093(cljs.core.rest(s__53094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(columns);
})());
});
re_com.simple_v_table.simple_v_table_exclusive_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"simple-wrapper","simple-wrapper",-507652041),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-simple-v-table-wrapper",new cljs.core.Keyword(null,"impl","impl",1677848700),"[simple-v-table]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer container of the simple-v-table"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"simple-column-header","simple-column-header",-1241463404),new cljs.core.Keyword(null,"level","level",1290497552),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-simple-v-table-column-header",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Simple-v-table's container for column headers (placed under v-table's :column-header-content/:top-left)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"simple-column-header-item","simple-column-header-item",-1259129102),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-simple-v-table-column-header-item",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Individual column header item/cell components"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"simple-row","simple-row",-252554766),new cljs.core.Keyword(null,"level","level",1290497552),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-simple-v-table-row",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Simple-v-table's container for rows (placed under v-table's :row-content/:row-header-content)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"simple-row-item","simple-row-item",1270085292),new cljs.core.Keyword(null,"level","level",1290497552),(6),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-simple-v-table-row-item",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Individual row item/cell components"], null)], null):null);
re_com.simple_v_table.simple_v_table_exclusive_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.simple_v_table.simple_v_table_exclusive_parts_desc)):null);
re_com.simple_v_table.simple_v_table_parts_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.simple_v_table.simple_v_table_exclusive_parts_desc,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53099_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__53099_SHARP_,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc);
}),re_com.v_table.v_table_parts_desc)):null);
re_com.simple_v_table.simple_v_table_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.simple_v_table.simple_v_table_parts_desc)):null);
re_com.simple_v_table.simple_v_table_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"r/atom containing vec of maps",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element for each row in the table."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one element for each column in the table. Must contain ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null),",",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":header-label"], null),",",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-label-fn"], null),",",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":width"], null),", and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":height"], null),". Optionally contains ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":sort-by"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":align"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":vertical-align"], null),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":sort-by"], null)," can be ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null)," or a map optionally containing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":key-fn"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":comp"], null)," ala ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"cljs.core/sort-by"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fixed-column-count","fixed-column-count",721535030),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the number of fixed (non-scrolling) columns on the left."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fixed-column-border-color","fixed-column-border-color",2036669142),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"#BBBEC0",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The CSS color of the horizontal border between the fixed columns on the left, and the other columns on the right. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":fixed-column-count"], null)," must be > 0 to be visible."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(31),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px height of the column header section. Typically, equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-height"], null)," * number-of-column-header-rows."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-renderer","column-header-renderer",-1886265578),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"cols parts sort-by-col -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"You can provide a renderer function to override the inbuilt renderer for the columns headings"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS max-width setting of the entire table. Literally constrains the table to the given width so that if the table is wider than this it will add scrollbars. Ignored if value is larger than the combined width of all the columns and table padding."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"The maximum number of rows to display in the table without scrolling. If not provided will take up all available vertical space."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(31),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px height of each row."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table-padding","table-padding",-702873839),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(19),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Padding in pixels for the entire table."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table-row-line-color","table-row-line-color",680569135),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"#EAEEF1",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"The CSS color of the lines between rows."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"This function is called when the user clicks a row. Called with the row index. Do not use for adjusting row styles, use styling instead."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-enter-row","on-enter-row",-139996948),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"This function is called when the user's mouse pointer enters a row. Called with the row index. Do not use for adjusting row styles, use styling instead."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-leave-row","on-leave-row",1361264390),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"This function is called when the user's mouse pointer leaves a row. Called with the row index. Do not use for adjusting row styles, use styling instead."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-style","row-style",1352472052),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map | function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__53101_SHARP_){
return ((cljs.core.fn_QMARK_(p1__53101_SHARP_)) || (cljs.core.map_QMARK_(p1__53101_SHARP_)));
}),new cljs.core.Keyword(null,"description","description",-1428560544),"Style each row container either statically by passing a CSS map or dynamically by passing a function which receives the data for that row."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map | function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__53102_SHARP_){
return ((cljs.core.fn_QMARK_(p1__53102_SHARP_)) || (cljs.core.map_QMARK_(p1__53102_SHARP_)));
}),new cljs.core.Keyword(null,"description","description",-1428560544),"Style each cell in a row either statically by passing a CSS map or dynamically by passing a function which receives the data for that row and the cell definition from the columns arg."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.simple_v_table.simple_v_table_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Render a v-table and introduce the concept of columns (provide a spec for each).
 *   Of the nine possible sections of v-table, this table only supports four:
 *   top-left (1), row-headers (2), col-headers (4) and rows (5)
 *   Note that row-style and cell-style can either be a style map or functions which return a style map:
 * - (row-style row)
 * - (cell-style row col)
 *   where row is the data for that row and col is the definition map for that column
 *   
 */
re_com.simple_v_table.simple_v_table = (function re_com$simple_v_table$simple_v_table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53243 = arguments.length;
var i__5770__auto___53244 = (0);
while(true){
if((i__5770__auto___53244 < len__5769__auto___53243)){
args__5775__auto__.push((arguments[i__5770__auto___53244]));

var G__53245 = (i__5770__auto___53244 + (1));
i__5770__auto___53244 = G__53245;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.simple_v_table.simple_v_table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.simple_v_table.simple_v_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__53112){
var map__53113 = p__53112;
var map__53113__$1 = cljs.core.__destructure_map(map__53113);
var args = map__53113__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53113__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.simple_v_table.simple_v_table_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var sort_by_column = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var re_com$simple_v_table$simple_v_table_render__delegate = function (p__53116){
var map__53118 = p__53116;
var map__53118__$1 = cljs.core.__destructure_map(map__53118);
var args__$1 = map__53118__$1;
var cell_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"cell-style","cell-style",1087536089));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_leave_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"on-leave-row","on-leave-row",1361264390));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var on_enter_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"on-enter-row","on-enter-row",-139996948));
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749),(31));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var on_click_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673));
var table_row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"table-row-line-color","table-row-line-color",680569135),"#EAEEF1");
var table_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"table-padding","table-padding",-702873839),(19));
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),(31));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var row_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"row-style","row-style",1352472052));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var fixed_column_border_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"fixed-column-border-color","fixed-column-border-color",2036669142),"#BBBEC0");
var column_header_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"column-header-renderer","column-header-renderer",-1886265578),re_com.simple_v_table.column_header_renderer);
var fixed_column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53118__$1,new cljs.core.Keyword(null,"fixed-column-count","fixed-column-count",721535030),(0));
var or__5045__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.simple_v_table.simple_v_table_args_desc),args__$1));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var fcc_bounded = (function (){var x__5133__auto__ = fixed_column_count;
var y__5134__auto__ = cljs.core.count(columns);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var fixed_cols = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(columns,(0),fcc_bounded);
var content_cols = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(columns,fcc_bounded,cljs.core.count(columns));
var fixed_content_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),fixed_cols));
var content_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),content_cols));
var table_border_style = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table_row_line_color)].join('');
var fixed_col_border_style = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_column_border_color)].join('');
var actual_table_width = (((((fixed_content_width + (((fixed_column_count > (0)))?(1):null)) + content_width) + re_com.v_table.scrollbar_tot_thick) + ((2) * table_padding)) + (2));
var internal_model = reagent.core.track((function (){
var temp__5802__auto__ = cljs.core.deref(sort_by_column);
if(cljs.core.truth_(temp__5802__auto__)){
var map__53139 = temp__5802__auto__;
var map__53139__$1 = cljs.core.__destructure_map(map__53139);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53139__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var comp = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53139__$1,new cljs.core.Keyword(null,"comp","comp",1191953630),cljs.core.compare);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53139__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(key_fn,comp,re_com.util.deref_or_value(model));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"desc","desc",2093485764))){
return cljs.core.vec(cljs.core.reverse(sorted));
} else {
return cljs.core.vec(sorted);
}
} else {
return re_com.util.deref_or_value(model);
}
}));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5045__auto____$2 = debug_as;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-simple-v-table-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-wrapper","simple-wrapper",-507652041),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(cljs.core.truth_(max_rows)?"0 1 auto":"100%"),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),re_com.util.px(table_padding),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(function (){var or__5045__auto____$2 = max_width;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return re_com.util.px(actual_table_width);
}
})(),new cljs.core.Keyword(null,"border","border",1444987323),table_border_style,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-wrapper","simple-wrapper",-507652041),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple-wrapper","simple-wrapper",-507652041),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.v_table.v_table,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/simple_v_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),271], null)),new cljs.core.Keyword(null,"model","model",331153215),internal_model,new cljs.core.Keyword(null,"column-header-renderer","column-header-renderer",-1886265578),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(column_header_renderer,content_cols,parts,sort_by_column),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),column_header_height,new cljs.core.Keyword(null,"row-header-renderer","row-header-renderer",-355094585),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.simple_v_table.row_renderer,fixed_cols,on_click_row,on_enter_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_leave_row,row_height,row_style,cell_style,parts,table_row_line_color], 0)),new cljs.core.Keyword(null,"row-renderer","row-renderer",314053346),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.simple_v_table.row_renderer,content_cols,on_click_row,on_enter_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([on_leave_row,row_height,row_style,cell_style,parts,table_row_line_color], 0)),new cljs.core.Keyword(null,"row-content-width","row-content-width",-1986261648),content_width,new cljs.core.Keyword(null,"row-height","row-height",527360749),row_height,new cljs.core.Keyword(null,"max-row-viewport-height","max-row-viewport-height",2061202688),(cljs.core.truth_(max_rows)?(max_rows * row_height):null),new cljs.core.Keyword(null,"top-left-renderer","top-left-renderer",2010514596),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(column_header_renderer,fixed_cols,parts,sort_by_column),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"parts","parts",849007691),(function (){var G__53152 = re_com.util.assoc_in_if_empty(re_com.util.assoc_in_if_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parts], null),re_com.simple_v_table.simple_v_table_exclusive_parts)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null),"13px"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null),"default");
if((fixed_column_count > (0))){
return re_com.util.assoc_in_if_empty(re_com.util.assoc_in_if_empty(G__53152,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-right","border-right",-668932860)], null),fixed_col_border_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border-right","border-right",-668932860)], null),fixed_col_border_style);
} else {
return G__53152;
}
})()], null)], null);
}
};
var re_com$simple_v_table$simple_v_table_render = function (var_args){
var p__53116 = null;
if (arguments.length > 0) {
var G__53263__i = 0, G__53263__a = new Array(arguments.length -  0);
while (G__53263__i < G__53263__a.length) {G__53263__a[G__53263__i] = arguments[G__53263__i + 0]; ++G__53263__i;}
  p__53116 = new cljs.core.IndexedSeq(G__53263__a,0,null);
} 
return re_com$simple_v_table$simple_v_table_render__delegate.call(this,p__53116);};
re_com$simple_v_table$simple_v_table_render.cljs$lang$maxFixedArity = 0;
re_com$simple_v_table$simple_v_table_render.cljs$lang$applyTo = (function (arglist__53264){
var p__53116 = cljs.core.seq(arglist__53264);
return re_com$simple_v_table$simple_v_table_render__delegate(p__53116);
});
re_com$simple_v_table$simple_v_table_render.cljs$core$IFn$_invoke$arity$variadic = re_com$simple_v_table$simple_v_table_render__delegate;
return re_com$simple_v_table$simple_v_table_render;
})()
;
}
}));

(re_com.simple_v_table.simple_v_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.simple_v_table.simple_v_table.cljs$lang$applyTo = (function (seq53103){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53103));
}));


//# sourceMappingURL=re_com.simple_v_table.js.map
