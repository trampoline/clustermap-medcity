// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.checkboxes_filter');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filters.checkboxes_filter.make_sequential = (function make_sequential(s){if((s == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,s))
{return s;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
/**
* return a map of options keyed by value
*/
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30709(s__30710){return (new cljs.core.LazySeq(null,(function (){var s__30710__$1 = s__30710;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30710__$1);if(temp__4126__auto__)
{var s__30710__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30710__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30710__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30712 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30711 = (0);while(true){
if((i__30711 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30711);cljs.core.chunk_append.call(null,b__30712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30713 = (i__30711 + (1));
i__30711 = G__30713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30712),iter__30709.call(null,cljs.core.chunk_rest.call(null,s__30710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30712),null);
}
} else
{var o = cljs.core.first.call(null,s__30710__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30709.call(null,cljs.core.rest.call(null,s__30710__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,options);
})());
});
/**
* given a combined filter, extract the set of option ids this represents
*/
clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter = (function extract_option_values_from_filter(options,f){var fs = cljs.core.set.call(null,clustermap.filters.de_or_filters.call(null,f));return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.call(null,((function (fs){
return (function (p1__30714_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30714_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30717 = options;var G__30717__$1 = (((G__30717 == null))?null:cljs.core.filter.call(null,((function (G__30717,values__$1){
return (function (p1__30715_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30715_SHARP_));
});})(G__30717,values__$1))
,G__30717));var G__30717__$2 = (((G__30717__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30717__$1));return G__30717__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30719,values){var map__30721 = p__30719;var map__30721__$1 = ((cljs.core.seq_QMARK_.call(null,map__30721))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);var component_spec = map__30721__$1;var options = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30721__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30721,map__30721__$1,component_spec,options,label){
return (function (p1__30718_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30718_SHARP_));
});})(values__$1,map__30721,map__30721__$1,component_spec,options,label))
,options);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* given a seq of option values set the filters.
* returns an updated filter-spec value, but doesn't update the cursor
*/
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30722,values){var map__30724 = p__30722;var map__30724__$1 = ((cljs.core.seq_QMARK_.call(null,map__30724))?cljs.core.apply.call(null,cljs.core.hash_map,map__30724):map__30724);var component_spec = map__30724__$1;var options = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30725){var map__30727 = p__30725;var map__30727__$1 = ((cljs.core.seq_QMARK_.call(null,map__30727))?cljs.core.apply.call(null,cljs.core.hash_map,map__30727):map__30727);var component_spec = map__30727__$1;var options = cljs.core.get.call(null,map__30727__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30728){var map__30730 = p__30728;var map__30730__$1 = ((cljs.core.seq_QMARK_.call(null,map__30730))?cljs.core.apply.call(null,cljs.core.hash_map,map__30730):map__30730);var component_spec = map__30730__$1;var options = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30731 = schema.core.Any;var input_schema30732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30733 = schema.core.checker.call(null,input_schema30732);var output_checker30734 = schema.core.checker.call(null,output_schema30731);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function render_STAR_(G__30735){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30770 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30735], null);var temp__4126__auto___30771 = input_checker30733.call(null,args__6035__auto___30770);if(cljs.core.truth_(temp__4126__auto___30771))
{var error__6036__auto___30772 = temp__4126__auto___30771;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30772,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30770,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30732,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30735;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30753 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30753))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30753)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30753))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function iter__30754(s__30755){return (new cljs.core.LazySeq(null,((function (attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (){var s__30755__$1 = s__30755;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30755__$1);if(temp__4126__auto__)
{var s__30755__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30755__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30755__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30757 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30756 = (0);while(true){
if((i__30756 < size__4376__auto__))
{var map__30760 = cljs.core._nth.call(null,c__4375__auto__,i__30756);var map__30760__$1 = ((cljs.core.seq_QMARK_.call(null,map__30760))?cljs.core.apply.call(null,cljs.core.hash_map,map__30760):map__30760);var filter = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30757,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30756,map__30760,map__30760__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30757,s__30755__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30756,map__30760,map__30760__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30757,s__30755__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30773 = (i__30756 + (1));
i__30756 = G__30773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30757),iter__30754.call(null,cljs.core.chunk_rest.call(null,s__30755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30757),null);
}
} else
{var map__30761 = cljs.core.first.call(null,s__30755__$2);var map__30761__$1 = ((cljs.core.seq_QMARK_.call(null,map__30761))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);var filter = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30761,map__30761__$1,filter,label__$1,value,s__30755__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30761,map__30761__$1,filter,label__$1,value,s__30755__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30754.call(null,cljs.core.rest.call(null,s__30755__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
,null,null));
});})(attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30753),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function iter__30762(s__30763){return (new cljs.core.LazySeq(null,((function (attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (){var s__30763__$1 = s__30763;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30763__$1);if(temp__4126__auto__)
{var s__30763__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30763__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30763__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30765 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30764 = (0);while(true){
if((i__30764 < size__4376__auto__))
{var map__30768 = cljs.core._nth.call(null,c__4375__auto__,i__30764);var map__30768__$1 = ((cljs.core.seq_QMARK_.call(null,map__30768))?cljs.core.apply.call(null,cljs.core.hash_map,map__30768):map__30768);var filter = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30765,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30764,map__30768,map__30768__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30765,s__30763__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30764,map__30768,map__30768__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30765,s__30763__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30774 = (i__30764 + (1));
i__30764 = G__30774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30765),iter__30762.call(null,cljs.core.chunk_rest.call(null,s__30763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30765),null);
}
} else
{var map__30769 = cljs.core.first.call(null,s__30763__$2);var map__30769__$1 = ((cljs.core.seq_QMARK_.call(null,map__30769))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);var filter = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30769,map__30769__$1,filter,label__$1,value,s__30763__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30769,map__30769__$1,filter,label__$1,value,s__30763__$2,temp__4126__auto__,attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30762.call(null,cljs.core.rest.call(null,s__30763__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
,null,null));
});})(attrs30753,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30775 = output_checker30734.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30775))
{var error__6036__auto___30776 = temp__4126__auto___30775;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30776,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30731,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30731,input_schema30732,input_checker30733,output_checker30734))
,schema.core.make_fn_schema.call(null,output_schema30731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30732], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30922 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30782 = schema.core.Any;var input_schema30783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30780","map30780",-2052272425,null))], null);var input_checker30784 = schema.core.checker.call(null,input_schema30783);var output_checker30785 = schema.core.checker.call(null,output_schema30782);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function constructor30778(G__30786){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30786], null);var temp__4126__auto___30924 = input_checker30784.call(null,args__6035__auto___30923);if(cljs.core.truth_(temp__4126__auto___30924))
{var error__6036__auto___30925 = temp__4126__auto___30924;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30778","constructor30778",102816831,null),cljs.core.pr_str.call(null,error__6036__auto___30925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30925,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30923,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30783,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30780 = G__30786;while(true){
if(cljs.core.map_QMARK_.call(null,map30780))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30780)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30780,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30781 = plumbing.fnk.schema.safe_get.call(null,map30780,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30781,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30780,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30853 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30853 = (function (component_spec,component_filter_rq_chan,owner,data,output_schema30782,output_checker30785,map30781,filter_spec,G__30786,input_schema30783,map30780,validate__6034__auto__,id,ufv__,input_checker30784,constructor30778,meta30854){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.output_schema30782 = output_schema30782;
this.output_checker30785 = output_checker30785;
this.map30781 = map30781;
this.filter_spec = filter_spec;
this.G__30786 = G__30786;
this.input_schema30783 = input_schema30783;
this.map30780 = map30780;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.input_checker30784 = input_checker30784;
this.constructor30778 = constructor30778;
this.meta30854 = meta30854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30853.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30853.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30853";
clustermap.components.filters.checkboxes_filter.t30853.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30853");
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
clustermap.components.filters.checkboxes_filter.t30853.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30853.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
clustermap.components.filters.checkboxes_filter.t30853.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30853.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
clustermap.components.filters.checkboxes_filter.t30853.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30853.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (state_30893){var state_val_30894 = (state_30893[(1)]);if((state_val_30894 === (7)))
{var inst_30884 = (state_30893[(2)]);var state_30893__$1 = state_30893;if(cljs.core.truth_(inst_30884))
{var statearr_30895_30926 = state_30893__$1;(statearr_30895_30926[(1)] = (11));
} else
{var statearr_30896_30927 = state_30893__$1;(statearr_30896_30927[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (1)))
{var state_30893__$1 = state_30893;var statearr_30897_30928 = state_30893__$1;(statearr_30897_30928[(2)] = null);
(statearr_30897_30928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (4)))
{var inst_30858 = (state_30893[(7)]);var inst_30858__$1 = (state_30893[(2)]);var state_30893__$1 = (function (){var statearr_30898 = state_30893;(statearr_30898[(7)] = inst_30858__$1);
return statearr_30898;
})();if(cljs.core.truth_(inst_30858__$1))
{var statearr_30899_30929 = state_30893__$1;(statearr_30899_30929[(1)] = (5));
} else
{var statearr_30900_30930 = state_30893__$1;(statearr_30900_30930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (13)))
{var inst_30889 = (state_30893[(2)]);var state_30893__$1 = state_30893;var statearr_30901_30931 = state_30893__$1;(statearr_30901_30931[(2)] = inst_30889);
(statearr_30901_30931[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (6)))
{var state_30893__$1 = state_30893;var statearr_30902_30932 = state_30893__$1;(statearr_30902_30932[(2)] = null);
(statearr_30902_30932[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (3)))
{var inst_30891 = (state_30893[(2)]);var state_30893__$1 = state_30893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30893__$1,inst_30891);
} else
{if((state_val_30894 === (12)))
{var state_30893__$1 = state_30893;var statearr_30903_30933 = state_30893__$1;(statearr_30903_30933[(2)] = null);
(statearr_30903_30933[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (2)))
{var state_30893__$1 = state_30893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30893__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30894 === (11)))
{var state_30893__$1 = state_30893;var statearr_30904_30934 = state_30893__$1;(statearr_30904_30934[(2)] = null);
(statearr_30904_30934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (9)))
{var inst_30864 = (state_30893[(8)]);var state_30893__$1 = state_30893;var statearr_30905_30935 = state_30893__$1;(statearr_30905_30935[(2)] = inst_30864);
(statearr_30905_30935[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (5)))
{var inst_30864 = (state_30893[(8)]);var inst_30858 = (state_30893[(7)]);var inst_30861 = cljs.core.nth.call(null,inst_30858,(0),null);var inst_30862 = cljs.core.nth.call(null,inst_30858,(1),null);var inst_30864__$1 = om.core.get_props.call(null,self__.owner);var inst_30865 = cljs.core.seq_QMARK_.call(null,inst_30864__$1);var state_30893__$1 = (function (){var statearr_30906 = state_30893;(statearr_30906[(8)] = inst_30864__$1);
(statearr_30906[(9)] = inst_30862);
(statearr_30906[(10)] = inst_30861);
return statearr_30906;
})();if(inst_30865)
{var statearr_30907_30936 = state_30893__$1;(statearr_30907_30936[(1)] = (8));
} else
{var statearr_30908_30937 = state_30893__$1;(statearr_30908_30937[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (10)))
{var inst_30862 = (state_30893[(9)]);var inst_30870 = (state_30893[(2)]);var inst_30871 = cljs.core.get.call(null,inst_30870,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30872 = cljs.core.get.call(null,inst_30870,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30873 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30874 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30862];var inst_30875 = (new cljs.core.PersistentVector(null,3,(5),inst_30873,inst_30874,null));var inst_30876 = cljs.core.clj__GT_js.call(null,inst_30875);var inst_30877 = console.log(inst_30876);var inst_30878 = cljs.core.deref.call(null,inst_30872);var inst_30879 = cljs.core.deref.call(null,inst_30871);var inst_30880 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30878,inst_30879,inst_30862);var inst_30881 = om.core.update_BANG_.call(null,inst_30872,inst_30880);var state_30893__$1 = (function (){var statearr_30909 = state_30893;(statearr_30909[(11)] = inst_30881);
(statearr_30909[(12)] = inst_30877);
return statearr_30909;
})();var statearr_30910_30938 = state_30893__$1;(statearr_30910_30938[(2)] = true);
(statearr_30910_30938[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30894 === (8)))
{var inst_30864 = (state_30893[(8)]);var inst_30867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30864);var state_30893__$1 = state_30893;var statearr_30911_30939 = state_30893__$1;(statearr_30911_30939[(2)] = inst_30867);
(statearr_30911_30939[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30915 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30915[(0)] = state_machine__9111__auto__);
(statearr_30915[(1)] = (1));
return statearr_30915;
});
var state_machine__9111__auto____1 = (function (state_30893){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30893);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30916){if((e30916 instanceof Object))
{var ex__9114__auto__ = e30916;var statearr_30917_30940 = state_30893;(statearr_30917_30940[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30916;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30941 = state_30893;
state_30893 = G__30941;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30893){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
})();var state__9127__auto__ = (function (){var statearr_30918 = f__9126__auto__.call(null);(statearr_30918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
clustermap.components.filters.checkboxes_filter.t30853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (_30855){var self__ = this;
var _30855__$1 = this;return self__.meta30854;
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
clustermap.components.filters.checkboxes_filter.t30853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function (_30855,meta30854__$1){var self__ = this;
var _30855__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30853(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.output_schema30782,self__.output_checker30785,self__.map30781,self__.filter_spec,self__.G__30786,self__.input_schema30783,self__.map30780,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.input_checker30784,self__.constructor30778,meta30854__$1));
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
clustermap.components.filters.checkboxes_filter.__GT_t30853 = ((function (owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785){
return (function __GT_t30853(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema30782__$1,output_checker30785__$1,map30781__$1,filter_spec__$1,G__30786__$1,input_schema30783__$1,map30780__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_checker30784__$1,constructor30778__$1,meta30854){return (new clustermap.components.filters.checkboxes_filter.t30853(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema30782__$1,output_checker30785__$1,map30781__$1,filter_spec__$1,G__30786__$1,input_schema30783__$1,map30780__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_checker30784__$1,constructor30778__$1,meta30854));
});})(owner,component_filter_rq_chan,map30781,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30853(component_spec,component_filter_rq_chan,owner,data,output_schema30782,output_checker30785,map30781,filter_spec,G__30786,input_schema30783,map30780,validate__6034__auto__,id,ufv__,input_checker30784,constructor30778,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30942 = output_checker30785.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30942))
{var error__6036__auto___30943 = temp__4126__auto___30942;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30778","constructor30778",102816831,null),cljs.core.pr_str.call(null,error__6036__auto___30943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30943,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30782,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30782,input_schema30783,input_checker30784,output_checker30785))
,schema.core.make_fn_schema.call(null,output_schema30782,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30783], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30922){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30777,p__30919){var vec__30921 = p__30919;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30921,(0),null);return component_fnk__7881__auto___30922.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30777,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30777,var_args){
var p__30919 = null;if (arguments.length > 2) {
  p__30919 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30777,p__30919);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30944){
var data__7882__auto__ = cljs.core.first(arglist__30944);
arglist__30944 = cljs.core.next(arglist__30944);
var owner30777 = cljs.core.first(arglist__30944);
var p__30919 = cljs.core.rest(arglist__30944);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30777,p__30919);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30922))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30779){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30779);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30779){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
