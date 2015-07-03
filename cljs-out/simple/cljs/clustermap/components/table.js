// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(controls,p__28451,p__28452){var map__28466 = p__28451;var map__28466__$1 = ((cljs.core.seq_QMARK_.call(null,map__28466))?cljs.core.apply.call(null,cljs.core.hash_map,map__28466):map__28466);var table_data = map__28466__$1;var current_sort_spec = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28467 = p__28452;var map__28467__$1 = ((cljs.core.seq_QMARK_.call(null,map__28467))?cljs.core.apply.call(null,cljs.core.hash_map,map__28467):map__28467);var col = map__28467__$1;var render_fn = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28467__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28468 = current_sort_spec__$1;var G__28468__$1 = (((G__28468 == null))?null:cljs.core.keys.call(null,G__28468));var G__28468__$2 = (((G__28468__$1 == null))?null:cljs.core.first.call(null,G__28468__$1));return G__28468__$2;
})();var current_sort_dir = (function (){var G__28469 = current_sort_spec__$1;var G__28469__$1 = (((G__28469 == null))?null:current_sort_key.call(null,G__28469));var G__28469__$2 = (((G__28469__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28469__$1));return G__28469__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28470 = cljs.core._EQ_;var expr__28471 = current_sort_dir;if(cljs.core.truth_(pred__28470.call(null,"asc",expr__28471)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28466,map__28466__$1,table_data,current_sort_spec,map__28467,map__28467__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28476 = cljs.core._EQ_;var expr__28477 = current_sort_dir;if(cljs.core.truth_(pred__28476.call(null,"asc",expr__28477)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28476.call(null,"desc",expr__28477)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3639__auto__ = current_sort_dir;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"desc","desc",2093485764);
}
})()], null)], true, false));
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28466,map__28466__$1,table_data,current_sort_spec,map__28467,map__28467__$1,col,render_fn,label,sortable,key))
},((cljs.core.fn_QMARK_.call(null,label))?sablono.interpreter.interpret.call(null,label.call(null)):sablono.interpreter.interpret.call(null,label)),React.DOM.i(null)):(function (){var attrs28475 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28475))?sablono.interpreter.attributes.call(null,attrs28475):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28475))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28475)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28479,owner,opts){var map__28488 = p__28479;var map__28488__$1 = ((cljs.core.seq_QMARK_.call(null,map__28488))?cljs.core.apply.call(null,cljs.core.hash_map,map__28488):map__28488);var controls = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28489 = cljs.core.get.call(null,map__28488__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28489__$1 = ((cljs.core.seq_QMARK_.call(null,map__28489))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);var table_data = map__28489__$1;var count = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28490 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28490 = (function (p__28479,map__28489,owner,paginate,table_data,controls,size,map__28488,from,count,opts,meta28491){
this.p__28479 = p__28479;
this.map__28489 = map__28489;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__28488 = map__28488;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28491 = meta28491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28490.cljs$lang$type = true;
clustermap.components.table.t28490.cljs$lang$ctorStr = "clustermap.components.table/t28490";
clustermap.components.table.t28490.cljs$lang$ctorPrWriter = ((function (map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28490");
});})(map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
;
clustermap.components.table.t28490.prototype.om$core$IRender$ = true;
clustermap.components.table.t28490.prototype.om$core$IRender$render$arity$1 = ((function (map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28493 = clustermap.formats.number.readable.call(null,(self__.from + (1)));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28493))?sablono.interpreter.attributes.call(null,attrs28493):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28493)], null))));
})()," to ",(function (){var attrs28494 = clustermap.formats.number.readable.call(null,(function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})());return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28494))?sablono.interpreter.attributes.call(null,attrs28494):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28494))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28494)], null))));
})()," of ",(function (){var attrs28495 = clustermap.formats.number.readable.call(null,self__.count);return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28495))?sablono.interpreter.attributes.call(null,attrs28495):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28495))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28495)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
},"Last")));
});})(map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
;
clustermap.components.table.t28490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (_28492){var self__ = this;
var _28492__$1 = this;return self__.meta28491;
});})(map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
;
clustermap.components.table.t28490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function (_28492,meta28491__$1){var self__ = this;
var _28492__$1 = this;return (new clustermap.components.table.t28490(self__.p__28479,self__.map__28489,self__.owner,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__28488,self__.from,self__.count,self__.opts,meta28491__$1));
});})(map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28490 = ((function (map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size){
return (function __GT_t28490(p__28479__$1,map__28489__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__28488__$2,from__$1,count__$1,opts__$1,meta28491){return (new clustermap.components.table.t28490(p__28479__$1,map__28489__$2,owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__28488__$2,from__$1,count__$1,opts__$1,meta28491));
});})(map__28488,map__28488__$1,controls,map__28489,map__28489__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28490(p__28479,map__28489__$1,owner,paginate,table_data,controls,size,map__28488__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28496){var map__28509 = p__28496;var map__28509__$1 = ((cljs.core.seq_QMARK_.call(null,map__28509))?cljs.core.apply.call(null,cljs.core.hash_map,map__28509):map__28509);var record = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28509__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28510 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28510 = (function (columns,record,map__28509,p__28496,render_table_row,meta28511){
this.columns = columns;
this.record = record;
this.map__28509 = map__28509;
this.p__28496 = p__28496;
this.render_table_row = render_table_row;
this.meta28511 = meta28511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28510.cljs$lang$type = true;
clustermap.components.table.t28510.cljs$lang$ctorStr = "clustermap.components.table/t28510";
clustermap.components.table.t28510.cljs$lang$ctorPrWriter = ((function (map__28509,map__28509__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28510");
});})(map__28509,map__28509__$1,record,columns))
;
clustermap.components.table.t28510.prototype.om$core$IRender$ = true;
clustermap.components.table.t28510.prototype.om$core$IRender$render$arity$1 = ((function (map__28509,map__28509__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28509,map__28509__$1,record,columns){
return (function iter__28513(s__28514){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28509,map__28509__$1,record,columns){
return (function (){var s__28514__$1 = s__28514;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28514__$1);if(temp__4126__auto__)
{var s__28514__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28514__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28514__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28516 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28515 = (0);while(true){
if((i__28515 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28515);cljs.core.chunk_append.call(null,b__28516,(function (){var map__28519 = col;var map__28519__$1 = ((cljs.core.seq_QMARK_.call(null,map__28519))?cljs.core.apply.call(null,cljs.core.hash_map,map__28519):map__28519);var render_fn = cljs.core.get.call(null,map__28519__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28519__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28519__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28519__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28521 = (i__28515 + (1));
i__28515 = G__28521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28516),iter__28513.call(null,cljs.core.chunk_rest.call(null,s__28514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28516),null);
}
} else
{var col = cljs.core.first.call(null,s__28514__$2);return cljs.core.cons.call(null,(function (){var map__28520 = col;var map__28520__$1 = ((cljs.core.seq_QMARK_.call(null,map__28520))?cljs.core.apply.call(null,cljs.core.hash_map,map__28520):map__28520);var render_fn = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28513.call(null,cljs.core.rest.call(null,s__28514__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28509,map__28509__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28509,map__28509__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28509,map__28509__$1,record,columns))
;
clustermap.components.table.t28510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28509,map__28509__$1,record,columns){
return (function (_28512){var self__ = this;
var _28512__$1 = this;return self__.meta28511;
});})(map__28509,map__28509__$1,record,columns))
;
clustermap.components.table.t28510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28509,map__28509__$1,record,columns){
return (function (_28512,meta28511__$1){var self__ = this;
var _28512__$1 = this;return (new clustermap.components.table.t28510(self__.columns,self__.record,self__.map__28509,self__.p__28496,self__.render_table_row,meta28511__$1));
});})(map__28509,map__28509__$1,record,columns))
;
clustermap.components.table.__GT_t28510 = ((function (map__28509,map__28509__$1,record,columns){
return (function __GT_t28510(columns__$1,record__$1,map__28509__$2,p__28496__$1,render_table_row__$1,meta28511){return (new clustermap.components.table.t28510(columns__$1,record__$1,map__28509__$2,p__28496__$1,render_table_row__$1,meta28511));
});})(map__28509,map__28509__$1,record,columns))
;
}
return (new clustermap.components.table.t28510(columns,record,map__28509__$1,p__28496,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28522,owner,opts){var map__28538 = p__28522;var map__28538__$1 = ((cljs.core.seq_QMARK_.call(null,map__28538))?cljs.core.apply.call(null,cljs.core.hash_map,map__28538):map__28538);var props = map__28538__$1;var table_data = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28539 = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28539__$1 = ((cljs.core.seq_QMARK_.call(null,map__28539))?cljs.core.apply.call(null,cljs.core.hash_map,map__28539):map__28539);var controls = map__28539__$1;var columns = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28539__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28540 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28540))?sablono.interpreter.attributes.call(null,attrs28540):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28540))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28541 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view){
return (function iter__28545(s__28546){return (new cljs.core.LazySeq(null,((function (attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view){
return (function (){var s__28546__$1 = s__28546;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28546__$1);if(temp__4126__auto__)
{var s__28546__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28546__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28546__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28548 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28547 = (0);while(true){
if((i__28547 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28547);cljs.core.chunk_append.call(null,b__28548,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28553 = (i__28547 + (1));
i__28547 = G__28553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28548),iter__28545.call(null,cljs.core.chunk_rest.call(null,s__28546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28548),null);
}
} else
{var col = cljs.core.first.call(null,s__28546__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28545.call(null,cljs.core.rest.call(null,s__28546__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28541))?sablono.interpreter.attributes.call(null,attrs28541):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28541)], null))));
})(),(function (){var attrs28542 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28542))?sablono.interpreter.attributes.call(null,attrs28542):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28542))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28542)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28540),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28543 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view){
return (function iter__28549(s__28550){return (new cljs.core.LazySeq(null,((function (attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view){
return (function (){var s__28550__$1 = s__28550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28550__$1);if(temp__4126__auto__)
{var s__28550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28550__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28550__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28552 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28551 = (0);while(true){
if((i__28551 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28551);cljs.core.chunk_append.call(null,b__28552,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28554 = (i__28551 + (1));
i__28551 = G__28554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28552),iter__28549.call(null,cljs.core.chunk_rest.call(null,s__28550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28552),null);
}
} else
{var col = cljs.core.first.call(null,s__28550__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28549.call(null,cljs.core.rest.call(null,s__28550__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28543))?sablono.interpreter.attributes.call(null,attrs28543):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28543)], null))));
})(),(function (){var attrs28544 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28540,map__28538,map__28538__$1,props,table_data,map__28539,map__28539__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28544))?sablono.interpreter.attributes.call(null,attrs28544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28544)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28555,owner){var map__28594 = p__28555;var map__28594__$1 = ((cljs.core.seq_QMARK_.call(null,map__28594))?cljs.core.apply.call(null,cljs.core.hash_map,map__28594):map__28594);var props = map__28594__$1;var map__28595 = cljs.core.get.call(null,map__28594__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28595__$1 = ((cljs.core.seq_QMARK_.call(null,map__28595))?cljs.core.apply.call(null,cljs.core.hash_map,map__28595):map__28595);var table_state = map__28595__$1;var table_data = cljs.core.get.call(null,map__28595__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28596 = cljs.core.get.call(null,map__28595__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28596__$1 = ((cljs.core.seq_QMARK_.call(null,map__28596))?cljs.core.apply.call(null,cljs.core.hash_map,map__28596):map__28596);var controls = map__28596__$1;var index = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28594__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28597 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28597 = (function (sort_spec,map__28594,table_component,owner,props,p__28555,table_data,index,filter_spec,map__28596,columns,table_state,controls,size,map__28595,from,meta28598){
this.sort_spec = sort_spec;
this.map__28594 = map__28594;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.p__28555 = p__28555;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.map__28596 = map__28596;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28595 = map__28595;
this.from = from;
this.meta28598 = meta28598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28597.cljs$lang$type = true;
clustermap.components.table.t28597.cljs$lang$ctorStr = "clustermap.components.table/t28597";
clustermap.components.table.t28597.cljs$lang$ctorPrWriter = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28597");
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28597.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28597.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28600,p__28601){var self__ = this;
var map__28602 = p__28600;var map__28602__$1 = ((cljs.core.seq_QMARK_.call(null,map__28602))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);var next_props = map__28602__$1;var map__28603 = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28603__$1 = ((cljs.core.seq_QMARK_.call(null,map__28603))?cljs.core.apply.call(null,cljs.core.hash_map,map__28603):map__28603);var next_table_state = map__28603__$1;var next_table_data = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28604 = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28604__$1 = ((cljs.core.seq_QMARK_.call(null,map__28604))?cljs.core.apply.call(null,cljs.core.hash_map,map__28604):map__28604);var next_controls = map__28604__$1;var next_index = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28605 = p__28601;var map__28605__$1 = ((cljs.core.seq_QMARK_.call(null,map__28605))?cljs.core.apply.call(null,cljs.core.hash_map,map__28605):map__28605);var fetch_table_data_fn = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28602,map__28602__$1,next_props,map__28603,map__28603__$1,next_table_state,next_table_data,map__28604,map__28604__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28605,map__28605__$1,fetch_table_data_fn,map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28602,map__28602__$1,next_props,map__28603,map__28603__$1,next_table_state,next_table_data,map__28604,map__28604__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28605,map__28605__$1,fetch_table_data_fn,map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28618){var state_val_28619 = (state_28618[(1)]);if((state_val_28619 === (5)))
{var inst_28616 = (state_28618[(2)]);var state_28618__$1 = state_28618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28618__$1,inst_28616);
} else
{if((state_val_28619 === (4)))
{var state_28618__$1 = state_28618;var statearr_28620_28632 = state_28618__$1;(statearr_28620_28632[(2)] = null);
(statearr_28620_28632[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28619 === (3)))
{var inst_28608 = (state_28618[(7)]);var inst_28610 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28611 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28612 = (new cljs.core.PersistentVector(null,1,(5),inst_28610,inst_28611,null));var inst_28613 = om.core.update_BANG_.call(null,self__.table_state,inst_28612,inst_28608);var state_28618__$1 = state_28618;var statearr_28621_28633 = state_28618__$1;(statearr_28621_28633[(2)] = inst_28613);
(statearr_28621_28633[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28619 === (2)))
{var inst_28608 = (state_28618[(7)]);var inst_28608__$1 = (state_28618[(2)]);var state_28618__$1 = (function (){var statearr_28622 = state_28618;(statearr_28622[(7)] = inst_28608__$1);
return statearr_28622;
})();if(cljs.core.truth_(inst_28608__$1))
{var statearr_28623_28634 = state_28618__$1;(statearr_28623_28634[(1)] = (3));
} else
{var statearr_28624_28635 = state_28618__$1;(statearr_28624_28635[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28619 === (1)))
{var inst_28606 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28618__$1 = state_28618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(2),inst_28606);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28602,map__28602__$1,next_props,map__28603,map__28603__$1,next_table_state,next_table_data,map__28604,map__28604__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28605,map__28605__$1,fetch_table_data_fn,map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28602,map__28602__$1,next_props,map__28603,map__28603__$1,next_table_state,next_table_data,map__28604,map__28604__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28605,map__28605__$1,fetch_table_data_fn,map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28628 = [null,null,null,null,null,null,null,null];(statearr_28628[(0)] = state_machine__9111__auto__);
(statearr_28628[(1)] = (1));
return statearr_28628;
});
var state_machine__9111__auto____1 = (function (state_28618){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28618);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28629){if((e28629 instanceof Object))
{var ex__9114__auto__ = e28629;var statearr_28630_28636 = state_28618;(statearr_28630_28636[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28618);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28629;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28637 = state_28618;
state_28618 = G__28637;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28618){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28602,map__28602__$1,next_props,map__28603,map__28603__$1,next_table_state,next_table_data,map__28604,map__28604__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28605,map__28605__$1,fetch_table_data_fn,map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28631 = f__9126__auto__.call(null);(statearr_28631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28602,map__28602__$1,next_props,map__28603,map__28603__$1,next_table_state,next_table_data,map__28604,map__28604__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28605,map__28605__$1,fetch_table_data_fn,map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28597.prototype.om$core$IRender$ = true;
clustermap.components.table.t28597.prototype.om$core$IRender$render$arity$1 = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28597.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28597.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28599){var self__ = this;
var _28599__$1 = this;return self__.meta28598;
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28599,meta28598__$1){var self__ = this;
var _28599__$1 = this;return (new clustermap.components.table.t28597(self__.sort_spec,self__.map__28594,self__.table_component,self__.owner,self__.props,self__.p__28555,self__.table_data,self__.index,self__.filter_spec,self__.map__28596,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__28595,self__.from,meta28598__$1));
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28597 = ((function (map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28597(sort_spec__$1,map__28594__$2,table_component__$1,owner__$1,props__$1,p__28555__$1,table_data__$1,index__$1,filter_spec__$1,map__28596__$2,columns__$1,table_state__$1,controls__$1,size__$1,map__28595__$2,from__$1,meta28598){return (new clustermap.components.table.t28597(sort_spec__$1,map__28594__$2,table_component__$1,owner__$1,props__$1,p__28555__$1,table_data__$1,index__$1,filter_spec__$1,map__28596__$2,columns__$1,table_state__$1,controls__$1,size__$1,map__28595__$2,from__$1,meta28598));
});})(map__28594,map__28594__$1,props,map__28595,map__28595__$1,table_state,table_data,map__28596,map__28596__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28597(sort_spec,map__28594__$1,table_component,owner,props,p__28555,table_data,index,filter_spec,map__28596__$1,columns,table_state,controls,size,map__28595__$1,from,null));
});
