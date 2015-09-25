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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30510(s__30511){return (new cljs.core.LazySeq(null,(function (){var s__30511__$1 = s__30511;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30511__$1);if(temp__4126__auto__)
{var s__30511__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30511__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30511__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30513 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30512 = (0);while(true){
if((i__30512 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30512);cljs.core.chunk_append.call(null,b__30513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30514 = (i__30512 + (1));
i__30512 = G__30514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30513),iter__30510.call(null,cljs.core.chunk_rest.call(null,s__30511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30513),null);
}
} else
{var t = cljs.core.first.call(null,s__30511__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30510.call(null,cljs.core.rest.call(null,s__30511__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30515_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30515_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30516,value){var map__30518 = p__30516;var map__30518__$1 = ((cljs.core.seq_QMARK_.call(null,map__30518))?cljs.core.apply.call(null,cljs.core.hash_map,map__30518):map__30518);var component_spec = map__30518__$1;var tags = cljs.core.get.call(null,map__30518__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30518__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30519_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30519_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30521,values){var map__30523 = p__30521;var map__30523__$1 = ((cljs.core.seq_QMARK_.call(null,map__30523))?cljs.core.apply.call(null,cljs.core.hash_map,map__30523):map__30523);var component_spec = map__30523__$1;var sorted = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30523,map__30523__$1,component_spec,sorted,tags,label){
return (function (p1__30520_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30520_SHARP_));
});})(values__$1,map__30523,map__30523__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30524,values){var map__30526 = p__30524;var map__30526__$1 = ((cljs.core.seq_QMARK_.call(null,map__30526))?cljs.core.apply.call(null,cljs.core.hash_map,map__30526):map__30526);var component_spec = map__30526__$1;var tags = cljs.core.get.call(null,map__30526__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30526__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30527){var map__30529 = p__30527;var map__30529__$1 = ((cljs.core.seq_QMARK_.call(null,map__30529))?cljs.core.apply.call(null,cljs.core.hash_map,map__30529):map__30529);var component_spec = map__30529__$1;var tags = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30529__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30530){var map__30532 = p__30530;var map__30532__$1 = ((cljs.core.seq_QMARK_.call(null,map__30532))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532):map__30532);var component_spec = map__30532__$1;var tags = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30534 = schema.core.Any;var input_schema30535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30533","map30533",1156136207,null))], null);var input_checker30536 = schema.core.checker.call(null,input_schema30535);var output_checker30537 = schema.core.checker.call(null,output_schema30534);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function render_STAR_(G__30538){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30538], null);var temp__4126__auto___30574 = input_checker30536.call(null,args__6035__auto___30573);if(cljs.core.truth_(temp__4126__auto___30574))
{var error__6036__auto___30575 = temp__4126__auto___30574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30575,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30573,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30535,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30533 = G__30538;while(true){
if(cljs.core.map_QMARK_.call(null,map30533))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30533)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30533,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30533,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30556 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30556))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30556)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30556))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function iter__30557(s__30558){return (new cljs.core.LazySeq(null,((function (attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (){var s__30558__$1 = s__30558;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30558__$1);if(temp__4126__auto__)
{var s__30558__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30558__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30558__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30560 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30559 = (0);while(true){
if((i__30559 < size__4376__auto__))
{var map__30563 = cljs.core._nth.call(null,c__4375__auto__,i__30559);var map__30563__$1 = ((cljs.core.seq_QMARK_.call(null,map__30563))?cljs.core.apply.call(null,cljs.core.hash_map,map__30563):map__30563);var label__$1 = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30560,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30559,map__30563,map__30563__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30560,s__30558__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30559,map__30563,map__30563__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30560,s__30558__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30576 = (i__30559 + (1));
i__30559 = G__30576;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30560),iter__30557.call(null,cljs.core.chunk_rest.call(null,s__30558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30560),null);
}
} else
{var map__30564 = cljs.core.first.call(null,s__30558__$2);var map__30564__$1 = ((cljs.core.seq_QMARK_.call(null,map__30564))?cljs.core.apply.call(null,cljs.core.hash_map,map__30564):map__30564);var label__$1 = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30564__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30564,map__30564__$1,label__$1,value,s__30558__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30564,map__30564__$1,label__$1,value,s__30558__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30557.call(null,cljs.core.rest.call(null,s__30558__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
,null,null));
});})(attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30556),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function iter__30565(s__30566){return (new cljs.core.LazySeq(null,((function (attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (){var s__30566__$1 = s__30566;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30566__$1);if(temp__4126__auto__)
{var s__30566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30566__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30566__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30568 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30567 = (0);while(true){
if((i__30567 < size__4376__auto__))
{var map__30571 = cljs.core._nth.call(null,c__4375__auto__,i__30567);var map__30571__$1 = ((cljs.core.seq_QMARK_.call(null,map__30571))?cljs.core.apply.call(null,cljs.core.hash_map,map__30571):map__30571);var label__$1 = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30568,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30567,map__30571,map__30571__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30568,s__30566__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30567,map__30571,map__30571__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30568,s__30566__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30577 = (i__30567 + (1));
i__30567 = G__30577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30568),iter__30565.call(null,cljs.core.chunk_rest.call(null,s__30566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30568),null);
}
} else
{var map__30572 = cljs.core.first.call(null,s__30566__$2);var map__30572__$1 = ((cljs.core.seq_QMARK_.call(null,map__30572))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);var label__$1 = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30572,map__30572__$1,label__$1,value,s__30566__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30572,map__30572__$1,label__$1,value,s__30566__$2,temp__4126__auto__,attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30565.call(null,cljs.core.rest.call(null,s__30566__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
,null,null));
});})(attrs30556,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30578 = output_checker30537.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30578))
{var error__6036__auto___30579 = temp__4126__auto___30578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30579,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30534,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30534,input_schema30535,input_checker30536,output_checker30537))
,schema.core.make_fn_schema.call(null,output_schema30534,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30535], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30725 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30585 = schema.core.Any;var input_schema30586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30583","map30583",-1837089691,null))], null);var input_checker30587 = schema.core.checker.call(null,input_schema30586);var output_checker30588 = schema.core.checker.call(null,output_schema30585);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function constructor30581(G__30589){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30589], null);var temp__4126__auto___30727 = input_checker30587.call(null,args__6035__auto___30726);if(cljs.core.truth_(temp__4126__auto___30727))
{var error__6036__auto___30728 = temp__4126__auto___30727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30581","constructor30581",1048466024,null),cljs.core.pr_str.call(null,error__6036__auto___30728)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30728,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30726,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30583 = G__30589;while(true){
if(cljs.core.map_QMARK_.call(null,map30583))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30583)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30583,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30584 = plumbing.fnk.schema.safe_get.call(null,map30583,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30584,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30583,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30656 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30656 = (function (component_spec,component_filter_rq_chan,owner,map30583,data,input_schema30586,output_checker30588,constructor30581,filter_spec,map30584,input_checker30587,validate__6034__auto__,id,G__30589,ufv__,output_schema30585,meta30657){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.map30583 = map30583;
this.data = data;
this.input_schema30586 = input_schema30586;
this.output_checker30588 = output_checker30588;
this.constructor30581 = constructor30581;
this.filter_spec = filter_spec;
this.map30584 = map30584;
this.input_checker30587 = input_checker30587;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30589 = G__30589;
this.ufv__ = ufv__;
this.output_schema30585 = output_schema30585;
this.meta30657 = meta30657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30656.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30656.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30656";
clustermap.components.filters.tag_checkboxes_filter.t30656.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30656");
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (state_30696){var state_val_30697 = (state_30696[(1)]);if((state_val_30697 === (7)))
{var inst_30687 = (state_30696[(2)]);var state_30696__$1 = state_30696;if(cljs.core.truth_(inst_30687))
{var statearr_30698_30729 = state_30696__$1;(statearr_30698_30729[(1)] = (11));
} else
{var statearr_30699_30730 = state_30696__$1;(statearr_30699_30730[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (1)))
{var state_30696__$1 = state_30696;var statearr_30700_30731 = state_30696__$1;(statearr_30700_30731[(2)] = null);
(statearr_30700_30731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (4)))
{var inst_30661 = (state_30696[(7)]);var inst_30661__$1 = (state_30696[(2)]);var state_30696__$1 = (function (){var statearr_30701 = state_30696;(statearr_30701[(7)] = inst_30661__$1);
return statearr_30701;
})();if(cljs.core.truth_(inst_30661__$1))
{var statearr_30702_30732 = state_30696__$1;(statearr_30702_30732[(1)] = (5));
} else
{var statearr_30703_30733 = state_30696__$1;(statearr_30703_30733[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (13)))
{var inst_30692 = (state_30696[(2)]);var state_30696__$1 = state_30696;var statearr_30704_30734 = state_30696__$1;(statearr_30704_30734[(2)] = inst_30692);
(statearr_30704_30734[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (6)))
{var state_30696__$1 = state_30696;var statearr_30705_30735 = state_30696__$1;(statearr_30705_30735[(2)] = null);
(statearr_30705_30735[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (3)))
{var inst_30694 = (state_30696[(2)]);var state_30696__$1 = state_30696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30696__$1,inst_30694);
} else
{if((state_val_30697 === (12)))
{var state_30696__$1 = state_30696;var statearr_30706_30736 = state_30696__$1;(statearr_30706_30736[(2)] = null);
(statearr_30706_30736[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (2)))
{var state_30696__$1 = state_30696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30696__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30697 === (11)))
{var state_30696__$1 = state_30696;var statearr_30707_30737 = state_30696__$1;(statearr_30707_30737[(2)] = null);
(statearr_30707_30737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (9)))
{var inst_30667 = (state_30696[(8)]);var state_30696__$1 = state_30696;var statearr_30708_30738 = state_30696__$1;(statearr_30708_30738[(2)] = inst_30667);
(statearr_30708_30738[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (5)))
{var inst_30661 = (state_30696[(7)]);var inst_30667 = (state_30696[(8)]);var inst_30664 = cljs.core.nth.call(null,inst_30661,(0),null);var inst_30665 = cljs.core.nth.call(null,inst_30661,(1),null);var inst_30667__$1 = om.core.get_props.call(null,self__.owner);var inst_30668 = cljs.core.seq_QMARK_.call(null,inst_30667__$1);var state_30696__$1 = (function (){var statearr_30709 = state_30696;(statearr_30709[(9)] = inst_30664);
(statearr_30709[(8)] = inst_30667__$1);
(statearr_30709[(10)] = inst_30665);
return statearr_30709;
})();if(inst_30668)
{var statearr_30710_30739 = state_30696__$1;(statearr_30710_30739[(1)] = (8));
} else
{var statearr_30711_30740 = state_30696__$1;(statearr_30711_30740[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (10)))
{var inst_30665 = (state_30696[(10)]);var inst_30673 = (state_30696[(2)]);var inst_30674 = cljs.core.get.call(null,inst_30673,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30675 = cljs.core.get.call(null,inst_30673,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30676 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30677 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30665];var inst_30678 = (new cljs.core.PersistentVector(null,3,(5),inst_30676,inst_30677,null));var inst_30679 = cljs.core.clj__GT_js.call(null,inst_30678);var inst_30680 = console.log(inst_30679);var inst_30681 = cljs.core.deref.call(null,inst_30674);var inst_30682 = cljs.core.deref.call(null,inst_30675);var inst_30683 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30681,inst_30682,inst_30665);var inst_30684 = om.core.update_BANG_.call(null,inst_30674,inst_30683);var state_30696__$1 = (function (){var statearr_30712 = state_30696;(statearr_30712[(11)] = inst_30684);
(statearr_30712[(12)] = inst_30680);
return statearr_30712;
})();var statearr_30713_30741 = state_30696__$1;(statearr_30713_30741[(2)] = true);
(statearr_30713_30741[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30697 === (8)))
{var inst_30667 = (state_30696[(8)]);var inst_30670 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30667);var state_30696__$1 = state_30696;var statearr_30714_30742 = state_30696__$1;(statearr_30714_30742[(2)] = inst_30670);
(statearr_30714_30742[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30718 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30718[(0)] = state_machine__9111__auto__);
(statearr_30718[(1)] = (1));
return statearr_30718;
});
var state_machine__9111__auto____1 = (function (state_30696){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30696);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30719){if((e30719 instanceof Object))
{var ex__9114__auto__ = e30719;var statearr_30720_30743 = state_30696;(statearr_30720_30743[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30719;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30744 = state_30696;
state_30696 = G__30744;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30696){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
})();var state__9127__auto__ = (function (){var statearr_30721 = f__9126__auto__.call(null);(statearr_30721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (_30658){var self__ = this;
var _30658__$1 = this;return self__.meta30657;
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
clustermap.components.filters.tag_checkboxes_filter.t30656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function (_30658,meta30657__$1){var self__ = this;
var _30658__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30656(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.map30583,self__.data,self__.input_schema30586,self__.output_checker30588,self__.constructor30581,self__.filter_spec,self__.map30584,self__.input_checker30587,self__.validate__6034__auto__,self__.id,self__.G__30589,self__.ufv__,self__.output_schema30585,meta30657__$1));
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30656 = ((function (owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588){
return (function __GT_t30656(component_spec__$1,component_filter_rq_chan__$1,owner__$1,map30583__$1,data__$1,input_schema30586__$1,output_checker30588__$1,constructor30581__$1,filter_spec__$1,map30584__$1,input_checker30587__$1,validate__6034__auto____$1,id__$1,G__30589__$1,ufv____$1,output_schema30585__$1,meta30657){return (new clustermap.components.filters.tag_checkboxes_filter.t30656(component_spec__$1,component_filter_rq_chan__$1,owner__$1,map30583__$1,data__$1,input_schema30586__$1,output_checker30588__$1,constructor30581__$1,filter_spec__$1,map30584__$1,input_checker30587__$1,validate__6034__auto____$1,id__$1,G__30589__$1,ufv____$1,output_schema30585__$1,meta30657));
});})(owner,component_filter_rq_chan,map30584,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30656(component_spec,component_filter_rq_chan,owner,map30583,data,input_schema30586,output_checker30588,constructor30581,filter_spec,map30584,input_checker30587,validate__6034__auto__,id,G__30589,ufv__,output_schema30585,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30745 = output_checker30588.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30745))
{var error__6036__auto___30746 = temp__4126__auto___30745;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30581","constructor30581",1048466024,null),cljs.core.pr_str.call(null,error__6036__auto___30746)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30746,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30585,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30585,input_schema30586,input_checker30587,output_checker30588))
,schema.core.make_fn_schema.call(null,output_schema30585,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30586], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30725){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30580,p__30722){var vec__30724 = p__30722;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30724,(0),null);return component_fnk__7881__auto___30725.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30580,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30580,var_args){
var p__30722 = null;if (arguments.length > 2) {
  p__30722 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30580,p__30722);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30747){
var data__7882__auto__ = cljs.core.first(arglist__30747);
arglist__30747 = cljs.core.next(arglist__30747);
var owner30580 = cljs.core.first(arglist__30747);
var p__30722 = cljs.core.rest(arglist__30747);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30580,p__30722);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30725))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30582){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30582);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30582){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
