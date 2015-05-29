// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
var AJAX__delegate = function (url,p__22547){var map__22551 = p__22547;var map__22551__$1 = ((cljs.core.seq_QMARK_.call(null,map__22551))?cljs.core.apply.call(null,cljs.core.hash_map,map__22551):map__22551);var opts = map__22551__$1;var content = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__22551__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__22551,map__22551__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__22551,map__22551__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__22551,map__22551__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__22551,map__22551__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__22553 = method;var G__22553__$1 = (((G__22553 == null))?null:cljs.core.name.call(null,G__22553));var G__22553__$2 = (((G__22553__$1 == null))?null:clojure.string.upper_case.call(null,G__22553__$1));return G__22553__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__22547 = null;if (arguments.length > 1) {
  p__22547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__22547);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__22554){
var url = cljs.core.first(arglist__22554);
var p__22547 = cljs.core.rest(arglist__22554);
return AJAX__delegate(url,p__22547);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__22555){var map__22557 = p__22555;var map__22557__$1 = ((cljs.core.seq_QMARK_.call(null,map__22557))?cljs.core.apply.call(null,cljs.core.hash_map,map__22557):map__22557);var opts = map__22557__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__22555 = null;if (arguments.length > 1) {
  p__22555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__22555);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__22558){
var url = cljs.core.first(arglist__22558);
var p__22555 = cljs.core.rest(arglist__22558);
return GET__delegate(url,p__22555);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__22559){var map__22561 = p__22559;var map__22561__$1 = ((cljs.core.seq_QMARK_.call(null,map__22561))?cljs.core.apply.call(null,cljs.core.hash_map,map__22561):map__22561);var opts = map__22561__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__22559 = null;if (arguments.length > 2) {
  p__22559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__22559);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__22562){
var url = cljs.core.first(arglist__22562);
arglist__22562 = cljs.core.next(arglist__22562);
var content = cljs.core.first(arglist__22562);
var p__22559 = cljs.core.rest(arglist__22562);
return POST__delegate(url,content,p__22559);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__22563){var map__22565 = p__22563;var map__22565__$1 = ((cljs.core.seq_QMARK_.call(null,map__22565))?cljs.core.apply.call(null,cljs.core.hash_map,map__22565):map__22565);var opts = map__22565__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__22563 = null;if (arguments.length > 2) {
  p__22563 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__22563);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__22566){
var url = cljs.core.first(arglist__22566);
arglist__22566 = cljs.core.next(arglist__22566);
var content = cljs.core.first(arglist__22566);
var p__22563 = cljs.core.rest(arglist__22566);
return PUT__delegate(url,content,p__22563);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_22701){var state_val_22702 = (state_22701[(1)]);if((state_val_22702 === (7)))
{var inst_22658 = (state_22701[(7)]);var inst_22657 = (state_22701[(2)]);var inst_22658__$1 = cljs.core.nth.call(null,inst_22657,(0),null);var inst_22659 = cljs.core.nth.call(null,inst_22657,(1),null);var inst_22660 = cljs.core.sequential_QMARK_.call(null,inst_22658__$1);var state_22701__$1 = (function (){var statearr_22703 = state_22701;(statearr_22703[(8)] = inst_22659);
(statearr_22703[(7)] = inst_22658__$1);
return statearr_22703;
})();if(inst_22660)
{var statearr_22704_22739 = state_22701__$1;(statearr_22704_22739[(1)] = (8));
} else
{var statearr_22705_22740 = state_22701__$1;(statearr_22705_22740[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (20)))
{var inst_22658 = (state_22701[(7)]);var state_22701__$1 = state_22701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22701__$1,(23),inst_22658);
} else
{if((state_val_22702 === (1)))
{var state_22701__$1 = state_22701;var statearr_22706_22741 = state_22701__$1;(statearr_22706_22741[(2)] = null);
(statearr_22706_22741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (4)))
{var state_22701__$1 = state_22701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22701__$1,(7),ocomm);
} else
{if((state_val_22702 === (15)))
{var inst_22681 = (state_22701[(2)]);var state_22701__$1 = state_22701;var statearr_22707_22742 = state_22701__$1;(statearr_22707_22742[(2)] = inst_22681);
(statearr_22707_22742[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (21)))
{var state_22701__$1 = state_22701;var statearr_22708_22743 = state_22701__$1;(statearr_22708_22743[(2)] = null);
(statearr_22708_22743[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (13)))
{var inst_22664 = (state_22701[(9)]);var state_22701__$1 = state_22701;var statearr_22709_22744 = state_22701__$1;(statearr_22709_22744[(2)] = inst_22664);
(statearr_22709_22744[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (22)))
{var inst_22690 = (state_22701[(2)]);var state_22701__$1 = state_22701;var statearr_22710_22745 = state_22701__$1;(statearr_22710_22745[(2)] = inst_22690);
(statearr_22710_22745[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (6)))
{var inst_22697 = (state_22701[(2)]);var state_22701__$1 = state_22701;var statearr_22711_22746 = state_22701__$1;(statearr_22711_22746[(2)] = inst_22697);
(statearr_22711_22746[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (17)))
{var state_22701__$1 = state_22701;var statearr_22712_22747 = state_22701__$1;(statearr_22712_22747[(2)] = null);
(statearr_22712_22747[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (3)))
{var inst_22699 = (state_22701[(2)]);var state_22701__$1 = state_22701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22701__$1,inst_22699);
} else
{if((state_val_22702 === (12)))
{var inst_22683 = (state_22701[(2)]);var state_22701__$1 = state_22701;var statearr_22713_22748 = state_22701__$1;(statearr_22713_22748[(2)] = inst_22683);
(statearr_22713_22748[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (2)))
{var state_22701__$1 = state_22701;var statearr_22714_22749 = state_22701__$1;(statearr_22714_22749[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (23)))
{var inst_22687 = (state_22701[(2)]);var state_22701__$1 = state_22701;var statearr_22716_22750 = state_22701__$1;(statearr_22716_22750[(2)] = inst_22687);
(statearr_22716_22750[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (19)))
{var inst_22674 = (state_22701[(2)]);var state_22701__$1 = state_22701;var statearr_22717_22751 = state_22701__$1;(statearr_22717_22751[(2)] = inst_22674);
(statearr_22717_22751[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (11)))
{var inst_22663 = (state_22701[(10)]);var inst_22666 = cljs.core.empty_QMARK_.call(null,inst_22663);var state_22701__$1 = state_22701;if(inst_22666)
{var statearr_22718_22752 = state_22701__$1;(statearr_22718_22752[(1)] = (13));
} else
{var statearr_22719_22753 = state_22701__$1;(statearr_22719_22753[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (9)))
{var inst_22658 = (state_22701[(7)]);var state_22701__$1 = state_22701;if(cljs.core.truth_(inst_22658))
{var statearr_22720_22754 = state_22701__$1;(statearr_22720_22754[(1)] = (20));
} else
{var statearr_22721_22755 = state_22701__$1;(statearr_22721_22755[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (5)))
{var state_22701__$1 = state_22701;var statearr_22722_22756 = state_22701__$1;(statearr_22722_22756[(2)] = null);
(statearr_22722_22756[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (14)))
{var inst_22663 = (state_22701[(10)]);var inst_22669 = cljs.core.rest.call(null,inst_22663);var inst_22670 = cljs.core.first.call(null,inst_22663);var state_22701__$1 = (function (){var statearr_22723 = state_22701;(statearr_22723[(11)] = inst_22669);
return statearr_22723;
})();if(cljs.core.truth_(inst_22670))
{var statearr_22724_22757 = state_22701__$1;(statearr_22724_22757[(1)] = (16));
} else
{var statearr_22725_22758 = state_22701__$1;(statearr_22725_22758[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (16)))
{var inst_22663 = (state_22701[(10)]);var inst_22672 = cljs.core.first.call(null,inst_22663);var state_22701__$1 = state_22701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22701__$1,(19),inst_22672);
} else
{if((state_val_22702 === (10)))
{var inst_22659 = (state_22701[(8)]);var inst_22692 = (state_22701[(2)]);var inst_22693 = cljs.core.apply.call(null,handler,inst_22692,inst_22659);var state_22701__$1 = (function (){var statearr_22726 = state_22701;(statearr_22726[(12)] = inst_22693);
return statearr_22726;
})();var statearr_22727_22759 = state_22701__$1;(statearr_22727_22759[(2)] = null);
(statearr_22727_22759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (18)))
{var inst_22664 = (state_22701[(9)]);var inst_22669 = (state_22701[(11)]);var inst_22677 = (state_22701[(2)]);var inst_22678 = cljs.core.conj.call(null,inst_22664,inst_22677);var inst_22663 = inst_22669;var inst_22664__$1 = inst_22678;var state_22701__$1 = (function (){var statearr_22728 = state_22701;(statearr_22728[(9)] = inst_22664__$1);
(statearr_22728[(10)] = inst_22663);
return statearr_22728;
})();var statearr_22729_22760 = state_22701__$1;(statearr_22729_22760[(2)] = null);
(statearr_22729_22760[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22702 === (8)))
{var inst_22658 = (state_22701[(7)]);var inst_22662 = cljs.core.PersistentVector.EMPTY;var inst_22663 = inst_22658;var inst_22664 = inst_22662;var state_22701__$1 = (function (){var statearr_22730 = state_22701;(statearr_22730[(9)] = inst_22664);
(statearr_22730[(10)] = inst_22663);
return statearr_22730;
})();var statearr_22731_22761 = state_22701__$1;(statearr_22731_22761[(2)] = null);
(statearr_22731_22761[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22735 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22735[(0)] = state_machine__11242__auto__);
(statearr_22735[(1)] = (1));
return statearr_22735;
});
var state_machine__11242__auto____1 = (function (state_22701){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22701);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22736){if((e22736 instanceof Object))
{var ex__11245__auto__ = e22736;var statearr_22737_22762 = state_22701;(statearr_22737_22762[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22736;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22763 = state_22701;
state_22701 = G__22763;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22701){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_22738 = f__11298__auto__.call(null);(statearr_22738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__22766__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__22765 = rseq;var rcomm = cljs.core.nth.call(null,vec__22765,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__22765,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__22766 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22766__delegate.call(this,req_args);};
G__22766.cljs$lang$maxFixedArity = 0;
G__22766.cljs$lang$applyTo = (function (arglist__22767){
var req_args = cljs.core.seq(arglist__22767);
return G__22766__delegate(req_args);
});
G__22766.cljs$core$IFn$_invoke$arity$variadic = G__22766__delegate;
return G__22766;
})()
;
;})(ocomm,_))
});
/**
* implements last-call-wins aync api-call semantics, discarding results from
* any earlier api calls
* - in-flight-atom : an atom used to match received results to calls
* - valch : a single-value channel eventually containing one api-call result
*/
clustermap.api.lastcall_method_impl = (function lastcall_method_impl(in_flight_atom,valch){var rx = cljs.core.async.chan.call(null);cljs.core.reset_BANG_.call(null,in_flight_atom,valch);
var c__11297__auto___22838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___22838,rx){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___22838,rx){
return (function (state_22819){var state_val_22820 = (state_22819[(1)]);if((state_val_22820 === (8)))
{var inst_22815 = (state_22819[(2)]);var inst_22816 = cljs.core.async.close_BANG_.call(null,valch);var inst_22817 = cljs.core.async.close_BANG_.call(null,rx);var state_22819__$1 = (function (){var statearr_22821 = state_22819;(statearr_22821[(7)] = inst_22816);
(statearr_22821[(8)] = inst_22815);
return statearr_22821;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22819__$1,inst_22817);
} else
{if((state_val_22820 === (7)))
{var state_22819__$1 = state_22819;var statearr_22822_22839 = state_22819__$1;(statearr_22822_22839[(2)] = null);
(statearr_22822_22839[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22820 === (6)))
{var inst_22804 = (state_22819[(9)]);var inst_22812 = cljs.core.async.put_BANG_.call(null,rx,inst_22804);var state_22819__$1 = state_22819;var statearr_22823_22840 = state_22819__$1;(statearr_22823_22840[(2)] = inst_22812);
(statearr_22823_22840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22820 === (5)))
{var inst_22810 = (state_22819[(2)]);var state_22819__$1 = state_22819;if(cljs.core.truth_(inst_22810))
{var statearr_22824_22841 = state_22819__$1;(statearr_22824_22841[(1)] = (6));
} else
{var statearr_22825_22842 = state_22819__$1;(statearr_22825_22842[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22820 === (4)))
{var inst_22804 = (state_22819[(9)]);var state_22819__$1 = state_22819;var statearr_22826_22843 = state_22819__$1;(statearr_22826_22843[(2)] = inst_22804);
(statearr_22826_22843[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22820 === (3)))
{var inst_22806 = cljs.core.deref.call(null,in_flight_atom);var inst_22807 = cljs.core._EQ_.call(null,inst_22806,valch);var state_22819__$1 = state_22819;var statearr_22827_22844 = state_22819__$1;(statearr_22827_22844[(2)] = inst_22807);
(statearr_22827_22844[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22820 === (2)))
{var inst_22804 = (state_22819[(9)]);var inst_22804__$1 = (state_22819[(2)]);var state_22819__$1 = (function (){var statearr_22828 = state_22819;(statearr_22828[(9)] = inst_22804__$1);
return statearr_22828;
})();if(cljs.core.truth_(inst_22804__$1))
{var statearr_22829_22845 = state_22819__$1;(statearr_22829_22845[(1)] = (3));
} else
{var statearr_22830_22846 = state_22819__$1;(statearr_22830_22846[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22820 === (1)))
{var state_22819__$1 = state_22819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22819__$1,(2),valch);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__11297__auto___22838,rx))
;return ((function (switch__11241__auto__,c__11297__auto___22838,rx){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22834 = [null,null,null,null,null,null,null,null,null,null];(statearr_22834[(0)] = state_machine__11242__auto__);
(statearr_22834[(1)] = (1));
return statearr_22834;
});
var state_machine__11242__auto____1 = (function (state_22819){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22819);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22835){if((e22835 instanceof Object))
{var ex__11245__auto__ = e22835;var statearr_22836_22847 = state_22819;(statearr_22836_22847[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22848 = state_22819;
state_22819 = G__22848;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22819){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___22838,rx))
})();var state__11299__auto__ = (function (){var statearr_22837 = f__11298__auto__.call(null);(statearr_22837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___22838);
return statearr_22837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___22838,rx))
);
return rx;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,ch){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,ch){
return (function (state_22866){var state_val_22867 = (state_22866[(1)]);if((state_val_22867 === (2)))
{var inst_22863 = (state_22866[(2)]);var inst_22864 = console.log(inst_22863);var state_22866__$1 = state_22866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22866__$1,inst_22864);
} else
{if((state_val_22867 === (1)))
{var state_22866__$1 = state_22866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22866__$1,(2),ch);
} else
{return null;
}
}
});})(c__11297__auto__,ch))
;return ((function (switch__11241__auto__,c__11297__auto__,ch){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22871 = [null,null,null,null,null,null,null];(statearr_22871[(0)] = state_machine__11242__auto__);
(statearr_22871[(1)] = (1));
return statearr_22871;
});
var state_machine__11242__auto____1 = (function (state_22866){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22866);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22872){if((e22872 instanceof Object))
{var ex__11245__auto__ = e22872;var statearr_22873_22875 = state_22866;(statearr_22873_22875[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22872;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22876 = state_22866;
state_22866 = G__22876;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22866){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,ch))
})();var state__11299__auto__ = (function (){var statearr_22874 = f__11298__auto__.call(null);(statearr_22874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,ch))
);
return c__11297__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__22877){
var f = cljs.core.first(arglist__22877);
var args = cljs.core.rest(arglist__22877);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22880){var vec__22881 = p__22880;var k = cljs.core.nth.call(null,vec__22881,(0),null);var v = cljs.core.nth.call(null,vec__22881,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__11297__auto___22908 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto___22908,r){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto___22908,r){
return (function (state_22899){var state_val_22900 = (state_22899[(1)]);if((state_val_22900 === (2)))
{var inst_22896 = (state_22899[(2)]);var inst_22897 = cljs.core.reset_BANG_.call(null,r,inst_22896);var state_22899__$1 = state_22899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22899__$1,inst_22897);
} else
{if((state_val_22900 === (1)))
{var state_22899__$1 = state_22899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22899__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto___22908,r))
;return ((function (switch__11241__auto__,c__11297__auto___22908,r){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22904 = [null,null,null,null,null,null,null];(statearr_22904[(0)] = state_machine__11242__auto__);
(statearr_22904[(1)] = (1));
return statearr_22904;
});
var state_machine__11242__auto____1 = (function (state_22899){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22899);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22905){if((e22905 instanceof Object))
{var ex__11245__auto__ = e22905;var statearr_22906_22909 = state_22899;(statearr_22906_22909[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22905;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22910 = state_22899;
state_22899 = G__22910;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22899){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto___22908,r))
})();var state__11299__auto__ = (function (){var statearr_22907 = f__11298__auto__.call(null);(statearr_22907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto___22908);
return statearr_22907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto___22908,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__22911){
var id = cljs.core.first(arglist__22911);
arglist__22911 = cljs.core.next(arglist__22911);
var tolerance = cljs.core.first(arglist__22911);
var opts = cljs.core.rest(arglist__22911);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__22912){
var id = cljs.core.first(arglist__22912);
var opts = cljs.core.rest(arglist__22912);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__22913){
var ids = cljs.core.first(arglist__22913);
arglist__22913 = cljs.core.next(arglist__22913);
var tolerance = cljs.core.first(arglist__22913);
var opts = cljs.core.rest(arglist__22913);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__22914){var map__22916 = p__22914;var map__22916__$1 = ((cljs.core.seq_QMARK_.call(null,map__22916))?cljs.core.apply.call(null,cljs.core.hash_map,map__22916):map__22916);var opts = map__22916__$1;var boundaryline_ids = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__22914 = null;if (arguments.length > 3) {
  p__22914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__22914);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__22917){
var collection_id = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var tolerance = cljs.core.first(arglist__22917);
arglist__22917 = cljs.core.next(arglist__22917);
var bounds = cljs.core.first(arglist__22917);
var p__22914 = cljs.core.rest(arglist__22917);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__22914);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__22918){var vec__22920 = p__22918;var type_ids = cljs.core.nth.call(null,vec__22920,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__22918 = null;if (arguments.length > 8) {
  p__22918 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__22918);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__22921){
var index = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var type = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var blcoll = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var attr = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var filter = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var bounds = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var scale_attr = cljs.core.first(arglist__22921);
arglist__22921 = cljs.core.next(arglist__22921);
var post_scale_factor = cljs.core.first(arglist__22921);
var p__22918 = cljs.core.rest(arglist__22921);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__22918);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.nested_aggregation = (function nested_aggregation(p__22922){var map__22924 = p__22922;var map__22924__$1 = ((cljs.core.seq_QMARK_.call(null,map__22924))?cljs.core.apply.call(null,cljs.core.hash_map,map__22924):map__22924);var q = map__22924__$1;var stats_attr = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__22924__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);
});
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__22925){var vec__22927 = p__22925;var type_ids = cljs.core.nth.call(null,vec__22927,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__22925 = null;if (arguments.length > 5) {
  p__22925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__22925);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__22928){
var index = cljs.core.first(arglist__22928);
arglist__22928 = cljs.core.next(arglist__22928);
var type = cljs.core.first(arglist__22928);
arglist__22928 = cljs.core.next(arglist__22928);
var statsattrs = cljs.core.first(arglist__22928);
arglist__22928 = cljs.core.next(arglist__22928);
var filter = cljs.core.first(arglist__22928);
arglist__22928 = cljs.core.next(arglist__22928);
var bounds = cljs.core.first(arglist__22928);
var p__22925 = cljs.core.rest(arglist__22928);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__22925);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__22929){var vec__22931 = p__22929;var type_ids = cljs.core.nth.call(null,vec__22931,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__22929 = null;if (arguments.length > 7) {
  p__22929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__22929);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__22932){
var index = cljs.core.first(arglist__22932);
arglist__22932 = cljs.core.next(arglist__22932);
var type = cljs.core.first(arglist__22932);
arglist__22932 = cljs.core.next(arglist__22932);
var location_attr = cljs.core.first(arglist__22932);
arglist__22932 = cljs.core.next(arglist__22932);
var attrs = cljs.core.first(arglist__22932);
arglist__22932 = cljs.core.next(arglist__22932);
var max_count = cljs.core.first(arglist__22932);
arglist__22932 = cljs.core.next(arglist__22932);
var filter = cljs.core.first(arglist__22932);
arglist__22932 = cljs.core.next(arglist__22932);
var bounds = cljs.core.first(arglist__22932);
var p__22929 = cljs.core.rest(arglist__22932);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__22929);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__22933){var vec__22935 = p__22933;var type_ids = cljs.core.nth.call(null,vec__22935,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__22933 = null;if (arguments.length > 7) {
  p__22933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__22933);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__22936){
var index = cljs.core.first(arglist__22936);
arglist__22936 = cljs.core.next(arglist__22936);
var type = cljs.core.first(arglist__22936);
arglist__22936 = cljs.core.next(arglist__22936);
var filter_spec = cljs.core.first(arglist__22936);
arglist__22936 = cljs.core.next(arglist__22936);
var bounds = cljs.core.first(arglist__22936);
arglist__22936 = cljs.core.next(arglist__22936);
var sort_spec = cljs.core.first(arglist__22936);
arglist__22936 = cljs.core.next(arglist__22936);
var from = cljs.core.first(arglist__22936);
arglist__22936 = cljs.core.next(arglist__22936);
var size = cljs.core.first(arglist__22936);
var p__22933 = cljs.core.rest(arglist__22936);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__22933);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;
clustermap.api.timeline = (function timeline(query,filter_spec){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));
});
clustermap.api.geo_sponsors = (function geo_sponsors(bounds){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));
});
clustermap.api.rankings = (function rankings(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));
});
clustermap.api.ranges = (function ranges(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));
});
clustermap.api.count_matching = (function count_matching(index,index_type,filter_spec){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));
});
clustermap.api.records = (function records(index,index_type,filter_spec,sort_spec,size){return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));
});
clustermap.api.tags_of_type = (function tags_of_type(tag_type){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));
});
clustermap.api.geotags_of_type = (function geotags_of_type(tag_type){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));
});
var in_flight_atom__14530__auto___22937 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14530__auto___22937){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14531__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14531__auto__);
return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14530__auto___22937,emptych__14531__auto__);
});
var company_search__1 = (function (query){var valch__14532__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.api.lastcall_method_impl.call(null,in_flight_atom__14530__auto___22937,valch__14532__auto__);
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
;})(in_flight_atom__14530__auto___22937))
;
