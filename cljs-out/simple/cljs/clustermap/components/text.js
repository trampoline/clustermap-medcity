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
var component_fnk__7881__auto___31577 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31561 = schema.core.Any;var input_schema31562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31558","map31558",1640101843,null))], null);var input_checker31563 = schema.core.checker.call(null,input_schema31562);var output_checker31564 = schema.core.checker.call(null,output_schema31561);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function constructor31556(G__31565){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31565], null);var temp__4126__auto___31579 = input_checker31563.call(null,args__6035__auto___31578);if(cljs.core.truth_(temp__4126__auto___31579))
{var error__6036__auto___31580 = temp__4126__auto___31579;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31556","constructor31556",1341865112,null),cljs.core.pr_str.call(null,error__6036__auto___31580)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31580,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31578,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31558 = G__31565;while(true){
if(cljs.core.map_QMARK_.call(null,map31558))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31558)));
}
var map31559 = plumbing.fnk.schema.safe_get.call(null,map31558,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31559,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31560 = plumbing.fnk.schema.safe_get.call(null,map31559,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31560,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31558,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31570 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31570 = (function (G__31565,map31559,output_checker31564,owner,path,output_schema31561,map31560,input_checker31563,map31558,source,constructor31556,input_schema31562,validate__6034__auto__,ufv__,meta31571){
this.G__31565 = G__31565;
this.map31559 = map31559;
this.output_checker31564 = output_checker31564;
this.owner = owner;
this.path = path;
this.output_schema31561 = output_schema31561;
this.map31560 = map31560;
this.input_checker31563 = input_checker31563;
this.map31558 = map31558;
this.source = source;
this.constructor31556 = constructor31556;
this.input_schema31562 = input_schema31562;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta31571 = meta31571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31570.cljs$lang$type = true;
clustermap.components.text.t31570.cljs$lang$ctorStr = "clustermap.components.text/t31570";
clustermap.components.text.t31570.cljs$lang$ctorPrWriter = ((function (owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31570");
});})(owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
;
clustermap.components.text.t31570.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31570.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
;
clustermap.components.text.t31570.prototype.om$core$IRender$ = true;
clustermap.components.text.t31570.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31573 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31573))?sablono.interpreter.attributes.call(null,attrs31573):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31573))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31573)], null))));
});})(owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
;
clustermap.components.text.t31570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function (_31572){var self__ = this;
var _31572__$1 = this;return self__.meta31571;
});})(owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
;
clustermap.components.text.t31570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function (_31572,meta31571__$1){var self__ = this;
var _31572__$1 = this;return (new clustermap.components.text.t31570(self__.G__31565,self__.map31559,self__.output_checker31564,self__.owner,self__.path,self__.output_schema31561,self__.map31560,self__.input_checker31563,self__.map31558,self__.source,self__.constructor31556,self__.input_schema31562,self__.validate__6034__auto__,self__.ufv__,meta31571__$1));
});})(owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
;
clustermap.components.text.__GT_t31570 = ((function (owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564){
return (function __GT_t31570(G__31565__$1,map31559__$1,output_checker31564__$1,owner__$1,path__$1,output_schema31561__$1,map31560__$1,input_checker31563__$1,map31558__$1,source__$1,constructor31556__$1,input_schema31562__$1,validate__6034__auto____$1,ufv____$1,meta31571){return (new clustermap.components.text.t31570(G__31565__$1,map31559__$1,output_checker31564__$1,owner__$1,path__$1,output_schema31561__$1,map31560__$1,input_checker31563__$1,map31558__$1,source__$1,constructor31556__$1,input_schema31562__$1,validate__6034__auto____$1,ufv____$1,meta31571));
});})(owner,path,map31560,source,map31559,validate__6034__auto__,ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
;
}
return (new clustermap.components.text.t31570(G__31565,map31559,output_checker31564,owner,path,output_schema31561,map31560,input_checker31563,map31558,source,constructor31556,input_schema31562,validate__6034__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31581 = output_checker31564.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31581))
{var error__6036__auto___31582 = temp__4126__auto___31581;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31556","constructor31556",1341865112,null),cljs.core.pr_str.call(null,error__6036__auto___31582)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31582,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31561,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31561,input_schema31562,input_checker31563,output_checker31564))
,schema.core.make_fn_schema.call(null,output_schema31561,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31562], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31577){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31555,p__31574){var vec__31576 = p__31574;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31576,(0),null);return component_fnk__7881__auto___31577.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31555,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31555,var_args){
var p__31574 = null;if (arguments.length > 2) {
  p__31574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31555,p__31574);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31583){
var data__7882__auto__ = cljs.core.first(arglist__31583);
arglist__31583 = cljs.core.next(arglist__31583);
var owner31555 = cljs.core.first(arglist__31583);
var p__31574 = cljs.core.rest(arglist__31583);
return text_component__delegate(data__7882__auto__,owner31555,p__31574);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31577))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31557){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31557);
});
__GT_text_component = function(cursor__7850__auto__,m31557){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
