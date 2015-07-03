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
var component_fnk__7881__auto___29098 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29082 = schema.core.Any;var input_schema29083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_button.ActionButtonSchema], true, false),new cljs.core.Symbol(null,"map29078","map29078",-31846729,null))], null);var input_checker29084 = schema.core.checker.call(null,input_schema29083);var output_checker29085 = schema.core.checker.call(null,output_schema29082);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function constructor29076(G__29086){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29086], null);var temp__4126__auto___29100 = input_checker29084.call(null,args__6035__auto___29099);if(cljs.core.truth_(temp__4126__auto___29100))
{var error__6036__auto___29101 = temp__4126__auto___29100;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29076","constructor29076",-699878696,null),cljs.core.pr_str.call(null,error__6036__auto___29101)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29101,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29099,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29083,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29078 = G__29086;while(true){
if(cljs.core.map_QMARK_.call(null,map29078))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29078)));
}
var map29080 = plumbing.fnk.schema.safe_get.call(null,map29078,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map29081 = plumbing.fnk.schema.safe_get.call(null,map29080,new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map29081,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var action = plumbing.fnk.schema.safe_get.call(null,map29081,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map29081,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var id = cljs.core.get.call(null,map29081,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map29079 = plumbing.fnk.schema.safe_get.call(null,map29078,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map29079,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29078,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_button.t29091 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_button.t29091 = (function (input_checker29084,owner,text,map29079,output_checker29085,input_schema29083,G__29086,map29078,constructor29076,map29080,map29081,validate__6034__auto__,id,class$,output_schema29082,app,ufv__,action,meta29092){
this.input_checker29084 = input_checker29084;
this.owner = owner;
this.text = text;
this.map29079 = map29079;
this.output_checker29085 = output_checker29085;
this.input_schema29083 = input_schema29083;
this.G__29086 = G__29086;
this.map29078 = map29078;
this.constructor29076 = constructor29076;
this.map29080 = map29080;
this.map29081 = map29081;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.output_schema29082 = output_schema29082;
this.app = app;
this.ufv__ = ufv__;
this.action = action;
this.meta29092 = meta29092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_button.t29091.cljs$lang$type = true;
clustermap.components.action_button.t29091.cljs$lang$ctorStr = "clustermap.components.action-button/t29091";
clustermap.components.action_button.t29091.cljs$lang$ctorPrWriter = ((function (owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-button/t29091");
});})(owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
;
clustermap.components.action_button.t29091.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_button.t29091.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function (_){var self__ = this;
var ___$1 = this;return "action-button-component";
});})(owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
;
clustermap.components.action_button.t29091.prototype.om$core$IRender$ = true;
clustermap.components.action_button.t29091.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29094 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs29094))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs29094)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29094))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29094),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
;
clustermap.components.action_button.t29091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function (_29093){var self__ = this;
var _29093__$1 = this;return self__.meta29092;
});})(owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
;
clustermap.components.action_button.t29091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function (_29093,meta29092__$1){var self__ = this;
var _29093__$1 = this;return (new clustermap.components.action_button.t29091(self__.input_checker29084,self__.owner,self__.text,self__.map29079,self__.output_checker29085,self__.input_schema29083,self__.G__29086,self__.map29078,self__.constructor29076,self__.map29080,self__.map29081,self__.validate__6034__auto__,self__.id,self__.class$,self__.output_schema29082,self__.app,self__.ufv__,self__.action,meta29092__$1));
});})(owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
;
clustermap.components.action_button.__GT_t29091 = ((function (owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085){
return (function __GT_t29091(input_checker29084__$1,owner__$1,text__$1,map29079__$1,output_checker29085__$1,input_schema29083__$1,G__29086__$1,map29078__$1,constructor29076__$1,map29080__$1,map29081__$1,validate__6034__auto____$1,id__$1,class$__$1,output_schema29082__$1,app__$1,ufv____$1,action__$1,meta29092){return (new clustermap.components.action_button.t29091(input_checker29084__$1,owner__$1,text__$1,map29079__$1,output_checker29085__$1,input_schema29083__$1,G__29086__$1,map29078__$1,constructor29076__$1,map29080__$1,map29081__$1,validate__6034__auto____$1,id__$1,class$__$1,output_schema29082__$1,app__$1,ufv____$1,action__$1,meta29092));
});})(owner,app,map29079,id,class$,action,text,map29081,map29080,validate__6034__auto__,ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
;
}
return (new clustermap.components.action_button.t29091(input_checker29084,owner,text,map29079,output_checker29085,input_schema29083,G__29086,map29078,constructor29076,map29080,map29081,validate__6034__auto__,id,class$,output_schema29082,app,ufv__,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29102 = output_checker29085.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29102))
{var error__6036__auto___29103 = temp__4126__auto___29102;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29076","constructor29076",-699878696,null),cljs.core.pr_str.call(null,error__6036__auto___29103)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29103,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29082,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29082,input_schema29083,input_checker29084,output_checker29085))
,schema.core.make_fn_schema.call(null,output_schema29082,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29083], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_button.action_button_component = ((function (component_fnk__7881__auto___29098){
return (function() { 
var action_button_component__delegate = function (data__7882__auto__,owner29075,p__29095){var vec__29097 = p__29095;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29097,(0),null);return component_fnk__7881__auto___29098.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29075),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29075,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_button_component = function (data__7882__auto__,owner29075,var_args){
var p__29095 = null;if (arguments.length > 2) {
  p__29095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_button_component__delegate.call(this,data__7882__auto__,owner29075,p__29095);};
action_button_component.cljs$lang$maxFixedArity = 2;
action_button_component.cljs$lang$applyTo = (function (arglist__29104){
var data__7882__auto__ = cljs.core.first(arglist__29104);
arglist__29104 = cljs.core.next(arglist__29104);
var owner29075 = cljs.core.first(arglist__29104);
var p__29095 = cljs.core.rest(arglist__29104);
return action_button_component__delegate(data__7882__auto__,owner29075,p__29095);
});
action_button_component.cljs$core$IFn$_invoke$arity$variadic = action_button_component__delegate;
return action_button_component;
})()
;})(component_fnk__7881__auto___29098))
;
clustermap.components.action_button.__GT_action_button_component = (function() {
var __GT_action_button_component = null;
var __GT_action_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__);
});
var __GT_action_button_component__2 = (function (cursor__7850__auto__,m29077){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__,m29077);
});
__GT_action_button_component = function(cursor__7850__auto__,m29077){
switch(arguments.length){
case 1:
return __GT_action_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_button_component__2.call(this,cursor__7850__auto__,m29077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_button_component__1;
__GT_action_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_button_component__2;
return __GT_action_button_component;
})()
;
