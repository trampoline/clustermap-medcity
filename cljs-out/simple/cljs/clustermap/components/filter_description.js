// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter_description');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('schema.core');
goog.require('domina');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('domina');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('domina.css');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filter_description.FilterDescriptionSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null);
clustermap.components.filter_description.render_filter_component = (function render_filter_component(filter_spec,component_id){var temp__4126__auto__ = cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),component_id], null));if(cljs.core.truth_(temp__4126__auto__))
{var component_descr = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),component_descr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (component_descr,temp__4126__auto__){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,component_id,null,null,null));
});})(component_descr,temp__4126__auto__))
], null),"\u00D7"], null)], null);
} else
{return null;
}
});
var component_fnk__7881__auto___33183 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema33167 = schema.core.Any;var input_schema33168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map33165","map33165",-1777120920,null))], null);var input_checker33169 = schema.core.checker.call(null,input_schema33168);var output_checker33170 = schema.core.checker.call(null,output_schema33167);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function constructor33163(G__33171){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33171], null);var temp__4126__auto___33185 = input_checker33169.call(null,args__6035__auto___33184);if(cljs.core.truth_(temp__4126__auto___33185))
{var error__6036__auto___33186 = temp__4126__auto___33185;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33163","constructor33163",1204138399,null),cljs.core.pr_str.call(null,error__6036__auto___33186)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33186,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33184,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33168,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map33165 = G__33171;while(true){
if(cljs.core.map_QMARK_.call(null,map33165))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33165)));
}
var map33166 = plumbing.fnk.schema.safe_get.call(null,map33165,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map33166,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map33166,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map33165,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map33165,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t33176 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t33176 = (function (owner,map33165,input_schema33168,filter_spec,G__33171,output_schema33167,output_checker33170,state,components,validate__6034__auto__,map33166,input_checker33169,ufv__,constructor33163,meta33177){
this.owner = owner;
this.map33165 = map33165;
this.input_schema33168 = input_schema33168;
this.filter_spec = filter_spec;
this.G__33171 = G__33171;
this.output_schema33167 = output_schema33167;
this.output_checker33170 = output_checker33170;
this.state = state;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map33166 = map33166;
this.input_checker33169 = input_checker33169;
this.ufv__ = ufv__;
this.constructor33163 = constructor33163;
this.meta33177 = meta33177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t33176.cljs$lang$type = true;
clustermap.components.filter_description.t33176.cljs$lang$ctorStr = "clustermap.components.filter-description/t33176";
clustermap.components.filter_description.t33176.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t33176");
});})(owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
;
clustermap.components.filter_description.t33176.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t33176.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
;
clustermap.components.filter_description.t33176.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t33176.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (e){var new_open = cljs.core.not.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.filter_spec));return om.core.update_BANG_.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.filter_spec)));
});})(___$1,owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.filter_spec))?"Close filter":"Open filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
},"Clear filter")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__33179 = self__.components;var G__33179__$1 = (((G__33179 == null))?null:cljs.core.map.call(null,((function (G__33179,___$1,owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (p1__33161_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__33161_SHARP_);
});})(G__33179,___$1,owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
,G__33179));var G__33179__$2 = (((G__33179__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__33179__$1));return G__33179__$2;
})())));
});})(owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
;
clustermap.components.filter_description.t33176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (_33178){var self__ = this;
var _33178__$1 = this;return self__.meta33177;
});})(owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
;
clustermap.components.filter_description.t33176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function (_33178,meta33177__$1){var self__ = this;
var _33178__$1 = this;return (new clustermap.components.filter_description.t33176(self__.owner,self__.map33165,self__.input_schema33168,self__.filter_spec,self__.G__33171,self__.output_schema33167,self__.output_checker33170,self__.state,self__.components,self__.validate__6034__auto__,self__.map33166,self__.input_checker33169,self__.ufv__,self__.constructor33163,meta33177__$1));
});})(owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
;
clustermap.components.filter_description.__GT_t33176 = ((function (owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170){
return (function __GT_t33176(owner__$1,map33165__$1,input_schema33168__$1,filter_spec__$1,G__33171__$1,output_schema33167__$1,output_checker33170__$1,state__$1,components__$1,validate__6034__auto____$1,map33166__$1,input_checker33169__$1,ufv____$1,constructor33163__$1,meta33177){return (new clustermap.components.filter_description.t33176(owner__$1,map33165__$1,input_schema33168__$1,filter_spec__$1,G__33171__$1,output_schema33167__$1,output_checker33170__$1,state__$1,components__$1,validate__6034__auto____$1,map33166__$1,input_checker33169__$1,ufv____$1,constructor33163__$1,meta33177));
});})(owner,state,filter_spec,components,map33166,validate__6034__auto__,ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
;
}
return (new clustermap.components.filter_description.t33176(owner,map33165,input_schema33168,filter_spec,G__33171,output_schema33167,output_checker33170,state,components,validate__6034__auto__,map33166,input_checker33169,ufv__,constructor33163,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33187 = output_checker33170.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33187))
{var error__6036__auto___33188 = temp__4126__auto___33187;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33163","constructor33163",1204138399,null),cljs.core.pr_str.call(null,error__6036__auto___33188)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33188,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33167,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema33167,input_schema33168,input_checker33169,output_checker33170))
,schema.core.make_fn_schema.call(null,output_schema33167,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33168], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___33183){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner33162,p__33180){var vec__33182 = p__33180;var opts__7883__auto__ = cljs.core.nth.call(null,vec__33182,(0),null);return component_fnk__7881__auto___33183.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33162),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33162,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner33162,var_args){
var p__33180 = null;if (arguments.length > 2) {
  p__33180 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner33162,p__33180);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__33189){
var data__7882__auto__ = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var owner33162 = cljs.core.first(arglist__33189);
var p__33180 = cljs.core.rest(arglist__33189);
return filter_description_component__delegate(data__7882__auto__,owner33162,p__33180);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___33183))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m33164){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m33164);
});
__GT_filter_description_component = function(cursor__7850__auto__,m33164){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m33164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
