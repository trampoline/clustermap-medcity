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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20765,p__20766){var map__20798 = p__20765;var map__20798__$1 = ((cljs.core.seq_QMARK_.call(null,map__20798))?cljs.core.apply.call(null,cljs.core.hash_map,map__20798):map__20798);var map__20799 = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20799__$1 = ((cljs.core.seq_QMARK_.call(null,map__20799))?cljs.core.apply.call(null,cljs.core.hash_map,map__20799):map__20799);var metrics = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20798__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20800 = p__20766;var map__20800__$1 = ((cljs.core.seq_QMARK_.call(null,map__20800))?cljs.core.apply.call(null,cljs.core.hash_map,map__20800):map__20800);var opts = map__20800__$1;var y1_title = cljs.core.get.call(null,map__20800__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20800__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (p1__20764_SHARP_){return ((1900) + p1__20764_SHARP_);
});})(map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (p1__20763_SHARP_){return p1__20763_SHARP_.getYear();
});})(map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (p1__20762_SHARP_){return (new Date(p1__20762_SHARP_));
});})(map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function iter__20801(s__20802){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (){var s__20802__$1 = s__20802;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20802__$1);if(temp__4126__auto__)
{var s__20802__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20802__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20802__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20804 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20803 = (0);while(true){
if((i__20803 < size__4376__auto__))
{var map__20815 = cljs.core._nth.call(null,c__4375__auto__,i__20803);var map__20815__$1 = ((cljs.core.seq_QMARK_.call(null,map__20815))?cljs.core.apply.call(null,cljs.core.hash_map,map__20815):map__20815);var metric_spec = map__20815__$1;var title = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20815__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20804,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20803,map__20815,map__20815__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20804,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function iter__20816(s__20817){return (new cljs.core.LazySeq(null,((function (i__20803,map__20815,map__20815__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20804,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (){var s__20817__$1 = s__20817;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20817__$1);if(temp__4126__auto____$1)
{var s__20817__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20817__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20817__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20819 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20818 = (0);while(true){
if((i__20818 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20818);cljs.core.chunk_append.call(null,b__20819,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20829 = (i__20818 + (1));
i__20818 = G__20829;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20819),iter__20816.call(null,cljs.core.chunk_rest.call(null,s__20817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20819),null);
}
} else
{var record = cljs.core.first.call(null,s__20817__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20816.call(null,cljs.core.rest.call(null,s__20817__$2)));
}
} else
{return null;
}
break;
}
});})(i__20803,map__20815,map__20815__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20804,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20803,map__20815,map__20815__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20804,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20830 = (i__20803 + (1));
i__20803 = G__20830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20804),iter__20801.call(null,cljs.core.chunk_rest.call(null,s__20802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20804),null);
}
} else
{var map__20820 = cljs.core.first.call(null,s__20802__$2);var map__20820__$1 = ((cljs.core.seq_QMARK_.call(null,map__20820))?cljs.core.apply.call(null,cljs.core.hash_map,map__20820):map__20820);var metric_spec = map__20820__$1;var title = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20820,map__20820__$1,metric_spec,title,metric,variable,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function iter__20821(s__20822){return (new cljs.core.LazySeq(null,((function (map__20820,map__20820__$1,metric_spec,title,metric,variable,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (){var s__20822__$1 = s__20822;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20822__$1);if(temp__4126__auto____$1)
{var s__20822__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20822__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20822__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20824 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20823 = (0);while(true){
if((i__20823 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20823);cljs.core.chunk_append.call(null,b__20824,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20831 = (i__20823 + (1));
i__20823 = G__20831;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20824),iter__20821.call(null,cljs.core.chunk_rest.call(null,s__20822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20824),null);
}
} else
{var record = cljs.core.first.call(null,s__20822__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20821.call(null,cljs.core.rest.call(null,s__20822__$2)));
}
} else
{return null;
}
break;
}
});})(map__20820,map__20820__$1,metric_spec,title,metric,variable,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20820,map__20820__$1,metric_spec,title,metric,variable,s__20802__$2,temp__4126__auto__,x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20801.call(null,cljs.core.rest.call(null,s__20802__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function iter__20825(s__20826){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title){
return (function (){var s__20826__$1 = s__20826;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20826__$1);if(temp__4126__auto__)
{var s__20826__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20826__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20826__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20828 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20827 = (0);while(true){
if((i__20827 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20827);cljs.core.chunk_append.call(null,b__20828,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20832 = (i__20827 + (1));
i__20827 = G__20832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20828),iter__20825.call(null,cljs.core.chunk_rest.call(null,s__20826__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20828),null);
}
} else
{var y = cljs.core.first.call(null,s__20826__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20825.call(null,cljs.core.rest.call(null,s__20826__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20798,map__20798__$1,map__20799,map__20799__$1,metrics,color,records,map__20800,map__20800__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20953 = schema.utils.use_fn_validation;var output_schema20834_20954 = schema.core.Any;var input_schema20835_20955 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20836_20956 = schema.core.checker.call(null,input_schema20835_20955);var output_checker20837_20957 = schema.core.checker.call(null,output_schema20834_20954);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function timeline_chart(G__20838,G__20839,G__20840){var validate__6034__auto__ = ufv___20953.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20958 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20838,G__20839,G__20840], null);var temp__4126__auto___20959 = input_checker20836_20956.call(null,args__6035__auto___20958);if(cljs.core.truth_(temp__4126__auto___20959))
{var error__6036__auto___20960 = temp__4126__auto___20959;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20960)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20960,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20958,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20835_20955,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20900 = G__20838;var map__20902 = G__20900;var map__20902__$1 = ((cljs.core.seq_QMARK_.call(null,map__20902))?cljs.core.apply.call(null,cljs.core.hash_map,map__20902):map__20902);var map__20903 = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20903__$1 = ((cljs.core.seq_QMARK_.call(null,map__20903))?cljs.core.apply.call(null,cljs.core.hash_map,map__20903):map__20903);var timeline_chart__$1 = map__20903__$1;var query = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20903__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20839;var G__20901 = G__20840;var map__20904 = G__20901;var map__20904__$1 = ((cljs.core.seq_QMARK_.call(null,map__20904))?cljs.core.apply.call(null,cljs.core.hash_map,map__20904):map__20904);var opts = map__20904__$1;var id = cljs.core.get.call(null,map__20904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20900__$1 = G__20900;var owner__$1 = owner;var G__20901__$1 = G__20901;while(true){
var map__20905 = G__20900__$1;var map__20905__$1 = ((cljs.core.seq_QMARK_.call(null,map__20905))?cljs.core.apply.call(null,cljs.core.hash_map,map__20905):map__20905);var map__20906 = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20906__$1 = ((cljs.core.seq_QMARK_.call(null,map__20906))?cljs.core.apply.call(null,cljs.core.hash_map,map__20906):map__20906);var timeline_chart__$2 = map__20906__$1;var query__$1 = cljs.core.get.call(null,map__20906__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20906__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20907 = G__20901__$1;var map__20907__$1 = ((cljs.core.seq_QMARK_.call(null,map__20907))?cljs.core.apply.call(null,cljs.core.hash_map,map__20907):map__20907);var opts__$1 = map__20907__$1;var id__$1 = cljs.core.get.call(null,map__20907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20908 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20908 = (function (map__20902,query,map__20907,owner,G__20901,G__20900,map__20903,output_checker20837,timeline_data,G__20839,filter_spec,G__20840,map__20906,output_schema20834,G__20838,input_schema20835,validate__6034__auto__,id,map__20904,timeline_chart,input_checker20836,opts,map__20905,ufv__,meta20909){
this.map__20902 = map__20902;
this.query = query;
this.map__20907 = map__20907;
this.owner = owner;
this.G__20901 = G__20901;
this.G__20900 = G__20900;
this.map__20903 = map__20903;
this.output_checker20837 = output_checker20837;
this.timeline_data = timeline_data;
this.G__20839 = G__20839;
this.filter_spec = filter_spec;
this.G__20840 = G__20840;
this.map__20906 = map__20906;
this.output_schema20834 = output_schema20834;
this.G__20838 = G__20838;
this.input_schema20835 = input_schema20835;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map__20904 = map__20904;
this.timeline_chart = timeline_chart;
this.input_checker20836 = input_checker20836;
this.opts = opts;
this.map__20905 = map__20905;
this.ufv__ = ufv__;
this.meta20909 = meta20909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20908.cljs$lang$type = true;
clustermap.components.timeline_chart.t20908.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20908";
clustermap.components.timeline_chart.t20908.cljs$lang$ctorPrWriter = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20908");
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20908.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20908.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_,p__20911,___$1){var self__ = this;
var map__20912 = p__20911;var map__20912__$1 = ((cljs.core.seq_QMARK_.call(null,map__20912))?cljs.core.apply.call(null,cljs.core.hash_map,map__20912):map__20912);var map__20913 = cljs.core.get.call(null,map__20912__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20913__$1 = ((cljs.core.seq_QMARK_.call(null,map__20913))?cljs.core.apply.call(null,cljs.core.hash_map,map__20913):map__20913);var prev_query = cljs.core.get.call(null,map__20913__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20913__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20912__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20908.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_,p__20914,p__20915){var self__ = this;
var map__20916 = p__20914;var map__20916__$1 = ((cljs.core.seq_QMARK_.call(null,map__20916))?cljs.core.apply.call(null,cljs.core.hash_map,map__20916):map__20916);var map__20917 = cljs.core.get.call(null,map__20916__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20917__$1 = ((cljs.core.seq_QMARK_.call(null,map__20917))?cljs.core.apply.call(null,cljs.core.hash_map,map__20917):map__20917);var next_query = cljs.core.get.call(null,map__20917__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20917__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20916__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20918 = p__20915;var map__20918__$1 = ((cljs.core.seq_QMARK_.call(null,map__20918))?cljs.core.apply.call(null,cljs.core.hash_map,map__20918):map__20918);var fetch_data_fn = cljs.core.get.call(null,map__20918__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20916,map__20916__$1,map__20917,map__20917__$1,next_query,next_timeline_data,next_filter_spec,map__20918,map__20918__$1,fetch_data_fn,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20916,map__20916__$1,map__20917,map__20917__$1,next_query,next_timeline_data,next_filter_spec,map__20918,map__20918__$1,fetch_data_fn,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (state_20937){var state_val_20938 = (state_20937[(1)]);if((state_val_20938 === (5)))
{var inst_20935 = (state_20937[(2)]);var state_20937__$1 = state_20937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20937__$1,inst_20935);
} else
{if((state_val_20938 === (4)))
{var state_20937__$1 = state_20937;var statearr_20939_20961 = state_20937__$1;(statearr_20939_20961[(2)] = null);
(statearr_20939_20961[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20938 === (3)))
{var inst_20921 = (state_20937[(7)]);var inst_20923 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20924 = ["TIMELINE DATA",inst_20921];var inst_20925 = (new cljs.core.PersistentVector(null,2,(5),inst_20923,inst_20924,null));var inst_20926 = cljs.core.clj__GT_js.call(null,inst_20925);var inst_20927 = console.log(inst_20926);var inst_20928 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20929 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20930 = (new cljs.core.PersistentVector(null,1,(5),inst_20928,inst_20929,null));var inst_20931 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20921);var inst_20932 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20930,inst_20931);var state_20937__$1 = (function (){var statearr_20940 = state_20937;(statearr_20940[(8)] = inst_20927);
return statearr_20940;
})();var statearr_20941_20962 = state_20937__$1;(statearr_20941_20962[(2)] = inst_20932);
(statearr_20941_20962[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20938 === (2)))
{var inst_20921 = (state_20937[(7)]);var inst_20921__$1 = (state_20937[(2)]);var state_20937__$1 = (function (){var statearr_20942 = state_20937;(statearr_20942[(7)] = inst_20921__$1);
return statearr_20942;
})();if(cljs.core.truth_(inst_20921__$1))
{var statearr_20943_20963 = state_20937__$1;(statearr_20943_20963[(1)] = (3));
} else
{var statearr_20944_20964 = state_20937__$1;(statearr_20944_20964[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20938 === (1)))
{var inst_20919 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20937__$1 = state_20937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20937__$1,(2),inst_20919);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20916,map__20916__$1,map__20917,map__20917__$1,next_query,next_timeline_data,next_filter_spec,map__20918,map__20918__$1,fetch_data_fn,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20916,map__20916__$1,map__20917,map__20917__$1,next_query,next_timeline_data,next_filter_spec,map__20918,map__20918__$1,fetch_data_fn,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20948 = [null,null,null,null,null,null,null,null,null];(statearr_20948[(0)] = state_machine__9111__auto__);
(statearr_20948[(1)] = (1));
return statearr_20948;
});
var state_machine__9111__auto____1 = (function (state_20937){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20937);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20949){if((e20949 instanceof Object))
{var ex__9114__auto__ = e20949;var statearr_20950_20965 = state_20937;(statearr_20950_20965[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20949;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20966 = state_20937;
state_20937 = G__20966;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20937){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20916,map__20916__$1,map__20917,map__20917__$1,next_query,next_timeline_data,next_filter_spec,map__20918,map__20918__$1,fetch_data_fn,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
})();var state__9127__auto__ = (function (){var statearr_20951 = f__9126__auto__.call(null);(statearr_20951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20916,map__20916__$1,map__20917,map__20917__$1,next_query,next_timeline_data,next_filter_spec,map__20918,map__20918__$1,fetch_data_fn,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20908.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20952 = om.core.get_node.call(null,self__.owner,"chart");var G__20952__$1 = (((G__20952 == null))?null:jayq.core.$.call(null,G__20952));var G__20952__$2 = (((G__20952__$1 == null))?null:G__20952__$1.highcharts());var G__20952__$3 = (((G__20952__$2 == null))?null:G__20952__$2.reflow());return G__20952__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
);
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20908.prototype.om$core$IRender$render$arity$1 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_20910){var self__ = this;
var _20910__$1 = this;return self__.meta20909;
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.t20908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function (_20910,meta20909__$1){var self__ = this;
var _20910__$1 = this;return (new clustermap.components.timeline_chart.t20908(self__.map__20902,self__.query,self__.map__20907,self__.owner,self__.G__20901,self__.G__20900,self__.map__20903,self__.output_checker20837,self__.timeline_data,self__.G__20839,self__.filter_spec,self__.G__20840,self__.map__20906,self__.output_schema20834,self__.G__20838,self__.input_schema20835,self__.validate__6034__auto__,self__.id,self__.map__20904,self__.timeline_chart,self__.input_checker20836,self__.opts,self__.map__20905,self__.ufv__,meta20909__$1));
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
clustermap.components.timeline_chart.__GT_t20908 = ((function (map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957){
return (function __GT_t20908(map__20902__$2,query__$2,map__20907__$2,owner__$3,G__20901__$2,G__20900__$2,map__20903__$2,output_checker20837__$1,timeline_data__$2,G__20839__$1,filter_spec__$2,G__20840__$1,map__20906__$2,output_schema20834__$1,G__20838__$1,input_schema20835__$1,validate__6034__auto____$1,id__$2,map__20904__$2,timeline_chart__$3,input_checker20836__$1,opts__$2,map__20905__$2,ufv____$1,meta20909){return (new clustermap.components.timeline_chart.t20908(map__20902__$2,query__$2,map__20907__$2,owner__$3,G__20901__$2,G__20900__$2,map__20903__$2,output_checker20837__$1,timeline_data__$2,G__20839__$1,filter_spec__$2,G__20840__$1,map__20906__$2,output_schema20834__$1,G__20838__$1,input_schema20835__$1,validate__6034__auto____$1,id__$2,map__20904__$2,timeline_chart__$3,input_checker20836__$1,opts__$2,map__20905__$2,ufv____$1,meta20909));
});})(map__20905,map__20905__$1,map__20906,map__20906__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20907,map__20907__$1,opts__$1,id__$1,G__20900,map__20902,map__20902__$1,map__20903,map__20903__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20901,map__20904,map__20904__$1,opts,id,validate__6034__auto__,ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
}
return (new clustermap.components.timeline_chart.t20908(map__20902__$1,query__$1,map__20907__$1,owner__$2,G__20901__$1,G__20900__$1,map__20903__$1,output_checker20837_20957,timeline_data__$1,G__20839,filter_spec__$1,G__20840,map__20906__$1,output_schema20834_20954,G__20838,input_schema20835_20955,validate__6034__auto__,id__$1,map__20904__$1,timeline_chart__$2,input_checker20836_20956,opts__$1,map__20905__$1,ufv___20953,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20967 = output_checker20837_20957.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20967))
{var error__6036__auto___20968 = temp__4126__auto___20967;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20968)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20968,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20834_20954,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20953,output_schema20834_20954,input_schema20835_20955,input_checker20836_20956,output_checker20837_20957))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20834_20954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20835_20955], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20833){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20833);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20833){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
