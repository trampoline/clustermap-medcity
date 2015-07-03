// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.timeline_chart');
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
clustermap.components.timeline_chart.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20768,p__20769){var map__20801 = p__20768;var map__20801__$1 = ((cljs.core.seq_QMARK_.call(null,map__20801))?cljs.core.apply.call(null,cljs.core.hash_map,map__20801):map__20801);var map__20802 = cljs.core.get.call(null,map__20801__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20802__$1 = ((cljs.core.seq_QMARK_.call(null,map__20802))?cljs.core.apply.call(null,cljs.core.hash_map,map__20802):map__20802);var metrics = cljs.core.get.call(null,map__20802__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20801__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20801__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20803 = p__20769;var map__20803__$1 = ((cljs.core.seq_QMARK_.call(null,map__20803))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);var opts = map__20803__$1;var y1_title = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (p1__20767_SHARP_){return ((1900) + p1__20767_SHARP_);
});})(map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (p1__20766_SHARP_){return p1__20766_SHARP_.getYear();
});})(map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (p1__20765_SHARP_){return (new Date(p1__20765_SHARP_));
});})(map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function iter__20804(s__20805){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (){var s__20805__$1 = s__20805;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20805__$1);if(temp__4126__auto__)
{var s__20805__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20805__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20805__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20807 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20806 = (0);while(true){
if((i__20806 < size__4376__auto__))
{var map__20818 = cljs.core._nth.call(null,c__4375__auto__,i__20806);var map__20818__$1 = ((cljs.core.seq_QMARK_.call(null,map__20818))?cljs.core.apply.call(null,cljs.core.hash_map,map__20818):map__20818);var metric_spec = map__20818__$1;var title = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20807,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20806,map__20818,map__20818__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20807,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function iter__20819(s__20820){return (new cljs.core.LazySeq(null,((function (i__20806,map__20818,map__20818__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20807,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (){var s__20820__$1 = s__20820;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20820__$1);if(temp__4126__auto____$1)
{var s__20820__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20820__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20820__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20822 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20821 = (0);while(true){
if((i__20821 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20821);cljs.core.chunk_append.call(null,b__20822,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20832 = (i__20821 + (1));
i__20821 = G__20832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20822),iter__20819.call(null,cljs.core.chunk_rest.call(null,s__20820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20822),null);
}
} else
{var record = cljs.core.first.call(null,s__20820__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20819.call(null,cljs.core.rest.call(null,s__20820__$2)));
}
} else
{return null;
}
break;
}
});})(i__20806,map__20818,map__20818__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20807,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20806,map__20818,map__20818__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20807,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20833 = (i__20806 + (1));
i__20806 = G__20833;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20807),iter__20804.call(null,cljs.core.chunk_rest.call(null,s__20805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20807),null);
}
} else
{var map__20823 = cljs.core.first.call(null,s__20805__$2);var map__20823__$1 = ((cljs.core.seq_QMARK_.call(null,map__20823))?cljs.core.apply.call(null,cljs.core.hash_map,map__20823):map__20823);var metric_spec = map__20823__$1;var title = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20823,map__20823__$1,metric_spec,title,metric,variable,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function iter__20824(s__20825){return (new cljs.core.LazySeq(null,((function (map__20823,map__20823__$1,metric_spec,title,metric,variable,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (){var s__20825__$1 = s__20825;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20825__$1);if(temp__4126__auto____$1)
{var s__20825__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20825__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20825__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20827 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20826 = (0);while(true){
if((i__20826 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20826);cljs.core.chunk_append.call(null,b__20827,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20834 = (i__20826 + (1));
i__20826 = G__20834;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20827),iter__20824.call(null,cljs.core.chunk_rest.call(null,s__20825__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20827),null);
}
} else
{var record = cljs.core.first.call(null,s__20825__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20824.call(null,cljs.core.rest.call(null,s__20825__$2)));
}
} else
{return null;
}
break;
}
});})(map__20823,map__20823__$1,metric_spec,title,metric,variable,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20823,map__20823__$1,metric_spec,title,metric,variable,s__20805__$2,temp__4126__auto__,x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20804.call(null,cljs.core.rest.call(null,s__20805__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function iter__20828(s__20829){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title){
return (function (){var s__20829__$1 = s__20829;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20829__$1);if(temp__4126__auto__)
{var s__20829__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20829__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20829__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20831 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20830 = (0);while(true){
if((i__20830 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20830);cljs.core.chunk_append.call(null,b__20831,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20835 = (i__20830 + (1));
i__20830 = G__20835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20831),iter__20828.call(null,cljs.core.chunk_rest.call(null,s__20829__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20831),null);
}
} else
{var y = cljs.core.first.call(null,s__20829__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20828.call(null,cljs.core.rest.call(null,s__20829__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20801,map__20801__$1,map__20802,map__20802__$1,metrics,color,records,map__20803,map__20803__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20956 = schema.utils.use_fn_validation;var output_schema20837_20957 = schema.core.Any;var input_schema20838_20958 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20839_20959 = schema.core.checker.call(null,input_schema20838_20958);var output_checker20840_20960 = schema.core.checker.call(null,output_schema20837_20957);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function timeline_chart(G__20841,G__20842,G__20843){var validate__6034__auto__ = ufv___20956.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20841,G__20842,G__20843], null);var temp__4126__auto___20962 = input_checker20839_20959.call(null,args__6035__auto___20961);if(cljs.core.truth_(temp__4126__auto___20962))
{var error__6036__auto___20963 = temp__4126__auto___20962;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20963)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20963,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20961,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20838_20958,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20903 = G__20841;var map__20905 = G__20903;var map__20905__$1 = ((cljs.core.seq_QMARK_.call(null,map__20905))?cljs.core.apply.call(null,cljs.core.hash_map,map__20905):map__20905);var map__20906 = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20906__$1 = ((cljs.core.seq_QMARK_.call(null,map__20906))?cljs.core.apply.call(null,cljs.core.hash_map,map__20906):map__20906);var timeline_chart__$1 = map__20906__$1;var query = cljs.core.get.call(null,map__20906__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20906__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20842;var G__20904 = G__20843;var map__20907 = G__20904;var map__20907__$1 = ((cljs.core.seq_QMARK_.call(null,map__20907))?cljs.core.apply.call(null,cljs.core.hash_map,map__20907):map__20907);var opts = map__20907__$1;var id = cljs.core.get.call(null,map__20907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20903__$1 = G__20903;var owner__$1 = owner;var G__20904__$1 = G__20904;while(true){
var map__20908 = G__20903__$1;var map__20908__$1 = ((cljs.core.seq_QMARK_.call(null,map__20908))?cljs.core.apply.call(null,cljs.core.hash_map,map__20908):map__20908);var map__20909 = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20909__$1 = ((cljs.core.seq_QMARK_.call(null,map__20909))?cljs.core.apply.call(null,cljs.core.hash_map,map__20909):map__20909);var timeline_chart__$2 = map__20909__$1;var query__$1 = cljs.core.get.call(null,map__20909__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20909__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20908__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20910 = G__20904__$1;var map__20910__$1 = ((cljs.core.seq_QMARK_.call(null,map__20910))?cljs.core.apply.call(null,cljs.core.hash_map,map__20910):map__20910);var opts__$1 = map__20910__$1;var id__$1 = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20911 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20911 = (function (query,map__20910,map__20907,owner,input_schema20838,G__20841,G__20903,G__20842,timeline_data,filter_spec,output_schema20837,output_checker20840,map__20906,G__20904,input_checker20839,map__20909,validate__6034__auto__,id,timeline_chart,G__20843,opts,map__20908,map__20905,ufv__,meta20912){
this.query = query;
this.map__20910 = map__20910;
this.map__20907 = map__20907;
this.owner = owner;
this.input_schema20838 = input_schema20838;
this.G__20841 = G__20841;
this.G__20903 = G__20903;
this.G__20842 = G__20842;
this.timeline_data = timeline_data;
this.filter_spec = filter_spec;
this.output_schema20837 = output_schema20837;
this.output_checker20840 = output_checker20840;
this.map__20906 = map__20906;
this.G__20904 = G__20904;
this.input_checker20839 = input_checker20839;
this.map__20909 = map__20909;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.timeline_chart = timeline_chart;
this.G__20843 = G__20843;
this.opts = opts;
this.map__20908 = map__20908;
this.map__20905 = map__20905;
this.ufv__ = ufv__;
this.meta20912 = meta20912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20911.cljs$lang$type = true;
clustermap.components.timeline_chart.t20911.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20911";
clustermap.components.timeline_chart.t20911.cljs$lang$ctorPrWriter = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20911");
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20911.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20911.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_,p__20914,___$1){var self__ = this;
var map__20915 = p__20914;var map__20915__$1 = ((cljs.core.seq_QMARK_.call(null,map__20915))?cljs.core.apply.call(null,cljs.core.hash_map,map__20915):map__20915);var map__20916 = cljs.core.get.call(null,map__20915__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20916__$1 = ((cljs.core.seq_QMARK_.call(null,map__20916))?cljs.core.apply.call(null,cljs.core.hash_map,map__20916):map__20916);var prev_query = cljs.core.get.call(null,map__20916__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20916__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20915__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20911.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_,p__20917,p__20918){var self__ = this;
var map__20919 = p__20917;var map__20919__$1 = ((cljs.core.seq_QMARK_.call(null,map__20919))?cljs.core.apply.call(null,cljs.core.hash_map,map__20919):map__20919);var map__20920 = cljs.core.get.call(null,map__20919__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20920__$1 = ((cljs.core.seq_QMARK_.call(null,map__20920))?cljs.core.apply.call(null,cljs.core.hash_map,map__20920):map__20920);var next_query = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20919__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20921 = p__20918;var map__20921__$1 = ((cljs.core.seq_QMARK_.call(null,map__20921))?cljs.core.apply.call(null,cljs.core.hash_map,map__20921):map__20921);var fetch_data_fn = cljs.core.get.call(null,map__20921__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20919,map__20919__$1,map__20920,map__20920__$1,next_query,next_timeline_data,next_filter_spec,map__20921,map__20921__$1,fetch_data_fn,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20919,map__20919__$1,map__20920,map__20920__$1,next_query,next_timeline_data,next_filter_spec,map__20921,map__20921__$1,fetch_data_fn,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (state_20940){var state_val_20941 = (state_20940[(1)]);if((state_val_20941 === (5)))
{var inst_20938 = (state_20940[(2)]);var state_20940__$1 = state_20940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20940__$1,inst_20938);
} else
{if((state_val_20941 === (4)))
{var state_20940__$1 = state_20940;var statearr_20942_20964 = state_20940__$1;(statearr_20942_20964[(2)] = null);
(statearr_20942_20964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20941 === (3)))
{var inst_20924 = (state_20940[(7)]);var inst_20926 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20927 = ["TIMELINE DATA",inst_20924];var inst_20928 = (new cljs.core.PersistentVector(null,2,(5),inst_20926,inst_20927,null));var inst_20929 = cljs.core.clj__GT_js.call(null,inst_20928);var inst_20930 = console.log(inst_20929);var inst_20931 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20932 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20933 = (new cljs.core.PersistentVector(null,1,(5),inst_20931,inst_20932,null));var inst_20934 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20924);var inst_20935 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20933,inst_20934);var state_20940__$1 = (function (){var statearr_20943 = state_20940;(statearr_20943[(8)] = inst_20930);
return statearr_20943;
})();var statearr_20944_20965 = state_20940__$1;(statearr_20944_20965[(2)] = inst_20935);
(statearr_20944_20965[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20941 === (2)))
{var inst_20924 = (state_20940[(7)]);var inst_20924__$1 = (state_20940[(2)]);var state_20940__$1 = (function (){var statearr_20945 = state_20940;(statearr_20945[(7)] = inst_20924__$1);
return statearr_20945;
})();if(cljs.core.truth_(inst_20924__$1))
{var statearr_20946_20966 = state_20940__$1;(statearr_20946_20966[(1)] = (3));
} else
{var statearr_20947_20967 = state_20940__$1;(statearr_20947_20967[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20941 === (1)))
{var inst_20922 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20940__$1 = state_20940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20940__$1,(2),inst_20922);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20919,map__20919__$1,map__20920,map__20920__$1,next_query,next_timeline_data,next_filter_spec,map__20921,map__20921__$1,fetch_data_fn,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20919,map__20919__$1,map__20920,map__20920__$1,next_query,next_timeline_data,next_filter_spec,map__20921,map__20921__$1,fetch_data_fn,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20951 = [null,null,null,null,null,null,null,null,null];(statearr_20951[(0)] = state_machine__9111__auto__);
(statearr_20951[(1)] = (1));
return statearr_20951;
});
var state_machine__9111__auto____1 = (function (state_20940){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20940);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20952){if((e20952 instanceof Object))
{var ex__9114__auto__ = e20952;var statearr_20953_20968 = state_20940;(statearr_20953_20968[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20940);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20952;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20969 = state_20940;
state_20940 = G__20969;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20940){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20919,map__20919__$1,map__20920,map__20920__$1,next_query,next_timeline_data,next_filter_spec,map__20921,map__20921__$1,fetch_data_fn,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
})();var state__9127__auto__ = (function (){var statearr_20954 = f__9126__auto__.call(null);(statearr_20954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20919,map__20919__$1,map__20920,map__20920__$1,next_query,next_timeline_data,next_filter_spec,map__20921,map__20921__$1,fetch_data_fn,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20911.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20955 = om.core.get_node.call(null,self__.owner,"chart");var G__20955__$1 = (((G__20955 == null))?null:jayq.core.$.call(null,G__20955));var G__20955__$2 = (((G__20955__$1 == null))?null:G__20955__$1.highcharts());var G__20955__$3 = (((G__20955__$2 == null))?null:G__20955__$2.reflow());return G__20955__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
);
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20911.prototype.om$core$IRender$render$arity$1 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_20913){var self__ = this;
var _20913__$1 = this;return self__.meta20912;
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.t20911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function (_20913,meta20912__$1){var self__ = this;
var _20913__$1 = this;return (new clustermap.components.timeline_chart.t20911(self__.query,self__.map__20910,self__.map__20907,self__.owner,self__.input_schema20838,self__.G__20841,self__.G__20903,self__.G__20842,self__.timeline_data,self__.filter_spec,self__.output_schema20837,self__.output_checker20840,self__.map__20906,self__.G__20904,self__.input_checker20839,self__.map__20909,self__.validate__6034__auto__,self__.id,self__.timeline_chart,self__.G__20843,self__.opts,self__.map__20908,self__.map__20905,self__.ufv__,meta20912__$1));
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
clustermap.components.timeline_chart.__GT_t20911 = ((function (map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960){
return (function __GT_t20911(query__$2,map__20910__$2,map__20907__$2,owner__$3,input_schema20838__$1,G__20841__$1,G__20903__$2,G__20842__$1,timeline_data__$2,filter_spec__$2,output_schema20837__$1,output_checker20840__$1,map__20906__$2,G__20904__$2,input_checker20839__$1,map__20909__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__20843__$1,opts__$2,map__20908__$2,map__20905__$2,ufv____$1,meta20912){return (new clustermap.components.timeline_chart.t20911(query__$2,map__20910__$2,map__20907__$2,owner__$3,input_schema20838__$1,G__20841__$1,G__20903__$2,G__20842__$1,timeline_data__$2,filter_spec__$2,output_schema20837__$1,output_checker20840__$1,map__20906__$2,G__20904__$2,input_checker20839__$1,map__20909__$2,validate__6034__auto____$1,id__$2,timeline_chart__$3,G__20843__$1,opts__$2,map__20908__$2,map__20905__$2,ufv____$1,meta20912));
});})(map__20908,map__20908__$1,map__20909,map__20909__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20910,map__20910__$1,opts__$1,id__$1,G__20903,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20904,map__20907,map__20907__$1,opts,id,validate__6034__auto__,ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
}
return (new clustermap.components.timeline_chart.t20911(query__$1,map__20910__$1,map__20907__$1,owner__$2,input_schema20838_20958,G__20841,G__20903__$1,G__20842,timeline_data__$1,filter_spec__$1,output_schema20837_20957,output_checker20840_20960,map__20906__$1,G__20904__$1,input_checker20839_20959,map__20909__$1,validate__6034__auto__,id__$1,timeline_chart__$2,G__20843,opts__$1,map__20908__$1,map__20905__$1,ufv___20956,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20970 = output_checker20840_20960.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20970))
{var error__6036__auto___20971 = temp__4126__auto___20970;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20971,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20837_20957,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20956,output_schema20837_20957,input_schema20838_20958,input_checker20839_20959,output_checker20840_20960))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20837_20957,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20838_20958], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20836){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20836);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20836){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
