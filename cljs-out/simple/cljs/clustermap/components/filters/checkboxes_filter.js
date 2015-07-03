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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30712(s__30713){return (new cljs.core.LazySeq(null,(function (){var s__30713__$1 = s__30713;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30713__$1);if(temp__4126__auto__)
{var s__30713__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30713__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30713__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30715 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30714 = (0);while(true){
if((i__30714 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30714);cljs.core.chunk_append.call(null,b__30715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30716 = (i__30714 + (1));
i__30714 = G__30716;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30715),iter__30712.call(null,cljs.core.chunk_rest.call(null,s__30713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30715),null);
}
} else
{var o = cljs.core.first.call(null,s__30713__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30712.call(null,cljs.core.rest.call(null,s__30713__$2)));
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
return (function (p1__30717_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30717_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30720 = options;var G__30720__$1 = (((G__30720 == null))?null:cljs.core.filter.call(null,((function (G__30720,values__$1){
return (function (p1__30718_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30718_SHARP_));
});})(G__30720,values__$1))
,G__30720));var G__30720__$2 = (((G__30720__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30720__$1));return G__30720__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30722,values){var map__30724 = p__30722;var map__30724__$1 = ((cljs.core.seq_QMARK_.call(null,map__30724))?cljs.core.apply.call(null,cljs.core.hash_map,map__30724):map__30724);var component_spec = map__30724__$1;var options = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30724__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30724,map__30724__$1,component_spec,options,label){
return (function (p1__30721_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30721_SHARP_));
});})(values__$1,map__30724,map__30724__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30725,values){var map__30727 = p__30725;var map__30727__$1 = ((cljs.core.seq_QMARK_.call(null,map__30727))?cljs.core.apply.call(null,cljs.core.hash_map,map__30727):map__30727);var component_spec = map__30727__$1;var options = cljs.core.get.call(null,map__30727__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30728){var map__30730 = p__30728;var map__30730__$1 = ((cljs.core.seq_QMARK_.call(null,map__30730))?cljs.core.apply.call(null,cljs.core.hash_map,map__30730):map__30730);var component_spec = map__30730__$1;var options = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30731){var map__30733 = p__30731;var map__30733__$1 = ((cljs.core.seq_QMARK_.call(null,map__30733))?cljs.core.apply.call(null,cljs.core.hash_map,map__30733):map__30733);var component_spec = map__30733__$1;var options = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30734 = schema.core.Any;var input_schema30735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30736 = schema.core.checker.call(null,input_schema30735);var output_checker30737 = schema.core.checker.call(null,output_schema30734);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function render_STAR_(G__30738){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30738], null);var temp__4126__auto___30774 = input_checker30736.call(null,args__6035__auto___30773);if(cljs.core.truth_(temp__4126__auto___30774))
{var error__6036__auto___30775 = temp__4126__auto___30774;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30775)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30775,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30773,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30735,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30738;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30756 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30756))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30756)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30756))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function iter__30757(s__30758){return (new cljs.core.LazySeq(null,((function (attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (){var s__30758__$1 = s__30758;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30758__$1);if(temp__4126__auto__)
{var s__30758__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30758__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30758__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30760 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30759 = (0);while(true){
if((i__30759 < size__4376__auto__))
{var map__30763 = cljs.core._nth.call(null,c__4375__auto__,i__30759);var map__30763__$1 = ((cljs.core.seq_QMARK_.call(null,map__30763))?cljs.core.apply.call(null,cljs.core.hash_map,map__30763):map__30763);var filter = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30763__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30760,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30759,map__30763,map__30763__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30760,s__30758__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30759,map__30763,map__30763__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30760,s__30758__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30776 = (i__30759 + (1));
i__30759 = G__30776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30760),iter__30757.call(null,cljs.core.chunk_rest.call(null,s__30758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30760),null);
}
} else
{var map__30764 = cljs.core.first.call(null,s__30758__$2);var map__30764__$1 = ((cljs.core.seq_QMARK_.call(null,map__30764))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);var filter = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30764,map__30764__$1,filter,label__$1,value,s__30758__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30764,map__30764__$1,filter,label__$1,value,s__30758__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30757.call(null,cljs.core.rest.call(null,s__30758__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
,null,null));
});})(attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30756),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function iter__30765(s__30766){return (new cljs.core.LazySeq(null,((function (attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (){var s__30766__$1 = s__30766;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30766__$1);if(temp__4126__auto__)
{var s__30766__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30766__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30766__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30768 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30767 = (0);while(true){
if((i__30767 < size__4376__auto__))
{var map__30771 = cljs.core._nth.call(null,c__4375__auto__,i__30767);var map__30771__$1 = ((cljs.core.seq_QMARK_.call(null,map__30771))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);var filter = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30768,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30767,map__30771,map__30771__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30768,s__30766__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30767,map__30771,map__30771__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30768,s__30766__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30777 = (i__30767 + (1));
i__30767 = G__30777;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30768),iter__30765.call(null,cljs.core.chunk_rest.call(null,s__30766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30768),null);
}
} else
{var map__30772 = cljs.core.first.call(null,s__30766__$2);var map__30772__$1 = ((cljs.core.seq_QMARK_.call(null,map__30772))?cljs.core.apply.call(null,cljs.core.hash_map,map__30772):map__30772);var filter = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30772,map__30772__$1,filter,label__$1,value,s__30766__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30772,map__30772__$1,filter,label__$1,value,s__30766__$2,temp__4126__auto__,attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30765.call(null,cljs.core.rest.call(null,s__30766__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
,null,null));
});})(attrs30756,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30778 = output_checker30737.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30778))
{var error__6036__auto___30779 = temp__4126__auto___30778;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30779)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30779,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30734,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30734,input_schema30735,input_checker30736,output_checker30737))
,schema.core.make_fn_schema.call(null,output_schema30734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30735], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30925 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30785 = schema.core.Any;var input_schema30786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30783","map30783",779611846,null))], null);var input_checker30787 = schema.core.checker.call(null,input_schema30786);var output_checker30788 = schema.core.checker.call(null,output_schema30785);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function constructor30781(G__30789){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30789], null);var temp__4126__auto___30927 = input_checker30787.call(null,args__6035__auto___30926);if(cljs.core.truth_(temp__4126__auto___30927))
{var error__6036__auto___30928 = temp__4126__auto___30927;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30781","constructor30781",2065504515,null),cljs.core.pr_str.call(null,error__6036__auto___30928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30928,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30926,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30786,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30783 = G__30789;while(true){
if(cljs.core.map_QMARK_.call(null,map30783))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30783)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30783,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30784 = plumbing.fnk.schema.safe_get.call(null,map30783,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30784,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30783,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30856 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30856 = (function (component_spec,component_filter_rq_chan,constructor30781,owner,data,map30783,filter_spec,input_schema30786,input_checker30787,map30784,output_schema30785,output_checker30788,validate__6034__auto__,id,ufv__,G__30789,meta30857){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30781 = constructor30781;
this.owner = owner;
this.data = data;
this.map30783 = map30783;
this.filter_spec = filter_spec;
this.input_schema30786 = input_schema30786;
this.input_checker30787 = input_checker30787;
this.map30784 = map30784;
this.output_schema30785 = output_schema30785;
this.output_checker30788 = output_checker30788;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.G__30789 = G__30789;
this.meta30857 = meta30857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30856.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30856.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30856";
clustermap.components.filters.checkboxes_filter.t30856.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30856");
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
clustermap.components.filters.checkboxes_filter.t30856.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30856.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
clustermap.components.filters.checkboxes_filter.t30856.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30856.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
clustermap.components.filters.checkboxes_filter.t30856.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30856.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (state_30896){var state_val_30897 = (state_30896[(1)]);if((state_val_30897 === (7)))
{var inst_30887 = (state_30896[(2)]);var state_30896__$1 = state_30896;if(cljs.core.truth_(inst_30887))
{var statearr_30898_30929 = state_30896__$1;(statearr_30898_30929[(1)] = (11));
} else
{var statearr_30899_30930 = state_30896__$1;(statearr_30899_30930[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (1)))
{var state_30896__$1 = state_30896;var statearr_30900_30931 = state_30896__$1;(statearr_30900_30931[(2)] = null);
(statearr_30900_30931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (4)))
{var inst_30861 = (state_30896[(7)]);var inst_30861__$1 = (state_30896[(2)]);var state_30896__$1 = (function (){var statearr_30901 = state_30896;(statearr_30901[(7)] = inst_30861__$1);
return statearr_30901;
})();if(cljs.core.truth_(inst_30861__$1))
{var statearr_30902_30932 = state_30896__$1;(statearr_30902_30932[(1)] = (5));
} else
{var statearr_30903_30933 = state_30896__$1;(statearr_30903_30933[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (13)))
{var inst_30892 = (state_30896[(2)]);var state_30896__$1 = state_30896;var statearr_30904_30934 = state_30896__$1;(statearr_30904_30934[(2)] = inst_30892);
(statearr_30904_30934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (6)))
{var state_30896__$1 = state_30896;var statearr_30905_30935 = state_30896__$1;(statearr_30905_30935[(2)] = null);
(statearr_30905_30935[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (3)))
{var inst_30894 = (state_30896[(2)]);var state_30896__$1 = state_30896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30896__$1,inst_30894);
} else
{if((state_val_30897 === (12)))
{var state_30896__$1 = state_30896;var statearr_30906_30936 = state_30896__$1;(statearr_30906_30936[(2)] = null);
(statearr_30906_30936[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (2)))
{var state_30896__$1 = state_30896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30896__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30897 === (11)))
{var state_30896__$1 = state_30896;var statearr_30907_30937 = state_30896__$1;(statearr_30907_30937[(2)] = null);
(statearr_30907_30937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (9)))
{var inst_30867 = (state_30896[(8)]);var state_30896__$1 = state_30896;var statearr_30908_30938 = state_30896__$1;(statearr_30908_30938[(2)] = inst_30867);
(statearr_30908_30938[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (5)))
{var inst_30867 = (state_30896[(8)]);var inst_30861 = (state_30896[(7)]);var inst_30864 = cljs.core.nth.call(null,inst_30861,(0),null);var inst_30865 = cljs.core.nth.call(null,inst_30861,(1),null);var inst_30867__$1 = om.core.get_props.call(null,self__.owner);var inst_30868 = cljs.core.seq_QMARK_.call(null,inst_30867__$1);var state_30896__$1 = (function (){var statearr_30909 = state_30896;(statearr_30909[(9)] = inst_30864);
(statearr_30909[(8)] = inst_30867__$1);
(statearr_30909[(10)] = inst_30865);
return statearr_30909;
})();if(inst_30868)
{var statearr_30910_30939 = state_30896__$1;(statearr_30910_30939[(1)] = (8));
} else
{var statearr_30911_30940 = state_30896__$1;(statearr_30911_30940[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (10)))
{var inst_30865 = (state_30896[(10)]);var inst_30873 = (state_30896[(2)]);var inst_30874 = cljs.core.get.call(null,inst_30873,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30875 = cljs.core.get.call(null,inst_30873,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30876 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30877 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30865];var inst_30878 = (new cljs.core.PersistentVector(null,3,(5),inst_30876,inst_30877,null));var inst_30879 = cljs.core.clj__GT_js.call(null,inst_30878);var inst_30880 = console.log(inst_30879);var inst_30881 = cljs.core.deref.call(null,inst_30875);var inst_30882 = cljs.core.deref.call(null,inst_30874);var inst_30883 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30881,inst_30882,inst_30865);var inst_30884 = om.core.update_BANG_.call(null,inst_30875,inst_30883);var state_30896__$1 = (function (){var statearr_30912 = state_30896;(statearr_30912[(11)] = inst_30884);
(statearr_30912[(12)] = inst_30880);
return statearr_30912;
})();var statearr_30913_30941 = state_30896__$1;(statearr_30913_30941[(2)] = true);
(statearr_30913_30941[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30897 === (8)))
{var inst_30867 = (state_30896[(8)]);var inst_30870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30867);var state_30896__$1 = state_30896;var statearr_30914_30942 = state_30896__$1;(statearr_30914_30942[(2)] = inst_30870);
(statearr_30914_30942[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30918 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30918[(0)] = state_machine__9111__auto__);
(statearr_30918[(1)] = (1));
return statearr_30918;
});
var state_machine__9111__auto____1 = (function (state_30896){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30896);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30919){if((e30919 instanceof Object))
{var ex__9114__auto__ = e30919;var statearr_30920_30943 = state_30896;(statearr_30920_30943[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30944 = state_30896;
state_30896 = G__30944;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30896){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
})();var state__9127__auto__ = (function (){var statearr_30921 = f__9126__auto__.call(null);(statearr_30921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
clustermap.components.filters.checkboxes_filter.t30856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (_30858){var self__ = this;
var _30858__$1 = this;return self__.meta30857;
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
clustermap.components.filters.checkboxes_filter.t30856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function (_30858,meta30857__$1){var self__ = this;
var _30858__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30856(self__.component_spec,self__.component_filter_rq_chan,self__.constructor30781,self__.owner,self__.data,self__.map30783,self__.filter_spec,self__.input_schema30786,self__.input_checker30787,self__.map30784,self__.output_schema30785,self__.output_checker30788,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.G__30789,meta30857__$1));
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
clustermap.components.filters.checkboxes_filter.__GT_t30856 = ((function (owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788){
return (function __GT_t30856(component_spec__$1,component_filter_rq_chan__$1,constructor30781__$1,owner__$1,data__$1,map30783__$1,filter_spec__$1,input_schema30786__$1,input_checker30787__$1,map30784__$1,output_schema30785__$1,output_checker30788__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__30789__$1,meta30857){return (new clustermap.components.filters.checkboxes_filter.t30856(component_spec__$1,component_filter_rq_chan__$1,constructor30781__$1,owner__$1,data__$1,map30783__$1,filter_spec__$1,input_schema30786__$1,input_checker30787__$1,map30784__$1,output_schema30785__$1,output_checker30788__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__30789__$1,meta30857));
});})(owner,component_filter_rq_chan,map30784,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30856(component_spec,component_filter_rq_chan,constructor30781,owner,data,map30783,filter_spec,input_schema30786,input_checker30787,map30784,output_schema30785,output_checker30788,validate__6034__auto__,id,ufv__,G__30789,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30945 = output_checker30788.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30945))
{var error__6036__auto___30946 = temp__4126__auto___30945;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30781","constructor30781",2065504515,null),cljs.core.pr_str.call(null,error__6036__auto___30946)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30946,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30785,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30785,input_schema30786,input_checker30787,output_checker30788))
,schema.core.make_fn_schema.call(null,output_schema30785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30786], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30925){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30780,p__30922){var vec__30924 = p__30922;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30924,(0),null);return component_fnk__7881__auto___30925.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30780,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30780,var_args){
var p__30922 = null;if (arguments.length > 2) {
  p__30922 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30780,p__30922);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30947){
var data__7882__auto__ = cljs.core.first(arglist__30947);
arglist__30947 = cljs.core.next(arglist__30947);
var owner30780 = cljs.core.first(arglist__30947);
var p__30922 = cljs.core.rest(arglist__30947);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30780,p__30922);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30925))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30782){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30782);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30782){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
