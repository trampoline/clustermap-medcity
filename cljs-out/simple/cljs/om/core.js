// Compiled by ClojureScript 0.0-2356
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj26863 = {};return obj26863;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.display_name[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.display_name["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj26865 = {};return obj26865;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.init_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.init_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj26867 = {};return obj26867;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.should_update[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.should_update["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj26869 = {};return obj26869;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.will_mount[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.will_mount["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj26871 = {};return obj26871;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.did_mount[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.did_mount["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj26873 = {};return obj26873;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.will_unmount[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.will_unmount["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj26875 = {};return obj26875;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.will_update[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.will_update["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj26877 = {};return obj26877;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.did_update[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.did_update["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj26879 = {};return obj26879;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.will_receive_props[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.will_receive_props["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj26881 = {};return obj26881;
})();
om.core.render = (function render(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.render[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.render["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj26883 = {};return obj26883;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.render_props[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.render_props["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj26885 = {};return obj26885;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core.render_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core.render_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj26887 = {};return obj26887;
})();
om.core.IOmSwap = (function (){var obj26889 = {};return obj26889;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj26891 = {};return obj26891;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj26893 = {};return obj26893;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_render_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_render_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_render_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_render_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj26895 = {};return obj26895;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj26897 = {};return obj26897;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_queue[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_queue["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj26899 = {};return obj26899;
})();
om.core._value = (function _value(x){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3627__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (om.core._value[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._value["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj26901 = {};return obj26901;
})();
om.core._path = (function _path(cursor){if((function (){var and__3627__auto__ = cursor;if(and__3627__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3627__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4275__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3639__auto__ = (om.core._path[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._path["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3627__auto__ = cursor;if(and__3627__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4275__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3639__auto__ = (om.core._state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj26903 = {};return obj26903;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3627__auto__ = value;if(and__3627__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3627__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4275__auto__ = (((value == null))?null:value);return (function (){var or__3639__auto__ = (om.core._to_cursor[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._to_cursor["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3627__auto__ = value;if(and__3627__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3627__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4275__auto__ = (((value == null))?null:value);return (function (){var or__3639__auto__ = (om.core._to_cursor[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._to_cursor["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj26905 = {};return obj26905;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3627__auto__ = cursor;if(and__3627__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3627__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4275__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3639__auto__ = (om.core._derive[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._derive["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj26907 = {};return obj26907;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3627__auto__ = cursor;if(and__3627__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4275__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3639__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj26909 = {};return obj26909;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3627__auto__ = x;if(and__3627__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4275__auto__ = (((x == null))?null:x);return (function (){var or__3639__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj26911 = {};return obj26911;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_property[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_property["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj26913 = {};return obj26913;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3627__auto__ = cursor;if(and__3627__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3627__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4275__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3639__auto__ = (om.core._root_key[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._root_key["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj26915 = {};return obj26915;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._adapt[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._adapt["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt.call(null,x,other);
});
om.core.IOmRef = (function (){var obj26917 = {};return obj26917;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (om.core._get_deps[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (om.core._get_deps["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__26919 = state;if(G__26919)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26919.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__26919.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__26919);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__26919);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__26921 = x;if(G__26921)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26921.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__26921.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__26921);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__26921);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = c.call(null,node);
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__26923 = state;(G__26923["__om_prev_state"] = (state["__om_state"]));
(G__26923["__om_state"] = pending_state);
(G__26923["__om_pending_state"] = null);
return G__26923;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3639__auto__ = props;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3639__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value.call(null,ref);var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count.call(null,refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){var ref_val = om.core.value.call(null,ref);var ref_state = om.core.state.call(null,ref);var ref_path = om.core.path.call(null,ref);var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))
{if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__26925 = c;if(G__26925)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26925.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__26925.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__26925);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__26925);
}
})())
{var state_26946 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3639__auto__ = (state_26946["__om_prev_state"]);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (state_26946["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__26926 = c;if(G__26926)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26926.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__26926.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__26926);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__26926);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__26927 = cljs.core.seq.call(null,refs);var chunk__26928 = null;var count__26929 = (0);var i__26930 = (0);while(true){
if((i__26930 < count__26929))
{var ref = cljs.core._nth.call(null,chunk__26928,i__26930);om.core.unobserve.call(null,this$,ref);
{
var G__26947 = seq__26927;
var G__26948 = chunk__26928;
var G__26949 = count__26929;
var G__26950 = (i__26930 + (1));
seq__26927 = G__26947;
chunk__26928 = G__26948;
count__26929 = G__26949;
i__26930 = G__26950;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__26927);if(temp__4126__auto____$1)
{var seq__26927__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26927__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__26927__$1);{
var G__26951 = cljs.core.chunk_rest.call(null,seq__26927__$1);
var G__26952 = c__4408__auto__;
var G__26953 = cljs.core.count.call(null,c__4408__auto__);
var G__26954 = (0);
seq__26927 = G__26951;
chunk__26928 = G__26952;
count__26929 = G__26953;
i__26930 = G__26954;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__26927__$1);om.core.unobserve.call(null,this$,ref);
{
var G__26955 = cljs.core.next.call(null,seq__26927__$1);
var G__26956 = null;
var G__26957 = (0);
var G__26958 = (0);
seq__26927 = G__26955;
chunk__26928 = G__26956;
count__26929 = G__26957;
i__26930 = G__26958;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__26931 = c;if(G__26931)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26931.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__26931.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__26931);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__26931);
}
})())
{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__26932 = c;if(G__26932)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26932.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__26932.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__26932);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__26932);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3627__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));if(and__3627__auto__)
{return cljs.core.some.call(null,((function (and__3627__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__26924_SHARP_){return om.core.ref_changed_QMARK_.call(null,p1__26924_SHARP_);
});})(and__3627__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else
{return and__3627__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_parent_STAR_26933 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_26934 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_26935 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_26936 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_26937 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__26938 = c;if(G__26938)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26938.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__26938.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__26938);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__26938);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__26939 = c;if(G__26939)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26939.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__26939.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__26939);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__26939);
}
})())
{return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else
{if((function (){var G__26940 = c;if(G__26940)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26940.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__26940.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__26940);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__26940);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_26937;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_26936;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_26935;
om.core._STAR_state_STAR_ = _STAR_state_STAR_26934;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_26933;
}}),(function (next_props,next_state){var this$ = this;var c_26959 = om.core.children.call(null,this$);if((function (){var G__26941 = c_26959;if(G__26941)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26941.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__26941.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__26941);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__26941);
}
})())
{var state_26960 = this$.state;om.core.will_update.call(null,c_26959,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3639__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__26942 = c;if(G__26942)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26942.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__26942.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__26942);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__26942);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3639__auto__ = id;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__26943 = c;if(G__26943)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26943.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__26943.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__26943);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__26943);
}
})())
{return om.core.did_mount.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__26944 = c;if(G__26944)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26944.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__26944.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__26944);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__26944);
}
})())
{return om.core.display_name.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_26961 = om.core.children.call(null,this$);if((function (){var G__26945 = c_26961;if(G__26945)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26945.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__26945.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__26945);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__26945);
}
})())
{om.core.will_mount.call(null,c_26961);
} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x26963 = obj;x26963.om$core$IGetState$ = true;
x26963.om$core$IGetState$_get_state$arity$1 = ((function (x26963){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3639__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (state["__om_state"]);
}
});})(x26963))
;
x26963.om$core$IGetState$_get_state$arity$2 = ((function (x26963){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x26963))
;
x26963.om$core$IGetRenderState$ = true;
x26963.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x26963){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x26963))
;
x26963.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x26963){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x26963))
;
x26963.om$core$ISetState$ = true;
x26963.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x26963){
return (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3627__auto__ = !((app_state == null));if(and__3627__auto__)
{return render;
} else
{return and__3627__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x26963))
;
x26963.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x26963){
return (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if(cljs.core.truth_((function (){var and__3627__auto__ = !((app_state == null));if(and__3627__auto__)
{return render;
} else
{return and__3627__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x26963))
;
return x26963;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3639__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3639__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__26964 = c;if(G__26964)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26964.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__26964.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__26964);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__26964);
}
})())?om.core.init_state.call(null,c):null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_26973 = om.core.children.call(null,this$);if((function (){var G__26965 = c_26973;if(G__26965)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26965.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__26965.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__26965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__26965);
}
})())
{om.core.will_mount.call(null,c_26973);
} else
{}
return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){var this$ = this;var c = om.core.children.call(null,this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__26966 = c;if(G__26966)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26966.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__26966.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__26966);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__26966);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,spath,cljs.core.dissoc);
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__26967 = cljs.core.seq.call(null,refs);var chunk__26968 = null;var count__26969 = (0);var i__26970 = (0);while(true){
if((i__26970 < count__26969))
{var ref = cljs.core._nth.call(null,chunk__26968,i__26970);om.core.unobserve.call(null,this$,ref);
{
var G__26974 = seq__26967;
var G__26975 = chunk__26968;
var G__26976 = count__26969;
var G__26977 = (i__26970 + (1));
seq__26967 = G__26974;
chunk__26968 = G__26975;
count__26969 = G__26976;
i__26970 = G__26977;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__26967);if(temp__4126__auto____$1)
{var seq__26967__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26967__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__26967__$1);{
var G__26978 = cljs.core.chunk_rest.call(null,seq__26967__$1);
var G__26979 = c__4408__auto__;
var G__26980 = cljs.core.count.call(null,c__4408__auto__);
var G__26981 = (0);
seq__26967 = G__26978;
chunk__26968 = G__26979;
count__26969 = G__26980;
i__26970 = G__26981;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__26967__$1);om.core.unobserve.call(null,this$,ref);
{
var G__26982 = cljs.core.next.call(null,seq__26967__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26967 = G__26982;
chunk__26968 = G__26983;
count__26969 = G__26984;
i__26970 = G__26985;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){var this$ = this;var props_26986 = this$.props;var c_26987 = om.core.children.call(null,this$);if((function (){var G__26971 = c_26987;if(G__26971)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26971.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__26971.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__26971);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__26971);
}
})())
{var state_26988 = this$.state;om.core.will_update.call(null,c_26987,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.no_local_merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = om.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__26972 = c;if(G__26972)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26972.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__26972.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__26972);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__26972);
}
})())
{var state_26989 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else
{return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x26991 = cljs.core.clj__GT_js.call(null,methods$);x26991.om$core$IGetState$ = true;
x26991.om$core$IGetState$_get_state$arity$1 = ((function (x26991){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);var or__3639__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x26991))
;
x26991.om$core$IGetState$_get_state$arity$2 = ((function (x26991){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x26991))
;
x26991.om$core$IGetRenderState$ = true;
x26991.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x26991){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x26991))
;
x26991.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x26991){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x26991))
;
x26991.om$core$ISetState$ = true;
x26991.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x26991){
return (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate.call(null,this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3627__auto__ = !((gstate == null));if(and__3627__auto__)
{return render;
} else
{return and__3627__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else
{return null;
}
});})(x26991))
;
x26991.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x26991){
return (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x26991))
;
return x26991;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__26993 = x;if(G__26993)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__26993.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__26993.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__26993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__26993);
}
})())
{return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__26995){var vec__26996 = p__26995;var k = cljs.core.nth.call(null,vec__26996,(0),null);var v = cljs.core.nth.call(null,vec__26996,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__26997 = null;
var G__26997__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__26997__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__26997 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26997__2.call(this,self__,k);
case 3:
return G__26997__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26997.cljs$core$IFn$_invoke$arity$2 = G__26997__2;
G__26997.cljs$core$IFn$_invoke$arity$3 = G__26997__3;
return G__26997;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args26994){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26994)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.call = (function() {
var G__26999 = null;
var G__26999__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__26999__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__26999 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26999__2.call(this,self__,k);
case 3:
return G__26999__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26999.cljs$core$IFn$_invoke$arity$2 = G__26999__2;
G__26999.cljs$core$IFn$_invoke$arity$3 = G__26999__3;
return G__26999;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args26998){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26998)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x27001 = cljs.core.clone.call(null,val);x27001.cljs$core$IEquiv$ = true;
x27001.cljs$core$IEquiv$_equiv$arity$2 = ((function (x27001){
return (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
});})(x27001))
;
x27001.om$core$ITransact$ = true;
x27001.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27001){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x27001))
;
x27001.om$core$ICursor$ = true;
x27001.om$core$ICursor$_path$arity$1 = ((function (x27001){
return (function (_){var ___$1 = this;return path;
});})(x27001))
;
x27001.om$core$ICursor$_state$arity$1 = ((function (x27001){
return (function (_){var ___$1 = this;return state;
});})(x27001))
;
x27001.cljs$core$IDeref$ = true;
x27001.cljs$core$IDeref$_deref$arity$1 = ((function (x27001){
return (function (this$){var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x27001))
;
return x27001;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__27004 = val;if(G__27004)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27004.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__27004.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__27004);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__27004);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__27005 = val;if(G__27005)
{var bit__4302__auto__ = (G__27005.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4302__auto__) || (G__27005.cljs$core$ICloneable$))
{return true;
} else
{if((!G__27005.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__27005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__27005);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x27007 = cljs.core.clone.call(null,x);x27007.om$core$ITransact$ = true;
x27007.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27007){
return (function (cursor,korks,f,tag){var cursor__$1 = this;om.core.commit_BANG_.call(null,cursor__$1,korks,f);
return om.core._refresh_deps_BANG_.call(null,parent);
});})(x27007))
;
x27007.om$core$ICursorDerive$ = true;
x27007.om$core$ICursorDerive$_derive$arity$4 = ((function (x27007){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x27007))
;
x27007.om$core$IAdapt$ = true;
x27007.om$core$IAdapt$_adapt$arity$2 = ((function (x27007){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x27007))
;
x27007.cljs$core$ICloneable$ = true;
x27007.cljs$core$ICloneable$_clone$arity$1 = ((function (x27007){
return (function (this$){var this$__$1 = this;return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x27007))
;
return x27007;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if((function (){var G__27014 = cursor;if(G__27014)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27014.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__27014.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__27014);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__27014);
}
})())
{return cursor;
} else
{var path = om.core.path.call(null,cursor);var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);var x27015 = cljs.core.clone.call(null,cursor);x27015.om$core$ITransact$ = true;
x27015.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x27015,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;om.core.commit_BANG_.call(null,cursor__$2,korks,f);
return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x27015,path,storage))
;
x27015.om$core$IOmRef$ = true;
x27015.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x27015,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x27015,path,storage))
;
x27015.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x27015,path,storage){
return (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));if((cljs.core.count.call(null,m) === (0)))
{return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});})(x27015,path,storage))
;
x27015.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x27015,path,storage){
return (function (_){var ___$1 = this;var seq__27016 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));var chunk__27017 = null;var count__27018 = (0);var i__27019 = (0);while(true){
if((i__27019 < count__27018))
{var c = cljs.core._nth.call(null,chunk__27017,i__27019);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__27020 = seq__27016;
var G__27021 = chunk__27017;
var G__27022 = count__27018;
var G__27023 = (i__27019 + (1));
seq__27016 = G__27020;
chunk__27017 = G__27021;
count__27018 = G__27022;
i__27019 = G__27023;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27016);if(temp__4126__auto__)
{var seq__27016__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27016__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__27016__$1);{
var G__27024 = cljs.core.chunk_rest.call(null,seq__27016__$1);
var G__27025 = c__4408__auto__;
var G__27026 = cljs.core.count.call(null,c__4408__auto__);
var G__27027 = (0);
seq__27016 = G__27024;
chunk__27017 = G__27025;
count__27018 = G__27026;
i__27019 = G__27027;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__27016__$1);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__27028 = cljs.core.next.call(null,seq__27016__$1);
var G__27029 = null;
var G__27030 = (0);
var G__27031 = (0);
seq__27016 = G__27028;
chunk__27017 = G__27029;
count__27018 = G__27030;
i__27019 = G__27031;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x27015,path,storage))
;
x27015.om$core$IOmRef$_get_deps$arity$1 = ((function (x27015,path,storage){
return (function (_){var ___$1 = this;return cljs.core.deref.call(null,storage);
});})(x27015,path,storage))
;
x27015.om$core$ICursorDerive$ = true;
x27015.om$core$ICursorDerive$_derive$arity$4 = ((function (x27015,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x27015,path,storage))
;
return x27015;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3639__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_.call(null,c,ref);
om.core._add_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_.call(null,c,ref);
om.core._remove_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){var or__3639__auto__ = state.om$render$T;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
});
om.core.render_all = (function render_all(state){om.core.refresh_queued = false;
var seq__27036_27040 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__27037_27041 = null;var count__27038_27042 = (0);var i__27039_27043 = (0);while(true){
if((i__27039_27043 < count__27038_27042))
{var f_27044 = cljs.core._nth.call(null,chunk__27037_27041,i__27039_27043);f_27044.call(null);
{
var G__27045 = seq__27036_27040;
var G__27046 = chunk__27037_27041;
var G__27047 = count__27038_27042;
var G__27048 = (i__27039_27043 + (1));
seq__27036_27040 = G__27045;
chunk__27037_27041 = G__27046;
count__27038_27042 = G__27047;
i__27039_27043 = G__27048;
continue;
}
} else
{var temp__4126__auto___27049 = cljs.core.seq.call(null,seq__27036_27040);if(temp__4126__auto___27049)
{var seq__27036_27050__$1 = temp__4126__auto___27049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27036_27050__$1))
{var c__4408__auto___27051 = cljs.core.chunk_first.call(null,seq__27036_27050__$1);{
var G__27052 = cljs.core.chunk_rest.call(null,seq__27036_27050__$1);
var G__27053 = c__4408__auto___27051;
var G__27054 = cljs.core.count.call(null,c__4408__auto___27051);
var G__27055 = (0);
seq__27036_27040 = G__27052;
chunk__27037_27041 = G__27053;
count__27038_27042 = G__27054;
i__27039_27043 = G__27055;
continue;
}
} else
{var f_27056 = cljs.core.first.call(null,seq__27036_27050__$1);f_27056.call(null);
{
var G__27057 = cljs.core.next.call(null,seq__27036_27050__$1);
var G__27058 = null;
var G__27059 = (0);
var G__27060 = (0);
seq__27036_27040 = G__27057;
chunk__27037_27041 = G__27058;
count__27038_27042 = G__27059;
i__27039_27043 = G__27060;
continue;
}
}
} else
{}
}
break;
}
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3639__auto__ = (function (){var G__27067 = x;if(G__27067)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27067.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__27067.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__27067);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__27067);
}
})();if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (function (){var G__27069 = x;if(G__27069)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto____$1 = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{return G__27069.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__27069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__27069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__27069);
}
})();if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{var G__27070 = x;if(G__27070)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto____$2 = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto____$2))
{return or__3639__auto____$2;
} else
{return G__27070.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__27070.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__27070);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__27070);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))))));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createClass((function (){var or__3639__auto__ = descriptor;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})()));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_opts_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))));
}
if((m == null))
{var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.call(null,f);return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var ret = f.call(null,cursor,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{var map__27072 = m;var map__27072__$1 = ((cljs.core.seq_QMARK_.call(null,map__27072))?cljs.core.apply.call(null,cljs.core.hash_map,map__27072):map__27072);var opts = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));var shared = (function (){var or__3639__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__27072,map__27072__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__27072,map__27072__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__27072,map__27072__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__27072,map__27072__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.call(null,f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__27081 = state;if(G__27081)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27081.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__27081.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__27081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__27081);
}
})())
{} else
{var properties_27089 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var listeners_27090 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_27091 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x27082_27092 = state;x27082_27092.om$core$IRenderQueue$ = true;
x27082_27092.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_27091);
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_27091),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_27091,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_27091,cljs.core.empty);
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$INotify$ = true;
x27082_27092.om$core$INotify$_listen_BANG_$arity$3 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_27090,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_27090,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$INotify$_notify_BANG_$arity$3 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__27083_27093 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_27090));var chunk__27084_27094 = null;var count__27085_27095 = (0);var i__27086_27096 = (0);while(true){
if((i__27086_27096 < count__27085_27095))
{var vec__27087_27097 = cljs.core._nth.call(null,chunk__27084_27094,i__27086_27096);var __27098 = cljs.core.nth.call(null,vec__27087_27097,(0),null);var f_27099 = cljs.core.nth.call(null,vec__27087_27097,(1),null);f_27099.call(null,tx_data,root_cursor);
{
var G__27100 = seq__27083_27093;
var G__27101 = chunk__27084_27094;
var G__27102 = count__27085_27095;
var G__27103 = (i__27086_27096 + (1));
seq__27083_27093 = G__27100;
chunk__27084_27094 = G__27101;
count__27085_27095 = G__27102;
i__27086_27096 = G__27103;
continue;
}
} else
{var temp__4126__auto___27104 = cljs.core.seq.call(null,seq__27083_27093);if(temp__4126__auto___27104)
{var seq__27083_27105__$1 = temp__4126__auto___27104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27083_27105__$1))
{var c__4408__auto___27106 = cljs.core.chunk_first.call(null,seq__27083_27105__$1);{
var G__27107 = cljs.core.chunk_rest.call(null,seq__27083_27105__$1);
var G__27108 = c__4408__auto___27106;
var G__27109 = cljs.core.count.call(null,c__4408__auto___27106);
var G__27110 = (0);
seq__27083_27093 = G__27107;
chunk__27084_27094 = G__27108;
count__27085_27095 = G__27109;
i__27086_27096 = G__27110;
continue;
}
} else
{var vec__27088_27111 = cljs.core.first.call(null,seq__27083_27105__$1);var __27112 = cljs.core.nth.call(null,vec__27088_27111,(0),null);var f_27113 = cljs.core.nth.call(null,vec__27088_27111,(1),null);f_27113.call(null,tx_data,root_cursor);
{
var G__27114 = cljs.core.next.call(null,seq__27083_27105__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__27083_27093 = G__27114;
chunk__27084_27094 = G__27115;
count__27085_27095 = G__27116;
i__27086_27096 = G__27117;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$IRootProperties$ = true;
x27082_27092.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_27089,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_27089,cljs.core.dissoc,id,k);
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_27089,cljs.core.dissoc,id);
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
x27082_27092.om$core$IRootProperties$_get_property$arity$3 = ((function (x27082_27092,properties_27089,listeners_27090,render_queue_27091){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_27089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x27082_27092,properties_27089,listeners_27090,render_queue_27091))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_.call(null,cursor))
{var x27119 = cljs.core.clone.call(null,cursor);x27119.om$core$IRootKey$ = true;
x27119.om$core$IRootKey$_root_key$arity$1 = ((function (x27119){
return (function (this$){var this$__$1 = this;return root_key;
});})(x27119))
;
x27119.om$core$IAdapt$ = true;
x27119.om$core$IAdapt$_adapt$arity$2 = ((function (x27119){
return (function (this$,other){var this$__$1 = this;return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x27119))
;
x27119.cljs$core$ICloneable$ = true;
x27119.cljs$core$ICloneable$_clone$arity$1 = ((function (x27119){
return (function (this$){var this$__$1 = this;return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x27119))
;
return x27119;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__27120){var map__27183 = p__27120;var map__27183__$1 = ((cljs.core.seq_QMARK_.call(null,map__27183))?cljs.core.apply.call(null,cljs.core.hash_map,map__27183):map__27183);var options = map__27183__$1;var adapt = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var descriptor = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));var instrument = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"target","target",253001721));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))))));
}
var roots_SINGLEQUOTE__27245 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__27245,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__27245,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__27184 = value;if(G__27184)
{var bit__4302__auto__ = (G__27184.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4302__auto__) || (G__27184.cljs$core$IAtom$))
{return true;
} else
{if((!G__27184.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__27184);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__27184);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3639__auto__ = adapt;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var ret = cljs.core.atom.call(null,null);var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643))))
{} else
{var c_27246 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_27215 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_27216 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_27217 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_27218 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_27218;
om.core._STAR_state_STAR_ = _STAR_state_STAR_27217;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27216;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_27215;
}})(),target);if((cljs.core.deref.call(null,ret) == null))
{cljs.core.reset_BANG_.call(null,ret,c_27246);
} else
{}
}
var queue_27247 = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue_27247))
{} else
{var seq__27219_27248 = cljs.core.seq.call(null,queue_27247);var chunk__27220_27249 = null;var count__27221_27250 = (0);var i__27222_27251 = (0);while(true){
if((i__27222_27251 < count__27221_27250))
{var c_27252 = cljs.core._nth.call(null,chunk__27220_27249,i__27222_27251);if(cljs.core.truth_(c_27252.isMounted()))
{var temp__4126__auto___27253 = (c_27252.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___27253))
{var next_props_27254 = temp__4126__auto___27253;(c_27252.props["__om_cursor"] = next_props_27254);
(c_27252.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3639__auto__ = !((function (){var G__27224 = om.core.children.call(null,c_27252);if(G__27224)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27224.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__27224.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__27224);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__27224);
}
})());if(or__3639__auto__)
{return or__3639__auto__;
} else
{return c_27252.shouldComponentUpdate(c_27252.props,c_27252.state);
}
})()))
{c_27252.forceUpdate();
} else
{}
} else
{}
{
var G__27255 = seq__27219_27248;
var G__27256 = chunk__27220_27249;
var G__27257 = count__27221_27250;
var G__27258 = (i__27222_27251 + (1));
seq__27219_27248 = G__27255;
chunk__27220_27249 = G__27256;
count__27221_27250 = G__27257;
i__27222_27251 = G__27258;
continue;
}
} else
{var temp__4126__auto___27259 = cljs.core.seq.call(null,seq__27219_27248);if(temp__4126__auto___27259)
{var seq__27219_27260__$1 = temp__4126__auto___27259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27219_27260__$1))
{var c__4408__auto___27261 = cljs.core.chunk_first.call(null,seq__27219_27260__$1);{
var G__27262 = cljs.core.chunk_rest.call(null,seq__27219_27260__$1);
var G__27263 = c__4408__auto___27261;
var G__27264 = cljs.core.count.call(null,c__4408__auto___27261);
var G__27265 = (0);
seq__27219_27248 = G__27262;
chunk__27220_27249 = G__27263;
count__27221_27250 = G__27264;
i__27222_27251 = G__27265;
continue;
}
} else
{var c_27266 = cljs.core.first.call(null,seq__27219_27260__$1);if(cljs.core.truth_(c_27266.isMounted()))
{var temp__4126__auto___27267__$1 = (c_27266.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___27267__$1))
{var next_props_27268 = temp__4126__auto___27267__$1;(c_27266.props["__om_cursor"] = next_props_27268);
(c_27266.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3639__auto__ = !((function (){var G__27226 = om.core.children.call(null,c_27266);if(G__27226)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27226.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__27226.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__27226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__27226);
}
})());if(or__3639__auto__)
{return or__3639__auto__;
} else
{return c_27266.shouldComponentUpdate(c_27266.props,c_27266.state);
}
})()))
{c_27266.forceUpdate();
} else
{}
} else
{}
{
var G__27269 = cljs.core.next.call(null,seq__27219_27260__$1);
var G__27270 = null;
var G__27271 = (0);
var G__27272 = (0);
seq__27219_27248 = G__27269;
chunk__27220_27249 = G__27270;
count__27221_27250 = G__27271;
i__27222_27251 = G__27272;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_.call(null,state__$1);
}
var _refs_27273 = cljs.core.deref.call(null,om.core._refs);if(cljs.core.empty_QMARK_.call(null,_refs_27273))
{} else
{var seq__27227_27274 = cljs.core.seq.call(null,_refs_27273);var chunk__27228_27275 = null;var count__27229_27276 = (0);var i__27230_27277 = (0);while(true){
if((i__27230_27277 < count__27229_27276))
{var vec__27231_27278 = cljs.core._nth.call(null,chunk__27228_27275,i__27230_27277);var path_27279__$1 = cljs.core.nth.call(null,vec__27231_27278,(0),null);var cs_27280 = cljs.core.nth.call(null,vec__27231_27278,(1),null);var cs_27281__$1 = cljs.core.deref.call(null,cs_27280);var seq__27232_27282 = cljs.core.seq.call(null,cs_27281__$1);var chunk__27233_27283 = null;var count__27234_27284 = (0);var i__27235_27285 = (0);while(true){
if((i__27235_27285 < count__27234_27284))
{var vec__27236_27286 = cljs.core._nth.call(null,chunk__27233_27283,i__27235_27285);var id_27287 = cljs.core.nth.call(null,vec__27236_27286,(0),null);var c_27288 = cljs.core.nth.call(null,vec__27236_27286,(1),null);if(cljs.core.truth_(c_27288.shouldComponentUpdate(c_27288.props,c_27288.state)))
{c_27288.forceUpdate();
} else
{}
{
var G__27289 = seq__27232_27282;
var G__27290 = chunk__27233_27283;
var G__27291 = count__27234_27284;
var G__27292 = (i__27235_27285 + (1));
seq__27232_27282 = G__27289;
chunk__27233_27283 = G__27290;
count__27234_27284 = G__27291;
i__27235_27285 = G__27292;
continue;
}
} else
{var temp__4126__auto___27293 = cljs.core.seq.call(null,seq__27232_27282);if(temp__4126__auto___27293)
{var seq__27232_27294__$1 = temp__4126__auto___27293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27232_27294__$1))
{var c__4408__auto___27295 = cljs.core.chunk_first.call(null,seq__27232_27294__$1);{
var G__27296 = cljs.core.chunk_rest.call(null,seq__27232_27294__$1);
var G__27297 = c__4408__auto___27295;
var G__27298 = cljs.core.count.call(null,c__4408__auto___27295);
var G__27299 = (0);
seq__27232_27282 = G__27296;
chunk__27233_27283 = G__27297;
count__27234_27284 = G__27298;
i__27235_27285 = G__27299;
continue;
}
} else
{var vec__27237_27300 = cljs.core.first.call(null,seq__27232_27294__$1);var id_27301 = cljs.core.nth.call(null,vec__27237_27300,(0),null);var c_27302 = cljs.core.nth.call(null,vec__27237_27300,(1),null);if(cljs.core.truth_(c_27302.shouldComponentUpdate(c_27302.props,c_27302.state)))
{c_27302.forceUpdate();
} else
{}
{
var G__27303 = cljs.core.next.call(null,seq__27232_27294__$1);
var G__27304 = null;
var G__27305 = (0);
var G__27306 = (0);
seq__27232_27282 = G__27303;
chunk__27233_27283 = G__27304;
count__27234_27284 = G__27305;
i__27235_27285 = G__27306;
continue;
}
}
} else
{}
}
break;
}
{
var G__27307 = seq__27227_27274;
var G__27308 = chunk__27228_27275;
var G__27309 = count__27229_27276;
var G__27310 = (i__27230_27277 + (1));
seq__27227_27274 = G__27307;
chunk__27228_27275 = G__27308;
count__27229_27276 = G__27309;
i__27230_27277 = G__27310;
continue;
}
} else
{var temp__4126__auto___27311 = cljs.core.seq.call(null,seq__27227_27274);if(temp__4126__auto___27311)
{var seq__27227_27312__$1 = temp__4126__auto___27311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27227_27312__$1))
{var c__4408__auto___27313 = cljs.core.chunk_first.call(null,seq__27227_27312__$1);{
var G__27314 = cljs.core.chunk_rest.call(null,seq__27227_27312__$1);
var G__27315 = c__4408__auto___27313;
var G__27316 = cljs.core.count.call(null,c__4408__auto___27313);
var G__27317 = (0);
seq__27227_27274 = G__27314;
chunk__27228_27275 = G__27315;
count__27229_27276 = G__27316;
i__27230_27277 = G__27317;
continue;
}
} else
{var vec__27238_27318 = cljs.core.first.call(null,seq__27227_27312__$1);var path_27319__$1 = cljs.core.nth.call(null,vec__27238_27318,(0),null);var cs_27320 = cljs.core.nth.call(null,vec__27238_27318,(1),null);var cs_27321__$1 = cljs.core.deref.call(null,cs_27320);var seq__27239_27322 = cljs.core.seq.call(null,cs_27321__$1);var chunk__27240_27323 = null;var count__27241_27324 = (0);var i__27242_27325 = (0);while(true){
if((i__27242_27325 < count__27241_27324))
{var vec__27243_27326 = cljs.core._nth.call(null,chunk__27240_27323,i__27242_27325);var id_27327 = cljs.core.nth.call(null,vec__27243_27326,(0),null);var c_27328 = cljs.core.nth.call(null,vec__27243_27326,(1),null);if(cljs.core.truth_(c_27328.shouldComponentUpdate(c_27328.props,c_27328.state)))
{c_27328.forceUpdate();
} else
{}
{
var G__27329 = seq__27239_27322;
var G__27330 = chunk__27240_27323;
var G__27331 = count__27241_27324;
var G__27332 = (i__27242_27325 + (1));
seq__27239_27322 = G__27329;
chunk__27240_27323 = G__27330;
count__27241_27324 = G__27331;
i__27242_27325 = G__27332;
continue;
}
} else
{var temp__4126__auto___27333__$1 = cljs.core.seq.call(null,seq__27239_27322);if(temp__4126__auto___27333__$1)
{var seq__27239_27334__$1 = temp__4126__auto___27333__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27239_27334__$1))
{var c__4408__auto___27335 = cljs.core.chunk_first.call(null,seq__27239_27334__$1);{
var G__27336 = cljs.core.chunk_rest.call(null,seq__27239_27334__$1);
var G__27337 = c__4408__auto___27335;
var G__27338 = cljs.core.count.call(null,c__4408__auto___27335);
var G__27339 = (0);
seq__27239_27322 = G__27336;
chunk__27240_27323 = G__27337;
count__27241_27324 = G__27338;
i__27242_27325 = G__27339;
continue;
}
} else
{var vec__27244_27340 = cljs.core.first.call(null,seq__27239_27334__$1);var id_27341 = cljs.core.nth.call(null,vec__27244_27340,(0),null);var c_27342 = cljs.core.nth.call(null,vec__27244_27340,(1),null);if(cljs.core.truth_(c_27342.shouldComponentUpdate(c_27342.props,c_27342.state)))
{c_27342.forceUpdate();
} else
{}
{
var G__27343 = cljs.core.next.call(null,seq__27239_27334__$1);
var G__27344 = null;
var G__27345 = (0);
var G__27346 = (0);
seq__27239_27322 = G__27343;
chunk__27240_27323 = G__27344;
count__27241_27324 = G__27345;
i__27242_27325 = G__27346;
continue;
}
}
} else
{}
}
break;
}
{
var G__27347 = cljs.core.next.call(null,seq__27227_27312__$1);
var G__27348 = null;
var G__27349 = (0);
var G__27350 = (0);
seq__27227_27274 = G__27347;
chunk__27228_27275 = G__27348;
count__27229_27276 = G__27349;
i__27230_27277 = G__27350;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);
return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n))))
{om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else
{}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
} else
{return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_.call(null,state__$1,watch_key);
cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__27183,map__27183__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null);
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__27352 = cursor;if(G__27352)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__27352.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__27352.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__27352);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__27352);
}
})())?om.core._root_key.call(null,cursor):null);var app_state = om.core.state.call(null,cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = om.core.path.call(null,cursor);var rpath = cljs.core.into.call(null,cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else
{}
if(cljs.core.empty_QMARK_.call(null,rpath))
{return cljs.core.swap_BANG_.call(null,app_state,f);
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
