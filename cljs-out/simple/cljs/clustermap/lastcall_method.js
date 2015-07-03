// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.lastcall_method');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* implements last-call-wins aync api-call semantics, discarding results from
* any earlier api calls
* - in-flight-atom : an atom used to match received results to calls
* - valch : a single-value channel eventually containing one api-call result
*/
clustermap.lastcall_method.lastcall_method_impl = (function lastcall_method_impl(in_flight_atom,valch){var rx = cljs.core.async.chan.call(null);cljs.core.reset_BANG_.call(null,in_flight_atom,valch);
var c__9125__auto___28069 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28069,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28069,rx){
return (function (state_28050){var state_val_28051 = (state_28050[(1)]);if((state_val_28051 === (8)))
{var inst_28046 = (state_28050[(2)]);var inst_28047 = cljs.core.async.close_BANG_.call(null,valch);var inst_28048 = cljs.core.async.close_BANG_.call(null,rx);var state_28050__$1 = (function (){var statearr_28052 = state_28050;(statearr_28052[(7)] = inst_28047);
(statearr_28052[(8)] = inst_28046);
return statearr_28052;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28050__$1,inst_28048);
} else
{if((state_val_28051 === (7)))
{var state_28050__$1 = state_28050;var statearr_28053_28070 = state_28050__$1;(statearr_28053_28070[(2)] = null);
(statearr_28053_28070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28051 === (6)))
{var inst_28035 = (state_28050[(9)]);var inst_28043 = cljs.core.async.put_BANG_.call(null,rx,inst_28035);var state_28050__$1 = state_28050;var statearr_28054_28071 = state_28050__$1;(statearr_28054_28071[(2)] = inst_28043);
(statearr_28054_28071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28051 === (5)))
{var inst_28041 = (state_28050[(2)]);var state_28050__$1 = state_28050;if(cljs.core.truth_(inst_28041))
{var statearr_28055_28072 = state_28050__$1;(statearr_28055_28072[(1)] = (6));
} else
{var statearr_28056_28073 = state_28050__$1;(statearr_28056_28073[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28051 === (4)))
{var inst_28035 = (state_28050[(9)]);var state_28050__$1 = state_28050;var statearr_28057_28074 = state_28050__$1;(statearr_28057_28074[(2)] = inst_28035);
(statearr_28057_28074[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28051 === (3)))
{var inst_28037 = cljs.core.deref.call(null,in_flight_atom);var inst_28038 = cljs.core._EQ_.call(null,inst_28037,valch);var state_28050__$1 = state_28050;var statearr_28058_28075 = state_28050__$1;(statearr_28058_28075[(2)] = inst_28038);
(statearr_28058_28075[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28051 === (2)))
{var inst_28035 = (state_28050[(9)]);var inst_28035__$1 = (state_28050[(2)]);var state_28050__$1 = (function (){var statearr_28059 = state_28050;(statearr_28059[(9)] = inst_28035__$1);
return statearr_28059;
})();if(cljs.core.truth_(inst_28035__$1))
{var statearr_28060_28076 = state_28050__$1;(statearr_28060_28076[(1)] = (3));
} else
{var statearr_28061_28077 = state_28050__$1;(statearr_28061_28077[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28051 === (1)))
{var state_28050__$1 = state_28050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28050__$1,(2),valch);
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
});})(c__9125__auto___28069,rx))
;return ((function (switch__9110__auto__,c__9125__auto___28069,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28065 = [null,null,null,null,null,null,null,null,null,null];(statearr_28065[(0)] = state_machine__9111__auto__);
(statearr_28065[(1)] = (1));
return statearr_28065;
});
var state_machine__9111__auto____1 = (function (state_28050){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28050);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28066){if((e28066 instanceof Object))
{var ex__9114__auto__ = e28066;var statearr_28067_28078 = state_28050;(statearr_28067_28078[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28066;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28079 = state_28050;
state_28050 = G__28079;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28050){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28069,rx))
})();var state__9127__auto__ = (function (){var statearr_28068 = f__9126__auto__.call(null);(statearr_28068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28069);
return statearr_28068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28069,rx))
);
return rx;
});
