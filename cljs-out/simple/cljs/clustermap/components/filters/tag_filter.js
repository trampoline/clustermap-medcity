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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30945_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30945_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30946,value){var map__30948 = p__30946;var map__30948__$1 = ((cljs.core.seq_QMARK_.call(null,map__30948))?cljs.core.apply.call(null,cljs.core.hash_map,map__30948):map__30948);var component_spec = map__30948__$1;var tags = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30948__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30949,value){var map__30951 = p__30949;var map__30951__$1 = ((cljs.core.seq_QMARK_.call(null,map__30951))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);var component_spec = map__30951__$1;var tags = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30952,value){var map__30954 = p__30952;var map__30954__$1 = ((cljs.core.seq_QMARK_.call(null,map__30954))?cljs.core.apply.call(null,cljs.core.hash_map,map__30954):map__30954);var component_spec = map__30954__$1;var tags = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30955_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30955_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30956_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30956_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30958 = schema.core.Any;var input_schema30959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30957","map30957",1073008849,null))], null);var input_checker30960 = schema.core.checker.call(null,input_schema30959);var output_checker30961 = schema.core.checker.call(null,output_schema30958);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961){
return (function render_STAR_(G__30962){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30962], null);var temp__4126__auto___30980 = input_checker30960.call(null,args__6035__auto___30979);if(cljs.core.truth_(temp__4126__auto___30980))
{var error__6036__auto___30981 = temp__4126__auto___30980;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30981)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30981,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30979,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30959,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30957 = G__30962;while(true){
if(cljs.core.map_QMARK_.call(null,map30957))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30957)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30957,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30957,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961){
return (function iter__30971(s__30972){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961){
return (function (){var s__30972__$1 = s__30972;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30972__$1);if(temp__4126__auto__)
{var s__30972__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30972__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30972__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30974 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30973 = (0);while(true){
if((i__30973 < size__4376__auto__))
{var map__30977 = cljs.core._nth.call(null,c__4375__auto__,i__30973);var map__30977__$1 = ((cljs.core.seq_QMARK_.call(null,map__30977))?cljs.core.apply.call(null,cljs.core.hash_map,map__30977):map__30977);var label__$1 = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30977__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30974,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30982 = (i__30973 + (1));
i__30973 = G__30982;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30974),iter__30971.call(null,cljs.core.chunk_rest.call(null,s__30972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30974),null);
}
} else
{var map__30978 = cljs.core.first.call(null,s__30972__$2);var map__30978__$1 = ((cljs.core.seq_QMARK_.call(null,map__30978))?cljs.core.apply.call(null,cljs.core.hash_map,map__30978):map__30978);var label__$1 = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30978__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30971.call(null,cljs.core.rest.call(null,s__30972__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30983 = output_checker30961.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30983))
{var error__6036__auto___30984 = temp__4126__auto___30983;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30984,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30958,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30958,input_schema30959,input_checker30960,output_checker30961))
,schema.core.make_fn_schema.call(null,output_schema30958,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30959], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31130 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30990 = schema.core.Any;var input_schema30991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30988","map30988",-719343154,null))], null);var input_checker30992 = schema.core.checker.call(null,input_schema30991);var output_checker30993 = schema.core.checker.call(null,output_schema30990);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function constructor30986(G__30994){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30994], null);var temp__4126__auto___31132 = input_checker30992.call(null,args__6035__auto___31131);if(cljs.core.truth_(temp__4126__auto___31132))
{var error__6036__auto___31133 = temp__4126__auto___31132;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30986","constructor30986",-731268551,null),cljs.core.pr_str.call(null,error__6036__auto___31133)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31133,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31131,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30991,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30988 = G__30994;while(true){
if(cljs.core.map_QMARK_.call(null,map30988))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30988)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30988,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30989 = plumbing.fnk.schema.safe_get.call(null,map30988,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30989,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30988,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31061 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31061 = (function (component_spec,component_filter_rq_chan,owner,input_checker30992,data,output_checker30993,map30988,filter_spec,output_schema30990,input_schema30991,G__30994,constructor30986,validate__6034__auto__,map30989,id,ufv__,meta31062){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_checker30992 = input_checker30992;
this.data = data;
this.output_checker30993 = output_checker30993;
this.map30988 = map30988;
this.filter_spec = filter_spec;
this.output_schema30990 = output_schema30990;
this.input_schema30991 = input_schema30991;
this.G__30994 = G__30994;
this.constructor30986 = constructor30986;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30989 = map30989;
this.id = id;
this.ufv__ = ufv__;
this.meta31062 = meta31062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31061.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31061.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31061";
clustermap.components.filters.tag_filter.t31061.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31061");
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
clustermap.components.filters.tag_filter.t31061.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31061.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
clustermap.components.filters.tag_filter.t31061.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31061.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
clustermap.components.filters.tag_filter.t31061.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31061.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (state_31101){var state_val_31102 = (state_31101[(1)]);if((state_val_31102 === (7)))
{var inst_31092 = (state_31101[(2)]);var state_31101__$1 = state_31101;if(cljs.core.truth_(inst_31092))
{var statearr_31103_31134 = state_31101__$1;(statearr_31103_31134[(1)] = (11));
} else
{var statearr_31104_31135 = state_31101__$1;(statearr_31104_31135[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (1)))
{var state_31101__$1 = state_31101;var statearr_31105_31136 = state_31101__$1;(statearr_31105_31136[(2)] = null);
(statearr_31105_31136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (4)))
{var inst_31066 = (state_31101[(7)]);var inst_31066__$1 = (state_31101[(2)]);var state_31101__$1 = (function (){var statearr_31106 = state_31101;(statearr_31106[(7)] = inst_31066__$1);
return statearr_31106;
})();if(cljs.core.truth_(inst_31066__$1))
{var statearr_31107_31137 = state_31101__$1;(statearr_31107_31137[(1)] = (5));
} else
{var statearr_31108_31138 = state_31101__$1;(statearr_31108_31138[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (13)))
{var inst_31097 = (state_31101[(2)]);var state_31101__$1 = state_31101;var statearr_31109_31139 = state_31101__$1;(statearr_31109_31139[(2)] = inst_31097);
(statearr_31109_31139[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (6)))
{var state_31101__$1 = state_31101;var statearr_31110_31140 = state_31101__$1;(statearr_31110_31140[(2)] = null);
(statearr_31110_31140[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (3)))
{var inst_31099 = (state_31101[(2)]);var state_31101__$1 = state_31101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31101__$1,inst_31099);
} else
{if((state_val_31102 === (12)))
{var state_31101__$1 = state_31101;var statearr_31111_31141 = state_31101__$1;(statearr_31111_31141[(2)] = null);
(statearr_31111_31141[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (2)))
{var state_31101__$1 = state_31101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31101__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31102 === (11)))
{var state_31101__$1 = state_31101;var statearr_31112_31142 = state_31101__$1;(statearr_31112_31142[(2)] = null);
(statearr_31112_31142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (9)))
{var inst_31072 = (state_31101[(8)]);var state_31101__$1 = state_31101;var statearr_31113_31143 = state_31101__$1;(statearr_31113_31143[(2)] = inst_31072);
(statearr_31113_31143[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (5)))
{var inst_31072 = (state_31101[(8)]);var inst_31066 = (state_31101[(7)]);var inst_31069 = cljs.core.nth.call(null,inst_31066,(0),null);var inst_31070 = cljs.core.nth.call(null,inst_31066,(1),null);var inst_31072__$1 = om.core.get_props.call(null,self__.owner);var inst_31073 = cljs.core.seq_QMARK_.call(null,inst_31072__$1);var state_31101__$1 = (function (){var statearr_31114 = state_31101;(statearr_31114[(8)] = inst_31072__$1);
(statearr_31114[(9)] = inst_31069);
(statearr_31114[(10)] = inst_31070);
return statearr_31114;
})();if(inst_31073)
{var statearr_31115_31144 = state_31101__$1;(statearr_31115_31144[(1)] = (8));
} else
{var statearr_31116_31145 = state_31101__$1;(statearr_31116_31145[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (10)))
{var inst_31070 = (state_31101[(10)]);var inst_31078 = (state_31101[(2)]);var inst_31079 = cljs.core.get.call(null,inst_31078,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31080 = cljs.core.get.call(null,inst_31078,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31081 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31082 = ["TAG-FILTER-RQ",self__.id,inst_31070];var inst_31083 = (new cljs.core.PersistentVector(null,3,(5),inst_31081,inst_31082,null));var inst_31084 = cljs.core.clj__GT_js.call(null,inst_31083);var inst_31085 = console.log(inst_31084);var inst_31086 = cljs.core.deref.call(null,inst_31079);var inst_31087 = cljs.core.deref.call(null,inst_31080);var inst_31088 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31086,inst_31087,inst_31070);var inst_31089 = om.core.update_BANG_.call(null,inst_31079,inst_31088);var state_31101__$1 = (function (){var statearr_31117 = state_31101;(statearr_31117[(11)] = inst_31089);
(statearr_31117[(12)] = inst_31085);
return statearr_31117;
})();var statearr_31118_31146 = state_31101__$1;(statearr_31118_31146[(2)] = true);
(statearr_31118_31146[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31102 === (8)))
{var inst_31072 = (state_31101[(8)]);var inst_31075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31072);var state_31101__$1 = state_31101;var statearr_31119_31147 = state_31101__$1;(statearr_31119_31147[(2)] = inst_31075);
(statearr_31119_31147[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31123 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31123[(0)] = state_machine__9111__auto__);
(statearr_31123[(1)] = (1));
return statearr_31123;
});
var state_machine__9111__auto____1 = (function (state_31101){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31101);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31124){if((e31124 instanceof Object))
{var ex__9114__auto__ = e31124;var statearr_31125_31148 = state_31101;(statearr_31125_31148[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31124;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31149 = state_31101;
state_31101 = G__31149;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31101){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
})();var state__9127__auto__ = (function (){var statearr_31126 = f__9126__auto__.call(null);(statearr_31126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
clustermap.components.filters.tag_filter.t31061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (_31063){var self__ = this;
var _31063__$1 = this;return self__.meta31062;
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
clustermap.components.filters.tag_filter.t31061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function (_31063,meta31062__$1){var self__ = this;
var _31063__$1 = this;return (new clustermap.components.filters.tag_filter.t31061(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.input_checker30992,self__.data,self__.output_checker30993,self__.map30988,self__.filter_spec,self__.output_schema30990,self__.input_schema30991,self__.G__30994,self__.constructor30986,self__.validate__6034__auto__,self__.map30989,self__.id,self__.ufv__,meta31062__$1));
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
clustermap.components.filters.tag_filter.__GT_t31061 = ((function (owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993){
return (function __GT_t31061(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_checker30992__$1,data__$1,output_checker30993__$1,map30988__$1,filter_spec__$1,output_schema30990__$1,input_schema30991__$1,G__30994__$1,constructor30986__$1,validate__6034__auto____$1,map30989__$1,id__$1,ufv____$1,meta31062){return (new clustermap.components.filters.tag_filter.t31061(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_checker30992__$1,data__$1,output_checker30993__$1,map30988__$1,filter_spec__$1,output_schema30990__$1,input_schema30991__$1,G__30994__$1,constructor30986__$1,validate__6034__auto____$1,map30989__$1,id__$1,ufv____$1,meta31062));
});})(owner,component_filter_rq_chan,map30989,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
;
}
return (new clustermap.components.filters.tag_filter.t31061(component_spec,component_filter_rq_chan,owner,input_checker30992,data,output_checker30993,map30988,filter_spec,output_schema30990,input_schema30991,G__30994,constructor30986,validate__6034__auto__,map30989,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31150 = output_checker30993.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31150))
{var error__6036__auto___31151 = temp__4126__auto___31150;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30986","constructor30986",-731268551,null),cljs.core.pr_str.call(null,error__6036__auto___31151)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31151,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30990,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30990,input_schema30991,input_checker30992,output_checker30993))
,schema.core.make_fn_schema.call(null,output_schema30990,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30991], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31130){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30985,p__31127){var vec__31129 = p__31127;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31129,(0),null);return component_fnk__7881__auto___31130.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30985,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30985,var_args){
var p__31127 = null;if (arguments.length > 2) {
  p__31127 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30985,p__31127);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31152){
var data__7882__auto__ = cljs.core.first(arglist__31152);
arglist__31152 = cljs.core.next(arglist__31152);
var owner30985 = cljs.core.first(arglist__31152);
var p__31127 = cljs.core.rest(arglist__31152);
return tag_filter_component__delegate(data__7882__auto__,owner30985,p__31127);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31130))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30987){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30987);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30987){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
