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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30470(s__30471){return (new cljs.core.LazySeq(null,(function (){var s__30471__$1 = s__30471;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30471__$1);if(temp__4126__auto__)
{var s__30471__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30471__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30471__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30473 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30472 = (0);while(true){
if((i__30472 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30472);cljs.core.chunk_append.call(null,b__30473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30474 = (i__30472 + (1));
i__30472 = G__30474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30473),iter__30470.call(null,cljs.core.chunk_rest.call(null,s__30471__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30473),null);
}
} else
{var t = cljs.core.first.call(null,s__30471__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30470.call(null,cljs.core.rest.call(null,s__30471__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30475_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30475_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30476,value){var map__30478 = p__30476;var map__30478__$1 = ((cljs.core.seq_QMARK_.call(null,map__30478))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);var component_spec = map__30478__$1;var tags = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30479_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30479_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30481,values){var map__30483 = p__30481;var map__30483__$1 = ((cljs.core.seq_QMARK_.call(null,map__30483))?cljs.core.apply.call(null,cljs.core.hash_map,map__30483):map__30483);var component_spec = map__30483__$1;var sorted = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30483,map__30483__$1,component_spec,sorted,tags,label){
return (function (p1__30480_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30480_SHARP_));
});})(values__$1,map__30483,map__30483__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30484,values){var map__30486 = p__30484;var map__30486__$1 = ((cljs.core.seq_QMARK_.call(null,map__30486))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);var component_spec = map__30486__$1;var tags = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30487){var map__30489 = p__30487;var map__30489__$1 = ((cljs.core.seq_QMARK_.call(null,map__30489))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);var component_spec = map__30489__$1;var tags = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30490){var map__30492 = p__30490;var map__30492__$1 = ((cljs.core.seq_QMARK_.call(null,map__30492))?cljs.core.apply.call(null,cljs.core.hash_map,map__30492):map__30492);var component_spec = map__30492__$1;var tags = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30494 = schema.core.Any;var input_schema30495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30493","map30493",692196307,null))], null);var input_checker30496 = schema.core.checker.call(null,input_schema30495);var output_checker30497 = schema.core.checker.call(null,output_schema30494);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function render_STAR_(G__30498){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30498], null);var temp__4126__auto___30534 = input_checker30496.call(null,args__6035__auto___30533);if(cljs.core.truth_(temp__4126__auto___30534))
{var error__6036__auto___30535 = temp__4126__auto___30534;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30535)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30535,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30533,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30495,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30493 = G__30498;while(true){
if(cljs.core.map_QMARK_.call(null,map30493))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30493)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30493,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30493,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30516 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30516))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30516)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30516))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function iter__30517(s__30518){return (new cljs.core.LazySeq(null,((function (attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (){var s__30518__$1 = s__30518;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30518__$1);if(temp__4126__auto__)
{var s__30518__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30518__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30518__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30520 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30519 = (0);while(true){
if((i__30519 < size__4376__auto__))
{var map__30523 = cljs.core._nth.call(null,c__4375__auto__,i__30519);var map__30523__$1 = ((cljs.core.seq_QMARK_.call(null,map__30523))?cljs.core.apply.call(null,cljs.core.hash_map,map__30523):map__30523);var label__$1 = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30520,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30519,map__30523,map__30523__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30520,s__30518__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30519,map__30523,map__30523__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30520,s__30518__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30536 = (i__30519 + (1));
i__30519 = G__30536;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30520),iter__30517.call(null,cljs.core.chunk_rest.call(null,s__30518__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30520),null);
}
} else
{var map__30524 = cljs.core.first.call(null,s__30518__$2);var map__30524__$1 = ((cljs.core.seq_QMARK_.call(null,map__30524))?cljs.core.apply.call(null,cljs.core.hash_map,map__30524):map__30524);var label__$1 = cljs.core.get.call(null,map__30524__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30524__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30524,map__30524__$1,label__$1,value,s__30518__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30524,map__30524__$1,label__$1,value,s__30518__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30517.call(null,cljs.core.rest.call(null,s__30518__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
,null,null));
});})(attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30516),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function iter__30525(s__30526){return (new cljs.core.LazySeq(null,((function (attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (){var s__30526__$1 = s__30526;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30526__$1);if(temp__4126__auto__)
{var s__30526__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30526__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30526__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30528 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30527 = (0);while(true){
if((i__30527 < size__4376__auto__))
{var map__30531 = cljs.core._nth.call(null,c__4375__auto__,i__30527);var map__30531__$1 = ((cljs.core.seq_QMARK_.call(null,map__30531))?cljs.core.apply.call(null,cljs.core.hash_map,map__30531):map__30531);var label__$1 = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30528,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30527,map__30531,map__30531__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30528,s__30526__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30527,map__30531,map__30531__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30528,s__30526__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30537 = (i__30527 + (1));
i__30527 = G__30537;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30528),iter__30525.call(null,cljs.core.chunk_rest.call(null,s__30526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30528),null);
}
} else
{var map__30532 = cljs.core.first.call(null,s__30526__$2);var map__30532__$1 = ((cljs.core.seq_QMARK_.call(null,map__30532))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532):map__30532);var label__$1 = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30532,map__30532__$1,label__$1,value,s__30526__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30532,map__30532__$1,label__$1,value,s__30526__$2,temp__4126__auto__,attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30525.call(null,cljs.core.rest.call(null,s__30526__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
,null,null));
});})(attrs30516,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30538 = output_checker30497.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30538))
{var error__6036__auto___30539 = temp__4126__auto___30538;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30539,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30494,input_schema30495,input_checker30496,output_checker30497))
,schema.core.make_fn_schema.call(null,output_schema30494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30495], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30685 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30545 = schema.core.Any;var input_schema30546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30543","map30543",-35187628,null))], null);var input_checker30547 = schema.core.checker.call(null,input_schema30546);var output_checker30548 = schema.core.checker.call(null,output_schema30545);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function constructor30541(G__30549){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30549], null);var temp__4126__auto___30687 = input_checker30547.call(null,args__6035__auto___30686);if(cljs.core.truth_(temp__4126__auto___30687))
{var error__6036__auto___30688 = temp__4126__auto___30687;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30541","constructor30541",-732924345,null),cljs.core.pr_str.call(null,error__6036__auto___30688)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30688,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30686,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30546,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30543 = G__30549;while(true){
if(cljs.core.map_QMARK_.call(null,map30543))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30543)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30543,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30544 = plumbing.fnk.schema.safe_get.call(null,map30543,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30544,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30543,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30616 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30616 = (function (component_spec,component_filter_rq_chan,owner,data,constructor30541,filter_spec,G__30549,map30544,input_schema30546,map30543,output_schema30545,input_checker30547,validate__6034__auto__,output_checker30548,id,ufv__,meta30617){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.constructor30541 = constructor30541;
this.filter_spec = filter_spec;
this.G__30549 = G__30549;
this.map30544 = map30544;
this.input_schema30546 = input_schema30546;
this.map30543 = map30543;
this.output_schema30545 = output_schema30545;
this.input_checker30547 = input_checker30547;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30548 = output_checker30548;
this.id = id;
this.ufv__ = ufv__;
this.meta30617 = meta30617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30616.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30616.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30616";
clustermap.components.filters.tag_checkboxes_filter.t30616.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30616");
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (state_30656){var state_val_30657 = (state_30656[(1)]);if((state_val_30657 === (7)))
{var inst_30647 = (state_30656[(2)]);var state_30656__$1 = state_30656;if(cljs.core.truth_(inst_30647))
{var statearr_30658_30689 = state_30656__$1;(statearr_30658_30689[(1)] = (11));
} else
{var statearr_30659_30690 = state_30656__$1;(statearr_30659_30690[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (1)))
{var state_30656__$1 = state_30656;var statearr_30660_30691 = state_30656__$1;(statearr_30660_30691[(2)] = null);
(statearr_30660_30691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (4)))
{var inst_30621 = (state_30656[(7)]);var inst_30621__$1 = (state_30656[(2)]);var state_30656__$1 = (function (){var statearr_30661 = state_30656;(statearr_30661[(7)] = inst_30621__$1);
return statearr_30661;
})();if(cljs.core.truth_(inst_30621__$1))
{var statearr_30662_30692 = state_30656__$1;(statearr_30662_30692[(1)] = (5));
} else
{var statearr_30663_30693 = state_30656__$1;(statearr_30663_30693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (13)))
{var inst_30652 = (state_30656[(2)]);var state_30656__$1 = state_30656;var statearr_30664_30694 = state_30656__$1;(statearr_30664_30694[(2)] = inst_30652);
(statearr_30664_30694[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (6)))
{var state_30656__$1 = state_30656;var statearr_30665_30695 = state_30656__$1;(statearr_30665_30695[(2)] = null);
(statearr_30665_30695[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (3)))
{var inst_30654 = (state_30656[(2)]);var state_30656__$1 = state_30656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30656__$1,inst_30654);
} else
{if((state_val_30657 === (12)))
{var state_30656__$1 = state_30656;var statearr_30666_30696 = state_30656__$1;(statearr_30666_30696[(2)] = null);
(statearr_30666_30696[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (2)))
{var state_30656__$1 = state_30656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30656__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30657 === (11)))
{var state_30656__$1 = state_30656;var statearr_30667_30697 = state_30656__$1;(statearr_30667_30697[(2)] = null);
(statearr_30667_30697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (9)))
{var inst_30627 = (state_30656[(8)]);var state_30656__$1 = state_30656;var statearr_30668_30698 = state_30656__$1;(statearr_30668_30698[(2)] = inst_30627);
(statearr_30668_30698[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (5)))
{var inst_30621 = (state_30656[(7)]);var inst_30627 = (state_30656[(8)]);var inst_30624 = cljs.core.nth.call(null,inst_30621,(0),null);var inst_30625 = cljs.core.nth.call(null,inst_30621,(1),null);var inst_30627__$1 = om.core.get_props.call(null,self__.owner);var inst_30628 = cljs.core.seq_QMARK_.call(null,inst_30627__$1);var state_30656__$1 = (function (){var statearr_30669 = state_30656;(statearr_30669[(9)] = inst_30625);
(statearr_30669[(10)] = inst_30624);
(statearr_30669[(8)] = inst_30627__$1);
return statearr_30669;
})();if(inst_30628)
{var statearr_30670_30699 = state_30656__$1;(statearr_30670_30699[(1)] = (8));
} else
{var statearr_30671_30700 = state_30656__$1;(statearr_30671_30700[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (10)))
{var inst_30625 = (state_30656[(9)]);var inst_30633 = (state_30656[(2)]);var inst_30634 = cljs.core.get.call(null,inst_30633,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30635 = cljs.core.get.call(null,inst_30633,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30636 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30637 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30625];var inst_30638 = (new cljs.core.PersistentVector(null,3,(5),inst_30636,inst_30637,null));var inst_30639 = cljs.core.clj__GT_js.call(null,inst_30638);var inst_30640 = console.log(inst_30639);var inst_30641 = cljs.core.deref.call(null,inst_30634);var inst_30642 = cljs.core.deref.call(null,inst_30635);var inst_30643 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30641,inst_30642,inst_30625);var inst_30644 = om.core.update_BANG_.call(null,inst_30634,inst_30643);var state_30656__$1 = (function (){var statearr_30672 = state_30656;(statearr_30672[(11)] = inst_30644);
(statearr_30672[(12)] = inst_30640);
return statearr_30672;
})();var statearr_30673_30701 = state_30656__$1;(statearr_30673_30701[(2)] = true);
(statearr_30673_30701[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30657 === (8)))
{var inst_30627 = (state_30656[(8)]);var inst_30630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30627);var state_30656__$1 = state_30656;var statearr_30674_30702 = state_30656__$1;(statearr_30674_30702[(2)] = inst_30630);
(statearr_30674_30702[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30678 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30678[(0)] = state_machine__9111__auto__);
(statearr_30678[(1)] = (1));
return statearr_30678;
});
var state_machine__9111__auto____1 = (function (state_30656){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30656);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30679){if((e30679 instanceof Object))
{var ex__9114__auto__ = e30679;var statearr_30680_30703 = state_30656;(statearr_30680_30703[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30679;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30704 = state_30656;
state_30656 = G__30704;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
})();var state__9127__auto__ = (function (){var statearr_30681 = f__9126__auto__.call(null);(statearr_30681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (_30618){var self__ = this;
var _30618__$1 = this;return self__.meta30617;
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
clustermap.components.filters.tag_checkboxes_filter.t30616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function (_30618,meta30617__$1){var self__ = this;
var _30618__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30616(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.constructor30541,self__.filter_spec,self__.G__30549,self__.map30544,self__.input_schema30546,self__.map30543,self__.output_schema30545,self__.input_checker30547,self__.validate__6034__auto__,self__.output_checker30548,self__.id,self__.ufv__,meta30617__$1));
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30616 = ((function (owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548){
return (function __GT_t30616(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30541__$1,filter_spec__$1,G__30549__$1,map30544__$1,input_schema30546__$1,map30543__$1,output_schema30545__$1,input_checker30547__$1,validate__6034__auto____$1,output_checker30548__$1,id__$1,ufv____$1,meta30617){return (new clustermap.components.filters.tag_checkboxes_filter.t30616(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30541__$1,filter_spec__$1,G__30549__$1,map30544__$1,input_schema30546__$1,map30543__$1,output_schema30545__$1,input_checker30547__$1,validate__6034__auto____$1,output_checker30548__$1,id__$1,ufv____$1,meta30617));
});})(owner,component_filter_rq_chan,map30544,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30616(component_spec,component_filter_rq_chan,owner,data,constructor30541,filter_spec,G__30549,map30544,input_schema30546,map30543,output_schema30545,input_checker30547,validate__6034__auto__,output_checker30548,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30705 = output_checker30548.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30705))
{var error__6036__auto___30706 = temp__4126__auto___30705;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30541","constructor30541",-732924345,null),cljs.core.pr_str.call(null,error__6036__auto___30706)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30706,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30545,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30545,input_schema30546,input_checker30547,output_checker30548))
,schema.core.make_fn_schema.call(null,output_schema30545,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30546], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30685){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30540,p__30682){var vec__30684 = p__30682;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30684,(0),null);return component_fnk__7881__auto___30685.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30540,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30540,var_args){
var p__30682 = null;if (arguments.length > 2) {
  p__30682 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30540,p__30682);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30707){
var data__7882__auto__ = cljs.core.first(arglist__30707);
arglist__30707 = cljs.core.next(arglist__30707);
var owner30540 = cljs.core.first(arglist__30707);
var p__30682 = cljs.core.rest(arglist__30707);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30540,p__30682);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30685))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30542){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30542);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30542){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
