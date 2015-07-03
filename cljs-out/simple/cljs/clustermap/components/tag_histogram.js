// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.tag_histogram');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.components.tag_histogram.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31916,p__31917){var map__31960 = p__31916;var map__31960__$1 = ((cljs.core.seq_QMARK_.call(null,map__31960))?cljs.core.apply.call(null,cljs.core.hash_map,map__31960):map__31960);var tag_agg_data = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var chart_height = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"chart-height","chart-height",1221218467));var bar_width = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31960__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31961 = p__31917;var map__31961__$1 = ((cljs.core.seq_QMARK_.call(null,map__31961))?cljs.core.apply.call(null,cljs.core.hash_map,map__31961):map__31961);var opts = map__31961__$1;var y1_title = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31961__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function iter__31962(s__31963){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function (){var s__31963__$1 = s__31963;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31963__$1);if(temp__4126__auto__)
{var s__31963__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31963__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31963__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31965 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31964 = (0);while(true){
if((i__31964 < size__4376__auto__))
{var map__31976 = cljs.core._nth.call(null,c__4375__auto__,i__31964);var map__31976__$1 = ((cljs.core.seq_QMARK_.call(null,map__31976))?cljs.core.apply.call(null,cljs.core.hash_map,map__31976):map__31976);var metric_spec = map__31976__$1;var title = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31976__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31965,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31964,map__31976,map__31976__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31965,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function iter__31977(s__31978){return (new cljs.core.LazySeq(null,((function (i__31964,map__31976,map__31976__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31965,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function (){var s__31978__$1 = s__31978;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31978__$1);if(temp__4126__auto____$1)
{var s__31978__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31978__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31978__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31980 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31979 = (0);while(true){
if((i__31979 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31979);cljs.core.chunk_append.call(null,b__31980,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32002 = (i__31979 + (1));
i__31979 = G__32002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31980),iter__31977.call(null,cljs.core.chunk_rest.call(null,s__31978__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31980),null);
}
} else
{var record = cljs.core.first.call(null,s__31978__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31977.call(null,cljs.core.rest.call(null,s__31978__$2)));
}
} else
{return null;
}
break;
}
});})(i__31964,map__31976,map__31976__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31965,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31964,map__31976,map__31976__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31965,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__32003 = (i__31964 + (1));
i__31964 = G__32003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31965),iter__31962.call(null,cljs.core.chunk_rest.call(null,s__31963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31965),null);
}
} else
{var map__31981 = cljs.core.first.call(null,s__31963__$2);var map__31981__$1 = ((cljs.core.seq_QMARK_.call(null,map__31981))?cljs.core.apply.call(null,cljs.core.hash_map,map__31981):map__31981);var metric_spec = map__31981__$1;var title = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31981,map__31981__$1,metric_spec,title,metric,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function iter__31982(s__31983){return (new cljs.core.LazySeq(null,((function (map__31981,map__31981__$1,metric_spec,title,metric,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function (){var s__31983__$1 = s__31983;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31983__$1);if(temp__4126__auto____$1)
{var s__31983__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31983__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31983__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31985 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31984 = (0);while(true){
if((i__31984 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31984);cljs.core.chunk_append.call(null,b__31985,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32004 = (i__31984 + (1));
i__31984 = G__32004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31985),iter__31982.call(null,cljs.core.chunk_rest.call(null,s__31983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31985),null);
}
} else
{var record = cljs.core.first.call(null,s__31983__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31982.call(null,cljs.core.rest.call(null,s__31983__$2)));
}
} else
{return null;
}
break;
}
});})(map__31981,map__31981__$1,metric_spec,title,metric,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31981,map__31981__$1,metric_spec,title,metric,s__31963__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31962.call(null,cljs.core.rest.call(null,s__31963__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),chart_height], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function iter__31986(s__31987){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function (){var s__31987__$1 = s__31987;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31987__$1);if(temp__4126__auto__)
{var s__31987__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31987__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31987__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31989 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31988 = (0);while(true){
if((i__31988 < size__4376__auto__))
{var map__31992 = cljs.core._nth.call(null,c__4375__auto__,i__31988);var map__31992__$1 = ((cljs.core.seq_QMARK_.call(null,map__31992))?cljs.core.apply.call(null,cljs.core.hash_map,map__31992):map__31992);var label_formatter = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31989,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__32005 = (i__31988 + (1));
i__31988 = G__32005;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31989),iter__31986.call(null,cljs.core.chunk_rest.call(null,s__31987__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31989),null);
}
} else
{var map__31993 = cljs.core.first.call(null,s__31987__$2);var map__31993__$1 = ((cljs.core.seq_QMARK_.call(null,map__31993))?cljs.core.apply.call(null,cljs.core.hash_map,map__31993):map__31993);var label_formatter = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31993__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31986.call(null,cljs.core.rest.call(null,s__31987__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function iter__31994(s__31995){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title){
return (function (){var s__31995__$1 = s__31995;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31995__$1);if(temp__4126__auto__)
{var s__31995__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31995__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31995__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31997 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31996 = (0);while(true){
if((i__31996 < size__4376__auto__))
{var vec__32000 = cljs.core._nth.call(null,c__4375__auto__,i__31996);var y = cljs.core.nth.call(null,vec__32000,(0),null);var i = cljs.core.nth.call(null,vec__32000,(1),null);cljs.core.chunk_append.call(null,b__31997,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__32006 = (i__31996 + (1));
i__31996 = G__32006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31997),iter__31994.call(null,cljs.core.chunk_rest.call(null,s__31995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31997),null);
}
} else
{var vec__32001 = cljs.core.first.call(null,s__31995__$2);var y = cljs.core.nth.call(null,vec__32001,(0),null);var i = cljs.core.nth.call(null,vec__32001,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31994.call(null,cljs.core.rest.call(null,s__31995__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31960,map__31960__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31961,map__31961__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32199 = schema.utils.use_fn_validation;var output_schema32008_32200 = schema.core.Any;var input_schema32009_32201 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker32010_32202 = schema.core.checker.call(null,input_schema32009_32201);var output_checker32011_32203 = schema.core.checker.call(null,output_schema32008_32200);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function tag_histogram(G__32012,G__32013,G__32014){var validate__6034__auto__ = ufv___32199.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32204 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32012,G__32013,G__32014], null);var temp__4126__auto___32205 = input_checker32010_32202.call(null,args__6035__auto___32204);if(cljs.core.truth_(temp__4126__auto___32205))
{var error__6036__auto___32206 = temp__4126__auto___32205;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32206,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32204,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32009_32201,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32110 = G__32012;var map__32112 = G__32110;var map__32112__$1 = ((cljs.core.seq_QMARK_.call(null,map__32112))?cljs.core.apply.call(null,cljs.core.hash_map,map__32112):map__32112);var map__32113 = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);var tag_histogram__$1 = map__32113__$1;var query = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32013;var G__32111 = G__32014;var map__32114 = G__32111;var map__32114__$1 = ((cljs.core.seq_QMARK_.call(null,map__32114))?cljs.core.apply.call(null,cljs.core.hash_map,map__32114):map__32114);var opts = map__32114__$1;var id = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32110__$1 = G__32110;var owner__$1 = owner;var G__32111__$1 = G__32111;while(true){
var map__32115 = G__32110__$1;var map__32115__$1 = ((cljs.core.seq_QMARK_.call(null,map__32115))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);var map__32116 = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32116__$1 = ((cljs.core.seq_QMARK_.call(null,map__32116))?cljs.core.apply.call(null,cljs.core.hash_map,map__32116):map__32116);var tag_histogram__$2 = map__32116__$1;var query__$1 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32117 = G__32111__$1;var map__32117__$1 = ((cljs.core.seq_QMARK_.call(null,map__32117))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);var opts__$1 = map__32117__$1;var id__$1 = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32118 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32118 = (function (G__32013,map__32117,input_checker32010,query,G__32014,owner,metrics,map__32112,tag_agg_data,tag_histogram,map__32116,filter_spec,output_checker32011,G__32110,map__32115,output_schema32008,G__32111,tag_type,G__32012,validate__6034__auto__,map__32113,id,opts,tag_data,ufv__,input_schema32009,map__32114,meta32119){
this.G__32013 = G__32013;
this.map__32117 = map__32117;
this.input_checker32010 = input_checker32010;
this.query = query;
this.G__32014 = G__32014;
this.owner = owner;
this.metrics = metrics;
this.map__32112 = map__32112;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.map__32116 = map__32116;
this.filter_spec = filter_spec;
this.output_checker32011 = output_checker32011;
this.G__32110 = G__32110;
this.map__32115 = map__32115;
this.output_schema32008 = output_schema32008;
this.G__32111 = G__32111;
this.tag_type = tag_type;
this.G__32012 = G__32012;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__32113 = map__32113;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.input_schema32009 = input_schema32009;
this.map__32114 = map__32114;
this.meta32119 = meta32119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32118.cljs$lang$type = true;
clustermap.components.tag_histogram.t32118.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32118";
clustermap.components.tag_histogram.t32118.cljs$lang$ctorPrWriter = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t32118");
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32118.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32118.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_,p__32121,___$1){var self__ = this;
var map__32122 = p__32121;var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var map__32123 = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32123__$1 = ((cljs.core.seq_QMARK_.call(null,map__32123))?cljs.core.apply.call(null,cljs.core.hash_map,map__32123):map__32123);var prev_query = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32118.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_,p__32124,p__32125){var self__ = this;
var map__32126 = p__32124;var map__32126__$1 = ((cljs.core.seq_QMARK_.call(null,map__32126))?cljs.core.apply.call(null,cljs.core.hash_map,map__32126):map__32126);var map__32127 = cljs.core.get.call(null,map__32126__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32127__$1 = ((cljs.core.seq_QMARK_.call(null,map__32127))?cljs.core.apply.call(null,cljs.core.hash_map,map__32127):map__32127);var next_query = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32126__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32128 = p__32125;var map__32128__$1 = ((cljs.core.seq_QMARK_.call(null,map__32128))?cljs.core.apply.call(null,cljs.core.hash_map,map__32128):map__32128);var fetch_tag_data_fn = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32207 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32207,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32207,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (state_32146){var state_val_32147 = (state_32146[(1)]);if((state_val_32147 === (5)))
{var inst_32144 = (state_32146[(2)]);var state_32146__$1 = state_32146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32146__$1,inst_32144);
} else
{if((state_val_32147 === (4)))
{var state_32146__$1 = state_32146;var statearr_32148_32208 = state_32146__$1;(statearr_32148_32208[(2)] = null);
(statearr_32148_32208[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32147 === (3)))
{var inst_32131 = (state_32146[(7)]);var inst_32133 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32134 = ["HISTOGRAM TAGS: ",inst_32131];var inst_32135 = (new cljs.core.PersistentVector(null,2,(5),inst_32133,inst_32134,null));var inst_32136 = cljs.core.clj__GT_js.call(null,inst_32135);var inst_32137 = console.log(inst_32136);var inst_32138 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32139 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32140 = (new cljs.core.PersistentVector(null,1,(5),inst_32138,inst_32139,null));var inst_32141 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32140,inst_32131);var state_32146__$1 = (function (){var statearr_32149 = state_32146;(statearr_32149[(8)] = inst_32137);
return statearr_32149;
})();var statearr_32150_32209 = state_32146__$1;(statearr_32150_32209[(2)] = inst_32141);
(statearr_32150_32209[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32147 === (2)))
{var inst_32131 = (state_32146[(7)]);var inst_32131__$1 = (state_32146[(2)]);var state_32146__$1 = (function (){var statearr_32151 = state_32146;(statearr_32151[(7)] = inst_32131__$1);
return statearr_32151;
})();if(cljs.core.truth_(inst_32131__$1))
{var statearr_32152_32210 = state_32146__$1;(statearr_32152_32210[(1)] = (3));
} else
{var statearr_32153_32211 = state_32146__$1;(statearr_32153_32211[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32147 === (1)))
{var inst_32129 = fetch_tag_data_fn.call(null,next_tag_type);var state_32146__$1 = state_32146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32146__$1,(2),inst_32129);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32207,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;return ((function (switch__9110__auto__,c__9125__auto___32207,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32157 = [null,null,null,null,null,null,null,null,null];(statearr_32157[(0)] = state_machine__9111__auto__);
(statearr_32157[(1)] = (1));
return statearr_32157;
});
var state_machine__9111__auto____1 = (function (state_32146){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32146);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32158){if((e32158 instanceof Object))
{var ex__9114__auto__ = e32158;var statearr_32159_32212 = state_32146;(statearr_32159_32212[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32158;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32213 = state_32146;
state_32146 = G__32213;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32146){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32207,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
})();var state__9127__auto__ = (function (){var statearr_32160 = f__9126__auto__.call(null);(statearr_32160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32207);
return statearr_32160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32207,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (state_32183){var state_val_32184 = (state_32183[(1)]);if((state_val_32184 === (5)))
{var inst_32181 = (state_32183[(2)]);var state_32183__$1 = state_32183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32183__$1,inst_32181);
} else
{if((state_val_32184 === (4)))
{var state_32183__$1 = state_32183;var statearr_32185_32214 = state_32183__$1;(statearr_32185_32214[(2)] = null);
(statearr_32185_32214[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32184 === (3)))
{var inst_32167 = (state_32183[(7)]);var inst_32169 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32170 = ["HISTOGRAM TAG AGGS: ",inst_32167];var inst_32171 = (new cljs.core.PersistentVector(null,2,(5),inst_32169,inst_32170,null));var inst_32172 = cljs.core.clj__GT_js.call(null,inst_32171);var inst_32173 = console.log(inst_32172);var inst_32174 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32175 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32176 = (new cljs.core.PersistentVector(null,1,(5),inst_32174,inst_32175,null));var inst_32177 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32167);var inst_32178 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32176,inst_32177);var state_32183__$1 = (function (){var statearr_32186 = state_32183;(statearr_32186[(8)] = inst_32173);
return statearr_32186;
})();var statearr_32187_32215 = state_32183__$1;(statearr_32187_32215[(2)] = inst_32178);
(statearr_32187_32215[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32184 === (2)))
{var inst_32167 = (state_32183[(7)]);var inst_32167__$1 = (state_32183[(2)]);var state_32183__$1 = (function (){var statearr_32188 = state_32183;(statearr_32188[(7)] = inst_32167__$1);
return statearr_32188;
})();if(cljs.core.truth_(inst_32167__$1))
{var statearr_32189_32216 = state_32183__$1;(statearr_32189_32216[(1)] = (3));
} else
{var statearr_32190_32217 = state_32183__$1;(statearr_32190_32217[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32184 === (1)))
{var inst_32161 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32162 = [next_filter_spec];var inst_32163 = cljs.core.PersistentHashMap.fromArrays(inst_32161,inst_32162);var inst_32164 = cljs.core.merge.call(null,next_query,inst_32163);var inst_32165 = fetch_tag_agg_data_fn.call(null,inst_32164);var state_32183__$1 = state_32183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32183__$1,(2),inst_32165);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32194 = [null,null,null,null,null,null,null,null,null];(statearr_32194[(0)] = state_machine__9111__auto__);
(statearr_32194[(1)] = (1));
return statearr_32194;
});
var state_machine__9111__auto____1 = (function (state_32183){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32183);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32195){if((e32195 instanceof Object))
{var ex__9114__auto__ = e32195;var statearr_32196_32218 = state_32183;(statearr_32196_32218[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32195;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32219 = state_32183;
state_32183 = G__32219;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32183){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
})();var state__9127__auto__ = (function (){var statearr_32197 = f__9126__auto__.call(null);(statearr_32197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32126,map__32126__$1,map__32127,map__32127__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32128,map__32128__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32118.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32198 = om.core.get_node.call(null,self__.owner,"chart");var G__32198__$1 = (((G__32198 == null))?null:jayq.core.$.call(null,G__32198));var G__32198__$2 = (((G__32198__$1 == null))?null:G__32198__$1.highcharts());var G__32198__$3 = (((G__32198__$2 == null))?null:G__32198__$2.reflow());return G__32198__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
);
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32118.prototype.om$core$IRender$render$arity$1 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_32120){var self__ = this;
var _32120__$1 = this;return self__.meta32119;
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.t32118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function (_32120,meta32119__$1){var self__ = this;
var _32120__$1 = this;return (new clustermap.components.tag_histogram.t32118(self__.G__32013,self__.map__32117,self__.input_checker32010,self__.query,self__.G__32014,self__.owner,self__.metrics,self__.map__32112,self__.tag_agg_data,self__.tag_histogram,self__.map__32116,self__.filter_spec,self__.output_checker32011,self__.G__32110,self__.map__32115,self__.output_schema32008,self__.G__32111,self__.tag_type,self__.G__32012,self__.validate__6034__auto__,self__.map__32113,self__.id,self__.opts,self__.tag_data,self__.ufv__,self__.input_schema32009,self__.map__32114,meta32119__$1));
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
clustermap.components.tag_histogram.__GT_t32118 = ((function (map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203){
return (function __GT_t32118(G__32013__$1,map__32117__$2,input_checker32010__$1,query__$2,G__32014__$1,owner__$3,metrics__$2,map__32112__$2,tag_agg_data__$2,tag_histogram__$3,map__32116__$2,filter_spec__$2,output_checker32011__$1,G__32110__$2,map__32115__$2,output_schema32008__$1,G__32111__$2,tag_type__$2,G__32012__$1,validate__6034__auto____$1,map__32113__$2,id__$2,opts__$2,tag_data__$2,ufv____$1,input_schema32009__$1,map__32114__$2,meta32119){return (new clustermap.components.tag_histogram.t32118(G__32013__$1,map__32117__$2,input_checker32010__$1,query__$2,G__32014__$1,owner__$3,metrics__$2,map__32112__$2,tag_agg_data__$2,tag_histogram__$3,map__32116__$2,filter_spec__$2,output_checker32011__$1,G__32110__$2,map__32115__$2,output_schema32008__$1,G__32111__$2,tag_type__$2,G__32012__$1,validate__6034__auto____$1,map__32113__$2,id__$2,opts__$2,tag_data__$2,ufv____$1,input_schema32009__$1,map__32114__$2,meta32119));
});})(map__32115,map__32115__$1,map__32116,map__32116__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32117,map__32117__$1,opts__$1,id__$1,G__32110,map__32112,map__32112__$1,map__32113,map__32113__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32111,map__32114,map__32114__$1,opts,id,validate__6034__auto__,ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
}
return (new clustermap.components.tag_histogram.t32118(G__32013,map__32117__$1,input_checker32010_32202,query__$1,G__32014,owner__$2,metrics__$1,map__32112__$1,tag_agg_data__$1,tag_histogram__$2,map__32116__$1,filter_spec__$1,output_checker32011_32203,G__32110__$1,map__32115__$1,output_schema32008_32200,G__32111__$1,tag_type__$1,G__32012,validate__6034__auto__,map__32113__$1,id__$1,opts__$1,tag_data__$1,ufv___32199,input_schema32009_32201,map__32114__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32220 = output_checker32011_32203.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32220))
{var error__6036__auto___32221 = temp__4126__auto___32220;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32221)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32221,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32008_32200,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32199,output_schema32008_32200,input_schema32009_32201,input_checker32010_32202,output_checker32011_32203))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema32008_32200,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32009_32201], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m32007){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m32007);
});
__GT_tag_histogram = function(cursor__7850__auto__,m32007){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m32007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
