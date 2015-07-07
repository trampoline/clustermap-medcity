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
clustermap.components.ranges_chart.create_chart = (function create_chart(node,p__33227){var map__33273 = p__33227;var map__33273__$1 = ((cljs.core.seq_QMARK_.call(null,map__33273))?cljs.core.apply.call(null,cljs.core.hash_map,map__33273):map__33273);var map__33274 = cljs.core.get.call(null,map__33273__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__33274__$1 = ((cljs.core.seq_QMARK_.call(null,map__33274))?cljs.core.apply.call(null,cljs.core.hash_map,map__33274):map__33274);var table_data = map__33274__$1;var query = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var results = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"results","results",-1134170113));var map__33275 = cljs.core.get.call(null,map__33273__$1,new cljs.core.Keyword(null,"view","view",1247994814));var map__33275__$1 = ((cljs.core.seq_QMARK_.call(null,map__33275))?cljs.core.apply.call(null,cljs.core.hash_map,map__33275):map__33275);var view = map__33275__$1;var title = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"title","title",636505583));var color = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"color","color",1011675173));var x_axis = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));var y_axis = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"rows","rows",850049680));var render_fn = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var y_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),y_axis);var x_keys = cljs.core.map.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),x_axis);var xy_points = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (y_keys,x_keys,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (p__33276){var map__33277 = p__33276;var map__33277__$1 = ((cljs.core.seq_QMARK_.call(null,map__33277))?cljs.core.apply.call(null,cljs.core.hash_map,map__33277):map__33277);var x = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"col","col",-1959363084));var y = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"row","row",-570139521));var v = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"metric","metric",408798077));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),v], null);
});})(y_keys,x_keys,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,results));var x_series_by_y = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33278(s__33279){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33279__$1 = s__33279;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33279__$1);if(temp__4126__auto__)
{var s__33279__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33279__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33279__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33281 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33280 = (0);while(true){
if((i__33280 < size__4376__auto__))
{var yk = cljs.core._nth.call(null,c__4375__auto__,i__33280);cljs.core.chunk_append.call(null,b__33281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (i__33280,yk,c__4375__auto__,size__4376__auto__,b__33281,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33290(s__33291){return (new cljs.core.LazySeq(null,((function (i__33280,yk,c__4375__auto__,size__4376__auto__,b__33281,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33291__$1 = s__33291;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33291__$1);if(temp__4126__auto____$1)
{var s__33291__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33291__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__33291__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__33293 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__33292 = (0);while(true){
if((i__33292 < size__4376__auto____$1))
{var xk = cljs.core._nth.call(null,c__4375__auto____$1,i__33292);cljs.core.chunk_append.call(null,b__33293,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33318 = (i__33292 + (1));
i__33292 = G__33318;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33293),iter__33290.call(null,cljs.core.chunk_rest.call(null,s__33291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33293),null);
}
} else
{var xk = cljs.core.first.call(null,s__33291__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33290.call(null,cljs.core.rest.call(null,s__33291__$2)));
}
} else
{return null;
}
break;
}
});})(i__33280,yk,c__4375__auto__,size__4376__auto__,b__33281,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(i__33280,yk,c__4375__auto__,size__4376__auto__,b__33281,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null));
{
var G__33319 = (i__33280 + (1));
i__33280 = G__33319;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33281),iter__33278.call(null,cljs.core.chunk_rest.call(null,s__33279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33281),null);
}
} else
{var yk = cljs.core.first.call(null,s__33279__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yk,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4377__auto__ = ((function (yk,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33294(s__33295){return (new cljs.core.LazySeq(null,((function (yk,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33295__$1 = s__33295;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33295__$1);if(temp__4126__auto____$1)
{var s__33295__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__33295__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33295__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33297 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33296 = (0);while(true){
if((i__33296 < size__4376__auto__))
{var xk = cljs.core._nth.call(null,c__4375__auto__,i__33296);cljs.core.chunk_append.call(null,b__33297,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)));
{
var G__33320 = (i__33296 + (1));
i__33296 = G__33320;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33297),iter__33294.call(null,cljs.core.chunk_rest.call(null,s__33295__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33297),null);
}
} else
{var xk = cljs.core.first.call(null,s__33295__$2);return cljs.core.cons.call(null,cljs.core.get.call(null,xy_points,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,yk], null)),iter__33294.call(null,cljs.core.rest.call(null,s__33295__$2)));
}
} else
{return null;
}
break;
}
});})(yk,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(yk,s__33279__$2,temp__4126__auto__,y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_keys);
})())], null),iter__33278.call(null,cljs.core.rest.call(null,s__33279__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,y_keys);
})());var chart = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"column",new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"categories","categories",178386610),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33298(s__33299){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33299__$1 = s__33299;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33299__$1);if(temp__4126__auto__)
{var s__33299__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33299__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33299__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33301 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33300 = (0);while(true){
if((i__33300 < size__4376__auto__))
{var xa = cljs.core._nth.call(null,c__4375__auto__,i__33300);cljs.core.chunk_append.call(null,b__33301,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa));
{
var G__33321 = (i__33300 + (1));
i__33300 = G__33321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33301),iter__33298.call(null,cljs.core.chunk_rest.call(null,s__33299__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33301),null);
}
} else
{var xa = cljs.core.first.call(null,s__33299__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(xa),iter__33298.call(null,cljs.core.rest.call(null,s__33299__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,x_axis);
})()], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33302(s__33303){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33303__$1 = s__33303;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33303__$1);if(temp__4126__auto__)
{var s__33303__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33303__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33303__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33305 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33304 = (0);while(true){
if((i__33304 < size__4376__auto__))
{var vec__33308 = cljs.core._nth.call(null,c__4375__auto__,i__33304);var ya = cljs.core.nth.call(null,vec__33308,(0),null);var i = cljs.core.nth.call(null,vec__33308,(1),null);cljs.core.chunk_append.call(null,b__33305,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null));
{
var G__33322 = (i__33304 + (1));
i__33304 = G__33322;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33305),iter__33302.call(null,cljs.core.chunk_rest.call(null,s__33303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33305),null);
}
} else
{var vec__33309 = cljs.core.first.call(null,s__33303__$2);var ya = cljs.core.nth.call(null,vec__33309,(0),null);var i = cljs.core.nth.call(null,vec__33309,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya)], null),iter__33302.call(null,cljs.core.rest.call(null,s__33303__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})(),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueDecimals","valueDecimals",-2023665584),(0)], null),new cljs.core.Keyword(null,"series","series",600710694),(function (){var iter__4377__auto__ = ((function (y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function iter__33310(s__33311){return (new cljs.core.LazySeq(null,((function (y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn){
return (function (){var s__33311__$1 = s__33311;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33311__$1);if(temp__4126__auto__)
{var s__33311__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33311__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__33311__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__33313 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__33312 = (0);while(true){
if((i__33312 < size__4376__auto__))
{var vec__33316 = cljs.core._nth.call(null,c__4375__auto__,i__33312);var ya = cljs.core.nth.call(null,vec__33316,(0),null);var i = cljs.core.nth.call(null,vec__33316,(1),null);cljs.core.chunk_append.call(null,b__33313,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null));
{
var G__33323 = (i__33312 + (1));
i__33312 = G__33323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33313),iter__33310.call(null,cljs.core.chunk_rest.call(null,s__33311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33313),null);
}
} else
{var vec__33317 = cljs.core.first.call(null,s__33311__$2);var ya = cljs.core.nth.call(null,vec__33317,(0),null);var i = cljs.core.nth.call(null,vec__33317,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(ya),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),i,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,x_series_by_y,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ya))], null),iter__33310.call(null,cljs.core.rest.call(null,s__33311__$2)));
}
} else
{return null;
}
break;
}
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
,null,null));
});})(y_keys,x_keys,xy_points,x_series_by_y,map__33273,map__33273__$1,map__33274,map__33274__$1,table_data,query,results,map__33275,map__33275__$1,view,title,color,x_axis,y_axis,render_fn))
;return iter__4377__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,y_axis,cljs.core.iterate.call(null,cljs.core.inc,(0))));
})()], null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RANGES-CHART",chart], null)));
return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,chart));
});
var ufv___33445 = schema.utils.use_fn_validation;var output_schema33325_33446 = schema.core.Any;var input_schema33326_33447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker33327_33448 = schema.core.checker.call(null,input_schema33326_33447);var output_checker33328_33449 = schema.core.checker.call(null,output_schema33325_33446);/**
* Inputs: [{{table-data :table-data, query :query, view :view, :as table-state} :table-state, filter-spec :filter-spec, :as props} owner]
*/
clustermap.components.ranges_chart.ranges_chart_component = ((function (ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function ranges_chart_component(G__33329,G__33330){var validate__6034__auto__ = ufv___33445.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33329,G__33330], null);var temp__4126__auto___33451 = input_checker33327_33448.call(null,args__6035__auto___33450);if(cljs.core.truth_(temp__4126__auto___33451))
{var error__6036__auto___33452 = temp__4126__auto___33451;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33452)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33452,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33450,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33326_33447,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__33390 = G__33329;var map__33391 = G__33390;var map__33391__$1 = ((cljs.core.seq_QMARK_.call(null,map__33391))?cljs.core.apply.call(null,cljs.core.hash_map,map__33391):map__33391);var props = map__33391__$1;var map__33392 = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33392__$1 = ((cljs.core.seq_QMARK_.call(null,map__33392))?cljs.core.apply.call(null,cljs.core.hash_map,map__33392):map__33392);var table_state = map__33392__$1;var table_data = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var query = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var view = cljs.core.get.call(null,map__33392__$1,new cljs.core.Keyword(null,"view","view",1247994814));var filter_spec = cljs.core.get.call(null,map__33391__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner = G__33330;var G__33390__$1 = G__33390;var owner__$1 = owner;while(true){
var map__33393 = G__33390__$1;var map__33393__$1 = ((cljs.core.seq_QMARK_.call(null,map__33393))?cljs.core.apply.call(null,cljs.core.hash_map,map__33393):map__33393);var props__$1 = map__33393__$1;var map__33394 = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33394__$1 = ((cljs.core.seq_QMARK_.call(null,map__33394))?cljs.core.apply.call(null,cljs.core.hash_map,map__33394):map__33394);var table_state__$1 = map__33394__$1;var table_data__$1 = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var query__$1 = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var view__$1 = cljs.core.get.call(null,map__33394__$1,new cljs.core.Keyword(null,"view","view",1247994814));var filter_spec__$1 = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var owner__$2 = owner__$1;if(typeof clustermap.components.ranges_chart.t33395 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.ranges_chart.t33395 = (function (input_schema33326,query,G__33330,output_checker33328,owner,input_checker33327,G__33329,view,props,output_schema33325,table_data,ranges_chart_component,filter_spec,map__33394,table_state,map__33392,map__33393,map__33391,G__33390,validate__6034__auto__,ufv__,meta33396){
this.input_schema33326 = input_schema33326;
this.query = query;
this.G__33330 = G__33330;
this.output_checker33328 = output_checker33328;
this.owner = owner;
this.input_checker33327 = input_checker33327;
this.G__33329 = G__33329;
this.view = view;
this.props = props;
this.output_schema33325 = output_schema33325;
this.table_data = table_data;
this.ranges_chart_component = ranges_chart_component;
this.filter_spec = filter_spec;
this.map__33394 = map__33394;
this.table_state = table_state;
this.map__33392 = map__33392;
this.map__33393 = map__33393;
this.map__33391 = map__33391;
this.G__33390 = G__33390;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta33396 = meta33396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.ranges_chart.t33395.cljs$lang$type = true;
clustermap.components.ranges_chart.t33395.cljs$lang$ctorStr = "clustermap.components.ranges-chart/t33395";
clustermap.components.ranges_chart.t33395.cljs$lang$ctorPrWriter = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.ranges-chart/t33395");
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.om$core$IDisplayName$ = true;
clustermap.components.ranges_chart.t33395.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_){var self__ = this;
var ___$1 = this;return "ranges-chart-component";
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.om$core$IDidUpdate$ = true;
clustermap.components.ranges_chart.t33395.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_,p__33398,___$1){var self__ = this;
var map__33399 = p__33398;var map__33399__$1 = ((cljs.core.seq_QMARK_.call(null,map__33399))?cljs.core.apply.call(null,cljs.core.hash_map,map__33399):map__33399);var prev_props = map__33399__$1;var map__33400 = cljs.core.get.call(null,map__33399__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33400__$1 = ((cljs.core.seq_QMARK_.call(null,map__33400))?cljs.core.apply.call(null,cljs.core.hash_map,map__33400):map__33400);var prev_view = cljs.core.get.call(null,map__33400__$1,new cljs.core.Keyword(null,"view","view",1247994814));var prev_table_data = cljs.core.get.call(null,map__33400__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var ___$2 = this;if((cljs.core.not_EQ_.call(null,prev_table_data,self__.table_data)) || (cljs.core.not_EQ_.call(null,prev_view,self__.view)))
{return clustermap.components.ranges_chart.create_chart.call(null,om.core.get_node.call(null,self__.owner,"ranges-chart"),self__.table_state);
} else
{return null;
}
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.om$core$IWillUpdate$ = true;
clustermap.components.ranges_chart.t33395.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_,p__33401,p__33402){var self__ = this;
var map__33403 = p__33401;var map__33403__$1 = ((cljs.core.seq_QMARK_.call(null,map__33403))?cljs.core.apply.call(null,cljs.core.hash_map,map__33403):map__33403);var next_props = map__33403__$1;var map__33404 = cljs.core.get.call(null,map__33403__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__33404__$1 = ((cljs.core.seq_QMARK_.call(null,map__33404))?cljs.core.apply.call(null,cljs.core.hash_map,map__33404):map__33404);var next_table_state = map__33404__$1;var next_table_data = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var next_query = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var next_view = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"view","view",1247994814));var next_filter_spec = cljs.core.get.call(null,map__33403__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__33405 = p__33402;var map__33405__$1 = ((cljs.core.seq_QMARK_.call(null,map__33405))?cljs.core.apply.call(null,cljs.core.hash_map,map__33405):map__33405);var fetch_data_fn = cljs.core.get.call(null,map__33405__$1,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_query,self__.query)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__33403,map__33403__$1,next_props,map__33404,map__33404__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33405,map__33405__$1,fetch_data_fn,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__33403,map__33403__$1,next_props,map__33404,map__33404__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33405,map__33405__$1,fetch_data_fn,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (state_33427){var state_val_33428 = (state_33427[(1)]);if((state_val_33428 === (5)))
{var inst_33425 = (state_33427[(2)]);var state_33427__$1 = state_33427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33427__$1,inst_33425);
} else
{if((state_val_33428 === (4)))
{var state_33427__$1 = state_33427;var statearr_33429_33453 = state_33427__$1;(statearr_33429_33453[(2)] = null);
(statearr_33429_33453[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33428 === (3)))
{var inst_33412 = (state_33427[(7)]);var inst_33414 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33415 = ["RANGES-TABLE-DATA",inst_33412];var inst_33416 = (new cljs.core.PersistentVector(null,2,(5),inst_33414,inst_33415,null));var inst_33417 = cljs.core.clj__GT_js.call(null,inst_33416);var inst_33418 = console.log(inst_33417);var inst_33419 = cljs.core.PersistentVector.EMPTY_NODE;var inst_33420 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_33421 = (new cljs.core.PersistentVector(null,1,(5),inst_33419,inst_33420,null));var inst_33422 = om.core.update_BANG_.call(null,self__.table_state,inst_33421,inst_33412);var state_33427__$1 = (function (){var statearr_33430 = state_33427;(statearr_33430[(8)] = inst_33418);
return statearr_33430;
})();var statearr_33431_33454 = state_33427__$1;(statearr_33431_33454[(2)] = inst_33422);
(statearr_33431_33454[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33428 === (2)))
{var inst_33412 = (state_33427[(7)]);var inst_33412__$1 = (state_33427[(2)]);var state_33427__$1 = (function (){var statearr_33432 = state_33427;(statearr_33432[(7)] = inst_33412__$1);
return statearr_33432;
})();if(cljs.core.truth_(inst_33412__$1))
{var statearr_33433_33455 = state_33427__$1;(statearr_33433_33455[(1)] = (3));
} else
{var statearr_33434_33456 = state_33427__$1;(statearr_33434_33456[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33428 === (1)))
{var inst_33406 = [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)];var inst_33407 = [next_filter_spec];var inst_33408 = cljs.core.PersistentHashMap.fromArrays(inst_33406,inst_33407);var inst_33409 = cljs.core.merge.call(null,next_query,inst_33408);var inst_33410 = fetch_data_fn.call(null,inst_33409);var state_33427__$1 = state_33427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33427__$1,(2),inst_33410);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__33403,map__33403__$1,next_props,map__33404,map__33404__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33405,map__33405__$1,fetch_data_fn,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__33403,map__33403__$1,next_props,map__33404,map__33404__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33405,map__33405__$1,fetch_data_fn,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_33438 = [null,null,null,null,null,null,null,null,null];(statearr_33438[(0)] = state_machine__9111__auto__);
(statearr_33438[(1)] = (1));
return statearr_33438;
});
var state_machine__9111__auto____1 = (function (state_33427){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_33427);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e33439){if((e33439 instanceof Object))
{var ex__9114__auto__ = e33439;var statearr_33440_33457 = state_33427;(statearr_33440_33457[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33427);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33439;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33458 = state_33427;
state_33427 = G__33458;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_33427){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_33427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__33403,map__33403__$1,next_props,map__33404,map__33404__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33405,map__33405__$1,fetch_data_fn,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
})();var state__9127__auto__ = (function (){var statearr_33441 = f__9126__auto__.call(null);(statearr_33441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_33441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__33403,map__33403__$1,next_props,map__33404,map__33404__$1,next_table_state,next_table_data,next_query,next_view,next_filter_spec,map__33405,map__33405__$1,fetch_data_fn,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.om$core$IRender$ = true;
clustermap.components.ranges_chart.t33395.prototype.om$core$IRender$render$arity$1 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"ref": "ranges-chart"});
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.om$core$IDidMount$ = true;
clustermap.components.ranges_chart.t33395.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-data-fn","fetch-data-fn",-1358946496),clustermap.api.ranges_factory.call(null));
var node = om.core.get_node.call(null,self__.owner);var last_dims = cljs.core.atom.call(null,null);var w = node.offsetWidth;var h = node.offsetHeight;if(((w > (0))) && ((h > (0))))
{cljs.core.reset_BANG_.call(null,last_dims,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
} else
{}
return domina.events.listen_BANG_.call(null,"clustermap-change-view",((function (node,last_dims,w,h,___$1,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (e){var w__$1 = node.offsetWidth;var h__$1 = node.offsetHeight;if(((w__$1 > (0))) && ((h__$1 > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,last_dims),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w__$1,h__$1], null))))
{var G__33444 = om.core.get_node.call(null,self__.owner,"ranges-chart");var G__33444__$1 = (((G__33444 == null))?null:jayq.core.$.call(null,G__33444));var G__33444__$2 = (((G__33444__$1 == null))?null:G__33444__$1.highcharts());var G__33444__$3 = (((G__33444__$2 == null))?null:G__33444__$2.reflow());return G__33444__$3;
} else
{return null;
}
});})(node,last_dims,w,h,___$1,map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
);
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_33397){var self__ = this;
var _33397__$1 = this;return self__.meta33396;
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.t33395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function (_33397,meta33396__$1){var self__ = this;
var _33397__$1 = this;return (new clustermap.components.ranges_chart.t33395(self__.input_schema33326,self__.query,self__.G__33330,self__.output_checker33328,self__.owner,self__.input_checker33327,self__.G__33329,self__.view,self__.props,self__.output_schema33325,self__.table_data,self__.ranges_chart_component,self__.filter_spec,self__.map__33394,self__.table_state,self__.map__33392,self__.map__33393,self__.map__33391,self__.G__33390,self__.validate__6034__auto__,self__.ufv__,meta33396__$1));
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
clustermap.components.ranges_chart.__GT_t33395 = ((function (map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449){
return (function __GT_t33395(input_schema33326__$1,query__$2,G__33330__$1,output_checker33328__$1,owner__$3,input_checker33327__$1,G__33329__$1,view__$2,props__$2,output_schema33325__$1,table_data__$2,ranges_chart_component__$1,filter_spec__$2,map__33394__$2,table_state__$2,map__33392__$2,map__33393__$2,map__33391__$2,G__33390__$2,validate__6034__auto____$1,ufv____$1,meta33396){return (new clustermap.components.ranges_chart.t33395(input_schema33326__$1,query__$2,G__33330__$1,output_checker33328__$1,owner__$3,input_checker33327__$1,G__33329__$1,view__$2,props__$2,output_schema33325__$1,table_data__$2,ranges_chart_component__$1,filter_spec__$2,map__33394__$2,table_state__$2,map__33392__$2,map__33393__$2,map__33391__$2,G__33390__$2,validate__6034__auto____$1,ufv____$1,meta33396));
});})(map__33393,map__33393__$1,props__$1,map__33394,map__33394__$1,table_state__$1,table_data__$1,query__$1,view__$1,filter_spec__$1,owner__$2,G__33390,map__33391,map__33391__$1,props,map__33392,map__33392__$1,table_state,table_data,query,view,filter_spec,owner,validate__6034__auto__,ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
}
return (new clustermap.components.ranges_chart.t33395(input_schema33326_33447,query__$1,G__33330,output_checker33328_33449,owner__$2,input_checker33327_33448,G__33329,view__$1,props__$1,output_schema33325_33446,table_data__$1,ranges_chart_component,filter_spec__$1,map__33394__$1,table_state__$1,map__33392__$1,map__33393__$1,map__33391__$1,G__33390__$1,validate__6034__auto__,ufv___33445,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33459 = output_checker33328_33449.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33459))
{var error__6036__auto___33460 = temp__4126__auto___33459;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"ranges-chart-component","ranges-chart-component",-1131596757,null),cljs.core.pr_str.call(null,error__6036__auto___33460)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33460,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33325_33446,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33445,output_schema33325_33446,input_schema33326_33447,input_checker33327_33448,output_checker33328_33449))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.components.ranges_chart.ranges_chart_component),schema.core.make_fn_schema.call(null,output_schema33325_33446,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33326_33447], null)));
clustermap.components.ranges_chart.__GT_ranges_chart_component = (function() {
var __GT_ranges_chart_component = null;
var __GT_ranges_chart_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__);
});
var __GT_ranges_chart_component__2 = (function (cursor__7850__auto__,m33324){return om.core.build.call(null,clustermap.components.ranges_chart.ranges_chart_component,cursor__7850__auto__,m33324);
});
__GT_ranges_chart_component = function(cursor__7850__auto__,m33324){
switch(arguments.length){
case 1:
return __GT_ranges_chart_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_ranges_chart_component__2.call(this,cursor__7850__auto__,m33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$1 = __GT_ranges_chart_component__1;
__GT_ranges_chart_component.cljs$core$IFn$_invoke$arity$2 = __GT_ranges_chart_component__2;
return __GT_ranges_chart_component;
})()
;
