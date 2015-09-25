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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31192 = schema.core.Any;var input_schema31193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31194 = schema.core.checker.call(null,input_schema31193);var output_checker31195 = schema.core.checker.call(null,output_schema31192);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31192,input_schema31193,input_checker31194,output_checker31195){
return (function render_STAR_(G__31196){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31199 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31196], null);var temp__4126__auto___31200 = input_checker31194.call(null,args__6035__auto___31199);if(cljs.core.truth_(temp__4126__auto___31200))
{var error__6036__auto___31201 = temp__4126__auto___31200;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31201)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31201,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31199,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31193,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31196;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs31198 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31192,input_schema31193,input_checker31194,output_checker31195){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31192,input_schema31193,input_checker31194,output_checker31195))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs31198))?sablono.interpreter.attributes.call(null,attrs31198):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31198))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31198)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31202 = output_checker31195.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31202))
{var error__6036__auto___31203 = temp__4126__auto___31202;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31203)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31203,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31192,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31192,input_schema31193,input_checker31194,output_checker31195))
,schema.core.make_fn_schema.call(null,output_schema31192,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31193], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31345 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31209 = schema.core.Any;var input_schema31210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31207","map31207",-862643210,null))], null);var input_checker31211 = schema.core.checker.call(null,input_schema31210);var output_checker31212 = schema.core.checker.call(null,output_schema31209);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function constructor31205(G__31213){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31213], null);var temp__4126__auto___31347 = input_checker31211.call(null,args__6035__auto___31346);if(cljs.core.truth_(temp__4126__auto___31347))
{var error__6036__auto___31348 = temp__4126__auto___31347;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31205","constructor31205",-1047335601,null),cljs.core.pr_str.call(null,error__6036__auto___31348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31348,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31346,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31210,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31207 = G__31213;while(true){
if(cljs.core.map_QMARK_.call(null,map31207))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31207)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31207,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31208 = plumbing.fnk.schema.safe_get.call(null,map31207,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31208,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31207,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31278 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31278 = (function (component_spec,G__31213,component_filter_rq_chan,input_schema31210,map31208,owner,data,output_schema31209,input_checker31211,set_filter_for_url,filter_spec,constructor31205,map31207,validate__6034__auto__,id,ufv__,output_checker31212,meta31279){
this.component_spec = component_spec;
this.G__31213 = G__31213;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema31210 = input_schema31210;
this.map31208 = map31208;
this.owner = owner;
this.data = data;
this.output_schema31209 = output_schema31209;
this.input_checker31211 = input_checker31211;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.constructor31205 = constructor31205;
this.map31207 = map31207;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_checker31212 = output_checker31212;
this.meta31279 = meta31279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31278.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31278.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31278";
clustermap.components.filters.external_filter.t31278.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31278");
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
clustermap.components.filters.external_filter.t31278.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31278.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
clustermap.components.filters.external_filter.t31278.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31278.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
clustermap.components.filters.external_filter.t31278.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31278.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (state_31316){var state_val_31317 = (state_31316[(1)]);if((state_val_31317 === (7)))
{var inst_31307 = (state_31316[(2)]);var state_31316__$1 = state_31316;if(cljs.core.truth_(inst_31307))
{var statearr_31318_31349 = state_31316__$1;(statearr_31318_31349[(1)] = (11));
} else
{var statearr_31319_31350 = state_31316__$1;(statearr_31319_31350[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (1)))
{var state_31316__$1 = state_31316;var statearr_31320_31351 = state_31316__$1;(statearr_31320_31351[(2)] = null);
(statearr_31320_31351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (4)))
{var inst_31283 = (state_31316[(7)]);var inst_31283__$1 = (state_31316[(2)]);var state_31316__$1 = (function (){var statearr_31321 = state_31316;(statearr_31321[(7)] = inst_31283__$1);
return statearr_31321;
})();if(cljs.core.truth_(inst_31283__$1))
{var statearr_31322_31352 = state_31316__$1;(statearr_31322_31352[(1)] = (5));
} else
{var statearr_31323_31353 = state_31316__$1;(statearr_31323_31353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (13)))
{var inst_31312 = (state_31316[(2)]);var state_31316__$1 = state_31316;var statearr_31324_31354 = state_31316__$1;(statearr_31324_31354[(2)] = inst_31312);
(statearr_31324_31354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (6)))
{var state_31316__$1 = state_31316;var statearr_31325_31355 = state_31316__$1;(statearr_31325_31355[(2)] = null);
(statearr_31325_31355[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (3)))
{var inst_31314 = (state_31316[(2)]);var state_31316__$1 = state_31316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31316__$1,inst_31314);
} else
{if((state_val_31317 === (12)))
{var state_31316__$1 = state_31316;var statearr_31326_31356 = state_31316__$1;(statearr_31326_31356[(2)] = null);
(statearr_31326_31356[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (2)))
{var state_31316__$1 = state_31316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31316__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31317 === (11)))
{var state_31316__$1 = state_31316;var statearr_31327_31357 = state_31316__$1;(statearr_31327_31357[(2)] = null);
(statearr_31327_31357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (9)))
{var inst_31289 = (state_31316[(8)]);var state_31316__$1 = state_31316;var statearr_31328_31358 = state_31316__$1;(statearr_31328_31358[(2)] = inst_31289);
(statearr_31328_31358[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (5)))
{var inst_31289 = (state_31316[(8)]);var inst_31283 = (state_31316[(7)]);var inst_31286 = cljs.core.nth.call(null,inst_31283,(0),null);var inst_31287 = cljs.core.nth.call(null,inst_31283,(1),null);var inst_31289__$1 = om.core.get_props.call(null,self__.owner);var inst_31290 = cljs.core.seq_QMARK_.call(null,inst_31289__$1);var state_31316__$1 = (function (){var statearr_31329 = state_31316;(statearr_31329[(8)] = inst_31289__$1);
(statearr_31329[(9)] = inst_31286);
(statearr_31329[(10)] = inst_31287);
return statearr_31329;
})();if(inst_31290)
{var statearr_31330_31359 = state_31316__$1;(statearr_31330_31359[(1)] = (8));
} else
{var statearr_31331_31360 = state_31316__$1;(statearr_31331_31360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (10)))
{var inst_31286 = (state_31316[(9)]);var inst_31287 = (state_31316[(10)]);var inst_31283 = (state_31316[(7)]);var inst_31295 = (state_31316[(2)]);var inst_31296 = cljs.core.get.call(null,inst_31295,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31297 = cljs.core.get.call(null,inst_31295,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31298 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31299 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31287];var inst_31300 = (new cljs.core.PersistentVector(null,3,(5),inst_31298,inst_31299,null));var inst_31301 = cljs.core.clj__GT_js.call(null,inst_31300);var inst_31302 = console.log(inst_31301);var inst_31303 = (function (){var filter_spec__$2 = inst_31297;var component_spec__$2 = inst_31296;var map__31288 = inst_31295;var rq = inst_31287;var component_id = inst_31286;var vec__31285 = inst_31283;var temp__4126__auto__ = inst_31283;return ((function (filter_spec__$2,component_spec__$2,map__31288,rq,component_id,vec__31285,temp__4126__auto__,inst_31286,inst_31287,inst_31283,inst_31295,inst_31296,inst_31297,inst_31298,inst_31299,inst_31300,inst_31301,inst_31302,state_val_31317,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31288,rq,component_id,vec__31285,temp__4126__auto__,inst_31286,inst_31287,inst_31283,inst_31295,inst_31296,inst_31297,inst_31298,inst_31299,inst_31300,inst_31301,inst_31302,state_val_31317,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
})();var inst_31304 = self__.set_filter_for_url.call(null,inst_31287,inst_31303);var state_31316__$1 = (function (){var statearr_31332 = state_31316;(statearr_31332[(11)] = inst_31302);
(statearr_31332[(12)] = inst_31304);
return statearr_31332;
})();var statearr_31333_31361 = state_31316__$1;(statearr_31333_31361[(2)] = true);
(statearr_31333_31361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31317 === (8)))
{var inst_31289 = (state_31316[(8)]);var inst_31292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31289);var state_31316__$1 = state_31316;var statearr_31334_31362 = state_31316__$1;(statearr_31334_31362[(2)] = inst_31292);
(statearr_31334_31362[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31338 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31338[(0)] = state_machine__9111__auto__);
(statearr_31338[(1)] = (1));
return statearr_31338;
});
var state_machine__9111__auto____1 = (function (state_31316){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31316);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object))
{var ex__9114__auto__ = e31339;var statearr_31340_31363 = state_31316;(statearr_31340_31363[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31339;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31364 = state_31316;
state_31316 = G__31364;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31316){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
})();var state__9127__auto__ = (function (){var statearr_31341 = f__9126__auto__.call(null);(statearr_31341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
clustermap.components.filters.external_filter.t31278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (_31280){var self__ = this;
var _31280__$1 = this;return self__.meta31279;
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
clustermap.components.filters.external_filter.t31278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function (_31280,meta31279__$1){var self__ = this;
var _31280__$1 = this;return (new clustermap.components.filters.external_filter.t31278(self__.component_spec,self__.G__31213,self__.component_filter_rq_chan,self__.input_schema31210,self__.map31208,self__.owner,self__.data,self__.output_schema31209,self__.input_checker31211,self__.set_filter_for_url,self__.filter_spec,self__.constructor31205,self__.map31207,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_checker31212,meta31279__$1));
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
clustermap.components.filters.external_filter.__GT_t31278 = ((function (owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212){
return (function __GT_t31278(component_spec__$1,G__31213__$1,component_filter_rq_chan__$1,input_schema31210__$1,map31208__$1,owner__$1,data__$1,output_schema31209__$1,input_checker31211__$1,set_filter_for_url__$1,filter_spec__$1,constructor31205__$1,map31207__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_checker31212__$1,meta31279){return (new clustermap.components.filters.external_filter.t31278(component_spec__$1,G__31213__$1,component_filter_rq_chan__$1,input_schema31210__$1,map31208__$1,owner__$1,data__$1,output_schema31209__$1,input_checker31211__$1,set_filter_for_url__$1,filter_spec__$1,constructor31205__$1,map31207__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_checker31212__$1,meta31279));
});})(owner,component_filter_rq_chan,map31208,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
;
}
return (new clustermap.components.filters.external_filter.t31278(component_spec,G__31213,component_filter_rq_chan,input_schema31210,map31208,owner,data,output_schema31209,input_checker31211,set_filter_for_url,filter_spec,constructor31205,map31207,validate__6034__auto__,id,ufv__,output_checker31212,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31365 = output_checker31212.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31365))
{var error__6036__auto___31366 = temp__4126__auto___31365;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31205","constructor31205",-1047335601,null),cljs.core.pr_str.call(null,error__6036__auto___31366)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31366,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31209,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31209,input_schema31210,input_checker31211,output_checker31212))
,schema.core.make_fn_schema.call(null,output_schema31209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31210], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31345){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner31204,p__31342){var vec__31344 = p__31342;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31344,(0),null);return component_fnk__7881__auto___31345.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31204,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner31204,var_args){
var p__31342 = null;if (arguments.length > 2) {
  p__31342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner31204,p__31342);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31367){
var data__7882__auto__ = cljs.core.first(arglist__31367);
arglist__31367 = cljs.core.next(arglist__31367);
var owner31204 = cljs.core.first(arglist__31367);
var p__31342 = cljs.core.rest(arglist__31367);
return external_filter_component__delegate(data__7882__auto__,owner31204,p__31342);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31345))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m31206){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m31206);
});
__GT_external_filter_component = function(cursor__7850__auto__,m31206){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m31206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
