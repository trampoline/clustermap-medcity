// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
clustermap.components.table.order_col = (function order_col(controls,p__28233,p__28234){var map__28248 = p__28233;var map__28248__$1 = ((cljs.core.seq_QMARK_.call(null,map__28248))?cljs.core.apply.call(null,cljs.core.hash_map,map__28248):map__28248);var table_data = map__28248__$1;var current_sort_spec = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var map__28249 = p__28234;var map__28249__$1 = ((cljs.core.seq_QMARK_.call(null,map__28249))?cljs.core.apply.call(null,cljs.core.hash_map,map__28249):map__28249);var col = map__28249__$1;var render_fn = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var label = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"label","label",1718410804));var sortable = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"sortable","sortable",2109633621));var key = cljs.core.get.call(null,map__28249__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__28250 = current_sort_spec__$1;var G__28250__$1 = (((G__28250 == null))?null:cljs.core.keys.call(null,G__28250));var G__28250__$2 = (((G__28250__$1 == null))?null:cljs.core.first.call(null,G__28250__$1));return G__28250__$2;
})();var current_sort_dir = (function (){var G__28251 = current_sort_spec__$1;var G__28251__$1 = (((G__28251 == null))?null:current_sort_key.call(null,G__28251));var G__28251__$2 = (((G__28251__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__28251__$1));return G__28251__$2;
})();var sort_dir = ((cljs.core._EQ_.call(null,current_sort_key,key))?(function (){var pred__28252 = cljs.core._EQ_;var expr__28253 = current_sort_dir;if(cljs.core.truth_(pred__28252.call(null,"asc",expr__28253)))
{return "sort-asc";
} else
{return "sort-desc";
}
})():null);return React.DOM.th({"className": sort_dir},(cljs.core.truth_(sortable)?React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28248,map__28248__$1,table_data,current_sort_spec,map__28249,map__28249__$1,col,render_fn,label,sortable,key){
return (function (e){e.preventDefault();
if(cljs.core._EQ_.call(null,key,current_sort_key))
{var pred__28258 = cljs.core._EQ_;var expr__28259 = current_sort_dir;if(cljs.core.truth_(pred__28258.call(null,"asc",expr__28259)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__28258.call(null,"desc",expr__28259)))
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
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,sort_dir,map__28248,map__28248__$1,table_data,current_sort_spec,map__28249,map__28249__$1,col,render_fn,label,sortable,key))
},sablono.interpreter.interpret.call(null,label),React.DOM.i(null)):(function (){var attrs28257 = label;return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28257))?sablono.interpreter.attributes.call(null,attrs28257):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28257))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28257)], null))));
})()));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__28261,owner,opts){var map__28270 = p__28261;var map__28270__$1 = ((cljs.core.seq_QMARK_.call(null,map__28270))?cljs.core.apply.call(null,cljs.core.hash_map,map__28270):map__28270);var controls = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28271 = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28271__$1 = ((cljs.core.seq_QMARK_.call(null,map__28271))?cljs.core.apply.call(null,cljs.core.hash_map,map__28271):map__28271);var table_data = map__28271__$1;var count = cljs.core.get.call(null,map__28271__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__28271__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28271__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t28272 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28272 = (function (owner,map__28270,paginate,map__28271,table_data,controls,p__28261,size,from,count,opts,meta28273){
this.owner = owner;
this.map__28270 = map__28270;
this.paginate = paginate;
this.map__28271 = map__28271;
this.table_data = table_data;
this.controls = controls;
this.p__28261 = p__28261;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta28273 = meta28273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28272.cljs$lang$type = true;
clustermap.components.table.t28272.cljs$lang$ctorStr = "clustermap.components.table/t28272";
clustermap.components.table.t28272.cljs$lang$ctorPrWriter = ((function (map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28272");
});})(map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
;
clustermap.components.table.t28272.prototype.om$core$IRender$ = true;
clustermap.components.table.t28272.prototype.om$core$IRender$render$arity$1 = ((function (map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return React.DOM.div({"className": "table-nav"},React.DOM.div({"className": "record-count"},(function (){var attrs28275 = (self__.from + (1));return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28275))?sablono.interpreter.attributes.call(null,attrs28275):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28275))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28275)], null))));
})()," to ",(function (){var attrs28276 = (function (){var x__3953__auto__ = (self__.from + self__.size);var y__3954__auto__ = self__.count;return ((x__3953__auto__ < y__3954__auto__) ? x__3953__auto__ : y__3954__auto__);
})();return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28276))?sablono.interpreter.attributes.call(null,attrs28276):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28276))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28276)], null))));
})()," of ",(function (){var attrs28277 = self__.count;return cljs.core.apply.call(null,React.DOM.b,((cljs.core.map_QMARK_.call(null,attrs28277))?sablono.interpreter.attributes.call(null,attrs28277):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28277))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28277)], null))));
})()),React.DOM.nav(null,React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(0));
});})(this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
},"First"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3946__auto__ = (0);var y__3947__auto__ = (self__.from - self__.size);return ((x__3946__auto__ > y__3947__auto__) ? x__3946__auto__ : y__3947__auto__);
})());
});})(this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
},"Previous"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
},"Next"),React.DOM.button({"className": "btn btn-default btn-sm", "type": "button", "onClick": ((function (this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.size * cljs.core.quot.call(null,self__.count,self__.size)));
});})(this__7096__auto____$1,map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
},"Last")));
});})(map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
;
clustermap.components.table.t28272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (_28274){var self__ = this;
var _28274__$1 = this;return self__.meta28273;
});})(map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
;
clustermap.components.table.t28272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function (_28274,meta28273__$1){var self__ = this;
var _28274__$1 = this;return (new clustermap.components.table.t28272(self__.owner,self__.map__28270,self__.paginate,self__.map__28271,self__.table_data,self__.controls,self__.p__28261,self__.size,self__.from,self__.count,self__.opts,meta28273__$1));
});})(map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t28272 = ((function (map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size){
return (function __GT_t28272(owner__$1,map__28270__$2,paginate__$1,map__28271__$2,table_data__$1,controls__$1,p__28261__$1,size__$1,from__$1,count__$1,opts__$1,meta28273){return (new clustermap.components.table.t28272(owner__$1,map__28270__$2,paginate__$1,map__28271__$2,table_data__$1,controls__$1,p__28261__$1,size__$1,from__$1,count__$1,opts__$1,meta28273));
});})(map__28270,map__28270__$1,controls,map__28271,map__28271__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t28272(owner,map__28270__$1,paginate,map__28271__$1,table_data,controls,p__28261,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__28278){var map__28291 = p__28278;var map__28291__$1 = ((cljs.core.seq_QMARK_.call(null,map__28291))?cljs.core.apply.call(null,cljs.core.hash_map,map__28291):map__28291);var record = cljs.core.get.call(null,map__28291__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__28291__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t28292 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28292 = (function (columns,record,map__28291,p__28278,render_table_row,meta28293){
this.columns = columns;
this.record = record;
this.map__28291 = map__28291;
this.p__28278 = p__28278;
this.render_table_row = render_table_row;
this.meta28293 = meta28293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28292.cljs$lang$type = true;
clustermap.components.table.t28292.cljs$lang$ctorStr = "clustermap.components.table/t28292";
clustermap.components.table.t28292.cljs$lang$ctorPrWriter = ((function (map__28291,map__28291__$1,record,columns){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28292");
});})(map__28291,map__28291__$1,record,columns))
;
clustermap.components.table.t28292.prototype.om$core$IRender$ = true;
clustermap.components.table.t28292.prototype.om$core$IRender$render$arity$1 = ((function (map__28291,map__28291__$1,record,columns){
return (function (this__7096__auto__){var self__ = this;
var this__7096__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (this__7096__auto____$1,map__28291,map__28291__$1,record,columns){
return (function iter__28295(s__28296){return (new cljs.core.LazySeq(null,((function (this__7096__auto____$1,map__28291,map__28291__$1,record,columns){
return (function (){var s__28296__$1 = s__28296;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28296__$1);if(temp__4126__auto__)
{var s__28296__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28296__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28296__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28298 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28297 = (0);while(true){
if((i__28297 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28297);cljs.core.chunk_append.call(null,b__28298,(function (){var map__28301 = col;var map__28301__$1 = ((cljs.core.seq_QMARK_.call(null,map__28301))?cljs.core.apply.call(null,cljs.core.hash_map,map__28301):map__28301);var render_fn = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})());
{
var G__28303 = (i__28297 + (1));
i__28297 = G__28303;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28298),iter__28295.call(null,cljs.core.chunk_rest.call(null,s__28296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28298),null);
}
} else
{var col = cljs.core.first.call(null,s__28296__$2);return cljs.core.cons.call(null,(function (){var map__28302 = col;var map__28302__$1 = ((cljs.core.seq_QMARK_.call(null,map__28302))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);var render_fn = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));var right_align = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"right-align","right-align",-604982650));var label = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var render_fn__$1 = (function (){var or__3639__auto__ = render_fn;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(right_align)?"text-right":null)], null),render_fn__$1.call(null,cljs.core.get.call(null,self__.record,key),self__.record)], null);
})(),iter__28295.call(null,cljs.core.rest.call(null,s__28296__$2)));
}
} else
{return null;
}
break;
}
});})(this__7096__auto____$1,map__28291,map__28291__$1,record,columns))
,null,null));
});})(this__7096__auto____$1,map__28291,map__28291__$1,record,columns))
;return iter__4377__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__28291,map__28291__$1,record,columns))
;
clustermap.components.table.t28292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28291,map__28291__$1,record,columns){
return (function (_28294){var self__ = this;
var _28294__$1 = this;return self__.meta28293;
});})(map__28291,map__28291__$1,record,columns))
;
clustermap.components.table.t28292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28291,map__28291__$1,record,columns){
return (function (_28294,meta28293__$1){var self__ = this;
var _28294__$1 = this;return (new clustermap.components.table.t28292(self__.columns,self__.record,self__.map__28291,self__.p__28278,self__.render_table_row,meta28293__$1));
});})(map__28291,map__28291__$1,record,columns))
;
clustermap.components.table.__GT_t28292 = ((function (map__28291,map__28291__$1,record,columns){
return (function __GT_t28292(columns__$1,record__$1,map__28291__$2,p__28278__$1,render_table_row__$1,meta28293){return (new clustermap.components.table.t28292(columns__$1,record__$1,map__28291__$2,p__28278__$1,render_table_row__$1,meta28293));
});})(map__28291,map__28291__$1,record,columns))
;
}
return (new clustermap.components.table.t28292(columns,record,map__28291__$1,p__28278,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__28304,owner,opts){var map__28320 = p__28304;var map__28320__$1 = ((cljs.core.seq_QMARK_.call(null,map__28320))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);var props = map__28320__$1;var table_data = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28321 = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28321__$1 = ((cljs.core.seq_QMARK_.call(null,map__28321))?cljs.core.apply.call(null,cljs.core.hash_map,map__28321):map__28321);var controls = map__28321__$1;var columns = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__28321__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs28322 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs28322))?sablono.interpreter.attributes.call(null,attrs28322):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28322))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28323 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view){
return (function iter__28327(s__28328){return (new cljs.core.LazySeq(null,((function (attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view){
return (function (){var s__28328__$1 = s__28328;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28328__$1);if(temp__4126__auto__)
{var s__28328__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28328__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28328__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28330 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28329 = (0);while(true){
if((i__28329 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28329);cljs.core.chunk_append.call(null,b__28330,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28335 = (i__28329 + (1));
i__28329 = G__28335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28330),iter__28327.call(null,cljs.core.chunk_rest.call(null,s__28328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28330),null);
}
} else
{var col = cljs.core.first.call(null,s__28328__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28327.call(null,cljs.core.rest.call(null,s__28328__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28323))?sablono.interpreter.attributes.call(null,attrs28323):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28323))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28323)], null))));
})(),(function (){var attrs28324 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28324))?sablono.interpreter.attributes.call(null,attrs28324):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28324))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28324)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28322),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-outlined"},(function (){var attrs28325 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4377__auto__ = ((function (attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view){
return (function iter__28331(s__28332){return (new cljs.core.LazySeq(null,((function (attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view){
return (function (){var s__28332__$1 = s__28332;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28332__$1);if(temp__4126__auto__)
{var s__28332__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28332__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28332__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28334 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28333 = (0);while(true){
if((i__28333 < size__4376__auto__))
{var col = cljs.core._nth.call(null,c__4375__auto__,i__28333);cljs.core.chunk_append.call(null,b__28334,clustermap.components.table.order_col.call(null,controls,table_data,col));
{
var G__28336 = (i__28333 + (1));
i__28333 = G__28336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28334),iter__28331.call(null,cljs.core.chunk_rest.call(null,s__28332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28334),null);
}
} else
{var col = cljs.core.first.call(null,s__28332__$2);return cljs.core.cons.call(null,clustermap.components.table.order_col.call(null,controls,table_data,col),iter__28331.call(null,cljs.core.rest.call(null,s__28332__$2)));
}
} else
{return null;
}
break;
}
});})(attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view))
;return iter__4377__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs28325))?sablono.interpreter.attributes.call(null,attrs28325):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28325))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28325)], null))));
})(),(function (){var attrs28326 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs28322,map__28320,map__28320__$1,props,table_data,map__28321,map__28321__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs28326))?sablono.interpreter.attributes.call(null,attrs28326):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28326))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28326)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.table_component = (function table_component(p__28337,owner){var map__28376 = p__28337;var map__28376__$1 = ((cljs.core.seq_QMARK_.call(null,map__28376))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);var props = map__28376__$1;var map__28377 = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28377__$1 = ((cljs.core.seq_QMARK_.call(null,map__28377))?cljs.core.apply.call(null,cljs.core.hash_map,map__28377):map__28377);var table_state = map__28377__$1;var table_data = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28378 = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28378__$1 = ((cljs.core.seq_QMARK_.call(null,map__28378))?cljs.core.apply.call(null,cljs.core.hash_map,map__28378):map__28378);var controls = map__28378__$1;var index = cljs.core.get.call(null,map__28378__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__28378__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__28378__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__28378__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__28378__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.table.t28379 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t28379 = (function (sort_spec,table_component,owner,props,map__28378,table_data,index,map__28376,p__28337,filter_spec,columns,table_state,controls,size,map__28377,from,meta28380){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.props = props;
this.map__28378 = map__28378;
this.table_data = table_data;
this.index = index;
this.map__28376 = map__28376;
this.p__28337 = p__28337;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.size = size;
this.map__28377 = map__28377;
this.from = from;
this.meta28380 = meta28380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t28379.cljs$lang$type = true;
clustermap.components.table.t28379.cljs$lang$ctorStr = "clustermap.components.table/t28379";
clustermap.components.table.t28379.cljs$lang$ctorPrWriter = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.table/t28379");
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28379.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t28379.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_,p__28382,p__28383){var self__ = this;
var map__28384 = p__28382;var map__28384__$1 = ((cljs.core.seq_QMARK_.call(null,map__28384))?cljs.core.apply.call(null,cljs.core.hash_map,map__28384):map__28384);var next_props = map__28384__$1;var map__28385 = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__28385__$1 = ((cljs.core.seq_QMARK_.call(null,map__28385))?cljs.core.apply.call(null,cljs.core.hash_map,map__28385):map__28385);var next_table_state = map__28385__$1;var next_table_data = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__28386 = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__28386__$1 = ((cljs.core.seq_QMARK_.call(null,map__28386))?cljs.core.apply.call(null,cljs.core.hash_map,map__28386):map__28386);var next_controls = map__28386__$1;var next_index = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28387 = p__28383;var map__28387__$1 = ((cljs.core.seq_QMARK_.call(null,map__28387))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);var fetch_table_data_fn = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190));var ___$1 = this;if((cljs.core.not.call(null,next_table_data)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__28384,map__28384__$1,next_props,map__28385,map__28385__$1,next_table_state,next_table_data,map__28386,map__28386__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28387,map__28387__$1,fetch_table_data_fn,map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__28384,map__28384__$1,next_props,map__28385,map__28385__$1,next_table_state,next_table_data,map__28386,map__28386__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28387,map__28387__$1,fetch_table_data_fn,map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (state_28400){var state_val_28401 = (state_28400[(1)]);if((state_val_28401 === (5)))
{var inst_28398 = (state_28400[(2)]);var state_28400__$1 = state_28400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28400__$1,inst_28398);
} else
{if((state_val_28401 === (4)))
{var state_28400__$1 = state_28400;var statearr_28402_28414 = state_28400__$1;(statearr_28402_28414[(2)] = null);
(statearr_28402_28414[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (3)))
{var inst_28390 = (state_28400[(7)]);var inst_28392 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28393 = [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)];var inst_28394 = (new cljs.core.PersistentVector(null,1,(5),inst_28392,inst_28393,null));var inst_28395 = om.core.update_BANG_.call(null,self__.table_state,inst_28394,inst_28390);var state_28400__$1 = state_28400;var statearr_28403_28415 = state_28400__$1;(statearr_28403_28415[(2)] = inst_28395);
(statearr_28403_28415[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (2)))
{var inst_28390 = (state_28400[(7)]);var inst_28390__$1 = (state_28400[(2)]);var state_28400__$1 = (function (){var statearr_28404 = state_28400;(statearr_28404[(7)] = inst_28390__$1);
return statearr_28404;
})();if(cljs.core.truth_(inst_28390__$1))
{var statearr_28405_28416 = state_28400__$1;(statearr_28405_28416[(1)] = (3));
} else
{var statearr_28406_28417 = state_28400__$1;(statearr_28406_28417[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28401 === (1)))
{var inst_28388 = fetch_table_data_fn.call(null,next_index,next_index_type,next_filter_spec,null,next_sort_spec,next_from,next_size);var state_28400__$1 = state_28400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28400__$1,(2),inst_28388);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__28384,map__28384__$1,next_props,map__28385,map__28385__$1,next_table_state,next_table_data,map__28386,map__28386__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28387,map__28387__$1,fetch_table_data_fn,map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__28384,map__28384__$1,next_props,map__28385,map__28385__$1,next_table_state,next_table_data,map__28386,map__28386__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28387,map__28387__$1,fetch_table_data_fn,map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28410 = [null,null,null,null,null,null,null,null];(statearr_28410[(0)] = state_machine__9111__auto__);
(statearr_28410[(1)] = (1));
return statearr_28410;
});
var state_machine__9111__auto____1 = (function (state_28400){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28400);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28411){if((e28411 instanceof Object))
{var ex__9114__auto__ = e28411;var statearr_28412_28418 = state_28400;(statearr_28412_28418[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28400);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28411;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28419 = state_28400;
state_28400 = G__28419;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__28384,map__28384__$1,next_props,map__28385,map__28385__$1,next_table_state,next_table_data,map__28386,map__28386__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28387,map__28387__$1,fetch_table_data_fn,map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_28413 = f__9126__auto__.call(null);(statearr_28413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__28384,map__28384__$1,next_props,map__28385,map__28385__$1,next_table_state,next_table_data,map__28386,map__28386__$1,next_controls,next_index,next_index_type,next_sort_spec,next_from,next_size,next_filter_spec,map__28387,map__28387__$1,fetch_table_data_fn,map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28379.prototype.om$core$IRender$ = true;
clustermap.components.table.t28379.prototype.om$core$IRender$render$arity$1 = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28379.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t28379.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-table-data-fn","fetch-table-data-fn",-43927190),clustermap.api.simple_table_factory.call(null));
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28381){var self__ = this;
var _28381__$1 = this;return self__.meta28380;
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.t28379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function (_28381,meta28380__$1){var self__ = this;
var _28381__$1 = this;return (new clustermap.components.table.t28379(self__.sort_spec,self__.table_component,self__.owner,self__.props,self__.map__28378,self__.table_data,self__.index,self__.map__28376,self__.p__28337,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.size,self__.map__28377,self__.from,meta28380__$1));
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
clustermap.components.table.__GT_t28379 = ((function (map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec){
return (function __GT_t28379(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28378__$2,table_data__$1,index__$1,map__28376__$2,p__28337__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28377__$2,from__$1,meta28380){return (new clustermap.components.table.t28379(sort_spec__$1,table_component__$1,owner__$1,props__$1,map__28378__$2,table_data__$1,index__$1,map__28376__$2,p__28337__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,size__$1,map__28377__$2,from__$1,meta28380));
});})(map__28376,map__28376__$1,props,map__28377,map__28377__$1,table_state,table_data,map__28378,map__28378__$1,controls,index,sort_spec,from,size,columns,filter_spec))
;
}
return (new clustermap.components.table.t28379(sort_spec,table_component,owner,props,map__28378__$1,table_data,index,map__28376__$1,p__28337,filter_spec,columns,table_state,controls,size,map__28377__$1,from,null));
});
