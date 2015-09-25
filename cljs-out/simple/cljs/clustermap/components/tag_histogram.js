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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31952,p__31953){var map__31996 = p__31952;var map__31996__$1 = ((cljs.core.seq_QMARK_.call(null,map__31996))?cljs.core.apply.call(null,cljs.core.hash_map,map__31996):map__31996);var tag_agg_data = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var chart_height = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"chart-height","chart-height",1221218467));var bar_width = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31996__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31997 = p__31953;var map__31997__$1 = ((cljs.core.seq_QMARK_.call(null,map__31997))?cljs.core.apply.call(null,cljs.core.hash_map,map__31997):map__31997);var opts = map__31997__$1;var y1_title = cljs.core.get.call(null,map__31997__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31997__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function iter__31998(s__31999){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function (){var s__31999__$1 = s__31999;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31999__$1);if(temp__4126__auto__)
{var s__31999__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31999__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31999__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32001 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32000 = (0);while(true){
if((i__32000 < size__4376__auto__))
{var map__32012 = cljs.core._nth.call(null,c__4375__auto__,i__32000);var map__32012__$1 = ((cljs.core.seq_QMARK_.call(null,map__32012))?cljs.core.apply.call(null,cljs.core.hash_map,map__32012):map__32012);var metric_spec = map__32012__$1;var title = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__32001,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__32000,map__32012,map__32012__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32001,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function iter__32013(s__32014){return (new cljs.core.LazySeq(null,((function (i__32000,map__32012,map__32012__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32001,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function (){var s__32014__$1 = s__32014;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32014__$1);if(temp__4126__auto____$1)
{var s__32014__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32014__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32014__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32016 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32015 = (0);while(true){
if((i__32015 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__32015);cljs.core.chunk_append.call(null,b__32016,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32038 = (i__32015 + (1));
i__32015 = G__32038;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32016),iter__32013.call(null,cljs.core.chunk_rest.call(null,s__32014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32016),null);
}
} else
{var record = cljs.core.first.call(null,s__32014__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32013.call(null,cljs.core.rest.call(null,s__32014__$2)));
}
} else
{return null;
}
break;
}
});})(i__32000,map__32012,map__32012__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32001,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
,null,null));
});})(i__32000,map__32012,map__32012__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32001,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__32039 = (i__32000 + (1));
i__32000 = G__32039;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32001),iter__31998.call(null,cljs.core.chunk_rest.call(null,s__31999__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32001),null);
}
} else
{var map__32017 = cljs.core.first.call(null,s__31999__$2);var map__32017__$1 = ((cljs.core.seq_QMARK_.call(null,map__32017))?cljs.core.apply.call(null,cljs.core.hash_map,map__32017):map__32017);var metric_spec = map__32017__$1;var title = cljs.core.get.call(null,map__32017__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32017__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__32017,map__32017__$1,metric_spec,title,metric,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function iter__32018(s__32019){return (new cljs.core.LazySeq(null,((function (map__32017,map__32017__$1,metric_spec,title,metric,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function (){var s__32019__$1 = s__32019;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32019__$1);if(temp__4126__auto____$1)
{var s__32019__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32019__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32019__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32021 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32020 = (0);while(true){
if((i__32020 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__32020);cljs.core.chunk_append.call(null,b__32021,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32040 = (i__32020 + (1));
i__32020 = G__32040;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32021),iter__32018.call(null,cljs.core.chunk_rest.call(null,s__32019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32021),null);
}
} else
{var record = cljs.core.first.call(null,s__32019__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32018.call(null,cljs.core.rest.call(null,s__32019__$2)));
}
} else
{return null;
}
break;
}
});})(map__32017,map__32017__$1,metric_spec,title,metric,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
,null,null));
});})(map__32017,map__32017__$1,metric_spec,title,metric,s__31999__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31998.call(null,cljs.core.rest.call(null,s__31999__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),chart_height], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function iter__32022(s__32023){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function (){var s__32023__$1 = s__32023;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32023__$1);if(temp__4126__auto__)
{var s__32023__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32023__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32023__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32025 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32024 = (0);while(true){
if((i__32024 < size__4376__auto__))
{var map__32028 = cljs.core._nth.call(null,c__4375__auto__,i__32024);var map__32028__$1 = ((cljs.core.seq_QMARK_.call(null,map__32028))?cljs.core.apply.call(null,cljs.core.hash_map,map__32028):map__32028);var label_formatter = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__32025,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__32041 = (i__32024 + (1));
i__32024 = G__32041;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32025),iter__32022.call(null,cljs.core.chunk_rest.call(null,s__32023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32025),null);
}
} else
{var map__32029 = cljs.core.first.call(null,s__32023__$2);var map__32029__$1 = ((cljs.core.seq_QMARK_.call(null,map__32029))?cljs.core.apply.call(null,cljs.core.hash_map,map__32029):map__32029);var label_formatter = cljs.core.get.call(null,map__32029__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32029__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__32022.call(null,cljs.core.rest.call(null,s__32023__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function iter__32030(s__32031){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title){
return (function (){var s__32031__$1 = s__32031;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32031__$1);if(temp__4126__auto__)
{var s__32031__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32031__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32031__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32033 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32032 = (0);while(true){
if((i__32032 < size__4376__auto__))
{var vec__32036 = cljs.core._nth.call(null,c__4375__auto__,i__32032);var y = cljs.core.nth.call(null,vec__32036,(0),null);var i = cljs.core.nth.call(null,vec__32036,(1),null);cljs.core.chunk_append.call(null,b__32033,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__32042 = (i__32032 + (1));
i__32032 = G__32042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),iter__32030.call(null,cljs.core.chunk_rest.call(null,s__32031__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),null);
}
} else
{var vec__32037 = cljs.core.first.call(null,s__32031__$2);var y = cljs.core.nth.call(null,vec__32037,(0),null);var i = cljs.core.nth.call(null,vec__32037,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__32030.call(null,cljs.core.rest.call(null,s__32031__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31996,map__31996__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31997,map__31997__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32235 = schema.utils.use_fn_validation;var output_schema32044_32236 = schema.core.Any;var input_schema32045_32237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker32046_32238 = schema.core.checker.call(null,input_schema32045_32237);var output_checker32047_32239 = schema.core.checker.call(null,output_schema32044_32236);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function tag_histogram(G__32048,G__32049,G__32050){var validate__6034__auto__ = ufv___32235.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32240 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32048,G__32049,G__32050], null);var temp__4126__auto___32241 = input_checker32046_32238.call(null,args__6035__auto___32240);if(cljs.core.truth_(temp__4126__auto___32241))
{var error__6036__auto___32242 = temp__4126__auto___32241;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32242)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32242,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32240,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32045_32237,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32146 = G__32048;var map__32148 = G__32146;var map__32148__$1 = ((cljs.core.seq_QMARK_.call(null,map__32148))?cljs.core.apply.call(null,cljs.core.hash_map,map__32148):map__32148);var map__32149 = cljs.core.get.call(null,map__32148__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32149__$1 = ((cljs.core.seq_QMARK_.call(null,map__32149))?cljs.core.apply.call(null,cljs.core.hash_map,map__32149):map__32149);var tag_histogram__$1 = map__32149__$1;var query = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32148__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32049;var G__32147 = G__32050;var map__32150 = G__32147;var map__32150__$1 = ((cljs.core.seq_QMARK_.call(null,map__32150))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);var opts = map__32150__$1;var id = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32146__$1 = G__32146;var owner__$1 = owner;var G__32147__$1 = G__32147;while(true){
var map__32151 = G__32146__$1;var map__32151__$1 = ((cljs.core.seq_QMARK_.call(null,map__32151))?cljs.core.apply.call(null,cljs.core.hash_map,map__32151):map__32151);var map__32152 = cljs.core.get.call(null,map__32151__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32152__$1 = ((cljs.core.seq_QMARK_.call(null,map__32152))?cljs.core.apply.call(null,cljs.core.hash_map,map__32152):map__32152);var tag_histogram__$2 = map__32152__$1;var query__$1 = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32151__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32153 = G__32147__$1;var map__32153__$1 = ((cljs.core.seq_QMARK_.call(null,map__32153))?cljs.core.apply.call(null,cljs.core.hash_map,map__32153):map__32153);var opts__$1 = map__32153__$1;var id__$1 = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32154 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32154 = (function (input_schema32045,query,map__32148,owner,metrics,input_checker32046,map__32150,tag_agg_data,tag_histogram,map__32152,filter_spec,G__32050,G__32049,output_schema32044,map__32153,tag_type,G__32048,map__32151,validate__6034__auto__,id,G__32147,opts,tag_data,output_checker32047,map__32149,ufv__,G__32146,meta32155){
this.input_schema32045 = input_schema32045;
this.query = query;
this.map__32148 = map__32148;
this.owner = owner;
this.metrics = metrics;
this.input_checker32046 = input_checker32046;
this.map__32150 = map__32150;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.map__32152 = map__32152;
this.filter_spec = filter_spec;
this.G__32050 = G__32050;
this.G__32049 = G__32049;
this.output_schema32044 = output_schema32044;
this.map__32153 = map__32153;
this.tag_type = tag_type;
this.G__32048 = G__32048;
this.map__32151 = map__32151;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__32147 = G__32147;
this.opts = opts;
this.tag_data = tag_data;
this.output_checker32047 = output_checker32047;
this.map__32149 = map__32149;
this.ufv__ = ufv__;
this.G__32146 = G__32146;
this.meta32155 = meta32155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32154.cljs$lang$type = true;
clustermap.components.tag_histogram.t32154.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32154";
clustermap.components.tag_histogram.t32154.cljs$lang$ctorPrWriter = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t32154");
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32154.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32154.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_,p__32157,___$1){var self__ = this;
var map__32158 = p__32157;var map__32158__$1 = ((cljs.core.seq_QMARK_.call(null,map__32158))?cljs.core.apply.call(null,cljs.core.hash_map,map__32158):map__32158);var map__32159 = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32159__$1 = ((cljs.core.seq_QMARK_.call(null,map__32159))?cljs.core.apply.call(null,cljs.core.hash_map,map__32159):map__32159);var prev_query = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32154.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_,p__32160,p__32161){var self__ = this;
var map__32162 = p__32160;var map__32162__$1 = ((cljs.core.seq_QMARK_.call(null,map__32162))?cljs.core.apply.call(null,cljs.core.hash_map,map__32162):map__32162);var map__32163 = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32163__$1 = ((cljs.core.seq_QMARK_.call(null,map__32163))?cljs.core.apply.call(null,cljs.core.hash_map,map__32163):map__32163);var next_query = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32164 = p__32161;var map__32164__$1 = ((cljs.core.seq_QMARK_.call(null,map__32164))?cljs.core.apply.call(null,cljs.core.hash_map,map__32164):map__32164);var fetch_tag_data_fn = cljs.core.get.call(null,map__32164__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32164__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32243,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32243,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (state_32182){var state_val_32183 = (state_32182[(1)]);if((state_val_32183 === (5)))
{var inst_32180 = (state_32182[(2)]);var state_32182__$1 = state_32182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32182__$1,inst_32180);
} else
{if((state_val_32183 === (4)))
{var state_32182__$1 = state_32182;var statearr_32184_32244 = state_32182__$1;(statearr_32184_32244[(2)] = null);
(statearr_32184_32244[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32183 === (3)))
{var inst_32167 = (state_32182[(7)]);var inst_32169 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32170 = ["HISTOGRAM TAGS: ",inst_32167];var inst_32171 = (new cljs.core.PersistentVector(null,2,(5),inst_32169,inst_32170,null));var inst_32172 = cljs.core.clj__GT_js.call(null,inst_32171);var inst_32173 = console.log(inst_32172);var inst_32174 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32175 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32176 = (new cljs.core.PersistentVector(null,1,(5),inst_32174,inst_32175,null));var inst_32177 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32176,inst_32167);var state_32182__$1 = (function (){var statearr_32185 = state_32182;(statearr_32185[(8)] = inst_32173);
return statearr_32185;
})();var statearr_32186_32245 = state_32182__$1;(statearr_32186_32245[(2)] = inst_32177);
(statearr_32186_32245[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32183 === (2)))
{var inst_32167 = (state_32182[(7)]);var inst_32167__$1 = (state_32182[(2)]);var state_32182__$1 = (function (){var statearr_32187 = state_32182;(statearr_32187[(7)] = inst_32167__$1);
return statearr_32187;
})();if(cljs.core.truth_(inst_32167__$1))
{var statearr_32188_32246 = state_32182__$1;(statearr_32188_32246[(1)] = (3));
} else
{var statearr_32189_32247 = state_32182__$1;(statearr_32189_32247[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32183 === (1)))
{var inst_32165 = fetch_tag_data_fn.call(null,next_tag_type);var state_32182__$1 = state_32182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32182__$1,(2),inst_32165);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32243,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;return ((function (switch__9110__auto__,c__9125__auto___32243,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32193 = [null,null,null,null,null,null,null,null,null];(statearr_32193[(0)] = state_machine__9111__auto__);
(statearr_32193[(1)] = (1));
return statearr_32193;
});
var state_machine__9111__auto____1 = (function (state_32182){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32182);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32194){if((e32194 instanceof Object))
{var ex__9114__auto__ = e32194;var statearr_32195_32248 = state_32182;(statearr_32195_32248[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32194;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32249 = state_32182;
state_32182 = G__32249;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32243,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
})();var state__9127__auto__ = (function (){var statearr_32196 = f__9126__auto__.call(null);(statearr_32196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32243);
return statearr_32196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32243,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (state_32219){var state_val_32220 = (state_32219[(1)]);if((state_val_32220 === (5)))
{var inst_32217 = (state_32219[(2)]);var state_32219__$1 = state_32219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32219__$1,inst_32217);
} else
{if((state_val_32220 === (4)))
{var state_32219__$1 = state_32219;var statearr_32221_32250 = state_32219__$1;(statearr_32221_32250[(2)] = null);
(statearr_32221_32250[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32220 === (3)))
{var inst_32203 = (state_32219[(7)]);var inst_32205 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32206 = ["HISTOGRAM TAG AGGS: ",inst_32203];var inst_32207 = (new cljs.core.PersistentVector(null,2,(5),inst_32205,inst_32206,null));var inst_32208 = cljs.core.clj__GT_js.call(null,inst_32207);var inst_32209 = console.log(inst_32208);var inst_32210 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32211 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32212 = (new cljs.core.PersistentVector(null,1,(5),inst_32210,inst_32211,null));var inst_32213 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32203);var inst_32214 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32212,inst_32213);var state_32219__$1 = (function (){var statearr_32222 = state_32219;(statearr_32222[(8)] = inst_32209);
return statearr_32222;
})();var statearr_32223_32251 = state_32219__$1;(statearr_32223_32251[(2)] = inst_32214);
(statearr_32223_32251[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32220 === (2)))
{var inst_32203 = (state_32219[(7)]);var inst_32203__$1 = (state_32219[(2)]);var state_32219__$1 = (function (){var statearr_32224 = state_32219;(statearr_32224[(7)] = inst_32203__$1);
return statearr_32224;
})();if(cljs.core.truth_(inst_32203__$1))
{var statearr_32225_32252 = state_32219__$1;(statearr_32225_32252[(1)] = (3));
} else
{var statearr_32226_32253 = state_32219__$1;(statearr_32226_32253[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32220 === (1)))
{var inst_32197 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32198 = [next_filter_spec];var inst_32199 = cljs.core.PersistentHashMap.fromArrays(inst_32197,inst_32198);var inst_32200 = cljs.core.merge.call(null,next_query,inst_32199);var inst_32201 = fetch_tag_agg_data_fn.call(null,inst_32200);var state_32219__$1 = state_32219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32219__$1,(2),inst_32201);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32230 = [null,null,null,null,null,null,null,null,null];(statearr_32230[(0)] = state_machine__9111__auto__);
(statearr_32230[(1)] = (1));
return statearr_32230;
});
var state_machine__9111__auto____1 = (function (state_32219){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32219);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32231){if((e32231 instanceof Object))
{var ex__9114__auto__ = e32231;var statearr_32232_32254 = state_32219;(statearr_32232_32254[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32219);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32231;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32255 = state_32219;
state_32219 = G__32255;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32219){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
})();var state__9127__auto__ = (function (){var statearr_32233 = f__9126__auto__.call(null);(statearr_32233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32162,map__32162__$1,map__32163,map__32163__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32164,map__32164__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32154.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32234 = om.core.get_node.call(null,self__.owner,"chart");var G__32234__$1 = (((G__32234 == null))?null:jayq.core.$.call(null,G__32234));var G__32234__$2 = (((G__32234__$1 == null))?null:G__32234__$1.highcharts());var G__32234__$3 = (((G__32234__$2 == null))?null:G__32234__$2.reflow());return G__32234__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
);
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32154.prototype.om$core$IRender$render$arity$1 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_32156){var self__ = this;
var _32156__$1 = this;return self__.meta32155;
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.t32154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function (_32156,meta32155__$1){var self__ = this;
var _32156__$1 = this;return (new clustermap.components.tag_histogram.t32154(self__.input_schema32045,self__.query,self__.map__32148,self__.owner,self__.metrics,self__.input_checker32046,self__.map__32150,self__.tag_agg_data,self__.tag_histogram,self__.map__32152,self__.filter_spec,self__.G__32050,self__.G__32049,self__.output_schema32044,self__.map__32153,self__.tag_type,self__.G__32048,self__.map__32151,self__.validate__6034__auto__,self__.id,self__.G__32147,self__.opts,self__.tag_data,self__.output_checker32047,self__.map__32149,self__.ufv__,self__.G__32146,meta32155__$1));
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
clustermap.components.tag_histogram.__GT_t32154 = ((function (map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239){
return (function __GT_t32154(input_schema32045__$1,query__$2,map__32148__$2,owner__$3,metrics__$2,input_checker32046__$1,map__32150__$2,tag_agg_data__$2,tag_histogram__$3,map__32152__$2,filter_spec__$2,G__32050__$1,G__32049__$1,output_schema32044__$1,map__32153__$2,tag_type__$2,G__32048__$1,map__32151__$2,validate__6034__auto____$1,id__$2,G__32147__$2,opts__$2,tag_data__$2,output_checker32047__$1,map__32149__$2,ufv____$1,G__32146__$2,meta32155){return (new clustermap.components.tag_histogram.t32154(input_schema32045__$1,query__$2,map__32148__$2,owner__$3,metrics__$2,input_checker32046__$1,map__32150__$2,tag_agg_data__$2,tag_histogram__$3,map__32152__$2,filter_spec__$2,G__32050__$1,G__32049__$1,output_schema32044__$1,map__32153__$2,tag_type__$2,G__32048__$1,map__32151__$2,validate__6034__auto____$1,id__$2,G__32147__$2,opts__$2,tag_data__$2,output_checker32047__$1,map__32149__$2,ufv____$1,G__32146__$2,meta32155));
});})(map__32151,map__32151__$1,map__32152,map__32152__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32153,map__32153__$1,opts__$1,id__$1,G__32146,map__32148,map__32148__$1,map__32149,map__32149__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32147,map__32150,map__32150__$1,opts,id,validate__6034__auto__,ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
}
return (new clustermap.components.tag_histogram.t32154(input_schema32045_32237,query__$1,map__32148__$1,owner__$2,metrics__$1,input_checker32046_32238,map__32150__$1,tag_agg_data__$1,tag_histogram__$2,map__32152__$1,filter_spec__$1,G__32050,G__32049,output_schema32044_32236,map__32153__$1,tag_type__$1,G__32048,map__32151__$1,validate__6034__auto__,id__$1,G__32147__$1,opts__$1,tag_data__$1,output_checker32047_32239,map__32149__$1,ufv___32235,G__32146__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32256 = output_checker32047_32239.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32256))
{var error__6036__auto___32257 = temp__4126__auto___32256;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32257)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32257,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32044_32236,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32235,output_schema32044_32236,input_schema32045_32237,input_checker32046_32238,output_checker32047_32239))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema32044_32236,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32045_32237], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m32043){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m32043);
});
__GT_tag_histogram = function(cursor__7850__auto__,m32043){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m32043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
