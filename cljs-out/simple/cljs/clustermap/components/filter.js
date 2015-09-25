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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30054){var map__30056 = p__30054;var map__30056__$1 = ((cljs.core.seq_QMARK_.call(null,map__30056))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);var filter_spec = map__30056__$1;var component_descrs = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30057){var map__30059 = p__30057;var map__30059__$1 = ((cljs.core.seq_QMARK_.call(null,map__30059))?cljs.core.apply.call(null,cljs.core.hash_map,map__30059):map__30059);var filter_spec = map__30059__$1;var component_descrs = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30059__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30060,component_filter_rq_chan){var map__30065 = p__30060;var map__30065__$1 = ((cljs.core.seq_QMARK_.call(null,map__30065))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);var component_spec = map__30065__$1;var type = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30066 = cljs.core._EQ_;var expr__30067 = type;if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30067)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30067)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30067)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30067)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30066.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30067)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30067))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30069,component_filter_rq_chan){var map__30071 = p__30069;var map__30071__$1 = ((cljs.core.seq_QMARK_.call(null,map__30071))?cljs.core.apply.call(null,cljs.core.hash_map,map__30071):map__30071);var component_spec = map__30071__$1;var visible = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30071,map__30071__$1,component_spec,visible,skip_label,label,id){
return (function (e){return om.core.update_BANG_.call(null,component_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),cljs.core.not.call(null,visible));
});})(map__30071,map__30071__$1,component_spec,visible,skip_label,label,id))
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30073 = schema.core.Any;var input_schema30074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30072","map30072",-521383039,null))], null);var input_checker30075 = schema.core.checker.call(null,input_schema30074);var output_checker30076 = schema.core.checker.call(null,output_schema30073);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30073,input_schema30074,input_checker30075,output_checker30076){
return (function render_STAR_(G__30077){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30077], null);var temp__4126__auto___30095 = input_checker30075.call(null,args__6035__auto___30094);if(cljs.core.truth_(temp__4126__auto___30095))
{var error__6036__auto___30096 = temp__4126__auto___30095;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30096,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30094,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30074,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30072 = G__30077;while(true){
if(cljs.core.map_QMARK_.call(null,map30072))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30072)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30072,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30072,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30072,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30073,input_schema30074,input_checker30075,output_checker30076){
return (function iter__30086(s__30087){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30073,input_schema30074,input_checker30075,output_checker30076){
return (function (){var s__30087__$1 = s__30087;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30087__$1);if(temp__4126__auto__)
{var s__30087__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30087__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30087__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30089 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30088 = (0);while(true){
if((i__30088 < size__4376__auto__))
{var map__30092 = cljs.core._nth.call(null,c__4375__auto__,i__30088);var map__30092__$1 = ((cljs.core.seq_QMARK_.call(null,map__30092))?cljs.core.apply.call(null,cljs.core.hash_map,map__30092):map__30092);var component_spec = map__30092__$1;var id = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30089,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30097 = (i__30088 + (1));
i__30088 = G__30097;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30089),iter__30086.call(null,cljs.core.chunk_rest.call(null,s__30087__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30089),null);
}
} else
{var map__30093 = cljs.core.first.call(null,s__30087__$2);var map__30093__$1 = ((cljs.core.seq_QMARK_.call(null,map__30093))?cljs.core.apply.call(null,cljs.core.hash_map,map__30093):map__30093);var component_spec = map__30093__$1;var id = cljs.core.get.call(null,map__30093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30086.call(null,cljs.core.rest.call(null,s__30087__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30073,input_schema30074,input_checker30075,output_checker30076))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30073,input_schema30074,input_checker30075,output_checker30076))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30098 = output_checker30076.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30098))
{var error__6036__auto___30099 = temp__4126__auto___30098;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30099)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30099,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30073,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30073,input_schema30074,input_checker30075,output_checker30076))
,schema.core.make_fn_schema.call(null,output_schema30073,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30074], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30436 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30106 = schema.core.Any;var input_schema30107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30103","map30103",-758616017,null))], null);var input_checker30108 = schema.core.checker.call(null,input_schema30107);var output_checker30109 = schema.core.checker.call(null,output_schema30106);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function constructor30101(G__30110){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30437 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30110], null);var temp__4126__auto___30438 = input_checker30108.call(null,args__6035__auto___30437);if(cljs.core.truth_(temp__4126__auto___30438))
{var error__6036__auto___30439 = temp__4126__auto___30438;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30101","constructor30101",-448497229,null),cljs.core.pr_str.call(null,error__6036__auto___30439)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30439,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30437,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30107,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30103 = G__30110;while(true){
if(cljs.core.map_QMARK_.call(null,map30103))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30103)));
}
var map30105 = plumbing.fnk.schema.safe_get.call(null,map30103,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30105,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30104 = plumbing.fnk.schema.safe_get.call(null,map30103,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30104,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30104,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30103,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30272 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30272 = (function (output_schema30106,owner,input_checker30108,map30104,component_specs,map30103,filter_spec,output_checker30109,constructor30101,history,map30105,components,validate__6034__auto__,input_schema30107,id,G__30110,filter_rq_pub,ufv__,url_components,meta30273){
this.output_schema30106 = output_schema30106;
this.owner = owner;
this.input_checker30108 = input_checker30108;
this.map30104 = map30104;
this.component_specs = component_specs;
this.map30103 = map30103;
this.filter_spec = filter_spec;
this.output_checker30109 = output_checker30109;
this.constructor30101 = constructor30101;
this.history = history;
this.map30105 = map30105;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema30107 = input_schema30107;
this.id = id;
this.G__30110 = G__30110;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30273 = meta30273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30272.cljs$lang$type = true;
clustermap.components.filter.t30272.cljs$lang$ctorStr = "clustermap.components.filter/t30272";
clustermap.components.filter.t30272.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30272");
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30272.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30272.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_,p__30275,___$1){var self__ = this;
var map__30276 = p__30275;var map__30276__$1 = ((cljs.core.seq_QMARK_.call(null,map__30276))?cljs.core.apply.call(null,cljs.core.hash_map,map__30276):map__30276);var next_props = map__30276__$1;var map__30277 = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30277__$1 = ((cljs.core.seq_QMARK_.call(null,map__30277))?cljs.core.apply.call(null,cljs.core.hash_map,map__30277):map__30277);var next_filter_spec = map__30277__$1;var map__30278 = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30278__$1 = ((cljs.core.seq_QMARK_.call(null,map__30278))?cljs.core.apply.call(null,cljs.core.hash_map,map__30278):map__30278);var next_url_components = map__30278__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30272.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30272.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30279_30440 = cljs.core.seq.call(null,chs);var chunk__30280_30441 = null;var count__30281_30442 = (0);var i__30282_30443 = (0);while(true){
if((i__30282_30443 < count__30281_30442))
{var vec__30283_30444 = cljs.core._nth.call(null,chunk__30280_30441,i__30282_30443);var component_id_30445 = cljs.core.nth.call(null,vec__30283_30444,(0),null);var ch_30446 = cljs.core.nth.call(null,vec__30283_30444,(1),null);cljs.core.async.close_BANG_.call(null,ch_30446);
{
var G__30447 = seq__30279_30440;
var G__30448 = chunk__30280_30441;
var G__30449 = count__30281_30442;
var G__30450 = (i__30282_30443 + (1));
seq__30279_30440 = G__30447;
chunk__30280_30441 = G__30448;
count__30281_30442 = G__30449;
i__30282_30443 = G__30450;
continue;
}
} else
{var temp__4126__auto___30451 = cljs.core.seq.call(null,seq__30279_30440);if(temp__4126__auto___30451)
{var seq__30279_30452__$1 = temp__4126__auto___30451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30279_30452__$1))
{var c__4408__auto___30453 = cljs.core.chunk_first.call(null,seq__30279_30452__$1);{
var G__30454 = cljs.core.chunk_rest.call(null,seq__30279_30452__$1);
var G__30455 = c__4408__auto___30453;
var G__30456 = cljs.core.count.call(null,c__4408__auto___30453);
var G__30457 = (0);
seq__30279_30440 = G__30454;
chunk__30280_30441 = G__30455;
count__30281_30442 = G__30456;
i__30282_30443 = G__30457;
continue;
}
} else
{var vec__30284_30458 = cljs.core.first.call(null,seq__30279_30452__$1);var component_id_30459 = cljs.core.nth.call(null,vec__30284_30458,(0),null);var ch_30460 = cljs.core.nth.call(null,vec__30284_30458,(1),null);cljs.core.async.close_BANG_.call(null,ch_30460);
{
var G__30461 = cljs.core.next.call(null,seq__30279_30452__$1);
var G__30462 = null;
var G__30463 = (0);
var G__30464 = (0);
seq__30279_30440 = G__30461;
chunk__30280_30441 = G__30462;
count__30281_30442 = G__30463;
i__30282_30443 = G__30464;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30272.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (state_30380){var state_val_30381 = (state_30380[(1)]);if((state_val_30381 === (7)))
{var inst_30371 = (state_30380[(2)]);var state_30380__$1 = state_30380;if(cljs.core.truth_(inst_30371))
{var statearr_30382_30465 = state_30380__$1;(statearr_30382_30465[(1)] = (25));
} else
{var statearr_30383_30466 = state_30380__$1;(statearr_30383_30466[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (20)))
{var inst_30297 = (state_30380[(7)]);var inst_30348 = (state_30380[(8)]);var inst_30290 = (state_30380[(9)]);var inst_30341 = (state_30380[(10)]);var inst_30291 = (state_30380[(11)]);var inst_30332 = (state_30380[(12)]);var inst_30341__$1 = cljs.core.first.call(null,inst_30332);var inst_30342 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30343 = cljs.core.get.call(null,inst_30291,inst_30341__$1);var inst_30344 = ["FILTER",inst_30290,inst_30341__$1,inst_30343];var inst_30345 = (new cljs.core.PersistentVector(null,4,(5),inst_30342,inst_30344,null));var inst_30346 = cljs.core.clj__GT_js.call(null,inst_30345);var inst_30347 = console.log(inst_30346);var inst_30348__$1 = cljs.core.get.call(null,inst_30297,inst_30341__$1);var state_30380__$1 = (function (){var statearr_30384 = state_30380;(statearr_30384[(8)] = inst_30348__$1);
(statearr_30384[(10)] = inst_30341__$1);
(statearr_30384[(13)] = inst_30347);
return statearr_30384;
})();if(cljs.core.truth_(inst_30348__$1))
{var statearr_30385_30467 = state_30380__$1;(statearr_30385_30467[(1)] = (22));
} else
{var statearr_30386_30468 = state_30380__$1;(statearr_30386_30468[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (27)))
{var inst_30376 = (state_30380[(2)]);var state_30380__$1 = state_30380;var statearr_30387_30469 = state_30380__$1;(statearr_30387_30469[(2)] = inst_30376);
(statearr_30387_30469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (1)))
{var state_30380__$1 = state_30380;var statearr_30388_30470 = state_30380__$1;(statearr_30388_30470[(2)] = null);
(statearr_30388_30470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (24)))
{var inst_30332 = (state_30380[(12)]);var inst_30357 = (state_30380[(2)]);var inst_30358 = cljs.core.next.call(null,inst_30332);var inst_30304 = inst_30358;var inst_30305 = null;var inst_30306 = (0);var inst_30307 = (0);var state_30380__$1 = (function (){var statearr_30392 = state_30380;(statearr_30392[(14)] = inst_30307);
(statearr_30392[(15)] = inst_30357);
(statearr_30392[(16)] = inst_30306);
(statearr_30392[(17)] = inst_30304);
(statearr_30392[(18)] = inst_30305);
return statearr_30392;
})();var statearr_30393_30471 = state_30380__$1;(statearr_30393_30471[(2)] = null);
(statearr_30393_30471[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (4)))
{var inst_30287 = (state_30380[(19)]);var inst_30287__$1 = (state_30380[(2)]);var state_30380__$1 = (function (){var statearr_30394 = state_30380;(statearr_30394[(19)] = inst_30287__$1);
return statearr_30394;
})();if(cljs.core.truth_(inst_30287__$1))
{var statearr_30395_30472 = state_30380__$1;(statearr_30395_30472[(1)] = (5));
} else
{var statearr_30396_30473 = state_30380__$1;(statearr_30396_30473[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (15)))
{var inst_30307 = (state_30380[(14)]);var inst_30306 = (state_30380[(16)]);var inst_30304 = (state_30380[(17)]);var inst_30305 = (state_30380[(18)]);var inst_30328 = (state_30380[(2)]);var inst_30329 = (inst_30307 + (1));var tmp30389 = inst_30306;var tmp30390 = inst_30304;var tmp30391 = inst_30305;var inst_30304__$1 = tmp30390;var inst_30305__$1 = tmp30391;var inst_30306__$1 = tmp30389;var inst_30307__$1 = inst_30329;var state_30380__$1 = (function (){var statearr_30397 = state_30380;(statearr_30397[(14)] = inst_30307__$1);
(statearr_30397[(20)] = inst_30328);
(statearr_30397[(16)] = inst_30306__$1);
(statearr_30397[(17)] = inst_30304__$1);
(statearr_30397[(18)] = inst_30305__$1);
return statearr_30397;
})();var statearr_30398_30474 = state_30380__$1;(statearr_30398_30474[(2)] = null);
(statearr_30398_30474[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (21)))
{var inst_30361 = (state_30380[(2)]);var state_30380__$1 = state_30380;var statearr_30399_30475 = state_30380__$1;(statearr_30399_30475[(2)] = inst_30361);
(statearr_30399_30475[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (13)))
{var inst_30291 = (state_30380[(11)]);var inst_30312 = (state_30380[(21)]);var inst_30319 = (state_30380[(22)]);var inst_30321 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30322 = cljs.core.get.call(null,inst_30291,inst_30312);var inst_30323 = [inst_30312,inst_30322];var inst_30324 = (new cljs.core.PersistentVector(null,2,(5),inst_30321,inst_30323,null));var inst_30325 = cljs.core.async.put_BANG_.call(null,inst_30319,inst_30324);var state_30380__$1 = state_30380;var statearr_30400_30476 = state_30380__$1;(statearr_30400_30476[(2)] = inst_30325);
(statearr_30400_30476[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (22)))
{var inst_30348 = (state_30380[(8)]);var inst_30341 = (state_30380[(10)]);var inst_30291 = (state_30380[(11)]);var inst_30350 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30351 = cljs.core.get.call(null,inst_30291,inst_30341);var inst_30352 = [inst_30341,inst_30351];var inst_30353 = (new cljs.core.PersistentVector(null,2,(5),inst_30350,inst_30352,null));var inst_30354 = cljs.core.async.put_BANG_.call(null,inst_30348,inst_30353);var state_30380__$1 = state_30380;var statearr_30401_30477 = state_30380__$1;(statearr_30401_30477[(2)] = inst_30354);
(statearr_30401_30477[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (6)))
{var state_30380__$1 = state_30380;var statearr_30402_30478 = state_30380__$1;(statearr_30402_30478[(2)] = null);
(statearr_30402_30478[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (25)))
{var state_30380__$1 = state_30380;var statearr_30403_30479 = state_30380__$1;(statearr_30403_30479[(2)] = null);
(statearr_30403_30479[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (17)))
{var state_30380__$1 = state_30380;var statearr_30404_30480 = state_30380__$1;(statearr_30404_30480[(2)] = null);
(statearr_30404_30480[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (3)))
{var inst_30378 = (state_30380[(2)]);var state_30380__$1 = state_30380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30380__$1,inst_30378);
} else
{if((state_val_30381 === (12)))
{var inst_30366 = (state_30380[(2)]);var state_30380__$1 = state_30380;var statearr_30405_30481 = state_30380__$1;(statearr_30405_30481[(2)] = inst_30366);
(statearr_30405_30481[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (2)))
{var state_30380__$1 = state_30380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30380__$1,(4),filter_rq_sub);
} else
{if((state_val_30381 === (23)))
{var state_30380__$1 = state_30380;var statearr_30406_30482 = state_30380__$1;(statearr_30406_30482[(2)] = null);
(statearr_30406_30482[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (19)))
{var inst_30332 = (state_30380[(12)]);var inst_30336 = cljs.core.chunk_first.call(null,inst_30332);var inst_30337 = cljs.core.chunk_rest.call(null,inst_30332);var inst_30338 = cljs.core.count.call(null,inst_30336);var inst_30304 = inst_30337;var inst_30305 = inst_30336;var inst_30306 = inst_30338;var inst_30307 = (0);var state_30380__$1 = (function (){var statearr_30407 = state_30380;(statearr_30407[(14)] = inst_30307);
(statearr_30407[(16)] = inst_30306);
(statearr_30407[(17)] = inst_30304);
(statearr_30407[(18)] = inst_30305);
return statearr_30407;
})();var statearr_30408_30483 = state_30380__$1;(statearr_30408_30483[(2)] = null);
(statearr_30408_30483[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (11)))
{var inst_30304 = (state_30380[(17)]);var inst_30332 = (state_30380[(12)]);var inst_30332__$1 = cljs.core.seq.call(null,inst_30304);var state_30380__$1 = (function (){var statearr_30409 = state_30380;(statearr_30409[(12)] = inst_30332__$1);
return statearr_30409;
})();if(inst_30332__$1)
{var statearr_30410_30484 = state_30380__$1;(statearr_30410_30484[(1)] = (16));
} else
{var statearr_30411_30485 = state_30380__$1;(statearr_30411_30485[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (9)))
{var inst_30368 = (state_30380[(2)]);var state_30380__$1 = (function (){var statearr_30412 = state_30380;(statearr_30412[(23)] = inst_30368);
return statearr_30412;
})();var statearr_30413_30486 = state_30380__$1;(statearr_30413_30486[(2)] = true);
(statearr_30413_30486[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (5)))
{var inst_30287 = (state_30380[(19)]);var inst_30290 = (state_30380[(9)]);var inst_30291 = (state_30380[(11)]);var inst_30290__$1 = cljs.core.nth.call(null,inst_30287,(0),null);var inst_30291__$1 = cljs.core.nth.call(null,inst_30287,(1),null);var inst_30292 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30293 = ["FILTER-RQ",inst_30290__$1,inst_30291__$1];var inst_30294 = (new cljs.core.PersistentVector(null,3,(5),inst_30292,inst_30293,null));var inst_30295 = cljs.core.clj__GT_js.call(null,inst_30294);var inst_30296 = console.log(inst_30295);var inst_30297 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30298 = cljs.core.keys.call(null,inst_30291__$1);var inst_30303 = cljs.core.seq.call(null,inst_30298);var inst_30304 = inst_30303;var inst_30305 = null;var inst_30306 = (0);var inst_30307 = (0);var state_30380__$1 = (function (){var statearr_30414 = state_30380;(statearr_30414[(14)] = inst_30307);
(statearr_30414[(7)] = inst_30297);
(statearr_30414[(16)] = inst_30306);
(statearr_30414[(9)] = inst_30290__$1);
(statearr_30414[(17)] = inst_30304);
(statearr_30414[(18)] = inst_30305);
(statearr_30414[(11)] = inst_30291__$1);
(statearr_30414[(24)] = inst_30296);
return statearr_30414;
})();var statearr_30415_30487 = state_30380__$1;(statearr_30415_30487[(2)] = null);
(statearr_30415_30487[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (14)))
{var state_30380__$1 = state_30380;var statearr_30416_30488 = state_30380__$1;(statearr_30416_30488[(2)] = null);
(statearr_30416_30488[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (26)))
{var state_30380__$1 = state_30380;var statearr_30417_30489 = state_30380__$1;(statearr_30417_30489[(2)] = null);
(statearr_30417_30489[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (16)))
{var inst_30332 = (state_30380[(12)]);var inst_30334 = cljs.core.chunked_seq_QMARK_.call(null,inst_30332);var state_30380__$1 = state_30380;if(inst_30334)
{var statearr_30418_30490 = state_30380__$1;(statearr_30418_30490[(1)] = (19));
} else
{var statearr_30419_30491 = state_30380__$1;(statearr_30419_30491[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (10)))
{var inst_30307 = (state_30380[(14)]);var inst_30297 = (state_30380[(7)]);var inst_30290 = (state_30380[(9)]);var inst_30305 = (state_30380[(18)]);var inst_30291 = (state_30380[(11)]);var inst_30312 = (state_30380[(21)]);var inst_30319 = (state_30380[(22)]);var inst_30312__$1 = cljs.core._nth.call(null,inst_30305,inst_30307);var inst_30313 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30314 = cljs.core.get.call(null,inst_30291,inst_30312__$1);var inst_30315 = ["FILTER",inst_30290,inst_30312__$1,inst_30314];var inst_30316 = (new cljs.core.PersistentVector(null,4,(5),inst_30313,inst_30315,null));var inst_30317 = cljs.core.clj__GT_js.call(null,inst_30316);var inst_30318 = console.log(inst_30317);var inst_30319__$1 = cljs.core.get.call(null,inst_30297,inst_30312__$1);var state_30380__$1 = (function (){var statearr_30420 = state_30380;(statearr_30420[(25)] = inst_30318);
(statearr_30420[(21)] = inst_30312__$1);
(statearr_30420[(22)] = inst_30319__$1);
return statearr_30420;
})();if(cljs.core.truth_(inst_30319__$1))
{var statearr_30421_30492 = state_30380__$1;(statearr_30421_30492[(1)] = (13));
} else
{var statearr_30422_30493 = state_30380__$1;(statearr_30422_30493[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (18)))
{var inst_30364 = (state_30380[(2)]);var state_30380__$1 = state_30380;var statearr_30423_30494 = state_30380__$1;(statearr_30423_30494[(2)] = inst_30364);
(statearr_30423_30494[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30381 === (8)))
{var inst_30307 = (state_30380[(14)]);var inst_30306 = (state_30380[(16)]);var inst_30309 = (inst_30307 < inst_30306);var inst_30310 = inst_30309;var state_30380__$1 = state_30380;if(cljs.core.truth_(inst_30310))
{var statearr_30424_30495 = state_30380__$1;(statearr_30424_30495[(1)] = (10));
} else
{var statearr_30425_30496 = state_30380__$1;(statearr_30425_30496[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30429[(0)] = state_machine__9111__auto__);
(statearr_30429[(1)] = (1));
return statearr_30429;
});
var state_machine__9111__auto____1 = (function (state_30380){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30380);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30430){if((e30430 instanceof Object))
{var ex__9114__auto__ = e30430;var statearr_30431_30497 = state_30380;(statearr_30431_30497[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30430;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30498 = state_30380;
state_30380 = G__30498;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30380){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
})();var state__9127__auto__ = (function (){var statearr_30432 = f__9126__auto__.call(null);(statearr_30432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_30274){var self__ = this;
var _30274__$1 = this;return self__.meta30273;
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.t30272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function (_30274,meta30273__$1){var self__ = this;
var _30274__$1 = this;return (new clustermap.components.filter.t30272(self__.output_schema30106,self__.owner,self__.input_checker30108,self__.map30104,self__.component_specs,self__.map30103,self__.filter_spec,self__.output_checker30109,self__.constructor30101,self__.history,self__.map30105,self__.components,self__.validate__6034__auto__,self__.input_schema30107,self__.id,self__.G__30110,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30273__$1));
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
clustermap.components.filter.__GT_t30272 = ((function (owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109){
return (function __GT_t30272(output_schema30106__$1,owner__$1,input_checker30108__$1,map30104__$1,component_specs__$1,map30103__$1,filter_spec__$1,output_checker30109__$1,constructor30101__$1,history__$1,map30105__$1,components__$1,validate__6034__auto____$1,input_schema30107__$1,id__$1,G__30110__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30273){return (new clustermap.components.filter.t30272(output_schema30106__$1,owner__$1,input_checker30108__$1,map30104__$1,component_specs__$1,map30103__$1,filter_spec__$1,output_checker30109__$1,constructor30101__$1,history__$1,map30105__$1,components__$1,validate__6034__auto____$1,input_schema30107__$1,id__$1,G__30110__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30273));
});})(owner,history,filter_rq_pub,map30104,url_components,components,component_specs,id,filter_spec,map30105,validate__6034__auto__,ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
;
}
return (new clustermap.components.filter.t30272(output_schema30106,owner,input_checker30108,map30104,component_specs,map30103,filter_spec,output_checker30109,constructor30101,history,map30105,components,validate__6034__auto__,input_schema30107,id,G__30110,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30499 = output_checker30109.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30499))
{var error__6036__auto___30500 = temp__4126__auto___30499;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30101","constructor30101",-448497229,null),cljs.core.pr_str.call(null,error__6036__auto___30500)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30500,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30106,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30106,input_schema30107,input_checker30108,output_checker30109))
,schema.core.make_fn_schema.call(null,output_schema30106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30107], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30436){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30100,p__30433){var vec__30435 = p__30433;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30435,(0),null);return component_fnk__7881__auto___30436.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30100),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30100,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30100,var_args){
var p__30433 = null;if (arguments.length > 2) {
  p__30433 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30100,p__30433);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30501){
var data__7882__auto__ = cljs.core.first(arglist__30501);
arglist__30501 = cljs.core.next(arglist__30501);
var owner30100 = cljs.core.first(arglist__30501);
var p__30433 = cljs.core.rest(arglist__30501);
return filter_component__delegate(data__7882__auto__,owner30100,p__30433);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30436))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30102){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30102);
});
__GT_filter_component = function(cursor__7850__auto__,m30102){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
