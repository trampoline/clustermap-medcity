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
var c__9125__auto___28135 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28135,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28135,rx){
return (function (state_28116){var state_val_28117 = (state_28116[(1)]);if((state_val_28117 === (8)))
{var inst_28112 = (state_28116[(2)]);var inst_28113 = cljs.core.async.close_BANG_.call(null,valch);var inst_28114 = cljs.core.async.close_BANG_.call(null,rx);var state_28116__$1 = (function (){var statearr_28118 = state_28116;(statearr_28118[(7)] = inst_28112);
(statearr_28118[(8)] = inst_28113);
return statearr_28118;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28116__$1,inst_28114);
} else
{if((state_val_28117 === (7)))
{var state_28116__$1 = state_28116;var statearr_28119_28136 = state_28116__$1;(statearr_28119_28136[(2)] = null);
(statearr_28119_28136[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28117 === (6)))
{var inst_28101 = (state_28116[(9)]);var inst_28109 = cljs.core.async.put_BANG_.call(null,rx,inst_28101);var state_28116__$1 = state_28116;var statearr_28120_28137 = state_28116__$1;(statearr_28120_28137[(2)] = inst_28109);
(statearr_28120_28137[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28117 === (5)))
{var inst_28107 = (state_28116[(2)]);var state_28116__$1 = state_28116;if(cljs.core.truth_(inst_28107))
{var statearr_28121_28138 = state_28116__$1;(statearr_28121_28138[(1)] = (6));
} else
{var statearr_28122_28139 = state_28116__$1;(statearr_28122_28139[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28117 === (4)))
{var inst_28101 = (state_28116[(9)]);var state_28116__$1 = state_28116;var statearr_28123_28140 = state_28116__$1;(statearr_28123_28140[(2)] = inst_28101);
(statearr_28123_28140[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28117 === (3)))
{var inst_28103 = cljs.core.deref.call(null,in_flight_atom);var inst_28104 = cljs.core._EQ_.call(null,inst_28103,valch);var state_28116__$1 = state_28116;var statearr_28124_28141 = state_28116__$1;(statearr_28124_28141[(2)] = inst_28104);
(statearr_28124_28141[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28117 === (2)))
{var inst_28101 = (state_28116[(9)]);var inst_28101__$1 = (state_28116[(2)]);var state_28116__$1 = (function (){var statearr_28125 = state_28116;(statearr_28125[(9)] = inst_28101__$1);
return statearr_28125;
})();if(cljs.core.truth_(inst_28101__$1))
{var statearr_28126_28142 = state_28116__$1;(statearr_28126_28142[(1)] = (3));
} else
{var statearr_28127_28143 = state_28116__$1;(statearr_28127_28143[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28117 === (1)))
{var state_28116__$1 = state_28116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28116__$1,(2),valch);
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
});})(c__9125__auto___28135,rx))
;return ((function (switch__9110__auto__,c__9125__auto___28135,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28131 = [null,null,null,null,null,null,null,null,null,null];(statearr_28131[(0)] = state_machine__9111__auto__);
(statearr_28131[(1)] = (1));
return statearr_28131;
});
var state_machine__9111__auto____1 = (function (state_28116){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28116);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28132){if((e28132 instanceof Object))
{var ex__9114__auto__ = e28132;var statearr_28133_28144 = state_28116;(statearr_28133_28144[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28116);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28132;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28145 = state_28116;
state_28116 = G__28145;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28116){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28135,rx))
})();var state__9127__auto__ = (function (){var statearr_28134 = f__9126__auto__.call(null);(statearr_28134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28135);
return statearr_28134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28135,rx))
);
return rx;
});
