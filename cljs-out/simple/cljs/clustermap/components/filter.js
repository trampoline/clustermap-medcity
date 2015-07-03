// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clustermap.components.filters.select_filter');
goog.require('clustermap.components.filters.external_filter');
goog.require('clustermap.components.filters.tag_filter');
goog.require('plumbing.core');
goog.require('clustermap.components.filters.tag_checkboxes_filter');
goog.require('schema.core');
goog.require('clustermap.components.filters.checkboxes_filter');
goog.require('sablono.core');
goog.require('clustermap.components.filters.checkboxes_filter');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('clustermap.components.filters.external_filter');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.components.filters.tag_filter');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.filters.select_filter');
goog.require('clustermap.components.filters.tag_checkboxes_filter');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.filters');
/**
* delegate to filter-component type parsers for each fragment param
* which matches a component id
*/
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30015){var map__30017 = p__30015;var map__30017__$1 = ((cljs.core.seq_QMARK_.call(null,map__30017))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);var filter_spec = map__30017__$1;var component_descrs = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30018){var map__30020 = p__30018;var map__30020__$1 = ((cljs.core.seq_QMARK_.call(null,map__30020))?cljs.core.apply.call(null,cljs.core.hash_map,map__30020):map__30020);var filter_spec = map__30020__$1;var component_descrs = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30021,component_filter_rq_chan){var map__30026 = p__30021;var map__30026__$1 = ((cljs.core.seq_QMARK_.call(null,map__30026))?cljs.core.apply.call(null,cljs.core.hash_map,map__30026):map__30026);var component_spec = map__30026__$1;var type = cljs.core.get.call(null,map__30026__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30027 = cljs.core._EQ_;var expr__30028 = type;if(cljs.core.truth_(pred__30027.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30028)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30027.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30028)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30027.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30028)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30027.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30028)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30027.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30028)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30028))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30030,component_filter_rq_chan){var map__30032 = p__30030;var map__30032__$1 = ((cljs.core.seq_QMARK_.call(null,map__30032))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);var component_spec = map__30032__$1;var visible = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30032__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30032,map__30032__$1,component_spec,visible,skip_label,label,id){
return (function (e){return om.core.update_BANG_.call(null,component_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),cljs.core.not.call(null,visible));
});})(map__30032,map__30032__$1,component_spec,visible,skip_label,label,id))
], null)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
});
clustermap.components.filter.update_component_filter_rq_chans = (function update_component_filter_rq_chans(component_filter_rq_chans,component_ids){var existing_ids = cljs.core.set.call(null,cljs.core.keys.call(null,component_filter_rq_chans));var required_ids = cljs.core.set.call(null,component_ids);var new_ids = clojure.set.difference.call(null,required_ids,existing_ids);var dead_ids = clojure.set.difference.call(null,existing_ids,required_ids);var changing_ids = clojure.set.union.call(null,new_ids,dead_ids);return cljs.core.reduce.call(null,((function (existing_ids,required_ids,new_ids,dead_ids,changing_ids){
return (function (chs,id){if(cljs.core.truth_(new_ids.call(null,id)))
{var ch = cljs.core.async.chan.call(null);return cljs.core.assoc.call(null,chs,id,ch);
} else
{if(cljs.core.truth_(dead_ids.call(null,id)))
{var ch = cljs.core.get.call(null,chs,id);cljs.core.dissoc.call(null,chs,id);
return cljs.core.async.close_BANG_.call(null,ch);
} else
{return null;
}
}
});})(existing_ids,required_ids,new_ids,dead_ids,changing_ids))
,component_filter_rq_chans,changing_ids);
});
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30034 = schema.core.Any;var input_schema30035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30033","map30033",-894366046,null))], null);var input_checker30036 = schema.core.checker.call(null,input_schema30035);var output_checker30037 = schema.core.checker.call(null,output_schema30034);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30034,input_schema30035,input_checker30036,output_checker30037){
return (function render_STAR_(G__30038){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30038], null);var temp__4126__auto___30056 = input_checker30036.call(null,args__6035__auto___30055);if(cljs.core.truth_(temp__4126__auto___30056))
{var error__6036__auto___30057 = temp__4126__auto___30056;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30057)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30057,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30055,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30035,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30033 = G__30038;while(true){
if(cljs.core.map_QMARK_.call(null,map30033))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30033)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30033,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30033,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30033,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30034,input_schema30035,input_checker30036,output_checker30037){
return (function iter__30047(s__30048){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30034,input_schema30035,input_checker30036,output_checker30037){
return (function (){var s__30048__$1 = s__30048;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30048__$1);if(temp__4126__auto__)
{var s__30048__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30048__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30048__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30050 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30049 = (0);while(true){
if((i__30049 < size__4376__auto__))
{var map__30053 = cljs.core._nth.call(null,c__4375__auto__,i__30049);var map__30053__$1 = ((cljs.core.seq_QMARK_.call(null,map__30053))?cljs.core.apply.call(null,cljs.core.hash_map,map__30053):map__30053);var component_spec = map__30053__$1;var id = cljs.core.get.call(null,map__30053__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30050,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30058 = (i__30049 + (1));
i__30049 = G__30058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30050),iter__30047.call(null,cljs.core.chunk_rest.call(null,s__30048__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30050),null);
}
} else
{var map__30054 = cljs.core.first.call(null,s__30048__$2);var map__30054__$1 = ((cljs.core.seq_QMARK_.call(null,map__30054))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);var component_spec = map__30054__$1;var id = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30047.call(null,cljs.core.rest.call(null,s__30048__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30034,input_schema30035,input_checker30036,output_checker30037))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30034,input_schema30035,input_checker30036,output_checker30037))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30059 = output_checker30037.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30059))
{var error__6036__auto___30060 = temp__4126__auto___30059;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30060)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30060,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30034,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30034,input_schema30035,input_checker30036,output_checker30037))
,schema.core.make_fn_schema.call(null,output_schema30034,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30035], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30397 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30067 = schema.core.Any;var input_schema30068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30064","map30064",-1518484602,null))], null);var input_checker30069 = schema.core.checker.call(null,input_schema30068);var output_checker30070 = schema.core.checker.call(null,output_schema30067);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function constructor30062(G__30071){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30071], null);var temp__4126__auto___30399 = input_checker30069.call(null,args__6035__auto___30398);if(cljs.core.truth_(temp__4126__auto___30399))
{var error__6036__auto___30400 = temp__4126__auto___30399;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30062","constructor30062",810945934,null),cljs.core.pr_str.call(null,error__6036__auto___30400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30400,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30398,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30068,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30064 = G__30071;while(true){
if(cljs.core.map_QMARK_.call(null,map30064))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30064)));
}
var map30066 = plumbing.fnk.schema.safe_get.call(null,map30064,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30066,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30065 = plumbing.fnk.schema.safe_get.call(null,map30064,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30065,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30065,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30064,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30233 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30233 = (function (owner,map30065,map30064,map30066,input_checker30069,constructor30062,G__30071,component_specs,filter_spec,output_checker30070,output_schema30067,history,input_schema30068,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,meta30234){
this.owner = owner;
this.map30065 = map30065;
this.map30064 = map30064;
this.map30066 = map30066;
this.input_checker30069 = input_checker30069;
this.constructor30062 = constructor30062;
this.G__30071 = G__30071;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_checker30070 = output_checker30070;
this.output_schema30067 = output_schema30067;
this.history = history;
this.input_schema30068 = input_schema30068;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30234 = meta30234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30233.cljs$lang$type = true;
clustermap.components.filter.t30233.cljs$lang$ctorStr = "clustermap.components.filter/t30233";
clustermap.components.filter.t30233.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30233");
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30233.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30233.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_,p__30236,___$1){var self__ = this;
var map__30237 = p__30236;var map__30237__$1 = ((cljs.core.seq_QMARK_.call(null,map__30237))?cljs.core.apply.call(null,cljs.core.hash_map,map__30237):map__30237);var next_props = map__30237__$1;var map__30238 = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30238__$1 = ((cljs.core.seq_QMARK_.call(null,map__30238))?cljs.core.apply.call(null,cljs.core.hash_map,map__30238):map__30238);var next_filter_spec = map__30238__$1;var map__30239 = cljs.core.get.call(null,map__30238__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30239__$1 = ((cljs.core.seq_QMARK_.call(null,map__30239))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);var next_url_components = map__30239__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_EQ_.call(null,next_url_components,self__.url_components);
} else
{return and__3627__auto__;
}
})()))
{var token = self__.history.getToken();var encoded_filter = clustermap.filters.filter_url_param_value.call(null,next_url_components);var new_token = clustermap.formats.url.add_param_to_token.call(null,token,self__.id,encoded_filter);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TOKEN-CHANGE",token,new_token], null)));
return self__.history.setToken(new_token);
} else
{return null;
}
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30233.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30233.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30240_30401 = cljs.core.seq.call(null,chs);var chunk__30241_30402 = null;var count__30242_30403 = (0);var i__30243_30404 = (0);while(true){
if((i__30243_30404 < count__30242_30403))
{var vec__30244_30405 = cljs.core._nth.call(null,chunk__30241_30402,i__30243_30404);var component_id_30406 = cljs.core.nth.call(null,vec__30244_30405,(0),null);var ch_30407 = cljs.core.nth.call(null,vec__30244_30405,(1),null);cljs.core.async.close_BANG_.call(null,ch_30407);
{
var G__30408 = seq__30240_30401;
var G__30409 = chunk__30241_30402;
var G__30410 = count__30242_30403;
var G__30411 = (i__30243_30404 + (1));
seq__30240_30401 = G__30408;
chunk__30241_30402 = G__30409;
count__30242_30403 = G__30410;
i__30243_30404 = G__30411;
continue;
}
} else
{var temp__4126__auto___30412 = cljs.core.seq.call(null,seq__30240_30401);if(temp__4126__auto___30412)
{var seq__30240_30413__$1 = temp__4126__auto___30412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30240_30413__$1))
{var c__4408__auto___30414 = cljs.core.chunk_first.call(null,seq__30240_30413__$1);{
var G__30415 = cljs.core.chunk_rest.call(null,seq__30240_30413__$1);
var G__30416 = c__4408__auto___30414;
var G__30417 = cljs.core.count.call(null,c__4408__auto___30414);
var G__30418 = (0);
seq__30240_30401 = G__30415;
chunk__30241_30402 = G__30416;
count__30242_30403 = G__30417;
i__30243_30404 = G__30418;
continue;
}
} else
{var vec__30245_30419 = cljs.core.first.call(null,seq__30240_30413__$1);var component_id_30420 = cljs.core.nth.call(null,vec__30245_30419,(0),null);var ch_30421 = cljs.core.nth.call(null,vec__30245_30419,(1),null);cljs.core.async.close_BANG_.call(null,ch_30421);
{
var G__30422 = cljs.core.next.call(null,seq__30240_30413__$1);
var G__30423 = null;
var G__30424 = (0);
var G__30425 = (0);
seq__30240_30401 = G__30422;
chunk__30241_30402 = G__30423;
count__30242_30403 = G__30424;
i__30243_30404 = G__30425;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30233.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (state_30341){var state_val_30342 = (state_30341[(1)]);if((state_val_30342 === (7)))
{var inst_30332 = (state_30341[(2)]);var state_30341__$1 = state_30341;if(cljs.core.truth_(inst_30332))
{var statearr_30343_30426 = state_30341__$1;(statearr_30343_30426[(1)] = (25));
} else
{var statearr_30344_30427 = state_30341__$1;(statearr_30344_30427[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (20)))
{var inst_30309 = (state_30341[(7)]);var inst_30293 = (state_30341[(8)]);var inst_30251 = (state_30341[(9)]);var inst_30252 = (state_30341[(10)]);var inst_30258 = (state_30341[(11)]);var inst_30302 = (state_30341[(12)]);var inst_30302__$1 = cljs.core.first.call(null,inst_30293);var inst_30303 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30304 = cljs.core.get.call(null,inst_30252,inst_30302__$1);var inst_30305 = ["FILTER",inst_30251,inst_30302__$1,inst_30304];var inst_30306 = (new cljs.core.PersistentVector(null,4,(5),inst_30303,inst_30305,null));var inst_30307 = cljs.core.clj__GT_js.call(null,inst_30306);var inst_30308 = console.log(inst_30307);var inst_30309__$1 = cljs.core.get.call(null,inst_30258,inst_30302__$1);var state_30341__$1 = (function (){var statearr_30345 = state_30341;(statearr_30345[(7)] = inst_30309__$1);
(statearr_30345[(13)] = inst_30308);
(statearr_30345[(12)] = inst_30302__$1);
return statearr_30345;
})();if(cljs.core.truth_(inst_30309__$1))
{var statearr_30346_30428 = state_30341__$1;(statearr_30346_30428[(1)] = (22));
} else
{var statearr_30347_30429 = state_30341__$1;(statearr_30347_30429[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (27)))
{var inst_30337 = (state_30341[(2)]);var state_30341__$1 = state_30341;var statearr_30348_30430 = state_30341__$1;(statearr_30348_30430[(2)] = inst_30337);
(statearr_30348_30430[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (1)))
{var state_30341__$1 = state_30341;var statearr_30349_30431 = state_30341__$1;(statearr_30349_30431[(2)] = null);
(statearr_30349_30431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (24)))
{var inst_30293 = (state_30341[(8)]);var inst_30318 = (state_30341[(2)]);var inst_30319 = cljs.core.next.call(null,inst_30293);var inst_30265 = inst_30319;var inst_30266 = null;var inst_30267 = (0);var inst_30268 = (0);var state_30341__$1 = (function (){var statearr_30353 = state_30341;(statearr_30353[(14)] = inst_30266);
(statearr_30353[(15)] = inst_30268);
(statearr_30353[(16)] = inst_30265);
(statearr_30353[(17)] = inst_30318);
(statearr_30353[(18)] = inst_30267);
return statearr_30353;
})();var statearr_30354_30432 = state_30341__$1;(statearr_30354_30432[(2)] = null);
(statearr_30354_30432[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (4)))
{var inst_30248 = (state_30341[(19)]);var inst_30248__$1 = (state_30341[(2)]);var state_30341__$1 = (function (){var statearr_30355 = state_30341;(statearr_30355[(19)] = inst_30248__$1);
return statearr_30355;
})();if(cljs.core.truth_(inst_30248__$1))
{var statearr_30356_30433 = state_30341__$1;(statearr_30356_30433[(1)] = (5));
} else
{var statearr_30357_30434 = state_30341__$1;(statearr_30357_30434[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (15)))
{var inst_30266 = (state_30341[(14)]);var inst_30268 = (state_30341[(15)]);var inst_30265 = (state_30341[(16)]);var inst_30267 = (state_30341[(18)]);var inst_30289 = (state_30341[(2)]);var inst_30290 = (inst_30268 + (1));var tmp30350 = inst_30266;var tmp30351 = inst_30265;var tmp30352 = inst_30267;var inst_30265__$1 = tmp30351;var inst_30266__$1 = tmp30350;var inst_30267__$1 = tmp30352;var inst_30268__$1 = inst_30290;var state_30341__$1 = (function (){var statearr_30358 = state_30341;(statearr_30358[(14)] = inst_30266__$1);
(statearr_30358[(20)] = inst_30289);
(statearr_30358[(15)] = inst_30268__$1);
(statearr_30358[(16)] = inst_30265__$1);
(statearr_30358[(18)] = inst_30267__$1);
return statearr_30358;
})();var statearr_30359_30435 = state_30341__$1;(statearr_30359_30435[(2)] = null);
(statearr_30359_30435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (21)))
{var inst_30322 = (state_30341[(2)]);var state_30341__$1 = state_30341;var statearr_30360_30436 = state_30341__$1;(statearr_30360_30436[(2)] = inst_30322);
(statearr_30360_30436[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (13)))
{var inst_30273 = (state_30341[(21)]);var inst_30252 = (state_30341[(10)]);var inst_30280 = (state_30341[(22)]);var inst_30282 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30283 = cljs.core.get.call(null,inst_30252,inst_30273);var inst_30284 = [inst_30273,inst_30283];var inst_30285 = (new cljs.core.PersistentVector(null,2,(5),inst_30282,inst_30284,null));var inst_30286 = cljs.core.async.put_BANG_.call(null,inst_30280,inst_30285);var state_30341__$1 = state_30341;var statearr_30361_30437 = state_30341__$1;(statearr_30361_30437[(2)] = inst_30286);
(statearr_30361_30437[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (22)))
{var inst_30309 = (state_30341[(7)]);var inst_30252 = (state_30341[(10)]);var inst_30302 = (state_30341[(12)]);var inst_30311 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30312 = cljs.core.get.call(null,inst_30252,inst_30302);var inst_30313 = [inst_30302,inst_30312];var inst_30314 = (new cljs.core.PersistentVector(null,2,(5),inst_30311,inst_30313,null));var inst_30315 = cljs.core.async.put_BANG_.call(null,inst_30309,inst_30314);var state_30341__$1 = state_30341;var statearr_30362_30438 = state_30341__$1;(statearr_30362_30438[(2)] = inst_30315);
(statearr_30362_30438[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (6)))
{var state_30341__$1 = state_30341;var statearr_30363_30439 = state_30341__$1;(statearr_30363_30439[(2)] = null);
(statearr_30363_30439[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (25)))
{var state_30341__$1 = state_30341;var statearr_30364_30440 = state_30341__$1;(statearr_30364_30440[(2)] = null);
(statearr_30364_30440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (17)))
{var state_30341__$1 = state_30341;var statearr_30365_30441 = state_30341__$1;(statearr_30365_30441[(2)] = null);
(statearr_30365_30441[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (3)))
{var inst_30339 = (state_30341[(2)]);var state_30341__$1 = state_30341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30341__$1,inst_30339);
} else
{if((state_val_30342 === (12)))
{var inst_30327 = (state_30341[(2)]);var state_30341__$1 = state_30341;var statearr_30366_30442 = state_30341__$1;(statearr_30366_30442[(2)] = inst_30327);
(statearr_30366_30442[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (2)))
{var state_30341__$1 = state_30341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30341__$1,(4),filter_rq_sub);
} else
{if((state_val_30342 === (23)))
{var state_30341__$1 = state_30341;var statearr_30367_30443 = state_30341__$1;(statearr_30367_30443[(2)] = null);
(statearr_30367_30443[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (19)))
{var inst_30293 = (state_30341[(8)]);var inst_30297 = cljs.core.chunk_first.call(null,inst_30293);var inst_30298 = cljs.core.chunk_rest.call(null,inst_30293);var inst_30299 = cljs.core.count.call(null,inst_30297);var inst_30265 = inst_30298;var inst_30266 = inst_30297;var inst_30267 = inst_30299;var inst_30268 = (0);var state_30341__$1 = (function (){var statearr_30368 = state_30341;(statearr_30368[(14)] = inst_30266);
(statearr_30368[(15)] = inst_30268);
(statearr_30368[(16)] = inst_30265);
(statearr_30368[(18)] = inst_30267);
return statearr_30368;
})();var statearr_30369_30444 = state_30341__$1;(statearr_30369_30444[(2)] = null);
(statearr_30369_30444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (11)))
{var inst_30293 = (state_30341[(8)]);var inst_30265 = (state_30341[(16)]);var inst_30293__$1 = cljs.core.seq.call(null,inst_30265);var state_30341__$1 = (function (){var statearr_30370 = state_30341;(statearr_30370[(8)] = inst_30293__$1);
return statearr_30370;
})();if(inst_30293__$1)
{var statearr_30371_30445 = state_30341__$1;(statearr_30371_30445[(1)] = (16));
} else
{var statearr_30372_30446 = state_30341__$1;(statearr_30372_30446[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (9)))
{var inst_30329 = (state_30341[(2)]);var state_30341__$1 = (function (){var statearr_30373 = state_30341;(statearr_30373[(23)] = inst_30329);
return statearr_30373;
})();var statearr_30374_30447 = state_30341__$1;(statearr_30374_30447[(2)] = true);
(statearr_30374_30447[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (5)))
{var inst_30251 = (state_30341[(9)]);var inst_30252 = (state_30341[(10)]);var inst_30248 = (state_30341[(19)]);var inst_30251__$1 = cljs.core.nth.call(null,inst_30248,(0),null);var inst_30252__$1 = cljs.core.nth.call(null,inst_30248,(1),null);var inst_30253 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30254 = ["FILTER-RQ",inst_30251__$1,inst_30252__$1];var inst_30255 = (new cljs.core.PersistentVector(null,3,(5),inst_30253,inst_30254,null));var inst_30256 = cljs.core.clj__GT_js.call(null,inst_30255);var inst_30257 = console.log(inst_30256);var inst_30258 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30259 = cljs.core.keys.call(null,inst_30252__$1);var inst_30264 = cljs.core.seq.call(null,inst_30259);var inst_30265 = inst_30264;var inst_30266 = null;var inst_30267 = (0);var inst_30268 = (0);var state_30341__$1 = (function (){var statearr_30375 = state_30341;(statearr_30375[(14)] = inst_30266);
(statearr_30375[(9)] = inst_30251__$1);
(statearr_30375[(15)] = inst_30268);
(statearr_30375[(16)] = inst_30265);
(statearr_30375[(10)] = inst_30252__$1);
(statearr_30375[(11)] = inst_30258);
(statearr_30375[(24)] = inst_30257);
(statearr_30375[(18)] = inst_30267);
return statearr_30375;
})();var statearr_30376_30448 = state_30341__$1;(statearr_30376_30448[(2)] = null);
(statearr_30376_30448[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (14)))
{var state_30341__$1 = state_30341;var statearr_30377_30449 = state_30341__$1;(statearr_30377_30449[(2)] = null);
(statearr_30377_30449[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (26)))
{var state_30341__$1 = state_30341;var statearr_30378_30450 = state_30341__$1;(statearr_30378_30450[(2)] = null);
(statearr_30378_30450[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (16)))
{var inst_30293 = (state_30341[(8)]);var inst_30295 = cljs.core.chunked_seq_QMARK_.call(null,inst_30293);var state_30341__$1 = state_30341;if(inst_30295)
{var statearr_30379_30451 = state_30341__$1;(statearr_30379_30451[(1)] = (19));
} else
{var statearr_30380_30452 = state_30341__$1;(statearr_30380_30452[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (10)))
{var inst_30266 = (state_30341[(14)]);var inst_30251 = (state_30341[(9)]);var inst_30273 = (state_30341[(21)]);var inst_30268 = (state_30341[(15)]);var inst_30252 = (state_30341[(10)]);var inst_30280 = (state_30341[(22)]);var inst_30258 = (state_30341[(11)]);var inst_30273__$1 = cljs.core._nth.call(null,inst_30266,inst_30268);var inst_30274 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30275 = cljs.core.get.call(null,inst_30252,inst_30273__$1);var inst_30276 = ["FILTER",inst_30251,inst_30273__$1,inst_30275];var inst_30277 = (new cljs.core.PersistentVector(null,4,(5),inst_30274,inst_30276,null));var inst_30278 = cljs.core.clj__GT_js.call(null,inst_30277);var inst_30279 = console.log(inst_30278);var inst_30280__$1 = cljs.core.get.call(null,inst_30258,inst_30273__$1);var state_30341__$1 = (function (){var statearr_30381 = state_30341;(statearr_30381[(25)] = inst_30279);
(statearr_30381[(21)] = inst_30273__$1);
(statearr_30381[(22)] = inst_30280__$1);
return statearr_30381;
})();if(cljs.core.truth_(inst_30280__$1))
{var statearr_30382_30453 = state_30341__$1;(statearr_30382_30453[(1)] = (13));
} else
{var statearr_30383_30454 = state_30341__$1;(statearr_30383_30454[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (18)))
{var inst_30325 = (state_30341[(2)]);var state_30341__$1 = state_30341;var statearr_30384_30455 = state_30341__$1;(statearr_30384_30455[(2)] = inst_30325);
(statearr_30384_30455[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30342 === (8)))
{var inst_30268 = (state_30341[(15)]);var inst_30267 = (state_30341[(18)]);var inst_30270 = (inst_30268 < inst_30267);var inst_30271 = inst_30270;var state_30341__$1 = state_30341;if(cljs.core.truth_(inst_30271))
{var statearr_30385_30456 = state_30341__$1;(statearr_30385_30456[(1)] = (10));
} else
{var statearr_30386_30457 = state_30341__$1;(statearr_30386_30457[(1)] = (11));
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
}
}
}
}
}
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30390[(0)] = state_machine__9111__auto__);
(statearr_30390[(1)] = (1));
return statearr_30390;
});
var state_machine__9111__auto____1 = (function (state_30341){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30341);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30391){if((e30391 instanceof Object))
{var ex__9114__auto__ = e30391;var statearr_30392_30458 = state_30341;(statearr_30392_30458[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30391;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30459 = state_30341;
state_30341 = G__30459;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30341){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
})();var state__9127__auto__ = (function (){var statearr_30393 = f__9126__auto__.call(null);(statearr_30393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_30235){var self__ = this;
var _30235__$1 = this;return self__.meta30234;
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.t30233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function (_30235,meta30234__$1){var self__ = this;
var _30235__$1 = this;return (new clustermap.components.filter.t30233(self__.owner,self__.map30065,self__.map30064,self__.map30066,self__.input_checker30069,self__.constructor30062,self__.G__30071,self__.component_specs,self__.filter_spec,self__.output_checker30070,self__.output_schema30067,self__.history,self__.input_schema30068,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30234__$1));
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
clustermap.components.filter.__GT_t30233 = ((function (owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070){
return (function __GT_t30233(owner__$1,map30065__$1,map30064__$1,map30066__$1,input_checker30069__$1,constructor30062__$1,G__30071__$1,component_specs__$1,filter_spec__$1,output_checker30070__$1,output_schema30067__$1,history__$1,input_schema30068__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30234){return (new clustermap.components.filter.t30233(owner__$1,map30065__$1,map30064__$1,map30066__$1,input_checker30069__$1,constructor30062__$1,G__30071__$1,component_specs__$1,filter_spec__$1,output_checker30070__$1,output_schema30067__$1,history__$1,input_schema30068__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30234));
});})(owner,history,filter_rq_pub,map30065,url_components,components,component_specs,id,filter_spec,map30066,validate__6034__auto__,ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
;
}
return (new clustermap.components.filter.t30233(owner,map30065,map30064,map30066,input_checker30069,constructor30062,G__30071,component_specs,filter_spec,output_checker30070,output_schema30067,history,input_schema30068,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30460 = output_checker30070.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30460))
{var error__6036__auto___30461 = temp__4126__auto___30460;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30062","constructor30062",810945934,null),cljs.core.pr_str.call(null,error__6036__auto___30461)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30461,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30067,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30067,input_schema30068,input_checker30069,output_checker30070))
,schema.core.make_fn_schema.call(null,output_schema30067,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30068], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30397){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30061,p__30394){var vec__30396 = p__30394;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30396,(0),null);return component_fnk__7881__auto___30397.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30061),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30061,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30061,var_args){
var p__30394 = null;if (arguments.length > 2) {
  p__30394 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30061,p__30394);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30462){
var data__7882__auto__ = cljs.core.first(arglist__30462);
arglist__30462 = cljs.core.next(arglist__30462);
var owner30061 = cljs.core.first(arglist__30462);
var p__30394 = cljs.core.rest(arglist__30462);
return filter_component__delegate(data__7882__auto__,owner30061,p__30394);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30397))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30063){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30063);
});
__GT_filter_component = function(cursor__7850__auto__,m30063){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
