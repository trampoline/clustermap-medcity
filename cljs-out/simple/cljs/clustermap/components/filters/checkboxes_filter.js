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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30743(s__30744){return (new cljs.core.LazySeq(null,(function (){var s__30744__$1 = s__30744;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30744__$1);if(temp__4126__auto__)
{var s__30744__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30744__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30744__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30746 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30745 = (0);while(true){
if((i__30745 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30745);cljs.core.chunk_append.call(null,b__30746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30747 = (i__30745 + (1));
i__30745 = G__30747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30746),iter__30743.call(null,cljs.core.chunk_rest.call(null,s__30744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30746),null);
}
} else
{var o = cljs.core.first.call(null,s__30744__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30743.call(null,cljs.core.rest.call(null,s__30744__$2)));
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
return (function (p1__30748_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30748_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30751 = options;var G__30751__$1 = (((G__30751 == null))?null:cljs.core.filter.call(null,((function (G__30751,values__$1){
return (function (p1__30749_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30749_SHARP_));
});})(G__30751,values__$1))
,G__30751));var G__30751__$2 = (((G__30751__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30751__$1));return G__30751__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30753,values){var map__30755 = p__30753;var map__30755__$1 = ((cljs.core.seq_QMARK_.call(null,map__30755))?cljs.core.apply.call(null,cljs.core.hash_map,map__30755):map__30755);var component_spec = map__30755__$1;var options = cljs.core.get.call(null,map__30755__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30755__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30755,map__30755__$1,component_spec,options,label){
return (function (p1__30752_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30752_SHARP_));
});})(values__$1,map__30755,map__30755__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30756,values){var map__30758 = p__30756;var map__30758__$1 = ((cljs.core.seq_QMARK_.call(null,map__30758))?cljs.core.apply.call(null,cljs.core.hash_map,map__30758):map__30758);var component_spec = map__30758__$1;var options = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30759){var map__30761 = p__30759;var map__30761__$1 = ((cljs.core.seq_QMARK_.call(null,map__30761))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);var component_spec = map__30761__$1;var options = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30762){var map__30764 = p__30762;var map__30764__$1 = ((cljs.core.seq_QMARK_.call(null,map__30764))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);var component_spec = map__30764__$1;var options = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30765 = schema.core.Any;var input_schema30766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30767 = schema.core.checker.call(null,input_schema30766);var output_checker30768 = schema.core.checker.call(null,output_schema30765);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function render_STAR_(G__30769){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30769], null);var temp__4126__auto___30805 = input_checker30767.call(null,args__6035__auto___30804);if(cljs.core.truth_(temp__4126__auto___30805))
{var error__6036__auto___30806 = temp__4126__auto___30805;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30806)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30806,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30804,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30766,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30769;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30787 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30787))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30787)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30787))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function iter__30788(s__30789){return (new cljs.core.LazySeq(null,((function (attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (){var s__30789__$1 = s__30789;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30789__$1);if(temp__4126__auto__)
{var s__30789__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30789__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30789__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30791 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30790 = (0);while(true){
if((i__30790 < size__4376__auto__))
{var map__30794 = cljs.core._nth.call(null,c__4375__auto__,i__30790);var map__30794__$1 = ((cljs.core.seq_QMARK_.call(null,map__30794))?cljs.core.apply.call(null,cljs.core.hash_map,map__30794):map__30794);var filter = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30791,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30790,map__30794,map__30794__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30791,s__30789__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30790,map__30794,map__30794__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30791,s__30789__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30807 = (i__30790 + (1));
i__30790 = G__30807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30791),iter__30788.call(null,cljs.core.chunk_rest.call(null,s__30789__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30791),null);
}
} else
{var map__30795 = cljs.core.first.call(null,s__30789__$2);var map__30795__$1 = ((cljs.core.seq_QMARK_.call(null,map__30795))?cljs.core.apply.call(null,cljs.core.hash_map,map__30795):map__30795);var filter = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30795,map__30795__$1,filter,label__$1,value,s__30789__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30795,map__30795__$1,filter,label__$1,value,s__30789__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30788.call(null,cljs.core.rest.call(null,s__30789__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
,null,null));
});})(attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30787),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function iter__30796(s__30797){return (new cljs.core.LazySeq(null,((function (attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (){var s__30797__$1 = s__30797;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30797__$1);if(temp__4126__auto__)
{var s__30797__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30797__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30797__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30799 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30798 = (0);while(true){
if((i__30798 < size__4376__auto__))
{var map__30802 = cljs.core._nth.call(null,c__4375__auto__,i__30798);var map__30802__$1 = ((cljs.core.seq_QMARK_.call(null,map__30802))?cljs.core.apply.call(null,cljs.core.hash_map,map__30802):map__30802);var filter = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30802__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30799,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30798,map__30802,map__30802__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30799,s__30797__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30798,map__30802,map__30802__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30799,s__30797__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30808 = (i__30798 + (1));
i__30798 = G__30808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30799),iter__30796.call(null,cljs.core.chunk_rest.call(null,s__30797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30799),null);
}
} else
{var map__30803 = cljs.core.first.call(null,s__30797__$2);var map__30803__$1 = ((cljs.core.seq_QMARK_.call(null,map__30803))?cljs.core.apply.call(null,cljs.core.hash_map,map__30803):map__30803);var filter = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30803__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30803,map__30803__$1,filter,label__$1,value,s__30797__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30803,map__30803__$1,filter,label__$1,value,s__30797__$2,temp__4126__auto__,attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30796.call(null,cljs.core.rest.call(null,s__30797__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
,null,null));
});})(attrs30787,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30809 = output_checker30768.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30809))
{var error__6036__auto___30810 = temp__4126__auto___30809;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30810)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30810,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30765,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30765,input_schema30766,input_checker30767,output_checker30768))
,schema.core.make_fn_schema.call(null,output_schema30765,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30766], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30956 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30816 = schema.core.Any;var input_schema30817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30814","map30814",-168822562,null))], null);var input_checker30818 = schema.core.checker.call(null,input_schema30817);var output_checker30819 = schema.core.checker.call(null,output_schema30816);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function constructor30812(G__30820){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30820], null);var temp__4126__auto___30958 = input_checker30818.call(null,args__6035__auto___30957);if(cljs.core.truth_(temp__4126__auto___30958))
{var error__6036__auto___30959 = temp__4126__auto___30958;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30812","constructor30812",-440050179,null),cljs.core.pr_str.call(null,error__6036__auto___30959)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30959,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30957,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30817,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30814 = G__30820;while(true){
if(cljs.core.map_QMARK_.call(null,map30814))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30814)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30814,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30815 = plumbing.fnk.schema.safe_get.call(null,map30814,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30815,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30814,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30887 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30887 = (function (component_spec,component_filter_rq_chan,output_schema30816,owner,input_schema30817,data,G__30820,input_checker30818,filter_spec,output_checker30819,validate__6034__auto__,id,map30815,constructor30812,ufv__,map30814,meta30888){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema30816 = output_schema30816;
this.owner = owner;
this.input_schema30817 = input_schema30817;
this.data = data;
this.G__30820 = G__30820;
this.input_checker30818 = input_checker30818;
this.filter_spec = filter_spec;
this.output_checker30819 = output_checker30819;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30815 = map30815;
this.constructor30812 = constructor30812;
this.ufv__ = ufv__;
this.map30814 = map30814;
this.meta30888 = meta30888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30887.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30887.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30887";
clustermap.components.filters.checkboxes_filter.t30887.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30887");
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
clustermap.components.filters.checkboxes_filter.t30887.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30887.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
clustermap.components.filters.checkboxes_filter.t30887.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30887.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
clustermap.components.filters.checkboxes_filter.t30887.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30887.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (state_30927){var state_val_30928 = (state_30927[(1)]);if((state_val_30928 === (7)))
{var inst_30918 = (state_30927[(2)]);var state_30927__$1 = state_30927;if(cljs.core.truth_(inst_30918))
{var statearr_30929_30960 = state_30927__$1;(statearr_30929_30960[(1)] = (11));
} else
{var statearr_30930_30961 = state_30927__$1;(statearr_30930_30961[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (1)))
{var state_30927__$1 = state_30927;var statearr_30931_30962 = state_30927__$1;(statearr_30931_30962[(2)] = null);
(statearr_30931_30962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (4)))
{var inst_30892 = (state_30927[(7)]);var inst_30892__$1 = (state_30927[(2)]);var state_30927__$1 = (function (){var statearr_30932 = state_30927;(statearr_30932[(7)] = inst_30892__$1);
return statearr_30932;
})();if(cljs.core.truth_(inst_30892__$1))
{var statearr_30933_30963 = state_30927__$1;(statearr_30933_30963[(1)] = (5));
} else
{var statearr_30934_30964 = state_30927__$1;(statearr_30934_30964[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (13)))
{var inst_30923 = (state_30927[(2)]);var state_30927__$1 = state_30927;var statearr_30935_30965 = state_30927__$1;(statearr_30935_30965[(2)] = inst_30923);
(statearr_30935_30965[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (6)))
{var state_30927__$1 = state_30927;var statearr_30936_30966 = state_30927__$1;(statearr_30936_30966[(2)] = null);
(statearr_30936_30966[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (3)))
{var inst_30925 = (state_30927[(2)]);var state_30927__$1 = state_30927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30927__$1,inst_30925);
} else
{if((state_val_30928 === (12)))
{var state_30927__$1 = state_30927;var statearr_30937_30967 = state_30927__$1;(statearr_30937_30967[(2)] = null);
(statearr_30937_30967[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (2)))
{var state_30927__$1 = state_30927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30927__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30928 === (11)))
{var state_30927__$1 = state_30927;var statearr_30938_30968 = state_30927__$1;(statearr_30938_30968[(2)] = null);
(statearr_30938_30968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (9)))
{var inst_30898 = (state_30927[(8)]);var state_30927__$1 = state_30927;var statearr_30939_30969 = state_30927__$1;(statearr_30939_30969[(2)] = inst_30898);
(statearr_30939_30969[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (5)))
{var inst_30898 = (state_30927[(8)]);var inst_30892 = (state_30927[(7)]);var inst_30895 = cljs.core.nth.call(null,inst_30892,(0),null);var inst_30896 = cljs.core.nth.call(null,inst_30892,(1),null);var inst_30898__$1 = om.core.get_props.call(null,self__.owner);var inst_30899 = cljs.core.seq_QMARK_.call(null,inst_30898__$1);var state_30927__$1 = (function (){var statearr_30940 = state_30927;(statearr_30940[(9)] = inst_30895);
(statearr_30940[(8)] = inst_30898__$1);
(statearr_30940[(10)] = inst_30896);
return statearr_30940;
})();if(inst_30899)
{var statearr_30941_30970 = state_30927__$1;(statearr_30941_30970[(1)] = (8));
} else
{var statearr_30942_30971 = state_30927__$1;(statearr_30942_30971[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (10)))
{var inst_30896 = (state_30927[(10)]);var inst_30904 = (state_30927[(2)]);var inst_30905 = cljs.core.get.call(null,inst_30904,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30906 = cljs.core.get.call(null,inst_30904,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30907 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30908 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30896];var inst_30909 = (new cljs.core.PersistentVector(null,3,(5),inst_30907,inst_30908,null));var inst_30910 = cljs.core.clj__GT_js.call(null,inst_30909);var inst_30911 = console.log(inst_30910);var inst_30912 = cljs.core.deref.call(null,inst_30906);var inst_30913 = cljs.core.deref.call(null,inst_30905);var inst_30914 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30912,inst_30913,inst_30896);var inst_30915 = om.core.update_BANG_.call(null,inst_30906,inst_30914);var state_30927__$1 = (function (){var statearr_30943 = state_30927;(statearr_30943[(11)] = inst_30915);
(statearr_30943[(12)] = inst_30911);
return statearr_30943;
})();var statearr_30944_30972 = state_30927__$1;(statearr_30944_30972[(2)] = true);
(statearr_30944_30972[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30928 === (8)))
{var inst_30898 = (state_30927[(8)]);var inst_30901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30898);var state_30927__$1 = state_30927;var statearr_30945_30973 = state_30927__$1;(statearr_30945_30973[(2)] = inst_30901);
(statearr_30945_30973[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30949 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30949[(0)] = state_machine__9111__auto__);
(statearr_30949[(1)] = (1));
return statearr_30949;
});
var state_machine__9111__auto____1 = (function (state_30927){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30927);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30950){if((e30950 instanceof Object))
{var ex__9114__auto__ = e30950;var statearr_30951_30974 = state_30927;(statearr_30951_30974[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30927);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30975 = state_30927;
state_30927 = G__30975;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30927){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
})();var state__9127__auto__ = (function (){var statearr_30952 = f__9126__auto__.call(null);(statearr_30952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
clustermap.components.filters.checkboxes_filter.t30887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (_30889){var self__ = this;
var _30889__$1 = this;return self__.meta30888;
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
clustermap.components.filters.checkboxes_filter.t30887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function (_30889,meta30888__$1){var self__ = this;
var _30889__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30887(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema30816,self__.owner,self__.input_schema30817,self__.data,self__.G__30820,self__.input_checker30818,self__.filter_spec,self__.output_checker30819,self__.validate__6034__auto__,self__.id,self__.map30815,self__.constructor30812,self__.ufv__,self__.map30814,meta30888__$1));
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
clustermap.components.filters.checkboxes_filter.__GT_t30887 = ((function (owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819){
return (function __GT_t30887(component_spec__$1,component_filter_rq_chan__$1,output_schema30816__$1,owner__$1,input_schema30817__$1,data__$1,G__30820__$1,input_checker30818__$1,filter_spec__$1,output_checker30819__$1,validate__6034__auto____$1,id__$1,map30815__$1,constructor30812__$1,ufv____$1,map30814__$1,meta30888){return (new clustermap.components.filters.checkboxes_filter.t30887(component_spec__$1,component_filter_rq_chan__$1,output_schema30816__$1,owner__$1,input_schema30817__$1,data__$1,G__30820__$1,input_checker30818__$1,filter_spec__$1,output_checker30819__$1,validate__6034__auto____$1,id__$1,map30815__$1,constructor30812__$1,ufv____$1,map30814__$1,meta30888));
});})(owner,component_filter_rq_chan,map30815,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30887(component_spec,component_filter_rq_chan,output_schema30816,owner,input_schema30817,data,G__30820,input_checker30818,filter_spec,output_checker30819,validate__6034__auto__,id,map30815,constructor30812,ufv__,map30814,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30976 = output_checker30819.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30976))
{var error__6036__auto___30977 = temp__4126__auto___30976;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30812","constructor30812",-440050179,null),cljs.core.pr_str.call(null,error__6036__auto___30977)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30977,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30816,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30816,input_schema30817,input_checker30818,output_checker30819))
,schema.core.make_fn_schema.call(null,output_schema30816,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30817], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30956){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30811,p__30953){var vec__30955 = p__30953;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30955,(0),null);return component_fnk__7881__auto___30956.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30811,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30811,var_args){
var p__30953 = null;if (arguments.length > 2) {
  p__30953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30811,p__30953);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30978){
var data__7882__auto__ = cljs.core.first(arglist__30978);
arglist__30978 = cljs.core.next(arglist__30978);
var owner30811 = cljs.core.first(arglist__30978);
var p__30953 = cljs.core.rest(arglist__30978);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30811,p__30953);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30956))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30813){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30813);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30813){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
