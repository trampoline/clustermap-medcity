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
return (function (state_29704){var state_val_29705 = (state_29704[(1)]);if((state_val_29705 === (5)))
{var inst_29699 = (state_29704[(2)]);var state_29704__$1 = state_29704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29704__$1,(2),inst_29699);
} else
{if((state_val_29705 === (4)))
{var inst_29697 = search_fn.call(null);var state_29704__$1 = state_29704;var statearr_29706_29717 = state_29704__$1;(statearr_29706_29717[(2)] = inst_29697);
(statearr_29706_29717[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29705 === (3)))
{var inst_29695 = search_fn.call(null,query);var state_29704__$1 = state_29704;var statearr_29707_29718 = state_29704__$1;(statearr_29707_29718[(2)] = inst_29695);
(statearr_29707_29718[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29705 === (2)))
{var inst_29701 = (state_29704[(2)]);var inst_29702 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_29701);var state_29704__$1 = state_29704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29704__$1,inst_29702);
} else
{if((state_val_29705 === (1)))
{var inst_29692 = cljs.core.count.call(null,query);var inst_29693 = (inst_29692 > (1));var state_29704__$1 = state_29704;if(cljs.core.truth_(inst_29693))
{var statearr_29708_29719 = state_29704__$1;(statearr_29708_29719[(1)] = (3));
} else
{var statearr_29709_29720 = state_29704__$1;(statearr_29709_29720[(1)] = (4));
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
var state_machine__9111__auto____0 = (function (){var statearr_29713 = [null,null,null,null,null,null,null];(statearr_29713[(0)] = state_machine__9111__auto__);
(statearr_29713[(1)] = (1));
return statearr_29713;
});
var state_machine__9111__auto____1 = (function (state_29704){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29704);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29714){if((e29714 instanceof Object))
{var ex__9114__auto__ = e29714;var statearr_29715_29721 = state_29704;(statearr_29715_29721[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29714;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29722 = state_29704;
state_29704 = G__29722;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_29716 = f__9126__auto__.call(null);(statearr_29716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29716;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29725 = schema.core.Any;var input_schema29726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29723","map29723",-227966797,null))], null);var input_checker29727 = schema.core.checker.call(null,input_schema29726);var output_checker29728 = schema.core.checker.call(null,output_schema29725);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29725,input_schema29726,input_checker29727,output_checker29728){
return (function select_next_result(G__29729){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29729], null);var temp__4126__auto___29733 = input_checker29727.call(null,args__6035__auto___29732);if(cljs.core.truth_(temp__4126__auto___29733))
{var error__6036__auto___29734 = temp__4126__auto___29733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29734,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29732,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29726,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29723 = G__29729;while(true){
if(cljs.core.map_QMARK_.call(null,map29723))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29723)));
}
var map29724 = plumbing.fnk.schema.safe_get.call(null,map29723,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29724,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29723,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29731 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29731,(0),null);var after = cljs.core.nth.call(null,vec__29731,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29735 = output_checker29728.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29735))
{var error__6036__auto___29736 = temp__4126__auto___29735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29736,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29725,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29725,input_schema29726,input_checker29727,output_checker29728))
,schema.core.make_fn_schema.call(null,output_schema29725,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29726], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29739 = schema.core.Any;var input_schema29740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29737","map29737",-344575862,null))], null);var input_checker29741 = schema.core.checker.call(null,input_schema29740);var output_checker29742 = schema.core.checker.call(null,output_schema29739);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29739,input_schema29740,input_checker29741,output_checker29742){
return (function select_prev_result(G__29743){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29743], null);var temp__4126__auto___29747 = input_checker29741.call(null,args__6035__auto___29746);if(cljs.core.truth_(temp__4126__auto___29747))
{var error__6036__auto___29748 = temp__4126__auto___29747;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29748)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29748,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29746,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29740,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29737 = G__29743;while(true){
if(cljs.core.map_QMARK_.call(null,map29737))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29737)));
}
var map29738 = plumbing.fnk.schema.safe_get.call(null,map29737,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29738,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29737,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29745 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29745,(0),null);var after = cljs.core.nth.call(null,vec__29745,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29749 = output_checker29742.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29749))
{var error__6036__auto___29750 = temp__4126__auto___29749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29750,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29739,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29739,input_schema29740,input_checker29741,output_checker29742))
,schema.core.make_fn_schema.call(null,output_schema29739,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29740], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29754 = schema.core.Any;var input_schema29755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29751","map29751",8555071,null))], null);var input_checker29756 = schema.core.checker.call(null,input_schema29755);var output_checker29757 = schema.core.checker.call(null,output_schema29754);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29754,input_schema29755,input_checker29756,output_checker29757){
return (function choose_result(G__29758){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29758], null);var temp__4126__auto___29760 = input_checker29756.call(null,args__6035__auto___29759);if(cljs.core.truth_(temp__4126__auto___29760))
{var error__6036__auto___29761 = temp__4126__auto___29760;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29761)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29761,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29759,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29755,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29751 = G__29758;while(true){
if(cljs.core.map_QMARK_.call(null,map29751))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29751)));
}
var map29752 = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29752,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29753 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
{var temp__4126__auto___29762 = output_checker29757.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29762))
{var error__6036__auto___29763 = temp__4126__auto___29762;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29763,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29754,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29754,input_schema29755,input_checker29756,output_checker29757))
,schema.core.make_fn_schema.call(null,output_schema29754,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29755], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29766 = schema.core.Any;var input_schema29767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29768 = schema.core.checker.call(null,input_schema29767);var output_checker29769 = schema.core.checker.call(null,output_schema29766);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29766,input_schema29767,input_checker29768,output_checker29769){
return (function key_down(G__29770){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29770], null);var temp__4126__auto___29778 = input_checker29768.call(null,args__6035__auto___29777);if(cljs.core.truth_(temp__4126__auto___29778))
{var error__6036__auto___29779 = temp__4126__auto___29778;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29779)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29779,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29777,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29767,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29770;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29764 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29764,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29765 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29765,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29765,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29765,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__29774 = cljs.core._EQ__EQ_;var expr__29775 = e.keyCode;if(cljs.core.truth_(pred__29774.call(null,clustermap.components.search.ESCAPE_KEY,expr__29775)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__29774.call(null,clustermap.components.search.ENTER_KEY,expr__29775)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29774.call(null,clustermap.components.search.UP_ARROW,expr__29775)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29774.call(null,clustermap.components.search.DOWN_ARROW,expr__29775)))
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
{var temp__4126__auto___29780 = output_checker29769.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29780))
{var error__6036__auto___29781 = temp__4126__auto___29780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29781,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29766,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29766,input_schema29767,input_checker29768,output_checker29769))
,schema.core.make_fn_schema.call(null,output_schema29766,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29767], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29784 = schema.core.Any;var input_schema29785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29786 = schema.core.checker.call(null,input_schema29785);var output_checker29787 = schema.core.checker.call(null,output_schema29784);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function render_STAR_(G__29788){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29788], null);var temp__4126__auto___29806 = input_checker29786.call(null,args__6035__auto___29805);if(cljs.core.truth_(temp__4126__auto___29806))
{var error__6036__auto___29807 = temp__4126__auto___29806;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29807)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29807,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29805,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29785,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29788;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29782 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29782,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29783 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29783,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map29783,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29783,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29783,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function iter__29797(s__29798){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (){var s__29798__$1 = s__29798;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29798__$1);if(temp__4126__auto__)
{var s__29798__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29798__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29798__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29800 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29799 = (0);while(true){
if((i__29799 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__29799);cljs.core.chunk_append.call(null,b__29800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__29808 = (i__29799 + (1));
i__29799 = G__29808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29800),iter__29797.call(null,cljs.core.chunk_rest.call(null,s__29798__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29800),null);
}
} else
{var h = cljs.core.first.call(null,s__29798__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__29797.call(null,cljs.core.rest.call(null,s__29798__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function iter__29801(s__29802){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (){var s__29802__$1 = s__29802;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29802__$1);if(temp__4126__auto__)
{var s__29802__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29802__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29802__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29804 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29803 = (0);while(true){
if((i__29803 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__29803);cljs.core.chunk_append.call(null,b__29804,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29803,r,c__4375__auto__,size__4376__auto__,b__29804,s__29802__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(i__29803,r,c__4375__auto__,size__4376__auto__,b__29804,s__29802__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__29809 = (i__29803 + (1));
i__29803 = G__29809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29804),iter__29801.call(null,cljs.core.chunk_rest.call(null,s__29802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29804),null);
}
} else
{var r = cljs.core.first.call(null,s__29802__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__29802__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__29802__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__29801.call(null,cljs.core.rest.call(null,s__29802__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29783,search,map29782,validate__6034__auto__,ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29810 = output_checker29787.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29810))
{var error__6036__auto___29811 = temp__4126__auto___29810;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29811,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29784,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29784,input_schema29785,input_checker29786,output_checker29787))
,schema.core.make_fn_schema.call(null,output_schema29784,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29785], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___29830 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29816 = schema.core.Any;var input_schema29817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29818 = schema.core.checker.call(null,input_schema29817);var output_checker29819 = schema.core.checker.call(null,output_schema29816);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function constructor29813(G__29820){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29820], null);var temp__4126__auto___29832 = input_checker29818.call(null,args__6035__auto___29831);if(cljs.core.truth_(temp__4126__auto___29832))
{var error__6036__auto___29833 = temp__4126__auto___29832;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29813","constructor29813",-1380812130,null),cljs.core.pr_str.call(null,error__6036__auto___29833)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29833,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29831,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29817,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29820;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29815 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29815,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t29824 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t29824 = (function (output_schema29816,map29815,owner,m,state,input_schema29817,search,output_checker29819,validate__6034__auto__,G__29820,ufv__,input_checker29818,constructor29813,meta29825){
this.output_schema29816 = output_schema29816;
this.map29815 = map29815;
this.owner = owner;
this.m = m;
this.state = state;
this.input_schema29817 = input_schema29817;
this.search = search;
this.output_checker29819 = output_checker29819;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__29820 = G__29820;
this.ufv__ = ufv__;
this.input_checker29818 = input_checker29818;
this.constructor29813 = constructor29813;
this.meta29825 = meta29825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t29824.cljs$lang$type = true;
clustermap.components.search.t29824.cljs$lang$ctorStr = "clustermap.components.search/t29824";
clustermap.components.search.t29824.cljs$lang$ctorPrWriter = ((function (owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t29824");
});})(owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;
clustermap.components.search.t29824.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t29824.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;
clustermap.components.search.t29824.prototype.om$core$IRender$ = true;
clustermap.components.search.t29824.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;
clustermap.components.search.t29824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function (_29826){var self__ = this;
var _29826__$1 = this;return self__.meta29825;
});})(owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;
clustermap.components.search.t29824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function (_29826,meta29825__$1){var self__ = this;
var _29826__$1 = this;return (new clustermap.components.search.t29824(self__.output_schema29816,self__.map29815,self__.owner,self__.m,self__.state,self__.input_schema29817,self__.search,self__.output_checker29819,self__.validate__6034__auto__,self__.G__29820,self__.ufv__,self__.input_checker29818,self__.constructor29813,meta29825__$1));
});})(owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;
clustermap.components.search.__GT_t29824 = ((function (owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function __GT_t29824(output_schema29816__$1,map29815__$1,owner__$1,m__$1,state__$1,input_schema29817__$1,search__$1,output_checker29819__$1,validate__6034__auto____$1,G__29820__$1,ufv____$1,input_checker29818__$1,constructor29813__$1,meta29825){return (new clustermap.components.search.t29824(output_schema29816__$1,map29815__$1,owner__$1,m__$1,state__$1,input_schema29817__$1,search__$1,output_checker29819__$1,validate__6034__auto____$1,G__29820__$1,ufv____$1,input_checker29818__$1,constructor29813__$1,meta29825));
});})(owner,state,search,map29815,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;
}
return (new clustermap.components.search.t29824(output_schema29816,map29815,owner,m,state,input_schema29817,search,output_checker29819,validate__6034__auto__,G__29820,ufv__,input_checker29818,constructor29813,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29834 = output_checker29819.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29834))
{var error__6036__auto___29835 = temp__4126__auto___29834;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29813","constructor29813",-1380812130,null),cljs.core.pr_str.call(null,error__6036__auto___29835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29835,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29816,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
,schema.core.make_fn_schema.call(null,output_schema29816,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29817], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___29830){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner29812,p__29827){var vec__29829 = p__29827;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29829,(0),null);return component_fnk__7881__auto___29830.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29812),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29812),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29812,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner29812,var_args){
var p__29827 = null;if (arguments.length > 2) {
  p__29827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner29812,p__29827);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__29836){
var data__7882__auto__ = cljs.core.first(arglist__29836);
arglist__29836 = cljs.core.next(arglist__29836);
var owner29812 = cljs.core.first(arglist__29836);
var p__29827 = cljs.core.rest(arglist__29836);
return search_component__delegate(data__7882__auto__,owner29812,p__29827);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___29830))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m29814){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m29814);
});
__GT_search_component = function(cursor__7850__auto__,m29814){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m29814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
