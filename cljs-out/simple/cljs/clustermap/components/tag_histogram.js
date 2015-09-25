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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31956,p__31957){var map__32000 = p__31956;var map__32000__$1 = ((cljs.core.seq_QMARK_.call(null,map__32000))?cljs.core.apply.call(null,cljs.core.hash_map,map__32000):map__32000);var tag_agg_data = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var chart_height = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"chart-height","chart-height",1221218467));var bar_width = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__32000__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__32001 = p__31957;var map__32001__$1 = ((cljs.core.seq_QMARK_.call(null,map__32001))?cljs.core.apply.call(null,cljs.core.hash_map,map__32001):map__32001);var opts = map__32001__$1;var y1_title = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__32001__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function iter__32002(s__32003){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function (){var s__32003__$1 = s__32003;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32003__$1);if(temp__4126__auto__)
{var s__32003__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32003__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32003__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32005 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32004 = (0);while(true){
if((i__32004 < size__4376__auto__))
{var map__32016 = cljs.core._nth.call(null,c__4375__auto__,i__32004);var map__32016__$1 = ((cljs.core.seq_QMARK_.call(null,map__32016))?cljs.core.apply.call(null,cljs.core.hash_map,map__32016):map__32016);var metric_spec = map__32016__$1;var title = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32016__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__32005,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__32004,map__32016,map__32016__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32005,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function iter__32017(s__32018){return (new cljs.core.LazySeq(null,((function (i__32004,map__32016,map__32016__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32005,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function (){var s__32018__$1 = s__32018;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32018__$1);if(temp__4126__auto____$1)
{var s__32018__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32018__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__32018__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__32020 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__32019 = (0);while(true){
if((i__32019 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__32019);cljs.core.chunk_append.call(null,b__32020,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32042 = (i__32019 + (1));
i__32019 = G__32042;
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
{var record = cljs.core.first.call(null,s__32018__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32017.call(null,cljs.core.rest.call(null,s__32018__$2)));
}
} else
{return null;
}
break;
}
});})(i__32004,map__32016,map__32016__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32005,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
,null,null));
});})(i__32004,map__32016,map__32016__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__32005,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__32043 = (i__32004 + (1));
i__32004 = G__32043;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32005),iter__32002.call(null,cljs.core.chunk_rest.call(null,s__32003__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32005),null);
}
} else
{var map__32021 = cljs.core.first.call(null,s__32003__$2);var map__32021__$1 = ((cljs.core.seq_QMARK_.call(null,map__32021))?cljs.core.apply.call(null,cljs.core.hash_map,map__32021):map__32021);var metric_spec = map__32021__$1;var title = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__32021__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__32021,map__32021__$1,metric_spec,title,metric,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function iter__32022(s__32023){return (new cljs.core.LazySeq(null,((function (map__32021,map__32021__$1,metric_spec,title,metric,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function (){var s__32023__$1 = s__32023;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__32023__$1);if(temp__4126__auto____$1)
{var s__32023__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__32023__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32023__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32025 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32024 = (0);while(true){
if((i__32024 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__32024);cljs.core.chunk_append.call(null,b__32025,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__32044 = (i__32024 + (1));
i__32024 = G__32044;
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
{var record = cljs.core.first.call(null,s__32023__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__32022.call(null,cljs.core.rest.call(null,s__32023__$2)));
}
} else
{return null;
}
break;
}
});})(map__32021,map__32021__$1,metric_spec,title,metric,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
,null,null));
});})(map__32021,map__32021__$1,metric_spec,title,metric,s__32003__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__32002.call(null,cljs.core.rest.call(null,s__32003__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),chart_height], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function iter__32026(s__32027){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function (){var s__32027__$1 = s__32027;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32027__$1);if(temp__4126__auto__)
{var s__32027__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32027__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32027__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32029 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32028 = (0);while(true){
if((i__32028 < size__4376__auto__))
{var map__32032 = cljs.core._nth.call(null,c__4375__auto__,i__32028);var map__32032__$1 = ((cljs.core.seq_QMARK_.call(null,map__32032))?cljs.core.apply.call(null,cljs.core.hash_map,map__32032):map__32032);var label_formatter = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32032__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__32029,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__32045 = (i__32028 + (1));
i__32028 = G__32045;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32029),iter__32026.call(null,cljs.core.chunk_rest.call(null,s__32027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32029),null);
}
} else
{var map__32033 = cljs.core.first.call(null,s__32027__$2);var map__32033__$1 = ((cljs.core.seq_QMARK_.call(null,map__32033))?cljs.core.apply.call(null,cljs.core.hash_map,map__32033):map__32033);var label_formatter = cljs.core.get.call(null,map__32033__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__32033__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__32026.call(null,cljs.core.rest.call(null,s__32027__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function iter__32034(s__32035){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title){
return (function (){var s__32035__$1 = s__32035;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32035__$1);if(temp__4126__auto__)
{var s__32035__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32035__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__32035__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__32037 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__32036 = (0);while(true){
if((i__32036 < size__4376__auto__))
{var vec__32040 = cljs.core._nth.call(null,c__4375__auto__,i__32036);var y = cljs.core.nth.call(null,vec__32040,(0),null);var i = cljs.core.nth.call(null,vec__32040,(1),null);cljs.core.chunk_append.call(null,b__32037,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__32046 = (i__32036 + (1));
i__32036 = G__32046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32037),iter__32034.call(null,cljs.core.chunk_rest.call(null,s__32035__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32037),null);
}
} else
{var vec__32041 = cljs.core.first.call(null,s__32035__$2);var y = cljs.core.nth.call(null,vec__32041,(0),null);var i = cljs.core.nth.call(null,vec__32041,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__32034.call(null,cljs.core.rest.call(null,s__32035__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__32000,map__32000__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__32001,map__32001__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32239 = schema.utils.use_fn_validation;var output_schema32048_32240 = schema.core.Any;var input_schema32049_32241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker32050_32242 = schema.core.checker.call(null,input_schema32049_32241);var output_checker32051_32243 = schema.core.checker.call(null,output_schema32048_32240);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function tag_histogram(G__32052,G__32053,G__32054){var validate__6034__auto__ = ufv___32239.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32244 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32052,G__32053,G__32054], null);var temp__4126__auto___32245 = input_checker32050_32242.call(null,args__6035__auto___32244);if(cljs.core.truth_(temp__4126__auto___32245))
{var error__6036__auto___32246 = temp__4126__auto___32245;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32246,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32244,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32049_32241,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32150 = G__32052;var map__32152 = G__32150;var map__32152__$1 = ((cljs.core.seq_QMARK_.call(null,map__32152))?cljs.core.apply.call(null,cljs.core.hash_map,map__32152):map__32152);var map__32153 = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32153__$1 = ((cljs.core.seq_QMARK_.call(null,map__32153))?cljs.core.apply.call(null,cljs.core.hash_map,map__32153):map__32153);var tag_histogram__$1 = map__32153__$1;var query = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32153__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32053;var G__32151 = G__32054;var map__32154 = G__32151;var map__32154__$1 = ((cljs.core.seq_QMARK_.call(null,map__32154))?cljs.core.apply.call(null,cljs.core.hash_map,map__32154):map__32154);var opts = map__32154__$1;var id = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32150__$1 = G__32150;var owner__$1 = owner;var G__32151__$1 = G__32151;while(true){
var map__32155 = G__32150__$1;var map__32155__$1 = ((cljs.core.seq_QMARK_.call(null,map__32155))?cljs.core.apply.call(null,cljs.core.hash_map,map__32155):map__32155);var map__32156 = cljs.core.get.call(null,map__32155__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32156__$1 = ((cljs.core.seq_QMARK_.call(null,map__32156))?cljs.core.apply.call(null,cljs.core.hash_map,map__32156):map__32156);var tag_histogram__$2 = map__32156__$1;var query__$1 = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32156__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32155__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32157 = G__32151__$1;var map__32157__$1 = ((cljs.core.seq_QMARK_.call(null,map__32157))?cljs.core.apply.call(null,cljs.core.hash_map,map__32157):map__32157);var opts__$1 = map__32157__$1;var id__$1 = cljs.core.get.call(null,map__32157__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32158 = (function (input_schema32049,query,G__32054,owner,metrics,G__32151,input_checker32050,G__32150,tag_agg_data,tag_histogram,G__32053,G__32052,map__32152,filter_spec,map__32155,map__32154,output_schema32048,map__32153,tag_type,output_checker32051,map__32156,validate__6034__auto__,id,opts,tag_data,map__32157,ufv__,meta32159){
this.input_schema32049 = input_schema32049;
this.query = query;
this.G__32054 = G__32054;
this.owner = owner;
this.metrics = metrics;
this.G__32151 = G__32151;
this.input_checker32050 = input_checker32050;
this.G__32150 = G__32150;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__32053 = G__32053;
this.G__32052 = G__32052;
this.map__32152 = map__32152;
this.filter_spec = filter_spec;
this.map__32155 = map__32155;
this.map__32154 = map__32154;
this.output_schema32048 = output_schema32048;
this.map__32153 = map__32153;
this.tag_type = tag_type;
this.output_checker32051 = output_checker32051;
this.map__32156 = map__32156;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.map__32157 = map__32157;
this.ufv__ = ufv__;
this.meta32159 = meta32159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32158.cljs$lang$type = true;
clustermap.components.tag_histogram.t32158.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32158";
clustermap.components.tag_histogram.t32158.cljs$lang$ctorPrWriter = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t32158");
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32158.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32158.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_,p__32161,___$1){var self__ = this;
var map__32162 = p__32161;var map__32162__$1 = ((cljs.core.seq_QMARK_.call(null,map__32162))?cljs.core.apply.call(null,cljs.core.hash_map,map__32162):map__32162);var map__32163 = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32163__$1 = ((cljs.core.seq_QMARK_.call(null,map__32163))?cljs.core.apply.call(null,cljs.core.hash_map,map__32163):map__32163);var prev_query = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32163__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32158.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_,p__32164,p__32165){var self__ = this;
var map__32166 = p__32164;var map__32166__$1 = ((cljs.core.seq_QMARK_.call(null,map__32166))?cljs.core.apply.call(null,cljs.core.hash_map,map__32166):map__32166);var map__32167 = cljs.core.get.call(null,map__32166__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32167__$1 = ((cljs.core.seq_QMARK_.call(null,map__32167))?cljs.core.apply.call(null,cljs.core.hash_map,map__32167):map__32167);var next_query = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32167__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32166__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32168 = p__32165;var map__32168__$1 = ((cljs.core.seq_QMARK_.call(null,map__32168))?cljs.core.apply.call(null,cljs.core.hash_map,map__32168):map__32168);var fetch_tag_data_fn = cljs.core.get.call(null,map__32168__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32168__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32247,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32247,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (state_32186){var state_val_32187 = (state_32186[(1)]);if((state_val_32187 === (5)))
{var inst_32184 = (state_32186[(2)]);var state_32186__$1 = state_32186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32186__$1,inst_32184);
} else
{if((state_val_32187 === (4)))
{var state_32186__$1 = state_32186;var statearr_32188_32248 = state_32186__$1;(statearr_32188_32248[(2)] = null);
(statearr_32188_32248[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32187 === (3)))
{var inst_32171 = (state_32186[(7)]);var inst_32173 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32174 = ["HISTOGRAM TAGS: ",inst_32171];var inst_32175 = (new cljs.core.PersistentVector(null,2,(5),inst_32173,inst_32174,null));var inst_32176 = cljs.core.clj__GT_js.call(null,inst_32175);var inst_32177 = console.log(inst_32176);var inst_32178 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32179 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32180 = (new cljs.core.PersistentVector(null,1,(5),inst_32178,inst_32179,null));var inst_32181 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32180,inst_32171);var state_32186__$1 = (function (){var statearr_32189 = state_32186;(statearr_32189[(8)] = inst_32177);
return statearr_32189;
})();var statearr_32190_32249 = state_32186__$1;(statearr_32190_32249[(2)] = inst_32181);
(statearr_32190_32249[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32187 === (2)))
{var inst_32171 = (state_32186[(7)]);var inst_32171__$1 = (state_32186[(2)]);var state_32186__$1 = (function (){var statearr_32191 = state_32186;(statearr_32191[(7)] = inst_32171__$1);
return statearr_32191;
})();if(cljs.core.truth_(inst_32171__$1))
{var statearr_32192_32250 = state_32186__$1;(statearr_32192_32250[(1)] = (3));
} else
{var statearr_32193_32251 = state_32186__$1;(statearr_32193_32251[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32187 === (1)))
{var inst_32169 = fetch_tag_data_fn.call(null,next_tag_type);var state_32186__$1 = state_32186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32186__$1,(2),inst_32169);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32247,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;return ((function (switch__9110__auto__,c__9125__auto___32247,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32197 = [null,null,null,null,null,null,null,null,null];(statearr_32197[(0)] = state_machine__9111__auto__);
(statearr_32197[(1)] = (1));
return statearr_32197;
});
var state_machine__9111__auto____1 = (function (state_32186){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32186);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32198){if((e32198 instanceof Object))
{var ex__9114__auto__ = e32198;var statearr_32199_32252 = state_32186;(statearr_32199_32252[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32186);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32198;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32253 = state_32186;
state_32186 = G__32253;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32247,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
})();var state__9127__auto__ = (function (){var statearr_32200 = f__9126__auto__.call(null);(statearr_32200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32247);
return statearr_32200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32247,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (state_32223){var state_val_32224 = (state_32223[(1)]);if((state_val_32224 === (5)))
{var inst_32221 = (state_32223[(2)]);var state_32223__$1 = state_32223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32223__$1,inst_32221);
} else
{if((state_val_32224 === (4)))
{var state_32223__$1 = state_32223;var statearr_32225_32254 = state_32223__$1;(statearr_32225_32254[(2)] = null);
(statearr_32225_32254[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32224 === (3)))
{var inst_32207 = (state_32223[(7)]);var inst_32209 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32210 = ["HISTOGRAM TAG AGGS: ",inst_32207];var inst_32211 = (new cljs.core.PersistentVector(null,2,(5),inst_32209,inst_32210,null));var inst_32212 = cljs.core.clj__GT_js.call(null,inst_32211);var inst_32213 = console.log(inst_32212);var inst_32214 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32215 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32216 = (new cljs.core.PersistentVector(null,1,(5),inst_32214,inst_32215,null));var inst_32217 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32207);var inst_32218 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32216,inst_32217);var state_32223__$1 = (function (){var statearr_32226 = state_32223;(statearr_32226[(8)] = inst_32213);
return statearr_32226;
})();var statearr_32227_32255 = state_32223__$1;(statearr_32227_32255[(2)] = inst_32218);
(statearr_32227_32255[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32224 === (2)))
{var inst_32207 = (state_32223[(7)]);var inst_32207__$1 = (state_32223[(2)]);var state_32223__$1 = (function (){var statearr_32228 = state_32223;(statearr_32228[(7)] = inst_32207__$1);
return statearr_32228;
})();if(cljs.core.truth_(inst_32207__$1))
{var statearr_32229_32256 = state_32223__$1;(statearr_32229_32256[(1)] = (3));
} else
{var statearr_32230_32257 = state_32223__$1;(statearr_32230_32257[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32224 === (1)))
{var inst_32201 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32202 = [next_filter_spec];var inst_32203 = cljs.core.PersistentHashMap.fromArrays(inst_32201,inst_32202);var inst_32204 = cljs.core.merge.call(null,next_query,inst_32203);var inst_32205 = fetch_tag_agg_data_fn.call(null,inst_32204);var state_32223__$1 = state_32223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32223__$1,(2),inst_32205);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32234 = [null,null,null,null,null,null,null,null,null];(statearr_32234[(0)] = state_machine__9111__auto__);
(statearr_32234[(1)] = (1));
return statearr_32234;
});
var state_machine__9111__auto____1 = (function (state_32223){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32223);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32235){if((e32235 instanceof Object))
{var ex__9114__auto__ = e32235;var statearr_32236_32258 = state_32223;(statearr_32236_32258[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32259 = state_32223;
state_32223 = G__32259;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32223){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
})();var state__9127__auto__ = (function (){var statearr_32237 = f__9126__auto__.call(null);(statearr_32237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32166,map__32166__$1,map__32167,map__32167__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32168,map__32168__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32158.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32238 = om.core.get_node.call(null,self__.owner,"chart");var G__32238__$1 = (((G__32238 == null))?null:jayq.core.$.call(null,G__32238));var G__32238__$2 = (((G__32238__$1 == null))?null:G__32238__$1.highcharts());var G__32238__$3 = (((G__32238__$2 == null))?null:G__32238__$2.reflow());return G__32238__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
);
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32158.prototype.om$core$IRender$render$arity$1 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_32160){var self__ = this;
var _32160__$1 = this;return self__.meta32159;
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.t32158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function (_32160,meta32159__$1){var self__ = this;
var _32160__$1 = this;return (new clustermap.components.tag_histogram.t32158(self__.input_schema32049,self__.query,self__.G__32054,self__.owner,self__.metrics,self__.G__32151,self__.input_checker32050,self__.G__32150,self__.tag_agg_data,self__.tag_histogram,self__.G__32053,self__.G__32052,self__.map__32152,self__.filter_spec,self__.map__32155,self__.map__32154,self__.output_schema32048,self__.map__32153,self__.tag_type,self__.output_checker32051,self__.map__32156,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.map__32157,self__.ufv__,meta32159__$1));
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
clustermap.components.tag_histogram.__GT_t32158 = ((function (map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243){
return (function __GT_t32158(input_schema32049__$1,query__$2,G__32054__$1,owner__$3,metrics__$2,G__32151__$2,input_checker32050__$1,G__32150__$2,tag_agg_data__$2,tag_histogram__$3,G__32053__$1,G__32052__$1,map__32152__$2,filter_spec__$2,map__32155__$2,map__32154__$2,output_schema32048__$1,map__32153__$2,tag_type__$2,output_checker32051__$1,map__32156__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,map__32157__$2,ufv____$1,meta32159){return (new clustermap.components.tag_histogram.t32158(input_schema32049__$1,query__$2,G__32054__$1,owner__$3,metrics__$2,G__32151__$2,input_checker32050__$1,G__32150__$2,tag_agg_data__$2,tag_histogram__$3,G__32053__$1,G__32052__$1,map__32152__$2,filter_spec__$2,map__32155__$2,map__32154__$2,output_schema32048__$1,map__32153__$2,tag_type__$2,output_checker32051__$1,map__32156__$2,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,map__32157__$2,ufv____$1,meta32159));
});})(map__32155,map__32155__$1,map__32156,map__32156__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32157,map__32157__$1,opts__$1,id__$1,G__32150,map__32152,map__32152__$1,map__32153,map__32153__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32151,map__32154,map__32154__$1,opts,id,validate__6034__auto__,ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
}
return (new clustermap.components.tag_histogram.t32158(input_schema32049_32241,query__$1,G__32054,owner__$2,metrics__$1,G__32151__$1,input_checker32050_32242,G__32150__$1,tag_agg_data__$1,tag_histogram__$2,G__32053,G__32052,map__32152__$1,filter_spec__$1,map__32155__$1,map__32154__$1,output_schema32048_32240,map__32153__$1,tag_type__$1,output_checker32051_32243,map__32156__$1,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,map__32157__$1,ufv___32239,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32260 = output_checker32051_32243.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32260))
{var error__6036__auto___32261 = temp__4126__auto___32260;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32261,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32048_32240,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32239,output_schema32048_32240,input_schema32049_32241,input_checker32050_32242,output_checker32051_32243))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema32048_32240,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32049_32241], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m32047){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m32047);
});
__GT_tag_histogram = function(cursor__7850__auto__,m32047){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m32047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
