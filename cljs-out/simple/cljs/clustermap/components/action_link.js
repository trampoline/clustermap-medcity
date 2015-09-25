// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.action_link');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.action_link.ActionLinkSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"content","content",15833224),schema.core.Any,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___28510 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28494 = schema.core.Any;var input_schema28495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_link.ActionLinkSchema], true, false),new cljs.core.Symbol(null,"map28490","map28490",1301902725,null))], null);var input_checker28496 = schema.core.checker.call(null,input_schema28495);var output_checker28497 = schema.core.checker.call(null,output_schema28494);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function constructor28488(G__28498){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28498], null);var temp__4126__auto___28512 = input_checker28496.call(null,args__6035__auto___28511);if(cljs.core.truth_(temp__4126__auto___28512))
{var error__6036__auto___28513 = temp__4126__auto___28512;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28488","constructor28488",-14741832,null),cljs.core.pr_str.call(null,error__6036__auto___28513)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28513,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28511,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28495,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28490 = G__28498;while(true){
if(cljs.core.map_QMARK_.call(null,map28490))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28490)));
}
var map28492 = plumbing.fnk.schema.safe_get.call(null,map28490,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28493 = plumbing.fnk.schema.safe_get.call(null,map28492,new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var content = plumbing.fnk.schema.safe_get.call(null,map28493,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28493,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var class$ = cljs.core.get.call(null,map28493,new cljs.core.Keyword(null,"class","class",-2030961996),null);var id = cljs.core.get.call(null,map28493,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28491 = plumbing.fnk.schema.safe_get.call(null,map28490,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28491,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28490,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_link.t28503 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_link.t28503 = (function (owner,map28490,input_checker28496,content,input_schema28495,G__28498,map28493,map28492,constructor28488,validate__6034__auto__,output_schema28494,id,class$,map28491,output_checker28497,app,ufv__,action,meta28504){
this.owner = owner;
this.map28490 = map28490;
this.input_checker28496 = input_checker28496;
this.content = content;
this.input_schema28495 = input_schema28495;
this.G__28498 = G__28498;
this.map28493 = map28493;
this.map28492 = map28492;
this.constructor28488 = constructor28488;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema28494 = output_schema28494;
this.id = id;
this.class$ = class$;
this.map28491 = map28491;
this.output_checker28497 = output_checker28497;
this.app = app;
this.ufv__ = ufv__;
this.action = action;
this.meta28504 = meta28504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_link.t28503.cljs$lang$type = true;
clustermap.components.action_link.t28503.cljs$lang$ctorStr = "clustermap.components.action-link/t28503";
clustermap.components.action_link.t28503.cljs$lang$ctorPrWriter = ((function (owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-link/t28503");
});})(owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
;
clustermap.components.action_link.t28503.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_link.t28503.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function (_){var self__ = this;
var ___$1 = this;return "action-link-component";
});})(owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
;
clustermap.components.action_link.t28503.prototype.om$core$IRender$ = true;
clustermap.components.action_link.t28503.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28506 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function (e){e.preventDefault();
return self__.action.call(null);
});})(___$1,owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.a,((cljs.core.map_QMARK_.call(null,attrs28506))?sablono.interpreter.attributes.call(null,attrs28506):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28506))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.content.call(null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28506),sablono.interpreter.interpret.call(null,self__.content.call(null))], null))));
});})(owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
;
clustermap.components.action_link.t28503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function (_28505){var self__ = this;
var _28505__$1 = this;return self__.meta28504;
});})(owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
;
clustermap.components.action_link.t28503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function (_28505,meta28504__$1){var self__ = this;
var _28505__$1 = this;return (new clustermap.components.action_link.t28503(self__.owner,self__.map28490,self__.input_checker28496,self__.content,self__.input_schema28495,self__.G__28498,self__.map28493,self__.map28492,self__.constructor28488,self__.validate__6034__auto__,self__.output_schema28494,self__.id,self__.class$,self__.map28491,self__.output_checker28497,self__.app,self__.ufv__,self__.action,meta28504__$1));
});})(owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
;
clustermap.components.action_link.__GT_t28503 = ((function (owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497){
return (function __GT_t28503(owner__$1,map28490__$1,input_checker28496__$1,content__$1,input_schema28495__$1,G__28498__$1,map28493__$1,map28492__$1,constructor28488__$1,validate__6034__auto____$1,output_schema28494__$1,id__$1,class$__$1,map28491__$1,output_checker28497__$1,app__$1,ufv____$1,action__$1,meta28504){return (new clustermap.components.action_link.t28503(owner__$1,map28490__$1,input_checker28496__$1,content__$1,input_schema28495__$1,G__28498__$1,map28493__$1,map28492__$1,constructor28488__$1,validate__6034__auto____$1,output_schema28494__$1,id__$1,class$__$1,map28491__$1,output_checker28497__$1,app__$1,ufv____$1,action__$1,meta28504));
});})(owner,app,map28491,id,class$,action,content,map28493,map28492,validate__6034__auto__,ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
;
}
return (new clustermap.components.action_link.t28503(owner,map28490,input_checker28496,content,input_schema28495,G__28498,map28493,map28492,constructor28488,validate__6034__auto__,output_schema28494,id,class$,map28491,output_checker28497,app,ufv__,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28514 = output_checker28497.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28514))
{var error__6036__auto___28515 = temp__4126__auto___28514;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28488","constructor28488",-14741832,null),cljs.core.pr_str.call(null,error__6036__auto___28515)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28515,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28494,input_schema28495,input_checker28496,output_checker28497))
,schema.core.make_fn_schema.call(null,output_schema28494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28495], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_link.action_link_component = ((function (component_fnk__7881__auto___28510){
return (function() { 
var action_link_component__delegate = function (data__7882__auto__,owner28487,p__28507){var vec__28509 = p__28507;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28509,(0),null);return component_fnk__7881__auto___28510.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28487),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28487,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_link_component = function (data__7882__auto__,owner28487,var_args){
var p__28507 = null;if (arguments.length > 2) {
  p__28507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_link_component__delegate.call(this,data__7882__auto__,owner28487,p__28507);};
action_link_component.cljs$lang$maxFixedArity = 2;
action_link_component.cljs$lang$applyTo = (function (arglist__28516){
var data__7882__auto__ = cljs.core.first(arglist__28516);
arglist__28516 = cljs.core.next(arglist__28516);
var owner28487 = cljs.core.first(arglist__28516);
var p__28507 = cljs.core.rest(arglist__28516);
return action_link_component__delegate(data__7882__auto__,owner28487,p__28507);
});
action_link_component.cljs$core$IFn$_invoke$arity$variadic = action_link_component__delegate;
return action_link_component;
})()
;})(component_fnk__7881__auto___28510))
;
clustermap.components.action_link.__GT_action_link_component = (function() {
var __GT_action_link_component = null;
var __GT_action_link_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__);
});
var __GT_action_link_component__2 = (function (cursor__7850__auto__,m28489){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__,m28489);
});
__GT_action_link_component = function(cursor__7850__auto__,m28489){
switch(arguments.length){
case 1:
return __GT_action_link_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_link_component__2.call(this,cursor__7850__auto__,m28489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_link_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_link_component__1;
__GT_action_link_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_link_component__2;
return __GT_action_link_component;
})()
;
