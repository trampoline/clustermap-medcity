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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__33196){var map__33242 = p__33196;var map__33242__$1 = ((cljs.core.seq_QMARK_.call(null,map__33242))?cljs.core.apply.call(null,cljs.core.hash_map,map__33242):map__33242);var map__33243 = cljs.core.get.call(null,map__33242__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33243__$1 = ((cljs.core.seq_QMARK_.call(null,map__33243))?cljs.core.apply.call(null,cljs.core.hash_map,map__33243):map__33243);var table_data = map__33243__$1;var query = cljs.core.get.call(null,map__33243__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__33243__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__33244 = cljs.core.get.call(null,map__33242__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33244__$1 = ((cljs.core.seq_QMARK_.call(null,map__33244))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);var controls = map__33244__$1;var title = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (p__33245){var map__33246 = p__33245;var map__33246__$1 = ((cljs.core.seq_QMARK_.call(null,map__33246))?cljs.core.apply.call(null,cljs.core.hash_map,map__33246):map__33246);var x = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__33246__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33247(s__33248){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33248__$1 = s__33248;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33248__$1);if(temp__4126__auto__)
{var s__33248__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33248__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33248__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33250 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33249 = (0);while(true){
if((i__33249 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__33249);cljs.core.chunk_append.call(null,b__33250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__33249,yk,c__4375__auto__,size__4376__auto__,b__33250,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33259(s__33260){return (new cljs.core.LazySeq(null,((function (i__33249,yk,c__4375__auto__,size__4376__auto__,b__33250,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33260__$1 = s__33260;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33260__$1);if(temp__4126__auto____$1)
{var s__33260__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33260__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__33260__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__33262 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__33261 = (0);while(true){
if((i__33261 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__33261);cljs.core.chunk_append.call(null,b__33262,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33287 = (i__33261 + (1));
i__33261 = G__33287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33262),iter__33259.call(null,cljs.core.chunk_rest.call(null,s__33260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33262),null);
}
} else
{var xk = cljs.core.first.call(null,s__33260__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33259.call(null,cljs.core.rest.call(null,s__33260__$2)));
}
} else
{return null;
}
break;
}
});})(i__33249,yk,c__4375__auto__,size__4376__auto__,b__33250,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__33249,yk,c__4375__auto__,size__4376__auto__,b__33250,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33288 = (i__33249 + (1));
i__33249 = G__33288;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33250),iter__33247.call(null,cljs.core.chunk_rest.call(null,s__33248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33250),null);
}
} else
{var yk = cljs.core.first.call(null,s__33248__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33263(s__33264){return (new cljs.core.LazySeq(null,((function (yk,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33264__$1 = s__33264;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33264__$1);if(temp__4126__auto____$1)
{var s__33264__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33264__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33264__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33266 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33265 = (0);while(true){
if((i__33265 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33265);cljs.core.chunk_append.call(null,b__33266,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33289 = (i__33265 + (1));
i__33265 = G__33289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33266),iter__33263.call(null,cljs.core.chunk_rest.call(null,s__33264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33266),null);
}
} else
{var xk = cljs.core.first.call(null,s__33264__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33263.call(null,cljs.core.rest.call(null,s__33264__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__33248__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__33247.call(null,cljs.core.rest.call(null,s__33248__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33267(s__33268){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33268__$1 = s__33268;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33268__$1);if(temp__4126__auto__)
{var s__33268__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33268__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33268__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33270 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33269 = (0);while(true){
if((i__33269 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33269);cljs.core.chunk_append.call(null,b__33270,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33290 = (i__33269 + (1));
i__33269 = G__33290;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33270),iter__33267.call(null,cljs.core.chunk_rest.call(null,s__33268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33270),null);
}
} else
{var xa = cljs.core.first.call(null,s__33268__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33267.call(null,cljs.core.rest.call(null,s__33268__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33271(s__33272){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33272__$1 = s__33272;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33272__$1);if(temp__4126__auto__)
{var s__33272__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33272__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33272__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33274 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33273 = (0);while(true){
if((i__33273 < size__4376__auto__))
{var vec__33277 = cljs.core._nth.call(null,c__4375__auto__,i__33273);var ya = cljs.core.nth.call(null,vec__33277,(0),null);var i = cljs.core.nth.call(null,vec__33277,(1),null);cljs.core.chunk_append.call(null,b__33274,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33291 = (i__33273 + (1));
i__33273 = G__33291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33274),iter__33271.call(null,cljs.core.chunk_rest.call(null,s__33272__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33274),null);
}
} else
{var vec__33278 = cljs.core.first.call(null,s__33272__$2);var ya = cljs.core.nth.call(null,vec__33278,(0),null);var i = cljs.core.nth.call(null,vec__33278,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33271.call(null,cljs.core.rest.call(null,s__33272__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function iter__33279(s__33280){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33280__$1 = s__33280;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33280__$1);if(temp__4126__auto__)
{var s__33280__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33280__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33280__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33282 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33281 = (0);while(true){
if((i__33281 < size__4376__auto__))
{var vec__33285 = cljs.core._nth.call(null,c__4375__auto__,i__33281);var ya = cljs.core.nth.call(null,vec__33285,(0),null);var i = cljs.core.nth.call(null,vec__33285,(1),null);cljs.core.chunk_append.call(null,b__33282,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33292 = (i__33281 + (1));
i__33281 = G__33292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33282),iter__33279.call(null,cljs.core.chunk_rest.call(null,s__33280__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33282),null);
}
} else
{var vec__33286 = cljs.core.first.call(null,s__33280__$2);var ya = cljs.core.nth.call(null,vec__33286,(0),null);var i = cljs.core.nth.call(null,vec__33286,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33279.call(null,cljs.core.rest.call(null,s__33280__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33242,map__33242__$1,map__33243,map__33243__$1,table_data,query,results,map__33244,map__33244__$1,controls,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33414 = schema.utils.use_fn_validation;var output_schema33294_33415 = schema.core.Any;var input_schema33295_33416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33296_33417 = schema.core.checker.call(null,input_schema33295_33416);var output_checker33297_33418 = schema.core.checker.call(null,output_schema33294_33415);/**
* Inputs: [{{table-data :table-data, {index-type :index-type, row-aggs :row-aggs, metric-path :metric-path, :as controls, row-path :row-path, metric-aggs :metric-aggs, index :index, col-path :col-path, col-aggs :col-aggs, title :title, rows :rows, cols :cols} :controls, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function ranges_chart_component(G__33298,G__33299){var validate__6034__auto__ = ufv___33414.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33298,G__33299], null);var temp__4126__auto___33420 = input_checker33296_33417.call(null,args__6035__auto___33419);if(cljs.core.truth_(temp__4126__auto___33420))
{var error__6036__auto___33421 = temp__4126__auto___33420;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33421,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33419,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33295_33416,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33360 = G__33298;var map__33361 = G__33360;var map__33361__$1 = ((cljs.core.seq_QMARK_.call(null,map__33361))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361):map__33361);var props = map__33361__$1;var map__33362 = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33362__$1 = ((cljs.core.seq_QMARK_.call(null,map__33362))?cljs.core.apply.call(null,cljs.core.hash_map,map__33362):map__33362);var table_state = map__33362__$1;var table_data = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33363 = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33363__$1 = ((cljs.core.seq_QMARK_.call(null,map__33363))?cljs.core.apply.call(null,cljs.core.hash_map,map__33363):map__33363);var controls = map__33363__$1;var index_type = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec = cljs.core.get.call(null,map__33361__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33299;var G__33360__$1 = G__33360;var owner__$1 = owner;while(true){
var map__33364 = G__33360__$1;var map__33364__$1 = ((cljs.core.seq_QMARK_.call(null,map__33364))?cljs.core.apply.call(null,cljs.core.hash_map,map__33364):map__33364);var props__$1 = map__33364__$1;var map__33365 = cljs.core.get.call(null,map__33364__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33365__$1 = ((cljs.core.seq_QMARK_.call(null,map__33365))?cljs.core.apply.call(null,cljs.core.hash_map,map__33365):map__33365);var table_state__$1 = map__33365__$1;var table_data__$1 = cljs.core.get.call(null,map__33365__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33366 = cljs.core.get.call(null,map__33365__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33366__$1 = ((cljs.core.seq_QMARK_.call(null,map__33366))?cljs.core.apply.call(null,cljs.core.hash_map,map__33366):map__33366);var controls__$1 = map__33366__$1;var index_type__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var row_aggs__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var metric_path__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var row_path__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var metric_aggs__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var index__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var col_path__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var col_aggs__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var title__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"title","title",636505583));var rows__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var cols__$1 = cljs.core.get.call(null,map__33366__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var filter_spec__$1 = cljs.core.get.call(null,map__33364__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33367 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33367 = (function (G__33298,index_type,row_aggs,owner,metric_path,output_schema33294,props,input_schema33295,map__33366,input_checker33296,row_path,table_data,ranges_chart_component,map__33361,output_checker33297,metric_aggs,index,col_path,filter_spec,table_state,map__33363,map__33365,controls,col_aggs,title,G__33299,rows,cols,validate__6034__auto__,map__33364,map__33362,ufv__,G__33360,meta33368){
this.G__33298 = G__33298;
this.index_type = index_type;
this.row_aggs = row_aggs;
this.owner = owner;
this.metric_path = metric_path;
this.output_schema33294 = output_schema33294;
this.props = props;
this.input_schema33295 = input_schema33295;
this.map__33366 = map__33366;
this.input_checker33296 = input_checker33296;
this.row_path = row_path;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.map__33361 = map__33361;
this.output_checker33297 = output_checker33297;
this.metric_aggs = metric_aggs;
this.index = index;
this.col_path = col_path;
this.filter_spec = filter_spec;
this.table_state = table_state;
this.map__33363 = map__33363;
this.map__33365 = map__33365;
this.controls = controls;
this.col_aggs = col_aggs;
this.title = title;
this.G__33299 = G__33299;
this.rows = rows;
this.cols = cols;
this.validate__6034__auto__ = validate__6034__auto__;
this.map__33364 = map__33364;
this.map__33362 = map__33362;
this.ufv__ = ufv__;
this.G__33360 = G__33360;
this.meta33368 = meta33368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33367.cljs$lang$type = true;
clustermap.components.ranges_chart.t33367.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33367";
clustermap.components.ranges_chart.t33367.cljs$lang$ctorPrWriter = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33367");
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33367.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33367.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_,p__33370,___$1){var self__ = this;
var map__33371 = p__33370;var map__33371__$1 = ((cljs.core.seq_QMARK_.call(null,map__33371))?cljs.core.apply.call(null,cljs.core.hash_map,map__33371):map__33371);var prev_props = map__33371__$1;var map__33372 = cljs.core.get.call(null,map__33371__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33372__$1 = ((cljs.core.seq_QMARK_.call(null,map__33372))?cljs.core.apply.call(null,cljs.core.hash_map,map__33372):map__33372);var prev_table_data = cljs.core.get.call(null,map__33372__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if(cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33367.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_,p__33373,p__33374){var self__ = this;
var map__33375 = p__33373;var map__33375__$1 = ((cljs.core.seq_QMARK_.call(null,map__33375))?cljs.core.apply.call(null,cljs.core.hash_map,map__33375):map__33375);var next_props = map__33375__$1;var map__33376 = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33376__$1 = ((cljs.core.seq_QMARK_.call(null,map__33376))?cljs.core.apply.call(null,cljs.core.hash_map,map__33376):map__33376);var next_table_state = map__33376__$1;var next_table_data = cljs.core.get.call(null,map__33376__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33377 = cljs.core.get.call(null,map__33376__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__33377__$1 = ((cljs.core.seq_QMARK_.call(null,map__33377))?cljs.core.apply.call(null,cljs.core.hash_map,map__33377):map__33377);var next_controls = map__33377__$1;var next_col_aggs = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293));var next_title = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"title","title",636505583));var next_row_path = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"row-path","row-path",-709648669));var next_col_path = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"col-path","col-path",-1370965241));var next_row_aggs = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444));var next_cols = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var next_index = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_metric_path = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758));var next_metric_aggs = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892));var next_rows = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var next_index_type = cljs.core.get.call(null,map__33377__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_filter_spec = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33378 = p__33374;var map__33378__$1 = ((cljs.core.seq_QMARK_.call(null,map__33378))?cljs.core.apply.call(null,cljs.core.hash_map,map__33378):map__33378);var fetch_data_fn = cljs.core.get.call(null,map__33378__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33375,map__33375__$1,next_props,map__33376,map__33376__$1,next_table_state,next_table_data,map__33377,map__33377__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33378,map__33378__$1,fetch_data_fn,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33375,map__33375__$1,next_props,map__33376,map__33376__$1,next_table_state,next_table_data,map__33377,map__33377__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33378,map__33378__$1,fetch_data_fn,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (state_33396){var state_val_33397 = (state_33396[(1)]);if((state_val_33397 === (5)))
{var inst_33394 = (state_33396[(2)]);var state_33396__$1 = state_33396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33396__$1,inst_33394);
} else
{if((state_val_33397 === (4)))
{var state_33396__$1 = state_33396;var statearr_33398_33422 = state_33396__$1;(statearr_33398_33422[(2)] = null);
(statearr_33398_33422[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33397 === (3)))
{var inst_33381 = (state_33396[(7)]);var inst_33383 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33384 = ["RANGES-TABLE-DATA",inst_33381];var inst_33385 = (new cljs.core.PersistentVector(null,2,(5),inst_33383,inst_33384,null));var inst_33386 = cljs.core.clj__GT_js.call(null,inst_33385);var inst_33387 = console.log(inst_33386);var inst_33388 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33389 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33390 = (new cljs.core.PersistentVector(null,1,(5),inst_33388,inst_33389,null));var inst_33391 = om.core.update_BANG_.call(null,self__.table_state,inst_33390,inst_33381);var state_33396__$1 = (function (){var statearr_33399 = state_33396;(statearr_33399[(8)] = inst_33387);
return statearr_33399;
})();var statearr_33400_33423 = state_33396__$1;(statearr_33400_33423[(2)] = inst_33391);
(statearr_33400_33423[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33397 === (2)))
{var inst_33381 = (state_33396[(7)]);var inst_33381__$1 = (state_33396[(2)]);var state_33396__$1 = (function (){var statearr_33401 = state_33396;(statearr_33401[(7)] = inst_33381__$1);
return statearr_33401;
})();if(cljs.core.truth_(inst_33381__$1))
{var statearr_33402_33424 = state_33396__$1;(statearr_33402_33424[(1)] = (3));
} else
{var statearr_33403_33425 = state_33396__$1;(statearr_33403_33425[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33397 === (1)))
{var inst_33379 = fetch_data_fn.call(null,next_index,next_index_type,next_filter_spec,next_row_path,next_row_aggs,next_col_path,next_col_aggs,next_metric_path,next_metric_aggs);var state_33396__$1 = state_33396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33396__$1,(2),inst_33379);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33375,map__33375__$1,next_props,map__33376,map__33376__$1,next_table_state,next_table_data,map__33377,map__33377__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33378,map__33378__$1,fetch_data_fn,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33375,map__33375__$1,next_props,map__33376,map__33376__$1,next_table_state,next_table_data,map__33377,map__33377__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33378,map__33378__$1,fetch_data_fn,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33407 = [null,null,null,null,null,null,null,null,null];(statearr_33407[(0)] = state_machine__9111__auto__);
(statearr_33407[(1)] = (1));
return statearr_33407;
});
var state_machine__9111__auto____1 = (function (state_33396){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33396);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33408){if((e33408 instanceof Object))
{var ex__9114__auto__ = e33408;var statearr_33409_33426 = state_33396;(statearr_33409_33426[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33408;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33427 = state_33396;
state_33396 = G__33427;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33396){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33375,map__33375__$1,next_props,map__33376,map__33376__$1,next_table_state,next_table_data,map__33377,map__33377__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33378,map__33378__$1,fetch_data_fn,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
})();var state__9127__auto__ = (function (){var statearr_33410 = f__9126__auto__.call(null);(statearr_33410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33375,map__33375__$1,next_props,map__33376,map__33376__$1,next_table_state,next_table_data,map__33377,map__33377__$1,next_controls,next_col_aggs,next_title,next_row_path,next_col_path,next_row_aggs,next_cols,next_index,next_metric_path,next_metric_aggs,next_rows,next_index_type,next_filter_spec,map__33378,map__33378__$1,fetch_data_fn,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33367.prototype.om$core$IRender$render$arity$1 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33367.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33413 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33413__$1 = (((G__33413 == null))?null:jayq.core.$.call(null,G__33413));var G__33413__$2 = (((G__33413__$1 == null))?null:G__33413__$1.highcharts());var G__33413__$3 = (((G__33413__$2 == null))?null:G__33413__$2.reflow());return G__33413__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
);
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_33369){var self__ = this;
var _33369__$1 = this;return self__.meta33368;
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.t33367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function (_33369,meta33368__$1){var self__ = this;
var _33369__$1 = this;return (new clustermap.components.ranges_chart.t33367(self__.G__33298,self__.index_type,self__.row_aggs,self__.owner,self__.metric_path,self__.output_schema33294,self__.props,self__.input_schema33295,self__.map__33366,self__.input_checker33296,self__.row_path,self__.table_data,self__.ranges_chart_component,self__.map__33361,self__.output_checker33297,self__.metric_aggs,self__.index,self__.col_path,self__.filter_spec,self__.table_state,self__.map__33363,self__.map__33365,self__.controls,self__.col_aggs,self__.title,self__.G__33299,self__.rows,self__.cols,self__.validate__6034__auto__,self__.map__33364,self__.map__33362,self__.ufv__,self__.G__33360,meta33368__$1));
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
clustermap.components.ranges_chart.__GT_t33367 = ((function (map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418){
return (function __GT_t33367(G__33298__$1,index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,output_schema33294__$1,props__$2,input_schema33295__$1,map__33366__$2,input_checker33296__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,map__33361__$2,output_checker33297__$1,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,table_state__$2,map__33363__$2,map__33365__$2,controls__$2,col_aggs__$2,title__$2,G__33299__$1,rows__$2,cols__$2,validate__6034__auto____$1,map__33364__$2,map__33362__$2,ufv____$1,G__33360__$2,meta33368){return (new clustermap.components.ranges_chart.t33367(G__33298__$1,index_type__$2,row_aggs__$2,owner__$3,metric_path__$2,output_schema33294__$1,props__$2,input_schema33295__$1,map__33366__$2,input_checker33296__$1,row_path__$2,table_data__$2,ranges_chart_component__$1,map__33361__$2,output_checker33297__$1,metric_aggs__$2,index__$2,col_path__$2,filter_spec__$2,table_state__$2,map__33363__$2,map__33365__$2,controls__$2,col_aggs__$2,title__$2,G__33299__$1,rows__$2,cols__$2,validate__6034__auto____$1,map__33364__$2,map__33362__$2,ufv____$1,G__33360__$2,meta33368));
});})(map__33364,map__33364__$1,props__$1,map__33365,map__33365__$1,table_state__$1,table_data__$1,map__33366,map__33366__$1,controls__$1,index_type__$1,row_aggs__$1,metric_path__$1,row_path__$1,metric_aggs__$1,index__$1,col_path__$1,col_aggs__$1,title__$1,rows__$1,cols__$1,filter_spec__$1,owner__$2,G__33360,map__33361,map__33361__$1,props,map__33362,map__33362__$1,table_state,table_data,map__33363,map__33363__$1,controls,index_type,row_aggs,metric_path,row_path,metric_aggs,index,col_path,col_aggs,title,rows,cols,filter_spec,owner,validate__6034__auto__,ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
}
return (new clustermap.components.ranges_chart.t33367(G__33298,index_type__$1,row_aggs__$1,owner__$2,metric_path__$1,output_schema33294_33415,props__$1,input_schema33295_33416,map__33366__$1,input_checker33296_33417,row_path__$1,table_data__$1,ranges_chart_component,map__33361__$1,output_checker33297_33418,metric_aggs__$1,index__$1,col_path__$1,filter_spec__$1,table_state__$1,map__33363__$1,map__33365__$1,controls__$1,col_aggs__$1,title__$1,G__33299,rows__$1,cols__$1,validate__6034__auto__,map__33364__$1,map__33362__$1,ufv___33414,G__33360__$1,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33428 = output_checker33297_33418.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33428))
{var error__6036__auto___33429 = temp__4126__auto___33428;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33429)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33429,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33294_33415,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33414,output_schema33294_33415,input_schema33295_33416,input_checker33296_33417,output_checker33297_33418))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33294_33415,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33295_33416], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33293){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33293);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33293){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
