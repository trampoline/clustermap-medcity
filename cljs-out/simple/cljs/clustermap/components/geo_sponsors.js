// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__29188(s__29189){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__29189__$1 = s__29189;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29189__$1);if(temp__4126__auto__)
{var s__29189__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29189__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29189__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29191 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29190 = (0);while(true){
if((i__29190 < size__4376__auto__))
{var map__29194 = cljs.core._nth.call(null,c__4375__auto__,i__29190);var map__29194__$1 = ((cljs.core.seq_QMARK_.call(null,map__29194))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);var teaser = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__29191,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__29196 = (i__29190 + (1));
i__29190 = G__29196;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29191),iter__29188.call(null,cljs.core.chunk_rest.call(null,s__29189__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29191),null);
}
} else
{var map__29195 = cljs.core.first.call(null,s__29189__$2);var map__29195__$1 = ((cljs.core.seq_QMARK_.call(null,map__29195))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);var teaser = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__29188.call(null,cljs.core.rest.call(null,s__29189__$2)));
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
var component_fnk__7881__auto___29290 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29202 = schema.core.Any;var input_schema29203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29200","map29200",809578315,null))], null);var input_checker29204 = schema.core.checker.call(null,input_schema29203);var output_checker29205 = schema.core.checker.call(null,output_schema29202);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function constructor29198(G__29206){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29206], null);var temp__4126__auto___29292 = input_checker29204.call(null,args__6035__auto___29291);if(cljs.core.truth_(temp__4126__auto___29292))
{var error__6036__auto___29293 = temp__4126__auto___29292;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29198","constructor29198",-1523576749,null),cljs.core.pr_str.call(null,error__6036__auto___29293)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29293,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29291,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29203,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29200 = G__29206;while(true){
if(cljs.core.map_QMARK_.call(null,map29200))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29200)));
}
var map29201 = plumbing.fnk.schema.safe_get.call(null,map29200,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29201,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29201,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29200,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29247 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29247 = (function (owner,map29200,input_schema29203,constructor29198,input_checker29204,bounds,G__29206,validate__6034__auto__,output_schema29202,ufv__,geo_sponsors,output_checker29205,map29201,meta29248){
this.owner = owner;
this.map29200 = map29200;
this.input_schema29203 = input_schema29203;
this.constructor29198 = constructor29198;
this.input_checker29204 = input_checker29204;
this.bounds = bounds;
this.G__29206 = G__29206;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema29202 = output_schema29202;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.output_checker29205 = output_checker29205;
this.map29201 = map29201;
this.meta29248 = meta29248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29247.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29247.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29247";
clustermap.components.geo_sponsors.t29247.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29247");
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (_,p__29250,p__29251){var self__ = this;
var map__29252 = p__29250;var map__29252__$1 = ((cljs.core.seq_QMARK_.call(null,map__29252))?cljs.core.apply.call(null,cljs.core.hash_map,map__29252):map__29252);var next_bounds = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29253 = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29253__$1 = ((cljs.core.seq_QMARK_.call(null,map__29253))?cljs.core.apply.call(null,cljs.core.hash_map,map__29253):map__29253);var next_geo_sponsors = map__29253__$1;var next_data = cljs.core.get.call(null,map__29253__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29254 = p__29251;var map__29254__$1 = ((cljs.core.seq_QMARK_.call(null,map__29254))?cljs.core.apply.call(null,cljs.core.hash_map,map__29254):map__29254);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29252,map__29252__$1,next_bounds,map__29253,map__29253__$1,next_geo_sponsors,next_data,map__29254,map__29254__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29252,map__29252__$1,next_bounds,map__29253,map__29253__$1,next_geo_sponsors,next_data,map__29254,map__29254__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (state_29272){var state_val_29273 = (state_29272[(1)]);if((state_val_29273 === (5)))
{var inst_29270 = (state_29272[(2)]);var state_29272__$1 = state_29272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29272__$1,inst_29270);
} else
{if((state_val_29273 === (4)))
{var state_29272__$1 = state_29272;var statearr_29274_29294 = state_29272__$1;(statearr_29274_29294[(2)] = null);
(statearr_29274_29294[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29273 === (3)))
{var inst_29257 = (state_29272[(7)]);var inst_29259 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29260 = ["GEO-SPONSORS : ",inst_29257];var inst_29261 = (new cljs.core.PersistentVector(null,2,(5),inst_29259,inst_29260,null));var inst_29262 = cljs.core.clj__GT_js.call(null,inst_29261);var inst_29263 = console.log(inst_29262);var inst_29264 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29265 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29266 = (new cljs.core.PersistentVector(null,1,(5),inst_29264,inst_29265,null));var inst_29267 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29266,inst_29257);var state_29272__$1 = (function (){var statearr_29275 = state_29272;(statearr_29275[(8)] = inst_29263);
return statearr_29275;
})();var statearr_29276_29295 = state_29272__$1;(statearr_29276_29295[(2)] = inst_29267);
(statearr_29276_29295[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29273 === (2)))
{var inst_29257 = (state_29272[(7)]);var inst_29257__$1 = (state_29272[(2)]);var state_29272__$1 = (function (){var statearr_29277 = state_29272;(statearr_29277[(7)] = inst_29257__$1);
return statearr_29277;
})();if(cljs.core.truth_(inst_29257__$1))
{var statearr_29278_29296 = state_29272__$1;(statearr_29278_29296[(1)] = (3));
} else
{var statearr_29279_29297 = state_29272__$1;(statearr_29279_29297[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29273 === (1)))
{var inst_29255 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29272__$1 = state_29272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29272__$1,(2),inst_29255);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29252,map__29252__$1,next_bounds,map__29253,map__29253__$1,next_geo_sponsors,next_data,map__29254,map__29254__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29252,map__29252__$1,next_bounds,map__29253,map__29253__$1,next_geo_sponsors,next_data,map__29254,map__29254__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29283 = [null,null,null,null,null,null,null,null,null];(statearr_29283[(0)] = state_machine__9111__auto__);
(statearr_29283[(1)] = (1));
return statearr_29283;
});
var state_machine__9111__auto____1 = (function (state_29272){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29272);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29284){if((e29284 instanceof Object))
{var ex__9114__auto__ = e29284;var statearr_29285_29298 = state_29272;(statearr_29285_29298[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29284;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29299 = state_29272;
state_29272 = G__29299;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29272){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29252,map__29252__$1,next_bounds,map__29253,map__29253__$1,next_geo_sponsors,next_data,map__29254,map__29254__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
})();var state__9127__auto__ = (function (){var statearr_29286 = f__9126__auto__.call(null);(statearr_29286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29252,map__29252__$1,next_bounds,map__29253,map__29253__$1,next_geo_sponsors,next_data,map__29254,map__29254__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29247.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.t29247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (_29249){var self__ = this;
var _29249__$1 = this;return self__.meta29248;
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.t29247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function (_29249,meta29248__$1){var self__ = this;
var _29249__$1 = this;return (new clustermap.components.geo_sponsors.t29247(self__.owner,self__.map29200,self__.input_schema29203,self__.constructor29198,self__.input_checker29204,self__.bounds,self__.G__29206,self__.validate__6034__auto__,self__.output_schema29202,self__.ufv__,self__.geo_sponsors,self__.output_checker29205,self__.map29201,meta29248__$1));
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
clustermap.components.geo_sponsors.__GT_t29247 = ((function (owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205){
return (function __GT_t29247(owner__$1,map29200__$1,input_schema29203__$1,constructor29198__$1,input_checker29204__$1,bounds__$1,G__29206__$1,validate__6034__auto____$1,output_schema29202__$1,ufv____$1,geo_sponsors__$1,output_checker29205__$1,map29201__$1,meta29248){return (new clustermap.components.geo_sponsors.t29247(owner__$1,map29200__$1,input_schema29203__$1,constructor29198__$1,input_checker29204__$1,bounds__$1,G__29206__$1,validate__6034__auto____$1,output_schema29202__$1,ufv____$1,geo_sponsors__$1,output_checker29205__$1,map29201__$1,meta29248));
});})(owner,geo_sponsors,bounds,map29201,validate__6034__auto__,ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
;
}
return (new clustermap.components.geo_sponsors.t29247(owner,map29200,input_schema29203,constructor29198,input_checker29204,bounds,G__29206,validate__6034__auto__,output_schema29202,ufv__,geo_sponsors,output_checker29205,map29201,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29300 = output_checker29205.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29300))
{var error__6036__auto___29301 = temp__4126__auto___29300;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29198","constructor29198",-1523576749,null),cljs.core.pr_str.call(null,error__6036__auto___29301)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29301,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29202,input_schema29203,input_checker29204,output_checker29205))
,schema.core.make_fn_schema.call(null,output_schema29202,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29203], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29290){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner29197,p__29287){var vec__29289 = p__29287;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29289,(0),null);return component_fnk__7881__auto___29290.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29197,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner29197,var_args){
var p__29287 = null;if (arguments.length > 2) {
  p__29287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner29197,p__29287);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29302){
var data__7882__auto__ = cljs.core.first(arglist__29302);
arglist__29302 = cljs.core.next(arglist__29302);
var owner29197 = cljs.core.first(arglist__29302);
var p__29287 = cljs.core.rest(arglist__29302);
return geo_sponsors_component__delegate(data__7882__auto__,owner29197,p__29287);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29290))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m29199){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m29199);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m29199){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m29199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
