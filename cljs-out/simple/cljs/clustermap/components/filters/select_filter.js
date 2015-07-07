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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31367(s__31368){return (new cljs.core.LazySeq(null,(function (){var s__31368__$1 = s__31368;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31368__$1);if(temp__4126__auto__)
{var s__31368__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31368__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31368__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31370 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31369 = (0);while(true){
if((i__31369 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31369);cljs.core.chunk_append.call(null,b__31370,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31371 = (i__31369 + (1));
i__31369 = G__31371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31370),iter__31367.call(null,cljs.core.chunk_rest.call(null,s__31368__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31370),null);
}
} else
{var o = cljs.core.first.call(null,s__31368__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31367.call(null,cljs.core.rest.call(null,s__31368__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31375 = schema.core.Any;var input_schema31376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31372","map31372",858323028,null))], null);var input_checker31377 = schema.core.checker.call(null,input_schema31376);var output_checker31378 = schema.core.checker.call(null,output_schema31375);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31375,input_schema31376,input_checker31377,output_checker31378){
return (function get_option_value(G__31379){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31379], null);var temp__4126__auto___31381 = input_checker31377.call(null,args__6035__auto___31380);if(cljs.core.truth_(temp__4126__auto___31381))
{var error__6036__auto___31382 = temp__4126__auto___31381;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31382)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31382,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31380,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31376,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31372 = G__31379;while(true){
if(cljs.core.map_QMARK_.call(null,map31372))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31372)));
}
var map31374 = plumbing.fnk.schema.safe_get.call(null,map31372,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31374,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31374,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31374,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31373 = plumbing.fnk.schema.safe_get.call(null,map31372,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31373,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31373,options,label,id,map31374,validate__6034__auto__,ufv__,output_schema31375,input_schema31376,input_checker31377,output_checker31378){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31373,options,label,id,map31374,validate__6034__auto__,ufv__,output_schema31375,input_schema31376,input_checker31377,output_checker31378))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31383 = output_checker31378.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31383))
{var error__6036__auto___31384 = temp__4126__auto___31383;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31384)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31384,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31375,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31375,input_schema31376,input_checker31377,output_checker31378))
,schema.core.make_fn_schema.call(null,output_schema31375,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31376], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31386,value){var map__31388 = p__31386;var map__31388__$1 = ((cljs.core.seq_QMARK_.call(null,map__31388))?cljs.core.apply.call(null,cljs.core.hash_map,map__31388):map__31388);var component_spec = map__31388__$1;var options = cljs.core.get.call(null,map__31388__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31388__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31388,map__31388__$1,component_spec,options,label){
return (function (p1__31385_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31385_SHARP_));
});})(map__31388,map__31388__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31389,value){var map__31391 = p__31389;var map__31391__$1 = ((cljs.core.seq_QMARK_.call(null,map__31391))?cljs.core.apply.call(null,cljs.core.hash_map,map__31391):map__31391);var component_spec = map__31391__$1;var options = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31392_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31392_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31393_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31393_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31394 = schema.core.Any;var input_schema31395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31396 = schema.core.checker.call(null,input_schema31395);var output_checker31397 = schema.core.checker.call(null,output_schema31394);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397){
return (function render_STAR_(G__31398){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31398], null);var temp__4126__auto___31416 = input_checker31396.call(null,args__6035__auto___31415);if(cljs.core.truth_(temp__4126__auto___31416))
{var error__6036__auto___31417 = temp__4126__auto___31416;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31417)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31417,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31415,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31395,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31398;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397){
return (function iter__31407(s__31408){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397){
return (function (){var s__31408__$1 = s__31408;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31408__$1);if(temp__4126__auto__)
{var s__31408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31408__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31408__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31410 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31409 = (0);while(true){
if((i__31409 < size__4376__auto__))
{var map__31413 = cljs.core._nth.call(null,c__4375__auto__,i__31409);var map__31413__$1 = ((cljs.core.seq_QMARK_.call(null,map__31413))?cljs.core.apply.call(null,cljs.core.hash_map,map__31413):map__31413);var option = map__31413__$1;var label__$1 = cljs.core.get.call(null,map__31413__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31413__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31410,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31418 = (i__31409 + (1));
i__31409 = G__31418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31410),iter__31407.call(null,cljs.core.chunk_rest.call(null,s__31408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31410),null);
}
} else
{var map__31414 = cljs.core.first.call(null,s__31408__$2);var map__31414__$1 = ((cljs.core.seq_QMARK_.call(null,map__31414))?cljs.core.apply.call(null,cljs.core.hash_map,map__31414):map__31414);var option = map__31414__$1;var label__$1 = cljs.core.get.call(null,map__31414__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31414__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31407.call(null,cljs.core.rest.call(null,s__31408__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31419 = output_checker31397.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31419))
{var error__6036__auto___31420 = temp__4126__auto___31419;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31420)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31420,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31394,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31394,input_schema31395,input_checker31396,output_checker31397))
,schema.core.make_fn_schema.call(null,output_schema31394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31395], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31566 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31426 = schema.core.Any;var input_schema31427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31424","map31424",-1757097773,null))], null);var input_checker31428 = schema.core.checker.call(null,input_schema31427);var output_checker31429 = schema.core.checker.call(null,output_schema31426);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function constructor31422(G__31430){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31430], null);var temp__4126__auto___31568 = input_checker31428.call(null,args__6035__auto___31567);if(cljs.core.truth_(temp__4126__auto___31568))
{var error__6036__auto___31569 = temp__4126__auto___31568;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31422","constructor31422",-106876037,null),cljs.core.pr_str.call(null,error__6036__auto___31569)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31569,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31567,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31427,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31424 = G__31430;while(true){
if(cljs.core.map_QMARK_.call(null,map31424))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31424)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31424,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31425 = plumbing.fnk.schema.safe_get.call(null,map31424,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31425,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31424,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31497 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31497 = (function (component_spec,component_filter_rq_chan,map31425,owner,output_checker31429,data,input_checker31428,filter_spec,input_schema31427,map31424,output_schema31426,G__31430,validate__6034__auto__,id,constructor31422,ufv__,meta31498){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map31425 = map31425;
this.owner = owner;
this.output_checker31429 = output_checker31429;
this.data = data;
this.input_checker31428 = input_checker31428;
this.filter_spec = filter_spec;
this.input_schema31427 = input_schema31427;
this.map31424 = map31424;
this.output_schema31426 = output_schema31426;
this.G__31430 = G__31430;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor31422 = constructor31422;
this.ufv__ = ufv__;
this.meta31498 = meta31498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31497.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31497.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31497";
clustermap.components.filters.select_filter.t31497.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31497");
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
clustermap.components.filters.select_filter.t31497.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31497.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
clustermap.components.filters.select_filter.t31497.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31497.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
clustermap.components.filters.select_filter.t31497.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31497.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (state_31537){var state_val_31538 = (state_31537[(1)]);if((state_val_31538 === (7)))
{var inst_31528 = (state_31537[(2)]);var state_31537__$1 = state_31537;if(cljs.core.truth_(inst_31528))
{var statearr_31539_31570 = state_31537__$1;(statearr_31539_31570[(1)] = (11));
} else
{var statearr_31540_31571 = state_31537__$1;(statearr_31540_31571[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (1)))
{var state_31537__$1 = state_31537;var statearr_31541_31572 = state_31537__$1;(statearr_31541_31572[(2)] = null);
(statearr_31541_31572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (4)))
{var inst_31502 = (state_31537[(7)]);var inst_31502__$1 = (state_31537[(2)]);var state_31537__$1 = (function (){var statearr_31542 = state_31537;(statearr_31542[(7)] = inst_31502__$1);
return statearr_31542;
})();if(cljs.core.truth_(inst_31502__$1))
{var statearr_31543_31573 = state_31537__$1;(statearr_31543_31573[(1)] = (5));
} else
{var statearr_31544_31574 = state_31537__$1;(statearr_31544_31574[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (13)))
{var inst_31533 = (state_31537[(2)]);var state_31537__$1 = state_31537;var statearr_31545_31575 = state_31537__$1;(statearr_31545_31575[(2)] = inst_31533);
(statearr_31545_31575[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (6)))
{var state_31537__$1 = state_31537;var statearr_31546_31576 = state_31537__$1;(statearr_31546_31576[(2)] = null);
(statearr_31546_31576[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (3)))
{var inst_31535 = (state_31537[(2)]);var state_31537__$1 = state_31537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31537__$1,inst_31535);
} else
{if((state_val_31538 === (12)))
{var state_31537__$1 = state_31537;var statearr_31547_31577 = state_31537__$1;(statearr_31547_31577[(2)] = null);
(statearr_31547_31577[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (2)))
{var state_31537__$1 = state_31537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31537__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31538 === (11)))
{var state_31537__$1 = state_31537;var statearr_31548_31578 = state_31537__$1;(statearr_31548_31578[(2)] = null);
(statearr_31548_31578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (9)))
{var inst_31508 = (state_31537[(8)]);var state_31537__$1 = state_31537;var statearr_31549_31579 = state_31537__$1;(statearr_31549_31579[(2)] = inst_31508);
(statearr_31549_31579[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (5)))
{var inst_31508 = (state_31537[(8)]);var inst_31502 = (state_31537[(7)]);var inst_31505 = cljs.core.nth.call(null,inst_31502,(0),null);var inst_31506 = cljs.core.nth.call(null,inst_31502,(1),null);var inst_31508__$1 = om.core.get_props.call(null,self__.owner);var inst_31509 = cljs.core.seq_QMARK_.call(null,inst_31508__$1);var state_31537__$1 = (function (){var statearr_31550 = state_31537;(statearr_31550[(8)] = inst_31508__$1);
(statearr_31550[(9)] = inst_31505);
(statearr_31550[(10)] = inst_31506);
return statearr_31550;
})();if(inst_31509)
{var statearr_31551_31580 = state_31537__$1;(statearr_31551_31580[(1)] = (8));
} else
{var statearr_31552_31581 = state_31537__$1;(statearr_31552_31581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (10)))
{var inst_31506 = (state_31537[(10)]);var inst_31514 = (state_31537[(2)]);var inst_31515 = cljs.core.get.call(null,inst_31514,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31516 = cljs.core.get.call(null,inst_31514,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31517 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31518 = ["SELECT-FILTER-RQ",self__.id,inst_31506];var inst_31519 = (new cljs.core.PersistentVector(null,3,(5),inst_31517,inst_31518,null));var inst_31520 = cljs.core.clj__GT_js.call(null,inst_31519);var inst_31521 = console.log(inst_31520);var inst_31522 = cljs.core.deref.call(null,inst_31515);var inst_31523 = cljs.core.deref.call(null,inst_31516);var inst_31524 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31522,inst_31523,inst_31506);var inst_31525 = om.core.update_BANG_.call(null,inst_31515,inst_31524);var state_31537__$1 = (function (){var statearr_31553 = state_31537;(statearr_31553[(11)] = inst_31525);
(statearr_31553[(12)] = inst_31521);
return statearr_31553;
})();var statearr_31554_31582 = state_31537__$1;(statearr_31554_31582[(2)] = true);
(statearr_31554_31582[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31538 === (8)))
{var inst_31508 = (state_31537[(8)]);var inst_31511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31508);var state_31537__$1 = state_31537;var statearr_31555_31583 = state_31537__$1;(statearr_31555_31583[(2)] = inst_31511);
(statearr_31555_31583[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31559 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31559[(0)] = state_machine__9111__auto__);
(statearr_31559[(1)] = (1));
return statearr_31559;
});
var state_machine__9111__auto____1 = (function (state_31537){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31537);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31560){if((e31560 instanceof Object))
{var ex__9114__auto__ = e31560;var statearr_31561_31584 = state_31537;(statearr_31561_31584[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31585 = state_31537;
state_31537 = G__31585;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31537){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
})();var state__9127__auto__ = (function (){var statearr_31562 = f__9126__auto__.call(null);(statearr_31562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
clustermap.components.filters.select_filter.t31497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (_31499){var self__ = this;
var _31499__$1 = this;return self__.meta31498;
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
clustermap.components.filters.select_filter.t31497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function (_31499,meta31498__$1){var self__ = this;
var _31499__$1 = this;return (new clustermap.components.filters.select_filter.t31497(self__.component_spec,self__.component_filter_rq_chan,self__.map31425,self__.owner,self__.output_checker31429,self__.data,self__.input_checker31428,self__.filter_spec,self__.input_schema31427,self__.map31424,self__.output_schema31426,self__.G__31430,self__.validate__6034__auto__,self__.id,self__.constructor31422,self__.ufv__,meta31498__$1));
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
clustermap.components.filters.select_filter.__GT_t31497 = ((function (owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429){
return (function __GT_t31497(component_spec__$1,component_filter_rq_chan__$1,map31425__$1,owner__$1,output_checker31429__$1,data__$1,input_checker31428__$1,filter_spec__$1,input_schema31427__$1,map31424__$1,output_schema31426__$1,G__31430__$1,validate__6034__auto____$1,id__$1,constructor31422__$1,ufv____$1,meta31498){return (new clustermap.components.filters.select_filter.t31497(component_spec__$1,component_filter_rq_chan__$1,map31425__$1,owner__$1,output_checker31429__$1,data__$1,input_checker31428__$1,filter_spec__$1,input_schema31427__$1,map31424__$1,output_schema31426__$1,G__31430__$1,validate__6034__auto____$1,id__$1,constructor31422__$1,ufv____$1,meta31498));
});})(owner,component_filter_rq_chan,map31425,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
;
}
return (new clustermap.components.filters.select_filter.t31497(component_spec,component_filter_rq_chan,map31425,owner,output_checker31429,data,input_checker31428,filter_spec,input_schema31427,map31424,output_schema31426,G__31430,validate__6034__auto__,id,constructor31422,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31586 = output_checker31429.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31586))
{var error__6036__auto___31587 = temp__4126__auto___31586;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31422","constructor31422",-106876037,null),cljs.core.pr_str.call(null,error__6036__auto___31587)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31587,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31426,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31426,input_schema31427,input_checker31428,output_checker31429))
,schema.core.make_fn_schema.call(null,output_schema31426,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31427], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31566){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31421,p__31563){var vec__31565 = p__31563;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31565,(0),null);return component_fnk__7881__auto___31566.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31421,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31421,var_args){
var p__31563 = null;if (arguments.length > 2) {
  p__31563 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31421,p__31563);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31588){
var data__7882__auto__ = cljs.core.first(arglist__31588);
arglist__31588 = cljs.core.next(arglist__31588);
var owner31421 = cljs.core.first(arglist__31588);
var p__31563 = cljs.core.rest(arglist__31588);
return select_filter_component__delegate(data__7882__auto__,owner31421,p__31563);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31566))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31423){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31423);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31423){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
