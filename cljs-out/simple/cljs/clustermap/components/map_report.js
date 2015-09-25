// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.api');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29846,comm,p__29847){var map__29904 = p__29846;var map__29904__$1 = ((cljs.core.seq_QMARK_.call(null,map__29904))?cljs.core.apply.call(null,cljs.core.hash_map,map__29904):map__29904);var map__29905 = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29905__$1 = ((cljs.core.seq_QMARK_.call(null,map__29905))?cljs.core.apply.call(null,cljs.core.hash_map,map__29905):map__29905);var controls = map__29905__$1;var map__29906 = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29906__$1 = ((cljs.core.seq_QMARK_.call(null,map__29906))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);var summary_stats = map__29906__$1;var variables = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29907 = p__29847;var map__29907__$1 = ((cljs.core.seq_QMARK_.call(null,map__29907))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907):map__29907);var data = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data){
return (function iter__29908(s__29909){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data){
return (function (){var s__29909__$1 = s__29909;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29909__$1);if(temp__4126__auto__)
{var s__29909__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29909__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29909__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29911 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29910 = (0);while(true){
if((i__29910 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29910);cljs.core.chunk_append.call(null,b__29911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29910,row_variables,c__4375__auto__,size__4376__auto__,b__29911,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data){
return (function iter__29936(s__29937){return (new cljs.core.LazySeq(null,((function (i__29910,row_variables,c__4375__auto__,size__4376__auto__,b__29911,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data){
return (function (){var s__29937__$1 = s__29937;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29937__$1);if(temp__4126__auto____$1)
{var s__29937__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29937__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29937__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29939 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29938 = (0);while(true){
if((i__29938 < size__4376__auto____$1))
{var map__29944 = cljs.core._nth.call(null,c__4375__auto____$1,i__29938);var map__29944__$1 = ((cljs.core.seq_QMARK_.call(null,map__29944))?cljs.core.apply.call(null,cljs.core.hash_map,map__29944):map__29944);var render_fn = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29939,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29945 = temp__4126__auto____$2;var map__29945__$1 = ((cljs.core.seq_QMARK_.call(null,map__29945))?cljs.core.apply.call(null,cljs.core.hash_map,map__29945):map__29945);var ch_key = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29945__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29960 = (i__29938 + (1));
i__29938 = G__29960;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29939),iter__29936.call(null,cljs.core.chunk_rest.call(null,s__29937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29939),null);
}
} else
{var map__29946 = cljs.core.first.call(null,s__29937__$2);var map__29946__$1 = ((cljs.core.seq_QMARK_.call(null,map__29946))?cljs.core.apply.call(null,cljs.core.hash_map,map__29946):map__29946);var render_fn = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29947 = temp__4126__auto____$2;var map__29947__$1 = ((cljs.core.seq_QMARK_.call(null,map__29947))?cljs.core.apply.call(null,cljs.core.hash_map,map__29947):map__29947);var ch_key = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29936.call(null,cljs.core.rest.call(null,s__29937__$2)));
}
} else
{return null;
}
break;
}
});})(i__29910,row_variables,c__4375__auto__,size__4376__auto__,b__29911,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data))
,null,null));
});})(i__29910,row_variables,c__4375__auto__,size__4376__auto__,b__29911,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29961 = (i__29910 + (1));
i__29910 = G__29961;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29911),iter__29908.call(null,cljs.core.chunk_rest.call(null,s__29909__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29911),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29909__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data){
return (function iter__29948(s__29949){return (new cljs.core.LazySeq(null,((function (row_variables,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data){
return (function (){var s__29949__$1 = s__29949;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29949__$1);if(temp__4126__auto____$1)
{var s__29949__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29949__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29949__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29951 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29950 = (0);while(true){
if((i__29950 < size__4376__auto__))
{var map__29956 = cljs.core._nth.call(null,c__4375__auto__,i__29950);var map__29956__$1 = ((cljs.core.seq_QMARK_.call(null,map__29956))?cljs.core.apply.call(null,cljs.core.hash_map,map__29956):map__29956);var render_fn = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29951,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29957 = temp__4126__auto____$2;var map__29957__$1 = ((cljs.core.seq_QMARK_.call(null,map__29957))?cljs.core.apply.call(null,cljs.core.hash_map,map__29957):map__29957);var ch_key = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29957__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29962 = (i__29950 + (1));
i__29950 = G__29962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29951),iter__29948.call(null,cljs.core.chunk_rest.call(null,s__29949__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29951),null);
}
} else
{var map__29958 = cljs.core.first.call(null,s__29949__$2);var map__29958__$1 = ((cljs.core.seq_QMARK_.call(null,map__29958))?cljs.core.apply.call(null,cljs.core.hash_map,map__29958):map__29958);var render_fn = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29958__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29959 = temp__4126__auto____$2;var map__29959__$1 = ((cljs.core.seq_QMARK_.call(null,map__29959))?cljs.core.apply.call(null,cljs.core.hash_map,map__29959):map__29959);var ch_key = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29948.call(null,cljs.core.rest.call(null,s__29949__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data))
,null,null));
});})(row_variables,s__29909__$2,temp__4126__auto__,belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29908.call(null,cljs.core.rest.call(null,s__29909__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data))
,null,null));
});})(belongs_to_vars,map__29904,map__29904__$1,map__29905,map__29905__$1,controls,map__29906,map__29906__$1,summary_stats,variables,map__29907,map__29907__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29963,owner){var map__30006 = p__29963;var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);var data = map__30006__$1;var filt = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__30007 = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__30007__$1 = ((cljs.core.seq_QMARK_.call(null,map__30007))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);var map_report = map__30007__$1;var map__30008 = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30008__$1 = ((cljs.core.seq_QMARK_.call(null,map__30008))?cljs.core.apply.call(null,cljs.core.hash_map,map__30008):map__30008);var controls = map__30008__$1;var map__30009 = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__30009__$1 = ((cljs.core.seq_QMARK_.call(null,map__30009))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);var summary_stats = map__30009__$1;var variables = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t30010 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30010 = (function (filt,index_type,p__29963,owner,data,map__30009,index,map__30008,map__30006,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__30007,meta30011){
this.filt = filt;
this.index_type = index_type;
this.p__29963 = p__29963;
this.owner = owner;
this.data = data;
this.map__30009 = map__30009;
this.index = index;
this.map__30008 = map__30008;
this.map__30006 = map__30006;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__30007 = map__30007;
this.meta30011 = meta30011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30010.cljs$lang$type = true;
clustermap.components.map_report.t30010.cljs$lang$ctorStr = "clustermap.components.map-report/t30010";
clustermap.components.map_report.t30010.cljs$lang$ctorPrWriter = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t30010");
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30010.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t30010.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__30013,p__30014){var self__ = this;
var map__30015 = p__30013;var map__30015__$1 = ((cljs.core.seq_QMARK_.call(null,map__30015))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);var next_data = map__30015__$1;var next_filt = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__30016 = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__30016__$1 = ((cljs.core.seq_QMARK_.call(null,map__30016))?cljs.core.apply.call(null,cljs.core.hash_map,map__30016):map__30016);var next_map_report = map__30016__$1;var map__30017 = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30017__$1 = ((cljs.core.seq_QMARK_.call(null,map__30017))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);var next_controls = map__30017__$1;var map__30018 = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__30018__$1 = ((cljs.core.seq_QMARK_.call(null,map__30018))?cljs.core.apply.call(null,cljs.core.hash_map,map__30018):map__30018);var next_summary_stats = map__30018__$1;var next_index = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__30019 = p__30014;var map__30019__$1 = ((cljs.core.seq_QMARK_.call(null,map__30019))?cljs.core.apply.call(null,cljs.core.hash_map,map__30019):map__30019);var fetch_data_fn = cljs.core.get.call(null,map__30019__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__30015,map__30015__$1,next_data,next_filt,map__30016,map__30016__$1,next_map_report,map__30017,map__30017__$1,next_controls,map__30018,map__30018__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30019,map__30019__$1,fetch_data_fn,map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__30015,map__30015__$1,next_data,next_filt,map__30016,map__30016__$1,next_map_report,map__30017,map__30017__$1,next_controls,map__30018,map__30018__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30019,map__30019__$1,fetch_data_fn,map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_30033){var state_val_30034 = (state_30033[(1)]);if((state_val_30034 === (5)))
{var inst_30031 = (state_30033[(2)]);var state_30033__$1 = state_30033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30033__$1,inst_30031);
} else
{if((state_val_30034 === (4)))
{var state_30033__$1 = state_30033;var statearr_30035_30048 = state_30033__$1;(statearr_30035_30048[(2)] = null);
(statearr_30035_30048[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30034 === (3)))
{var inst_30023 = (state_30033[(7)]);var inst_30025 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30026 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_30027 = (new cljs.core.PersistentVector(null,1,(5),inst_30025,inst_30026,null));var inst_30028 = om.core.update_BANG_.call(null,self__.map_report,inst_30027,inst_30023);var state_30033__$1 = state_30033;var statearr_30036_30049 = state_30033__$1;(statearr_30036_30049[(2)] = inst_30028);
(statearr_30036_30049[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30034 === (2)))
{var inst_30023 = (state_30033[(7)]);var inst_30023__$1 = (state_30033[(2)]);var state_30033__$1 = (function (){var statearr_30037 = state_30033;(statearr_30037[(7)] = inst_30023__$1);
return statearr_30037;
})();if(cljs.core.truth_(inst_30023__$1))
{var statearr_30038_30050 = state_30033__$1;(statearr_30038_30050[(1)] = (3));
} else
{var statearr_30039_30051 = state_30033__$1;(statearr_30039_30051[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30034 === (1)))
{var inst_30020 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_30021 = fetch_data_fn.call(null,next_index,next_index_type,inst_30020,next_filt,null);var state_30033__$1 = state_30033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30033__$1,(2),inst_30021);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__30015,map__30015__$1,next_data,next_filt,map__30016,map__30016__$1,next_map_report,map__30017,map__30017__$1,next_controls,map__30018,map__30018__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30019,map__30019__$1,fetch_data_fn,map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__30015,map__30015__$1,next_data,next_filt,map__30016,map__30016__$1,next_map_report,map__30017,map__30017__$1,next_controls,map__30018,map__30018__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30019,map__30019__$1,fetch_data_fn,map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30043 = [null,null,null,null,null,null,null,null];(statearr_30043[(0)] = state_machine__9111__auto__);
(statearr_30043[(1)] = (1));
return statearr_30043;
});
var state_machine__9111__auto____1 = (function (state_30033){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30033);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30044){if((e30044 instanceof Object))
{var ex__9114__auto__ = e30044;var statearr_30045_30052 = state_30033;(statearr_30045_30052[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30033);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30053 = state_30033;
state_30033 = G__30053;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30033){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__30015,map__30015__$1,next_data,next_filt,map__30016,map__30016__$1,next_map_report,map__30017,map__30017__$1,next_controls,map__30018,map__30018__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30019,map__30019__$1,fetch_data_fn,map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_30046 = f__9126__auto__.call(null);(statearr_30046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__30015,map__30015__$1,next_data,next_filt,map__30016,map__30016__$1,next_map_report,map__30017,map__30017__$1,next_controls,map__30018,map__30018__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30019,map__30019__$1,fetch_data_fn,map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30010.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t30010.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__30047 = om.core.get_shared.call(null,self__.owner);var map__30047__$1 = ((cljs.core.seq_QMARK_.call(null,map__30047))?cljs.core.apply.call(null,cljs.core.hash_map,map__30047):map__30047);var comm = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30010.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t30010.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_30012){var self__ = this;
var _30012__$1 = this;return self__.meta30011;
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_30012,meta30011__$1){var self__ = this;
var _30012__$1 = this;return (new clustermap.components.map_report.t30010(self__.filt,self__.index_type,self__.p__29963,self__.owner,self__.data,self__.map__30009,self__.index,self__.map__30008,self__.map__30006,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__30007,meta30011__$1));
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t30010 = ((function (map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t30010(filt__$1,index_type__$1,p__29963__$1,owner__$1,data__$1,map__30009__$2,index__$1,map__30008__$2,map__30006__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__30007__$2,meta30011){return (new clustermap.components.map_report.t30010(filt__$1,index_type__$1,p__29963__$1,owner__$1,data__$1,map__30009__$2,index__$1,map__30008__$2,map__30006__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__30007__$2,meta30011));
});})(map__30006,map__30006__$1,data,filt,map__30007,map__30007__$1,map_report,map__30008,map__30008__$1,controls,map__30009,map__30009__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t30010(filt,index_type,p__29963,owner,data,map__30009__$1,index,map__30008__$1,map__30006__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__30007__$1,null));
});
