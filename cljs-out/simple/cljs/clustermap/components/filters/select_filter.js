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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31333(s__31334){return (new cljs.core.LazySeq(null,(function (){var s__31334__$1 = s__31334;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31334__$1);if(temp__4126__auto__)
{var s__31334__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31334__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31334__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31336 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31335 = (0);while(true){
if((i__31335 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31335);cljs.core.chunk_append.call(null,b__31336,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31337 = (i__31335 + (1));
i__31335 = G__31337;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31336),iter__31333.call(null,cljs.core.chunk_rest.call(null,s__31334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31336),null);
}
} else
{var o = cljs.core.first.call(null,s__31334__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31333.call(null,cljs.core.rest.call(null,s__31334__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31341 = schema.core.Any;var input_schema31342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31338","map31338",1981038719,null))], null);var input_checker31343 = schema.core.checker.call(null,input_schema31342);var output_checker31344 = schema.core.checker.call(null,output_schema31341);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31341,input_schema31342,input_checker31343,output_checker31344){
return (function get_option_value(G__31345){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31345], null);var temp__4126__auto___31347 = input_checker31343.call(null,args__6035__auto___31346);if(cljs.core.truth_(temp__4126__auto___31347))
{var error__6036__auto___31348 = temp__4126__auto___31347;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31348,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31346,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31342,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31338 = G__31345;while(true){
if(cljs.core.map_QMARK_.call(null,map31338))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31338)));
}
var map31340 = plumbing.fnk.schema.safe_get.call(null,map31338,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31340,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31340,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31340,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31339 = plumbing.fnk.schema.safe_get.call(null,map31338,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31339,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31339,options,label,id,map31340,validate__6034__auto__,ufv__,output_schema31341,input_schema31342,input_checker31343,output_checker31344){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31339,options,label,id,map31340,validate__6034__auto__,ufv__,output_schema31341,input_schema31342,input_checker31343,output_checker31344))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31349 = output_checker31344.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31349))
{var error__6036__auto___31350 = temp__4126__auto___31349;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31350)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31350,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31341,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31341,input_schema31342,input_checker31343,output_checker31344))
,schema.core.make_fn_schema.call(null,output_schema31341,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31342], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31352,value){var map__31354 = p__31352;var map__31354__$1 = ((cljs.core.seq_QMARK_.call(null,map__31354))?cljs.core.apply.call(null,cljs.core.hash_map,map__31354):map__31354);var component_spec = map__31354__$1;var options = cljs.core.get.call(null,map__31354__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31354__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31354,map__31354__$1,component_spec,options,label){
return (function (p1__31351_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31351_SHARP_));
});})(map__31354,map__31354__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31355,value){var map__31357 = p__31355;var map__31357__$1 = ((cljs.core.seq_QMARK_.call(null,map__31357))?cljs.core.apply.call(null,cljs.core.hash_map,map__31357):map__31357);var component_spec = map__31357__$1;var options = cljs.core.get.call(null,map__31357__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31357__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31358_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31358_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31359_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31359_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31360 = schema.core.Any;var input_schema31361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31362 = schema.core.checker.call(null,input_schema31361);var output_checker31363 = schema.core.checker.call(null,output_schema31360);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363){
return (function render_STAR_(G__31364){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31364], null);var temp__4126__auto___31382 = input_checker31362.call(null,args__6035__auto___31381);if(cljs.core.truth_(temp__4126__auto___31382))
{var error__6036__auto___31383 = temp__4126__auto___31382;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31383)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31383,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31381,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31361,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31364;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363){
return (function iter__31373(s__31374){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363){
return (function (){var s__31374__$1 = s__31374;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31374__$1);if(temp__4126__auto__)
{var s__31374__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31374__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31374__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31376 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31375 = (0);while(true){
if((i__31375 < size__4376__auto__))
{var map__31379 = cljs.core._nth.call(null,c__4375__auto__,i__31375);var map__31379__$1 = ((cljs.core.seq_QMARK_.call(null,map__31379))?cljs.core.apply.call(null,cljs.core.hash_map,map__31379):map__31379);var option = map__31379__$1;var label__$1 = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31376,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31384 = (i__31375 + (1));
i__31375 = G__31384;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31376),iter__31373.call(null,cljs.core.chunk_rest.call(null,s__31374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31376),null);
}
} else
{var map__31380 = cljs.core.first.call(null,s__31374__$2);var map__31380__$1 = ((cljs.core.seq_QMARK_.call(null,map__31380))?cljs.core.apply.call(null,cljs.core.hash_map,map__31380):map__31380);var option = map__31380__$1;var label__$1 = cljs.core.get.call(null,map__31380__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31380__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31373.call(null,cljs.core.rest.call(null,s__31374__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31385 = output_checker31363.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31385))
{var error__6036__auto___31386 = temp__4126__auto___31385;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31386)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31386,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31360,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31360,input_schema31361,input_checker31362,output_checker31363))
,schema.core.make_fn_schema.call(null,output_schema31360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31361], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31532 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31392 = schema.core.Any;var input_schema31393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31390","map31390",-655379823,null))], null);var input_checker31394 = schema.core.checker.call(null,input_schema31393);var output_checker31395 = schema.core.checker.call(null,output_schema31392);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function constructor31388(G__31396){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31396], null);var temp__4126__auto___31534 = input_checker31394.call(null,args__6035__auto___31533);if(cljs.core.truth_(temp__4126__auto___31534))
{var error__6036__auto___31535 = temp__4126__auto___31534;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31388","constructor31388",703346871,null),cljs.core.pr_str.call(null,error__6036__auto___31535)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31535,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31533,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31393,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31390 = G__31396;while(true){
if(cljs.core.map_QMARK_.call(null,map31390))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31390)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31390,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31391 = plumbing.fnk.schema.safe_get.call(null,map31390,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31391,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31390,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31463 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31463 = (function (component_spec,component_filter_rq_chan,owner,data,G__31396,map31391,input_schema31393,filter_spec,map31390,output_checker31395,constructor31388,input_checker31394,output_schema31392,validate__6034__auto__,id,ufv__,meta31464){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.G__31396 = G__31396;
this.map31391 = map31391;
this.input_schema31393 = input_schema31393;
this.filter_spec = filter_spec;
this.map31390 = map31390;
this.output_checker31395 = output_checker31395;
this.constructor31388 = constructor31388;
this.input_checker31394 = input_checker31394;
this.output_schema31392 = output_schema31392;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta31464 = meta31464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31463.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31463.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31463";
clustermap.components.filters.select_filter.t31463.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31463");
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
clustermap.components.filters.select_filter.t31463.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31463.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
clustermap.components.filters.select_filter.t31463.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31463.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
clustermap.components.filters.select_filter.t31463.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31463.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (state_31503){var state_val_31504 = (state_31503[(1)]);if((state_val_31504 === (7)))
{var inst_31494 = (state_31503[(2)]);var state_31503__$1 = state_31503;if(cljs.core.truth_(inst_31494))
{var statearr_31505_31536 = state_31503__$1;(statearr_31505_31536[(1)] = (11));
} else
{var statearr_31506_31537 = state_31503__$1;(statearr_31506_31537[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (1)))
{var state_31503__$1 = state_31503;var statearr_31507_31538 = state_31503__$1;(statearr_31507_31538[(2)] = null);
(statearr_31507_31538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (4)))
{var inst_31468 = (state_31503[(7)]);var inst_31468__$1 = (state_31503[(2)]);var state_31503__$1 = (function (){var statearr_31508 = state_31503;(statearr_31508[(7)] = inst_31468__$1);
return statearr_31508;
})();if(cljs.core.truth_(inst_31468__$1))
{var statearr_31509_31539 = state_31503__$1;(statearr_31509_31539[(1)] = (5));
} else
{var statearr_31510_31540 = state_31503__$1;(statearr_31510_31540[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (13)))
{var inst_31499 = (state_31503[(2)]);var state_31503__$1 = state_31503;var statearr_31511_31541 = state_31503__$1;(statearr_31511_31541[(2)] = inst_31499);
(statearr_31511_31541[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (6)))
{var state_31503__$1 = state_31503;var statearr_31512_31542 = state_31503__$1;(statearr_31512_31542[(2)] = null);
(statearr_31512_31542[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (3)))
{var inst_31501 = (state_31503[(2)]);var state_31503__$1 = state_31503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31503__$1,inst_31501);
} else
{if((state_val_31504 === (12)))
{var state_31503__$1 = state_31503;var statearr_31513_31543 = state_31503__$1;(statearr_31513_31543[(2)] = null);
(statearr_31513_31543[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (2)))
{var state_31503__$1 = state_31503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31503__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31504 === (11)))
{var state_31503__$1 = state_31503;var statearr_31514_31544 = state_31503__$1;(statearr_31514_31544[(2)] = null);
(statearr_31514_31544[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (9)))
{var inst_31474 = (state_31503[(8)]);var state_31503__$1 = state_31503;var statearr_31515_31545 = state_31503__$1;(statearr_31515_31545[(2)] = inst_31474);
(statearr_31515_31545[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (5)))
{var inst_31474 = (state_31503[(8)]);var inst_31468 = (state_31503[(7)]);var inst_31471 = cljs.core.nth.call(null,inst_31468,(0),null);var inst_31472 = cljs.core.nth.call(null,inst_31468,(1),null);var inst_31474__$1 = om.core.get_props.call(null,self__.owner);var inst_31475 = cljs.core.seq_QMARK_.call(null,inst_31474__$1);var state_31503__$1 = (function (){var statearr_31516 = state_31503;(statearr_31516[(8)] = inst_31474__$1);
(statearr_31516[(9)] = inst_31472);
(statearr_31516[(10)] = inst_31471);
return statearr_31516;
})();if(inst_31475)
{var statearr_31517_31546 = state_31503__$1;(statearr_31517_31546[(1)] = (8));
} else
{var statearr_31518_31547 = state_31503__$1;(statearr_31518_31547[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (10)))
{var inst_31472 = (state_31503[(9)]);var inst_31480 = (state_31503[(2)]);var inst_31481 = cljs.core.get.call(null,inst_31480,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31482 = cljs.core.get.call(null,inst_31480,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31483 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31484 = ["SELECT-FILTER-RQ",self__.id,inst_31472];var inst_31485 = (new cljs.core.PersistentVector(null,3,(5),inst_31483,inst_31484,null));var inst_31486 = cljs.core.clj__GT_js.call(null,inst_31485);var inst_31487 = console.log(inst_31486);var inst_31488 = cljs.core.deref.call(null,inst_31481);var inst_31489 = cljs.core.deref.call(null,inst_31482);var inst_31490 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31488,inst_31489,inst_31472);var inst_31491 = om.core.update_BANG_.call(null,inst_31481,inst_31490);var state_31503__$1 = (function (){var statearr_31519 = state_31503;(statearr_31519[(11)] = inst_31491);
(statearr_31519[(12)] = inst_31487);
return statearr_31519;
})();var statearr_31520_31548 = state_31503__$1;(statearr_31520_31548[(2)] = true);
(statearr_31520_31548[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31504 === (8)))
{var inst_31474 = (state_31503[(8)]);var inst_31477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31474);var state_31503__$1 = state_31503;var statearr_31521_31549 = state_31503__$1;(statearr_31521_31549[(2)] = inst_31477);
(statearr_31521_31549[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31525 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31525[(0)] = state_machine__9111__auto__);
(statearr_31525[(1)] = (1));
return statearr_31525;
});
var state_machine__9111__auto____1 = (function (state_31503){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31503);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31526){if((e31526 instanceof Object))
{var ex__9114__auto__ = e31526;var statearr_31527_31550 = state_31503;(statearr_31527_31550[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31503);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31526;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31551 = state_31503;
state_31503 = G__31551;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31503){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
})();var state__9127__auto__ = (function (){var statearr_31528 = f__9126__auto__.call(null);(statearr_31528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
clustermap.components.filters.select_filter.t31463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (_31465){var self__ = this;
var _31465__$1 = this;return self__.meta31464;
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
clustermap.components.filters.select_filter.t31463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function (_31465,meta31464__$1){var self__ = this;
var _31465__$1 = this;return (new clustermap.components.filters.select_filter.t31463(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.G__31396,self__.map31391,self__.input_schema31393,self__.filter_spec,self__.map31390,self__.output_checker31395,self__.constructor31388,self__.input_checker31394,self__.output_schema31392,self__.validate__6034__auto__,self__.id,self__.ufv__,meta31464__$1));
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
clustermap.components.filters.select_filter.__GT_t31463 = ((function (owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395){
return (function __GT_t31463(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__31396__$1,map31391__$1,input_schema31393__$1,filter_spec__$1,map31390__$1,output_checker31395__$1,constructor31388__$1,input_checker31394__$1,output_schema31392__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta31464){return (new clustermap.components.filters.select_filter.t31463(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__31396__$1,map31391__$1,input_schema31393__$1,filter_spec__$1,map31390__$1,output_checker31395__$1,constructor31388__$1,input_checker31394__$1,output_schema31392__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta31464));
});})(owner,component_filter_rq_chan,map31391,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
;
}
return (new clustermap.components.filters.select_filter.t31463(component_spec,component_filter_rq_chan,owner,data,G__31396,map31391,input_schema31393,filter_spec,map31390,output_checker31395,constructor31388,input_checker31394,output_schema31392,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31552 = output_checker31395.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31552))
{var error__6036__auto___31553 = temp__4126__auto___31552;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31388","constructor31388",703346871,null),cljs.core.pr_str.call(null,error__6036__auto___31553)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31553,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31392,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31392,input_schema31393,input_checker31394,output_checker31395))
,schema.core.make_fn_schema.call(null,output_schema31392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31393], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31532){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31387,p__31529){var vec__31531 = p__31529;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31531,(0),null);return component_fnk__7881__auto___31532.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31387,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31387,var_args){
var p__31529 = null;if (arguments.length > 2) {
  p__31529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31387,p__31529);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31554){
var data__7882__auto__ = cljs.core.first(arglist__31554);
arglist__31554 = cljs.core.next(arglist__31554);
var owner31387 = cljs.core.first(arglist__31554);
var p__31529 = cljs.core.rest(arglist__31554);
return select_filter_component__delegate(data__7882__auto__,owner31387,p__31529);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31532))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31389){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31389);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31389){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
