// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.ranges_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('clustermap.components.table_common');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('clustermap.components.table_common');
goog.require('clustermap.formats.html');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.html');
goog.require('clustermap.api');
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__33236){var map__33282 = p__33236;var map__33282__$1 = ((cljs.core.seq_QMARK_.call(null,map__33282))?cljs.core.apply.call(null,cljs.core.hash_map,map__33282):map__33282);var map__33283 = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33283__$1 = ((cljs.core.seq_QMARK_.call(null,map__33283))?cljs.core.apply.call(null,cljs.core.hash_map,map__33283):map__33283);var table_data = map__33283__$1;var query = cljs.core.get.call(null,map__33283__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__33283__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__33284 = cljs.core.get.call(null,map__33282__$1,new cljs.core.Keyword(null,"view","view",1247994814));var map__33284__$1 = ((cljs.core.seq_QMARK_.call(null,map__33284))?cljs.core.apply.call(null,cljs.core.hash_map,map__33284):map__33284);var view = map__33284__$1;var title = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__33284__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (p__33285){var map__33286 = p__33285;var map__33286__$1 = ((cljs.core.seq_QMARK_.call(null,map__33286))?cljs.core.apply.call(null,cljs.core.hash_map,map__33286):map__33286);var x = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33287(s__33288){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33288__$1 = s__33288;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33288__$1);if(temp__4126__auto__)
{var s__33288__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33288__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33288__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33290 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33289 = (0);while(true){
if((i__33289 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__33289);cljs.core.chunk_append.call(null,b__33290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__33289,yk,c__4375__auto__,size__4376__auto__,b__33290,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33299(s__33300){return (new cljs.core.LazySeq(null,((function (i__33289,yk,c__4375__auto__,size__4376__auto__,b__33290,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33300__$1 = s__33300;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33300__$1);if(temp__4126__auto____$1)
{var s__33300__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33300__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__33300__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__33302 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__33301 = (0);while(true){
if((i__33301 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__33301);cljs.core.chunk_append.call(null,b__33302,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33327 = (i__33301 + (1));
i__33301 = G__33327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33302),iter__33299.call(null,cljs.core.chunk_rest.call(null,s__33300__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33302),null);
}
} else
{var xk = cljs.core.first.call(null,s__33300__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33299.call(null,cljs.core.rest.call(null,s__33300__$2)));
}
} else
{return null;
}
break;
}
});})(i__33289,yk,c__4375__auto__,size__4376__auto__,b__33290,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__33289,yk,c__4375__auto__,size__4376__auto__,b__33290,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33328 = (i__33289 + (1));
i__33289 = G__33328;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33290),iter__33287.call(null,cljs.core.chunk_rest.call(null,s__33288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33290),null);
}
} else
{var yk = cljs.core.first.call(null,s__33288__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33303(s__33304){return (new cljs.core.LazySeq(null,((function (yk,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33304__$1 = s__33304;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33304__$1);if(temp__4126__auto____$1)
{var s__33304__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33304__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33304__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33306 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33305 = (0);while(true){
if((i__33305 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33305);cljs.core.chunk_append.call(null,b__33306,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33329 = (i__33305 + (1));
i__33305 = G__33329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33306),iter__33303.call(null,cljs.core.chunk_rest.call(null,s__33304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33306),null);
}
} else
{var xk = cljs.core.first.call(null,s__33304__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33303.call(null,cljs.core.rest.call(null,s__33304__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__33288__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__33287.call(null,cljs.core.rest.call(null,s__33288__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33307(s__33308){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33308__$1 = s__33308;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33308__$1);if(temp__4126__auto__)
{var s__33308__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33308__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33308__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33310 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33309 = (0);while(true){
if((i__33309 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33309);cljs.core.chunk_append.call(null,b__33310,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33330 = (i__33309 + (1));
i__33309 = G__33330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33310),iter__33307.call(null,cljs.core.chunk_rest.call(null,s__33308__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33310),null);
}
} else
{var xa = cljs.core.first.call(null,s__33308__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33307.call(null,cljs.core.rest.call(null,s__33308__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33311(s__33312){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33312__$1 = s__33312;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33312__$1);if(temp__4126__auto__)
{var s__33312__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33312__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33312__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33314 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33313 = (0);while(true){
if((i__33313 < size__4376__auto__))
{var vec__33317 = cljs.core._nth.call(null,c__4375__auto__,i__33313);var ya = cljs.core.nth.call(null,vec__33317,(0),null);var i = cljs.core.nth.call(null,vec__33317,(1),null);cljs.core.chunk_append.call(null,b__33314,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33331 = (i__33313 + (1));
i__33313 = G__33331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33314),iter__33311.call(null,cljs.core.chunk_rest.call(null,s__33312__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33314),null);
}
} else
{var vec__33318 = cljs.core.first.call(null,s__33312__$2);var ya = cljs.core.nth.call(null,vec__33318,(0),null);var i = cljs.core.nth.call(null,vec__33318,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33311.call(null,cljs.core.rest.call(null,s__33312__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33319(s__33320){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33320__$1 = s__33320;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33320__$1);if(temp__4126__auto__)
{var s__33320__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33320__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33320__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33322 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33321 = (0);while(true){
if((i__33321 < size__4376__auto__))
{var vec__33325 = cljs.core._nth.call(null,c__4375__auto__,i__33321);var ya = cljs.core.nth.call(null,vec__33325,(0),null);var i = cljs.core.nth.call(null,vec__33325,(1),null);cljs.core.chunk_append.call(null,b__33322,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33332 = (i__33321 + (1));
i__33321 = G__33332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33322),iter__33319.call(null,cljs.core.chunk_rest.call(null,s__33320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33322),null);
}
} else
{var vec__33326 = cljs.core.first.call(null,s__33320__$2);var ya = cljs.core.nth.call(null,vec__33326,(0),null);var i = cljs.core.nth.call(null,vec__33326,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33319.call(null,cljs.core.rest.call(null,s__33320__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33282,map__33282__$1,map__33283,map__33283__$1,table_data,query,results,map__33284,map__33284__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33454 = schema.utils.use_fn_validation;var output_schema33334_33455 = schema.core.Any;var input_schema33335_33456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33336_33457 = schema.core.checker.call(null,input_schema33335_33456);var output_checker33337_33458 = schema.core.checker.call(null,output_schema33334_33455);/**
* Inputs: [{{table-data :table-data, query :query, view :view, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function ranges_chart_component(G__33338,G__33339){var validate__6034__auto__ = ufv___33454.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33338,G__33339], null);var temp__4126__auto___33460 = input_checker33336_33457.call(null,args__6035__auto___33459);if(cljs.core.truth_(temp__4126__auto___33460))
{var error__6036__auto___33461 = temp__4126__auto___33460;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33461)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33461,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33459,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33335_33456,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33399 = G__33338;var map__33400 = G__33399;var map__33400__$1 = ((cljs.core.seq_QMARK_.call(null,map__33400))?cljs.core.apply.call(null,cljs.core.hash_map,map__33400):map__33400);var props = map__33400__$1;var map__33401 = cljs.core.get.call(null,map__33400__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33401__$1 = ((cljs.core.seq_QMARK_.call(null,map__33401))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401):map__33401);var table_state = map__33401__$1;var table_data = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var query = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var view = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"view","view",1247994814));var filter_spec = cljs.core.get.call(null,map__33400__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33339;var G__33399__$1 = G__33399;var owner__$1 = owner;while(true){
var map__33402 = G__33399__$1;var map__33402__$1 = ((cljs.core.seq_QMARK_.call(null,map__33402))?cljs.core.apply.call(null,cljs.core.hash_map,map__33402):map__33402);var props__$1 = map__33402__$1;var map__33403 = cljs.core.get.call(null,map__33402__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33403__$1 = ((cljs.core.seq_QMARK_.call(null,map__33403))?cljs.core.apply.call(null,cljs.core.hash_map,map__33403):map__33403);var table_state__$1 = map__33403__$1;var table_data__$1 = cljs.core.get.call(null,map__33403__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var query__$1 = cljs.core.get.call(null,map__33403__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var view__$1 = cljs.core.get.call(null,map__33403__$1,new cljs.core.Keyword(null,"view","view",1247994814));var filter_spec__$1 = cljs.core.get.call(null,map__33402__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33404 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33404 = (function (query,input_schema33335,owner,input_checker33336,view,map__33401,props,map__33402,map__33400,table_data,ranges_chart_component,output_schema33334,filter_spec,table_state,output_checker33337,G__33338,validate__6034__auto__,map__33403,G__33339,ufv__,G__33399,meta33405){
this.query = query;
this.input_schema33335 = input_schema33335;
this.owner = owner;
this.input_checker33336 = input_checker33336;
this.view = view;
this.map__33401 = map__33401;
this.props = props;
this.map__33402 = map__33402;
this.map__33400 = map__33400;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.output_schema33334 = output_schema33334;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.output_checker33337 = output_checker33337;
this.G__33338 = G__33338;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__33403 = map__33403;
this.G__33339 = G__33339;
this.ufv__ = ufv__;
this.G__33399 = G__33399;
this.meta33405 = meta33405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33404.cljs$lang$type = true;
clustermap.components.ranges_chart.t33404.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33404";
clustermap.components.ranges_chart.t33404.cljs$lang$ctorPrWriter = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33404");
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33404.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33404.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_,p__33407,___$1){var self__ = this;
var map__33408 = p__33407;var map__33408__$1 = ((cljs.core.seq_QMARK_.call(null,map__33408))?cljs.core.apply.call(null,cljs.core.hash_map,map__33408):map__33408);var prev_props = map__33408__$1;var map__33409 = cljs.core.get.call(null,map__33408__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33409__$1 = ((cljs.core.seq_QMARK_.call(null,map__33409))?cljs.core.apply.call(null,cljs.core.hash_map,map__33409):map__33409);var prev_view = cljs.core.get.call(null,map__33409__$1,new cljs.core.Keyword(null,"view","view",1247994814));var prev_table_data = cljs.core.get.call(null,map__33409__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data)) || (cljs.core.not_EQ_.call(null,prev_view,self__.view)))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33404.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_,p__33410,p__33411){var self__ = this;
var map__33412 = p__33410;var map__33412__$1 = ((cljs.core.seq_QMARK_.call(null,map__33412))?cljs.core.apply.call(null,cljs.core.hash_map,map__33412):map__33412);var next_props = map__33412__$1;var map__33413 = cljs.core.get.call(null,map__33412__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33413__$1 = ((cljs.core.seq_QMARK_.call(null,map__33413))?cljs.core.apply.call(null,cljs.core.hash_map,map__33413):map__33413);var next_table_state = map__33413__$1;var next_table_data = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var next_query = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_view = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"view","view",1247994814));var next_filter_spec = cljs.core.get.call(null,map__33412__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33414 = p__33411;var map__33414__$1 = ((cljs.core.seq_QMARK_.call(null,map__33414))?cljs.core.apply.call(null,cljs.core.hash_map,map__33414):map__33414);var fetch_data_fn = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33412,map__33412__$1,next_props,map__33413,map__33413__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33414,map__33414__$1,fetch_data_fn,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33412,map__33412__$1,next_props,map__33413,map__33413__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33414,map__33414__$1,fetch_data_fn,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (state_33436){var state_val_33437 = (state_33436[(1)]);if((state_val_33437 === (5)))
{var inst_33434 = (state_33436[(2)]);var state_33436__$1 = state_33436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33436__$1,inst_33434);
} else
{if((state_val_33437 === (4)))
{var state_33436__$1 = state_33436;var statearr_33438_33462 = state_33436__$1;(statearr_33438_33462[(2)] = null);
(statearr_33438_33462[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33437 === (3)))
{var inst_33421 = (state_33436[(7)]);var inst_33423 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33424 = ["RANGES-TABLE-DATA",inst_33421];var inst_33425 = (new cljs.core.PersistentVector(null,2,(5),inst_33423,inst_33424,null));var inst_33426 = cljs.core.clj__GT_js.call(null,inst_33425);var inst_33427 = console.log(inst_33426);var inst_33428 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33429 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33430 = (new cljs.core.PersistentVector(null,1,(5),inst_33428,inst_33429,null));var inst_33431 = om.core.update_BANG_.call(null,self__.table_state,inst_33430,inst_33421);var state_33436__$1 = (function (){var statearr_33439 = state_33436;(statearr_33439[(8)] = inst_33427);
return statearr_33439;
})();var statearr_33440_33463 = state_33436__$1;(statearr_33440_33463[(2)] = inst_33431);
(statearr_33440_33463[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33437 === (2)))
{var inst_33421 = (state_33436[(7)]);var inst_33421__$1 = (state_33436[(2)]);var state_33436__$1 = (function (){var statearr_33441 = state_33436;(statearr_33441[(7)] = inst_33421__$1);
return statearr_33441;
})();if(cljs.core.truth_(inst_33421__$1))
{var statearr_33442_33464 = state_33436__$1;(statearr_33442_33464[(1)] = (3));
} else
{var statearr_33443_33465 = state_33436__$1;(statearr_33443_33465[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33437 === (1)))
{var inst_33415 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_33416 = [next_filter_spec];var inst_33417 = cljs.core.PersistentHashMap.fromArrays(inst_33415,inst_33416);var inst_33418 = cljs.core.merge.call(null,next_query,inst_33417);var inst_33419 = fetch_data_fn.call(null,inst_33418);var state_33436__$1 = state_33436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33436__$1,(2),inst_33419);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33412,map__33412__$1,next_props,map__33413,map__33413__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33414,map__33414__$1,fetch_data_fn,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33412,map__33412__$1,next_props,map__33413,map__33413__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33414,map__33414__$1,fetch_data_fn,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33447 = [null,null,null,null,null,null,null,null,null];(statearr_33447[(0)] = state_machine__9111__auto__);
(statearr_33447[(1)] = (1));
return statearr_33447;
});
var state_machine__9111__auto____1 = (function (state_33436){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33436);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33448){if((e33448 instanceof Object))
{var ex__9114__auto__ = e33448;var statearr_33449_33466 = state_33436;(statearr_33449_33466[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33436);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33448;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33467 = state_33436;
state_33436 = G__33467;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33436){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33412,map__33412__$1,next_props,map__33413,map__33413__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33414,map__33414__$1,fetch_data_fn,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
})();var state__9127__auto__ = (function (){var statearr_33450 = f__9126__auto__.call(null);(statearr_33450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33412,map__33412__$1,next_props,map__33413,map__33413__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33414,map__33414__$1,fetch_data_fn,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33404.prototype.om$core$IRender$render$arity$1 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33404.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33453 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33453__$1 = (((G__33453 == null))?null:jayq.core.$.call(null,G__33453));var G__33453__$2 = (((G__33453__$1 == null))?null:G__33453__$1.highcharts());var G__33453__$3 = (((G__33453__$2 == null))?null:G__33453__$2.reflow());return G__33453__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
);
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_33406){var self__ = this;
var _33406__$1 = this;return self__.meta33405;
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.t33404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function (_33406,meta33405__$1){var self__ = this;
var _33406__$1 = this;return (new clustermap.components.ranges_chart.t33404(self__.query,self__.input_schema33335,self__.owner,self__.input_checker33336,self__.view,self__.map__33401,self__.props,self__.map__33402,self__.map__33400,self__.table_data,self__.ranges_chart_component,self__.output_schema33334,self__.filter_spec,self__.table_state,self__.output_checker33337,self__.G__33338,self__.validate__6034__auto__,self__.map__33403,self__.G__33339,self__.ufv__,self__.G__33399,meta33405__$1));
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
clustermap.components.ranges_chart.__GT_t33404 = ((function (map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458){
return (function __GT_t33404(query__$2,input_schema33335__$1,owner__$3,input_checker33336__$1,view__$2,map__33401__$2,props__$2,map__33402__$2,map__33400__$2,table_data__$2,ranges_chart_component__$1,output_schema33334__$1,filter_spec__$2,table_state__$2,output_checker33337__$1,G__33338__$1,validate__6034__auto____$1,map__33403__$2,G__33339__$1,ufv____$1,G__33399__$2,meta33405){return (new clustermap.components.ranges_chart.t33404(query__$2,input_schema33335__$1,owner__$3,input_checker33336__$1,view__$2,map__33401__$2,props__$2,map__33402__$2,map__33400__$2,table_data__$2,ranges_chart_component__$1,output_schema33334__$1,filter_spec__$2,table_state__$2,output_checker33337__$1,G__33338__$1,validate__6034__auto____$1,map__33403__$2,G__33339__$1,ufv____$1,G__33399__$2,meta33405));
});})(map__33402,map__33402__$1,props__$1,map__33403,map__33403__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33399,map__33400,map__33400__$1,props,map__33401,map__33401__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
}
return (new clustermap.components.ranges_chart.t33404(query__$1,input_schema33335_33456,owner__$2,input_checker33336_33457,view__$1,map__33401__$1,props__$1,map__33402__$1,map__33400__$1,table_data__$1,ranges_chart_component,output_schema33334_33455,filter_spec__$1,table_state__$1,output_checker33337_33458,G__33338,validate__6034__auto__,map__33403__$1,G__33339,ufv___33454,G__33399__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33468 = output_checker33337_33458.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33468))
{var error__6036__auto___33469 = temp__4126__auto___33468;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33469,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33334_33455,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33454,output_schema33334_33455,input_schema33335_33456,input_checker33336_33457,output_checker33337_33458))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33334_33455,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33335_33456], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33333){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33333);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33333){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
