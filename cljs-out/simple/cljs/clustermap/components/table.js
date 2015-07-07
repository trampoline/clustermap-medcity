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
clustermap.components.table.order_col = (function order_col(controls,p__28508,p__28509){var map__28523 = p__28508;var map__28523__$1 = ((cljs.core.seq_QMARK_.call(null,map__28523))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523):map__28523);var table_data = map__28523__$1;var current_sort_spec = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28524 = p__28509;var map__28524__$1 = ((cljs.core.seq_QMARK_.call(null,map__28524))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);var col = map__28524__$1;var render_fn = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28525 = current_sort_spec__$1;var G__28525__$1 = (((G__28525 == null))?null:cljs.core.keys.call(null,G__28525));var G__28525__$2 = (((G__28525__$1 == null))?null:cljs.core.first.call(null,G__28525__$1));return G__28525__$2;
})();var current_sort_dir = (function (){var G__28526 = current_sort_spec__$1;var G__28526__$1 = (((G__28526 == null))?null:current_sort_key.call(null,G__28526));var G__28526__$2 = (((G__28526__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28526__$1));return G__28526__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28527 = cljs.core._EQ_;var expr__28528 = current_sort_dir;if(cljs.core.truth_(pred__28527.call(null,"asc",expr__28528)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28523,map__28523__$1,table_data,current_sort_spec,map__28524,map__28524__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28533 = cljs.core._EQ_;var expr__28534 = current_sort_dir;if(cljs.core.truth_(pred__28533.call(null,"asc",expr__28534)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28533.call(null,"desc",expr__28534)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28523,map__28523__$1,table_data,current_sort_spec,map__28524,map__28524__$1,col,render_fn,label,sortable,key))
},((cljs.core.fn_QMARK_.call(null,label))?sablono.interpreter.interpret.call(null,label.call(null)):sablono.interpreter.interpret.call(null,label)),React.DOM.i(null)):(function (){var attrs28532 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28532))?sablono.interpreter.attributes.call(null,attrs28532):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28532))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28532)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28536,owner,opts){var map__28545 = p__28536;var map__28545__$1 = ((cljs.core.seq_QMARK_.call(null,map__28545))?cljs.core.apply.call(null,cljs.core.hash_map,map__28545):map__28545);var controls = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28546 = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28546__$1 = ((cljs.core.seq_QMARK_.call(null,map__28546))?cljs.core.apply.call(null,cljs.core.hash_map,map__28546):map__28546);var table_data = map__28546__$1;var count = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28547 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28547 = (function (owner,map__28545,paginate,table_data,p__28536,controls,map__28546,size,from,count,opts,meta28548){
this.owner = owner;
this.map__28545 = map__28545;
this.paginate = paginate;
this.table_data = table_data;
this.p__28536 = p__28536;
this.controls = controls;
this.map__28546 = map__28546;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28548 = meta28548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28547.cljs$lang$type = true;
clustermap.components.table.t28547.cljs$lang$ctorStr = "clustermap.components.table/t28547";
clustermap.components.table.t28547.cljs$lang$ctorPrWriter = ((function (map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28547");
});})(map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
;
clustermap.components.table.t28547.prototype.om$core$IRender$ = true;
clustermap.components.table.t28547.prototype.om$core$IRender$render$arity$1 = ((function (map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28550 = clustermap.formats.number.readable.call(null,(self__.from + (1)));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28550))?sablono.interpreter.attributes.call(null,attrs28550):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28550))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28550)], null))));
})()," to ",(function (){var attrs28551 = clustermap.formats.number.readable.call(null,(function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})());return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28551))?sablono.interpreter.attributes.call(null,attrs28551):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28551))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28551)], null))));
})()," of ",(function (){var attrs28552 = clustermap.formats.number.readable.call(null,self__.count);return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28552))?sablono.interpreter.attributes.call(null,attrs28552):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28552))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28552)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
},"Last")));
});})(map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
;
clustermap.components.table.t28547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (_28549){var self__ = this;
var _28549__$1 = this;return self__.meta28548;
});})(map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
;
clustermap.components.table.t28547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function (_28549,meta28548__$1){var self__ = this;
var _28549__$1 = this;return (new clustermap.components.table.t28547(self__.owner,self__.map__28545,self__.paginate,self__.table_data,self__.p__28536,self__.controls,self__.map__28546,self__.size,self__.from,self__.count,self__.opts,meta28548__$1));
});})(map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28547 = ((function (map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size){
return (function __GT_t28547(owner__$1,map__28545__$2,paginate__$1,table_data__$1,p__28536__$1,controls__$1,map__28546__$2,size__$1,from__$1,count__$1,opts__$1,meta28548){return (new clustermap.components.table.t28547(owner__$1,map__28545__$2,paginate__$1,table_data__$1,p__28536__$1,controls__$1,map__28546__$2,size__$1,from__$1,count__$1,opts__$1,meta28548));
});})(map__28545,map__28545__$1,controls,map__28546,map__28546__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28547(owner,map__28545__$1,paginate,table_data,p__28536,controls,map__28546__$1,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28553){var map__28566 = p__28553;var map__28566__$1 = ((cljs.core.seq_QMARK_.call(null,map__28566))?cljs.core.apply.call(null,cljs.core.hash_map,map__28566):map__28566);var record = cljs.core.get.call(null,map__28566__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28566__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28567 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28567 = (function (columns,record,map__28566,p__28553,render_table_row,meta28568){
this.columns = columns;
this.record = record;
this.map__28566 = map__28566;
this.p__28553 = p__28553;
this.render_table_row = render_table_row;
this.meta28568 = meta28568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28567.cljs$lang$type = true;
clustermap.components.table.t28567.cljs$lang$ctorStr = "clustermap.components.table/t28567";
clustermap.components.table.t28567.cljs$lang$ctorPrWriter = ((function (map__28566,map__28566__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28567");
});})(map__28566,map__28566__$1,record,columns))
;
clustermap.components.table.t28567.prototype.om$core$IRender$ = true;
clustermap.components.table.t28567.prototype.om$core$IRender$render$arity$1 = ((function (map__28566,map__28566__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28566,map__28566__$1,record,columns){
return (function iter__28570(s__28571){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28566,map__28566__$1,record,columns){
return (function (){var s__28571__$1 = s__28571;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28571__$1);if(temp__4126__auto__)
{var s__28571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28571__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28571__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28573 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28572 = (0);while(true){
if((i__28572 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28572);cljs.core.chunk_append.call(null,b__28573,(function (){var map__28576 = col;var map__28576__$1 = ((cljs.core.seq_QMARK_.call(null,map__28576))?cljs.core.apply.call(null,cljs.core.hash_map,map__28576):map__28576);var render_fn = cljs.core.get.call(null,map__28576__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28576__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28576__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28576__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28578 = (i__28572 + (1));
i__28572 = G__28578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28573),iter__28570.call(null,cljs.core.chunk_rest.call(null,s__28571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28573),null);
}
} else
{var col = cljs.core.first.call(null,s__28571__$2);return cljs.core.cons.call(null,(function (){var map__28577 = col;var map__28577__$1 = ((cljs.core.seq_QMARK_.call(null,map__28577))?cljs.core.apply.call(null,cljs.core.hash_map,map__28577):map__28577);var render_fn = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28570.call(null,cljs.core.rest.call(null,s__28571__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28566,map__28566__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28566,map__28566__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28566,map__28566__$1,record,columns))
;
clustermap.components.table.t28567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28566,map__28566__$1,record,columns){
return (function (_28569){var self__ = this;
var _28569__$1 = this;return self__.meta28568;
});})(map__28566,map__28566__$1,record,columns))
;
clustermap.components.table.t28567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28566,map__28566__$1,record,columns){
return (function (_28569,meta28568__$1){var self__ = this;
var _28569__$1 = this;return (new clustermap.components.table.t28567(self__.columns,self__.record,self__.map__28566,self__.p__28553,self__.render_table_row,meta28568__$1));
});})(map__28566,map__28566__$1,record,columns))
;
clustermap.components.table.__GT_t28567 = ((function (map__28566,map__28566__$1,record,columns){
return (function __GT_t28567(columns__$1,record__$1,map__28566__$2,p__28553__$1,render_table_row__$1,meta28568){return (new clustermap.components.table.t28567(columns__$1,record__$1,map__28566__$2,p__28553__$1,render_table_row__$1,meta28568));
});})(map__28566,map__28566__$1,record,columns))
;
}
return (new clustermap.components.table.t28567(columns,record,map__28566__$1,p__28553,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28579,owner,opts){var map__28595 = p__28579;var map__28595__$1 = ((cljs.core.seq_QMARK_.call(null,map__28595))?cljs.core.apply.call(null,cljs.core.hash_map,map__28595):map__28595);var props = map__28595__$1;var table_data = cljs.core.get.call(null,map__28595__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28596 = cljs.core.get.call(null,map__28595__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28596__$1 = ((cljs.core.seq_QMARK_.call(null,map__28596))?cljs.core.apply.call(null,cljs.core.hash_map,map__28596):map__28596);var controls = map__28596__$1;var columns = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28597 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28597))?sablono.interpreter.attributes.call(null,attrs28597):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28597))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28598 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view){
return (function iter__28602(s__28603){return (new cljs.core.LazySeq(null,((function (attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view){
return (function (){var s__28603__$1 = s__28603;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28603__$1);if(temp__4126__auto__)
{var s__28603__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28603__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28603__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28605 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28604 = (0);while(true){
if((i__28604 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28604);cljs.core.chunk_append.call(null,b__28605,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28610 = (i__28604 + (1));
i__28604 = G__28610;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28605),iter__28602.call(null,cljs.core.chunk_rest.call(null,s__28603__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28605),null);
}
} else
{var col = cljs.core.first.call(null,s__28603__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28602.call(null,cljs.core.rest.call(null,s__28603__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28598))?sablono.interpreter.attributes.call(null,attrs28598):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28598))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28598)], null))));
})(),(function (){var attrs28599 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28599))?sablono.interpreter.attributes.call(null,attrs28599):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28599)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28597),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28600 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view){
return (function iter__28606(s__28607){return (new cljs.core.LazySeq(null,((function (attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view){
return (function (){var s__28607__$1 = s__28607;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28607__$1);if(temp__4126__auto__)
{var s__28607__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28607__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28607__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28609 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28608 = (0);while(true){
if((i__28608 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28608);cljs.core.chunk_append.call(null,b__28609,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28611 = (i__28608 + (1));
i__28608 = G__28611;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28609),iter__28606.call(null,cljs.core.chunk_rest.call(null,s__28607__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28609),null);
}
} else
{var col = cljs.core.first.call(null,s__28607__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28606.call(null,cljs.core.rest.call(null,s__28607__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28600))?sablono.interpreter.attributes.call(null,attrs28600):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28600)], null))));
})(),(function (){var attrs28601 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28597,map__28595,map__28595__$1,props,table_data,map__28596,map__28596__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28601))?sablono.interpreter.attributes.call(null,attrs28601):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28601)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28612,owner){var map__28651 = p__28612;var map__28651__$1 = ((cljs.core.seq_QMARK_.call(null,map__28651))?cljs.core.apply.call(null,cljs.core.hash_map,map__28651):map__28651);var props = map__28651__$1;var map__28652 = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28652__$1 = ((cljs.core.seq_QMARK_.call(null,map__28652))?cljs.core.apply.call(null,cljs.core.hash_map,map__28652):map__28652);var table_state = map__28652__$1;var table_data = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28653 = cljs.core.get.call(null,map__28652__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28653__$1 = ((cljs.core.seq_QMARK_.call(null,map__28653))?cljs.core.apply.call(null,cljs.core.hash_map,map__28653):map__28653);var controls = map__28653__$1;var index = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28651__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28654 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28654 = (function (p__28612,sort_spec,table_component,owner,props,table_data,index,filter_spec,columns,table_state,controls,map__28652,map__28651,size,from,map__28653,meta28655){
this.p__28612 = p__28612;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__28652 = map__28652;
this.map__28651 = map__28651;
this.size = size;
this.from = from;
this.map__28653 = map__28653;
this.meta28655 = meta28655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28654.cljs$lang$type = true;
clustermap.components.table.t28654.cljs$lang$ctorStr = "clustermap.components.table/t28654";
clustermap.components.table.t28654.cljs$lang$ctorPrWriter = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28654");
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28654.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28654.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28657,p__28658){var self__ = this;
var map__28659 = p__28657;var map__28659__$1 = ((cljs.core.seq_QMARK_.call(null,map__28659))?cljs.core.apply.call(null,cljs.core.hash_map,map__28659):map__28659);var next_props = map__28659__$1;var map__28660 = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28660__$1 = ((cljs.core.seq_QMARK_.call(null,map__28660))?cljs.core.apply.call(null,cljs.core.hash_map,map__28660):map__28660);var next_table_state = map__28660__$1;var next_table_data = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28661 = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28661__$1 = ((cljs.core.seq_QMARK_.call(null,map__28661))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);var next_controls = map__28661__$1;var next_index = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28662 = p__28658;var map__28662__$1 = ((cljs.core.seq_QMARK_.call(null,map__28662))?cljs.core.apply.call(null,cljs.core.hash_map,map__28662):map__28662);var fetch_table_data_fn = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28659,map__28659__$1,next_props,map__28660,map__28660__$1,next_table_state,next_table_data,map__28661,map__28661__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28662,map__28662__$1,fetch_table_data_fn,map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28659,map__28659__$1,next_props,map__28660,map__28660__$1,next_table_state,next_table_data,map__28661,map__28661__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28662,map__28662__$1,fetch_table_data_fn,map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28675){var state_val_28676 = (state_28675[(1)]);if((state_val_28676 === (5)))
{var inst_28673 = (state_28675[(2)]);var state_28675__$1 = state_28675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28675__$1,inst_28673);
} else
{if((state_val_28676 === (4)))
{var state_28675__$1 = state_28675;var statearr_28677_28689 = state_28675__$1;(statearr_28677_28689[(2)] = null);
(statearr_28677_28689[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28676 === (3)))
{var inst_28665 = (state_28675[(7)]);var inst_28667 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28668 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28669 = (new cljs.core.PersistentVector(null,1,(5),inst_28667,inst_28668,null));var inst_28670 = om.core.update_BANG_.call(null,self__.table_state,inst_28669,inst_28665);var state_28675__$1 = state_28675;var statearr_28678_28690 = state_28675__$1;(statearr_28678_28690[(2)] = inst_28670);
(statearr_28678_28690[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28676 === (2)))
{var inst_28665 = (state_28675[(7)]);var inst_28665__$1 = (state_28675[(2)]);var state_28675__$1 = (function (){var statearr_28679 = state_28675;(statearr_28679[(7)] = inst_28665__$1);
return statearr_28679;
})();if(cljs.core.truth_(inst_28665__$1))
{var statearr_28680_28691 = state_28675__$1;(statearr_28680_28691[(1)] = (3));
} else
{var statearr_28681_28692 = state_28675__$1;(statearr_28681_28692[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28676 === (1)))
{var inst_28663 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28675__$1 = state_28675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28675__$1,(2),inst_28663);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28659,map__28659__$1,next_props,map__28660,map__28660__$1,next_table_state,next_table_data,map__28661,map__28661__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28662,map__28662__$1,fetch_table_data_fn,map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28659,map__28659__$1,next_props,map__28660,map__28660__$1,next_table_state,next_table_data,map__28661,map__28661__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28662,map__28662__$1,fetch_table_data_fn,map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28685 = [null,null,null,null,null,null,null,null];(statearr_28685[(0)] = state_machine__9111__auto__);
(statearr_28685[(1)] = (1));
return statearr_28685;
});
var state_machine__9111__auto____1 = (function (state_28675){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28675);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28686){if((e28686 instanceof Object))
{var ex__9114__auto__ = e28686;var statearr_28687_28693 = state_28675;(statearr_28687_28693[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28686;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28694 = state_28675;
state_28675 = G__28694;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28675){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28659,map__28659__$1,next_props,map__28660,map__28660__$1,next_table_state,next_table_data,map__28661,map__28661__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28662,map__28662__$1,fetch_table_data_fn,map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28688 = f__9126__auto__.call(null);(statearr_28688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28659,map__28659__$1,next_props,map__28660,map__28660__$1,next_table_state,next_table_data,map__28661,map__28661__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28662,map__28662__$1,fetch_table_data_fn,map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28654.prototype.om$core$IRender$ = true;
clustermap.components.table.t28654.prototype.om$core$IRender$render$arity$1 = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28654.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28654.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28656){var self__ = this;
var _28656__$1 = this;return self__.meta28655;
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28656,meta28655__$1){var self__ = this;
var _28656__$1 = this;return (new clustermap.components.table.t28654(self__.p__28612,self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__28652,self__.map__28651,self__.size,self__.from,self__.map__28653,meta28655__$1));
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28654 = ((function (map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28654(p__28612__$1,sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__28652__$2,map__28651__$2,size__$1,from__$1,map__28653__$2,meta28655){return (new clustermap.components.table.t28654(p__28612__$1,sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__28652__$2,map__28651__$2,size__$1,from__$1,map__28653__$2,meta28655));
});})(map__28651,map__28651__$1,props,map__28652,map__28652__$1,table_state,table_data,map__28653,map__28653__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28654(p__28612,sort_spec,table_component,owner,props,table_data,index,filter_spec,columns,table_state,controls,map__28652__$1,map__28651__$1,size,from,map__28653__$1,null));
});
