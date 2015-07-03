// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23502 = (function (f,fn_handler,meta23503){
this.f = f;
this.fn_handler = fn_handler;
this.meta23503 = meta23503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23502.cljs$lang$type = true;
cljs.core.async.t23502.cljs$lang$ctorStr = "cljs.core.async/t23502";
cljs.core.async.t23502.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23502");
});
cljs.core.async.t23502.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23504){var self__ = this;
var _23504__$1 = this;return self__.meta23503;
});
cljs.core.async.t23502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23504,meta23503__$1){var self__ = this;
var _23504__$1 = this;return (new cljs.core.async.t23502(self__.f,self__.fn_handler,meta23503__$1));
});
cljs.core.async.__GT_t23502 = (function __GT_t23502(f__$1,fn_handler__$1,meta23503){return (new cljs.core.async.t23502(f__$1,fn_handler__$1,meta23503));
});
}
return (new cljs.core.async.t23502(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23506 = buff;if(G__23506)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23506.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23506.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23506);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_23507 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23507);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23507,ret){
return (function (){return fn1.call(null,val_23507);
});})(val_23507,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23508 = n;var x_23509 = (0);while(true){
if((x_23509 < n__4508__auto___23508))
{(a[x_23509] = (0));
{
var G__23510 = (x_23509 + (1));
x_23509 = G__23510;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23511 = (i + (1));
i = G__23511;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23515 = (function (flag,alt_flag,meta23516){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23516 = meta23516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23515.cljs$lang$type = true;
cljs.core.async.t23515.cljs$lang$ctorStr = "cljs.core.async/t23515";
cljs.core.async.t23515.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23515");
});})(flag))
;
cljs.core.async.t23515.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23517){var self__ = this;
var _23517__$1 = this;return self__.meta23516;
});})(flag))
;
cljs.core.async.t23515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23517,meta23516__$1){var self__ = this;
var _23517__$1 = this;return (new cljs.core.async.t23515(self__.flag,self__.alt_flag,meta23516__$1));
});})(flag))
;
cljs.core.async.__GT_t23515 = ((function (flag){
return (function __GT_t23515(flag__$1,alt_flag__$1,meta23516){return (new cljs.core.async.t23515(flag__$1,alt_flag__$1,meta23516));
});})(flag))
;
}
return (new cljs.core.async.t23515(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23521 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23521 = (function (cb,flag,alt_handler,meta23522){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23522 = meta23522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23521.cljs$lang$type = true;
cljs.core.async.t23521.cljs$lang$ctorStr = "cljs.core.async/t23521";
cljs.core.async.t23521.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23521");
});
cljs.core.async.t23521.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23523){var self__ = this;
var _23523__$1 = this;return self__.meta23522;
});
cljs.core.async.t23521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23523,meta23522__$1){var self__ = this;
var _23523__$1 = this;return (new cljs.core.async.t23521(self__.cb,self__.flag,self__.alt_handler,meta23522__$1));
});
cljs.core.async.__GT_t23521 = (function __GT_t23521(cb__$1,flag__$1,alt_handler__$1,meta23522){return (new cljs.core.async.t23521(cb__$1,flag__$1,alt_handler__$1,meta23522));
});
}
return (new cljs.core.async.t23521(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23524_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23524_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23525_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23525_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23526 = (i + (1));
i = G__23526;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__23527){var map__23529 = p__23527;var map__23529__$1 = ((cljs.core.seq_QMARK_.call(null,map__23529))?cljs.core.apply.call(null,cljs.core.hash_map,map__23529):map__23529);var opts = map__23529__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23527 = null;if (arguments.length > 1) {
  p__23527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23527);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23530){
var ports = cljs.core.first(arglist__23530);
var p__23527 = cljs.core.rest(arglist__23530);
return alts_BANG___delegate(ports,p__23527);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23625 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23625){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23625){
return (function (state_23601){var state_val_23602 = (state_23601[(1)]);if((state_val_23602 === (7)))
{var inst_23597 = (state_23601[(2)]);var state_23601__$1 = state_23601;var statearr_23603_23626 = state_23601__$1;(statearr_23603_23626[(2)] = inst_23597);
(statearr_23603_23626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (1)))
{var state_23601__$1 = state_23601;var statearr_23604_23627 = state_23601__$1;(statearr_23604_23627[(2)] = null);
(statearr_23604_23627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (4)))
{var inst_23580 = (state_23601[(7)]);var inst_23580__$1 = (state_23601[(2)]);var inst_23581 = (inst_23580__$1 == null);var state_23601__$1 = (function (){var statearr_23605 = state_23601;(statearr_23605[(7)] = inst_23580__$1);
return statearr_23605;
})();if(cljs.core.truth_(inst_23581))
{var statearr_23606_23628 = state_23601__$1;(statearr_23606_23628[(1)] = (5));
} else
{var statearr_23607_23629 = state_23601__$1;(statearr_23607_23629[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (13)))
{var state_23601__$1 = state_23601;var statearr_23608_23630 = state_23601__$1;(statearr_23608_23630[(2)] = null);
(statearr_23608_23630[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (6)))
{var inst_23580 = (state_23601[(7)]);var state_23601__$1 = state_23601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23601__$1,(11),to,inst_23580);
} else
{if((state_val_23602 === (3)))
{var inst_23599 = (state_23601[(2)]);var state_23601__$1 = state_23601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23601__$1,inst_23599);
} else
{if((state_val_23602 === (12)))
{var state_23601__$1 = state_23601;var statearr_23609_23631 = state_23601__$1;(statearr_23609_23631[(2)] = null);
(statearr_23609_23631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (2)))
{var state_23601__$1 = state_23601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23601__$1,(4),from);
} else
{if((state_val_23602 === (11)))
{var inst_23590 = (state_23601[(2)]);var state_23601__$1 = state_23601;if(cljs.core.truth_(inst_23590))
{var statearr_23610_23632 = state_23601__$1;(statearr_23610_23632[(1)] = (12));
} else
{var statearr_23611_23633 = state_23601__$1;(statearr_23611_23633[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (9)))
{var state_23601__$1 = state_23601;var statearr_23612_23634 = state_23601__$1;(statearr_23612_23634[(2)] = null);
(statearr_23612_23634[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (5)))
{var state_23601__$1 = state_23601;if(cljs.core.truth_(close_QMARK_))
{var statearr_23613_23635 = state_23601__$1;(statearr_23613_23635[(1)] = (8));
} else
{var statearr_23614_23636 = state_23601__$1;(statearr_23614_23636[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (14)))
{var inst_23595 = (state_23601[(2)]);var state_23601__$1 = state_23601;var statearr_23615_23637 = state_23601__$1;(statearr_23615_23637[(2)] = inst_23595);
(statearr_23615_23637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (10)))
{var inst_23587 = (state_23601[(2)]);var state_23601__$1 = state_23601;var statearr_23616_23638 = state_23601__$1;(statearr_23616_23638[(2)] = inst_23587);
(statearr_23616_23638[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23602 === (8)))
{var inst_23584 = cljs.core.async.close_BANG_.call(null,to);var state_23601__$1 = state_23601;var statearr_23617_23639 = state_23601__$1;(statearr_23617_23639[(2)] = inst_23584);
(statearr_23617_23639[(1)] = (10));
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
});})(c__9125__auto___23625))
;return ((function (switch__9110__auto__,c__9125__auto___23625){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23621 = [null,null,null,null,null,null,null,null];(statearr_23621[(0)] = state_machine__9111__auto__);
(statearr_23621[(1)] = (1));
return statearr_23621;
});
var state_machine__9111__auto____1 = (function (state_23601){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23601);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23622){if((e23622 instanceof Object))
{var ex__9114__auto__ = e23622;var statearr_23623_23640 = state_23601;(statearr_23623_23640[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23622;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23641 = state_23601;
state_23601 = G__23641;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23601){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23625))
})();var state__9127__auto__ = (function (){var statearr_23624 = f__9126__auto__.call(null);(statearr_23624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23625);
return statearr_23624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23625))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__23825){var vec__23826 = p__23825;var v = cljs.core.nth.call(null,vec__23826,(0),null);var p = cljs.core.nth.call(null,vec__23826,(1),null);var job = vec__23826;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___24008 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24008,res,vec__23826,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24008,res,vec__23826,v,p,job,jobs,results){
return (function (state_23831){var state_val_23832 = (state_23831[(1)]);if((state_val_23832 === (2)))
{var inst_23828 = (state_23831[(2)]);var inst_23829 = cljs.core.async.close_BANG_.call(null,res);var state_23831__$1 = (function (){var statearr_23833 = state_23831;(statearr_23833[(7)] = inst_23828);
return statearr_23833;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23831__$1,inst_23829);
} else
{if((state_val_23832 === (1)))
{var state_23831__$1 = state_23831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23831__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___24008,res,vec__23826,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___24008,res,vec__23826,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23837 = [null,null,null,null,null,null,null,null];(statearr_23837[(0)] = state_machine__9111__auto__);
(statearr_23837[(1)] = (1));
return statearr_23837;
});
var state_machine__9111__auto____1 = (function (state_23831){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23831);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23838){if((e23838 instanceof Object))
{var ex__9114__auto__ = e23838;var statearr_23839_24009 = state_23831;(statearr_23839_24009[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24010 = state_23831;
state_23831 = G__24010;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23831){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24008,res,vec__23826,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23840 = f__9126__auto__.call(null);(statearr_23840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24008);
return statearr_23840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24008,res,vec__23826,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23841){var vec__23842 = p__23841;var v = cljs.core.nth.call(null,vec__23842,(0),null);var p = cljs.core.nth.call(null,vec__23842,(1),null);var job = vec__23842;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24011 = n;var __24012 = (0);while(true){
if((__24012 < n__4508__auto___24011))
{var G__23843_24013 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23843_24013) {
case "async":
var c__9125__auto___24015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24012,c__9125__auto___24015,G__23843_24013,n__4508__auto___24011,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24012,c__9125__auto___24015,G__23843_24013,n__4508__auto___24011,jobs,results,process,async){
return (function (state_23856){var state_val_23857 = (state_23856[(1)]);if((state_val_23857 === (7)))
{var inst_23852 = (state_23856[(2)]);var state_23856__$1 = state_23856;var statearr_23858_24016 = state_23856__$1;(statearr_23858_24016[(2)] = inst_23852);
(statearr_23858_24016[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23857 === (6)))
{var state_23856__$1 = state_23856;var statearr_23859_24017 = state_23856__$1;(statearr_23859_24017[(2)] = null);
(statearr_23859_24017[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23857 === (5)))
{var state_23856__$1 = state_23856;var statearr_23860_24018 = state_23856__$1;(statearr_23860_24018[(2)] = null);
(statearr_23860_24018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23857 === (4)))
{var inst_23846 = (state_23856[(2)]);var inst_23847 = async.call(null,inst_23846);var state_23856__$1 = state_23856;if(cljs.core.truth_(inst_23847))
{var statearr_23861_24019 = state_23856__$1;(statearr_23861_24019[(1)] = (5));
} else
{var statearr_23862_24020 = state_23856__$1;(statearr_23862_24020[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23857 === (3)))
{var inst_23854 = (state_23856[(2)]);var state_23856__$1 = state_23856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23856__$1,inst_23854);
} else
{if((state_val_23857 === (2)))
{var state_23856__$1 = state_23856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23856__$1,(4),jobs);
} else
{if((state_val_23857 === (1)))
{var state_23856__$1 = state_23856;var statearr_23863_24021 = state_23856__$1;(statearr_23863_24021[(2)] = null);
(statearr_23863_24021[(1)] = (2));
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
});})(__24012,c__9125__auto___24015,G__23843_24013,n__4508__auto___24011,jobs,results,process,async))
;return ((function (__24012,switch__9110__auto__,c__9125__auto___24015,G__23843_24013,n__4508__auto___24011,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23867 = [null,null,null,null,null,null,null];(statearr_23867[(0)] = state_machine__9111__auto__);
(statearr_23867[(1)] = (1));
return statearr_23867;
});
var state_machine__9111__auto____1 = (function (state_23856){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23856);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object))
{var ex__9114__auto__ = e23868;var statearr_23869_24022 = state_23856;(statearr_23869_24022[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24023 = state_23856;
state_23856 = G__24023;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23856){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24012,switch__9110__auto__,c__9125__auto___24015,G__23843_24013,n__4508__auto___24011,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23870 = f__9126__auto__.call(null);(statearr_23870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24015);
return statearr_23870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24012,c__9125__auto___24015,G__23843_24013,n__4508__auto___24011,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24024 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24012,c__9125__auto___24024,G__23843_24013,n__4508__auto___24011,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24012,c__9125__auto___24024,G__23843_24013,n__4508__auto___24011,jobs,results,process,async){
return (function (state_23883){var state_val_23884 = (state_23883[(1)]);if((state_val_23884 === (7)))
{var inst_23879 = (state_23883[(2)]);var state_23883__$1 = state_23883;var statearr_23885_24025 = state_23883__$1;(statearr_23885_24025[(2)] = inst_23879);
(statearr_23885_24025[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (6)))
{var state_23883__$1 = state_23883;var statearr_23886_24026 = state_23883__$1;(statearr_23886_24026[(2)] = null);
(statearr_23886_24026[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (5)))
{var state_23883__$1 = state_23883;var statearr_23887_24027 = state_23883__$1;(statearr_23887_24027[(2)] = null);
(statearr_23887_24027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (4)))
{var inst_23873 = (state_23883[(2)]);var inst_23874 = process.call(null,inst_23873);var state_23883__$1 = state_23883;if(cljs.core.truth_(inst_23874))
{var statearr_23888_24028 = state_23883__$1;(statearr_23888_24028[(1)] = (5));
} else
{var statearr_23889_24029 = state_23883__$1;(statearr_23889_24029[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23884 === (3)))
{var inst_23881 = (state_23883[(2)]);var state_23883__$1 = state_23883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23883__$1,inst_23881);
} else
{if((state_val_23884 === (2)))
{var state_23883__$1 = state_23883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23883__$1,(4),jobs);
} else
{if((state_val_23884 === (1)))
{var state_23883__$1 = state_23883;var statearr_23890_24030 = state_23883__$1;(statearr_23890_24030[(2)] = null);
(statearr_23890_24030[(1)] = (2));
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
});})(__24012,c__9125__auto___24024,G__23843_24013,n__4508__auto___24011,jobs,results,process,async))
;return ((function (__24012,switch__9110__auto__,c__9125__auto___24024,G__23843_24013,n__4508__auto___24011,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23894 = [null,null,null,null,null,null,null];(statearr_23894[(0)] = state_machine__9111__auto__);
(statearr_23894[(1)] = (1));
return statearr_23894;
});
var state_machine__9111__auto____1 = (function (state_23883){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23883);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23895){if((e23895 instanceof Object))
{var ex__9114__auto__ = e23895;var statearr_23896_24031 = state_23883;(statearr_23896_24031[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24032 = state_23883;
state_23883 = G__24032;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24012,switch__9110__auto__,c__9125__auto___24024,G__23843_24013,n__4508__auto___24011,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23897 = f__9126__auto__.call(null);(statearr_23897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24024);
return statearr_23897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24012,c__9125__auto___24024,G__23843_24013,n__4508__auto___24011,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24033 = (__24012 + (1));
__24012 = G__24033;
continue;
}
} else
{}
break;
}
var c__9125__auto___24034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24034,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24034,jobs,results,process,async){
return (function (state_23919){var state_val_23920 = (state_23919[(1)]);if((state_val_23920 === (9)))
{var inst_23912 = (state_23919[(2)]);var state_23919__$1 = (function (){var statearr_23921 = state_23919;(statearr_23921[(7)] = inst_23912);
return statearr_23921;
})();var statearr_23922_24035 = state_23919__$1;(statearr_23922_24035[(2)] = null);
(statearr_23922_24035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23920 === (8)))
{var inst_23905 = (state_23919[(8)]);var inst_23910 = (state_23919[(2)]);var state_23919__$1 = (function (){var statearr_23923 = state_23919;(statearr_23923[(9)] = inst_23910);
return statearr_23923;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23919__$1,(9),results,inst_23905);
} else
{if((state_val_23920 === (7)))
{var inst_23915 = (state_23919[(2)]);var state_23919__$1 = state_23919;var statearr_23924_24036 = state_23919__$1;(statearr_23924_24036[(2)] = inst_23915);
(statearr_23924_24036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23920 === (6)))
{var inst_23905 = (state_23919[(8)]);var inst_23900 = (state_23919[(10)]);var inst_23905__$1 = cljs.core.async.chan.call(null,(1));var inst_23906 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23907 = [inst_23900,inst_23905__$1];var inst_23908 = (new cljs.core.PersistentVector(null,2,(5),inst_23906,inst_23907,null));var state_23919__$1 = (function (){var statearr_23925 = state_23919;(statearr_23925[(8)] = inst_23905__$1);
return statearr_23925;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23919__$1,(8),jobs,inst_23908);
} else
{if((state_val_23920 === (5)))
{var inst_23903 = cljs.core.async.close_BANG_.call(null,jobs);var state_23919__$1 = state_23919;var statearr_23926_24037 = state_23919__$1;(statearr_23926_24037[(2)] = inst_23903);
(statearr_23926_24037[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23920 === (4)))
{var inst_23900 = (state_23919[(10)]);var inst_23900__$1 = (state_23919[(2)]);var inst_23901 = (inst_23900__$1 == null);var state_23919__$1 = (function (){var statearr_23927 = state_23919;(statearr_23927[(10)] = inst_23900__$1);
return statearr_23927;
})();if(cljs.core.truth_(inst_23901))
{var statearr_23928_24038 = state_23919__$1;(statearr_23928_24038[(1)] = (5));
} else
{var statearr_23929_24039 = state_23919__$1;(statearr_23929_24039[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23920 === (3)))
{var inst_23917 = (state_23919[(2)]);var state_23919__$1 = state_23919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23919__$1,inst_23917);
} else
{if((state_val_23920 === (2)))
{var state_23919__$1 = state_23919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23919__$1,(4),from);
} else
{if((state_val_23920 === (1)))
{var state_23919__$1 = state_23919;var statearr_23930_24040 = state_23919__$1;(statearr_23930_24040[(2)] = null);
(statearr_23930_24040[(1)] = (2));
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
});})(c__9125__auto___24034,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24034,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23934 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23934[(0)] = state_machine__9111__auto__);
(statearr_23934[(1)] = (1));
return statearr_23934;
});
var state_machine__9111__auto____1 = (function (state_23919){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23919);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23935){if((e23935 instanceof Object))
{var ex__9114__auto__ = e23935;var statearr_23936_24041 = state_23919;(statearr_23936_24041[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23935;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24042 = state_23919;
state_23919 = G__24042;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23919){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24034,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23937 = f__9126__auto__.call(null);(statearr_23937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24034);
return statearr_23937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24034,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23975){var state_val_23976 = (state_23975[(1)]);if((state_val_23976 === (7)))
{var inst_23971 = (state_23975[(2)]);var state_23975__$1 = state_23975;var statearr_23977_24043 = state_23975__$1;(statearr_23977_24043[(2)] = inst_23971);
(statearr_23977_24043[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (20)))
{var state_23975__$1 = state_23975;var statearr_23978_24044 = state_23975__$1;(statearr_23978_24044[(2)] = null);
(statearr_23978_24044[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (1)))
{var state_23975__$1 = state_23975;var statearr_23979_24045 = state_23975__$1;(statearr_23979_24045[(2)] = null);
(statearr_23979_24045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (4)))
{var inst_23940 = (state_23975[(7)]);var inst_23940__$1 = (state_23975[(2)]);var inst_23941 = (inst_23940__$1 == null);var state_23975__$1 = (function (){var statearr_23980 = state_23975;(statearr_23980[(7)] = inst_23940__$1);
return statearr_23980;
})();if(cljs.core.truth_(inst_23941))
{var statearr_23981_24046 = state_23975__$1;(statearr_23981_24046[(1)] = (5));
} else
{var statearr_23982_24047 = state_23975__$1;(statearr_23982_24047[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (15)))
{var inst_23953 = (state_23975[(8)]);var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23975__$1,(18),to,inst_23953);
} else
{if((state_val_23976 === (21)))
{var inst_23966 = (state_23975[(2)]);var state_23975__$1 = state_23975;var statearr_23983_24048 = state_23975__$1;(statearr_23983_24048[(2)] = inst_23966);
(statearr_23983_24048[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (13)))
{var inst_23968 = (state_23975[(2)]);var state_23975__$1 = (function (){var statearr_23984 = state_23975;(statearr_23984[(9)] = inst_23968);
return statearr_23984;
})();var statearr_23985_24049 = state_23975__$1;(statearr_23985_24049[(2)] = null);
(statearr_23985_24049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (6)))
{var inst_23940 = (state_23975[(7)]);var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(11),inst_23940);
} else
{if((state_val_23976 === (17)))
{var inst_23961 = (state_23975[(2)]);var state_23975__$1 = state_23975;if(cljs.core.truth_(inst_23961))
{var statearr_23986_24050 = state_23975__$1;(statearr_23986_24050[(1)] = (19));
} else
{var statearr_23987_24051 = state_23975__$1;(statearr_23987_24051[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (3)))
{var inst_23973 = (state_23975[(2)]);var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23975__$1,inst_23973);
} else
{if((state_val_23976 === (12)))
{var inst_23950 = (state_23975[(10)]);var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(14),inst_23950);
} else
{if((state_val_23976 === (2)))
{var state_23975__$1 = state_23975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23975__$1,(4),results);
} else
{if((state_val_23976 === (19)))
{var state_23975__$1 = state_23975;var statearr_23988_24052 = state_23975__$1;(statearr_23988_24052[(2)] = null);
(statearr_23988_24052[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (11)))
{var inst_23950 = (state_23975[(2)]);var state_23975__$1 = (function (){var statearr_23989 = state_23975;(statearr_23989[(10)] = inst_23950);
return statearr_23989;
})();var statearr_23990_24053 = state_23975__$1;(statearr_23990_24053[(2)] = null);
(statearr_23990_24053[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (9)))
{var state_23975__$1 = state_23975;var statearr_23991_24054 = state_23975__$1;(statearr_23991_24054[(2)] = null);
(statearr_23991_24054[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (5)))
{var state_23975__$1 = state_23975;if(cljs.core.truth_(close_QMARK_))
{var statearr_23992_24055 = state_23975__$1;(statearr_23992_24055[(1)] = (8));
} else
{var statearr_23993_24056 = state_23975__$1;(statearr_23993_24056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (14)))
{var inst_23953 = (state_23975[(8)]);var inst_23955 = (state_23975[(11)]);var inst_23953__$1 = (state_23975[(2)]);var inst_23954 = (inst_23953__$1 == null);var inst_23955__$1 = cljs.core.not.call(null,inst_23954);var state_23975__$1 = (function (){var statearr_23994 = state_23975;(statearr_23994[(8)] = inst_23953__$1);
(statearr_23994[(11)] = inst_23955__$1);
return statearr_23994;
})();if(inst_23955__$1)
{var statearr_23995_24057 = state_23975__$1;(statearr_23995_24057[(1)] = (15));
} else
{var statearr_23996_24058 = state_23975__$1;(statearr_23996_24058[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (16)))
{var inst_23955 = (state_23975[(11)]);var state_23975__$1 = state_23975;var statearr_23997_24059 = state_23975__$1;(statearr_23997_24059[(2)] = inst_23955);
(statearr_23997_24059[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (10)))
{var inst_23947 = (state_23975[(2)]);var state_23975__$1 = state_23975;var statearr_23998_24060 = state_23975__$1;(statearr_23998_24060[(2)] = inst_23947);
(statearr_23998_24060[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (18)))
{var inst_23958 = (state_23975[(2)]);var state_23975__$1 = state_23975;var statearr_23999_24061 = state_23975__$1;(statearr_23999_24061[(2)] = inst_23958);
(statearr_23999_24061[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23976 === (8)))
{var inst_23944 = cljs.core.async.close_BANG_.call(null,to);var state_23975__$1 = state_23975;var statearr_24000_24062 = state_23975__$1;(statearr_24000_24062[(2)] = inst_23944);
(statearr_24000_24062[(1)] = (10));
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
});})(c__9125__auto__,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto__,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24004 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24004[(0)] = state_machine__9111__auto__);
(statearr_24004[(1)] = (1));
return statearr_24004;
});
var state_machine__9111__auto____1 = (function (state_23975){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23975);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24005){if((e24005 instanceof Object))
{var ex__9114__auto__ = e24005;var statearr_24006_24063 = state_23975;(statearr_24006_24063[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23975);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24005;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24064 = state_23975;
state_23975 = G__24064;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_24007 = f__9126__auto__.call(null);(statearr_24007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,jobs,results,process,async))
);
return c__9125__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24165 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24165,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24165,tc,fc){
return (function (state_24140){var state_val_24141 = (state_24140[(1)]);if((state_val_24141 === (7)))
{var inst_24136 = (state_24140[(2)]);var state_24140__$1 = state_24140;var statearr_24142_24166 = state_24140__$1;(statearr_24142_24166[(2)] = inst_24136);
(statearr_24142_24166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (1)))
{var state_24140__$1 = state_24140;var statearr_24143_24167 = state_24140__$1;(statearr_24143_24167[(2)] = null);
(statearr_24143_24167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (4)))
{var inst_24117 = (state_24140[(7)]);var inst_24117__$1 = (state_24140[(2)]);var inst_24118 = (inst_24117__$1 == null);var state_24140__$1 = (function (){var statearr_24144 = state_24140;(statearr_24144[(7)] = inst_24117__$1);
return statearr_24144;
})();if(cljs.core.truth_(inst_24118))
{var statearr_24145_24168 = state_24140__$1;(statearr_24145_24168[(1)] = (5));
} else
{var statearr_24146_24169 = state_24140__$1;(statearr_24146_24169[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (13)))
{var state_24140__$1 = state_24140;var statearr_24147_24170 = state_24140__$1;(statearr_24147_24170[(2)] = null);
(statearr_24147_24170[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (6)))
{var inst_24117 = (state_24140[(7)]);var inst_24123 = p.call(null,inst_24117);var state_24140__$1 = state_24140;if(cljs.core.truth_(inst_24123))
{var statearr_24148_24171 = state_24140__$1;(statearr_24148_24171[(1)] = (9));
} else
{var statearr_24149_24172 = state_24140__$1;(statearr_24149_24172[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (3)))
{var inst_24138 = (state_24140[(2)]);var state_24140__$1 = state_24140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24140__$1,inst_24138);
} else
{if((state_val_24141 === (12)))
{var state_24140__$1 = state_24140;var statearr_24150_24173 = state_24140__$1;(statearr_24150_24173[(2)] = null);
(statearr_24150_24173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (2)))
{var state_24140__$1 = state_24140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24140__$1,(4),ch);
} else
{if((state_val_24141 === (11)))
{var inst_24117 = (state_24140[(7)]);var inst_24127 = (state_24140[(2)]);var state_24140__$1 = state_24140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24140__$1,(8),inst_24127,inst_24117);
} else
{if((state_val_24141 === (9)))
{var state_24140__$1 = state_24140;var statearr_24151_24174 = state_24140__$1;(statearr_24151_24174[(2)] = tc);
(statearr_24151_24174[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (5)))
{var inst_24120 = cljs.core.async.close_BANG_.call(null,tc);var inst_24121 = cljs.core.async.close_BANG_.call(null,fc);var state_24140__$1 = (function (){var statearr_24152 = state_24140;(statearr_24152[(8)] = inst_24120);
return statearr_24152;
})();var statearr_24153_24175 = state_24140__$1;(statearr_24153_24175[(2)] = inst_24121);
(statearr_24153_24175[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (14)))
{var inst_24134 = (state_24140[(2)]);var state_24140__$1 = state_24140;var statearr_24154_24176 = state_24140__$1;(statearr_24154_24176[(2)] = inst_24134);
(statearr_24154_24176[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (10)))
{var state_24140__$1 = state_24140;var statearr_24155_24177 = state_24140__$1;(statearr_24155_24177[(2)] = fc);
(statearr_24155_24177[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24141 === (8)))
{var inst_24129 = (state_24140[(2)]);var state_24140__$1 = state_24140;if(cljs.core.truth_(inst_24129))
{var statearr_24156_24178 = state_24140__$1;(statearr_24156_24178[(1)] = (12));
} else
{var statearr_24157_24179 = state_24140__$1;(statearr_24157_24179[(1)] = (13));
}
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
});})(c__9125__auto___24165,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24165,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24161 = [null,null,null,null,null,null,null,null,null];(statearr_24161[(0)] = state_machine__9111__auto__);
(statearr_24161[(1)] = (1));
return statearr_24161;
});
var state_machine__9111__auto____1 = (function (state_24140){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24140);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24162){if((e24162 instanceof Object))
{var ex__9114__auto__ = e24162;var statearr_24163_24180 = state_24140;(statearr_24163_24180[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24162;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24181 = state_24140;
state_24140 = G__24181;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24140){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24165,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24164 = f__9126__auto__.call(null);(statearr_24164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24165);
return statearr_24164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24165,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24228){var state_val_24229 = (state_24228[(1)]);if((state_val_24229 === (7)))
{var inst_24224 = (state_24228[(2)]);var state_24228__$1 = state_24228;var statearr_24230_24246 = state_24228__$1;(statearr_24230_24246[(2)] = inst_24224);
(statearr_24230_24246[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24229 === (6)))
{var inst_24217 = (state_24228[(7)]);var inst_24214 = (state_24228[(8)]);var inst_24221 = f.call(null,inst_24214,inst_24217);var inst_24214__$1 = inst_24221;var state_24228__$1 = (function (){var statearr_24231 = state_24228;(statearr_24231[(8)] = inst_24214__$1);
return statearr_24231;
})();var statearr_24232_24247 = state_24228__$1;(statearr_24232_24247[(2)] = null);
(statearr_24232_24247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24229 === (5)))
{var inst_24214 = (state_24228[(8)]);var state_24228__$1 = state_24228;var statearr_24233_24248 = state_24228__$1;(statearr_24233_24248[(2)] = inst_24214);
(statearr_24233_24248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24229 === (4)))
{var inst_24217 = (state_24228[(7)]);var inst_24217__$1 = (state_24228[(2)]);var inst_24218 = (inst_24217__$1 == null);var state_24228__$1 = (function (){var statearr_24234 = state_24228;(statearr_24234[(7)] = inst_24217__$1);
return statearr_24234;
})();if(cljs.core.truth_(inst_24218))
{var statearr_24235_24249 = state_24228__$1;(statearr_24235_24249[(1)] = (5));
} else
{var statearr_24236_24250 = state_24228__$1;(statearr_24236_24250[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24229 === (3)))
{var inst_24226 = (state_24228[(2)]);var state_24228__$1 = state_24228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24228__$1,inst_24226);
} else
{if((state_val_24229 === (2)))
{var state_24228__$1 = state_24228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24228__$1,(4),ch);
} else
{if((state_val_24229 === (1)))
{var inst_24214 = init;var state_24228__$1 = (function (){var statearr_24237 = state_24228;(statearr_24237[(8)] = inst_24214);
return statearr_24237;
})();var statearr_24238_24251 = state_24228__$1;(statearr_24238_24251[(2)] = null);
(statearr_24238_24251[(1)] = (2));
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
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24242 = [null,null,null,null,null,null,null,null,null];(statearr_24242[(0)] = state_machine__9111__auto__);
(statearr_24242[(1)] = (1));
return statearr_24242;
});
var state_machine__9111__auto____1 = (function (state_24228){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24228);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24243){if((e24243 instanceof Object))
{var ex__9114__auto__ = e24243;var statearr_24244_24252 = state_24228;(statearr_24244_24252[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24253 = state_24228;
state_24228 = G__24253;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24228){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24245 = f__9126__auto__.call(null);(statearr_24245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24327){var state_val_24328 = (state_24327[(1)]);if((state_val_24328 === (7)))
{var inst_24309 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24329_24352 = state_24327__$1;(statearr_24329_24352[(2)] = inst_24309);
(statearr_24329_24352[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (1)))
{var inst_24303 = cljs.core.seq.call(null,coll);var inst_24304 = inst_24303;var state_24327__$1 = (function (){var statearr_24330 = state_24327;(statearr_24330[(7)] = inst_24304);
return statearr_24330;
})();var statearr_24331_24353 = state_24327__$1;(statearr_24331_24353[(2)] = null);
(statearr_24331_24353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (4)))
{var inst_24304 = (state_24327[(7)]);var inst_24307 = cljs.core.first.call(null,inst_24304);var state_24327__$1 = state_24327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24327__$1,(7),ch,inst_24307);
} else
{if((state_val_24328 === (13)))
{var inst_24321 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24332_24354 = state_24327__$1;(statearr_24332_24354[(2)] = inst_24321);
(statearr_24332_24354[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (6)))
{var inst_24312 = (state_24327[(2)]);var state_24327__$1 = state_24327;if(cljs.core.truth_(inst_24312))
{var statearr_24333_24355 = state_24327__$1;(statearr_24333_24355[(1)] = (8));
} else
{var statearr_24334_24356 = state_24327__$1;(statearr_24334_24356[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (3)))
{var inst_24325 = (state_24327[(2)]);var state_24327__$1 = state_24327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24327__$1,inst_24325);
} else
{if((state_val_24328 === (12)))
{var state_24327__$1 = state_24327;var statearr_24335_24357 = state_24327__$1;(statearr_24335_24357[(2)] = null);
(statearr_24335_24357[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (2)))
{var inst_24304 = (state_24327[(7)]);var state_24327__$1 = state_24327;if(cljs.core.truth_(inst_24304))
{var statearr_24336_24358 = state_24327__$1;(statearr_24336_24358[(1)] = (4));
} else
{var statearr_24337_24359 = state_24327__$1;(statearr_24337_24359[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (11)))
{var inst_24318 = cljs.core.async.close_BANG_.call(null,ch);var state_24327__$1 = state_24327;var statearr_24338_24360 = state_24327__$1;(statearr_24338_24360[(2)] = inst_24318);
(statearr_24338_24360[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (9)))
{var state_24327__$1 = state_24327;if(cljs.core.truth_(close_QMARK_))
{var statearr_24339_24361 = state_24327__$1;(statearr_24339_24361[(1)] = (11));
} else
{var statearr_24340_24362 = state_24327__$1;(statearr_24340_24362[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (5)))
{var inst_24304 = (state_24327[(7)]);var state_24327__$1 = state_24327;var statearr_24341_24363 = state_24327__$1;(statearr_24341_24363[(2)] = inst_24304);
(statearr_24341_24363[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (10)))
{var inst_24323 = (state_24327[(2)]);var state_24327__$1 = state_24327;var statearr_24342_24364 = state_24327__$1;(statearr_24342_24364[(2)] = inst_24323);
(statearr_24342_24364[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24328 === (8)))
{var inst_24304 = (state_24327[(7)]);var inst_24314 = cljs.core.next.call(null,inst_24304);var inst_24304__$1 = inst_24314;var state_24327__$1 = (function (){var statearr_24343 = state_24327;(statearr_24343[(7)] = inst_24304__$1);
return statearr_24343;
})();var statearr_24344_24365 = state_24327__$1;(statearr_24344_24365[(2)] = null);
(statearr_24344_24365[(1)] = (2));
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
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24348 = [null,null,null,null,null,null,null,null];(statearr_24348[(0)] = state_machine__9111__auto__);
(statearr_24348[(1)] = (1));
return statearr_24348;
});
var state_machine__9111__auto____1 = (function (state_24327){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24327);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24349){if((e24349 instanceof Object))
{var ex__9114__auto__ = e24349;var statearr_24350_24366 = state_24327;(statearr_24350_24366[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24327);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24367 = state_24327;
state_24327 = G__24367;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24327){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24351 = f__9126__auto__.call(null);(statearr_24351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24369 = {};return obj24369;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24371 = {};return obj24371;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24593 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24593 = (function (cs,ch,mult,meta24594){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24594 = meta24594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24593.cljs$lang$type = true;
cljs.core.async.t24593.cljs$lang$ctorStr = "cljs.core.async/t24593";
cljs.core.async.t24593.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24593");
});})(cs))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24593.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24593.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24595){var self__ = this;
var _24595__$1 = this;return self__.meta24594;
});})(cs))
;
cljs.core.async.t24593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24595,meta24594__$1){var self__ = this;
var _24595__$1 = this;return (new cljs.core.async.t24593(self__.cs,self__.ch,self__.mult,meta24594__$1));
});})(cs))
;
cljs.core.async.__GT_t24593 = ((function (cs){
return (function __GT_t24593(cs__$1,ch__$1,mult__$1,meta24594){return (new cljs.core.async.t24593(cs__$1,ch__$1,mult__$1,meta24594));
});})(cs))
;
}
return (new cljs.core.async.t24593(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24814 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24814,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24814,cs,m,dchan,dctr,done){
return (function (state_24726){var state_val_24727 = (state_24726[(1)]);if((state_val_24727 === (7)))
{var inst_24722 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24728_24815 = state_24726__$1;(statearr_24728_24815[(2)] = inst_24722);
(statearr_24728_24815[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (20)))
{var inst_24627 = (state_24726[(7)]);var inst_24637 = cljs.core.first.call(null,inst_24627);var inst_24638 = cljs.core.nth.call(null,inst_24637,(0),null);var inst_24639 = cljs.core.nth.call(null,inst_24637,(1),null);var state_24726__$1 = (function (){var statearr_24729 = state_24726;(statearr_24729[(8)] = inst_24638);
return statearr_24729;
})();if(cljs.core.truth_(inst_24639))
{var statearr_24730_24816 = state_24726__$1;(statearr_24730_24816[(1)] = (22));
} else
{var statearr_24731_24817 = state_24726__$1;(statearr_24731_24817[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (27)))
{var inst_24598 = (state_24726[(9)]);var inst_24667 = (state_24726[(10)]);var inst_24674 = (state_24726[(11)]);var inst_24669 = (state_24726[(12)]);var inst_24674__$1 = cljs.core._nth.call(null,inst_24667,inst_24669);var inst_24675 = cljs.core.async.put_BANG_.call(null,inst_24674__$1,inst_24598,done);var state_24726__$1 = (function (){var statearr_24732 = state_24726;(statearr_24732[(11)] = inst_24674__$1);
return statearr_24732;
})();if(cljs.core.truth_(inst_24675))
{var statearr_24733_24818 = state_24726__$1;(statearr_24733_24818[(1)] = (30));
} else
{var statearr_24734_24819 = state_24726__$1;(statearr_24734_24819[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (1)))
{var state_24726__$1 = state_24726;var statearr_24735_24820 = state_24726__$1;(statearr_24735_24820[(2)] = null);
(statearr_24735_24820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (24)))
{var inst_24627 = (state_24726[(7)]);var inst_24644 = (state_24726[(2)]);var inst_24645 = cljs.core.next.call(null,inst_24627);var inst_24607 = inst_24645;var inst_24608 = null;var inst_24609 = (0);var inst_24610 = (0);var state_24726__$1 = (function (){var statearr_24736 = state_24726;(statearr_24736[(13)] = inst_24609);
(statearr_24736[(14)] = inst_24644);
(statearr_24736[(15)] = inst_24607);
(statearr_24736[(16)] = inst_24608);
(statearr_24736[(17)] = inst_24610);
return statearr_24736;
})();var statearr_24737_24821 = state_24726__$1;(statearr_24737_24821[(2)] = null);
(statearr_24737_24821[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (39)))
{var state_24726__$1 = state_24726;var statearr_24741_24822 = state_24726__$1;(statearr_24741_24822[(2)] = null);
(statearr_24741_24822[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (4)))
{var inst_24598 = (state_24726[(9)]);var inst_24598__$1 = (state_24726[(2)]);var inst_24599 = (inst_24598__$1 == null);var state_24726__$1 = (function (){var statearr_24742 = state_24726;(statearr_24742[(9)] = inst_24598__$1);
return statearr_24742;
})();if(cljs.core.truth_(inst_24599))
{var statearr_24743_24823 = state_24726__$1;(statearr_24743_24823[(1)] = (5));
} else
{var statearr_24744_24824 = state_24726__$1;(statearr_24744_24824[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (15)))
{var inst_24609 = (state_24726[(13)]);var inst_24607 = (state_24726[(15)]);var inst_24608 = (state_24726[(16)]);var inst_24610 = (state_24726[(17)]);var inst_24623 = (state_24726[(2)]);var inst_24624 = (inst_24610 + (1));var tmp24738 = inst_24609;var tmp24739 = inst_24607;var tmp24740 = inst_24608;var inst_24607__$1 = tmp24739;var inst_24608__$1 = tmp24740;var inst_24609__$1 = tmp24738;var inst_24610__$1 = inst_24624;var state_24726__$1 = (function (){var statearr_24745 = state_24726;(statearr_24745[(18)] = inst_24623);
(statearr_24745[(13)] = inst_24609__$1);
(statearr_24745[(15)] = inst_24607__$1);
(statearr_24745[(16)] = inst_24608__$1);
(statearr_24745[(17)] = inst_24610__$1);
return statearr_24745;
})();var statearr_24746_24825 = state_24726__$1;(statearr_24746_24825[(2)] = null);
(statearr_24746_24825[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (21)))
{var inst_24648 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24750_24826 = state_24726__$1;(statearr_24750_24826[(2)] = inst_24648);
(statearr_24750_24826[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (31)))
{var inst_24674 = (state_24726[(11)]);var inst_24678 = done.call(null,null);var inst_24679 = cljs.core.async.untap_STAR_.call(null,m,inst_24674);var state_24726__$1 = (function (){var statearr_24751 = state_24726;(statearr_24751[(19)] = inst_24678);
return statearr_24751;
})();var statearr_24752_24827 = state_24726__$1;(statearr_24752_24827[(2)] = inst_24679);
(statearr_24752_24827[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (32)))
{var inst_24667 = (state_24726[(10)]);var inst_24668 = (state_24726[(20)]);var inst_24669 = (state_24726[(12)]);var inst_24666 = (state_24726[(21)]);var inst_24681 = (state_24726[(2)]);var inst_24682 = (inst_24669 + (1));var tmp24747 = inst_24667;var tmp24748 = inst_24668;var tmp24749 = inst_24666;var inst_24666__$1 = tmp24749;var inst_24667__$1 = tmp24747;var inst_24668__$1 = tmp24748;var inst_24669__$1 = inst_24682;var state_24726__$1 = (function (){var statearr_24753 = state_24726;(statearr_24753[(22)] = inst_24681);
(statearr_24753[(10)] = inst_24667__$1);
(statearr_24753[(20)] = inst_24668__$1);
(statearr_24753[(12)] = inst_24669__$1);
(statearr_24753[(21)] = inst_24666__$1);
return statearr_24753;
})();var statearr_24754_24828 = state_24726__$1;(statearr_24754_24828[(2)] = null);
(statearr_24754_24828[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (40)))
{var inst_24694 = (state_24726[(23)]);var inst_24698 = done.call(null,null);var inst_24699 = cljs.core.async.untap_STAR_.call(null,m,inst_24694);var state_24726__$1 = (function (){var statearr_24755 = state_24726;(statearr_24755[(24)] = inst_24698);
return statearr_24755;
})();var statearr_24756_24829 = state_24726__$1;(statearr_24756_24829[(2)] = inst_24699);
(statearr_24756_24829[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (33)))
{var inst_24685 = (state_24726[(25)]);var inst_24687 = cljs.core.chunked_seq_QMARK_.call(null,inst_24685);var state_24726__$1 = state_24726;if(inst_24687)
{var statearr_24757_24830 = state_24726__$1;(statearr_24757_24830[(1)] = (36));
} else
{var statearr_24758_24831 = state_24726__$1;(statearr_24758_24831[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (13)))
{var inst_24617 = (state_24726[(26)]);var inst_24620 = cljs.core.async.close_BANG_.call(null,inst_24617);var state_24726__$1 = state_24726;var statearr_24759_24832 = state_24726__$1;(statearr_24759_24832[(2)] = inst_24620);
(statearr_24759_24832[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (22)))
{var inst_24638 = (state_24726[(8)]);var inst_24641 = cljs.core.async.close_BANG_.call(null,inst_24638);var state_24726__$1 = state_24726;var statearr_24760_24833 = state_24726__$1;(statearr_24760_24833[(2)] = inst_24641);
(statearr_24760_24833[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (36)))
{var inst_24685 = (state_24726[(25)]);var inst_24689 = cljs.core.chunk_first.call(null,inst_24685);var inst_24690 = cljs.core.chunk_rest.call(null,inst_24685);var inst_24691 = cljs.core.count.call(null,inst_24689);var inst_24666 = inst_24690;var inst_24667 = inst_24689;var inst_24668 = inst_24691;var inst_24669 = (0);var state_24726__$1 = (function (){var statearr_24761 = state_24726;(statearr_24761[(10)] = inst_24667);
(statearr_24761[(20)] = inst_24668);
(statearr_24761[(12)] = inst_24669);
(statearr_24761[(21)] = inst_24666);
return statearr_24761;
})();var statearr_24762_24834 = state_24726__$1;(statearr_24762_24834[(2)] = null);
(statearr_24762_24834[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (41)))
{var inst_24685 = (state_24726[(25)]);var inst_24701 = (state_24726[(2)]);var inst_24702 = cljs.core.next.call(null,inst_24685);var inst_24666 = inst_24702;var inst_24667 = null;var inst_24668 = (0);var inst_24669 = (0);var state_24726__$1 = (function (){var statearr_24763 = state_24726;(statearr_24763[(27)] = inst_24701);
(statearr_24763[(10)] = inst_24667);
(statearr_24763[(20)] = inst_24668);
(statearr_24763[(12)] = inst_24669);
(statearr_24763[(21)] = inst_24666);
return statearr_24763;
})();var statearr_24764_24835 = state_24726__$1;(statearr_24764_24835[(2)] = null);
(statearr_24764_24835[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (43)))
{var state_24726__$1 = state_24726;var statearr_24765_24836 = state_24726__$1;(statearr_24765_24836[(2)] = null);
(statearr_24765_24836[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (29)))
{var inst_24710 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24766_24837 = state_24726__$1;(statearr_24766_24837[(2)] = inst_24710);
(statearr_24766_24837[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (44)))
{var inst_24719 = (state_24726[(2)]);var state_24726__$1 = (function (){var statearr_24767 = state_24726;(statearr_24767[(28)] = inst_24719);
return statearr_24767;
})();var statearr_24768_24838 = state_24726__$1;(statearr_24768_24838[(2)] = null);
(statearr_24768_24838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (6)))
{var inst_24658 = (state_24726[(29)]);var inst_24657 = cljs.core.deref.call(null,cs);var inst_24658__$1 = cljs.core.keys.call(null,inst_24657);var inst_24659 = cljs.core.count.call(null,inst_24658__$1);var inst_24660 = cljs.core.reset_BANG_.call(null,dctr,inst_24659);var inst_24665 = cljs.core.seq.call(null,inst_24658__$1);var inst_24666 = inst_24665;var inst_24667 = null;var inst_24668 = (0);var inst_24669 = (0);var state_24726__$1 = (function (){var statearr_24769 = state_24726;(statearr_24769[(30)] = inst_24660);
(statearr_24769[(10)] = inst_24667);
(statearr_24769[(20)] = inst_24668);
(statearr_24769[(12)] = inst_24669);
(statearr_24769[(21)] = inst_24666);
(statearr_24769[(29)] = inst_24658__$1);
return statearr_24769;
})();var statearr_24770_24839 = state_24726__$1;(statearr_24770_24839[(2)] = null);
(statearr_24770_24839[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (28)))
{var inst_24685 = (state_24726[(25)]);var inst_24666 = (state_24726[(21)]);var inst_24685__$1 = cljs.core.seq.call(null,inst_24666);var state_24726__$1 = (function (){var statearr_24771 = state_24726;(statearr_24771[(25)] = inst_24685__$1);
return statearr_24771;
})();if(inst_24685__$1)
{var statearr_24772_24840 = state_24726__$1;(statearr_24772_24840[(1)] = (33));
} else
{var statearr_24773_24841 = state_24726__$1;(statearr_24773_24841[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (25)))
{var inst_24668 = (state_24726[(20)]);var inst_24669 = (state_24726[(12)]);var inst_24671 = (inst_24669 < inst_24668);var inst_24672 = inst_24671;var state_24726__$1 = state_24726;if(cljs.core.truth_(inst_24672))
{var statearr_24774_24842 = state_24726__$1;(statearr_24774_24842[(1)] = (27));
} else
{var statearr_24775_24843 = state_24726__$1;(statearr_24775_24843[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (34)))
{var state_24726__$1 = state_24726;var statearr_24776_24844 = state_24726__$1;(statearr_24776_24844[(2)] = null);
(statearr_24776_24844[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (17)))
{var state_24726__$1 = state_24726;var statearr_24777_24845 = state_24726__$1;(statearr_24777_24845[(2)] = null);
(statearr_24777_24845[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (3)))
{var inst_24724 = (state_24726[(2)]);var state_24726__$1 = state_24726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24726__$1,inst_24724);
} else
{if((state_val_24727 === (12)))
{var inst_24653 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24778_24846 = state_24726__$1;(statearr_24778_24846[(2)] = inst_24653);
(statearr_24778_24846[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (2)))
{var state_24726__$1 = state_24726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24726__$1,(4),ch);
} else
{if((state_val_24727 === (23)))
{var state_24726__$1 = state_24726;var statearr_24779_24847 = state_24726__$1;(statearr_24779_24847[(2)] = null);
(statearr_24779_24847[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (35)))
{var inst_24708 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24780_24848 = state_24726__$1;(statearr_24780_24848[(2)] = inst_24708);
(statearr_24780_24848[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (19)))
{var inst_24627 = (state_24726[(7)]);var inst_24631 = cljs.core.chunk_first.call(null,inst_24627);var inst_24632 = cljs.core.chunk_rest.call(null,inst_24627);var inst_24633 = cljs.core.count.call(null,inst_24631);var inst_24607 = inst_24632;var inst_24608 = inst_24631;var inst_24609 = inst_24633;var inst_24610 = (0);var state_24726__$1 = (function (){var statearr_24781 = state_24726;(statearr_24781[(13)] = inst_24609);
(statearr_24781[(15)] = inst_24607);
(statearr_24781[(16)] = inst_24608);
(statearr_24781[(17)] = inst_24610);
return statearr_24781;
})();var statearr_24782_24849 = state_24726__$1;(statearr_24782_24849[(2)] = null);
(statearr_24782_24849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (11)))
{var inst_24627 = (state_24726[(7)]);var inst_24607 = (state_24726[(15)]);var inst_24627__$1 = cljs.core.seq.call(null,inst_24607);var state_24726__$1 = (function (){var statearr_24783 = state_24726;(statearr_24783[(7)] = inst_24627__$1);
return statearr_24783;
})();if(inst_24627__$1)
{var statearr_24784_24850 = state_24726__$1;(statearr_24784_24850[(1)] = (16));
} else
{var statearr_24785_24851 = state_24726__$1;(statearr_24785_24851[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (9)))
{var inst_24655 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24786_24852 = state_24726__$1;(statearr_24786_24852[(2)] = inst_24655);
(statearr_24786_24852[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (5)))
{var inst_24605 = cljs.core.deref.call(null,cs);var inst_24606 = cljs.core.seq.call(null,inst_24605);var inst_24607 = inst_24606;var inst_24608 = null;var inst_24609 = (0);var inst_24610 = (0);var state_24726__$1 = (function (){var statearr_24787 = state_24726;(statearr_24787[(13)] = inst_24609);
(statearr_24787[(15)] = inst_24607);
(statearr_24787[(16)] = inst_24608);
(statearr_24787[(17)] = inst_24610);
return statearr_24787;
})();var statearr_24788_24853 = state_24726__$1;(statearr_24788_24853[(2)] = null);
(statearr_24788_24853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (14)))
{var state_24726__$1 = state_24726;var statearr_24789_24854 = state_24726__$1;(statearr_24789_24854[(2)] = null);
(statearr_24789_24854[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (45)))
{var inst_24716 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24790_24855 = state_24726__$1;(statearr_24790_24855[(2)] = inst_24716);
(statearr_24790_24855[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (26)))
{var inst_24658 = (state_24726[(29)]);var inst_24712 = (state_24726[(2)]);var inst_24713 = cljs.core.seq.call(null,inst_24658);var state_24726__$1 = (function (){var statearr_24791 = state_24726;(statearr_24791[(31)] = inst_24712);
return statearr_24791;
})();if(inst_24713)
{var statearr_24792_24856 = state_24726__$1;(statearr_24792_24856[(1)] = (42));
} else
{var statearr_24793_24857 = state_24726__$1;(statearr_24793_24857[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (16)))
{var inst_24627 = (state_24726[(7)]);var inst_24629 = cljs.core.chunked_seq_QMARK_.call(null,inst_24627);var state_24726__$1 = state_24726;if(inst_24629)
{var statearr_24794_24858 = state_24726__$1;(statearr_24794_24858[(1)] = (19));
} else
{var statearr_24795_24859 = state_24726__$1;(statearr_24795_24859[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (38)))
{var inst_24705 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24796_24860 = state_24726__$1;(statearr_24796_24860[(2)] = inst_24705);
(statearr_24796_24860[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (30)))
{var state_24726__$1 = state_24726;var statearr_24797_24861 = state_24726__$1;(statearr_24797_24861[(2)] = null);
(statearr_24797_24861[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (10)))
{var inst_24608 = (state_24726[(16)]);var inst_24610 = (state_24726[(17)]);var inst_24616 = cljs.core._nth.call(null,inst_24608,inst_24610);var inst_24617 = cljs.core.nth.call(null,inst_24616,(0),null);var inst_24618 = cljs.core.nth.call(null,inst_24616,(1),null);var state_24726__$1 = (function (){var statearr_24798 = state_24726;(statearr_24798[(26)] = inst_24617);
return statearr_24798;
})();if(cljs.core.truth_(inst_24618))
{var statearr_24799_24862 = state_24726__$1;(statearr_24799_24862[(1)] = (13));
} else
{var statearr_24800_24863 = state_24726__$1;(statearr_24800_24863[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (18)))
{var inst_24651 = (state_24726[(2)]);var state_24726__$1 = state_24726;var statearr_24801_24864 = state_24726__$1;(statearr_24801_24864[(2)] = inst_24651);
(statearr_24801_24864[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (42)))
{var state_24726__$1 = state_24726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24726__$1,(45),dchan);
} else
{if((state_val_24727 === (37)))
{var inst_24598 = (state_24726[(9)]);var inst_24694 = (state_24726[(23)]);var inst_24685 = (state_24726[(25)]);var inst_24694__$1 = cljs.core.first.call(null,inst_24685);var inst_24695 = cljs.core.async.put_BANG_.call(null,inst_24694__$1,inst_24598,done);var state_24726__$1 = (function (){var statearr_24802 = state_24726;(statearr_24802[(23)] = inst_24694__$1);
return statearr_24802;
})();if(cljs.core.truth_(inst_24695))
{var statearr_24803_24865 = state_24726__$1;(statearr_24803_24865[(1)] = (39));
} else
{var statearr_24804_24866 = state_24726__$1;(statearr_24804_24866[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24727 === (8)))
{var inst_24609 = (state_24726[(13)]);var inst_24610 = (state_24726[(17)]);var inst_24612 = (inst_24610 < inst_24609);var inst_24613 = inst_24612;var state_24726__$1 = state_24726;if(cljs.core.truth_(inst_24613))
{var statearr_24805_24867 = state_24726__$1;(statearr_24805_24867[(1)] = (10));
} else
{var statearr_24806_24868 = state_24726__$1;(statearr_24806_24868[(1)] = (11));
}
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
});})(c__9125__auto___24814,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24814,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24810[(0)] = state_machine__9111__auto__);
(statearr_24810[(1)] = (1));
return statearr_24810;
});
var state_machine__9111__auto____1 = (function (state_24726){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24726);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24811){if((e24811 instanceof Object))
{var ex__9114__auto__ = e24811;var statearr_24812_24869 = state_24726;(statearr_24812_24869[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24726);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24870 = state_24726;
state_24726 = G__24870;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24726){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24814,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24813 = f__9126__auto__.call(null);(statearr_24813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24814);
return statearr_24813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24814,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj24872 = {};return obj24872;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24873){var map__24878 = p__24873;var map__24878__$1 = ((cljs.core.seq_QMARK_.call(null,map__24878))?cljs.core.apply.call(null,cljs.core.hash_map,map__24878):map__24878);var opts = map__24878__$1;var statearr_24879_24882 = state;(statearr_24879_24882[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24878,map__24878__$1,opts){
return (function (val){var statearr_24880_24883 = state;(statearr_24880_24883[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24878,map__24878__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24881_24884 = state;(statearr_24881_24884[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24873 = null;if (arguments.length > 3) {
  p__24873 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24873);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24885){
var state = cljs.core.first(arglist__24885);
arglist__24885 = cljs.core.next(arglist__24885);
var cont_block = cljs.core.first(arglist__24885);
arglist__24885 = cljs.core.next(arglist__24885);
var ports = cljs.core.first(arglist__24885);
var p__24873 = cljs.core.rest(arglist__24885);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24873);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25005 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25005 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25006){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25006 = meta25006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25005.cljs$lang$type = true;
cljs.core.async.t25005.cljs$lang$ctorStr = "cljs.core.async/t25005";
cljs.core.async.t25005.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25005");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25005.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25007){var self__ = this;
var _25007__$1 = this;return self__.meta25006;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25007,meta25006__$1){var self__ = this;
var _25007__$1 = this;return (new cljs.core.async.t25005(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25006__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25005 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25005(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25006){return (new cljs.core.async.t25005(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25006));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25005(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25124 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25077){var state_val_25078 = (state_25077[(1)]);if((state_val_25078 === (7)))
{var inst_25021 = (state_25077[(7)]);var inst_25026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25021);var state_25077__$1 = state_25077;var statearr_25079_25125 = state_25077__$1;(statearr_25079_25125[(2)] = inst_25026);
(statearr_25079_25125[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (20)))
{var inst_25036 = (state_25077[(8)]);var state_25077__$1 = state_25077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25077__$1,(23),out,inst_25036);
} else
{if((state_val_25078 === (1)))
{var inst_25011 = (state_25077[(9)]);var inst_25011__$1 = calc_state.call(null);var inst_25012 = cljs.core.seq_QMARK_.call(null,inst_25011__$1);var state_25077__$1 = (function (){var statearr_25080 = state_25077;(statearr_25080[(9)] = inst_25011__$1);
return statearr_25080;
})();if(inst_25012)
{var statearr_25081_25126 = state_25077__$1;(statearr_25081_25126[(1)] = (2));
} else
{var statearr_25082_25127 = state_25077__$1;(statearr_25082_25127[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (24)))
{var inst_25029 = (state_25077[(10)]);var inst_25021 = inst_25029;var state_25077__$1 = (function (){var statearr_25083 = state_25077;(statearr_25083[(7)] = inst_25021);
return statearr_25083;
})();var statearr_25084_25128 = state_25077__$1;(statearr_25084_25128[(2)] = null);
(statearr_25084_25128[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (4)))
{var inst_25011 = (state_25077[(9)]);var inst_25017 = (state_25077[(2)]);var inst_25018 = cljs.core.get.call(null,inst_25017,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25019 = cljs.core.get.call(null,inst_25017,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25020 = cljs.core.get.call(null,inst_25017,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25021 = inst_25011;var state_25077__$1 = (function (){var statearr_25085 = state_25077;(statearr_25085[(11)] = inst_25018);
(statearr_25085[(12)] = inst_25019);
(statearr_25085[(13)] = inst_25020);
(statearr_25085[(7)] = inst_25021);
return statearr_25085;
})();var statearr_25086_25129 = state_25077__$1;(statearr_25086_25129[(2)] = null);
(statearr_25086_25129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (15)))
{var state_25077__$1 = state_25077;var statearr_25087_25130 = state_25077__$1;(statearr_25087_25130[(2)] = null);
(statearr_25087_25130[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (21)))
{var inst_25029 = (state_25077[(10)]);var inst_25021 = inst_25029;var state_25077__$1 = (function (){var statearr_25088 = state_25077;(statearr_25088[(7)] = inst_25021);
return statearr_25088;
})();var statearr_25089_25131 = state_25077__$1;(statearr_25089_25131[(2)] = null);
(statearr_25089_25131[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (13)))
{var inst_25073 = (state_25077[(2)]);var state_25077__$1 = state_25077;var statearr_25090_25132 = state_25077__$1;(statearr_25090_25132[(2)] = inst_25073);
(statearr_25090_25132[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (22)))
{var inst_25071 = (state_25077[(2)]);var state_25077__$1 = state_25077;var statearr_25091_25133 = state_25077__$1;(statearr_25091_25133[(2)] = inst_25071);
(statearr_25091_25133[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (6)))
{var inst_25075 = (state_25077[(2)]);var state_25077__$1 = state_25077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25077__$1,inst_25075);
} else
{if((state_val_25078 === (25)))
{var state_25077__$1 = state_25077;var statearr_25092_25134 = state_25077__$1;(statearr_25092_25134[(2)] = null);
(statearr_25092_25134[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (17)))
{var inst_25051 = (state_25077[(14)]);var state_25077__$1 = state_25077;var statearr_25093_25135 = state_25077__$1;(statearr_25093_25135[(2)] = inst_25051);
(statearr_25093_25135[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (3)))
{var inst_25011 = (state_25077[(9)]);var state_25077__$1 = state_25077;var statearr_25094_25136 = state_25077__$1;(statearr_25094_25136[(2)] = inst_25011);
(statearr_25094_25136[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (12)))
{var inst_25037 = (state_25077[(15)]);var inst_25051 = (state_25077[(14)]);var inst_25032 = (state_25077[(16)]);var inst_25051__$1 = inst_25032.call(null,inst_25037);var state_25077__$1 = (function (){var statearr_25095 = state_25077;(statearr_25095[(14)] = inst_25051__$1);
return statearr_25095;
})();if(cljs.core.truth_(inst_25051__$1))
{var statearr_25096_25137 = state_25077__$1;(statearr_25096_25137[(1)] = (17));
} else
{var statearr_25097_25138 = state_25077__$1;(statearr_25097_25138[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (2)))
{var inst_25011 = (state_25077[(9)]);var inst_25014 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25011);var state_25077__$1 = state_25077;var statearr_25098_25139 = state_25077__$1;(statearr_25098_25139[(2)] = inst_25014);
(statearr_25098_25139[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (23)))
{var inst_25062 = (state_25077[(2)]);var state_25077__$1 = state_25077;if(cljs.core.truth_(inst_25062))
{var statearr_25099_25140 = state_25077__$1;(statearr_25099_25140[(1)] = (24));
} else
{var statearr_25100_25141 = state_25077__$1;(statearr_25100_25141[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (19)))
{var inst_25059 = (state_25077[(2)]);var state_25077__$1 = state_25077;if(cljs.core.truth_(inst_25059))
{var statearr_25101_25142 = state_25077__$1;(statearr_25101_25142[(1)] = (20));
} else
{var statearr_25102_25143 = state_25077__$1;(statearr_25102_25143[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (11)))
{var inst_25036 = (state_25077[(8)]);var inst_25042 = (inst_25036 == null);var state_25077__$1 = state_25077;if(cljs.core.truth_(inst_25042))
{var statearr_25103_25144 = state_25077__$1;(statearr_25103_25144[(1)] = (14));
} else
{var statearr_25104_25145 = state_25077__$1;(statearr_25104_25145[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (9)))
{var inst_25029 = (state_25077[(10)]);var inst_25029__$1 = (state_25077[(2)]);var inst_25030 = cljs.core.get.call(null,inst_25029__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25031 = cljs.core.get.call(null,inst_25029__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25032 = cljs.core.get.call(null,inst_25029__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25077__$1 = (function (){var statearr_25105 = state_25077;(statearr_25105[(17)] = inst_25031);
(statearr_25105[(10)] = inst_25029__$1);
(statearr_25105[(16)] = inst_25032);
return statearr_25105;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25077__$1,(10),inst_25030);
} else
{if((state_val_25078 === (5)))
{var inst_25021 = (state_25077[(7)]);var inst_25024 = cljs.core.seq_QMARK_.call(null,inst_25021);var state_25077__$1 = state_25077;if(inst_25024)
{var statearr_25106_25146 = state_25077__$1;(statearr_25106_25146[(1)] = (7));
} else
{var statearr_25107_25147 = state_25077__$1;(statearr_25107_25147[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (14)))
{var inst_25037 = (state_25077[(15)]);var inst_25044 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25037);var state_25077__$1 = state_25077;var statearr_25108_25148 = state_25077__$1;(statearr_25108_25148[(2)] = inst_25044);
(statearr_25108_25148[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (26)))
{var inst_25067 = (state_25077[(2)]);var state_25077__$1 = state_25077;var statearr_25109_25149 = state_25077__$1;(statearr_25109_25149[(2)] = inst_25067);
(statearr_25109_25149[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (16)))
{var inst_25047 = (state_25077[(2)]);var inst_25048 = calc_state.call(null);var inst_25021 = inst_25048;var state_25077__$1 = (function (){var statearr_25110 = state_25077;(statearr_25110[(18)] = inst_25047);
(statearr_25110[(7)] = inst_25021);
return statearr_25110;
})();var statearr_25111_25150 = state_25077__$1;(statearr_25111_25150[(2)] = null);
(statearr_25111_25150[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (10)))
{var inst_25037 = (state_25077[(15)]);var inst_25036 = (state_25077[(8)]);var inst_25035 = (state_25077[(2)]);var inst_25036__$1 = cljs.core.nth.call(null,inst_25035,(0),null);var inst_25037__$1 = cljs.core.nth.call(null,inst_25035,(1),null);var inst_25038 = (inst_25036__$1 == null);var inst_25039 = cljs.core._EQ_.call(null,inst_25037__$1,change);var inst_25040 = (inst_25038) || (inst_25039);var state_25077__$1 = (function (){var statearr_25112 = state_25077;(statearr_25112[(15)] = inst_25037__$1);
(statearr_25112[(8)] = inst_25036__$1);
return statearr_25112;
})();if(cljs.core.truth_(inst_25040))
{var statearr_25113_25151 = state_25077__$1;(statearr_25113_25151[(1)] = (11));
} else
{var statearr_25114_25152 = state_25077__$1;(statearr_25114_25152[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (18)))
{var inst_25031 = (state_25077[(17)]);var inst_25037 = (state_25077[(15)]);var inst_25032 = (state_25077[(16)]);var inst_25054 = cljs.core.empty_QMARK_.call(null,inst_25032);var inst_25055 = inst_25031.call(null,inst_25037);var inst_25056 = cljs.core.not.call(null,inst_25055);var inst_25057 = (inst_25054) && (inst_25056);var state_25077__$1 = state_25077;var statearr_25115_25153 = state_25077__$1;(statearr_25115_25153[(2)] = inst_25057);
(statearr_25115_25153[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25078 === (8)))
{var inst_25021 = (state_25077[(7)]);var state_25077__$1 = state_25077;var statearr_25116_25154 = state_25077__$1;(statearr_25116_25154[(2)] = inst_25021);
(statearr_25116_25154[(1)] = (9));
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
}
}
}
});})(c__9125__auto___25124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25120[(0)] = state_machine__9111__auto__);
(statearr_25120[(1)] = (1));
return statearr_25120;
});
var state_machine__9111__auto____1 = (function (state_25077){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25077);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25121){if((e25121 instanceof Object))
{var ex__9114__auto__ = e25121;var statearr_25122_25155 = state_25077;(statearr_25122_25155[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25121;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25156 = state_25077;
state_25077 = G__25156;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25077){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25123 = f__9126__auto__.call(null);(statearr_25123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25124);
return statearr_25123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25124,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj25158 = {};return obj25158;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__25159_SHARP_){if(cljs.core.truth_(p1__25159_SHARP_.call(null,topic)))
{return p1__25159_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25159_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25282 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25283){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25283 = meta25283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25282.cljs$lang$type = true;
cljs.core.async.t25282.cljs$lang$ctorStr = "cljs.core.async/t25282";
cljs.core.async.t25282.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25282");
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25284){var self__ = this;
var _25284__$1 = this;return self__.meta25283;
});})(mults,ensure_mult))
;
cljs.core.async.t25282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25284,meta25283__$1){var self__ = this;
var _25284__$1 = this;return (new cljs.core.async.t25282(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25283__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25282 = ((function (mults,ensure_mult){
return (function __GT_t25282(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25283){return (new cljs.core.async.t25282(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25283));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25282(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25404 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25404,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25404,mults,ensure_mult,p){
return (function (state_25356){var state_val_25357 = (state_25356[(1)]);if((state_val_25357 === (7)))
{var inst_25352 = (state_25356[(2)]);var state_25356__$1 = state_25356;var statearr_25358_25405 = state_25356__$1;(statearr_25358_25405[(2)] = inst_25352);
(statearr_25358_25405[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (20)))
{var state_25356__$1 = state_25356;var statearr_25359_25406 = state_25356__$1;(statearr_25359_25406[(2)] = null);
(statearr_25359_25406[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (1)))
{var state_25356__$1 = state_25356;var statearr_25360_25407 = state_25356__$1;(statearr_25360_25407[(2)] = null);
(statearr_25360_25407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (24)))
{var inst_25335 = (state_25356[(7)]);var inst_25344 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25335);var state_25356__$1 = state_25356;var statearr_25361_25408 = state_25356__$1;(statearr_25361_25408[(2)] = inst_25344);
(statearr_25361_25408[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (4)))
{var inst_25287 = (state_25356[(8)]);var inst_25287__$1 = (state_25356[(2)]);var inst_25288 = (inst_25287__$1 == null);var state_25356__$1 = (function (){var statearr_25362 = state_25356;(statearr_25362[(8)] = inst_25287__$1);
return statearr_25362;
})();if(cljs.core.truth_(inst_25288))
{var statearr_25363_25409 = state_25356__$1;(statearr_25363_25409[(1)] = (5));
} else
{var statearr_25364_25410 = state_25356__$1;(statearr_25364_25410[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (15)))
{var inst_25329 = (state_25356[(2)]);var state_25356__$1 = state_25356;var statearr_25365_25411 = state_25356__$1;(statearr_25365_25411[(2)] = inst_25329);
(statearr_25365_25411[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (21)))
{var inst_25349 = (state_25356[(2)]);var state_25356__$1 = (function (){var statearr_25366 = state_25356;(statearr_25366[(9)] = inst_25349);
return statearr_25366;
})();var statearr_25367_25412 = state_25356__$1;(statearr_25367_25412[(2)] = null);
(statearr_25367_25412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (13)))
{var inst_25311 = (state_25356[(10)]);var inst_25313 = cljs.core.chunked_seq_QMARK_.call(null,inst_25311);var state_25356__$1 = state_25356;if(inst_25313)
{var statearr_25368_25413 = state_25356__$1;(statearr_25368_25413[(1)] = (16));
} else
{var statearr_25369_25414 = state_25356__$1;(statearr_25369_25414[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (22)))
{var inst_25341 = (state_25356[(2)]);var state_25356__$1 = state_25356;if(cljs.core.truth_(inst_25341))
{var statearr_25370_25415 = state_25356__$1;(statearr_25370_25415[(1)] = (23));
} else
{var statearr_25371_25416 = state_25356__$1;(statearr_25371_25416[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (6)))
{var inst_25337 = (state_25356[(11)]);var inst_25335 = (state_25356[(7)]);var inst_25287 = (state_25356[(8)]);var inst_25335__$1 = topic_fn.call(null,inst_25287);var inst_25336 = cljs.core.deref.call(null,mults);var inst_25337__$1 = cljs.core.get.call(null,inst_25336,inst_25335__$1);var state_25356__$1 = (function (){var statearr_25372 = state_25356;(statearr_25372[(11)] = inst_25337__$1);
(statearr_25372[(7)] = inst_25335__$1);
return statearr_25372;
})();if(cljs.core.truth_(inst_25337__$1))
{var statearr_25373_25417 = state_25356__$1;(statearr_25373_25417[(1)] = (19));
} else
{var statearr_25374_25418 = state_25356__$1;(statearr_25374_25418[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (25)))
{var inst_25346 = (state_25356[(2)]);var state_25356__$1 = state_25356;var statearr_25375_25419 = state_25356__$1;(statearr_25375_25419[(2)] = inst_25346);
(statearr_25375_25419[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (17)))
{var inst_25311 = (state_25356[(10)]);var inst_25320 = cljs.core.first.call(null,inst_25311);var inst_25321 = cljs.core.async.muxch_STAR_.call(null,inst_25320);var inst_25322 = cljs.core.async.close_BANG_.call(null,inst_25321);var inst_25323 = cljs.core.next.call(null,inst_25311);var inst_25297 = inst_25323;var inst_25298 = null;var inst_25299 = (0);var inst_25300 = (0);var state_25356__$1 = (function (){var statearr_25376 = state_25356;(statearr_25376[(12)] = inst_25300);
(statearr_25376[(13)] = inst_25322);
(statearr_25376[(14)] = inst_25298);
(statearr_25376[(15)] = inst_25297);
(statearr_25376[(16)] = inst_25299);
return statearr_25376;
})();var statearr_25377_25420 = state_25356__$1;(statearr_25377_25420[(2)] = null);
(statearr_25377_25420[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (3)))
{var inst_25354 = (state_25356[(2)]);var state_25356__$1 = state_25356;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25356__$1,inst_25354);
} else
{if((state_val_25357 === (12)))
{var inst_25331 = (state_25356[(2)]);var state_25356__$1 = state_25356;var statearr_25378_25421 = state_25356__$1;(statearr_25378_25421[(2)] = inst_25331);
(statearr_25378_25421[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (2)))
{var state_25356__$1 = state_25356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25356__$1,(4),ch);
} else
{if((state_val_25357 === (23)))
{var state_25356__$1 = state_25356;var statearr_25379_25422 = state_25356__$1;(statearr_25379_25422[(2)] = null);
(statearr_25379_25422[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (19)))
{var inst_25337 = (state_25356[(11)]);var inst_25287 = (state_25356[(8)]);var inst_25339 = cljs.core.async.muxch_STAR_.call(null,inst_25337);var state_25356__$1 = state_25356;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25356__$1,(22),inst_25339,inst_25287);
} else
{if((state_val_25357 === (11)))
{var inst_25297 = (state_25356[(15)]);var inst_25311 = (state_25356[(10)]);var inst_25311__$1 = cljs.core.seq.call(null,inst_25297);var state_25356__$1 = (function (){var statearr_25380 = state_25356;(statearr_25380[(10)] = inst_25311__$1);
return statearr_25380;
})();if(inst_25311__$1)
{var statearr_25381_25423 = state_25356__$1;(statearr_25381_25423[(1)] = (13));
} else
{var statearr_25382_25424 = state_25356__$1;(statearr_25382_25424[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (9)))
{var inst_25333 = (state_25356[(2)]);var state_25356__$1 = state_25356;var statearr_25383_25425 = state_25356__$1;(statearr_25383_25425[(2)] = inst_25333);
(statearr_25383_25425[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (5)))
{var inst_25294 = cljs.core.deref.call(null,mults);var inst_25295 = cljs.core.vals.call(null,inst_25294);var inst_25296 = cljs.core.seq.call(null,inst_25295);var inst_25297 = inst_25296;var inst_25298 = null;var inst_25299 = (0);var inst_25300 = (0);var state_25356__$1 = (function (){var statearr_25384 = state_25356;(statearr_25384[(12)] = inst_25300);
(statearr_25384[(14)] = inst_25298);
(statearr_25384[(15)] = inst_25297);
(statearr_25384[(16)] = inst_25299);
return statearr_25384;
})();var statearr_25385_25426 = state_25356__$1;(statearr_25385_25426[(2)] = null);
(statearr_25385_25426[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (14)))
{var state_25356__$1 = state_25356;var statearr_25389_25427 = state_25356__$1;(statearr_25389_25427[(2)] = null);
(statearr_25389_25427[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (16)))
{var inst_25311 = (state_25356[(10)]);var inst_25315 = cljs.core.chunk_first.call(null,inst_25311);var inst_25316 = cljs.core.chunk_rest.call(null,inst_25311);var inst_25317 = cljs.core.count.call(null,inst_25315);var inst_25297 = inst_25316;var inst_25298 = inst_25315;var inst_25299 = inst_25317;var inst_25300 = (0);var state_25356__$1 = (function (){var statearr_25390 = state_25356;(statearr_25390[(12)] = inst_25300);
(statearr_25390[(14)] = inst_25298);
(statearr_25390[(15)] = inst_25297);
(statearr_25390[(16)] = inst_25299);
return statearr_25390;
})();var statearr_25391_25428 = state_25356__$1;(statearr_25391_25428[(2)] = null);
(statearr_25391_25428[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (10)))
{var inst_25300 = (state_25356[(12)]);var inst_25298 = (state_25356[(14)]);var inst_25297 = (state_25356[(15)]);var inst_25299 = (state_25356[(16)]);var inst_25305 = cljs.core._nth.call(null,inst_25298,inst_25300);var inst_25306 = cljs.core.async.muxch_STAR_.call(null,inst_25305);var inst_25307 = cljs.core.async.close_BANG_.call(null,inst_25306);var inst_25308 = (inst_25300 + (1));var tmp25386 = inst_25298;var tmp25387 = inst_25297;var tmp25388 = inst_25299;var inst_25297__$1 = tmp25387;var inst_25298__$1 = tmp25386;var inst_25299__$1 = tmp25388;var inst_25300__$1 = inst_25308;var state_25356__$1 = (function (){var statearr_25392 = state_25356;(statearr_25392[(17)] = inst_25307);
(statearr_25392[(12)] = inst_25300__$1);
(statearr_25392[(14)] = inst_25298__$1);
(statearr_25392[(15)] = inst_25297__$1);
(statearr_25392[(16)] = inst_25299__$1);
return statearr_25392;
})();var statearr_25393_25429 = state_25356__$1;(statearr_25393_25429[(2)] = null);
(statearr_25393_25429[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (18)))
{var inst_25326 = (state_25356[(2)]);var state_25356__$1 = state_25356;var statearr_25394_25430 = state_25356__$1;(statearr_25394_25430[(2)] = inst_25326);
(statearr_25394_25430[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25357 === (8)))
{var inst_25300 = (state_25356[(12)]);var inst_25299 = (state_25356[(16)]);var inst_25302 = (inst_25300 < inst_25299);var inst_25303 = inst_25302;var state_25356__$1 = state_25356;if(cljs.core.truth_(inst_25303))
{var statearr_25395_25431 = state_25356__$1;(statearr_25395_25431[(1)] = (10));
} else
{var statearr_25396_25432 = state_25356__$1;(statearr_25396_25432[(1)] = (11));
}
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
}
}
});})(c__9125__auto___25404,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25404,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25400[(0)] = state_machine__9111__auto__);
(statearr_25400[(1)] = (1));
return statearr_25400;
});
var state_machine__9111__auto____1 = (function (state_25356){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25356);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25401){if((e25401 instanceof Object))
{var ex__9114__auto__ = e25401;var statearr_25402_25433 = state_25356;(statearr_25402_25433[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25356);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25401;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25434 = state_25356;
state_25356 = G__25434;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25356){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25404,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25403 = f__9126__auto__.call(null);(statearr_25403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25404);
return statearr_25403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25404,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9125__auto___25571 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25541){var state_val_25542 = (state_25541[(1)]);if((state_val_25542 === (7)))
{var state_25541__$1 = state_25541;var statearr_25543_25572 = state_25541__$1;(statearr_25543_25572[(2)] = null);
(statearr_25543_25572[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (1)))
{var state_25541__$1 = state_25541;var statearr_25544_25573 = state_25541__$1;(statearr_25544_25573[(2)] = null);
(statearr_25544_25573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (4)))
{var inst_25505 = (state_25541[(7)]);var inst_25507 = (inst_25505 < cnt);var state_25541__$1 = state_25541;if(cljs.core.truth_(inst_25507))
{var statearr_25545_25574 = state_25541__$1;(statearr_25545_25574[(1)] = (6));
} else
{var statearr_25546_25575 = state_25541__$1;(statearr_25546_25575[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (15)))
{var inst_25537 = (state_25541[(2)]);var state_25541__$1 = state_25541;var statearr_25547_25576 = state_25541__$1;(statearr_25547_25576[(2)] = inst_25537);
(statearr_25547_25576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (13)))
{var inst_25530 = cljs.core.async.close_BANG_.call(null,out);var state_25541__$1 = state_25541;var statearr_25548_25577 = state_25541__$1;(statearr_25548_25577[(2)] = inst_25530);
(statearr_25548_25577[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (6)))
{var state_25541__$1 = state_25541;var statearr_25549_25578 = state_25541__$1;(statearr_25549_25578[(2)] = null);
(statearr_25549_25578[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (3)))
{var inst_25539 = (state_25541[(2)]);var state_25541__$1 = state_25541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25541__$1,inst_25539);
} else
{if((state_val_25542 === (12)))
{var inst_25527 = (state_25541[(8)]);var inst_25527__$1 = (state_25541[(2)]);var inst_25528 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25527__$1);var state_25541__$1 = (function (){var statearr_25550 = state_25541;(statearr_25550[(8)] = inst_25527__$1);
return statearr_25550;
})();if(cljs.core.truth_(inst_25528))
{var statearr_25551_25579 = state_25541__$1;(statearr_25551_25579[(1)] = (13));
} else
{var statearr_25552_25580 = state_25541__$1;(statearr_25552_25580[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (2)))
{var inst_25504 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25505 = (0);var state_25541__$1 = (function (){var statearr_25553 = state_25541;(statearr_25553[(7)] = inst_25505);
(statearr_25553[(9)] = inst_25504);
return statearr_25553;
})();var statearr_25554_25581 = state_25541__$1;(statearr_25554_25581[(2)] = null);
(statearr_25554_25581[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (11)))
{var inst_25505 = (state_25541[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25541,(10),Object,null,(9));var inst_25514 = chs__$1.call(null,inst_25505);var inst_25515 = done.call(null,inst_25505);var inst_25516 = cljs.core.async.take_BANG_.call(null,inst_25514,inst_25515);var state_25541__$1 = state_25541;var statearr_25555_25582 = state_25541__$1;(statearr_25555_25582[(2)] = inst_25516);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25541__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (9)))
{var inst_25505 = (state_25541[(7)]);var inst_25518 = (state_25541[(2)]);var inst_25519 = (inst_25505 + (1));var inst_25505__$1 = inst_25519;var state_25541__$1 = (function (){var statearr_25556 = state_25541;(statearr_25556[(10)] = inst_25518);
(statearr_25556[(7)] = inst_25505__$1);
return statearr_25556;
})();var statearr_25557_25583 = state_25541__$1;(statearr_25557_25583[(2)] = null);
(statearr_25557_25583[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (5)))
{var inst_25525 = (state_25541[(2)]);var state_25541__$1 = (function (){var statearr_25558 = state_25541;(statearr_25558[(11)] = inst_25525);
return statearr_25558;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(12),dchan);
} else
{if((state_val_25542 === (14)))
{var inst_25527 = (state_25541[(8)]);var inst_25532 = cljs.core.apply.call(null,f,inst_25527);var state_25541__$1 = state_25541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25541__$1,(16),out,inst_25532);
} else
{if((state_val_25542 === (16)))
{var inst_25534 = (state_25541[(2)]);var state_25541__$1 = (function (){var statearr_25559 = state_25541;(statearr_25559[(12)] = inst_25534);
return statearr_25559;
})();var statearr_25560_25584 = state_25541__$1;(statearr_25560_25584[(2)] = null);
(statearr_25560_25584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (10)))
{var inst_25509 = (state_25541[(2)]);var inst_25510 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25541__$1 = (function (){var statearr_25561 = state_25541;(statearr_25561[(13)] = inst_25509);
return statearr_25561;
})();var statearr_25562_25585 = state_25541__$1;(statearr_25562_25585[(2)] = inst_25510);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25541__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25542 === (8)))
{var inst_25523 = (state_25541[(2)]);var state_25541__$1 = state_25541;var statearr_25563_25586 = state_25541__$1;(statearr_25563_25586[(2)] = inst_25523);
(statearr_25563_25586[(1)] = (5));
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
});})(c__9125__auto___25571,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25567[(0)] = state_machine__9111__auto__);
(statearr_25567[(1)] = (1));
return statearr_25567;
});
var state_machine__9111__auto____1 = (function (state_25541){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25541);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25568){if((e25568 instanceof Object))
{var ex__9114__auto__ = e25568;var statearr_25569_25587 = state_25541;(statearr_25569_25587[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25568;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25588 = state_25541;
state_25541 = G__25588;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25541){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25571,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25570 = f__9126__auto__.call(null);(statearr_25570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25571);
return statearr_25570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25571,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25696 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25696,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25696,out){
return (function (state_25672){var state_val_25673 = (state_25672[(1)]);if((state_val_25673 === (7)))
{var inst_25651 = (state_25672[(7)]);var inst_25652 = (state_25672[(8)]);var inst_25651__$1 = (state_25672[(2)]);var inst_25652__$1 = cljs.core.nth.call(null,inst_25651__$1,(0),null);var inst_25653 = cljs.core.nth.call(null,inst_25651__$1,(1),null);var inst_25654 = (inst_25652__$1 == null);var state_25672__$1 = (function (){var statearr_25674 = state_25672;(statearr_25674[(9)] = inst_25653);
(statearr_25674[(7)] = inst_25651__$1);
(statearr_25674[(8)] = inst_25652__$1);
return statearr_25674;
})();if(cljs.core.truth_(inst_25654))
{var statearr_25675_25697 = state_25672__$1;(statearr_25675_25697[(1)] = (8));
} else
{var statearr_25676_25698 = state_25672__$1;(statearr_25676_25698[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (1)))
{var inst_25643 = cljs.core.vec.call(null,chs);var inst_25644 = inst_25643;var state_25672__$1 = (function (){var statearr_25677 = state_25672;(statearr_25677[(10)] = inst_25644);
return statearr_25677;
})();var statearr_25678_25699 = state_25672__$1;(statearr_25678_25699[(2)] = null);
(statearr_25678_25699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (4)))
{var inst_25644 = (state_25672[(10)]);var state_25672__$1 = state_25672;return cljs.core.async.ioc_alts_BANG_.call(null,state_25672__$1,(7),inst_25644);
} else
{if((state_val_25673 === (6)))
{var inst_25668 = (state_25672[(2)]);var state_25672__$1 = state_25672;var statearr_25679_25700 = state_25672__$1;(statearr_25679_25700[(2)] = inst_25668);
(statearr_25679_25700[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (3)))
{var inst_25670 = (state_25672[(2)]);var state_25672__$1 = state_25672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25672__$1,inst_25670);
} else
{if((state_val_25673 === (2)))
{var inst_25644 = (state_25672[(10)]);var inst_25646 = cljs.core.count.call(null,inst_25644);var inst_25647 = (inst_25646 > (0));var state_25672__$1 = state_25672;if(cljs.core.truth_(inst_25647))
{var statearr_25681_25701 = state_25672__$1;(statearr_25681_25701[(1)] = (4));
} else
{var statearr_25682_25702 = state_25672__$1;(statearr_25682_25702[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (11)))
{var inst_25644 = (state_25672[(10)]);var inst_25661 = (state_25672[(2)]);var tmp25680 = inst_25644;var inst_25644__$1 = tmp25680;var state_25672__$1 = (function (){var statearr_25683 = state_25672;(statearr_25683[(10)] = inst_25644__$1);
(statearr_25683[(11)] = inst_25661);
return statearr_25683;
})();var statearr_25684_25703 = state_25672__$1;(statearr_25684_25703[(2)] = null);
(statearr_25684_25703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (9)))
{var inst_25652 = (state_25672[(8)]);var state_25672__$1 = state_25672;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25672__$1,(11),out,inst_25652);
} else
{if((state_val_25673 === (5)))
{var inst_25666 = cljs.core.async.close_BANG_.call(null,out);var state_25672__$1 = state_25672;var statearr_25685_25704 = state_25672__$1;(statearr_25685_25704[(2)] = inst_25666);
(statearr_25685_25704[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (10)))
{var inst_25664 = (state_25672[(2)]);var state_25672__$1 = state_25672;var statearr_25686_25705 = state_25672__$1;(statearr_25686_25705[(2)] = inst_25664);
(statearr_25686_25705[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25673 === (8)))
{var inst_25653 = (state_25672[(9)]);var inst_25644 = (state_25672[(10)]);var inst_25651 = (state_25672[(7)]);var inst_25652 = (state_25672[(8)]);var inst_25656 = (function (){var c = inst_25653;var v = inst_25652;var vec__25649 = inst_25651;var cs = inst_25644;return ((function (c,v,vec__25649,cs,inst_25653,inst_25644,inst_25651,inst_25652,state_val_25673,c__9125__auto___25696,out){
return (function (p1__25589_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25589_SHARP_);
});
;})(c,v,vec__25649,cs,inst_25653,inst_25644,inst_25651,inst_25652,state_val_25673,c__9125__auto___25696,out))
})();var inst_25657 = cljs.core.filterv.call(null,inst_25656,inst_25644);var inst_25644__$1 = inst_25657;var state_25672__$1 = (function (){var statearr_25687 = state_25672;(statearr_25687[(10)] = inst_25644__$1);
return statearr_25687;
})();var statearr_25688_25706 = state_25672__$1;(statearr_25688_25706[(2)] = null);
(statearr_25688_25706[(1)] = (2));
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
});})(c__9125__auto___25696,out))
;return ((function (switch__9110__auto__,c__9125__auto___25696,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25692 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25692[(0)] = state_machine__9111__auto__);
(statearr_25692[(1)] = (1));
return statearr_25692;
});
var state_machine__9111__auto____1 = (function (state_25672){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25672);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25693){if((e25693 instanceof Object))
{var ex__9114__auto__ = e25693;var statearr_25694_25707 = state_25672;(statearr_25694_25707[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25672);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25693;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25708 = state_25672;
state_25672 = G__25708;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25672){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25696,out))
})();var state__9127__auto__ = (function (){var statearr_25695 = f__9126__auto__.call(null);(statearr_25695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25696);
return statearr_25695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25696,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25801 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25801,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25801,out){
return (function (state_25778){var state_val_25779 = (state_25778[(1)]);if((state_val_25779 === (7)))
{var inst_25760 = (state_25778[(7)]);var inst_25760__$1 = (state_25778[(2)]);var inst_25761 = (inst_25760__$1 == null);var inst_25762 = cljs.core.not.call(null,inst_25761);var state_25778__$1 = (function (){var statearr_25780 = state_25778;(statearr_25780[(7)] = inst_25760__$1);
return statearr_25780;
})();if(inst_25762)
{var statearr_25781_25802 = state_25778__$1;(statearr_25781_25802[(1)] = (8));
} else
{var statearr_25782_25803 = state_25778__$1;(statearr_25782_25803[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (1)))
{var inst_25755 = (0);var state_25778__$1 = (function (){var statearr_25783 = state_25778;(statearr_25783[(8)] = inst_25755);
return statearr_25783;
})();var statearr_25784_25804 = state_25778__$1;(statearr_25784_25804[(2)] = null);
(statearr_25784_25804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (4)))
{var state_25778__$1 = state_25778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25778__$1,(7),ch);
} else
{if((state_val_25779 === (6)))
{var inst_25773 = (state_25778[(2)]);var state_25778__$1 = state_25778;var statearr_25785_25805 = state_25778__$1;(statearr_25785_25805[(2)] = inst_25773);
(statearr_25785_25805[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (3)))
{var inst_25775 = (state_25778[(2)]);var inst_25776 = cljs.core.async.close_BANG_.call(null,out);var state_25778__$1 = (function (){var statearr_25786 = state_25778;(statearr_25786[(9)] = inst_25775);
return statearr_25786;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25778__$1,inst_25776);
} else
{if((state_val_25779 === (2)))
{var inst_25755 = (state_25778[(8)]);var inst_25757 = (inst_25755 < n);var state_25778__$1 = state_25778;if(cljs.core.truth_(inst_25757))
{var statearr_25787_25806 = state_25778__$1;(statearr_25787_25806[(1)] = (4));
} else
{var statearr_25788_25807 = state_25778__$1;(statearr_25788_25807[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (11)))
{var inst_25755 = (state_25778[(8)]);var inst_25765 = (state_25778[(2)]);var inst_25766 = (inst_25755 + (1));var inst_25755__$1 = inst_25766;var state_25778__$1 = (function (){var statearr_25789 = state_25778;(statearr_25789[(8)] = inst_25755__$1);
(statearr_25789[(10)] = inst_25765);
return statearr_25789;
})();var statearr_25790_25808 = state_25778__$1;(statearr_25790_25808[(2)] = null);
(statearr_25790_25808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (9)))
{var state_25778__$1 = state_25778;var statearr_25791_25809 = state_25778__$1;(statearr_25791_25809[(2)] = null);
(statearr_25791_25809[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (5)))
{var state_25778__$1 = state_25778;var statearr_25792_25810 = state_25778__$1;(statearr_25792_25810[(2)] = null);
(statearr_25792_25810[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (10)))
{var inst_25770 = (state_25778[(2)]);var state_25778__$1 = state_25778;var statearr_25793_25811 = state_25778__$1;(statearr_25793_25811[(2)] = inst_25770);
(statearr_25793_25811[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25779 === (8)))
{var inst_25760 = (state_25778[(7)]);var state_25778__$1 = state_25778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25778__$1,(11),out,inst_25760);
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
});})(c__9125__auto___25801,out))
;return ((function (switch__9110__auto__,c__9125__auto___25801,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25797 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25797[(0)] = state_machine__9111__auto__);
(statearr_25797[(1)] = (1));
return statearr_25797;
});
var state_machine__9111__auto____1 = (function (state_25778){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25778);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25798){if((e25798 instanceof Object))
{var ex__9114__auto__ = e25798;var statearr_25799_25812 = state_25778;(statearr_25799_25812[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25798;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25813 = state_25778;
state_25778 = G__25813;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25778){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25801,out))
})();var state__9127__auto__ = (function (){var statearr_25800 = f__9126__auto__.call(null);(statearr_25800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25801);
return statearr_25800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25801,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25821 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25821 = (function (ch,f,map_LT_,meta25822){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25822 = meta25822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25821.cljs$lang$type = true;
cljs.core.async.t25821.cljs$lang$ctorStr = "cljs.core.async/t25821";
cljs.core.async.t25821.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25821");
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25824 = (function (fn1,_,meta25822,ch,f,map_LT_,meta25825){
this.fn1 = fn1;
this._ = _;
this.meta25822 = meta25822;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25825 = meta25825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25824.cljs$lang$type = true;
cljs.core.async.t25824.cljs$lang$ctorStr = "cljs.core.async/t25824";
cljs.core.async.t25824.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25824");
});})(___$1))
;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25814_SHARP_){return f1.call(null,(((p1__25814_SHARP_ == null))?null:self__.f.call(null,p1__25814_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25826){var self__ = this;
var _25826__$1 = this;return self__.meta25825;
});})(___$1))
;
cljs.core.async.t25824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25826,meta25825__$1){var self__ = this;
var _25826__$1 = this;return (new cljs.core.async.t25824(self__.fn1,self__._,self__.meta25822,self__.ch,self__.f,self__.map_LT_,meta25825__$1));
});})(___$1))
;
cljs.core.async.__GT_t25824 = ((function (___$1){
return (function __GT_t25824(fn1__$1,___$2,meta25822__$1,ch__$2,f__$2,map_LT___$2,meta25825){return (new cljs.core.async.t25824(fn1__$1,___$2,meta25822__$1,ch__$2,f__$2,map_LT___$2,meta25825));
});})(___$1))
;
}
return (new cljs.core.async.t25824(fn1,___$1,self__.meta25822,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25823){var self__ = this;
var _25823__$1 = this;return self__.meta25822;
});
cljs.core.async.t25821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25823,meta25822__$1){var self__ = this;
var _25823__$1 = this;return (new cljs.core.async.t25821(self__.ch,self__.f,self__.map_LT_,meta25822__$1));
});
cljs.core.async.__GT_t25821 = (function __GT_t25821(ch__$1,f__$1,map_LT___$1,meta25822){return (new cljs.core.async.t25821(ch__$1,f__$1,map_LT___$1,meta25822));
});
}
return (new cljs.core.async.t25821(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25830 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25830 = (function (ch,f,map_GT_,meta25831){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25831 = meta25831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25830.cljs$lang$type = true;
cljs.core.async.t25830.cljs$lang$ctorStr = "cljs.core.async/t25830";
cljs.core.async.t25830.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25830");
});
cljs.core.async.t25830.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25830.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25830.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25832){var self__ = this;
var _25832__$1 = this;return self__.meta25831;
});
cljs.core.async.t25830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25832,meta25831__$1){var self__ = this;
var _25832__$1 = this;return (new cljs.core.async.t25830(self__.ch,self__.f,self__.map_GT_,meta25831__$1));
});
cljs.core.async.__GT_t25830 = (function __GT_t25830(ch__$1,f__$1,map_GT___$1,meta25831){return (new cljs.core.async.t25830(ch__$1,f__$1,map_GT___$1,meta25831));
});
}
return (new cljs.core.async.t25830(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25836 = (function (ch,p,filter_GT_,meta25837){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25837 = meta25837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25836.cljs$lang$type = true;
cljs.core.async.t25836.cljs$lang$ctorStr = "cljs.core.async/t25836";
cljs.core.async.t25836.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25836");
});
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25838){var self__ = this;
var _25838__$1 = this;return self__.meta25837;
});
cljs.core.async.t25836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25838,meta25837__$1){var self__ = this;
var _25838__$1 = this;return (new cljs.core.async.t25836(self__.ch,self__.p,self__.filter_GT_,meta25837__$1));
});
cljs.core.async.__GT_t25836 = (function __GT_t25836(ch__$1,p__$1,filter_GT___$1,meta25837){return (new cljs.core.async.t25836(ch__$1,p__$1,filter_GT___$1,meta25837));
});
}
return (new cljs.core.async.t25836(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25921,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25921,out){
return (function (state_25900){var state_val_25901 = (state_25900[(1)]);if((state_val_25901 === (7)))
{var inst_25896 = (state_25900[(2)]);var state_25900__$1 = state_25900;var statearr_25902_25922 = state_25900__$1;(statearr_25902_25922[(2)] = inst_25896);
(statearr_25902_25922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (1)))
{var state_25900__$1 = state_25900;var statearr_25903_25923 = state_25900__$1;(statearr_25903_25923[(2)] = null);
(statearr_25903_25923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (4)))
{var inst_25882 = (state_25900[(7)]);var inst_25882__$1 = (state_25900[(2)]);var inst_25883 = (inst_25882__$1 == null);var state_25900__$1 = (function (){var statearr_25904 = state_25900;(statearr_25904[(7)] = inst_25882__$1);
return statearr_25904;
})();if(cljs.core.truth_(inst_25883))
{var statearr_25905_25924 = state_25900__$1;(statearr_25905_25924[(1)] = (5));
} else
{var statearr_25906_25925 = state_25900__$1;(statearr_25906_25925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (6)))
{var inst_25882 = (state_25900[(7)]);var inst_25887 = p.call(null,inst_25882);var state_25900__$1 = state_25900;if(cljs.core.truth_(inst_25887))
{var statearr_25907_25926 = state_25900__$1;(statearr_25907_25926[(1)] = (8));
} else
{var statearr_25908_25927 = state_25900__$1;(statearr_25908_25927[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (3)))
{var inst_25898 = (state_25900[(2)]);var state_25900__$1 = state_25900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25900__$1,inst_25898);
} else
{if((state_val_25901 === (2)))
{var state_25900__$1 = state_25900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25900__$1,(4),ch);
} else
{if((state_val_25901 === (11)))
{var inst_25890 = (state_25900[(2)]);var state_25900__$1 = state_25900;var statearr_25909_25928 = state_25900__$1;(statearr_25909_25928[(2)] = inst_25890);
(statearr_25909_25928[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (9)))
{var state_25900__$1 = state_25900;var statearr_25910_25929 = state_25900__$1;(statearr_25910_25929[(2)] = null);
(statearr_25910_25929[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (5)))
{var inst_25885 = cljs.core.async.close_BANG_.call(null,out);var state_25900__$1 = state_25900;var statearr_25911_25930 = state_25900__$1;(statearr_25911_25930[(2)] = inst_25885);
(statearr_25911_25930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (10)))
{var inst_25893 = (state_25900[(2)]);var state_25900__$1 = (function (){var statearr_25912 = state_25900;(statearr_25912[(8)] = inst_25893);
return statearr_25912;
})();var statearr_25913_25931 = state_25900__$1;(statearr_25913_25931[(2)] = null);
(statearr_25913_25931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25901 === (8)))
{var inst_25882 = (state_25900[(7)]);var state_25900__$1 = state_25900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25900__$1,(11),out,inst_25882);
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
});})(c__9125__auto___25921,out))
;return ((function (switch__9110__auto__,c__9125__auto___25921,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25917 = [null,null,null,null,null,null,null,null,null];(statearr_25917[(0)] = state_machine__9111__auto__);
(statearr_25917[(1)] = (1));
return statearr_25917;
});
var state_machine__9111__auto____1 = (function (state_25900){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25900);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25918){if((e25918 instanceof Object))
{var ex__9114__auto__ = e25918;var statearr_25919_25932 = state_25900;(statearr_25919_25932[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25933 = state_25900;
state_25900 = G__25933;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25900){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25921,out))
})();var state__9127__auto__ = (function (){var statearr_25920 = f__9126__auto__.call(null);(statearr_25920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25921);
return statearr_25920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25921,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_26099){var state_val_26100 = (state_26099[(1)]);if((state_val_26100 === (7)))
{var inst_26095 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26101_26142 = state_26099__$1;(statearr_26101_26142[(2)] = inst_26095);
(statearr_26101_26142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (20)))
{var inst_26065 = (state_26099[(7)]);var inst_26076 = (state_26099[(2)]);var inst_26077 = cljs.core.next.call(null,inst_26065);var inst_26051 = inst_26077;var inst_26052 = null;var inst_26053 = (0);var inst_26054 = (0);var state_26099__$1 = (function (){var statearr_26102 = state_26099;(statearr_26102[(8)] = inst_26051);
(statearr_26102[(9)] = inst_26076);
(statearr_26102[(10)] = inst_26054);
(statearr_26102[(11)] = inst_26053);
(statearr_26102[(12)] = inst_26052);
return statearr_26102;
})();var statearr_26103_26143 = state_26099__$1;(statearr_26103_26143[(2)] = null);
(statearr_26103_26143[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (1)))
{var state_26099__$1 = state_26099;var statearr_26104_26144 = state_26099__$1;(statearr_26104_26144[(2)] = null);
(statearr_26104_26144[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (4)))
{var inst_26040 = (state_26099[(13)]);var inst_26040__$1 = (state_26099[(2)]);var inst_26041 = (inst_26040__$1 == null);var state_26099__$1 = (function (){var statearr_26105 = state_26099;(statearr_26105[(13)] = inst_26040__$1);
return statearr_26105;
})();if(cljs.core.truth_(inst_26041))
{var statearr_26106_26145 = state_26099__$1;(statearr_26106_26145[(1)] = (5));
} else
{var statearr_26107_26146 = state_26099__$1;(statearr_26107_26146[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (15)))
{var state_26099__$1 = state_26099;var statearr_26111_26147 = state_26099__$1;(statearr_26111_26147[(2)] = null);
(statearr_26111_26147[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (21)))
{var state_26099__$1 = state_26099;var statearr_26112_26148 = state_26099__$1;(statearr_26112_26148[(2)] = null);
(statearr_26112_26148[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (13)))
{var inst_26051 = (state_26099[(8)]);var inst_26054 = (state_26099[(10)]);var inst_26053 = (state_26099[(11)]);var inst_26052 = (state_26099[(12)]);var inst_26061 = (state_26099[(2)]);var inst_26062 = (inst_26054 + (1));var tmp26108 = inst_26051;var tmp26109 = inst_26053;var tmp26110 = inst_26052;var inst_26051__$1 = tmp26108;var inst_26052__$1 = tmp26110;var inst_26053__$1 = tmp26109;var inst_26054__$1 = inst_26062;var state_26099__$1 = (function (){var statearr_26113 = state_26099;(statearr_26113[(8)] = inst_26051__$1);
(statearr_26113[(14)] = inst_26061);
(statearr_26113[(10)] = inst_26054__$1);
(statearr_26113[(11)] = inst_26053__$1);
(statearr_26113[(12)] = inst_26052__$1);
return statearr_26113;
})();var statearr_26114_26149 = state_26099__$1;(statearr_26114_26149[(2)] = null);
(statearr_26114_26149[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (22)))
{var state_26099__$1 = state_26099;var statearr_26115_26150 = state_26099__$1;(statearr_26115_26150[(2)] = null);
(statearr_26115_26150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (6)))
{var inst_26040 = (state_26099[(13)]);var inst_26049 = f.call(null,inst_26040);var inst_26050 = cljs.core.seq.call(null,inst_26049);var inst_26051 = inst_26050;var inst_26052 = null;var inst_26053 = (0);var inst_26054 = (0);var state_26099__$1 = (function (){var statearr_26116 = state_26099;(statearr_26116[(8)] = inst_26051);
(statearr_26116[(10)] = inst_26054);
(statearr_26116[(11)] = inst_26053);
(statearr_26116[(12)] = inst_26052);
return statearr_26116;
})();var statearr_26117_26151 = state_26099__$1;(statearr_26117_26151[(2)] = null);
(statearr_26117_26151[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (17)))
{var inst_26065 = (state_26099[(7)]);var inst_26069 = cljs.core.chunk_first.call(null,inst_26065);var inst_26070 = cljs.core.chunk_rest.call(null,inst_26065);var inst_26071 = cljs.core.count.call(null,inst_26069);var inst_26051 = inst_26070;var inst_26052 = inst_26069;var inst_26053 = inst_26071;var inst_26054 = (0);var state_26099__$1 = (function (){var statearr_26118 = state_26099;(statearr_26118[(8)] = inst_26051);
(statearr_26118[(10)] = inst_26054);
(statearr_26118[(11)] = inst_26053);
(statearr_26118[(12)] = inst_26052);
return statearr_26118;
})();var statearr_26119_26152 = state_26099__$1;(statearr_26119_26152[(2)] = null);
(statearr_26119_26152[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (3)))
{var inst_26097 = (state_26099[(2)]);var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26099__$1,inst_26097);
} else
{if((state_val_26100 === (12)))
{var inst_26085 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26120_26153 = state_26099__$1;(statearr_26120_26153[(2)] = inst_26085);
(statearr_26120_26153[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (2)))
{var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26099__$1,(4),in$);
} else
{if((state_val_26100 === (23)))
{var inst_26093 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26121_26154 = state_26099__$1;(statearr_26121_26154[(2)] = inst_26093);
(statearr_26121_26154[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (19)))
{var inst_26080 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26122_26155 = state_26099__$1;(statearr_26122_26155[(2)] = inst_26080);
(statearr_26122_26155[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (11)))
{var inst_26051 = (state_26099[(8)]);var inst_26065 = (state_26099[(7)]);var inst_26065__$1 = cljs.core.seq.call(null,inst_26051);var state_26099__$1 = (function (){var statearr_26123 = state_26099;(statearr_26123[(7)] = inst_26065__$1);
return statearr_26123;
})();if(inst_26065__$1)
{var statearr_26124_26156 = state_26099__$1;(statearr_26124_26156[(1)] = (14));
} else
{var statearr_26125_26157 = state_26099__$1;(statearr_26125_26157[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (9)))
{var inst_26087 = (state_26099[(2)]);var inst_26088 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26099__$1 = (function (){var statearr_26126 = state_26099;(statearr_26126[(15)] = inst_26087);
return statearr_26126;
})();if(cljs.core.truth_(inst_26088))
{var statearr_26127_26158 = state_26099__$1;(statearr_26127_26158[(1)] = (21));
} else
{var statearr_26128_26159 = state_26099__$1;(statearr_26128_26159[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (5)))
{var inst_26043 = cljs.core.async.close_BANG_.call(null,out);var state_26099__$1 = state_26099;var statearr_26129_26160 = state_26099__$1;(statearr_26129_26160[(2)] = inst_26043);
(statearr_26129_26160[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (14)))
{var inst_26065 = (state_26099[(7)]);var inst_26067 = cljs.core.chunked_seq_QMARK_.call(null,inst_26065);var state_26099__$1 = state_26099;if(inst_26067)
{var statearr_26130_26161 = state_26099__$1;(statearr_26130_26161[(1)] = (17));
} else
{var statearr_26131_26162 = state_26099__$1;(statearr_26131_26162[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (16)))
{var inst_26083 = (state_26099[(2)]);var state_26099__$1 = state_26099;var statearr_26132_26163 = state_26099__$1;(statearr_26132_26163[(2)] = inst_26083);
(statearr_26132_26163[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26100 === (10)))
{var inst_26054 = (state_26099[(10)]);var inst_26052 = (state_26099[(12)]);var inst_26059 = cljs.core._nth.call(null,inst_26052,inst_26054);var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26099__$1,(13),out,inst_26059);
} else
{if((state_val_26100 === (18)))
{var inst_26065 = (state_26099[(7)]);var inst_26074 = cljs.core.first.call(null,inst_26065);var state_26099__$1 = state_26099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26099__$1,(20),out,inst_26074);
} else
{if((state_val_26100 === (8)))
{var inst_26054 = (state_26099[(10)]);var inst_26053 = (state_26099[(11)]);var inst_26056 = (inst_26054 < inst_26053);var inst_26057 = inst_26056;var state_26099__$1 = state_26099;if(cljs.core.truth_(inst_26057))
{var statearr_26133_26164 = state_26099__$1;(statearr_26133_26164[(1)] = (10));
} else
{var statearr_26134_26165 = state_26099__$1;(statearr_26134_26165[(1)] = (11));
}
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
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26138[(0)] = state_machine__9111__auto__);
(statearr_26138[(1)] = (1));
return statearr_26138;
});
var state_machine__9111__auto____1 = (function (state_26099){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26099);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26139){if((e26139 instanceof Object))
{var ex__9114__auto__ = e26139;var statearr_26140_26166 = state_26099;(statearr_26140_26166[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26139;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26167 = state_26099;
state_26099 = G__26167;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26099){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26141 = f__9126__auto__.call(null);(statearr_26141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26264 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26264,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26264,out){
return (function (state_26239){var state_val_26240 = (state_26239[(1)]);if((state_val_26240 === (7)))
{var inst_26234 = (state_26239[(2)]);var state_26239__$1 = state_26239;var statearr_26241_26265 = state_26239__$1;(statearr_26241_26265[(2)] = inst_26234);
(statearr_26241_26265[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (1)))
{var inst_26216 = null;var state_26239__$1 = (function (){var statearr_26242 = state_26239;(statearr_26242[(7)] = inst_26216);
return statearr_26242;
})();var statearr_26243_26266 = state_26239__$1;(statearr_26243_26266[(2)] = null);
(statearr_26243_26266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (4)))
{var inst_26219 = (state_26239[(8)]);var inst_26219__$1 = (state_26239[(2)]);var inst_26220 = (inst_26219__$1 == null);var inst_26221 = cljs.core.not.call(null,inst_26220);var state_26239__$1 = (function (){var statearr_26244 = state_26239;(statearr_26244[(8)] = inst_26219__$1);
return statearr_26244;
})();if(inst_26221)
{var statearr_26245_26267 = state_26239__$1;(statearr_26245_26267[(1)] = (5));
} else
{var statearr_26246_26268 = state_26239__$1;(statearr_26246_26268[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (6)))
{var state_26239__$1 = state_26239;var statearr_26247_26269 = state_26239__$1;(statearr_26247_26269[(2)] = null);
(statearr_26247_26269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (3)))
{var inst_26236 = (state_26239[(2)]);var inst_26237 = cljs.core.async.close_BANG_.call(null,out);var state_26239__$1 = (function (){var statearr_26248 = state_26239;(statearr_26248[(9)] = inst_26236);
return statearr_26248;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26239__$1,inst_26237);
} else
{if((state_val_26240 === (2)))
{var state_26239__$1 = state_26239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(4),ch);
} else
{if((state_val_26240 === (11)))
{var inst_26219 = (state_26239[(8)]);var inst_26228 = (state_26239[(2)]);var inst_26216 = inst_26219;var state_26239__$1 = (function (){var statearr_26249 = state_26239;(statearr_26249[(7)] = inst_26216);
(statearr_26249[(10)] = inst_26228);
return statearr_26249;
})();var statearr_26250_26270 = state_26239__$1;(statearr_26250_26270[(2)] = null);
(statearr_26250_26270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (9)))
{var inst_26219 = (state_26239[(8)]);var state_26239__$1 = state_26239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26239__$1,(11),out,inst_26219);
} else
{if((state_val_26240 === (5)))
{var inst_26216 = (state_26239[(7)]);var inst_26219 = (state_26239[(8)]);var inst_26223 = cljs.core._EQ_.call(null,inst_26219,inst_26216);var state_26239__$1 = state_26239;if(inst_26223)
{var statearr_26252_26271 = state_26239__$1;(statearr_26252_26271[(1)] = (8));
} else
{var statearr_26253_26272 = state_26239__$1;(statearr_26253_26272[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (10)))
{var inst_26231 = (state_26239[(2)]);var state_26239__$1 = state_26239;var statearr_26254_26273 = state_26239__$1;(statearr_26254_26273[(2)] = inst_26231);
(statearr_26254_26273[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (8)))
{var inst_26216 = (state_26239[(7)]);var tmp26251 = inst_26216;var inst_26216__$1 = tmp26251;var state_26239__$1 = (function (){var statearr_26255 = state_26239;(statearr_26255[(7)] = inst_26216__$1);
return statearr_26255;
})();var statearr_26256_26274 = state_26239__$1;(statearr_26256_26274[(2)] = null);
(statearr_26256_26274[(1)] = (2));
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
});})(c__9125__auto___26264,out))
;return ((function (switch__9110__auto__,c__9125__auto___26264,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26260 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26260[(0)] = state_machine__9111__auto__);
(statearr_26260[(1)] = (1));
return statearr_26260;
});
var state_machine__9111__auto____1 = (function (state_26239){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26239);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26261){if((e26261 instanceof Object))
{var ex__9114__auto__ = e26261;var statearr_26262_26275 = state_26239;(statearr_26262_26275[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26261;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26276 = state_26239;
state_26239 = G__26276;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26239){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26264,out))
})();var state__9127__auto__ = (function (){var statearr_26263 = f__9126__auto__.call(null);(statearr_26263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26264);
return statearr_26263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26264,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26411 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26411,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26411,out){
return (function (state_26381){var state_val_26382 = (state_26381[(1)]);if((state_val_26382 === (7)))
{var inst_26377 = (state_26381[(2)]);var state_26381__$1 = state_26381;var statearr_26383_26412 = state_26381__$1;(statearr_26383_26412[(2)] = inst_26377);
(statearr_26383_26412[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (1)))
{var inst_26344 = (new Array(n));var inst_26345 = inst_26344;var inst_26346 = (0);var state_26381__$1 = (function (){var statearr_26384 = state_26381;(statearr_26384[(7)] = inst_26346);
(statearr_26384[(8)] = inst_26345);
return statearr_26384;
})();var statearr_26385_26413 = state_26381__$1;(statearr_26385_26413[(2)] = null);
(statearr_26385_26413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (4)))
{var inst_26349 = (state_26381[(9)]);var inst_26349__$1 = (state_26381[(2)]);var inst_26350 = (inst_26349__$1 == null);var inst_26351 = cljs.core.not.call(null,inst_26350);var state_26381__$1 = (function (){var statearr_26386 = state_26381;(statearr_26386[(9)] = inst_26349__$1);
return statearr_26386;
})();if(inst_26351)
{var statearr_26387_26414 = state_26381__$1;(statearr_26387_26414[(1)] = (5));
} else
{var statearr_26388_26415 = state_26381__$1;(statearr_26388_26415[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (15)))
{var inst_26371 = (state_26381[(2)]);var state_26381__$1 = state_26381;var statearr_26389_26416 = state_26381__$1;(statearr_26389_26416[(2)] = inst_26371);
(statearr_26389_26416[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (13)))
{var state_26381__$1 = state_26381;var statearr_26390_26417 = state_26381__$1;(statearr_26390_26417[(2)] = null);
(statearr_26390_26417[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (6)))
{var inst_26346 = (state_26381[(7)]);var inst_26367 = (inst_26346 > (0));var state_26381__$1 = state_26381;if(cljs.core.truth_(inst_26367))
{var statearr_26391_26418 = state_26381__$1;(statearr_26391_26418[(1)] = (12));
} else
{var statearr_26392_26419 = state_26381__$1;(statearr_26392_26419[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (3)))
{var inst_26379 = (state_26381[(2)]);var state_26381__$1 = state_26381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26381__$1,inst_26379);
} else
{if((state_val_26382 === (12)))
{var inst_26345 = (state_26381[(8)]);var inst_26369 = cljs.core.vec.call(null,inst_26345);var state_26381__$1 = state_26381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26381__$1,(15),out,inst_26369);
} else
{if((state_val_26382 === (2)))
{var state_26381__$1 = state_26381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26381__$1,(4),ch);
} else
{if((state_val_26382 === (11)))
{var inst_26361 = (state_26381[(2)]);var inst_26362 = (new Array(n));var inst_26345 = inst_26362;var inst_26346 = (0);var state_26381__$1 = (function (){var statearr_26393 = state_26381;(statearr_26393[(7)] = inst_26346);
(statearr_26393[(8)] = inst_26345);
(statearr_26393[(10)] = inst_26361);
return statearr_26393;
})();var statearr_26394_26420 = state_26381__$1;(statearr_26394_26420[(2)] = null);
(statearr_26394_26420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (9)))
{var inst_26345 = (state_26381[(8)]);var inst_26359 = cljs.core.vec.call(null,inst_26345);var state_26381__$1 = state_26381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26381__$1,(11),out,inst_26359);
} else
{if((state_val_26382 === (5)))
{var inst_26346 = (state_26381[(7)]);var inst_26349 = (state_26381[(9)]);var inst_26354 = (state_26381[(11)]);var inst_26345 = (state_26381[(8)]);var inst_26353 = (inst_26345[inst_26346] = inst_26349);var inst_26354__$1 = (inst_26346 + (1));var inst_26355 = (inst_26354__$1 < n);var state_26381__$1 = (function (){var statearr_26395 = state_26381;(statearr_26395[(12)] = inst_26353);
(statearr_26395[(11)] = inst_26354__$1);
return statearr_26395;
})();if(cljs.core.truth_(inst_26355))
{var statearr_26396_26421 = state_26381__$1;(statearr_26396_26421[(1)] = (8));
} else
{var statearr_26397_26422 = state_26381__$1;(statearr_26397_26422[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (14)))
{var inst_26374 = (state_26381[(2)]);var inst_26375 = cljs.core.async.close_BANG_.call(null,out);var state_26381__$1 = (function (){var statearr_26399 = state_26381;(statearr_26399[(13)] = inst_26374);
return statearr_26399;
})();var statearr_26400_26423 = state_26381__$1;(statearr_26400_26423[(2)] = inst_26375);
(statearr_26400_26423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (10)))
{var inst_26365 = (state_26381[(2)]);var state_26381__$1 = state_26381;var statearr_26401_26424 = state_26381__$1;(statearr_26401_26424[(2)] = inst_26365);
(statearr_26401_26424[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26382 === (8)))
{var inst_26354 = (state_26381[(11)]);var inst_26345 = (state_26381[(8)]);var tmp26398 = inst_26345;var inst_26345__$1 = tmp26398;var inst_26346 = inst_26354;var state_26381__$1 = (function (){var statearr_26402 = state_26381;(statearr_26402[(7)] = inst_26346);
(statearr_26402[(8)] = inst_26345__$1);
return statearr_26402;
})();var statearr_26403_26425 = state_26381__$1;(statearr_26403_26425[(2)] = null);
(statearr_26403_26425[(1)] = (2));
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
});})(c__9125__auto___26411,out))
;return ((function (switch__9110__auto__,c__9125__auto___26411,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26407[(0)] = state_machine__9111__auto__);
(statearr_26407[(1)] = (1));
return statearr_26407;
});
var state_machine__9111__auto____1 = (function (state_26381){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26381);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26408){if((e26408 instanceof Object))
{var ex__9114__auto__ = e26408;var statearr_26409_26426 = state_26381;(statearr_26409_26426[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26408;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26427 = state_26381;
state_26381 = G__26427;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26381){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26411,out))
})();var state__9127__auto__ = (function (){var statearr_26410 = f__9126__auto__.call(null);(statearr_26410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26411);
return statearr_26410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26411,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26570 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26570,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26570,out){
return (function (state_26540){var state_val_26541 = (state_26540[(1)]);if((state_val_26541 === (7)))
{var inst_26536 = (state_26540[(2)]);var state_26540__$1 = state_26540;var statearr_26542_26571 = state_26540__$1;(statearr_26542_26571[(2)] = inst_26536);
(statearr_26542_26571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (1)))
{var inst_26499 = [];var inst_26500 = inst_26499;var inst_26501 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26540__$1 = (function (){var statearr_26543 = state_26540;(statearr_26543[(7)] = inst_26501);
(statearr_26543[(8)] = inst_26500);
return statearr_26543;
})();var statearr_26544_26572 = state_26540__$1;(statearr_26544_26572[(2)] = null);
(statearr_26544_26572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (4)))
{var inst_26504 = (state_26540[(9)]);var inst_26504__$1 = (state_26540[(2)]);var inst_26505 = (inst_26504__$1 == null);var inst_26506 = cljs.core.not.call(null,inst_26505);var state_26540__$1 = (function (){var statearr_26545 = state_26540;(statearr_26545[(9)] = inst_26504__$1);
return statearr_26545;
})();if(inst_26506)
{var statearr_26546_26573 = state_26540__$1;(statearr_26546_26573[(1)] = (5));
} else
{var statearr_26547_26574 = state_26540__$1;(statearr_26547_26574[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (15)))
{var inst_26530 = (state_26540[(2)]);var state_26540__$1 = state_26540;var statearr_26548_26575 = state_26540__$1;(statearr_26548_26575[(2)] = inst_26530);
(statearr_26548_26575[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (13)))
{var state_26540__$1 = state_26540;var statearr_26549_26576 = state_26540__$1;(statearr_26549_26576[(2)] = null);
(statearr_26549_26576[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (6)))
{var inst_26500 = (state_26540[(8)]);var inst_26525 = inst_26500.length;var inst_26526 = (inst_26525 > (0));var state_26540__$1 = state_26540;if(cljs.core.truth_(inst_26526))
{var statearr_26550_26577 = state_26540__$1;(statearr_26550_26577[(1)] = (12));
} else
{var statearr_26551_26578 = state_26540__$1;(statearr_26551_26578[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (3)))
{var inst_26538 = (state_26540[(2)]);var state_26540__$1 = state_26540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26540__$1,inst_26538);
} else
{if((state_val_26541 === (12)))
{var inst_26500 = (state_26540[(8)]);var inst_26528 = cljs.core.vec.call(null,inst_26500);var state_26540__$1 = state_26540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26540__$1,(15),out,inst_26528);
} else
{if((state_val_26541 === (2)))
{var state_26540__$1 = state_26540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26540__$1,(4),ch);
} else
{if((state_val_26541 === (11)))
{var inst_26504 = (state_26540[(9)]);var inst_26508 = (state_26540[(10)]);var inst_26518 = (state_26540[(2)]);var inst_26519 = [];var inst_26520 = inst_26519.push(inst_26504);var inst_26500 = inst_26519;var inst_26501 = inst_26508;var state_26540__$1 = (function (){var statearr_26552 = state_26540;(statearr_26552[(7)] = inst_26501);
(statearr_26552[(8)] = inst_26500);
(statearr_26552[(11)] = inst_26518);
(statearr_26552[(12)] = inst_26520);
return statearr_26552;
})();var statearr_26553_26579 = state_26540__$1;(statearr_26553_26579[(2)] = null);
(statearr_26553_26579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (9)))
{var inst_26500 = (state_26540[(8)]);var inst_26516 = cljs.core.vec.call(null,inst_26500);var state_26540__$1 = state_26540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26540__$1,(11),out,inst_26516);
} else
{if((state_val_26541 === (5)))
{var inst_26504 = (state_26540[(9)]);var inst_26501 = (state_26540[(7)]);var inst_26508 = (state_26540[(10)]);var inst_26508__$1 = f.call(null,inst_26504);var inst_26509 = cljs.core._EQ_.call(null,inst_26508__$1,inst_26501);var inst_26510 = cljs.core.keyword_identical_QMARK_.call(null,inst_26501,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26511 = (inst_26509) || (inst_26510);var state_26540__$1 = (function (){var statearr_26554 = state_26540;(statearr_26554[(10)] = inst_26508__$1);
return statearr_26554;
})();if(cljs.core.truth_(inst_26511))
{var statearr_26555_26580 = state_26540__$1;(statearr_26555_26580[(1)] = (8));
} else
{var statearr_26556_26581 = state_26540__$1;(statearr_26556_26581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (14)))
{var inst_26533 = (state_26540[(2)]);var inst_26534 = cljs.core.async.close_BANG_.call(null,out);var state_26540__$1 = (function (){var statearr_26558 = state_26540;(statearr_26558[(13)] = inst_26533);
return statearr_26558;
})();var statearr_26559_26582 = state_26540__$1;(statearr_26559_26582[(2)] = inst_26534);
(statearr_26559_26582[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (10)))
{var inst_26523 = (state_26540[(2)]);var state_26540__$1 = state_26540;var statearr_26560_26583 = state_26540__$1;(statearr_26560_26583[(2)] = inst_26523);
(statearr_26560_26583[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26541 === (8)))
{var inst_26504 = (state_26540[(9)]);var inst_26500 = (state_26540[(8)]);var inst_26508 = (state_26540[(10)]);var inst_26513 = inst_26500.push(inst_26504);var tmp26557 = inst_26500;var inst_26500__$1 = tmp26557;var inst_26501 = inst_26508;var state_26540__$1 = (function (){var statearr_26561 = state_26540;(statearr_26561[(7)] = inst_26501);
(statearr_26561[(8)] = inst_26500__$1);
(statearr_26561[(14)] = inst_26513);
return statearr_26561;
})();var statearr_26562_26584 = state_26540__$1;(statearr_26562_26584[(2)] = null);
(statearr_26562_26584[(1)] = (2));
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
});})(c__9125__auto___26570,out))
;return ((function (switch__9110__auto__,c__9125__auto___26570,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26566[(0)] = state_machine__9111__auto__);
(statearr_26566[(1)] = (1));
return statearr_26566;
});
var state_machine__9111__auto____1 = (function (state_26540){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26540);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26567){if((e26567 instanceof Object))
{var ex__9114__auto__ = e26567;var statearr_26568_26585 = state_26540;(statearr_26568_26585[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26567;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26586 = state_26540;
state_26540 = G__26586;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26540){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26570,out))
})();var state__9127__auto__ = (function (){var statearr_26569 = f__9126__auto__.call(null);(statearr_26569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26570);
return statearr_26569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26570,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
