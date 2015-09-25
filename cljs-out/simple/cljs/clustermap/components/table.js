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
clustermap.components.table.order_col = (function order_col(controls,p__28517,p__28518){var map__28532 = p__28517;var map__28532__$1 = ((cljs.core.seq_QMARK_.call(null,map__28532))?cljs.core.apply.call(null,cljs.core.hash_map,map__28532):map__28532);var table_data = map__28532__$1;var current_sort_spec = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28533 = p__28518;var map__28533__$1 = ((cljs.core.seq_QMARK_.call(null,map__28533))?cljs.core.apply.call(null,cljs.core.hash_map,map__28533):map__28533);var col = map__28533__$1;var render_fn = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28534 = current_sort_spec__$1;var G__28534__$1 = (((G__28534 == null))?null:cljs.core.keys.call(null,G__28534));var G__28534__$2 = (((G__28534__$1 == null))?null:cljs.core.first.call(null,G__28534__$1));return G__28534__$2;
})();var current_sort_dir = (function (){var G__28535 = current_sort_spec__$1;var G__28535__$1 = (((G__28535 == null))?null:current_sort_key.call(null,G__28535));var G__28535__$2 = (((G__28535__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28535__$1));return G__28535__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28536 = cljs.core._EQ_;var expr__28537 = current_sort_dir;if(cljs.core.truth_(pred__28536.call(null,"asc",expr__28537)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28532,map__28532__$1,table_data,current_sort_spec,map__28533,map__28533__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28542 = cljs.core._EQ_;var expr__28543 = current_sort_dir;if(cljs.core.truth_(pred__28542.call(null,"asc",expr__28543)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28542.call(null,"desc",expr__28543)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28532,map__28532__$1,table_data,current_sort_spec,map__28533,map__28533__$1,col,render_fn,label,sortable,key))
},((cljs.core.fn_QMARK_.call(null,label))?sablono.interpreter.interpret.call(null,label.call(null)):sablono.interpreter.interpret.call(null,label)),React.DOM.i(null)):(function (){var attrs28541 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28541))?sablono.interpreter.attributes.call(null,attrs28541):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28541)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28545,owner,opts){var map__28554 = p__28545;var map__28554__$1 = ((cljs.core.seq_QMARK_.call(null,map__28554))?cljs.core.apply.call(null,cljs.core.hash_map,map__28554):map__28554);var controls = cljs.core.get.call(null,map__28554__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28555 = cljs.core.get.call(null,map__28554__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28555__$1 = ((cljs.core.seq_QMARK_.call(null,map__28555))?cljs.core.apply.call(null,cljs.core.hash_map,map__28555):map__28555);var table_data = map__28555__$1;var count = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28556 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28556 = (function (owner,map__28554,paginate,table_data,map__28555,controls,p__28545,size,from,count,opts,meta28557){
this.owner = owner;
this.map__28554 = map__28554;
this.paginate = paginate;
this.table_data = table_data;
this.map__28555 = map__28555;
this.controls = controls;
this.p__28545 = p__28545;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28557 = meta28557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28556.cljs$lang$type = true;
clustermap.components.table.t28556.cljs$lang$ctorStr = "clustermap.components.table/t28556";
clustermap.components.table.t28556.cljs$lang$ctorPrWriter = ((function (map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28556");
});})(map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
;
clustermap.components.table.t28556.prototype.om$core$IRender$ = true;
clustermap.components.table.t28556.prototype.om$core$IRender$render$arity$1 = ((function (map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28559 = clustermap.formats.number.readable.call(null,(self__.from + (1)));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28559))?sablono.interpreter.attributes.call(null,attrs28559):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28559))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28559)], null))));
})()," to ",(function (){var attrs28560 = clustermap.formats.number.readable.call(null,(function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})());return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28560))?sablono.interpreter.attributes.call(null,attrs28560):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28560))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28560)], null))));
})()," of ",(function (){var attrs28561 = clustermap.formats.number.readable.call(null,self__.count);return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28561))?sablono.interpreter.attributes.call(null,attrs28561):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28561))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28561)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
},"Last")));
});})(map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
;
clustermap.components.table.t28556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (_28558){var self__ = this;
var _28558__$1 = this;return self__.meta28557;
});})(map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
;
clustermap.components.table.t28556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function (_28558,meta28557__$1){var self__ = this;
var _28558__$1 = this;return (new clustermap.components.table.t28556(self__.owner,self__.map__28554,self__.paginate,self__.table_data,self__.map__28555,self__.controls,self__.p__28545,self__.size,self__.from,self__.count,self__.opts,meta28557__$1));
});})(map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28556 = ((function (map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size){
return (function __GT_t28556(owner__$1,map__28554__$2,paginate__$1,table_data__$1,map__28555__$2,controls__$1,p__28545__$1,size__$1,from__$1,count__$1,opts__$1,meta28557){return (new clustermap.components.table.t28556(owner__$1,map__28554__$2,paginate__$1,table_data__$1,map__28555__$2,controls__$1,p__28545__$1,size__$1,from__$1,count__$1,opts__$1,meta28557));
});})(map__28554,map__28554__$1,controls,map__28555,map__28555__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28556(owner,map__28554__$1,paginate,table_data,map__28555__$1,controls,p__28545,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28562){var map__28575 = p__28562;var map__28575__$1 = ((cljs.core.seq_QMARK_.call(null,map__28575))?cljs.core.apply.call(null,cljs.core.hash_map,map__28575):map__28575);var record = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28576 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28576 = (function (columns,record,map__28575,p__28562,render_table_row,meta28577){
this.columns = columns;
this.record = record;
this.map__28575 = map__28575;
this.p__28562 = p__28562;
this.render_table_row = render_table_row;
this.meta28577 = meta28577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28576.cljs$lang$type = true;
clustermap.components.table.t28576.cljs$lang$ctorStr = "clustermap.components.table/t28576";
clustermap.components.table.t28576.cljs$lang$ctorPrWriter = ((function (map__28575,map__28575__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28576");
});})(map__28575,map__28575__$1,record,columns))
;
clustermap.components.table.t28576.prototype.om$core$IRender$ = true;
clustermap.components.table.t28576.prototype.om$core$IRender$render$arity$1 = ((function (map__28575,map__28575__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28575,map__28575__$1,record,columns){
return (function iter__28579(s__28580){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28575,map__28575__$1,record,columns){
return (function (){var s__28580__$1 = s__28580;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28580__$1);if(temp__4126__auto__)
{var s__28580__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28580__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28580__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28582 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28581 = (0);while(true){
if((i__28581 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28581);cljs.core.chunk_append.call(null,b__28582,(function (){var map__28585 = col;var map__28585__$1 = ((cljs.core.seq_QMARK_.call(null,map__28585))?cljs.core.apply.call(null,cljs.core.hash_map,map__28585):map__28585);var render_fn = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28585__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28587 = (i__28581 + (1));
i__28581 = G__28587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28582),iter__28579.call(null,cljs.core.chunk_rest.call(null,s__28580__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28582),null);
}
} else
{var col = cljs.core.first.call(null,s__28580__$2);return cljs.core.cons.call(null,(function (){var map__28586 = col;var map__28586__$1 = ((cljs.core.seq_QMARK_.call(null,map__28586))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);var render_fn = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28579.call(null,cljs.core.rest.call(null,s__28580__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28575,map__28575__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28575,map__28575__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28575,map__28575__$1,record,columns))
;
clustermap.components.table.t28576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28575,map__28575__$1,record,columns){
return (function (_28578){var self__ = this;
var _28578__$1 = this;return self__.meta28577;
});})(map__28575,map__28575__$1,record,columns))
;
clustermap.components.table.t28576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28575,map__28575__$1,record,columns){
return (function (_28578,meta28577__$1){var self__ = this;
var _28578__$1 = this;return (new clustermap.components.table.t28576(self__.columns,self__.record,self__.map__28575,self__.p__28562,self__.render_table_row,meta28577__$1));
});})(map__28575,map__28575__$1,record,columns))
;
clustermap.components.table.__GT_t28576 = ((function (map__28575,map__28575__$1,record,columns){
return (function __GT_t28576(columns__$1,record__$1,map__28575__$2,p__28562__$1,render_table_row__$1,meta28577){return (new clustermap.components.table.t28576(columns__$1,record__$1,map__28575__$2,p__28562__$1,render_table_row__$1,meta28577));
});})(map__28575,map__28575__$1,record,columns))
;
}
return (new clustermap.components.table.t28576(columns,record,map__28575__$1,p__28562,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28588,owner,opts){var map__28604 = p__28588;var map__28604__$1 = ((cljs.core.seq_QMARK_.call(null,map__28604))?cljs.core.apply.call(null,cljs.core.hash_map,map__28604):map__28604);var props = map__28604__$1;var table_data = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28605 = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28605__$1 = ((cljs.core.seq_QMARK_.call(null,map__28605))?cljs.core.apply.call(null,cljs.core.hash_map,map__28605):map__28605);var controls = map__28605__$1;var columns = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28606 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28606))?sablono.interpreter.attributes.call(null,attrs28606):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28606))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28607 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view){
return (function iter__28611(s__28612){return (new cljs.core.LazySeq(null,((function (attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view){
return (function (){var s__28612__$1 = s__28612;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28612__$1);if(temp__4126__auto__)
{var s__28612__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28612__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28612__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28614 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28613 = (0);while(true){
if((i__28613 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28613);cljs.core.chunk_append.call(null,b__28614,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28619 = (i__28613 + (1));
i__28613 = G__28619;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28614),iter__28611.call(null,cljs.core.chunk_rest.call(null,s__28612__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28614),null);
}
} else
{var col = cljs.core.first.call(null,s__28612__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28611.call(null,cljs.core.rest.call(null,s__28612__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28607))?sablono.interpreter.attributes.call(null,attrs28607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28607)], null))));
})(),(function (){var attrs28608 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28608))?sablono.interpreter.attributes.call(null,attrs28608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28608))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28608)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28606),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28609 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view){
return (function iter__28615(s__28616){return (new cljs.core.LazySeq(null,((function (attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view){
return (function (){var s__28616__$1 = s__28616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28616__$1);if(temp__4126__auto__)
{var s__28616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28616__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28616__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28618 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28617 = (0);while(true){
if((i__28617 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28617);cljs.core.chunk_append.call(null,b__28618,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28620 = (i__28617 + (1));
i__28617 = G__28620;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28618),iter__28615.call(null,cljs.core.chunk_rest.call(null,s__28616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28618),null);
}
} else
{var col = cljs.core.first.call(null,s__28616__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28615.call(null,cljs.core.rest.call(null,s__28616__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28609))?sablono.interpreter.attributes.call(null,attrs28609):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28609))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28609)], null))));
})(),(function (){var attrs28610 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28606,map__28604,map__28604__$1,props,table_data,map__28605,map__28605__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28610))?sablono.interpreter.attributes.call(null,attrs28610):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28610))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28610)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28621,owner){var map__28660 = p__28621;var map__28660__$1 = ((cljs.core.seq_QMARK_.call(null,map__28660))?cljs.core.apply.call(null,cljs.core.hash_map,map__28660):map__28660);var props = map__28660__$1;var map__28661 = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28661__$1 = ((cljs.core.seq_QMARK_.call(null,map__28661))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);var table_state = map__28661__$1;var table_data = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28662 = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28662__$1 = ((cljs.core.seq_QMARK_.call(null,map__28662))?cljs.core.apply.call(null,cljs.core.hash_map,map__28662):map__28662);var controls = map__28662__$1;var index = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28662__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28663 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28663 = (function (sort_spec,table_component,owner,props,table_data,index,p__28621,map__28662,map__28661,filter_spec,columns,table_state,map__28660,controls,size,from,meta28664){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.table_data = table_data;
this.index = index;
this.p__28621 = p__28621;
this.map__28662 = map__28662;
this.map__28661 = map__28661;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__28660 = map__28660;
this.controls = controls;
this.size = size;
this.from = from;
this.meta28664 = meta28664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28663.cljs$lang$type = true;
clustermap.components.table.t28663.cljs$lang$ctorStr = "clustermap.components.table/t28663";
clustermap.components.table.t28663.cljs$lang$ctorPrWriter = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28663");
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28663.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28663.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28666,p__28667){var self__ = this;
var map__28668 = p__28666;var map__28668__$1 = ((cljs.core.seq_QMARK_.call(null,map__28668))?cljs.core.apply.call(null,cljs.core.hash_map,map__28668):map__28668);var next_props = map__28668__$1;var map__28669 = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28669__$1 = ((cljs.core.seq_QMARK_.call(null,map__28669))?cljs.core.apply.call(null,cljs.core.hash_map,map__28669):map__28669);var next_table_state = map__28669__$1;var next_table_data = cljs.core.get.call(null,map__28669__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28670 = cljs.core.get.call(null,map__28669__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28670__$1 = ((cljs.core.seq_QMARK_.call(null,map__28670))?cljs.core.apply.call(null,cljs.core.hash_map,map__28670):map__28670);var next_controls = map__28670__$1;var next_index = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28670__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28671 = p__28667;var map__28671__$1 = ((cljs.core.seq_QMARK_.call(null,map__28671))?cljs.core.apply.call(null,cljs.core.hash_map,map__28671):map__28671);var fetch_table_data_fn = cljs.core.get.call(null,map__28671__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28668,map__28668__$1,next_props,map__28669,map__28669__$1,next_table_state,next_table_data,map__28670,map__28670__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28671,map__28671__$1,fetch_table_data_fn,map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28668,map__28668__$1,next_props,map__28669,map__28669__$1,next_table_state,next_table_data,map__28670,map__28670__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28671,map__28671__$1,fetch_table_data_fn,map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28684){var state_val_28685 = (state_28684[(1)]);if((state_val_28685 === (5)))
{var inst_28682 = (state_28684[(2)]);var state_28684__$1 = state_28684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28684__$1,inst_28682);
} else
{if((state_val_28685 === (4)))
{var state_28684__$1 = state_28684;var statearr_28686_28698 = state_28684__$1;(statearr_28686_28698[(2)] = null);
(statearr_28686_28698[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28685 === (3)))
{var inst_28674 = (state_28684[(7)]);var inst_28676 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28677 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28678 = (new cljs.core.PersistentVector(null,1,(5),inst_28676,inst_28677,null));var inst_28679 = om.core.update_BANG_.call(null,self__.table_state,inst_28678,inst_28674);var state_28684__$1 = state_28684;var statearr_28687_28699 = state_28684__$1;(statearr_28687_28699[(2)] = inst_28679);
(statearr_28687_28699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28685 === (2)))
{var inst_28674 = (state_28684[(7)]);var inst_28674__$1 = (state_28684[(2)]);var state_28684__$1 = (function (){var statearr_28688 = state_28684;(statearr_28688[(7)] = inst_28674__$1);
return statearr_28688;
})();if(cljs.core.truth_(inst_28674__$1))
{var statearr_28689_28700 = state_28684__$1;(statearr_28689_28700[(1)] = (3));
} else
{var statearr_28690_28701 = state_28684__$1;(statearr_28690_28701[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28685 === (1)))
{var inst_28672 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28684__$1 = state_28684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28684__$1,(2),inst_28672);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28668,map__28668__$1,next_props,map__28669,map__28669__$1,next_table_state,next_table_data,map__28670,map__28670__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28671,map__28671__$1,fetch_table_data_fn,map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28668,map__28668__$1,next_props,map__28669,map__28669__$1,next_table_state,next_table_data,map__28670,map__28670__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28671,map__28671__$1,fetch_table_data_fn,map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28694 = [null,null,null,null,null,null,null,null];(statearr_28694[(0)] = state_machine__9111__auto__);
(statearr_28694[(1)] = (1));
return statearr_28694;
});
var state_machine__9111__auto____1 = (function (state_28684){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28684);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28695){if((e28695 instanceof Object))
{var ex__9114__auto__ = e28695;var statearr_28696_28702 = state_28684;(statearr_28696_28702[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28703 = state_28684;
state_28684 = G__28703;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28684){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28668,map__28668__$1,next_props,map__28669,map__28669__$1,next_table_state,next_table_data,map__28670,map__28670__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28671,map__28671__$1,fetch_table_data_fn,map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28697 = f__9126__auto__.call(null);(statearr_28697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28668,map__28668__$1,next_props,map__28669,map__28669__$1,next_table_state,next_table_data,map__28670,map__28670__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28671,map__28671__$1,fetch_table_data_fn,map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28663.prototype.om$core$IRender$ = true;
clustermap.components.table.t28663.prototype.om$core$IRender$render$arity$1 = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28663.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28663.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28665){var self__ = this;
var _28665__$1 = this;return self__.meta28664;
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28665,meta28664__$1){var self__ = this;
var _28665__$1 = this;return (new clustermap.components.table.t28663(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.table_data,self__.index,self__.p__28621,self__.map__28662,self__.map__28661,self__.filter_spec,self__.columns,self__.table_state,self__.map__28660,self__.controls,self__.size,self__.from,meta28664__$1));
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28663 = ((function (map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28663(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,p__28621__$1,map__28662__$2,map__28661__$2,filter_spec__$1,columns__$1,table_state__$1,map__28660__$2,controls__$1,size__$1,from__$1,meta28664){return (new clustermap.components.table.t28663(sort_spec__$1,table_component__$1,owner__$1,props__$1,table_data__$1,index__$1,p__28621__$1,map__28662__$2,map__28661__$2,filter_spec__$1,columns__$1,table_state__$1,map__28660__$2,controls__$1,size__$1,from__$1,meta28664));
});})(map__28660,map__28660__$1,props,map__28661,map__28661__$1,table_state,table_data,map__28662,map__28662__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28663(sort_spec,table_component,owner,props,table_data,index,p__28621,map__28662__$1,map__28661__$1,filter_spec,columns,table_state,map__28660__$1,controls,size,from,null));
});
