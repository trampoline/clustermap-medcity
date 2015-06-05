// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.external_filter');
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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29990 = schema.core.Any;var input_schema29991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29992 = schema.core.checker.call(null,input_schema29991);var output_checker29993 = schema.core.checker.call(null,output_schema29990);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29990,input_schema29991,input_checker29992,output_checker29993){
return (function render_STAR_(G__29994){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29994], null);var temp__4126__auto___29998 = input_checker29992.call(null,args__6035__auto___29997);if(cljs.core.truth_(temp__4126__auto___29998))
{var error__6036__auto___29999 = temp__4126__auto___29998;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29999,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29997,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29991,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29994;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs29996 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29990,input_schema29991,input_checker29992,output_checker29993){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29990,input_schema29991,input_checker29992,output_checker29993))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29996))?sablono.interpreter.attributes.call(null,attrs29996):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29996))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29996)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30000 = output_checker29993.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30000))
{var error__6036__auto___30001 = temp__4126__auto___30000;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30001)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30001,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29990,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29990,input_schema29991,input_checker29992,output_checker29993))
,schema.core.make_fn_schema.call(null,output_schema29990,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29991], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30143 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30007 = schema.core.Any;var input_schema30008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30005","map30005",-1330548752,null))], null);var input_checker30009 = schema.core.checker.call(null,input_schema30008);var output_checker30010 = schema.core.checker.call(null,output_schema30007);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function constructor30003(G__30011){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30011], null);var temp__4126__auto___30145 = input_checker30009.call(null,args__6035__auto___30144);if(cljs.core.truth_(temp__4126__auto___30145))
{var error__6036__auto___30146 = temp__4126__auto___30145;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30003","constructor30003",-1304951981,null),cljs.core.pr_str.call(null,error__6036__auto___30146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30146,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30144,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30008,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30005 = G__30011;while(true){
if(cljs.core.map_QMARK_.call(null,map30005))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30005)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30005,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30006 = plumbing.fnk.schema.safe_get.call(null,map30005,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30006,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30005,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30076 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30076 = (function (component_spec,component_filter_rq_chan,input_checker30009,owner,G__30011,data,output_checker30010,set_filter_for_url,filter_spec,map30005,constructor30003,map30006,validate__6034__auto__,output_schema30007,id,ufv__,input_schema30008,meta30077){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30009 = input_checker30009;
this.owner = owner;
this.G__30011 = G__30011;
this.data = data;
this.output_checker30010 = output_checker30010;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.map30005 = map30005;
this.constructor30003 = constructor30003;
this.map30006 = map30006;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema30007 = output_schema30007;
this.id = id;
this.ufv__ = ufv__;
this.input_schema30008 = input_schema30008;
this.meta30077 = meta30077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30076.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30076.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30076";
clustermap.components.filters.external_filter.t30076.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30076");
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
clustermap.components.filters.external_filter.t30076.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30076.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
clustermap.components.filters.external_filter.t30076.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30076.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
clustermap.components.filters.external_filter.t30076.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30076.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (state_30114){var state_val_30115 = (state_30114[(1)]);if((state_val_30115 === (7)))
{var inst_30105 = (state_30114[(2)]);var state_30114__$1 = state_30114;if(cljs.core.truth_(inst_30105))
{var statearr_30116_30147 = state_30114__$1;(statearr_30116_30147[(1)] = (11));
} else
{var statearr_30117_30148 = state_30114__$1;(statearr_30117_30148[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (1)))
{var state_30114__$1 = state_30114;var statearr_30118_30149 = state_30114__$1;(statearr_30118_30149[(2)] = null);
(statearr_30118_30149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (4)))
{var inst_30081 = (state_30114[(7)]);var inst_30081__$1 = (state_30114[(2)]);var state_30114__$1 = (function (){var statearr_30119 = state_30114;(statearr_30119[(7)] = inst_30081__$1);
return statearr_30119;
})();if(cljs.core.truth_(inst_30081__$1))
{var statearr_30120_30150 = state_30114__$1;(statearr_30120_30150[(1)] = (5));
} else
{var statearr_30121_30151 = state_30114__$1;(statearr_30121_30151[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (13)))
{var inst_30110 = (state_30114[(2)]);var state_30114__$1 = state_30114;var statearr_30122_30152 = state_30114__$1;(statearr_30122_30152[(2)] = inst_30110);
(statearr_30122_30152[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (6)))
{var state_30114__$1 = state_30114;var statearr_30123_30153 = state_30114__$1;(statearr_30123_30153[(2)] = null);
(statearr_30123_30153[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (3)))
{var inst_30112 = (state_30114[(2)]);var state_30114__$1 = state_30114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30114__$1,inst_30112);
} else
{if((state_val_30115 === (12)))
{var state_30114__$1 = state_30114;var statearr_30124_30154 = state_30114__$1;(statearr_30124_30154[(2)] = null);
(statearr_30124_30154[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (2)))
{var state_30114__$1 = state_30114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30114__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30115 === (11)))
{var state_30114__$1 = state_30114;var statearr_30125_30155 = state_30114__$1;(statearr_30125_30155[(2)] = null);
(statearr_30125_30155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (9)))
{var inst_30087 = (state_30114[(8)]);var state_30114__$1 = state_30114;var statearr_30126_30156 = state_30114__$1;(statearr_30126_30156[(2)] = inst_30087);
(statearr_30126_30156[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (5)))
{var inst_30087 = (state_30114[(8)]);var inst_30081 = (state_30114[(7)]);var inst_30084 = cljs.core.nth.call(null,inst_30081,(0),null);var inst_30085 = cljs.core.nth.call(null,inst_30081,(1),null);var inst_30087__$1 = om.core.get_props.call(null,self__.owner);var inst_30088 = cljs.core.seq_QMARK_.call(null,inst_30087__$1);var state_30114__$1 = (function (){var statearr_30127 = state_30114;(statearr_30127[(9)] = inst_30085);
(statearr_30127[(8)] = inst_30087__$1);
(statearr_30127[(10)] = inst_30084);
return statearr_30127;
})();if(inst_30088)
{var statearr_30128_30157 = state_30114__$1;(statearr_30128_30157[(1)] = (8));
} else
{var statearr_30129_30158 = state_30114__$1;(statearr_30129_30158[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (10)))
{var inst_30085 = (state_30114[(9)]);var inst_30081 = (state_30114[(7)]);var inst_30084 = (state_30114[(10)]);var inst_30093 = (state_30114[(2)]);var inst_30094 = cljs.core.get.call(null,inst_30093,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30095 = cljs.core.get.call(null,inst_30093,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30096 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30097 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30085];var inst_30098 = (new cljs.core.PersistentVector(null,3,(5),inst_30096,inst_30097,null));var inst_30099 = cljs.core.clj__GT_js.call(null,inst_30098);var inst_30100 = console.log(inst_30099);var inst_30101 = (function (){var filter_spec__$2 = inst_30095;var component_spec__$2 = inst_30094;var map__30086 = inst_30093;var rq = inst_30085;var component_id = inst_30084;var vec__30083 = inst_30081;var temp__4126__auto__ = inst_30081;return ((function (filter_spec__$2,component_spec__$2,map__30086,rq,component_id,vec__30083,temp__4126__auto__,inst_30085,inst_30081,inst_30084,inst_30093,inst_30094,inst_30095,inst_30096,inst_30097,inst_30098,inst_30099,inst_30100,state_val_30115,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30086,rq,component_id,vec__30083,temp__4126__auto__,inst_30085,inst_30081,inst_30084,inst_30093,inst_30094,inst_30095,inst_30096,inst_30097,inst_30098,inst_30099,inst_30100,state_val_30115,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
})();var inst_30102 = self__.set_filter_for_url.call(null,inst_30085,inst_30101);var state_30114__$1 = (function (){var statearr_30130 = state_30114;(statearr_30130[(11)] = inst_30102);
(statearr_30130[(12)] = inst_30100);
return statearr_30130;
})();var statearr_30131_30159 = state_30114__$1;(statearr_30131_30159[(2)] = true);
(statearr_30131_30159[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30115 === (8)))
{var inst_30087 = (state_30114[(8)]);var inst_30090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30087);var state_30114__$1 = state_30114;var statearr_30132_30160 = state_30114__$1;(statearr_30132_30160[(2)] = inst_30090);
(statearr_30132_30160[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30136 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30136[(0)] = state_machine__11462__auto__);
(statearr_30136[(1)] = (1));
return statearr_30136;
});
var state_machine__11462__auto____1 = (function (state_30114){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30114);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30137){if((e30137 instanceof Object))
{var ex__11465__auto__ = e30137;var statearr_30138_30161 = state_30114;(statearr_30138_30161[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30162 = state_30114;
state_30114 = G__30162;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30114){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
})();var state__11519__auto__ = (function (){var statearr_30139 = f__11518__auto__.call(null);(statearr_30139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
clustermap.components.filters.external_filter.t30076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (_30078){var self__ = this;
var _30078__$1 = this;return self__.meta30077;
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
clustermap.components.filters.external_filter.t30076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function (_30078,meta30077__$1){var self__ = this;
var _30078__$1 = this;return (new clustermap.components.filters.external_filter.t30076(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker30009,self__.owner,self__.G__30011,self__.data,self__.output_checker30010,self__.set_filter_for_url,self__.filter_spec,self__.map30005,self__.constructor30003,self__.map30006,self__.validate__6034__auto__,self__.output_schema30007,self__.id,self__.ufv__,self__.input_schema30008,meta30077__$1));
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
clustermap.components.filters.external_filter.__GT_t30076 = ((function (owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010){
return (function __GT_t30076(component_spec__$1,component_filter_rq_chan__$1,input_checker30009__$1,owner__$1,G__30011__$1,data__$1,output_checker30010__$1,set_filter_for_url__$1,filter_spec__$1,map30005__$1,constructor30003__$1,map30006__$1,validate__6034__auto____$1,output_schema30007__$1,id__$1,ufv____$1,input_schema30008__$1,meta30077){return (new clustermap.components.filters.external_filter.t30076(component_spec__$1,component_filter_rq_chan__$1,input_checker30009__$1,owner__$1,G__30011__$1,data__$1,output_checker30010__$1,set_filter_for_url__$1,filter_spec__$1,map30005__$1,constructor30003__$1,map30006__$1,validate__6034__auto____$1,output_schema30007__$1,id__$1,ufv____$1,input_schema30008__$1,meta30077));
});})(owner,component_filter_rq_chan,map30006,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
;
}
return (new clustermap.components.filters.external_filter.t30076(component_spec,component_filter_rq_chan,input_checker30009,owner,G__30011,data,output_checker30010,set_filter_for_url,filter_spec,map30005,constructor30003,map30006,validate__6034__auto__,output_schema30007,id,ufv__,input_schema30008,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30163 = output_checker30010.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30163))
{var error__6036__auto___30164 = temp__4126__auto___30163;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30003","constructor30003",-1304951981,null),cljs.core.pr_str.call(null,error__6036__auto___30164)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30164,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30007,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30007,input_schema30008,input_checker30009,output_checker30010))
,schema.core.make_fn_schema.call(null,output_schema30007,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30008], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30143){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30002,p__30140){var vec__30142 = p__30140;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30142,(0),null);return component_fnk__7881__auto___30143.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30002,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30002,var_args){
var p__30140 = null;if (arguments.length > 2) {
  p__30140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30002,p__30140);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30165){
var data__7882__auto__ = cljs.core.first(arglist__30165);
arglist__30165 = cljs.core.next(arglist__30165);
var owner30002 = cljs.core.first(arglist__30165);
var p__30140 = cljs.core.rest(arglist__30165);
return external_filter_component__delegate(data__7882__auto__,owner30002,p__30140);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30143))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30004){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30004);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30004){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
