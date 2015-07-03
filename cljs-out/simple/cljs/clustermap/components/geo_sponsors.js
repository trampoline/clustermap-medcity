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
return (function iter__29122(s__29123){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__29123__$1 = s__29123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29123__$1);if(temp__4126__auto__)
{var s__29123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29123__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29123__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29125 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29124 = (0);while(true){
if((i__29124 < size__4376__auto__))
{var map__29128 = cljs.core._nth.call(null,c__4375__auto__,i__29124);var map__29128__$1 = ((cljs.core.seq_QMARK_.call(null,map__29128))?cljs.core.apply.call(null,cljs.core.hash_map,map__29128):map__29128);var teaser = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__29125,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__29130 = (i__29124 + (1));
i__29124 = G__29130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29125),iter__29122.call(null,cljs.core.chunk_rest.call(null,s__29123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29125),null);
}
} else
{var map__29129 = cljs.core.first.call(null,s__29123__$2);var map__29129__$1 = ((cljs.core.seq_QMARK_.call(null,map__29129))?cljs.core.apply.call(null,cljs.core.hash_map,map__29129):map__29129);var teaser = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__29122.call(null,cljs.core.rest.call(null,s__29123__$2)));
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
var component_fnk__7881__auto___29224 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29136 = schema.core.Any;var input_schema29137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29134","map29134",-1306490651,null))], null);var input_checker29138 = schema.core.checker.call(null,input_schema29137);var output_checker29139 = schema.core.checker.call(null,output_schema29136);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function constructor29132(G__29140){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29140], null);var temp__4126__auto___29226 = input_checker29138.call(null,args__6035__auto___29225);if(cljs.core.truth_(temp__4126__auto___29226))
{var error__6036__auto___29227 = temp__4126__auto___29226;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29132","constructor29132",913895801,null),cljs.core.pr_str.call(null,error__6036__auto___29227)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29227,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29225,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29137,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29134 = G__29140;while(true){
if(cljs.core.map_QMARK_.call(null,map29134))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29134)));
}
var map29135 = plumbing.fnk.schema.safe_get.call(null,map29134,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map29135,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map29135,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29134,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t29181 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t29181 = (function (output_checker29139,map29135,output_schema29136,owner,map29134,G__29140,input_checker29138,input_schema29137,bounds,constructor29132,validate__6034__auto__,ufv__,geo_sponsors,meta29182){
this.output_checker29139 = output_checker29139;
this.map29135 = map29135;
this.output_schema29136 = output_schema29136;
this.owner = owner;
this.map29134 = map29134;
this.G__29140 = G__29140;
this.input_checker29138 = input_checker29138;
this.input_schema29137 = input_schema29137;
this.bounds = bounds;
this.constructor29132 = constructor29132;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta29182 = meta29182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t29181.cljs$lang$type = true;
clustermap.components.geo_sponsors.t29181.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t29181";
clustermap.components.geo_sponsors.t29181.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t29181");
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (_,p__29184,p__29185){var self__ = this;
var map__29186 = p__29184;var map__29186__$1 = ((cljs.core.seq_QMARK_.call(null,map__29186))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186):map__29186);var next_bounds = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__29187 = cljs.core.get.call(null,map__29186__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__29187__$1 = ((cljs.core.seq_QMARK_.call(null,map__29187))?cljs.core.apply.call(null,cljs.core.hash_map,map__29187):map__29187);var next_geo_sponsors = map__29187__$1;var next_data = cljs.core.get.call(null,map__29187__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__29188 = p__29185;var map__29188__$1 = ((cljs.core.seq_QMARK_.call(null,map__29188))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);var fetch_geo_sponsors_data_fn = cljs.core.get.call(null,map__29188__$1,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,map__29186,map__29186__$1,next_bounds,map__29187,map__29187__$1,next_geo_sponsors,next_data,map__29188,map__29188__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,map__29186,map__29186__$1,next_bounds,map__29187,map__29187__$1,next_geo_sponsors,next_data,map__29188,map__29188__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (state_29206){var state_val_29207 = (state_29206[(1)]);if((state_val_29207 === (5)))
{var inst_29204 = (state_29206[(2)]);var state_29206__$1 = state_29206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29206__$1,inst_29204);
} else
{if((state_val_29207 === (4)))
{var state_29206__$1 = state_29206;var statearr_29208_29228 = state_29206__$1;(statearr_29208_29228[(2)] = null);
(statearr_29208_29228[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29207 === (3)))
{var inst_29191 = (state_29206[(7)]);var inst_29193 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29194 = ["GEO-SPONSORS : ",inst_29191];var inst_29195 = (new cljs.core.PersistentVector(null,2,(5),inst_29193,inst_29194,null));var inst_29196 = cljs.core.clj__GT_js.call(null,inst_29195);var inst_29197 = console.log(inst_29196);var inst_29198 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29199 = [new cljs.core.Keyword(null,"data","data",-232669377)];var inst_29200 = (new cljs.core.PersistentVector(null,1,(5),inst_29198,inst_29199,null));var inst_29201 = om.core.update_BANG_.call(null,self__.geo_sponsors,inst_29200,inst_29191);var state_29206__$1 = (function (){var statearr_29209 = state_29206;(statearr_29209[(8)] = inst_29197);
return statearr_29209;
})();var statearr_29210_29229 = state_29206__$1;(statearr_29210_29229[(2)] = inst_29201);
(statearr_29210_29229[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29207 === (2)))
{var inst_29191 = (state_29206[(7)]);var inst_29191__$1 = (state_29206[(2)]);var state_29206__$1 = (function (){var statearr_29211 = state_29206;(statearr_29211[(7)] = inst_29191__$1);
return statearr_29211;
})();if(cljs.core.truth_(inst_29191__$1))
{var statearr_29212_29230 = state_29206__$1;(statearr_29212_29230[(1)] = (3));
} else
{var statearr_29213_29231 = state_29206__$1;(statearr_29213_29231[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29207 === (1)))
{var inst_29189 = fetch_geo_sponsors_data_fn.call(null,next_bounds);var state_29206__$1 = state_29206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29206__$1,(2),inst_29189);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,___$1,map__29186,map__29186__$1,next_bounds,map__29187,map__29187__$1,next_geo_sponsors,next_data,map__29188,map__29188__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,map__29186,map__29186__$1,next_bounds,map__29187,map__29187__$1,next_geo_sponsors,next_data,map__29188,map__29188__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29217 = [null,null,null,null,null,null,null,null,null];(statearr_29217[(0)] = state_machine__9111__auto__);
(statearr_29217[(1)] = (1));
return statearr_29217;
});
var state_machine__9111__auto____1 = (function (state_29206){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29206);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object))
{var ex__9114__auto__ = e29218;var statearr_29219_29232 = state_29206;(statearr_29219_29232[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29233 = state_29206;
state_29206 = G__29233;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29206){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,map__29186,map__29186__$1,next_bounds,map__29187,map__29187__$1,next_geo_sponsors,next_data,map__29188,map__29188__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
})();var state__9127__auto__ = (function (){var statearr_29220 = f__9126__auto__.call(null);(statearr_29220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,map__29186,map__29186__$1,next_bounds,map__29187,map__29187__$1,next_geo_sponsors,next_data,map__29188,map__29188__$1,fetch_geo_sponsors_data_fn,owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
);
return c__9125__auto__;
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"fetch-geo-sponsors-data-fn","fetch-geo-sponsors-data-fn",-1337189315),clustermap.api.geo_sponsors_factory.call(null));
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t29181.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.t29181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (_29183){var self__ = this;
var _29183__$1 = this;return self__.meta29182;
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.t29181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function (_29183,meta29182__$1){var self__ = this;
var _29183__$1 = this;return (new clustermap.components.geo_sponsors.t29181(self__.output_checker29139,self__.map29135,self__.output_schema29136,self__.owner,self__.map29134,self__.G__29140,self__.input_checker29138,self__.input_schema29137,self__.bounds,self__.constructor29132,self__.validate__6034__auto__,self__.ufv__,self__.geo_sponsors,meta29182__$1));
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
clustermap.components.geo_sponsors.__GT_t29181 = ((function (owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139){
return (function __GT_t29181(output_checker29139__$1,map29135__$1,output_schema29136__$1,owner__$1,map29134__$1,G__29140__$1,input_checker29138__$1,input_schema29137__$1,bounds__$1,constructor29132__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta29182){return (new clustermap.components.geo_sponsors.t29181(output_checker29139__$1,map29135__$1,output_schema29136__$1,owner__$1,map29134__$1,G__29140__$1,input_checker29138__$1,input_schema29137__$1,bounds__$1,constructor29132__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta29182));
});})(owner,geo_sponsors,bounds,map29135,validate__6034__auto__,ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
;
}
return (new clustermap.components.geo_sponsors.t29181(output_checker29139,map29135,output_schema29136,owner,map29134,G__29140,input_checker29138,input_schema29137,bounds,constructor29132,validate__6034__auto__,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29234 = output_checker29139.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29234))
{var error__6036__auto___29235 = temp__4126__auto___29234;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29132","constructor29132",913895801,null),cljs.core.pr_str.call(null,error__6036__auto___29235)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29235,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29136,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29136,input_schema29137,input_checker29138,output_checker29139))
,schema.core.make_fn_schema.call(null,output_schema29136,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29137], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___29224){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner29131,p__29221){var vec__29223 = p__29221;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29223,(0),null);return component_fnk__7881__auto___29224.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29131,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner29131,var_args){
var p__29221 = null;if (arguments.length > 2) {
  p__29221 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner29131,p__29221);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__29236){
var data__7882__auto__ = cljs.core.first(arglist__29236);
arglist__29236 = cljs.core.next(arglist__29236);
var owner29131 = cljs.core.first(arglist__29236);
var p__29221 = cljs.core.rest(arglist__29236);
return geo_sponsors_component__delegate(data__7882__auto__,owner29131,p__29221);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___29224))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m29133){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m29133);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m29133){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m29133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
