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
var component_fnk__7881__auto___29155 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29139 = schema.core.Any;var input_schema29140 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_button.ActionButtonSchema], true, false),new cljs.core.Symbol(null,"map29135","map29135",-169403550,null))], null);var input_checker29141 = schema.core.checker.call(null,input_schema29140);var output_checker29142 = schema.core.checker.call(null,output_schema29139);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function constructor29133(G__29143){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29143], null);var temp__4126__auto___29157 = input_checker29141.call(null,args__6035__auto___29156);if(cljs.core.truth_(temp__4126__auto___29157))
{var error__6036__auto___29158 = temp__4126__auto___29157;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29133","constructor29133",708583210,null),cljs.core.pr_str.call(null,error__6036__auto___29158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29158,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29156,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29140,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29135 = G__29143;while(true){
if(cljs.core.map_QMARK_.call(null,map29135))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29135)));
}
var map29137 = plumbing.fnk.schema.safe_get.call(null,map29135,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map29138 = plumbing.fnk.schema.safe_get.call(null,map29137,new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map29138,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var action = plumbing.fnk.schema.safe_get.call(null,map29138,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map29138,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var id = cljs.core.get.call(null,map29138,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map29136 = plumbing.fnk.schema.safe_get.call(null,map29135,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map29136,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29135,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_button.t29148 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_button.t29148 = (function (map29135,map29138,owner,text,constructor29133,map29136,input_schema29140,output_schema29139,input_checker29141,validate__6034__auto__,id,class$,output_checker29142,app,map29137,ufv__,G__29143,action,meta29149){
this.map29135 = map29135;
this.map29138 = map29138;
this.owner = owner;
this.text = text;
this.constructor29133 = constructor29133;
this.map29136 = map29136;
this.input_schema29140 = input_schema29140;
this.output_schema29139 = output_schema29139;
this.input_checker29141 = input_checker29141;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.output_checker29142 = output_checker29142;
this.app = app;
this.map29137 = map29137;
this.ufv__ = ufv__;
this.G__29143 = G__29143;
this.action = action;
this.meta29149 = meta29149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_button.t29148.cljs$lang$type = true;
clustermap.components.action_button.t29148.cljs$lang$ctorStr = "clustermap.components.action-button/t29148";
clustermap.components.action_button.t29148.cljs$lang$ctorPrWriter = ((function (owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-button/t29148");
});})(owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
;
clustermap.components.action_button.t29148.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_button.t29148.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function (_){var self__ = this;
var ___$1 = this;return "action-button-component";
});})(owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
;
clustermap.components.action_button.t29148.prototype.om$core$IRender$ = true;
clustermap.components.action_button.t29148.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29151 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs29151))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs29151)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29151))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29151),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
;
clustermap.components.action_button.t29148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function (_29150){var self__ = this;
var _29150__$1 = this;return self__.meta29149;
});})(owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
;
clustermap.components.action_button.t29148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function (_29150,meta29149__$1){var self__ = this;
var _29150__$1 = this;return (new clustermap.components.action_button.t29148(self__.map29135,self__.map29138,self__.owner,self__.text,self__.constructor29133,self__.map29136,self__.input_schema29140,self__.output_schema29139,self__.input_checker29141,self__.validate__6034__auto__,self__.id,self__.class$,self__.output_checker29142,self__.app,self__.map29137,self__.ufv__,self__.G__29143,self__.action,meta29149__$1));
});})(owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
;
clustermap.components.action_button.__GT_t29148 = ((function (owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142){
return (function __GT_t29148(map29135__$1,map29138__$1,owner__$1,text__$1,constructor29133__$1,map29136__$1,input_schema29140__$1,output_schema29139__$1,input_checker29141__$1,validate__6034__auto____$1,id__$1,class$__$1,output_checker29142__$1,app__$1,map29137__$1,ufv____$1,G__29143__$1,action__$1,meta29149){return (new clustermap.components.action_button.t29148(map29135__$1,map29138__$1,owner__$1,text__$1,constructor29133__$1,map29136__$1,input_schema29140__$1,output_schema29139__$1,input_checker29141__$1,validate__6034__auto____$1,id__$1,class$__$1,output_checker29142__$1,app__$1,map29137__$1,ufv____$1,G__29143__$1,action__$1,meta29149));
});})(owner,app,map29136,id,class$,action,text,map29138,map29137,validate__6034__auto__,ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
;
}
return (new clustermap.components.action_button.t29148(map29135,map29138,owner,text,constructor29133,map29136,input_schema29140,output_schema29139,input_checker29141,validate__6034__auto__,id,class$,output_checker29142,app,map29137,ufv__,G__29143,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29159 = output_checker29142.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29159))
{var error__6036__auto___29160 = temp__4126__auto___29159;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29133","constructor29133",708583210,null),cljs.core.pr_str.call(null,error__6036__auto___29160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29160,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29139,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29139,input_schema29140,input_checker29141,output_checker29142))
,schema.core.make_fn_schema.call(null,output_schema29139,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29140], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_button.action_button_component = ((function (component_fnk__7881__auto___29155){
return (function() { 
var action_button_component__delegate = function (data__7882__auto__,owner29132,p__29152){var vec__29154 = p__29152;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29154,(0),null);return component_fnk__7881__auto___29155.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29132),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29132,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_button_component = function (data__7882__auto__,owner29132,var_args){
var p__29152 = null;if (arguments.length > 2) {
  p__29152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_button_component__delegate.call(this,data__7882__auto__,owner29132,p__29152);};
action_button_component.cljs$lang$maxFixedArity = 2;
action_button_component.cljs$lang$applyTo = (function (arglist__29161){
var data__7882__auto__ = cljs.core.first(arglist__29161);
arglist__29161 = cljs.core.next(arglist__29161);
var owner29132 = cljs.core.first(arglist__29161);
var p__29152 = cljs.core.rest(arglist__29161);
return action_button_component__delegate(data__7882__auto__,owner29132,p__29152);
});
action_button_component.cljs$core$IFn$_invoke$arity$variadic = action_button_component__delegate;
return action_button_component;
})()
;})(component_fnk__7881__auto___29155))
;
clustermap.components.action_button.__GT_action_button_component = (function() {
var __GT_action_button_component = null;
var __GT_action_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__);
});
var __GT_action_button_component__2 = (function (cursor__7850__auto__,m29134){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__,m29134);
});
__GT_action_button_component = function(cursor__7850__auto__,m29134){
switch(arguments.length){
case 1:
return __GT_action_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_button_component__2.call(this,cursor__7850__auto__,m29134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_button_component__1;
__GT_action_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_button_component__2;
return __GT_action_button_component;
})()
;
