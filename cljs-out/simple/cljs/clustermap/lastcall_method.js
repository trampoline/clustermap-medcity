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
var c__9125__auto___28126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28126,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28126,rx){
return (function (state_28107){var state_val_28108 = (state_28107[(1)]);if((state_val_28108 === (8)))
{var inst_28103 = (state_28107[(2)]);var inst_28104 = cljs.core.async.close_BANG_.call(null,valch);var inst_28105 = cljs.core.async.close_BANG_.call(null,rx);var state_28107__$1 = (function (){var statearr_28109 = state_28107;(statearr_28109[(7)] = inst_28104);
(statearr_28109[(8)] = inst_28103);
return statearr_28109;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28107__$1,inst_28105);
} else
{if((state_val_28108 === (7)))
{var state_28107__$1 = state_28107;var statearr_28110_28127 = state_28107__$1;(statearr_28110_28127[(2)] = null);
(statearr_28110_28127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28108 === (6)))
{var inst_28092 = (state_28107[(9)]);var inst_28100 = cljs.core.async.put_BANG_.call(null,rx,inst_28092);var state_28107__$1 = state_28107;var statearr_28111_28128 = state_28107__$1;(statearr_28111_28128[(2)] = inst_28100);
(statearr_28111_28128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28108 === (5)))
{var inst_28098 = (state_28107[(2)]);var state_28107__$1 = state_28107;if(cljs.core.truth_(inst_28098))
{var statearr_28112_28129 = state_28107__$1;(statearr_28112_28129[(1)] = (6));
} else
{var statearr_28113_28130 = state_28107__$1;(statearr_28113_28130[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28108 === (4)))
{var inst_28092 = (state_28107[(9)]);var state_28107__$1 = state_28107;var statearr_28114_28131 = state_28107__$1;(statearr_28114_28131[(2)] = inst_28092);
(statearr_28114_28131[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28108 === (3)))
{var inst_28094 = cljs.core.deref.call(null,in_flight_atom);var inst_28095 = cljs.core._EQ_.call(null,inst_28094,valch);var state_28107__$1 = state_28107;var statearr_28115_28132 = state_28107__$1;(statearr_28115_28132[(2)] = inst_28095);
(statearr_28115_28132[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28108 === (2)))
{var inst_28092 = (state_28107[(9)]);var inst_28092__$1 = (state_28107[(2)]);var state_28107__$1 = (function (){var statearr_28116 = state_28107;(statearr_28116[(9)] = inst_28092__$1);
return statearr_28116;
})();if(cljs.core.truth_(inst_28092__$1))
{var statearr_28117_28133 = state_28107__$1;(statearr_28117_28133[(1)] = (3));
} else
{var statearr_28118_28134 = state_28107__$1;(statearr_28118_28134[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28108 === (1)))
{var state_28107__$1 = state_28107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28107__$1,(2),valch);
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
});})(c__9125__auto___28126,rx))
;return ((function (switch__9110__auto__,c__9125__auto___28126,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28122 = [null,null,null,null,null,null,null,null,null,null];(statearr_28122[(0)] = state_machine__9111__auto__);
(statearr_28122[(1)] = (1));
return statearr_28122;
});
var state_machine__9111__auto____1 = (function (state_28107){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28107);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28123){if((e28123 instanceof Object))
{var ex__9114__auto__ = e28123;var statearr_28124_28135 = state_28107;(statearr_28124_28135[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28123;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28136 = state_28107;
state_28107 = G__28136;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28107){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28126,rx))
})();var state__9127__auto__ = (function (){var statearr_28125 = f__9126__auto__.call(null);(statearr_28125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28126);
return statearr_28125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28126,rx))
);
return rx;
});
