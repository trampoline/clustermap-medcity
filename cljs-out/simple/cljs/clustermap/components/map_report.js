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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(p__29806,comm,p__29807){var map__29864 = p__29806;var map__29864__$1 = ((cljs.core.seq_QMARK_.call(null,map__29864))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864):map__29864);var map__29865 = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29865__$1 = ((cljs.core.seq_QMARK_.call(null,map__29865))?cljs.core.apply.call(null,cljs.core.hash_map,map__29865):map__29865);var controls = map__29865__$1;var map__29866 = cljs.core.get.call(null,map__29865__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29866__$1 = ((cljs.core.seq_QMARK_.call(null,map__29866))?cljs.core.apply.call(null,cljs.core.hash_map,map__29866):map__29866);var summary_stats = map__29866__$1;var variables = cljs.core.get.call(null,map__29866__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var map__29867 = p__29807;var map__29867__$1 = ((cljs.core.seq_QMARK_.call(null,map__29867))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);var data = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"data","data",-232669377));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-VARIABLES",variables], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SUMMARY-STATS-DATA",data], null)));
var belongs_to_vars = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),cljs.core.filter.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),variables));return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.headline-stats","div.row.headline-stats",1408757324)], null),(function (){var iter__4377__auto__ = ((function (belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data){
return (function iter__29868(s__29869){return (new cljs.core.LazySeq(null,((function (belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data){
return (function (){var s__29869__$1 = s__29869;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29869__$1);if(temp__4126__auto__)
{var s__29869__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29869__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29869__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29871 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29870 = (0);while(true){
if((i__29870 < size__4376__auto__))
{var row_variables = cljs.core._nth.call(null,c__4375__auto__,i__29870);cljs.core.chunk_append.call(null,b__29871,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (i__29870,row_variables,c__4375__auto__,size__4376__auto__,b__29871,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data){
return (function iter__29896(s__29897){return (new cljs.core.LazySeq(null,((function (i__29870,row_variables,c__4375__auto__,size__4376__auto__,b__29871,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data){
return (function (){var s__29897__$1 = s__29897;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29897__$1);if(temp__4126__auto____$1)
{var s__29897__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29897__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__29897__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__29899 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__29898 = (0);while(true){
if((i__29898 < size__4376__auto____$1))
{var map__29904 = cljs.core._nth.call(null,c__4375__auto____$1,i__29898);var map__29904__$1 = ((cljs.core.seq_QMARK_.call(null,map__29904))?cljs.core.apply.call(null,cljs.core.hash_map,map__29904):map__29904);var render_fn = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29904__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29899,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29905 = temp__4126__auto____$2;var map__29905__$1 = ((cljs.core.seq_QMARK_.call(null,map__29905))?cljs.core.apply.call(null,cljs.core.hash_map,map__29905):map__29905);var ch_key = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29905__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29920 = (i__29898 + (1));
i__29898 = G__29920;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29899),iter__29896.call(null,cljs.core.chunk_rest.call(null,s__29897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29899),null);
}
} else
{var map__29906 = cljs.core.first.call(null,s__29897__$2);var map__29906__$1 = ((cljs.core.seq_QMARK_.call(null,map__29906))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);var render_fn = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29907 = temp__4126__auto____$2;var map__29907__$1 = ((cljs.core.seq_QMARK_.call(null,map__29907))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907):map__29907);var ch_key = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29907__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29896.call(null,cljs.core.rest.call(null,s__29897__$2)));
}
} else
{return null;
}
break;
}
});})(i__29870,row_variables,c__4375__auto__,size__4376__auto__,b__29871,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data))
,null,null));
});})(i__29870,row_variables,c__4375__auto__,size__4376__auto__,b__29871,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null));
{
var G__29921 = (i__29870 + (1));
i__29870 = G__29921;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29871),iter__29868.call(null,cljs.core.chunk_rest.call(null,s__29869__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29871),null);
}
} else
{var row_variables = cljs.core.first.call(null,s__29869__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4377__auto__ = ((function (row_variables,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data){
return (function iter__29908(s__29909){return (new cljs.core.LazySeq(null,((function (row_variables,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data){
return (function (){var s__29909__$1 = s__29909;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29909__$1);if(temp__4126__auto____$1)
{var s__29909__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29909__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29909__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29911 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29910 = (0);while(true){
if((i__29910 < size__4376__auto__))
{var map__29916 = cljs.core._nth.call(null,c__4375__auto__,i__29910);var map__29916__$1 = ((cljs.core.seq_QMARK_.call(null,map__29916))?cljs.core.apply.call(null,cljs.core.hash_map,map__29916):map__29916);var render_fn = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"key","key",-1516042587));cljs.core.chunk_append.call(null,b__29911,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29917 = temp__4126__auto____$2;var map__29917__$1 = ((cljs.core.seq_QMARK_.call(null,map__29917))?cljs.core.apply.call(null,cljs.core.hash_map,map__29917):map__29917);var ch_key = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null));
{
var G__29922 = (i__29910 + (1));
i__29910 = G__29922;
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
{var map__29918 = cljs.core.first.call(null,s__29909__$2);var map__29918__$1 = ((cljs.core.seq_QMARK_.call(null,map__29918))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);var render_fn = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"label","label",1718410804));var metric = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var key = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.stat-title","h4.stat-title",1146978352),((cljs.core.fn_QMARK_.call(null,label))?label.call(null):label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-amount","div.stat-amount",-1155242764),render_fn.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null)))], null),(function (){var temp__4126__auto____$2 = cljs.core.first.call(null,cljs.core.not_empty.call(null,cljs.core.get.call(null,belongs_to_vars,key)));if(cljs.core.truth_(temp__4126__auto____$2))
{var map__29919 = temp__4126__auto____$2;var map__29919__$1 = ((cljs.core.seq_QMARK_.call(null,map__29919))?cljs.core.apply.call(null,cljs.core.hash_map,map__29919):map__29919);var ch_key = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var ch_metric = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"metric","metric",408798077));var ch_value_fn = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"value-fn","value-fn",544624790));var ch_render_fn = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var p_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,metric], null));var ch_v = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch_key,ch_metric], null));var v = (cljs.core.truth_(ch_value_fn)?ch_value_fn.call(null,p_v,ch_v):ch_v);return ch_render_fn.call(null,v);
} else
{return null;
}
})()], null),iter__29908.call(null,cljs.core.rest.call(null,s__29909__$2)));
}
} else
{return null;
}
break;
}
});})(row_variables,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data))
,null,null));
});})(row_variables,s__29869__$2,temp__4126__auto__,belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data))
;return iter__4377__auto__.call(null,row_variables);
})())], null),iter__29868.call(null,cljs.core.rest.call(null,s__29869__$2)));
}
} else
{return null;
}
break;
}
});})(belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data))
,null,null));
});})(belongs_to_vars,map__29864,map__29864__$1,map__29865,map__29865__$1,controls,map__29866,map__29866__$1,summary_stats,variables,map__29867,map__29867__$1,data))
;return iter__4377__auto__.call(null,cljs.core.partition_all.call(null,(2),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948)),variables)));
})()));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__29923,owner){var map__29966 = p__29923;var map__29966__$1 = ((cljs.core.seq_QMARK_.call(null,map__29966))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);var data = map__29966__$1;var filt = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29967 = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29967__$1 = ((cljs.core.seq_QMARK_.call(null,map__29967))?cljs.core.apply.call(null,cljs.core.hash_map,map__29967):map__29967);var map_report = map__29967__$1;var map__29968 = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29968__$1 = ((cljs.core.seq_QMARK_.call(null,map__29968))?cljs.core.apply.call(null,cljs.core.hash_map,map__29968):map__29968);var controls = map__29968__$1;var map__29969 = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29969__$1 = ((cljs.core.seq_QMARK_.call(null,map__29969))?cljs.core.apply.call(null,cljs.core.hash_map,map__29969):map__29969);var summary_stats = map__29969__$1;var variables = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__29969__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__29967__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t29970 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t29970 = (function (filt,index_type,map__29969,owner,map__29968,data,map__29967,index,map__29966,p__29923,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,meta29971){
this.filt = filt;
this.index_type = index_type;
this.map__29969 = map__29969;
this.owner = owner;
this.map__29968 = map__29968;
this.data = data;
this.map__29967 = map__29967;
this.index = index;
this.map__29966 = map__29966;
this.p__29923 = p__29923;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.meta29971 = meta29971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t29970.cljs$lang$type = true;
clustermap.components.map_report.t29970.cljs$lang$ctorStr = "clustermap.components.map-report/t29970";
clustermap.components.map_report.t29970.cljs$lang$ctorPrWriter = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t29970");
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29970.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t29970.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,p__29973,p__29974){var self__ = this;
var map__29975 = p__29973;var map__29975__$1 = ((cljs.core.seq_QMARK_.call(null,map__29975))?cljs.core.apply.call(null,cljs.core.hash_map,map__29975):map__29975);var next_data = map__29975__$1;var next_filt = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__29976 = cljs.core.get.call(null,map__29975__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__29976__$1 = ((cljs.core.seq_QMARK_.call(null,map__29976))?cljs.core.apply.call(null,cljs.core.hash_map,map__29976):map__29976);var next_map_report = map__29976__$1;var map__29977 = cljs.core.get.call(null,map__29976__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__29977__$1 = ((cljs.core.seq_QMARK_.call(null,map__29977))?cljs.core.apply.call(null,cljs.core.hash_map,map__29977):map__29977);var next_controls = map__29977__$1;var map__29978 = cljs.core.get.call(null,map__29977__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__29978__$1 = ((cljs.core.seq_QMARK_.call(null,map__29978))?cljs.core.apply.call(null,cljs.core.hash_map,map__29978):map__29978);var next_summary_stats = map__29978__$1;var next_index = cljs.core.get.call(null,map__29978__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__29978__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__29978__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__29976__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__29979 = p__29974;var map__29979__$1 = ((cljs.core.seq_QMARK_.call(null,map__29979))?cljs.core.apply.call(null,cljs.core.hash_map,map__29979):map__29979);var fetch_data_fn = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log("SUMMARY-STATS-I-WILL-UPDATE");
if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29975,map__29975__$1,next_data,next_filt,map__29976,map__29976__$1,next_map_report,map__29977,map__29977__$1,next_controls,map__29978,map__29978__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29979,map__29979__$1,fetch_data_fn,map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29975,map__29975__$1,next_data,next_filt,map__29976,map__29976__$1,next_map_report,map__29977,map__29977__$1,next_controls,map__29978,map__29978__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29979,map__29979__$1,fetch_data_fn,map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (state_29993){var state_val_29994 = (state_29993[(1)]);if((state_val_29994 === (5)))
{var inst_29991 = (state_29993[(2)]);var state_29993__$1 = state_29993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29993__$1,inst_29991);
} else
{if((state_val_29994 === (4)))
{var state_29993__$1 = state_29993;var statearr_29995_30008 = state_29993__$1;(statearr_29995_30008[(2)] = null);
(statearr_29995_30008[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29994 === (3)))
{var inst_29983 = (state_29993[(7)]);var inst_29985 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29986 = [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)];var inst_29987 = (new cljs.core.PersistentVector(null,1,(5),inst_29985,inst_29986,null));var inst_29988 = om.core.update_BANG_.call(null,self__.map_report,inst_29987,inst_29983);var state_29993__$1 = state_29993;var statearr_29996_30009 = state_29993__$1;(statearr_29996_30009[(2)] = inst_29988);
(statearr_29996_30009[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29994 === (2)))
{var inst_29983 = (state_29993[(7)]);var inst_29983__$1 = (state_29993[(2)]);var state_29993__$1 = (function (){var statearr_29997 = state_29993;(statearr_29997[(7)] = inst_29983__$1);
return statearr_29997;
})();if(cljs.core.truth_(inst_29983__$1))
{var statearr_29998_30010 = state_29993__$1;(statearr_29998_30010[(1)] = (3));
} else
{var statearr_29999_30011 = state_29993__$1;(statearr_29999_30011[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29994 === (1)))
{var inst_29980 = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),next_variables);var inst_29981 = fetch_data_fn.call(null,next_index,next_index_type,inst_29980,next_filt,null);var state_29993__$1 = state_29993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29993__$1,(2),inst_29981);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29975,map__29975__$1,next_data,next_filt,map__29976,map__29976__$1,next_map_report,map__29977,map__29977__$1,next_controls,map__29978,map__29978__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29979,map__29979__$1,fetch_data_fn,map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29975,map__29975__$1,next_data,next_filt,map__29976,map__29976__$1,next_map_report,map__29977,map__29977__$1,next_controls,map__29978,map__29978__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29979,map__29979__$1,fetch_data_fn,map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30003 = [null,null,null,null,null,null,null,null];(statearr_30003[(0)] = state_machine__9111__auto__);
(statearr_30003[(1)] = (1));
return statearr_30003;
});
var state_machine__9111__auto____1 = (function (state_29993){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29993);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30004){if((e30004 instanceof Object))
{var ex__9114__auto__ = e30004;var statearr_30005_30012 = state_29993;(statearr_30005_30012[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29993);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30013 = state_29993;
state_29993 = G__30013;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29993){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29975,map__29975__$1,next_data,next_filt,map__29976,map__29976__$1,next_map_report,map__29977,map__29977__$1,next_controls,map__29978,map__29978__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29979,map__29979__$1,fetch_data_fn,map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
})();var state__9127__auto__ = (function (){var statearr_30006 = f__9126__auto__.call(null);(statearr_30006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29975,map__29975__$1,next_data,next_filt,map__29976,map__29976__$1,next_map_report,map__29977,map__29977__$1,next_controls,map__29978,map__29978__$1,next_summary_stats,next_index,next_index_type,next_variables,next_summary_stats_data,map__29979,map__29979__$1,fetch_data_fn,map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29970.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t29970.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__30007 = om.core.get_shared.call(null,self__.owner);var map__30007__$1 = ((cljs.core.seq_QMARK_.call(null,map__30007))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);var comm = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,self__.summary_stats_data);
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29970.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t29970.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.summary_stats_factory.call(null));
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29972){var self__ = this;
var _29972__$1 = this;return self__.meta29971;
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t29970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function (_29972,meta29971__$1){var self__ = this;
var _29972__$1 = this;return (new clustermap.components.map_report.t29970(self__.filt,self__.index_type,self__.map__29969,self__.owner,self__.map__29968,self__.data,self__.map__29967,self__.index,self__.map__29966,self__.p__29923,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,meta29971__$1));
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t29970 = ((function (map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data){
return (function __GT_t29970(filt__$1,index_type__$1,map__29969__$2,owner__$1,map__29968__$2,data__$1,map__29967__$2,index__$1,map__29966__$2,p__29923__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta29971){return (new clustermap.components.map_report.t29970(filt__$1,index_type__$1,map__29969__$2,owner__$1,map__29968__$2,data__$1,map__29967__$2,index__$1,map__29966__$2,p__29923__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,meta29971));
});})(map__29966,map__29966__$1,data,filt,map__29967,map__29967__$1,map_report,map__29968,map__29968__$1,controls,map__29969,map__29969__$1,summary_stats,variables,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t29970(filt,index_type,map__29969__$1,owner,map__29968__$1,data,map__29967__$1,index,map__29966__$1,p__29923,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,null));
});
