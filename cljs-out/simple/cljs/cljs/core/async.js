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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23526 = (function (f,fn_handler,meta23527){
this.f = f;
this.fn_handler = fn_handler;
this.meta23527 = meta23527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23526.cljs$lang$type = true;
cljs.core.async.t23526.cljs$lang$ctorStr = "cljs.core.async/t23526";
cljs.core.async.t23526.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23526");
});
cljs.core.async.t23526.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23528){var self__ = this;
var _23528__$1 = this;return self__.meta23527;
});
cljs.core.async.t23526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23528,meta23527__$1){var self__ = this;
var _23528__$1 = this;return (new cljs.core.async.t23526(self__.f,self__.fn_handler,meta23527__$1));
});
cljs.core.async.__GT_t23526 = (function __GT_t23526(f__$1,fn_handler__$1,meta23527){return (new cljs.core.async.t23526(f__$1,fn_handler__$1,meta23527));
});
}
return (new cljs.core.async.t23526(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23530 = buff;if(G__23530)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23530.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23530.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23530);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23530);
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
{var val_23531 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23531);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23531,ret){
return (function (){return fn1.call(null,val_23531);
});})(val_23531,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23532 = n;var x_23533 = (0);while(true){
if((x_23533 < n__4508__auto___23532))
{(a[x_23533] = (0));
{
var G__23534 = (x_23533 + (1));
x_23533 = G__23534;
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
var G__23535 = (i + (1));
i = G__23535;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23539 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23539 = (function (flag,alt_flag,meta23540){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23540 = meta23540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23539.cljs$lang$type = true;
cljs.core.async.t23539.cljs$lang$ctorStr = "cljs.core.async/t23539";
cljs.core.async.t23539.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23539");
});})(flag))
;
cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23541){var self__ = this;
var _23541__$1 = this;return self__.meta23540;
});})(flag))
;
cljs.core.async.t23539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23541,meta23540__$1){var self__ = this;
var _23541__$1 = this;return (new cljs.core.async.t23539(self__.flag,self__.alt_flag,meta23540__$1));
});})(flag))
;
cljs.core.async.__GT_t23539 = ((function (flag){
return (function __GT_t23539(flag__$1,alt_flag__$1,meta23540){return (new cljs.core.async.t23539(flag__$1,alt_flag__$1,meta23540));
});})(flag))
;
}
return (new cljs.core.async.t23539(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23545 = (function (cb,flag,alt_handler,meta23546){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23546 = meta23546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23545.cljs$lang$type = true;
cljs.core.async.t23545.cljs$lang$ctorStr = "cljs.core.async/t23545";
cljs.core.async.t23545.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23545");
});
cljs.core.async.t23545.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23547){var self__ = this;
var _23547__$1 = this;return self__.meta23546;
});
cljs.core.async.t23545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23547,meta23546__$1){var self__ = this;
var _23547__$1 = this;return (new cljs.core.async.t23545(self__.cb,self__.flag,self__.alt_handler,meta23546__$1));
});
cljs.core.async.__GT_t23545 = (function __GT_t23545(cb__$1,flag__$1,alt_handler__$1,meta23546){return (new cljs.core.async.t23545(cb__$1,flag__$1,alt_handler__$1,meta23546));
});
}
return (new cljs.core.async.t23545(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23548_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23548_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23549_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23549_SHARP_,port], null));
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
var G__23550 = (i + (1));
i = G__23550;
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
var alts_BANG___delegate = function (ports,p__23551){var map__23553 = p__23551;var map__23553__$1 = ((cljs.core.seq_QMARK_.call(null,map__23553))?cljs.core.apply.call(null,cljs.core.hash_map,map__23553):map__23553);var opts = map__23553__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23551 = null;if (arguments.length > 1) {
  p__23551 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23551);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23554){
var ports = cljs.core.first(arglist__23554);
var p__23551 = cljs.core.rest(arglist__23554);
return alts_BANG___delegate(ports,p__23551);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23649 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23649){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23649){
return (function (state_23625){var state_val_23626 = (state_23625[(1)]);if((state_val_23626 === (7)))
{var inst_23621 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23627_23650 = state_23625__$1;(statearr_23627_23650[(2)] = inst_23621);
(statearr_23627_23650[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (1)))
{var state_23625__$1 = state_23625;var statearr_23628_23651 = state_23625__$1;(statearr_23628_23651[(2)] = null);
(statearr_23628_23651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (4)))
{var inst_23604 = (state_23625[(7)]);var inst_23604__$1 = (state_23625[(2)]);var inst_23605 = (inst_23604__$1 == null);var state_23625__$1 = (function (){var statearr_23629 = state_23625;(statearr_23629[(7)] = inst_23604__$1);
return statearr_23629;
})();if(cljs.core.truth_(inst_23605))
{var statearr_23630_23652 = state_23625__$1;(statearr_23630_23652[(1)] = (5));
} else
{var statearr_23631_23653 = state_23625__$1;(statearr_23631_23653[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (13)))
{var state_23625__$1 = state_23625;var statearr_23632_23654 = state_23625__$1;(statearr_23632_23654[(2)] = null);
(statearr_23632_23654[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (6)))
{var inst_23604 = (state_23625[(7)]);var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23625__$1,(11),to,inst_23604);
} else
{if((state_val_23626 === (3)))
{var inst_23623 = (state_23625[(2)]);var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23625__$1,inst_23623);
} else
{if((state_val_23626 === (12)))
{var state_23625__$1 = state_23625;var statearr_23633_23655 = state_23625__$1;(statearr_23633_23655[(2)] = null);
(statearr_23633_23655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (2)))
{var state_23625__$1 = state_23625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23625__$1,(4),from);
} else
{if((state_val_23626 === (11)))
{var inst_23614 = (state_23625[(2)]);var state_23625__$1 = state_23625;if(cljs.core.truth_(inst_23614))
{var statearr_23634_23656 = state_23625__$1;(statearr_23634_23656[(1)] = (12));
} else
{var statearr_23635_23657 = state_23625__$1;(statearr_23635_23657[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (9)))
{var state_23625__$1 = state_23625;var statearr_23636_23658 = state_23625__$1;(statearr_23636_23658[(2)] = null);
(statearr_23636_23658[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (5)))
{var state_23625__$1 = state_23625;if(cljs.core.truth_(close_QMARK_))
{var statearr_23637_23659 = state_23625__$1;(statearr_23637_23659[(1)] = (8));
} else
{var statearr_23638_23660 = state_23625__$1;(statearr_23638_23660[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (14)))
{var inst_23619 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23639_23661 = state_23625__$1;(statearr_23639_23661[(2)] = inst_23619);
(statearr_23639_23661[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (10)))
{var inst_23611 = (state_23625[(2)]);var state_23625__$1 = state_23625;var statearr_23640_23662 = state_23625__$1;(statearr_23640_23662[(2)] = inst_23611);
(statearr_23640_23662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23626 === (8)))
{var inst_23608 = cljs.core.async.close_BANG_.call(null,to);var state_23625__$1 = state_23625;var statearr_23641_23663 = state_23625__$1;(statearr_23641_23663[(2)] = inst_23608);
(statearr_23641_23663[(1)] = (10));
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
});})(c__9125__auto___23649))
;return ((function (switch__9110__auto__,c__9125__auto___23649){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23645 = [null,null,null,null,null,null,null,null];(statearr_23645[(0)] = state_machine__9111__auto__);
(statearr_23645[(1)] = (1));
return statearr_23645;
});
var state_machine__9111__auto____1 = (function (state_23625){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23625);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23646){if((e23646 instanceof Object))
{var ex__9114__auto__ = e23646;var statearr_23647_23664 = state_23625;(statearr_23647_23664[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23646;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23665 = state_23625;
state_23625 = G__23665;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23625){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23649))
})();var state__9127__auto__ = (function (){var statearr_23648 = f__9126__auto__.call(null);(statearr_23648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23649);
return statearr_23648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23649))
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
return (function (p__23849){var vec__23850 = p__23849;var v = cljs.core.nth.call(null,vec__23850,(0),null);var p = cljs.core.nth.call(null,vec__23850,(1),null);var job = vec__23850;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___24032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24032,res,vec__23850,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24032,res,vec__23850,v,p,job,jobs,results){
return (function (state_23855){var state_val_23856 = (state_23855[(1)]);if((state_val_23856 === (2)))
{var inst_23852 = (state_23855[(2)]);var inst_23853 = cljs.core.async.close_BANG_.call(null,res);var state_23855__$1 = (function (){var statearr_23857 = state_23855;(statearr_23857[(7)] = inst_23852);
return statearr_23857;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23855__$1,inst_23853);
} else
{if((state_val_23856 === (1)))
{var state_23855__$1 = state_23855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23855__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___24032,res,vec__23850,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___24032,res,vec__23850,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23861 = [null,null,null,null,null,null,null,null];(statearr_23861[(0)] = state_machine__9111__auto__);
(statearr_23861[(1)] = (1));
return statearr_23861;
});
var state_machine__9111__auto____1 = (function (state_23855){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23855);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23862){if((e23862 instanceof Object))
{var ex__9114__auto__ = e23862;var statearr_23863_24033 = state_23855;(statearr_23863_24033[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23862;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24034 = state_23855;
state_23855 = G__24034;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23855){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24032,res,vec__23850,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23864 = f__9126__auto__.call(null);(statearr_23864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24032);
return statearr_23864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24032,res,vec__23850,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23865){var vec__23866 = p__23865;var v = cljs.core.nth.call(null,vec__23866,(0),null);var p = cljs.core.nth.call(null,vec__23866,(1),null);var job = vec__23866;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24035 = n;var __24036 = (0);while(true){
if((__24036 < n__4508__auto___24035))
{var G__23867_24037 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23867_24037) {
case "async":
var c__9125__auto___24039 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24036,c__9125__auto___24039,G__23867_24037,n__4508__auto___24035,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24036,c__9125__auto___24039,G__23867_24037,n__4508__auto___24035,jobs,results,process,async){
return (function (state_23880){var state_val_23881 = (state_23880[(1)]);if((state_val_23881 === (7)))
{var inst_23876 = (state_23880[(2)]);var state_23880__$1 = state_23880;var statearr_23882_24040 = state_23880__$1;(statearr_23882_24040[(2)] = inst_23876);
(statearr_23882_24040[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23881 === (6)))
{var state_23880__$1 = state_23880;var statearr_23883_24041 = state_23880__$1;(statearr_23883_24041[(2)] = null);
(statearr_23883_24041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23881 === (5)))
{var state_23880__$1 = state_23880;var statearr_23884_24042 = state_23880__$1;(statearr_23884_24042[(2)] = null);
(statearr_23884_24042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23881 === (4)))
{var inst_23870 = (state_23880[(2)]);var inst_23871 = async.call(null,inst_23870);var state_23880__$1 = state_23880;if(cljs.core.truth_(inst_23871))
{var statearr_23885_24043 = state_23880__$1;(statearr_23885_24043[(1)] = (5));
} else
{var statearr_23886_24044 = state_23880__$1;(statearr_23886_24044[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23881 === (3)))
{var inst_23878 = (state_23880[(2)]);var state_23880__$1 = state_23880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23880__$1,inst_23878);
} else
{if((state_val_23881 === (2)))
{var state_23880__$1 = state_23880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23880__$1,(4),jobs);
} else
{if((state_val_23881 === (1)))
{var state_23880__$1 = state_23880;var statearr_23887_24045 = state_23880__$1;(statearr_23887_24045[(2)] = null);
(statearr_23887_24045[(1)] = (2));
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
});})(__24036,c__9125__auto___24039,G__23867_24037,n__4508__auto___24035,jobs,results,process,async))
;return ((function (__24036,switch__9110__auto__,c__9125__auto___24039,G__23867_24037,n__4508__auto___24035,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23891 = [null,null,null,null,null,null,null];(statearr_23891[(0)] = state_machine__9111__auto__);
(statearr_23891[(1)] = (1));
return statearr_23891;
});
var state_machine__9111__auto____1 = (function (state_23880){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23880);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object))
{var ex__9114__auto__ = e23892;var statearr_23893_24046 = state_23880;(statearr_23893_24046[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23892;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24047 = state_23880;
state_23880 = G__24047;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23880){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24036,switch__9110__auto__,c__9125__auto___24039,G__23867_24037,n__4508__auto___24035,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23894 = f__9126__auto__.call(null);(statearr_23894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24039);
return statearr_23894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24036,c__9125__auto___24039,G__23867_24037,n__4508__auto___24035,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24048 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24036,c__9125__auto___24048,G__23867_24037,n__4508__auto___24035,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24036,c__9125__auto___24048,G__23867_24037,n__4508__auto___24035,jobs,results,process,async){
return (function (state_23907){var state_val_23908 = (state_23907[(1)]);if((state_val_23908 === (7)))
{var inst_23903 = (state_23907[(2)]);var state_23907__$1 = state_23907;var statearr_23909_24049 = state_23907__$1;(statearr_23909_24049[(2)] = inst_23903);
(statearr_23909_24049[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23908 === (6)))
{var state_23907__$1 = state_23907;var statearr_23910_24050 = state_23907__$1;(statearr_23910_24050[(2)] = null);
(statearr_23910_24050[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23908 === (5)))
{var state_23907__$1 = state_23907;var statearr_23911_24051 = state_23907__$1;(statearr_23911_24051[(2)] = null);
(statearr_23911_24051[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23908 === (4)))
{var inst_23897 = (state_23907[(2)]);var inst_23898 = process.call(null,inst_23897);var state_23907__$1 = state_23907;if(cljs.core.truth_(inst_23898))
{var statearr_23912_24052 = state_23907__$1;(statearr_23912_24052[(1)] = (5));
} else
{var statearr_23913_24053 = state_23907__$1;(statearr_23913_24053[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23908 === (3)))
{var inst_23905 = (state_23907[(2)]);var state_23907__$1 = state_23907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23907__$1,inst_23905);
} else
{if((state_val_23908 === (2)))
{var state_23907__$1 = state_23907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23907__$1,(4),jobs);
} else
{if((state_val_23908 === (1)))
{var state_23907__$1 = state_23907;var statearr_23914_24054 = state_23907__$1;(statearr_23914_24054[(2)] = null);
(statearr_23914_24054[(1)] = (2));
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
});})(__24036,c__9125__auto___24048,G__23867_24037,n__4508__auto___24035,jobs,results,process,async))
;return ((function (__24036,switch__9110__auto__,c__9125__auto___24048,G__23867_24037,n__4508__auto___24035,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23918 = [null,null,null,null,null,null,null];(statearr_23918[(0)] = state_machine__9111__auto__);
(statearr_23918[(1)] = (1));
return statearr_23918;
});
var state_machine__9111__auto____1 = (function (state_23907){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23907);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23919){if((e23919 instanceof Object))
{var ex__9114__auto__ = e23919;var statearr_23920_24055 = state_23907;(statearr_23920_24055[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24056 = state_23907;
state_23907 = G__24056;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23907){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24036,switch__9110__auto__,c__9125__auto___24048,G__23867_24037,n__4508__auto___24035,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23921 = f__9126__auto__.call(null);(statearr_23921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24048);
return statearr_23921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24036,c__9125__auto___24048,G__23867_24037,n__4508__auto___24035,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24057 = (__24036 + (1));
__24036 = G__24057;
continue;
}
} else
{}
break;
}
var c__9125__auto___24058 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24058,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24058,jobs,results,process,async){
return (function (state_23943){var state_val_23944 = (state_23943[(1)]);if((state_val_23944 === (9)))
{var inst_23936 = (state_23943[(2)]);var state_23943__$1 = (function (){var statearr_23945 = state_23943;(statearr_23945[(7)] = inst_23936);
return statearr_23945;
})();var statearr_23946_24059 = state_23943__$1;(statearr_23946_24059[(2)] = null);
(statearr_23946_24059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23944 === (8)))
{var inst_23929 = (state_23943[(8)]);var inst_23934 = (state_23943[(2)]);var state_23943__$1 = (function (){var statearr_23947 = state_23943;(statearr_23947[(9)] = inst_23934);
return statearr_23947;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23943__$1,(9),results,inst_23929);
} else
{if((state_val_23944 === (7)))
{var inst_23939 = (state_23943[(2)]);var state_23943__$1 = state_23943;var statearr_23948_24060 = state_23943__$1;(statearr_23948_24060[(2)] = inst_23939);
(statearr_23948_24060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23944 === (6)))
{var inst_23924 = (state_23943[(10)]);var inst_23929 = (state_23943[(8)]);var inst_23929__$1 = cljs.core.async.chan.call(null,(1));var inst_23930 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23931 = [inst_23924,inst_23929__$1];var inst_23932 = (new cljs.core.PersistentVector(null,2,(5),inst_23930,inst_23931,null));var state_23943__$1 = (function (){var statearr_23949 = state_23943;(statearr_23949[(8)] = inst_23929__$1);
return statearr_23949;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23943__$1,(8),jobs,inst_23932);
} else
{if((state_val_23944 === (5)))
{var inst_23927 = cljs.core.async.close_BANG_.call(null,jobs);var state_23943__$1 = state_23943;var statearr_23950_24061 = state_23943__$1;(statearr_23950_24061[(2)] = inst_23927);
(statearr_23950_24061[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23944 === (4)))
{var inst_23924 = (state_23943[(10)]);var inst_23924__$1 = (state_23943[(2)]);var inst_23925 = (inst_23924__$1 == null);var state_23943__$1 = (function (){var statearr_23951 = state_23943;(statearr_23951[(10)] = inst_23924__$1);
return statearr_23951;
})();if(cljs.core.truth_(inst_23925))
{var statearr_23952_24062 = state_23943__$1;(statearr_23952_24062[(1)] = (5));
} else
{var statearr_23953_24063 = state_23943__$1;(statearr_23953_24063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23944 === (3)))
{var inst_23941 = (state_23943[(2)]);var state_23943__$1 = state_23943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23943__$1,inst_23941);
} else
{if((state_val_23944 === (2)))
{var state_23943__$1 = state_23943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23943__$1,(4),from);
} else
{if((state_val_23944 === (1)))
{var state_23943__$1 = state_23943;var statearr_23954_24064 = state_23943__$1;(statearr_23954_24064[(2)] = null);
(statearr_23954_24064[(1)] = (2));
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
});})(c__9125__auto___24058,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24058,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23958 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23958[(0)] = state_machine__9111__auto__);
(statearr_23958[(1)] = (1));
return statearr_23958;
});
var state_machine__9111__auto____1 = (function (state_23943){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23943);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23959){if((e23959 instanceof Object))
{var ex__9114__auto__ = e23959;var statearr_23960_24065 = state_23943;(statearr_23960_24065[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23959;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24066 = state_23943;
state_23943 = G__24066;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23943){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24058,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23961 = f__9126__auto__.call(null);(statearr_23961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24058);
return statearr_23961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24058,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23999){var state_val_24000 = (state_23999[(1)]);if((state_val_24000 === (7)))
{var inst_23995 = (state_23999[(2)]);var state_23999__$1 = state_23999;var statearr_24001_24067 = state_23999__$1;(statearr_24001_24067[(2)] = inst_23995);
(statearr_24001_24067[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (20)))
{var state_23999__$1 = state_23999;var statearr_24002_24068 = state_23999__$1;(statearr_24002_24068[(2)] = null);
(statearr_24002_24068[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (1)))
{var state_23999__$1 = state_23999;var statearr_24003_24069 = state_23999__$1;(statearr_24003_24069[(2)] = null);
(statearr_24003_24069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (4)))
{var inst_23964 = (state_23999[(7)]);var inst_23964__$1 = (state_23999[(2)]);var inst_23965 = (inst_23964__$1 == null);var state_23999__$1 = (function (){var statearr_24004 = state_23999;(statearr_24004[(7)] = inst_23964__$1);
return statearr_24004;
})();if(cljs.core.truth_(inst_23965))
{var statearr_24005_24070 = state_23999__$1;(statearr_24005_24070[(1)] = (5));
} else
{var statearr_24006_24071 = state_23999__$1;(statearr_24006_24071[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (15)))
{var inst_23977 = (state_23999[(8)]);var state_23999__$1 = state_23999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23999__$1,(18),to,inst_23977);
} else
{if((state_val_24000 === (21)))
{var inst_23990 = (state_23999[(2)]);var state_23999__$1 = state_23999;var statearr_24007_24072 = state_23999__$1;(statearr_24007_24072[(2)] = inst_23990);
(statearr_24007_24072[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (13)))
{var inst_23992 = (state_23999[(2)]);var state_23999__$1 = (function (){var statearr_24008 = state_23999;(statearr_24008[(9)] = inst_23992);
return statearr_24008;
})();var statearr_24009_24073 = state_23999__$1;(statearr_24009_24073[(2)] = null);
(statearr_24009_24073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (6)))
{var inst_23964 = (state_23999[(7)]);var state_23999__$1 = state_23999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23999__$1,(11),inst_23964);
} else
{if((state_val_24000 === (17)))
{var inst_23985 = (state_23999[(2)]);var state_23999__$1 = state_23999;if(cljs.core.truth_(inst_23985))
{var statearr_24010_24074 = state_23999__$1;(statearr_24010_24074[(1)] = (19));
} else
{var statearr_24011_24075 = state_23999__$1;(statearr_24011_24075[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (3)))
{var inst_23997 = (state_23999[(2)]);var state_23999__$1 = state_23999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23999__$1,inst_23997);
} else
{if((state_val_24000 === (12)))
{var inst_23974 = (state_23999[(10)]);var state_23999__$1 = state_23999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23999__$1,(14),inst_23974);
} else
{if((state_val_24000 === (2)))
{var state_23999__$1 = state_23999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23999__$1,(4),results);
} else
{if((state_val_24000 === (19)))
{var state_23999__$1 = state_23999;var statearr_24012_24076 = state_23999__$1;(statearr_24012_24076[(2)] = null);
(statearr_24012_24076[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (11)))
{var inst_23974 = (state_23999[(2)]);var state_23999__$1 = (function (){var statearr_24013 = state_23999;(statearr_24013[(10)] = inst_23974);
return statearr_24013;
})();var statearr_24014_24077 = state_23999__$1;(statearr_24014_24077[(2)] = null);
(statearr_24014_24077[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (9)))
{var state_23999__$1 = state_23999;var statearr_24015_24078 = state_23999__$1;(statearr_24015_24078[(2)] = null);
(statearr_24015_24078[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (5)))
{var state_23999__$1 = state_23999;if(cljs.core.truth_(close_QMARK_))
{var statearr_24016_24079 = state_23999__$1;(statearr_24016_24079[(1)] = (8));
} else
{var statearr_24017_24080 = state_23999__$1;(statearr_24017_24080[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (14)))
{var inst_23979 = (state_23999[(11)]);var inst_23977 = (state_23999[(8)]);var inst_23977__$1 = (state_23999[(2)]);var inst_23978 = (inst_23977__$1 == null);var inst_23979__$1 = cljs.core.not.call(null,inst_23978);var state_23999__$1 = (function (){var statearr_24018 = state_23999;(statearr_24018[(11)] = inst_23979__$1);
(statearr_24018[(8)] = inst_23977__$1);
return statearr_24018;
})();if(inst_23979__$1)
{var statearr_24019_24081 = state_23999__$1;(statearr_24019_24081[(1)] = (15));
} else
{var statearr_24020_24082 = state_23999__$1;(statearr_24020_24082[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (16)))
{var inst_23979 = (state_23999[(11)]);var state_23999__$1 = state_23999;var statearr_24021_24083 = state_23999__$1;(statearr_24021_24083[(2)] = inst_23979);
(statearr_24021_24083[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (10)))
{var inst_23971 = (state_23999[(2)]);var state_23999__$1 = state_23999;var statearr_24022_24084 = state_23999__$1;(statearr_24022_24084[(2)] = inst_23971);
(statearr_24022_24084[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (18)))
{var inst_23982 = (state_23999[(2)]);var state_23999__$1 = state_23999;var statearr_24023_24085 = state_23999__$1;(statearr_24023_24085[(2)] = inst_23982);
(statearr_24023_24085[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24000 === (8)))
{var inst_23968 = cljs.core.async.close_BANG_.call(null,to);var state_23999__$1 = state_23999;var statearr_24024_24086 = state_23999__$1;(statearr_24024_24086[(2)] = inst_23968);
(statearr_24024_24086[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_24028 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24028[(0)] = state_machine__9111__auto__);
(statearr_24028[(1)] = (1));
return statearr_24028;
});
var state_machine__9111__auto____1 = (function (state_23999){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23999);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24029){if((e24029 instanceof Object))
{var ex__9114__auto__ = e24029;var statearr_24030_24087 = state_23999;(statearr_24030_24087[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23999);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24088 = state_23999;
state_23999 = G__24088;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23999){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_24031 = f__9126__auto__.call(null);(statearr_24031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24031;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24189 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24189,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24189,tc,fc){
return (function (state_24164){var state_val_24165 = (state_24164[(1)]);if((state_val_24165 === (7)))
{var inst_24160 = (state_24164[(2)]);var state_24164__$1 = state_24164;var statearr_24166_24190 = state_24164__$1;(statearr_24166_24190[(2)] = inst_24160);
(statearr_24166_24190[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (1)))
{var state_24164__$1 = state_24164;var statearr_24167_24191 = state_24164__$1;(statearr_24167_24191[(2)] = null);
(statearr_24167_24191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (4)))
{var inst_24141 = (state_24164[(7)]);var inst_24141__$1 = (state_24164[(2)]);var inst_24142 = (inst_24141__$1 == null);var state_24164__$1 = (function (){var statearr_24168 = state_24164;(statearr_24168[(7)] = inst_24141__$1);
return statearr_24168;
})();if(cljs.core.truth_(inst_24142))
{var statearr_24169_24192 = state_24164__$1;(statearr_24169_24192[(1)] = (5));
} else
{var statearr_24170_24193 = state_24164__$1;(statearr_24170_24193[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (13)))
{var state_24164__$1 = state_24164;var statearr_24171_24194 = state_24164__$1;(statearr_24171_24194[(2)] = null);
(statearr_24171_24194[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (6)))
{var inst_24141 = (state_24164[(7)]);var inst_24147 = p.call(null,inst_24141);var state_24164__$1 = state_24164;if(cljs.core.truth_(inst_24147))
{var statearr_24172_24195 = state_24164__$1;(statearr_24172_24195[(1)] = (9));
} else
{var statearr_24173_24196 = state_24164__$1;(statearr_24173_24196[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (3)))
{var inst_24162 = (state_24164[(2)]);var state_24164__$1 = state_24164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24164__$1,inst_24162);
} else
{if((state_val_24165 === (12)))
{var state_24164__$1 = state_24164;var statearr_24174_24197 = state_24164__$1;(statearr_24174_24197[(2)] = null);
(statearr_24174_24197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (2)))
{var state_24164__$1 = state_24164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24164__$1,(4),ch);
} else
{if((state_val_24165 === (11)))
{var inst_24141 = (state_24164[(7)]);var inst_24151 = (state_24164[(2)]);var state_24164__$1 = state_24164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24164__$1,(8),inst_24151,inst_24141);
} else
{if((state_val_24165 === (9)))
{var state_24164__$1 = state_24164;var statearr_24175_24198 = state_24164__$1;(statearr_24175_24198[(2)] = tc);
(statearr_24175_24198[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (5)))
{var inst_24144 = cljs.core.async.close_BANG_.call(null,tc);var inst_24145 = cljs.core.async.close_BANG_.call(null,fc);var state_24164__$1 = (function (){var statearr_24176 = state_24164;(statearr_24176[(8)] = inst_24144);
return statearr_24176;
})();var statearr_24177_24199 = state_24164__$1;(statearr_24177_24199[(2)] = inst_24145);
(statearr_24177_24199[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (14)))
{var inst_24158 = (state_24164[(2)]);var state_24164__$1 = state_24164;var statearr_24178_24200 = state_24164__$1;(statearr_24178_24200[(2)] = inst_24158);
(statearr_24178_24200[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (10)))
{var state_24164__$1 = state_24164;var statearr_24179_24201 = state_24164__$1;(statearr_24179_24201[(2)] = fc);
(statearr_24179_24201[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24165 === (8)))
{var inst_24153 = (state_24164[(2)]);var state_24164__$1 = state_24164;if(cljs.core.truth_(inst_24153))
{var statearr_24180_24202 = state_24164__$1;(statearr_24180_24202[(1)] = (12));
} else
{var statearr_24181_24203 = state_24164__$1;(statearr_24181_24203[(1)] = (13));
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
});})(c__9125__auto___24189,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24189,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24185 = [null,null,null,null,null,null,null,null,null];(statearr_24185[(0)] = state_machine__9111__auto__);
(statearr_24185[(1)] = (1));
return statearr_24185;
});
var state_machine__9111__auto____1 = (function (state_24164){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24164);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24186){if((e24186 instanceof Object))
{var ex__9114__auto__ = e24186;var statearr_24187_24204 = state_24164;(statearr_24187_24204[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24164);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24205 = state_24164;
state_24164 = G__24205;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24164){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24189,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24188 = f__9126__auto__.call(null);(statearr_24188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24189);
return statearr_24188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24189,tc,fc))
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
return (function (state_24252){var state_val_24253 = (state_24252[(1)]);if((state_val_24253 === (7)))
{var inst_24248 = (state_24252[(2)]);var state_24252__$1 = state_24252;var statearr_24254_24270 = state_24252__$1;(statearr_24254_24270[(2)] = inst_24248);
(statearr_24254_24270[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24253 === (6)))
{var inst_24238 = (state_24252[(7)]);var inst_24241 = (state_24252[(8)]);var inst_24245 = f.call(null,inst_24238,inst_24241);var inst_24238__$1 = inst_24245;var state_24252__$1 = (function (){var statearr_24255 = state_24252;(statearr_24255[(7)] = inst_24238__$1);
return statearr_24255;
})();var statearr_24256_24271 = state_24252__$1;(statearr_24256_24271[(2)] = null);
(statearr_24256_24271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24253 === (5)))
{var inst_24238 = (state_24252[(7)]);var state_24252__$1 = state_24252;var statearr_24257_24272 = state_24252__$1;(statearr_24257_24272[(2)] = inst_24238);
(statearr_24257_24272[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24253 === (4)))
{var inst_24241 = (state_24252[(8)]);var inst_24241__$1 = (state_24252[(2)]);var inst_24242 = (inst_24241__$1 == null);var state_24252__$1 = (function (){var statearr_24258 = state_24252;(statearr_24258[(8)] = inst_24241__$1);
return statearr_24258;
})();if(cljs.core.truth_(inst_24242))
{var statearr_24259_24273 = state_24252__$1;(statearr_24259_24273[(1)] = (5));
} else
{var statearr_24260_24274 = state_24252__$1;(statearr_24260_24274[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24253 === (3)))
{var inst_24250 = (state_24252[(2)]);var state_24252__$1 = state_24252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24252__$1,inst_24250);
} else
{if((state_val_24253 === (2)))
{var state_24252__$1 = state_24252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24252__$1,(4),ch);
} else
{if((state_val_24253 === (1)))
{var inst_24238 = init;var state_24252__$1 = (function (){var statearr_24261 = state_24252;(statearr_24261[(7)] = inst_24238);
return statearr_24261;
})();var statearr_24262_24275 = state_24252__$1;(statearr_24262_24275[(2)] = null);
(statearr_24262_24275[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24266 = [null,null,null,null,null,null,null,null,null];(statearr_24266[(0)] = state_machine__9111__auto__);
(statearr_24266[(1)] = (1));
return statearr_24266;
});
var state_machine__9111__auto____1 = (function (state_24252){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24252);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24267){if((e24267 instanceof Object))
{var ex__9114__auto__ = e24267;var statearr_24268_24276 = state_24252;(statearr_24268_24276[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24277 = state_24252;
state_24252 = G__24277;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24252){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24269 = f__9126__auto__.call(null);(statearr_24269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24269;
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
return (function (state_24351){var state_val_24352 = (state_24351[(1)]);if((state_val_24352 === (7)))
{var inst_24333 = (state_24351[(2)]);var state_24351__$1 = state_24351;var statearr_24353_24376 = state_24351__$1;(statearr_24353_24376[(2)] = inst_24333);
(statearr_24353_24376[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (1)))
{var inst_24327 = cljs.core.seq.call(null,coll);var inst_24328 = inst_24327;var state_24351__$1 = (function (){var statearr_24354 = state_24351;(statearr_24354[(7)] = inst_24328);
return statearr_24354;
})();var statearr_24355_24377 = state_24351__$1;(statearr_24355_24377[(2)] = null);
(statearr_24355_24377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (4)))
{var inst_24328 = (state_24351[(7)]);var inst_24331 = cljs.core.first.call(null,inst_24328);var state_24351__$1 = state_24351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24351__$1,(7),ch,inst_24331);
} else
{if((state_val_24352 === (13)))
{var inst_24345 = (state_24351[(2)]);var state_24351__$1 = state_24351;var statearr_24356_24378 = state_24351__$1;(statearr_24356_24378[(2)] = inst_24345);
(statearr_24356_24378[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (6)))
{var inst_24336 = (state_24351[(2)]);var state_24351__$1 = state_24351;if(cljs.core.truth_(inst_24336))
{var statearr_24357_24379 = state_24351__$1;(statearr_24357_24379[(1)] = (8));
} else
{var statearr_24358_24380 = state_24351__$1;(statearr_24358_24380[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (3)))
{var inst_24349 = (state_24351[(2)]);var state_24351__$1 = state_24351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24351__$1,inst_24349);
} else
{if((state_val_24352 === (12)))
{var state_24351__$1 = state_24351;var statearr_24359_24381 = state_24351__$1;(statearr_24359_24381[(2)] = null);
(statearr_24359_24381[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (2)))
{var inst_24328 = (state_24351[(7)]);var state_24351__$1 = state_24351;if(cljs.core.truth_(inst_24328))
{var statearr_24360_24382 = state_24351__$1;(statearr_24360_24382[(1)] = (4));
} else
{var statearr_24361_24383 = state_24351__$1;(statearr_24361_24383[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (11)))
{var inst_24342 = cljs.core.async.close_BANG_.call(null,ch);var state_24351__$1 = state_24351;var statearr_24362_24384 = state_24351__$1;(statearr_24362_24384[(2)] = inst_24342);
(statearr_24362_24384[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (9)))
{var state_24351__$1 = state_24351;if(cljs.core.truth_(close_QMARK_))
{var statearr_24363_24385 = state_24351__$1;(statearr_24363_24385[(1)] = (11));
} else
{var statearr_24364_24386 = state_24351__$1;(statearr_24364_24386[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (5)))
{var inst_24328 = (state_24351[(7)]);var state_24351__$1 = state_24351;var statearr_24365_24387 = state_24351__$1;(statearr_24365_24387[(2)] = inst_24328);
(statearr_24365_24387[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (10)))
{var inst_24347 = (state_24351[(2)]);var state_24351__$1 = state_24351;var statearr_24366_24388 = state_24351__$1;(statearr_24366_24388[(2)] = inst_24347);
(statearr_24366_24388[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24352 === (8)))
{var inst_24328 = (state_24351[(7)]);var inst_24338 = cljs.core.next.call(null,inst_24328);var inst_24328__$1 = inst_24338;var state_24351__$1 = (function (){var statearr_24367 = state_24351;(statearr_24367[(7)] = inst_24328__$1);
return statearr_24367;
})();var statearr_24368_24389 = state_24351__$1;(statearr_24368_24389[(2)] = null);
(statearr_24368_24389[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24372 = [null,null,null,null,null,null,null,null];(statearr_24372[(0)] = state_machine__9111__auto__);
(statearr_24372[(1)] = (1));
return statearr_24372;
});
var state_machine__9111__auto____1 = (function (state_24351){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24351);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24373){if((e24373 instanceof Object))
{var ex__9114__auto__ = e24373;var statearr_24374_24390 = state_24351;(statearr_24374_24390[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24373;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24391 = state_24351;
state_24351 = G__24391;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24351){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24375 = f__9126__auto__.call(null);(statearr_24375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24375;
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
cljs.core.async.Mux = (function (){var obj24393 = {};return obj24393;
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
cljs.core.async.Mult = (function (){var obj24395 = {};return obj24395;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24617 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24617 = (function (cs,ch,mult,meta24618){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24618 = meta24618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24617.cljs$lang$type = true;
cljs.core.async.t24617.cljs$lang$ctorStr = "cljs.core.async/t24617";
cljs.core.async.t24617.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24617");
});})(cs))
;
cljs.core.async.t24617.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24617.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24617.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24617.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24617.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24619){var self__ = this;
var _24619__$1 = this;return self__.meta24618;
});})(cs))
;
cljs.core.async.t24617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24619,meta24618__$1){var self__ = this;
var _24619__$1 = this;return (new cljs.core.async.t24617(self__.cs,self__.ch,self__.mult,meta24618__$1));
});})(cs))
;
cljs.core.async.__GT_t24617 = ((function (cs){
return (function __GT_t24617(cs__$1,ch__$1,mult__$1,meta24618){return (new cljs.core.async.t24617(cs__$1,ch__$1,mult__$1,meta24618));
});})(cs))
;
}
return (new cljs.core.async.t24617(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24838,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24838,cs,m,dchan,dctr,done){
return (function (state_24750){var state_val_24751 = (state_24750[(1)]);if((state_val_24751 === (7)))
{var inst_24746 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24752_24839 = state_24750__$1;(statearr_24752_24839[(2)] = inst_24746);
(statearr_24752_24839[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (20)))
{var inst_24651 = (state_24750[(7)]);var inst_24661 = cljs.core.first.call(null,inst_24651);var inst_24662 = cljs.core.nth.call(null,inst_24661,(0),null);var inst_24663 = cljs.core.nth.call(null,inst_24661,(1),null);var state_24750__$1 = (function (){var statearr_24753 = state_24750;(statearr_24753[(8)] = inst_24662);
return statearr_24753;
})();if(cljs.core.truth_(inst_24663))
{var statearr_24754_24840 = state_24750__$1;(statearr_24754_24840[(1)] = (22));
} else
{var statearr_24755_24841 = state_24750__$1;(statearr_24755_24841[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (27)))
{var inst_24698 = (state_24750[(9)]);var inst_24693 = (state_24750[(10)]);var inst_24691 = (state_24750[(11)]);var inst_24622 = (state_24750[(12)]);var inst_24698__$1 = cljs.core._nth.call(null,inst_24691,inst_24693);var inst_24699 = cljs.core.async.put_BANG_.call(null,inst_24698__$1,inst_24622,done);var state_24750__$1 = (function (){var statearr_24756 = state_24750;(statearr_24756[(9)] = inst_24698__$1);
return statearr_24756;
})();if(cljs.core.truth_(inst_24699))
{var statearr_24757_24842 = state_24750__$1;(statearr_24757_24842[(1)] = (30));
} else
{var statearr_24758_24843 = state_24750__$1;(statearr_24758_24843[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (1)))
{var state_24750__$1 = state_24750;var statearr_24759_24844 = state_24750__$1;(statearr_24759_24844[(2)] = null);
(statearr_24759_24844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (24)))
{var inst_24651 = (state_24750[(7)]);var inst_24668 = (state_24750[(2)]);var inst_24669 = cljs.core.next.call(null,inst_24651);var inst_24631 = inst_24669;var inst_24632 = null;var inst_24633 = (0);var inst_24634 = (0);var state_24750__$1 = (function (){var statearr_24760 = state_24750;(statearr_24760[(13)] = inst_24632);
(statearr_24760[(14)] = inst_24633);
(statearr_24760[(15)] = inst_24634);
(statearr_24760[(16)] = inst_24668);
(statearr_24760[(17)] = inst_24631);
return statearr_24760;
})();var statearr_24761_24845 = state_24750__$1;(statearr_24761_24845[(2)] = null);
(statearr_24761_24845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (39)))
{var state_24750__$1 = state_24750;var statearr_24765_24846 = state_24750__$1;(statearr_24765_24846[(2)] = null);
(statearr_24765_24846[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (4)))
{var inst_24622 = (state_24750[(12)]);var inst_24622__$1 = (state_24750[(2)]);var inst_24623 = (inst_24622__$1 == null);var state_24750__$1 = (function (){var statearr_24766 = state_24750;(statearr_24766[(12)] = inst_24622__$1);
return statearr_24766;
})();if(cljs.core.truth_(inst_24623))
{var statearr_24767_24847 = state_24750__$1;(statearr_24767_24847[(1)] = (5));
} else
{var statearr_24768_24848 = state_24750__$1;(statearr_24768_24848[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (15)))
{var inst_24632 = (state_24750[(13)]);var inst_24633 = (state_24750[(14)]);var inst_24634 = (state_24750[(15)]);var inst_24631 = (state_24750[(17)]);var inst_24647 = (state_24750[(2)]);var inst_24648 = (inst_24634 + (1));var tmp24762 = inst_24632;var tmp24763 = inst_24633;var tmp24764 = inst_24631;var inst_24631__$1 = tmp24764;var inst_24632__$1 = tmp24762;var inst_24633__$1 = tmp24763;var inst_24634__$1 = inst_24648;var state_24750__$1 = (function (){var statearr_24769 = state_24750;(statearr_24769[(18)] = inst_24647);
(statearr_24769[(13)] = inst_24632__$1);
(statearr_24769[(14)] = inst_24633__$1);
(statearr_24769[(15)] = inst_24634__$1);
(statearr_24769[(17)] = inst_24631__$1);
return statearr_24769;
})();var statearr_24770_24849 = state_24750__$1;(statearr_24770_24849[(2)] = null);
(statearr_24770_24849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (21)))
{var inst_24672 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24774_24850 = state_24750__$1;(statearr_24774_24850[(2)] = inst_24672);
(statearr_24774_24850[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (31)))
{var inst_24698 = (state_24750[(9)]);var inst_24702 = done.call(null,null);var inst_24703 = cljs.core.async.untap_STAR_.call(null,m,inst_24698);var state_24750__$1 = (function (){var statearr_24775 = state_24750;(statearr_24775[(19)] = inst_24702);
return statearr_24775;
})();var statearr_24776_24851 = state_24750__$1;(statearr_24776_24851[(2)] = inst_24703);
(statearr_24776_24851[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (32)))
{var inst_24693 = (state_24750[(10)]);var inst_24691 = (state_24750[(11)]);var inst_24690 = (state_24750[(20)]);var inst_24692 = (state_24750[(21)]);var inst_24705 = (state_24750[(2)]);var inst_24706 = (inst_24693 + (1));var tmp24771 = inst_24691;var tmp24772 = inst_24690;var tmp24773 = inst_24692;var inst_24690__$1 = tmp24772;var inst_24691__$1 = tmp24771;var inst_24692__$1 = tmp24773;var inst_24693__$1 = inst_24706;var state_24750__$1 = (function (){var statearr_24777 = state_24750;(statearr_24777[(10)] = inst_24693__$1);
(statearr_24777[(22)] = inst_24705);
(statearr_24777[(11)] = inst_24691__$1);
(statearr_24777[(20)] = inst_24690__$1);
(statearr_24777[(21)] = inst_24692__$1);
return statearr_24777;
})();var statearr_24778_24852 = state_24750__$1;(statearr_24778_24852[(2)] = null);
(statearr_24778_24852[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (40)))
{var inst_24718 = (state_24750[(23)]);var inst_24722 = done.call(null,null);var inst_24723 = cljs.core.async.untap_STAR_.call(null,m,inst_24718);var state_24750__$1 = (function (){var statearr_24779 = state_24750;(statearr_24779[(24)] = inst_24722);
return statearr_24779;
})();var statearr_24780_24853 = state_24750__$1;(statearr_24780_24853[(2)] = inst_24723);
(statearr_24780_24853[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (33)))
{var inst_24709 = (state_24750[(25)]);var inst_24711 = cljs.core.chunked_seq_QMARK_.call(null,inst_24709);var state_24750__$1 = state_24750;if(inst_24711)
{var statearr_24781_24854 = state_24750__$1;(statearr_24781_24854[(1)] = (36));
} else
{var statearr_24782_24855 = state_24750__$1;(statearr_24782_24855[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (13)))
{var inst_24641 = (state_24750[(26)]);var inst_24644 = cljs.core.async.close_BANG_.call(null,inst_24641);var state_24750__$1 = state_24750;var statearr_24783_24856 = state_24750__$1;(statearr_24783_24856[(2)] = inst_24644);
(statearr_24783_24856[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (22)))
{var inst_24662 = (state_24750[(8)]);var inst_24665 = cljs.core.async.close_BANG_.call(null,inst_24662);var state_24750__$1 = state_24750;var statearr_24784_24857 = state_24750__$1;(statearr_24784_24857[(2)] = inst_24665);
(statearr_24784_24857[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (36)))
{var inst_24709 = (state_24750[(25)]);var inst_24713 = cljs.core.chunk_first.call(null,inst_24709);var inst_24714 = cljs.core.chunk_rest.call(null,inst_24709);var inst_24715 = cljs.core.count.call(null,inst_24713);var inst_24690 = inst_24714;var inst_24691 = inst_24713;var inst_24692 = inst_24715;var inst_24693 = (0);var state_24750__$1 = (function (){var statearr_24785 = state_24750;(statearr_24785[(10)] = inst_24693);
(statearr_24785[(11)] = inst_24691);
(statearr_24785[(20)] = inst_24690);
(statearr_24785[(21)] = inst_24692);
return statearr_24785;
})();var statearr_24786_24858 = state_24750__$1;(statearr_24786_24858[(2)] = null);
(statearr_24786_24858[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (41)))
{var inst_24709 = (state_24750[(25)]);var inst_24725 = (state_24750[(2)]);var inst_24726 = cljs.core.next.call(null,inst_24709);var inst_24690 = inst_24726;var inst_24691 = null;var inst_24692 = (0);var inst_24693 = (0);var state_24750__$1 = (function (){var statearr_24787 = state_24750;(statearr_24787[(10)] = inst_24693);
(statearr_24787[(11)] = inst_24691);
(statearr_24787[(20)] = inst_24690);
(statearr_24787[(27)] = inst_24725);
(statearr_24787[(21)] = inst_24692);
return statearr_24787;
})();var statearr_24788_24859 = state_24750__$1;(statearr_24788_24859[(2)] = null);
(statearr_24788_24859[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (43)))
{var state_24750__$1 = state_24750;var statearr_24789_24860 = state_24750__$1;(statearr_24789_24860[(2)] = null);
(statearr_24789_24860[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (29)))
{var inst_24734 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24790_24861 = state_24750__$1;(statearr_24790_24861[(2)] = inst_24734);
(statearr_24790_24861[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (44)))
{var inst_24743 = (state_24750[(2)]);var state_24750__$1 = (function (){var statearr_24791 = state_24750;(statearr_24791[(28)] = inst_24743);
return statearr_24791;
})();var statearr_24792_24862 = state_24750__$1;(statearr_24792_24862[(2)] = null);
(statearr_24792_24862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (6)))
{var inst_24682 = (state_24750[(29)]);var inst_24681 = cljs.core.deref.call(null,cs);var inst_24682__$1 = cljs.core.keys.call(null,inst_24681);var inst_24683 = cljs.core.count.call(null,inst_24682__$1);var inst_24684 = cljs.core.reset_BANG_.call(null,dctr,inst_24683);var inst_24689 = cljs.core.seq.call(null,inst_24682__$1);var inst_24690 = inst_24689;var inst_24691 = null;var inst_24692 = (0);var inst_24693 = (0);var state_24750__$1 = (function (){var statearr_24793 = state_24750;(statearr_24793[(29)] = inst_24682__$1);
(statearr_24793[(10)] = inst_24693);
(statearr_24793[(11)] = inst_24691);
(statearr_24793[(20)] = inst_24690);
(statearr_24793[(30)] = inst_24684);
(statearr_24793[(21)] = inst_24692);
return statearr_24793;
})();var statearr_24794_24863 = state_24750__$1;(statearr_24794_24863[(2)] = null);
(statearr_24794_24863[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (28)))
{var inst_24690 = (state_24750[(20)]);var inst_24709 = (state_24750[(25)]);var inst_24709__$1 = cljs.core.seq.call(null,inst_24690);var state_24750__$1 = (function (){var statearr_24795 = state_24750;(statearr_24795[(25)] = inst_24709__$1);
return statearr_24795;
})();if(inst_24709__$1)
{var statearr_24796_24864 = state_24750__$1;(statearr_24796_24864[(1)] = (33));
} else
{var statearr_24797_24865 = state_24750__$1;(statearr_24797_24865[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (25)))
{var inst_24693 = (state_24750[(10)]);var inst_24692 = (state_24750[(21)]);var inst_24695 = (inst_24693 < inst_24692);var inst_24696 = inst_24695;var state_24750__$1 = state_24750;if(cljs.core.truth_(inst_24696))
{var statearr_24798_24866 = state_24750__$1;(statearr_24798_24866[(1)] = (27));
} else
{var statearr_24799_24867 = state_24750__$1;(statearr_24799_24867[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (34)))
{var state_24750__$1 = state_24750;var statearr_24800_24868 = state_24750__$1;(statearr_24800_24868[(2)] = null);
(statearr_24800_24868[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (17)))
{var state_24750__$1 = state_24750;var statearr_24801_24869 = state_24750__$1;(statearr_24801_24869[(2)] = null);
(statearr_24801_24869[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (3)))
{var inst_24748 = (state_24750[(2)]);var state_24750__$1 = state_24750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24750__$1,inst_24748);
} else
{if((state_val_24751 === (12)))
{var inst_24677 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24802_24870 = state_24750__$1;(statearr_24802_24870[(2)] = inst_24677);
(statearr_24802_24870[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (2)))
{var state_24750__$1 = state_24750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24750__$1,(4),ch);
} else
{if((state_val_24751 === (23)))
{var state_24750__$1 = state_24750;var statearr_24803_24871 = state_24750__$1;(statearr_24803_24871[(2)] = null);
(statearr_24803_24871[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (35)))
{var inst_24732 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24804_24872 = state_24750__$1;(statearr_24804_24872[(2)] = inst_24732);
(statearr_24804_24872[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (19)))
{var inst_24651 = (state_24750[(7)]);var inst_24655 = cljs.core.chunk_first.call(null,inst_24651);var inst_24656 = cljs.core.chunk_rest.call(null,inst_24651);var inst_24657 = cljs.core.count.call(null,inst_24655);var inst_24631 = inst_24656;var inst_24632 = inst_24655;var inst_24633 = inst_24657;var inst_24634 = (0);var state_24750__$1 = (function (){var statearr_24805 = state_24750;(statearr_24805[(13)] = inst_24632);
(statearr_24805[(14)] = inst_24633);
(statearr_24805[(15)] = inst_24634);
(statearr_24805[(17)] = inst_24631);
return statearr_24805;
})();var statearr_24806_24873 = state_24750__$1;(statearr_24806_24873[(2)] = null);
(statearr_24806_24873[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (11)))
{var inst_24651 = (state_24750[(7)]);var inst_24631 = (state_24750[(17)]);var inst_24651__$1 = cljs.core.seq.call(null,inst_24631);var state_24750__$1 = (function (){var statearr_24807 = state_24750;(statearr_24807[(7)] = inst_24651__$1);
return statearr_24807;
})();if(inst_24651__$1)
{var statearr_24808_24874 = state_24750__$1;(statearr_24808_24874[(1)] = (16));
} else
{var statearr_24809_24875 = state_24750__$1;(statearr_24809_24875[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (9)))
{var inst_24679 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24810_24876 = state_24750__$1;(statearr_24810_24876[(2)] = inst_24679);
(statearr_24810_24876[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (5)))
{var inst_24629 = cljs.core.deref.call(null,cs);var inst_24630 = cljs.core.seq.call(null,inst_24629);var inst_24631 = inst_24630;var inst_24632 = null;var inst_24633 = (0);var inst_24634 = (0);var state_24750__$1 = (function (){var statearr_24811 = state_24750;(statearr_24811[(13)] = inst_24632);
(statearr_24811[(14)] = inst_24633);
(statearr_24811[(15)] = inst_24634);
(statearr_24811[(17)] = inst_24631);
return statearr_24811;
})();var statearr_24812_24877 = state_24750__$1;(statearr_24812_24877[(2)] = null);
(statearr_24812_24877[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (14)))
{var state_24750__$1 = state_24750;var statearr_24813_24878 = state_24750__$1;(statearr_24813_24878[(2)] = null);
(statearr_24813_24878[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (45)))
{var inst_24740 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24814_24879 = state_24750__$1;(statearr_24814_24879[(2)] = inst_24740);
(statearr_24814_24879[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (26)))
{var inst_24682 = (state_24750[(29)]);var inst_24736 = (state_24750[(2)]);var inst_24737 = cljs.core.seq.call(null,inst_24682);var state_24750__$1 = (function (){var statearr_24815 = state_24750;(statearr_24815[(31)] = inst_24736);
return statearr_24815;
})();if(inst_24737)
{var statearr_24816_24880 = state_24750__$1;(statearr_24816_24880[(1)] = (42));
} else
{var statearr_24817_24881 = state_24750__$1;(statearr_24817_24881[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (16)))
{var inst_24651 = (state_24750[(7)]);var inst_24653 = cljs.core.chunked_seq_QMARK_.call(null,inst_24651);var state_24750__$1 = state_24750;if(inst_24653)
{var statearr_24818_24882 = state_24750__$1;(statearr_24818_24882[(1)] = (19));
} else
{var statearr_24819_24883 = state_24750__$1;(statearr_24819_24883[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (38)))
{var inst_24729 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24820_24884 = state_24750__$1;(statearr_24820_24884[(2)] = inst_24729);
(statearr_24820_24884[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (30)))
{var state_24750__$1 = state_24750;var statearr_24821_24885 = state_24750__$1;(statearr_24821_24885[(2)] = null);
(statearr_24821_24885[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (10)))
{var inst_24632 = (state_24750[(13)]);var inst_24634 = (state_24750[(15)]);var inst_24640 = cljs.core._nth.call(null,inst_24632,inst_24634);var inst_24641 = cljs.core.nth.call(null,inst_24640,(0),null);var inst_24642 = cljs.core.nth.call(null,inst_24640,(1),null);var state_24750__$1 = (function (){var statearr_24822 = state_24750;(statearr_24822[(26)] = inst_24641);
return statearr_24822;
})();if(cljs.core.truth_(inst_24642))
{var statearr_24823_24886 = state_24750__$1;(statearr_24823_24886[(1)] = (13));
} else
{var statearr_24824_24887 = state_24750__$1;(statearr_24824_24887[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (18)))
{var inst_24675 = (state_24750[(2)]);var state_24750__$1 = state_24750;var statearr_24825_24888 = state_24750__$1;(statearr_24825_24888[(2)] = inst_24675);
(statearr_24825_24888[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (42)))
{var state_24750__$1 = state_24750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24750__$1,(45),dchan);
} else
{if((state_val_24751 === (37)))
{var inst_24718 = (state_24750[(23)]);var inst_24622 = (state_24750[(12)]);var inst_24709 = (state_24750[(25)]);var inst_24718__$1 = cljs.core.first.call(null,inst_24709);var inst_24719 = cljs.core.async.put_BANG_.call(null,inst_24718__$1,inst_24622,done);var state_24750__$1 = (function (){var statearr_24826 = state_24750;(statearr_24826[(23)] = inst_24718__$1);
return statearr_24826;
})();if(cljs.core.truth_(inst_24719))
{var statearr_24827_24889 = state_24750__$1;(statearr_24827_24889[(1)] = (39));
} else
{var statearr_24828_24890 = state_24750__$1;(statearr_24828_24890[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24751 === (8)))
{var inst_24633 = (state_24750[(14)]);var inst_24634 = (state_24750[(15)]);var inst_24636 = (inst_24634 < inst_24633);var inst_24637 = inst_24636;var state_24750__$1 = state_24750;if(cljs.core.truth_(inst_24637))
{var statearr_24829_24891 = state_24750__$1;(statearr_24829_24891[(1)] = (10));
} else
{var statearr_24830_24892 = state_24750__$1;(statearr_24830_24892[(1)] = (11));
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
});})(c__9125__auto___24838,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24838,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24834[(0)] = state_machine__9111__auto__);
(statearr_24834[(1)] = (1));
return statearr_24834;
});
var state_machine__9111__auto____1 = (function (state_24750){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24750);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24835){if((e24835 instanceof Object))
{var ex__9114__auto__ = e24835;var statearr_24836_24893 = state_24750;(statearr_24836_24893[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24894 = state_24750;
state_24750 = G__24894;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24750){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24838,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24837 = f__9126__auto__.call(null);(statearr_24837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24838);
return statearr_24837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24838,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24896 = {};return obj24896;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24897){var map__24902 = p__24897;var map__24902__$1 = ((cljs.core.seq_QMARK_.call(null,map__24902))?cljs.core.apply.call(null,cljs.core.hash_map,map__24902):map__24902);var opts = map__24902__$1;var statearr_24903_24906 = state;(statearr_24903_24906[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24902,map__24902__$1,opts){
return (function (val){var statearr_24904_24907 = state;(statearr_24904_24907[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24902,map__24902__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24905_24908 = state;(statearr_24905_24908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24897 = null;if (arguments.length > 3) {
  p__24897 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24897);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24909){
var state = cljs.core.first(arglist__24909);
arglist__24909 = cljs.core.next(arglist__24909);
var cont_block = cljs.core.first(arglist__24909);
arglist__24909 = cljs.core.next(arglist__24909);
var ports = cljs.core.first(arglist__24909);
var p__24897 = cljs.core.rest(arglist__24909);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24897);
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
;var m = (function (){if(typeof cljs.core.async.t25029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25029 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25030){
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
this.meta25030 = meta25030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25029.cljs$lang$type = true;
cljs.core.async.t25029.cljs$lang$ctorStr = "cljs.core.async/t25029";
cljs.core.async.t25029.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25029");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25029.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25031){var self__ = this;
var _25031__$1 = this;return self__.meta25030;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25031,meta25030__$1){var self__ = this;
var _25031__$1 = this;return (new cljs.core.async.t25029(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25030__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25029 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25029(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25030){return (new cljs.core.async.t25029(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25030));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25029(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25148 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25101){var state_val_25102 = (state_25101[(1)]);if((state_val_25102 === (7)))
{var inst_25045 = (state_25101[(7)]);var inst_25050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25045);var state_25101__$1 = state_25101;var statearr_25103_25149 = state_25101__$1;(statearr_25103_25149[(2)] = inst_25050);
(statearr_25103_25149[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (20)))
{var inst_25060 = (state_25101[(8)]);var state_25101__$1 = state_25101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25101__$1,(23),out,inst_25060);
} else
{if((state_val_25102 === (1)))
{var inst_25035 = (state_25101[(9)]);var inst_25035__$1 = calc_state.call(null);var inst_25036 = cljs.core.seq_QMARK_.call(null,inst_25035__$1);var state_25101__$1 = (function (){var statearr_25104 = state_25101;(statearr_25104[(9)] = inst_25035__$1);
return statearr_25104;
})();if(inst_25036)
{var statearr_25105_25150 = state_25101__$1;(statearr_25105_25150[(1)] = (2));
} else
{var statearr_25106_25151 = state_25101__$1;(statearr_25106_25151[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (24)))
{var inst_25053 = (state_25101[(10)]);var inst_25045 = inst_25053;var state_25101__$1 = (function (){var statearr_25107 = state_25101;(statearr_25107[(7)] = inst_25045);
return statearr_25107;
})();var statearr_25108_25152 = state_25101__$1;(statearr_25108_25152[(2)] = null);
(statearr_25108_25152[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (4)))
{var inst_25035 = (state_25101[(9)]);var inst_25041 = (state_25101[(2)]);var inst_25042 = cljs.core.get.call(null,inst_25041,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25043 = cljs.core.get.call(null,inst_25041,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25044 = cljs.core.get.call(null,inst_25041,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25045 = inst_25035;var state_25101__$1 = (function (){var statearr_25109 = state_25101;(statearr_25109[(11)] = inst_25042);
(statearr_25109[(12)] = inst_25043);
(statearr_25109[(13)] = inst_25044);
(statearr_25109[(7)] = inst_25045);
return statearr_25109;
})();var statearr_25110_25153 = state_25101__$1;(statearr_25110_25153[(2)] = null);
(statearr_25110_25153[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (15)))
{var state_25101__$1 = state_25101;var statearr_25111_25154 = state_25101__$1;(statearr_25111_25154[(2)] = null);
(statearr_25111_25154[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (21)))
{var inst_25053 = (state_25101[(10)]);var inst_25045 = inst_25053;var state_25101__$1 = (function (){var statearr_25112 = state_25101;(statearr_25112[(7)] = inst_25045);
return statearr_25112;
})();var statearr_25113_25155 = state_25101__$1;(statearr_25113_25155[(2)] = null);
(statearr_25113_25155[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (13)))
{var inst_25097 = (state_25101[(2)]);var state_25101__$1 = state_25101;var statearr_25114_25156 = state_25101__$1;(statearr_25114_25156[(2)] = inst_25097);
(statearr_25114_25156[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (22)))
{var inst_25095 = (state_25101[(2)]);var state_25101__$1 = state_25101;var statearr_25115_25157 = state_25101__$1;(statearr_25115_25157[(2)] = inst_25095);
(statearr_25115_25157[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (6)))
{var inst_25099 = (state_25101[(2)]);var state_25101__$1 = state_25101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25101__$1,inst_25099);
} else
{if((state_val_25102 === (25)))
{var state_25101__$1 = state_25101;var statearr_25116_25158 = state_25101__$1;(statearr_25116_25158[(2)] = null);
(statearr_25116_25158[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (17)))
{var inst_25075 = (state_25101[(14)]);var state_25101__$1 = state_25101;var statearr_25117_25159 = state_25101__$1;(statearr_25117_25159[(2)] = inst_25075);
(statearr_25117_25159[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (3)))
{var inst_25035 = (state_25101[(9)]);var state_25101__$1 = state_25101;var statearr_25118_25160 = state_25101__$1;(statearr_25118_25160[(2)] = inst_25035);
(statearr_25118_25160[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (12)))
{var inst_25075 = (state_25101[(14)]);var inst_25061 = (state_25101[(15)]);var inst_25056 = (state_25101[(16)]);var inst_25075__$1 = inst_25056.call(null,inst_25061);var state_25101__$1 = (function (){var statearr_25119 = state_25101;(statearr_25119[(14)] = inst_25075__$1);
return statearr_25119;
})();if(cljs.core.truth_(inst_25075__$1))
{var statearr_25120_25161 = state_25101__$1;(statearr_25120_25161[(1)] = (17));
} else
{var statearr_25121_25162 = state_25101__$1;(statearr_25121_25162[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (2)))
{var inst_25035 = (state_25101[(9)]);var inst_25038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25035);var state_25101__$1 = state_25101;var statearr_25122_25163 = state_25101__$1;(statearr_25122_25163[(2)] = inst_25038);
(statearr_25122_25163[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (23)))
{var inst_25086 = (state_25101[(2)]);var state_25101__$1 = state_25101;if(cljs.core.truth_(inst_25086))
{var statearr_25123_25164 = state_25101__$1;(statearr_25123_25164[(1)] = (24));
} else
{var statearr_25124_25165 = state_25101__$1;(statearr_25124_25165[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (19)))
{var inst_25083 = (state_25101[(2)]);var state_25101__$1 = state_25101;if(cljs.core.truth_(inst_25083))
{var statearr_25125_25166 = state_25101__$1;(statearr_25125_25166[(1)] = (20));
} else
{var statearr_25126_25167 = state_25101__$1;(statearr_25126_25167[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (11)))
{var inst_25060 = (state_25101[(8)]);var inst_25066 = (inst_25060 == null);var state_25101__$1 = state_25101;if(cljs.core.truth_(inst_25066))
{var statearr_25127_25168 = state_25101__$1;(statearr_25127_25168[(1)] = (14));
} else
{var statearr_25128_25169 = state_25101__$1;(statearr_25128_25169[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (9)))
{var inst_25053 = (state_25101[(10)]);var inst_25053__$1 = (state_25101[(2)]);var inst_25054 = cljs.core.get.call(null,inst_25053__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25055 = cljs.core.get.call(null,inst_25053__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25056 = cljs.core.get.call(null,inst_25053__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25101__$1 = (function (){var statearr_25129 = state_25101;(statearr_25129[(10)] = inst_25053__$1);
(statearr_25129[(17)] = inst_25055);
(statearr_25129[(16)] = inst_25056);
return statearr_25129;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25101__$1,(10),inst_25054);
} else
{if((state_val_25102 === (5)))
{var inst_25045 = (state_25101[(7)]);var inst_25048 = cljs.core.seq_QMARK_.call(null,inst_25045);var state_25101__$1 = state_25101;if(inst_25048)
{var statearr_25130_25170 = state_25101__$1;(statearr_25130_25170[(1)] = (7));
} else
{var statearr_25131_25171 = state_25101__$1;(statearr_25131_25171[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (14)))
{var inst_25061 = (state_25101[(15)]);var inst_25068 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25061);var state_25101__$1 = state_25101;var statearr_25132_25172 = state_25101__$1;(statearr_25132_25172[(2)] = inst_25068);
(statearr_25132_25172[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (26)))
{var inst_25091 = (state_25101[(2)]);var state_25101__$1 = state_25101;var statearr_25133_25173 = state_25101__$1;(statearr_25133_25173[(2)] = inst_25091);
(statearr_25133_25173[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (16)))
{var inst_25071 = (state_25101[(2)]);var inst_25072 = calc_state.call(null);var inst_25045 = inst_25072;var state_25101__$1 = (function (){var statearr_25134 = state_25101;(statearr_25134[(18)] = inst_25071);
(statearr_25134[(7)] = inst_25045);
return statearr_25134;
})();var statearr_25135_25174 = state_25101__$1;(statearr_25135_25174[(2)] = null);
(statearr_25135_25174[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (10)))
{var inst_25060 = (state_25101[(8)]);var inst_25061 = (state_25101[(15)]);var inst_25059 = (state_25101[(2)]);var inst_25060__$1 = cljs.core.nth.call(null,inst_25059,(0),null);var inst_25061__$1 = cljs.core.nth.call(null,inst_25059,(1),null);var inst_25062 = (inst_25060__$1 == null);var inst_25063 = cljs.core._EQ_.call(null,inst_25061__$1,change);var inst_25064 = (inst_25062) || (inst_25063);var state_25101__$1 = (function (){var statearr_25136 = state_25101;(statearr_25136[(8)] = inst_25060__$1);
(statearr_25136[(15)] = inst_25061__$1);
return statearr_25136;
})();if(cljs.core.truth_(inst_25064))
{var statearr_25137_25175 = state_25101__$1;(statearr_25137_25175[(1)] = (11));
} else
{var statearr_25138_25176 = state_25101__$1;(statearr_25138_25176[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (18)))
{var inst_25055 = (state_25101[(17)]);var inst_25061 = (state_25101[(15)]);var inst_25056 = (state_25101[(16)]);var inst_25078 = cljs.core.empty_QMARK_.call(null,inst_25056);var inst_25079 = inst_25055.call(null,inst_25061);var inst_25080 = cljs.core.not.call(null,inst_25079);var inst_25081 = (inst_25078) && (inst_25080);var state_25101__$1 = state_25101;var statearr_25139_25177 = state_25101__$1;(statearr_25139_25177[(2)] = inst_25081);
(statearr_25139_25177[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25102 === (8)))
{var inst_25045 = (state_25101[(7)]);var state_25101__$1 = state_25101;var statearr_25140_25178 = state_25101__$1;(statearr_25140_25178[(2)] = inst_25045);
(statearr_25140_25178[(1)] = (9));
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
});})(c__9125__auto___25148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25144[(0)] = state_machine__9111__auto__);
(statearr_25144[(1)] = (1));
return statearr_25144;
});
var state_machine__9111__auto____1 = (function (state_25101){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25101);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25145){if((e25145 instanceof Object))
{var ex__9114__auto__ = e25145;var statearr_25146_25179 = state_25101;(statearr_25146_25179[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25145;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25180 = state_25101;
state_25101 = G__25180;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25101){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25147 = f__9126__auto__.call(null);(statearr_25147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25148);
return statearr_25147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25182 = {};return obj25182;
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
return (function (p1__25183_SHARP_){if(cljs.core.truth_(p1__25183_SHARP_.call(null,topic)))
{return p1__25183_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25183_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25306 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25307){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25307 = meta25307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25306.cljs$lang$type = true;
cljs.core.async.t25306.cljs$lang$ctorStr = "cljs.core.async/t25306";
cljs.core.async.t25306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25306");
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25308){var self__ = this;
var _25308__$1 = this;return self__.meta25307;
});})(mults,ensure_mult))
;
cljs.core.async.t25306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25308,meta25307__$1){var self__ = this;
var _25308__$1 = this;return (new cljs.core.async.t25306(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25307__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25306 = ((function (mults,ensure_mult){
return (function __GT_t25306(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25307){return (new cljs.core.async.t25306(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25307));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25306(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25428 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25428,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25428,mults,ensure_mult,p){
return (function (state_25380){var state_val_25381 = (state_25380[(1)]);if((state_val_25381 === (7)))
{var inst_25376 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25382_25429 = state_25380__$1;(statearr_25382_25429[(2)] = inst_25376);
(statearr_25382_25429[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (20)))
{var state_25380__$1 = state_25380;var statearr_25383_25430 = state_25380__$1;(statearr_25383_25430[(2)] = null);
(statearr_25383_25430[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (1)))
{var state_25380__$1 = state_25380;var statearr_25384_25431 = state_25380__$1;(statearr_25384_25431[(2)] = null);
(statearr_25384_25431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (24)))
{var inst_25359 = (state_25380[(7)]);var inst_25368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25359);var state_25380__$1 = state_25380;var statearr_25385_25432 = state_25380__$1;(statearr_25385_25432[(2)] = inst_25368);
(statearr_25385_25432[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (4)))
{var inst_25311 = (state_25380[(8)]);var inst_25311__$1 = (state_25380[(2)]);var inst_25312 = (inst_25311__$1 == null);var state_25380__$1 = (function (){var statearr_25386 = state_25380;(statearr_25386[(8)] = inst_25311__$1);
return statearr_25386;
})();if(cljs.core.truth_(inst_25312))
{var statearr_25387_25433 = state_25380__$1;(statearr_25387_25433[(1)] = (5));
} else
{var statearr_25388_25434 = state_25380__$1;(statearr_25388_25434[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (15)))
{var inst_25353 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25389_25435 = state_25380__$1;(statearr_25389_25435[(2)] = inst_25353);
(statearr_25389_25435[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (21)))
{var inst_25373 = (state_25380[(2)]);var state_25380__$1 = (function (){var statearr_25390 = state_25380;(statearr_25390[(9)] = inst_25373);
return statearr_25390;
})();var statearr_25391_25436 = state_25380__$1;(statearr_25391_25436[(2)] = null);
(statearr_25391_25436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (13)))
{var inst_25335 = (state_25380[(10)]);var inst_25337 = cljs.core.chunked_seq_QMARK_.call(null,inst_25335);var state_25380__$1 = state_25380;if(inst_25337)
{var statearr_25392_25437 = state_25380__$1;(statearr_25392_25437[(1)] = (16));
} else
{var statearr_25393_25438 = state_25380__$1;(statearr_25393_25438[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (22)))
{var inst_25365 = (state_25380[(2)]);var state_25380__$1 = state_25380;if(cljs.core.truth_(inst_25365))
{var statearr_25394_25439 = state_25380__$1;(statearr_25394_25439[(1)] = (23));
} else
{var statearr_25395_25440 = state_25380__$1;(statearr_25395_25440[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (6)))
{var inst_25361 = (state_25380[(11)]);var inst_25311 = (state_25380[(8)]);var inst_25359 = (state_25380[(7)]);var inst_25359__$1 = topic_fn.call(null,inst_25311);var inst_25360 = cljs.core.deref.call(null,mults);var inst_25361__$1 = cljs.core.get.call(null,inst_25360,inst_25359__$1);var state_25380__$1 = (function (){var statearr_25396 = state_25380;(statearr_25396[(11)] = inst_25361__$1);
(statearr_25396[(7)] = inst_25359__$1);
return statearr_25396;
})();if(cljs.core.truth_(inst_25361__$1))
{var statearr_25397_25441 = state_25380__$1;(statearr_25397_25441[(1)] = (19));
} else
{var statearr_25398_25442 = state_25380__$1;(statearr_25398_25442[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (25)))
{var inst_25370 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25399_25443 = state_25380__$1;(statearr_25399_25443[(2)] = inst_25370);
(statearr_25399_25443[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (17)))
{var inst_25335 = (state_25380[(10)]);var inst_25344 = cljs.core.first.call(null,inst_25335);var inst_25345 = cljs.core.async.muxch_STAR_.call(null,inst_25344);var inst_25346 = cljs.core.async.close_BANG_.call(null,inst_25345);var inst_25347 = cljs.core.next.call(null,inst_25335);var inst_25321 = inst_25347;var inst_25322 = null;var inst_25323 = (0);var inst_25324 = (0);var state_25380__$1 = (function (){var statearr_25400 = state_25380;(statearr_25400[(12)] = inst_25324);
(statearr_25400[(13)] = inst_25322);
(statearr_25400[(14)] = inst_25321);
(statearr_25400[(15)] = inst_25346);
(statearr_25400[(16)] = inst_25323);
return statearr_25400;
})();var statearr_25401_25444 = state_25380__$1;(statearr_25401_25444[(2)] = null);
(statearr_25401_25444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (3)))
{var inst_25378 = (state_25380[(2)]);var state_25380__$1 = state_25380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25380__$1,inst_25378);
} else
{if((state_val_25381 === (12)))
{var inst_25355 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25402_25445 = state_25380__$1;(statearr_25402_25445[(2)] = inst_25355);
(statearr_25402_25445[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (2)))
{var state_25380__$1 = state_25380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25380__$1,(4),ch);
} else
{if((state_val_25381 === (23)))
{var state_25380__$1 = state_25380;var statearr_25403_25446 = state_25380__$1;(statearr_25403_25446[(2)] = null);
(statearr_25403_25446[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (19)))
{var inst_25361 = (state_25380[(11)]);var inst_25311 = (state_25380[(8)]);var inst_25363 = cljs.core.async.muxch_STAR_.call(null,inst_25361);var state_25380__$1 = state_25380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25380__$1,(22),inst_25363,inst_25311);
} else
{if((state_val_25381 === (11)))
{var inst_25335 = (state_25380[(10)]);var inst_25321 = (state_25380[(14)]);var inst_25335__$1 = cljs.core.seq.call(null,inst_25321);var state_25380__$1 = (function (){var statearr_25404 = state_25380;(statearr_25404[(10)] = inst_25335__$1);
return statearr_25404;
})();if(inst_25335__$1)
{var statearr_25405_25447 = state_25380__$1;(statearr_25405_25447[(1)] = (13));
} else
{var statearr_25406_25448 = state_25380__$1;(statearr_25406_25448[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (9)))
{var inst_25357 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25407_25449 = state_25380__$1;(statearr_25407_25449[(2)] = inst_25357);
(statearr_25407_25449[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (5)))
{var inst_25318 = cljs.core.deref.call(null,mults);var inst_25319 = cljs.core.vals.call(null,inst_25318);var inst_25320 = cljs.core.seq.call(null,inst_25319);var inst_25321 = inst_25320;var inst_25322 = null;var inst_25323 = (0);var inst_25324 = (0);var state_25380__$1 = (function (){var statearr_25408 = state_25380;(statearr_25408[(12)] = inst_25324);
(statearr_25408[(13)] = inst_25322);
(statearr_25408[(14)] = inst_25321);
(statearr_25408[(16)] = inst_25323);
return statearr_25408;
})();var statearr_25409_25450 = state_25380__$1;(statearr_25409_25450[(2)] = null);
(statearr_25409_25450[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (14)))
{var state_25380__$1 = state_25380;var statearr_25413_25451 = state_25380__$1;(statearr_25413_25451[(2)] = null);
(statearr_25413_25451[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (16)))
{var inst_25335 = (state_25380[(10)]);var inst_25339 = cljs.core.chunk_first.call(null,inst_25335);var inst_25340 = cljs.core.chunk_rest.call(null,inst_25335);var inst_25341 = cljs.core.count.call(null,inst_25339);var inst_25321 = inst_25340;var inst_25322 = inst_25339;var inst_25323 = inst_25341;var inst_25324 = (0);var state_25380__$1 = (function (){var statearr_25414 = state_25380;(statearr_25414[(12)] = inst_25324);
(statearr_25414[(13)] = inst_25322);
(statearr_25414[(14)] = inst_25321);
(statearr_25414[(16)] = inst_25323);
return statearr_25414;
})();var statearr_25415_25452 = state_25380__$1;(statearr_25415_25452[(2)] = null);
(statearr_25415_25452[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (10)))
{var inst_25324 = (state_25380[(12)]);var inst_25322 = (state_25380[(13)]);var inst_25321 = (state_25380[(14)]);var inst_25323 = (state_25380[(16)]);var inst_25329 = cljs.core._nth.call(null,inst_25322,inst_25324);var inst_25330 = cljs.core.async.muxch_STAR_.call(null,inst_25329);var inst_25331 = cljs.core.async.close_BANG_.call(null,inst_25330);var inst_25332 = (inst_25324 + (1));var tmp25410 = inst_25322;var tmp25411 = inst_25321;var tmp25412 = inst_25323;var inst_25321__$1 = tmp25411;var inst_25322__$1 = tmp25410;var inst_25323__$1 = tmp25412;var inst_25324__$1 = inst_25332;var state_25380__$1 = (function (){var statearr_25416 = state_25380;(statearr_25416[(12)] = inst_25324__$1);
(statearr_25416[(13)] = inst_25322__$1);
(statearr_25416[(17)] = inst_25331);
(statearr_25416[(14)] = inst_25321__$1);
(statearr_25416[(16)] = inst_25323__$1);
return statearr_25416;
})();var statearr_25417_25453 = state_25380__$1;(statearr_25417_25453[(2)] = null);
(statearr_25417_25453[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (18)))
{var inst_25350 = (state_25380[(2)]);var state_25380__$1 = state_25380;var statearr_25418_25454 = state_25380__$1;(statearr_25418_25454[(2)] = inst_25350);
(statearr_25418_25454[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25381 === (8)))
{var inst_25324 = (state_25380[(12)]);var inst_25323 = (state_25380[(16)]);var inst_25326 = (inst_25324 < inst_25323);var inst_25327 = inst_25326;var state_25380__$1 = state_25380;if(cljs.core.truth_(inst_25327))
{var statearr_25419_25455 = state_25380__$1;(statearr_25419_25455[(1)] = (10));
} else
{var statearr_25420_25456 = state_25380__$1;(statearr_25420_25456[(1)] = (11));
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
});})(c__9125__auto___25428,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25428,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25424[(0)] = state_machine__9111__auto__);
(statearr_25424[(1)] = (1));
return statearr_25424;
});
var state_machine__9111__auto____1 = (function (state_25380){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25380);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25425){if((e25425 instanceof Object))
{var ex__9114__auto__ = e25425;var statearr_25426_25457 = state_25380;(statearr_25426_25457[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25425;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25458 = state_25380;
state_25380 = G__25458;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25380){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25428,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25427 = f__9126__auto__.call(null);(statearr_25427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25428);
return statearr_25427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25428,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25565){var state_val_25566 = (state_25565[(1)]);if((state_val_25566 === (7)))
{var state_25565__$1 = state_25565;var statearr_25567_25596 = state_25565__$1;(statearr_25567_25596[(2)] = null);
(statearr_25567_25596[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (1)))
{var state_25565__$1 = state_25565;var statearr_25568_25597 = state_25565__$1;(statearr_25568_25597[(2)] = null);
(statearr_25568_25597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (4)))
{var inst_25529 = (state_25565[(7)]);var inst_25531 = (inst_25529 < cnt);var state_25565__$1 = state_25565;if(cljs.core.truth_(inst_25531))
{var statearr_25569_25598 = state_25565__$1;(statearr_25569_25598[(1)] = (6));
} else
{var statearr_25570_25599 = state_25565__$1;(statearr_25570_25599[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (15)))
{var inst_25561 = (state_25565[(2)]);var state_25565__$1 = state_25565;var statearr_25571_25600 = state_25565__$1;(statearr_25571_25600[(2)] = inst_25561);
(statearr_25571_25600[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (13)))
{var inst_25554 = cljs.core.async.close_BANG_.call(null,out);var state_25565__$1 = state_25565;var statearr_25572_25601 = state_25565__$1;(statearr_25572_25601[(2)] = inst_25554);
(statearr_25572_25601[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (6)))
{var state_25565__$1 = state_25565;var statearr_25573_25602 = state_25565__$1;(statearr_25573_25602[(2)] = null);
(statearr_25573_25602[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (3)))
{var inst_25563 = (state_25565[(2)]);var state_25565__$1 = state_25565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25565__$1,inst_25563);
} else
{if((state_val_25566 === (12)))
{var inst_25551 = (state_25565[(8)]);var inst_25551__$1 = (state_25565[(2)]);var inst_25552 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25551__$1);var state_25565__$1 = (function (){var statearr_25574 = state_25565;(statearr_25574[(8)] = inst_25551__$1);
return statearr_25574;
})();if(cljs.core.truth_(inst_25552))
{var statearr_25575_25603 = state_25565__$1;(statearr_25575_25603[(1)] = (13));
} else
{var statearr_25576_25604 = state_25565__$1;(statearr_25576_25604[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (2)))
{var inst_25528 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25529 = (0);var state_25565__$1 = (function (){var statearr_25577 = state_25565;(statearr_25577[(9)] = inst_25528);
(statearr_25577[(7)] = inst_25529);
return statearr_25577;
})();var statearr_25578_25605 = state_25565__$1;(statearr_25578_25605[(2)] = null);
(statearr_25578_25605[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (11)))
{var inst_25529 = (state_25565[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25565,(10),Object,null,(9));var inst_25538 = chs__$1.call(null,inst_25529);var inst_25539 = done.call(null,inst_25529);var inst_25540 = cljs.core.async.take_BANG_.call(null,inst_25538,inst_25539);var state_25565__$1 = state_25565;var statearr_25579_25606 = state_25565__$1;(statearr_25579_25606[(2)] = inst_25540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (9)))
{var inst_25529 = (state_25565[(7)]);var inst_25542 = (state_25565[(2)]);var inst_25543 = (inst_25529 + (1));var inst_25529__$1 = inst_25543;var state_25565__$1 = (function (){var statearr_25580 = state_25565;(statearr_25580[(10)] = inst_25542);
(statearr_25580[(7)] = inst_25529__$1);
return statearr_25580;
})();var statearr_25581_25607 = state_25565__$1;(statearr_25581_25607[(2)] = null);
(statearr_25581_25607[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (5)))
{var inst_25549 = (state_25565[(2)]);var state_25565__$1 = (function (){var statearr_25582 = state_25565;(statearr_25582[(11)] = inst_25549);
return statearr_25582;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(12),dchan);
} else
{if((state_val_25566 === (14)))
{var inst_25551 = (state_25565[(8)]);var inst_25556 = cljs.core.apply.call(null,f,inst_25551);var state_25565__$1 = state_25565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25565__$1,(16),out,inst_25556);
} else
{if((state_val_25566 === (16)))
{var inst_25558 = (state_25565[(2)]);var state_25565__$1 = (function (){var statearr_25583 = state_25565;(statearr_25583[(12)] = inst_25558);
return statearr_25583;
})();var statearr_25584_25608 = state_25565__$1;(statearr_25584_25608[(2)] = null);
(statearr_25584_25608[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (10)))
{var inst_25533 = (state_25565[(2)]);var inst_25534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25565__$1 = (function (){var statearr_25585 = state_25565;(statearr_25585[(13)] = inst_25533);
return statearr_25585;
})();var statearr_25586_25609 = state_25565__$1;(statearr_25586_25609[(2)] = inst_25534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25566 === (8)))
{var inst_25547 = (state_25565[(2)]);var state_25565__$1 = state_25565;var statearr_25587_25610 = state_25565__$1;(statearr_25587_25610[(2)] = inst_25547);
(statearr_25587_25610[(1)] = (5));
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
});})(c__9125__auto___25595,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25591[(0)] = state_machine__9111__auto__);
(statearr_25591[(1)] = (1));
return statearr_25591;
});
var state_machine__9111__auto____1 = (function (state_25565){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25565);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25592){if((e25592 instanceof Object))
{var ex__9114__auto__ = e25592;var statearr_25593_25611 = state_25565;(statearr_25593_25611[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25612 = state_25565;
state_25565 = G__25612;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25565){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25595,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25594 = f__9126__auto__.call(null);(statearr_25594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25595);
return statearr_25594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25595,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25720 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25720,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25720,out){
return (function (state_25696){var state_val_25697 = (state_25696[(1)]);if((state_val_25697 === (7)))
{var inst_25675 = (state_25696[(7)]);var inst_25676 = (state_25696[(8)]);var inst_25675__$1 = (state_25696[(2)]);var inst_25676__$1 = cljs.core.nth.call(null,inst_25675__$1,(0),null);var inst_25677 = cljs.core.nth.call(null,inst_25675__$1,(1),null);var inst_25678 = (inst_25676__$1 == null);var state_25696__$1 = (function (){var statearr_25698 = state_25696;(statearr_25698[(9)] = inst_25677);
(statearr_25698[(7)] = inst_25675__$1);
(statearr_25698[(8)] = inst_25676__$1);
return statearr_25698;
})();if(cljs.core.truth_(inst_25678))
{var statearr_25699_25721 = state_25696__$1;(statearr_25699_25721[(1)] = (8));
} else
{var statearr_25700_25722 = state_25696__$1;(statearr_25700_25722[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (1)))
{var inst_25667 = cljs.core.vec.call(null,chs);var inst_25668 = inst_25667;var state_25696__$1 = (function (){var statearr_25701 = state_25696;(statearr_25701[(10)] = inst_25668);
return statearr_25701;
})();var statearr_25702_25723 = state_25696__$1;(statearr_25702_25723[(2)] = null);
(statearr_25702_25723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (4)))
{var inst_25668 = (state_25696[(10)]);var state_25696__$1 = state_25696;return cljs.core.async.ioc_alts_BANG_.call(null,state_25696__$1,(7),inst_25668);
} else
{if((state_val_25697 === (6)))
{var inst_25692 = (state_25696[(2)]);var state_25696__$1 = state_25696;var statearr_25703_25724 = state_25696__$1;(statearr_25703_25724[(2)] = inst_25692);
(statearr_25703_25724[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (3)))
{var inst_25694 = (state_25696[(2)]);var state_25696__$1 = state_25696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25696__$1,inst_25694);
} else
{if((state_val_25697 === (2)))
{var inst_25668 = (state_25696[(10)]);var inst_25670 = cljs.core.count.call(null,inst_25668);var inst_25671 = (inst_25670 > (0));var state_25696__$1 = state_25696;if(cljs.core.truth_(inst_25671))
{var statearr_25705_25725 = state_25696__$1;(statearr_25705_25725[(1)] = (4));
} else
{var statearr_25706_25726 = state_25696__$1;(statearr_25706_25726[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (11)))
{var inst_25668 = (state_25696[(10)]);var inst_25685 = (state_25696[(2)]);var tmp25704 = inst_25668;var inst_25668__$1 = tmp25704;var state_25696__$1 = (function (){var statearr_25707 = state_25696;(statearr_25707[(11)] = inst_25685);
(statearr_25707[(10)] = inst_25668__$1);
return statearr_25707;
})();var statearr_25708_25727 = state_25696__$1;(statearr_25708_25727[(2)] = null);
(statearr_25708_25727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (9)))
{var inst_25676 = (state_25696[(8)]);var state_25696__$1 = state_25696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25696__$1,(11),out,inst_25676);
} else
{if((state_val_25697 === (5)))
{var inst_25690 = cljs.core.async.close_BANG_.call(null,out);var state_25696__$1 = state_25696;var statearr_25709_25728 = state_25696__$1;(statearr_25709_25728[(2)] = inst_25690);
(statearr_25709_25728[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (10)))
{var inst_25688 = (state_25696[(2)]);var state_25696__$1 = state_25696;var statearr_25710_25729 = state_25696__$1;(statearr_25710_25729[(2)] = inst_25688);
(statearr_25710_25729[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25697 === (8)))
{var inst_25677 = (state_25696[(9)]);var inst_25675 = (state_25696[(7)]);var inst_25668 = (state_25696[(10)]);var inst_25676 = (state_25696[(8)]);var inst_25680 = (function (){var c = inst_25677;var v = inst_25676;var vec__25673 = inst_25675;var cs = inst_25668;return ((function (c,v,vec__25673,cs,inst_25677,inst_25675,inst_25668,inst_25676,state_val_25697,c__9125__auto___25720,out){
return (function (p1__25613_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25613_SHARP_);
});
;})(c,v,vec__25673,cs,inst_25677,inst_25675,inst_25668,inst_25676,state_val_25697,c__9125__auto___25720,out))
})();var inst_25681 = cljs.core.filterv.call(null,inst_25680,inst_25668);var inst_25668__$1 = inst_25681;var state_25696__$1 = (function (){var statearr_25711 = state_25696;(statearr_25711[(10)] = inst_25668__$1);
return statearr_25711;
})();var statearr_25712_25730 = state_25696__$1;(statearr_25712_25730[(2)] = null);
(statearr_25712_25730[(1)] = (2));
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
});})(c__9125__auto___25720,out))
;return ((function (switch__9110__auto__,c__9125__auto___25720,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25716 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25716[(0)] = state_machine__9111__auto__);
(statearr_25716[(1)] = (1));
return statearr_25716;
});
var state_machine__9111__auto____1 = (function (state_25696){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25696);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object))
{var ex__9114__auto__ = e25717;var statearr_25718_25731 = state_25696;(statearr_25718_25731[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25717;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25732 = state_25696;
state_25696 = G__25732;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25696){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25720,out))
})();var state__9127__auto__ = (function (){var statearr_25719 = f__9126__auto__.call(null);(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25720);
return statearr_25719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25720,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25825 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25825,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25825,out){
return (function (state_25802){var state_val_25803 = (state_25802[(1)]);if((state_val_25803 === (7)))
{var inst_25784 = (state_25802[(7)]);var inst_25784__$1 = (state_25802[(2)]);var inst_25785 = (inst_25784__$1 == null);var inst_25786 = cljs.core.not.call(null,inst_25785);var state_25802__$1 = (function (){var statearr_25804 = state_25802;(statearr_25804[(7)] = inst_25784__$1);
return statearr_25804;
})();if(inst_25786)
{var statearr_25805_25826 = state_25802__$1;(statearr_25805_25826[(1)] = (8));
} else
{var statearr_25806_25827 = state_25802__$1;(statearr_25806_25827[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (1)))
{var inst_25779 = (0);var state_25802__$1 = (function (){var statearr_25807 = state_25802;(statearr_25807[(8)] = inst_25779);
return statearr_25807;
})();var statearr_25808_25828 = state_25802__$1;(statearr_25808_25828[(2)] = null);
(statearr_25808_25828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (4)))
{var state_25802__$1 = state_25802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25802__$1,(7),ch);
} else
{if((state_val_25803 === (6)))
{var inst_25797 = (state_25802[(2)]);var state_25802__$1 = state_25802;var statearr_25809_25829 = state_25802__$1;(statearr_25809_25829[(2)] = inst_25797);
(statearr_25809_25829[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (3)))
{var inst_25799 = (state_25802[(2)]);var inst_25800 = cljs.core.async.close_BANG_.call(null,out);var state_25802__$1 = (function (){var statearr_25810 = state_25802;(statearr_25810[(9)] = inst_25799);
return statearr_25810;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25802__$1,inst_25800);
} else
{if((state_val_25803 === (2)))
{var inst_25779 = (state_25802[(8)]);var inst_25781 = (inst_25779 < n);var state_25802__$1 = state_25802;if(cljs.core.truth_(inst_25781))
{var statearr_25811_25830 = state_25802__$1;(statearr_25811_25830[(1)] = (4));
} else
{var statearr_25812_25831 = state_25802__$1;(statearr_25812_25831[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (11)))
{var inst_25779 = (state_25802[(8)]);var inst_25789 = (state_25802[(2)]);var inst_25790 = (inst_25779 + (1));var inst_25779__$1 = inst_25790;var state_25802__$1 = (function (){var statearr_25813 = state_25802;(statearr_25813[(10)] = inst_25789);
(statearr_25813[(8)] = inst_25779__$1);
return statearr_25813;
})();var statearr_25814_25832 = state_25802__$1;(statearr_25814_25832[(2)] = null);
(statearr_25814_25832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (9)))
{var state_25802__$1 = state_25802;var statearr_25815_25833 = state_25802__$1;(statearr_25815_25833[(2)] = null);
(statearr_25815_25833[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (5)))
{var state_25802__$1 = state_25802;var statearr_25816_25834 = state_25802__$1;(statearr_25816_25834[(2)] = null);
(statearr_25816_25834[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (10)))
{var inst_25794 = (state_25802[(2)]);var state_25802__$1 = state_25802;var statearr_25817_25835 = state_25802__$1;(statearr_25817_25835[(2)] = inst_25794);
(statearr_25817_25835[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25803 === (8)))
{var inst_25784 = (state_25802[(7)]);var state_25802__$1 = state_25802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25802__$1,(11),out,inst_25784);
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
});})(c__9125__auto___25825,out))
;return ((function (switch__9110__auto__,c__9125__auto___25825,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25821 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25821[(0)] = state_machine__9111__auto__);
(statearr_25821[(1)] = (1));
return statearr_25821;
});
var state_machine__9111__auto____1 = (function (state_25802){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25802);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25822){if((e25822 instanceof Object))
{var ex__9114__auto__ = e25822;var statearr_25823_25836 = state_25802;(statearr_25823_25836[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25822;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25837 = state_25802;
state_25802 = G__25837;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25802){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25825,out))
})();var state__9127__auto__ = (function (){var statearr_25824 = f__9126__auto__.call(null);(statearr_25824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25825);
return statearr_25824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25825,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25845 = (function (ch,f,map_LT_,meta25846){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25846 = meta25846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25845.cljs$lang$type = true;
cljs.core.async.t25845.cljs$lang$ctorStr = "cljs.core.async/t25845";
cljs.core.async.t25845.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25845");
});
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25848 = (function (fn1,_,meta25846,ch,f,map_LT_,meta25849){
this.fn1 = fn1;
this._ = _;
this.meta25846 = meta25846;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25849 = meta25849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25848.cljs$lang$type = true;
cljs.core.async.t25848.cljs$lang$ctorStr = "cljs.core.async/t25848";
cljs.core.async.t25848.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25848");
});})(___$1))
;
cljs.core.async.t25848.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25838_SHARP_){return f1.call(null,(((p1__25838_SHARP_ == null))?null:self__.f.call(null,p1__25838_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25850){var self__ = this;
var _25850__$1 = this;return self__.meta25849;
});})(___$1))
;
cljs.core.async.t25848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25850,meta25849__$1){var self__ = this;
var _25850__$1 = this;return (new cljs.core.async.t25848(self__.fn1,self__._,self__.meta25846,self__.ch,self__.f,self__.map_LT_,meta25849__$1));
});})(___$1))
;
cljs.core.async.__GT_t25848 = ((function (___$1){
return (function __GT_t25848(fn1__$1,___$2,meta25846__$1,ch__$2,f__$2,map_LT___$2,meta25849){return (new cljs.core.async.t25848(fn1__$1,___$2,meta25846__$1,ch__$2,f__$2,map_LT___$2,meta25849));
});})(___$1))
;
}
return (new cljs.core.async.t25848(fn1,___$1,self__.meta25846,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25847){var self__ = this;
var _25847__$1 = this;return self__.meta25846;
});
cljs.core.async.t25845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25847,meta25846__$1){var self__ = this;
var _25847__$1 = this;return (new cljs.core.async.t25845(self__.ch,self__.f,self__.map_LT_,meta25846__$1));
});
cljs.core.async.__GT_t25845 = (function __GT_t25845(ch__$1,f__$1,map_LT___$1,meta25846){return (new cljs.core.async.t25845(ch__$1,f__$1,map_LT___$1,meta25846));
});
}
return (new cljs.core.async.t25845(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25854 = (function (ch,f,map_GT_,meta25855){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25855 = meta25855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25854.cljs$lang$type = true;
cljs.core.async.t25854.cljs$lang$ctorStr = "cljs.core.async/t25854";
cljs.core.async.t25854.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25854");
});
cljs.core.async.t25854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25854.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25856){var self__ = this;
var _25856__$1 = this;return self__.meta25855;
});
cljs.core.async.t25854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25856,meta25855__$1){var self__ = this;
var _25856__$1 = this;return (new cljs.core.async.t25854(self__.ch,self__.f,self__.map_GT_,meta25855__$1));
});
cljs.core.async.__GT_t25854 = (function __GT_t25854(ch__$1,f__$1,map_GT___$1,meta25855){return (new cljs.core.async.t25854(ch__$1,f__$1,map_GT___$1,meta25855));
});
}
return (new cljs.core.async.t25854(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25860 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25860 = (function (ch,p,filter_GT_,meta25861){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25861 = meta25861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25860.cljs$lang$type = true;
cljs.core.async.t25860.cljs$lang$ctorStr = "cljs.core.async/t25860";
cljs.core.async.t25860.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25860");
});
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25860.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25862){var self__ = this;
var _25862__$1 = this;return self__.meta25861;
});
cljs.core.async.t25860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25862,meta25861__$1){var self__ = this;
var _25862__$1 = this;return (new cljs.core.async.t25860(self__.ch,self__.p,self__.filter_GT_,meta25861__$1));
});
cljs.core.async.__GT_t25860 = (function __GT_t25860(ch__$1,p__$1,filter_GT___$1,meta25861){return (new cljs.core.async.t25860(ch__$1,p__$1,filter_GT___$1,meta25861));
});
}
return (new cljs.core.async.t25860(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25945 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25945,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25945,out){
return (function (state_25924){var state_val_25925 = (state_25924[(1)]);if((state_val_25925 === (7)))
{var inst_25920 = (state_25924[(2)]);var state_25924__$1 = state_25924;var statearr_25926_25946 = state_25924__$1;(statearr_25926_25946[(2)] = inst_25920);
(statearr_25926_25946[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (1)))
{var state_25924__$1 = state_25924;var statearr_25927_25947 = state_25924__$1;(statearr_25927_25947[(2)] = null);
(statearr_25927_25947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (4)))
{var inst_25906 = (state_25924[(7)]);var inst_25906__$1 = (state_25924[(2)]);var inst_25907 = (inst_25906__$1 == null);var state_25924__$1 = (function (){var statearr_25928 = state_25924;(statearr_25928[(7)] = inst_25906__$1);
return statearr_25928;
})();if(cljs.core.truth_(inst_25907))
{var statearr_25929_25948 = state_25924__$1;(statearr_25929_25948[(1)] = (5));
} else
{var statearr_25930_25949 = state_25924__$1;(statearr_25930_25949[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (6)))
{var inst_25906 = (state_25924[(7)]);var inst_25911 = p.call(null,inst_25906);var state_25924__$1 = state_25924;if(cljs.core.truth_(inst_25911))
{var statearr_25931_25950 = state_25924__$1;(statearr_25931_25950[(1)] = (8));
} else
{var statearr_25932_25951 = state_25924__$1;(statearr_25932_25951[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (3)))
{var inst_25922 = (state_25924[(2)]);var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25924__$1,inst_25922);
} else
{if((state_val_25925 === (2)))
{var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25924__$1,(4),ch);
} else
{if((state_val_25925 === (11)))
{var inst_25914 = (state_25924[(2)]);var state_25924__$1 = state_25924;var statearr_25933_25952 = state_25924__$1;(statearr_25933_25952[(2)] = inst_25914);
(statearr_25933_25952[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (9)))
{var state_25924__$1 = state_25924;var statearr_25934_25953 = state_25924__$1;(statearr_25934_25953[(2)] = null);
(statearr_25934_25953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (5)))
{var inst_25909 = cljs.core.async.close_BANG_.call(null,out);var state_25924__$1 = state_25924;var statearr_25935_25954 = state_25924__$1;(statearr_25935_25954[(2)] = inst_25909);
(statearr_25935_25954[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (10)))
{var inst_25917 = (state_25924[(2)]);var state_25924__$1 = (function (){var statearr_25936 = state_25924;(statearr_25936[(8)] = inst_25917);
return statearr_25936;
})();var statearr_25937_25955 = state_25924__$1;(statearr_25937_25955[(2)] = null);
(statearr_25937_25955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25925 === (8)))
{var inst_25906 = (state_25924[(7)]);var state_25924__$1 = state_25924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25924__$1,(11),out,inst_25906);
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
});})(c__9125__auto___25945,out))
;return ((function (switch__9110__auto__,c__9125__auto___25945,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25941 = [null,null,null,null,null,null,null,null,null];(statearr_25941[(0)] = state_machine__9111__auto__);
(statearr_25941[(1)] = (1));
return statearr_25941;
});
var state_machine__9111__auto____1 = (function (state_25924){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25924);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25942){if((e25942 instanceof Object))
{var ex__9114__auto__ = e25942;var statearr_25943_25956 = state_25924;(statearr_25943_25956[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25924);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25942;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25957 = state_25924;
state_25924 = G__25957;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25924){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25945,out))
})();var state__9127__auto__ = (function (){var statearr_25944 = f__9126__auto__.call(null);(statearr_25944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25945);
return statearr_25944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25945,out))
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
return (function (state_26123){var state_val_26124 = (state_26123[(1)]);if((state_val_26124 === (7)))
{var inst_26119 = (state_26123[(2)]);var state_26123__$1 = state_26123;var statearr_26125_26166 = state_26123__$1;(statearr_26125_26166[(2)] = inst_26119);
(statearr_26125_26166[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (20)))
{var inst_26089 = (state_26123[(7)]);var inst_26100 = (state_26123[(2)]);var inst_26101 = cljs.core.next.call(null,inst_26089);var inst_26075 = inst_26101;var inst_26076 = null;var inst_26077 = (0);var inst_26078 = (0);var state_26123__$1 = (function (){var statearr_26126 = state_26123;(statearr_26126[(8)] = inst_26076);
(statearr_26126[(9)] = inst_26078);
(statearr_26126[(10)] = inst_26077);
(statearr_26126[(11)] = inst_26100);
(statearr_26126[(12)] = inst_26075);
return statearr_26126;
})();var statearr_26127_26167 = state_26123__$1;(statearr_26127_26167[(2)] = null);
(statearr_26127_26167[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (1)))
{var state_26123__$1 = state_26123;var statearr_26128_26168 = state_26123__$1;(statearr_26128_26168[(2)] = null);
(statearr_26128_26168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (4)))
{var inst_26064 = (state_26123[(13)]);var inst_26064__$1 = (state_26123[(2)]);var inst_26065 = (inst_26064__$1 == null);var state_26123__$1 = (function (){var statearr_26129 = state_26123;(statearr_26129[(13)] = inst_26064__$1);
return statearr_26129;
})();if(cljs.core.truth_(inst_26065))
{var statearr_26130_26169 = state_26123__$1;(statearr_26130_26169[(1)] = (5));
} else
{var statearr_26131_26170 = state_26123__$1;(statearr_26131_26170[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (15)))
{var state_26123__$1 = state_26123;var statearr_26135_26171 = state_26123__$1;(statearr_26135_26171[(2)] = null);
(statearr_26135_26171[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (21)))
{var state_26123__$1 = state_26123;var statearr_26136_26172 = state_26123__$1;(statearr_26136_26172[(2)] = null);
(statearr_26136_26172[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (13)))
{var inst_26076 = (state_26123[(8)]);var inst_26078 = (state_26123[(9)]);var inst_26077 = (state_26123[(10)]);var inst_26075 = (state_26123[(12)]);var inst_26085 = (state_26123[(2)]);var inst_26086 = (inst_26078 + (1));var tmp26132 = inst_26076;var tmp26133 = inst_26077;var tmp26134 = inst_26075;var inst_26075__$1 = tmp26134;var inst_26076__$1 = tmp26132;var inst_26077__$1 = tmp26133;var inst_26078__$1 = inst_26086;var state_26123__$1 = (function (){var statearr_26137 = state_26123;(statearr_26137[(8)] = inst_26076__$1);
(statearr_26137[(9)] = inst_26078__$1);
(statearr_26137[(14)] = inst_26085);
(statearr_26137[(10)] = inst_26077__$1);
(statearr_26137[(12)] = inst_26075__$1);
return statearr_26137;
})();var statearr_26138_26173 = state_26123__$1;(statearr_26138_26173[(2)] = null);
(statearr_26138_26173[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (22)))
{var state_26123__$1 = state_26123;var statearr_26139_26174 = state_26123__$1;(statearr_26139_26174[(2)] = null);
(statearr_26139_26174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (6)))
{var inst_26064 = (state_26123[(13)]);var inst_26073 = f.call(null,inst_26064);var inst_26074 = cljs.core.seq.call(null,inst_26073);var inst_26075 = inst_26074;var inst_26076 = null;var inst_26077 = (0);var inst_26078 = (0);var state_26123__$1 = (function (){var statearr_26140 = state_26123;(statearr_26140[(8)] = inst_26076);
(statearr_26140[(9)] = inst_26078);
(statearr_26140[(10)] = inst_26077);
(statearr_26140[(12)] = inst_26075);
return statearr_26140;
})();var statearr_26141_26175 = state_26123__$1;(statearr_26141_26175[(2)] = null);
(statearr_26141_26175[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (17)))
{var inst_26089 = (state_26123[(7)]);var inst_26093 = cljs.core.chunk_first.call(null,inst_26089);var inst_26094 = cljs.core.chunk_rest.call(null,inst_26089);var inst_26095 = cljs.core.count.call(null,inst_26093);var inst_26075 = inst_26094;var inst_26076 = inst_26093;var inst_26077 = inst_26095;var inst_26078 = (0);var state_26123__$1 = (function (){var statearr_26142 = state_26123;(statearr_26142[(8)] = inst_26076);
(statearr_26142[(9)] = inst_26078);
(statearr_26142[(10)] = inst_26077);
(statearr_26142[(12)] = inst_26075);
return statearr_26142;
})();var statearr_26143_26176 = state_26123__$1;(statearr_26143_26176[(2)] = null);
(statearr_26143_26176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (3)))
{var inst_26121 = (state_26123[(2)]);var state_26123__$1 = state_26123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26123__$1,inst_26121);
} else
{if((state_val_26124 === (12)))
{var inst_26109 = (state_26123[(2)]);var state_26123__$1 = state_26123;var statearr_26144_26177 = state_26123__$1;(statearr_26144_26177[(2)] = inst_26109);
(statearr_26144_26177[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (2)))
{var state_26123__$1 = state_26123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26123__$1,(4),in$);
} else
{if((state_val_26124 === (23)))
{var inst_26117 = (state_26123[(2)]);var state_26123__$1 = state_26123;var statearr_26145_26178 = state_26123__$1;(statearr_26145_26178[(2)] = inst_26117);
(statearr_26145_26178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (19)))
{var inst_26104 = (state_26123[(2)]);var state_26123__$1 = state_26123;var statearr_26146_26179 = state_26123__$1;(statearr_26146_26179[(2)] = inst_26104);
(statearr_26146_26179[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (11)))
{var inst_26089 = (state_26123[(7)]);var inst_26075 = (state_26123[(12)]);var inst_26089__$1 = cljs.core.seq.call(null,inst_26075);var state_26123__$1 = (function (){var statearr_26147 = state_26123;(statearr_26147[(7)] = inst_26089__$1);
return statearr_26147;
})();if(inst_26089__$1)
{var statearr_26148_26180 = state_26123__$1;(statearr_26148_26180[(1)] = (14));
} else
{var statearr_26149_26181 = state_26123__$1;(statearr_26149_26181[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (9)))
{var inst_26111 = (state_26123[(2)]);var inst_26112 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26123__$1 = (function (){var statearr_26150 = state_26123;(statearr_26150[(15)] = inst_26111);
return statearr_26150;
})();if(cljs.core.truth_(inst_26112))
{var statearr_26151_26182 = state_26123__$1;(statearr_26151_26182[(1)] = (21));
} else
{var statearr_26152_26183 = state_26123__$1;(statearr_26152_26183[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (5)))
{var inst_26067 = cljs.core.async.close_BANG_.call(null,out);var state_26123__$1 = state_26123;var statearr_26153_26184 = state_26123__$1;(statearr_26153_26184[(2)] = inst_26067);
(statearr_26153_26184[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (14)))
{var inst_26089 = (state_26123[(7)]);var inst_26091 = cljs.core.chunked_seq_QMARK_.call(null,inst_26089);var state_26123__$1 = state_26123;if(inst_26091)
{var statearr_26154_26185 = state_26123__$1;(statearr_26154_26185[(1)] = (17));
} else
{var statearr_26155_26186 = state_26123__$1;(statearr_26155_26186[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (16)))
{var inst_26107 = (state_26123[(2)]);var state_26123__$1 = state_26123;var statearr_26156_26187 = state_26123__$1;(statearr_26156_26187[(2)] = inst_26107);
(statearr_26156_26187[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26124 === (10)))
{var inst_26076 = (state_26123[(8)]);var inst_26078 = (state_26123[(9)]);var inst_26083 = cljs.core._nth.call(null,inst_26076,inst_26078);var state_26123__$1 = state_26123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26123__$1,(13),out,inst_26083);
} else
{if((state_val_26124 === (18)))
{var inst_26089 = (state_26123[(7)]);var inst_26098 = cljs.core.first.call(null,inst_26089);var state_26123__$1 = state_26123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26123__$1,(20),out,inst_26098);
} else
{if((state_val_26124 === (8)))
{var inst_26078 = (state_26123[(9)]);var inst_26077 = (state_26123[(10)]);var inst_26080 = (inst_26078 < inst_26077);var inst_26081 = inst_26080;var state_26123__$1 = state_26123;if(cljs.core.truth_(inst_26081))
{var statearr_26157_26188 = state_26123__$1;(statearr_26157_26188[(1)] = (10));
} else
{var statearr_26158_26189 = state_26123__$1;(statearr_26158_26189[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26162[(0)] = state_machine__9111__auto__);
(statearr_26162[(1)] = (1));
return statearr_26162;
});
var state_machine__9111__auto____1 = (function (state_26123){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26123);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object))
{var ex__9114__auto__ = e26163;var statearr_26164_26190 = state_26123;(statearr_26164_26190[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26191 = state_26123;
state_26123 = G__26191;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26123){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26165 = f__9126__auto__.call(null);(statearr_26165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26165;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26288 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26288,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26288,out){
return (function (state_26263){var state_val_26264 = (state_26263[(1)]);if((state_val_26264 === (7)))
{var inst_26258 = (state_26263[(2)]);var state_26263__$1 = state_26263;var statearr_26265_26289 = state_26263__$1;(statearr_26265_26289[(2)] = inst_26258);
(statearr_26265_26289[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (1)))
{var inst_26240 = null;var state_26263__$1 = (function (){var statearr_26266 = state_26263;(statearr_26266[(7)] = inst_26240);
return statearr_26266;
})();var statearr_26267_26290 = state_26263__$1;(statearr_26267_26290[(2)] = null);
(statearr_26267_26290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (4)))
{var inst_26243 = (state_26263[(8)]);var inst_26243__$1 = (state_26263[(2)]);var inst_26244 = (inst_26243__$1 == null);var inst_26245 = cljs.core.not.call(null,inst_26244);var state_26263__$1 = (function (){var statearr_26268 = state_26263;(statearr_26268[(8)] = inst_26243__$1);
return statearr_26268;
})();if(inst_26245)
{var statearr_26269_26291 = state_26263__$1;(statearr_26269_26291[(1)] = (5));
} else
{var statearr_26270_26292 = state_26263__$1;(statearr_26270_26292[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (6)))
{var state_26263__$1 = state_26263;var statearr_26271_26293 = state_26263__$1;(statearr_26271_26293[(2)] = null);
(statearr_26271_26293[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (3)))
{var inst_26260 = (state_26263[(2)]);var inst_26261 = cljs.core.async.close_BANG_.call(null,out);var state_26263__$1 = (function (){var statearr_26272 = state_26263;(statearr_26272[(9)] = inst_26260);
return statearr_26272;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26263__$1,inst_26261);
} else
{if((state_val_26264 === (2)))
{var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26263__$1,(4),ch);
} else
{if((state_val_26264 === (11)))
{var inst_26243 = (state_26263[(8)]);var inst_26252 = (state_26263[(2)]);var inst_26240 = inst_26243;var state_26263__$1 = (function (){var statearr_26273 = state_26263;(statearr_26273[(7)] = inst_26240);
(statearr_26273[(10)] = inst_26252);
return statearr_26273;
})();var statearr_26274_26294 = state_26263__$1;(statearr_26274_26294[(2)] = null);
(statearr_26274_26294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (9)))
{var inst_26243 = (state_26263[(8)]);var state_26263__$1 = state_26263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26263__$1,(11),out,inst_26243);
} else
{if((state_val_26264 === (5)))
{var inst_26240 = (state_26263[(7)]);var inst_26243 = (state_26263[(8)]);var inst_26247 = cljs.core._EQ_.call(null,inst_26243,inst_26240);var state_26263__$1 = state_26263;if(inst_26247)
{var statearr_26276_26295 = state_26263__$1;(statearr_26276_26295[(1)] = (8));
} else
{var statearr_26277_26296 = state_26263__$1;(statearr_26277_26296[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (10)))
{var inst_26255 = (state_26263[(2)]);var state_26263__$1 = state_26263;var statearr_26278_26297 = state_26263__$1;(statearr_26278_26297[(2)] = inst_26255);
(statearr_26278_26297[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26264 === (8)))
{var inst_26240 = (state_26263[(7)]);var tmp26275 = inst_26240;var inst_26240__$1 = tmp26275;var state_26263__$1 = (function (){var statearr_26279 = state_26263;(statearr_26279[(7)] = inst_26240__$1);
return statearr_26279;
})();var statearr_26280_26298 = state_26263__$1;(statearr_26280_26298[(2)] = null);
(statearr_26280_26298[(1)] = (2));
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
});})(c__9125__auto___26288,out))
;return ((function (switch__9110__auto__,c__9125__auto___26288,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26284 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26284[(0)] = state_machine__9111__auto__);
(statearr_26284[(1)] = (1));
return statearr_26284;
});
var state_machine__9111__auto____1 = (function (state_26263){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26263);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26285){if((e26285 instanceof Object))
{var ex__9114__auto__ = e26285;var statearr_26286_26299 = state_26263;(statearr_26286_26299[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26285;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26300 = state_26263;
state_26263 = G__26300;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26288,out))
})();var state__9127__auto__ = (function (){var statearr_26287 = f__9126__auto__.call(null);(statearr_26287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26288);
return statearr_26287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26288,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26435,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26435,out){
return (function (state_26405){var state_val_26406 = (state_26405[(1)]);if((state_val_26406 === (7)))
{var inst_26401 = (state_26405[(2)]);var state_26405__$1 = state_26405;var statearr_26407_26436 = state_26405__$1;(statearr_26407_26436[(2)] = inst_26401);
(statearr_26407_26436[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (1)))
{var inst_26368 = (new Array(n));var inst_26369 = inst_26368;var inst_26370 = (0);var state_26405__$1 = (function (){var statearr_26408 = state_26405;(statearr_26408[(7)] = inst_26370);
(statearr_26408[(8)] = inst_26369);
return statearr_26408;
})();var statearr_26409_26437 = state_26405__$1;(statearr_26409_26437[(2)] = null);
(statearr_26409_26437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (4)))
{var inst_26373 = (state_26405[(9)]);var inst_26373__$1 = (state_26405[(2)]);var inst_26374 = (inst_26373__$1 == null);var inst_26375 = cljs.core.not.call(null,inst_26374);var state_26405__$1 = (function (){var statearr_26410 = state_26405;(statearr_26410[(9)] = inst_26373__$1);
return statearr_26410;
})();if(inst_26375)
{var statearr_26411_26438 = state_26405__$1;(statearr_26411_26438[(1)] = (5));
} else
{var statearr_26412_26439 = state_26405__$1;(statearr_26412_26439[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (15)))
{var inst_26395 = (state_26405[(2)]);var state_26405__$1 = state_26405;var statearr_26413_26440 = state_26405__$1;(statearr_26413_26440[(2)] = inst_26395);
(statearr_26413_26440[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (13)))
{var state_26405__$1 = state_26405;var statearr_26414_26441 = state_26405__$1;(statearr_26414_26441[(2)] = null);
(statearr_26414_26441[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (6)))
{var inst_26370 = (state_26405[(7)]);var inst_26391 = (inst_26370 > (0));var state_26405__$1 = state_26405;if(cljs.core.truth_(inst_26391))
{var statearr_26415_26442 = state_26405__$1;(statearr_26415_26442[(1)] = (12));
} else
{var statearr_26416_26443 = state_26405__$1;(statearr_26416_26443[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (3)))
{var inst_26403 = (state_26405[(2)]);var state_26405__$1 = state_26405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26405__$1,inst_26403);
} else
{if((state_val_26406 === (12)))
{var inst_26369 = (state_26405[(8)]);var inst_26393 = cljs.core.vec.call(null,inst_26369);var state_26405__$1 = state_26405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26405__$1,(15),out,inst_26393);
} else
{if((state_val_26406 === (2)))
{var state_26405__$1 = state_26405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26405__$1,(4),ch);
} else
{if((state_val_26406 === (11)))
{var inst_26385 = (state_26405[(2)]);var inst_26386 = (new Array(n));var inst_26369 = inst_26386;var inst_26370 = (0);var state_26405__$1 = (function (){var statearr_26417 = state_26405;(statearr_26417[(7)] = inst_26370);
(statearr_26417[(8)] = inst_26369);
(statearr_26417[(10)] = inst_26385);
return statearr_26417;
})();var statearr_26418_26444 = state_26405__$1;(statearr_26418_26444[(2)] = null);
(statearr_26418_26444[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (9)))
{var inst_26369 = (state_26405[(8)]);var inst_26383 = cljs.core.vec.call(null,inst_26369);var state_26405__$1 = state_26405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26405__$1,(11),out,inst_26383);
} else
{if((state_val_26406 === (5)))
{var inst_26378 = (state_26405[(11)]);var inst_26373 = (state_26405[(9)]);var inst_26370 = (state_26405[(7)]);var inst_26369 = (state_26405[(8)]);var inst_26377 = (inst_26369[inst_26370] = inst_26373);var inst_26378__$1 = (inst_26370 + (1));var inst_26379 = (inst_26378__$1 < n);var state_26405__$1 = (function (){var statearr_26419 = state_26405;(statearr_26419[(11)] = inst_26378__$1);
(statearr_26419[(12)] = inst_26377);
return statearr_26419;
})();if(cljs.core.truth_(inst_26379))
{var statearr_26420_26445 = state_26405__$1;(statearr_26420_26445[(1)] = (8));
} else
{var statearr_26421_26446 = state_26405__$1;(statearr_26421_26446[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (14)))
{var inst_26398 = (state_26405[(2)]);var inst_26399 = cljs.core.async.close_BANG_.call(null,out);var state_26405__$1 = (function (){var statearr_26423 = state_26405;(statearr_26423[(13)] = inst_26398);
return statearr_26423;
})();var statearr_26424_26447 = state_26405__$1;(statearr_26424_26447[(2)] = inst_26399);
(statearr_26424_26447[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (10)))
{var inst_26389 = (state_26405[(2)]);var state_26405__$1 = state_26405;var statearr_26425_26448 = state_26405__$1;(statearr_26425_26448[(2)] = inst_26389);
(statearr_26425_26448[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26406 === (8)))
{var inst_26378 = (state_26405[(11)]);var inst_26369 = (state_26405[(8)]);var tmp26422 = inst_26369;var inst_26369__$1 = tmp26422;var inst_26370 = inst_26378;var state_26405__$1 = (function (){var statearr_26426 = state_26405;(statearr_26426[(7)] = inst_26370);
(statearr_26426[(8)] = inst_26369__$1);
return statearr_26426;
})();var statearr_26427_26449 = state_26405__$1;(statearr_26427_26449[(2)] = null);
(statearr_26427_26449[(1)] = (2));
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
});})(c__9125__auto___26435,out))
;return ((function (switch__9110__auto__,c__9125__auto___26435,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26431[(0)] = state_machine__9111__auto__);
(statearr_26431[(1)] = (1));
return statearr_26431;
});
var state_machine__9111__auto____1 = (function (state_26405){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26405);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26432){if((e26432 instanceof Object))
{var ex__9114__auto__ = e26432;var statearr_26433_26450 = state_26405;(statearr_26433_26450[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26432;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26451 = state_26405;
state_26405 = G__26451;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26405){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26435,out))
})();var state__9127__auto__ = (function (){var statearr_26434 = f__9126__auto__.call(null);(statearr_26434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26435);
return statearr_26434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26435,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26594 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26594,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26594,out){
return (function (state_26564){var state_val_26565 = (state_26564[(1)]);if((state_val_26565 === (7)))
{var inst_26560 = (state_26564[(2)]);var state_26564__$1 = state_26564;var statearr_26566_26595 = state_26564__$1;(statearr_26566_26595[(2)] = inst_26560);
(statearr_26566_26595[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (1)))
{var inst_26523 = [];var inst_26524 = inst_26523;var inst_26525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26564__$1 = (function (){var statearr_26567 = state_26564;(statearr_26567[(7)] = inst_26525);
(statearr_26567[(8)] = inst_26524);
return statearr_26567;
})();var statearr_26568_26596 = state_26564__$1;(statearr_26568_26596[(2)] = null);
(statearr_26568_26596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (4)))
{var inst_26528 = (state_26564[(9)]);var inst_26528__$1 = (state_26564[(2)]);var inst_26529 = (inst_26528__$1 == null);var inst_26530 = cljs.core.not.call(null,inst_26529);var state_26564__$1 = (function (){var statearr_26569 = state_26564;(statearr_26569[(9)] = inst_26528__$1);
return statearr_26569;
})();if(inst_26530)
{var statearr_26570_26597 = state_26564__$1;(statearr_26570_26597[(1)] = (5));
} else
{var statearr_26571_26598 = state_26564__$1;(statearr_26571_26598[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (15)))
{var inst_26554 = (state_26564[(2)]);var state_26564__$1 = state_26564;var statearr_26572_26599 = state_26564__$1;(statearr_26572_26599[(2)] = inst_26554);
(statearr_26572_26599[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (13)))
{var state_26564__$1 = state_26564;var statearr_26573_26600 = state_26564__$1;(statearr_26573_26600[(2)] = null);
(statearr_26573_26600[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (6)))
{var inst_26524 = (state_26564[(8)]);var inst_26549 = inst_26524.length;var inst_26550 = (inst_26549 > (0));var state_26564__$1 = state_26564;if(cljs.core.truth_(inst_26550))
{var statearr_26574_26601 = state_26564__$1;(statearr_26574_26601[(1)] = (12));
} else
{var statearr_26575_26602 = state_26564__$1;(statearr_26575_26602[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (3)))
{var inst_26562 = (state_26564[(2)]);var state_26564__$1 = state_26564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26564__$1,inst_26562);
} else
{if((state_val_26565 === (12)))
{var inst_26524 = (state_26564[(8)]);var inst_26552 = cljs.core.vec.call(null,inst_26524);var state_26564__$1 = state_26564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26564__$1,(15),out,inst_26552);
} else
{if((state_val_26565 === (2)))
{var state_26564__$1 = state_26564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26564__$1,(4),ch);
} else
{if((state_val_26565 === (11)))
{var inst_26528 = (state_26564[(9)]);var inst_26532 = (state_26564[(10)]);var inst_26542 = (state_26564[(2)]);var inst_26543 = [];var inst_26544 = inst_26543.push(inst_26528);var inst_26524 = inst_26543;var inst_26525 = inst_26532;var state_26564__$1 = (function (){var statearr_26576 = state_26564;(statearr_26576[(11)] = inst_26542);
(statearr_26576[(7)] = inst_26525);
(statearr_26576[(12)] = inst_26544);
(statearr_26576[(8)] = inst_26524);
return statearr_26576;
})();var statearr_26577_26603 = state_26564__$1;(statearr_26577_26603[(2)] = null);
(statearr_26577_26603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (9)))
{var inst_26524 = (state_26564[(8)]);var inst_26540 = cljs.core.vec.call(null,inst_26524);var state_26564__$1 = state_26564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26564__$1,(11),out,inst_26540);
} else
{if((state_val_26565 === (5)))
{var inst_26525 = (state_26564[(7)]);var inst_26528 = (state_26564[(9)]);var inst_26532 = (state_26564[(10)]);var inst_26532__$1 = f.call(null,inst_26528);var inst_26533 = cljs.core._EQ_.call(null,inst_26532__$1,inst_26525);var inst_26534 = cljs.core.keyword_identical_QMARK_.call(null,inst_26525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26535 = (inst_26533) || (inst_26534);var state_26564__$1 = (function (){var statearr_26578 = state_26564;(statearr_26578[(10)] = inst_26532__$1);
return statearr_26578;
})();if(cljs.core.truth_(inst_26535))
{var statearr_26579_26604 = state_26564__$1;(statearr_26579_26604[(1)] = (8));
} else
{var statearr_26580_26605 = state_26564__$1;(statearr_26580_26605[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (14)))
{var inst_26557 = (state_26564[(2)]);var inst_26558 = cljs.core.async.close_BANG_.call(null,out);var state_26564__$1 = (function (){var statearr_26582 = state_26564;(statearr_26582[(13)] = inst_26557);
return statearr_26582;
})();var statearr_26583_26606 = state_26564__$1;(statearr_26583_26606[(2)] = inst_26558);
(statearr_26583_26606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (10)))
{var inst_26547 = (state_26564[(2)]);var state_26564__$1 = state_26564;var statearr_26584_26607 = state_26564__$1;(statearr_26584_26607[(2)] = inst_26547);
(statearr_26584_26607[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26565 === (8)))
{var inst_26524 = (state_26564[(8)]);var inst_26528 = (state_26564[(9)]);var inst_26532 = (state_26564[(10)]);var inst_26537 = inst_26524.push(inst_26528);var tmp26581 = inst_26524;var inst_26524__$1 = tmp26581;var inst_26525 = inst_26532;var state_26564__$1 = (function (){var statearr_26585 = state_26564;(statearr_26585[(14)] = inst_26537);
(statearr_26585[(7)] = inst_26525);
(statearr_26585[(8)] = inst_26524__$1);
return statearr_26585;
})();var statearr_26586_26608 = state_26564__$1;(statearr_26586_26608[(2)] = null);
(statearr_26586_26608[(1)] = (2));
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
});})(c__9125__auto___26594,out))
;return ((function (switch__9110__auto__,c__9125__auto___26594,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26590[(0)] = state_machine__9111__auto__);
(statearr_26590[(1)] = (1));
return statearr_26590;
});
var state_machine__9111__auto____1 = (function (state_26564){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26564);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26591){if((e26591 instanceof Object))
{var ex__9114__auto__ = e26591;var statearr_26592_26609 = state_26564;(statearr_26592_26609[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26591;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26610 = state_26564;
state_26564 = G__26610;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26564){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26594,out))
})();var state__9127__auto__ = (function (){var statearr_26593 = f__9126__auto__.call(null);(statearr_26593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26594);
return statearr_26593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26594,out))
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
