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
return (function iter__29179(s__29180){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__29180__$1 = s__29180;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29180__$1);if(temp__4126__auto__)
{var s__29180__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29180__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29180__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29182 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29181 = (0);while(true){
if((i__29181 < size__4376__auto__))
{var map__29185 = cljs.core._nth.call(null,c__4375__auto__,i__29181);var map__29185__$1 = ((cljs.core.seq_QMARK_.call(null,map__29185))?cljs.core.apply.call(null,cljs.core.hash_map,map__29185):map__29185);var teaser = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29185__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__29182,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__29187 = (i__29181 + (1));
i__29181 = G__29187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29182),iter__29179.call(null,cljs.core.chunk_rest.call(null,s__29180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29182),null);
}
} else
{var map__29186 = cljs.core.first.call(null,s__29180__$2);var map__29186__$1 = ((cljs.core.seq_QMARK_.call(null,map__29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);var teaser = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__29179.call(null,cljs.core.rest.call(null,s__29180__$2)));
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
var component_fnk__7881__auto___29281 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29193 = schema.core.Any;var input_schema29194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29191","map29191",1494914960,null))], null);var input_checker29195 = schema.core.checker.call(null,input_schema29194);var output_checker29196 = schema.core.checker.call(null,output_schema29193);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function constructor29189(G__29197){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29197], null);var temp__4126__auto___29283 = input_checker29195.call(null,args__6035__auto___29282);if(cljs.core.truth_(temp__4126__auto___29283))
{var error__6036__auto___29284 = temp__4126__auto___29283;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29189","constructor29189",-1516152625,null),cljs.core.pr_str.call(null,error__6036__auto___29284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29284,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29282,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29194,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29191 = G__29197;while(true){
if(cljs.core.map_QMARK_.call(null,map29191))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29191)));
}
var map29192 = plumbing.fnk.schema.safe_get.call(null,map29191,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29192,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29192,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29191,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29238 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29238 = (function (input_checker29195,owner,input_schema29194,output_schema29193,constructor29189,map29191,map29192,bounds,output_checker29196,validate__6034__auto__,ufv__,geo_sponsors,G__29197,meta29239){
this.input_checker29195 = input_checker29195;
this.owner = owner;
this.input_schema29194 = input_schema29194;
this.output_schema29193 = output_schema29193;
this.constructor29189 = constructor29189;
this.map29191 = map29191;
this.map29192 = map29192;
this.bounds = bounds;
this.output_checker29196 = output_checker29196;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.G__29197 = G__29197;
this.meta29239 = meta29239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29238.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29238.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29238";
clustermap.components.geo_sponsors.t29238.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29238");
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (_,p__29241,p__29242){var self__ = this;
var map__29243 = p__29241;var map__29243__$1 = ((cljs.core.seq_QMARK_.call(null,map__29243))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);var next_bounds = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29244 = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29244__$1 = ((cljs.core.seq_QMARK_.call(null,map__29244))?cljs.core.apply.call(null,cljs.core.hash_map,map__29244):map__29244);var next_geo_sponsors = map__29244__$1;var next_data = cljs.core.get.call(null,map__29244__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29245 = p__29242;var map__29245__$1 = ((cljs.core.seq_QMARK_.call(null,map__29245))?cljs.core.apply.call(null,cljs.core.hash_map,map__29245):map__29245);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29245__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29243,map__29243__$1,next_bounds,map__29244,map__29244__$1,next_geo_sponsors,next_data,map__29245,map__29245__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29243,map__29243__$1,next_bounds,map__29244,map__29244__$1,next_geo_sponsors,next_data,map__29245,map__29245__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (state_29263){var state_val_29264 = (state_29263[(1)]);if((state_val_29264 === (5)))
{var inst_29261 = (state_29263[(2)]);var state_29263__$1 = state_29263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29263__$1,inst_29261);
} else
{if((state_val_29264 === (4)))
{var state_29263__$1 = state_29263;var statearr_29265_29285 = state_29263__$1;(statearr_29265_29285[(2)] = null);
(statearr_29265_29285[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29264 === (3)))
{var inst_29248 = (state_29263[(7)]);var inst_29250 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29251 = ["GEO-SPONSORS : ",inst_29248];var inst_29252 = (new cljs.core.PersistentVector(null,2,(5),inst_29250,inst_29251,null));var inst_29253 = cljs.core.clj__GT_js.call(null,inst_29252);var inst_29254 = console.log(inst_29253);var inst_29255 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29256 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29257 = (new cljs.core.PersistentVector(null,1,(5),inst_29255,inst_29256,null));var inst_29258 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29257,inst_29248);var state_29263__$1 = (function (){var statearr_29266 = state_29263;(statearr_29266[(8)] = inst_29254);
return statearr_29266;
})();var statearr_29267_29286 = state_29263__$1;(statearr_29267_29286[(2)] = inst_29258);
(statearr_29267_29286[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29264 === (2)))
{var inst_29248 = (state_29263[(7)]);var inst_29248__$1 = (state_29263[(2)]);var state_29263__$1 = (function (){var statearr_29268 = state_29263;(statearr_29268[(7)] = inst_29248__$1);
return statearr_29268;
})();if(cljs.core.truth_(inst_29248__$1))
{var statearr_29269_29287 = state_29263__$1;(statearr_29269_29287[(1)] = (3));
} else
{var statearr_29270_29288 = state_29263__$1;(statearr_29270_29288[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29264 === (1)))
{var inst_29246 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29263__$1 = state_29263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29263__$1,(2),inst_29246);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29243,map__29243__$1,next_bounds,map__29244,map__29244__$1,next_geo_sponsors,next_data,map__29245,map__29245__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29243,map__29243__$1,next_bounds,map__29244,map__29244__$1,next_geo_sponsors,next_data,map__29245,map__29245__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29274 = [null,null,null,null,null,null,null,null,null];(statearr_29274[(0)] = state_machine__9111__auto__);
(statearr_29274[(1)] = (1));
return statearr_29274;
});
var state_machine__9111__auto____1 = (function (state_29263){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29263);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29275){if((e29275 instanceof Object))
{var ex__9114__auto__ = e29275;var statearr_29276_29289 = state_29263;(statearr_29276_29289[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29275;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29290 = state_29263;
state_29263 = G__29290;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29263){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29243,map__29243__$1,next_bounds,map__29244,map__29244__$1,next_geo_sponsors,next_data,map__29245,map__29245__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
})();var state__9127__auto__ = (function (){var statearr_29277 = f__9126__auto__.call(null);(statearr_29277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29243,map__29243__$1,next_bounds,map__29244,map__29244__$1,next_geo_sponsors,next_data,map__29245,map__29245__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29238.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.t29238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (_29240){var self__ = this;
var _29240__$1 = this;return self__.meta29239;
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.t29238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function (_29240,meta29239__$1){var self__ = this;
var _29240__$1 = this;return (new clustermap.components.geo_sponsors.t29238(self__.input_checker29195,self__.owner,self__.input_schema29194,self__.output_schema29193,self__.constructor29189,self__.map29191,self__.map29192,self__.bounds,self__.output_checker29196,self__.validate__6034__auto__,self__.ufv__,self__.geo_sponsors,self__.G__29197,meta29239__$1));
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
clustermap.components.geo_sponsors.__GT_t29238 = ((function (owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196){
return (function __GT_t29238(input_checker29195__$1,owner__$1,input_schema29194__$1,output_schema29193__$1,constructor29189__$1,map29191__$1,map29192__$1,bounds__$1,output_checker29196__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,G__29197__$1,meta29239){return (new clustermap.components.geo_sponsors.t29238(input_checker29195__$1,owner__$1,input_schema29194__$1,output_schema29193__$1,constructor29189__$1,map29191__$1,map29192__$1,bounds__$1,output_checker29196__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,G__29197__$1,meta29239));
});})(owner,geo_sponsors,bounds,map29192,validate__6034__auto__,ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
;
}
return (new clustermap.components.geo_sponsors.t29238(input_checker29195,owner,input_schema29194,output_schema29193,constructor29189,map29191,map29192,bounds,output_checker29196,validate__6034__auto__,ufv__,geo_sponsors,G__29197,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29291 = output_checker29196.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29291))
{var error__6036__auto___29292 = temp__4126__auto___29291;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29189","constructor29189",-1516152625,null),cljs.core.pr_str.call(null,error__6036__auto___29292)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29292,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29193,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29193,input_schema29194,input_checker29195,output_checker29196))
,schema.core.make_fn_schema.call(null,output_schema29193,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29194], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29281){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner29188,p__29278){var vec__29280 = p__29278;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29280,(0),null);return component_fnk__7881__auto___29281.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29188,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner29188,var_args){
var p__29278 = null;if (arguments.length > 2) {
  p__29278 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner29188,p__29278);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29293){
var data__7882__auto__ = cljs.core.first(arglist__29293);
arglist__29293 = cljs.core.next(arglist__29293);
var owner29188 = cljs.core.first(arglist__29293);
var p__29278 = cljs.core.rest(arglist__29293);
return geo_sponsors_component__delegate(data__7882__auto__,owner29188,p__29278);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29281))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m29190){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m29190);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m29190){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m29190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
