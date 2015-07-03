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
var component_fnk__7881__auto___33076 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema33060 = schema.core.Any;var input_schema33061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map33056","map33056",-1280390374,null))], null);var input_checker33062 = schema.core.checker.call(null,input_schema33061);var output_checker33063 = schema.core.checker.call(null,output_schema33060);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function constructor33054(G__33064){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___33077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33064], null);var temp__4126__auto___33078 = input_checker33062.call(null,args__6035__auto___33077);if(cljs.core.truth_(temp__4126__auto___33078))
{var error__6036__auto___33079 = temp__4126__auto___33078;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33054","constructor33054",-2006030785,null),cljs.core.pr_str.call(null,error__6036__auto___33079)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33079,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___33077,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33061,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map33056 = G__33064;while(true){
if(cljs.core.map_QMARK_.call(null,map33056))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33056)));
}
var map33058 = plumbing.fnk.schema.safe_get.call(null,map33056,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map33059 = plumbing.fnk.schema.safe_get.call(null,map33058,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map33059,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map33059,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map33059,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map33059,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map33057 = plumbing.fnk.schema.safe_get.call(null,map33056,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map33057,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map33056,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t33069 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t33069 = (function (map33059,owner,text,output_checker33063,G__33064,map33058,input_checker33062,input_schema33061,target_view,output_schema33060,map33057,validate__6034__auto__,map33056,id,class$,app,ufv__,constructor33054,meta33070){
this.map33059 = map33059;
this.owner = owner;
this.text = text;
this.output_checker33063 = output_checker33063;
this.G__33064 = G__33064;
this.map33058 = map33058;
this.input_checker33062 = input_checker33062;
this.input_schema33061 = input_schema33061;
this.target_view = target_view;
this.output_schema33060 = output_schema33060;
this.map33057 = map33057;
this.validate__6034__auto__ = validate__6034__auto__;
this.map33056 = map33056;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.constructor33054 = constructor33054;
this.meta33070 = meta33070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t33069.cljs$lang$type = true;
clustermap.components.nav_button.t33069.cljs$lang$ctorStr = "clustermap.components.nav-button/t33069";
clustermap.components.nav_button.t33069.cljs$lang$ctorPrWriter = ((function (owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t33069");
});})(owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
;
clustermap.components.nav_button.t33069.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t33069.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
;
clustermap.components.nav_button.t33069.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t33069.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function (_){var self__ = this;
var ___$1 = this;var attrs33072 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs33072))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs33072)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33072))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33072),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
;
clustermap.components.nav_button.t33069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function (_33071){var self__ = this;
var _33071__$1 = this;return self__.meta33070;
});})(owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
;
clustermap.components.nav_button.t33069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function (_33071,meta33070__$1){var self__ = this;
var _33071__$1 = this;return (new clustermap.components.nav_button.t33069(self__.map33059,self__.owner,self__.text,self__.output_checker33063,self__.G__33064,self__.map33058,self__.input_checker33062,self__.input_schema33061,self__.target_view,self__.output_schema33060,self__.map33057,self__.validate__6034__auto__,self__.map33056,self__.id,self__.class$,self__.app,self__.ufv__,self__.constructor33054,meta33070__$1));
});})(owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
;
clustermap.components.nav_button.__GT_t33069 = ((function (owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063){
return (function __GT_t33069(map33059__$1,owner__$1,text__$1,output_checker33063__$1,G__33064__$1,map33058__$1,input_checker33062__$1,input_schema33061__$1,target_view__$1,output_schema33060__$1,map33057__$1,validate__6034__auto____$1,map33056__$1,id__$1,class$__$1,app__$1,ufv____$1,constructor33054__$1,meta33070){return (new clustermap.components.nav_button.t33069(map33059__$1,owner__$1,text__$1,output_checker33063__$1,G__33064__$1,map33058__$1,input_checker33062__$1,input_schema33061__$1,target_view__$1,output_schema33060__$1,map33057__$1,validate__6034__auto____$1,map33056__$1,id__$1,class$__$1,app__$1,ufv____$1,constructor33054__$1,meta33070));
});})(owner,app,map33057,id,class$,target_view,text,map33059,map33058,validate__6034__auto__,ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
;
}
return (new clustermap.components.nav_button.t33069(map33059,owner,text,output_checker33063,G__33064,map33058,input_checker33062,input_schema33061,target_view,output_schema33060,map33057,validate__6034__auto__,map33056,id,class$,app,ufv__,constructor33054,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___33080 = output_checker33063.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___33080))
{var error__6036__auto___33081 = temp__4126__auto___33080;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor33054","constructor33054",-2006030785,null),cljs.core.pr_str.call(null,error__6036__auto___33081)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___33081,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33060,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema33060,input_schema33061,input_checker33062,output_checker33063))
,schema.core.make_fn_schema.call(null,output_schema33060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33061], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___33076){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner33053,p__33073){var vec__33075 = p__33073;var opts__7883__auto__ = cljs.core.nth.call(null,vec__33075,(0),null);return component_fnk__7881__auto___33076.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner33053),new cljs.core.Keyword(null,"owner","owner",-392611939),owner33053,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner33053,var_args){
var p__33073 = null;if (arguments.length > 2) {
  p__33073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner33053,p__33073);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__33082){
var data__7882__auto__ = cljs.core.first(arglist__33082);
arglist__33082 = cljs.core.next(arglist__33082);
var owner33053 = cljs.core.first(arglist__33082);
var p__33073 = cljs.core.rest(arglist__33082);
return nav_button_component__delegate(data__7882__auto__,owner33053,p__33073);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___33076))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m33055){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m33055);
});
__GT_nav_button_component = function(cursor__7850__auto__,m33055){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
