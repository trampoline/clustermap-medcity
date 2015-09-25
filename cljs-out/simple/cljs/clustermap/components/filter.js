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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30058){var map__30060 = p__30058;var map__30060__$1 = ((cljs.core.seq_QMARK_.call(null,map__30060))?cljs.core.apply.call(null,cljs.core.hash_map,map__30060):map__30060);var filter_spec = map__30060__$1;var component_descrs = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30061){var map__30063 = p__30061;var map__30063__$1 = ((cljs.core.seq_QMARK_.call(null,map__30063))?cljs.core.apply.call(null,cljs.core.hash_map,map__30063):map__30063);var filter_spec = map__30063__$1;var component_descrs = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30063__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30064,component_filter_rq_chan){var map__30069 = p__30064;var map__30069__$1 = ((cljs.core.seq_QMARK_.call(null,map__30069))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);var component_spec = map__30069__$1;var type = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30070 = cljs.core._EQ_;var expr__30071 = type;if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30071)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30071)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30071)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30071)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30070.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30071)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30071))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30073,component_filter_rq_chan){var map__30075 = p__30073;var map__30075__$1 = ((cljs.core.seq_QMARK_.call(null,map__30075))?cljs.core.apply.call(null,cljs.core.hash_map,map__30075):map__30075);var component_spec = map__30075__$1;var visible = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30075__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30075,map__30075__$1,component_spec,visible,skip_label,label,id){
return (function (e){return om.core.update_BANG_.call(null,component_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),cljs.core.not.call(null,visible));
});})(map__30075,map__30075__$1,component_spec,visible,skip_label,label,id))
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30077 = schema.core.Any;var input_schema30078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30076","map30076",-433765776,null))], null);var input_checker30079 = schema.core.checker.call(null,input_schema30078);var output_checker30080 = schema.core.checker.call(null,output_schema30077);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30077,input_schema30078,input_checker30079,output_checker30080){
return (function render_STAR_(G__30081){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30081], null);var temp__4126__auto___30099 = input_checker30079.call(null,args__6035__auto___30098);if(cljs.core.truth_(temp__4126__auto___30099))
{var error__6036__auto___30100 = temp__4126__auto___30099;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30100)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30100,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30098,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30078,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30076 = G__30081;while(true){
if(cljs.core.map_QMARK_.call(null,map30076))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30076)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30076,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30076,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30076,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30077,input_schema30078,input_checker30079,output_checker30080){
return (function iter__30090(s__30091){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30077,input_schema30078,input_checker30079,output_checker30080){
return (function (){var s__30091__$1 = s__30091;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30091__$1);if(temp__4126__auto__)
{var s__30091__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30091__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30091__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30093 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30092 = (0);while(true){
if((i__30092 < size__4376__auto__))
{var map__30096 = cljs.core._nth.call(null,c__4375__auto__,i__30092);var map__30096__$1 = ((cljs.core.seq_QMARK_.call(null,map__30096))?cljs.core.apply.call(null,cljs.core.hash_map,map__30096):map__30096);var component_spec = map__30096__$1;var id = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30093,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30101 = (i__30092 + (1));
i__30092 = G__30101;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30093),iter__30090.call(null,cljs.core.chunk_rest.call(null,s__30091__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30093),null);
}
} else
{var map__30097 = cljs.core.first.call(null,s__30091__$2);var map__30097__$1 = ((cljs.core.seq_QMARK_.call(null,map__30097))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);var component_spec = map__30097__$1;var id = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30090.call(null,cljs.core.rest.call(null,s__30091__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30077,input_schema30078,input_checker30079,output_checker30080))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30077,input_schema30078,input_checker30079,output_checker30080))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30102 = output_checker30080.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30102))
{var error__6036__auto___30103 = temp__4126__auto___30102;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30103)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30103,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30077,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30077,input_schema30078,input_checker30079,output_checker30080))
,schema.core.make_fn_schema.call(null,output_schema30077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30078], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30440 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30110 = schema.core.Any;var input_schema30111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30107","map30107",924938696,null))], null);var input_checker30112 = schema.core.checker.call(null,input_schema30111);var output_checker30113 = schema.core.checker.call(null,output_schema30110);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function constructor30105(G__30114){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30114], null);var temp__4126__auto___30442 = input_checker30112.call(null,args__6035__auto___30441);if(cljs.core.truth_(temp__4126__auto___30442))
{var error__6036__auto___30443 = temp__4126__auto___30442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30105","constructor30105",1430946553,null),cljs.core.pr_str.call(null,error__6036__auto___30443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30443,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30441,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30111,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30107 = G__30114;while(true){
if(cljs.core.map_QMARK_.call(null,map30107))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30107)));
}
var map30109 = plumbing.fnk.schema.safe_get.call(null,map30107,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30109,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30108 = plumbing.fnk.schema.safe_get.call(null,map30107,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30108,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30108,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30107,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30276 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30276 = (function (output_checker30113,map30108,owner,input_schema30111,map30107,output_schema30110,component_specs,filter_spec,history,G__30114,components,constructor30105,input_checker30112,validate__6034__auto__,id,map30109,filter_rq_pub,ufv__,url_components,meta30277){
this.output_checker30113 = output_checker30113;
this.map30108 = map30108;
this.owner = owner;
this.input_schema30111 = input_schema30111;
this.map30107 = map30107;
this.output_schema30110 = output_schema30110;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.G__30114 = G__30114;
this.components = components;
this.constructor30105 = constructor30105;
this.input_checker30112 = input_checker30112;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30109 = map30109;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30277 = meta30277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30276.cljs$lang$type = true;
clustermap.components.filter.t30276.cljs$lang$ctorStr = "clustermap.components.filter/t30276";
clustermap.components.filter.t30276.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30276");
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30276.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30276.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_,p__30279,___$1){var self__ = this;
var map__30280 = p__30279;var map__30280__$1 = ((cljs.core.seq_QMARK_.call(null,map__30280))?cljs.core.apply.call(null,cljs.core.hash_map,map__30280):map__30280);var next_props = map__30280__$1;var map__30281 = cljs.core.get.call(null,map__30280__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30281__$1 = ((cljs.core.seq_QMARK_.call(null,map__30281))?cljs.core.apply.call(null,cljs.core.hash_map,map__30281):map__30281);var next_filter_spec = map__30281__$1;var map__30282 = cljs.core.get.call(null,map__30281__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30282__$1 = ((cljs.core.seq_QMARK_.call(null,map__30282))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);var next_url_components = map__30282__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30276.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30276.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30283_30444 = cljs.core.seq.call(null,chs);var chunk__30284_30445 = null;var count__30285_30446 = (0);var i__30286_30447 = (0);while(true){
if((i__30286_30447 < count__30285_30446))
{var vec__30287_30448 = cljs.core._nth.call(null,chunk__30284_30445,i__30286_30447);var component_id_30449 = cljs.core.nth.call(null,vec__30287_30448,(0),null);var ch_30450 = cljs.core.nth.call(null,vec__30287_30448,(1),null);cljs.core.async.close_BANG_.call(null,ch_30450);
{
var G__30451 = seq__30283_30444;
var G__30452 = chunk__30284_30445;
var G__30453 = count__30285_30446;
var G__30454 = (i__30286_30447 + (1));
seq__30283_30444 = G__30451;
chunk__30284_30445 = G__30452;
count__30285_30446 = G__30453;
i__30286_30447 = G__30454;
continue;
}
} else
{var temp__4126__auto___30455 = cljs.core.seq.call(null,seq__30283_30444);if(temp__4126__auto___30455)
{var seq__30283_30456__$1 = temp__4126__auto___30455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30283_30456__$1))
{var c__4408__auto___30457 = cljs.core.chunk_first.call(null,seq__30283_30456__$1);{
var G__30458 = cljs.core.chunk_rest.call(null,seq__30283_30456__$1);
var G__30459 = c__4408__auto___30457;
var G__30460 = cljs.core.count.call(null,c__4408__auto___30457);
var G__30461 = (0);
seq__30283_30444 = G__30458;
chunk__30284_30445 = G__30459;
count__30285_30446 = G__30460;
i__30286_30447 = G__30461;
continue;
}
} else
{var vec__30288_30462 = cljs.core.first.call(null,seq__30283_30456__$1);var component_id_30463 = cljs.core.nth.call(null,vec__30288_30462,(0),null);var ch_30464 = cljs.core.nth.call(null,vec__30288_30462,(1),null);cljs.core.async.close_BANG_.call(null,ch_30464);
{
var G__30465 = cljs.core.next.call(null,seq__30283_30456__$1);
var G__30466 = null;
var G__30467 = (0);
var G__30468 = (0);
seq__30283_30444 = G__30465;
chunk__30284_30445 = G__30466;
count__30285_30446 = G__30467;
i__30286_30447 = G__30468;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30276.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (state_30384){var state_val_30385 = (state_30384[(1)]);if((state_val_30385 === (7)))
{var inst_30375 = (state_30384[(2)]);var state_30384__$1 = state_30384;if(cljs.core.truth_(inst_30375))
{var statearr_30386_30469 = state_30384__$1;(statearr_30386_30469[(1)] = (25));
} else
{var statearr_30387_30470 = state_30384__$1;(statearr_30387_30470[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (20)))
{var inst_30301 = (state_30384[(7)]);var inst_30345 = (state_30384[(8)]);var inst_30294 = (state_30384[(9)]);var inst_30336 = (state_30384[(10)]);var inst_30352 = (state_30384[(11)]);var inst_30295 = (state_30384[(12)]);var inst_30345__$1 = cljs.core.first.call(null,inst_30336);var inst_30346 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30347 = cljs.core.get.call(null,inst_30295,inst_30345__$1);var inst_30348 = ["FILTER",inst_30294,inst_30345__$1,inst_30347];var inst_30349 = (new cljs.core.PersistentVector(null,4,(5),inst_30346,inst_30348,null));var inst_30350 = cljs.core.clj__GT_js.call(null,inst_30349);var inst_30351 = console.log(inst_30350);var inst_30352__$1 = cljs.core.get.call(null,inst_30301,inst_30345__$1);var state_30384__$1 = (function (){var statearr_30388 = state_30384;(statearr_30388[(13)] = inst_30351);
(statearr_30388[(8)] = inst_30345__$1);
(statearr_30388[(11)] = inst_30352__$1);
return statearr_30388;
})();if(cljs.core.truth_(inst_30352__$1))
{var statearr_30389_30471 = state_30384__$1;(statearr_30389_30471[(1)] = (22));
} else
{var statearr_30390_30472 = state_30384__$1;(statearr_30390_30472[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (27)))
{var inst_30380 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30391_30473 = state_30384__$1;(statearr_30391_30473[(2)] = inst_30380);
(statearr_30391_30473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (1)))
{var state_30384__$1 = state_30384;var statearr_30392_30474 = state_30384__$1;(statearr_30392_30474[(2)] = null);
(statearr_30392_30474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (24)))
{var inst_30336 = (state_30384[(10)]);var inst_30361 = (state_30384[(2)]);var inst_30362 = cljs.core.next.call(null,inst_30336);var inst_30308 = inst_30362;var inst_30309 = null;var inst_30310 = (0);var inst_30311 = (0);var state_30384__$1 = (function (){var statearr_30396 = state_30384;(statearr_30396[(14)] = inst_30309);
(statearr_30396[(15)] = inst_30310);
(statearr_30396[(16)] = inst_30308);
(statearr_30396[(17)] = inst_30311);
(statearr_30396[(18)] = inst_30361);
return statearr_30396;
})();var statearr_30397_30475 = state_30384__$1;(statearr_30397_30475[(2)] = null);
(statearr_30397_30475[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (4)))
{var inst_30291 = (state_30384[(19)]);var inst_30291__$1 = (state_30384[(2)]);var state_30384__$1 = (function (){var statearr_30398 = state_30384;(statearr_30398[(19)] = inst_30291__$1);
return statearr_30398;
})();if(cljs.core.truth_(inst_30291__$1))
{var statearr_30399_30476 = state_30384__$1;(statearr_30399_30476[(1)] = (5));
} else
{var statearr_30400_30477 = state_30384__$1;(statearr_30400_30477[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (15)))
{var inst_30309 = (state_30384[(14)]);var inst_30310 = (state_30384[(15)]);var inst_30308 = (state_30384[(16)]);var inst_30311 = (state_30384[(17)]);var inst_30332 = (state_30384[(2)]);var inst_30333 = (inst_30311 + (1));var tmp30393 = inst_30309;var tmp30394 = inst_30310;var tmp30395 = inst_30308;var inst_30308__$1 = tmp30395;var inst_30309__$1 = tmp30393;var inst_30310__$1 = tmp30394;var inst_30311__$1 = inst_30333;var state_30384__$1 = (function (){var statearr_30401 = state_30384;(statearr_30401[(14)] = inst_30309__$1);
(statearr_30401[(15)] = inst_30310__$1);
(statearr_30401[(16)] = inst_30308__$1);
(statearr_30401[(17)] = inst_30311__$1);
(statearr_30401[(20)] = inst_30332);
return statearr_30401;
})();var statearr_30402_30478 = state_30384__$1;(statearr_30402_30478[(2)] = null);
(statearr_30402_30478[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (21)))
{var inst_30365 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30403_30479 = state_30384__$1;(statearr_30403_30479[(2)] = inst_30365);
(statearr_30403_30479[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (13)))
{var inst_30323 = (state_30384[(21)]);var inst_30316 = (state_30384[(22)]);var inst_30295 = (state_30384[(12)]);var inst_30325 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30326 = cljs.core.get.call(null,inst_30295,inst_30316);var inst_30327 = [inst_30316,inst_30326];var inst_30328 = (new cljs.core.PersistentVector(null,2,(5),inst_30325,inst_30327,null));var inst_30329 = cljs.core.async.put_BANG_.call(null,inst_30323,inst_30328);var state_30384__$1 = state_30384;var statearr_30404_30480 = state_30384__$1;(statearr_30404_30480[(2)] = inst_30329);
(statearr_30404_30480[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (22)))
{var inst_30345 = (state_30384[(8)]);var inst_30352 = (state_30384[(11)]);var inst_30295 = (state_30384[(12)]);var inst_30354 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30355 = cljs.core.get.call(null,inst_30295,inst_30345);var inst_30356 = [inst_30345,inst_30355];var inst_30357 = (new cljs.core.PersistentVector(null,2,(5),inst_30354,inst_30356,null));var inst_30358 = cljs.core.async.put_BANG_.call(null,inst_30352,inst_30357);var state_30384__$1 = state_30384;var statearr_30405_30481 = state_30384__$1;(statearr_30405_30481[(2)] = inst_30358);
(statearr_30405_30481[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (6)))
{var state_30384__$1 = state_30384;var statearr_30406_30482 = state_30384__$1;(statearr_30406_30482[(2)] = null);
(statearr_30406_30482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (25)))
{var state_30384__$1 = state_30384;var statearr_30407_30483 = state_30384__$1;(statearr_30407_30483[(2)] = null);
(statearr_30407_30483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (17)))
{var state_30384__$1 = state_30384;var statearr_30408_30484 = state_30384__$1;(statearr_30408_30484[(2)] = null);
(statearr_30408_30484[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (3)))
{var inst_30382 = (state_30384[(2)]);var state_30384__$1 = state_30384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30384__$1,inst_30382);
} else
{if((state_val_30385 === (12)))
{var inst_30370 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30409_30485 = state_30384__$1;(statearr_30409_30485[(2)] = inst_30370);
(statearr_30409_30485[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (2)))
{var state_30384__$1 = state_30384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30384__$1,(4),filter_rq_sub);
} else
{if((state_val_30385 === (23)))
{var state_30384__$1 = state_30384;var statearr_30410_30486 = state_30384__$1;(statearr_30410_30486[(2)] = null);
(statearr_30410_30486[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (19)))
{var inst_30336 = (state_30384[(10)]);var inst_30340 = cljs.core.chunk_first.call(null,inst_30336);var inst_30341 = cljs.core.chunk_rest.call(null,inst_30336);var inst_30342 = cljs.core.count.call(null,inst_30340);var inst_30308 = inst_30341;var inst_30309 = inst_30340;var inst_30310 = inst_30342;var inst_30311 = (0);var state_30384__$1 = (function (){var statearr_30411 = state_30384;(statearr_30411[(14)] = inst_30309);
(statearr_30411[(15)] = inst_30310);
(statearr_30411[(16)] = inst_30308);
(statearr_30411[(17)] = inst_30311);
return statearr_30411;
})();var statearr_30412_30487 = state_30384__$1;(statearr_30412_30487[(2)] = null);
(statearr_30412_30487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (11)))
{var inst_30308 = (state_30384[(16)]);var inst_30336 = (state_30384[(10)]);var inst_30336__$1 = cljs.core.seq.call(null,inst_30308);var state_30384__$1 = (function (){var statearr_30413 = state_30384;(statearr_30413[(10)] = inst_30336__$1);
return statearr_30413;
})();if(inst_30336__$1)
{var statearr_30414_30488 = state_30384__$1;(statearr_30414_30488[(1)] = (16));
} else
{var statearr_30415_30489 = state_30384__$1;(statearr_30415_30489[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (9)))
{var inst_30372 = (state_30384[(2)]);var state_30384__$1 = (function (){var statearr_30416 = state_30384;(statearr_30416[(23)] = inst_30372);
return statearr_30416;
})();var statearr_30417_30490 = state_30384__$1;(statearr_30417_30490[(2)] = true);
(statearr_30417_30490[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (5)))
{var inst_30294 = (state_30384[(9)]);var inst_30291 = (state_30384[(19)]);var inst_30295 = (state_30384[(12)]);var inst_30294__$1 = cljs.core.nth.call(null,inst_30291,(0),null);var inst_30295__$1 = cljs.core.nth.call(null,inst_30291,(1),null);var inst_30296 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30297 = ["FILTER-RQ",inst_30294__$1,inst_30295__$1];var inst_30298 = (new cljs.core.PersistentVector(null,3,(5),inst_30296,inst_30297,null));var inst_30299 = cljs.core.clj__GT_js.call(null,inst_30298);var inst_30300 = console.log(inst_30299);var inst_30301 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30302 = cljs.core.keys.call(null,inst_30295__$1);var inst_30307 = cljs.core.seq.call(null,inst_30302);var inst_30308 = inst_30307;var inst_30309 = null;var inst_30310 = (0);var inst_30311 = (0);var state_30384__$1 = (function (){var statearr_30418 = state_30384;(statearr_30418[(14)] = inst_30309);
(statearr_30418[(7)] = inst_30301);
(statearr_30418[(15)] = inst_30310);
(statearr_30418[(24)] = inst_30300);
(statearr_30418[(16)] = inst_30308);
(statearr_30418[(9)] = inst_30294__$1);
(statearr_30418[(17)] = inst_30311);
(statearr_30418[(12)] = inst_30295__$1);
return statearr_30418;
})();var statearr_30419_30491 = state_30384__$1;(statearr_30419_30491[(2)] = null);
(statearr_30419_30491[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (14)))
{var state_30384__$1 = state_30384;var statearr_30420_30492 = state_30384__$1;(statearr_30420_30492[(2)] = null);
(statearr_30420_30492[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (26)))
{var state_30384__$1 = state_30384;var statearr_30421_30493 = state_30384__$1;(statearr_30421_30493[(2)] = null);
(statearr_30421_30493[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (16)))
{var inst_30336 = (state_30384[(10)]);var inst_30338 = cljs.core.chunked_seq_QMARK_.call(null,inst_30336);var state_30384__$1 = state_30384;if(inst_30338)
{var statearr_30422_30494 = state_30384__$1;(statearr_30422_30494[(1)] = (19));
} else
{var statearr_30423_30495 = state_30384__$1;(statearr_30423_30495[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (10)))
{var inst_30309 = (state_30384[(14)]);var inst_30301 = (state_30384[(7)]);var inst_30323 = (state_30384[(21)]);var inst_30294 = (state_30384[(9)]);var inst_30311 = (state_30384[(17)]);var inst_30316 = (state_30384[(22)]);var inst_30295 = (state_30384[(12)]);var inst_30316__$1 = cljs.core._nth.call(null,inst_30309,inst_30311);var inst_30317 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30318 = cljs.core.get.call(null,inst_30295,inst_30316__$1);var inst_30319 = ["FILTER",inst_30294,inst_30316__$1,inst_30318];var inst_30320 = (new cljs.core.PersistentVector(null,4,(5),inst_30317,inst_30319,null));var inst_30321 = cljs.core.clj__GT_js.call(null,inst_30320);var inst_30322 = console.log(inst_30321);var inst_30323__$1 = cljs.core.get.call(null,inst_30301,inst_30316__$1);var state_30384__$1 = (function (){var statearr_30424 = state_30384;(statearr_30424[(21)] = inst_30323__$1);
(statearr_30424[(25)] = inst_30322);
(statearr_30424[(22)] = inst_30316__$1);
return statearr_30424;
})();if(cljs.core.truth_(inst_30323__$1))
{var statearr_30425_30496 = state_30384__$1;(statearr_30425_30496[(1)] = (13));
} else
{var statearr_30426_30497 = state_30384__$1;(statearr_30426_30497[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (18)))
{var inst_30368 = (state_30384[(2)]);var state_30384__$1 = state_30384;var statearr_30427_30498 = state_30384__$1;(statearr_30427_30498[(2)] = inst_30368);
(statearr_30427_30498[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30385 === (8)))
{var inst_30310 = (state_30384[(15)]);var inst_30311 = (state_30384[(17)]);var inst_30313 = (inst_30311 < inst_30310);var inst_30314 = inst_30313;var state_30384__$1 = state_30384;if(cljs.core.truth_(inst_30314))
{var statearr_30428_30499 = state_30384__$1;(statearr_30428_30499[(1)] = (10));
} else
{var statearr_30429_30500 = state_30384__$1;(statearr_30429_30500[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30433[(0)] = state_machine__9111__auto__);
(statearr_30433[(1)] = (1));
return statearr_30433;
});
var state_machine__9111__auto____1 = (function (state_30384){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30384);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30434){if((e30434 instanceof Object))
{var ex__9114__auto__ = e30434;var statearr_30435_30501 = state_30384;(statearr_30435_30501[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30434;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30502 = state_30384;
state_30384 = G__30502;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
})();var state__9127__auto__ = (function (){var statearr_30436 = f__9126__auto__.call(null);(statearr_30436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_30278){var self__ = this;
var _30278__$1 = this;return self__.meta30277;
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.t30276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function (_30278,meta30277__$1){var self__ = this;
var _30278__$1 = this;return (new clustermap.components.filter.t30276(self__.output_checker30113,self__.map30108,self__.owner,self__.input_schema30111,self__.map30107,self__.output_schema30110,self__.component_specs,self__.filter_spec,self__.history,self__.G__30114,self__.components,self__.constructor30105,self__.input_checker30112,self__.validate__6034__auto__,self__.id,self__.map30109,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30277__$1));
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
clustermap.components.filter.__GT_t30276 = ((function (owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113){
return (function __GT_t30276(output_checker30113__$1,map30108__$1,owner__$1,input_schema30111__$1,map30107__$1,output_schema30110__$1,component_specs__$1,filter_spec__$1,history__$1,G__30114__$1,components__$1,constructor30105__$1,input_checker30112__$1,validate__6034__auto____$1,id__$1,map30109__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30277){return (new clustermap.components.filter.t30276(output_checker30113__$1,map30108__$1,owner__$1,input_schema30111__$1,map30107__$1,output_schema30110__$1,component_specs__$1,filter_spec__$1,history__$1,G__30114__$1,components__$1,constructor30105__$1,input_checker30112__$1,validate__6034__auto____$1,id__$1,map30109__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30277));
});})(owner,history,filter_rq_pub,map30108,url_components,components,component_specs,id,filter_spec,map30109,validate__6034__auto__,ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
;
}
return (new clustermap.components.filter.t30276(output_checker30113,map30108,owner,input_schema30111,map30107,output_schema30110,component_specs,filter_spec,history,G__30114,components,constructor30105,input_checker30112,validate__6034__auto__,id,map30109,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30503 = output_checker30113.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30503))
{var error__6036__auto___30504 = temp__4126__auto___30503;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30105","constructor30105",1430946553,null),cljs.core.pr_str.call(null,error__6036__auto___30504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30504,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30110,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30110,input_schema30111,input_checker30112,output_checker30113))
,schema.core.make_fn_schema.call(null,output_schema30110,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30111], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30440){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30104,p__30437){var vec__30439 = p__30437;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30439,(0),null);return component_fnk__7881__auto___30440.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30104),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30104,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30104,var_args){
var p__30437 = null;if (arguments.length > 2) {
  p__30437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30104,p__30437);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30505){
var data__7882__auto__ = cljs.core.first(arglist__30505);
arglist__30505 = cljs.core.next(arglist__30505);
var owner30104 = cljs.core.first(arglist__30505);
var p__30437 = cljs.core.rest(arglist__30505);
return filter_component__delegate(data__7882__auto__,owner30104,p__30437);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30440))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30106){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30106);
});
__GT_filter_component = function(cursor__7850__auto__,m30106){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
