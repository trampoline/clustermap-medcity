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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29837,comm,p__29838){var map__29895 = p__29837;var map__29895__$1 = ((cljs.core.seq_QMARK_.call(null,map__29895))?cljs.core.apply.call(null,cljs.core.hash_map,map__29895):map__29895);var map__29896 = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29896__$1 = ((cljs.core.seq_QMARK_.call(null,map__29896))?cljs.core.apply.call(null,cljs.core.hash_map,map__29896):map__29896);var controls = map__29896__$1;var map__29897 = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29897__$1 = ((cljs.core.seq_QMARK_.call(null,map__29897))?cljs.core.apply.call(null,cljs.core.hash_map,map__29897):map__29897);var summary_stats = map__29897__$1;var variables = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29898 = p__29838;var map__29898__$1 = ((cljs.core.seq_QMARK_.call(null,map__29898))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);var data = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data){
return (function iter__29899(s__29900){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data){
return (function (){var s__29900__$1 = s__29900;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29900__$1);if(temp__4126__auto__)
{var s__29900__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29900__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29900__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29902 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29901 = (0);while(true){
if((i__29901 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29901);cljs.core.chunk_append.call(null,b__29902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29901,row_variables,c__4375__auto__,size__4376__auto__,b__29902,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data){
return (function iter__29927(s__29928){return (new cljs.core.LazySeq(null,((function (i__29901,row_variables,c__4375__auto__,size__4376__auto__,b__29902,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data){
return (function (){var s__29928__$1 = s__29928;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29928__$1);if(temp__4126__auto____$1)
{var s__29928__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29928__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29928__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29930 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29929 = (0);while(true){
if((i__29929 < size__4376__auto____$1))
{var map__29935 = cljs.core._nth.call(null,c__4375__auto____$1,i__29929);var map__29935__$1 = ((cljs.core.seq_QMARK_.call(null,map__29935))?cljs.core.apply.call(null,cljs.core.hash_map,map__29935):map__29935);var render_fn = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29930,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29936 = temp__4126__auto____$2;var map__29936__$1 = ((cljs.core.seq_QMARK_.call(null,map__29936))?cljs.core.apply.call(null,cljs.core.hash_map,map__29936):map__29936);var ch_key = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29936__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29951 = (i__29929 + (1));
i__29929 = G__29951;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29930),iter__29927.call(null,cljs.core.chunk_rest.call(null,s__29928__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29930),null);
}
} else
{var map__29937 = cljs.core.first.call(null,s__29928__$2);var map__29937__$1 = ((cljs.core.seq_QMARK_.call(null,map__29937))?cljs.core.apply.call(null,cljs.core.hash_map,map__29937):map__29937);var render_fn = cljs.core.get.call(null,map__29937__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29937__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29937__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29937__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29938 = temp__4126__auto____$2;var map__29938__$1 = ((cljs.core.seq_QMARK_.call(null,map__29938))?cljs.core.apply.call(null,cljs.core.hash_map,map__29938):map__29938);var ch_key = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29927.call(null,cljs.core.rest.call(null,s__29928__$2)));
}
} else
{return null;
}
break;
}
});})(i__29901,row_variables,c__4375__auto__,size__4376__auto__,b__29902,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data))
,null,null));
});})(i__29901,row_variables,c__4375__auto__,size__4376__auto__,b__29902,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29952 = (i__29901 + (1));
i__29901 = G__29952;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29902),iter__29899.call(null,cljs.core.chunk_rest.call(null,s__29900__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29902),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29900__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data){
return (function iter__29939(s__29940){return (new cljs.core.LazySeq(null,((function (row_variables,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data){
return (function (){var s__29940__$1 = s__29940;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29940__$1);if(temp__4126__auto____$1)
{var s__29940__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29940__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29940__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29942 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29941 = (0);while(true){
if((i__29941 < size__4376__auto__))
{var map__29947 = cljs.core._nth.call(null,c__4375__auto__,i__29941);var map__29947__$1 = ((cljs.core.seq_QMARK_.call(null,map__29947))?cljs.core.apply.call(null,cljs.core.hash_map,map__29947):map__29947);var render_fn = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29942,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29948 = temp__4126__auto____$2;var map__29948__$1 = ((cljs.core.seq_QMARK_.call(null,map__29948))?cljs.core.apply.call(null,cljs.core.hash_map,map__29948):map__29948);var ch_key = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29948__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29953 = (i__29941 + (1));
i__29941 = G__29953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29942),iter__29939.call(null,cljs.core.chunk_rest.call(null,s__29940__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29942),null);
}
} else
{var map__29949 = cljs.core.first.call(null,s__29940__$2);var map__29949__$1 = ((cljs.core.seq_QMARK_.call(null,map__29949))?cljs.core.apply.call(null,cljs.core.hash_map,map__29949):map__29949);var render_fn = cljs.core.get.call(null,map__29949__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29949__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29949__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29949__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29950 = temp__4126__auto____$2;var map__29950__$1 = ((cljs.core.seq_QMARK_.call(null,map__29950))?cljs.core.apply.call(null,cljs.core.hash_map,map__29950):map__29950);var ch_key = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29939.call(null,cljs.core.rest.call(null,s__29940__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data))
,null,null));
});})(row_variables,s__29900__$2,temp__4126__auto__,belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29899.call(null,cljs.core.rest.call(null,s__29900__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data))
,null,null));
});})(belongs_to_vars,map__29895,map__29895__$1,map__29896,map__29896__$1,controls,map__29897,map__29897__$1,summary_stats,variables,map__29898,map__29898__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29954,owner){var map__29997 = p__29954;var map__29997__$1 = ((cljs.core.seq_QMARK_.call(null,map__29997))?cljs.core.apply.call(null,cljs.core.hash_map,map__29997):map__29997);var data = map__29997__$1;var filt = cljs.core.get.call(null,map__29997__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29998 = cljs.core.get.call(null,map__29997__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29998__$1 = ((cljs.core.seq_QMARK_.call(null,map__29998))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);var map_report = map__29998__$1;var map__29999 = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29999__$1 = ((cljs.core.seq_QMARK_.call(null,map__29999))?cljs.core.apply.call(null,cljs.core.hash_map,map__29999):map__29999);var controls = map__29999__$1;var map__30000 = cljs.core.get.call(null,map__29999__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__30000__$1 = ((cljs.core.seq_QMARK_.call(null,map__30000))?cljs.core.apply.call(null,cljs.core.hash_map,map__30000):map__30000);var summary_stats = map__30000__$1;var variables = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__30000__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t30001 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30001 = (function (filt,index_type,owner,map__30000,map__29997,data,index,map__29998,p__29954,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29999,meta30002){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__30000 = map__30000;
this.map__29997 = map__29997;
this.data = data;
this.index = index;
this.map__29998 = map__29998;
this.p__29954 = p__29954;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__29999 = map__29999;
this.meta30002 = meta30002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30001.cljs$lang$type = true;
clustermap.components.map_report.t30001.cljs$lang$ctorStr = "clustermap.components.map-report/t30001";
clustermap.components.map_report.t30001.cljs$lang$ctorPrWriter = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t30001");
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30001.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t30001.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__30004,p__30005){var self__ = this;
var map__30006 = p__30004;var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);var next_data = map__30006__$1;var next_filt = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__30007 = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__30007__$1 = ((cljs.core.seq_QMARK_.call(null,map__30007))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);var next_map_report = map__30007__$1;var map__30008 = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__30008__$1 = ((cljs.core.seq_QMARK_.call(null,map__30008))?cljs.core.apply.call(null,cljs.core.hash_map,map__30008):map__30008);var next_controls = map__30008__$1;var map__30009 = cljs.core.get.call(null,map__30008__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__30009__$1 = ((cljs.core.seq_QMARK_.call(null,map__30009))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);var next_summary_stats = map__30009__$1;var next_index = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__30010 = p__30005;var map__30010__$1 = ((cljs.core.seq_QMARK_.call(null,map__30010))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);var fetch_data_fn = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__30006,map__30006__$1,next_data,next_filt,map__30007,map__30007__$1,next_map_report,map__30008,map__30008__$1,next_controls,map__30009,map__30009__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30010,map__30010__$1,fetch_data_fn,map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__30006,map__30006__$1,next_data,next_filt,map__30007,map__30007__$1,next_map_report,map__30008,map__30008__$1,next_controls,map__30009,map__30009__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30010,map__30010__$1,fetch_data_fn,map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_30024){var state_val_30025 = (state_30024[(1)]);if((state_val_30025 === (5)))
{var inst_30022 = (state_30024[(2)]);var state_30024__$1 = state_30024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30024__$1,inst_30022);
} else
{if((state_val_30025 === (4)))
{var state_30024__$1 = state_30024;var statearr_30026_30039 = state_30024__$1;(statearr_30026_30039[(2)] = null);
(statearr_30026_30039[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30025 === (3)))
{var inst_30014 = (state_30024[(7)]);var inst_30016 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30017 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_30018 = (new cljs.core.PersistentVector(null,1,(5),inst_30016,inst_30017,null));var inst_30019 = om.core.update_BANG_.call(null,self__.map_report,inst_30018,inst_30014);var state_30024__$1 = state_30024;var statearr_30027_30040 = state_30024__$1;(statearr_30027_30040[(2)] = inst_30019);
(statearr_30027_30040[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30025 === (2)))
{var inst_30014 = (state_30024[(7)]);var inst_30014__$1 = (state_30024[(2)]);var state_30024__$1 = (function (){var statearr_30028 = state_30024;(statearr_30028[(7)] = inst_30014__$1);
return statearr_30028;
})();if(cljs.core.truth_(inst_30014__$1))
{var statearr_30029_30041 = state_30024__$1;(statearr_30029_30041[(1)] = (3));
} else
{var statearr_30030_30042 = state_30024__$1;(statearr_30030_30042[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30025 === (1)))
{var inst_30011 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_30012 = fetch_data_fn.call(null,next_index,next_index_type,inst_30011,next_filt,null);var state_30024__$1 = state_30024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(2),inst_30012);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__30006,map__30006__$1,next_data,next_filt,map__30007,map__30007__$1,next_map_report,map__30008,map__30008__$1,next_controls,map__30009,map__30009__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30010,map__30010__$1,fetch_data_fn,map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__30006,map__30006__$1,next_data,next_filt,map__30007,map__30007__$1,next_map_report,map__30008,map__30008__$1,next_controls,map__30009,map__30009__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30010,map__30010__$1,fetch_data_fn,map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30034 = [null,null,null,null,null,null,null,null];(statearr_30034[(0)] = state_machine__9111__auto__);
(statearr_30034[(1)] = (1));
return statearr_30034;
});
var state_machine__9111__auto____1 = (function (state_30024){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30024);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30035){if((e30035 instanceof Object))
{var ex__9114__auto__ = e30035;var statearr_30036_30043 = state_30024;(statearr_30036_30043[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30035;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30044 = state_30024;
state_30024 = G__30044;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30024){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__30006,map__30006__$1,next_data,next_filt,map__30007,map__30007__$1,next_map_report,map__30008,map__30008__$1,next_controls,map__30009,map__30009__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30010,map__30010__$1,fetch_data_fn,map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_30037 = f__9126__auto__.call(null);(statearr_30037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__30006,map__30006__$1,next_data,next_filt,map__30007,map__30007__$1,next_map_report,map__30008,map__30008__$1,next_controls,map__30009,map__30009__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__30010,map__30010__$1,fetch_data_fn,map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30001.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t30001.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__30038 = om.core.get_shared.call(null,self__.owner);var map__30038__$1 = ((cljs.core.seq_QMARK_.call(null,map__30038))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);var comm = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30001.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t30001.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_30003){var self__ = this;
var _30003__$1 = this;return self__.meta30002;
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t30001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_30003,meta30002__$1){var self__ = this;
var _30003__$1 = this;return (new clustermap.components.map_report.t30001(self__.filt,self__.index_type,self__.owner,self__.map__30000,self__.map__29997,self__.data,self__.index,self__.map__29998,self__.p__29954,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__29999,meta30002__$1));
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t30001 = ((function (map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t30001(filt__$1,index_type__$1,owner__$1,map__30000__$2,map__29997__$2,data__$1,index__$1,map__29998__$2,p__29954__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29999__$2,meta30002){return (new clustermap.components.map_report.t30001(filt__$1,index_type__$1,owner__$1,map__30000__$2,map__29997__$2,data__$1,index__$1,map__29998__$2,p__29954__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__29999__$2,meta30002));
});})(map__29997,map__29997__$1,data,filt,map__29998,map__29998__$1,map_report,map__29999,map__29999__$1,controls,map__30000,map__30000__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t30001(filt,index_type,owner,map__30000__$1,map__29997__$1,data,index,map__29998__$1,p__29954,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__29999__$1,null));
});
