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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31947,p__31948){var map__31991 = p__31947;var map__31991__$1 = ((cljs.core.seq_QMARK_.call(null,map__31991))?cljs.core.apply.call(null,cljs.core.hash_map,map__31991):map__31991);var tag_agg_data = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var chart_height = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"chart-height","chart-height",1221218467));var bar_width = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31991__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31992 = p__31948;var map__31992__$1 = ((cljs.core.seq_QMARK_.call(null,map__31992))?cljs.core.apply.call(null,cljs.core.hash_map,map__31992):map__31992);var opts = map__31992__$1;var y1_title = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31992__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function iter__31993(s__31994){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function (){var s__31994__$1 = s__31994;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31994__$1);if(temp__4126__auto__)
{var s__31994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31994__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31994__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31996 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31995 = (0);while(true){
if((i__31995 < size__4376__auto__))
{var map__32007 = cljs.core._nth.call(null,c__4375__auto__,i__31995);var map__32007__$1 = ((cljs.core.seq_QMARK_.call(null,map__32007))?cljs.core.apply.call(null,cljs.core.hash_map,map__32007):map__32007);var metric_spec = map__32007__$1;var title = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32007__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31996,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31995,map__32007,map__32007__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31996,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function iter__32008(s__32009){return (new cljs.core.LazySeq(null,((function (i__31995,map__32007,map__32007__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31996,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function (){var s__32009__$1 = s__32009;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32009__$1);if(temp__4126__auto____$1)
{var s__32009__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32009__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32009__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32011 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32010 = (0);while(true){
if((i__32010 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__32010);cljs.core.chunk_append.call(null,b__32011,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32033 = (i__32010 + (1));
i__32010 = G__32033;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32011),iter__32008.call(null,cljs.core.chunk_rest.call(null,s__32009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32011),null);
}
} else
{var record = cljs.core.first.call(null,s__32009__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32008.call(null,cljs.core.rest.call(null,s__32009__$2)));
}
} else
{return null;
}
break;
}
});})(i__31995,map__32007,map__32007__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31996,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31995,map__32007,map__32007__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31996,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__32034 = (i__31995 + (1));
i__31995 = G__32034;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31996),iter__31993.call(null,cljs.core.chunk_rest.call(null,s__31994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31996),null);
}
} else
{var map__32012 = cljs.core.first.call(null,s__31994__$2);var map__32012__$1 = ((cljs.core.seq_QMARK_.call(null,map__32012))?cljs.core.apply.call(null,cljs.core.hash_map,map__32012):map__32012);var metric_spec = map__32012__$1;var title = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32012__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__32012,map__32012__$1,metric_spec,title,metric,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function iter__32013(s__32014){return (new cljs.core.LazySeq(null,((function (map__32012,map__32012__$1,metric_spec,title,metric,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function (){var s__32014__$1 = s__32014;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32014__$1);if(temp__4126__auto____$1)
{var s__32014__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32014__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32014__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32016 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32015 = (0);while(true){
if((i__32015 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__32015);cljs.core.chunk_append.call(null,b__32016,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32035 = (i__32015 + (1));
i__32015 = G__32035;
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
});})(map__32012,map__32012__$1,metric_spec,title,metric,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
,null,null));
});})(map__32012,map__32012__$1,metric_spec,title,metric,s__31994__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31993.call(null,cljs.core.rest.call(null,s__31994__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),chart_height], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function iter__32017(s__32018){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function (){var s__32018__$1 = s__32018;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32018__$1);if(temp__4126__auto__)
{var s__32018__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32018__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32018__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32020 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32019 = (0);while(true){
if((i__32019 < size__4376__auto__))
{var map__32023 = cljs.core._nth.call(null,c__4375__auto__,i__32019);var map__32023__$1 = ((cljs.core.seq_QMARK_.call(null,map__32023))?cljs.core.apply.call(null,cljs.core.hash_map,map__32023):map__32023);var label_formatter = cljs.core.get.call(null,map__32023__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32023__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__32020,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__32036 = (i__32019 + (1));
i__32019 = G__32036;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32020),iter__32017.call(null,cljs.core.chunk_rest.call(null,s__32018__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32020),null);
}
} else
{var map__32024 = cljs.core.first.call(null,s__32018__$2);var map__32024__$1 = ((cljs.core.seq_QMARK_.call(null,map__32024))?cljs.core.apply.call(null,cljs.core.hash_map,map__32024):map__32024);var label_formatter = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32024__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__32017.call(null,cljs.core.rest.call(null,s__32018__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function iter__32025(s__32026){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title){
return (function (){var s__32026__$1 = s__32026;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32026__$1);if(temp__4126__auto__)
{var s__32026__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32026__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32026__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32028 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32027 = (0);while(true){
if((i__32027 < size__4376__auto__))
{var vec__32031 = cljs.core._nth.call(null,c__4375__auto__,i__32027);var y = cljs.core.nth.call(null,vec__32031,(0),null);var i = cljs.core.nth.call(null,vec__32031,(1),null);cljs.core.chunk_append.call(null,b__32028,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__32037 = (i__32027 + (1));
i__32027 = G__32037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32028),iter__32025.call(null,cljs.core.chunk_rest.call(null,s__32026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32028),null);
}
} else
{var vec__32032 = cljs.core.first.call(null,s__32026__$2);var y = cljs.core.nth.call(null,vec__32032,(0),null);var i = cljs.core.nth.call(null,vec__32032,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__32025.call(null,cljs.core.rest.call(null,s__32026__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31991,map__31991__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31992,map__31992__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32230 = schema.utils.use_fn_validation;var output_schema32039_32231 = schema.core.Any;var input_schema32040_32232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker32041_32233 = schema.core.checker.call(null,input_schema32040_32232);var output_checker32042_32234 = schema.core.checker.call(null,output_schema32039_32231);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function tag_histogram(G__32043,G__32044,G__32045){var validate__6034__auto__ = ufv___32230.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32235 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32043,G__32044,G__32045], null);var temp__4126__auto___32236 = input_checker32041_32233.call(null,args__6035__auto___32235);if(cljs.core.truth_(temp__4126__auto___32236))
{var error__6036__auto___32237 = temp__4126__auto___32236;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32237)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32237,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32235,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32040_32232,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32141 = G__32043;var map__32143 = G__32141;var map__32143__$1 = ((cljs.core.seq_QMARK_.call(null,map__32143))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);var map__32144 = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32144__$1 = ((cljs.core.seq_QMARK_.call(null,map__32144))?cljs.core.apply.call(null,cljs.core.hash_map,map__32144):map__32144);var tag_histogram__$1 = map__32144__$1;var query = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32044;var G__32142 = G__32045;var map__32145 = G__32142;var map__32145__$1 = ((cljs.core.seq_QMARK_.call(null,map__32145))?cljs.core.apply.call(null,cljs.core.hash_map,map__32145):map__32145);var opts = map__32145__$1;var id = cljs.core.get.call(null,map__32145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32141__$1 = G__32141;var owner__$1 = owner;var G__32142__$1 = G__32142;while(true){
var map__32146 = G__32141__$1;var map__32146__$1 = ((cljs.core.seq_QMARK_.call(null,map__32146))?cljs.core.apply.call(null,cljs.core.hash_map,map__32146):map__32146);var map__32147 = cljs.core.get.call(null,map__32146__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32147__$1 = ((cljs.core.seq_QMARK_.call(null,map__32147))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);var tag_histogram__$2 = map__32147__$1;var query__$1 = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32146__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32148 = G__32142__$1;var map__32148__$1 = ((cljs.core.seq_QMARK_.call(null,map__32148))?cljs.core.apply.call(null,cljs.core.hash_map,map__32148):map__32148);var opts__$1 = map__32148__$1;var id__$1 = cljs.core.get.call(null,map__32148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32149 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32149 = (function (G__32044,query,map__32148,G__32043,owner,metrics,G__32141,G__32045,input_schema32040,map__32143,tag_agg_data,map__32146,map__32144,tag_histogram,filter_spec,map__32147,map__32145,input_checker32041,tag_type,G__32142,output_schema32039,validate__6034__auto__,id,opts,tag_data,ufv__,output_checker32042,meta32150){
this.G__32044 = G__32044;
this.query = query;
this.map__32148 = map__32148;
this.G__32043 = G__32043;
this.owner = owner;
this.metrics = metrics;
this.G__32141 = G__32141;
this.G__32045 = G__32045;
this.input_schema32040 = input_schema32040;
this.map__32143 = map__32143;
this.tag_agg_data = tag_agg_data;
this.map__32146 = map__32146;
this.map__32144 = map__32144;
this.tag_histogram = tag_histogram;
this.filter_spec = filter_spec;
this.map__32147 = map__32147;
this.map__32145 = map__32145;
this.input_checker32041 = input_checker32041;
this.tag_type = tag_type;
this.G__32142 = G__32142;
this.output_schema32039 = output_schema32039;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.output_checker32042 = output_checker32042;
this.meta32150 = meta32150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32149.cljs$lang$type = true;
clustermap.components.tag_histogram.t32149.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32149";
clustermap.components.tag_histogram.t32149.cljs$lang$ctorPrWriter = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t32149");
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32149.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32149.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_,p__32152,___$1){var self__ = this;
var map__32153 = p__32152;var map__32153__$1 = ((cljs.core.seq_QMARK_.call(null,map__32153))?cljs.core.apply.call(null,cljs.core.hash_map,map__32153):map__32153);var map__32154 = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32154__$1 = ((cljs.core.seq_QMARK_.call(null,map__32154))?cljs.core.apply.call(null,cljs.core.hash_map,map__32154):map__32154);var prev_query = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32149.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_,p__32155,p__32156){var self__ = this;
var map__32157 = p__32155;var map__32157__$1 = ((cljs.core.seq_QMARK_.call(null,map__32157))?cljs.core.apply.call(null,cljs.core.hash_map,map__32157):map__32157);var map__32158 = cljs.core.get.call(null,map__32157__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32158__$1 = ((cljs.core.seq_QMARK_.call(null,map__32158))?cljs.core.apply.call(null,cljs.core.hash_map,map__32158):map__32158);var next_query = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32158__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32157__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32159 = p__32156;var map__32159__$1 = ((cljs.core.seq_QMARK_.call(null,map__32159))?cljs.core.apply.call(null,cljs.core.hash_map,map__32159):map__32159);var fetch_tag_data_fn = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32238 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32238,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32238,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (state_32177){var state_val_32178 = (state_32177[(1)]);if((state_val_32178 === (5)))
{var inst_32175 = (state_32177[(2)]);var state_32177__$1 = state_32177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32177__$1,inst_32175);
} else
{if((state_val_32178 === (4)))
{var state_32177__$1 = state_32177;var statearr_32179_32239 = state_32177__$1;(statearr_32179_32239[(2)] = null);
(statearr_32179_32239[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32178 === (3)))
{var inst_32162 = (state_32177[(7)]);var inst_32164 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32165 = ["HISTOGRAM TAGS: ",inst_32162];var inst_32166 = (new cljs.core.PersistentVector(null,2,(5),inst_32164,inst_32165,null));var inst_32167 = cljs.core.clj__GT_js.call(null,inst_32166);var inst_32168 = console.log(inst_32167);var inst_32169 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32170 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32171 = (new cljs.core.PersistentVector(null,1,(5),inst_32169,inst_32170,null));var inst_32172 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32171,inst_32162);var state_32177__$1 = (function (){var statearr_32180 = state_32177;(statearr_32180[(8)] = inst_32168);
return statearr_32180;
})();var statearr_32181_32240 = state_32177__$1;(statearr_32181_32240[(2)] = inst_32172);
(statearr_32181_32240[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32178 === (2)))
{var inst_32162 = (state_32177[(7)]);var inst_32162__$1 = (state_32177[(2)]);var state_32177__$1 = (function (){var statearr_32182 = state_32177;(statearr_32182[(7)] = inst_32162__$1);
return statearr_32182;
})();if(cljs.core.truth_(inst_32162__$1))
{var statearr_32183_32241 = state_32177__$1;(statearr_32183_32241[(1)] = (3));
} else
{var statearr_32184_32242 = state_32177__$1;(statearr_32184_32242[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32178 === (1)))
{var inst_32160 = fetch_tag_data_fn.call(null,next_tag_type);var state_32177__$1 = state_32177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32177__$1,(2),inst_32160);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32238,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;return ((function (switch__9110__auto__,c__9125__auto___32238,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32188 = [null,null,null,null,null,null,null,null,null];(statearr_32188[(0)] = state_machine__9111__auto__);
(statearr_32188[(1)] = (1));
return statearr_32188;
});
var state_machine__9111__auto____1 = (function (state_32177){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32177);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32189){if((e32189 instanceof Object))
{var ex__9114__auto__ = e32189;var statearr_32190_32243 = state_32177;(statearr_32190_32243[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32189;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32244 = state_32177;
state_32177 = G__32244;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32177){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32238,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
})();var state__9127__auto__ = (function (){var statearr_32191 = f__9126__auto__.call(null);(statearr_32191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32238);
return statearr_32191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32238,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (state_32214){var state_val_32215 = (state_32214[(1)]);if((state_val_32215 === (5)))
{var inst_32212 = (state_32214[(2)]);var state_32214__$1 = state_32214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32214__$1,inst_32212);
} else
{if((state_val_32215 === (4)))
{var state_32214__$1 = state_32214;var statearr_32216_32245 = state_32214__$1;(statearr_32216_32245[(2)] = null);
(statearr_32216_32245[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32215 === (3)))
{var inst_32198 = (state_32214[(7)]);var inst_32200 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32201 = ["HISTOGRAM TAG AGGS: ",inst_32198];var inst_32202 = (new cljs.core.PersistentVector(null,2,(5),inst_32200,inst_32201,null));var inst_32203 = cljs.core.clj__GT_js.call(null,inst_32202);var inst_32204 = console.log(inst_32203);var inst_32205 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32206 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32207 = (new cljs.core.PersistentVector(null,1,(5),inst_32205,inst_32206,null));var inst_32208 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32198);var inst_32209 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32207,inst_32208);var state_32214__$1 = (function (){var statearr_32217 = state_32214;(statearr_32217[(8)] = inst_32204);
return statearr_32217;
})();var statearr_32218_32246 = state_32214__$1;(statearr_32218_32246[(2)] = inst_32209);
(statearr_32218_32246[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32215 === (2)))
{var inst_32198 = (state_32214[(7)]);var inst_32198__$1 = (state_32214[(2)]);var state_32214__$1 = (function (){var statearr_32219 = state_32214;(statearr_32219[(7)] = inst_32198__$1);
return statearr_32219;
})();if(cljs.core.truth_(inst_32198__$1))
{var statearr_32220_32247 = state_32214__$1;(statearr_32220_32247[(1)] = (3));
} else
{var statearr_32221_32248 = state_32214__$1;(statearr_32221_32248[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32215 === (1)))
{var inst_32192 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32193 = [next_filter_spec];var inst_32194 = cljs.core.PersistentHashMap.fromArrays(inst_32192,inst_32193);var inst_32195 = cljs.core.merge.call(null,next_query,inst_32194);var inst_32196 = fetch_tag_agg_data_fn.call(null,inst_32195);var state_32214__$1 = state_32214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32214__$1,(2),inst_32196);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32225 = [null,null,null,null,null,null,null,null,null];(statearr_32225[(0)] = state_machine__9111__auto__);
(statearr_32225[(1)] = (1));
return statearr_32225;
});
var state_machine__9111__auto____1 = (function (state_32214){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32214);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32226){if((e32226 instanceof Object))
{var ex__9114__auto__ = e32226;var statearr_32227_32249 = state_32214;(statearr_32227_32249[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32226;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32250 = state_32214;
state_32214 = G__32250;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32214){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
})();var state__9127__auto__ = (function (){var statearr_32228 = f__9126__auto__.call(null);(statearr_32228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32157,map__32157__$1,map__32158,map__32158__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32159,map__32159__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32149.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32229 = om.core.get_node.call(null,self__.owner,"chart");var G__32229__$1 = (((G__32229 == null))?null:jayq.core.$.call(null,G__32229));var G__32229__$2 = (((G__32229__$1 == null))?null:G__32229__$1.highcharts());var G__32229__$3 = (((G__32229__$2 == null))?null:G__32229__$2.reflow());return G__32229__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
);
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32149.prototype.om$core$IRender$render$arity$1 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_32151){var self__ = this;
var _32151__$1 = this;return self__.meta32150;
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.t32149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function (_32151,meta32150__$1){var self__ = this;
var _32151__$1 = this;return (new clustermap.components.tag_histogram.t32149(self__.G__32044,self__.query,self__.map__32148,self__.G__32043,self__.owner,self__.metrics,self__.G__32141,self__.G__32045,self__.input_schema32040,self__.map__32143,self__.tag_agg_data,self__.map__32146,self__.map__32144,self__.tag_histogram,self__.filter_spec,self__.map__32147,self__.map__32145,self__.input_checker32041,self__.tag_type,self__.G__32142,self__.output_schema32039,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.ufv__,self__.output_checker32042,meta32150__$1));
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
clustermap.components.tag_histogram.__GT_t32149 = ((function (map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234){
return (function __GT_t32149(G__32044__$1,query__$2,map__32148__$2,G__32043__$1,owner__$3,metrics__$2,G__32141__$2,G__32045__$1,input_schema32040__$1,map__32143__$2,tag_agg_data__$2,map__32146__$2,map__32144__$2,tag_histogram__$3,filter_spec__$2,map__32147__$2,map__32145__$2,input_checker32041__$1,tag_type__$2,G__32142__$2,output_schema32039__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,output_checker32042__$1,meta32150){return (new clustermap.components.tag_histogram.t32149(G__32044__$1,query__$2,map__32148__$2,G__32043__$1,owner__$3,metrics__$2,G__32141__$2,G__32045__$1,input_schema32040__$1,map__32143__$2,tag_agg_data__$2,map__32146__$2,map__32144__$2,tag_histogram__$3,filter_spec__$2,map__32147__$2,map__32145__$2,input_checker32041__$1,tag_type__$2,G__32142__$2,output_schema32039__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,output_checker32042__$1,meta32150));
});})(map__32146,map__32146__$1,map__32147,map__32147__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32148,map__32148__$1,opts__$1,id__$1,G__32141,map__32143,map__32143__$1,map__32144,map__32144__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32142,map__32145,map__32145__$1,opts,id,validate__6034__auto__,ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
}
return (new clustermap.components.tag_histogram.t32149(G__32044,query__$1,map__32148__$1,G__32043,owner__$2,metrics__$1,G__32141__$1,G__32045,input_schema32040_32232,map__32143__$1,tag_agg_data__$1,map__32146__$1,map__32144__$1,tag_histogram__$2,filter_spec__$1,map__32147__$1,map__32145__$1,input_checker32041_32233,tag_type__$1,G__32142__$1,output_schema32039_32231,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,ufv___32230,output_checker32042_32234,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32251 = output_checker32042_32234.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32251))
{var error__6036__auto___32252 = temp__4126__auto___32251;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32252)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32252,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32039_32231,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32230,output_schema32039_32231,input_schema32040_32232,input_checker32041_32233,output_checker32042_32234))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema32039_32231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32040_32232], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m32038){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m32038);
});
__GT_tag_histogram = function(cursor__7850__auto__,m32038){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m32038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
