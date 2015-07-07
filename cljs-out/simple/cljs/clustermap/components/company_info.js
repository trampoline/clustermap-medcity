// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.company_info');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('schema.core');
goog.require('clustermap.components.timeline_chart');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.time');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clojure.string');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
clustermap.components.company_info.render_metadata_row = (function render_metadata_row(record,p__15427){var map__15430 = p__15427;var map__15430__$1 = ((cljs.core.seq_QMARK_.call(null,map__15430))?cljs.core.apply.call(null,cljs.core.hash_map,map__15430):map__15430);var field = map__15430__$1;var render_fn = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.identity);var label = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"label","label",1718410804));var key = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",-1480839526),(function (){var G__15431 = cljs.core.get.call(null,record,key);var G__15431__$1 = (((G__15431 == null))?null:render_fn.call(null,G__15431));return G__15431__$1;
})()], null)], null);
});
clustermap.components.company_info.sign_icon = (function sign_icon(n){if((n > (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-positive","i.icon-positive",1320612420)], null);
} else
{if((n < (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-negative","i.icon-negative",1168365176)], null);
} else
{return null;

}
}
});
clustermap.components.company_info.stat_change = (function stat_change(base,change){var prev = clustermap.formats.number.__BANG_.call(null,base,change);if(cljs.core.truth_((function (){var and__3627__auto__ = change;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = base;if(cljs.core.truth_(and__3627__auto____$1))
{return cljs.core.not_EQ_.call(null,(0),prev);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var v = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,change,prev));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.components.company_info.sign_icon.call(null,v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.number.mixed.call(null,v),"% year on year"], null)], null);
} else
{return null;
}
});
clustermap.components.company_info.render_STAR_ = (function render_STAR_(record,p__15434,filter_spec,turnover_timeline,employment_timeline){var map__15469 = p__15434;var map__15469__$1 = ((cljs.core.seq_QMARK_.call(null,map__15469))?cljs.core.apply.call(null,cljs.core.hash_map,map__15469):map__15469);var controls = map__15469__$1;var fields = cljs.core.get.call(null,map__15469__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));var title_field = cljs.core.get.call(null,map__15469__$1,new cljs.core.Keyword(null,"title-field","title-field",402861939));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["RECORD",record], null)));
return React.DOM.div({"className": "panel-grid-container"},React.DOM.div({"className": "panel-grid"},React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-details"},React.DOM.ul(null,React.DOM.li(null,React.DOM.h4(null,"Registration Number"),(function (){var attrs15472 = new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(record);return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15472))?sablono.interpreter.attributes.call(null,attrs15472):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15472))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15472)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Sector"),(function (){var attrs15475 = (function (){var G__15493 = record;var G__15493__$1 = (((G__15493 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15493));var G__15493__$2 = (((G__15493__$1 == null))?null:cljs.core.filter.call(null,((function (G__15493,G__15493__$1,map__15469,map__15469__$1,controls,fields,title_field){
return (function (p1__15432_SHARP_){return cljs.core._EQ_.call(null,"l4_sector",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15432_SHARP_));
});})(G__15493,G__15493__$1,map__15469,map__15469__$1,controls,fields,title_field))
,G__15493__$1));var G__15493__$3 = (((G__15493__$2 == null))?null:cljs.core.first.call(null,G__15493__$2));var G__15493__$4 = (((G__15493__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15493__$3));return G__15493__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15475))?sablono.interpreter.attributes.call(null,attrs15475):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15475))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15475)], null))));
})()),React.DOM.li(null,React.DOM.h4(null,"Segment"),(function (){var attrs15478 = (function (){var G__15494 = record;var G__15494__$1 = (((G__15494 == null))?null:new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__15494));var G__15494__$2 = (((G__15494__$1 == null))?null:cljs.core.filter.call(null,((function (G__15494,G__15494__$1,map__15469,map__15469__$1,controls,fields,title_field){
return (function (p1__15433_SHARP_){return cljs.core._EQ_.call(null,"bis_l1p1_sector",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__15433_SHARP_));
});})(G__15494,G__15494__$1,map__15469,map__15469__$1,controls,fields,title_field))
,G__15494__$1));var G__15494__$3 = (((G__15494__$2 == null))?null:cljs.core.first.call(null,G__15494__$2));var G__15494__$4 = (((G__15494__$3 == null))?null:new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__15494__$3));return G__15494__$4;
})();return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15478))?sablono.interpreter.attributes.call(null,attrs15478):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15478))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15478)], null))));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Website",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),clustermap.formats.url.clean_http_url.call(null,new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(record)], null)], null)], null)], null):null)))))),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "company-address"},React.DOM.div({"className": "row"},(function (){var attrs15479 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Address"], null)], null),(function (){var iter__4377__auto__ = ((function (map__15469,map__15469__$1,controls,fields,title_field){
return (function iter__15495(s__15496){return (new cljs.core.LazySeq(null,((function (map__15469,map__15469__$1,controls,fields,title_field){
return (function (){var s__15496__$1 = s__15496;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15496__$1);if(temp__4126__auto__)
{var s__15496__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15496__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15496__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15498 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15497 = (0);while(true){
if((i__15497 < size__4376__auto__))
{var line = cljs.core._nth.call(null,c__4375__auto__,i__15497);cljs.core.chunk_append.call(null,b__15498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null));
{
var G__15503 = (i__15497 + (1));
i__15497 = G__15503;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15498),iter__15495.call(null,cljs.core.chunk_rest.call(null,s__15496__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15498),null);
}
} else
{var line = cljs.core.first.call(null,s__15496__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),line], null),iter__15495.call(null,cljs.core.rest.call(null,s__15496__$2)));
}
} else
{return null;
}
break;
}
});})(map__15469,map__15469__$1,controls,fields,title_field))
,null,null));
});})(map__15469,map__15469__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(record),/,|\n/));
})());return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15479))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-6"], null)], null),attrs15479)):{"className": "col-sm-6"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15479))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15479)], null))));
})()))))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Latest turnover ",React.DOM.small(null,"(UK-wide)")),React.DOM.div({"className": "stat-amount"},React.DOM.small(null,"\u00A3"),sablono.interpreter.interpret.call(null,clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record)))),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15484 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),turnover_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15484))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15484)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15484)], null))));
})())),React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "chart-heading"},React.DOM.h4({"className": "stat-title"},"Latest employment ",React.DOM.small(null,"(UK-wide)")),(function (){var attrs15487 = clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15487))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stat-amount"], null)], null),attrs15487)):{"className": "stat-amount"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15487))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15487)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.company_info.stat_change.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",-822587912).cljs$core$IFn$_invoke$arity$1(record)))),(function (){var attrs15488 = om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),employment_timeline,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15488))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chart-container-lg"], null)], null),attrs15488)):{"className": "chart-container-lg"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15488)], null))));
})()))),React.DOM.div({"className": "panel-row"},React.DOM.div({"className": "panel"},React.DOM.div({"className": "panel-body"},React.DOM.h3(null,"Directors"),React.DOM.table({"className": "responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Name"),React.DOM.th(null,"Appointment date"),React.DOM.th(null,"Resignation date"))),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var ds = new cljs.core.Keyword(null,"directorships","directorships",1218259884).cljs$core$IFn$_invoke$arity$1(record);var cds = cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811)),ds);var scds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504),cds));var rds = cljs.core.filter.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),ds);var srds = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811),rds));var sds = cljs.core.concat.call(null,scds,srds);var iter__4377__auto__ = ((function (ds,cds,scds,rds,srds,sds,map__15469,map__15469__$1,controls,fields,title_field){
return (function iter__15499(s__15500){return (new cljs.core.LazySeq(null,((function (ds,cds,scds,rds,srds,sds,map__15469,map__15469__$1,controls,fields,title_field){
return (function (){var s__15500__$1 = s__15500;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15500__$1);if(temp__4126__auto__)
{var s__15500__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15500__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15500__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15502 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15501 = (0);while(true){
if((i__15501 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__15501);cljs.core.chunk_append.call(null,b__15502,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null));
{
var G__15504 = (i__15501 + (1));
i__15501 = G__15504;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15502),iter__15499.call(null,cljs.core.chunk_rest.call(null,s__15500__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15502),null);
}
} else
{var d = cljs.core.first.call(null,s__15500__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"appointment_date","appointment_date",-2010426504).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"resignation_date","resignation_date",-734768811).cljs$core$IFn$_invoke$arity$1(d))], null)], null),iter__15499.call(null,cljs.core.rest.call(null,s__15500__$2)));
}
} else
{return null;
}
break;
}
});})(ds,cds,scds,rds,srds,sds,map__15469,map__15469__$1,controls,fields,title_field))
,null,null));
});})(ds,cds,scds,rds,srds,sds,map__15469,map__15469__$1,controls,fields,title_field))
;return iter__4377__auto__.call(null,sds);
})())))))))));
});
clustermap.components.company_info.company_info_component = (function company_info_component(p__15505,owner){var map__15572 = p__15505;var map__15572__$1 = ((cljs.core.seq_QMARK_.call(null,map__15572))?cljs.core.apply.call(null,cljs.core.hash_map,map__15572):map__15572);var props = map__15572__$1;var map__15573 = cljs.core.get.call(null,map__15572__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15573__$1 = ((cljs.core.seq_QMARK_.call(null,map__15573))?cljs.core.apply.call(null,cljs.core.hash_map,map__15573):map__15573);var metadata = map__15573__$1;var record = cljs.core.get.call(null,map__15573__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15574 = cljs.core.get.call(null,map__15573__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15574__$1 = ((cljs.core.seq_QMARK_.call(null,map__15574))?cljs.core.apply.call(null,cljs.core.hash_map,map__15574):map__15574);var controls = map__15574__$1;var index = cljs.core.get.call(null,map__15574__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var index_type = cljs.core.get.call(null,map__15574__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var sort_spec = cljs.core.get.call(null,map__15574__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var size = cljs.core.get.call(null,map__15574__$1,new cljs.core.Keyword(null,"size","size",1098693007));var turnover_timeline = cljs.core.get.call(null,map__15572__$1,new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027));var employment_timeline = cljs.core.get.call(null,map__15572__$1,new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418));var filter_spec = cljs.core.get.call(null,map__15572__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));if(typeof clustermap.components.company_info.t15575 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.company_info.t15575 = (function (sort_spec,index_type,map__15574,metadata,owner,props,p__15505,turnover_timeline,index,filter_spec,map__15573,controls,size,employment_timeline,record,company_info_component,map__15572,meta15576){
this.sort_spec = sort_spec;
this.index_type = index_type;
this.map__15574 = map__15574;
this.metadata = metadata;
this.owner = owner;
this.props = props;
this.p__15505 = p__15505;
this.turnover_timeline = turnover_timeline;
this.index = index;
this.filter_spec = filter_spec;
this.map__15573 = map__15573;
this.controls = controls;
this.size = size;
this.employment_timeline = employment_timeline;
this.record = record;
this.company_info_component = company_info_component;
this.map__15572 = map__15572;
this.meta15576 = meta15576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.company_info.t15575.cljs$lang$type = true;
clustermap.components.company_info.t15575.cljs$lang$ctorStr = "clustermap.components.company-info/t15575";
clustermap.components.company_info.t15575.cljs$lang$ctorPrWriter = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.company-info/t15575");
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15575.prototype.om$core$IWillUpdate$ = true;
clustermap.components.company_info.t15575.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_,p__15578,p__15579){var self__ = this;
var map__15580 = p__15578;var map__15580__$1 = ((cljs.core.seq_QMARK_.call(null,map__15580))?cljs.core.apply.call(null,cljs.core.hash_map,map__15580):map__15580);var map__15581 = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));var map__15581__$1 = ((cljs.core.seq_QMARK_.call(null,map__15581))?cljs.core.apply.call(null,cljs.core.hash_map,map__15581):map__15581);var next_metadata = map__15581__$1;var next_record = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__15582 = cljs.core.get.call(null,map__15581__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__15582__$1 = ((cljs.core.seq_QMARK_.call(null,map__15582))?cljs.core.apply.call(null,cljs.core.hash_map,map__15582):map__15582);var next_controls = map__15582__$1;var next_index = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_size = cljs.core.get.call(null,map__15582__$1,new cljs.core.Keyword(null,"size","size",1098693007));var next_filter_spec = cljs.core.get.call(null,map__15580__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__15583 = p__15579;var map__15583__$1 = ((cljs.core.seq_QMARK_.call(null,map__15583))?cljs.core.apply.call(null,cljs.core.hash_map,map__15583):map__15583);var fetch_metadata_fn = cljs.core.get.call(null,map__15583__$1,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784));var ___$1 = this;if((cljs.core.not.call(null,next_record)) || (cljs.core.not_EQ_.call(null,next_controls,self__.controls)) || (cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__15580,map__15580__$1,map__15581,map__15581__$1,next_metadata,next_record,map__15582,map__15582__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15583,map__15583__$1,fetch_metadata_fn,map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__15580,map__15580__$1,map__15581,map__15581__$1,next_metadata,next_record,map__15582,map__15582__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15583,map__15583__$1,fetch_metadata_fn,map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (state_15614){var state_val_15615 = (state_15614[(1)]);if((state_val_15615 === (7)))
{var inst_15586 = (state_15614[(7)]);var inst_15600 = new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(inst_15586);var state_15614__$1 = state_15614;var statearr_15616_15638 = state_15614__$1;(statearr_15616_15638[(2)] = inst_15600);
(statearr_15616_15638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (1)))
{var inst_15584 = fetch_metadata_fn.call(null,next_index,next_index_type,next_filter_spec,next_sort_spec,next_size);var state_15614__$1 = state_15614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15614__$1,(2),inst_15584);
} else
{if((state_val_15615 === (4)))
{var state_15614__$1 = state_15614;var statearr_15617_15639 = state_15614__$1;(statearr_15617_15639[(2)] = null);
(statearr_15617_15639[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (6)))
{var state_15614__$1 = state_15614;var statearr_15618_15640 = state_15614__$1;(statearr_15618_15640[(2)] = null);
(statearr_15618_15640[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (3)))
{var inst_15586 = (state_15614[(7)]);var inst_15588 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15589 = ["COMPANY-INFO-DATA",inst_15586];var inst_15590 = (new cljs.core.PersistentVector(null,2,(5),inst_15588,inst_15589,null));var inst_15591 = cljs.core.clj__GT_js.call(null,inst_15590);var inst_15592 = console.log(inst_15591);var inst_15593 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15594 = [new cljs.core.Keyword(null,"record","record",-779106859)];var inst_15595 = (new cljs.core.PersistentVector(null,1,(5),inst_15593,inst_15594,null));var inst_15597 = (inst_15586 == null);var state_15614__$1 = (function (){var statearr_15619 = state_15614;(statearr_15619[(8)] = inst_15595);
(statearr_15619[(9)] = inst_15592);
return statearr_15619;
})();if(cljs.core.truth_(inst_15597))
{var statearr_15620_15641 = state_15614__$1;(statearr_15620_15641[(1)] = (6));
} else
{var statearr_15621_15642 = state_15614__$1;(statearr_15621_15642[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (2)))
{var inst_15586 = (state_15614[(7)]);var inst_15586__$1 = (state_15614[(2)]);var state_15614__$1 = (function (){var statearr_15622 = state_15614;(statearr_15622[(7)] = inst_15586__$1);
return statearr_15622;
})();if(cljs.core.truth_(inst_15586__$1))
{var statearr_15623_15643 = state_15614__$1;(statearr_15623_15643[(1)] = (3));
} else
{var statearr_15624_15644 = state_15614__$1;(statearr_15624_15644[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (11)))
{var inst_15595 = (state_15614[(8)]);var inst_15608 = (state_15614[(2)]);var inst_15609 = om.core.update_BANG_.call(null,self__.metadata,inst_15595,inst_15608);var state_15614__$1 = state_15614;var statearr_15625_15645 = state_15614__$1;(statearr_15625_15645[(2)] = inst_15609);
(statearr_15625_15645[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (9)))
{var state_15614__$1 = state_15614;var statearr_15626_15646 = state_15614__$1;(statearr_15626_15646[(2)] = null);
(statearr_15626_15646[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (5)))
{var inst_15612 = (state_15614[(2)]);var state_15614__$1 = state_15614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15614__$1,inst_15612);
} else
{if((state_val_15615 === (10)))
{var inst_15602 = (state_15614[(10)]);var inst_15606 = cljs.core.first.call(null,inst_15602);var state_15614__$1 = state_15614;var statearr_15627_15647 = state_15614__$1;(statearr_15627_15647[(2)] = inst_15606);
(statearr_15627_15647[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15615 === (8)))
{var inst_15602 = (state_15614[(10)]);var inst_15602__$1 = (state_15614[(2)]);var inst_15603 = (inst_15602__$1 == null);var state_15614__$1 = (function (){var statearr_15628 = state_15614;(statearr_15628[(10)] = inst_15602__$1);
return statearr_15628;
})();if(cljs.core.truth_(inst_15603))
{var statearr_15629_15648 = state_15614__$1;(statearr_15629_15648[(1)] = (9));
} else
{var statearr_15630_15649 = state_15614__$1;(statearr_15630_15649[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__,___$1,map__15580,map__15580__$1,map__15581,map__15581__$1,next_metadata,next_record,map__15582,map__15582__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15583,map__15583__$1,fetch_metadata_fn,map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__15580,map__15580__$1,map__15581,map__15581__$1,next_metadata,next_record,map__15582,map__15582__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15583,map__15583__$1,fetch_metadata_fn,map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_15634 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15634[(0)] = state_machine__9111__auto__);
(statearr_15634[(1)] = (1));
return statearr_15634;
});
var state_machine__9111__auto____1 = (function (state_15614){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_15614);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e15635){if((e15635 instanceof Object))
{var ex__9114__auto__ = e15635;var statearr_15636_15650 = state_15614;(statearr_15636_15650[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15614);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15635;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15651 = state_15614;
state_15614 = G__15651;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_15614){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_15614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__15580,map__15580__$1,map__15581,map__15581__$1,next_metadata,next_record,map__15582,map__15582__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15583,map__15583__$1,fetch_metadata_fn,map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
})();var state__9127__auto__ = (function (){var statearr_15637 = f__9126__auto__.call(null);(statearr_15637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_15637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__15580,map__15580__$1,map__15581,map__15581__$1,next_metadata,next_record,map__15582,map__15582__$1,next_controls,next_index,next_index_type,next_sort_spec,next_size,next_filter_spec,map__15583,map__15583__$1,fetch_metadata_fn,map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
);
return c__9125__auto__;
} else
{return null;
}
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15575.prototype.om$core$IRender$ = true;
clustermap.components.company_info.t15575.prototype.om$core$IRender$render$arity$1 = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.company_info.render_STAR_.call(null,self__.record,self__.controls,self__.filter_spec,self__.turnover_timeline,self__.employment_timeline);
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15575.prototype.om$core$IDidMount$ = true;
clustermap.components.company_info.t15575.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-metadata-fn","fetch-metadata-fn",-325758784),clustermap.api.records_factory.call(null));
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15577){var self__ = this;
var _15577__$1 = this;return self__.meta15576;
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.t15575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function (_15577,meta15576__$1){var self__ = this;
var _15577__$1 = this;return (new clustermap.components.company_info.t15575(self__.sort_spec,self__.index_type,self__.map__15574,self__.metadata,self__.owner,self__.props,self__.p__15505,self__.turnover_timeline,self__.index,self__.filter_spec,self__.map__15573,self__.controls,self__.size,self__.employment_timeline,self__.record,self__.company_info_component,self__.map__15572,meta15576__$1));
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
clustermap.components.company_info.__GT_t15575 = ((function (map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec){
return (function __GT_t15575(sort_spec__$1,index_type__$1,map__15574__$2,metadata__$1,owner__$1,props__$1,p__15505__$1,turnover_timeline__$1,index__$1,filter_spec__$1,map__15573__$2,controls__$1,size__$1,employment_timeline__$1,record__$1,company_info_component__$1,map__15572__$2,meta15576){return (new clustermap.components.company_info.t15575(sort_spec__$1,index_type__$1,map__15574__$2,metadata__$1,owner__$1,props__$1,p__15505__$1,turnover_timeline__$1,index__$1,filter_spec__$1,map__15573__$2,controls__$1,size__$1,employment_timeline__$1,record__$1,company_info_component__$1,map__15572__$2,meta15576));
});})(map__15572,map__15572__$1,props,map__15573,map__15573__$1,metadata,record,map__15574,map__15574__$1,controls,index,index_type,sort_spec,size,turnover_timeline,employment_timeline,filter_spec))
;
}
return (new clustermap.components.company_info.t15575(sort_spec,index_type,map__15574__$1,metadata,owner,props,p__15505,turnover_timeline,index,filter_spec,map__15573__$1,controls,size,employment_timeline,record,company_info_component,map__15572__$1,null));
});
