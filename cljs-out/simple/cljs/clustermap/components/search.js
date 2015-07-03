// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = (27);
clustermap.components.search.ENTER_KEY = (13);
clustermap.components.search.LEFT_ARROW = (37);
clustermap.components.search.UP_ARROW = (38);
clustermap.components.search.RIGHT_ARROW = (39);
clustermap.components.search.DOWN_ARROW = (40);
clustermap.components.search.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.search.search_for = (function search_for(state,search_cursor,search_fn,query){om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"query","query",-1288509510),query);
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,query)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),null);
} else
{}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_29670){var state_val_29671 = (state_29670[(1)]);if((state_val_29671 === (5)))
{var inst_29665 = (state_29670[(2)]);var state_29670__$1 = state_29670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29670__$1,(2),inst_29665);
} else
{if((state_val_29671 === (4)))
{var inst_29663 = search_fn.call(null);var state_29670__$1 = state_29670;var statearr_29672_29683 = state_29670__$1;(statearr_29672_29683[(2)] = inst_29663);
(statearr_29672_29683[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29671 === (3)))
{var inst_29661 = search_fn.call(null,query);var state_29670__$1 = state_29670;var statearr_29673_29684 = state_29670__$1;(statearr_29673_29684[(2)] = inst_29661);
(statearr_29673_29684[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29671 === (2)))
{var inst_29667 = (state_29670[(2)]);var inst_29668 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_29667);var state_29670__$1 = state_29670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29670__$1,inst_29668);
} else
{if((state_val_29671 === (1)))
{var inst_29658 = cljs.core.count.call(null,query);var inst_29659 = (inst_29658 > (1));var state_29670__$1 = state_29670;if(cljs.core.truth_(inst_29659))
{var statearr_29674_29685 = state_29670__$1;(statearr_29674_29685[(1)] = (3));
} else
{var statearr_29675_29686 = state_29670__$1;(statearr_29675_29686[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29679 = [null,null,null,null,null,null,null];(statearr_29679[(0)] = state_machine__9111__auto__);
(statearr_29679[(1)] = (1));
return statearr_29679;
});
var state_machine__9111__auto____1 = (function (state_29670){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29670);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29680){if((e29680 instanceof Object))
{var ex__9114__auto__ = e29680;var statearr_29681_29687 = state_29670;(statearr_29681_29687[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29688 = state_29670;
state_29670 = G__29688;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29670){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_29682 = f__9126__auto__.call(null);(statearr_29682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
clustermap.components.search.partition_around = (function partition_around(val,seq){var match_idx = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,v){if(cljs.core._EQ_.call(null,val,v))
{return idx;
} else
{return null;
}
}),seq));if(cljs.core.truth_(match_idx))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,match_idx,seq),cljs.core.rest.call(null,cljs.core.drop.call(null,match_idx,seq))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seq], null);
}
});
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29691 = schema.core.Any;var input_schema29692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29689","map29689",672699335,null))], null);var input_checker29693 = schema.core.checker.call(null,input_schema29692);var output_checker29694 = schema.core.checker.call(null,output_schema29691);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29691,input_schema29692,input_checker29693,output_checker29694){
return (function select_next_result(G__29695){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29695], null);var temp__4126__auto___29699 = input_checker29693.call(null,args__6035__auto___29698);if(cljs.core.truth_(temp__4126__auto___29699))
{var error__6036__auto___29700 = temp__4126__auto___29699;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29700)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29700,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29698,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29692,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29689 = G__29695;while(true){
if(cljs.core.map_QMARK_.call(null,map29689))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29689)));
}
var map29690 = plumbing.fnk.schema.safe_get.call(null,map29689,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29690,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29689,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29697 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29697,(0),null);var after = cljs.core.nth.call(null,vec__29697,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29701 = output_checker29694.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29701))
{var error__6036__auto___29702 = temp__4126__auto___29701;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29702)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29702,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29691,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29691,input_schema29692,input_checker29693,output_checker29694))
,schema.core.make_fn_schema.call(null,output_schema29691,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29692], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29705 = schema.core.Any;var input_schema29706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29703","map29703",943034207,null))], null);var input_checker29707 = schema.core.checker.call(null,input_schema29706);var output_checker29708 = schema.core.checker.call(null,output_schema29705);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29705,input_schema29706,input_checker29707,output_checker29708){
return (function select_prev_result(G__29709){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29709], null);var temp__4126__auto___29713 = input_checker29707.call(null,args__6035__auto___29712);if(cljs.core.truth_(temp__4126__auto___29713))
{var error__6036__auto___29714 = temp__4126__auto___29713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29714,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29712,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29706,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29703 = G__29709;while(true){
if(cljs.core.map_QMARK_.call(null,map29703))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29703)));
}
var map29704 = plumbing.fnk.schema.safe_get.call(null,map29703,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29704,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29703,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29711 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29711,(0),null);var after = cljs.core.nth.call(null,vec__29711,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29715 = output_checker29708.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29715))
{var error__6036__auto___29716 = temp__4126__auto___29715;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29716,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29705,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29705,input_schema29706,input_checker29707,output_checker29708))
,schema.core.make_fn_schema.call(null,output_schema29705,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29706], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29720 = schema.core.Any;var input_schema29721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29717","map29717",-1672471601,null))], null);var input_checker29722 = schema.core.checker.call(null,input_schema29721);var output_checker29723 = schema.core.checker.call(null,output_schema29720);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29720,input_schema29721,input_checker29722,output_checker29723){
return (function choose_result(G__29724){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29724], null);var temp__4126__auto___29726 = input_checker29722.call(null,args__6035__auto___29725);if(cljs.core.truth_(temp__4126__auto___29726))
{var error__6036__auto___29727 = temp__4126__auto___29726;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29727,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29725,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29721,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29717 = G__29724;while(true){
if(cljs.core.map_QMARK_.call(null,map29717))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29717)));
}
var map29718 = plumbing.fnk.schema.safe_get.call(null,map29717,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29718,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29719 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29719,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29719,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29719,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29717,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;console.log(cljs.core.clj__GT_js.call(null,r));
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29728 = output_checker29723.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29728))
{var error__6036__auto___29729 = temp__4126__auto___29728;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29729,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29720,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29720,input_schema29721,input_checker29722,output_checker29723))
,schema.core.make_fn_schema.call(null,output_schema29720,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29721], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29732 = schema.core.Any;var input_schema29733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29734 = schema.core.checker.call(null,input_schema29733);var output_checker29735 = schema.core.checker.call(null,output_schema29732);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29732,input_schema29733,input_checker29734,output_checker29735){
return (function key_down(G__29736){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29736], null);var temp__4126__auto___29744 = input_checker29734.call(null,args__6035__auto___29743);if(cljs.core.truth_(temp__4126__auto___29744))
{var error__6036__auto___29745 = temp__4126__auto___29744;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29745)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29745,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29743,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29733,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29736;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29730 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29730,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29731 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29731,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29731,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29731,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__29740 = cljs.core._EQ__EQ_;var expr__29741 = e.keyCode;if(cljs.core.truth_(pred__29740.call(null,clustermap.components.search.ESCAPE_KEY,expr__29741)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__29740.call(null,clustermap.components.search.ENTER_KEY,expr__29741)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29740.call(null,clustermap.components.search.UP_ARROW,expr__29741)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29740.call(null,clustermap.components.search.DOWN_ARROW,expr__29741)))
{return clustermap.components.search.select_next_result.call(null,m);
} else
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
}
}
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29746 = output_checker29735.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29746))
{var error__6036__auto___29747 = temp__4126__auto___29746;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29747)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29747,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29732,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29732,input_schema29733,input_checker29734,output_checker29735))
,schema.core.make_fn_schema.call(null,output_schema29732,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29733], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29750 = schema.core.Any;var input_schema29751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29752 = schema.core.checker.call(null,input_schema29751);var output_checker29753 = schema.core.checker.call(null,output_schema29750);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function render_STAR_(G__29754){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29754], null);var temp__4126__auto___29772 = input_checker29752.call(null,args__6035__auto___29771);if(cljs.core.truth_(temp__4126__auto___29772))
{var error__6036__auto___29773 = temp__4126__auto___29772;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29773)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29773,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29771,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29751,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29754;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29748 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29748,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29749 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29749,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map29749,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29749,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29749,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function iter__29763(s__29764){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (){var s__29764__$1 = s__29764;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29764__$1);if(temp__4126__auto__)
{var s__29764__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29764__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29764__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29766 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29765 = (0);while(true){
if((i__29765 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__29765);cljs.core.chunk_append.call(null,b__29766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__29774 = (i__29765 + (1));
i__29765 = G__29774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29766),iter__29763.call(null,cljs.core.chunk_rest.call(null,s__29764__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29766),null);
}
} else
{var h = cljs.core.first.call(null,s__29764__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__29763.call(null,cljs.core.rest.call(null,s__29764__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function iter__29767(s__29768){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (){var s__29768__$1 = s__29768;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29768__$1);if(temp__4126__auto__)
{var s__29768__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29768__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29768__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29770 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29769 = (0);while(true){
if((i__29769 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__29769);cljs.core.chunk_append.call(null,b__29770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29769,r,c__4375__auto__,size__4376__auto__,b__29770,s__29768__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(i__29769,r,c__4375__auto__,size__4376__auto__,b__29770,s__29768__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__29775 = (i__29769 + (1));
i__29769 = G__29775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29770),iter__29767.call(null,cljs.core.chunk_rest.call(null,s__29768__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29770),null);
}
} else
{var r = cljs.core.first.call(null,s__29768__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__29768__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__29768__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__29767.call(null,cljs.core.rest.call(null,s__29768__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29749,search,map29748,validate__6034__auto__,ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29776 = output_checker29753.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29776))
{var error__6036__auto___29777 = temp__4126__auto___29776;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29777)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29777,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29750,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29750,input_schema29751,input_checker29752,output_checker29753))
,schema.core.make_fn_schema.call(null,output_schema29750,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29751], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___29796 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29782 = schema.core.Any;var input_schema29783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29784 = schema.core.checker.call(null,input_schema29783);var output_checker29785 = schema.core.checker.call(null,output_schema29782);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function constructor29779(G__29786){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29786], null);var temp__4126__auto___29798 = input_checker29784.call(null,args__6035__auto___29797);if(cljs.core.truth_(temp__4126__auto___29798))
{var error__6036__auto___29799 = temp__4126__auto___29798;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29779","constructor29779",-2107226943,null),cljs.core.pr_str.call(null,error__6036__auto___29799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29799,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29797,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29783,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29786;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29781 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29781,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t29790 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t29790 = (function (constructor29779,map29781,owner,output_schema29782,input_schema29783,input_checker29784,m,G__29786,state,search,validate__6034__auto__,ufv__,output_checker29785,meta29791){
this.constructor29779 = constructor29779;
this.map29781 = map29781;
this.owner = owner;
this.output_schema29782 = output_schema29782;
this.input_schema29783 = input_schema29783;
this.input_checker29784 = input_checker29784;
this.m = m;
this.G__29786 = G__29786;
this.state = state;
this.search = search;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.output_checker29785 = output_checker29785;
this.meta29791 = meta29791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t29790.cljs$lang$type = true;
clustermap.components.search.t29790.cljs$lang$ctorStr = "clustermap.components.search/t29790";
clustermap.components.search.t29790.cljs$lang$ctorPrWriter = ((function (owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t29790");
});})(owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
;
clustermap.components.search.t29790.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t29790.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
;
clustermap.components.search.t29790.prototype.om$core$IRender$ = true;
clustermap.components.search.t29790.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
;
clustermap.components.search.t29790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function (_29792){var self__ = this;
var _29792__$1 = this;return self__.meta29791;
});})(owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
;
clustermap.components.search.t29790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function (_29792,meta29791__$1){var self__ = this;
var _29792__$1 = this;return (new clustermap.components.search.t29790(self__.constructor29779,self__.map29781,self__.owner,self__.output_schema29782,self__.input_schema29783,self__.input_checker29784,self__.m,self__.G__29786,self__.state,self__.search,self__.validate__6034__auto__,self__.ufv__,self__.output_checker29785,meta29791__$1));
});})(owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
;
clustermap.components.search.__GT_t29790 = ((function (owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785){
return (function __GT_t29790(constructor29779__$1,map29781__$1,owner__$1,output_schema29782__$1,input_schema29783__$1,input_checker29784__$1,m__$1,G__29786__$1,state__$1,search__$1,validate__6034__auto____$1,ufv____$1,output_checker29785__$1,meta29791){return (new clustermap.components.search.t29790(constructor29779__$1,map29781__$1,owner__$1,output_schema29782__$1,input_schema29783__$1,input_checker29784__$1,m__$1,G__29786__$1,state__$1,search__$1,validate__6034__auto____$1,ufv____$1,output_checker29785__$1,meta29791));
});})(owner,state,search,map29781,validate__6034__auto__,ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
;
}
return (new clustermap.components.search.t29790(constructor29779,map29781,owner,output_schema29782,input_schema29783,input_checker29784,m,G__29786,state,search,validate__6034__auto__,ufv__,output_checker29785,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29800 = output_checker29785.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29800))
{var error__6036__auto___29801 = temp__4126__auto___29800;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29779","constructor29779",-2107226943,null),cljs.core.pr_str.call(null,error__6036__auto___29801)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29801,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29782,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29782,input_schema29783,input_checker29784,output_checker29785))
,schema.core.make_fn_schema.call(null,output_schema29782,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29783], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___29796){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner29778,p__29793){var vec__29795 = p__29793;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29795,(0),null);return component_fnk__7881__auto___29796.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29778),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29778),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29778,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner29778,var_args){
var p__29793 = null;if (arguments.length > 2) {
  p__29793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner29778,p__29793);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__29802){
var data__7882__auto__ = cljs.core.first(arglist__29802);
arglist__29802 = cljs.core.next(arglist__29802);
var owner29778 = cljs.core.first(arglist__29802);
var p__29793 = cljs.core.rest(arglist__29802);
return search_component__delegate(data__7882__auto__,owner29778,p__29793);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___29796))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m29780){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m29780);
});
__GT_search_component = function(cursor__7850__auto__,m29780){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m29780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
