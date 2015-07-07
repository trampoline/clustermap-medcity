// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.nav_button');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.nav_button.NavButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___33113 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema33097 = schema.core.Any;var input_schema33098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map33093","map33093",-1705582755,null))], null);var input_checker33099 = schema.core.checker.call(null,input_schema33098);var output_checker33100 = schema.core.checker.call(null,output_schema33097);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function constructor33091(G__33101){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33101], null);var temp__4126__auto___33115 = input_checker33099.call(null,args__6035__auto___33114);if(cljs.core.truth_(temp__4126__auto___33115))
{var error__6036__auto___33116 = temp__4126__auto___33115;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33091","constructor33091",-1256081817,null),cljs.core.pr_str.call(null,error__6036__auto___33116)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33116,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33114,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33098,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map33093 = G__33101;while(true){
if(cljs.core.map_QMARK_.call(null,map33093))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33093)));
}
var map33095 = plumbing.fnk.schema.safe_get.call(null,map33093,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map33096 = plumbing.fnk.schema.safe_get.call(null,map33095,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map33096,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map33096,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map33096,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map33096,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map33094 = plumbing.fnk.schema.safe_get.call(null,map33093,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map33094,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map33093,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t33106 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t33106 = (function (output_schema33097,owner,text,G__33101,constructor33091,map33095,input_checker33099,input_schema33098,map33096,map33094,output_checker33100,target_view,validate__6034__auto__,id,class$,app,ufv__,map33093,meta33107){
this.output_schema33097 = output_schema33097;
this.owner = owner;
this.text = text;
this.G__33101 = G__33101;
this.constructor33091 = constructor33091;
this.map33095 = map33095;
this.input_checker33099 = input_checker33099;
this.input_schema33098 = input_schema33098;
this.map33096 = map33096;
this.map33094 = map33094;
this.output_checker33100 = output_checker33100;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.map33093 = map33093;
this.meta33107 = meta33107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t33106.cljs$lang$type = true;
clustermap.components.nav_button.t33106.cljs$lang$ctorStr = "clustermap.components.nav-button/t33106";
clustermap.components.nav_button.t33106.cljs$lang$ctorPrWriter = ((function (owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t33106");
});})(owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
;
clustermap.components.nav_button.t33106.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t33106.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
;
clustermap.components.nav_button.t33106.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t33106.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function (_){var self__ = this;
var ___$1 = this;var attrs33109 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs33109))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs33109)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33109))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33109),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
;
clustermap.components.nav_button.t33106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function (_33108){var self__ = this;
var _33108__$1 = this;return self__.meta33107;
});})(owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
;
clustermap.components.nav_button.t33106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function (_33108,meta33107__$1){var self__ = this;
var _33108__$1 = this;return (new clustermap.components.nav_button.t33106(self__.output_schema33097,self__.owner,self__.text,self__.G__33101,self__.constructor33091,self__.map33095,self__.input_checker33099,self__.input_schema33098,self__.map33096,self__.map33094,self__.output_checker33100,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.map33093,meta33107__$1));
});})(owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
;
clustermap.components.nav_button.__GT_t33106 = ((function (owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100){
return (function __GT_t33106(output_schema33097__$1,owner__$1,text__$1,G__33101__$1,constructor33091__$1,map33095__$1,input_checker33099__$1,input_schema33098__$1,map33096__$1,map33094__$1,output_checker33100__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,map33093__$1,meta33107){return (new clustermap.components.nav_button.t33106(output_schema33097__$1,owner__$1,text__$1,G__33101__$1,constructor33091__$1,map33095__$1,input_checker33099__$1,input_schema33098__$1,map33096__$1,map33094__$1,output_checker33100__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,map33093__$1,meta33107));
});})(owner,app,map33094,id,class$,target_view,text,map33096,map33095,validate__6034__auto__,ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
;
}
return (new clustermap.components.nav_button.t33106(output_schema33097,owner,text,G__33101,constructor33091,map33095,input_checker33099,input_schema33098,map33096,map33094,output_checker33100,target_view,validate__6034__auto__,id,class$,app,ufv__,map33093,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33117 = output_checker33100.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33117))
{var error__6036__auto___33118 = temp__4126__auto___33117;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33091","constructor33091",-1256081817,null),cljs.core.pr_str.call(null,error__6036__auto___33118)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33118,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33097,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema33097,input_schema33098,input_checker33099,output_checker33100))
,schema.core.make_fn_schema.call(null,output_schema33097,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33098], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___33113){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner33090,p__33110){var vec__33112 = p__33110;var opts__7883__auto__ = cljs.core.nth.call(null,vec__33112,(0),null);return component_fnk__7881__auto___33113.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner33090),new cljs.core.Keyword(null,"owner","owner",-392611939),owner33090,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner33090,var_args){
var p__33110 = null;if (arguments.length > 2) {
  p__33110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner33090,p__33110);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__33119){
var data__7882__auto__ = cljs.core.first(arglist__33119);
arglist__33119 = cljs.core.next(arglist__33119);
var owner33090 = cljs.core.first(arglist__33119);
var p__33110 = cljs.core.rest(arglist__33119);
return nav_button_component__delegate(data__7882__auto__,owner33090,p__33110);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___33113))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m33092){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m33092);
});
__GT_nav_button_component = function(cursor__7850__auto__,m33092){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m33092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
