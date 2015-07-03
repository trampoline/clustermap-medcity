// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.select_filter');
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
goog.require('clustermap.filters');
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31336(s__31337){return (new cljs.core.LazySeq(null,(function (){var s__31337__$1 = s__31337;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31337__$1);if(temp__4126__auto__)
{var s__31337__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31337__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31337__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31339 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31338 = (0);while(true){
if((i__31338 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31338);cljs.core.chunk_append.call(null,b__31339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31340 = (i__31338 + (1));
i__31338 = G__31340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31339),iter__31336.call(null,cljs.core.chunk_rest.call(null,s__31337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31339),null);
}
} else
{var o = cljs.core.first.call(null,s__31337__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31336.call(null,cljs.core.rest.call(null,s__31337__$2)));
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
* get the selected option-value by comparing the selected filter with the
* option filters
*/
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31344 = schema.core.Any;var input_schema31345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31341","map31341",443699142,null))], null);var input_checker31346 = schema.core.checker.call(null,input_schema31345);var output_checker31347 = schema.core.checker.call(null,output_schema31344);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31344,input_schema31345,input_checker31346,output_checker31347){
return (function get_option_value(G__31348){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31348], null);var temp__4126__auto___31350 = input_checker31346.call(null,args__6035__auto___31349);if(cljs.core.truth_(temp__4126__auto___31350))
{var error__6036__auto___31351 = temp__4126__auto___31350;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31351)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31351,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31349,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31345,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31341 = G__31348;while(true){
if(cljs.core.map_QMARK_.call(null,map31341))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31341)));
}
var map31343 = plumbing.fnk.schema.safe_get.call(null,map31341,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31343,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31343,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31343,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31342 = plumbing.fnk.schema.safe_get.call(null,map31341,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31342,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31342,options,label,id,map31343,validate__6034__auto__,ufv__,output_schema31344,input_schema31345,input_checker31346,output_checker31347){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31342,options,label,id,map31343,validate__6034__auto__,ufv__,output_schema31344,input_schema31345,input_checker31346,output_checker31347))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31352 = output_checker31347.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31352))
{var error__6036__auto___31353 = temp__4126__auto___31352;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31353)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31353,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31344,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31344,input_schema31345,input_checker31346,output_checker31347))
,schema.core.make_fn_schema.call(null,output_schema31344,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31345], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31355,value){var map__31357 = p__31355;var map__31357__$1 = ((cljs.core.seq_QMARK_.call(null,map__31357))?cljs.core.apply.call(null,cljs.core.hash_map,map__31357):map__31357);var component_spec = map__31357__$1;var options = cljs.core.get.call(null,map__31357__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31357__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31357,map__31357__$1,component_spec,options,label){
return (function (p1__31354_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31354_SHARP_));
});})(map__31357,map__31357__$1,component_spec,options,label))
,options));if(cljs.core.truth_((function (){var and__3627__auto__ = option_spec;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(option_spec));
} else
{return and__3627__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option_spec)));
} else
{return null;
}
});
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31358,value){var map__31360 = p__31358;var map__31360__$1 = ((cljs.core.seq_QMARK_.call(null,map__31360))?cljs.core.apply.call(null,cljs.core.hash_map,map__31360):map__31360);var component_spec = map__31360__$1;var options = cljs.core.get.call(null,map__31360__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31361_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31361_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31362_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31362_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31363 = schema.core.Any;var input_schema31364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31365 = schema.core.checker.call(null,input_schema31364);var output_checker31366 = schema.core.checker.call(null,output_schema31363);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366){
return (function render_STAR_(G__31367){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31367], null);var temp__4126__auto___31385 = input_checker31365.call(null,args__6035__auto___31384);if(cljs.core.truth_(temp__4126__auto___31385))
{var error__6036__auto___31386 = temp__4126__auto___31385;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31386)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31386,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31384,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31364,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31367;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366){
return (function iter__31376(s__31377){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366){
return (function (){var s__31377__$1 = s__31377;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31377__$1);if(temp__4126__auto__)
{var s__31377__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31377__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31377__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31379 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31378 = (0);while(true){
if((i__31378 < size__4376__auto__))
{var map__31382 = cljs.core._nth.call(null,c__4375__auto__,i__31378);var map__31382__$1 = ((cljs.core.seq_QMARK_.call(null,map__31382))?cljs.core.apply.call(null,cljs.core.hash_map,map__31382):map__31382);var option = map__31382__$1;var label__$1 = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31379,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31387 = (i__31378 + (1));
i__31378 = G__31387;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31379),iter__31376.call(null,cljs.core.chunk_rest.call(null,s__31377__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31379),null);
}
} else
{var map__31383 = cljs.core.first.call(null,s__31377__$2);var map__31383__$1 = ((cljs.core.seq_QMARK_.call(null,map__31383))?cljs.core.apply.call(null,cljs.core.hash_map,map__31383):map__31383);var option = map__31383__$1;var label__$1 = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31376.call(null,cljs.core.rest.call(null,s__31377__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31388 = output_checker31366.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31388))
{var error__6036__auto___31389 = temp__4126__auto___31388;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31389)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31389,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31363,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31363,input_schema31364,input_checker31365,output_checker31366))
,schema.core.make_fn_schema.call(null,output_schema31363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31364], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31535 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31395 = schema.core.Any;var input_schema31396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31393","map31393",2058839048,null))], null);var input_checker31397 = schema.core.checker.call(null,input_schema31396);var output_checker31398 = schema.core.checker.call(null,output_schema31395);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function constructor31391(G__31399){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31399], null);var temp__4126__auto___31537 = input_checker31397.call(null,args__6035__auto___31536);if(cljs.core.truth_(temp__4126__auto___31537))
{var error__6036__auto___31538 = temp__4126__auto___31537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31391","constructor31391",941815740,null),cljs.core.pr_str.call(null,error__6036__auto___31538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31538,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31536,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31396,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31393 = G__31399;while(true){
if(cljs.core.map_QMARK_.call(null,map31393))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31393)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31393,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31394 = plumbing.fnk.schema.safe_get.call(null,map31393,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31394,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31393,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31466 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31466 = (function (component_spec,component_filter_rq_chan,input_schema31396,owner,output_schema31395,data,map31394,map31393,output_checker31398,filter_spec,G__31399,input_checker31397,validate__6034__auto__,id,constructor31391,ufv__,meta31467){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema31396 = input_schema31396;
this.owner = owner;
this.output_schema31395 = output_schema31395;
this.data = data;
this.map31394 = map31394;
this.map31393 = map31393;
this.output_checker31398 = output_checker31398;
this.filter_spec = filter_spec;
this.G__31399 = G__31399;
this.input_checker31397 = input_checker31397;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor31391 = constructor31391;
this.ufv__ = ufv__;
this.meta31467 = meta31467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31466.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31466.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31466";
clustermap.components.filters.select_filter.t31466.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31466");
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
clustermap.components.filters.select_filter.t31466.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31466.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
clustermap.components.filters.select_filter.t31466.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31466.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
clustermap.components.filters.select_filter.t31466.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31466.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (state_31506){var state_val_31507 = (state_31506[(1)]);if((state_val_31507 === (7)))
{var inst_31497 = (state_31506[(2)]);var state_31506__$1 = state_31506;if(cljs.core.truth_(inst_31497))
{var statearr_31508_31539 = state_31506__$1;(statearr_31508_31539[(1)] = (11));
} else
{var statearr_31509_31540 = state_31506__$1;(statearr_31509_31540[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (1)))
{var state_31506__$1 = state_31506;var statearr_31510_31541 = state_31506__$1;(statearr_31510_31541[(2)] = null);
(statearr_31510_31541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (4)))
{var inst_31471 = (state_31506[(7)]);var inst_31471__$1 = (state_31506[(2)]);var state_31506__$1 = (function (){var statearr_31511 = state_31506;(statearr_31511[(7)] = inst_31471__$1);
return statearr_31511;
})();if(cljs.core.truth_(inst_31471__$1))
{var statearr_31512_31542 = state_31506__$1;(statearr_31512_31542[(1)] = (5));
} else
{var statearr_31513_31543 = state_31506__$1;(statearr_31513_31543[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (13)))
{var inst_31502 = (state_31506[(2)]);var state_31506__$1 = state_31506;var statearr_31514_31544 = state_31506__$1;(statearr_31514_31544[(2)] = inst_31502);
(statearr_31514_31544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (6)))
{var state_31506__$1 = state_31506;var statearr_31515_31545 = state_31506__$1;(statearr_31515_31545[(2)] = null);
(statearr_31515_31545[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (3)))
{var inst_31504 = (state_31506[(2)]);var state_31506__$1 = state_31506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31506__$1,inst_31504);
} else
{if((state_val_31507 === (12)))
{var state_31506__$1 = state_31506;var statearr_31516_31546 = state_31506__$1;(statearr_31516_31546[(2)] = null);
(statearr_31516_31546[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (2)))
{var state_31506__$1 = state_31506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31506__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31507 === (11)))
{var state_31506__$1 = state_31506;var statearr_31517_31547 = state_31506__$1;(statearr_31517_31547[(2)] = null);
(statearr_31517_31547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (9)))
{var inst_31477 = (state_31506[(8)]);var state_31506__$1 = state_31506;var statearr_31518_31548 = state_31506__$1;(statearr_31518_31548[(2)] = inst_31477);
(statearr_31518_31548[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (5)))
{var inst_31477 = (state_31506[(8)]);var inst_31471 = (state_31506[(7)]);var inst_31474 = cljs.core.nth.call(null,inst_31471,(0),null);var inst_31475 = cljs.core.nth.call(null,inst_31471,(1),null);var inst_31477__$1 = om.core.get_props.call(null,self__.owner);var inst_31478 = cljs.core.seq_QMARK_.call(null,inst_31477__$1);var state_31506__$1 = (function (){var statearr_31519 = state_31506;(statearr_31519[(9)] = inst_31474);
(statearr_31519[(10)] = inst_31475);
(statearr_31519[(8)] = inst_31477__$1);
return statearr_31519;
})();if(inst_31478)
{var statearr_31520_31549 = state_31506__$1;(statearr_31520_31549[(1)] = (8));
} else
{var statearr_31521_31550 = state_31506__$1;(statearr_31521_31550[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (10)))
{var inst_31475 = (state_31506[(10)]);var inst_31483 = (state_31506[(2)]);var inst_31484 = cljs.core.get.call(null,inst_31483,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31485 = cljs.core.get.call(null,inst_31483,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31486 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31487 = ["SELECT-FILTER-RQ",self__.id,inst_31475];var inst_31488 = (new cljs.core.PersistentVector(null,3,(5),inst_31486,inst_31487,null));var inst_31489 = cljs.core.clj__GT_js.call(null,inst_31488);var inst_31490 = console.log(inst_31489);var inst_31491 = cljs.core.deref.call(null,inst_31484);var inst_31492 = cljs.core.deref.call(null,inst_31485);var inst_31493 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31491,inst_31492,inst_31475);var inst_31494 = om.core.update_BANG_.call(null,inst_31484,inst_31493);var state_31506__$1 = (function (){var statearr_31522 = state_31506;(statearr_31522[(11)] = inst_31494);
(statearr_31522[(12)] = inst_31490);
return statearr_31522;
})();var statearr_31523_31551 = state_31506__$1;(statearr_31523_31551[(2)] = true);
(statearr_31523_31551[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31507 === (8)))
{var inst_31477 = (state_31506[(8)]);var inst_31480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31477);var state_31506__$1 = state_31506;var statearr_31524_31552 = state_31506__$1;(statearr_31524_31552[(2)] = inst_31480);
(statearr_31524_31552[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31528 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31528[(0)] = state_machine__9111__auto__);
(statearr_31528[(1)] = (1));
return statearr_31528;
});
var state_machine__9111__auto____1 = (function (state_31506){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31506);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31529){if((e31529 instanceof Object))
{var ex__9114__auto__ = e31529;var statearr_31530_31553 = state_31506;(statearr_31530_31553[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31506);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31554 = state_31506;
state_31506 = G__31554;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31506){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
})();var state__9127__auto__ = (function (){var statearr_31531 = f__9126__auto__.call(null);(statearr_31531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
clustermap.components.filters.select_filter.t31466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (_31468){var self__ = this;
var _31468__$1 = this;return self__.meta31467;
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
clustermap.components.filters.select_filter.t31466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function (_31468,meta31467__$1){var self__ = this;
var _31468__$1 = this;return (new clustermap.components.filters.select_filter.t31466(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema31396,self__.owner,self__.output_schema31395,self__.data,self__.map31394,self__.map31393,self__.output_checker31398,self__.filter_spec,self__.G__31399,self__.input_checker31397,self__.validate__6034__auto__,self__.id,self__.constructor31391,self__.ufv__,meta31467__$1));
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
clustermap.components.filters.select_filter.__GT_t31466 = ((function (owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398){
return (function __GT_t31466(component_spec__$1,component_filter_rq_chan__$1,input_schema31396__$1,owner__$1,output_schema31395__$1,data__$1,map31394__$1,map31393__$1,output_checker31398__$1,filter_spec__$1,G__31399__$1,input_checker31397__$1,validate__6034__auto____$1,id__$1,constructor31391__$1,ufv____$1,meta31467){return (new clustermap.components.filters.select_filter.t31466(component_spec__$1,component_filter_rq_chan__$1,input_schema31396__$1,owner__$1,output_schema31395__$1,data__$1,map31394__$1,map31393__$1,output_checker31398__$1,filter_spec__$1,G__31399__$1,input_checker31397__$1,validate__6034__auto____$1,id__$1,constructor31391__$1,ufv____$1,meta31467));
});})(owner,component_filter_rq_chan,map31394,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
;
}
return (new clustermap.components.filters.select_filter.t31466(component_spec,component_filter_rq_chan,input_schema31396,owner,output_schema31395,data,map31394,map31393,output_checker31398,filter_spec,G__31399,input_checker31397,validate__6034__auto__,id,constructor31391,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31555 = output_checker31398.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31555))
{var error__6036__auto___31556 = temp__4126__auto___31555;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31391","constructor31391",941815740,null),cljs.core.pr_str.call(null,error__6036__auto___31556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31556,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31395,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31395,input_schema31396,input_checker31397,output_checker31398))
,schema.core.make_fn_schema.call(null,output_schema31395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31396], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31535){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31390,p__31532){var vec__31534 = p__31532;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31534,(0),null);return component_fnk__7881__auto___31535.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31390,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31390,var_args){
var p__31532 = null;if (arguments.length > 2) {
  p__31532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31390,p__31532);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31557){
var data__7882__auto__ = cljs.core.first(arglist__31557);
arglist__31557 = cljs.core.next(arglist__31557);
var owner31390 = cljs.core.first(arglist__31557);
var p__31532 = cljs.core.rest(arglist__31557);
return select_filter_component__delegate(data__7882__auto__,owner31390,p__31532);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31535))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31392){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31392);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31392){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
