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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30948_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30948_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30949,value){var map__30951 = p__30949;var map__30951__$1 = ((cljs.core.seq_QMARK_.call(null,map__30951))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);var component_spec = map__30951__$1;var tags = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30952,value){var map__30954 = p__30952;var map__30954__$1 = ((cljs.core.seq_QMARK_.call(null,map__30954))?cljs.core.apply.call(null,cljs.core.hash_map,map__30954):map__30954);var component_spec = map__30954__$1;var tags = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30955,value){var map__30957 = p__30955;var map__30957__$1 = ((cljs.core.seq_QMARK_.call(null,map__30957))?cljs.core.apply.call(null,cljs.core.hash_map,map__30957):map__30957);var component_spec = map__30957__$1;var tags = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30958_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30958_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30959_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30959_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30961 = schema.core.Any;var input_schema30962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30960","map30960",-1232606949,null))], null);var input_checker30963 = schema.core.checker.call(null,input_schema30962);var output_checker30964 = schema.core.checker.call(null,output_schema30961);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964){
return (function render_STAR_(G__30965){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30965], null);var temp__4126__auto___30983 = input_checker30963.call(null,args__6035__auto___30982);if(cljs.core.truth_(temp__4126__auto___30983))
{var error__6036__auto___30984 = temp__4126__auto___30983;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30984,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30982,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30962,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30960 = G__30965;while(true){
if(cljs.core.map_QMARK_.call(null,map30960))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30960)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30960,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30960,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964){
return (function iter__30974(s__30975){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964){
return (function (){var s__30975__$1 = s__30975;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30975__$1);if(temp__4126__auto__)
{var s__30975__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30975__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30975__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30977 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30976 = (0);while(true){
if((i__30976 < size__4376__auto__))
{var map__30980 = cljs.core._nth.call(null,c__4375__auto__,i__30976);var map__30980__$1 = ((cljs.core.seq_QMARK_.call(null,map__30980))?cljs.core.apply.call(null,cljs.core.hash_map,map__30980):map__30980);var label__$1 = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30977,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30985 = (i__30976 + (1));
i__30976 = G__30985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30977),iter__30974.call(null,cljs.core.chunk_rest.call(null,s__30975__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30977),null);
}
} else
{var map__30981 = cljs.core.first.call(null,s__30975__$2);var map__30981__$1 = ((cljs.core.seq_QMARK_.call(null,map__30981))?cljs.core.apply.call(null,cljs.core.hash_map,map__30981):map__30981);var label__$1 = cljs.core.get.call(null,map__30981__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30981__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30974.call(null,cljs.core.rest.call(null,s__30975__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30986 = output_checker30964.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30986))
{var error__6036__auto___30987 = temp__4126__auto___30986;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30987)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30987,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30961,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30961,input_schema30962,input_checker30963,output_checker30964))
,schema.core.make_fn_schema.call(null,output_schema30961,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30962], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31133 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30993 = schema.core.Any;var input_schema30994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30991","map30991",1845151865,null))], null);var input_checker30995 = schema.core.checker.call(null,input_schema30994);var output_checker30996 = schema.core.checker.call(null,output_schema30993);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function constructor30989(G__30997){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30997], null);var temp__4126__auto___31135 = input_checker30995.call(null,args__6035__auto___31134);if(cljs.core.truth_(temp__4126__auto___31135))
{var error__6036__auto___31136 = temp__4126__auto___31135;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30989","constructor30989",-171973828,null),cljs.core.pr_str.call(null,error__6036__auto___31136)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31136,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31134,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30994,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30991 = G__30997;while(true){
if(cljs.core.map_QMARK_.call(null,map30991))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30991)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30991,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30992 = plumbing.fnk.schema.safe_get.call(null,map30991,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30992,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30991,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31064 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31064 = (function (component_spec,G__30997,component_filter_rq_chan,map30992,output_schema30993,owner,data,input_checker30995,input_schema30994,filter_spec,map30991,validate__6034__auto__,output_checker30996,id,constructor30989,ufv__,meta31065){
this.component_spec = component_spec;
this.G__30997 = G__30997;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map30992 = map30992;
this.output_schema30993 = output_schema30993;
this.owner = owner;
this.data = data;
this.input_checker30995 = input_checker30995;
this.input_schema30994 = input_schema30994;
this.filter_spec = filter_spec;
this.map30991 = map30991;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30996 = output_checker30996;
this.id = id;
this.constructor30989 = constructor30989;
this.ufv__ = ufv__;
this.meta31065 = meta31065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31064.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31064.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31064";
clustermap.components.filters.tag_filter.t31064.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31064");
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
clustermap.components.filters.tag_filter.t31064.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31064.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
clustermap.components.filters.tag_filter.t31064.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31064.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
clustermap.components.filters.tag_filter.t31064.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31064.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (state_31104){var state_val_31105 = (state_31104[(1)]);if((state_val_31105 === (7)))
{var inst_31095 = (state_31104[(2)]);var state_31104__$1 = state_31104;if(cljs.core.truth_(inst_31095))
{var statearr_31106_31137 = state_31104__$1;(statearr_31106_31137[(1)] = (11));
} else
{var statearr_31107_31138 = state_31104__$1;(statearr_31107_31138[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (1)))
{var state_31104__$1 = state_31104;var statearr_31108_31139 = state_31104__$1;(statearr_31108_31139[(2)] = null);
(statearr_31108_31139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (4)))
{var inst_31069 = (state_31104[(7)]);var inst_31069__$1 = (state_31104[(2)]);var state_31104__$1 = (function (){var statearr_31109 = state_31104;(statearr_31109[(7)] = inst_31069__$1);
return statearr_31109;
})();if(cljs.core.truth_(inst_31069__$1))
{var statearr_31110_31140 = state_31104__$1;(statearr_31110_31140[(1)] = (5));
} else
{var statearr_31111_31141 = state_31104__$1;(statearr_31111_31141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (13)))
{var inst_31100 = (state_31104[(2)]);var state_31104__$1 = state_31104;var statearr_31112_31142 = state_31104__$1;(statearr_31112_31142[(2)] = inst_31100);
(statearr_31112_31142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (6)))
{var state_31104__$1 = state_31104;var statearr_31113_31143 = state_31104__$1;(statearr_31113_31143[(2)] = null);
(statearr_31113_31143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (3)))
{var inst_31102 = (state_31104[(2)]);var state_31104__$1 = state_31104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31104__$1,inst_31102);
} else
{if((state_val_31105 === (12)))
{var state_31104__$1 = state_31104;var statearr_31114_31144 = state_31104__$1;(statearr_31114_31144[(2)] = null);
(statearr_31114_31144[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (2)))
{var state_31104__$1 = state_31104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31104__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31105 === (11)))
{var state_31104__$1 = state_31104;var statearr_31115_31145 = state_31104__$1;(statearr_31115_31145[(2)] = null);
(statearr_31115_31145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (9)))
{var inst_31075 = (state_31104[(8)]);var state_31104__$1 = state_31104;var statearr_31116_31146 = state_31104__$1;(statearr_31116_31146[(2)] = inst_31075);
(statearr_31116_31146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (5)))
{var inst_31069 = (state_31104[(7)]);var inst_31075 = (state_31104[(8)]);var inst_31072 = cljs.core.nth.call(null,inst_31069,(0),null);var inst_31073 = cljs.core.nth.call(null,inst_31069,(1),null);var inst_31075__$1 = om.core.get_props.call(null,self__.owner);var inst_31076 = cljs.core.seq_QMARK_.call(null,inst_31075__$1);var state_31104__$1 = (function (){var statearr_31117 = state_31104;(statearr_31117[(9)] = inst_31072);
(statearr_31117[(10)] = inst_31073);
(statearr_31117[(8)] = inst_31075__$1);
return statearr_31117;
})();if(inst_31076)
{var statearr_31118_31147 = state_31104__$1;(statearr_31118_31147[(1)] = (8));
} else
{var statearr_31119_31148 = state_31104__$1;(statearr_31119_31148[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (10)))
{var inst_31073 = (state_31104[(10)]);var inst_31081 = (state_31104[(2)]);var inst_31082 = cljs.core.get.call(null,inst_31081,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31083 = cljs.core.get.call(null,inst_31081,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31084 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31085 = ["TAG-FILTER-RQ",self__.id,inst_31073];var inst_31086 = (new cljs.core.PersistentVector(null,3,(5),inst_31084,inst_31085,null));var inst_31087 = cljs.core.clj__GT_js.call(null,inst_31086);var inst_31088 = console.log(inst_31087);var inst_31089 = cljs.core.deref.call(null,inst_31082);var inst_31090 = cljs.core.deref.call(null,inst_31083);var inst_31091 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31089,inst_31090,inst_31073);var inst_31092 = om.core.update_BANG_.call(null,inst_31082,inst_31091);var state_31104__$1 = (function (){var statearr_31120 = state_31104;(statearr_31120[(11)] = inst_31092);
(statearr_31120[(12)] = inst_31088);
return statearr_31120;
})();var statearr_31121_31149 = state_31104__$1;(statearr_31121_31149[(2)] = true);
(statearr_31121_31149[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31105 === (8)))
{var inst_31075 = (state_31104[(8)]);var inst_31078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31075);var state_31104__$1 = state_31104;var statearr_31122_31150 = state_31104__$1;(statearr_31122_31150[(2)] = inst_31078);
(statearr_31122_31150[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31126 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31126[(0)] = state_machine__9111__auto__);
(statearr_31126[(1)] = (1));
return statearr_31126;
});
var state_machine__9111__auto____1 = (function (state_31104){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31104);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31127){if((e31127 instanceof Object))
{var ex__9114__auto__ = e31127;var statearr_31128_31151 = state_31104;(statearr_31128_31151[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31127;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31152 = state_31104;
state_31104 = G__31152;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31104){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
})();var state__9127__auto__ = (function (){var statearr_31129 = f__9126__auto__.call(null);(statearr_31129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
clustermap.components.filters.tag_filter.t31064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (_31066){var self__ = this;
var _31066__$1 = this;return self__.meta31065;
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
clustermap.components.filters.tag_filter.t31064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function (_31066,meta31065__$1){var self__ = this;
var _31066__$1 = this;return (new clustermap.components.filters.tag_filter.t31064(self__.component_spec,self__.G__30997,self__.component_filter_rq_chan,self__.map30992,self__.output_schema30993,self__.owner,self__.data,self__.input_checker30995,self__.input_schema30994,self__.filter_spec,self__.map30991,self__.validate__6034__auto__,self__.output_checker30996,self__.id,self__.constructor30989,self__.ufv__,meta31065__$1));
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
clustermap.components.filters.tag_filter.__GT_t31064 = ((function (owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996){
return (function __GT_t31064(component_spec__$1,G__30997__$1,component_filter_rq_chan__$1,map30992__$1,output_schema30993__$1,owner__$1,data__$1,input_checker30995__$1,input_schema30994__$1,filter_spec__$1,map30991__$1,validate__6034__auto____$1,output_checker30996__$1,id__$1,constructor30989__$1,ufv____$1,meta31065){return (new clustermap.components.filters.tag_filter.t31064(component_spec__$1,G__30997__$1,component_filter_rq_chan__$1,map30992__$1,output_schema30993__$1,owner__$1,data__$1,input_checker30995__$1,input_schema30994__$1,filter_spec__$1,map30991__$1,validate__6034__auto____$1,output_checker30996__$1,id__$1,constructor30989__$1,ufv____$1,meta31065));
});})(owner,component_filter_rq_chan,map30992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
;
}
return (new clustermap.components.filters.tag_filter.t31064(component_spec,G__30997,component_filter_rq_chan,map30992,output_schema30993,owner,data,input_checker30995,input_schema30994,filter_spec,map30991,validate__6034__auto__,output_checker30996,id,constructor30989,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31153 = output_checker30996.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31153))
{var error__6036__auto___31154 = temp__4126__auto___31153;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30989","constructor30989",-171973828,null),cljs.core.pr_str.call(null,error__6036__auto___31154)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31154,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30993,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30993,input_schema30994,input_checker30995,output_checker30996))
,schema.core.make_fn_schema.call(null,output_schema30993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30994], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31133){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30988,p__31130){var vec__31132 = p__31130;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31132,(0),null);return component_fnk__7881__auto___31133.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30988,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30988,var_args){
var p__31130 = null;if (arguments.length > 2) {
  p__31130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30988,p__31130);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31155){
var data__7882__auto__ = cljs.core.first(arglist__31155);
arglist__31155 = cljs.core.next(arglist__31155);
var owner30988 = cljs.core.first(arglist__31155);
var p__31130 = cljs.core.rest(arglist__31155);
return tag_filter_component__delegate(data__7882__auto__,owner30988,p__31130);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31133))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30990){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30990);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30990){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
