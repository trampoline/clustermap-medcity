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
clustermap.components.timeline_chart.create_chart = (function create_chart(node,p__20785,p__20786){var map__20818 = p__20785;var map__20818__$1 = ((cljs.core.seq_QMARK_.call(null,map__20818))?cljs.core.apply.call(null,cljs.core.hash_map,map__20818):map__20818);var map__20819 = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var map__20819__$1 = ((cljs.core.seq_QMARK_.call(null,map__20819))?cljs.core.apply.call(null,cljs.core.hash_map,map__20819):map__20819);var metrics = cljs.core.get.call(null,map__20819__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));var color = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"color","color",1011675173));var records = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var map__20820 = p__20786;var map__20820__$1 = ((cljs.core.seq_QMARK_.call(null,map__20820))?cljs.core.apply.call(null,cljs.core.hash_map,map__20820):map__20820);var opts = map__20820__$1;var y1_title = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"y1-title","y1-title",472065763));var y0_title = cljs.core.get.call(null,map__20820__$1,new cljs.core.Keyword(null,"y0-title","y0-title",-809800001));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMELINE: ",records], null)));
var x_labels = cljs.core.map.call(null,((function (map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (p1__20784_SHARP_){return ((1900) + p1__20784_SHARP_);
});})(map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (p1__20783_SHARP_){return p1__20783_SHARP_.getYear();
});})(map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,((function (map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (p1__20782_SHARP_){return (new Date(p1__20782_SHARP_));
});})(map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"timeline","timeline",192903161),records))));var metrics__$1 = clustermap.components.timeline_chart.make_sequential.call(null,metrics);var ys = (function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function iter__20821(s__20822){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (){var s__20822__$1 = s__20822;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20822__$1);if(temp__4126__auto__)
{var s__20822__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20822__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20822__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20824 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20823 = (0);while(true){
if((i__20823 < size__4376__auto__))
{var map__20835 = cljs.core._nth.call(null,c__4375__auto__,i__20823);var map__20835__$1 = ((cljs.core.seq_QMARK_.call(null,map__20835))?cljs.core.apply.call(null,cljs.core.hash_map,map__20835):map__20835);var metric_spec = map__20835__$1;var title = cljs.core.get.call(null,map__20835__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20835__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20835__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));cljs.core.chunk_append.call(null,b__20824,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (i__20823,map__20835,map__20835__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20824,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function iter__20836(s__20837){return (new cljs.core.LazySeq(null,((function (i__20823,map__20835,map__20835__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20824,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (){var s__20837__$1 = s__20837;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20837__$1);if(temp__4126__auto____$1)
{var s__20837__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20837__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20837__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20839 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20838 = (0);while(true){
if((i__20838 < size__4376__auto____$1))
{var record = cljs.core._nth.call(null,c__4375__auto____$1,i__20838);cljs.core.chunk_append.call(null,b__20839,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20849 = (i__20838 + (1));
i__20838 = G__20849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20839),iter__20836.call(null,cljs.core.chunk_rest.call(null,s__20837__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20839),null);
}
} else
{var record = cljs.core.first.call(null,s__20837__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20836.call(null,cljs.core.rest.call(null,s__20837__$2)));
}
} else
{return null;
}
break;
}
});})(i__20823,map__20835,map__20835__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20824,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,null,null));
});})(i__20823,map__20835,map__20835__$1,metric_spec,title,metric,variable,c__4375__auto__,size__4376__auto__,b__20824,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()));
{
var G__20850 = (i__20823 + (1));
i__20823 = G__20850;
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
{var map__20840 = cljs.core.first.call(null,s__20822__$2);var map__20840__$1 = ((cljs.core.seq_QMARK_.call(null,map__20840))?cljs.core.apply.call(null,cljs.core.hash_map,map__20840):map__20840);var metric_spec = map__20840__$1;var title = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"title","title",636505583));var metric = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814));var variable = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));return cljs.core.cons.call(null,cljs.core.assoc.call(null,metric_spec,new cljs.core.Keyword(null,"records","records",1326822832),(function (){var iter__4377__auto__ = ((function (map__20840,map__20840__$1,metric_spec,title,metric,variable,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function iter__20841(s__20842){return (new cljs.core.LazySeq(null,((function (map__20840,map__20840__$1,metric_spec,title,metric,variable,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (){var s__20842__$1 = s__20842;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20842__$1);if(temp__4126__auto____$1)
{var s__20842__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20842__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20842__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20844 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20843 = (0);while(true){
if((i__20843 < size__4376__auto__))
{var record = cljs.core._nth.call(null,c__4375__auto__,i__20843);cljs.core.chunk_append.call(null,b__20844,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)));
{
var G__20851 = (i__20843 + (1));
i__20843 = G__20851;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20844),iter__20841.call(null,cljs.core.chunk_rest.call(null,s__20842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20844),null);
}
} else
{var record = cljs.core.first.call(null,s__20842__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,variable),cljs.core.keyword.call(null,metric)], null)),iter__20841.call(null,cljs.core.rest.call(null,s__20842__$2)));
}
} else
{return null;
}
break;
}
});})(map__20840,map__20840__$1,metric_spec,title,metric,variable,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,null,null));
});})(map__20840,map__20840__$1,metric_spec,title,metric,variable,s__20822__$2,temp__4126__auto__,x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,records);
})()),iter__20821.call(null,cljs.core.rest.call(null,s__20822__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,metrics__$1);
})();console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHART",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics__$1,new cljs.core.Keyword(null,"x-labels","x-labels",-358851076),x_labels,new cljs.core.Keyword(null,"ys","ys",-34415825),ys], null)], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",178386610),x_labels,new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(270)], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),y0_title], null),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),((function (x_labels,metrics__$1,ys,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.call(null,this$.value,new cljs.core.Keyword(null,"sf","sf",-1949491738),(3),new cljs.core.Keyword(null,"curr","curr",-1092372808),"");
});})(x_labels,metrics__$1,ys,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (x_labels,metrics__$1,ys,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function iter__20845(s__20846){return (new cljs.core.LazySeq(null,((function (x_labels,metrics__$1,ys,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title){
return (function (){var s__20846__$1 = s__20846;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20846__$1);if(temp__4126__auto__)
{var s__20846__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20846__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20846__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20848 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20847 = (0);while(true){
if((i__20847 < size__4376__auto__))
{var y = cljs.core._nth.call(null,c__4375__auto__,i__20847);cljs.core.chunk_append.call(null,b__20848,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null));
{
var G__20852 = (i__20847 + (1));
i__20847 = G__20852;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20848),iter__20845.call(null,cljs.core.chunk_rest.call(null,s__20846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20848),null);
}
} else
{var y = cljs.core.first.call(null,s__20846__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(y),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(y);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "line";
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(y)], null),iter__20845.call(null,cljs.core.rest.call(null,s__20846__$2)));
}
} else
{return null;
}
break;
}
});})(x_labels,metrics__$1,ys,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
,null,null));
});})(x_labels,metrics__$1,ys,map__20818,map__20818__$1,map__20819,map__20819__$1,metrics,color,records,map__20820,map__20820__$1,opts,y1_title,y0_title))
;return iter__4377__auto__.call(null,ys);
})()], null)));
});
var ufv___20973 = schema.utils.use_fn_validation;var output_schema20854_20974 = schema.core.Any;var input_schema20855_20975 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker20856_20976 = schema.core.checker.call(null,input_schema20855_20975);var output_checker20857_20977 = schema.core.checker.call(null,output_schema20854_20974);/**
* Inputs: [{{query :query, timeline-data :timeline-data, :as timeline-chart} :timeline-chart, filter-spec :filter-spec} owner {:keys [id], :as opts}]
*/
clustermap.components.timeline_chart.timeline_chart = ((function (ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function timeline_chart(G__20858,G__20859,G__20860){var validate__6034__auto__ = ufv___20973.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20978 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20858,G__20859,G__20860], null);var temp__4126__auto___20979 = input_checker20856_20976.call(null,args__6035__auto___20978);if(cljs.core.truth_(temp__4126__auto___20979))
{var error__6036__auto___20980 = temp__4126__auto___20979;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20980)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20980,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20978,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20855_20975,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20920 = G__20858;var map__20922 = G__20920;var map__20922__$1 = ((cljs.core.seq_QMARK_.call(null,map__20922))?cljs.core.apply.call(null,cljs.core.hash_map,map__20922):map__20922);var map__20923 = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20923__$1 = ((cljs.core.seq_QMARK_.call(null,map__20923))?cljs.core.apply.call(null,cljs.core.hash_map,map__20923):map__20923);var timeline_chart__$1 = map__20923__$1;var query = cljs.core.get.call(null,map__20923__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data = cljs.core.get.call(null,map__20923__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__20859;var G__20921 = G__20860;var map__20924 = G__20921;var map__20924__$1 = ((cljs.core.seq_QMARK_.call(null,map__20924))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);var opts = map__20924__$1;var id = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var G__20920__$1 = G__20920;var owner__$1 = owner;var G__20921__$1 = G__20921;while(true){
var map__20925 = G__20920__$1;var map__20925__$1 = ((cljs.core.seq_QMARK_.call(null,map__20925))?cljs.core.apply.call(null,cljs.core.hash_map,map__20925):map__20925);var map__20926 = cljs.core.get.call(null,map__20925__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20926__$1 = ((cljs.core.seq_QMARK_.call(null,map__20926))?cljs.core.apply.call(null,cljs.core.hash_map,map__20926):map__20926);var timeline_chart__$2 = map__20926__$1;var query__$1 = cljs.core.get.call(null,map__20926__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var timeline_data__$1 = cljs.core.get.call(null,map__20926__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var filter_spec__$1 = cljs.core.get.call(null,map__20925__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;var map__20927 = G__20921__$1;var map__20927__$1 = ((cljs.core.seq_QMARK_.call(null,map__20927))?cljs.core.apply.call(null,cljs.core.hash_map,map__20927):map__20927);var opts__$1 = map__20927__$1;var id__$1 = cljs.core.get.call(null,map__20927__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof clustermap.components.timeline_chart.t20928 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t20928 = (function (query,owner,G__20859,G__20858,input_schema20855,output_schema20854,input_checker20856,G__20921,map__20926,output_checker20857,timeline_data,G__20920,filter_spec,G__20860,map__20924,map__20927,map__20922,map__20925,validate__6034__auto__,map__20923,id,timeline_chart,opts,ufv__,meta20929){
this.query = query;
this.owner = owner;
this.G__20859 = G__20859;
this.G__20858 = G__20858;
this.input_schema20855 = input_schema20855;
this.output_schema20854 = output_schema20854;
this.input_checker20856 = input_checker20856;
this.G__20921 = G__20921;
this.map__20926 = map__20926;
this.output_checker20857 = output_checker20857;
this.timeline_data = timeline_data;
this.G__20920 = G__20920;
this.filter_spec = filter_spec;
this.G__20860 = G__20860;
this.map__20924 = map__20924;
this.map__20927 = map__20927;
this.map__20922 = map__20922;
this.map__20925 = map__20925;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__20923 = map__20923;
this.id = id;
this.timeline_chart = timeline_chart;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20929 = meta20929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t20928.cljs$lang$type = true;
clustermap.components.timeline_chart.t20928.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t20928";
clustermap.components.timeline_chart.t20928.cljs$lang$ctorPrWriter = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.timeline-chart/t20928");
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.om$core$IDisplayName$ = true;
clustermap.components.timeline_chart.t20928.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_){var self__ = this;
var ___$1 = this;return "timeline-chart";
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t20928.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_,p__20931,___$1){var self__ = this;
var map__20932 = p__20931;var map__20932__$1 = ((cljs.core.seq_QMARK_.call(null,map__20932))?cljs.core.apply.call(null,cljs.core.hash_map,map__20932):map__20932);var map__20933 = cljs.core.get.call(null,map__20932__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20933__$1 = ((cljs.core.seq_QMARK_.call(null,map__20933))?cljs.core.apply.call(null,cljs.core.hash_map,map__20933):map__20933);var prev_query = cljs.core.get.call(null,map__20933__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var prev_timeline_data = cljs.core.get.call(null,map__20933__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var prev_filter_spec = cljs.core.get.call(null,map__20932__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_timeline_data,self__.timeline_data)) || (cljs.core.not_EQ_.call(null,prev_query,self__.query)))
{return clustermap.components.timeline_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"chart"),self__.timeline_chart,self__.opts);
} else
{return null;
}
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.om$core$IWillUpdate$ = true;
clustermap.components.timeline_chart.t20928.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_,p__20934,p__20935){var self__ = this;
var map__20936 = p__20934;var map__20936__$1 = ((cljs.core.seq_QMARK_.call(null,map__20936))?cljs.core.apply.call(null,cljs.core.hash_map,map__20936):map__20936);var map__20937 = cljs.core.get.call(null,map__20936__$1,new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956));var map__20937__$1 = ((cljs.core.seq_QMARK_.call(null,map__20937))?cljs.core.apply.call(null,cljs.core.hash_map,map__20937):map__20937);var next_query = cljs.core.get.call(null,map__20937__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_timeline_data = cljs.core.get.call(null,map__20937__$1,new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548));var next_filter_spec = cljs.core.get.call(null,map__20936__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__20938 = p__20935;var map__20938__$1 = ((cljs.core.seq_QMARK_.call(null,map__20938))?cljs.core.apply.call(null,cljs.core.hash_map,map__20938):map__20938);var fetch_data_fn = cljs.core.get.call(null,map__20938__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FILTER_SPEC: ",next_filter_spec], null)));
if((cljs.core.not.call(null,next_timeline_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__20936,map__20936__$1,map__20937,map__20937__$1,next_query,next_timeline_data,next_filter_spec,map__20938,map__20938__$1,fetch_data_fn,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__20936,map__20936__$1,map__20937,map__20937__$1,next_query,next_timeline_data,next_filter_spec,map__20938,map__20938__$1,fetch_data_fn,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (state_20957){var state_val_20958 = (state_20957[(1)]);if((state_val_20958 === (5)))
{var inst_20955 = (state_20957[(2)]);var state_20957__$1 = state_20957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20957__$1,inst_20955);
} else
{if((state_val_20958 === (4)))
{var state_20957__$1 = state_20957;var statearr_20959_20981 = state_20957__$1;(statearr_20959_20981[(2)] = null);
(statearr_20959_20981[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20958 === (3)))
{var inst_20941 = (state_20957[(7)]);var inst_20943 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20944 = ["TIMELINE DATA",inst_20941];var inst_20945 = (new cljs.core.PersistentVector(null,2,(5),inst_20943,inst_20944,null));var inst_20946 = cljs.core.clj__GT_js.call(null,inst_20945);var inst_20947 = console.log(inst_20946);var inst_20948 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20949 = [new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548)];var inst_20950 = (new cljs.core.PersistentVector(null,1,(5),inst_20948,inst_20949,null));var inst_20951 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_20941);var inst_20952 = om.core.update_BANG_.call(null,self__.timeline_chart,inst_20950,inst_20951);var state_20957__$1 = (function (){var statearr_20960 = state_20957;(statearr_20960[(8)] = inst_20947);
return statearr_20960;
})();var statearr_20961_20982 = state_20957__$1;(statearr_20961_20982[(2)] = inst_20952);
(statearr_20961_20982[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20958 === (2)))
{var inst_20941 = (state_20957[(7)]);var inst_20941__$1 = (state_20957[(2)]);var state_20957__$1 = (function (){var statearr_20962 = state_20957;(statearr_20962[(7)] = inst_20941__$1);
return statearr_20962;
})();if(cljs.core.truth_(inst_20941__$1))
{var statearr_20963_20983 = state_20957__$1;(statearr_20963_20983[(1)] = (3));
} else
{var statearr_20964_20984 = state_20957__$1;(statearr_20964_20984[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20958 === (1)))
{var inst_20939 = fetch_data_fn.call(null,next_query,next_filter_spec);var state_20957__$1 = state_20957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20957__$1,(2),inst_20939);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__20936,map__20936__$1,map__20937,map__20937__$1,next_query,next_timeline_data,next_filter_spec,map__20938,map__20938__$1,fetch_data_fn,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__20936,map__20936__$1,map__20937,map__20937__$1,next_query,next_timeline_data,next_filter_spec,map__20938,map__20938__$1,fetch_data_fn,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20968 = [null,null,null,null,null,null,null,null,null];(statearr_20968[(0)] = state_machine__9111__auto__);
(statearr_20968[(1)] = (1));
return statearr_20968;
});
var state_machine__9111__auto____1 = (function (state_20957){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20957);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20969){if((e20969 instanceof Object))
{var ex__9114__auto__ = e20969;var statearr_20970_20985 = state_20957;(statearr_20970_20985[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20986 = state_20957;
state_20957 = G__20986;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20957){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__20936,map__20936__$1,map__20937,map__20937__$1,next_query,next_timeline_data,next_filter_spec,map__20938,map__20938__$1,fetch_data_fn,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
})();var state__9127__auto__ = (function (){var statearr_20971 = f__9126__auto__.call(null);(statearr_20971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__20936,map__20936__$1,map__20937,map__20937__$1,next_query,next_timeline_data,next_filter_spec,map__20938,map__20938__$1,fetch_data_fn,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t20928.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.timeline_factory.call(null));
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__20972 = om.core.get_node.call(null,self__.owner,"chart");var G__20972__$1 = (((G__20972 == null))?null:jayq.core.$.call(null,G__20972));var G__20972__$2 = (((G__20972__$1 == null))?null:G__20972__$1.highcharts());var G__20972__$3 = (((G__20972__$2 == null))?null:G__20972__$2.reflow());return G__20972__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
);
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t20928.prototype.om$core$IRender$render$arity$1 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_20930){var self__ = this;
var _20930__$1 = this;return self__.meta20929;
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.t20928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function (_20930,meta20929__$1){var self__ = this;
var _20930__$1 = this;return (new clustermap.components.timeline_chart.t20928(self__.query,self__.owner,self__.G__20859,self__.G__20858,self__.input_schema20855,self__.output_schema20854,self__.input_checker20856,self__.G__20921,self__.map__20926,self__.output_checker20857,self__.timeline_data,self__.G__20920,self__.filter_spec,self__.G__20860,self__.map__20924,self__.map__20927,self__.map__20922,self__.map__20925,self__.validate__6034__auto__,self__.map__20923,self__.id,self__.timeline_chart,self__.opts,self__.ufv__,meta20929__$1));
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
clustermap.components.timeline_chart.__GT_t20928 = ((function (map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977){
return (function __GT_t20928(query__$2,owner__$3,G__20859__$1,G__20858__$1,input_schema20855__$1,output_schema20854__$1,input_checker20856__$1,G__20921__$2,map__20926__$2,output_checker20857__$1,timeline_data__$2,G__20920__$2,filter_spec__$2,G__20860__$1,map__20924__$2,map__20927__$2,map__20922__$2,map__20925__$2,validate__6034__auto____$1,map__20923__$2,id__$2,timeline_chart__$3,opts__$2,ufv____$1,meta20929){return (new clustermap.components.timeline_chart.t20928(query__$2,owner__$3,G__20859__$1,G__20858__$1,input_schema20855__$1,output_schema20854__$1,input_checker20856__$1,G__20921__$2,map__20926__$2,output_checker20857__$1,timeline_data__$2,G__20920__$2,filter_spec__$2,G__20860__$1,map__20924__$2,map__20927__$2,map__20922__$2,map__20925__$2,validate__6034__auto____$1,map__20923__$2,id__$2,timeline_chart__$3,opts__$2,ufv____$1,meta20929));
});})(map__20925,map__20925__$1,map__20926,map__20926__$1,timeline_chart__$2,query__$1,timeline_data__$1,filter_spec__$1,owner__$2,map__20927,map__20927__$1,opts__$1,id__$1,G__20920,map__20922,map__20922__$1,map__20923,map__20923__$1,timeline_chart__$1,query,timeline_data,filter_spec,owner,G__20921,map__20924,map__20924__$1,opts,id,validate__6034__auto__,ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
}
return (new clustermap.components.timeline_chart.t20928(query__$1,owner__$2,G__20859,G__20858,input_schema20855_20975,output_schema20854_20974,input_checker20856_20976,G__20921__$1,map__20926__$1,output_checker20857_20977,timeline_data__$1,G__20920__$1,filter_spec__$1,G__20860,map__20924__$1,map__20927__$1,map__20922__$1,map__20925__$1,validate__6034__auto__,map__20923__$1,id__$1,timeline_chart__$2,opts__$1,ufv___20973,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20987 = output_checker20857_20977.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20987))
{var error__6036__auto___20988 = temp__4126__auto___20987;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"timeline-chart","timeline-chart",2135471483,null),cljs.core.pr_str.call(null,error__6036__auto___20988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20988,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20854_20974,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20973,output_schema20854_20974,input_schema20855_20975,input_checker20856_20976,output_checker20857_20977))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.timeline_chart.timeline_chart),schema.core.make_fn_schema.call(null,output_schema20854_20974,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20855_20975], null)));
clustermap.components.timeline_chart.__GT_timeline_chart = (function() {
var __GT_timeline_chart = null;
var __GT_timeline_chart__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__);
});
var __GT_timeline_chart__2 = (function (cursor__7850__auto__,m20853){return om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,cursor__7850__auto__,m20853);
});
__GT_timeline_chart = function(cursor__7850__auto__,m20853){
switch(arguments.length){
case 1:
return __GT_timeline_chart__1.call(this,cursor__7850__auto__);
case 2:
return __GT_timeline_chart__2.call(this,cursor__7850__auto__,m20853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$1 = __GT_timeline_chart__1;
__GT_timeline_chart.cljs$core$IFn$_invoke$arity$2 = __GT_timeline_chart__2;
return __GT_timeline_chart;
})()
;
