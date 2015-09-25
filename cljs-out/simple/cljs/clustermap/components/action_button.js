// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.action_button');
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
clustermap.components.action_button.ActionButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___29164 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29148 = schema.core.Any;var input_schema29149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_button.ActionButtonSchema], true, false),new cljs.core.Symbol(null,"map29144","map29144",1273652761,null))], null);var input_checker29150 = schema.core.checker.call(null,input_schema29149);var output_checker29151 = schema.core.checker.call(null,output_schema29148);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function constructor29142(G__29152){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29152], null);var temp__4126__auto___29166 = input_checker29150.call(null,args__6035__auto___29165);if(cljs.core.truth_(temp__4126__auto___29166))
{var error__6036__auto___29167 = temp__4126__auto___29166;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29142","constructor29142",2132967857,null),cljs.core.pr_str.call(null,error__6036__auto___29167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29167,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29165,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29149,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29144 = G__29152;while(true){
if(cljs.core.map_QMARK_.call(null,map29144))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29144)));
}
var map29146 = plumbing.fnk.schema.safe_get.call(null,map29144,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map29147 = plumbing.fnk.schema.safe_get.call(null,map29146,new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map29147,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var action = plumbing.fnk.schema.safe_get.call(null,map29147,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map29147,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var id = cljs.core.get.call(null,map29147,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map29145 = plumbing.fnk.schema.safe_get.call(null,map29144,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map29145,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29144,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_button.t29157 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_button.t29157 = (function (owner,map29146,text,map29145,input_schema29149,map29147,G__29152,constructor29142,output_schema29148,input_checker29150,output_checker29151,map29144,validate__6034__auto__,id,class$,app,ufv__,action,meta29158){
this.owner = owner;
this.map29146 = map29146;
this.text = text;
this.map29145 = map29145;
this.input_schema29149 = input_schema29149;
this.map29147 = map29147;
this.G__29152 = G__29152;
this.constructor29142 = constructor29142;
this.output_schema29148 = output_schema29148;
this.input_checker29150 = input_checker29150;
this.output_checker29151 = output_checker29151;
this.map29144 = map29144;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.action = action;
this.meta29158 = meta29158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_button.t29157.cljs$lang$type = true;
clustermap.components.action_button.t29157.cljs$lang$ctorStr = "clustermap.components.action-button/t29157";
clustermap.components.action_button.t29157.cljs$lang$ctorPrWriter = ((function (owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-button/t29157");
});})(owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
;
clustermap.components.action_button.t29157.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_button.t29157.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function (_){var self__ = this;
var ___$1 = this;return "action-button-component";
});})(owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
;
clustermap.components.action_button.t29157.prototype.om$core$IRender$ = true;
clustermap.components.action_button.t29157.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29160 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs29160))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs29160)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29160))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29160),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
;
clustermap.components.action_button.t29157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function (_29159){var self__ = this;
var _29159__$1 = this;return self__.meta29158;
});})(owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
;
clustermap.components.action_button.t29157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function (_29159,meta29158__$1){var self__ = this;
var _29159__$1 = this;return (new clustermap.components.action_button.t29157(self__.owner,self__.map29146,self__.text,self__.map29145,self__.input_schema29149,self__.map29147,self__.G__29152,self__.constructor29142,self__.output_schema29148,self__.input_checker29150,self__.output_checker29151,self__.map29144,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.action,meta29158__$1));
});})(owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
;
clustermap.components.action_button.__GT_t29157 = ((function (owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151){
return (function __GT_t29157(owner__$1,map29146__$1,text__$1,map29145__$1,input_schema29149__$1,map29147__$1,G__29152__$1,constructor29142__$1,output_schema29148__$1,input_checker29150__$1,output_checker29151__$1,map29144__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,action__$1,meta29158){return (new clustermap.components.action_button.t29157(owner__$1,map29146__$1,text__$1,map29145__$1,input_schema29149__$1,map29147__$1,G__29152__$1,constructor29142__$1,output_schema29148__$1,input_checker29150__$1,output_checker29151__$1,map29144__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,action__$1,meta29158));
});})(owner,app,map29145,id,class$,action,text,map29147,map29146,validate__6034__auto__,ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
;
}
return (new clustermap.components.action_button.t29157(owner,map29146,text,map29145,input_schema29149,map29147,G__29152,constructor29142,output_schema29148,input_checker29150,output_checker29151,map29144,validate__6034__auto__,id,class$,app,ufv__,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29168 = output_checker29151.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29168))
{var error__6036__auto___29169 = temp__4126__auto___29168;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29142","constructor29142",2132967857,null),cljs.core.pr_str.call(null,error__6036__auto___29169)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29169,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29148,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29148,input_schema29149,input_checker29150,output_checker29151))
,schema.core.make_fn_schema.call(null,output_schema29148,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29149], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_button.action_button_component = ((function (component_fnk__7881__auto___29164){
return (function() { 
var action_button_component__delegate = function (data__7882__auto__,owner29141,p__29161){var vec__29163 = p__29161;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29163,(0),null);return component_fnk__7881__auto___29164.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29141),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29141,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_button_component = function (data__7882__auto__,owner29141,var_args){
var p__29161 = null;if (arguments.length > 2) {
  p__29161 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_button_component__delegate.call(this,data__7882__auto__,owner29141,p__29161);};
action_button_component.cljs$lang$maxFixedArity = 2;
action_button_component.cljs$lang$applyTo = (function (arglist__29170){
var data__7882__auto__ = cljs.core.first(arglist__29170);
arglist__29170 = cljs.core.next(arglist__29170);
var owner29141 = cljs.core.first(arglist__29170);
var p__29161 = cljs.core.rest(arglist__29170);
return action_button_component__delegate(data__7882__auto__,owner29141,p__29161);
});
action_button_component.cljs$core$IFn$_invoke$arity$variadic = action_button_component__delegate;
return action_button_component;
})()
;})(component_fnk__7881__auto___29164))
;
clustermap.components.action_button.__GT_action_button_component = (function() {
var __GT_action_button_component = null;
var __GT_action_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__);
});
var __GT_action_button_component__2 = (function (cursor__7850__auto__,m29143){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__,m29143);
});
__GT_action_button_component = function(cursor__7850__auto__,m29143){
switch(arguments.length){
case 1:
return __GT_action_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_button_component__2.call(this,cursor__7850__auto__,m29143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_button_component__1;
__GT_action_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_button_component__2;
return __GT_action_button_component;
})()
;
