// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__27897(s__27898){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__27898__$1 = s__27898;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27898__$1);if(temp__4126__auto__)
{var s__27898__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27898__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27898__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27900 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27899 = (0);while(true){
if((i__27899 < size__4376__auto__))
{var map__27903 = cljs.core._nth.call(null,c__4375__auto__,i__27899);var map__27903__$1 = ((cljs.core.seq_QMARK_.call(null,map__27903))?cljs.core.apply.call(null,cljs.core.hash_map,map__27903):map__27903);var teaser = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__27900,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__27905 = (i__27899 + (1));
i__27899 = G__27905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27900),iter__27897.call(null,cljs.core.chunk_rest.call(null,s__27898__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27900),null);
}
} else
{var map__27904 = cljs.core.first.call(null,s__27898__$2);var map__27904__$1 = ((cljs.core.seq_QMARK_.call(null,map__27904))?cljs.core.apply.call(null,cljs.core.hash_map,map__27904):map__27904);var teaser = cljs.core.get.call(null,map__27904__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__27904__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__27904__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__27904__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__27897.call(null,cljs.core.rest.call(null,s__27898__$2)));
}
} else
{return null;
}
break;
}
});})(top3))
,null,null));
});})(top3))
;return iter__4377__auto__.call(null,top3);
})()));
});
clustermap.components.geo_sponsors.request_geo_sponsors_data = (function request_geo_sponsors_data(resource,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.geo_sponsors,bounds);
});
var component_fnk__7881__auto___27935 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27911 = schema.core.Any;var input_schema27912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map27909","map27909",-729404734,null))], null);var input_checker27913 = schema.core.checker.call(null,input_schema27912);var output_checker27914 = schema.core.checker.call(null,output_schema27911);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function constructor27907(G__27915){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27915], null);var temp__4126__auto___27937 = input_checker27913.call(null,args__6035__auto___27936);if(cljs.core.truth_(temp__4126__auto___27937))
{var error__6036__auto___27938 = temp__4126__auto___27937;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27907","constructor27907",-1939998027,null),cljs.core.pr_str.call(null,error__6036__auto___27938)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27938,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27936,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27912,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map27909 = G__27915;while(true){
if(cljs.core.map_QMARK_.call(null,map27909))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map27909)));
}
var map27910 = plumbing.fnk.schema.safe_get.call(null,map27909,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map27910,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map27910,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map27909,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t27924 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t27924 = (function (map27909,input_schema27912,owner,G__27915,constructor27907,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,output_checker27914,geo_sponsors,input_checker27913,meta27925){
this.map27909 = map27909;
this.input_schema27912 = input_schema27912;
this.owner = owner;
this.G__27915 = G__27915;
this.constructor27907 = constructor27907;
this.bounds = bounds;
this.map27910 = map27910;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.output_schema27911 = output_schema27911;
this.output_checker27914 = output_checker27914;
this.geo_sponsors = geo_sponsors;
this.input_checker27913 = input_checker27913;
this.meta27925 = meta27925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t27924.cljs$lang$type = true;
clustermap.components.geo_sponsors.t27924.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t27924";
clustermap.components.geo_sponsors.t27924.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t27924");
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (_,p__27927,p__27928){var self__ = this;
var map__27929 = p__27927;var map__27929__$1 = ((cljs.core.seq_QMARK_.call(null,map__27929))?cljs.core.apply.call(null,cljs.core.hash_map,map__27929):map__27929);var next_bounds = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__27930 = cljs.core.get.call(null,map__27929__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__27930__$1 = ((cljs.core.seq_QMARK_.call(null,map__27930))?cljs.core.apply.call(null,cljs.core.hash_map,map__27930):map__27930);var next_geo_sponsors = map__27930__$1;var next_data = cljs.core.get.call(null,map__27930__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__27931 = p__27928;var map__27931__$1 = ((cljs.core.seq_QMARK_.call(null,map__27931))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
);
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t27924.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.t27924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (_27926){var self__ = this;
var _27926__$1 = this;return self__.meta27925;
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.t27924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function (_27926,meta27925__$1){var self__ = this;
var _27926__$1 = this;return (new clustermap.components.geo_sponsors.t27924(self__.map27909,self__.input_schema27912,self__.owner,self__.G__27915,self__.constructor27907,self__.bounds,self__.map27910,self__.validate__6034__auto__,self__.ufv__,self__.output_schema27911,self__.output_checker27914,self__.geo_sponsors,self__.input_checker27913,meta27925__$1));
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
clustermap.components.geo_sponsors.__GT_t27924 = ((function (owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914){
return (function __GT_t27924(map27909__$1,input_schema27912__$1,owner__$1,G__27915__$1,constructor27907__$1,bounds__$1,map27910__$1,validate__6034__auto____$1,ufv____$1,output_schema27911__$1,output_checker27914__$1,geo_sponsors__$1,input_checker27913__$1,meta27925){return (new clustermap.components.geo_sponsors.t27924(map27909__$1,input_schema27912__$1,owner__$1,G__27915__$1,constructor27907__$1,bounds__$1,map27910__$1,validate__6034__auto____$1,ufv____$1,output_schema27911__$1,output_checker27914__$1,geo_sponsors__$1,input_checker27913__$1,meta27925));
});})(owner,geo_sponsors,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
;
}
return (new clustermap.components.geo_sponsors.t27924(map27909,input_schema27912,owner,G__27915,constructor27907,bounds,map27910,validate__6034__auto__,ufv__,output_schema27911,output_checker27914,geo_sponsors,input_checker27913,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27939 = output_checker27914.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27939))
{var error__6036__auto___27940 = temp__4126__auto___27939;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27907","constructor27907",-1939998027,null),cljs.core.pr_str.call(null,error__6036__auto___27940)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27940,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27911,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27911,input_schema27912,input_checker27913,output_checker27914))
,schema.core.make_fn_schema.call(null,output_schema27911,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27912], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___27935){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner27906,p__27932){var vec__27934 = p__27932;var opts__7883__auto__ = cljs.core.nth.call(null,vec__27934,(0),null);return component_fnk__7881__auto___27935.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner27906,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner27906,var_args){
var p__27932 = null;if (arguments.length > 2) {
  p__27932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner27906,p__27932);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__27941){
var data__7882__auto__ = cljs.core.first(arglist__27941);
arglist__27941 = cljs.core.next(arglist__27941);
var owner27906 = cljs.core.first(arglist__27941);
var p__27932 = cljs.core.rest(arglist__27941);
return geo_sponsors_component__delegate(data__7882__auto__,owner27906,p__27932);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___27935))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m27908){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m27908);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m27908){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m27908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
