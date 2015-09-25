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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29842,comm,p__29843){var map__29900 = p__29842;var map__29900__$1 = ((cljs.core.seq_QMARK_.call(null,map__29900))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);var map__29901 = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29901__$1 = ((cljs.core.seq_QMARK_.call(null,map__29901))?cljs.core.apply.call(null,cljs.core.hash_map,map__29901):map__29901);var controls = map__29901__$1;var map__29902 = cljs.core.get.call(null,map__29901__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29902__$1 = ((cljs.core.seq_QMARK_.call(null,map__29902))?cljs.core.apply.call(null,cljs.core.hash_map,map__29902):map__29902);var summary_stats = map__29902__$1;var variables = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29903 = p__29843;var map__29903__$1 = ((cljs.core.seq_QMARK_.call(null,map__29903))?cljs.core.apply.call(null,cljs.core.hash_map,map__29903):map__29903);var data = cljs.core.get.call(null,map__29903__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data){
return (function iter__29904(s__29905){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data){
return (function (){var s__29905__$1 = s__29905;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29905__$1);if(temp__4126__auto__)
{var s__29905__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29905__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29905__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29907 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29906 = (0);while(true){
if((i__29906 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29906);cljs.core.chunk_append.call(null,b__29907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29906,row_variables,c__4375__auto__,size__4376__auto__,b__29907,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data){
return (function iter__29932(s__29933){return (new cljs.core.LazySeq(null,((function (i__29906,row_variables,c__4375__auto__,size__4376__auto__,b__29907,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data){
return (function (){var s__29933__$1 = s__29933;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29933__$1);if(temp__4126__auto____$1)
{var s__29933__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29933__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29933__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29935 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29934 = (0);while(true){
if((i__29934 < size__4376__auto____$1))
{var map__29940 = cljs.core._nth.call(null,c__4375__auto____$1,i__29934);var map__29940__$1 = ((cljs.core.seq_QMARK_.call(null,map__29940))?cljs.core.apply.call(null,cljs.core.hash_map,map__29940):map__29940);var render_fn = cljs.core.get.call(null,map__29940__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29940__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29940__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29940__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29935,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29941 = temp__4126__auto____$2;var map__29941__$1 = ((cljs.core.seq_QMARK_.call(null,map__29941))?cljs.core.apply.call(null,cljs.core.hash_map,map__29941):map__29941);var ch_key = cljs.core.get.call(null,map__29941__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29941__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29941__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29941__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29956 = (i__29934 + (1));
i__29934 = G__29956;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29935),iter__29932.call(null,cljs.core.chunk_rest.call(null,s__29933__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29935),null);
}
} else
{var map__29942 = cljs.core.first.call(null,s__29933__$2);var map__29942__$1 = ((cljs.core.seq_QMARK_.call(null,map__29942))?cljs.core.apply.call(null,cljs.core.hash_map,map__29942):map__29942);var render_fn = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29943 = temp__4126__auto____$2;var map__29943__$1 = ((cljs.core.seq_QMARK_.call(null,map__29943))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);var ch_key = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29932.call(null,cljs.core.rest.call(null,s__29933__$2)));
}
} else
{return null;
}
break;
}
});})(i__29906,row_variables,c__4375__auto__,size__4376__auto__,b__29907,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data))
,null,null));
});})(i__29906,row_variables,c__4375__auto__,size__4376__auto__,b__29907,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29957 = (i__29906 + (1));
i__29906 = G__29957;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29907),iter__29904.call(null,cljs.core.chunk_rest.call(null,s__29905__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29907),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29905__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data){
return (function iter__29944(s__29945){return (new cljs.core.LazySeq(null,((function (row_variables,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data){
return (function (){var s__29945__$1 = s__29945;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29945__$1);if(temp__4126__auto____$1)
{var s__29945__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29945__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29945__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29947 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29946 = (0);while(true){
if((i__29946 < size__4376__auto__))
{var map__29952 = cljs.core._nth.call(null,c__4375__auto__,i__29946);var map__29952__$1 = ((cljs.core.seq_QMARK_.call(null,map__29952))?cljs.core.apply.call(null,cljs.core.hash_map,map__29952):map__29952);var render_fn = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29952__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29947,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29953 = temp__4126__auto____$2;var map__29953__$1 = ((cljs.core.seq_QMARK_.call(null,map__29953))?cljs.core.apply.call(null,cljs.core.hash_map,map__29953):map__29953);var ch_key = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29958 = (i__29946 + (1));
i__29946 = G__29958;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29947),iter__29944.call(null,cljs.core.chunk_rest.call(null,s__29945__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29947),null);
}
} else
{var map__29954 = cljs.core.first.call(null,s__29945__$2);var map__29954__$1 = ((cljs.core.seq_QMARK_.call(null,map__29954))?cljs.core.apply.call(null,cljs.core.hash_map,map__29954):map__29954);var render_fn = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29954__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29955 = temp__4126__auto____$2;var map__29955__$1 = ((cljs.core.seq_QMARK_.call(null,map__29955))?cljs.core.apply.call(null,cljs.core.hash_map,map__29955):map__29955);var ch_key = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29955__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29944.call(null,cljs.core.rest.call(null,s__29945__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data))
,null,null));
});})(row_variables,s__29905__$2,temp__4126__auto__,belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29904.call(null,cljs.core.rest.call(null,s__29905__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data))
,null,null));
});})(belongs_to_vars,map__29900,map__29900__$1,map__29901,map__29901__$1,controls,map__29902,map__29902__$1,summary_stats,variables,map__29903,map__29903__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29959,owner){var map__30002 = p__29959;var map__30002__$1 = ((cljs.core.seq_QMARK_.call(null,map__30002))?cljs.core.apply.call(null,cljs.core.hash_map,map__30002):map__30002);var data = map__30002__$1;var filt = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__30003 = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__30003__$1 = ((cljs.core.seq_QMARK_.call(null,map__30003))?cljs.core.apply.call(null,cljs.core.hash_map,map__30003):map__30003);var map_report = map__30003__$1;var map__30004 = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);var controls = map__30004__$1;var map__30005 = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__30005__$1 = ((cljs.core.seq_QMARK_.call(null,map__30005))?cljs.core.apply.call(null,cljs.core.hash_map,map__30005):map__30005);var summary_stats = map__30005__$1;var variables = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__30005__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t30006 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30006 = (function (filt,index_type,map__30005,owner,data,p__29959,index,map__30002,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__30003,variables,map__30004,meta30007){
this.filt = filt;
this.index_type = index_type;
this.map__30005 = map__30005;
this.owner = owner;
this.data = data;
this.p__29959 = p__29959;
this.index = index;
this.map__30002 = map__30002;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__30003 = map__30003;
this.variables = variables;
this.map__30004 = map__30004;
this.meta30007 = meta30007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30006.cljs$lang$type = true;
clustermap.components.map_report.t30006.cljs$lang$ctorStr = "clustermap.components.map-report/t30006";
clustermap.components.map_report.t30006.cljs$lang$ctorPrWriter = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t30006");
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30006.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t30006.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__30009,p__30010){var self__ = this;
var map__30011 = p__30009;var map__30011__$1 = ((cljs.core.seq_QMARK_.call(null,map__30011))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);var next_data = map__30011__$1;var next_filt = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__30012 = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__30012__$1 = ((cljs.core.seq_QMARK_.call(null,map__30012))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);var next_map_report = map__30012__$1;var map__30013 = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30013__$1 = ((cljs.core.seq_QMARK_.call(null,map__30013))?cljs.core.apply.call(null,cljs.core.hash_map,map__30013):map__30013);var next_controls = map__30013__$1;var map__30014 = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__30014__$1 = ((cljs.core.seq_QMARK_.call(null,map__30014))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);var next_summary_stats = map__30014__$1;var next_index = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__30015 = p__30010;var map__30015__$1 = ((cljs.core.seq_QMARK_.call(null,map__30015))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);var fetch_data_fn = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__30011,map__30011__$1,next_data,next_filt,map__30012,map__30012__$1,next_map_report,map__30013,map__30013__$1,next_controls,map__30014,map__30014__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30015,map__30015__$1,fetch_data_fn,map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__30011,map__30011__$1,next_data,next_filt,map__30012,map__30012__$1,next_map_report,map__30013,map__30013__$1,next_controls,map__30014,map__30014__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30015,map__30015__$1,fetch_data_fn,map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_30029){var state_val_30030 = (state_30029[(1)]);if((state_val_30030 === (5)))
{var inst_30027 = (state_30029[(2)]);var state_30029__$1 = state_30029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30029__$1,inst_30027);
} else
{if((state_val_30030 === (4)))
{var state_30029__$1 = state_30029;var statearr_30031_30044 = state_30029__$1;(statearr_30031_30044[(2)] = null);
(statearr_30031_30044[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30030 === (3)))
{var inst_30019 = (state_30029[(7)]);var inst_30021 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30022 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_30023 = (new cljs.core.PersistentVector(null,1,(5),inst_30021,inst_30022,null));var inst_30024 = om.core.update_BANG_.call(null,self__.map_report,inst_30023,inst_30019);var state_30029__$1 = state_30029;var statearr_30032_30045 = state_30029__$1;(statearr_30032_30045[(2)] = inst_30024);
(statearr_30032_30045[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30030 === (2)))
{var inst_30019 = (state_30029[(7)]);var inst_30019__$1 = (state_30029[(2)]);var state_30029__$1 = (function (){var statearr_30033 = state_30029;(statearr_30033[(7)] = inst_30019__$1);
return statearr_30033;
})();if(cljs.core.truth_(inst_30019__$1))
{var statearr_30034_30046 = state_30029__$1;(statearr_30034_30046[(1)] = (3));
} else
{var statearr_30035_30047 = state_30029__$1;(statearr_30035_30047[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30030 === (1)))
{var inst_30016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_30017 = fetch_data_fn.call(null,next_index,next_index_type,inst_30016,next_filt,null);var state_30029__$1 = state_30029;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30029__$1,(2),inst_30017);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__30011,map__30011__$1,next_data,next_filt,map__30012,map__30012__$1,next_map_report,map__30013,map__30013__$1,next_controls,map__30014,map__30014__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30015,map__30015__$1,fetch_data_fn,map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__30011,map__30011__$1,next_data,next_filt,map__30012,map__30012__$1,next_map_report,map__30013,map__30013__$1,next_controls,map__30014,map__30014__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30015,map__30015__$1,fetch_data_fn,map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30039 = [null,null,null,null,null,null,null,null];(statearr_30039[(0)] = state_machine__9111__auto__);
(statearr_30039[(1)] = (1));
return statearr_30039;
});
var state_machine__9111__auto____1 = (function (state_30029){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30029);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30040){if((e30040 instanceof Object))
{var ex__9114__auto__ = e30040;var statearr_30041_30048 = state_30029;(statearr_30041_30048[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30040;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30049 = state_30029;
state_30029 = G__30049;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30029){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__30011,map__30011__$1,next_data,next_filt,map__30012,map__30012__$1,next_map_report,map__30013,map__30013__$1,next_controls,map__30014,map__30014__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30015,map__30015__$1,fetch_data_fn,map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_30042 = f__9126__auto__.call(null);(statearr_30042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__30011,map__30011__$1,next_data,next_filt,map__30012,map__30012__$1,next_map_report,map__30013,map__30013__$1,next_controls,map__30014,map__30014__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30015,map__30015__$1,fetch_data_fn,map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30006.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t30006.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__30043 = om.core.get_shared.call(null,self__.owner);var map__30043__$1 = ((cljs.core.seq_QMARK_.call(null,map__30043))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043):map__30043);var comm = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30006.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t30006.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_30008){var self__ = this;
var _30008__$1 = this;return self__.meta30007;
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_30008,meta30007__$1){var self__ = this;
var _30008__$1 = this;return (new clustermap.components.map_report.t30006(self__.filt,self__.index_type,self__.map__30005,self__.owner,self__.data,self__.p__29959,self__.index,self__.map__30002,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__30003,self__.variables,self__.map__30004,meta30007__$1));
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t30006 = ((function (map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t30006(filt__$1,index_type__$1,map__30005__$2,owner__$1,data__$1,p__29959__$1,index__$1,map__30002__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__30003__$2,variables__$1,map__30004__$2,meta30007){return (new clustermap.components.map_report.t30006(filt__$1,index_type__$1,map__30005__$2,owner__$1,data__$1,p__29959__$1,index__$1,map__30002__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__30003__$2,variables__$1,map__30004__$2,meta30007));
});})(map__30002,map__30002__$1,data,filt,map__30003,map__30003__$1,map_report,map__30004,map__30004__$1,controls,map__30005,map__30005__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t30006(filt,index_type,map__30005__$1,owner,data,p__29959,index,map__30002__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__30003__$1,variables,map__30004__$1,null));
});
