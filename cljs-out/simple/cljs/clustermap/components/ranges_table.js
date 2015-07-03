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
clustermap.components.ranges_table.render_table = (function render_table(p__28638,owner,opts){var map__28757 = p__28638;var map__28757__$1 = ((cljs.core.seq_QMARK_.call(null,map__28757))?cljs.core.apply.call(null,cljs.core.hash_map,map__28757):map__28757);var map__28758 = cljs.core.get.call(null,map__28757__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28758__$1 = ((cljs.core.seq_QMARK_.call(null,map__28758))?cljs.core.apply.call(null,cljs.core.hash_map,map__28758):map__28758);var table_data = map__28758__$1;var query = cljs.core.get.call(null,map__28758__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__28758__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__28759 = cljs.core.get.call(null,map__28757__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28759__$1 = ((cljs.core.seq_QMARK_.call(null,map__28759))?cljs.core.apply.call(null,cljs.core.hash_map,map__28759):map__28759);var controls = map__28759__$1;var title = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var render_fn = cljs.core.get.call(null,map__28759__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var rowcol = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (r){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(r)], null),r], null);
});})(map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,results));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var attrs28760 = (cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28760))?sablono.interpreter.attributes.call(null,attrs28760):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28760))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28761 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28761))?sablono.interpreter.attributes.call(null,attrs28761):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28761))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28761)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function iter__28763(s__28764){return (new cljs.core.LazySeq(null,((function (attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28764__$1 = s__28764;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28764__$1);if(temp__4126__auto__)
{var s__28764__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28764__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28764__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28766 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28765 = (0);while(true){
if((i__28765 < size__4376__auto__))
{var vec__28793 = cljs.core._nth.call(null,c__4375__auto__,i__28765);var row_i = cljs.core.nth.call(null,vec__28793,(0),null);var row = cljs.core.nth.call(null,vec__28793,(1),null);cljs.core.chunk_append.call(null,b__28766,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28765,vec__28793,row_i,row,c__4375__auto__,size__4376__auto__,b__28766,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function iter__28794(s__28795){return (new cljs.core.LazySeq(null,((function (i__28765,vec__28793,row_i,row,c__4375__auto__,size__4376__auto__,b__28766,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28795__$1 = s__28795;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28795__$1);if(temp__4126__auto____$1)
{var s__28795__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28795__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28795__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28797 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28796 = (0);while(true){
if((i__28796 < size__4376__auto____$1))
{var vec__28802 = cljs.core._nth.call(null,c__4375__auto____$1,i__28796);var col_i = cljs.core.nth.call(null,vec__28802,(0),null);var col = cljs.core.nth.call(null,vec__28802,(1),null);cljs.core.chunk_append.call(null,b__28797,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28803__$1 = (((G__28803 == null))?null:cljs.core.get.call(null,rowcol,G__28803));var G__28803__$2 = (((G__28803__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28803__$1));var G__28803__$3 = (((G__28803__$2 == null))?null:render_fn__$1.call(null,G__28803__$2));return G__28803__$3;
})():null)], null)));
{
var G__28875 = (i__28796 + (1));
i__28796 = G__28875;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28797),iter__28794.call(null,cljs.core.chunk_rest.call(null,s__28795__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28797),null);
}
} else
{var vec__28804 = cljs.core.first.call(null,s__28795__$2);var col_i = cljs.core.nth.call(null,vec__28804,(0),null);var col = cljs.core.nth.call(null,vec__28804,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28805__$1 = (((G__28805 == null))?null:cljs.core.get.call(null,rowcol,G__28805));var G__28805__$2 = (((G__28805__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28805__$1));var G__28805__$3 = (((G__28805__$2 == null))?null:render_fn__$1.call(null,G__28805__$2));return G__28805__$3;
})():null)], null)),iter__28794.call(null,cljs.core.rest.call(null,s__28795__$2)));
}
} else
{return null;
}
break;
}
});})(i__28765,vec__28793,row_i,row,c__4375__auto__,size__4376__auto__,b__28766,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28765,vec__28793,row_i,row,c__4375__auto__,size__4376__auto__,b__28766,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28876 = (i__28765 + (1));
i__28765 = G__28876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28766),iter__28763.call(null,cljs.core.chunk_rest.call(null,s__28764__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28766),null);
}
} else
{var vec__28806 = cljs.core.first.call(null,s__28764__$2);var row_i = cljs.core.nth.call(null,vec__28806,(0),null);var row = cljs.core.nth.call(null,vec__28806,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28806,row_i,row,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function iter__28807(s__28808){return (new cljs.core.LazySeq(null,((function (vec__28806,row_i,row,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28808__$1 = s__28808;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28808__$1);if(temp__4126__auto____$1)
{var s__28808__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28808__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28808__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28810 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28809 = (0);while(true){
if((i__28809 < size__4376__auto__))
{var vec__28815 = cljs.core._nth.call(null,c__4375__auto__,i__28809);var col_i = cljs.core.nth.call(null,vec__28815,(0),null);var col = cljs.core.nth.call(null,vec__28815,(1),null);cljs.core.chunk_append.call(null,b__28810,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28816__$1 = (((G__28816 == null))?null:cljs.core.get.call(null,rowcol,G__28816));var G__28816__$2 = (((G__28816__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28816__$1));var G__28816__$3 = (((G__28816__$2 == null))?null:render_fn__$1.call(null,G__28816__$2));return G__28816__$3;
})():null)], null)));
{
var G__28877 = (i__28809 + (1));
i__28809 = G__28877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28810),iter__28807.call(null,cljs.core.chunk_rest.call(null,s__28808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28810),null);
}
} else
{var vec__28817 = cljs.core.first.call(null,s__28808__$2);var col_i = cljs.core.nth.call(null,vec__28817,(0),null);var col = cljs.core.nth.call(null,vec__28817,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28818__$1 = (((G__28818 == null))?null:cljs.core.get.call(null,rowcol,G__28818));var G__28818__$2 = (((G__28818__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28818__$1));var G__28818__$3 = (((G__28818__$2 == null))?null:render_fn__$1.call(null,G__28818__$2));return G__28818__$3;
})():null)], null)),iter__28807.call(null,cljs.core.rest.call(null,s__28808__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28806,row_i,row,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28806,row_i,row,s__28764__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28763.call(null,cljs.core.rest.call(null,s__28764__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28760),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28762 = clustermap.components.table_common.column_header_rows.call(null,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"insert-blank-col","insert-blank-col",-237262847),true], null));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28762))?sablono.interpreter.attributes.call(null,attrs28762):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28762))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28762)], null))));
})(),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function iter__28819(s__28820){return (new cljs.core.LazySeq(null,((function (attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28820__$1 = s__28820;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28820__$1);if(temp__4126__auto__)
{var s__28820__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28820__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28820__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28822 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28821 = (0);while(true){
if((i__28821 < size__4376__auto__))
{var vec__28849 = cljs.core._nth.call(null,c__4375__auto__,i__28821);var row_i = cljs.core.nth.call(null,vec__28849,(0),null);var row = cljs.core.nth.call(null,vec__28849,(1),null);cljs.core.chunk_append.call(null,b__28822,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (i__28821,vec__28849,row_i,row,c__4375__auto__,size__4376__auto__,b__28822,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function iter__28850(s__28851){return (new cljs.core.LazySeq(null,((function (i__28821,vec__28849,row_i,row,c__4375__auto__,size__4376__auto__,b__28822,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28851__$1 = s__28851;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28851__$1);if(temp__4126__auto____$1)
{var s__28851__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28851__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__28851__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__28853 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__28852 = (0);while(true){
if((i__28852 < size__4376__auto____$1))
{var vec__28858 = cljs.core._nth.call(null,c__4375__auto____$1,i__28852);var col_i = cljs.core.nth.call(null,vec__28858,(0),null);var col = cljs.core.nth.call(null,vec__28858,(1),null);cljs.core.chunk_append.call(null,b__28853,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28859__$1 = (((G__28859 == null))?null:cljs.core.get.call(null,rowcol,G__28859));var G__28859__$2 = (((G__28859__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28859__$1));var G__28859__$3 = (((G__28859__$2 == null))?null:render_fn__$1.call(null,G__28859__$2));return G__28859__$3;
})():null)], null)));
{
var G__28878 = (i__28852 + (1));
i__28852 = G__28878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28853),iter__28850.call(null,cljs.core.chunk_rest.call(null,s__28851__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28853),null);
}
} else
{var vec__28860 = cljs.core.first.call(null,s__28851__$2);var col_i = cljs.core.nth.call(null,vec__28860,(0),null);var col = cljs.core.nth.call(null,vec__28860,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28861__$1 = (((G__28861 == null))?null:cljs.core.get.call(null,rowcol,G__28861));var G__28861__$2 = (((G__28861__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28861__$1));var G__28861__$3 = (((G__28861__$2 == null))?null:render_fn__$1.call(null,G__28861__$2));return G__28861__$3;
})():null)], null)),iter__28850.call(null,cljs.core.rest.call(null,s__28851__$2)));
}
} else
{return null;
}
break;
}
});})(i__28821,vec__28849,row_i,row,c__4375__auto__,size__4376__auto__,b__28822,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(i__28821,vec__28849,row_i,row,c__4375__auto__,size__4376__auto__,b__28822,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())));
{
var G__28879 = (i__28821 + (1));
i__28821 = G__28879;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28822),iter__28819.call(null,cljs.core.chunk_rest.call(null,s__28820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28822),null);
}
} else
{var vec__28862 = cljs.core.first.call(null,s__28820__$2);var row_i = cljs.core.nth.call(null,vec__28862,(0),null);var row = cljs.core.nth.call(null,vec__28862,(1),null);return cljs.core.cons.call(null,React.DOM.tr({"className": ("row-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_i))},React.DOM.td({"className": "col-1"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(row))),cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (vec__28862,row_i,row,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function iter__28863(s__28864){return (new cljs.core.LazySeq(null,((function (vec__28862,row_i,row,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn){
return (function (){var s__28864__$1 = s__28864;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__28864__$1);if(temp__4126__auto____$1)
{var s__28864__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__28864__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28864__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28866 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28865 = (0);while(true){
if((i__28865 < size__4376__auto__))
{var vec__28871 = cljs.core._nth.call(null,c__4375__auto__,i__28865);var col_i = cljs.core.nth.call(null,vec__28871,(0),null);var col = cljs.core.nth.call(null,vec__28871,(1),null);cljs.core.chunk_append.call(null,b__28866,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28872__$1 = (((G__28872 == null))?null:cljs.core.get.call(null,rowcol,G__28872));var G__28872__$2 = (((G__28872__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28872__$1));var G__28872__$3 = (((G__28872__$2 == null))?null:render_fn__$1.call(null,G__28872__$2));return G__28872__$3;
})():null)], null)));
{
var G__28880 = (i__28865 + (1));
i__28865 = G__28880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28866),iter__28863.call(null,cljs.core.chunk_rest.call(null,s__28864__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28866),null);
}
} else
{var vec__28873 = cljs.core.first.call(null,s__28864__$2);var col_i = cljs.core.nth.call(null,vec__28873,(0),null);var col = cljs.core.nth.call(null,vec__28873,(1),null);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clustermap.formats.html.combine_classes.call(null,("col-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_i)),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(col))], null),(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row);if(cljs.core.truth_(and__3627__auto__))
{return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
} else
{return and__3627__auto__;
}
})())?(function (){var G__28874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null);var G__28874__$1 = (((G__28874 == null))?null:cljs.core.get.call(null,rowcol,G__28874));var G__28874__$2 = (((G__28874__$1 == null))?null:new cljs.core.Keyword(null,"metric","metric",408798077).cljs$core$IFn$_invoke$arity$1(G__28874__$1));var G__28874__$3 = (((G__28874__$2 == null))?null:render_fn__$1.call(null,G__28874__$2));return G__28874__$3;
})():null)], null)),iter__28863.call(null,cljs.core.rest.call(null,s__28864__$2)));
}
} else
{return null;
}
break;
}
});})(vec__28862,row_i,row,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(vec__28862,row_i,row,s__28820__$2,temp__4126__auto__,attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(2)),cols));
})())),iter__28819.call(null,cljs.core.rest.call(null,s__28820__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
,null,null));
});})(attrs28760,rowcol,render_fn__$1,map__28757,map__28757__$1,map__28758,map__28758__$1,table_data,query,results,map__28759,map__28759__$1,controls,title,rows,cols,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),rows));
})()))))], null))));
});
clustermap.components.ranges_table.ranges_table_component = (function ranges_table_component(p__28881,owner){var map__28926 = p__28881;var map__28926__$1 = ((cljs.core.seq_QMARK_.call(null,map__28926))?cljs.core.apply.call(null,cljs.core.hash_map,map__28926):map__28926);var props = map__28926__$1;var map__28927 = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28927__$1 = ((cljs.core.seq_QMARK_.call(null,map__28927))?cljs.core.apply.call(null,cljs.core.hash_map,map__28927):map__28927);var table_state = map__28927__$1;var table_data = cljs.core.get.call(null,map__28927__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28928 = cljs.core.get.call(null,map__28927__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28928__$1 = ((cljs.core.seq_QMARK_.call(null,map__28928))?cljs.core.apply.call(null,cljs.core.hash_map,map__28928):map__28928);var controls = map__28928__$1;var index_type = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__28928__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.ranges_table.t28929 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_table.t28929 = (function (p__28881,index_type,row_aggs,owner,metric_path,props,map__28926,map__28928,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28927,meta28930){
this.p__28881 = p__28881;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__28926 = map__28926;
this.map__28928 = map__28928;
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
this.map__28927 = map__28927;
this.meta28930 = meta28930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_table.t28929.cljs$lang$type = true;
clustermap.components.ranges_table.t28929.cljs$lang$ctorStr = "clustermap.components.ranges-table/t28929";
clustermap.components.ranges_table.t28929.cljs$lang$ctorPrWriter = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-table/t28929");
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28929.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_table.t28929.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_,p__28932,p__28933){var self__ = this;
var map__28934 = p__28932;var map__28934__$1 = ((cljs.core.seq_QMARK_.call(null,map__28934))?cljs.core.apply.call(null,cljs.core.hash_map,map__28934):map__28934);var next_props = map__28934__$1;var map__28935 = cljs.core.get.call(null,map__28934__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28935__$1 = ((cljs.core.seq_QMARK_.call(null,map__28935))?cljs.core.apply.call(null,cljs.core.hash_map,map__28935):map__28935);var next_table_state = map__28935__$1;var next_table_data = cljs.core.get.call(null,map__28935__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28936 = cljs.core.get.call(null,map__28935__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28936__$1 = ((cljs.core.seq_QMARK_.call(null,map__28936))?cljs.core.apply.call(null,cljs.core.hash_map,map__28936):map__28936);var next_controls = map__28936__$1;var next_col_aggs = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__28936__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__28934__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28937 = p__28933;var map__28937__$1 = ((cljs.core.seq_QMARK_.call(null,map__28937))?cljs.core.apply.call(null,cljs.core.hash_map,map__28937):map__28937);var fetch_data_fn = cljs.core.get.call(null,map__28937__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28934,map__28934__$1,next_props,map__28935,map__28935__$1,next_table_state,next_table_data,map__28936,map__28936__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28937,map__28937__$1,fetch_data_fn,map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28934,map__28934__$1,next_props,map__28935,map__28935__$1,next_table_state,next_table_data,map__28936,map__28936__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28937,map__28937__$1,fetch_data_fn,map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (state_28955){var state_val_28956 = (state_28955[(1)]);if((state_val_28956 === (5)))
{var inst_28953 = (state_28955[(2)]);var state_28955__$1 = state_28955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else
{if((state_val_28956 === (4)))
{var state_28955__$1 = state_28955;var statearr_28957_28970 = state_28955__$1;(statearr_28957_28970[(2)] = null);
(statearr_28957_28970[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (3)))
{var inst_28940 = (state_28955[(7)]);var inst_28942 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28943 = ["RANGES-TABLE-DATA",inst_28940];var inst_28944 = (new cljs.core.PersistentVector(null,2,(5),inst_28942,inst_28943,null));var inst_28945 = cljs.core.clj__GT_js.call(null,inst_28944);var inst_28946 = console.log(inst_28945);var inst_28947 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28948 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28949 = (new cljs.core.PersistentVector(null,1,(5),inst_28947,inst_28948,null));var inst_28950 = om.core.update_BANG_.call(null,self__.table_state,inst_28949,inst_28940);var state_28955__$1 = (function (){var statearr_28958 = state_28955;(statearr_28958[(8)] = inst_28946);
return statearr_28958;
})();var statearr_28959_28971 = state_28955__$1;(statearr_28959_28971[(2)] = inst_28950);
(statearr_28959_28971[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (2)))
{var inst_28940 = (state_28955[(7)]);var inst_28940__$1 = (state_28955[(2)]);var state_28955__$1 = (function (){var statearr_28960 = state_28955;(statearr_28960[(7)] = inst_28940__$1);
return statearr_28960;
})();if(cljs.core.truth_(inst_28940__$1))
{var statearr_28961_28972 = state_28955__$1;(statearr_28961_28972[(1)] = (3));
} else
{var statearr_28962_28973 = state_28955__$1;(statearr_28962_28973[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28956 === (1)))
{var inst_28938 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_28955__$1 = state_28955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(2),inst_28938);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28934,map__28934__$1,next_props,map__28935,map__28935__$1,next_table_state,next_table_data,map__28936,map__28936__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28937,map__28937__$1,fetch_data_fn,map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28934,map__28934__$1,next_props,map__28935,map__28935__$1,next_table_state,next_table_data,map__28936,map__28936__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28937,map__28937__$1,fetch_data_fn,map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28966 = [null,null,null,null,null,null,null,null,null];(statearr_28966[(0)] = state_machine__9111__auto__);
(statearr_28966[(1)] = (1));
return statearr_28966;
});
var state_machine__9111__auto____1 = (function (state_28955){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28955);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28967){if((e28967 instanceof Object))
{var ex__9114__auto__ = e28967;var statearr_28968_28974 = state_28955;(statearr_28968_28974[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28967;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28975 = state_28955;
state_28955 = G__28975;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28934,map__28934__$1,next_props,map__28935,map__28935__$1,next_table_state,next_table_data,map__28936,map__28936__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28937,map__28937__$1,fetch_data_fn,map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28969 = f__9126__auto__.call(null);(statearr_28969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28934,map__28934__$1,next_props,map__28935,map__28935__$1,next_table_state,next_table_data,map__28936,map__28936__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__28937,map__28937__$1,fetch_data_fn,map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28929.prototype.om$core$IRender$ = true;
clustermap.components.ranges_table.t28929.prototype.om$core$IRender$render$arity$1 = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.ranges_table.render_table.call(null,self__.table_state,self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28929.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_table.t28929.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28931){var self__ = this;
var _28931__$1 = this;return self__.meta28930;
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.t28929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function (_28931,meta28930__$1){var self__ = this;
var _28931__$1 = this;return (new clustermap.components.ranges_table.t28929(self__.p__28881,self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__28926,self__.map__28928,self__.row_path,self__.table_data,self__.metric_aggs,self__.index,self__.ranges_table_component,self__.col_path,self__.filter_spec,self__.table_state,self__.controls,self__.col_aggs,self__.title,self__.rows,self__.cols,self__.map__28927,meta28930__$1));
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
clustermap.components.ranges_table.__GT_t28929 = ((function (map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec){
return (function __GT_t28929(p__28881__$1,index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28926__$2,map__28928__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28927__$2,meta28930){return (new clustermap.components.ranges_table.t28929(p__28881__$1,index_type__$1,row_aggs__$1,owner__$1,metric_path__$1,props__$1,map__28926__$2,map__28928__$2,row_path__$1,table_data__$1,metric_aggs__$1,index__$1,ranges_table_component__$1,col_path__$1,filter_spec__$1,table_state__$1,controls__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,map__28927__$2,meta28930));
});})(map__28926,map__28926__$1,props,map__28927,map__28927__$1,table_state,table_data,map__28928,map__28928__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec))
;
}
return (new clustermap.components.ranges_table.t28929(p__28881,index_type,row_aggs,owner,metric_path,props,map__28926__$1,map__28928__$1,row_path,table_data,metric_aggs,index,ranges_table_component,col_path,filter_spec,table_state,controls,col_aggs,title,rows,cols,map__28927__$1,null));
});
