// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.tag_filter');
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
clustermap.components.filters.tag_filter.get_current_value = (function get_current_value(components,id){var or__3639__auto__ = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
});
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30988_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30988_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30989,value){var map__30991 = p__30989;var map__30991__$1 = ((cljs.core.seq_QMARK_.call(null,map__30991))?cljs.core.apply.call(null,cljs.core.hash_map,map__30991):map__30991);var component_spec = map__30991__$1;var tags = cljs.core.get.call(null,map__30991__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30991__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30992,value){var map__30994 = p__30992;var map__30994__$1 = ((cljs.core.seq_QMARK_.call(null,map__30994))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);var component_spec = map__30994__$1;var tags = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(tag_spec));
} else
{return and__3627__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tag_spec)));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30995,value){var map__30997 = p__30995;var map__30997__$1 = ((cljs.core.seq_QMARK_.call(null,map__30997))?cljs.core.apply.call(null,cljs.core.hash_map,map__30997):map__30997);var component_spec = map__30997__$1;var tags = cljs.core.get.call(null,map__30997__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30997__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30998_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30998_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30999_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30999_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31001 = schema.core.Any;var input_schema31002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31000","map31000",1024158474,null))], null);var input_checker31003 = schema.core.checker.call(null,input_schema31002);var output_checker31004 = schema.core.checker.call(null,output_schema31001);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004){
return (function render_STAR_(G__31005){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31005], null);var temp__4126__auto___31023 = input_checker31003.call(null,args__6035__auto___31022);if(cljs.core.truth_(temp__4126__auto___31023))
{var error__6036__auto___31024 = temp__4126__auto___31023;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31024)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31024,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31022,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31002,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31000 = G__31005;while(true){
if(cljs.core.map_QMARK_.call(null,map31000))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31000)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map31000,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map31000,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004){
return (function iter__31014(s__31015){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004){
return (function (){var s__31015__$1 = s__31015;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31015__$1);if(temp__4126__auto__)
{var s__31015__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31015__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31015__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31017 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31016 = (0);while(true){
if((i__31016 < size__4376__auto__))
{var map__31020 = cljs.core._nth.call(null,c__4375__auto__,i__31016);var map__31020__$1 = ((cljs.core.seq_QMARK_.call(null,map__31020))?cljs.core.apply.call(null,cljs.core.hash_map,map__31020):map__31020);var label__$1 = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31020__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31017,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31025 = (i__31016 + (1));
i__31016 = G__31025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31017),iter__31014.call(null,cljs.core.chunk_rest.call(null,s__31015__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31017),null);
}
} else
{var map__31021 = cljs.core.first.call(null,s__31015__$2);var map__31021__$1 = ((cljs.core.seq_QMARK_.call(null,map__31021))?cljs.core.apply.call(null,cljs.core.hash_map,map__31021):map__31021);var label__$1 = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31014.call(null,cljs.core.rest.call(null,s__31015__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31026 = output_checker31004.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31026))
{var error__6036__auto___31027 = temp__4126__auto___31026;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31027)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31027,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31001,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004))
,schema.core.make_fn_schema.call(null,output_schema31001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31002], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31173 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31033 = schema.core.Any;var input_schema31034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31031","map31031",1539472435,null))], null);var input_checker31035 = schema.core.checker.call(null,input_schema31034);var output_checker31036 = schema.core.checker.call(null,output_schema31033);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function constructor31029(G__31037){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31037], null);var temp__4126__auto___31175 = input_checker31035.call(null,args__6035__auto___31174);if(cljs.core.truth_(temp__4126__auto___31175))
{var error__6036__auto___31176 = temp__4126__auto___31175;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31029","constructor31029",1261976861,null),cljs.core.pr_str.call(null,error__6036__auto___31176)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31176,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31174,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31034,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31031 = G__31037;while(true){
if(cljs.core.map_QMARK_.call(null,map31031))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31031)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31031,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31032 = plumbing.fnk.schema.safe_get.call(null,map31031,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31032,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31031,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31104 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31104 = (function (component_spec,component_filter_rq_chan,owner,data,G__31037,output_schema31033,filter_spec,map31031,input_checker31035,map31032,validate__6034__auto__,input_schema31034,id,output_checker31036,constructor31029,ufv__,meta31105){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.G__31037 = G__31037;
this.output_schema31033 = output_schema31033;
this.filter_spec = filter_spec;
this.map31031 = map31031;
this.input_checker31035 = input_checker31035;
this.map31032 = map31032;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema31034 = input_schema31034;
this.id = id;
this.output_checker31036 = output_checker31036;
this.constructor31029 = constructor31029;
this.ufv__ = ufv__;
this.meta31105 = meta31105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31104.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31104.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31104";
clustermap.components.filters.tag_filter.t31104.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31104");
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.tag_filter.t31104.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31104.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.tag_filter.t31104.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31104.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.tag_filter.t31104.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31104.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (state_31144){var state_val_31145 = (state_31144[(1)]);if((state_val_31145 === (7)))
{var inst_31135 = (state_31144[(2)]);var state_31144__$1 = state_31144;if(cljs.core.truth_(inst_31135))
{var statearr_31146_31177 = state_31144__$1;(statearr_31146_31177[(1)] = (11));
} else
{var statearr_31147_31178 = state_31144__$1;(statearr_31147_31178[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (1)))
{var state_31144__$1 = state_31144;var statearr_31148_31179 = state_31144__$1;(statearr_31148_31179[(2)] = null);
(statearr_31148_31179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (4)))
{var inst_31109 = (state_31144[(7)]);var inst_31109__$1 = (state_31144[(2)]);var state_31144__$1 = (function (){var statearr_31149 = state_31144;(statearr_31149[(7)] = inst_31109__$1);
return statearr_31149;
})();if(cljs.core.truth_(inst_31109__$1))
{var statearr_31150_31180 = state_31144__$1;(statearr_31150_31180[(1)] = (5));
} else
{var statearr_31151_31181 = state_31144__$1;(statearr_31151_31181[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (13)))
{var inst_31140 = (state_31144[(2)]);var state_31144__$1 = state_31144;var statearr_31152_31182 = state_31144__$1;(statearr_31152_31182[(2)] = inst_31140);
(statearr_31152_31182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (6)))
{var state_31144__$1 = state_31144;var statearr_31153_31183 = state_31144__$1;(statearr_31153_31183[(2)] = null);
(statearr_31153_31183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (3)))
{var inst_31142 = (state_31144[(2)]);var state_31144__$1 = state_31144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31144__$1,inst_31142);
} else
{if((state_val_31145 === (12)))
{var state_31144__$1 = state_31144;var statearr_31154_31184 = state_31144__$1;(statearr_31154_31184[(2)] = null);
(statearr_31154_31184[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (2)))
{var state_31144__$1 = state_31144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31144__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31145 === (11)))
{var state_31144__$1 = state_31144;var statearr_31155_31185 = state_31144__$1;(statearr_31155_31185[(2)] = null);
(statearr_31155_31185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (9)))
{var inst_31115 = (state_31144[(8)]);var state_31144__$1 = state_31144;var statearr_31156_31186 = state_31144__$1;(statearr_31156_31186[(2)] = inst_31115);
(statearr_31156_31186[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (5)))
{var inst_31115 = (state_31144[(8)]);var inst_31109 = (state_31144[(7)]);var inst_31112 = cljs.core.nth.call(null,inst_31109,(0),null);var inst_31113 = cljs.core.nth.call(null,inst_31109,(1),null);var inst_31115__$1 = om.core.get_props.call(null,self__.owner);var inst_31116 = cljs.core.seq_QMARK_.call(null,inst_31115__$1);var state_31144__$1 = (function (){var statearr_31157 = state_31144;(statearr_31157[(8)] = inst_31115__$1);
(statearr_31157[(9)] = inst_31112);
(statearr_31157[(10)] = inst_31113);
return statearr_31157;
})();if(inst_31116)
{var statearr_31158_31187 = state_31144__$1;(statearr_31158_31187[(1)] = (8));
} else
{var statearr_31159_31188 = state_31144__$1;(statearr_31159_31188[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (10)))
{var inst_31113 = (state_31144[(10)]);var inst_31121 = (state_31144[(2)]);var inst_31122 = cljs.core.get.call(null,inst_31121,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31123 = cljs.core.get.call(null,inst_31121,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31124 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31125 = ["TAG-FILTER-RQ",self__.id,inst_31113];var inst_31126 = (new cljs.core.PersistentVector(null,3,(5),inst_31124,inst_31125,null));var inst_31127 = cljs.core.clj__GT_js.call(null,inst_31126);var inst_31128 = console.log(inst_31127);var inst_31129 = cljs.core.deref.call(null,inst_31122);var inst_31130 = cljs.core.deref.call(null,inst_31123);var inst_31131 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31129,inst_31130,inst_31113);var inst_31132 = om.core.update_BANG_.call(null,inst_31122,inst_31131);var state_31144__$1 = (function (){var statearr_31160 = state_31144;(statearr_31160[(11)] = inst_31128);
(statearr_31160[(12)] = inst_31132);
return statearr_31160;
})();var statearr_31161_31189 = state_31144__$1;(statearr_31161_31189[(2)] = true);
(statearr_31161_31189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31145 === (8)))
{var inst_31115 = (state_31144[(8)]);var inst_31118 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31115);var state_31144__$1 = state_31144;var statearr_31162_31190 = state_31144__$1;(statearr_31162_31190[(2)] = inst_31118);
(statearr_31162_31190[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31166 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31166[(0)] = state_machine__9111__auto__);
(statearr_31166[(1)] = (1));
return statearr_31166;
});
var state_machine__9111__auto____1 = (function (state_31144){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31144);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31167){if((e31167 instanceof Object))
{var ex__9114__auto__ = e31167;var statearr_31168_31191 = state_31144;(statearr_31168_31191[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31167;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31192 = state_31144;
state_31144 = G__31192;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31144){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
})();var state__9127__auto__ = (function (){var statearr_31169 = f__9126__auto__.call(null);(statearr_31169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.tag_filter.t31104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_31106){var self__ = this;
var _31106__$1 = this;return self__.meta31105;
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.tag_filter.t31104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_31106,meta31105__$1){var self__ = this;
var _31106__$1 = this;return (new clustermap.components.filters.tag_filter.t31104(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.G__31037,self__.output_schema31033,self__.filter_spec,self__.map31031,self__.input_checker31035,self__.map31032,self__.validate__6034__auto__,self__.input_schema31034,self__.id,self__.output_checker31036,self__.constructor31029,self__.ufv__,meta31105__$1));
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.tag_filter.__GT_t31104 = ((function (owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function __GT_t31104(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__31037__$1,output_schema31033__$1,filter_spec__$1,map31031__$1,input_checker31035__$1,map31032__$1,validate__6034__auto____$1,input_schema31034__$1,id__$1,output_checker31036__$1,constructor31029__$1,ufv____$1,meta31105){return (new clustermap.components.filters.tag_filter.t31104(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__31037__$1,output_schema31033__$1,filter_spec__$1,map31031__$1,input_checker31035__$1,map31032__$1,validate__6034__auto____$1,input_schema31034__$1,id__$1,output_checker31036__$1,constructor31029__$1,ufv____$1,meta31105));
});})(owner,component_filter_rq_chan,map31032,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
}
return (new clustermap.components.filters.tag_filter.t31104(component_spec,component_filter_rq_chan,owner,data,G__31037,output_schema31033,filter_spec,map31031,input_checker31035,map31032,validate__6034__auto__,input_schema31034,id,output_checker31036,constructor31029,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31193 = output_checker31036.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31193))
{var error__6036__auto___31194 = temp__4126__auto___31193;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31029","constructor31029",1261976861,null),cljs.core.pr_str.call(null,error__6036__auto___31194)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31194,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31033,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
,schema.core.make_fn_schema.call(null,output_schema31033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31034], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31173){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner31028,p__31170){var vec__31172 = p__31170;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31172,(0),null);return component_fnk__7881__auto___31173.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31028,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner31028,var_args){
var p__31170 = null;if (arguments.length > 2) {
  p__31170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner31028,p__31170);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31195){
var data__7882__auto__ = cljs.core.first(arglist__31195);
arglist__31195 = cljs.core.next(arglist__31195);
var owner31028 = cljs.core.first(arglist__31195);
var p__31170 = cljs.core.rest(arglist__31195);
return tag_filter_component__delegate(data__7882__auto__,owner31028,p__31170);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31173))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m31030){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m31030);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m31030){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m31030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
