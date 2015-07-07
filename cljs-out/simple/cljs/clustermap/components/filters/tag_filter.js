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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30979_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30979_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30980,value){var map__30982 = p__30980;var map__30982__$1 = ((cljs.core.seq_QMARK_.call(null,map__30982))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);var component_spec = map__30982__$1;var tags = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30983,value){var map__30985 = p__30983;var map__30985__$1 = ((cljs.core.seq_QMARK_.call(null,map__30985))?cljs.core.apply.call(null,cljs.core.hash_map,map__30985):map__30985);var component_spec = map__30985__$1;var tags = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30986,value){var map__30988 = p__30986;var map__30988__$1 = ((cljs.core.seq_QMARK_.call(null,map__30988))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988):map__30988);var component_spec = map__30988__$1;var tags = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30989_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30989_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30990_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30990_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30992 = schema.core.Any;var input_schema30993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30991","map30991",1845151865,null))], null);var input_checker30994 = schema.core.checker.call(null,input_schema30993);var output_checker30995 = schema.core.checker.call(null,output_schema30992);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995){
return (function render_STAR_(G__30996){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30996], null);var temp__4126__auto___31014 = input_checker30994.call(null,args__6035__auto___31013);if(cljs.core.truth_(temp__4126__auto___31014))
{var error__6036__auto___31015 = temp__4126__auto___31014;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31015)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31015,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31013,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30993,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30991 = G__30996;while(true){
if(cljs.core.map_QMARK_.call(null,map30991))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30991)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30991,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30991,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995){
return (function iter__31005(s__31006){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995){
return (function (){var s__31006__$1 = s__31006;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31006__$1);if(temp__4126__auto__)
{var s__31006__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31006__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31006__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31008 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31007 = (0);while(true){
if((i__31007 < size__4376__auto__))
{var map__31011 = cljs.core._nth.call(null,c__4375__auto__,i__31007);var map__31011__$1 = ((cljs.core.seq_QMARK_.call(null,map__31011))?cljs.core.apply.call(null,cljs.core.hash_map,map__31011):map__31011);var label__$1 = cljs.core.get.call(null,map__31011__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31011__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31008,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31016 = (i__31007 + (1));
i__31007 = G__31016;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31008),iter__31005.call(null,cljs.core.chunk_rest.call(null,s__31006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31008),null);
}
} else
{var map__31012 = cljs.core.first.call(null,s__31006__$2);var map__31012__$1 = ((cljs.core.seq_QMARK_.call(null,map__31012))?cljs.core.apply.call(null,cljs.core.hash_map,map__31012):map__31012);var label__$1 = cljs.core.get.call(null,map__31012__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31012__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31005.call(null,cljs.core.rest.call(null,s__31006__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31017 = output_checker30995.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31017))
{var error__6036__auto___31018 = temp__4126__auto___31017;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31018)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31018,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30992,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30992,input_schema30993,input_checker30994,output_checker30995))
,schema.core.make_fn_schema.call(null,output_schema30992,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30993], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31164 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31024 = schema.core.Any;var input_schema31025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31022","map31022",52655050,null))], null);var input_checker31026 = schema.core.checker.call(null,input_schema31025);var output_checker31027 = schema.core.checker.call(null,output_schema31024);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function constructor31020(G__31028){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31028], null);var temp__4126__auto___31166 = input_checker31026.call(null,args__6035__auto___31165);if(cljs.core.truth_(temp__4126__auto___31166))
{var error__6036__auto___31167 = temp__4126__auto___31166;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31020","constructor31020",-441090903,null),cljs.core.pr_str.call(null,error__6036__auto___31167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31167,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31165,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31025,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31022 = G__31028;while(true){
if(cljs.core.map_QMARK_.call(null,map31022))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31022)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31022,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31023 = plumbing.fnk.schema.safe_get.call(null,map31022,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31023,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31022,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31095 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31095 = (function (component_spec,component_filter_rq_chan,owner,data,input_checker31026,constructor31020,map31022,output_schema31024,filter_spec,map31023,input_schema31025,output_checker31027,validate__6034__auto__,id,ufv__,G__31028,meta31096){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.input_checker31026 = input_checker31026;
this.constructor31020 = constructor31020;
this.map31022 = map31022;
this.output_schema31024 = output_schema31024;
this.filter_spec = filter_spec;
this.map31023 = map31023;
this.input_schema31025 = input_schema31025;
this.output_checker31027 = output_checker31027;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.G__31028 = G__31028;
this.meta31096 = meta31096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31095.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31095.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31095";
clustermap.components.filters.tag_filter.t31095.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31095");
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
clustermap.components.filters.tag_filter.t31095.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31095.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
clustermap.components.filters.tag_filter.t31095.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31095.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
clustermap.components.filters.tag_filter.t31095.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31095.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (state_31135){var state_val_31136 = (state_31135[(1)]);if((state_val_31136 === (7)))
{var inst_31126 = (state_31135[(2)]);var state_31135__$1 = state_31135;if(cljs.core.truth_(inst_31126))
{var statearr_31137_31168 = state_31135__$1;(statearr_31137_31168[(1)] = (11));
} else
{var statearr_31138_31169 = state_31135__$1;(statearr_31138_31169[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (1)))
{var state_31135__$1 = state_31135;var statearr_31139_31170 = state_31135__$1;(statearr_31139_31170[(2)] = null);
(statearr_31139_31170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (4)))
{var inst_31100 = (state_31135[(7)]);var inst_31100__$1 = (state_31135[(2)]);var state_31135__$1 = (function (){var statearr_31140 = state_31135;(statearr_31140[(7)] = inst_31100__$1);
return statearr_31140;
})();if(cljs.core.truth_(inst_31100__$1))
{var statearr_31141_31171 = state_31135__$1;(statearr_31141_31171[(1)] = (5));
} else
{var statearr_31142_31172 = state_31135__$1;(statearr_31142_31172[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (13)))
{var inst_31131 = (state_31135[(2)]);var state_31135__$1 = state_31135;var statearr_31143_31173 = state_31135__$1;(statearr_31143_31173[(2)] = inst_31131);
(statearr_31143_31173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (6)))
{var state_31135__$1 = state_31135;var statearr_31144_31174 = state_31135__$1;(statearr_31144_31174[(2)] = null);
(statearr_31144_31174[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (3)))
{var inst_31133 = (state_31135[(2)]);var state_31135__$1 = state_31135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31135__$1,inst_31133);
} else
{if((state_val_31136 === (12)))
{var state_31135__$1 = state_31135;var statearr_31145_31175 = state_31135__$1;(statearr_31145_31175[(2)] = null);
(statearr_31145_31175[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (2)))
{var state_31135__$1 = state_31135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31135__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31136 === (11)))
{var state_31135__$1 = state_31135;var statearr_31146_31176 = state_31135__$1;(statearr_31146_31176[(2)] = null);
(statearr_31146_31176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (9)))
{var inst_31106 = (state_31135[(8)]);var state_31135__$1 = state_31135;var statearr_31147_31177 = state_31135__$1;(statearr_31147_31177[(2)] = inst_31106);
(statearr_31147_31177[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (5)))
{var inst_31106 = (state_31135[(8)]);var inst_31100 = (state_31135[(7)]);var inst_31103 = cljs.core.nth.call(null,inst_31100,(0),null);var inst_31104 = cljs.core.nth.call(null,inst_31100,(1),null);var inst_31106__$1 = om.core.get_props.call(null,self__.owner);var inst_31107 = cljs.core.seq_QMARK_.call(null,inst_31106__$1);var state_31135__$1 = (function (){var statearr_31148 = state_31135;(statearr_31148[(9)] = inst_31103);
(statearr_31148[(10)] = inst_31104);
(statearr_31148[(8)] = inst_31106__$1);
return statearr_31148;
})();if(inst_31107)
{var statearr_31149_31178 = state_31135__$1;(statearr_31149_31178[(1)] = (8));
} else
{var statearr_31150_31179 = state_31135__$1;(statearr_31150_31179[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (10)))
{var inst_31104 = (state_31135[(10)]);var inst_31112 = (state_31135[(2)]);var inst_31113 = cljs.core.get.call(null,inst_31112,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31114 = cljs.core.get.call(null,inst_31112,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31115 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31116 = ["TAG-FILTER-RQ",self__.id,inst_31104];var inst_31117 = (new cljs.core.PersistentVector(null,3,(5),inst_31115,inst_31116,null));var inst_31118 = cljs.core.clj__GT_js.call(null,inst_31117);var inst_31119 = console.log(inst_31118);var inst_31120 = cljs.core.deref.call(null,inst_31113);var inst_31121 = cljs.core.deref.call(null,inst_31114);var inst_31122 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31120,inst_31121,inst_31104);var inst_31123 = om.core.update_BANG_.call(null,inst_31113,inst_31122);var state_31135__$1 = (function (){var statearr_31151 = state_31135;(statearr_31151[(11)] = inst_31123);
(statearr_31151[(12)] = inst_31119);
return statearr_31151;
})();var statearr_31152_31180 = state_31135__$1;(statearr_31152_31180[(2)] = true);
(statearr_31152_31180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31136 === (8)))
{var inst_31106 = (state_31135[(8)]);var inst_31109 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31106);var state_31135__$1 = state_31135;var statearr_31153_31181 = state_31135__$1;(statearr_31153_31181[(2)] = inst_31109);
(statearr_31153_31181[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31157 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31157[(0)] = state_machine__9111__auto__);
(statearr_31157[(1)] = (1));
return statearr_31157;
});
var state_machine__9111__auto____1 = (function (state_31135){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31135);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31158){if((e31158 instanceof Object))
{var ex__9114__auto__ = e31158;var statearr_31159_31182 = state_31135;(statearr_31159_31182[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31158;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31183 = state_31135;
state_31135 = G__31183;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31135){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
})();var state__9127__auto__ = (function (){var statearr_31160 = f__9126__auto__.call(null);(statearr_31160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
clustermap.components.filters.tag_filter.t31095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (_31097){var self__ = this;
var _31097__$1 = this;return self__.meta31096;
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
clustermap.components.filters.tag_filter.t31095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function (_31097,meta31096__$1){var self__ = this;
var _31097__$1 = this;return (new clustermap.components.filters.tag_filter.t31095(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.input_checker31026,self__.constructor31020,self__.map31022,self__.output_schema31024,self__.filter_spec,self__.map31023,self__.input_schema31025,self__.output_checker31027,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.G__31028,meta31096__$1));
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
clustermap.components.filters.tag_filter.__GT_t31095 = ((function (owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027){
return (function __GT_t31095(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_checker31026__$1,constructor31020__$1,map31022__$1,output_schema31024__$1,filter_spec__$1,map31023__$1,input_schema31025__$1,output_checker31027__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__31028__$1,meta31096){return (new clustermap.components.filters.tag_filter.t31095(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_checker31026__$1,constructor31020__$1,map31022__$1,output_schema31024__$1,filter_spec__$1,map31023__$1,input_schema31025__$1,output_checker31027__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__31028__$1,meta31096));
});})(owner,component_filter_rq_chan,map31023,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
;
}
return (new clustermap.components.filters.tag_filter.t31095(component_spec,component_filter_rq_chan,owner,data,input_checker31026,constructor31020,map31022,output_schema31024,filter_spec,map31023,input_schema31025,output_checker31027,validate__6034__auto__,id,ufv__,G__31028,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31184 = output_checker31027.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31184))
{var error__6036__auto___31185 = temp__4126__auto___31184;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31020","constructor31020",-441090903,null),cljs.core.pr_str.call(null,error__6036__auto___31185)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31185,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31024,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31024,input_schema31025,input_checker31026,output_checker31027))
,schema.core.make_fn_schema.call(null,output_schema31024,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31025], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31164){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner31019,p__31161){var vec__31163 = p__31161;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31163,(0),null);return component_fnk__7881__auto___31164.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31019,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner31019,var_args){
var p__31161 = null;if (arguments.length > 2) {
  p__31161 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner31019,p__31161);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31186){
var data__7882__auto__ = cljs.core.first(arglist__31186);
arglist__31186 = cljs.core.next(arglist__31186);
var owner31019 = cljs.core.first(arglist__31186);
var p__31161 = cljs.core.rest(arglist__31186);
return tag_filter_component__delegate(data__7882__auto__,owner31019,p__31161);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31164))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m31021){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m31021);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m31021){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m31021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
