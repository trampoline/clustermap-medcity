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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29803,comm,p__29804){var map__29861 = p__29803;var map__29861__$1 = ((cljs.core.seq_QMARK_.call(null,map__29861))?cljs.core.apply.call(null,cljs.core.hash_map,map__29861):map__29861);var map__29862 = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29862__$1 = ((cljs.core.seq_QMARK_.call(null,map__29862))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);var controls = map__29862__$1;var map__29863 = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29863__$1 = ((cljs.core.seq_QMARK_.call(null,map__29863))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);var summary_stats = map__29863__$1;var variables = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29864 = p__29804;var map__29864__$1 = ((cljs.core.seq_QMARK_.call(null,map__29864))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864):map__29864);var data = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data){
return (function iter__29865(s__29866){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data){
return (function (){var s__29866__$1 = s__29866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29866__$1);if(temp__4126__auto__)
{var s__29866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29866__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29866__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29868 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29867 = (0);while(true){
if((i__29867 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29867);cljs.core.chunk_append.call(null,b__29868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29867,row_variables,c__4375__auto__,size__4376__auto__,b__29868,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data){
return (function iter__29893(s__29894){return (new cljs.core.LazySeq(null,((function (i__29867,row_variables,c__4375__auto__,size__4376__auto__,b__29868,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data){
return (function (){var s__29894__$1 = s__29894;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29894__$1);if(temp__4126__auto____$1)
{var s__29894__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29894__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29894__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29896 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29895 = (0);while(true){
if((i__29895 < size__4376__auto____$1))
{var map__29901 = cljs.core._nth.call(null,c__4375__auto____$1,i__29895);var map__29901__$1 = ((cljs.core.seq_QMARK_.call(null,map__29901))?cljs.core.apply.call(null,cljs.core.hash_map,map__29901):map__29901);var render_fn = cljs.core.get.call(null,map__29901__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29901__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29901__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29901__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29896,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29902 = temp__4126__auto____$2;var map__29902__$1 = ((cljs.core.seq_QMARK_.call(null,map__29902))?cljs.core.apply.call(null,cljs.core.hash_map,map__29902):map__29902);var ch_key = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29917 = (i__29895 + (1));
i__29895 = G__29917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29896),iter__29893.call(null,cljs.core.chunk_rest.call(null,s__29894__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29896),null);
}
} else
{var map__29903 = cljs.core.first.call(null,s__29894__$2);var map__29903__$1 = ((cljs.core.seq_QMARK_.call(null,map__29903))?cljs.core.apply.call(null,cljs.core.hash_map,map__29903):map__29903);var render_fn = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29904 = temp__4126__auto____$2;var map__29904__$1 = ((cljs.core.seq_QMARK_.call(null,map__29904))?cljs.core.apply.call(null,cljs.core.hash_map,map__29904):map__29904);var ch_key = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29893.call(null,cljs.core.rest.call(null,s__29894__$2)));
}
} else
{return null;
}
break;
}
});})(i__29867,row_variables,c__4375__auto__,size__4376__auto__,b__29868,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data))
,null,null));
});})(i__29867,row_variables,c__4375__auto__,size__4376__auto__,b__29868,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29918 = (i__29867 + (1));
i__29867 = G__29918;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29868),iter__29865.call(null,cljs.core.chunk_rest.call(null,s__29866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29868),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29866__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data){
return (function iter__29905(s__29906){return (new cljs.core.LazySeq(null,((function (row_variables,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data){
return (function (){var s__29906__$1 = s__29906;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29906__$1);if(temp__4126__auto____$1)
{var s__29906__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29906__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29906__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29908 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29907 = (0);while(true){
if((i__29907 < size__4376__auto__))
{var map__29913 = cljs.core._nth.call(null,c__4375__auto__,i__29907);var map__29913__$1 = ((cljs.core.seq_QMARK_.call(null,map__29913))?cljs.core.apply.call(null,cljs.core.hash_map,map__29913):map__29913);var render_fn = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29908,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29914 = temp__4126__auto____$2;var map__29914__$1 = ((cljs.core.seq_QMARK_.call(null,map__29914))?cljs.core.apply.call(null,cljs.core.hash_map,map__29914):map__29914);var ch_key = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29919 = (i__29907 + (1));
i__29907 = G__29919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29908),iter__29905.call(null,cljs.core.chunk_rest.call(null,s__29906__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29908),null);
}
} else
{var map__29915 = cljs.core.first.call(null,s__29906__$2);var map__29915__$1 = ((cljs.core.seq_QMARK_.call(null,map__29915))?cljs.core.apply.call(null,cljs.core.hash_map,map__29915):map__29915);var render_fn = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29916 = temp__4126__auto____$2;var map__29916__$1 = ((cljs.core.seq_QMARK_.call(null,map__29916))?cljs.core.apply.call(null,cljs.core.hash_map,map__29916):map__29916);var ch_key = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29905.call(null,cljs.core.rest.call(null,s__29906__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data))
,null,null));
});})(row_variables,s__29866__$2,temp__4126__auto__,belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29865.call(null,cljs.core.rest.call(null,s__29866__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data))
,null,null));
});})(belongs_to_vars,map__29861,map__29861__$1,map__29862,map__29862__$1,controls,map__29863,map__29863__$1,summary_stats,variables,map__29864,map__29864__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29920,owner){var map__29963 = p__29920;var map__29963__$1 = ((cljs.core.seq_QMARK_.call(null,map__29963))?cljs.core.apply.call(null,cljs.core.hash_map,map__29963):map__29963);var data = map__29963__$1;var filt = cljs.core.get.call(null,map__29963__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29964 = cljs.core.get.call(null,map__29963__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29964__$1 = ((cljs.core.seq_QMARK_.call(null,map__29964))?cljs.core.apply.call(null,cljs.core.hash_map,map__29964):map__29964);var map_report = map__29964__$1;var map__29965 = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29965__$1 = ((cljs.core.seq_QMARK_.call(null,map__29965))?cljs.core.apply.call(null,cljs.core.hash_map,map__29965):map__29965);var controls = map__29965__$1;var map__29966 = cljs.core.get.call(null,map__29965__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29966__$1 = ((cljs.core.seq_QMARK_.call(null,map__29966))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);var summary_stats = map__29966__$1;var variables = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29964__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29967 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29967 = (function (filt,index_type,owner,data,map__29963,index,p__29920,map__29966,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__29964,variables,map__29965,meta29968){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.map__29963 = map__29963;
this.index = index;
this.p__29920 = p__29920;
this.map__29966 = map__29966;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__29964 = map__29964;
this.variables = variables;
this.map__29965 = map__29965;
this.meta29968 = meta29968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29967.cljs$lang$type = true;
clustermap.components.map_report.t29967.cljs$lang$ctorStr = "clustermap.components.map-report/t29967";
clustermap.components.map_report.t29967.cljs$lang$ctorPrWriter = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29967");
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29967.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29967.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29970,p__29971){var self__ = this;
var map__29972 = p__29970;var map__29972__$1 = ((cljs.core.seq_QMARK_.call(null,map__29972))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);var next_data = map__29972__$1;var next_filt = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29973 = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29973__$1 = ((cljs.core.seq_QMARK_.call(null,map__29973))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);var next_map_report = map__29973__$1;var map__29974 = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29974__$1 = ((cljs.core.seq_QMARK_.call(null,map__29974))?cljs.core.apply.call(null,cljs.core.hash_map,map__29974):map__29974);var next_controls = map__29974__$1;var map__29975 = cljs.core.get.call(null,map__29974__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29975__$1 = ((cljs.core.seq_QMARK_.call(null,map__29975))?cljs.core.apply.call(null,cljs.core.hash_map,map__29975):map__29975);var next_summary_stats = map__29975__$1;var next_index = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29976 = p__29971;var map__29976__$1 = ((cljs.core.seq_QMARK_.call(null,map__29976))?cljs.core.apply.call(null,cljs.core.hash_map,map__29976):map__29976);var fetch_data_fn = cljs.core.get.call(null,map__29976__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29972,map__29972__$1,next_data,next_filt,map__29973,map__29973__$1,next_map_report,map__29974,map__29974__$1,next_controls,map__29975,map__29975__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29976,map__29976__$1,fetch_data_fn,map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29972,map__29972__$1,next_data,next_filt,map__29973,map__29973__$1,next_map_report,map__29974,map__29974__$1,next_controls,map__29975,map__29975__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29976,map__29976__$1,fetch_data_fn,map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29990){var state_val_29991 = (state_29990[(1)]);if((state_val_29991 === (5)))
{var inst_29988 = (state_29990[(2)]);var state_29990__$1 = state_29990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29990__$1,inst_29988);
} else
{if((state_val_29991 === (4)))
{var state_29990__$1 = state_29990;var statearr_29992_30005 = state_29990__$1;(statearr_29992_30005[(2)] = null);
(statearr_29992_30005[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29991 === (3)))
{var inst_29980 = (state_29990[(7)]);var inst_29982 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29983 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29984 = (new cljs.core.PersistentVector(null,1,(5),inst_29982,inst_29983,null));var inst_29985 = om.core.update_BANG_.call(null,self__.map_report,inst_29984,inst_29980);var state_29990__$1 = state_29990;var statearr_29993_30006 = state_29990__$1;(statearr_29993_30006[(2)] = inst_29985);
(statearr_29993_30006[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29991 === (2)))
{var inst_29980 = (state_29990[(7)]);var inst_29980__$1 = (state_29990[(2)]);var state_29990__$1 = (function (){var statearr_29994 = state_29990;(statearr_29994[(7)] = inst_29980__$1);
return statearr_29994;
})();if(cljs.core.truth_(inst_29980__$1))
{var statearr_29995_30007 = state_29990__$1;(statearr_29995_30007[(1)] = (3));
} else
{var statearr_29996_30008 = state_29990__$1;(statearr_29996_30008[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29991 === (1)))
{var inst_29977 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29978 = fetch_data_fn.call(null,next_index,next_index_type,inst_29977,next_filt,null);var state_29990__$1 = state_29990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29990__$1,(2),inst_29978);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29972,map__29972__$1,next_data,next_filt,map__29973,map__29973__$1,next_map_report,map__29974,map__29974__$1,next_controls,map__29975,map__29975__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29976,map__29976__$1,fetch_data_fn,map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29972,map__29972__$1,next_data,next_filt,map__29973,map__29973__$1,next_map_report,map__29974,map__29974__$1,next_controls,map__29975,map__29975__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29976,map__29976__$1,fetch_data_fn,map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30000 = [null,null,null,null,null,null,null,null];(statearr_30000[(0)] = state_machine__9111__auto__);
(statearr_30000[(1)] = (1));
return statearr_30000;
});
var state_machine__9111__auto____1 = (function (state_29990){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29990);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30001){if((e30001 instanceof Object))
{var ex__9114__auto__ = e30001;var statearr_30002_30009 = state_29990;(statearr_30002_30009[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30001;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30010 = state_29990;
state_29990 = G__30010;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29990){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29972,map__29972__$1,next_data,next_filt,map__29973,map__29973__$1,next_map_report,map__29974,map__29974__$1,next_controls,map__29975,map__29975__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29976,map__29976__$1,fetch_data_fn,map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_30003 = f__9126__auto__.call(null);(statearr_30003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29972,map__29972__$1,next_data,next_filt,map__29973,map__29973__$1,next_map_report,map__29974,map__29974__$1,next_controls,map__29975,map__29975__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29976,map__29976__$1,fetch_data_fn,map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29967.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29967.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__30004 = om.core.get_shared.call(null,self__.owner);var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);var comm = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29967.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29967.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29969){var self__ = this;
var _29969__$1 = this;return self__.meta29968;
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29969,meta29968__$1){var self__ = this;
var _29969__$1 = this;return (new clustermap.components.map_report.t29967(self__.filt,self__.index_type,self__.owner,self__.data,self__.map__29963,self__.index,self__.p__29920,self__.map__29966,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__29964,self__.variables,self__.map__29965,meta29968__$1));
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29967 = ((function (map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29967(filt__$1,index_type__$1,owner__$1,data__$1,map__29963__$2,index__$1,p__29920__$1,map__29966__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29964__$2,variables__$1,map__29965__$2,meta29968){return (new clustermap.components.map_report.t29967(filt__$1,index_type__$1,owner__$1,data__$1,map__29963__$2,index__$1,p__29920__$1,map__29966__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__29964__$2,variables__$1,map__29965__$2,meta29968));
});})(map__29963,map__29963__$1,data,filt,map__29964,map__29964__$1,map_report,map__29965,map__29965__$1,controls,map__29966,map__29966__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29967(filt,index_type,owner,data,map__29963__$1,index,p__29920,map__29966__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__29964__$1,variables,map__29965__$1,null));
});
