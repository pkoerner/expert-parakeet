goog.provide('rewrite_clj.parser');
/**
 * Parse next form from the given reader.
 */
rewrite_clj.parser.parse = (function rewrite_clj$parser$parse(reader){
return rewrite_clj.parser.core.parse_next(reader);
});
/**
 * Parse all forms from the given reader.
 */
rewrite_clj.parser.parse_all = (function rewrite_clj$parser$parse_all(reader){
var nodes = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return rewrite_clj.parser.parse(reader);
}))));
return cljs.core.with_meta(rewrite_clj.node.forms.forms_node(nodes),cljs.core.meta(cljs.core.first(nodes)));
});
/**
 * Return a node for first source code element in string `s`.
 */
rewrite_clj.parser.parse_string = (function rewrite_clj$parser$parse_string(s){
return rewrite_clj.parser.parse(rewrite_clj.reader.string_reader(s));
});
/**
 * Return forms node for all source code elements in string `s`.
 */
rewrite_clj.parser.parse_string_all = (function rewrite_clj$parser$parse_string_all(s){
return rewrite_clj.parser.parse_all(rewrite_clj.reader.string_reader(s));
});

//# sourceMappingURL=rewrite_clj.parser.js.map
