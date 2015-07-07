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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30501(s__30502){return (new cljs.core.LazySeq(null,(function (){var s__30502__$1 = s__30502;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30502__$1);if(temp__4126__auto__)
{var s__30502__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30502__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30502__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30504 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30503 = (0);while(true){
if((i__30503 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30503);cljs.core.chunk_append.call(null,b__30504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30505 = (i__30503 + (1));
i__30503 = G__30505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30504),iter__30501.call(null,cljs.core.chunk_rest.call(null,s__30502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30504),null);
}
} else
{var t = cljs.core.first.call(null,s__30502__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30501.call(null,cljs.core.rest.call(null,s__30502__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30506_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30506_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30507,value){var map__30509 = p__30507;var map__30509__$1 = ((cljs.core.seq_QMARK_.call(null,map__30509))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);var component_spec = map__30509__$1;var tags = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30510_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30510_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30512,values){var map__30514 = p__30512;var map__30514__$1 = ((cljs.core.seq_QMARK_.call(null,map__30514))?cljs.core.apply.call(null,cljs.core.hash_map,map__30514):map__30514);var component_spec = map__30514__$1;var sorted = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30514__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30514,map__30514__$1,component_spec,sorted,tags,label){
return (function (p1__30511_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30511_SHARP_));
});})(values__$1,map__30514,map__30514__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30515,values){var map__30517 = p__30515;var map__30517__$1 = ((cljs.core.seq_QMARK_.call(null,map__30517))?cljs.core.apply.call(null,cljs.core.hash_map,map__30517):map__30517);var component_spec = map__30517__$1;var tags = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30518){var map__30520 = p__30518;var map__30520__$1 = ((cljs.core.seq_QMARK_.call(null,map__30520))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);var component_spec = map__30520__$1;var tags = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30521){var map__30523 = p__30521;var map__30523__$1 = ((cljs.core.seq_QMARK_.call(null,map__30523))?cljs.core.apply.call(null,cljs.core.hash_map,map__30523):map__30523);var component_spec = map__30523__$1;var tags = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30523__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30525 = schema.core.Any;var input_schema30526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30524","map30524",1611374749,null))], null);var input_checker30527 = schema.core.checker.call(null,input_schema30526);var output_checker30528 = schema.core.checker.call(null,output_schema30525);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function render_STAR_(G__30529){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30529], null);var temp__4126__auto___30565 = input_checker30527.call(null,args__6035__auto___30564);if(cljs.core.truth_(temp__4126__auto___30565))
{var error__6036__auto___30566 = temp__4126__auto___30565;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30566)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30566,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30564,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30526,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30524 = G__30529;while(true){
if(cljs.core.map_QMARK_.call(null,map30524))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30524)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30524,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30524,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30547 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30547))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30547)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30547))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function iter__30548(s__30549){return (new cljs.core.LazySeq(null,((function (attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (){var s__30549__$1 = s__30549;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30549__$1);if(temp__4126__auto__)
{var s__30549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30549__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30549__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30551 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30550 = (0);while(true){
if((i__30550 < size__4376__auto__))
{var map__30554 = cljs.core._nth.call(null,c__4375__auto__,i__30550);var map__30554__$1 = ((cljs.core.seq_QMARK_.call(null,map__30554))?cljs.core.apply.call(null,cljs.core.hash_map,map__30554):map__30554);var label__$1 = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30551,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30550,map__30554,map__30554__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30551,s__30549__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30550,map__30554,map__30554__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30551,s__30549__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30567 = (i__30550 + (1));
i__30550 = G__30567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30551),iter__30548.call(null,cljs.core.chunk_rest.call(null,s__30549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30551),null);
}
} else
{var map__30555 = cljs.core.first.call(null,s__30549__$2);var map__30555__$1 = ((cljs.core.seq_QMARK_.call(null,map__30555))?cljs.core.apply.call(null,cljs.core.hash_map,map__30555):map__30555);var label__$1 = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30555,map__30555__$1,label__$1,value,s__30549__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30555,map__30555__$1,label__$1,value,s__30549__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30548.call(null,cljs.core.rest.call(null,s__30549__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
,null,null));
});})(attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30547),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function iter__30556(s__30557){return (new cljs.core.LazySeq(null,((function (attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (){var s__30557__$1 = s__30557;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30557__$1);if(temp__4126__auto__)
{var s__30557__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30557__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30557__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30559 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30558 = (0);while(true){
if((i__30558 < size__4376__auto__))
{var map__30562 = cljs.core._nth.call(null,c__4375__auto__,i__30558);var map__30562__$1 = ((cljs.core.seq_QMARK_.call(null,map__30562))?cljs.core.apply.call(null,cljs.core.hash_map,map__30562):map__30562);var label__$1 = cljs.core.get.call(null,map__30562__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30562__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30559,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30558,map__30562,map__30562__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30559,s__30557__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30558,map__30562,map__30562__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30559,s__30557__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30568 = (i__30558 + (1));
i__30558 = G__30568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30559),iter__30556.call(null,cljs.core.chunk_rest.call(null,s__30557__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30559),null);
}
} else
{var map__30563 = cljs.core.first.call(null,s__30557__$2);var map__30563__$1 = ((cljs.core.seq_QMARK_.call(null,map__30563))?cljs.core.apply.call(null,cljs.core.hash_map,map__30563):map__30563);var label__$1 = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30563__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30563,map__30563__$1,label__$1,value,s__30557__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30563,map__30563__$1,label__$1,value,s__30557__$2,temp__4126__auto__,attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30556.call(null,cljs.core.rest.call(null,s__30557__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
,null,null));
});})(attrs30547,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30569 = output_checker30528.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30569))
{var error__6036__auto___30570 = temp__4126__auto___30569;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30570)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30570,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30525,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30525,input_schema30526,input_checker30527,output_checker30528))
,schema.core.make_fn_schema.call(null,output_schema30525,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30526], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30716 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30576 = schema.core.Any;var input_schema30577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30574","map30574",-522014920,null))], null);var input_checker30578 = schema.core.checker.call(null,input_schema30577);var output_checker30579 = schema.core.checker.call(null,output_schema30576);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function constructor30572(G__30580){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30580], null);var temp__4126__auto___30718 = input_checker30578.call(null,args__6035__auto___30717);if(cljs.core.truth_(temp__4126__auto___30718))
{var error__6036__auto___30719 = temp__4126__auto___30718;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30572","constructor30572",906184660,null),cljs.core.pr_str.call(null,error__6036__auto___30719)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30719,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30717,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30577,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30574 = G__30580;while(true){
if(cljs.core.map_QMARK_.call(null,map30574))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30574)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30574,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30575 = plumbing.fnk.schema.safe_get.call(null,map30574,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30575,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30574,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30647 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30647 = (function (component_spec,component_filter_rq_chan,input_schema30577,output_checker30579,owner,data,map30575,input_checker30578,filter_spec,constructor30572,output_schema30576,G__30580,map30574,validate__6034__auto__,id,ufv__,meta30648){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30577 = input_schema30577;
this.output_checker30579 = output_checker30579;
this.owner = owner;
this.data = data;
this.map30575 = map30575;
this.input_checker30578 = input_checker30578;
this.filter_spec = filter_spec;
this.constructor30572 = constructor30572;
this.output_schema30576 = output_schema30576;
this.G__30580 = G__30580;
this.map30574 = map30574;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30647.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30647.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30647";
clustermap.components.filters.tag_checkboxes_filter.t30647.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30647");
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (state_30687){var state_val_30688 = (state_30687[(1)]);if((state_val_30688 === (7)))
{var inst_30678 = (state_30687[(2)]);var state_30687__$1 = state_30687;if(cljs.core.truth_(inst_30678))
{var statearr_30689_30720 = state_30687__$1;(statearr_30689_30720[(1)] = (11));
} else
{var statearr_30690_30721 = state_30687__$1;(statearr_30690_30721[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (1)))
{var state_30687__$1 = state_30687;var statearr_30691_30722 = state_30687__$1;(statearr_30691_30722[(2)] = null);
(statearr_30691_30722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (4)))
{var inst_30652 = (state_30687[(7)]);var inst_30652__$1 = (state_30687[(2)]);var state_30687__$1 = (function (){var statearr_30692 = state_30687;(statearr_30692[(7)] = inst_30652__$1);
return statearr_30692;
})();if(cljs.core.truth_(inst_30652__$1))
{var statearr_30693_30723 = state_30687__$1;(statearr_30693_30723[(1)] = (5));
} else
{var statearr_30694_30724 = state_30687__$1;(statearr_30694_30724[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (13)))
{var inst_30683 = (state_30687[(2)]);var state_30687__$1 = state_30687;var statearr_30695_30725 = state_30687__$1;(statearr_30695_30725[(2)] = inst_30683);
(statearr_30695_30725[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (6)))
{var state_30687__$1 = state_30687;var statearr_30696_30726 = state_30687__$1;(statearr_30696_30726[(2)] = null);
(statearr_30696_30726[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (3)))
{var inst_30685 = (state_30687[(2)]);var state_30687__$1 = state_30687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30687__$1,inst_30685);
} else
{if((state_val_30688 === (12)))
{var state_30687__$1 = state_30687;var statearr_30697_30727 = state_30687__$1;(statearr_30697_30727[(2)] = null);
(statearr_30697_30727[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (2)))
{var state_30687__$1 = state_30687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30687__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30688 === (11)))
{var state_30687__$1 = state_30687;var statearr_30698_30728 = state_30687__$1;(statearr_30698_30728[(2)] = null);
(statearr_30698_30728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (9)))
{var inst_30658 = (state_30687[(8)]);var state_30687__$1 = state_30687;var statearr_30699_30729 = state_30687__$1;(statearr_30699_30729[(2)] = inst_30658);
(statearr_30699_30729[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (5)))
{var inst_30652 = (state_30687[(7)]);var inst_30658 = (state_30687[(8)]);var inst_30655 = cljs.core.nth.call(null,inst_30652,(0),null);var inst_30656 = cljs.core.nth.call(null,inst_30652,(1),null);var inst_30658__$1 = om.core.get_props.call(null,self__.owner);var inst_30659 = cljs.core.seq_QMARK_.call(null,inst_30658__$1);var state_30687__$1 = (function (){var statearr_30700 = state_30687;(statearr_30700[(8)] = inst_30658__$1);
(statearr_30700[(9)] = inst_30656);
(statearr_30700[(10)] = inst_30655);
return statearr_30700;
})();if(inst_30659)
{var statearr_30701_30730 = state_30687__$1;(statearr_30701_30730[(1)] = (8));
} else
{var statearr_30702_30731 = state_30687__$1;(statearr_30702_30731[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (10)))
{var inst_30656 = (state_30687[(9)]);var inst_30664 = (state_30687[(2)]);var inst_30665 = cljs.core.get.call(null,inst_30664,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30666 = cljs.core.get.call(null,inst_30664,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30667 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30668 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30656];var inst_30669 = (new cljs.core.PersistentVector(null,3,(5),inst_30667,inst_30668,null));var inst_30670 = cljs.core.clj__GT_js.call(null,inst_30669);var inst_30671 = console.log(inst_30670);var inst_30672 = cljs.core.deref.call(null,inst_30665);var inst_30673 = cljs.core.deref.call(null,inst_30666);var inst_30674 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30672,inst_30673,inst_30656);var inst_30675 = om.core.update_BANG_.call(null,inst_30665,inst_30674);var state_30687__$1 = (function (){var statearr_30703 = state_30687;(statearr_30703[(11)] = inst_30671);
(statearr_30703[(12)] = inst_30675);
return statearr_30703;
})();var statearr_30704_30732 = state_30687__$1;(statearr_30704_30732[(2)] = true);
(statearr_30704_30732[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30688 === (8)))
{var inst_30658 = (state_30687[(8)]);var inst_30661 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30658);var state_30687__$1 = state_30687;var statearr_30705_30733 = state_30687__$1;(statearr_30705_30733[(2)] = inst_30661);
(statearr_30705_30733[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30709 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30709[(0)] = state_machine__9111__auto__);
(statearr_30709[(1)] = (1));
return statearr_30709;
});
var state_machine__9111__auto____1 = (function (state_30687){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30687);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30710){if((e30710 instanceof Object))
{var ex__9114__auto__ = e30710;var statearr_30711_30734 = state_30687;(statearr_30711_30734[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30710;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30735 = state_30687;
state_30687 = G__30735;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30687){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
})();var state__9127__auto__ = (function (){var statearr_30712 = f__9126__auto__.call(null);(statearr_30712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (_30649){var self__ = this;
var _30649__$1 = this;return self__.meta30648;
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
clustermap.components.filters.tag_checkboxes_filter.t30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function (_30649,meta30648__$1){var self__ = this;
var _30649__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30647(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30577,self__.output_checker30579,self__.owner,self__.data,self__.map30575,self__.input_checker30578,self__.filter_spec,self__.constructor30572,self__.output_schema30576,self__.G__30580,self__.map30574,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30648__$1));
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30647 = ((function (owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579){
return (function __GT_t30647(component_spec__$1,component_filter_rq_chan__$1,input_schema30577__$1,output_checker30579__$1,owner__$1,data__$1,map30575__$1,input_checker30578__$1,filter_spec__$1,constructor30572__$1,output_schema30576__$1,G__30580__$1,map30574__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30648){return (new clustermap.components.filters.tag_checkboxes_filter.t30647(component_spec__$1,component_filter_rq_chan__$1,input_schema30577__$1,output_checker30579__$1,owner__$1,data__$1,map30575__$1,input_checker30578__$1,filter_spec__$1,constructor30572__$1,output_schema30576__$1,G__30580__$1,map30574__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30648));
});})(owner,component_filter_rq_chan,map30575,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30647(component_spec,component_filter_rq_chan,input_schema30577,output_checker30579,owner,data,map30575,input_checker30578,filter_spec,constructor30572,output_schema30576,G__30580,map30574,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30736 = output_checker30579.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30736))
{var error__6036__auto___30737 = temp__4126__auto___30736;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30572","constructor30572",906184660,null),cljs.core.pr_str.call(null,error__6036__auto___30737)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30737,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30576,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30576,input_schema30577,input_checker30578,output_checker30579))
,schema.core.make_fn_schema.call(null,output_schema30576,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30577], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30716){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30571,p__30713){var vec__30715 = p__30713;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30715,(0),null);return component_fnk__7881__auto___30716.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30571,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30571,var_args){
var p__30713 = null;if (arguments.length > 2) {
  p__30713 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30571,p__30713);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30738){
var data__7882__auto__ = cljs.core.first(arglist__30738);
arglist__30738 = cljs.core.next(arglist__30738);
var owner30571 = cljs.core.first(arglist__30738);
var p__30713 = cljs.core.rest(arglist__30738);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30571,p__30713);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30716))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30573){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30573);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30573){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
