// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.text');
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
clustermap.components.text.TextComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),schema.core.either.call(null,schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null))], null)], null);
clustermap.components.text.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
var component_fnk__7881__auto___31620 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31604 = schema.core.Any;var input_schema31605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31601","map31601",-412164649,null))], null);var input_checker31606 = schema.core.checker.call(null,input_schema31605);var output_checker31607 = schema.core.checker.call(null,output_schema31604);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function constructor31599(G__31608){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31608], null);var temp__4126__auto___31622 = input_checker31606.call(null,args__6035__auto___31621);if(cljs.core.truth_(temp__4126__auto___31622))
{var error__6036__auto___31623 = temp__4126__auto___31622;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31599","constructor31599",-1427646927,null),cljs.core.pr_str.call(null,error__6036__auto___31623)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31623,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31621,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31605,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31601 = G__31608;while(true){
if(cljs.core.map_QMARK_.call(null,map31601))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31601)));
}
var map31602 = plumbing.fnk.schema.safe_get.call(null,map31601,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31602,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31603 = plumbing.fnk.schema.safe_get.call(null,map31602,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31603,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31601,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31613 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31613 = (function (owner,map31603,path,input_schema31605,constructor31599,source,output_checker31607,map31601,output_schema31604,G__31608,validate__6034__auto__,input_checker31606,ufv__,map31602,meta31614){
this.owner = owner;
this.map31603 = map31603;
this.path = path;
this.input_schema31605 = input_schema31605;
this.constructor31599 = constructor31599;
this.source = source;
this.output_checker31607 = output_checker31607;
this.map31601 = map31601;
this.output_schema31604 = output_schema31604;
this.G__31608 = G__31608;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker31606 = input_checker31606;
this.ufv__ = ufv__;
this.map31602 = map31602;
this.meta31614 = meta31614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31613.cljs$lang$type = true;
clustermap.components.text.t31613.cljs$lang$ctorStr = "clustermap.components.text/t31613";
clustermap.components.text.t31613.cljs$lang$ctorPrWriter = ((function (owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31613");
});})(owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
;
clustermap.components.text.t31613.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31613.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
;
clustermap.components.text.t31613.prototype.om$core$IRender$ = true;
clustermap.components.text.t31613.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31616 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31616))?sablono.interpreter.attributes.call(null,attrs31616):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31616))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31616)], null))));
});})(owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
;
clustermap.components.text.t31613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function (_31615){var self__ = this;
var _31615__$1 = this;return self__.meta31614;
});})(owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
;
clustermap.components.text.t31613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function (_31615,meta31614__$1){var self__ = this;
var _31615__$1 = this;return (new clustermap.components.text.t31613(self__.owner,self__.map31603,self__.path,self__.input_schema31605,self__.constructor31599,self__.source,self__.output_checker31607,self__.map31601,self__.output_schema31604,self__.G__31608,self__.validate__6034__auto__,self__.input_checker31606,self__.ufv__,self__.map31602,meta31614__$1));
});})(owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
;
clustermap.components.text.__GT_t31613 = ((function (owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607){
return (function __GT_t31613(owner__$1,map31603__$1,path__$1,input_schema31605__$1,constructor31599__$1,source__$1,output_checker31607__$1,map31601__$1,output_schema31604__$1,G__31608__$1,validate__6034__auto____$1,input_checker31606__$1,ufv____$1,map31602__$1,meta31614){return (new clustermap.components.text.t31613(owner__$1,map31603__$1,path__$1,input_schema31605__$1,constructor31599__$1,source__$1,output_checker31607__$1,map31601__$1,output_schema31604__$1,G__31608__$1,validate__6034__auto____$1,input_checker31606__$1,ufv____$1,map31602__$1,meta31614));
});})(owner,path,map31603,source,map31602,validate__6034__auto__,ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
;
}
return (new clustermap.components.text.t31613(owner,map31603,path,input_schema31605,constructor31599,source,output_checker31607,map31601,output_schema31604,G__31608,validate__6034__auto__,input_checker31606,ufv__,map31602,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31624 = output_checker31607.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31624))
{var error__6036__auto___31625 = temp__4126__auto___31624;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31599","constructor31599",-1427646927,null),cljs.core.pr_str.call(null,error__6036__auto___31625)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31625,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31604,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31604,input_schema31605,input_checker31606,output_checker31607))
,schema.core.make_fn_schema.call(null,output_schema31604,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31605], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31620){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31598,p__31617){var vec__31619 = p__31617;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31619,(0),null);return component_fnk__7881__auto___31620.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31598,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31598,var_args){
var p__31617 = null;if (arguments.length > 2) {
  p__31617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31598,p__31617);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31626){
var data__7882__auto__ = cljs.core.first(arglist__31626);
arglist__31626 = cljs.core.next(arglist__31626);
var owner31598 = cljs.core.first(arglist__31626);
var p__31617 = cljs.core.rest(arglist__31626);
return text_component__delegate(data__7882__auto__,owner31598,p__31617);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31620))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31600){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31600);
});
__GT_text_component = function(cursor__7850__auto__,m31600){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
