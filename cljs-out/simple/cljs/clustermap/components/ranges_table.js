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
clustermap.components.ranges_table.render_table = (function render_table(p__28635,owner,opts){var map__28754 = p__28635;var map__28754__$1 = ((cljs.core.seq_QMARK_.call(null,map__28754))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);var map__28755 = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28755__$1 = ((cljs.core.seq_QMARK_.call(null,map__28755))?cljs.core.apply.call(null,cljs.core.hash_map,map__28755):map__28755);var table_data = map__28755__$1;var query = cljs.core.get.call(null,map__28755__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28755__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28756 = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28756__$1 = ((cljs.core.seq_QMARK_.call(null,map__28756))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);var controls = map__28756__$1;var title = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28757 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28757))?sablono.interpreter.attributes.call(null,attrs28757):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28757))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28758 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28758))?sablono.interpreter.attributes.call(null,attrs28758):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28758))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28758)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function iter__28760(s__28761){return (new cljs.core.LazySeq(null,((function (attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28761__$1 = s__28761;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28761__$1);if(temp__4126__auto__)
{var s__28761__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28761__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28761__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28763 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28762 = (0);while(true){
if((i__28762 < size__4376__auto__))
{var vec__28790 = cljs.core._nth.call(null,c__4375__auto__,i__28762);var row_i = cljs.core.nth.call(null,vec__28790,(0),null);var row = cljs.core.nth.call(null,vec__28790,(1),null);cljs.core.chunk_append.call(null,b__28763,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28762,vec__28790,row_i,row,c__4375__auto__,size__4376__auto__,b__28763,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function iter__28791(s__28792){return (new cljs.core.LazySeq(null,((function (i__28762,vec__28790,row_i,row,c__4375__auto__,size__4376__auto__,b__28763,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28792__$1 = s__28792;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28792__$1);if(temp__4126__auto____$1)
{var s__28792__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28792__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28792__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28794 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28793 = (0);while(true){
if((i__28793 < size__4376__auto____$1))
{var vec__28799 = cljs.core._nth.call(null,c__4375__auto____$1,i__28793);var col_i = cljs.core.nth.call(null,vec__28799,(0),null);var col = cljs.core.nth.call(null,vec__28799,(1),null);cljs.core.chunk_append.call(null,b__28794,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28800__$1 = (((G__28800 == null))?null:cljs.core.get.call(null,rowcol,G__28800));var G__28800__$2 = (((G__28800__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28800__$1));var G__28800__$3 = (((G__28800__$2 == null))?null:render_fn__$1.call(null,G__28800__$2));return G__28800__$3;
})():null)], null)));
{
var G__28872 = (i__28793 + (1));
i__28793 = G__28872;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28794),iter__28791.call(null,cljs.core.chunk_rest.call(null,s__28792__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28794),null);
}
} else
{var vec__28801 = cljs.core.first.call(null,s__28792__$2);var col_i = cljs.core.nth.call(null,vec__28801,(0),null);var col = cljs.core.nth.call(null,vec__28801,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28802__$1 = (((G__28802 == null))?null:cljs.core.get.call(null,rowcol,G__28802));var G__28802__$2 = (((G__28802__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28802__$1));var G__28802__$3 = (((G__28802__$2 == null))?null:render_fn__$1.call(null,G__28802__$2));return G__28802__$3;
})():null)], null)),iter__28791.call(null,cljs.core.rest.call(null,s__28792__$2)));
}
} else
{return null;
}
break;
}
});})(i__28762,vec__28790,row_i,row,c__4375__auto__,size__4376__auto__,b__28763,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28762,vec__28790,row_i,row,c__4375__auto__,size__4376__auto__,b__28763,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28873 = (i__28762 + (1));
i__28762 = G__28873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28763),iter__28760.call(null,cljs.core.chunk_rest.call(null,s__28761__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28763),null);
}
} else
{var vec__28803 = cljs.core.first.call(null,s__28761__$2);var row_i = cljs.core.nth.call(null,vec__28803,(0),null);var row = cljs.core.nth.call(null,vec__28803,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28803,row_i,row,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function iter__28804(s__28805){return (new cljs.core.LazySeq(null,((function (vec__28803,row_i,row,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28805__$1 = s__28805;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28805__$1);if(temp__4126__auto____$1)
{var s__28805__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28805__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28805__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28807 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28806 = (0);while(true){
if((i__28806 < size__4376__auto__))
{var vec__28812 = cljs.core._nth.call(null,c__4375__auto__,i__28806);var col_i = cljs.core.nth.call(null,vec__28812,(0),null);var col = cljs.core.nth.call(null,vec__28812,(1),null);cljs.core.chunk_append.call(null,b__28807,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28813__$1 = (((G__28813 == null))?null:cljs.core.get.call(null,rowcol,G__28813));var G__28813__$2 = (((G__28813__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28813__$1));var G__28813__$3 = (((G__28813__$2 == null))?null:render_fn__$1.call(null,G__28813__$2));return G__28813__$3;
})():null)], null)));
{
var G__28874 = (i__28806 + (1));
i__28806 = G__28874;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28807),iter__28804.call(null,cljs.core.chunk_rest.call(null,s__28805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28807),null);
}
} else
{var vec__28814 = cljs.core.first.call(null,s__28805__$2);var col_i = cljs.core.nth.call(null,vec__28814,(0),null);var col = cljs.core.nth.call(null,vec__28814,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28815__$1 = (((G__28815 == null))?null:cljs.core.get.call(null,rowcol,G__28815));var G__28815__$2 = (((G__28815__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28815__$1));var G__28815__$3 = (((G__28815__$2 == null))?null:render_fn__$1.call(null,G__28815__$2));return G__28815__$3;
})():null)], null)),iter__28804.call(null,cljs.core.rest.call(null,s__28805__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28803,row_i,row,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28803,row_i,row,s__28761__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28760.call(null,cljs.core.rest.call(null,s__28761__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28757),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28759 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28759))?sablono.interpreter.attributes.call(null,attrs28759):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28759))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28759)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function iter__28816(s__28817){return (new cljs.core.LazySeq(null,((function (attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28817__$1 = s__28817;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28817__$1);if(temp__4126__auto__)
{var s__28817__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28817__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28817__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28819 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28818 = (0);while(true){
if((i__28818 < size__4376__auto__))
{var vec__28846 = cljs.core._nth.call(null,c__4375__auto__,i__28818);var row_i = cljs.core.nth.call(null,vec__28846,(0),null);var row = cljs.core.nth.call(null,vec__28846,(1),null);cljs.core.chunk_append.call(null,b__28819,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28818,vec__28846,row_i,row,c__4375__auto__,size__4376__auto__,b__28819,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function iter__28847(s__28848){return (new cljs.core.LazySeq(null,((function (i__28818,vec__28846,row_i,row,c__4375__auto__,size__4376__auto__,b__28819,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28848__$1 = s__28848;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28848__$1);if(temp__4126__auto____$1)
{var s__28848__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28848__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28848__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28850 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28849 = (0);while(true){
if((i__28849 < size__4376__auto____$1))
{var vec__28855 = cljs.core._nth.call(null,c__4375__auto____$1,i__28849);var col_i = cljs.core.nth.call(null,vec__28855,(0),null);var col = cljs.core.nth.call(null,vec__28855,(1),null);cljs.core.chunk_append.call(null,b__28850,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28856__$1 = (((G__28856 == null))?null:cljs.core.get.call(null,rowcol,G__28856));var G__28856__$2 = (((G__28856__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28856__$1));var G__28856__$3 = (((G__28856__$2 == null))?null:render_fn__$1.call(null,G__28856__$2));return G__28856__$3;
})():null)], null)));
{
var G__28875 = (i__28849 + (1));
i__28849 = G__28875;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28850),iter__28847.call(null,cljs.core.chunk_rest.call(null,s__28848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28850),null);
}
} else
{var vec__28857 = cljs.core.first.call(null,s__28848__$2);var col_i = cljs.core.nth.call(null,vec__28857,(0),null);var col = cljs.core.nth.call(null,vec__28857,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28858__$1 = (((G__28858 == null))?null:cljs.core.get.call(null,rowcol,G__28858));var G__28858__$2 = (((G__28858__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28858__$1));var G__28858__$3 = (((G__28858__$2 == null))?null:render_fn__$1.call(null,G__28858__$2));return G__28858__$3;
})():null)], null)),iter__28847.call(null,cljs.core.rest.call(null,s__28848__$2)));
}
} else
{return null;
}
break;
}
});})(i__28818,vec__28846,row_i,row,c__4375__auto__,size__4376__auto__,b__28819,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28818,vec__28846,row_i,row,c__4375__auto__,size__4376__auto__,b__28819,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28876 = (i__28818 + (1));
i__28818 = G__28876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28819),iter__28816.call(null,cljs.core.chunk_rest.call(null,s__28817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28819),null);
}
} else
{var vec__28859 = cljs.core.first.call(null,s__28817__$2);var row_i = cljs.core.nth.call(null,vec__28859,(0),null);var row = cljs.core.nth.call(null,vec__28859,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28859,row_i,row,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function iter__28860(s__28861){return (new cljs.core.LazySeq(null,((function (vec__28859,row_i,row,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28861__$1 = s__28861;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28861__$1);if(temp__4126__auto____$1)
{var s__28861__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28861__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28861__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28863 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28862 = (0);while(true){
if((i__28862 < size__4376__auto__))
{var vec__28868 = cljs.core._nth.call(null,c__4375__auto__,i__28862);var col_i = cljs.core.nth.call(null,vec__28868,(0),null);var col = cljs.core.nth.call(null,vec__28868,(1),null);cljs.core.chunk_append.call(null,b__28863,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28869__$1 = (((G__28869 == null))?null:cljs.core.get.call(null,rowcol,G__28869));var G__28869__$2 = (((G__28869__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28869__$1));var G__28869__$3 = (((G__28869__$2 == null))?null:render_fn__$1.call(null,G__28869__$2));return G__28869__$3;
})():null)], null)));
{
var G__28877 = (i__28862 + (1));
i__28862 = G__28877;
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
});})(vec__28859,row_i,row,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28859,row_i,row,s__28817__$2,temp__4126__auto__,attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28816.call(null,cljs.core.rest.call(null,s__28817__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28757,rowcol,render_fn__$1,map__28754,map__28754__$1,map__28755,map__28755__$1,table_data,query,results,map__28756,map__28756__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28878,owner){var map__28923 = p__28878;var map__28923__$1 = ((cljs.core.seq_QMARK_.call(null,map__28923))?cljs.core.apply.call(null,cljs.core.hash_map,map__28923):map__28923);var props = map__28923__$1;var map__28924 = cljs.core.get.call(null,map__28923__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28924__$1 = ((cljs.core.seq_QMARK_.call(null,map__28924))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);var table_state = map__28924__$1;var table_data = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28925 = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28925__$1 = ((cljs.core.seq_QMARK_.call(null,map__28925))?cljs.core.apply.call(null,cljs.core.hash_map,map__28925):map__28925);var controls = map__28925__$1;var index_type = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28925__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28923__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28926 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28926 = (function (index_type,row_aggs,map__28924,owner,metric_path,map__28925,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28923,p__28878,meta28927){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.map__28924 = map__28924;
this.owner = owner;
this.metric_path = metric_path;
this.map__28925 = map__28925;
this.props = props;
this.row_path = row_path;
this.table_data = table_data;
this.metric_aggs = metric_aggs;
this.index = index;
this.ranges_table_component = ranges_table_component;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.rows = rows;
this.cols = cols;
this.map__28923 = map__28923;
this.p__28878 = p__28878;
this.meta28927 = meta28927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28926.cljs$lang$type = true;
clustermap.components.ranges_table.t28926.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28926";
clustermap.components.ranges_table.t28926.cljs$lang$ctorPrWriter = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28926");
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28926.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28926.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28929,p__28930){var self__ = this;
var map__28931 = p__28929;var map__28931__$1 = ((cljs.core.seq_QMARK_.call(null,map__28931))?cljs.core.apply.call(null,cljs.core.hash_map,map__28931):map__28931);var next_props = map__28931__$1;var map__28932 = cljs.core.get.call(null,map__28931__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28932__$1 = ((cljs.core.seq_QMARK_.call(null,map__28932))?cljs.core.apply.call(null,cljs.core.hash_map,map__28932):map__28932);var next_table_state = map__28932__$1;var next_table_data = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28933 = cljs.core.get.call(null,map__28932__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28933__$1 = ((cljs.core.seq_QMARK_.call(null,map__28933))?cljs.core.apply.call(null,cljs.core.hash_map,map__28933):map__28933);var next_controls = map__28933__$1;var next_col_aggs = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28931__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28934 = p__28930;var map__28934__$1 = ((cljs.core.seq_QMARK_.call(null,map__28934))?cljs.core.apply.call(null,cljs.core.hash_map,map__28934):map__28934);var fetch_data_fn = cljs.core.get.call(null,map__28934__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28931,map__28931__$1,next_props,map__28932,map__28932__$1,next_table_state,next_table_data,map__28933,map__28933__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28934,map__28934__$1,fetch_data_fn,map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28931,map__28931__$1,next_props,map__28932,map__28932__$1,next_table_state,next_table_data,map__28933,map__28933__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28934,map__28934__$1,fetch_data_fn,map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28952){var state_val_28953 = (state_28952[(1)]);if((state_val_28953 === (5)))
{var inst_28950 = (state_28952[(2)]);var state_28952__$1 = state_28952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28952__$1,inst_28950);
} else
{if((state_val_28953 === (4)))
{var state_28952__$1 = state_28952;var statearr_28954_28967 = state_28952__$1;(statearr_28954_28967[(2)] = null);
(statearr_28954_28967[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28953 === (3)))
{var inst_28937 = (state_28952[(7)]);var inst_28939 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28940 = ["RANGES-TABLE-DATA",inst_28937];var inst_28941 = (new cljs.core.PersistentVector(null,2,(5),inst_28939,inst_28940,null));var inst_28942 = cljs.core.clj__GT_js.call(null,inst_28941);var inst_28943 = console.log(inst_28942);var inst_28944 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28945 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28946 = (new cljs.core.PersistentVector(null,1,(5),inst_28944,inst_28945,null));var inst_28947 = om.core.update_BANG_.call(null,self__.table_state,inst_28946,inst_28937);var state_28952__$1 = (function (){var statearr_28955 = state_28952;(statearr_28955[(8)] = inst_28943);
return statearr_28955;
})();var statearr_28956_28968 = state_28952__$1;(statearr_28956_28968[(2)] = inst_28947);
(statearr_28956_28968[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28953 === (2)))
{var inst_28937 = (state_28952[(7)]);var inst_28937__$1 = (state_28952[(2)]);var state_28952__$1 = (function (){var statearr_28957 = state_28952;(statearr_28957[(7)] = inst_28937__$1);
return statearr_28957;
})();if(cljs.core.truth_(inst_28937__$1))
{var statearr_28958_28969 = state_28952__$1;(statearr_28958_28969[(1)] = (3));
} else
{var statearr_28959_28970 = state_28952__$1;(statearr_28959_28970[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28953 === (1)))
{var inst_28935 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28952__$1 = state_28952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28952__$1,(2),inst_28935);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28931,map__28931__$1,next_props,map__28932,map__28932__$1,next_table_state,next_table_data,map__28933,map__28933__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28934,map__28934__$1,fetch_data_fn,map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28931,map__28931__$1,next_props,map__28932,map__28932__$1,next_table_state,next_table_data,map__28933,map__28933__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28934,map__28934__$1,fetch_data_fn,map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28963 = [null,null,null,null,null,null,null,null,null];(statearr_28963[(0)] = state_machine__9111__auto__);
(statearr_28963[(1)] = (1));
return statearr_28963;
});
var state_machine__9111__auto____1 = (function (state_28952){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28952);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28964){if((e28964 instanceof Object))
{var ex__9114__auto__ = e28964;var statearr_28965_28971 = state_28952;(statearr_28965_28971[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28964;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28972 = state_28952;
state_28952 = G__28972;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28952){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28931,map__28931__$1,next_props,map__28932,map__28932__$1,next_table_state,next_table_data,map__28933,map__28933__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28934,map__28934__$1,fetch_data_fn,map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28966 = f__9126__auto__.call(null);(statearr_28966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28931,map__28931__$1,next_props,map__28932,map__28932__$1,next_table_state,next_table_data,map__28933,map__28933__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28934,map__28934__$1,fetch_data_fn,map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28926.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28926.prototype.om$core$IRender$render$arity$1 = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28926.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28926.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28928){var self__ = this;
var _28928__$1 = this;return self__.meta28927;
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28928,meta28927__$1){var self__ = this;
var _28928__$1 = this;return (new clustermap.components.ranges_table.t28926(self__.index_type,self__.row_aggs,self__.map__28924,self__.owner,self__.metric_path,self__.map__28925,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28923,self__.p__28878,meta28927__$1));
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28926 = ((function (map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28926(index_type__$1,row_aggs__$1,map__28924__$2,owner__$1,metric_path__$1,map__28925__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28923__$2,p__28878__$1,meta28927){return (new clustermap.components.ranges_table.t28926(index_type__$1,row_aggs__$1,map__28924__$2,owner__$1,metric_path__$1,map__28925__$2,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28923__$2,p__28878__$1,meta28927));
});})(map__28923,map__28923__$1,props,map__28924,map__28924__$1,table_state,table_data,map__28925,map__28925__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28926(index_type,row_aggs,map__28924__$1,owner,metric_path,map__28925__$1,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28923__$1,p__28878,null));
});
