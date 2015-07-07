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
var component_fnk__7881__auto___33220 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema33204 = schema.core.Any;var input_schema33205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map33202","map33202",-2029001291,null))], null);var input_checker33206 = schema.core.checker.call(null,input_schema33205);var output_checker33207 = schema.core.checker.call(null,output_schema33204);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function constructor33200(G__33208){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33208], null);var temp__4126__auto___33222 = input_checker33206.call(null,args__6035__auto___33221);if(cljs.core.truth_(temp__4126__auto___33222))
{var error__6036__auto___33223 = temp__4126__auto___33222;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33200","constructor33200",-1107426784,null),cljs.core.pr_str.call(null,error__6036__auto___33223)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33223,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33221,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33205,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map33202 = G__33208;while(true){
if(cljs.core.map_QMARK_.call(null,map33202))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33202)));
}
var map33203 = plumbing.fnk.schema.safe_get.call(null,map33202,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map33203,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map33203,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map33202,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map33202,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t33213 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t33213 = (function (constructor33200,input_checker33206,G__33208,owner,filter_spec,input_schema33205,map33203,state,map33202,components,output_checker33207,validate__6034__auto__,ufv__,output_schema33204,meta33214){
this.constructor33200 = constructor33200;
this.input_checker33206 = input_checker33206;
this.G__33208 = G__33208;
this.owner = owner;
this.filter_spec = filter_spec;
this.input_schema33205 = input_schema33205;
this.map33203 = map33203;
this.state = state;
this.map33202 = map33202;
this.components = components;
this.output_checker33207 = output_checker33207;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.output_schema33204 = output_schema33204;
this.meta33214 = meta33214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t33213.cljs$lang$type = true;
clustermap.components.filter_description.t33213.cljs$lang$ctorStr = "clustermap.components.filter-description/t33213";
clustermap.components.filter_description.t33213.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t33213");
});})(owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
;
clustermap.components.filter_description.t33213.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t33213.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
;
clustermap.components.filter_description.t33213.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t33213.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (e){var new_open = cljs.core.not.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.filter_spec));return om.core.update_BANG_.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.filter_spec)));
});})(___$1,owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(self__.filter_spec))?"Close filter":"Open filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
},"Clear filter")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__33216 = self__.components;var G__33216__$1 = (((G__33216 == null))?null:cljs.core.map.call(null,((function (G__33216,___$1,owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (p1__33198_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__33198_SHARP_);
});})(G__33216,___$1,owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
,G__33216));var G__33216__$2 = (((G__33216__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__33216__$1));return G__33216__$2;
})())));
});})(owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
;
clustermap.components.filter_description.t33213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (_33215){var self__ = this;
var _33215__$1 = this;return self__.meta33214;
});})(owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
;
clustermap.components.filter_description.t33213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function (_33215,meta33214__$1){var self__ = this;
var _33215__$1 = this;return (new clustermap.components.filter_description.t33213(self__.constructor33200,self__.input_checker33206,self__.G__33208,self__.owner,self__.filter_spec,self__.input_schema33205,self__.map33203,self__.state,self__.map33202,self__.components,self__.output_checker33207,self__.validate__6034__auto__,self__.ufv__,self__.output_schema33204,meta33214__$1));
});})(owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
;
clustermap.components.filter_description.__GT_t33213 = ((function (owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207){
return (function __GT_t33213(constructor33200__$1,input_checker33206__$1,G__33208__$1,owner__$1,filter_spec__$1,input_schema33205__$1,map33203__$1,state__$1,map33202__$1,components__$1,output_checker33207__$1,validate__6034__auto____$1,ufv____$1,output_schema33204__$1,meta33214){return (new clustermap.components.filter_description.t33213(constructor33200__$1,input_checker33206__$1,G__33208__$1,owner__$1,filter_spec__$1,input_schema33205__$1,map33203__$1,state__$1,map33202__$1,components__$1,output_checker33207__$1,validate__6034__auto____$1,ufv____$1,output_schema33204__$1,meta33214));
});})(owner,state,filter_spec,components,map33203,validate__6034__auto__,ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
;
}
return (new clustermap.components.filter_description.t33213(constructor33200,input_checker33206,G__33208,owner,filter_spec,input_schema33205,map33203,state,map33202,components,output_checker33207,validate__6034__auto__,ufv__,output_schema33204,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33224 = output_checker33207.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33224))
{var error__6036__auto___33225 = temp__4126__auto___33224;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33200","constructor33200",-1107426784,null),cljs.core.pr_str.call(null,error__6036__auto___33225)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33225,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33204,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema33204,input_schema33205,input_checker33206,output_checker33207))
,schema.core.make_fn_schema.call(null,output_schema33204,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33205], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___33220){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner33199,p__33217){var vec__33219 = p__33217;var opts__7883__auto__ = cljs.core.nth.call(null,vec__33219,(0),null);return component_fnk__7881__auto___33220.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33199),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33199,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner33199,var_args){
var p__33217 = null;if (arguments.length > 2) {
  p__33217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner33199,p__33217);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__33226){
var data__7882__auto__ = cljs.core.first(arglist__33226);
arglist__33226 = cljs.core.next(arglist__33226);
var owner33199 = cljs.core.first(arglist__33226);
var p__33217 = cljs.core.rest(arglist__33226);
return filter_description_component__delegate(data__7882__auto__,owner33199,p__33217);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___33220))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m33201){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m33201);
});
__GT_filter_description_component = function(cursor__7850__auto__,m33201){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m33201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
