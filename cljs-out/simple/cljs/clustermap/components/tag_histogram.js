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
clustermap.components.tag_histogram.create_chart = (function create_chart(node,p__31910,p__31911){var map__31954 = p__31910;var map__31954__$1 = ((cljs.core.seq_QMARK_.call(null,map__31954))?cljs.core.apply.call(null,cljs.core.hash_map,map__31954):map__31954);var tag_agg_data = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var tag_data = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var bar_color = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"bar-color","bar-color",-208849612));var point_formatter = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"point-formatter","point-formatter",-2014319394));var chart_height = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"chart-height","chart-height",1221218467));var bar_width = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"bar-width","bar-width",1233240523));var metrics = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var query = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__31955 = p__31911;var map__31955__$1 = ((cljs.core.seq_QMARK_.call(null,map__31955))?cljs.core.apply.call(null,cljs.core.hash_map,map__31955):map__31955);var opts = map__31955__$1;var y1_title = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-DATA: ",tag_data], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-HISTOGRAM-TAG-AGG-DATA: ",tag_agg_data], null)));
var tags_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_data);var tag_aggs_by_tag = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"nested_attr","nested_attr",-242099226),tag_agg_data);var records = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.map.call(null,((function (tags_by_tag,tag_aggs_by_tag,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function (rs){return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,rs);
});})(tags_by_tag,tag_aggs_by_tag,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
,cljs.core.vals.call(null,cljs.core.merge_with.call(null,cljs.core.concat,tags_by_tag,tag_aggs_by_tag))));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),records);var metrics__$1 = clustermap.components.tag_histogram.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function iter__31956(s__31957){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function (){var s__31957__$1 = s__31957;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31957__$1);if(temp__4126__auto__)
{var s__31957__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31957__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31957__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31959 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31958 = (0);while(true){
if((i__31958 < size__4376__auto__))
{var map__31970 = cljs.core._nth.call(null,c__4375__auto__,i__31958);var map__31970__$1 = ((cljs.core.seq_QMARK_.call(null,map__31970))?cljs.core.apply.call(null,cljs.core.hash_map,map__31970):map__31970);var metric_spec = map__31970__$1;var title = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31970__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));cljs.core.chunk_append.call(null,b__31959,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__31958,map__31970,map__31970__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31959,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function iter__31971(s__31972){return (new cljs.core.LazySeq(null,((function (i__31958,map__31970,map__31970__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31959,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function (){var s__31972__$1 = s__31972;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31972__$1);if(temp__4126__auto____$1)
{var s__31972__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31972__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__31972__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__31974 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__31973 = (0);while(true){
if((i__31973 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__31973);cljs.core.chunk_append.call(null,b__31974,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31996 = (i__31973 + (1));
i__31973 = G__31996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31974),iter__31971.call(null,cljs.core.chunk_rest.call(null,s__31972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31974),null);
}
} else
{var record = cljs.core.first.call(null,s__31972__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31971.call(null,cljs.core.rest.call(null,s__31972__$2)));
}
} else
{return null;
}
break;
}
});})(i__31958,map__31970,map__31970__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31959,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
,null,null));
});})(i__31958,map__31970,map__31970__$1,metric_spec,title,metric,c__4375__auto__,size__4376__auto__,b__31959,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__31997 = (i__31958 + (1));
i__31958 = G__31997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31959),iter__31956.call(null,cljs.core.chunk_rest.call(null,s__31957__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31959),null);
}
} else
{var map__31975 = cljs.core.first.call(null,s__31957__$2);var map__31975__$1 = ((cljs.core.seq_QMARK_.call(null,map__31975))?cljs.core.apply.call(null,cljs.core.hash_map,map__31975):map__31975);var metric_spec = map__31975__$1;var title = cljs.core.get.call(null,map__31975__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__31975__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__31975,map__31975__$1,metric_spec,title,metric,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function iter__31976(s__31977){return (new cljs.core.LazySeq(null,((function (map__31975,map__31975__$1,metric_spec,title,metric,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function (){var s__31977__$1 = s__31977;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31977__$1);if(temp__4126__auto____$1)
{var s__31977__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31977__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31977__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31979 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31978 = (0);while(true){
if((i__31978 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__31978);cljs.core.chunk_append.call(null,b__31979,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)));
{
var G__31998 = (i__31978 + (1));
i__31978 = G__31998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31979),iter__31976.call(null,cljs.core.chunk_rest.call(null,s__31977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31979),null);
}
} else
{var record = cljs.core.first.call(null,s__31977__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,metric)], null)),iter__31976.call(null,cljs.core.rest.call(null,s__31977__$2)));
}
} else
{return null;
}
break;
}
});})(map__31975,map__31975__$1,metric_spec,title,metric,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
,null,null));
});})(map__31975,map__31975__$1,metric_spec,title,metric,s__31957__$2,temp__4126__auto__,tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__31956.call(null,cljs.core.rest.call(null,s__31957__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAGS-BY-TAG",tags_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-AGGS-BY-TAG",tag_aggs_by_tag], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORDS",records], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["METRICS",metrics__$1], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x-labels",x_labels], null)));
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ys",ys], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),chart_height], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function iter__31980(s__31981){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function (){var s__31981__$1 = s__31981;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31981__$1);if(temp__4126__auto__)
{var s__31981__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31981__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31981__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31983 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31982 = (0);while(true){
if((i__31982 < size__4376__auto__))
{var map__31986 = cljs.core._nth.call(null,c__4375__auto__,i__31982);var map__31986__$1 = ((cljs.core.seq_QMARK_.call(null,map__31986))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);var label_formatter = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"title","title",636505583));cljs.core.chunk_append.call(null,b__31983,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null));
{
var G__31999 = (i__31982 + (1));
i__31982 = G__31999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31983),iter__31980.call(null,cljs.core.chunk_rest.call(null,s__31981__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31983),null);
}
} else
{var map__31987 = cljs.core.first.call(null,s__31981__$2);var map__31987__$1 = ((cljs.core.seq_QMARK_.call(null,map__31987))?cljs.core.apply.call(null,cljs.core.hash_map,map__31987):map__31987);var label_formatter = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955));var title = cljs.core.get.call(null,map__31987__$1,new cljs.core.Keyword(null,"title","title",636505583));return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),label_formatter], null)], null),iter__31980.call(null,cljs.core.rest.call(null,s__31981__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0),new cljs.core.Keyword(null,"pointFormatter","pointFormatter",-1879547076),point_formatter], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function iter__31988(s__31989){return (new cljs.core.LazySeq(null,((function (tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title){
return (function (){var s__31989__$1 = s__31989;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31989__$1);if(temp__4126__auto__)
{var s__31989__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31989__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31989__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31991 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31990 = (0);while(true){
if((i__31990 < size__4376__auto__))
{var vec__31994 = cljs.core._nth.call(null,c__4375__auto__,i__31990);var y = cljs.core.nth.call(null,vec__31994,(0),null);var i = cljs.core.nth.call(null,vec__31994,(1),null);cljs.core.chunk_append.call(null,b__31991,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__32000 = (i__31990 + (1));
i__31990 = G__32000;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31991),iter__31988.call(null,cljs.core.chunk_rest.call(null,s__31989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31991),null);
}
} else
{var vec__31995 = cljs.core.first.call(null,s__31989__$2);var y = cljs.core.nth.call(null,vec__31995,(0),null);var i = cljs.core.nth.call(null,vec__31995,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"color","color",1011675173),bar_color,new cljs.core.Keyword(null,"pointWidth","pointWidth",841571845),(function (){var or__3639__auto__ = bar_width;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (10);
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__31988.call(null,cljs.core.rest.call(null,s__31989__$2)));
}
} else
{return null;
}
break;
}
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
,null,null));
});})(tags_by_tag,tag_aggs_by_tag,records,x_labels,metrics__$1,ys,map__31954,map__31954__$1,tag_agg_data,tag_data,bar_color,point_formatter,chart_height,bar_width,metrics,query,map__31955,map__31955__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,ys,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null)));
});
var ufv___32193 = schema.utils.use_fn_validation;var output_schema32002_32194 = schema.core.Any;var input_schema32003_32195 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker32004_32196 = schema.core.checker.call(null,input_schema32003_32195);var output_checker32005_32197 = schema.core.checker.call(null,output_schema32002_32194);/**
* Inputs: [{{query :query, metrics :metrics, tag-type :tag-type, tag-data :tag-data, tag-agg-data :tag-agg-data, :as tag-histogram} :tag-histogram, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.tag_histogram.tag_histogram = ((function (ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function tag_histogram(G__32006,G__32007,G__32008){var validate__6034__auto__ = ufv___32193.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32006,G__32007,G__32008], null);var temp__4126__auto___32199 = input_checker32004_32196.call(null,args__6035__auto___32198);if(cljs.core.truth_(temp__4126__auto___32199))
{var error__6036__auto___32200 = temp__4126__auto___32199;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32200)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32200,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32198,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32003_32195,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__32104 = G__32006;var map__32106 = G__32104;var map__32106__$1 = ((cljs.core.seq_QMARK_.call(null,map__32106))?cljs.core.apply.call(null,cljs.core.hash_map,map__32106):map__32106);var map__32107 = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32107__$1 = ((cljs.core.seq_QMARK_.call(null,map__32107))?cljs.core.apply.call(null,cljs.core.hash_map,map__32107):map__32107);var tag_histogram__$1 = map__32107__$1;var query = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data = cljs.core.get.call(null,map__32107__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec = cljs.core.get.call(null,map__32106__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__32007;var G__32105 = G__32008;var map__32108 = G__32105;var map__32108__$1 = ((cljs.core.seq_QMARK_.call(null,map__32108))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);var opts = map__32108__$1;var id = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__32104__$1 = G__32104;var owner__$1 = owner;var G__32105__$1 = G__32105;while(true){
var map__32109 = G__32104__$1;var map__32109__$1 = ((cljs.core.seq_QMARK_.call(null,map__32109))?cljs.core.apply.call(null,cljs.core.hash_map,map__32109):map__32109);var map__32110 = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32110__$1 = ((cljs.core.seq_QMARK_.call(null,map__32110))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);var tag_histogram__$2 = map__32110__$1;var query__$1 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var metrics__$1 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var tag_type__$1 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var tag_data__$1 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var tag_agg_data__$1 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var filter_spec__$1 = cljs.core.get.call(null,map__32109__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__32111 = G__32105__$1;var map__32111__$1 = ((cljs.core.seq_QMARK_.call(null,map__32111))?cljs.core.apply.call(null,cljs.core.hash_map,map__32111):map__32111);var opts__$1 = map__32111__$1;var id__$1 = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.tag_histogram.t32112 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.tag_histogram.t32112 = (function (G__32006,query,G__32105,map__32111,owner,metrics,map__32106,output_checker32005,tag_agg_data,tag_histogram,G__32104,input_checker32004,filter_spec,map__32108,map__32109,G__32008,input_schema32003,map__32110,map__32107,tag_type,output_schema32002,G__32007,validate__6034__auto__,id,opts,tag_data,ufv__,meta32113){
this.G__32006 = G__32006;
this.query = query;
this.G__32105 = G__32105;
this.map__32111 = map__32111;
this.owner = owner;
this.metrics = metrics;
this.map__32106 = map__32106;
this.output_checker32005 = output_checker32005;
this.tag_agg_data = tag_agg_data;
this.tag_histogram = tag_histogram;
this.G__32104 = G__32104;
this.input_checker32004 = input_checker32004;
this.filter_spec = filter_spec;
this.map__32108 = map__32108;
this.map__32109 = map__32109;
this.G__32008 = G__32008;
this.input_schema32003 = input_schema32003;
this.map__32110 = map__32110;
this.map__32107 = map__32107;
this.tag_type = tag_type;
this.output_schema32002 = output_schema32002;
this.G__32007 = G__32007;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.opts = opts;
this.tag_data = tag_data;
this.ufv__ = ufv__;
this.meta32113 = meta32113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.tag_histogram.t32112.cljs$lang$type = true;
clustermap.components.tag_histogram.t32112.cljs$lang$ctorStr = "clustermap.components.tag-histogram/t32112";
clustermap.components.tag_histogram.t32112.cljs$lang$ctorPrWriter = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.tag-histogram/t32112");
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.om$core$IDisplayName$ = true;
clustermap.components.tag_histogram.t32112.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-histogram";
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.om$core$IDidUpdate$ = true;
clustermap.components.tag_histogram.t32112.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_,p__32115,___$1){var self__ = this;
var map__32116 = p__32115;var map__32116__$1 = ((cljs.core.seq_QMARK_.call(null,map__32116))?cljs.core.apply.call(null,cljs.core.hash_map,map__32116):map__32116);var map__32117 = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32117__$1 = ((cljs.core.seq_QMARK_.call(null,map__32117))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);var prev_query = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_metrics = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var prev_tag_data = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var prev_tag_agg_data = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var prev_filter_spec = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,prev_tag_data,self__.tag_data)) || (cljs.core.not_EQ_.call(null,prev_tag_agg_data,self__.tag_agg_data)))
{return clustermap.components.tag_histogram.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.tag_histogram,self__.opts);
} else
{return null;
}
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.om$core$IWillUpdate$ = true;
clustermap.components.tag_histogram.t32112.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_,p__32118,p__32119){var self__ = this;
var map__32120 = p__32118;var map__32120__$1 = ((cljs.core.seq_QMARK_.call(null,map__32120))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);var map__32121 = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269));var map__32121__$1 = ((cljs.core.seq_QMARK_.call(null,map__32121))?cljs.core.apply.call(null,cljs.core.hash_map,map__32121):map__32121);var next_query = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_metrics = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var next_tag_type = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));var next_tag_data = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));var next_tag_agg_data = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949));var next_filter_spec = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32122 = p__32119;var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var fetch_tag_data_fn = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863));var fetch_tag_agg_data_fn = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480));var ___$1 = this;if((cljs.core.not.call(null,next_tag_data)) || (cljs.core.not_EQ_.call(null,next_tag_type,self__.tag_type)))
{var c__9125__auto___32201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___32201,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___32201,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (state_32140){var state_val_32141 = (state_32140[(1)]);if((state_val_32141 === (5)))
{var inst_32138 = (state_32140[(2)]);var state_32140__$1 = state_32140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32140__$1,inst_32138);
} else
{if((state_val_32141 === (4)))
{var state_32140__$1 = state_32140;var statearr_32142_32202 = state_32140__$1;(statearr_32142_32202[(2)] = null);
(statearr_32142_32202[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32141 === (3)))
{var inst_32125 = (state_32140[(7)]);var inst_32127 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32128 = ["HISTOGRAM TAGS: ",inst_32125];var inst_32129 = (new cljs.core.PersistentVector(null,2,(5),inst_32127,inst_32128,null));var inst_32130 = cljs.core.clj__GT_js.call(null,inst_32129);var inst_32131 = console.log(inst_32130);var inst_32132 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32133 = [new cljs.core.Keyword(null,"tag-data","tag-data",1007525109)];var inst_32134 = (new cljs.core.PersistentVector(null,1,(5),inst_32132,inst_32133,null));var inst_32135 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32134,inst_32125);var state_32140__$1 = (function (){var statearr_32143 = state_32140;(statearr_32143[(8)] = inst_32131);
return statearr_32143;
})();var statearr_32144_32203 = state_32140__$1;(statearr_32144_32203[(2)] = inst_32135);
(statearr_32144_32203[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32141 === (2)))
{var inst_32125 = (state_32140[(7)]);var inst_32125__$1 = (state_32140[(2)]);var state_32140__$1 = (function (){var statearr_32145 = state_32140;(statearr_32145[(7)] = inst_32125__$1);
return statearr_32145;
})();if(cljs.core.truth_(inst_32125__$1))
{var statearr_32146_32204 = state_32140__$1;(statearr_32146_32204[(1)] = (3));
} else
{var statearr_32147_32205 = state_32140__$1;(statearr_32147_32205[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32141 === (1)))
{var inst_32123 = fetch_tag_data_fn.call(null,next_tag_type);var state_32140__$1 = state_32140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32140__$1,(2),inst_32123);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto___32201,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;return ((function (switch__9110__auto__,c__9125__auto___32201,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_32151 = [null,null,null,null,null,null,null,null,null];(statearr_32151[(0)] = state_machine__9111__auto__);
(statearr_32151[(1)] = (1));
return statearr_32151;
});
var state_machine__9111__auto____1 = (function (state_32140){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_32140);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e32152){if((e32152 instanceof Object))
{var ex__9114__auto__ = e32152;var statearr_32153_32206 = state_32140;(statearr_32153_32206[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32152;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32207 = state_32140;
state_32140 = G__32207;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_32140){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_32140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___32201,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
})();var state__9127__auto__ = (function (){var statearr_32154 = f__9126__auto__.call(null);(statearr_32154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___32201);
return statearr_32154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___32201,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
);
} else
{}
if((cljs.core.not.call(null,next_tag_agg_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_metrics,self__.metrics)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (state_32177){var state_val_32178 = (state_32177[(1)]);if((state_val_32178 === (5)))
{var inst_32175 = (state_32177[(2)]);var state_32177__$1 = state_32177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32177__$1,inst_32175);
} else
{if((state_val_32178 === (4)))
{var state_32177__$1 = state_32177;var statearr_32179_32208 = state_32177__$1;(statearr_32179_32208[(2)] = null);
(statearr_32179_32208[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32178 === (3)))
{var inst_32161 = (state_32177[(7)]);var inst_32163 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32164 = ["HISTOGRAM TAG AGGS: ",inst_32161];var inst_32165 = (new cljs.core.PersistentVector(null,2,(5),inst_32163,inst_32164,null));var inst_32166 = cljs.core.clj__GT_js.call(null,inst_32165);var inst_32167 = console.log(inst_32166);var inst_32168 = cljs.core.PersistentVector.EMPTY_NODE;var inst_32169 = [new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949)];var inst_32170 = (new cljs.core.PersistentVector(null,1,(5),inst_32168,inst_32169,null));var inst_32171 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_32161);var inst_32172 = om.core.update_BANG_.call(null,self__.tag_histogram,inst_32170,inst_32171);var state_32177__$1 = (function (){var statearr_32180 = state_32177;(statearr_32180[(8)] = inst_32167);
return statearr_32180;
})();var statearr_32181_32209 = state_32177__$1;(statearr_32181_32209[(2)] = inst_32172);
(statearr_32181_32209[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32178 === (2)))
{var inst_32161 = (state_32177[(7)]);var inst_32161__$1 = (state_32177[(2)]);var state_32177__$1 = (function (){var statearr_32182 = state_32177;(statearr_32182[(7)] = inst_32161__$1);
return statearr_32182;
})();if(cljs.core.truth_(inst_32161__$1))
{var statearr_32183_32210 = state_32177__$1;(statearr_32183_32210[(1)] = (3));
} else
{var statearr_32184_32211 = state_32177__$1;(statearr_32184_32211[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32178 === (1)))
{var inst_32155 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_32156 = [next_filter_spec];var inst_32157 = cljs.core.PersistentHashMap.fromArrays(inst_32155,inst_32156);var inst_32158 = cljs.core.merge.call(null,next_query,inst_32157);var inst_32159 = fetch_tag_agg_data_fn.call(null,inst_32158);var state_32177__$1 = state_32177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32177__$1,(2),inst_32159);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
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
{var ex__9114__auto__ = e32189;var statearr_32190_32212 = state_32177;(statearr_32190_32212[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32189;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32213 = state_32177;
state_32177 = G__32213;
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
;})(switch__9110__auto__,c__9125__auto__,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
})();var state__9127__auto__ = (function (){var statearr_32191 = f__9126__auto__.call(null);(statearr_32191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_32191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__32120,map__32120__$1,map__32121,map__32121__$1,next_query,next_metrics,next_tag_type,next_tag_data,next_tag_agg_data,next_filter_spec,map__32122,map__32122__$1,fetch_tag_data_fn,fetch_tag_agg_data_fn,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.om$core$IDidMount$ = true;
clustermap.components.tag_histogram.t32112.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-data-fn","fetch-tag-data-fn",-1076517863),clustermap.api.tags_of_type_factory.call(null));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-tag-agg-data-fn","fetch-tag-agg-data-fn",-1818843480),clustermap.api.nested_aggregation_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__32192 = om.core.get_node.call(null,self__.owner,"chart");var G__32192__$1 = (((G__32192 == null))?null:jayq.core.$.call(null,G__32192));var G__32192__$2 = (((G__32192__$1 == null))?null:G__32192__$1.highcharts());var G__32192__$3 = (((G__32192__$2 == null))?null:G__32192__$2.reflow());return G__32192__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
);
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.om$core$IRender$ = true;
clustermap.components.tag_histogram.t32112.prototype.om$core$IRender$render$arity$1 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "tag-histogram", "id": self__.id, "ref": "chart"});
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_32114){var self__ = this;
var _32114__$1 = this;return self__.meta32113;
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.t32112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function (_32114,meta32113__$1){var self__ = this;
var _32114__$1 = this;return (new clustermap.components.tag_histogram.t32112(self__.G__32006,self__.query,self__.G__32105,self__.map__32111,self__.owner,self__.metrics,self__.map__32106,self__.output_checker32005,self__.tag_agg_data,self__.tag_histogram,self__.G__32104,self__.input_checker32004,self__.filter_spec,self__.map__32108,self__.map__32109,self__.G__32008,self__.input_schema32003,self__.map__32110,self__.map__32107,self__.tag_type,self__.output_schema32002,self__.G__32007,self__.validate__6034__auto__,self__.id,self__.opts,self__.tag_data,self__.ufv__,meta32113__$1));
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
clustermap.components.tag_histogram.__GT_t32112 = ((function (map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197){
return (function __GT_t32112(G__32006__$1,query__$2,G__32105__$2,map__32111__$2,owner__$3,metrics__$2,map__32106__$2,output_checker32005__$1,tag_agg_data__$2,tag_histogram__$3,G__32104__$2,input_checker32004__$1,filter_spec__$2,map__32108__$2,map__32109__$2,G__32008__$1,input_schema32003__$1,map__32110__$2,map__32107__$2,tag_type__$2,output_schema32002__$1,G__32007__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,meta32113){return (new clustermap.components.tag_histogram.t32112(G__32006__$1,query__$2,G__32105__$2,map__32111__$2,owner__$3,metrics__$2,map__32106__$2,output_checker32005__$1,tag_agg_data__$2,tag_histogram__$3,G__32104__$2,input_checker32004__$1,filter_spec__$2,map__32108__$2,map__32109__$2,G__32008__$1,input_schema32003__$1,map__32110__$2,map__32107__$2,tag_type__$2,output_schema32002__$1,G__32007__$1,validate__6034__auto____$1,id__$2,opts__$2,tag_data__$2,ufv____$1,meta32113));
});})(map__32109,map__32109__$1,map__32110,map__32110__$1,tag_histogram__$2,query__$1,metrics__$1,tag_type__$1,tag_data__$1,tag_agg_data__$1,filter_spec__$1,owner__$2,map__32111,map__32111__$1,opts__$1,id__$1,G__32104,map__32106,map__32106__$1,map__32107,map__32107__$1,tag_histogram__$1,query,metrics,tag_type,tag_data,tag_agg_data,filter_spec,owner,G__32105,map__32108,map__32108__$1,opts,id,validate__6034__auto__,ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
}
return (new clustermap.components.tag_histogram.t32112(G__32006,query__$1,G__32105__$1,map__32111__$1,owner__$2,metrics__$1,map__32106__$1,output_checker32005_32197,tag_agg_data__$1,tag_histogram__$2,G__32104__$1,input_checker32004_32196,filter_spec__$1,map__32108__$1,map__32109__$1,G__32008,input_schema32003_32195,map__32110__$1,map__32107__$1,tag_type__$1,output_schema32002_32194,G__32007,validate__6034__auto__,id__$1,opts__$1,tag_data__$1,ufv___32193,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32214 = output_checker32005_32197.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32214))
{var error__6036__auto___32215 = temp__4126__auto___32214;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"tag-histogram","tag-histogram",1678434796,null),cljs.core.pr_str.call(null,error__6036__auto___32215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32215,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32002_32194,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32193,output_schema32002_32194,input_schema32003_32195,input_checker32004_32196,output_checker32005_32197))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.tag_histogram.tag_histogram),schema.core.make_fn_schema.call(null,output_schema32002_32194,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32003_32195], null)));
clustermap.components.tag_histogram.__GT_tag_histogram = (function() {
var __GT_tag_histogram = null;
var __GT_tag_histogram__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__);
});
var __GT_tag_histogram__2 = (function (cursor__7850__auto__,m32001){return om.core.build.call(null,clustermap.components.tag_histogram.tag_histogram,cursor__7850__auto__,m32001);
});
__GT_tag_histogram = function(cursor__7850__auto__,m32001){
switch(arguments.length){
case 1:
return __GT_tag_histogram__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_histogram__2.call(this,cursor__7850__auto__,m32001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$1 = __GT_tag_histogram__1;
__GT_tag_histogram.cljs$core$IFn$_invoke$arity$2 = __GT_tag_histogram__2;
return __GT_tag_histogram;
})()
;
