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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31156 = schema.core.Any;var input_schema31157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31158 = schema.core.checker.call(null,input_schema31157);var output_checker31159 = schema.core.checker.call(null,output_schema31156);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31156,input_schema31157,input_checker31158,output_checker31159){
return (function render_STAR_(G__31160){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31160], null);var temp__4126__auto___31164 = input_checker31158.call(null,args__6035__auto___31163);if(cljs.core.truth_(temp__4126__auto___31164))
{var error__6036__auto___31165 = temp__4126__auto___31164;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31165)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31165,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31163,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31157,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31160;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs31162 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31156,input_schema31157,input_checker31158,output_checker31159){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31156,input_schema31157,input_checker31158,output_checker31159))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs31162))?sablono.interpreter.attributes.call(null,attrs31162):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31162))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31162)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31166 = output_checker31159.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31166))
{var error__6036__auto___31167 = temp__4126__auto___31166;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31167,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31156,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31156,input_schema31157,input_checker31158,output_checker31159))
,schema.core.make_fn_schema.call(null,output_schema31156,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31157], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31309 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31173 = schema.core.Any;var input_schema31174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31171","map31171",947406559,null))], null);var input_checker31175 = schema.core.checker.call(null,input_schema31174);var output_checker31176 = schema.core.checker.call(null,output_schema31173);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function constructor31169(G__31177){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31310 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31177], null);var temp__4126__auto___31311 = input_checker31175.call(null,args__6035__auto___31310);if(cljs.core.truth_(temp__4126__auto___31311))
{var error__6036__auto___31312 = temp__4126__auto___31311;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31169","constructor31169",-1393189121,null),cljs.core.pr_str.call(null,error__6036__auto___31312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31312,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31310,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31174,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31171 = G__31177;while(true){
if(cljs.core.map_QMARK_.call(null,map31171))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31171)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31171,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31172 = plumbing.fnk.schema.safe_get.call(null,map31171,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31172,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31171,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31242 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31242 = (function (component_spec,component_filter_rq_chan,output_checker31176,owner,map31172,data,output_schema31173,set_filter_for_url,input_checker31175,filter_spec,G__31177,validate__6034__auto__,id,input_schema31174,ufv__,map31171,constructor31169,meta31243){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker31176 = output_checker31176;
this.owner = owner;
this.map31172 = map31172;
this.data = data;
this.output_schema31173 = output_schema31173;
this.set_filter_for_url = set_filter_for_url;
this.input_checker31175 = input_checker31175;
this.filter_spec = filter_spec;
this.G__31177 = G__31177;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_schema31174 = input_schema31174;
this.ufv__ = ufv__;
this.map31171 = map31171;
this.constructor31169 = constructor31169;
this.meta31243 = meta31243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31242.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31242.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31242";
clustermap.components.filters.external_filter.t31242.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31242");
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
clustermap.components.filters.external_filter.t31242.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31242.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
clustermap.components.filters.external_filter.t31242.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31242.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
clustermap.components.filters.external_filter.t31242.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31242.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (state_31280){var state_val_31281 = (state_31280[(1)]);if((state_val_31281 === (7)))
{var inst_31271 = (state_31280[(2)]);var state_31280__$1 = state_31280;if(cljs.core.truth_(inst_31271))
{var statearr_31282_31313 = state_31280__$1;(statearr_31282_31313[(1)] = (11));
} else
{var statearr_31283_31314 = state_31280__$1;(statearr_31283_31314[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (1)))
{var state_31280__$1 = state_31280;var statearr_31284_31315 = state_31280__$1;(statearr_31284_31315[(2)] = null);
(statearr_31284_31315[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (4)))
{var inst_31247 = (state_31280[(7)]);var inst_31247__$1 = (state_31280[(2)]);var state_31280__$1 = (function (){var statearr_31285 = state_31280;(statearr_31285[(7)] = inst_31247__$1);
return statearr_31285;
})();if(cljs.core.truth_(inst_31247__$1))
{var statearr_31286_31316 = state_31280__$1;(statearr_31286_31316[(1)] = (5));
} else
{var statearr_31287_31317 = state_31280__$1;(statearr_31287_31317[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (13)))
{var inst_31276 = (state_31280[(2)]);var state_31280__$1 = state_31280;var statearr_31288_31318 = state_31280__$1;(statearr_31288_31318[(2)] = inst_31276);
(statearr_31288_31318[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (6)))
{var state_31280__$1 = state_31280;var statearr_31289_31319 = state_31280__$1;(statearr_31289_31319[(2)] = null);
(statearr_31289_31319[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (3)))
{var inst_31278 = (state_31280[(2)]);var state_31280__$1 = state_31280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31280__$1,inst_31278);
} else
{if((state_val_31281 === (12)))
{var state_31280__$1 = state_31280;var statearr_31290_31320 = state_31280__$1;(statearr_31290_31320[(2)] = null);
(statearr_31290_31320[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (2)))
{var state_31280__$1 = state_31280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31280__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31281 === (11)))
{var state_31280__$1 = state_31280;var statearr_31291_31321 = state_31280__$1;(statearr_31291_31321[(2)] = null);
(statearr_31291_31321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (9)))
{var inst_31253 = (state_31280[(8)]);var state_31280__$1 = state_31280;var statearr_31292_31322 = state_31280__$1;(statearr_31292_31322[(2)] = inst_31253);
(statearr_31292_31322[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (5)))
{var inst_31247 = (state_31280[(7)]);var inst_31253 = (state_31280[(8)]);var inst_31250 = cljs.core.nth.call(null,inst_31247,(0),null);var inst_31251 = cljs.core.nth.call(null,inst_31247,(1),null);var inst_31253__$1 = om.core.get_props.call(null,self__.owner);var inst_31254 = cljs.core.seq_QMARK_.call(null,inst_31253__$1);var state_31280__$1 = (function (){var statearr_31293 = state_31280;(statearr_31293[(9)] = inst_31251);
(statearr_31293[(8)] = inst_31253__$1);
(statearr_31293[(10)] = inst_31250);
return statearr_31293;
})();if(inst_31254)
{var statearr_31294_31323 = state_31280__$1;(statearr_31294_31323[(1)] = (8));
} else
{var statearr_31295_31324 = state_31280__$1;(statearr_31295_31324[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (10)))
{var inst_31251 = (state_31280[(9)]);var inst_31247 = (state_31280[(7)]);var inst_31250 = (state_31280[(10)]);var inst_31259 = (state_31280[(2)]);var inst_31260 = cljs.core.get.call(null,inst_31259,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31261 = cljs.core.get.call(null,inst_31259,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31262 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31263 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31251];var inst_31264 = (new cljs.core.PersistentVector(null,3,(5),inst_31262,inst_31263,null));var inst_31265 = cljs.core.clj__GT_js.call(null,inst_31264);var inst_31266 = console.log(inst_31265);var inst_31267 = (function (){var filter_spec__$2 = inst_31261;var component_spec__$2 = inst_31260;var map__31252 = inst_31259;var rq = inst_31251;var component_id = inst_31250;var vec__31249 = inst_31247;var temp__4126__auto__ = inst_31247;return ((function (filter_spec__$2,component_spec__$2,map__31252,rq,component_id,vec__31249,temp__4126__auto__,inst_31251,inst_31247,inst_31250,inst_31259,inst_31260,inst_31261,inst_31262,inst_31263,inst_31264,inst_31265,inst_31266,state_val_31281,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31252,rq,component_id,vec__31249,temp__4126__auto__,inst_31251,inst_31247,inst_31250,inst_31259,inst_31260,inst_31261,inst_31262,inst_31263,inst_31264,inst_31265,inst_31266,state_val_31281,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
})();var inst_31268 = self__.set_filter_for_url.call(null,inst_31251,inst_31267);var state_31280__$1 = (function (){var statearr_31296 = state_31280;(statearr_31296[(11)] = inst_31266);
(statearr_31296[(12)] = inst_31268);
return statearr_31296;
})();var statearr_31297_31325 = state_31280__$1;(statearr_31297_31325[(2)] = true);
(statearr_31297_31325[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31281 === (8)))
{var inst_31253 = (state_31280[(8)]);var inst_31256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31253);var state_31280__$1 = state_31280;var statearr_31298_31326 = state_31280__$1;(statearr_31298_31326[(2)] = inst_31256);
(statearr_31298_31326[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31302 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31302[(0)] = state_machine__9111__auto__);
(statearr_31302[(1)] = (1));
return statearr_31302;
});
var state_machine__9111__auto____1 = (function (state_31280){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31280);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31303){if((e31303 instanceof Object))
{var ex__9114__auto__ = e31303;var statearr_31304_31327 = state_31280;(statearr_31304_31327[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31280);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31303;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31328 = state_31280;
state_31280 = G__31328;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31280){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
})();var state__9127__auto__ = (function (){var statearr_31305 = f__9126__auto__.call(null);(statearr_31305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
clustermap.components.filters.external_filter.t31242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (_31244){var self__ = this;
var _31244__$1 = this;return self__.meta31243;
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
clustermap.components.filters.external_filter.t31242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function (_31244,meta31243__$1){var self__ = this;
var _31244__$1 = this;return (new clustermap.components.filters.external_filter.t31242(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker31176,self__.owner,self__.map31172,self__.data,self__.output_schema31173,self__.set_filter_for_url,self__.input_checker31175,self__.filter_spec,self__.G__31177,self__.validate__6034__auto__,self__.id,self__.input_schema31174,self__.ufv__,self__.map31171,self__.constructor31169,meta31243__$1));
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
clustermap.components.filters.external_filter.__GT_t31242 = ((function (owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176){
return (function __GT_t31242(component_spec__$1,component_filter_rq_chan__$1,output_checker31176__$1,owner__$1,map31172__$1,data__$1,output_schema31173__$1,set_filter_for_url__$1,input_checker31175__$1,filter_spec__$1,G__31177__$1,validate__6034__auto____$1,id__$1,input_schema31174__$1,ufv____$1,map31171__$1,constructor31169__$1,meta31243){return (new clustermap.components.filters.external_filter.t31242(component_spec__$1,component_filter_rq_chan__$1,output_checker31176__$1,owner__$1,map31172__$1,data__$1,output_schema31173__$1,set_filter_for_url__$1,input_checker31175__$1,filter_spec__$1,G__31177__$1,validate__6034__auto____$1,id__$1,input_schema31174__$1,ufv____$1,map31171__$1,constructor31169__$1,meta31243));
});})(owner,component_filter_rq_chan,map31172,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
;
}
return (new clustermap.components.filters.external_filter.t31242(component_spec,component_filter_rq_chan,output_checker31176,owner,map31172,data,output_schema31173,set_filter_for_url,input_checker31175,filter_spec,G__31177,validate__6034__auto__,id,input_schema31174,ufv__,map31171,constructor31169,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31329 = output_checker31176.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31329))
{var error__6036__auto___31330 = temp__4126__auto___31329;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31169","constructor31169",-1393189121,null),cljs.core.pr_str.call(null,error__6036__auto___31330)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31330,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31173,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31173,input_schema31174,input_checker31175,output_checker31176))
,schema.core.make_fn_schema.call(null,output_schema31173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31174], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31309){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner31168,p__31306){var vec__31308 = p__31306;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31308,(0),null);return component_fnk__7881__auto___31309.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31168,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner31168,var_args){
var p__31306 = null;if (arguments.length > 2) {
  p__31306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner31168,p__31306);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31331){
var data__7882__auto__ = cljs.core.first(arglist__31331);
arglist__31331 = cljs.core.next(arglist__31331);
var owner31168 = cljs.core.first(arglist__31331);
var p__31306 = cljs.core.rest(arglist__31331);
return external_filter_component__delegate(data__7882__auto__,owner31168,p__31306);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31309))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m31170){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m31170);
});
__GT_external_filter_component = function(cursor__7850__auto__,m31170){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m31170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
