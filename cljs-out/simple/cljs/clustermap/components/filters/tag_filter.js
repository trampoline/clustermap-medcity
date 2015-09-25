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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30984_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30984_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30985,value){var map__30987 = p__30985;var map__30987__$1 = ((cljs.core.seq_QMARK_.call(null,map__30987))?cljs.core.apply.call(null,cljs.core.hash_map,map__30987):map__30987);var component_spec = map__30987__$1;var tags = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30988,value){var map__30990 = p__30988;var map__30990__$1 = ((cljs.core.seq_QMARK_.call(null,map__30990))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);var component_spec = map__30990__$1;var tags = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30991,value){var map__30993 = p__30991;var map__30993__$1 = ((cljs.core.seq_QMARK_.call(null,map__30993))?cljs.core.apply.call(null,cljs.core.hash_map,map__30993):map__30993);var component_spec = map__30993__$1;var tags = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30993__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30994_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30994_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30995_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30995_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30997 = schema.core.Any;var input_schema30998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30996","map30996",-2137300658,null))], null);var input_checker30999 = schema.core.checker.call(null,input_schema30998);var output_checker31000 = schema.core.checker.call(null,output_schema30997);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000){
return (function render_STAR_(G__31001){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31001], null);var temp__4126__auto___31019 = input_checker30999.call(null,args__6035__auto___31018);if(cljs.core.truth_(temp__4126__auto___31019))
{var error__6036__auto___31020 = temp__4126__auto___31019;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31020)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31020,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31018,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30998,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30996 = G__31001;while(true){
if(cljs.core.map_QMARK_.call(null,map30996))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30996)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30996,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30996,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000){
return (function iter__31010(s__31011){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000){
return (function (){var s__31011__$1 = s__31011;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31011__$1);if(temp__4126__auto__)
{var s__31011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31011__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31011__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31013 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31012 = (0);while(true){
if((i__31012 < size__4376__auto__))
{var map__31016 = cljs.core._nth.call(null,c__4375__auto__,i__31012);var map__31016__$1 = ((cljs.core.seq_QMARK_.call(null,map__31016))?cljs.core.apply.call(null,cljs.core.hash_map,map__31016):map__31016);var label__$1 = cljs.core.get.call(null,map__31016__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31016__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31013,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31021 = (i__31012 + (1));
i__31012 = G__31021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31013),iter__31010.call(null,cljs.core.chunk_rest.call(null,s__31011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31013),null);
}
} else
{var map__31017 = cljs.core.first.call(null,s__31011__$2);var map__31017__$1 = ((cljs.core.seq_QMARK_.call(null,map__31017))?cljs.core.apply.call(null,cljs.core.hash_map,map__31017):map__31017);var label__$1 = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31010.call(null,cljs.core.rest.call(null,s__31011__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31022 = output_checker31000.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31022))
{var error__6036__auto___31023 = temp__4126__auto___31022;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31023)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31023,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30997,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30997,input_schema30998,input_checker30999,output_checker31000))
,schema.core.make_fn_schema.call(null,output_schema30997,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30998], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31169 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31029 = schema.core.Any;var input_schema31030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31027","map31027",1986048631,null))], null);var input_checker31031 = schema.core.checker.call(null,input_schema31030);var output_checker31032 = schema.core.checker.call(null,output_schema31029);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function constructor31025(G__31033){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31033], null);var temp__4126__auto___31171 = input_checker31031.call(null,args__6035__auto___31170);if(cljs.core.truth_(temp__4126__auto___31171))
{var error__6036__auto___31172 = temp__4126__auto___31171;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31025","constructor31025",-1658338440,null),cljs.core.pr_str.call(null,error__6036__auto___31172)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31172,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31170,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31030,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31027 = G__31033;while(true){
if(cljs.core.map_QMARK_.call(null,map31027))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31027)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31027,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31028 = plumbing.fnk.schema.safe_get.call(null,map31027,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31028,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31027,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31100 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31100 = (function (component_spec,component_filter_rq_chan,owner,G__31033,data,input_schema31030,filter_spec,input_checker31031,map31027,constructor31025,validate__6034__auto__,id,output_schema31029,ufv__,output_checker31032,map31028,meta31101){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.G__31033 = G__31033;
this.data = data;
this.input_schema31030 = input_schema31030;
this.filter_spec = filter_spec;
this.input_checker31031 = input_checker31031;
this.map31027 = map31027;
this.constructor31025 = constructor31025;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_schema31029 = output_schema31029;
this.ufv__ = ufv__;
this.output_checker31032 = output_checker31032;
this.map31028 = map31028;
this.meta31101 = meta31101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31100.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31100.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31100";
clustermap.components.filters.tag_filter.t31100.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31100");
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
clustermap.components.filters.tag_filter.t31100.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31100.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
clustermap.components.filters.tag_filter.t31100.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31100.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
clustermap.components.filters.tag_filter.t31100.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31100.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (state_31140){var state_val_31141 = (state_31140[(1)]);if((state_val_31141 === (7)))
{var inst_31131 = (state_31140[(2)]);var state_31140__$1 = state_31140;if(cljs.core.truth_(inst_31131))
{var statearr_31142_31173 = state_31140__$1;(statearr_31142_31173[(1)] = (11));
} else
{var statearr_31143_31174 = state_31140__$1;(statearr_31143_31174[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (1)))
{var state_31140__$1 = state_31140;var statearr_31144_31175 = state_31140__$1;(statearr_31144_31175[(2)] = null);
(statearr_31144_31175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (4)))
{var inst_31105 = (state_31140[(7)]);var inst_31105__$1 = (state_31140[(2)]);var state_31140__$1 = (function (){var statearr_31145 = state_31140;(statearr_31145[(7)] = inst_31105__$1);
return statearr_31145;
})();if(cljs.core.truth_(inst_31105__$1))
{var statearr_31146_31176 = state_31140__$1;(statearr_31146_31176[(1)] = (5));
} else
{var statearr_31147_31177 = state_31140__$1;(statearr_31147_31177[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (13)))
{var inst_31136 = (state_31140[(2)]);var state_31140__$1 = state_31140;var statearr_31148_31178 = state_31140__$1;(statearr_31148_31178[(2)] = inst_31136);
(statearr_31148_31178[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (6)))
{var state_31140__$1 = state_31140;var statearr_31149_31179 = state_31140__$1;(statearr_31149_31179[(2)] = null);
(statearr_31149_31179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (3)))
{var inst_31138 = (state_31140[(2)]);var state_31140__$1 = state_31140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31140__$1,inst_31138);
} else
{if((state_val_31141 === (12)))
{var state_31140__$1 = state_31140;var statearr_31150_31180 = state_31140__$1;(statearr_31150_31180[(2)] = null);
(statearr_31150_31180[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (2)))
{var state_31140__$1 = state_31140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31140__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31141 === (11)))
{var state_31140__$1 = state_31140;var statearr_31151_31181 = state_31140__$1;(statearr_31151_31181[(2)] = null);
(statearr_31151_31181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (9)))
{var inst_31111 = (state_31140[(8)]);var state_31140__$1 = state_31140;var statearr_31152_31182 = state_31140__$1;(statearr_31152_31182[(2)] = inst_31111);
(statearr_31152_31182[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (5)))
{var inst_31111 = (state_31140[(8)]);var inst_31105 = (state_31140[(7)]);var inst_31108 = cljs.core.nth.call(null,inst_31105,(0),null);var inst_31109 = cljs.core.nth.call(null,inst_31105,(1),null);var inst_31111__$1 = om.core.get_props.call(null,self__.owner);var inst_31112 = cljs.core.seq_QMARK_.call(null,inst_31111__$1);var state_31140__$1 = (function (){var statearr_31153 = state_31140;(statearr_31153[(8)] = inst_31111__$1);
(statearr_31153[(9)] = inst_31109);
(statearr_31153[(10)] = inst_31108);
return statearr_31153;
})();if(inst_31112)
{var statearr_31154_31183 = state_31140__$1;(statearr_31154_31183[(1)] = (8));
} else
{var statearr_31155_31184 = state_31140__$1;(statearr_31155_31184[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (10)))
{var inst_31109 = (state_31140[(9)]);var inst_31117 = (state_31140[(2)]);var inst_31118 = cljs.core.get.call(null,inst_31117,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31119 = cljs.core.get.call(null,inst_31117,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31120 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31121 = ["TAG-FILTER-RQ",self__.id,inst_31109];var inst_31122 = (new cljs.core.PersistentVector(null,3,(5),inst_31120,inst_31121,null));var inst_31123 = cljs.core.clj__GT_js.call(null,inst_31122);var inst_31124 = console.log(inst_31123);var inst_31125 = cljs.core.deref.call(null,inst_31118);var inst_31126 = cljs.core.deref.call(null,inst_31119);var inst_31127 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31125,inst_31126,inst_31109);var inst_31128 = om.core.update_BANG_.call(null,inst_31118,inst_31127);var state_31140__$1 = (function (){var statearr_31156 = state_31140;(statearr_31156[(11)] = inst_31124);
(statearr_31156[(12)] = inst_31128);
return statearr_31156;
})();var statearr_31157_31185 = state_31140__$1;(statearr_31157_31185[(2)] = true);
(statearr_31157_31185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (8)))
{var inst_31111 = (state_31140[(8)]);var inst_31114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31111);var state_31140__$1 = state_31140;var statearr_31158_31186 = state_31140__$1;(statearr_31158_31186[(2)] = inst_31114);
(statearr_31158_31186[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31162 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31162[(0)] = state_machine__9111__auto__);
(statearr_31162[(1)] = (1));
return statearr_31162;
});
var state_machine__9111__auto____1 = (function (state_31140){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31140);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31163){if((e31163 instanceof Object))
{var ex__9114__auto__ = e31163;var statearr_31164_31187 = state_31140;(statearr_31164_31187[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31188 = state_31140;
state_31140 = G__31188;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
})();var state__9127__auto__ = (function (){var statearr_31165 = f__9126__auto__.call(null);(statearr_31165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
clustermap.components.filters.tag_filter.t31100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (_31102){var self__ = this;
var _31102__$1 = this;return self__.meta31101;
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
clustermap.components.filters.tag_filter.t31100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function (_31102,meta31101__$1){var self__ = this;
var _31102__$1 = this;return (new clustermap.components.filters.tag_filter.t31100(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.G__31033,self__.data,self__.input_schema31030,self__.filter_spec,self__.input_checker31031,self__.map31027,self__.constructor31025,self__.validate__6034__auto__,self__.id,self__.output_schema31029,self__.ufv__,self__.output_checker31032,self__.map31028,meta31101__$1));
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
clustermap.components.filters.tag_filter.__GT_t31100 = ((function (owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032){
return (function __GT_t31100(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__31033__$1,data__$1,input_schema31030__$1,filter_spec__$1,input_checker31031__$1,map31027__$1,constructor31025__$1,validate__6034__auto____$1,id__$1,output_schema31029__$1,ufv____$1,output_checker31032__$1,map31028__$1,meta31101){return (new clustermap.components.filters.tag_filter.t31100(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__31033__$1,data__$1,input_schema31030__$1,filter_spec__$1,input_checker31031__$1,map31027__$1,constructor31025__$1,validate__6034__auto____$1,id__$1,output_schema31029__$1,ufv____$1,output_checker31032__$1,map31028__$1,meta31101));
});})(owner,component_filter_rq_chan,map31028,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
;
}
return (new clustermap.components.filters.tag_filter.t31100(component_spec,component_filter_rq_chan,owner,G__31033,data,input_schema31030,filter_spec,input_checker31031,map31027,constructor31025,validate__6034__auto__,id,output_schema31029,ufv__,output_checker31032,map31028,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31189 = output_checker31032.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31189))
{var error__6036__auto___31190 = temp__4126__auto___31189;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31025","constructor31025",-1658338440,null),cljs.core.pr_str.call(null,error__6036__auto___31190)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31190,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31029,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31029,input_schema31030,input_checker31031,output_checker31032))
,schema.core.make_fn_schema.call(null,output_schema31029,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31030], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31169){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner31024,p__31166){var vec__31168 = p__31166;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31168,(0),null);return component_fnk__7881__auto___31169.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31024,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner31024,var_args){
var p__31166 = null;if (arguments.length > 2) {
  p__31166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner31024,p__31166);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31191){
var data__7882__auto__ = cljs.core.first(arglist__31191);
arglist__31191 = cljs.core.next(arglist__31191);
var owner31024 = cljs.core.first(arglist__31191);
var p__31166 = cljs.core.rest(arglist__31191);
return tag_filter_component__delegate(data__7882__auto__,owner31024,p__31166);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31169))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m31026){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m31026);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m31026){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m31026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
