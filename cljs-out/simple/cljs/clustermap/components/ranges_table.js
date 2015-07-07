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
clustermap.components.ranges_table.render_table = (function render_table(p__28695,owner,opts){var map__28814 = p__28695;var map__28814__$1 = ((cljs.core.seq_QMARK_.call(null,map__28814))?cljs.core.apply.call(null,cljs.core.hash_map,map__28814):map__28814);var map__28815 = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28815__$1 = ((cljs.core.seq_QMARK_.call(null,map__28815))?cljs.core.apply.call(null,cljs.core.hash_map,map__28815):map__28815);var table_data = map__28815__$1;var query = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28815__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28816 = cljs.core.get.call(null,map__28814__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28816__$1 = ((cljs.core.seq_QMARK_.call(null,map__28816))?cljs.core.apply.call(null,cljs.core.hash_map,map__28816):map__28816);var controls = map__28816__$1;var title = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28817 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28817))?sablono.interpreter.attributes.call(null,attrs28817):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28817))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28818 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28818))?sablono.interpreter.attributes.call(null,attrs28818):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28818))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28818)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function iter__28820(s__28821){return (new cljs.core.LazySeq(null,((function (attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28821__$1 = s__28821;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28821__$1);if(temp__4126__auto__)
{var s__28821__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28821__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28821__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28823 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28822 = (0);while(true){
if((i__28822 < size__4376__auto__))
{var vec__28850 = cljs.core._nth.call(null,c__4375__auto__,i__28822);var row_i = cljs.core.nth.call(null,vec__28850,(0),null);var row = cljs.core.nth.call(null,vec__28850,(1),null);cljs.core.chunk_append.call(null,b__28823,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28822,vec__28850,row_i,row,c__4375__auto__,size__4376__auto__,b__28823,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function iter__28851(s__28852){return (new cljs.core.LazySeq(null,((function (i__28822,vec__28850,row_i,row,c__4375__auto__,size__4376__auto__,b__28823,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28852__$1 = s__28852;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28852__$1);if(temp__4126__auto____$1)
{var s__28852__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28852__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28852__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28854 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28853 = (0);while(true){
if((i__28853 < size__4376__auto____$1))
{var vec__28859 = cljs.core._nth.call(null,c__4375__auto____$1,i__28853);var col_i = cljs.core.nth.call(null,vec__28859,(0),null);var col = cljs.core.nth.call(null,vec__28859,(1),null);cljs.core.chunk_append.call(null,b__28854,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28860__$1 = (((G__28860 == null))?null:cljs.core.get.call(null,rowcol,G__28860));var G__28860__$2 = (((G__28860__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28860__$1));var G__28860__$3 = (((G__28860__$2 == null))?null:render_fn__$1.call(null,G__28860__$2));return G__28860__$3;
})():null)], null)));
{
var G__28932 = (i__28853 + (1));
i__28853 = G__28932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28854),iter__28851.call(null,cljs.core.chunk_rest.call(null,s__28852__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28854),null);
}
} else
{var vec__28861 = cljs.core.first.call(null,s__28852__$2);var col_i = cljs.core.nth.call(null,vec__28861,(0),null);var col = cljs.core.nth.call(null,vec__28861,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28862__$1 = (((G__28862 == null))?null:cljs.core.get.call(null,rowcol,G__28862));var G__28862__$2 = (((G__28862__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28862__$1));var G__28862__$3 = (((G__28862__$2 == null))?null:render_fn__$1.call(null,G__28862__$2));return G__28862__$3;
})():null)], null)),iter__28851.call(null,cljs.core.rest.call(null,s__28852__$2)));
}
} else
{return null;
}
break;
}
});})(i__28822,vec__28850,row_i,row,c__4375__auto__,size__4376__auto__,b__28823,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28822,vec__28850,row_i,row,c__4375__auto__,size__4376__auto__,b__28823,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28933 = (i__28822 + (1));
i__28822 = G__28933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28823),iter__28820.call(null,cljs.core.chunk_rest.call(null,s__28821__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28823),null);
}
} else
{var vec__28863 = cljs.core.first.call(null,s__28821__$2);var row_i = cljs.core.nth.call(null,vec__28863,(0),null);var row = cljs.core.nth.call(null,vec__28863,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28863,row_i,row,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function iter__28864(s__28865){return (new cljs.core.LazySeq(null,((function (vec__28863,row_i,row,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28865__$1 = s__28865;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28865__$1);if(temp__4126__auto____$1)
{var s__28865__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28865__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28865__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28867 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28866 = (0);while(true){
if((i__28866 < size__4376__auto__))
{var vec__28872 = cljs.core._nth.call(null,c__4375__auto__,i__28866);var col_i = cljs.core.nth.call(null,vec__28872,(0),null);var col = cljs.core.nth.call(null,vec__28872,(1),null);cljs.core.chunk_append.call(null,b__28867,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28873__$1 = (((G__28873 == null))?null:cljs.core.get.call(null,rowcol,G__28873));var G__28873__$2 = (((G__28873__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28873__$1));var G__28873__$3 = (((G__28873__$2 == null))?null:render_fn__$1.call(null,G__28873__$2));return G__28873__$3;
})():null)], null)));
{
var G__28934 = (i__28866 + (1));
i__28866 = G__28934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28867),iter__28864.call(null,cljs.core.chunk_rest.call(null,s__28865__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28867),null);
}
} else
{var vec__28874 = cljs.core.first.call(null,s__28865__$2);var col_i = cljs.core.nth.call(null,vec__28874,(0),null);var col = cljs.core.nth.call(null,vec__28874,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28875__$1 = (((G__28875 == null))?null:cljs.core.get.call(null,rowcol,G__28875));var G__28875__$2 = (((G__28875__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28875__$1));var G__28875__$3 = (((G__28875__$2 == null))?null:render_fn__$1.call(null,G__28875__$2));return G__28875__$3;
})():null)], null)),iter__28864.call(null,cljs.core.rest.call(null,s__28865__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28863,row_i,row,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28863,row_i,row,s__28821__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28820.call(null,cljs.core.rest.call(null,s__28821__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28817),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28819 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28819))?sablono.interpreter.attributes.call(null,attrs28819):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28819))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28819)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function iter__28876(s__28877){return (new cljs.core.LazySeq(null,((function (attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28877__$1 = s__28877;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28877__$1);if(temp__4126__auto__)
{var s__28877__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28877__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28877__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28879 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28878 = (0);while(true){
if((i__28878 < size__4376__auto__))
{var vec__28906 = cljs.core._nth.call(null,c__4375__auto__,i__28878);var row_i = cljs.core.nth.call(null,vec__28906,(0),null);var row = cljs.core.nth.call(null,vec__28906,(1),null);cljs.core.chunk_append.call(null,b__28879,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28878,vec__28906,row_i,row,c__4375__auto__,size__4376__auto__,b__28879,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function iter__28907(s__28908){return (new cljs.core.LazySeq(null,((function (i__28878,vec__28906,row_i,row,c__4375__auto__,size__4376__auto__,b__28879,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28908__$1 = s__28908;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28908__$1);if(temp__4126__auto____$1)
{var s__28908__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28908__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28908__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28910 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28909 = (0);while(true){
if((i__28909 < size__4376__auto____$1))
{var vec__28915 = cljs.core._nth.call(null,c__4375__auto____$1,i__28909);var col_i = cljs.core.nth.call(null,vec__28915,(0),null);var col = cljs.core.nth.call(null,vec__28915,(1),null);cljs.core.chunk_append.call(null,b__28910,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28916__$1 = (((G__28916 == null))?null:cljs.core.get.call(null,rowcol,G__28916));var G__28916__$2 = (((G__28916__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28916__$1));var G__28916__$3 = (((G__28916__$2 == null))?null:render_fn__$1.call(null,G__28916__$2));return G__28916__$3;
})():null)], null)));
{
var G__28935 = (i__28909 + (1));
i__28909 = G__28935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28910),iter__28907.call(null,cljs.core.chunk_rest.call(null,s__28908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28910),null);
}
} else
{var vec__28917 = cljs.core.first.call(null,s__28908__$2);var col_i = cljs.core.nth.call(null,vec__28917,(0),null);var col = cljs.core.nth.call(null,vec__28917,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28918__$1 = (((G__28918 == null))?null:cljs.core.get.call(null,rowcol,G__28918));var G__28918__$2 = (((G__28918__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28918__$1));var G__28918__$3 = (((G__28918__$2 == null))?null:render_fn__$1.call(null,G__28918__$2));return G__28918__$3;
})():null)], null)),iter__28907.call(null,cljs.core.rest.call(null,s__28908__$2)));
}
} else
{return null;
}
break;
}
});})(i__28878,vec__28906,row_i,row,c__4375__auto__,size__4376__auto__,b__28879,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28878,vec__28906,row_i,row,c__4375__auto__,size__4376__auto__,b__28879,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28936 = (i__28878 + (1));
i__28878 = G__28936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28879),iter__28876.call(null,cljs.core.chunk_rest.call(null,s__28877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28879),null);
}
} else
{var vec__28919 = cljs.core.first.call(null,s__28877__$2);var row_i = cljs.core.nth.call(null,vec__28919,(0),null);var row = cljs.core.nth.call(null,vec__28919,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28919,row_i,row,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function iter__28920(s__28921){return (new cljs.core.LazySeq(null,((function (vec__28919,row_i,row,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28921__$1 = s__28921;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28921__$1);if(temp__4126__auto____$1)
{var s__28921__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28921__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28921__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28923 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28922 = (0);while(true){
if((i__28922 < size__4376__auto__))
{var vec__28928 = cljs.core._nth.call(null,c__4375__auto__,i__28922);var col_i = cljs.core.nth.call(null,vec__28928,(0),null);var col = cljs.core.nth.call(null,vec__28928,(1),null);cljs.core.chunk_append.call(null,b__28923,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28929__$1 = (((G__28929 == null))?null:cljs.core.get.call(null,rowcol,G__28929));var G__28929__$2 = (((G__28929__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28929__$1));var G__28929__$3 = (((G__28929__$2 == null))?null:render_fn__$1.call(null,G__28929__$2));return G__28929__$3;
})():null)], null)));
{
var G__28937 = (i__28922 + (1));
i__28922 = G__28937;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28923),iter__28920.call(null,cljs.core.chunk_rest.call(null,s__28921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28923),null);
}
} else
{var vec__28930 = cljs.core.first.call(null,s__28921__$2);var col_i = cljs.core.nth.call(null,vec__28930,(0),null);var col = cljs.core.nth.call(null,vec__28930,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28931__$1 = (((G__28931 == null))?null:cljs.core.get.call(null,rowcol,G__28931));var G__28931__$2 = (((G__28931__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28931__$1));var G__28931__$3 = (((G__28931__$2 == null))?null:render_fn__$1.call(null,G__28931__$2));return G__28931__$3;
})():null)], null)),iter__28920.call(null,cljs.core.rest.call(null,s__28921__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28919,row_i,row,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28919,row_i,row,s__28877__$2,temp__4126__auto__,attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28876.call(null,cljs.core.rest.call(null,s__28877__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28817,rowcol,render_fn__$1,map__28814,map__28814__$1,map__28815,map__28815__$1,table_data,query,results,map__28816,map__28816__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28938,owner){var map__28983 = p__28938;var map__28983__$1 = ((cljs.core.seq_QMARK_.call(null,map__28983))?cljs.core.apply.call(null,cljs.core.hash_map,map__28983):map__28983);var props = map__28983__$1;var map__28984 = cljs.core.get.call(null,map__28983__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28984__$1 = ((cljs.core.seq_QMARK_.call(null,map__28984))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984):map__28984);var table_state = map__28984__$1;var table_data = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28985 = cljs.core.get.call(null,map__28984__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28985__$1 = ((cljs.core.seq_QMARK_.call(null,map__28985))?cljs.core.apply.call(null,cljs.core.hash_map,map__28985):map__28985);var controls = map__28985__$1;var index_type = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28985__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28983__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28986 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28986 = (function (index_type,row_aggs,p__28938,owner,map__28985,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28984,map__28983,meta28987){
this.index_type = index_type;
this.row_aggs = row_aggs;
this.p__28938 = p__28938;
this.owner = owner;
this.map__28985 = map__28985;
this.metric_path = metric_path;
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
this.map__28984 = map__28984;
this.map__28983 = map__28983;
this.meta28987 = meta28987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28986.cljs$lang$type = true;
clustermap.components.ranges_table.t28986.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28986";
clustermap.components.ranges_table.t28986.cljs$lang$ctorPrWriter = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28986");
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28986.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28986.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28989,p__28990){var self__ = this;
var map__28991 = p__28989;var map__28991__$1 = ((cljs.core.seq_QMARK_.call(null,map__28991))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);var next_props = map__28991__$1;var map__28992 = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28992__$1 = ((cljs.core.seq_QMARK_.call(null,map__28992))?cljs.core.apply.call(null,cljs.core.hash_map,map__28992):map__28992);var next_table_state = map__28992__$1;var next_table_data = cljs.core.get.call(null,map__28992__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28993 = cljs.core.get.call(null,map__28992__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28993__$1 = ((cljs.core.seq_QMARK_.call(null,map__28993))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);var next_controls = map__28993__$1;var next_col_aggs = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28994 = p__28990;var map__28994__$1 = ((cljs.core.seq_QMARK_.call(null,map__28994))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);var fetch_data_fn = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28991,map__28991__$1,next_props,map__28992,map__28992__$1,next_table_state,next_table_data,map__28993,map__28993__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28994,map__28994__$1,fetch_data_fn,map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28991,map__28991__$1,next_props,map__28992,map__28992__$1,next_table_state,next_table_data,map__28993,map__28993__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28994,map__28994__$1,fetch_data_fn,map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_29012){var state_val_29013 = (state_29012[(1)]);if((state_val_29013 === (5)))
{var inst_29010 = (state_29012[(2)]);var state_29012__$1 = state_29012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29012__$1,inst_29010);
} else
{if((state_val_29013 === (4)))
{var state_29012__$1 = state_29012;var statearr_29014_29027 = state_29012__$1;(statearr_29014_29027[(2)] = null);
(statearr_29014_29027[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29013 === (3)))
{var inst_28997 = (state_29012[(7)]);var inst_28999 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29000 = ["RANGES-TABLE-DATA",inst_28997];var inst_29001 = (new cljs.core.PersistentVector(null,2,(5),inst_28999,inst_29000,null));var inst_29002 = cljs.core.clj__GT_js.call(null,inst_29001);var inst_29003 = console.log(inst_29002);var inst_29004 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29005 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_29006 = (new cljs.core.PersistentVector(null,1,(5),inst_29004,inst_29005,null));var inst_29007 = om.core.update_BANG_.call(null,self__.table_state,inst_29006,inst_28997);var state_29012__$1 = (function (){var statearr_29015 = state_29012;(statearr_29015[(8)] = inst_29003);
return statearr_29015;
})();var statearr_29016_29028 = state_29012__$1;(statearr_29016_29028[(2)] = inst_29007);
(statearr_29016_29028[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29013 === (2)))
{var inst_28997 = (state_29012[(7)]);var inst_28997__$1 = (state_29012[(2)]);var state_29012__$1 = (function (){var statearr_29017 = state_29012;(statearr_29017[(7)] = inst_28997__$1);
return statearr_29017;
})();if(cljs.core.truth_(inst_28997__$1))
{var statearr_29018_29029 = state_29012__$1;(statearr_29018_29029[(1)] = (3));
} else
{var statearr_29019_29030 = state_29012__$1;(statearr_29019_29030[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29013 === (1)))
{var inst_28995 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_29012__$1 = state_29012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29012__$1,(2),inst_28995);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28991,map__28991__$1,next_props,map__28992,map__28992__$1,next_table_state,next_table_data,map__28993,map__28993__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28994,map__28994__$1,fetch_data_fn,map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28991,map__28991__$1,next_props,map__28992,map__28992__$1,next_table_state,next_table_data,map__28993,map__28993__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28994,map__28994__$1,fetch_data_fn,map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29023 = [null,null,null,null,null,null,null,null,null];(statearr_29023[(0)] = state_machine__9111__auto__);
(statearr_29023[(1)] = (1));
return statearr_29023;
});
var state_machine__9111__auto____1 = (function (state_29012){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29012);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29024){if((e29024 instanceof Object))
{var ex__9114__auto__ = e29024;var statearr_29025_29031 = state_29012;(statearr_29025_29031[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29032 = state_29012;
state_29012 = G__29032;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29012){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28991,map__28991__$1,next_props,map__28992,map__28992__$1,next_table_state,next_table_data,map__28993,map__28993__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28994,map__28994__$1,fetch_data_fn,map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_29026 = f__9126__auto__.call(null);(statearr_29026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28991,map__28991__$1,next_props,map__28992,map__28992__$1,next_table_state,next_table_data,map__28993,map__28993__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28994,map__28994__$1,fetch_data_fn,map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28986.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28986.prototype.om$core$IRender$render$arity$1 = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28986.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28986.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28988){var self__ = this;
var _28988__$1 = this;return self__.meta28987;
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28988,meta28987__$1){var self__ = this;
var _28988__$1 = this;return (new clustermap.components.ranges_table.t28986(self__.index_type,self__.row_aggs,self__.p__28938,self__.owner,self__.map__28985,self__.metric_path,self__.props,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28984,self__.map__28983,meta28987__$1));
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28986 = ((function (map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28986(index_type__$1,row_aggs__$1,p__28938__$1,owner__$1,map__28985__$2,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28984__$2,map__28983__$2,meta28987){return (new clustermap.components.ranges_table.t28986(index_type__$1,row_aggs__$1,p__28938__$1,owner__$1,map__28985__$2,metric_path__$1,props__$1,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28984__$2,map__28983__$2,meta28987));
});})(map__28983,map__28983__$1,props,map__28984,map__28984__$1,table_state,table_data,map__28985,map__28985__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28986(index_type,row_aggs,p__28938,owner,map__28985__$1,metric_path,props,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28984__$1,map__28983__$1,null));
});
