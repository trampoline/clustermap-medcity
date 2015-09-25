// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_table.render_table = (function render_table(p__28704,owner,opts){var map__28823 = p__28704;var map__28823__$1 = ((cljs.core.seq_QMARK_.call(null,map__28823))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);var map__28824 = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28824__$1 = ((cljs.core.seq_QMARK_.call(null,map__28824))?cljs.core.apply.call(null,cljs.core.hash_map,map__28824):map__28824);var table_data = map__28824__$1;var query = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28824__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28825 = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28825__$1 = ((cljs.core.seq_QMARK_.call(null,map__28825))?cljs.core.apply.call(null,cljs.core.hash_map,map__28825):map__28825);var controls = map__28825__$1;var title = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28826 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28826))?sablono.interpreter.attributes.call(null,attrs28826):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28826))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28827 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28827))?sablono.interpreter.attributes.call(null,attrs28827):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28827))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28827)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function iter__28829(s__28830){return (new cljs.core.LazySeq(null,((function (attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28830__$1 = s__28830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28830__$1);if(temp__4126__auto__)
{var s__28830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28830__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28830__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28832 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28831 = (0);while(true){
if((i__28831 < size__4376__auto__))
{var vec__28859 = cljs.core._nth.call(null,c__4375__auto__,i__28831);var row_i = cljs.core.nth.call(null,vec__28859,(0),null);var row = cljs.core.nth.call(null,vec__28859,(1),null);cljs.core.chunk_append.call(null,b__28832,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28831,vec__28859,row_i,row,c__4375__auto__,size__4376__auto__,b__28832,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function iter__28860(s__28861){return (new cljs.core.LazySeq(null,((function (i__28831,vec__28859,row_i,row,c__4375__auto__,size__4376__auto__,b__28832,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28861__$1 = s__28861;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28861__$1);if(temp__4126__auto____$1)
{var s__28861__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28861__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28861__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28863 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28862 = (0);while(true){
if((i__28862 < size__4376__auto____$1))
{var vec__28868 = cljs.core._nth.call(null,c__4375__auto____$1,i__28862);var col_i = cljs.core.nth.call(null,vec__28868,(0),null);var col = cljs.core.nth.call(null,vec__28868,(1),null);cljs.core.chunk_append.call(null,b__28863,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28869__$1 = (((G__28869 == null))?null:cljs.core.get.call(null,rowcol,G__28869));var G__28869__$2 = (((G__28869__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28869__$1));var G__28869__$3 = (((G__28869__$2 == null))?null:render_fn__$1.call(null,G__28869__$2));return G__28869__$3;
})():null)], null)));
{
var G__28941 = (i__28862 + (1));
i__28862 = G__28941;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28863),iter__28860.call(null,cljs.core.chunk_rest.call(null,s__28861__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28863),null);
}
} else
{var vec__28870 = cljs.core.first.call(null,s__28861__$2);var col_i = cljs.core.nth.call(null,vec__28870,(0),null);var col = cljs.core.nth.call(null,vec__28870,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28871__$1 = (((G__28871 == null))?null:cljs.core.get.call(null,rowcol,G__28871));var G__28871__$2 = (((G__28871__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28871__$1));var G__28871__$3 = (((G__28871__$2 == null))?null:render_fn__$1.call(null,G__28871__$2));return G__28871__$3;
})():null)], null)),iter__28860.call(null,cljs.core.rest.call(null,s__28861__$2)));
}
} else
{return null;
}
break;
}
});})(i__28831,vec__28859,row_i,row,c__4375__auto__,size__4376__auto__,b__28832,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28831,vec__28859,row_i,row,c__4375__auto__,size__4376__auto__,b__28832,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28942 = (i__28831 + (1));
i__28831 = G__28942;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28832),iter__28829.call(null,cljs.core.chunk_rest.call(null,s__28830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28832),null);
}
} else
{var vec__28872 = cljs.core.first.call(null,s__28830__$2);var row_i = cljs.core.nth.call(null,vec__28872,(0),null);var row = cljs.core.nth.call(null,vec__28872,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28872,row_i,row,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function iter__28873(s__28874){return (new cljs.core.LazySeq(null,((function (vec__28872,row_i,row,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28874__$1 = s__28874;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28874__$1);if(temp__4126__auto____$1)
{var s__28874__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28874__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28874__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28876 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28875 = (0);while(true){
if((i__28875 < size__4376__auto__))
{var vec__28881 = cljs.core._nth.call(null,c__4375__auto__,i__28875);var col_i = cljs.core.nth.call(null,vec__28881,(0),null);var col = cljs.core.nth.call(null,vec__28881,(1),null);cljs.core.chunk_append.call(null,b__28876,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28882__$1 = (((G__28882 == null))?null:cljs.core.get.call(null,rowcol,G__28882));var G__28882__$2 = (((G__28882__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28882__$1));var G__28882__$3 = (((G__28882__$2 == null))?null:render_fn__$1.call(null,G__28882__$2));return G__28882__$3;
})():null)], null)));
{
var G__28943 = (i__28875 + (1));
i__28875 = G__28943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28876),iter__28873.call(null,cljs.core.chunk_rest.call(null,s__28874__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28876),null);
}
} else
{var vec__28883 = cljs.core.first.call(null,s__28874__$2);var col_i = cljs.core.nth.call(null,vec__28883,(0),null);var col = cljs.core.nth.call(null,vec__28883,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28884__$1 = (((G__28884 == null))?null:cljs.core.get.call(null,rowcol,G__28884));var G__28884__$2 = (((G__28884__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28884__$1));var G__28884__$3 = (((G__28884__$2 == null))?null:render_fn__$1.call(null,G__28884__$2));return G__28884__$3;
})():null)], null)),iter__28873.call(null,cljs.core.rest.call(null,s__28874__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28872,row_i,row,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28872,row_i,row,s__28830__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28829.call(null,cljs.core.rest.call(null,s__28830__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28826),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28828 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28828))?sablono.interpreter.attributes.call(null,attrs28828):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28828))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28828)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function iter__28885(s__28886){return (new cljs.core.LazySeq(null,((function (attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28886__$1 = s__28886;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28886__$1);if(temp__4126__auto__)
{var s__28886__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28886__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28886__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28888 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28887 = (0);while(true){
if((i__28887 < size__4376__auto__))
{var vec__28915 = cljs.core._nth.call(null,c__4375__auto__,i__28887);var row_i = cljs.core.nth.call(null,vec__28915,(0),null);var row = cljs.core.nth.call(null,vec__28915,(1),null);cljs.core.chunk_append.call(null,b__28888,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28887,vec__28915,row_i,row,c__4375__auto__,size__4376__auto__,b__28888,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function iter__28916(s__28917){return (new cljs.core.LazySeq(null,((function (i__28887,vec__28915,row_i,row,c__4375__auto__,size__4376__auto__,b__28888,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28917__$1 = s__28917;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28917__$1);if(temp__4126__auto____$1)
{var s__28917__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28917__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28917__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28919 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28918 = (0);while(true){
if((i__28918 < size__4376__auto____$1))
{var vec__28924 = cljs.core._nth.call(null,c__4375__auto____$1,i__28918);var col_i = cljs.core.nth.call(null,vec__28924,(0),null);var col = cljs.core.nth.call(null,vec__28924,(1),null);cljs.core.chunk_append.call(null,b__28919,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28925__$1 = (((G__28925 == null))?null:cljs.core.get.call(null,rowcol,G__28925));var G__28925__$2 = (((G__28925__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28925__$1));var G__28925__$3 = (((G__28925__$2 == null))?null:render_fn__$1.call(null,G__28925__$2));return G__28925__$3;
})():null)], null)));
{
var G__28944 = (i__28918 + (1));
i__28918 = G__28944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28919),iter__28916.call(null,cljs.core.chunk_rest.call(null,s__28917__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28919),null);
}
} else
{var vec__28926 = cljs.core.first.call(null,s__28917__$2);var col_i = cljs.core.nth.call(null,vec__28926,(0),null);var col = cljs.core.nth.call(null,vec__28926,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28927__$1 = (((G__28927 == null))?null:cljs.core.get.call(null,rowcol,G__28927));var G__28927__$2 = (((G__28927__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28927__$1));var G__28927__$3 = (((G__28927__$2 == null))?null:render_fn__$1.call(null,G__28927__$2));return G__28927__$3;
})():null)], null)),iter__28916.call(null,cljs.core.rest.call(null,s__28917__$2)));
}
} else
{return null;
}
break;
}
});})(i__28887,vec__28915,row_i,row,c__4375__auto__,size__4376__auto__,b__28888,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28887,vec__28915,row_i,row,c__4375__auto__,size__4376__auto__,b__28888,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28945 = (i__28887 + (1));
i__28887 = G__28945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28888),iter__28885.call(null,cljs.core.chunk_rest.call(null,s__28886__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28888),null);
}
} else
{var vec__28928 = cljs.core.first.call(null,s__28886__$2);var row_i = cljs.core.nth.call(null,vec__28928,(0),null);var row = cljs.core.nth.call(null,vec__28928,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28928,row_i,row,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function iter__28929(s__28930){return (new cljs.core.LazySeq(null,((function (vec__28928,row_i,row,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28930__$1 = s__28930;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28930__$1);if(temp__4126__auto____$1)
{var s__28930__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28930__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28930__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28932 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28931 = (0);while(true){
if((i__28931 < size__4376__auto__))
{var vec__28937 = cljs.core._nth.call(null,c__4375__auto__,i__28931);var col_i = cljs.core.nth.call(null,vec__28937,(0),null);var col = cljs.core.nth.call(null,vec__28937,(1),null);cljs.core.chunk_append.call(null,b__28932,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28938__$1 = (((G__28938 == null))?null:cljs.core.get.call(null,rowcol,G__28938));var G__28938__$2 = (((G__28938__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28938__$1));var G__28938__$3 = (((G__28938__$2 == null))?null:render_fn__$1.call(null,G__28938__$2));return G__28938__$3;
})():null)], null)));
{
var G__28946 = (i__28931 + (1));
i__28931 = G__28946;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28932),iter__28929.call(null,cljs.core.chunk_rest.call(null,s__28930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28932),null);
}
} else
{var vec__28939 = cljs.core.first.call(null,s__28930__$2);var col_i = cljs.core.nth.call(null,vec__28939,(0),null);var col = cljs.core.nth.call(null,vec__28939,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28940__$1 = (((G__28940 == null))?null:cljs.core.get.call(null,rowcol,G__28940));var G__28940__$2 = (((G__28940__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28940__$1));var G__28940__$3 = (((G__28940__$2 == null))?null:render_fn__$1.call(null,G__28940__$2));return G__28940__$3;
})():null)], null)),iter__28929.call(null,cljs.core.rest.call(null,s__28930__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28928,row_i,row,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28928,row_i,row,s__28886__$2,temp__4126__auto__,attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28885.call(null,cljs.core.rest.call(null,s__28886__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28826,rowcol,render_fn__$1,map__28823,map__28823__$1,map__28824,map__28824__$1,table_data,query,results,map__28825,map__28825__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28947,owner){var map__28992 = p__28947;var map__28992__$1 = ((cljs.core.seq_QMARK_.call(null,map__28992))?cljs.core.apply.call(null,cljs.core.hash_map,map__28992):map__28992);var props = map__28992__$1;var map__28993 = cljs.core.get.call(null,map__28992__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28993__$1 = ((cljs.core.seq_QMARK_.call(null,map__28993))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);var table_state = map__28993__$1;var table_data = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28994 = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28994__$1 = ((cljs.core.seq_QMARK_.call(null,map__28994))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);var controls = map__28994__$1;var index_type = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28992__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28995 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28995 = (function (index_type,map__28994,row_aggs,owner,metric_path,props,map__28992,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__28993,table_state,controls,col_aggs,p__28947,title,rows,cols,meta28996){
this.index_type = index_type;
this.map__28994 = map__28994;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__28992 = map__28992;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.map__28993 = map__28993;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.p__28947 = p__28947;
this.title = title;
this.rows = rows;
this.cols = cols;
this.meta28996 = meta28996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28995.cljs$lang$type = true;
clustermap.components.ranges_table.t28995.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28995";
clustermap.components.ranges_table.t28995.cljs$lang$ctorPrWriter = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28995");
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28995.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28995.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28998,p__28999){var self__ = this;
var map__29000 = p__28998;var map__29000__$1 = ((cljs.core.seq_QMARK_.call(null,map__29000))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);var next_props = map__29000__$1;var map__29001 = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__29001__$1 = ((cljs.core.seq_QMARK_.call(null,map__29001))?cljs.core.apply.call(null,cljs.core.hash_map,map__29001):map__29001);var next_table_state = map__29001__$1;var next_table_data = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__29002 = cljs.core.get.call(null,map__29001__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29002__$1 = ((cljs.core.seq_QMARK_.call(null,map__29002))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);var next_controls = map__29002__$1;var next_col_aggs = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29003 = p__28999;var map__29003__$1 = ((cljs.core.seq_QMARK_.call(null,map__29003))?cljs.core.apply.call(null,cljs.core.hash_map,map__29003):map__29003);var fetch_data_fn = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29000,map__29000__$1,next_props,map__29001,map__29001__$1,next_table_state,next_table_data,map__29002,map__29002__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__29003,map__29003__$1,fetch_data_fn,map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29000,map__29000__$1,next_props,map__29001,map__29001__$1,next_table_state,next_table_data,map__29002,map__29002__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__29003,map__29003__$1,fetch_data_fn,map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_29021){var state_val_29022 = (state_29021[(1)]);if((state_val_29022 === (5)))
{var inst_29019 = (state_29021[(2)]);var state_29021__$1 = state_29021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29021__$1,inst_29019);
} else
{if((state_val_29022 === (4)))
{var state_29021__$1 = state_29021;var statearr_29023_29036 = state_29021__$1;(statearr_29023_29036[(2)] = null);
(statearr_29023_29036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29022 === (3)))
{var inst_29006 = (state_29021[(7)]);var inst_29008 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29009 = ["RANGES-TABLE-DATA",inst_29006];var inst_29010 = (new cljs.core.PersistentVector(null,2,(5),inst_29008,inst_29009,null));var inst_29011 = cljs.core.clj__GT_js.call(null,inst_29010);var inst_29012 = console.log(inst_29011);var inst_29013 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29014 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_29015 = (new cljs.core.PersistentVector(null,1,(5),inst_29013,inst_29014,null));var inst_29016 = om.core.update_BANG_.call(null,self__.table_state,inst_29015,inst_29006);var state_29021__$1 = (function (){var statearr_29024 = state_29021;(statearr_29024[(8)] = inst_29012);
return statearr_29024;
})();var statearr_29025_29037 = state_29021__$1;(statearr_29025_29037[(2)] = inst_29016);
(statearr_29025_29037[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29022 === (2)))
{var inst_29006 = (state_29021[(7)]);var inst_29006__$1 = (state_29021[(2)]);var state_29021__$1 = (function (){var statearr_29026 = state_29021;(statearr_29026[(7)] = inst_29006__$1);
return statearr_29026;
})();if(cljs.core.truth_(inst_29006__$1))
{var statearr_29027_29038 = state_29021__$1;(statearr_29027_29038[(1)] = (3));
} else
{var statearr_29028_29039 = state_29021__$1;(statearr_29028_29039[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29022 === (1)))
{var inst_29004 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_29021__$1 = state_29021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29021__$1,(2),inst_29004);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29000,map__29000__$1,next_props,map__29001,map__29001__$1,next_table_state,next_table_data,map__29002,map__29002__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__29003,map__29003__$1,fetch_data_fn,map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29000,map__29000__$1,next_props,map__29001,map__29001__$1,next_table_state,next_table_data,map__29002,map__29002__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__29003,map__29003__$1,fetch_data_fn,map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29032 = [null,null,null,null,null,null,null,null,null];(statearr_29032[(0)] = state_machine__9111__auto__);
(statearr_29032[(1)] = (1));
return statearr_29032;
});
var state_machine__9111__auto____1 = (function (state_29021){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29021);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29033){if((e29033 instanceof Object))
{var ex__9114__auto__ = e29033;var statearr_29034_29040 = state_29021;(statearr_29034_29040[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29041 = state_29021;
state_29021 = G__29041;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29021){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29000,map__29000__$1,next_props,map__29001,map__29001__$1,next_table_state,next_table_data,map__29002,map__29002__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__29003,map__29003__$1,fetch_data_fn,map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_29035 = f__9126__auto__.call(null);(statearr_29035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29000,map__29000__$1,next_props,map__29001,map__29001__$1,next_table_state,next_table_data,map__29002,map__29002__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__29003,map__29003__$1,fetch_data_fn,map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28995.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28995.prototype.om$core$IRender$render$arity$1 = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28995.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28995.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28997){var self__ = this;
var _28997__$1 = this;return self__.meta28996;
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28997,meta28996__$1){var self__ = this;
var _28997__$1 = this;return (new clustermap.components.ranges_table.t28995(self__.index_type,self__.map__28994,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__28992,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.map__28993,self__.table_state,self__.controls,self__.col_aggs,self__.p__28947,self__.title,self__.rows,self__.cols,meta28996__$1));
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28995 = ((function (map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28995(index_type__$1,map__28994__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28992__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__28993__$2,table_state__$1,controls__$1,col_aggs__$1,p__28947__$1,title__$1,rows__$1,cols__$1,meta28996){return (new clustermap.components.ranges_table.t28995(index_type__$1,map__28994__$2,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28992__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,map__28993__$2,table_state__$1,controls__$1,col_aggs__$1,p__28947__$1,title__$1,rows__$1,cols__$1,meta28996));
});})(map__28992,map__28992__$1,props,map__28993,map__28993__$1,table_state,table_data,map__28994,map__28994__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28995(index_type,map__28994__$1,row_aggs,owner,metric_path,props,map__28992__$1,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,map__28993__$1,table_state,controls,col_aggs,p__28947,title,rows,cols,null));
});
