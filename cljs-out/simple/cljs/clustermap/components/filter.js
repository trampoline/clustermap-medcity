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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30049){var map__30051 = p__30049;var map__30051__$1 = ((cljs.core.seq_QMARK_.call(null,map__30051))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);var filter_spec = map__30051__$1;var component_descrs = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30052){var map__30054 = p__30052;var map__30054__$1 = ((cljs.core.seq_QMARK_.call(null,map__30054))?cljs.core.apply.call(null,cljs.core.hash_map,map__30054):map__30054);var filter_spec = map__30054__$1;var component_descrs = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30054__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30055,component_filter_rq_chan){var map__30060 = p__30055;var map__30060__$1 = ((cljs.core.seq_QMARK_.call(null,map__30060))?cljs.core.apply.call(null,cljs.core.hash_map,map__30060):map__30060);var component_spec = map__30060__$1;var type = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30061 = cljs.core._EQ_;var expr__30062 = type;if(cljs.core.truth_(pred__30061.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30062)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30061.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30062)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30061.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30062)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30061.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30062)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30061.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30062)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30062))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30064,component_filter_rq_chan){var map__30066 = p__30064;var map__30066__$1 = ((cljs.core.seq_QMARK_.call(null,map__30066))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);var component_spec = map__30066__$1;var visible = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30066,map__30066__$1,component_spec,visible,skip_label,label,id){
return (function (e){return om.core.update_BANG_.call(null,component_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),cljs.core.not.call(null,visible));
});})(map__30066,map__30066__$1,component_spec,visible,skip_label,label,id))
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30068 = schema.core.Any;var input_schema30069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30067","map30067",1061992285,null))], null);var input_checker30070 = schema.core.checker.call(null,input_schema30069);var output_checker30071 = schema.core.checker.call(null,output_schema30068);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30068,input_schema30069,input_checker30070,output_checker30071){
return (function render_STAR_(G__30072){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30072], null);var temp__4126__auto___30090 = input_checker30070.call(null,args__6035__auto___30089);if(cljs.core.truth_(temp__4126__auto___30090))
{var error__6036__auto___30091 = temp__4126__auto___30090;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30091,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30089,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30069,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30067 = G__30072;while(true){
if(cljs.core.map_QMARK_.call(null,map30067))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30067)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30067,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30067,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30067,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30068,input_schema30069,input_checker30070,output_checker30071){
return (function iter__30081(s__30082){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30068,input_schema30069,input_checker30070,output_checker30071){
return (function (){var s__30082__$1 = s__30082;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30082__$1);if(temp__4126__auto__)
{var s__30082__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30082__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30082__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30084 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30083 = (0);while(true){
if((i__30083 < size__4376__auto__))
{var map__30087 = cljs.core._nth.call(null,c__4375__auto__,i__30083);var map__30087__$1 = ((cljs.core.seq_QMARK_.call(null,map__30087))?cljs.core.apply.call(null,cljs.core.hash_map,map__30087):map__30087);var component_spec = map__30087__$1;var id = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30084,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30092 = (i__30083 + (1));
i__30083 = G__30092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30084),iter__30081.call(null,cljs.core.chunk_rest.call(null,s__30082__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30084),null);
}
} else
{var map__30088 = cljs.core.first.call(null,s__30082__$2);var map__30088__$1 = ((cljs.core.seq_QMARK_.call(null,map__30088))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);var component_spec = map__30088__$1;var id = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30081.call(null,cljs.core.rest.call(null,s__30082__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30068,input_schema30069,input_checker30070,output_checker30071))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30068,input_schema30069,input_checker30070,output_checker30071))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30093 = output_checker30071.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30093))
{var error__6036__auto___30094 = temp__4126__auto___30093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30094)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30094,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30068,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30068,input_schema30069,input_checker30070,output_checker30071))
,schema.core.make_fn_schema.call(null,output_schema30068,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30069], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30431 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30101 = schema.core.Any;var input_schema30102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30098","map30098",1141700340,null))], null);var input_checker30103 = schema.core.checker.call(null,input_schema30102);var output_checker30104 = schema.core.checker.call(null,output_schema30101);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function constructor30096(G__30105){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30105], null);var temp__4126__auto___30433 = input_checker30103.call(null,args__6035__auto___30432);if(cljs.core.truth_(temp__4126__auto___30433))
{var error__6036__auto___30434 = temp__4126__auto___30433;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30096","constructor30096",-1634513580,null),cljs.core.pr_str.call(null,error__6036__auto___30434)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30434,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30432,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30102,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30098 = G__30105;while(true){
if(cljs.core.map_QMARK_.call(null,map30098))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30098)));
}
var map30100 = plumbing.fnk.schema.safe_get.call(null,map30098,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30100,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30099 = plumbing.fnk.schema.safe_get.call(null,map30098,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30099,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30099,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30098,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30267 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30267 = (function (owner,output_schema30101,input_checker30103,component_specs,filter_spec,map30099,history,constructor30096,map30098,input_schema30102,output_checker30104,components,validate__6034__auto__,map30100,id,G__30105,filter_rq_pub,ufv__,url_components,meta30268){
this.owner = owner;
this.output_schema30101 = output_schema30101;
this.input_checker30103 = input_checker30103;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map30099 = map30099;
this.history = history;
this.constructor30096 = constructor30096;
this.map30098 = map30098;
this.input_schema30102 = input_schema30102;
this.output_checker30104 = output_checker30104;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30100 = map30100;
this.id = id;
this.G__30105 = G__30105;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30268 = meta30268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30267.cljs$lang$type = true;
clustermap.components.filter.t30267.cljs$lang$ctorStr = "clustermap.components.filter/t30267";
clustermap.components.filter.t30267.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30267");
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30267.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30267.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_,p__30270,___$1){var self__ = this;
var map__30271 = p__30270;var map__30271__$1 = ((cljs.core.seq_QMARK_.call(null,map__30271))?cljs.core.apply.call(null,cljs.core.hash_map,map__30271):map__30271);var next_props = map__30271__$1;var map__30272 = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30272__$1 = ((cljs.core.seq_QMARK_.call(null,map__30272))?cljs.core.apply.call(null,cljs.core.hash_map,map__30272):map__30272);var next_filter_spec = map__30272__$1;var map__30273 = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30273__$1 = ((cljs.core.seq_QMARK_.call(null,map__30273))?cljs.core.apply.call(null,cljs.core.hash_map,map__30273):map__30273);var next_url_components = map__30273__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30267.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30267.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30274_30435 = cljs.core.seq.call(null,chs);var chunk__30275_30436 = null;var count__30276_30437 = (0);var i__30277_30438 = (0);while(true){
if((i__30277_30438 < count__30276_30437))
{var vec__30278_30439 = cljs.core._nth.call(null,chunk__30275_30436,i__30277_30438);var component_id_30440 = cljs.core.nth.call(null,vec__30278_30439,(0),null);var ch_30441 = cljs.core.nth.call(null,vec__30278_30439,(1),null);cljs.core.async.close_BANG_.call(null,ch_30441);
{
var G__30442 = seq__30274_30435;
var G__30443 = chunk__30275_30436;
var G__30444 = count__30276_30437;
var G__30445 = (i__30277_30438 + (1));
seq__30274_30435 = G__30442;
chunk__30275_30436 = G__30443;
count__30276_30437 = G__30444;
i__30277_30438 = G__30445;
continue;
}
} else
{var temp__4126__auto___30446 = cljs.core.seq.call(null,seq__30274_30435);if(temp__4126__auto___30446)
{var seq__30274_30447__$1 = temp__4126__auto___30446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30274_30447__$1))
{var c__4408__auto___30448 = cljs.core.chunk_first.call(null,seq__30274_30447__$1);{
var G__30449 = cljs.core.chunk_rest.call(null,seq__30274_30447__$1);
var G__30450 = c__4408__auto___30448;
var G__30451 = cljs.core.count.call(null,c__4408__auto___30448);
var G__30452 = (0);
seq__30274_30435 = G__30449;
chunk__30275_30436 = G__30450;
count__30276_30437 = G__30451;
i__30277_30438 = G__30452;
continue;
}
} else
{var vec__30279_30453 = cljs.core.first.call(null,seq__30274_30447__$1);var component_id_30454 = cljs.core.nth.call(null,vec__30279_30453,(0),null);var ch_30455 = cljs.core.nth.call(null,vec__30279_30453,(1),null);cljs.core.async.close_BANG_.call(null,ch_30455);
{
var G__30456 = cljs.core.next.call(null,seq__30274_30447__$1);
var G__30457 = null;
var G__30458 = (0);
var G__30459 = (0);
seq__30274_30435 = G__30456;
chunk__30275_30436 = G__30457;
count__30276_30437 = G__30458;
i__30277_30438 = G__30459;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30267.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (state_30375){var state_val_30376 = (state_30375[(1)]);if((state_val_30376 === (7)))
{var inst_30366 = (state_30375[(2)]);var state_30375__$1 = state_30375;if(cljs.core.truth_(inst_30366))
{var statearr_30377_30460 = state_30375__$1;(statearr_30377_30460[(1)] = (25));
} else
{var statearr_30378_30461 = state_30375__$1;(statearr_30378_30461[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (20)))
{var inst_30327 = (state_30375[(7)]);var inst_30285 = (state_30375[(8)]);var inst_30343 = (state_30375[(9)]);var inst_30292 = (state_30375[(10)]);var inst_30336 = (state_30375[(11)]);var inst_30286 = (state_30375[(12)]);var inst_30336__$1 = cljs.core.first.call(null,inst_30327);var inst_30337 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30338 = cljs.core.get.call(null,inst_30286,inst_30336__$1);var inst_30339 = ["FILTER",inst_30285,inst_30336__$1,inst_30338];var inst_30340 = (new cljs.core.PersistentVector(null,4,(5),inst_30337,inst_30339,null));var inst_30341 = cljs.core.clj__GT_js.call(null,inst_30340);var inst_30342 = console.log(inst_30341);var inst_30343__$1 = cljs.core.get.call(null,inst_30292,inst_30336__$1);var state_30375__$1 = (function (){var statearr_30379 = state_30375;(statearr_30379[(9)] = inst_30343__$1);
(statearr_30379[(13)] = inst_30342);
(statearr_30379[(11)] = inst_30336__$1);
return statearr_30379;
})();if(cljs.core.truth_(inst_30343__$1))
{var statearr_30380_30462 = state_30375__$1;(statearr_30380_30462[(1)] = (22));
} else
{var statearr_30381_30463 = state_30375__$1;(statearr_30381_30463[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (27)))
{var inst_30371 = (state_30375[(2)]);var state_30375__$1 = state_30375;var statearr_30382_30464 = state_30375__$1;(statearr_30382_30464[(2)] = inst_30371);
(statearr_30382_30464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (1)))
{var state_30375__$1 = state_30375;var statearr_30383_30465 = state_30375__$1;(statearr_30383_30465[(2)] = null);
(statearr_30383_30465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (24)))
{var inst_30327 = (state_30375[(7)]);var inst_30352 = (state_30375[(2)]);var inst_30353 = cljs.core.next.call(null,inst_30327);var inst_30299 = inst_30353;var inst_30300 = null;var inst_30301 = (0);var inst_30302 = (0);var state_30375__$1 = (function (){var statearr_30387 = state_30375;(statearr_30387[(14)] = inst_30301);
(statearr_30387[(15)] = inst_30300);
(statearr_30387[(16)] = inst_30302);
(statearr_30387[(17)] = inst_30352);
(statearr_30387[(18)] = inst_30299);
return statearr_30387;
})();var statearr_30388_30466 = state_30375__$1;(statearr_30388_30466[(2)] = null);
(statearr_30388_30466[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (4)))
{var inst_30282 = (state_30375[(19)]);var inst_30282__$1 = (state_30375[(2)]);var state_30375__$1 = (function (){var statearr_30389 = state_30375;(statearr_30389[(19)] = inst_30282__$1);
return statearr_30389;
})();if(cljs.core.truth_(inst_30282__$1))
{var statearr_30390_30467 = state_30375__$1;(statearr_30390_30467[(1)] = (5));
} else
{var statearr_30391_30468 = state_30375__$1;(statearr_30391_30468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (15)))
{var inst_30301 = (state_30375[(14)]);var inst_30300 = (state_30375[(15)]);var inst_30302 = (state_30375[(16)]);var inst_30299 = (state_30375[(18)]);var inst_30323 = (state_30375[(2)]);var inst_30324 = (inst_30302 + (1));var tmp30384 = inst_30301;var tmp30385 = inst_30300;var tmp30386 = inst_30299;var inst_30299__$1 = tmp30386;var inst_30300__$1 = tmp30385;var inst_30301__$1 = tmp30384;var inst_30302__$1 = inst_30324;var state_30375__$1 = (function (){var statearr_30392 = state_30375;(statearr_30392[(14)] = inst_30301__$1);
(statearr_30392[(20)] = inst_30323);
(statearr_30392[(15)] = inst_30300__$1);
(statearr_30392[(16)] = inst_30302__$1);
(statearr_30392[(18)] = inst_30299__$1);
return statearr_30392;
})();var statearr_30393_30469 = state_30375__$1;(statearr_30393_30469[(2)] = null);
(statearr_30393_30469[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (21)))
{var inst_30356 = (state_30375[(2)]);var state_30375__$1 = state_30375;var statearr_30394_30470 = state_30375__$1;(statearr_30394_30470[(2)] = inst_30356);
(statearr_30394_30470[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (13)))
{var inst_30307 = (state_30375[(21)]);var inst_30314 = (state_30375[(22)]);var inst_30286 = (state_30375[(12)]);var inst_30316 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30317 = cljs.core.get.call(null,inst_30286,inst_30307);var inst_30318 = [inst_30307,inst_30317];var inst_30319 = (new cljs.core.PersistentVector(null,2,(5),inst_30316,inst_30318,null));var inst_30320 = cljs.core.async.put_BANG_.call(null,inst_30314,inst_30319);var state_30375__$1 = state_30375;var statearr_30395_30471 = state_30375__$1;(statearr_30395_30471[(2)] = inst_30320);
(statearr_30395_30471[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (22)))
{var inst_30343 = (state_30375[(9)]);var inst_30336 = (state_30375[(11)]);var inst_30286 = (state_30375[(12)]);var inst_30345 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30346 = cljs.core.get.call(null,inst_30286,inst_30336);var inst_30347 = [inst_30336,inst_30346];var inst_30348 = (new cljs.core.PersistentVector(null,2,(5),inst_30345,inst_30347,null));var inst_30349 = cljs.core.async.put_BANG_.call(null,inst_30343,inst_30348);var state_30375__$1 = state_30375;var statearr_30396_30472 = state_30375__$1;(statearr_30396_30472[(2)] = inst_30349);
(statearr_30396_30472[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (6)))
{var state_30375__$1 = state_30375;var statearr_30397_30473 = state_30375__$1;(statearr_30397_30473[(2)] = null);
(statearr_30397_30473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (25)))
{var state_30375__$1 = state_30375;var statearr_30398_30474 = state_30375__$1;(statearr_30398_30474[(2)] = null);
(statearr_30398_30474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (17)))
{var state_30375__$1 = state_30375;var statearr_30399_30475 = state_30375__$1;(statearr_30399_30475[(2)] = null);
(statearr_30399_30475[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (3)))
{var inst_30373 = (state_30375[(2)]);var state_30375__$1 = state_30375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30375__$1,inst_30373);
} else
{if((state_val_30376 === (12)))
{var inst_30361 = (state_30375[(2)]);var state_30375__$1 = state_30375;var statearr_30400_30476 = state_30375__$1;(statearr_30400_30476[(2)] = inst_30361);
(statearr_30400_30476[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (2)))
{var state_30375__$1 = state_30375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30375__$1,(4),filter_rq_sub);
} else
{if((state_val_30376 === (23)))
{var state_30375__$1 = state_30375;var statearr_30401_30477 = state_30375__$1;(statearr_30401_30477[(2)] = null);
(statearr_30401_30477[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (19)))
{var inst_30327 = (state_30375[(7)]);var inst_30331 = cljs.core.chunk_first.call(null,inst_30327);var inst_30332 = cljs.core.chunk_rest.call(null,inst_30327);var inst_30333 = cljs.core.count.call(null,inst_30331);var inst_30299 = inst_30332;var inst_30300 = inst_30331;var inst_30301 = inst_30333;var inst_30302 = (0);var state_30375__$1 = (function (){var statearr_30402 = state_30375;(statearr_30402[(14)] = inst_30301);
(statearr_30402[(15)] = inst_30300);
(statearr_30402[(16)] = inst_30302);
(statearr_30402[(18)] = inst_30299);
return statearr_30402;
})();var statearr_30403_30478 = state_30375__$1;(statearr_30403_30478[(2)] = null);
(statearr_30403_30478[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (11)))
{var inst_30327 = (state_30375[(7)]);var inst_30299 = (state_30375[(18)]);var inst_30327__$1 = cljs.core.seq.call(null,inst_30299);var state_30375__$1 = (function (){var statearr_30404 = state_30375;(statearr_30404[(7)] = inst_30327__$1);
return statearr_30404;
})();if(inst_30327__$1)
{var statearr_30405_30479 = state_30375__$1;(statearr_30405_30479[(1)] = (16));
} else
{var statearr_30406_30480 = state_30375__$1;(statearr_30406_30480[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (9)))
{var inst_30363 = (state_30375[(2)]);var state_30375__$1 = (function (){var statearr_30407 = state_30375;(statearr_30407[(23)] = inst_30363);
return statearr_30407;
})();var statearr_30408_30481 = state_30375__$1;(statearr_30408_30481[(2)] = true);
(statearr_30408_30481[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (5)))
{var inst_30285 = (state_30375[(8)]);var inst_30286 = (state_30375[(12)]);var inst_30282 = (state_30375[(19)]);var inst_30285__$1 = cljs.core.nth.call(null,inst_30282,(0),null);var inst_30286__$1 = cljs.core.nth.call(null,inst_30282,(1),null);var inst_30287 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30288 = ["FILTER-RQ",inst_30285__$1,inst_30286__$1];var inst_30289 = (new cljs.core.PersistentVector(null,3,(5),inst_30287,inst_30288,null));var inst_30290 = cljs.core.clj__GT_js.call(null,inst_30289);var inst_30291 = console.log(inst_30290);var inst_30292 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30293 = cljs.core.keys.call(null,inst_30286__$1);var inst_30298 = cljs.core.seq.call(null,inst_30293);var inst_30299 = inst_30298;var inst_30300 = null;var inst_30301 = (0);var inst_30302 = (0);var state_30375__$1 = (function (){var statearr_30409 = state_30375;(statearr_30409[(14)] = inst_30301);
(statearr_30409[(8)] = inst_30285__$1);
(statearr_30409[(15)] = inst_30300);
(statearr_30409[(10)] = inst_30292);
(statearr_30409[(12)] = inst_30286__$1);
(statearr_30409[(16)] = inst_30302);
(statearr_30409[(24)] = inst_30291);
(statearr_30409[(18)] = inst_30299);
return statearr_30409;
})();var statearr_30410_30482 = state_30375__$1;(statearr_30410_30482[(2)] = null);
(statearr_30410_30482[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (14)))
{var state_30375__$1 = state_30375;var statearr_30411_30483 = state_30375__$1;(statearr_30411_30483[(2)] = null);
(statearr_30411_30483[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (26)))
{var state_30375__$1 = state_30375;var statearr_30412_30484 = state_30375__$1;(statearr_30412_30484[(2)] = null);
(statearr_30412_30484[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (16)))
{var inst_30327 = (state_30375[(7)]);var inst_30329 = cljs.core.chunked_seq_QMARK_.call(null,inst_30327);var state_30375__$1 = state_30375;if(inst_30329)
{var statearr_30413_30485 = state_30375__$1;(statearr_30413_30485[(1)] = (19));
} else
{var statearr_30414_30486 = state_30375__$1;(statearr_30414_30486[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (10)))
{var inst_30307 = (state_30375[(21)]);var inst_30285 = (state_30375[(8)]);var inst_30314 = (state_30375[(22)]);var inst_30300 = (state_30375[(15)]);var inst_30292 = (state_30375[(10)]);var inst_30286 = (state_30375[(12)]);var inst_30302 = (state_30375[(16)]);var inst_30307__$1 = cljs.core._nth.call(null,inst_30300,inst_30302);var inst_30308 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30309 = cljs.core.get.call(null,inst_30286,inst_30307__$1);var inst_30310 = ["FILTER",inst_30285,inst_30307__$1,inst_30309];var inst_30311 = (new cljs.core.PersistentVector(null,4,(5),inst_30308,inst_30310,null));var inst_30312 = cljs.core.clj__GT_js.call(null,inst_30311);var inst_30313 = console.log(inst_30312);var inst_30314__$1 = cljs.core.get.call(null,inst_30292,inst_30307__$1);var state_30375__$1 = (function (){var statearr_30415 = state_30375;(statearr_30415[(21)] = inst_30307__$1);
(statearr_30415[(22)] = inst_30314__$1);
(statearr_30415[(25)] = inst_30313);
return statearr_30415;
})();if(cljs.core.truth_(inst_30314__$1))
{var statearr_30416_30487 = state_30375__$1;(statearr_30416_30487[(1)] = (13));
} else
{var statearr_30417_30488 = state_30375__$1;(statearr_30417_30488[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (18)))
{var inst_30359 = (state_30375[(2)]);var state_30375__$1 = state_30375;var statearr_30418_30489 = state_30375__$1;(statearr_30418_30489[(2)] = inst_30359);
(statearr_30418_30489[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30376 === (8)))
{var inst_30301 = (state_30375[(14)]);var inst_30302 = (state_30375[(16)]);var inst_30304 = (inst_30302 < inst_30301);var inst_30305 = inst_30304;var state_30375__$1 = state_30375;if(cljs.core.truth_(inst_30305))
{var statearr_30419_30490 = state_30375__$1;(statearr_30419_30490[(1)] = (10));
} else
{var statearr_30420_30491 = state_30375__$1;(statearr_30420_30491[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30424[(0)] = state_machine__9111__auto__);
(statearr_30424[(1)] = (1));
return statearr_30424;
});
var state_machine__9111__auto____1 = (function (state_30375){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30375);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object))
{var ex__9114__auto__ = e30425;var statearr_30426_30492 = state_30375;(statearr_30426_30492[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30425;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30493 = state_30375;
state_30375 = G__30493;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30375){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
})();var state__9127__auto__ = (function (){var statearr_30427 = f__9126__auto__.call(null);(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_30269){var self__ = this;
var _30269__$1 = this;return self__.meta30268;
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.t30267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function (_30269,meta30268__$1){var self__ = this;
var _30269__$1 = this;return (new clustermap.components.filter.t30267(self__.owner,self__.output_schema30101,self__.input_checker30103,self__.component_specs,self__.filter_spec,self__.map30099,self__.history,self__.constructor30096,self__.map30098,self__.input_schema30102,self__.output_checker30104,self__.components,self__.validate__6034__auto__,self__.map30100,self__.id,self__.G__30105,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30268__$1));
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
clustermap.components.filter.__GT_t30267 = ((function (owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104){
return (function __GT_t30267(owner__$1,output_schema30101__$1,input_checker30103__$1,component_specs__$1,filter_spec__$1,map30099__$1,history__$1,constructor30096__$1,map30098__$1,input_schema30102__$1,output_checker30104__$1,components__$1,validate__6034__auto____$1,map30100__$1,id__$1,G__30105__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30268){return (new clustermap.components.filter.t30267(owner__$1,output_schema30101__$1,input_checker30103__$1,component_specs__$1,filter_spec__$1,map30099__$1,history__$1,constructor30096__$1,map30098__$1,input_schema30102__$1,output_checker30104__$1,components__$1,validate__6034__auto____$1,map30100__$1,id__$1,G__30105__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30268));
});})(owner,history,filter_rq_pub,map30099,url_components,components,component_specs,id,filter_spec,map30100,validate__6034__auto__,ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
;
}
return (new clustermap.components.filter.t30267(owner,output_schema30101,input_checker30103,component_specs,filter_spec,map30099,history,constructor30096,map30098,input_schema30102,output_checker30104,components,validate__6034__auto__,map30100,id,G__30105,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30494 = output_checker30104.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30494))
{var error__6036__auto___30495 = temp__4126__auto___30494;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30096","constructor30096",-1634513580,null),cljs.core.pr_str.call(null,error__6036__auto___30495)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30495,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30101,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30101,input_schema30102,input_checker30103,output_checker30104))
,schema.core.make_fn_schema.call(null,output_schema30101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30102], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30431){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30095,p__30428){var vec__30430 = p__30428;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30430,(0),null);return component_fnk__7881__auto___30431.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30095),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30095,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30095,var_args){
var p__30428 = null;if (arguments.length > 2) {
  p__30428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30095,p__30428);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30496){
var data__7882__auto__ = cljs.core.first(arglist__30496);
arglist__30496 = cljs.core.next(arglist__30496);
var owner30095 = cljs.core.first(arglist__30496);
var p__30428 = cljs.core.rest(arglist__30496);
return filter_component__delegate(data__7882__auto__,owner30095,p__30428);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30431))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30097){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30097);
});
__GT_filter_component = function(cursor__7850__auto__,m30097){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
