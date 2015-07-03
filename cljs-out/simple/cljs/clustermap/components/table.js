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
clustermap.components.table.order_col = (function order_col(controls,p__28448,p__28449){var map__28463 = p__28448;var map__28463__$1 = ((cljs.core.seq_QMARK_.call(null,map__28463))?cljs.core.apply.call(null,cljs.core.hash_map,map__28463):map__28463);var table_data = map__28463__$1;var current_sort_spec = cljs.core.get.call(null,map__28463__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28464 = p__28449;var map__28464__$1 = ((cljs.core.seq_QMARK_.call(null,map__28464))?cljs.core.apply.call(null,cljs.core.hash_map,map__28464):map__28464);var col = map__28464__$1;var render_fn = cljs.core.get.call(null,map__28464__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28464__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28464__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28464__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28465 = current_sort_spec__$1;var G__28465__$1 = (((G__28465 == null))?null:cljs.core.keys.call(null,G__28465));var G__28465__$2 = (((G__28465__$1 == null))?null:cljs.core.first.call(null,G__28465__$1));return G__28465__$2;
})();var current_sort_dir = (function (){var G__28466 = current_sort_spec__$1;var G__28466__$1 = (((G__28466 == null))?null:current_sort_key.call(null,G__28466));var G__28466__$2 = (((G__28466__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28466__$1));return G__28466__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28467 = cljs.core._EQ_;var expr__28468 = current_sort_dir;if(cljs.core.truth_(pred__28467.call(null,"asc",expr__28468)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28463,map__28463__$1,table_data,current_sort_spec,map__28464,map__28464__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28473 = cljs.core._EQ_;var expr__28474 = current_sort_dir;if(cljs.core.truth_(pred__28473.call(null,"asc",expr__28474)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28473.call(null,"desc",expr__28474)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28463,map__28463__$1,table_data,current_sort_spec,map__28464,map__28464__$1,col,render_fn,label,sortable,key))
},((cljs.core.fn_QMARK_.call(null,label))?sablono.interpreter.interpret.call(null,label.call(null)):sablono.interpreter.interpret.call(null,label)),React.DOM.i(null)):(function (){var attrs28472 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28472))?sablono.interpreter.attributes.call(null,attrs28472):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28472))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28472)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28476,owner,opts){var map__28485 = p__28476;var map__28485__$1 = ((cljs.core.seq_QMARK_.call(null,map__28485))?cljs.core.apply.call(null,cljs.core.hash_map,map__28485):map__28485);var controls = cljs.core.get.call(null,map__28485__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28486 = cljs.core.get.call(null,map__28485__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28486__$1 = ((cljs.core.seq_QMARK_.call(null,map__28486))?cljs.core.apply.call(null,cljs.core.hash_map,map__28486):map__28486);var table_data = map__28486__$1;var count = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28487 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28487 = (function (owner,paginate,table_data,map__28486,controls,p__28476,size,map__28485,from,count,opts,meta28488){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__28486 = map__28486;
this.controls = controls;
this.p__28476 = p__28476;
this.size = size;
this.map__28485 = map__28485;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28488 = meta28488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28487.cljs$lang$type = true;
clustermap.components.table.t28487.cljs$lang$ctorStr = "clustermap.components.table/t28487";
clustermap.components.table.t28487.cljs$lang$ctorPrWriter = ((function (map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28487");
});})(map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
;
clustermap.components.table.t28487.prototype.om$core$IRender$ = true;
clustermap.components.table.t28487.prototype.om$core$IRender$render$arity$1 = ((function (map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28490 = clustermap.formats.number.readable.call(null,(self__.from + (1)));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28490))?sablono.interpreter.attributes.call(null,attrs28490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28490)], null))));
})()," to ",(function (){var attrs28491 = clustermap.formats.number.readable.call(null,(function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})());return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28491))?sablono.interpreter.attributes.call(null,attrs28491):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28491))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28491)], null))));
})()," of ",(function (){var attrs28492 = clustermap.formats.number.readable.call(null,self__.count);return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28492))?sablono.interpreter.attributes.call(null,attrs28492):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28492))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28492)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
},"Last")));
});})(map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
;
clustermap.components.table.t28487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (_28489){var self__ = this;
var _28489__$1 = this;return self__.meta28488;
});})(map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
;
clustermap.components.table.t28487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function (_28489,meta28488__$1){var self__ = this;
var _28489__$1 = this;return (new clustermap.components.table.t28487(self__.owner,self__.paginate,self__.table_data,self__.map__28486,self__.controls,self__.p__28476,self__.size,self__.map__28485,self__.from,self__.count,self__.opts,meta28488__$1));
});})(map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28487 = ((function (map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size){
return (function __GT_t28487(owner__$1,paginate__$1,table_data__$1,map__28486__$2,controls__$1,p__28476__$1,size__$1,map__28485__$2,from__$1,count__$1,opts__$1,meta28488){return (new clustermap.components.table.t28487(owner__$1,paginate__$1,table_data__$1,map__28486__$2,controls__$1,p__28476__$1,size__$1,map__28485__$2,from__$1,count__$1,opts__$1,meta28488));
});})(map__28485,map__28485__$1,controls,map__28486,map__28486__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28487(owner,paginate,table_data,map__28486__$1,controls,p__28476,size,map__28485__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28493){var map__28506 = p__28493;var map__28506__$1 = ((cljs.core.seq_QMARK_.call(null,map__28506))?cljs.core.apply.call(null,cljs.core.hash_map,map__28506):map__28506);var record = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28506__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28507 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28507 = (function (columns,record,map__28506,p__28493,render_table_row,meta28508){
this.columns = columns;
this.record = record;
this.map__28506 = map__28506;
this.p__28493 = p__28493;
this.render_table_row = render_table_row;
this.meta28508 = meta28508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28507.cljs$lang$type = true;
clustermap.components.table.t28507.cljs$lang$ctorStr = "clustermap.components.table/t28507";
clustermap.components.table.t28507.cljs$lang$ctorPrWriter = ((function (map__28506,map__28506__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28507");
});})(map__28506,map__28506__$1,record,columns))
;
clustermap.components.table.t28507.prototype.om$core$IRender$ = true;
clustermap.components.table.t28507.prototype.om$core$IRender$render$arity$1 = ((function (map__28506,map__28506__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28506,map__28506__$1,record,columns){
return (function iter__28510(s__28511){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28506,map__28506__$1,record,columns){
return (function (){var s__28511__$1 = s__28511;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28511__$1);if(temp__4126__auto__)
{var s__28511__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28511__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28511__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28513 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28512 = (0);while(true){
if((i__28512 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28512);cljs.core.chunk_append.call(null,b__28513,(function (){var map__28516 = col;var map__28516__$1 = ((cljs.core.seq_QMARK_.call(null,map__28516))?cljs.core.apply.call(null,cljs.core.hash_map,map__28516):map__28516);var render_fn = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28518 = (i__28512 + (1));
i__28512 = G__28518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28513),iter__28510.call(null,cljs.core.chunk_rest.call(null,s__28511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28513),null);
}
} else
{var col = cljs.core.first.call(null,s__28511__$2);return cljs.core.cons.call(null,(function (){var map__28517 = col;var map__28517__$1 = ((cljs.core.seq_QMARK_.call(null,map__28517))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);var render_fn = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28510.call(null,cljs.core.rest.call(null,s__28511__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28506,map__28506__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28506,map__28506__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28506,map__28506__$1,record,columns))
;
clustermap.components.table.t28507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28506,map__28506__$1,record,columns){
return (function (_28509){var self__ = this;
var _28509__$1 = this;return self__.meta28508;
});})(map__28506,map__28506__$1,record,columns))
;
clustermap.components.table.t28507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28506,map__28506__$1,record,columns){
return (function (_28509,meta28508__$1){var self__ = this;
var _28509__$1 = this;return (new clustermap.components.table.t28507(self__.columns,self__.record,self__.map__28506,self__.p__28493,self__.render_table_row,meta28508__$1));
});})(map__28506,map__28506__$1,record,columns))
;
clustermap.components.table.__GT_t28507 = ((function (map__28506,map__28506__$1,record,columns){
return (function __GT_t28507(columns__$1,record__$1,map__28506__$2,p__28493__$1,render_table_row__$1,meta28508){return (new clustermap.components.table.t28507(columns__$1,record__$1,map__28506__$2,p__28493__$1,render_table_row__$1,meta28508));
});})(map__28506,map__28506__$1,record,columns))
;
}
return (new clustermap.components.table.t28507(columns,record,map__28506__$1,p__28493,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28519,owner,opts){var map__28535 = p__28519;var map__28535__$1 = ((cljs.core.seq_QMARK_.call(null,map__28535))?cljs.core.apply.call(null,cljs.core.hash_map,map__28535):map__28535);var props = map__28535__$1;var table_data = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28536 = cljs.core.get.call(null,map__28535__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28536__$1 = ((cljs.core.seq_QMARK_.call(null,map__28536))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);var controls = map__28536__$1;var columns = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28537 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28537))?sablono.interpreter.attributes.call(null,attrs28537):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28537))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28538 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view){
return (function iter__28542(s__28543){return (new cljs.core.LazySeq(null,((function (attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view){
return (function (){var s__28543__$1 = s__28543;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28543__$1);if(temp__4126__auto__)
{var s__28543__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28543__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28543__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28545 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28544 = (0);while(true){
if((i__28544 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28544);cljs.core.chunk_append.call(null,b__28545,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28550 = (i__28544 + (1));
i__28544 = G__28550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28545),iter__28542.call(null,cljs.core.chunk_rest.call(null,s__28543__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28545),null);
}
} else
{var col = cljs.core.first.call(null,s__28543__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28542.call(null,cljs.core.rest.call(null,s__28543__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28538))?sablono.interpreter.attributes.call(null,attrs28538):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28538))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28538)], null))));
})(),(function (){var attrs28539 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28539))?sablono.interpreter.attributes.call(null,attrs28539):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28539))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28539)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28537),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28540 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view){
return (function iter__28546(s__28547){return (new cljs.core.LazySeq(null,((function (attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view){
return (function (){var s__28547__$1 = s__28547;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28547__$1);if(temp__4126__auto__)
{var s__28547__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28547__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28547__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28549 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28548 = (0);while(true){
if((i__28548 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28548);cljs.core.chunk_append.call(null,b__28549,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28551 = (i__28548 + (1));
i__28548 = G__28551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28549),iter__28546.call(null,cljs.core.chunk_rest.call(null,s__28547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28549),null);
}
} else
{var col = cljs.core.first.call(null,s__28547__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28546.call(null,cljs.core.rest.call(null,s__28547__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28540))?sablono.interpreter.attributes.call(null,attrs28540):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28540)], null))));
})(),(function (){var attrs28541 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28537,map__28535,map__28535__$1,props,table_data,map__28536,map__28536__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28541))?sablono.interpreter.attributes.call(null,attrs28541):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28541)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28552,owner){var map__28591 = p__28552;var map__28591__$1 = ((cljs.core.seq_QMARK_.call(null,map__28591))?cljs.core.apply.call(null,cljs.core.hash_map,map__28591):map__28591);var props = map__28591__$1;var map__28592 = cljs.core.get.call(null,map__28591__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28592__$1 = ((cljs.core.seq_QMARK_.call(null,map__28592))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);var table_state = map__28592__$1;var table_data = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28593 = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28593__$1 = ((cljs.core.seq_QMARK_.call(null,map__28593))?cljs.core.apply.call(null,cljs.core.hash_map,map__28593):map__28593);var controls = map__28593__$1;var index = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28591__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28594 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28594 = (function (sort_spec,p__28552,table_component,owner,props,map__28593,map__28592,table_data,index,filter_spec,columns,table_state,controls,size,map__28591,from,meta28595){
this.sort_spec = sort_spec;
this.p__28552 = p__28552;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28593 = map__28593;
this.map__28592 = map__28592;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28591 = map__28591;
this.from = from;
this.meta28595 = meta28595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28594.cljs$lang$type = true;
clustermap.components.table.t28594.cljs$lang$ctorStr = "clustermap.components.table/t28594";
clustermap.components.table.t28594.cljs$lang$ctorPrWriter = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28594");
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28594.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28594.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28597,p__28598){var self__ = this;
var map__28599 = p__28597;var map__28599__$1 = ((cljs.core.seq_QMARK_.call(null,map__28599))?cljs.core.apply.call(null,cljs.core.hash_map,map__28599):map__28599);var next_props = map__28599__$1;var map__28600 = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28600__$1 = ((cljs.core.seq_QMARK_.call(null,map__28600))?cljs.core.apply.call(null,cljs.core.hash_map,map__28600):map__28600);var next_table_state = map__28600__$1;var next_table_data = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28601 = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28601__$1 = ((cljs.core.seq_QMARK_.call(null,map__28601))?cljs.core.apply.call(null,cljs.core.hash_map,map__28601):map__28601);var next_controls = map__28601__$1;var next_index = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28602 = p__28598;var map__28602__$1 = ((cljs.core.seq_QMARK_.call(null,map__28602))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);var fetch_table_data_fn = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28599,map__28599__$1,next_props,map__28600,map__28600__$1,next_table_state,next_table_data,map__28601,map__28601__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28602,map__28602__$1,fetch_table_data_fn,map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28599,map__28599__$1,next_props,map__28600,map__28600__$1,next_table_state,next_table_data,map__28601,map__28601__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28602,map__28602__$1,fetch_table_data_fn,map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28615){var state_val_28616 = (state_28615[(1)]);if((state_val_28616 === (5)))
{var inst_28613 = (state_28615[(2)]);var state_28615__$1 = state_28615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28615__$1,inst_28613);
} else
{if((state_val_28616 === (4)))
{var state_28615__$1 = state_28615;var statearr_28617_28629 = state_28615__$1;(statearr_28617_28629[(2)] = null);
(statearr_28617_28629[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28616 === (3)))
{var inst_28605 = (state_28615[(7)]);var inst_28607 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28608 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28609 = (new cljs.core.PersistentVector(null,1,(5),inst_28607,inst_28608,null));var inst_28610 = om.core.update_BANG_.call(null,self__.table_state,inst_28609,inst_28605);var state_28615__$1 = state_28615;var statearr_28618_28630 = state_28615__$1;(statearr_28618_28630[(2)] = inst_28610);
(statearr_28618_28630[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28616 === (2)))
{var inst_28605 = (state_28615[(7)]);var inst_28605__$1 = (state_28615[(2)]);var state_28615__$1 = (function (){var statearr_28619 = state_28615;(statearr_28619[(7)] = inst_28605__$1);
return statearr_28619;
})();if(cljs.core.truth_(inst_28605__$1))
{var statearr_28620_28631 = state_28615__$1;(statearr_28620_28631[(1)] = (3));
} else
{var statearr_28621_28632 = state_28615__$1;(statearr_28621_28632[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28616 === (1)))
{var inst_28603 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28615__$1 = state_28615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28615__$1,(2),inst_28603);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28599,map__28599__$1,next_props,map__28600,map__28600__$1,next_table_state,next_table_data,map__28601,map__28601__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28602,map__28602__$1,fetch_table_data_fn,map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28599,map__28599__$1,next_props,map__28600,map__28600__$1,next_table_state,next_table_data,map__28601,map__28601__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28602,map__28602__$1,fetch_table_data_fn,map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28625 = [null,null,null,null,null,null,null,null];(statearr_28625[(0)] = state_machine__9111__auto__);
(statearr_28625[(1)] = (1));
return statearr_28625;
});
var state_machine__9111__auto____1 = (function (state_28615){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28615);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28626){if((e28626 instanceof Object))
{var ex__9114__auto__ = e28626;var statearr_28627_28633 = state_28615;(statearr_28627_28633[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28634 = state_28615;
state_28615 = G__28634;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28615){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28599,map__28599__$1,next_props,map__28600,map__28600__$1,next_table_state,next_table_data,map__28601,map__28601__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28602,map__28602__$1,fetch_table_data_fn,map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28628 = f__9126__auto__.call(null);(statearr_28628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28599,map__28599__$1,next_props,map__28600,map__28600__$1,next_table_state,next_table_data,map__28601,map__28601__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28602,map__28602__$1,fetch_table_data_fn,map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28594.prototype.om$core$IRender$ = true;
clustermap.components.table.t28594.prototype.om$core$IRender$render$arity$1 = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28594.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28594.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28596){var self__ = this;
var _28596__$1 = this;return self__.meta28595;
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28596,meta28595__$1){var self__ = this;
var _28596__$1 = this;return (new clustermap.components.table.t28594(self__.sort_spec,self__.p__28552,self__.table_component,self__.owner,self__.props,self__.map__28593,self__.map__28592,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__28591,self__.from,meta28595__$1));
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28594 = ((function (map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28594(sort_spec__$1,p__28552__$1,table_component__$1,owner__$1,props__$1,map__28593__$2,map__28592__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28591__$2,from__$1,meta28595){return (new clustermap.components.table.t28594(sort_spec__$1,p__28552__$1,table_component__$1,owner__$1,props__$1,map__28593__$2,map__28592__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28591__$2,from__$1,meta28595));
});})(map__28591,map__28591__$1,props,map__28592,map__28592__$1,table_state,table_data,map__28593,map__28593__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28594(sort_spec,p__28552,table_component,owner,props,map__28593__$1,map__28592__$1,table_data,index,filter_spec,columns,table_state,controls,size,map__28591__$1,from,null));
});
