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
var component_fnk__7881__auto___31616 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31600 = schema.core.Any;var input_schema31601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31597","map31597",-212168246,null))], null);var input_checker31602 = schema.core.checker.call(null,input_schema31601);var output_checker31603 = schema.core.checker.call(null,output_schema31600);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function constructor31595(G__31604){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31604], null);var temp__4126__auto___31618 = input_checker31602.call(null,args__6035__auto___31617);if(cljs.core.truth_(temp__4126__auto___31618))
{var error__6036__auto___31619 = temp__4126__auto___31618;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31595","constructor31595",-853945964,null),cljs.core.pr_str.call(null,error__6036__auto___31619)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31619,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31617,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31597 = G__31604;while(true){
if(cljs.core.map_QMARK_.call(null,map31597))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31597)));
}
var map31598 = plumbing.fnk.schema.safe_get.call(null,map31597,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31598,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31599 = plumbing.fnk.schema.safe_get.call(null,map31598,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31599,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31597,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31609 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31609 = (function (input_schema31601,G__31604,owner,input_checker31602,path,map31597,source,constructor31595,map31598,map31599,validate__6034__auto__,output_checker31603,output_schema31600,ufv__,meta31610){
this.input_schema31601 = input_schema31601;
this.G__31604 = G__31604;
this.owner = owner;
this.input_checker31602 = input_checker31602;
this.path = path;
this.map31597 = map31597;
this.source = source;
this.constructor31595 = constructor31595;
this.map31598 = map31598;
this.map31599 = map31599;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker31603 = output_checker31603;
this.output_schema31600 = output_schema31600;
this.ufv__ = ufv__;
this.meta31610 = meta31610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31609.cljs$lang$type = true;
clustermap.components.text.t31609.cljs$lang$ctorStr = "clustermap.components.text/t31609";
clustermap.components.text.t31609.cljs$lang$ctorPrWriter = ((function (owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31609");
});})(owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
;
clustermap.components.text.t31609.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31609.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
;
clustermap.components.text.t31609.prototype.om$core$IRender$ = true;
clustermap.components.text.t31609.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31612 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31612))?sablono.interpreter.attributes.call(null,attrs31612):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31612))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31612)], null))));
});})(owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
;
clustermap.components.text.t31609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function (_31611){var self__ = this;
var _31611__$1 = this;return self__.meta31610;
});})(owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
;
clustermap.components.text.t31609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function (_31611,meta31610__$1){var self__ = this;
var _31611__$1 = this;return (new clustermap.components.text.t31609(self__.input_schema31601,self__.G__31604,self__.owner,self__.input_checker31602,self__.path,self__.map31597,self__.source,self__.constructor31595,self__.map31598,self__.map31599,self__.validate__6034__auto__,self__.output_checker31603,self__.output_schema31600,self__.ufv__,meta31610__$1));
});})(owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
;
clustermap.components.text.__GT_t31609 = ((function (owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603){
return (function __GT_t31609(input_schema31601__$1,G__31604__$1,owner__$1,input_checker31602__$1,path__$1,map31597__$1,source__$1,constructor31595__$1,map31598__$1,map31599__$1,validate__6034__auto____$1,output_checker31603__$1,output_schema31600__$1,ufv____$1,meta31610){return (new clustermap.components.text.t31609(input_schema31601__$1,G__31604__$1,owner__$1,input_checker31602__$1,path__$1,map31597__$1,source__$1,constructor31595__$1,map31598__$1,map31599__$1,validate__6034__auto____$1,output_checker31603__$1,output_schema31600__$1,ufv____$1,meta31610));
});})(owner,path,map31599,source,map31598,validate__6034__auto__,ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
;
}
return (new clustermap.components.text.t31609(input_schema31601,G__31604,owner,input_checker31602,path,map31597,source,constructor31595,map31598,map31599,validate__6034__auto__,output_checker31603,output_schema31600,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31620 = output_checker31603.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31620))
{var error__6036__auto___31621 = temp__4126__auto___31620;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31595","constructor31595",-853945964,null),cljs.core.pr_str.call(null,error__6036__auto___31621)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31621,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31600,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31600,input_schema31601,input_checker31602,output_checker31603))
,schema.core.make_fn_schema.call(null,output_schema31600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31601], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31616){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31594,p__31613){var vec__31615 = p__31613;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31615,(0),null);return component_fnk__7881__auto___31616.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31594,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31594,var_args){
var p__31613 = null;if (arguments.length > 2) {
  p__31613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31594,p__31613);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31622){
var data__7882__auto__ = cljs.core.first(arglist__31622);
arglist__31622 = cljs.core.next(arglist__31622);
var owner31594 = cljs.core.first(arglist__31622);
var p__31613 = cljs.core.rest(arglist__31622);
return text_component__delegate(data__7882__auto__,owner31594,p__31613);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31616))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31596){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31596);
});
__GT_text_component = function(cursor__7850__auto__,m31596){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
