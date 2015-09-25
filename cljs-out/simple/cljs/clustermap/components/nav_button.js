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
var component_fnk__7881__auto___33122 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema33106 = schema.core.Any;var input_schema33107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map33102","map33102",-841528493,null))], null);var input_checker33108 = schema.core.checker.call(null,input_schema33107);var output_checker33109 = schema.core.checker.call(null,output_schema33106);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function constructor33100(G__33110){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33110], null);var temp__4126__auto___33124 = input_checker33108.call(null,args__6035__auto___33123);if(cljs.core.truth_(temp__4126__auto___33124))
{var error__6036__auto___33125 = temp__4126__auto___33124;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33100","constructor33100",-1957499506,null),cljs.core.pr_str.call(null,error__6036__auto___33125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33125,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33123,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33107,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map33102 = G__33110;while(true){
if(cljs.core.map_QMARK_.call(null,map33102))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33102)));
}
var map33104 = plumbing.fnk.schema.safe_get.call(null,map33102,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map33105 = plumbing.fnk.schema.safe_get.call(null,map33104,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map33105,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map33105,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map33105,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map33105,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map33103 = plumbing.fnk.schema.safe_get.call(null,map33102,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map33103,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map33102,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t33115 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t33115 = (function (output_schema33106,input_checker33108,owner,text,map33105,output_checker33109,map33103,G__33110,constructor33100,input_schema33107,map33102,target_view,map33104,validate__6034__auto__,id,class$,app,ufv__,meta33116){
this.output_schema33106 = output_schema33106;
this.input_checker33108 = input_checker33108;
this.owner = owner;
this.text = text;
this.map33105 = map33105;
this.output_checker33109 = output_checker33109;
this.map33103 = map33103;
this.G__33110 = G__33110;
this.constructor33100 = constructor33100;
this.input_schema33107 = input_schema33107;
this.map33102 = map33102;
this.target_view = target_view;
this.map33104 = map33104;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.meta33116 = meta33116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t33115.cljs$lang$type = true;
clustermap.components.nav_button.t33115.cljs$lang$ctorStr = "clustermap.components.nav-button/t33115";
clustermap.components.nav_button.t33115.cljs$lang$ctorPrWriter = ((function (owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t33115");
});})(owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
;
clustermap.components.nav_button.t33115.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t33115.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
;
clustermap.components.nav_button.t33115.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t33115.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function (_){var self__ = this;
var ___$1 = this;var attrs33118 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs33118))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs33118)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33118))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33118),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
;
clustermap.components.nav_button.t33115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function (_33117){var self__ = this;
var _33117__$1 = this;return self__.meta33116;
});})(owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
;
clustermap.components.nav_button.t33115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function (_33117,meta33116__$1){var self__ = this;
var _33117__$1 = this;return (new clustermap.components.nav_button.t33115(self__.output_schema33106,self__.input_checker33108,self__.owner,self__.text,self__.map33105,self__.output_checker33109,self__.map33103,self__.G__33110,self__.constructor33100,self__.input_schema33107,self__.map33102,self__.target_view,self__.map33104,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,meta33116__$1));
});})(owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
;
clustermap.components.nav_button.__GT_t33115 = ((function (owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109){
return (function __GT_t33115(output_schema33106__$1,input_checker33108__$1,owner__$1,text__$1,map33105__$1,output_checker33109__$1,map33103__$1,G__33110__$1,constructor33100__$1,input_schema33107__$1,map33102__$1,target_view__$1,map33104__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta33116){return (new clustermap.components.nav_button.t33115(output_schema33106__$1,input_checker33108__$1,owner__$1,text__$1,map33105__$1,output_checker33109__$1,map33103__$1,G__33110__$1,constructor33100__$1,input_schema33107__$1,map33102__$1,target_view__$1,map33104__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta33116));
});})(owner,app,map33103,id,class$,target_view,text,map33105,map33104,validate__6034__auto__,ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
;
}
return (new clustermap.components.nav_button.t33115(output_schema33106,input_checker33108,owner,text,map33105,output_checker33109,map33103,G__33110,constructor33100,input_schema33107,map33102,target_view,map33104,validate__6034__auto__,id,class$,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33126 = output_checker33109.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33126))
{var error__6036__auto___33127 = temp__4126__auto___33126;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33100","constructor33100",-1957499506,null),cljs.core.pr_str.call(null,error__6036__auto___33127)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33127,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33106,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema33106,input_schema33107,input_checker33108,output_checker33109))
,schema.core.make_fn_schema.call(null,output_schema33106,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33107], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___33122){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner33099,p__33119){var vec__33121 = p__33119;var opts__7883__auto__ = cljs.core.nth.call(null,vec__33121,(0),null);return component_fnk__7881__auto___33122.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner33099),new cljs.core.Keyword(null,"owner","owner",-392611939),owner33099,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner33099,var_args){
var p__33119 = null;if (arguments.length > 2) {
  p__33119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner33099,p__33119);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__33128){
var data__7882__auto__ = cljs.core.first(arglist__33128);
arglist__33128 = cljs.core.next(arglist__33128);
var owner33099 = cljs.core.first(arglist__33128);
var p__33119 = cljs.core.rest(arglist__33128);
return nav_button_component__delegate(data__7882__auto__,owner33099,p__33119);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___33122))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m33101){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m33101);
});
__GT_nav_button_component = function(cursor__7850__auto__,m33101){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m33101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
