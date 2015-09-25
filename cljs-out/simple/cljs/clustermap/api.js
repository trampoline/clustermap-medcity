// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.lastcall_method');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__27865){var map__27869 = p__27865;var map__27869__$1 = ((cljs.core.seq_QMARK_.call(null,map__27869))?cljs.core.apply.call(null,cljs.core.hash_map,map__27869):map__27869);var opts = map__27869__$1;var content = cljs.core.get.call(null,map__27869__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27869__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27869__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27869,map__27869__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27869,map__27869__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27869,map__27869__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27869,map__27869__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27871 = method;var G__27871__$1 = (((G__27871 == null))?null:cljs.core.name.call(null,G__27871));var G__27871__$2 = (((G__27871__$1 == null))?null:clojure.string.upper_case.call(null,G__27871__$1));return G__27871__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27865 = null;if (arguments.length > 1) {
  p__27865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27865);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27872){
var url = cljs.core.first(arglist__27872);
var p__27865 = cljs.core.rest(arglist__27872);
return AJAX__delegate(url,p__27865);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27873){var map__27875 = p__27873;var map__27875__$1 = ((cljs.core.seq_QMARK_.call(null,map__27875))?cljs.core.apply.call(null,cljs.core.hash_map,map__27875):map__27875);var opts = map__27875__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27873 = null;if (arguments.length > 1) {
  p__27873 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27873);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27876){
var url = cljs.core.first(arglist__27876);
var p__27873 = cljs.core.rest(arglist__27876);
return GET__delegate(url,p__27873);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27877){var map__27879 = p__27877;var map__27879__$1 = ((cljs.core.seq_QMARK_.call(null,map__27879))?cljs.core.apply.call(null,cljs.core.hash_map,map__27879):map__27879);var opts = map__27879__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27877 = null;if (arguments.length > 2) {
  p__27877 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27877);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27880){
var url = cljs.core.first(arglist__27880);
arglist__27880 = cljs.core.next(arglist__27880);
var content = cljs.core.first(arglist__27880);
var p__27877 = cljs.core.rest(arglist__27880);
return POST__delegate(url,content,p__27877);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27881){var map__27883 = p__27881;var map__27883__$1 = ((cljs.core.seq_QMARK_.call(null,map__27883))?cljs.core.apply.call(null,cljs.core.hash_map,map__27883):map__27883);var opts = map__27883__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27881 = null;if (arguments.length > 2) {
  p__27881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27881);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27884){
var url = cljs.core.first(arglist__27884);
arglist__27884 = cljs.core.next(arglist__27884);
var content = cljs.core.first(arglist__27884);
var p__27881 = cljs.core.rest(arglist__27884);
return PUT__delegate(url,content,p__27881);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,ch){
return (function (state_27902){var state_val_27903 = (state_27902[(1)]);if((state_val_27903 === (2)))
{var inst_27899 = (state_27902[(2)]);var inst_27900 = console.log(inst_27899);var state_27902__$1 = state_27902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27902__$1,inst_27900);
} else
{if((state_val_27903 === (1)))
{var state_27902__$1 = state_27902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27902__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27907 = [null,null,null,null,null,null,null];(statearr_27907[(0)] = state_machine__9111__auto__);
(statearr_27907[(1)] = (1));
return statearr_27907;
});
var state_machine__9111__auto____1 = (function (state_27902){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27902);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27908){if((e27908 instanceof Object))
{var ex__9114__auto__ = e27908;var statearr_27909_27911 = state_27902;(statearr_27909_27911[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27902);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27908;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27912 = state_27902;
state_27902 = G__27912;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27902){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27910 = f__9126__auto__.call(null);(statearr_27910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,ch))
);
return c__9125__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__27913){
var f = cljs.core.first(arglist__27913);
var args = cljs.core.rest(arglist__27913);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27916){var vec__27917 = p__27916;var k = cljs.core.nth.call(null,vec__27917,(0),null);var v = cljs.core.nth.call(null,vec__27917,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27944 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27944,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27944,r){
return (function (state_27935){var state_val_27936 = (state_27935[(1)]);if((state_val_27936 === (2)))
{var inst_27932 = (state_27935[(2)]);var inst_27933 = cljs.core.reset_BANG_.call(null,r,inst_27932);var state_27935__$1 = state_27935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27935__$1,inst_27933);
} else
{if((state_val_27936 === (1)))
{var state_27935__$1 = state_27935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27935__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27944,r))
;return ((function (switch__9110__auto__,c__9125__auto___27944,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27940 = [null,null,null,null,null,null,null];(statearr_27940[(0)] = state_machine__9111__auto__);
(statearr_27940[(1)] = (1));
return statearr_27940;
});
var state_machine__9111__auto____1 = (function (state_27935){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27935);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27941){if((e27941 instanceof Object))
{var ex__9114__auto__ = e27941;var statearr_27942_27945 = state_27935;(statearr_27942_27945[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27941;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27946 = state_27935;
state_27935 = G__27946;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27935){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27944,r))
})();var state__9127__auto__ = (function (){var statearr_27943 = f__9126__auto__.call(null);(statearr_27943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27944);
return statearr_27943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27944,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__27947){
var id = cljs.core.first(arglist__27947);
arglist__27947 = cljs.core.next(arglist__27947);
var tolerance = cljs.core.first(arglist__27947);
var opts = cljs.core.rest(arglist__27947);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27948){
var id = cljs.core.first(arglist__27948);
var opts = cljs.core.rest(arglist__27948);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__27949){
var ids = cljs.core.first(arglist__27949);
arglist__27949 = cljs.core.next(arglist__27949);
var tolerance = cljs.core.first(arglist__27949);
var opts = cljs.core.rest(arglist__27949);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27950){var map__27952 = p__27950;var map__27952__$1 = ((cljs.core.seq_QMARK_.call(null,map__27952))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);var opts = map__27952__$1;var boundaryline_ids = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27950 = null;if (arguments.length > 3) {
  p__27950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27950);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27953){
var collection_id = cljs.core.first(arglist__27953);
arglist__27953 = cljs.core.next(arglist__27953);
var tolerance = cljs.core.first(arglist__27953);
arglist__27953 = cljs.core.next(arglist__27953);
var bounds = cljs.core.first(arglist__27953);
var p__27950 = cljs.core.rest(arglist__27953);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27950);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var boundaryline_aggregation_factory27954 = null;
var boundaryline_aggregation_factory27954__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var boundaryline_aggregation_factory27954__9 = (function() { 
var G__27961__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27958){var vec__27960 = p__27958;var type_ids = cljs.core.nth.call(null,vec__27960,(0),null);var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
};
var G__27961 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27958 = null;if (arguments.length > 8) {
  p__27958 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27961__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27958);};
G__27961.cljs$lang$maxFixedArity = 8;
G__27961.cljs$lang$applyTo = (function (arglist__27962){
var index = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var type = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var blcoll = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var attr = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var filter = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var bounds = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var scale_attr = cljs.core.first(arglist__27962);
arglist__27962 = cljs.core.next(arglist__27962);
var post_scale_factor = cljs.core.first(arglist__27962);
var p__27958 = cljs.core.rest(arglist__27962);
return G__27961__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27958);
});
G__27961.cljs$core$IFn$_invoke$arity$variadic = G__27961__delegate;
return G__27961;
})()
;
boundaryline_aggregation_factory27954 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27958 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27954__0.call(this);
default:
return boundaryline_aggregation_factory27954__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27954.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27954.cljs$lang$applyTo = boundaryline_aggregation_factory27954__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27954.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27954__0;
boundaryline_aggregation_factory27954.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27954__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27954;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var nested_aggregation_factory27963 = null;
var nested_aggregation_factory27963__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var nested_aggregation_factory27963__1 = (function (p__27967){var map__27969 = p__27967;var map__27969__$1 = ((cljs.core.seq_QMARK_.call(null,map__27969))?cljs.core.apply.call(null,cljs.core.hash_map,map__27969):map__27969);var q = map__27969__$1;var stats_attr = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27969__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
nested_aggregation_factory27963 = function(p__27967){
switch(arguments.length){
case 0:
return nested_aggregation_factory27963__0.call(this);
case 1:
return nested_aggregation_factory27963__1.call(this,p__27967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27963.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27963__0;
nested_aggregation_factory27963.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27963__1;
return nested_aggregation_factory27963;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var summary_stats_factory27970 = null;
var summary_stats_factory27970__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var summary_stats_factory27970__6 = (function() { 
var G__27977__delegate = function (index,type,statsattrs,filter,bounds,p__27974){var vec__27976 = p__27974;var type_ids = cljs.core.nth.call(null,vec__27976,(0),null);var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
};
var G__27977 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27974 = null;if (arguments.length > 5) {
  p__27974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27977__delegate.call(this,index,type,statsattrs,filter,bounds,p__27974);};
G__27977.cljs$lang$maxFixedArity = 5;
G__27977.cljs$lang$applyTo = (function (arglist__27978){
var index = cljs.core.first(arglist__27978);
arglist__27978 = cljs.core.next(arglist__27978);
var type = cljs.core.first(arglist__27978);
arglist__27978 = cljs.core.next(arglist__27978);
var statsattrs = cljs.core.first(arglist__27978);
arglist__27978 = cljs.core.next(arglist__27978);
var filter = cljs.core.first(arglist__27978);
arglist__27978 = cljs.core.next(arglist__27978);
var bounds = cljs.core.first(arglist__27978);
var p__27974 = cljs.core.rest(arglist__27978);
return G__27977__delegate(index,type,statsattrs,filter,bounds,p__27974);
});
G__27977.cljs$core$IFn$_invoke$arity$variadic = G__27977__delegate;
return G__27977;
})()
;
summary_stats_factory27970 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27974 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27970__0.call(this);
default:
return summary_stats_factory27970__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27970.cljs$lang$maxFixedArity = 5;
summary_stats_factory27970.cljs$lang$applyTo = summary_stats_factory27970__6.cljs$lang$applyTo;
summary_stats_factory27970.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27970__0;
summary_stats_factory27970.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27970__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27970;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var location_lists_factory27979 = null;
var location_lists_factory27979__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var location_lists_factory27979__8 = (function() { 
var G__27986__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27983){var vec__27985 = p__27983;var type_ids = cljs.core.nth.call(null,vec__27985,(0),null);var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
};
var G__27986 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27983 = null;if (arguments.length > 7) {
  p__27983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27986__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27983);};
G__27986.cljs$lang$maxFixedArity = 7;
G__27986.cljs$lang$applyTo = (function (arglist__27987){
var index = cljs.core.first(arglist__27987);
arglist__27987 = cljs.core.next(arglist__27987);
var type = cljs.core.first(arglist__27987);
arglist__27987 = cljs.core.next(arglist__27987);
var location_attr = cljs.core.first(arglist__27987);
arglist__27987 = cljs.core.next(arglist__27987);
var attrs = cljs.core.first(arglist__27987);
arglist__27987 = cljs.core.next(arglist__27987);
var max_count = cljs.core.first(arglist__27987);
arglist__27987 = cljs.core.next(arglist__27987);
var filter = cljs.core.first(arglist__27987);
arglist__27987 = cljs.core.next(arglist__27987);
var bounds = cljs.core.first(arglist__27987);
var p__27983 = cljs.core.rest(arglist__27987);
return G__27986__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27983);
});
G__27986.cljs$core$IFn$_invoke$arity$variadic = G__27986__delegate;
return G__27986;
})()
;
location_lists_factory27979 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27983 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27979__0.call(this);
default:
return location_lists_factory27979__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27979.cljs$lang$maxFixedArity = 7;
location_lists_factory27979.cljs$lang$applyTo = location_lists_factory27979__8.cljs$lang$applyTo;
location_lists_factory27979.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27979__0;
location_lists_factory27979.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27979__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27979;
})()
;})(in_flight_atom__14564__auto__))
});
/**
* saner version
*/
clustermap.api.location_lists_2_factory = (function location_lists_2_factory(){var in_flight_atom__14570__auto__ = cljs.core.atom.call(null,null);var f__14571__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27996 = schema.core.Any;var input_schema27997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentHashMap.fromArrays([schema.core.Keyword,new cljs.core.Keyword(null,"max-count","max-count",1539185305),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"index-name","index-name",-297122515)],[schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any]),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker27998 = schema.core.checker.call(null,input_schema27997);var output_checker27999 = schema.core.checker.call(null,output_schema27996);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27996,input_schema27997,input_checker27998,output_checker27999,in_flight_atom__14570__auto__){
return (function fnk27995(G__28000){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28000], null);var temp__4126__auto___28002 = input_checker27998.call(null,args__6035__auto___28001);if(cljs.core.truth_(temp__4126__auto___28002))
{var error__6036__auto___28003 = temp__4126__auto___28002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27995","fnk27995",1546086435,null),cljs.core.pr_str.call(null,error__6036__auto___28003)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28003,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28001,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27997,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__28000;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var location_attr = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),cljs.core.PersistentVector.EMPTY);var attrs = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY);var sort_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),cljs.core.PersistentVector.EMPTY);var max_count = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"max-count","max-count",1539185305),cljs.core.PersistentVector.EMPTY);var valch__14572__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_name)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14570__auto__,valch__14572__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28004 = output_checker27999.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28004))
{var error__6036__auto___28005 = temp__4126__auto___28004;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27995","fnk27995",1546086435,null),cljs.core.pr_str.call(null,error__6036__auto___28005)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28005,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27996,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27996,input_schema27997,input_checker27998,output_checker27999,in_flight_atom__14570__auto__))
,schema.core.make_fn_schema.call(null,output_schema27996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27997], null)));
})();return ((function (in_flight_atom__14570__auto__,f__14571__auto__){
return (function() {
var location_lists_2_factory27988 = null;
var location_lists_2_factory27988__0 = (function (){var emptych__14573__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14573__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14570__auto__,emptych__14573__auto__);
});
var location_lists_2_factory27988__1 = (function() { 
var G__28006__delegate = function (p__14574__auto__){return cljs.core.apply.call(null,f__14571__auto__,p__14574__auto__);
};
var G__28006 = function (var_args){
var p__14574__auto__ = null;if (arguments.length > 0) {
  p__14574__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28006__delegate.call(this,p__14574__auto__);};
G__28006.cljs$lang$maxFixedArity = 0;
G__28006.cljs$lang$applyTo = (function (arglist__28007){
var p__14574__auto__ = cljs.core.seq(arglist__28007);
return G__28006__delegate(p__14574__auto__);
});
G__28006.cljs$core$IFn$_invoke$arity$variadic = G__28006__delegate;
return G__28006;
})()
;
location_lists_2_factory27988 = function(var_args){
var p__14574__auto__ = var_args;
switch(arguments.length){
case 0:
return location_lists_2_factory27988__0.call(this);
default:
return location_lists_2_factory27988__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_2_factory27988.cljs$lang$maxFixedArity = 0;
location_lists_2_factory27988.cljs$lang$applyTo = location_lists_2_factory27988__1.cljs$lang$applyTo;
location_lists_2_factory27988.cljs$core$IFn$_invoke$arity$0 = location_lists_2_factory27988__0;
location_lists_2_factory27988.cljs$core$IFn$_invoke$arity$variadic = location_lists_2_factory27988__1.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_2_factory27988;
})()
;})(in_flight_atom__14570__auto__,f__14571__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var simple_table_factory28008 = null;
var simple_table_factory28008__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var simple_table_factory28008__8 = (function() { 
var G__28015__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__28012){var vec__28014 = p__28012;var type_ids = cljs.core.nth.call(null,vec__28014,(0),null);var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
};
var G__28015 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__28012 = null;if (arguments.length > 7) {
  p__28012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__28015__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__28012);};
G__28015.cljs$lang$maxFixedArity = 7;
G__28015.cljs$lang$applyTo = (function (arglist__28016){
var index = cljs.core.first(arglist__28016);
arglist__28016 = cljs.core.next(arglist__28016);
var type = cljs.core.first(arglist__28016);
arglist__28016 = cljs.core.next(arglist__28016);
var filter_spec = cljs.core.first(arglist__28016);
arglist__28016 = cljs.core.next(arglist__28016);
var bounds = cljs.core.first(arglist__28016);
arglist__28016 = cljs.core.next(arglist__28016);
var sort_spec = cljs.core.first(arglist__28016);
arglist__28016 = cljs.core.next(arglist__28016);
var from = cljs.core.first(arglist__28016);
arglist__28016 = cljs.core.next(arglist__28016);
var size = cljs.core.first(arglist__28016);
var p__28012 = cljs.core.rest(arglist__28016);
return G__28015__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__28012);
});
G__28015.cljs$core$IFn$_invoke$arity$variadic = G__28015__delegate;
return G__28015;
})()
;
simple_table_factory28008 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__28012 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory28008__0.call(this);
default:
return simple_table_factory28008__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory28008.cljs$lang$maxFixedArity = 7;
simple_table_factory28008.cljs$lang$applyTo = simple_table_factory28008__8.cljs$lang$applyTo;
simple_table_factory28008.cljs$core$IFn$_invoke$arity$0 = simple_table_factory28008__0;
simple_table_factory28008.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory28008__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory28008;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var timeline_factory28017 = null;
var timeline_factory28017__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var timeline_factory28017__2 = (function (query,filter_spec){var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
timeline_factory28017 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory28017__0.call(this);
case 2:
return timeline_factory28017__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory28017.cljs$core$IFn$_invoke$arity$0 = timeline_factory28017__0;
timeline_factory28017.cljs$core$IFn$_invoke$arity$2 = timeline_factory28017__2;
return timeline_factory28017;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var geo_sponsors_factory28018 = null;
var geo_sponsors_factory28018__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var geo_sponsors_factory28018__1 = (function (bounds){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
geo_sponsors_factory28018 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory28018__0.call(this);
case 1:
return geo_sponsors_factory28018__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory28018.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory28018__0;
geo_sponsors_factory28018.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory28018__1;
return geo_sponsors_factory28018;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var rankings_factory28019 = null;
var rankings_factory28019__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var rankings_factory28019__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
rankings_factory28019 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory28019__0.call(this);
case 9:
return rankings_factory28019__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory28019.cljs$core$IFn$_invoke$arity$0 = rankings_factory28019__0;
rankings_factory28019.cljs$core$IFn$_invoke$arity$9 = rankings_factory28019__9;
return rankings_factory28019;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14570__auto__ = cljs.core.atom.call(null,null);var f__14571__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28028 = schema.core.Any;var input_schema28029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"index-type","index-type",500383962),schema.core.Keyword,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any]),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker28030 = schema.core.checker.call(null,input_schema28029);var output_checker28031 = schema.core.checker.call(null,output_schema28028);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28028,input_schema28029,input_checker28030,output_checker28031,in_flight_atom__14570__auto__){
return (function fnk28027(G__28032){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28032], null);var temp__4126__auto___28034 = input_checker28030.call(null,args__6035__auto___28033);if(cljs.core.truth_(temp__4126__auto___28034))
{var error__6036__auto___28035 = temp__4126__auto___28034;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28027","fnk28027",-1611867217,null),cljs.core.pr_str.call(null,error__6036__auto___28035)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28035,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28033,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28029,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__28032;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var row_path = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"row-path","row-path",-709648669),cljs.core.PersistentVector.EMPTY);var row_aggs = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),cljs.core.PersistentVector.EMPTY);var col_path = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"col-path","col-path",-1370965241),cljs.core.PersistentVector.EMPTY);var col_aggs = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),cljs.core.PersistentVector.EMPTY);var metric_path = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"metric-path","metric-path",1253121758),cljs.core.PersistentVector.EMPTY);var metric_aggs = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),cljs.core.PersistentVector.EMPTY);var valch__14572__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14570__auto__,valch__14572__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28036 = output_checker28031.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28036))
{var error__6036__auto___28037 = temp__4126__auto___28036;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28027","fnk28027",-1611867217,null),cljs.core.pr_str.call(null,error__6036__auto___28037)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28037,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28028,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28028,input_schema28029,input_checker28030,output_checker28031,in_flight_atom__14570__auto__))
,schema.core.make_fn_schema.call(null,output_schema28028,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28029], null)));
})();return ((function (in_flight_atom__14570__auto__,f__14571__auto__){
return (function() {
var ranges_factory28020 = null;
var ranges_factory28020__0 = (function (){var emptych__14573__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14573__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14570__auto__,emptych__14573__auto__);
});
var ranges_factory28020__1 = (function() { 
var G__28038__delegate = function (p__14574__auto__){return cljs.core.apply.call(null,f__14571__auto__,p__14574__auto__);
};
var G__28038 = function (var_args){
var p__14574__auto__ = null;if (arguments.length > 0) {
  p__14574__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28038__delegate.call(this,p__14574__auto__);};
G__28038.cljs$lang$maxFixedArity = 0;
G__28038.cljs$lang$applyTo = (function (arglist__28039){
var p__14574__auto__ = cljs.core.seq(arglist__28039);
return G__28038__delegate(p__14574__auto__);
});
G__28038.cljs$core$IFn$_invoke$arity$variadic = G__28038__delegate;
return G__28038;
})()
;
ranges_factory28020 = function(var_args){
var p__14574__auto__ = var_args;
switch(arguments.length){
case 0:
return ranges_factory28020__0.call(this);
default:
return ranges_factory28020__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory28020.cljs$lang$maxFixedArity = 0;
ranges_factory28020.cljs$lang$applyTo = ranges_factory28020__1.cljs$lang$applyTo;
ranges_factory28020.cljs$core$IFn$_invoke$arity$0 = ranges_factory28020__0;
ranges_factory28020.cljs$core$IFn$_invoke$arity$variadic = ranges_factory28020__1.cljs$core$IFn$_invoke$arity$variadic;
return ranges_factory28020;
})()
;})(in_flight_atom__14570__auto__,f__14571__auto__))
});
/**
* LOOK AT ME : this is the way to do it, with defnk... check out the server-side too
* clustermap.datasets.companies.web-geohash
*/
clustermap.api.geohash_grid_factory = (function geohash_grid_factory(){var in_flight_atom__14570__auto__ = cljs.core.atom.call(null,null);var f__14571__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28048 = schema.core.Any;var input_schema28049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"precision","precision",-1175707478),schema.core.Any,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),schema.core.Any,new cljs.core.Keyword(null,"index-type","index-type",500383962),schema.core.Any,new cljs.core.Keyword(null,"index-name","index-name",-297122515),schema.core.Any], true, false),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker28050 = schema.core.checker.call(null,input_schema28049);var output_checker28051 = schema.core.checker.call(null,output_schema28048);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28048,input_schema28049,input_checker28050,output_checker28051,in_flight_atom__14570__auto__){
return (function fnk28047(G__28052){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28052], null);var temp__4126__auto___28054 = input_checker28050.call(null,args__6035__auto___28053);if(cljs.core.truth_(temp__4126__auto___28054))
{var error__6036__auto___28055 = temp__4126__auto___28054;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28047","fnk28047",1696490501,null),cljs.core.pr_str.call(null,error__6036__auto___28055)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28055,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28053,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28049,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__28052;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var geo_point_field = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),cljs.core.PersistentVector.EMPTY);var precision = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"precision","precision",-1175707478),cljs.core.PersistentVector.EMPTY);var valch__14572__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geohash-grid"),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14570__auto__,valch__14572__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28056 = output_checker28051.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28056))
{var error__6036__auto___28057 = temp__4126__auto___28056;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk28047","fnk28047",1696490501,null),cljs.core.pr_str.call(null,error__6036__auto___28057)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28057,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28048,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28048,input_schema28049,input_checker28050,output_checker28051,in_flight_atom__14570__auto__))
,schema.core.make_fn_schema.call(null,output_schema28048,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28049], null)));
})();return ((function (in_flight_atom__14570__auto__,f__14571__auto__){
return (function() {
var geohash_grid_factory28040 = null;
var geohash_grid_factory28040__0 = (function (){var emptych__14573__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14573__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14570__auto__,emptych__14573__auto__);
});
var geohash_grid_factory28040__1 = (function() { 
var G__28058__delegate = function (p__14574__auto__){return cljs.core.apply.call(null,f__14571__auto__,p__14574__auto__);
};
var G__28058 = function (var_args){
var p__14574__auto__ = null;if (arguments.length > 0) {
  p__14574__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28058__delegate.call(this,p__14574__auto__);};
G__28058.cljs$lang$maxFixedArity = 0;
G__28058.cljs$lang$applyTo = (function (arglist__28059){
var p__14574__auto__ = cljs.core.seq(arglist__28059);
return G__28058__delegate(p__14574__auto__);
});
G__28058.cljs$core$IFn$_invoke$arity$variadic = G__28058__delegate;
return G__28058;
})()
;
geohash_grid_factory28040 = function(var_args){
var p__14574__auto__ = var_args;
switch(arguments.length){
case 0:
return geohash_grid_factory28040__0.call(this);
default:
return geohash_grid_factory28040__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geohash_grid_factory28040.cljs$lang$maxFixedArity = 0;
geohash_grid_factory28040.cljs$lang$applyTo = geohash_grid_factory28040__1.cljs$lang$applyTo;
geohash_grid_factory28040.cljs$core$IFn$_invoke$arity$0 = geohash_grid_factory28040__0;
geohash_grid_factory28040.cljs$core$IFn$_invoke$arity$variadic = geohash_grid_factory28040__1.cljs$core$IFn$_invoke$arity$variadic;
return geohash_grid_factory28040;
})()
;})(in_flight_atom__14570__auto__,f__14571__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var count_matching_factory28060 = null;
var count_matching_factory28060__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var count_matching_factory28060__3 = (function (index,index_type,filter_spec){var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
count_matching_factory28060 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory28060__0.call(this);
case 3:
return count_matching_factory28060__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory28060.cljs$core$IFn$_invoke$arity$0 = count_matching_factory28060__0;
count_matching_factory28060.cljs$core$IFn$_invoke$arity$3 = count_matching_factory28060__3;
return count_matching_factory28060;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var records_factory28061 = null;
var records_factory28061__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var records_factory28061__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14566__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
records_factory28061 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory28061__0.call(this);
case 5:
return records_factory28061__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory28061.cljs$core$IFn$_invoke$arity$0 = records_factory28061__0;
records_factory28061.cljs$core$IFn$_invoke$arity$5 = records_factory28061__5;
return records_factory28061;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var tags_of_type_factory28062 = null;
var tags_of_type_factory28062__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var tags_of_type_factory28062__1 = (function (tag_type){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
tags_of_type_factory28062 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory28062__0.call(this);
case 1:
return tags_of_type_factory28062__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory28062.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory28062__0;
tags_of_type_factory28062.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory28062__1;
return tags_of_type_factory28062;
})()
;})(in_flight_atom__14564__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14564__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14564__auto__){
return (function() {
var geotags_of_type_factory28063 = null;
var geotags_of_type_factory28063__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,emptych__14565__auto__);
});
var geotags_of_type_factory28063__1 = (function (tag_type){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto__,valch__14566__auto__);
});
geotags_of_type_factory28063 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory28063__0.call(this);
case 1:
return geotags_of_type_factory28063__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory28063.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory28063__0;
geotags_of_type_factory28063.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory28063__1;
return geotags_of_type_factory28063;
})()
;})(in_flight_atom__14564__auto__))
});
var in_flight_atom__14564__auto___28064 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14564__auto___28064){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14565__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14565__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto___28064,emptych__14565__auto__);
});
var company_search__1 = (function (query){var valch__14566__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14564__auto___28064,valch__14566__auto__);
});
company_search = function(query){
switch(arguments.length){
case 0:
return company_search__0.call(this);
case 1:
return company_search__1.call(this,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
company_search.cljs$core$IFn$_invoke$arity$0 = company_search__0;
company_search.cljs$core$IFn$_invoke$arity$1 = company_search__1;
return company_search;
})()
;})(in_flight_atom__14564__auto___28064))
;
