// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.min_tolerance = 0.01;
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),clustermap.boundarylines.min_tolerance], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__28143){var vec__28144 = p__28143;var z = cljs.core.nth.call(null,vec__28144,(0),null);var t = cljs.core.nth.call(null,vec__28144,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
{return (zoom <= z);
} else
{return and__3627__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3639__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);return cljs.core.swap_BANG_.call(null,app_state,((function (boundarylines_path__$1){
return (function (old_state){return cljs.core.reduce.call(null,((function (boundarylines_path__$1){
return (function (s,bl){var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var collection_ids = (bl["boundaryline_collection_ids"]);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var collection_cache_base_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_cache_paths = (function (){var iter__4377__auto__ = ((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function iter__28149(s__28150){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__28150__$1 = s__28150;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28150__$1);if(temp__4126__auto__)
{var s__28150__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28150__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28150__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28152 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28151 = (0);while(true){
if((i__28151 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__28151);cljs.core.chunk_append.call(null,b__28152,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__28153 = (i__28151 + (1));
i__28151 = G__28153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28152),iter__28149.call(null,cljs.core.chunk_rest.call(null,s__28150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28152),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__28150__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__28149.call(null,cljs.core.rest.call(null,s__28150__$2)));
}
} else
{return null;
}
break;
}
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
,null,null));
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
;return iter__4377__auto__.call(null,collection_ids);
})();var all_cache_paths = cljs.core.conj.call(null,collection_cache_paths,general_cache_path);return cljs.core.reduce.call(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,collection_cache_paths,all_cache_paths,boundarylines_path__$1){
return (function (s2,cp){return cljs.core.assoc_in.call(null,s2,cp,bl);
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,collection_cache_paths,all_cache_paths,boundarylines_path__$1))
,s,all_cache_paths);
});})(boundarylines_path__$1))
,old_state,boundarylines);
});})(boundarylines_path__$1))
);
});
/**
* take a geojson boundaryline collection index and index the individual boundarylines
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.cache_index = (function cache_index(app_state,boundarylines_path,js_index){var keys = Object.keys(js_index);return cljs.core.swap_BANG_.call(null,app_state,((function (keys){
return (function (old_state){return cljs.core.reduce.call(null,((function (keys){
return (function (s,k){var bl = (js_index[k]);var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var cache_path = cljs.core.concat.call(null,boundarylines_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));return cljs.core.assoc_in.call(null,s,cache_path,bl);
});})(keys))
,old_state,keys);
});})(keys))
);
});
/**
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundaryline_set = (function() { 
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__28154){var map__28170 = p__28154;var map__28170__$1 = ((cljs.core.seq_QMARK_.call(null,map__28170))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);var tolerance = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__28170,map__28170__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__28170,map__28170__$1,tolerance,bounds,boundaryline_ids){
return (function (state_28175){var state_val_28176 = (state_28175[(1)]);if((state_val_28176 === (2)))
{var inst_28172 = (state_28175[(2)]);var inst_28173 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28172);var state_28175__$1 = (function (){var statearr_28177 = state_28175;(statearr_28177[(7)] = inst_28173);
return statearr_28177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28175__$1,true);
} else
{if((state_val_28176 === (1)))
{var state_28175__$1 = state_28175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28175__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__28170,map__28170__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__28170,map__28170__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28181 = [null,null,null,null,null,null,null,null];(statearr_28181[(0)] = state_machine__9111__auto__);
(statearr_28181[(1)] = (1));
return statearr_28181;
});
var state_machine__9111__auto____1 = (function (state_28175){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28175);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28182){if((e28182 instanceof Object))
{var ex__9114__auto__ = e28182;var statearr_28183_28185 = state_28175;(statearr_28183_28185[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28186 = state_28175;
state_28175 = G__28186;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28175){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__28170,map__28170__$1,tolerance,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28184 = f__9126__auto__.call(null);(statearr_28184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__28170,map__28170__$1,tolerance,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__28154 = null;if (arguments.length > 2) {
  p__28154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__28154);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__28187){
var app_state = cljs.core.first(arglist__28187);
arglist__28187 = cljs.core.next(arglist__28187);
var boundarylines_path = cljs.core.first(arglist__28187);
var p__28154 = cljs.core.rest(arglist__28187);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__28154);
});
fetch_boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = fetch_boundaryline_set__delegate;
return fetch_boundaryline_set;
})()
;
/**
* return a channel with a single boundaryline gotten from cache or API
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_boundaryline = (function() { 
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28188){var map__28217 = p__28188;var map__28217__$1 = ((cljs.core.seq_QMARK_.call(null,map__28217))?cljs.core.apply.call(null,cljs.core.hash_map,map__28217):map__28217);var tolerance = cljs.core.get.call(null,map__28217__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28217,map__28217__$1,tolerance){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28217,map__28217__$1,tolerance){
return (function (state_28231){var state_val_28232 = (state_28231[(1)]);if((state_val_28232 === (5)))
{var inst_28225 = (state_28231[(2)]);var inst_28226 = cljs.core.deref.call(null,app_state);var inst_28227 = cljs.core.get_in.call(null,inst_28226,cache_path);var state_28231__$1 = (function (){var statearr_28233 = state_28231;(statearr_28233[(7)] = inst_28225);
return statearr_28233;
})();var statearr_28234_28245 = state_28231__$1;(statearr_28234_28245[(2)] = inst_28227);
(statearr_28234_28245[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28232 === (4)))
{var inst_28229 = (state_28231[(2)]);var state_28231__$1 = state_28231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else
{if((state_val_28232 === (3)))
{var inst_28220 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28221 = [boundaryline_id];var inst_28222 = (new cljs.core.PersistentVector(null,1,(5),inst_28220,inst_28221,null));var inst_28223 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_28222,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_28231__$1 = state_28231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(5),inst_28223);
} else
{if((state_val_28232 === (2)))
{var state_28231__$1 = state_28231;var statearr_28235_28246 = state_28231__$1;(statearr_28235_28246[(2)] = cached_bl);
(statearr_28235_28246[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28232 === (1)))
{var state_28231__$1 = state_28231;if(cljs.core.truth_(cached_bl))
{var statearr_28236_28247 = state_28231__$1;(statearr_28236_28247[(1)] = (2));
} else
{var statearr_28237_28248 = state_28231__$1;(statearr_28237_28248[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28217,map__28217__$1,tolerance))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28217,map__28217__$1,tolerance){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28241 = [null,null,null,null,null,null,null,null];(statearr_28241[(0)] = state_machine__9111__auto__);
(statearr_28241[(1)] = (1));
return statearr_28241;
});
var state_machine__9111__auto____1 = (function (state_28231){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28231);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28242){if((e28242 instanceof Object))
{var ex__9114__auto__ = e28242;var statearr_28243_28249 = state_28231;(statearr_28243_28249[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28242;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28250 = state_28231;
state_28231 = G__28250;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28217,map__28217__$1,tolerance))
})();var state__9127__auto__ = (function (){var statearr_28244 = f__9126__auto__.call(null);(statearr_28244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28244;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28217,map__28217__$1,tolerance))
);
return c__9125__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28188 = null;if (arguments.length > 3) {
  p__28188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28188);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__28251){
var app_state = cljs.core.first(arglist__28251);
arglist__28251 = cljs.core.next(arglist__28251);
var boundarylines_path = cljs.core.first(arglist__28251);
arglist__28251 = cljs.core.next(arglist__28251);
var boundaryline_id = cljs.core.first(arglist__28251);
var p__28188 = cljs.core.rest(arglist__28251);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28188);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_28271){var state_val_28272 = (state_28271[(1)]);if((state_val_28272 === (2)))
{var inst_28267 = (state_28271[(2)]);var inst_28268 = cljs.core.clj__GT_js.call(null,inst_28267);var inst_28269 = console.log(inst_28268);var state_28271__$1 = state_28271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28271__$1,inst_28269);
} else
{if((state_val_28272 === (1)))
{var state_28271__$1 = state_28271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28271__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28276 = [null,null,null,null,null,null,null];(statearr_28276[(0)] = state_machine__9111__auto__);
(statearr_28276[(1)] = (1));
return statearr_28276;
});
var state_machine__9111__auto____1 = (function (state_28271){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28271);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28277){if((e28277 instanceof Object))
{var ex__9114__auto__ = e28277;var statearr_28278_28280 = state_28271;(statearr_28278_28280[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28271);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28277;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28281 = state_28271;
state_28271 = G__28281;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28271){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_28279 = f__9126__auto__.call(null);(statearr_28279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__28282){var map__28298 = p__28282;var map__28298__$1 = ((cljs.core.seq_QMARK_.call(null,map__28298))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);var bounds = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__28298,map__28298__$1,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__28298,map__28298__$1,bounds,boundaryline_ids){
return (function (state_28303){var state_val_28304 = (state_28303[(1)]);if((state_val_28304 === (2)))
{var inst_28300 = (state_28303[(2)]);var inst_28301 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28300);var state_28303__$1 = (function (){var statearr_28305 = state_28303;(statearr_28305[(7)] = inst_28301);
return statearr_28305;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28303__$1,true);
} else
{if((state_val_28304 === (1)))
{var state_28303__$1 = state_28303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28303__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__28298,map__28298__$1,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__28298,map__28298__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28309 = [null,null,null,null,null,null,null,null];(statearr_28309[(0)] = state_machine__9111__auto__);
(statearr_28309[(1)] = (1));
return statearr_28309;
});
var state_machine__9111__auto____1 = (function (state_28303){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28303);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28310){if((e28310 instanceof Object))
{var ex__9114__auto__ = e28310;var statearr_28311_28313 = state_28303;(statearr_28311_28313[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28310;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28314 = state_28303;
state_28303 = G__28314;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28303){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__28298,map__28298__$1,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28312 = f__9126__auto__.call(null);(statearr_28312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__28298,map__28298__$1,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__28282 = null;if (arguments.length > 4) {
  p__28282 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__28282);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28315){
var app_state = cljs.core.first(arglist__28315);
arglist__28315 = cljs.core.next(arglist__28315);
var boundarylines_path = cljs.core.first(arglist__28315);
arglist__28315 = cljs.core.next(arglist__28315);
var collection_id = cljs.core.first(arglist__28315);
arglist__28315 = cljs.core.next(arglist__28315);
var tolerance = cljs.core.first(arglist__28315);
var p__28282 = cljs.core.rest(arglist__28315);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__28282);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3627__auto__ = default_bl;if(cljs.core.truth_(and__3627__auto__))
{return default_tol;
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.boundarylines.get_cached_boundaryline = (function() { 
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28316){var vec__28319 = p__28316;var map__28320 = cljs.core.nth.call(null,vec__28319,(0),null);var map__28320__$1 = ((cljs.core.seq_QMARK_.call(null,map__28320))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);var indexes = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__28319,map__28320,map__28320__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__28319,map__28320,map__28320__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28316 = null;if (arguments.length > 3) {
  p__28316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28316);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__28321){
var app_state = cljs.core.first(arglist__28321);
arglist__28321 = cljs.core.next(arglist__28321);
var boundarylines_path = cljs.core.first(arglist__28321);
arglist__28321 = cljs.core.next(arglist__28321);
var boundaryline_id = cljs.core.first(arglist__28321);
var p__28316 = cljs.core.rest(arglist__28321);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28316);
});
get_cached_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_cached_boundaryline__delegate;
return get_cached_boundaryline;
})()
;
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3639__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
});
/**
* gets the best boundaryline versions for a zoom level... where the best are not
* immediately available, fetches it asynchronously and returns the best immediately
* available
* - app-state : atom containing app-state
* - boundarylines-path : path in app-state of boundarylines state
* - collection-id : id of boundaryline collection to retrieve from
* - zoom : zoom level to retrieve for
* - boundaryline-ids : ids of boundarylines required
* - bounds :
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28322){var map__28327 = p__28322;var map__28327__$1 = ((cljs.core.seq_QMARK_.call(null,map__28327))?cljs.core.apply.call(null,cljs.core.hash_map,map__28327):map__28327);var boundaryline_ids = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28327,map__28327__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28327,map__28327__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28327,map__28327__$1,boundaryline_ids){
return (function (p__28328){var vec__28329 = p__28328;var blid = cljs.core.nth.call(null,vec__28329,(0),null);var vec__28330 = cljs.core.nth.call(null,vec__28329,(1),null);var tol = cljs.core.nth.call(null,vec__28330,(0),null);var bl = cljs.core.nth.call(null,vec__28330,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28327,map__28327__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28322 = null;if (arguments.length > 5) {
  p__28322 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28322);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28331){
var app_state = cljs.core.first(arglist__28331);
arglist__28331 = cljs.core.next(arglist__28331);
var boundarylines_path = cljs.core.first(arglist__28331);
arglist__28331 = cljs.core.next(arglist__28331);
var collection_id = cljs.core.first(arglist__28331);
arglist__28331 = cljs.core.next(arglist__28331);
var bounds = cljs.core.first(arglist__28331);
arglist__28331 = cljs.core.next(arglist__28331);
var zoom = cljs.core.first(arglist__28331);
var p__28322 = cljs.core.rest(arglist__28331);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28322);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28336_28340 = cljs.core.seq.call(null,keys);var chunk__28337_28341 = null;var count__28338_28342 = (0);var i__28339_28343 = (0);while(true){
if((i__28339_28343 < count__28338_28342))
{var k_28344 = cljs.core._nth.call(null,chunk__28337_28341,i__28339_28343);var obj_28345 = (js_index[k_28344]);var geom_28346 = (obj_28345["geojson"]);var feature_28347 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28345["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28345["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28345["compact_name"])], null)], null));var __28348__$1 = (feature_28347["geometry"] = geom_28346);var __28349__$2 = ((feature_28347["properties"])["index_object"] = obj_28345);features.push(feature_28347);
{
var G__28350 = seq__28336_28340;
var G__28351 = chunk__28337_28341;
var G__28352 = count__28338_28342;
var G__28353 = (i__28339_28343 + (1));
seq__28336_28340 = G__28350;
chunk__28337_28341 = G__28351;
count__28338_28342 = G__28352;
i__28339_28343 = G__28353;
continue;
}
} else
{var temp__4126__auto___28354 = cljs.core.seq.call(null,seq__28336_28340);if(temp__4126__auto___28354)
{var seq__28336_28355__$1 = temp__4126__auto___28354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28336_28355__$1))
{var c__4408__auto___28356 = cljs.core.chunk_first.call(null,seq__28336_28355__$1);{
var G__28357 = cljs.core.chunk_rest.call(null,seq__28336_28355__$1);
var G__28358 = c__4408__auto___28356;
var G__28359 = cljs.core.count.call(null,c__4408__auto___28356);
var G__28360 = (0);
seq__28336_28340 = G__28357;
chunk__28337_28341 = G__28358;
count__28338_28342 = G__28359;
i__28339_28343 = G__28360;
continue;
}
} else
{var k_28361 = cljs.core.first.call(null,seq__28336_28355__$1);var obj_28362 = (js_index[k_28361]);var geom_28363 = (obj_28362["geojson"]);var feature_28364 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28362["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28362["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28362["compact_name"])], null)], null));var __28365__$1 = (feature_28364["geometry"] = geom_28363);var __28366__$2 = ((feature_28364["properties"])["index_object"] = obj_28362);features.push(feature_28364);
{
var G__28367 = cljs.core.next.call(null,seq__28336_28355__$1);
var G__28368 = null;
var G__28369 = (0);
var G__28370 = (0);
seq__28336_28340 = G__28367;
chunk__28337_28341 = G__28368;
count__28338_28342 = G__28369;
i__28339_28343 = G__28370;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_28416){var state_val_28417 = (state_28416[(1)]);if((state_val_28417 === (5)))
{var inst_28403 = (state_28416[(7)]);var inst_28413 = (state_28416[(2)]);var inst_28414 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_28403);var state_28416__$1 = (function (){var statearr_28418 = state_28416;(statearr_28418[(8)] = inst_28413);
return statearr_28418;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28416__$1,inst_28414);
} else
{if((state_val_28417 === (4)))
{var state_28416__$1 = state_28416;var statearr_28419_28431 = state_28416__$1;(statearr_28419_28431[(2)] = null);
(statearr_28419_28431[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28417 === (3)))
{var inst_28403 = (state_28416[(7)]);var inst_28410 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28403);var state_28416__$1 = state_28416;var statearr_28420_28432 = state_28416__$1;(statearr_28420_28432[(2)] = inst_28410);
(statearr_28420_28432[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28417 === (2)))
{var inst_28403 = (state_28416[(7)]);var inst_28403__$1 = (state_28416[(2)]);var inst_28404 = (function (){var bl_coll_index = inst_28403__$1;return ((function (bl_coll_index,inst_28403,inst_28403__$1,state_val_28417,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28403,inst_28403__$1,state_val_28417,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28405 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28404);var inst_28406 = cljs.core.deref.call(null,app_state);var inst_28407 = cljs.core.get_in.call(null,inst_28406,index_path);var inst_28408 = cljs.core._EQ_.call(null,inst_28407,inst_28403__$1);var state_28416__$1 = (function (){var statearr_28421 = state_28416;(statearr_28421[(7)] = inst_28403__$1);
(statearr_28421[(9)] = inst_28405);
return statearr_28421;
})();if(inst_28408)
{var statearr_28422_28433 = state_28416__$1;(statearr_28422_28433[(1)] = (3));
} else
{var statearr_28423_28434 = state_28416__$1;(statearr_28423_28434[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28417 === (1)))
{var inst_28401 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28416__$1 = state_28416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28416__$1,(2),inst_28401);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28427 = [null,null,null,null,null,null,null,null,null,null];(statearr_28427[(0)] = state_machine__9111__auto__);
(statearr_28427[(1)] = (1));
return statearr_28427;
});
var state_machine__9111__auto____1 = (function (state_28416){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28416);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28428){if((e28428 instanceof Object))
{var ex__9114__auto__ = e28428;var statearr_28429_28435 = state_28416;(statearr_28429_28435[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28428;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28436 = state_28416;
state_28416 = G__28436;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28416){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__9127__auto__ = (function (){var statearr_28430 = f__9126__auto__.call(null);(statearr_28430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__9125__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__3639__auto__ = hits;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
