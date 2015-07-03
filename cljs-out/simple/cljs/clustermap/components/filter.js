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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30018){var map__30020 = p__30018;var map__30020__$1 = ((cljs.core.seq_QMARK_.call(null,map__30020))?cljs.core.apply.call(null,cljs.core.hash_map,map__30020):map__30020);var filter_spec = map__30020__$1;var component_descrs = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30021){var map__30023 = p__30021;var map__30023__$1 = ((cljs.core.seq_QMARK_.call(null,map__30023))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023):map__30023);var filter_spec = map__30023__$1;var component_descrs = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30024,component_filter_rq_chan){var map__30029 = p__30024;var map__30029__$1 = ((cljs.core.seq_QMARK_.call(null,map__30029))?cljs.core.apply.call(null,cljs.core.hash_map,map__30029):map__30029);var component_spec = map__30029__$1;var type = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30030 = cljs.core._EQ_;var expr__30031 = type;if(cljs.core.truth_(pred__30030.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30031)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30030.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30031)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30030.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30031)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30030.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30031)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30030.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30031)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30031))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30033,component_filter_rq_chan){var map__30035 = p__30033;var map__30035__$1 = ((cljs.core.seq_QMARK_.call(null,map__30035))?cljs.core.apply.call(null,cljs.core.hash_map,map__30035):map__30035);var component_spec = map__30035__$1;var visible = cljs.core.get.call(null,map__30035__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30035__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30035__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__30035,map__30035__$1,component_spec,visible,skip_label,label,id){
return (function (e){return om.core.update_BANG_.call(null,component_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),cljs.core.not.call(null,visible));
});})(map__30035,map__30035__$1,component_spec,visible,skip_label,label,id))
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30037 = schema.core.Any;var input_schema30038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30036","map30036",-2039805320,null))], null);var input_checker30039 = schema.core.checker.call(null,input_schema30038);var output_checker30040 = schema.core.checker.call(null,output_schema30037);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30037,input_schema30038,input_checker30039,output_checker30040){
return (function render_STAR_(G__30041){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30041], null);var temp__4126__auto___30059 = input_checker30039.call(null,args__6035__auto___30058);if(cljs.core.truth_(temp__4126__auto___30059))
{var error__6036__auto___30060 = temp__4126__auto___30059;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30060)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30060,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30058,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30038,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30036 = G__30041;while(true){
if(cljs.core.map_QMARK_.call(null,map30036))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30036)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30036,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30036,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30036,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30037,input_schema30038,input_checker30039,output_checker30040){
return (function iter__30050(s__30051){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30037,input_schema30038,input_checker30039,output_checker30040){
return (function (){var s__30051__$1 = s__30051;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30051__$1);if(temp__4126__auto__)
{var s__30051__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30051__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30051__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30053 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30052 = (0);while(true){
if((i__30052 < size__4376__auto__))
{var map__30056 = cljs.core._nth.call(null,c__4375__auto__,i__30052);var map__30056__$1 = ((cljs.core.seq_QMARK_.call(null,map__30056))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);var component_spec = map__30056__$1;var id = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30053,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30061 = (i__30052 + (1));
i__30052 = G__30061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30053),iter__30050.call(null,cljs.core.chunk_rest.call(null,s__30051__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30053),null);
}
} else
{var map__30057 = cljs.core.first.call(null,s__30051__$2);var map__30057__$1 = ((cljs.core.seq_QMARK_.call(null,map__30057))?cljs.core.apply.call(null,cljs.core.hash_map,map__30057):map__30057);var component_spec = map__30057__$1;var id = cljs.core.get.call(null,map__30057__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30050.call(null,cljs.core.rest.call(null,s__30051__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30037,input_schema30038,input_checker30039,output_checker30040))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30037,input_schema30038,input_checker30039,output_checker30040))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30062 = output_checker30040.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30062))
{var error__6036__auto___30063 = temp__4126__auto___30062;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30063)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30063,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30037,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30037,input_schema30038,input_checker30039,output_checker30040))
,schema.core.make_fn_schema.call(null,output_schema30037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30038], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30400 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30070 = schema.core.Any;var input_schema30071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30067","map30067",1061992285,null))], null);var input_checker30072 = schema.core.checker.call(null,input_schema30071);var output_checker30073 = schema.core.checker.call(null,output_schema30070);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function constructor30065(G__30074){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30074], null);var temp__4126__auto___30402 = input_checker30072.call(null,args__6035__auto___30401);if(cljs.core.truth_(temp__4126__auto___30402))
{var error__6036__auto___30403 = temp__4126__auto___30402;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30065","constructor30065",1576834735,null),cljs.core.pr_str.call(null,error__6036__auto___30403)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30403,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30401,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30071,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30067 = G__30074;while(true){
if(cljs.core.map_QMARK_.call(null,map30067))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30067)));
}
var map30069 = plumbing.fnk.schema.safe_get.call(null,map30067,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30069,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30068 = plumbing.fnk.schema.safe_get.call(null,map30067,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30068,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30068,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30067,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30236 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30236 = (function (owner,output_checker30073,map30068,output_schema30070,G__30074,component_specs,filter_spec,constructor30065,history,components,map30069,validate__6034__auto__,id,filter_rq_pub,ufv__,map30067,url_components,input_checker30072,input_schema30071,meta30237){
this.owner = owner;
this.output_checker30073 = output_checker30073;
this.map30068 = map30068;
this.output_schema30070 = output_schema30070;
this.G__30074 = G__30074;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.constructor30065 = constructor30065;
this.history = history;
this.components = components;
this.map30069 = map30069;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.map30067 = map30067;
this.url_components = url_components;
this.input_checker30072 = input_checker30072;
this.input_schema30071 = input_schema30071;
this.meta30237 = meta30237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30236.cljs$lang$type = true;
clustermap.components.filter.t30236.cljs$lang$ctorStr = "clustermap.components.filter/t30236";
clustermap.components.filter.t30236.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30236");
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30236.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30236.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_,p__30239,___$1){var self__ = this;
var map__30240 = p__30239;var map__30240__$1 = ((cljs.core.seq_QMARK_.call(null,map__30240))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);var next_props = map__30240__$1;var map__30241 = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30241__$1 = ((cljs.core.seq_QMARK_.call(null,map__30241))?cljs.core.apply.call(null,cljs.core.hash_map,map__30241):map__30241);var next_filter_spec = map__30241__$1;var map__30242 = cljs.core.get.call(null,map__30241__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30242__$1 = ((cljs.core.seq_QMARK_.call(null,map__30242))?cljs.core.apply.call(null,cljs.core.hash_map,map__30242):map__30242);var next_url_components = map__30242__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30236.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30236.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30243_30404 = cljs.core.seq.call(null,chs);var chunk__30244_30405 = null;var count__30245_30406 = (0);var i__30246_30407 = (0);while(true){
if((i__30246_30407 < count__30245_30406))
{var vec__30247_30408 = cljs.core._nth.call(null,chunk__30244_30405,i__30246_30407);var component_id_30409 = cljs.core.nth.call(null,vec__30247_30408,(0),null);var ch_30410 = cljs.core.nth.call(null,vec__30247_30408,(1),null);cljs.core.async.close_BANG_.call(null,ch_30410);
{
var G__30411 = seq__30243_30404;
var G__30412 = chunk__30244_30405;
var G__30413 = count__30245_30406;
var G__30414 = (i__30246_30407 + (1));
seq__30243_30404 = G__30411;
chunk__30244_30405 = G__30412;
count__30245_30406 = G__30413;
i__30246_30407 = G__30414;
continue;
}
} else
{var temp__4126__auto___30415 = cljs.core.seq.call(null,seq__30243_30404);if(temp__4126__auto___30415)
{var seq__30243_30416__$1 = temp__4126__auto___30415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30243_30416__$1))
{var c__4408__auto___30417 = cljs.core.chunk_first.call(null,seq__30243_30416__$1);{
var G__30418 = cljs.core.chunk_rest.call(null,seq__30243_30416__$1);
var G__30419 = c__4408__auto___30417;
var G__30420 = cljs.core.count.call(null,c__4408__auto___30417);
var G__30421 = (0);
seq__30243_30404 = G__30418;
chunk__30244_30405 = G__30419;
count__30245_30406 = G__30420;
i__30246_30407 = G__30421;
continue;
}
} else
{var vec__30248_30422 = cljs.core.first.call(null,seq__30243_30416__$1);var component_id_30423 = cljs.core.nth.call(null,vec__30248_30422,(0),null);var ch_30424 = cljs.core.nth.call(null,vec__30248_30422,(1),null);cljs.core.async.close_BANG_.call(null,ch_30424);
{
var G__30425 = cljs.core.next.call(null,seq__30243_30416__$1);
var G__30426 = null;
var G__30427 = (0);
var G__30428 = (0);
seq__30243_30404 = G__30425;
chunk__30244_30405 = G__30426;
count__30245_30406 = G__30427;
i__30246_30407 = G__30428;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30236.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (state_30344){var state_val_30345 = (state_30344[(1)]);if((state_val_30345 === (7)))
{var inst_30335 = (state_30344[(2)]);var state_30344__$1 = state_30344;if(cljs.core.truth_(inst_30335))
{var statearr_30346_30429 = state_30344__$1;(statearr_30346_30429[(1)] = (25));
} else
{var statearr_30347_30430 = state_30344__$1;(statearr_30347_30430[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (20)))
{var inst_30255 = (state_30344[(7)]);var inst_30305 = (state_30344[(8)]);var inst_30254 = (state_30344[(9)]);var inst_30296 = (state_30344[(10)]);var inst_30261 = (state_30344[(11)]);var inst_30312 = (state_30344[(12)]);var inst_30305__$1 = cljs.core.first.call(null,inst_30296);var inst_30306 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30307 = cljs.core.get.call(null,inst_30255,inst_30305__$1);var inst_30308 = ["FILTER",inst_30254,inst_30305__$1,inst_30307];var inst_30309 = (new cljs.core.PersistentVector(null,4,(5),inst_30306,inst_30308,null));var inst_30310 = cljs.core.clj__GT_js.call(null,inst_30309);var inst_30311 = console.log(inst_30310);var inst_30312__$1 = cljs.core.get.call(null,inst_30261,inst_30305__$1);var state_30344__$1 = (function (){var statearr_30348 = state_30344;(statearr_30348[(13)] = inst_30311);
(statearr_30348[(8)] = inst_30305__$1);
(statearr_30348[(12)] = inst_30312__$1);
return statearr_30348;
})();if(cljs.core.truth_(inst_30312__$1))
{var statearr_30349_30431 = state_30344__$1;(statearr_30349_30431[(1)] = (22));
} else
{var statearr_30350_30432 = state_30344__$1;(statearr_30350_30432[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (27)))
{var inst_30340 = (state_30344[(2)]);var state_30344__$1 = state_30344;var statearr_30351_30433 = state_30344__$1;(statearr_30351_30433[(2)] = inst_30340);
(statearr_30351_30433[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (1)))
{var state_30344__$1 = state_30344;var statearr_30352_30434 = state_30344__$1;(statearr_30352_30434[(2)] = null);
(statearr_30352_30434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (24)))
{var inst_30296 = (state_30344[(10)]);var inst_30321 = (state_30344[(2)]);var inst_30322 = cljs.core.next.call(null,inst_30296);var inst_30268 = inst_30322;var inst_30269 = null;var inst_30270 = (0);var inst_30271 = (0);var state_30344__$1 = (function (){var statearr_30356 = state_30344;(statearr_30356[(14)] = inst_30269);
(statearr_30356[(15)] = inst_30271);
(statearr_30356[(16)] = inst_30270);
(statearr_30356[(17)] = inst_30321);
(statearr_30356[(18)] = inst_30268);
return statearr_30356;
})();var statearr_30357_30435 = state_30344__$1;(statearr_30357_30435[(2)] = null);
(statearr_30357_30435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (4)))
{var inst_30251 = (state_30344[(19)]);var inst_30251__$1 = (state_30344[(2)]);var state_30344__$1 = (function (){var statearr_30358 = state_30344;(statearr_30358[(19)] = inst_30251__$1);
return statearr_30358;
})();if(cljs.core.truth_(inst_30251__$1))
{var statearr_30359_30436 = state_30344__$1;(statearr_30359_30436[(1)] = (5));
} else
{var statearr_30360_30437 = state_30344__$1;(statearr_30360_30437[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (15)))
{var inst_30269 = (state_30344[(14)]);var inst_30271 = (state_30344[(15)]);var inst_30270 = (state_30344[(16)]);var inst_30268 = (state_30344[(18)]);var inst_30292 = (state_30344[(2)]);var inst_30293 = (inst_30271 + (1));var tmp30353 = inst_30269;var tmp30354 = inst_30270;var tmp30355 = inst_30268;var inst_30268__$1 = tmp30355;var inst_30269__$1 = tmp30353;var inst_30270__$1 = tmp30354;var inst_30271__$1 = inst_30293;var state_30344__$1 = (function (){var statearr_30361 = state_30344;(statearr_30361[(14)] = inst_30269__$1);
(statearr_30361[(15)] = inst_30271__$1);
(statearr_30361[(16)] = inst_30270__$1);
(statearr_30361[(18)] = inst_30268__$1);
(statearr_30361[(20)] = inst_30292);
return statearr_30361;
})();var statearr_30362_30438 = state_30344__$1;(statearr_30362_30438[(2)] = null);
(statearr_30362_30438[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (21)))
{var inst_30325 = (state_30344[(2)]);var state_30344__$1 = state_30344;var statearr_30363_30439 = state_30344__$1;(statearr_30363_30439[(2)] = inst_30325);
(statearr_30363_30439[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (13)))
{var inst_30255 = (state_30344[(7)]);var inst_30276 = (state_30344[(21)]);var inst_30283 = (state_30344[(22)]);var inst_30285 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30286 = cljs.core.get.call(null,inst_30255,inst_30276);var inst_30287 = [inst_30276,inst_30286];var inst_30288 = (new cljs.core.PersistentVector(null,2,(5),inst_30285,inst_30287,null));var inst_30289 = cljs.core.async.put_BANG_.call(null,inst_30283,inst_30288);var state_30344__$1 = state_30344;var statearr_30364_30440 = state_30344__$1;(statearr_30364_30440[(2)] = inst_30289);
(statearr_30364_30440[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (22)))
{var inst_30255 = (state_30344[(7)]);var inst_30305 = (state_30344[(8)]);var inst_30312 = (state_30344[(12)]);var inst_30314 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30315 = cljs.core.get.call(null,inst_30255,inst_30305);var inst_30316 = [inst_30305,inst_30315];var inst_30317 = (new cljs.core.PersistentVector(null,2,(5),inst_30314,inst_30316,null));var inst_30318 = cljs.core.async.put_BANG_.call(null,inst_30312,inst_30317);var state_30344__$1 = state_30344;var statearr_30365_30441 = state_30344__$1;(statearr_30365_30441[(2)] = inst_30318);
(statearr_30365_30441[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (6)))
{var state_30344__$1 = state_30344;var statearr_30366_30442 = state_30344__$1;(statearr_30366_30442[(2)] = null);
(statearr_30366_30442[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (25)))
{var state_30344__$1 = state_30344;var statearr_30367_30443 = state_30344__$1;(statearr_30367_30443[(2)] = null);
(statearr_30367_30443[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (17)))
{var state_30344__$1 = state_30344;var statearr_30368_30444 = state_30344__$1;(statearr_30368_30444[(2)] = null);
(statearr_30368_30444[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (3)))
{var inst_30342 = (state_30344[(2)]);var state_30344__$1 = state_30344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else
{if((state_val_30345 === (12)))
{var inst_30330 = (state_30344[(2)]);var state_30344__$1 = state_30344;var statearr_30369_30445 = state_30344__$1;(statearr_30369_30445[(2)] = inst_30330);
(statearr_30369_30445[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (2)))
{var state_30344__$1 = state_30344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30344__$1,(4),filter_rq_sub);
} else
{if((state_val_30345 === (23)))
{var state_30344__$1 = state_30344;var statearr_30370_30446 = state_30344__$1;(statearr_30370_30446[(2)] = null);
(statearr_30370_30446[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (19)))
{var inst_30296 = (state_30344[(10)]);var inst_30300 = cljs.core.chunk_first.call(null,inst_30296);var inst_30301 = cljs.core.chunk_rest.call(null,inst_30296);var inst_30302 = cljs.core.count.call(null,inst_30300);var inst_30268 = inst_30301;var inst_30269 = inst_30300;var inst_30270 = inst_30302;var inst_30271 = (0);var state_30344__$1 = (function (){var statearr_30371 = state_30344;(statearr_30371[(14)] = inst_30269);
(statearr_30371[(15)] = inst_30271);
(statearr_30371[(16)] = inst_30270);
(statearr_30371[(18)] = inst_30268);
return statearr_30371;
})();var statearr_30372_30447 = state_30344__$1;(statearr_30372_30447[(2)] = null);
(statearr_30372_30447[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (11)))
{var inst_30268 = (state_30344[(18)]);var inst_30296 = (state_30344[(10)]);var inst_30296__$1 = cljs.core.seq.call(null,inst_30268);var state_30344__$1 = (function (){var statearr_30373 = state_30344;(statearr_30373[(10)] = inst_30296__$1);
return statearr_30373;
})();if(inst_30296__$1)
{var statearr_30374_30448 = state_30344__$1;(statearr_30374_30448[(1)] = (16));
} else
{var statearr_30375_30449 = state_30344__$1;(statearr_30375_30449[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (9)))
{var inst_30332 = (state_30344[(2)]);var state_30344__$1 = (function (){var statearr_30376 = state_30344;(statearr_30376[(23)] = inst_30332);
return statearr_30376;
})();var statearr_30377_30450 = state_30344__$1;(statearr_30377_30450[(2)] = true);
(statearr_30377_30450[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (5)))
{var inst_30255 = (state_30344[(7)]);var inst_30251 = (state_30344[(19)]);var inst_30254 = (state_30344[(9)]);var inst_30254__$1 = cljs.core.nth.call(null,inst_30251,(0),null);var inst_30255__$1 = cljs.core.nth.call(null,inst_30251,(1),null);var inst_30256 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30257 = ["FILTER-RQ",inst_30254__$1,inst_30255__$1];var inst_30258 = (new cljs.core.PersistentVector(null,3,(5),inst_30256,inst_30257,null));var inst_30259 = cljs.core.clj__GT_js.call(null,inst_30258);var inst_30260 = console.log(inst_30259);var inst_30261 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30262 = cljs.core.keys.call(null,inst_30255__$1);var inst_30267 = cljs.core.seq.call(null,inst_30262);var inst_30268 = inst_30267;var inst_30269 = null;var inst_30270 = (0);var inst_30271 = (0);var state_30344__$1 = (function (){var statearr_30378 = state_30344;(statearr_30378[(14)] = inst_30269);
(statearr_30378[(7)] = inst_30255__$1);
(statearr_30378[(15)] = inst_30271);
(statearr_30378[(16)] = inst_30270);
(statearr_30378[(18)] = inst_30268);
(statearr_30378[(24)] = inst_30260);
(statearr_30378[(9)] = inst_30254__$1);
(statearr_30378[(11)] = inst_30261);
return statearr_30378;
})();var statearr_30379_30451 = state_30344__$1;(statearr_30379_30451[(2)] = null);
(statearr_30379_30451[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (14)))
{var state_30344__$1 = state_30344;var statearr_30380_30452 = state_30344__$1;(statearr_30380_30452[(2)] = null);
(statearr_30380_30452[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (26)))
{var state_30344__$1 = state_30344;var statearr_30381_30453 = state_30344__$1;(statearr_30381_30453[(2)] = null);
(statearr_30381_30453[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (16)))
{var inst_30296 = (state_30344[(10)]);var inst_30298 = cljs.core.chunked_seq_QMARK_.call(null,inst_30296);var state_30344__$1 = state_30344;if(inst_30298)
{var statearr_30382_30454 = state_30344__$1;(statearr_30382_30454[(1)] = (19));
} else
{var statearr_30383_30455 = state_30344__$1;(statearr_30383_30455[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (10)))
{var inst_30269 = (state_30344[(14)]);var inst_30255 = (state_30344[(7)]);var inst_30271 = (state_30344[(15)]);var inst_30276 = (state_30344[(21)]);var inst_30254 = (state_30344[(9)]);var inst_30283 = (state_30344[(22)]);var inst_30261 = (state_30344[(11)]);var inst_30276__$1 = cljs.core._nth.call(null,inst_30269,inst_30271);var inst_30277 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30278 = cljs.core.get.call(null,inst_30255,inst_30276__$1);var inst_30279 = ["FILTER",inst_30254,inst_30276__$1,inst_30278];var inst_30280 = (new cljs.core.PersistentVector(null,4,(5),inst_30277,inst_30279,null));var inst_30281 = cljs.core.clj__GT_js.call(null,inst_30280);var inst_30282 = console.log(inst_30281);var inst_30283__$1 = cljs.core.get.call(null,inst_30261,inst_30276__$1);var state_30344__$1 = (function (){var statearr_30384 = state_30344;(statearr_30384[(21)] = inst_30276__$1);
(statearr_30384[(25)] = inst_30282);
(statearr_30384[(22)] = inst_30283__$1);
return statearr_30384;
})();if(cljs.core.truth_(inst_30283__$1))
{var statearr_30385_30456 = state_30344__$1;(statearr_30385_30456[(1)] = (13));
} else
{var statearr_30386_30457 = state_30344__$1;(statearr_30386_30457[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (18)))
{var inst_30328 = (state_30344[(2)]);var state_30344__$1 = state_30344;var statearr_30387_30458 = state_30344__$1;(statearr_30387_30458[(2)] = inst_30328);
(statearr_30387_30458[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (8)))
{var inst_30271 = (state_30344[(15)]);var inst_30270 = (state_30344[(16)]);var inst_30273 = (inst_30271 < inst_30270);var inst_30274 = inst_30273;var state_30344__$1 = state_30344;if(cljs.core.truth_(inst_30274))
{var statearr_30388_30459 = state_30344__$1;(statearr_30388_30459[(1)] = (10));
} else
{var statearr_30389_30460 = state_30344__$1;(statearr_30389_30460[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30393[(0)] = state_machine__9111__auto__);
(statearr_30393[(1)] = (1));
return statearr_30393;
});
var state_machine__9111__auto____1 = (function (state_30344){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30344);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30394){if((e30394 instanceof Object))
{var ex__9114__auto__ = e30394;var statearr_30395_30461 = state_30344;(statearr_30395_30461[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30462 = state_30344;
state_30344 = G__30462;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
})();var state__9127__auto__ = (function (){var statearr_30396 = f__9126__auto__.call(null);(statearr_30396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_30238){var self__ = this;
var _30238__$1 = this;return self__.meta30237;
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.t30236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function (_30238,meta30237__$1){var self__ = this;
var _30238__$1 = this;return (new clustermap.components.filter.t30236(self__.owner,self__.output_checker30073,self__.map30068,self__.output_schema30070,self__.G__30074,self__.component_specs,self__.filter_spec,self__.constructor30065,self__.history,self__.components,self__.map30069,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.map30067,self__.url_components,self__.input_checker30072,self__.input_schema30071,meta30237__$1));
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
clustermap.components.filter.__GT_t30236 = ((function (owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073){
return (function __GT_t30236(owner__$1,output_checker30073__$1,map30068__$1,output_schema30070__$1,G__30074__$1,component_specs__$1,filter_spec__$1,constructor30065__$1,history__$1,components__$1,map30069__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,map30067__$1,url_components__$1,input_checker30072__$1,input_schema30071__$1,meta30237){return (new clustermap.components.filter.t30236(owner__$1,output_checker30073__$1,map30068__$1,output_schema30070__$1,G__30074__$1,component_specs__$1,filter_spec__$1,constructor30065__$1,history__$1,components__$1,map30069__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,map30067__$1,url_components__$1,input_checker30072__$1,input_schema30071__$1,meta30237));
});})(owner,history,filter_rq_pub,map30068,url_components,components,component_specs,id,filter_spec,map30069,validate__6034__auto__,ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
;
}
return (new clustermap.components.filter.t30236(owner,output_checker30073,map30068,output_schema30070,G__30074,component_specs,filter_spec,constructor30065,history,components,map30069,validate__6034__auto__,id,filter_rq_pub,ufv__,map30067,url_components,input_checker30072,input_schema30071,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30463 = output_checker30073.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30463))
{var error__6036__auto___30464 = temp__4126__auto___30463;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30065","constructor30065",1576834735,null),cljs.core.pr_str.call(null,error__6036__auto___30464)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30464,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30070,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30070,input_schema30071,input_checker30072,output_checker30073))
,schema.core.make_fn_schema.call(null,output_schema30070,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30071], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30400){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30064,p__30397){var vec__30399 = p__30397;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30399,(0),null);return component_fnk__7881__auto___30400.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30064),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30064,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30064,var_args){
var p__30397 = null;if (arguments.length > 2) {
  p__30397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30064,p__30397);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30465){
var data__7882__auto__ = cljs.core.first(arglist__30465);
arglist__30465 = cljs.core.next(arglist__30465);
var owner30064 = cljs.core.first(arglist__30465);
var p__30397 = cljs.core.rest(arglist__30465);
return filter_component__delegate(data__7882__auto__,owner30064,p__30397);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30400))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30066){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30066);
});
__GT_filter_component = function(cursor__7850__auto__,m30066){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
