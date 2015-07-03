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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__33190){var map__33236 = p__33190;var map__33236__$1 = ((cljs.core.seq_QMARK_.call(null,map__33236))?cljs.core.apply.call(null,cljs.core.hash_map,map__33236):map__33236);var map__33237 = cljs.core.get.call(null,map__33236__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33237__$1 = ((cljs.core.seq_QMARK_.call(null,map__33237))?cljs.core.apply.call(null,cljs.core.hash_map,map__33237):map__33237);var table_data = map__33237__$1;var query = cljs.core.get.call(null,map__33237__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__33237__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__33238 = cljs.core.get.call(null,map__33236__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33238__$1 = ((cljs.core.seq_QMARK_.call(null,map__33238))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238):map__33238);var controls = map__33238__$1;var title = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__33239){var map__33240 = p__33239;var map__33240__$1 = ((cljs.core.seq_QMARK_.call(null,map__33240))?cljs.core.apply.call(null,cljs.core.hash_map,map__33240):map__33240);var x = cljs.core.get.call(null,map__33240__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__33240__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__33240__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33241(s__33242){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33242__$1 = s__33242;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33242__$1);if(temp__4126__auto__)
{var s__33242__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33242__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33242__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33244 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33243 = (0);while(true){
if((i__33243 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__33243);cljs.core.chunk_append.call(null,b__33244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__33243,yk,c__4375__auto__,size__4376__auto__,b__33244,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33253(s__33254){return (new cljs.core.LazySeq(null,((function (i__33243,yk,c__4375__auto__,size__4376__auto__,b__33244,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33254__$1 = s__33254;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33254__$1);if(temp__4126__auto____$1)
{var s__33254__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33254__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__33254__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__33256 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__33255 = (0);while(true){
if((i__33255 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__33255);cljs.core.chunk_append.call(null,b__33256,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33281 = (i__33255 + (1));
i__33255 = G__33281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33256),iter__33253.call(null,cljs.core.chunk_rest.call(null,s__33254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33256),null);
}
} else
{var xk = cljs.core.first.call(null,s__33254__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33253.call(null,cljs.core.rest.call(null,s__33254__$2)));
}
} else
{return null;
}
break;
}
});})(i__33243,yk,c__4375__auto__,size__4376__auto__,b__33244,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__33243,yk,c__4375__auto__,size__4376__auto__,b__33244,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33282 = (i__33243 + (1));
i__33243 = G__33282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33244),iter__33241.call(null,cljs.core.chunk_rest.call(null,s__33242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33244),null);
}
} else
{var yk = cljs.core.first.call(null,s__33242__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33257(s__33258){return (new cljs.core.LazySeq(null,((function (yk,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33258__$1 = s__33258;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33258__$1);if(temp__4126__auto____$1)
{var s__33258__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33258__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33258__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33260 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33259 = (0);while(true){
if((i__33259 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33259);cljs.core.chunk_append.call(null,b__33260,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33283 = (i__33259 + (1));
i__33259 = G__33283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33260),iter__33257.call(null,cljs.core.chunk_rest.call(null,s__33258__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33260),null);
}
} else
{var xk = cljs.core.first.call(null,s__33258__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33257.call(null,cljs.core.rest.call(null,s__33258__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__33242__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__33241.call(null,cljs.core.rest.call(null,s__33242__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33261(s__33262){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33262__$1 = s__33262;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33262__$1);if(temp__4126__auto__)
{var s__33262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33262__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33262__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33264 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33263 = (0);while(true){
if((i__33263 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33263);cljs.core.chunk_append.call(null,b__33264,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33284 = (i__33263 + (1));
i__33263 = G__33284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33264),iter__33261.call(null,cljs.core.chunk_rest.call(null,s__33262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33264),null);
}
} else
{var xa = cljs.core.first.call(null,s__33262__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33261.call(null,cljs.core.rest.call(null,s__33262__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33265(s__33266){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33266__$1 = s__33266;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33266__$1);if(temp__4126__auto__)
{var s__33266__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33266__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33266__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33268 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33267 = (0);while(true){
if((i__33267 < size__4376__auto__))
{var vec__33271 = cljs.core._nth.call(null,c__4375__auto__,i__33267);var ya = cljs.core.nth.call(null,vec__33271,(0),null);var i = cljs.core.nth.call(null,vec__33271,(1),null);cljs.core.chunk_append.call(null,b__33268,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33285 = (i__33267 + (1));
i__33267 = G__33285;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33268),iter__33265.call(null,cljs.core.chunk_rest.call(null,s__33266__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33268),null);
}
} else
{var vec__33272 = cljs.core.first.call(null,s__33266__$2);var ya = cljs.core.nth.call(null,vec__33272,(0),null);var i = cljs.core.nth.call(null,vec__33272,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33265.call(null,cljs.core.rest.call(null,s__33266__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33273(s__33274){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33274__$1 = s__33274;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33274__$1);if(temp__4126__auto__)
{var s__33274__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33274__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33274__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33276 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33275 = (0);while(true){
if((i__33275 < size__4376__auto__))
{var vec__33279 = cljs.core._nth.call(null,c__4375__auto__,i__33275);var ya = cljs.core.nth.call(null,vec__33279,(0),null);var i = cljs.core.nth.call(null,vec__33279,(1),null);cljs.core.chunk_append.call(null,b__33276,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33286 = (i__33275 + (1));
i__33275 = G__33286;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33276),iter__33273.call(null,cljs.core.chunk_rest.call(null,s__33274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33276),null);
}
} else
{var vec__33280 = cljs.core.first.call(null,s__33274__$2);var ya = cljs.core.nth.call(null,vec__33280,(0),null);var i = cljs.core.nth.call(null,vec__33280,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33273.call(null,cljs.core.rest.call(null,s__33274__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33236,map__33236__$1,map__33237,map__33237__$1,table_data,query,results,map__33238,map__33238__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33408 = schema.utils.use_fn_validation;var output_schema33288_33409 = schema.core.Any;var input_schema33289_33410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33290_33411 = schema.core.checker.call(null,input_schema33289_33410);var output_checker33291_33412 = schema.core.checker.call(null,output_schema33288_33409);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function ranges_chart_component(G__33292,G__33293){var validate__6034__auto__ = ufv___33408.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33292,G__33293], null);var temp__4126__auto___33414 = input_checker33290_33411.call(null,args__6035__auto___33413);if(cljs.core.truth_(temp__4126__auto___33414))
{var error__6036__auto___33415 = temp__4126__auto___33414;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33415)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33415,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33413,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33289_33410,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33354 = G__33292;var map__33355 = G__33354;var map__33355__$1 = ((cljs.core.seq_QMARK_.call(null,map__33355))?cljs.core.apply.call(null,cljs.core.hash_map,map__33355):map__33355);var props = map__33355__$1;var map__33356 = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33356__$1 = ((cljs.core.seq_QMARK_.call(null,map__33356))?cljs.core.apply.call(null,cljs.core.hash_map,map__33356):map__33356);var table_state = map__33356__$1;var table_data = cljs.core.get.call(null,map__33356__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33357 = cljs.core.get.call(null,map__33356__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33357__$1 = ((cljs.core.seq_QMARK_.call(null,map__33357))?cljs.core.apply.call(null,cljs.core.hash_map,map__33357):map__33357);var controls = map__33357__$1;var index_type = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33357__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33355__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33293;var G__33354__$1 = G__33354;var owner__$1 = owner;while(true){
var map__33358 = G__33354__$1;var map__33358__$1 = ((cljs.core.seq_QMARK_.call(null,map__33358))?cljs.core.apply.call(null,cljs.core.hash_map,map__33358):map__33358);var props__$1 = map__33358__$1;var map__33359 = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33359__$1 = ((cljs.core.seq_QMARK_.call(null,map__33359))?cljs.core.apply.call(null,cljs.core.hash_map,map__33359):map__33359);var table_state__$1 = map__33359__$1;var table_data__$1 = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33360 = cljs.core.get.call(null,map__33359__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33360__$1 = ((cljs.core.seq_QMARK_.call(null,map__33360))?cljs.core.apply.call(null,cljs.core.hash_map,map__33360):map__33360);var controls__$1 = map__33360__$1;var index_type__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33360__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33358__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33361 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33361 = (function (input_checker33290,index_type,G__33292,G__33354,row_aggs,owner,metric_path,props,map__33358,row_path,table_data,ranges_chart_component,metric_aggs,index,col_path,input_schema33289,filter_spec,G__33293,table_state,output_schema33288,map__33355,map__33356,controls,output_checker33291,col_aggs,map__33360,title,rows,cols,validate__6034__auto__,map__33359,ufv__,map__33357,meta33362){
this.input_checker33290 = input_checker33290;
this.index_type = index_type;
this.G__33292 = G__33292;
this.G__33354 = G__33354;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.props = props;
this.map__33358 = map__33358;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.metric_aggs = metric_aggs;
this.index = index;
this.col_path = col_path;
this.input_schema33289 = input_schema33289;
this.filter_spec = filter_spec;
this.G__33293 = G__33293;
this.table_state = table_state;
this.output_schema33288 = output_schema33288;
this.map__33355 = map__33355;
this.map__33356 = map__33356;
this.controls = controls;
this.output_checker33291 = output_checker33291;
this.col_aggs = col_aggs;
this.map__33360 = map__33360;
this.title = title;
this.rows = rows;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__33359 = map__33359;
this.ufv__ = ufv__;
this.map__33357 = map__33357;
this.meta33362 = meta33362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33361.cljs$lang$type = true;
clustermap.components.ranges_chart.t33361.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33361";
clustermap.components.ranges_chart.t33361.cljs$lang$ctorPrWriter = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33361");
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33361.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33361.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_,p__33364,___$1){var self__ = this;
var map__33365 = p__33364;var map__33365__$1 = ((cljs.core.seq_QMARK_.call(null,map__33365))?cljs.core.apply.call(null,cljs.core.hash_map,map__33365):map__33365);var prev_props = map__33365__$1;var map__33366 = cljs.core.get.call(null,map__33365__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33366__$1 = ((cljs.core.seq_QMARK_.call(null,map__33366))?cljs.core.apply.call(null,cljs.core.hash_map,map__33366):map__33366);var prev_table_data = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33361.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_,p__33367,p__33368){var self__ = this;
var map__33369 = p__33367;var map__33369__$1 = ((cljs.core.seq_QMARK_.call(null,map__33369))?cljs.core.apply.call(null,cljs.core.hash_map,map__33369):map__33369);var next_props = map__33369__$1;var map__33370 = cljs.core.get.call(null,map__33369__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33370__$1 = ((cljs.core.seq_QMARK_.call(null,map__33370))?cljs.core.apply.call(null,cljs.core.hash_map,map__33370):map__33370);var next_table_state = map__33370__$1;var next_table_data = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33371 = cljs.core.get.call(null,map__33370__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33371__$1 = ((cljs.core.seq_QMARK_.call(null,map__33371))?cljs.core.apply.call(null,cljs.core.hash_map,map__33371):map__33371);var next_controls = map__33371__$1;var next_col_aggs = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33369__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33372 = p__33368;var map__33372__$1 = ((cljs.core.seq_QMARK_.call(null,map__33372))?cljs.core.apply.call(null,cljs.core.hash_map,map__33372):map__33372);var fetch_data_fn = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33369,map__33369__$1,next_props,map__33370,map__33370__$1,next_table_state,next_table_data,map__33371,map__33371__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33372,map__33372__$1,fetch_data_fn,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33369,map__33369__$1,next_props,map__33370,map__33370__$1,next_table_state,next_table_data,map__33371,map__33371__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33372,map__33372__$1,fetch_data_fn,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (state_33390){var state_val_33391 = (state_33390[(1)]);if((state_val_33391 === (5)))
{var inst_33388 = (state_33390[(2)]);var state_33390__$1 = state_33390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33390__$1,inst_33388);
} else
{if((state_val_33391 === (4)))
{var state_33390__$1 = state_33390;var statearr_33392_33416 = state_33390__$1;(statearr_33392_33416[(2)] = null);
(statearr_33392_33416[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33391 === (3)))
{var inst_33375 = (state_33390[(7)]);var inst_33377 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33378 = ["RANGES-TABLE-DATA",inst_33375];var inst_33379 = (new cljs.core.PersistentVector(null,2,(5),inst_33377,inst_33378,null));var inst_33380 = cljs.core.clj__GT_js.call(null,inst_33379);var inst_33381 = console.log(inst_33380);var inst_33382 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33383 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33384 = (new cljs.core.PersistentVector(null,1,(5),inst_33382,inst_33383,null));var inst_33385 = om.core.update_BANG_.call(null,self__.table_state,inst_33384,inst_33375);var state_33390__$1 = (function (){var statearr_33393 = state_33390;(statearr_33393[(8)] = inst_33381);
return statearr_33393;
})();var statearr_33394_33417 = state_33390__$1;(statearr_33394_33417[(2)] = inst_33385);
(statearr_33394_33417[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33391 === (2)))
{var inst_33375 = (state_33390[(7)]);var inst_33375__$1 = (state_33390[(2)]);var state_33390__$1 = (function (){var statearr_33395 = state_33390;(statearr_33395[(7)] = inst_33375__$1);
return statearr_33395;
})();if(cljs.core.truth_(inst_33375__$1))
{var statearr_33396_33418 = state_33390__$1;(statearr_33396_33418[(1)] = (3));
} else
{var statearr_33397_33419 = state_33390__$1;(statearr_33397_33419[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33391 === (1)))
{var inst_33373 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33390__$1 = state_33390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(2),inst_33373);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33369,map__33369__$1,next_props,map__33370,map__33370__$1,next_table_state,next_table_data,map__33371,map__33371__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33372,map__33372__$1,fetch_data_fn,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33369,map__33369__$1,next_props,map__33370,map__33370__$1,next_table_state,next_table_data,map__33371,map__33371__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33372,map__33372__$1,fetch_data_fn,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33401 = [null,null,null,null,null,null,null,null,null];(statearr_33401[(0)] = state_machine__9111__auto__);
(statearr_33401[(1)] = (1));
return statearr_33401;
});
var state_machine__9111__auto____1 = (function (state_33390){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33390);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33402){if((e33402 instanceof Object))
{var ex__9114__auto__ = e33402;var statearr_33403_33420 = state_33390;(statearr_33403_33420[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33390);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33402;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33421 = state_33390;
state_33390 = G__33421;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33390){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33369,map__33369__$1,next_props,map__33370,map__33370__$1,next_table_state,next_table_data,map__33371,map__33371__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33372,map__33372__$1,fetch_data_fn,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
})();var state__9127__auto__ = (function (){var statearr_33404 = f__9126__auto__.call(null);(statearr_33404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33369,map__33369__$1,next_props,map__33370,map__33370__$1,next_table_state,next_table_data,map__33371,map__33371__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33372,map__33372__$1,fetch_data_fn,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33361.prototype.om$core$IRender$render$arity$1 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33361.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33407 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33407__$1 = (((G__33407 == null))?null:jayq.core.$.call(null,G__33407));var G__33407__$2 = (((G__33407__$1 == null))?null:G__33407__$1.highcharts());var G__33407__$3 = (((G__33407__$2 == null))?null:G__33407__$2.reflow());return G__33407__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
);
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_33363){var self__ = this;
var _33363__$1 = this;return self__.meta33362;
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.t33361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function (_33363,meta33362__$1){var self__ = this;
var _33363__$1 = this;return (new clustermap.components.ranges_chart.t33361(self__.input_checker33290,self__.index_type,self__.G__33292,self__.G__33354,self__.row_aggs,self__.owner,self__.metric_path,self__.props,self__.map__33358,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.metric_aggs,self__.index,self__.col_path,self__.input_schema33289,self__.filter_spec,self__.G__33293,self__.table_state,self__.output_schema33288,self__.map__33355,self__.map__33356,self__.controls,self__.output_checker33291,self__.col_aggs,self__.map__33360,self__.title,self__.rows,self__.cols,self__.validate__6034__auto__,self__.map__33359,self__.ufv__,self__.map__33357,meta33362__$1));
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
clustermap.components.ranges_chart.__GT_t33361 = ((function (map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412){
return (function __GT_t33361(input_checker33290__$1,index_type__$2,G__33292__$1,G__33354__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,map__33358__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,col_path__$2,input_schema33289__$1,filter_spec__$2,G__33293__$1,table_state__$2,output_schema33288__$1,map__33355__$2,map__33356__$2,controls__$2,output_checker33291__$1,col_aggs__$2,map__33360__$2,title__$2,rows__$2,cols__$2,validate__6034__auto____$1,map__33359__$2,ufv____$1,map__33357__$2,meta33362){return (new clustermap.components.ranges_chart.t33361(input_checker33290__$1,index_type__$2,G__33292__$1,G__33354__$2,row_aggs__$2,owner__$3,metric_path__$2,props__$2,map__33358__$2,row_path__$2,table_data__$2,ranges_chart_component__$1,metric_aggs__$2,index__$2,col_path__$2,input_schema33289__$1,filter_spec__$2,G__33293__$1,table_state__$2,output_schema33288__$1,map__33355__$2,map__33356__$2,controls__$2,output_checker33291__$1,col_aggs__$2,map__33360__$2,title__$2,rows__$2,cols__$2,validate__6034__auto____$1,map__33359__$2,ufv____$1,map__33357__$2,meta33362));
});})(map__33358,map__33358__$1,props__$1,map__33359,map__33359__$1,table_state__$1,table_data__$1,map__33360,map__33360__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33354,map__33355,map__33355__$1,props,map__33356,map__33356__$1,table_state,table_data,map__33357,map__33357__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
}
return (new clustermap.components.ranges_chart.t33361(input_checker33290_33411,index_type__$1,G__33292,G__33354__$1,row_aggs__$1,owner__$2,metric_path__$1,props__$1,map__33358__$1,row_path__$1,table_data__$1,ranges_chart_component,metric_aggs__$1,index__$1,col_path__$1,input_schema33289_33410,filter_spec__$1,G__33293,table_state__$1,output_schema33288_33409,map__33355__$1,map__33356__$1,controls__$1,output_checker33291_33412,col_aggs__$1,map__33360__$1,title__$1,rows__$1,cols__$1,validate__6034__auto__,map__33359__$1,ufv___33408,map__33357__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33422 = output_checker33291_33412.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33422))
{var error__6036__auto___33423 = temp__4126__auto___33422;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33423)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33423,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33288_33409,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33408,output_schema33288_33409,input_schema33289_33410,input_checker33290_33411,output_checker33291_33412))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33288_33409,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33289_33410], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33287){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33287);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33287){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
