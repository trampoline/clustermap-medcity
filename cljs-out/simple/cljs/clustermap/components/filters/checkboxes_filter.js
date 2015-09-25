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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30752(s__30753){return (new cljs.core.LazySeq(null,(function (){var s__30753__$1 = s__30753;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30753__$1);if(temp__4126__auto__)
{var s__30753__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30753__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30753__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30755 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30754 = (0);while(true){
if((i__30754 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30754);cljs.core.chunk_append.call(null,b__30755,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30756 = (i__30754 + (1));
i__30754 = G__30756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30755),iter__30752.call(null,cljs.core.chunk_rest.call(null,s__30753__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30755),null);
}
} else
{var o = cljs.core.first.call(null,s__30753__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30752.call(null,cljs.core.rest.call(null,s__30753__$2)));
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
return (function (p1__30757_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30757_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30760 = options;var G__30760__$1 = (((G__30760 == null))?null:cljs.core.filter.call(null,((function (G__30760,values__$1){
return (function (p1__30758_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30758_SHARP_));
});})(G__30760,values__$1))
,G__30760));var G__30760__$2 = (((G__30760__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30760__$1));return G__30760__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30762,values){var map__30764 = p__30762;var map__30764__$1 = ((cljs.core.seq_QMARK_.call(null,map__30764))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);var component_spec = map__30764__$1;var options = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30764,map__30764__$1,component_spec,options,label){
return (function (p1__30761_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30761_SHARP_));
});})(values__$1,map__30764,map__30764__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30765,values){var map__30767 = p__30765;var map__30767__$1 = ((cljs.core.seq_QMARK_.call(null,map__30767))?cljs.core.apply.call(null,cljs.core.hash_map,map__30767):map__30767);var component_spec = map__30767__$1;var options = cljs.core.get.call(null,map__30767__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30768){var map__30770 = p__30768;var map__30770__$1 = ((cljs.core.seq_QMARK_.call(null,map__30770))?cljs.core.apply.call(null,cljs.core.hash_map,map__30770):map__30770);var component_spec = map__30770__$1;var options = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30770__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30771){var map__30773 = p__30771;var map__30773__$1 = ((cljs.core.seq_QMARK_.call(null,map__30773))?cljs.core.apply.call(null,cljs.core.hash_map,map__30773):map__30773);var component_spec = map__30773__$1;var options = cljs.core.get.call(null,map__30773__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30774 = schema.core.Any;var input_schema30775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30776 = schema.core.checker.call(null,input_schema30775);var output_checker30777 = schema.core.checker.call(null,output_schema30774);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function render_STAR_(G__30778){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30778], null);var temp__4126__auto___30814 = input_checker30776.call(null,args__6035__auto___30813);if(cljs.core.truth_(temp__4126__auto___30814))
{var error__6036__auto___30815 = temp__4126__auto___30814;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30815)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30815,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30813,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30775,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30778;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30796 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30796))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30796)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30796))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function iter__30797(s__30798){return (new cljs.core.LazySeq(null,((function (attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (){var s__30798__$1 = s__30798;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30798__$1);if(temp__4126__auto__)
{var s__30798__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30798__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30798__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30800 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30799 = (0);while(true){
if((i__30799 < size__4376__auto__))
{var map__30803 = cljs.core._nth.call(null,c__4375__auto__,i__30799);var map__30803__$1 = ((cljs.core.seq_QMARK_.call(null,map__30803))?cljs.core.apply.call(null,cljs.core.hash_map,map__30803):map__30803);var filter = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30800,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30799,map__30803,map__30803__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30800,s__30798__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30799,map__30803,map__30803__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30800,s__30798__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30816 = (i__30799 + (1));
i__30799 = G__30816;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30800),iter__30797.call(null,cljs.core.chunk_rest.call(null,s__30798__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30800),null);
}
} else
{var map__30804 = cljs.core.first.call(null,s__30798__$2);var map__30804__$1 = ((cljs.core.seq_QMARK_.call(null,map__30804))?cljs.core.apply.call(null,cljs.core.hash_map,map__30804):map__30804);var filter = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30804__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30804,map__30804__$1,filter,label__$1,value,s__30798__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30804,map__30804__$1,filter,label__$1,value,s__30798__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30797.call(null,cljs.core.rest.call(null,s__30798__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
,null,null));
});})(attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30796),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function iter__30805(s__30806){return (new cljs.core.LazySeq(null,((function (attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (){var s__30806__$1 = s__30806;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30806__$1);if(temp__4126__auto__)
{var s__30806__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30806__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30806__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30808 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30807 = (0);while(true){
if((i__30807 < size__4376__auto__))
{var map__30811 = cljs.core._nth.call(null,c__4375__auto__,i__30807);var map__30811__$1 = ((cljs.core.seq_QMARK_.call(null,map__30811))?cljs.core.apply.call(null,cljs.core.hash_map,map__30811):map__30811);var filter = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30808,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30807,map__30811,map__30811__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30808,s__30806__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30807,map__30811,map__30811__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30808,s__30806__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30817 = (i__30807 + (1));
i__30807 = G__30817;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30808),iter__30805.call(null,cljs.core.chunk_rest.call(null,s__30806__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30808),null);
}
} else
{var map__30812 = cljs.core.first.call(null,s__30806__$2);var map__30812__$1 = ((cljs.core.seq_QMARK_.call(null,map__30812))?cljs.core.apply.call(null,cljs.core.hash_map,map__30812):map__30812);var filter = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30812__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30812,map__30812__$1,filter,label__$1,value,s__30806__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30812,map__30812__$1,filter,label__$1,value,s__30806__$2,temp__4126__auto__,attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30805.call(null,cljs.core.rest.call(null,s__30806__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
,null,null));
});})(attrs30796,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30818 = output_checker30777.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30818))
{var error__6036__auto___30819 = temp__4126__auto___30818;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30819)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30819,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30774,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30774,input_schema30775,input_checker30776,output_checker30777))
,schema.core.make_fn_schema.call(null,output_schema30774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30775], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30965 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30825 = schema.core.Any;var input_schema30826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30823","map30823",1470546144,null))], null);var input_checker30827 = schema.core.checker.call(null,input_schema30826);var output_checker30828 = schema.core.checker.call(null,output_schema30825);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function constructor30821(G__30829){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30829], null);var temp__4126__auto___30967 = input_checker30827.call(null,args__6035__auto___30966);if(cljs.core.truth_(temp__4126__auto___30967))
{var error__6036__auto___30968 = temp__4126__auto___30967;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30821","constructor30821",1984934421,null),cljs.core.pr_str.call(null,error__6036__auto___30968)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30968,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30966,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30826,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30823 = G__30829;while(true){
if(cljs.core.map_QMARK_.call(null,map30823))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30823)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30823,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30824 = plumbing.fnk.schema.safe_get.call(null,map30823,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30824,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30823,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30896 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30896 = (function (map30823,component_spec,component_filter_rq_chan,owner,data,map30824,input_checker30827,input_schema30826,output_checker30828,filter_spec,constructor30821,G__30829,validate__6034__auto__,output_schema30825,id,ufv__,meta30897){
this.map30823 = map30823;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.map30824 = map30824;
this.input_checker30827 = input_checker30827;
this.input_schema30826 = input_schema30826;
this.output_checker30828 = output_checker30828;
this.filter_spec = filter_spec;
this.constructor30821 = constructor30821;
this.G__30829 = G__30829;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema30825 = output_schema30825;
this.id = id;
this.ufv__ = ufv__;
this.meta30897 = meta30897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30896.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30896.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30896";
clustermap.components.filters.checkboxes_filter.t30896.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30896");
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
clustermap.components.filters.checkboxes_filter.t30896.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30896.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
clustermap.components.filters.checkboxes_filter.t30896.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30896.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
clustermap.components.filters.checkboxes_filter.t30896.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30896.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (state_30936){var state_val_30937 = (state_30936[(1)]);if((state_val_30937 === (7)))
{var inst_30927 = (state_30936[(2)]);var state_30936__$1 = state_30936;if(cljs.core.truth_(inst_30927))
{var statearr_30938_30969 = state_30936__$1;(statearr_30938_30969[(1)] = (11));
} else
{var statearr_30939_30970 = state_30936__$1;(statearr_30939_30970[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (1)))
{var state_30936__$1 = state_30936;var statearr_30940_30971 = state_30936__$1;(statearr_30940_30971[(2)] = null);
(statearr_30940_30971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (4)))
{var inst_30901 = (state_30936[(7)]);var inst_30901__$1 = (state_30936[(2)]);var state_30936__$1 = (function (){var statearr_30941 = state_30936;(statearr_30941[(7)] = inst_30901__$1);
return statearr_30941;
})();if(cljs.core.truth_(inst_30901__$1))
{var statearr_30942_30972 = state_30936__$1;(statearr_30942_30972[(1)] = (5));
} else
{var statearr_30943_30973 = state_30936__$1;(statearr_30943_30973[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (13)))
{var inst_30932 = (state_30936[(2)]);var state_30936__$1 = state_30936;var statearr_30944_30974 = state_30936__$1;(statearr_30944_30974[(2)] = inst_30932);
(statearr_30944_30974[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (6)))
{var state_30936__$1 = state_30936;var statearr_30945_30975 = state_30936__$1;(statearr_30945_30975[(2)] = null);
(statearr_30945_30975[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (3)))
{var inst_30934 = (state_30936[(2)]);var state_30936__$1 = state_30936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30936__$1,inst_30934);
} else
{if((state_val_30937 === (12)))
{var state_30936__$1 = state_30936;var statearr_30946_30976 = state_30936__$1;(statearr_30946_30976[(2)] = null);
(statearr_30946_30976[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (2)))
{var state_30936__$1 = state_30936;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30936__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30937 === (11)))
{var state_30936__$1 = state_30936;var statearr_30947_30977 = state_30936__$1;(statearr_30947_30977[(2)] = null);
(statearr_30947_30977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (9)))
{var inst_30907 = (state_30936[(8)]);var state_30936__$1 = state_30936;var statearr_30948_30978 = state_30936__$1;(statearr_30948_30978[(2)] = inst_30907);
(statearr_30948_30978[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (5)))
{var inst_30901 = (state_30936[(7)]);var inst_30907 = (state_30936[(8)]);var inst_30904 = cljs.core.nth.call(null,inst_30901,(0),null);var inst_30905 = cljs.core.nth.call(null,inst_30901,(1),null);var inst_30907__$1 = om.core.get_props.call(null,self__.owner);var inst_30908 = cljs.core.seq_QMARK_.call(null,inst_30907__$1);var state_30936__$1 = (function (){var statearr_30949 = state_30936;(statearr_30949[(9)] = inst_30905);
(statearr_30949[(10)] = inst_30904);
(statearr_30949[(8)] = inst_30907__$1);
return statearr_30949;
})();if(inst_30908)
{var statearr_30950_30979 = state_30936__$1;(statearr_30950_30979[(1)] = (8));
} else
{var statearr_30951_30980 = state_30936__$1;(statearr_30951_30980[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (10)))
{var inst_30905 = (state_30936[(9)]);var inst_30913 = (state_30936[(2)]);var inst_30914 = cljs.core.get.call(null,inst_30913,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30915 = cljs.core.get.call(null,inst_30913,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30916 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30917 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30905];var inst_30918 = (new cljs.core.PersistentVector(null,3,(5),inst_30916,inst_30917,null));var inst_30919 = cljs.core.clj__GT_js.call(null,inst_30918);var inst_30920 = console.log(inst_30919);var inst_30921 = cljs.core.deref.call(null,inst_30915);var inst_30922 = cljs.core.deref.call(null,inst_30914);var inst_30923 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30921,inst_30922,inst_30905);var inst_30924 = om.core.update_BANG_.call(null,inst_30915,inst_30923);var state_30936__$1 = (function (){var statearr_30952 = state_30936;(statearr_30952[(11)] = inst_30920);
(statearr_30952[(12)] = inst_30924);
return statearr_30952;
})();var statearr_30953_30981 = state_30936__$1;(statearr_30953_30981[(2)] = true);
(statearr_30953_30981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30937 === (8)))
{var inst_30907 = (state_30936[(8)]);var inst_30910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30907);var state_30936__$1 = state_30936;var statearr_30954_30982 = state_30936__$1;(statearr_30954_30982[(2)] = inst_30910);
(statearr_30954_30982[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30958 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30958[(0)] = state_machine__9111__auto__);
(statearr_30958[(1)] = (1));
return statearr_30958;
});
var state_machine__9111__auto____1 = (function (state_30936){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30936);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30959){if((e30959 instanceof Object))
{var ex__9114__auto__ = e30959;var statearr_30960_30983 = state_30936;(statearr_30960_30983[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30936);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30959;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30984 = state_30936;
state_30936 = G__30984;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30936){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
})();var state__9127__auto__ = (function (){var statearr_30961 = f__9126__auto__.call(null);(statearr_30961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
clustermap.components.filters.checkboxes_filter.t30896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (_30898){var self__ = this;
var _30898__$1 = this;return self__.meta30897;
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
clustermap.components.filters.checkboxes_filter.t30896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function (_30898,meta30897__$1){var self__ = this;
var _30898__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30896(self__.map30823,self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.map30824,self__.input_checker30827,self__.input_schema30826,self__.output_checker30828,self__.filter_spec,self__.constructor30821,self__.G__30829,self__.validate__6034__auto__,self__.output_schema30825,self__.id,self__.ufv__,meta30897__$1));
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
clustermap.components.filters.checkboxes_filter.__GT_t30896 = ((function (owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828){
return (function __GT_t30896(map30823__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map30824__$1,input_checker30827__$1,input_schema30826__$1,output_checker30828__$1,filter_spec__$1,constructor30821__$1,G__30829__$1,validate__6034__auto____$1,output_schema30825__$1,id__$1,ufv____$1,meta30897){return (new clustermap.components.filters.checkboxes_filter.t30896(map30823__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map30824__$1,input_checker30827__$1,input_schema30826__$1,output_checker30828__$1,filter_spec__$1,constructor30821__$1,G__30829__$1,validate__6034__auto____$1,output_schema30825__$1,id__$1,ufv____$1,meta30897));
});})(owner,component_filter_rq_chan,map30824,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30896(map30823,component_spec,component_filter_rq_chan,owner,data,map30824,input_checker30827,input_schema30826,output_checker30828,filter_spec,constructor30821,G__30829,validate__6034__auto__,output_schema30825,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30985 = output_checker30828.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30985))
{var error__6036__auto___30986 = temp__4126__auto___30985;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30821","constructor30821",1984934421,null),cljs.core.pr_str.call(null,error__6036__auto___30986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30986,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30825,input_schema30826,input_checker30827,output_checker30828))
,schema.core.make_fn_schema.call(null,output_schema30825,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30826], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30965){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30820,p__30962){var vec__30964 = p__30962;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30964,(0),null);return component_fnk__7881__auto___30965.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30820,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30820,var_args){
var p__30962 = null;if (arguments.length > 2) {
  p__30962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30820,p__30962);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30987){
var data__7882__auto__ = cljs.core.first(arglist__30987);
arglist__30987 = cljs.core.next(arglist__30987);
var owner30820 = cljs.core.first(arglist__30987);
var p__30962 = cljs.core.rest(arglist__30987);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30820,p__30962);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30965))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30822){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30822);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30822){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
