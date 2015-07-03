// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.filters');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
clustermap.filters.FilterSchema = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)),schema.core.Bool,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Keyword,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.Keyword,schema.core.Any], true, false)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.maybe.call(null,schema.core.Str)], true, false),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"composed","composed",-1510693384),schema.core.Any], true, false);
clustermap.filters.make_sequential = (function make_sequential(s){if(cljs.core.sequential_QMARK_.call(null,s))
{return cljs.core.vec.call(null,s);
} else
{if((s == null))
{return cljs.core.PersistentVector.EMPTY;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
clustermap.filters.or_filters = (function or_filters(filters){var filters__$1 = clustermap.filters.make_sequential.call(null,filters);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should","should",2086636648),filters__$1], null)], null);
});
clustermap.filters.de_or_filters = (function de_or_filters(combf){return cljs.core.get_in.call(null,combf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"should","should",2086636648)], null));
});
/**
* and a sequence of filters
*/
clustermap.filters.and_filters = (function and_filters(filters){var filters__$1 = clustermap.filters.make_sequential.call(null,filters);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),filters__$1], null)], null);
});
/**
* extract a sequence of filters which have been ANDed
*/
clustermap.filters.de_and_filters = (function de_and_filters(combf){return cljs.core.get_in.call(null,combf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061)], null));
});
/**
* AND all components and a base-filter
*/
clustermap.filters.compose_base_filter = (function compose_base_filter(components,base_filter){var filters = (function (){var G__33084 = components;var G__33084__$1 = (((G__33084 == null))?null:cljs.core.vals.call(null,G__33084));var G__33084__$2 = (((G__33084__$1 == null))?null:cljs.core.conj.call(null,G__33084__$1,base_filter));return G__33084__$2;
})();var filters__$1 = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.identity,filters));return clustermap.filters.and_filters.call(null,filters__$1);
});
/**
* take the filter components, and combine with each base-filter to produce
* a restricted version of the base-filter
*/
clustermap.filters.compose_filters = (function compose_filters(components,base_filters){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33087){var vec__33088 = p__33087;var k = cljs.core.nth.call(null,vec__33088,(0),null);var bf = cljs.core.nth.call(null,vec__33088,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.filters.compose_base_filter.call(null,components,bf)], null);
}),base_filters));
});
var ufv___33098 = schema.utils.use_fn_validation;var output_schema33089_33099 = clustermap.filters.FilterSchema;var input_schema33090_33100 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"k","k",-505765866,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"f","f",43394975,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"d","d",-682293345,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"u","u",483896742,null))], null);var input_checker33091_33101 = schema.core.checker.call(null,input_schema33090_33100);var output_checker33092_33102 = schema.core.checker.call(null,output_schema33089_33099);/**
* Inputs: [filters :- FilterSchema k :- s/Str f :- s/Any d :- s/Str u :- s/Str]
* Returns: FilterSchema
* 
* update the filter component k with filter f, description d, and url component u
*/
clustermap.filters.update_filter_component = ((function (ufv___33098,output_schema33089_33099,input_schema33090_33100,input_checker33091_33101,output_checker33092_33102){
return (function update_filter_component(G__33093,G__33094,G__33095,G__33096,G__33097){var validate__6034__auto__ = ufv___33098.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33103 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33093,G__33094,G__33095,G__33096,G__33097], null);var temp__4126__auto___33104 = input_checker33091_33101.call(null,args__6035__auto___33103);if(cljs.core.truth_(temp__4126__auto___33104))
{var error__6036__auto___33105 = temp__4126__auto___33104;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___33105)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33105,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33103,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33090_33100,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__33093;var k = G__33094;var f = G__33095;var d = G__33096;var u = G__33097;while(true){
var f__$1 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),k], null),f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),k], null),d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097),k], null),u);return cljs.core.assoc_in.call(null,f__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f__$1)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33106 = output_checker33092_33102.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33106))
{var error__6036__auto___33107 = temp__4126__auto___33106;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___33107)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33107,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33089_33099,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33098,output_schema33089_33099,input_schema33090_33100,input_checker33091_33101,output_checker33092_33102))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.update_filter_component),schema.core.make_fn_schema.call(null,output_schema33089_33099,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33090_33100], null)));
var ufv___33113 = schema.utils.use_fn_validation;var output_schema33108_33114 = clustermap.filters.FilterSchema;var input_schema33109_33115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null))], null);var input_checker33110_33116 = schema.core.checker.call(null,input_schema33109_33115);var output_checker33111_33117 = schema.core.checker.call(null,output_schema33108_33114);/**
* Inputs: [filters :- FilterSchema]
* Returns: FilterSchema
* 
* reset all filter components
*/
clustermap.filters.reset_filter = ((function (ufv___33113,output_schema33108_33114,input_schema33109_33115,input_checker33110_33116,output_checker33111_33117){
return (function reset_filter(G__33112){var validate__6034__auto__ = ufv___33113.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33118 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33112], null);var temp__4126__auto___33119 = input_checker33110_33116.call(null,args__6035__auto___33118);if(cljs.core.truth_(temp__4126__auto___33119))
{var error__6036__auto___33120 = temp__4126__auto___33119;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___33120)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33120,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33118,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33109_33115,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__33112;while(true){
var f = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097)], null),cljs.core.PersistentArrayMap.EMPTY);return cljs.core.assoc_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33121 = output_checker33111_33117.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33121))
{var error__6036__auto___33122 = temp__4126__auto___33121;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___33122)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33122,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33108_33114,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33113,output_schema33108_33114,input_schema33109_33115,input_checker33110_33116,output_checker33111_33117))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.reset_filter),schema.core.make_fn_schema.call(null,output_schema33108_33114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33109_33115], null)));
var ufv___33134 = schema.utils.use_fn_validation;var output_schema33123_33135 = schema.core.Any;var input_schema33124_33136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"url-components","url-components",-170905570,null))], null);var input_checker33125_33137 = schema.core.checker.call(null,input_schema33124_33136);var output_checker33126_33138 = schema.core.checker.call(null,output_schema33123_33135);/**
* Inputs: [url-components]
* 
* JSON encode the filter for use as a URL param
*/
clustermap.filters.filter_url_param_value = ((function (ufv___33134,output_schema33123_33135,input_schema33124_33136,input_checker33125_33137,output_checker33126_33138){
return (function filter_url_param_value(G__33127){var validate__6034__auto__ = ufv___33134.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33127], null);var temp__4126__auto___33140 = input_checker33125_33137.call(null,args__6035__auto___33139);if(cljs.core.truth_(temp__4126__auto___33140))
{var error__6036__auto___33141 = temp__4126__auto___33140;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___33141)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33141,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33139,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33124_33136,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var url_components = G__33127;while(true){
var G__33131 = url_components;var G__33131__$1 = (((G__33131 == null))?null:cljs.core.filter.call(null,((function (G__33131,validate__6034__auto__,ufv___33134,output_schema33123_33135,input_schema33124_33136,input_checker33125_33137,output_checker33126_33138){
return (function (p__33132){var vec__33133 = p__33132;var k = cljs.core.nth.call(null,vec__33133,(0),null);var v = cljs.core.nth.call(null,vec__33133,(1),null);return cljs.core.not_empty.call(null,v);
});})(G__33131,validate__6034__auto__,ufv___33134,output_schema33123_33135,input_schema33124_33136,input_checker33125_33137,output_checker33126_33138))
,G__33131));var G__33131__$2 = (((G__33131__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33131__$1));var G__33131__$3 = (((G__33131__$2 == null))?null:cljs.core.not_empty.call(null,G__33131__$2));var G__33131__$4 = (((G__33131__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__33131__$3));var G__33131__$5 = (((G__33131__$4 == null))?null:JSON.stringify(G__33131__$4));return G__33131__$5;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33142 = output_checker33126_33138.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33142))
{var error__6036__auto___33143 = temp__4126__auto___33142;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___33143)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33143,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33123_33135,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33134,output_schema33123_33135,input_schema33124_33136,input_checker33125_33137,output_checker33126_33138))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.filter_url_param_value),schema.core.make_fn_schema.call(null,output_schema33123_33135,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33124_33136], null)));
var ufv___33151 = schema.utils.use_fn_validation;var output_schema33144_33152 = schema.core.Any;var input_schema33145_33153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"v","v",1661996586,null))], null);var input_checker33146_33154 = schema.core.checker.call(null,input_schema33145_33153);var output_checker33147_33155 = schema.core.checker.call(null,output_schema33144_33152);/**
* Inputs: [v]
*/
clustermap.filters.parse_url_param_value = ((function (ufv___33151,output_schema33144_33152,input_schema33145_33153,input_checker33146_33154,output_checker33147_33155){
return (function parse_url_param_value(G__33148){var validate__6034__auto__ = ufv___33151.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33148], null);var temp__4126__auto___33157 = input_checker33146_33154.call(null,args__6035__auto___33156);if(cljs.core.truth_(temp__4126__auto___33157))
{var error__6036__auto___33158 = temp__4126__auto___33157;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___33158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33158,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33156,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33145_33153,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var v = G__33148;while(true){
var G__33150 = v;var G__33150__$1 = (((G__33150 == null))?null:JSON.parse(G__33150));var G__33150__$2 = (((G__33150__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__33150__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));return G__33150__$2;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33159 = output_checker33147_33155.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33159))
{var error__6036__auto___33160 = temp__4126__auto___33159;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___33160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33160,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33144_33152,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___33151,output_schema33144_33152,input_schema33145_33153,input_checker33146_33154,output_checker33147_33155))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.parse_url_param_value),schema.core.make_fn_schema.call(null,output_schema33144_33152,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33145_33153], null)));
