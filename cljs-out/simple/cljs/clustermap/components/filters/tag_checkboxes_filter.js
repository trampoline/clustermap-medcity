// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.tag_checkboxes_filter');
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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30467(s__30468){return (new cljs.core.LazySeq(null,(function (){var s__30468__$1 = s__30468;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30468__$1);if(temp__4126__auto__)
{var s__30468__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30468__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30468__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30470 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30469 = (0);while(true){
if((i__30469 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30469);cljs.core.chunk_append.call(null,b__30470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30471 = (i__30469 + (1));
i__30469 = G__30471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30470),iter__30467.call(null,cljs.core.chunk_rest.call(null,s__30468__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30470),null);
}
} else
{var t = cljs.core.first.call(null,s__30468__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30467.call(null,cljs.core.rest.call(null,s__30468__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,tags);
})());
});
/**
* given a single option filter, extract the option id this represents
*/
clustermap.components.filters.tag_checkboxes_filter.extract_tag_value_from_filter = (function extract_tag_value_from_filter(f){return cljs.core.get_in.call(null,f,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));
});
/**
* given a combined option filter, extract the option ids this represents
*/
clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters = (function extract_tag_values_from_filters(components,id){var fs = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"should","should",2086636648)], null));return cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,clustermap.components.filters.tag_checkboxes_filter.extract_tag_value_from_filter,fs)));
});
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30472_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30472_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30473,value){var map__30475 = p__30473;var map__30475__$1 = ((cljs.core.seq_QMARK_.call(null,map__30475))?cljs.core.apply.call(null,cljs.core.hash_map,map__30475):map__30475);var component_spec = map__30475__$1;var tags = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_checkboxes_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30476_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30476_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30478,values){var map__30480 = p__30478;var map__30480__$1 = ((cljs.core.seq_QMARK_.call(null,map__30480))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);var component_spec = map__30480__$1;var sorted = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30480,map__30480__$1,component_spec,sorted,tags,label){
return (function (p1__30477_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30477_SHARP_));
});})(values__$1,map__30480,map__30480__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30481,values){var map__30483 = p__30481;var map__30483__$1 = ((cljs.core.seq_QMARK_.call(null,map__30483))?cljs.core.apply.call(null,cljs.core.hash_map,map__30483):map__30483);var component_spec = map__30483__$1;var tags = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30484){var map__30486 = p__30484;var map__30486__$1 = ((cljs.core.seq_QMARK_.call(null,map__30486))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);var component_spec = map__30486__$1;var tags = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30487){var map__30489 = p__30487;var map__30489__$1 = ((cljs.core.seq_QMARK_.call(null,map__30489))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);var component_spec = map__30489__$1;var tags = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30491 = schema.core.Any;var input_schema30492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30490","map30490",-1353669694,null))], null);var input_checker30493 = schema.core.checker.call(null,input_schema30492);var output_checker30494 = schema.core.checker.call(null,output_schema30491);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function render_STAR_(G__30495){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30495], null);var temp__4126__auto___30531 = input_checker30493.call(null,args__6035__auto___30530);if(cljs.core.truth_(temp__4126__auto___30531))
{var error__6036__auto___30532 = temp__4126__auto___30531;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30532)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30532,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30530,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30492,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30490 = G__30495;while(true){
if(cljs.core.map_QMARK_.call(null,map30490))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30490)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30490,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30490,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30513 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30513))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30513)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30513))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function iter__30514(s__30515){return (new cljs.core.LazySeq(null,((function (attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (){var s__30515__$1 = s__30515;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30515__$1);if(temp__4126__auto__)
{var s__30515__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30515__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30515__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30517 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30516 = (0);while(true){
if((i__30516 < size__4376__auto__))
{var map__30520 = cljs.core._nth.call(null,c__4375__auto__,i__30516);var map__30520__$1 = ((cljs.core.seq_QMARK_.call(null,map__30520))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);var label__$1 = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30517,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30516,map__30520,map__30520__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30517,s__30515__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30516,map__30520,map__30520__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30517,s__30515__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30533 = (i__30516 + (1));
i__30516 = G__30533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30517),iter__30514.call(null,cljs.core.chunk_rest.call(null,s__30515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30517),null);
}
} else
{var map__30521 = cljs.core.first.call(null,s__30515__$2);var map__30521__$1 = ((cljs.core.seq_QMARK_.call(null,map__30521))?cljs.core.apply.call(null,cljs.core.hash_map,map__30521):map__30521);var label__$1 = cljs.core.get.call(null,map__30521__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30521__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30521,map__30521__$1,label__$1,value,s__30515__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30521,map__30521__$1,label__$1,value,s__30515__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30514.call(null,cljs.core.rest.call(null,s__30515__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
,null,null));
});})(attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30513),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function iter__30522(s__30523){return (new cljs.core.LazySeq(null,((function (attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (){var s__30523__$1 = s__30523;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30523__$1);if(temp__4126__auto__)
{var s__30523__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30523__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30523__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30525 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30524 = (0);while(true){
if((i__30524 < size__4376__auto__))
{var map__30528 = cljs.core._nth.call(null,c__4375__auto__,i__30524);var map__30528__$1 = ((cljs.core.seq_QMARK_.call(null,map__30528))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);var label__$1 = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30525,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30524,map__30528,map__30528__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30525,s__30523__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30524,map__30528,map__30528__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30525,s__30523__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30534 = (i__30524 + (1));
i__30524 = G__30534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30525),iter__30522.call(null,cljs.core.chunk_rest.call(null,s__30523__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30525),null);
}
} else
{var map__30529 = cljs.core.first.call(null,s__30523__$2);var map__30529__$1 = ((cljs.core.seq_QMARK_.call(null,map__30529))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);var label__$1 = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30529,map__30529__$1,label__$1,value,s__30523__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30529,map__30529__$1,label__$1,value,s__30523__$2,temp__4126__auto__,attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30522.call(null,cljs.core.rest.call(null,s__30523__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
,null,null));
});})(attrs30513,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30535 = output_checker30494.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30535))
{var error__6036__auto___30536 = temp__4126__auto___30535;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30536,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30491,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30491,input_schema30492,input_checker30493,output_checker30494))
,schema.core.make_fn_schema.call(null,output_schema30491,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30492], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30682 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30542 = schema.core.Any;var input_schema30543 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30540","map30540",1424135121,null))], null);var input_checker30544 = schema.core.checker.call(null,input_schema30543);var output_checker30545 = schema.core.checker.call(null,output_schema30542);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function constructor30538(G__30546){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30546], null);var temp__4126__auto___30684 = input_checker30544.call(null,args__6035__auto___30683);if(cljs.core.truth_(temp__4126__auto___30684))
{var error__6036__auto___30685 = temp__4126__auto___30684;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30538","constructor30538",339573247,null),cljs.core.pr_str.call(null,error__6036__auto___30685)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30685,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30683,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30543,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30540 = G__30546;while(true){
if(cljs.core.map_QMARK_.call(null,map30540))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30540)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30540,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30541 = plumbing.fnk.schema.safe_get.call(null,map30540,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30541,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30540,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30613 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30613 = (function (component_spec,component_filter_rq_chan,output_schema30542,owner,input_schema30543,data,G__30546,output_checker30545,filter_spec,map30540,input_checker30544,validate__6034__auto__,id,ufv__,map30541,constructor30538,meta30614){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema30542 = output_schema30542;
this.owner = owner;
this.input_schema30543 = input_schema30543;
this.data = data;
this.G__30546 = G__30546;
this.output_checker30545 = output_checker30545;
this.filter_spec = filter_spec;
this.map30540 = map30540;
this.input_checker30544 = input_checker30544;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.map30541 = map30541;
this.constructor30538 = constructor30538;
this.meta30614 = meta30614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30613.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30613.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30613";
clustermap.components.filters.tag_checkboxes_filter.t30613.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30613");
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (state_30653){var state_val_30654 = (state_30653[(1)]);if((state_val_30654 === (7)))
{var inst_30644 = (state_30653[(2)]);var state_30653__$1 = state_30653;if(cljs.core.truth_(inst_30644))
{var statearr_30655_30686 = state_30653__$1;(statearr_30655_30686[(1)] = (11));
} else
{var statearr_30656_30687 = state_30653__$1;(statearr_30656_30687[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (1)))
{var state_30653__$1 = state_30653;var statearr_30657_30688 = state_30653__$1;(statearr_30657_30688[(2)] = null);
(statearr_30657_30688[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (4)))
{var inst_30618 = (state_30653[(7)]);var inst_30618__$1 = (state_30653[(2)]);var state_30653__$1 = (function (){var statearr_30658 = state_30653;(statearr_30658[(7)] = inst_30618__$1);
return statearr_30658;
})();if(cljs.core.truth_(inst_30618__$1))
{var statearr_30659_30689 = state_30653__$1;(statearr_30659_30689[(1)] = (5));
} else
{var statearr_30660_30690 = state_30653__$1;(statearr_30660_30690[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (13)))
{var inst_30649 = (state_30653[(2)]);var state_30653__$1 = state_30653;var statearr_30661_30691 = state_30653__$1;(statearr_30661_30691[(2)] = inst_30649);
(statearr_30661_30691[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (6)))
{var state_30653__$1 = state_30653;var statearr_30662_30692 = state_30653__$1;(statearr_30662_30692[(2)] = null);
(statearr_30662_30692[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (3)))
{var inst_30651 = (state_30653[(2)]);var state_30653__$1 = state_30653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30653__$1,inst_30651);
} else
{if((state_val_30654 === (12)))
{var state_30653__$1 = state_30653;var statearr_30663_30693 = state_30653__$1;(statearr_30663_30693[(2)] = null);
(statearr_30663_30693[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (2)))
{var state_30653__$1 = state_30653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30653__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30654 === (11)))
{var state_30653__$1 = state_30653;var statearr_30664_30694 = state_30653__$1;(statearr_30664_30694[(2)] = null);
(statearr_30664_30694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (9)))
{var inst_30624 = (state_30653[(8)]);var state_30653__$1 = state_30653;var statearr_30665_30695 = state_30653__$1;(statearr_30665_30695[(2)] = inst_30624);
(statearr_30665_30695[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (5)))
{var inst_30624 = (state_30653[(8)]);var inst_30618 = (state_30653[(7)]);var inst_30621 = cljs.core.nth.call(null,inst_30618,(0),null);var inst_30622 = cljs.core.nth.call(null,inst_30618,(1),null);var inst_30624__$1 = om.core.get_props.call(null,self__.owner);var inst_30625 = cljs.core.seq_QMARK_.call(null,inst_30624__$1);var state_30653__$1 = (function (){var statearr_30666 = state_30653;(statearr_30666[(9)] = inst_30621);
(statearr_30666[(10)] = inst_30622);
(statearr_30666[(8)] = inst_30624__$1);
return statearr_30666;
})();if(inst_30625)
{var statearr_30667_30696 = state_30653__$1;(statearr_30667_30696[(1)] = (8));
} else
{var statearr_30668_30697 = state_30653__$1;(statearr_30668_30697[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (10)))
{var inst_30622 = (state_30653[(10)]);var inst_30630 = (state_30653[(2)]);var inst_30631 = cljs.core.get.call(null,inst_30630,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30632 = cljs.core.get.call(null,inst_30630,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30633 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30634 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30622];var inst_30635 = (new cljs.core.PersistentVector(null,3,(5),inst_30633,inst_30634,null));var inst_30636 = cljs.core.clj__GT_js.call(null,inst_30635);var inst_30637 = console.log(inst_30636);var inst_30638 = cljs.core.deref.call(null,inst_30631);var inst_30639 = cljs.core.deref.call(null,inst_30632);var inst_30640 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30638,inst_30639,inst_30622);var inst_30641 = om.core.update_BANG_.call(null,inst_30631,inst_30640);var state_30653__$1 = (function (){var statearr_30669 = state_30653;(statearr_30669[(11)] = inst_30637);
(statearr_30669[(12)] = inst_30641);
return statearr_30669;
})();var statearr_30670_30698 = state_30653__$1;(statearr_30670_30698[(2)] = true);
(statearr_30670_30698[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30654 === (8)))
{var inst_30624 = (state_30653[(8)]);var inst_30627 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30624);var state_30653__$1 = state_30653;var statearr_30671_30699 = state_30653__$1;(statearr_30671_30699[(2)] = inst_30627);
(statearr_30671_30699[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30675 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30675[(0)] = state_machine__9111__auto__);
(statearr_30675[(1)] = (1));
return statearr_30675;
});
var state_machine__9111__auto____1 = (function (state_30653){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30653);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30676){if((e30676 instanceof Object))
{var ex__9114__auto__ = e30676;var statearr_30677_30700 = state_30653;(statearr_30677_30700[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30676;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30701 = state_30653;
state_30653 = G__30701;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30653){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
})();var state__9127__auto__ = (function (){var statearr_30678 = f__9126__auto__.call(null);(statearr_30678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (_30615){var self__ = this;
var _30615__$1 = this;return self__.meta30614;
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
clustermap.components.filters.tag_checkboxes_filter.t30613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function (_30615,meta30614__$1){var self__ = this;
var _30615__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30613(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema30542,self__.owner,self__.input_schema30543,self__.data,self__.G__30546,self__.output_checker30545,self__.filter_spec,self__.map30540,self__.input_checker30544,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.map30541,self__.constructor30538,meta30614__$1));
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30613 = ((function (owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545){
return (function __GT_t30613(component_spec__$1,component_filter_rq_chan__$1,output_schema30542__$1,owner__$1,input_schema30543__$1,data__$1,G__30546__$1,output_checker30545__$1,filter_spec__$1,map30540__$1,input_checker30544__$1,validate__6034__auto____$1,id__$1,ufv____$1,map30541__$1,constructor30538__$1,meta30614){return (new clustermap.components.filters.tag_checkboxes_filter.t30613(component_spec__$1,component_filter_rq_chan__$1,output_schema30542__$1,owner__$1,input_schema30543__$1,data__$1,G__30546__$1,output_checker30545__$1,filter_spec__$1,map30540__$1,input_checker30544__$1,validate__6034__auto____$1,id__$1,ufv____$1,map30541__$1,constructor30538__$1,meta30614));
});})(owner,component_filter_rq_chan,map30541,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30613(component_spec,component_filter_rq_chan,output_schema30542,owner,input_schema30543,data,G__30546,output_checker30545,filter_spec,map30540,input_checker30544,validate__6034__auto__,id,ufv__,map30541,constructor30538,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30702 = output_checker30545.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30702))
{var error__6036__auto___30703 = temp__4126__auto___30702;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30538","constructor30538",339573247,null),cljs.core.pr_str.call(null,error__6036__auto___30703)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30703,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30542,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30542,input_schema30543,input_checker30544,output_checker30545))
,schema.core.make_fn_schema.call(null,output_schema30542,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30543], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30682){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30537,p__30679){var vec__30681 = p__30679;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30681,(0),null);return component_fnk__7881__auto___30682.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30537,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30537,var_args){
var p__30679 = null;if (arguments.length > 2) {
  p__30679 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30537,p__30679);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30704){
var data__7882__auto__ = cljs.core.first(arglist__30704);
arglist__30704 = cljs.core.next(arglist__30704);
var owner30537 = cljs.core.first(arglist__30704);
var p__30679 = cljs.core.rest(arglist__30704);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30537,p__30679);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30682))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30539){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30539);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30539){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
