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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29690(s__29691){return (new cljs.core.LazySeq(null,(function (){var s__29691__$1 = s__29691;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29691__$1);if(temp__4126__auto__)
{var s__29691__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29691__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29691__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29693 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29692 = (0);while(true){
if((i__29692 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29692);cljs.core.chunk_append.call(null,b__29693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29694 = (i__29692 + (1));
i__29692 = G__29694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29693),iter__29690.call(null,cljs.core.chunk_rest.call(null,s__29691__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29693),null);
}
} else
{var t = cljs.core.first.call(null,s__29691__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29690.call(null,cljs.core.rest.call(null,s__29691__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29695_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29695_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29696,value){var map__29698 = p__29696;var map__29698__$1 = ((cljs.core.seq_QMARK_.call(null,map__29698))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698):map__29698);var component_spec = map__29698__$1;var tags = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29698__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29699_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29699_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29701,values){var map__29703 = p__29701;var map__29703__$1 = ((cljs.core.seq_QMARK_.call(null,map__29703))?cljs.core.apply.call(null,cljs.core.hash_map,map__29703):map__29703);var component_spec = map__29703__$1;var sorted = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29703,map__29703__$1,component_spec,sorted,tags,label){
return (function (p1__29700_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29700_SHARP_));
});})(values__$1,map__29703,map__29703__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29704,values){var map__29706 = p__29704;var map__29706__$1 = ((cljs.core.seq_QMARK_.call(null,map__29706))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);var component_spec = map__29706__$1;var tags = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__29707){var map__29709 = p__29707;var map__29709__$1 = ((cljs.core.seq_QMARK_.call(null,map__29709))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);var component_spec = map__29709__$1;var tags = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29710){var map__29712 = p__29710;var map__29712__$1 = ((cljs.core.seq_QMARK_.call(null,map__29712))?cljs.core.apply.call(null,cljs.core.hash_map,map__29712):map__29712);var component_spec = map__29712__$1;var tags = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29714 = schema.core.Any;var input_schema29715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29713","map29713",802075960,null))], null);var input_checker29716 = schema.core.checker.call(null,input_schema29715);var output_checker29717 = schema.core.checker.call(null,output_schema29714);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function render_STAR_(G__29718){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29718], null);var temp__4126__auto___29754 = input_checker29716.call(null,args__6035__auto___29753);if(cljs.core.truth_(temp__4126__auto___29754))
{var error__6036__auto___29755 = temp__4126__auto___29754;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29755)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29755,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29753,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29715,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29713 = G__29718;while(true){
if(cljs.core.map_QMARK_.call(null,map29713))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29713)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29713,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29713,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs29736 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29736))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29736)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29736))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function iter__29737(s__29738){return (new cljs.core.LazySeq(null,((function (attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (){var s__29738__$1 = s__29738;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29738__$1);if(temp__4126__auto__)
{var s__29738__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29738__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29738__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29740 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29739 = (0);while(true){
if((i__29739 < size__4376__auto__))
{var map__29743 = cljs.core._nth.call(null,c__4375__auto__,i__29739);var map__29743__$1 = ((cljs.core.seq_QMARK_.call(null,map__29743))?cljs.core.apply.call(null,cljs.core.hash_map,map__29743):map__29743);var label__$1 = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29740,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29739,map__29743,map__29743__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29740,s__29738__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29739,map__29743,map__29743__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29740,s__29738__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29756 = (i__29739 + (1));
i__29739 = G__29756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29740),iter__29737.call(null,cljs.core.chunk_rest.call(null,s__29738__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29740),null);
}
} else
{var map__29744 = cljs.core.first.call(null,s__29738__$2);var map__29744__$1 = ((cljs.core.seq_QMARK_.call(null,map__29744))?cljs.core.apply.call(null,cljs.core.hash_map,map__29744):map__29744);var label__$1 = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29744,map__29744__$1,label__$1,value,s__29738__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29744,map__29744__$1,label__$1,value,s__29738__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29737.call(null,cljs.core.rest.call(null,s__29738__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
,null,null));
});})(attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29736),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function iter__29745(s__29746){return (new cljs.core.LazySeq(null,((function (attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (){var s__29746__$1 = s__29746;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29746__$1);if(temp__4126__auto__)
{var s__29746__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29746__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29746__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29748 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29747 = (0);while(true){
if((i__29747 < size__4376__auto__))
{var map__29751 = cljs.core._nth.call(null,c__4375__auto__,i__29747);var map__29751__$1 = ((cljs.core.seq_QMARK_.call(null,map__29751))?cljs.core.apply.call(null,cljs.core.hash_map,map__29751):map__29751);var label__$1 = cljs.core.get.call(null,map__29751__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29751__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29748,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29747,map__29751,map__29751__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29748,s__29746__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29747,map__29751,map__29751__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29748,s__29746__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29757 = (i__29747 + (1));
i__29747 = G__29757;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29748),iter__29745.call(null,cljs.core.chunk_rest.call(null,s__29746__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29748),null);
}
} else
{var map__29752 = cljs.core.first.call(null,s__29746__$2);var map__29752__$1 = ((cljs.core.seq_QMARK_.call(null,map__29752))?cljs.core.apply.call(null,cljs.core.hash_map,map__29752):map__29752);var label__$1 = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29752,map__29752__$1,label__$1,value,s__29746__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29752,map__29752__$1,label__$1,value,s__29746__$2,temp__4126__auto__,attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29745.call(null,cljs.core.rest.call(null,s__29746__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
,null,null));
});})(attrs29736,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29758 = output_checker29717.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29758))
{var error__6036__auto___29759 = temp__4126__auto___29758;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29759)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29759,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29714,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29714,input_schema29715,input_checker29716,output_checker29717))
,schema.core.make_fn_schema.call(null,output_schema29714,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29715], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29905 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29765 = schema.core.Any;var input_schema29766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29763","map29763",-670377230,null))], null);var input_checker29767 = schema.core.checker.call(null,input_schema29766);var output_checker29768 = schema.core.checker.call(null,output_schema29765);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function constructor29761(G__29769){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29769], null);var temp__4126__auto___29907 = input_checker29767.call(null,args__6035__auto___29906);if(cljs.core.truth_(temp__4126__auto___29907))
{var error__6036__auto___29908 = temp__4126__auto___29907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29761","constructor29761",-1554638128,null),cljs.core.pr_str.call(null,error__6036__auto___29908)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29908,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29906,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29766,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29763 = G__29769;while(true){
if(cljs.core.map_QMARK_.call(null,map29763))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29763)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29763,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29764 = plumbing.fnk.schema.safe_get.call(null,map29763,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29764,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29763,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29836 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29836 = (function (component_spec,component_filter_rq_chan,input_checker29767,owner,data,G__29769,output_schema29765,output_checker29768,filter_spec,constructor29761,map29763,map29764,validate__6034__auto__,id,ufv__,input_schema29766,meta29837){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker29767 = input_checker29767;
this.owner = owner;
this.data = data;
this.G__29769 = G__29769;
this.output_schema29765 = output_schema29765;
this.output_checker29768 = output_checker29768;
this.filter_spec = filter_spec;
this.constructor29761 = constructor29761;
this.map29763 = map29763;
this.map29764 = map29764;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.input_schema29766 = input_schema29766;
this.meta29837 = meta29837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29836.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29836.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29836";
clustermap.components.filters.tag_checkboxes_filter.t29836.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29836");
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (state_29876){var state_val_29877 = (state_29876[(1)]);if((state_val_29877 === (7)))
{var inst_29867 = (state_29876[(2)]);var state_29876__$1 = state_29876;if(cljs.core.truth_(inst_29867))
{var statearr_29878_29909 = state_29876__$1;(statearr_29878_29909[(1)] = (11));
} else
{var statearr_29879_29910 = state_29876__$1;(statearr_29879_29910[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (1)))
{var state_29876__$1 = state_29876;var statearr_29880_29911 = state_29876__$1;(statearr_29880_29911[(2)] = null);
(statearr_29880_29911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (4)))
{var inst_29841 = (state_29876[(7)]);var inst_29841__$1 = (state_29876[(2)]);var state_29876__$1 = (function (){var statearr_29881 = state_29876;(statearr_29881[(7)] = inst_29841__$1);
return statearr_29881;
})();if(cljs.core.truth_(inst_29841__$1))
{var statearr_29882_29912 = state_29876__$1;(statearr_29882_29912[(1)] = (5));
} else
{var statearr_29883_29913 = state_29876__$1;(statearr_29883_29913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (13)))
{var inst_29872 = (state_29876[(2)]);var state_29876__$1 = state_29876;var statearr_29884_29914 = state_29876__$1;(statearr_29884_29914[(2)] = inst_29872);
(statearr_29884_29914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (6)))
{var state_29876__$1 = state_29876;var statearr_29885_29915 = state_29876__$1;(statearr_29885_29915[(2)] = null);
(statearr_29885_29915[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (3)))
{var inst_29874 = (state_29876[(2)]);var state_29876__$1 = state_29876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29876__$1,inst_29874);
} else
{if((state_val_29877 === (12)))
{var state_29876__$1 = state_29876;var statearr_29886_29916 = state_29876__$1;(statearr_29886_29916[(2)] = null);
(statearr_29886_29916[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (2)))
{var state_29876__$1 = state_29876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29876__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29877 === (11)))
{var state_29876__$1 = state_29876;var statearr_29887_29917 = state_29876__$1;(statearr_29887_29917[(2)] = null);
(statearr_29887_29917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (9)))
{var inst_29847 = (state_29876[(8)]);var state_29876__$1 = state_29876;var statearr_29888_29918 = state_29876__$1;(statearr_29888_29918[(2)] = inst_29847);
(statearr_29888_29918[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (5)))
{var inst_29841 = (state_29876[(7)]);var inst_29847 = (state_29876[(8)]);var inst_29844 = cljs.core.nth.call(null,inst_29841,(0),null);var inst_29845 = cljs.core.nth.call(null,inst_29841,(1),null);var inst_29847__$1 = om.core.get_props.call(null,self__.owner);var inst_29848 = cljs.core.seq_QMARK_.call(null,inst_29847__$1);var state_29876__$1 = (function (){var statearr_29889 = state_29876;(statearr_29889[(9)] = inst_29844);
(statearr_29889[(10)] = inst_29845);
(statearr_29889[(8)] = inst_29847__$1);
return statearr_29889;
})();if(inst_29848)
{var statearr_29890_29919 = state_29876__$1;(statearr_29890_29919[(1)] = (8));
} else
{var statearr_29891_29920 = state_29876__$1;(statearr_29891_29920[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (10)))
{var inst_29845 = (state_29876[(10)]);var inst_29853 = (state_29876[(2)]);var inst_29854 = cljs.core.get.call(null,inst_29853,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29855 = cljs.core.get.call(null,inst_29853,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29856 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29857 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29845];var inst_29858 = (new cljs.core.PersistentVector(null,3,(5),inst_29856,inst_29857,null));var inst_29859 = cljs.core.clj__GT_js.call(null,inst_29858);var inst_29860 = console.log(inst_29859);var inst_29861 = cljs.core.deref.call(null,inst_29854);var inst_29862 = cljs.core.deref.call(null,inst_29855);var inst_29863 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29861,inst_29862,inst_29845);var inst_29864 = om.core.update_BANG_.call(null,inst_29854,inst_29863);var state_29876__$1 = (function (){var statearr_29892 = state_29876;(statearr_29892[(11)] = inst_29860);
(statearr_29892[(12)] = inst_29864);
return statearr_29892;
})();var statearr_29893_29921 = state_29876__$1;(statearr_29893_29921[(2)] = true);
(statearr_29893_29921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29877 === (8)))
{var inst_29847 = (state_29876[(8)]);var inst_29850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29847);var state_29876__$1 = state_29876;var statearr_29894_29922 = state_29876__$1;(statearr_29894_29922[(2)] = inst_29850);
(statearr_29894_29922[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_29898 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29898[(0)] = state_machine__11099__auto__);
(statearr_29898[(1)] = (1));
return statearr_29898;
});
var state_machine__11099__auto____1 = (function (state_29876){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_29876);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e29899){if((e29899 instanceof Object))
{var ex__11102__auto__ = e29899;var statearr_29900_29923 = state_29876;(statearr_29900_29923[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29924 = state_29876;
state_29876 = G__29924;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_29876){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_29876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
})();var state__11156__auto__ = (function (){var statearr_29901 = f__11155__auto__.call(null);(statearr_29901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_29901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (_29838){var self__ = this;
var _29838__$1 = this;return self__.meta29837;
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
clustermap.components.filters.tag_checkboxes_filter.t29836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function (_29838,meta29837__$1){var self__ = this;
var _29838__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29836(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker29767,self__.owner,self__.data,self__.G__29769,self__.output_schema29765,self__.output_checker29768,self__.filter_spec,self__.constructor29761,self__.map29763,self__.map29764,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.input_schema29766,meta29837__$1));
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29836 = ((function (owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768){
return (function __GT_t29836(component_spec__$1,component_filter_rq_chan__$1,input_checker29767__$1,owner__$1,data__$1,G__29769__$1,output_schema29765__$1,output_checker29768__$1,filter_spec__$1,constructor29761__$1,map29763__$1,map29764__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_schema29766__$1,meta29837){return (new clustermap.components.filters.tag_checkboxes_filter.t29836(component_spec__$1,component_filter_rq_chan__$1,input_checker29767__$1,owner__$1,data__$1,G__29769__$1,output_schema29765__$1,output_checker29768__$1,filter_spec__$1,constructor29761__$1,map29763__$1,map29764__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_schema29766__$1,meta29837));
});})(owner,component_filter_rq_chan,map29764,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29836(component_spec,component_filter_rq_chan,input_checker29767,owner,data,G__29769,output_schema29765,output_checker29768,filter_spec,constructor29761,map29763,map29764,validate__6034__auto__,id,ufv__,input_schema29766,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29925 = output_checker29768.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29925))
{var error__6036__auto___29926 = temp__4126__auto___29925;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29761","constructor29761",-1554638128,null),cljs.core.pr_str.call(null,error__6036__auto___29926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29926,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29765,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29765,input_schema29766,input_checker29767,output_checker29768))
,schema.core.make_fn_schema.call(null,output_schema29765,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29766], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29905){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29760,p__29902){var vec__29904 = p__29902;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29904,(0),null);return component_fnk__7881__auto___29905.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29760,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29760,var_args){
var p__29902 = null;if (arguments.length > 2) {
  p__29902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29760,p__29902);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29927){
var data__7882__auto__ = cljs.core.first(arglist__29927);
arglist__29927 = cljs.core.next(arglist__29927);
var owner29760 = cljs.core.first(arglist__29927);
var p__29902 = cljs.core.rest(arglist__29927);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29760,p__29902);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29905))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29762){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29762);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29762){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
