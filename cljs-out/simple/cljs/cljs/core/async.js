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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23505 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23505 = (function (f,fn_handler,meta23506){
this.f = f;
this.fn_handler = fn_handler;
this.meta23506 = meta23506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23505.cljs$lang$type = true;
cljs.core.async.t23505.cljs$lang$ctorStr = "cljs.core.async/t23505";
cljs.core.async.t23505.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23505");
});
cljs.core.async.t23505.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23507){var self__ = this;
var _23507__$1 = this;return self__.meta23506;
});
cljs.core.async.t23505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23507,meta23506__$1){var self__ = this;
var _23507__$1 = this;return (new cljs.core.async.t23505(self__.f,self__.fn_handler,meta23506__$1));
});
cljs.core.async.__GT_t23505 = (function __GT_t23505(f__$1,fn_handler__$1,meta23506){return (new cljs.core.async.t23505(f__$1,fn_handler__$1,meta23506));
});
}
return (new cljs.core.async.t23505(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23509 = buff;if(G__23509)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23509.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23509.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23509);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23509);
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
{var val_23510 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23510);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23510,ret){
return (function (){return fn1.call(null,val_23510);
});})(val_23510,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23511 = n;var x_23512 = (0);while(true){
if((x_23512 < n__4508__auto___23511))
{(a[x_23512] = (0));
{
var G__23513 = (x_23512 + (1));
x_23512 = G__23513;
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
var G__23514 = (i + (1));
i = G__23514;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23518 = (function (flag,alt_flag,meta23519){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23519 = meta23519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23518.cljs$lang$type = true;
cljs.core.async.t23518.cljs$lang$ctorStr = "cljs.core.async/t23518";
cljs.core.async.t23518.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23518");
});})(flag))
;
cljs.core.async.t23518.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23520){var self__ = this;
var _23520__$1 = this;return self__.meta23519;
});})(flag))
;
cljs.core.async.t23518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23520,meta23519__$1){var self__ = this;
var _23520__$1 = this;return (new cljs.core.async.t23518(self__.flag,self__.alt_flag,meta23519__$1));
});})(flag))
;
cljs.core.async.__GT_t23518 = ((function (flag){
return (function __GT_t23518(flag__$1,alt_flag__$1,meta23519){return (new cljs.core.async.t23518(flag__$1,alt_flag__$1,meta23519));
});})(flag))
;
}
return (new cljs.core.async.t23518(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23524 = (function (cb,flag,alt_handler,meta23525){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23525 = meta23525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23524.cljs$lang$type = true;
cljs.core.async.t23524.cljs$lang$ctorStr = "cljs.core.async/t23524";
cljs.core.async.t23524.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23524");
});
cljs.core.async.t23524.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23526){var self__ = this;
var _23526__$1 = this;return self__.meta23525;
});
cljs.core.async.t23524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23526,meta23525__$1){var self__ = this;
var _23526__$1 = this;return (new cljs.core.async.t23524(self__.cb,self__.flag,self__.alt_handler,meta23525__$1));
});
cljs.core.async.__GT_t23524 = (function __GT_t23524(cb__$1,flag__$1,alt_handler__$1,meta23525){return (new cljs.core.async.t23524(cb__$1,flag__$1,alt_handler__$1,meta23525));
});
}
return (new cljs.core.async.t23524(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23527_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23527_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23528_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23528_SHARP_,port], null));
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
var G__23529 = (i + (1));
i = G__23529;
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
var alts_BANG___delegate = function (ports,p__23530){var map__23532 = p__23530;var map__23532__$1 = ((cljs.core.seq_QMARK_.call(null,map__23532))?cljs.core.apply.call(null,cljs.core.hash_map,map__23532):map__23532);var opts = map__23532__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23530 = null;if (arguments.length > 1) {
  p__23530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23530);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23533){
var ports = cljs.core.first(arglist__23533);
var p__23530 = cljs.core.rest(arglist__23533);
return alts_BANG___delegate(ports,p__23530);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23628 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23628){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23628){
return (function (state_23604){var state_val_23605 = (state_23604[(1)]);if((state_val_23605 === (7)))
{var inst_23600 = (state_23604[(2)]);var state_23604__$1 = state_23604;var statearr_23606_23629 = state_23604__$1;(statearr_23606_23629[(2)] = inst_23600);
(statearr_23606_23629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (1)))
{var state_23604__$1 = state_23604;var statearr_23607_23630 = state_23604__$1;(statearr_23607_23630[(2)] = null);
(statearr_23607_23630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (4)))
{var inst_23583 = (state_23604[(7)]);var inst_23583__$1 = (state_23604[(2)]);var inst_23584 = (inst_23583__$1 == null);var state_23604__$1 = (function (){var statearr_23608 = state_23604;(statearr_23608[(7)] = inst_23583__$1);
return statearr_23608;
})();if(cljs.core.truth_(inst_23584))
{var statearr_23609_23631 = state_23604__$1;(statearr_23609_23631[(1)] = (5));
} else
{var statearr_23610_23632 = state_23604__$1;(statearr_23610_23632[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (13)))
{var state_23604__$1 = state_23604;var statearr_23611_23633 = state_23604__$1;(statearr_23611_23633[(2)] = null);
(statearr_23611_23633[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (6)))
{var inst_23583 = (state_23604[(7)]);var state_23604__$1 = state_23604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23604__$1,(11),to,inst_23583);
} else
{if((state_val_23605 === (3)))
{var inst_23602 = (state_23604[(2)]);var state_23604__$1 = state_23604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23604__$1,inst_23602);
} else
{if((state_val_23605 === (12)))
{var state_23604__$1 = state_23604;var statearr_23612_23634 = state_23604__$1;(statearr_23612_23634[(2)] = null);
(statearr_23612_23634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (2)))
{var state_23604__$1 = state_23604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23604__$1,(4),from);
} else
{if((state_val_23605 === (11)))
{var inst_23593 = (state_23604[(2)]);var state_23604__$1 = state_23604;if(cljs.core.truth_(inst_23593))
{var statearr_23613_23635 = state_23604__$1;(statearr_23613_23635[(1)] = (12));
} else
{var statearr_23614_23636 = state_23604__$1;(statearr_23614_23636[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (9)))
{var state_23604__$1 = state_23604;var statearr_23615_23637 = state_23604__$1;(statearr_23615_23637[(2)] = null);
(statearr_23615_23637[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (5)))
{var state_23604__$1 = state_23604;if(cljs.core.truth_(close_QMARK_))
{var statearr_23616_23638 = state_23604__$1;(statearr_23616_23638[(1)] = (8));
} else
{var statearr_23617_23639 = state_23604__$1;(statearr_23617_23639[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (14)))
{var inst_23598 = (state_23604[(2)]);var state_23604__$1 = state_23604;var statearr_23618_23640 = state_23604__$1;(statearr_23618_23640[(2)] = inst_23598);
(statearr_23618_23640[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (10)))
{var inst_23590 = (state_23604[(2)]);var state_23604__$1 = state_23604;var statearr_23619_23641 = state_23604__$1;(statearr_23619_23641[(2)] = inst_23590);
(statearr_23619_23641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23605 === (8)))
{var inst_23587 = cljs.core.async.close_BANG_.call(null,to);var state_23604__$1 = state_23604;var statearr_23620_23642 = state_23604__$1;(statearr_23620_23642[(2)] = inst_23587);
(statearr_23620_23642[(1)] = (10));
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
});})(c__9125__auto___23628))
;return ((function (switch__9110__auto__,c__9125__auto___23628){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23624 = [null,null,null,null,null,null,null,null];(statearr_23624[(0)] = state_machine__9111__auto__);
(statearr_23624[(1)] = (1));
return statearr_23624;
});
var state_machine__9111__auto____1 = (function (state_23604){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23604);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23625){if((e23625 instanceof Object))
{var ex__9114__auto__ = e23625;var statearr_23626_23643 = state_23604;(statearr_23626_23643[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23644 = state_23604;
state_23604 = G__23644;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23604){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23628))
})();var state__9127__auto__ = (function (){var statearr_23627 = f__9126__auto__.call(null);(statearr_23627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23628);
return statearr_23627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23628))
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
return (function (p__23828){var vec__23829 = p__23828;var v = cljs.core.nth.call(null,vec__23829,(0),null);var p = cljs.core.nth.call(null,vec__23829,(1),null);var job = vec__23829;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___24011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24011,res,vec__23829,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24011,res,vec__23829,v,p,job,jobs,results){
return (function (state_23834){var state_val_23835 = (state_23834[(1)]);if((state_val_23835 === (2)))
{var inst_23831 = (state_23834[(2)]);var inst_23832 = cljs.core.async.close_BANG_.call(null,res);var state_23834__$1 = (function (){var statearr_23836 = state_23834;(statearr_23836[(7)] = inst_23831);
return statearr_23836;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23834__$1,inst_23832);
} else
{if((state_val_23835 === (1)))
{var state_23834__$1 = state_23834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23834__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___24011,res,vec__23829,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___24011,res,vec__23829,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23840 = [null,null,null,null,null,null,null,null];(statearr_23840[(0)] = state_machine__9111__auto__);
(statearr_23840[(1)] = (1));
return statearr_23840;
});
var state_machine__9111__auto____1 = (function (state_23834){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23834);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object))
{var ex__9114__auto__ = e23841;var statearr_23842_24012 = state_23834;(statearr_23842_24012[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23834);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23841;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24013 = state_23834;
state_23834 = G__24013;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23834){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24011,res,vec__23829,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23843 = f__9126__auto__.call(null);(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24011);
return statearr_23843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24011,res,vec__23829,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23844){var vec__23845 = p__23844;var v = cljs.core.nth.call(null,vec__23845,(0),null);var p = cljs.core.nth.call(null,vec__23845,(1),null);var job = vec__23845;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24014 = n;var __24015 = (0);while(true){
if((__24015 < n__4508__auto___24014))
{var G__23846_24016 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23846_24016) {
case "async":
var c__9125__auto___24018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24015,c__9125__auto___24018,G__23846_24016,n__4508__auto___24014,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24015,c__9125__auto___24018,G__23846_24016,n__4508__auto___24014,jobs,results,process,async){
return (function (state_23859){var state_val_23860 = (state_23859[(1)]);if((state_val_23860 === (7)))
{var inst_23855 = (state_23859[(2)]);var state_23859__$1 = state_23859;var statearr_23861_24019 = state_23859__$1;(statearr_23861_24019[(2)] = inst_23855);
(statearr_23861_24019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23860 === (6)))
{var state_23859__$1 = state_23859;var statearr_23862_24020 = state_23859__$1;(statearr_23862_24020[(2)] = null);
(statearr_23862_24020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23860 === (5)))
{var state_23859__$1 = state_23859;var statearr_23863_24021 = state_23859__$1;(statearr_23863_24021[(2)] = null);
(statearr_23863_24021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23860 === (4)))
{var inst_23849 = (state_23859[(2)]);var inst_23850 = async.call(null,inst_23849);var state_23859__$1 = state_23859;if(cljs.core.truth_(inst_23850))
{var statearr_23864_24022 = state_23859__$1;(statearr_23864_24022[(1)] = (5));
} else
{var statearr_23865_24023 = state_23859__$1;(statearr_23865_24023[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23860 === (3)))
{var inst_23857 = (state_23859[(2)]);var state_23859__$1 = state_23859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23859__$1,inst_23857);
} else
{if((state_val_23860 === (2)))
{var state_23859__$1 = state_23859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23859__$1,(4),jobs);
} else
{if((state_val_23860 === (1)))
{var state_23859__$1 = state_23859;var statearr_23866_24024 = state_23859__$1;(statearr_23866_24024[(2)] = null);
(statearr_23866_24024[(1)] = (2));
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
});})(__24015,c__9125__auto___24018,G__23846_24016,n__4508__auto___24014,jobs,results,process,async))
;return ((function (__24015,switch__9110__auto__,c__9125__auto___24018,G__23846_24016,n__4508__auto___24014,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23870 = [null,null,null,null,null,null,null];(statearr_23870[(0)] = state_machine__9111__auto__);
(statearr_23870[(1)] = (1));
return statearr_23870;
});
var state_machine__9111__auto____1 = (function (state_23859){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23859);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23871){if((e23871 instanceof Object))
{var ex__9114__auto__ = e23871;var statearr_23872_24025 = state_23859;(statearr_23872_24025[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23871;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24026 = state_23859;
state_23859 = G__24026;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23859){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24015,switch__9110__auto__,c__9125__auto___24018,G__23846_24016,n__4508__auto___24014,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23873 = f__9126__auto__.call(null);(statearr_23873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24018);
return statearr_23873;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24015,c__9125__auto___24018,G__23846_24016,n__4508__auto___24014,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24015,c__9125__auto___24027,G__23846_24016,n__4508__auto___24014,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24015,c__9125__auto___24027,G__23846_24016,n__4508__auto___24014,jobs,results,process,async){
return (function (state_23886){var state_val_23887 = (state_23886[(1)]);if((state_val_23887 === (7)))
{var inst_23882 = (state_23886[(2)]);var state_23886__$1 = state_23886;var statearr_23888_24028 = state_23886__$1;(statearr_23888_24028[(2)] = inst_23882);
(statearr_23888_24028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23887 === (6)))
{var state_23886__$1 = state_23886;var statearr_23889_24029 = state_23886__$1;(statearr_23889_24029[(2)] = null);
(statearr_23889_24029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23887 === (5)))
{var state_23886__$1 = state_23886;var statearr_23890_24030 = state_23886__$1;(statearr_23890_24030[(2)] = null);
(statearr_23890_24030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23887 === (4)))
{var inst_23876 = (state_23886[(2)]);var inst_23877 = process.call(null,inst_23876);var state_23886__$1 = state_23886;if(cljs.core.truth_(inst_23877))
{var statearr_23891_24031 = state_23886__$1;(statearr_23891_24031[(1)] = (5));
} else
{var statearr_23892_24032 = state_23886__$1;(statearr_23892_24032[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23887 === (3)))
{var inst_23884 = (state_23886[(2)]);var state_23886__$1 = state_23886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23886__$1,inst_23884);
} else
{if((state_val_23887 === (2)))
{var state_23886__$1 = state_23886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23886__$1,(4),jobs);
} else
{if((state_val_23887 === (1)))
{var state_23886__$1 = state_23886;var statearr_23893_24033 = state_23886__$1;(statearr_23893_24033[(2)] = null);
(statearr_23893_24033[(1)] = (2));
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
});})(__24015,c__9125__auto___24027,G__23846_24016,n__4508__auto___24014,jobs,results,process,async))
;return ((function (__24015,switch__9110__auto__,c__9125__auto___24027,G__23846_24016,n__4508__auto___24014,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23897 = [null,null,null,null,null,null,null];(statearr_23897[(0)] = state_machine__9111__auto__);
(statearr_23897[(1)] = (1));
return statearr_23897;
});
var state_machine__9111__auto____1 = (function (state_23886){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23886);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23898){if((e23898 instanceof Object))
{var ex__9114__auto__ = e23898;var statearr_23899_24034 = state_23886;(statearr_23899_24034[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23898;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24035 = state_23886;
state_23886 = G__24035;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23886){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24015,switch__9110__auto__,c__9125__auto___24027,G__23846_24016,n__4508__auto___24014,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23900 = f__9126__auto__.call(null);(statearr_23900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24027);
return statearr_23900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24015,c__9125__auto___24027,G__23846_24016,n__4508__auto___24014,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24036 = (__24015 + (1));
__24015 = G__24036;
continue;
}
} else
{}
break;
}
var c__9125__auto___24037 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24037,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24037,jobs,results,process,async){
return (function (state_23922){var state_val_23923 = (state_23922[(1)]);if((state_val_23923 === (9)))
{var inst_23915 = (state_23922[(2)]);var state_23922__$1 = (function (){var statearr_23924 = state_23922;(statearr_23924[(7)] = inst_23915);
return statearr_23924;
})();var statearr_23925_24038 = state_23922__$1;(statearr_23925_24038[(2)] = null);
(statearr_23925_24038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (8)))
{var inst_23908 = (state_23922[(8)]);var inst_23913 = (state_23922[(2)]);var state_23922__$1 = (function (){var statearr_23926 = state_23922;(statearr_23926[(9)] = inst_23913);
return statearr_23926;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23922__$1,(9),results,inst_23908);
} else
{if((state_val_23923 === (7)))
{var inst_23918 = (state_23922[(2)]);var state_23922__$1 = state_23922;var statearr_23927_24039 = state_23922__$1;(statearr_23927_24039[(2)] = inst_23918);
(statearr_23927_24039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (6)))
{var inst_23903 = (state_23922[(10)]);var inst_23908 = (state_23922[(8)]);var inst_23908__$1 = cljs.core.async.chan.call(null,(1));var inst_23909 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23910 = [inst_23903,inst_23908__$1];var inst_23911 = (new cljs.core.PersistentVector(null,2,(5),inst_23909,inst_23910,null));var state_23922__$1 = (function (){var statearr_23928 = state_23922;(statearr_23928[(8)] = inst_23908__$1);
return statearr_23928;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23922__$1,(8),jobs,inst_23911);
} else
{if((state_val_23923 === (5)))
{var inst_23906 = cljs.core.async.close_BANG_.call(null,jobs);var state_23922__$1 = state_23922;var statearr_23929_24040 = state_23922__$1;(statearr_23929_24040[(2)] = inst_23906);
(statearr_23929_24040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (4)))
{var inst_23903 = (state_23922[(10)]);var inst_23903__$1 = (state_23922[(2)]);var inst_23904 = (inst_23903__$1 == null);var state_23922__$1 = (function (){var statearr_23930 = state_23922;(statearr_23930[(10)] = inst_23903__$1);
return statearr_23930;
})();if(cljs.core.truth_(inst_23904))
{var statearr_23931_24041 = state_23922__$1;(statearr_23931_24041[(1)] = (5));
} else
{var statearr_23932_24042 = state_23922__$1;(statearr_23932_24042[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23923 === (3)))
{var inst_23920 = (state_23922[(2)]);var state_23922__$1 = state_23922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else
{if((state_val_23923 === (2)))
{var state_23922__$1 = state_23922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23922__$1,(4),from);
} else
{if((state_val_23923 === (1)))
{var state_23922__$1 = state_23922;var statearr_23933_24043 = state_23922__$1;(statearr_23933_24043[(2)] = null);
(statearr_23933_24043[(1)] = (2));
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
});})(c__9125__auto___24037,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24037,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23937 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23937[(0)] = state_machine__9111__auto__);
(statearr_23937[(1)] = (1));
return statearr_23937;
});
var state_machine__9111__auto____1 = (function (state_23922){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23922);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23938){if((e23938 instanceof Object))
{var ex__9114__auto__ = e23938;var statearr_23939_24044 = state_23922;(statearr_23939_24044[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23938;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24045 = state_23922;
state_23922 = G__24045;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24037,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23940 = f__9126__auto__.call(null);(statearr_23940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24037);
return statearr_23940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24037,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23978){var state_val_23979 = (state_23978[(1)]);if((state_val_23979 === (7)))
{var inst_23974 = (state_23978[(2)]);var state_23978__$1 = state_23978;var statearr_23980_24046 = state_23978__$1;(statearr_23980_24046[(2)] = inst_23974);
(statearr_23980_24046[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (20)))
{var state_23978__$1 = state_23978;var statearr_23981_24047 = state_23978__$1;(statearr_23981_24047[(2)] = null);
(statearr_23981_24047[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (1)))
{var state_23978__$1 = state_23978;var statearr_23982_24048 = state_23978__$1;(statearr_23982_24048[(2)] = null);
(statearr_23982_24048[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (4)))
{var inst_23943 = (state_23978[(7)]);var inst_23943__$1 = (state_23978[(2)]);var inst_23944 = (inst_23943__$1 == null);var state_23978__$1 = (function (){var statearr_23983 = state_23978;(statearr_23983[(7)] = inst_23943__$1);
return statearr_23983;
})();if(cljs.core.truth_(inst_23944))
{var statearr_23984_24049 = state_23978__$1;(statearr_23984_24049[(1)] = (5));
} else
{var statearr_23985_24050 = state_23978__$1;(statearr_23985_24050[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (15)))
{var inst_23956 = (state_23978[(8)]);var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23978__$1,(18),to,inst_23956);
} else
{if((state_val_23979 === (21)))
{var inst_23969 = (state_23978[(2)]);var state_23978__$1 = state_23978;var statearr_23986_24051 = state_23978__$1;(statearr_23986_24051[(2)] = inst_23969);
(statearr_23986_24051[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (13)))
{var inst_23971 = (state_23978[(2)]);var state_23978__$1 = (function (){var statearr_23987 = state_23978;(statearr_23987[(9)] = inst_23971);
return statearr_23987;
})();var statearr_23988_24052 = state_23978__$1;(statearr_23988_24052[(2)] = null);
(statearr_23988_24052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (6)))
{var inst_23943 = (state_23978[(7)]);var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(11),inst_23943);
} else
{if((state_val_23979 === (17)))
{var inst_23964 = (state_23978[(2)]);var state_23978__$1 = state_23978;if(cljs.core.truth_(inst_23964))
{var statearr_23989_24053 = state_23978__$1;(statearr_23989_24053[(1)] = (19));
} else
{var statearr_23990_24054 = state_23978__$1;(statearr_23990_24054[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (3)))
{var inst_23976 = (state_23978[(2)]);var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23978__$1,inst_23976);
} else
{if((state_val_23979 === (12)))
{var inst_23953 = (state_23978[(10)]);var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(14),inst_23953);
} else
{if((state_val_23979 === (2)))
{var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(4),results);
} else
{if((state_val_23979 === (19)))
{var state_23978__$1 = state_23978;var statearr_23991_24055 = state_23978__$1;(statearr_23991_24055[(2)] = null);
(statearr_23991_24055[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (11)))
{var inst_23953 = (state_23978[(2)]);var state_23978__$1 = (function (){var statearr_23992 = state_23978;(statearr_23992[(10)] = inst_23953);
return statearr_23992;
})();var statearr_23993_24056 = state_23978__$1;(statearr_23993_24056[(2)] = null);
(statearr_23993_24056[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (9)))
{var state_23978__$1 = state_23978;var statearr_23994_24057 = state_23978__$1;(statearr_23994_24057[(2)] = null);
(statearr_23994_24057[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (5)))
{var state_23978__$1 = state_23978;if(cljs.core.truth_(close_QMARK_))
{var statearr_23995_24058 = state_23978__$1;(statearr_23995_24058[(1)] = (8));
} else
{var statearr_23996_24059 = state_23978__$1;(statearr_23996_24059[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (14)))
{var inst_23956 = (state_23978[(8)]);var inst_23958 = (state_23978[(11)]);var inst_23956__$1 = (state_23978[(2)]);var inst_23957 = (inst_23956__$1 == null);var inst_23958__$1 = cljs.core.not.call(null,inst_23957);var state_23978__$1 = (function (){var statearr_23997 = state_23978;(statearr_23997[(8)] = inst_23956__$1);
(statearr_23997[(11)] = inst_23958__$1);
return statearr_23997;
})();if(inst_23958__$1)
{var statearr_23998_24060 = state_23978__$1;(statearr_23998_24060[(1)] = (15));
} else
{var statearr_23999_24061 = state_23978__$1;(statearr_23999_24061[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (16)))
{var inst_23958 = (state_23978[(11)]);var state_23978__$1 = state_23978;var statearr_24000_24062 = state_23978__$1;(statearr_24000_24062[(2)] = inst_23958);
(statearr_24000_24062[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (10)))
{var inst_23950 = (state_23978[(2)]);var state_23978__$1 = state_23978;var statearr_24001_24063 = state_23978__$1;(statearr_24001_24063[(2)] = inst_23950);
(statearr_24001_24063[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (18)))
{var inst_23961 = (state_23978[(2)]);var state_23978__$1 = state_23978;var statearr_24002_24064 = state_23978__$1;(statearr_24002_24064[(2)] = inst_23961);
(statearr_24002_24064[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (8)))
{var inst_23947 = cljs.core.async.close_BANG_.call(null,to);var state_23978__$1 = state_23978;var statearr_24003_24065 = state_23978__$1;(statearr_24003_24065[(2)] = inst_23947);
(statearr_24003_24065[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_24007 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24007[(0)] = state_machine__9111__auto__);
(statearr_24007[(1)] = (1));
return statearr_24007;
});
var state_machine__9111__auto____1 = (function (state_23978){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23978);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24008){if((e24008 instanceof Object))
{var ex__9114__auto__ = e24008;var statearr_24009_24066 = state_23978;(statearr_24009_24066[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24067 = state_23978;
state_23978 = G__24067;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23978){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_24010 = f__9126__auto__.call(null);(statearr_24010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24010;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24168 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24168,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24168,tc,fc){
return (function (state_24143){var state_val_24144 = (state_24143[(1)]);if((state_val_24144 === (7)))
{var inst_24139 = (state_24143[(2)]);var state_24143__$1 = state_24143;var statearr_24145_24169 = state_24143__$1;(statearr_24145_24169[(2)] = inst_24139);
(statearr_24145_24169[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (1)))
{var state_24143__$1 = state_24143;var statearr_24146_24170 = state_24143__$1;(statearr_24146_24170[(2)] = null);
(statearr_24146_24170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (4)))
{var inst_24120 = (state_24143[(7)]);var inst_24120__$1 = (state_24143[(2)]);var inst_24121 = (inst_24120__$1 == null);var state_24143__$1 = (function (){var statearr_24147 = state_24143;(statearr_24147[(7)] = inst_24120__$1);
return statearr_24147;
})();if(cljs.core.truth_(inst_24121))
{var statearr_24148_24171 = state_24143__$1;(statearr_24148_24171[(1)] = (5));
} else
{var statearr_24149_24172 = state_24143__$1;(statearr_24149_24172[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (13)))
{var state_24143__$1 = state_24143;var statearr_24150_24173 = state_24143__$1;(statearr_24150_24173[(2)] = null);
(statearr_24150_24173[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (6)))
{var inst_24120 = (state_24143[(7)]);var inst_24126 = p.call(null,inst_24120);var state_24143__$1 = state_24143;if(cljs.core.truth_(inst_24126))
{var statearr_24151_24174 = state_24143__$1;(statearr_24151_24174[(1)] = (9));
} else
{var statearr_24152_24175 = state_24143__$1;(statearr_24152_24175[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (3)))
{var inst_24141 = (state_24143[(2)]);var state_24143__$1 = state_24143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24143__$1,inst_24141);
} else
{if((state_val_24144 === (12)))
{var state_24143__$1 = state_24143;var statearr_24153_24176 = state_24143__$1;(statearr_24153_24176[(2)] = null);
(statearr_24153_24176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (2)))
{var state_24143__$1 = state_24143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24143__$1,(4),ch);
} else
{if((state_val_24144 === (11)))
{var inst_24120 = (state_24143[(7)]);var inst_24130 = (state_24143[(2)]);var state_24143__$1 = state_24143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24143__$1,(8),inst_24130,inst_24120);
} else
{if((state_val_24144 === (9)))
{var state_24143__$1 = state_24143;var statearr_24154_24177 = state_24143__$1;(statearr_24154_24177[(2)] = tc);
(statearr_24154_24177[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (5)))
{var inst_24123 = cljs.core.async.close_BANG_.call(null,tc);var inst_24124 = cljs.core.async.close_BANG_.call(null,fc);var state_24143__$1 = (function (){var statearr_24155 = state_24143;(statearr_24155[(8)] = inst_24123);
return statearr_24155;
})();var statearr_24156_24178 = state_24143__$1;(statearr_24156_24178[(2)] = inst_24124);
(statearr_24156_24178[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (14)))
{var inst_24137 = (state_24143[(2)]);var state_24143__$1 = state_24143;var statearr_24157_24179 = state_24143__$1;(statearr_24157_24179[(2)] = inst_24137);
(statearr_24157_24179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (10)))
{var state_24143__$1 = state_24143;var statearr_24158_24180 = state_24143__$1;(statearr_24158_24180[(2)] = fc);
(statearr_24158_24180[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24144 === (8)))
{var inst_24132 = (state_24143[(2)]);var state_24143__$1 = state_24143;if(cljs.core.truth_(inst_24132))
{var statearr_24159_24181 = state_24143__$1;(statearr_24159_24181[(1)] = (12));
} else
{var statearr_24160_24182 = state_24143__$1;(statearr_24160_24182[(1)] = (13));
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
});})(c__9125__auto___24168,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24168,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24164 = [null,null,null,null,null,null,null,null,null];(statearr_24164[(0)] = state_machine__9111__auto__);
(statearr_24164[(1)] = (1));
return statearr_24164;
});
var state_machine__9111__auto____1 = (function (state_24143){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24143);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24165){if((e24165 instanceof Object))
{var ex__9114__auto__ = e24165;var statearr_24166_24183 = state_24143;(statearr_24166_24183[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24165;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24184 = state_24143;
state_24143 = G__24184;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24143){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24168,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24167 = f__9126__auto__.call(null);(statearr_24167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24168);
return statearr_24167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24168,tc,fc))
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
return (function (state_24231){var state_val_24232 = (state_24231[(1)]);if((state_val_24232 === (7)))
{var inst_24227 = (state_24231[(2)]);var state_24231__$1 = state_24231;var statearr_24233_24249 = state_24231__$1;(statearr_24233_24249[(2)] = inst_24227);
(statearr_24233_24249[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (6)))
{var inst_24220 = (state_24231[(7)]);var inst_24217 = (state_24231[(8)]);var inst_24224 = f.call(null,inst_24217,inst_24220);var inst_24217__$1 = inst_24224;var state_24231__$1 = (function (){var statearr_24234 = state_24231;(statearr_24234[(8)] = inst_24217__$1);
return statearr_24234;
})();var statearr_24235_24250 = state_24231__$1;(statearr_24235_24250[(2)] = null);
(statearr_24235_24250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (5)))
{var inst_24217 = (state_24231[(8)]);var state_24231__$1 = state_24231;var statearr_24236_24251 = state_24231__$1;(statearr_24236_24251[(2)] = inst_24217);
(statearr_24236_24251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (4)))
{var inst_24220 = (state_24231[(7)]);var inst_24220__$1 = (state_24231[(2)]);var inst_24221 = (inst_24220__$1 == null);var state_24231__$1 = (function (){var statearr_24237 = state_24231;(statearr_24237[(7)] = inst_24220__$1);
return statearr_24237;
})();if(cljs.core.truth_(inst_24221))
{var statearr_24238_24252 = state_24231__$1;(statearr_24238_24252[(1)] = (5));
} else
{var statearr_24239_24253 = state_24231__$1;(statearr_24239_24253[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24232 === (3)))
{var inst_24229 = (state_24231[(2)]);var state_24231__$1 = state_24231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24231__$1,inst_24229);
} else
{if((state_val_24232 === (2)))
{var state_24231__$1 = state_24231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24231__$1,(4),ch);
} else
{if((state_val_24232 === (1)))
{var inst_24217 = init;var state_24231__$1 = (function (){var statearr_24240 = state_24231;(statearr_24240[(8)] = inst_24217);
return statearr_24240;
})();var statearr_24241_24254 = state_24231__$1;(statearr_24241_24254[(2)] = null);
(statearr_24241_24254[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24245 = [null,null,null,null,null,null,null,null,null];(statearr_24245[(0)] = state_machine__9111__auto__);
(statearr_24245[(1)] = (1));
return statearr_24245;
});
var state_machine__9111__auto____1 = (function (state_24231){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24231);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24246){if((e24246 instanceof Object))
{var ex__9114__auto__ = e24246;var statearr_24247_24255 = state_24231;(statearr_24247_24255[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24246;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24256 = state_24231;
state_24231 = G__24256;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24231){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24248 = f__9126__auto__.call(null);(statearr_24248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24248;
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
return (function (state_24330){var state_val_24331 = (state_24330[(1)]);if((state_val_24331 === (7)))
{var inst_24312 = (state_24330[(2)]);var state_24330__$1 = state_24330;var statearr_24332_24355 = state_24330__$1;(statearr_24332_24355[(2)] = inst_24312);
(statearr_24332_24355[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (1)))
{var inst_24306 = cljs.core.seq.call(null,coll);var inst_24307 = inst_24306;var state_24330__$1 = (function (){var statearr_24333 = state_24330;(statearr_24333[(7)] = inst_24307);
return statearr_24333;
})();var statearr_24334_24356 = state_24330__$1;(statearr_24334_24356[(2)] = null);
(statearr_24334_24356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (4)))
{var inst_24307 = (state_24330[(7)]);var inst_24310 = cljs.core.first.call(null,inst_24307);var state_24330__$1 = state_24330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24330__$1,(7),ch,inst_24310);
} else
{if((state_val_24331 === (13)))
{var inst_24324 = (state_24330[(2)]);var state_24330__$1 = state_24330;var statearr_24335_24357 = state_24330__$1;(statearr_24335_24357[(2)] = inst_24324);
(statearr_24335_24357[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (6)))
{var inst_24315 = (state_24330[(2)]);var state_24330__$1 = state_24330;if(cljs.core.truth_(inst_24315))
{var statearr_24336_24358 = state_24330__$1;(statearr_24336_24358[(1)] = (8));
} else
{var statearr_24337_24359 = state_24330__$1;(statearr_24337_24359[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (3)))
{var inst_24328 = (state_24330[(2)]);var state_24330__$1 = state_24330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24330__$1,inst_24328);
} else
{if((state_val_24331 === (12)))
{var state_24330__$1 = state_24330;var statearr_24338_24360 = state_24330__$1;(statearr_24338_24360[(2)] = null);
(statearr_24338_24360[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (2)))
{var inst_24307 = (state_24330[(7)]);var state_24330__$1 = state_24330;if(cljs.core.truth_(inst_24307))
{var statearr_24339_24361 = state_24330__$1;(statearr_24339_24361[(1)] = (4));
} else
{var statearr_24340_24362 = state_24330__$1;(statearr_24340_24362[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (11)))
{var inst_24321 = cljs.core.async.close_BANG_.call(null,ch);var state_24330__$1 = state_24330;var statearr_24341_24363 = state_24330__$1;(statearr_24341_24363[(2)] = inst_24321);
(statearr_24341_24363[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (9)))
{var state_24330__$1 = state_24330;if(cljs.core.truth_(close_QMARK_))
{var statearr_24342_24364 = state_24330__$1;(statearr_24342_24364[(1)] = (11));
} else
{var statearr_24343_24365 = state_24330__$1;(statearr_24343_24365[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (5)))
{var inst_24307 = (state_24330[(7)]);var state_24330__$1 = state_24330;var statearr_24344_24366 = state_24330__$1;(statearr_24344_24366[(2)] = inst_24307);
(statearr_24344_24366[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (10)))
{var inst_24326 = (state_24330[(2)]);var state_24330__$1 = state_24330;var statearr_24345_24367 = state_24330__$1;(statearr_24345_24367[(2)] = inst_24326);
(statearr_24345_24367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24331 === (8)))
{var inst_24307 = (state_24330[(7)]);var inst_24317 = cljs.core.next.call(null,inst_24307);var inst_24307__$1 = inst_24317;var state_24330__$1 = (function (){var statearr_24346 = state_24330;(statearr_24346[(7)] = inst_24307__$1);
return statearr_24346;
})();var statearr_24347_24368 = state_24330__$1;(statearr_24347_24368[(2)] = null);
(statearr_24347_24368[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24351 = [null,null,null,null,null,null,null,null];(statearr_24351[(0)] = state_machine__9111__auto__);
(statearr_24351[(1)] = (1));
return statearr_24351;
});
var state_machine__9111__auto____1 = (function (state_24330){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24330);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24352){if((e24352 instanceof Object))
{var ex__9114__auto__ = e24352;var statearr_24353_24369 = state_24330;(statearr_24353_24369[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24352;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24370 = state_24330;
state_24330 = G__24370;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24330){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24354 = f__9126__auto__.call(null);(statearr_24354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24354;
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
cljs.core.async.Mux = (function (){var obj24372 = {};return obj24372;
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
cljs.core.async.Mult = (function (){var obj24374 = {};return obj24374;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24596 = (function (cs,ch,mult,meta24597){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24597 = meta24597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24596.cljs$lang$type = true;
cljs.core.async.t24596.cljs$lang$ctorStr = "cljs.core.async/t24596";
cljs.core.async.t24596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24596");
});})(cs))
;
cljs.core.async.t24596.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24598){var self__ = this;
var _24598__$1 = this;return self__.meta24597;
});})(cs))
;
cljs.core.async.t24596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24598,meta24597__$1){var self__ = this;
var _24598__$1 = this;return (new cljs.core.async.t24596(self__.cs,self__.ch,self__.mult,meta24597__$1));
});})(cs))
;
cljs.core.async.__GT_t24596 = ((function (cs){
return (function __GT_t24596(cs__$1,ch__$1,mult__$1,meta24597){return (new cljs.core.async.t24596(cs__$1,ch__$1,mult__$1,meta24597));
});})(cs))
;
}
return (new cljs.core.async.t24596(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24817 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24817,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24817,cs,m,dchan,dctr,done){
return (function (state_24729){var state_val_24730 = (state_24729[(1)]);if((state_val_24730 === (7)))
{var inst_24725 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24731_24818 = state_24729__$1;(statearr_24731_24818[(2)] = inst_24725);
(statearr_24731_24818[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (20)))
{var inst_24630 = (state_24729[(7)]);var inst_24640 = cljs.core.first.call(null,inst_24630);var inst_24641 = cljs.core.nth.call(null,inst_24640,(0),null);var inst_24642 = cljs.core.nth.call(null,inst_24640,(1),null);var state_24729__$1 = (function (){var statearr_24732 = state_24729;(statearr_24732[(8)] = inst_24641);
return statearr_24732;
})();if(cljs.core.truth_(inst_24642))
{var statearr_24733_24819 = state_24729__$1;(statearr_24733_24819[(1)] = (22));
} else
{var statearr_24734_24820 = state_24729__$1;(statearr_24734_24820[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (27)))
{var inst_24672 = (state_24729[(9)]);var inst_24677 = (state_24729[(10)]);var inst_24601 = (state_24729[(11)]);var inst_24670 = (state_24729[(12)]);var inst_24677__$1 = cljs.core._nth.call(null,inst_24670,inst_24672);var inst_24678 = cljs.core.async.put_BANG_.call(null,inst_24677__$1,inst_24601,done);var state_24729__$1 = (function (){var statearr_24735 = state_24729;(statearr_24735[(10)] = inst_24677__$1);
return statearr_24735;
})();if(cljs.core.truth_(inst_24678))
{var statearr_24736_24821 = state_24729__$1;(statearr_24736_24821[(1)] = (30));
} else
{var statearr_24737_24822 = state_24729__$1;(statearr_24737_24822[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (1)))
{var state_24729__$1 = state_24729;var statearr_24738_24823 = state_24729__$1;(statearr_24738_24823[(2)] = null);
(statearr_24738_24823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (24)))
{var inst_24630 = (state_24729[(7)]);var inst_24647 = (state_24729[(2)]);var inst_24648 = cljs.core.next.call(null,inst_24630);var inst_24610 = inst_24648;var inst_24611 = null;var inst_24612 = (0);var inst_24613 = (0);var state_24729__$1 = (function (){var statearr_24739 = state_24729;(statearr_24739[(13)] = inst_24613);
(statearr_24739[(14)] = inst_24647);
(statearr_24739[(15)] = inst_24612);
(statearr_24739[(16)] = inst_24611);
(statearr_24739[(17)] = inst_24610);
return statearr_24739;
})();var statearr_24740_24824 = state_24729__$1;(statearr_24740_24824[(2)] = null);
(statearr_24740_24824[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (39)))
{var state_24729__$1 = state_24729;var statearr_24744_24825 = state_24729__$1;(statearr_24744_24825[(2)] = null);
(statearr_24744_24825[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (4)))
{var inst_24601 = (state_24729[(11)]);var inst_24601__$1 = (state_24729[(2)]);var inst_24602 = (inst_24601__$1 == null);var state_24729__$1 = (function (){var statearr_24745 = state_24729;(statearr_24745[(11)] = inst_24601__$1);
return statearr_24745;
})();if(cljs.core.truth_(inst_24602))
{var statearr_24746_24826 = state_24729__$1;(statearr_24746_24826[(1)] = (5));
} else
{var statearr_24747_24827 = state_24729__$1;(statearr_24747_24827[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (15)))
{var inst_24613 = (state_24729[(13)]);var inst_24612 = (state_24729[(15)]);var inst_24611 = (state_24729[(16)]);var inst_24610 = (state_24729[(17)]);var inst_24626 = (state_24729[(2)]);var inst_24627 = (inst_24613 + (1));var tmp24741 = inst_24612;var tmp24742 = inst_24611;var tmp24743 = inst_24610;var inst_24610__$1 = tmp24743;var inst_24611__$1 = tmp24742;var inst_24612__$1 = tmp24741;var inst_24613__$1 = inst_24627;var state_24729__$1 = (function (){var statearr_24748 = state_24729;(statearr_24748[(13)] = inst_24613__$1);
(statearr_24748[(15)] = inst_24612__$1);
(statearr_24748[(16)] = inst_24611__$1);
(statearr_24748[(18)] = inst_24626);
(statearr_24748[(17)] = inst_24610__$1);
return statearr_24748;
})();var statearr_24749_24828 = state_24729__$1;(statearr_24749_24828[(2)] = null);
(statearr_24749_24828[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (21)))
{var inst_24651 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24753_24829 = state_24729__$1;(statearr_24753_24829[(2)] = inst_24651);
(statearr_24753_24829[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (31)))
{var inst_24677 = (state_24729[(10)]);var inst_24681 = done.call(null,null);var inst_24682 = cljs.core.async.untap_STAR_.call(null,m,inst_24677);var state_24729__$1 = (function (){var statearr_24754 = state_24729;(statearr_24754[(19)] = inst_24681);
return statearr_24754;
})();var statearr_24755_24830 = state_24729__$1;(statearr_24755_24830[(2)] = inst_24682);
(statearr_24755_24830[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (32)))
{var inst_24672 = (state_24729[(9)]);var inst_24671 = (state_24729[(20)]);var inst_24670 = (state_24729[(12)]);var inst_24669 = (state_24729[(21)]);var inst_24684 = (state_24729[(2)]);var inst_24685 = (inst_24672 + (1));var tmp24750 = inst_24671;var tmp24751 = inst_24670;var tmp24752 = inst_24669;var inst_24669__$1 = tmp24752;var inst_24670__$1 = tmp24751;var inst_24671__$1 = tmp24750;var inst_24672__$1 = inst_24685;var state_24729__$1 = (function (){var statearr_24756 = state_24729;(statearr_24756[(9)] = inst_24672__$1);
(statearr_24756[(20)] = inst_24671__$1);
(statearr_24756[(12)] = inst_24670__$1);
(statearr_24756[(22)] = inst_24684);
(statearr_24756[(21)] = inst_24669__$1);
return statearr_24756;
})();var statearr_24757_24831 = state_24729__$1;(statearr_24757_24831[(2)] = null);
(statearr_24757_24831[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (40)))
{var inst_24697 = (state_24729[(23)]);var inst_24701 = done.call(null,null);var inst_24702 = cljs.core.async.untap_STAR_.call(null,m,inst_24697);var state_24729__$1 = (function (){var statearr_24758 = state_24729;(statearr_24758[(24)] = inst_24701);
return statearr_24758;
})();var statearr_24759_24832 = state_24729__$1;(statearr_24759_24832[(2)] = inst_24702);
(statearr_24759_24832[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (33)))
{var inst_24688 = (state_24729[(25)]);var inst_24690 = cljs.core.chunked_seq_QMARK_.call(null,inst_24688);var state_24729__$1 = state_24729;if(inst_24690)
{var statearr_24760_24833 = state_24729__$1;(statearr_24760_24833[(1)] = (36));
} else
{var statearr_24761_24834 = state_24729__$1;(statearr_24761_24834[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (13)))
{var inst_24620 = (state_24729[(26)]);var inst_24623 = cljs.core.async.close_BANG_.call(null,inst_24620);var state_24729__$1 = state_24729;var statearr_24762_24835 = state_24729__$1;(statearr_24762_24835[(2)] = inst_24623);
(statearr_24762_24835[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (22)))
{var inst_24641 = (state_24729[(8)]);var inst_24644 = cljs.core.async.close_BANG_.call(null,inst_24641);var state_24729__$1 = state_24729;var statearr_24763_24836 = state_24729__$1;(statearr_24763_24836[(2)] = inst_24644);
(statearr_24763_24836[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (36)))
{var inst_24688 = (state_24729[(25)]);var inst_24692 = cljs.core.chunk_first.call(null,inst_24688);var inst_24693 = cljs.core.chunk_rest.call(null,inst_24688);var inst_24694 = cljs.core.count.call(null,inst_24692);var inst_24669 = inst_24693;var inst_24670 = inst_24692;var inst_24671 = inst_24694;var inst_24672 = (0);var state_24729__$1 = (function (){var statearr_24764 = state_24729;(statearr_24764[(9)] = inst_24672);
(statearr_24764[(20)] = inst_24671);
(statearr_24764[(12)] = inst_24670);
(statearr_24764[(21)] = inst_24669);
return statearr_24764;
})();var statearr_24765_24837 = state_24729__$1;(statearr_24765_24837[(2)] = null);
(statearr_24765_24837[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (41)))
{var inst_24688 = (state_24729[(25)]);var inst_24704 = (state_24729[(2)]);var inst_24705 = cljs.core.next.call(null,inst_24688);var inst_24669 = inst_24705;var inst_24670 = null;var inst_24671 = (0);var inst_24672 = (0);var state_24729__$1 = (function (){var statearr_24766 = state_24729;(statearr_24766[(27)] = inst_24704);
(statearr_24766[(9)] = inst_24672);
(statearr_24766[(20)] = inst_24671);
(statearr_24766[(12)] = inst_24670);
(statearr_24766[(21)] = inst_24669);
return statearr_24766;
})();var statearr_24767_24838 = state_24729__$1;(statearr_24767_24838[(2)] = null);
(statearr_24767_24838[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (43)))
{var state_24729__$1 = state_24729;var statearr_24768_24839 = state_24729__$1;(statearr_24768_24839[(2)] = null);
(statearr_24768_24839[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (29)))
{var inst_24713 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24769_24840 = state_24729__$1;(statearr_24769_24840[(2)] = inst_24713);
(statearr_24769_24840[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (44)))
{var inst_24722 = (state_24729[(2)]);var state_24729__$1 = (function (){var statearr_24770 = state_24729;(statearr_24770[(28)] = inst_24722);
return statearr_24770;
})();var statearr_24771_24841 = state_24729__$1;(statearr_24771_24841[(2)] = null);
(statearr_24771_24841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (6)))
{var inst_24661 = (state_24729[(29)]);var inst_24660 = cljs.core.deref.call(null,cs);var inst_24661__$1 = cljs.core.keys.call(null,inst_24660);var inst_24662 = cljs.core.count.call(null,inst_24661__$1);var inst_24663 = cljs.core.reset_BANG_.call(null,dctr,inst_24662);var inst_24668 = cljs.core.seq.call(null,inst_24661__$1);var inst_24669 = inst_24668;var inst_24670 = null;var inst_24671 = (0);var inst_24672 = (0);var state_24729__$1 = (function (){var statearr_24772 = state_24729;(statearr_24772[(30)] = inst_24663);
(statearr_24772[(9)] = inst_24672);
(statearr_24772[(20)] = inst_24671);
(statearr_24772[(12)] = inst_24670);
(statearr_24772[(21)] = inst_24669);
(statearr_24772[(29)] = inst_24661__$1);
return statearr_24772;
})();var statearr_24773_24842 = state_24729__$1;(statearr_24773_24842[(2)] = null);
(statearr_24773_24842[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (28)))
{var inst_24688 = (state_24729[(25)]);var inst_24669 = (state_24729[(21)]);var inst_24688__$1 = cljs.core.seq.call(null,inst_24669);var state_24729__$1 = (function (){var statearr_24774 = state_24729;(statearr_24774[(25)] = inst_24688__$1);
return statearr_24774;
})();if(inst_24688__$1)
{var statearr_24775_24843 = state_24729__$1;(statearr_24775_24843[(1)] = (33));
} else
{var statearr_24776_24844 = state_24729__$1;(statearr_24776_24844[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (25)))
{var inst_24672 = (state_24729[(9)]);var inst_24671 = (state_24729[(20)]);var inst_24674 = (inst_24672 < inst_24671);var inst_24675 = inst_24674;var state_24729__$1 = state_24729;if(cljs.core.truth_(inst_24675))
{var statearr_24777_24845 = state_24729__$1;(statearr_24777_24845[(1)] = (27));
} else
{var statearr_24778_24846 = state_24729__$1;(statearr_24778_24846[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (34)))
{var state_24729__$1 = state_24729;var statearr_24779_24847 = state_24729__$1;(statearr_24779_24847[(2)] = null);
(statearr_24779_24847[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (17)))
{var state_24729__$1 = state_24729;var statearr_24780_24848 = state_24729__$1;(statearr_24780_24848[(2)] = null);
(statearr_24780_24848[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (3)))
{var inst_24727 = (state_24729[(2)]);var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24729__$1,inst_24727);
} else
{if((state_val_24730 === (12)))
{var inst_24656 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24781_24849 = state_24729__$1;(statearr_24781_24849[(2)] = inst_24656);
(statearr_24781_24849[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (2)))
{var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(4),ch);
} else
{if((state_val_24730 === (23)))
{var state_24729__$1 = state_24729;var statearr_24782_24850 = state_24729__$1;(statearr_24782_24850[(2)] = null);
(statearr_24782_24850[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (35)))
{var inst_24711 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24783_24851 = state_24729__$1;(statearr_24783_24851[(2)] = inst_24711);
(statearr_24783_24851[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (19)))
{var inst_24630 = (state_24729[(7)]);var inst_24634 = cljs.core.chunk_first.call(null,inst_24630);var inst_24635 = cljs.core.chunk_rest.call(null,inst_24630);var inst_24636 = cljs.core.count.call(null,inst_24634);var inst_24610 = inst_24635;var inst_24611 = inst_24634;var inst_24612 = inst_24636;var inst_24613 = (0);var state_24729__$1 = (function (){var statearr_24784 = state_24729;(statearr_24784[(13)] = inst_24613);
(statearr_24784[(15)] = inst_24612);
(statearr_24784[(16)] = inst_24611);
(statearr_24784[(17)] = inst_24610);
return statearr_24784;
})();var statearr_24785_24852 = state_24729__$1;(statearr_24785_24852[(2)] = null);
(statearr_24785_24852[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (11)))
{var inst_24630 = (state_24729[(7)]);var inst_24610 = (state_24729[(17)]);var inst_24630__$1 = cljs.core.seq.call(null,inst_24610);var state_24729__$1 = (function (){var statearr_24786 = state_24729;(statearr_24786[(7)] = inst_24630__$1);
return statearr_24786;
})();if(inst_24630__$1)
{var statearr_24787_24853 = state_24729__$1;(statearr_24787_24853[(1)] = (16));
} else
{var statearr_24788_24854 = state_24729__$1;(statearr_24788_24854[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (9)))
{var inst_24658 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24789_24855 = state_24729__$1;(statearr_24789_24855[(2)] = inst_24658);
(statearr_24789_24855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (5)))
{var inst_24608 = cljs.core.deref.call(null,cs);var inst_24609 = cljs.core.seq.call(null,inst_24608);var inst_24610 = inst_24609;var inst_24611 = null;var inst_24612 = (0);var inst_24613 = (0);var state_24729__$1 = (function (){var statearr_24790 = state_24729;(statearr_24790[(13)] = inst_24613);
(statearr_24790[(15)] = inst_24612);
(statearr_24790[(16)] = inst_24611);
(statearr_24790[(17)] = inst_24610);
return statearr_24790;
})();var statearr_24791_24856 = state_24729__$1;(statearr_24791_24856[(2)] = null);
(statearr_24791_24856[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (14)))
{var state_24729__$1 = state_24729;var statearr_24792_24857 = state_24729__$1;(statearr_24792_24857[(2)] = null);
(statearr_24792_24857[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (45)))
{var inst_24719 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24793_24858 = state_24729__$1;(statearr_24793_24858[(2)] = inst_24719);
(statearr_24793_24858[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (26)))
{var inst_24661 = (state_24729[(29)]);var inst_24715 = (state_24729[(2)]);var inst_24716 = cljs.core.seq.call(null,inst_24661);var state_24729__$1 = (function (){var statearr_24794 = state_24729;(statearr_24794[(31)] = inst_24715);
return statearr_24794;
})();if(inst_24716)
{var statearr_24795_24859 = state_24729__$1;(statearr_24795_24859[(1)] = (42));
} else
{var statearr_24796_24860 = state_24729__$1;(statearr_24796_24860[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (16)))
{var inst_24630 = (state_24729[(7)]);var inst_24632 = cljs.core.chunked_seq_QMARK_.call(null,inst_24630);var state_24729__$1 = state_24729;if(inst_24632)
{var statearr_24797_24861 = state_24729__$1;(statearr_24797_24861[(1)] = (19));
} else
{var statearr_24798_24862 = state_24729__$1;(statearr_24798_24862[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (38)))
{var inst_24708 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24799_24863 = state_24729__$1;(statearr_24799_24863[(2)] = inst_24708);
(statearr_24799_24863[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (30)))
{var state_24729__$1 = state_24729;var statearr_24800_24864 = state_24729__$1;(statearr_24800_24864[(2)] = null);
(statearr_24800_24864[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (10)))
{var inst_24613 = (state_24729[(13)]);var inst_24611 = (state_24729[(16)]);var inst_24619 = cljs.core._nth.call(null,inst_24611,inst_24613);var inst_24620 = cljs.core.nth.call(null,inst_24619,(0),null);var inst_24621 = cljs.core.nth.call(null,inst_24619,(1),null);var state_24729__$1 = (function (){var statearr_24801 = state_24729;(statearr_24801[(26)] = inst_24620);
return statearr_24801;
})();if(cljs.core.truth_(inst_24621))
{var statearr_24802_24865 = state_24729__$1;(statearr_24802_24865[(1)] = (13));
} else
{var statearr_24803_24866 = state_24729__$1;(statearr_24803_24866[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (18)))
{var inst_24654 = (state_24729[(2)]);var state_24729__$1 = state_24729;var statearr_24804_24867 = state_24729__$1;(statearr_24804_24867[(2)] = inst_24654);
(statearr_24804_24867[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (42)))
{var state_24729__$1 = state_24729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24729__$1,(45),dchan);
} else
{if((state_val_24730 === (37)))
{var inst_24601 = (state_24729[(11)]);var inst_24688 = (state_24729[(25)]);var inst_24697 = (state_24729[(23)]);var inst_24697__$1 = cljs.core.first.call(null,inst_24688);var inst_24698 = cljs.core.async.put_BANG_.call(null,inst_24697__$1,inst_24601,done);var state_24729__$1 = (function (){var statearr_24805 = state_24729;(statearr_24805[(23)] = inst_24697__$1);
return statearr_24805;
})();if(cljs.core.truth_(inst_24698))
{var statearr_24806_24868 = state_24729__$1;(statearr_24806_24868[(1)] = (39));
} else
{var statearr_24807_24869 = state_24729__$1;(statearr_24807_24869[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24730 === (8)))
{var inst_24613 = (state_24729[(13)]);var inst_24612 = (state_24729[(15)]);var inst_24615 = (inst_24613 < inst_24612);var inst_24616 = inst_24615;var state_24729__$1 = state_24729;if(cljs.core.truth_(inst_24616))
{var statearr_24808_24870 = state_24729__$1;(statearr_24808_24870[(1)] = (10));
} else
{var statearr_24809_24871 = state_24729__$1;(statearr_24809_24871[(1)] = (11));
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
});})(c__9125__auto___24817,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24817,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24813[(0)] = state_machine__9111__auto__);
(statearr_24813[(1)] = (1));
return statearr_24813;
});
var state_machine__9111__auto____1 = (function (state_24729){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24729);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24814){if((e24814 instanceof Object))
{var ex__9114__auto__ = e24814;var statearr_24815_24872 = state_24729;(statearr_24815_24872[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24814;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24873 = state_24729;
state_24729 = G__24873;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24729){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24817,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24816 = f__9126__auto__.call(null);(statearr_24816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24817);
return statearr_24816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24817,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24875 = {};return obj24875;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24876){var map__24881 = p__24876;var map__24881__$1 = ((cljs.core.seq_QMARK_.call(null,map__24881))?cljs.core.apply.call(null,cljs.core.hash_map,map__24881):map__24881);var opts = map__24881__$1;var statearr_24882_24885 = state;(statearr_24882_24885[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24881,map__24881__$1,opts){
return (function (val){var statearr_24883_24886 = state;(statearr_24883_24886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24881,map__24881__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24884_24887 = state;(statearr_24884_24887[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24876 = null;if (arguments.length > 3) {
  p__24876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24876);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24888){
var state = cljs.core.first(arglist__24888);
arglist__24888 = cljs.core.next(arglist__24888);
var cont_block = cljs.core.first(arglist__24888);
arglist__24888 = cljs.core.next(arglist__24888);
var ports = cljs.core.first(arglist__24888);
var p__24876 = cljs.core.rest(arglist__24888);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24876);
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
;var m = (function (){if(typeof cljs.core.async.t25008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25008 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25009){
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
this.meta25009 = meta25009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25008.cljs$lang$type = true;
cljs.core.async.t25008.cljs$lang$ctorStr = "cljs.core.async/t25008";
cljs.core.async.t25008.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25008");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25008.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25010){var self__ = this;
var _25010__$1 = this;return self__.meta25009;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25010,meta25009__$1){var self__ = this;
var _25010__$1 = this;return (new cljs.core.async.t25008(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25009__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25008 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25008(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25009){return (new cljs.core.async.t25008(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25009));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25008(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25127 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25127,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25127,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25080){var state_val_25081 = (state_25080[(1)]);if((state_val_25081 === (7)))
{var inst_25024 = (state_25080[(7)]);var inst_25029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25024);var state_25080__$1 = state_25080;var statearr_25082_25128 = state_25080__$1;(statearr_25082_25128[(2)] = inst_25029);
(statearr_25082_25128[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (20)))
{var inst_25039 = (state_25080[(8)]);var state_25080__$1 = state_25080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25080__$1,(23),out,inst_25039);
} else
{if((state_val_25081 === (1)))
{var inst_25014 = (state_25080[(9)]);var inst_25014__$1 = calc_state.call(null);var inst_25015 = cljs.core.seq_QMARK_.call(null,inst_25014__$1);var state_25080__$1 = (function (){var statearr_25083 = state_25080;(statearr_25083[(9)] = inst_25014__$1);
return statearr_25083;
})();if(inst_25015)
{var statearr_25084_25129 = state_25080__$1;(statearr_25084_25129[(1)] = (2));
} else
{var statearr_25085_25130 = state_25080__$1;(statearr_25085_25130[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (24)))
{var inst_25032 = (state_25080[(10)]);var inst_25024 = inst_25032;var state_25080__$1 = (function (){var statearr_25086 = state_25080;(statearr_25086[(7)] = inst_25024);
return statearr_25086;
})();var statearr_25087_25131 = state_25080__$1;(statearr_25087_25131[(2)] = null);
(statearr_25087_25131[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (4)))
{var inst_25014 = (state_25080[(9)]);var inst_25020 = (state_25080[(2)]);var inst_25021 = cljs.core.get.call(null,inst_25020,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25022 = cljs.core.get.call(null,inst_25020,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25023 = cljs.core.get.call(null,inst_25020,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25024 = inst_25014;var state_25080__$1 = (function (){var statearr_25088 = state_25080;(statearr_25088[(11)] = inst_25022);
(statearr_25088[(7)] = inst_25024);
(statearr_25088[(12)] = inst_25023);
(statearr_25088[(13)] = inst_25021);
return statearr_25088;
})();var statearr_25089_25132 = state_25080__$1;(statearr_25089_25132[(2)] = null);
(statearr_25089_25132[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (15)))
{var state_25080__$1 = state_25080;var statearr_25090_25133 = state_25080__$1;(statearr_25090_25133[(2)] = null);
(statearr_25090_25133[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (21)))
{var inst_25032 = (state_25080[(10)]);var inst_25024 = inst_25032;var state_25080__$1 = (function (){var statearr_25091 = state_25080;(statearr_25091[(7)] = inst_25024);
return statearr_25091;
})();var statearr_25092_25134 = state_25080__$1;(statearr_25092_25134[(2)] = null);
(statearr_25092_25134[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (13)))
{var inst_25076 = (state_25080[(2)]);var state_25080__$1 = state_25080;var statearr_25093_25135 = state_25080__$1;(statearr_25093_25135[(2)] = inst_25076);
(statearr_25093_25135[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (22)))
{var inst_25074 = (state_25080[(2)]);var state_25080__$1 = state_25080;var statearr_25094_25136 = state_25080__$1;(statearr_25094_25136[(2)] = inst_25074);
(statearr_25094_25136[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (6)))
{var inst_25078 = (state_25080[(2)]);var state_25080__$1 = state_25080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25080__$1,inst_25078);
} else
{if((state_val_25081 === (25)))
{var state_25080__$1 = state_25080;var statearr_25095_25137 = state_25080__$1;(statearr_25095_25137[(2)] = null);
(statearr_25095_25137[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (17)))
{var inst_25054 = (state_25080[(14)]);var state_25080__$1 = state_25080;var statearr_25096_25138 = state_25080__$1;(statearr_25096_25138[(2)] = inst_25054);
(statearr_25096_25138[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (3)))
{var inst_25014 = (state_25080[(9)]);var state_25080__$1 = state_25080;var statearr_25097_25139 = state_25080__$1;(statearr_25097_25139[(2)] = inst_25014);
(statearr_25097_25139[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (12)))
{var inst_25054 = (state_25080[(14)]);var inst_25040 = (state_25080[(15)]);var inst_25035 = (state_25080[(16)]);var inst_25054__$1 = inst_25035.call(null,inst_25040);var state_25080__$1 = (function (){var statearr_25098 = state_25080;(statearr_25098[(14)] = inst_25054__$1);
return statearr_25098;
})();if(cljs.core.truth_(inst_25054__$1))
{var statearr_25099_25140 = state_25080__$1;(statearr_25099_25140[(1)] = (17));
} else
{var statearr_25100_25141 = state_25080__$1;(statearr_25100_25141[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (2)))
{var inst_25014 = (state_25080[(9)]);var inst_25017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25014);var state_25080__$1 = state_25080;var statearr_25101_25142 = state_25080__$1;(statearr_25101_25142[(2)] = inst_25017);
(statearr_25101_25142[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (23)))
{var inst_25065 = (state_25080[(2)]);var state_25080__$1 = state_25080;if(cljs.core.truth_(inst_25065))
{var statearr_25102_25143 = state_25080__$1;(statearr_25102_25143[(1)] = (24));
} else
{var statearr_25103_25144 = state_25080__$1;(statearr_25103_25144[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (19)))
{var inst_25062 = (state_25080[(2)]);var state_25080__$1 = state_25080;if(cljs.core.truth_(inst_25062))
{var statearr_25104_25145 = state_25080__$1;(statearr_25104_25145[(1)] = (20));
} else
{var statearr_25105_25146 = state_25080__$1;(statearr_25105_25146[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (11)))
{var inst_25039 = (state_25080[(8)]);var inst_25045 = (inst_25039 == null);var state_25080__$1 = state_25080;if(cljs.core.truth_(inst_25045))
{var statearr_25106_25147 = state_25080__$1;(statearr_25106_25147[(1)] = (14));
} else
{var statearr_25107_25148 = state_25080__$1;(statearr_25107_25148[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (9)))
{var inst_25032 = (state_25080[(10)]);var inst_25032__$1 = (state_25080[(2)]);var inst_25033 = cljs.core.get.call(null,inst_25032__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25034 = cljs.core.get.call(null,inst_25032__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25035 = cljs.core.get.call(null,inst_25032__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25080__$1 = (function (){var statearr_25108 = state_25080;(statearr_25108[(16)] = inst_25035);
(statearr_25108[(17)] = inst_25034);
(statearr_25108[(10)] = inst_25032__$1);
return statearr_25108;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25080__$1,(10),inst_25033);
} else
{if((state_val_25081 === (5)))
{var inst_25024 = (state_25080[(7)]);var inst_25027 = cljs.core.seq_QMARK_.call(null,inst_25024);var state_25080__$1 = state_25080;if(inst_25027)
{var statearr_25109_25149 = state_25080__$1;(statearr_25109_25149[(1)] = (7));
} else
{var statearr_25110_25150 = state_25080__$1;(statearr_25110_25150[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (14)))
{var inst_25040 = (state_25080[(15)]);var inst_25047 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25040);var state_25080__$1 = state_25080;var statearr_25111_25151 = state_25080__$1;(statearr_25111_25151[(2)] = inst_25047);
(statearr_25111_25151[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (26)))
{var inst_25070 = (state_25080[(2)]);var state_25080__$1 = state_25080;var statearr_25112_25152 = state_25080__$1;(statearr_25112_25152[(2)] = inst_25070);
(statearr_25112_25152[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (16)))
{var inst_25050 = (state_25080[(2)]);var inst_25051 = calc_state.call(null);var inst_25024 = inst_25051;var state_25080__$1 = (function (){var statearr_25113 = state_25080;(statearr_25113[(7)] = inst_25024);
(statearr_25113[(18)] = inst_25050);
return statearr_25113;
})();var statearr_25114_25153 = state_25080__$1;(statearr_25114_25153[(2)] = null);
(statearr_25114_25153[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (10)))
{var inst_25040 = (state_25080[(15)]);var inst_25039 = (state_25080[(8)]);var inst_25038 = (state_25080[(2)]);var inst_25039__$1 = cljs.core.nth.call(null,inst_25038,(0),null);var inst_25040__$1 = cljs.core.nth.call(null,inst_25038,(1),null);var inst_25041 = (inst_25039__$1 == null);var inst_25042 = cljs.core._EQ_.call(null,inst_25040__$1,change);var inst_25043 = (inst_25041) || (inst_25042);var state_25080__$1 = (function (){var statearr_25115 = state_25080;(statearr_25115[(15)] = inst_25040__$1);
(statearr_25115[(8)] = inst_25039__$1);
return statearr_25115;
})();if(cljs.core.truth_(inst_25043))
{var statearr_25116_25154 = state_25080__$1;(statearr_25116_25154[(1)] = (11));
} else
{var statearr_25117_25155 = state_25080__$1;(statearr_25117_25155[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (18)))
{var inst_25040 = (state_25080[(15)]);var inst_25035 = (state_25080[(16)]);var inst_25034 = (state_25080[(17)]);var inst_25057 = cljs.core.empty_QMARK_.call(null,inst_25035);var inst_25058 = inst_25034.call(null,inst_25040);var inst_25059 = cljs.core.not.call(null,inst_25058);var inst_25060 = (inst_25057) && (inst_25059);var state_25080__$1 = state_25080;var statearr_25118_25156 = state_25080__$1;(statearr_25118_25156[(2)] = inst_25060);
(statearr_25118_25156[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25081 === (8)))
{var inst_25024 = (state_25080[(7)]);var state_25080__$1 = state_25080;var statearr_25119_25157 = state_25080__$1;(statearr_25119_25157[(2)] = inst_25024);
(statearr_25119_25157[(1)] = (9));
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
});})(c__9125__auto___25127,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25127,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25123[(0)] = state_machine__9111__auto__);
(statearr_25123[(1)] = (1));
return statearr_25123;
});
var state_machine__9111__auto____1 = (function (state_25080){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25080);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25124){if((e25124 instanceof Object))
{var ex__9114__auto__ = e25124;var statearr_25125_25158 = state_25080;(statearr_25125_25158[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25080);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25124;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25159 = state_25080;
state_25080 = G__25159;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25080){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25127,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25126 = f__9126__auto__.call(null);(statearr_25126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25127);
return statearr_25126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25127,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25161 = {};return obj25161;
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
return (function (p1__25162_SHARP_){if(cljs.core.truth_(p1__25162_SHARP_.call(null,topic)))
{return p1__25162_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25162_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25285 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25286){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25286 = meta25286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25285.cljs$lang$type = true;
cljs.core.async.t25285.cljs$lang$ctorStr = "cljs.core.async/t25285";
cljs.core.async.t25285.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25285");
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25285.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25287){var self__ = this;
var _25287__$1 = this;return self__.meta25286;
});})(mults,ensure_mult))
;
cljs.core.async.t25285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25287,meta25286__$1){var self__ = this;
var _25287__$1 = this;return (new cljs.core.async.t25285(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25286__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25285 = ((function (mults,ensure_mult){
return (function __GT_t25285(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25286){return (new cljs.core.async.t25285(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25286));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25285(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25407,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25407,mults,ensure_mult,p){
return (function (state_25359){var state_val_25360 = (state_25359[(1)]);if((state_val_25360 === (7)))
{var inst_25355 = (state_25359[(2)]);var state_25359__$1 = state_25359;var statearr_25361_25408 = state_25359__$1;(statearr_25361_25408[(2)] = inst_25355);
(statearr_25361_25408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (20)))
{var state_25359__$1 = state_25359;var statearr_25362_25409 = state_25359__$1;(statearr_25362_25409[(2)] = null);
(statearr_25362_25409[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (1)))
{var state_25359__$1 = state_25359;var statearr_25363_25410 = state_25359__$1;(statearr_25363_25410[(2)] = null);
(statearr_25363_25410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (24)))
{var inst_25338 = (state_25359[(7)]);var inst_25347 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25338);var state_25359__$1 = state_25359;var statearr_25364_25411 = state_25359__$1;(statearr_25364_25411[(2)] = inst_25347);
(statearr_25364_25411[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (4)))
{var inst_25290 = (state_25359[(8)]);var inst_25290__$1 = (state_25359[(2)]);var inst_25291 = (inst_25290__$1 == null);var state_25359__$1 = (function (){var statearr_25365 = state_25359;(statearr_25365[(8)] = inst_25290__$1);
return statearr_25365;
})();if(cljs.core.truth_(inst_25291))
{var statearr_25366_25412 = state_25359__$1;(statearr_25366_25412[(1)] = (5));
} else
{var statearr_25367_25413 = state_25359__$1;(statearr_25367_25413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (15)))
{var inst_25332 = (state_25359[(2)]);var state_25359__$1 = state_25359;var statearr_25368_25414 = state_25359__$1;(statearr_25368_25414[(2)] = inst_25332);
(statearr_25368_25414[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (21)))
{var inst_25352 = (state_25359[(2)]);var state_25359__$1 = (function (){var statearr_25369 = state_25359;(statearr_25369[(9)] = inst_25352);
return statearr_25369;
})();var statearr_25370_25415 = state_25359__$1;(statearr_25370_25415[(2)] = null);
(statearr_25370_25415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (13)))
{var inst_25314 = (state_25359[(10)]);var inst_25316 = cljs.core.chunked_seq_QMARK_.call(null,inst_25314);var state_25359__$1 = state_25359;if(inst_25316)
{var statearr_25371_25416 = state_25359__$1;(statearr_25371_25416[(1)] = (16));
} else
{var statearr_25372_25417 = state_25359__$1;(statearr_25372_25417[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (22)))
{var inst_25344 = (state_25359[(2)]);var state_25359__$1 = state_25359;if(cljs.core.truth_(inst_25344))
{var statearr_25373_25418 = state_25359__$1;(statearr_25373_25418[(1)] = (23));
} else
{var statearr_25374_25419 = state_25359__$1;(statearr_25374_25419[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (6)))
{var inst_25338 = (state_25359[(7)]);var inst_25290 = (state_25359[(8)]);var inst_25340 = (state_25359[(11)]);var inst_25338__$1 = topic_fn.call(null,inst_25290);var inst_25339 = cljs.core.deref.call(null,mults);var inst_25340__$1 = cljs.core.get.call(null,inst_25339,inst_25338__$1);var state_25359__$1 = (function (){var statearr_25375 = state_25359;(statearr_25375[(7)] = inst_25338__$1);
(statearr_25375[(11)] = inst_25340__$1);
return statearr_25375;
})();if(cljs.core.truth_(inst_25340__$1))
{var statearr_25376_25420 = state_25359__$1;(statearr_25376_25420[(1)] = (19));
} else
{var statearr_25377_25421 = state_25359__$1;(statearr_25377_25421[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (25)))
{var inst_25349 = (state_25359[(2)]);var state_25359__$1 = state_25359;var statearr_25378_25422 = state_25359__$1;(statearr_25378_25422[(2)] = inst_25349);
(statearr_25378_25422[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (17)))
{var inst_25314 = (state_25359[(10)]);var inst_25323 = cljs.core.first.call(null,inst_25314);var inst_25324 = cljs.core.async.muxch_STAR_.call(null,inst_25323);var inst_25325 = cljs.core.async.close_BANG_.call(null,inst_25324);var inst_25326 = cljs.core.next.call(null,inst_25314);var inst_25300 = inst_25326;var inst_25301 = null;var inst_25302 = (0);var inst_25303 = (0);var state_25359__$1 = (function (){var statearr_25379 = state_25359;(statearr_25379[(12)] = inst_25301);
(statearr_25379[(13)] = inst_25325);
(statearr_25379[(14)] = inst_25300);
(statearr_25379[(15)] = inst_25302);
(statearr_25379[(16)] = inst_25303);
return statearr_25379;
})();var statearr_25380_25423 = state_25359__$1;(statearr_25380_25423[(2)] = null);
(statearr_25380_25423[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (3)))
{var inst_25357 = (state_25359[(2)]);var state_25359__$1 = state_25359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25359__$1,inst_25357);
} else
{if((state_val_25360 === (12)))
{var inst_25334 = (state_25359[(2)]);var state_25359__$1 = state_25359;var statearr_25381_25424 = state_25359__$1;(statearr_25381_25424[(2)] = inst_25334);
(statearr_25381_25424[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (2)))
{var state_25359__$1 = state_25359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25359__$1,(4),ch);
} else
{if((state_val_25360 === (23)))
{var state_25359__$1 = state_25359;var statearr_25382_25425 = state_25359__$1;(statearr_25382_25425[(2)] = null);
(statearr_25382_25425[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (19)))
{var inst_25290 = (state_25359[(8)]);var inst_25340 = (state_25359[(11)]);var inst_25342 = cljs.core.async.muxch_STAR_.call(null,inst_25340);var state_25359__$1 = state_25359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25359__$1,(22),inst_25342,inst_25290);
} else
{if((state_val_25360 === (11)))
{var inst_25300 = (state_25359[(14)]);var inst_25314 = (state_25359[(10)]);var inst_25314__$1 = cljs.core.seq.call(null,inst_25300);var state_25359__$1 = (function (){var statearr_25383 = state_25359;(statearr_25383[(10)] = inst_25314__$1);
return statearr_25383;
})();if(inst_25314__$1)
{var statearr_25384_25426 = state_25359__$1;(statearr_25384_25426[(1)] = (13));
} else
{var statearr_25385_25427 = state_25359__$1;(statearr_25385_25427[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (9)))
{var inst_25336 = (state_25359[(2)]);var state_25359__$1 = state_25359;var statearr_25386_25428 = state_25359__$1;(statearr_25386_25428[(2)] = inst_25336);
(statearr_25386_25428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (5)))
{var inst_25297 = cljs.core.deref.call(null,mults);var inst_25298 = cljs.core.vals.call(null,inst_25297);var inst_25299 = cljs.core.seq.call(null,inst_25298);var inst_25300 = inst_25299;var inst_25301 = null;var inst_25302 = (0);var inst_25303 = (0);var state_25359__$1 = (function (){var statearr_25387 = state_25359;(statearr_25387[(12)] = inst_25301);
(statearr_25387[(14)] = inst_25300);
(statearr_25387[(15)] = inst_25302);
(statearr_25387[(16)] = inst_25303);
return statearr_25387;
})();var statearr_25388_25429 = state_25359__$1;(statearr_25388_25429[(2)] = null);
(statearr_25388_25429[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (14)))
{var state_25359__$1 = state_25359;var statearr_25392_25430 = state_25359__$1;(statearr_25392_25430[(2)] = null);
(statearr_25392_25430[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (16)))
{var inst_25314 = (state_25359[(10)]);var inst_25318 = cljs.core.chunk_first.call(null,inst_25314);var inst_25319 = cljs.core.chunk_rest.call(null,inst_25314);var inst_25320 = cljs.core.count.call(null,inst_25318);var inst_25300 = inst_25319;var inst_25301 = inst_25318;var inst_25302 = inst_25320;var inst_25303 = (0);var state_25359__$1 = (function (){var statearr_25393 = state_25359;(statearr_25393[(12)] = inst_25301);
(statearr_25393[(14)] = inst_25300);
(statearr_25393[(15)] = inst_25302);
(statearr_25393[(16)] = inst_25303);
return statearr_25393;
})();var statearr_25394_25431 = state_25359__$1;(statearr_25394_25431[(2)] = null);
(statearr_25394_25431[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (10)))
{var inst_25301 = (state_25359[(12)]);var inst_25300 = (state_25359[(14)]);var inst_25302 = (state_25359[(15)]);var inst_25303 = (state_25359[(16)]);var inst_25308 = cljs.core._nth.call(null,inst_25301,inst_25303);var inst_25309 = cljs.core.async.muxch_STAR_.call(null,inst_25308);var inst_25310 = cljs.core.async.close_BANG_.call(null,inst_25309);var inst_25311 = (inst_25303 + (1));var tmp25389 = inst_25301;var tmp25390 = inst_25300;var tmp25391 = inst_25302;var inst_25300__$1 = tmp25390;var inst_25301__$1 = tmp25389;var inst_25302__$1 = tmp25391;var inst_25303__$1 = inst_25311;var state_25359__$1 = (function (){var statearr_25395 = state_25359;(statearr_25395[(12)] = inst_25301__$1);
(statearr_25395[(14)] = inst_25300__$1);
(statearr_25395[(15)] = inst_25302__$1);
(statearr_25395[(17)] = inst_25310);
(statearr_25395[(16)] = inst_25303__$1);
return statearr_25395;
})();var statearr_25396_25432 = state_25359__$1;(statearr_25396_25432[(2)] = null);
(statearr_25396_25432[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (18)))
{var inst_25329 = (state_25359[(2)]);var state_25359__$1 = state_25359;var statearr_25397_25433 = state_25359__$1;(statearr_25397_25433[(2)] = inst_25329);
(statearr_25397_25433[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25360 === (8)))
{var inst_25302 = (state_25359[(15)]);var inst_25303 = (state_25359[(16)]);var inst_25305 = (inst_25303 < inst_25302);var inst_25306 = inst_25305;var state_25359__$1 = state_25359;if(cljs.core.truth_(inst_25306))
{var statearr_25398_25434 = state_25359__$1;(statearr_25398_25434[(1)] = (10));
} else
{var statearr_25399_25435 = state_25359__$1;(statearr_25399_25435[(1)] = (11));
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
});})(c__9125__auto___25407,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25407,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25403[(0)] = state_machine__9111__auto__);
(statearr_25403[(1)] = (1));
return statearr_25403;
});
var state_machine__9111__auto____1 = (function (state_25359){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25359);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object))
{var ex__9114__auto__ = e25404;var statearr_25405_25436 = state_25359;(statearr_25405_25436[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25437 = state_25359;
state_25359 = G__25437;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25359){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25407,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25406 = f__9126__auto__.call(null);(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25407);
return statearr_25406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25407,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25544){var state_val_25545 = (state_25544[(1)]);if((state_val_25545 === (7)))
{var state_25544__$1 = state_25544;var statearr_25546_25575 = state_25544__$1;(statearr_25546_25575[(2)] = null);
(statearr_25546_25575[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (1)))
{var state_25544__$1 = state_25544;var statearr_25547_25576 = state_25544__$1;(statearr_25547_25576[(2)] = null);
(statearr_25547_25576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (4)))
{var inst_25508 = (state_25544[(7)]);var inst_25510 = (inst_25508 < cnt);var state_25544__$1 = state_25544;if(cljs.core.truth_(inst_25510))
{var statearr_25548_25577 = state_25544__$1;(statearr_25548_25577[(1)] = (6));
} else
{var statearr_25549_25578 = state_25544__$1;(statearr_25549_25578[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (15)))
{var inst_25540 = (state_25544[(2)]);var state_25544__$1 = state_25544;var statearr_25550_25579 = state_25544__$1;(statearr_25550_25579[(2)] = inst_25540);
(statearr_25550_25579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (13)))
{var inst_25533 = cljs.core.async.close_BANG_.call(null,out);var state_25544__$1 = state_25544;var statearr_25551_25580 = state_25544__$1;(statearr_25551_25580[(2)] = inst_25533);
(statearr_25551_25580[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (6)))
{var state_25544__$1 = state_25544;var statearr_25552_25581 = state_25544__$1;(statearr_25552_25581[(2)] = null);
(statearr_25552_25581[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (3)))
{var inst_25542 = (state_25544[(2)]);var state_25544__$1 = state_25544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25544__$1,inst_25542);
} else
{if((state_val_25545 === (12)))
{var inst_25530 = (state_25544[(8)]);var inst_25530__$1 = (state_25544[(2)]);var inst_25531 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25530__$1);var state_25544__$1 = (function (){var statearr_25553 = state_25544;(statearr_25553[(8)] = inst_25530__$1);
return statearr_25553;
})();if(cljs.core.truth_(inst_25531))
{var statearr_25554_25582 = state_25544__$1;(statearr_25554_25582[(1)] = (13));
} else
{var statearr_25555_25583 = state_25544__$1;(statearr_25555_25583[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (2)))
{var inst_25507 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25508 = (0);var state_25544__$1 = (function (){var statearr_25556 = state_25544;(statearr_25556[(9)] = inst_25507);
(statearr_25556[(7)] = inst_25508);
return statearr_25556;
})();var statearr_25557_25584 = state_25544__$1;(statearr_25557_25584[(2)] = null);
(statearr_25557_25584[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (11)))
{var inst_25508 = (state_25544[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25544,(10),Object,null,(9));var inst_25517 = chs__$1.call(null,inst_25508);var inst_25518 = done.call(null,inst_25508);var inst_25519 = cljs.core.async.take_BANG_.call(null,inst_25517,inst_25518);var state_25544__$1 = state_25544;var statearr_25558_25585 = state_25544__$1;(statearr_25558_25585[(2)] = inst_25519);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25544__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (9)))
{var inst_25508 = (state_25544[(7)]);var inst_25521 = (state_25544[(2)]);var inst_25522 = (inst_25508 + (1));var inst_25508__$1 = inst_25522;var state_25544__$1 = (function (){var statearr_25559 = state_25544;(statearr_25559[(10)] = inst_25521);
(statearr_25559[(7)] = inst_25508__$1);
return statearr_25559;
})();var statearr_25560_25586 = state_25544__$1;(statearr_25560_25586[(2)] = null);
(statearr_25560_25586[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (5)))
{var inst_25528 = (state_25544[(2)]);var state_25544__$1 = (function (){var statearr_25561 = state_25544;(statearr_25561[(11)] = inst_25528);
return statearr_25561;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25544__$1,(12),dchan);
} else
{if((state_val_25545 === (14)))
{var inst_25530 = (state_25544[(8)]);var inst_25535 = cljs.core.apply.call(null,f,inst_25530);var state_25544__$1 = state_25544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25544__$1,(16),out,inst_25535);
} else
{if((state_val_25545 === (16)))
{var inst_25537 = (state_25544[(2)]);var state_25544__$1 = (function (){var statearr_25562 = state_25544;(statearr_25562[(12)] = inst_25537);
return statearr_25562;
})();var statearr_25563_25587 = state_25544__$1;(statearr_25563_25587[(2)] = null);
(statearr_25563_25587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (10)))
{var inst_25512 = (state_25544[(2)]);var inst_25513 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25544__$1 = (function (){var statearr_25564 = state_25544;(statearr_25564[(13)] = inst_25512);
return statearr_25564;
})();var statearr_25565_25588 = state_25544__$1;(statearr_25565_25588[(2)] = inst_25513);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25544__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25545 === (8)))
{var inst_25526 = (state_25544[(2)]);var state_25544__$1 = state_25544;var statearr_25566_25589 = state_25544__$1;(statearr_25566_25589[(2)] = inst_25526);
(statearr_25566_25589[(1)] = (5));
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
});})(c__9125__auto___25574,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25574,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25570[(0)] = state_machine__9111__auto__);
(statearr_25570[(1)] = (1));
return statearr_25570;
});
var state_machine__9111__auto____1 = (function (state_25544){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25544);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25571){if((e25571 instanceof Object))
{var ex__9114__auto__ = e25571;var statearr_25572_25590 = state_25544;(statearr_25572_25590[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25571;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25591 = state_25544;
state_25544 = G__25591;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25544){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25574,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25573 = f__9126__auto__.call(null);(statearr_25573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25574);
return statearr_25573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25574,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25699 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25699,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25699,out){
return (function (state_25675){var state_val_25676 = (state_25675[(1)]);if((state_val_25676 === (7)))
{var inst_25655 = (state_25675[(7)]);var inst_25654 = (state_25675[(8)]);var inst_25654__$1 = (state_25675[(2)]);var inst_25655__$1 = cljs.core.nth.call(null,inst_25654__$1,(0),null);var inst_25656 = cljs.core.nth.call(null,inst_25654__$1,(1),null);var inst_25657 = (inst_25655__$1 == null);var state_25675__$1 = (function (){var statearr_25677 = state_25675;(statearr_25677[(7)] = inst_25655__$1);
(statearr_25677[(8)] = inst_25654__$1);
(statearr_25677[(9)] = inst_25656);
return statearr_25677;
})();if(cljs.core.truth_(inst_25657))
{var statearr_25678_25700 = state_25675__$1;(statearr_25678_25700[(1)] = (8));
} else
{var statearr_25679_25701 = state_25675__$1;(statearr_25679_25701[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (1)))
{var inst_25646 = cljs.core.vec.call(null,chs);var inst_25647 = inst_25646;var state_25675__$1 = (function (){var statearr_25680 = state_25675;(statearr_25680[(10)] = inst_25647);
return statearr_25680;
})();var statearr_25681_25702 = state_25675__$1;(statearr_25681_25702[(2)] = null);
(statearr_25681_25702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (4)))
{var inst_25647 = (state_25675[(10)]);var state_25675__$1 = state_25675;return cljs.core.async.ioc_alts_BANG_.call(null,state_25675__$1,(7),inst_25647);
} else
{if((state_val_25676 === (6)))
{var inst_25671 = (state_25675[(2)]);var state_25675__$1 = state_25675;var statearr_25682_25703 = state_25675__$1;(statearr_25682_25703[(2)] = inst_25671);
(statearr_25682_25703[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (3)))
{var inst_25673 = (state_25675[(2)]);var state_25675__$1 = state_25675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25675__$1,inst_25673);
} else
{if((state_val_25676 === (2)))
{var inst_25647 = (state_25675[(10)]);var inst_25649 = cljs.core.count.call(null,inst_25647);var inst_25650 = (inst_25649 > (0));var state_25675__$1 = state_25675;if(cljs.core.truth_(inst_25650))
{var statearr_25684_25704 = state_25675__$1;(statearr_25684_25704[(1)] = (4));
} else
{var statearr_25685_25705 = state_25675__$1;(statearr_25685_25705[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (11)))
{var inst_25647 = (state_25675[(10)]);var inst_25664 = (state_25675[(2)]);var tmp25683 = inst_25647;var inst_25647__$1 = tmp25683;var state_25675__$1 = (function (){var statearr_25686 = state_25675;(statearr_25686[(10)] = inst_25647__$1);
(statearr_25686[(11)] = inst_25664);
return statearr_25686;
})();var statearr_25687_25706 = state_25675__$1;(statearr_25687_25706[(2)] = null);
(statearr_25687_25706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (9)))
{var inst_25655 = (state_25675[(7)]);var state_25675__$1 = state_25675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25675__$1,(11),out,inst_25655);
} else
{if((state_val_25676 === (5)))
{var inst_25669 = cljs.core.async.close_BANG_.call(null,out);var state_25675__$1 = state_25675;var statearr_25688_25707 = state_25675__$1;(statearr_25688_25707[(2)] = inst_25669);
(statearr_25688_25707[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (10)))
{var inst_25667 = (state_25675[(2)]);var state_25675__$1 = state_25675;var statearr_25689_25708 = state_25675__$1;(statearr_25689_25708[(2)] = inst_25667);
(statearr_25689_25708[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25676 === (8)))
{var inst_25647 = (state_25675[(10)]);var inst_25655 = (state_25675[(7)]);var inst_25654 = (state_25675[(8)]);var inst_25656 = (state_25675[(9)]);var inst_25659 = (function (){var c = inst_25656;var v = inst_25655;var vec__25652 = inst_25654;var cs = inst_25647;return ((function (c,v,vec__25652,cs,inst_25647,inst_25655,inst_25654,inst_25656,state_val_25676,c__9125__auto___25699,out){
return (function (p1__25592_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25592_SHARP_);
});
;})(c,v,vec__25652,cs,inst_25647,inst_25655,inst_25654,inst_25656,state_val_25676,c__9125__auto___25699,out))
})();var inst_25660 = cljs.core.filterv.call(null,inst_25659,inst_25647);var inst_25647__$1 = inst_25660;var state_25675__$1 = (function (){var statearr_25690 = state_25675;(statearr_25690[(10)] = inst_25647__$1);
return statearr_25690;
})();var statearr_25691_25709 = state_25675__$1;(statearr_25691_25709[(2)] = null);
(statearr_25691_25709[(1)] = (2));
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
});})(c__9125__auto___25699,out))
;return ((function (switch__9110__auto__,c__9125__auto___25699,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25695 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25695[(0)] = state_machine__9111__auto__);
(statearr_25695[(1)] = (1));
return statearr_25695;
});
var state_machine__9111__auto____1 = (function (state_25675){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25675);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25696){if((e25696 instanceof Object))
{var ex__9114__auto__ = e25696;var statearr_25697_25710 = state_25675;(statearr_25697_25710[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25711 = state_25675;
state_25675 = G__25711;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25675){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25699,out))
})();var state__9127__auto__ = (function (){var statearr_25698 = f__9126__auto__.call(null);(statearr_25698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25699);
return statearr_25698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25699,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25804 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25804,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25804,out){
return (function (state_25781){var state_val_25782 = (state_25781[(1)]);if((state_val_25782 === (7)))
{var inst_25763 = (state_25781[(7)]);var inst_25763__$1 = (state_25781[(2)]);var inst_25764 = (inst_25763__$1 == null);var inst_25765 = cljs.core.not.call(null,inst_25764);var state_25781__$1 = (function (){var statearr_25783 = state_25781;(statearr_25783[(7)] = inst_25763__$1);
return statearr_25783;
})();if(inst_25765)
{var statearr_25784_25805 = state_25781__$1;(statearr_25784_25805[(1)] = (8));
} else
{var statearr_25785_25806 = state_25781__$1;(statearr_25785_25806[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (1)))
{var inst_25758 = (0);var state_25781__$1 = (function (){var statearr_25786 = state_25781;(statearr_25786[(8)] = inst_25758);
return statearr_25786;
})();var statearr_25787_25807 = state_25781__$1;(statearr_25787_25807[(2)] = null);
(statearr_25787_25807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (4)))
{var state_25781__$1 = state_25781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25781__$1,(7),ch);
} else
{if((state_val_25782 === (6)))
{var inst_25776 = (state_25781[(2)]);var state_25781__$1 = state_25781;var statearr_25788_25808 = state_25781__$1;(statearr_25788_25808[(2)] = inst_25776);
(statearr_25788_25808[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (3)))
{var inst_25778 = (state_25781[(2)]);var inst_25779 = cljs.core.async.close_BANG_.call(null,out);var state_25781__$1 = (function (){var statearr_25789 = state_25781;(statearr_25789[(9)] = inst_25778);
return statearr_25789;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25781__$1,inst_25779);
} else
{if((state_val_25782 === (2)))
{var inst_25758 = (state_25781[(8)]);var inst_25760 = (inst_25758 < n);var state_25781__$1 = state_25781;if(cljs.core.truth_(inst_25760))
{var statearr_25790_25809 = state_25781__$1;(statearr_25790_25809[(1)] = (4));
} else
{var statearr_25791_25810 = state_25781__$1;(statearr_25791_25810[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (11)))
{var inst_25758 = (state_25781[(8)]);var inst_25768 = (state_25781[(2)]);var inst_25769 = (inst_25758 + (1));var inst_25758__$1 = inst_25769;var state_25781__$1 = (function (){var statearr_25792 = state_25781;(statearr_25792[(10)] = inst_25768);
(statearr_25792[(8)] = inst_25758__$1);
return statearr_25792;
})();var statearr_25793_25811 = state_25781__$1;(statearr_25793_25811[(2)] = null);
(statearr_25793_25811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (9)))
{var state_25781__$1 = state_25781;var statearr_25794_25812 = state_25781__$1;(statearr_25794_25812[(2)] = null);
(statearr_25794_25812[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (5)))
{var state_25781__$1 = state_25781;var statearr_25795_25813 = state_25781__$1;(statearr_25795_25813[(2)] = null);
(statearr_25795_25813[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (10)))
{var inst_25773 = (state_25781[(2)]);var state_25781__$1 = state_25781;var statearr_25796_25814 = state_25781__$1;(statearr_25796_25814[(2)] = inst_25773);
(statearr_25796_25814[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25782 === (8)))
{var inst_25763 = (state_25781[(7)]);var state_25781__$1 = state_25781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25781__$1,(11),out,inst_25763);
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
});})(c__9125__auto___25804,out))
;return ((function (switch__9110__auto__,c__9125__auto___25804,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25800 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25800[(0)] = state_machine__9111__auto__);
(statearr_25800[(1)] = (1));
return statearr_25800;
});
var state_machine__9111__auto____1 = (function (state_25781){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25781);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25801){if((e25801 instanceof Object))
{var ex__9114__auto__ = e25801;var statearr_25802_25815 = state_25781;(statearr_25802_25815[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25801;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25816 = state_25781;
state_25781 = G__25816;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25781){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25804,out))
})();var state__9127__auto__ = (function (){var statearr_25803 = f__9126__auto__.call(null);(statearr_25803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25804);
return statearr_25803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25804,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25824 = (function (ch,f,map_LT_,meta25825){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25825 = meta25825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25824.cljs$lang$type = true;
cljs.core.async.t25824.cljs$lang$ctorStr = "cljs.core.async/t25824";
cljs.core.async.t25824.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25824");
});
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25827 = (function (fn1,_,meta25825,ch,f,map_LT_,meta25828){
this.fn1 = fn1;
this._ = _;
this.meta25825 = meta25825;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25828 = meta25828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25827.cljs$lang$type = true;
cljs.core.async.t25827.cljs$lang$ctorStr = "cljs.core.async/t25827";
cljs.core.async.t25827.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25827");
});})(___$1))
;
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25817_SHARP_){return f1.call(null,(((p1__25817_SHARP_ == null))?null:self__.f.call(null,p1__25817_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25829){var self__ = this;
var _25829__$1 = this;return self__.meta25828;
});})(___$1))
;
cljs.core.async.t25827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25829,meta25828__$1){var self__ = this;
var _25829__$1 = this;return (new cljs.core.async.t25827(self__.fn1,self__._,self__.meta25825,self__.ch,self__.f,self__.map_LT_,meta25828__$1));
});})(___$1))
;
cljs.core.async.__GT_t25827 = ((function (___$1){
return (function __GT_t25827(fn1__$1,___$2,meta25825__$1,ch__$2,f__$2,map_LT___$2,meta25828){return (new cljs.core.async.t25827(fn1__$1,___$2,meta25825__$1,ch__$2,f__$2,map_LT___$2,meta25828));
});})(___$1))
;
}
return (new cljs.core.async.t25827(fn1,___$1,self__.meta25825,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25824.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25826){var self__ = this;
var _25826__$1 = this;return self__.meta25825;
});
cljs.core.async.t25824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25826,meta25825__$1){var self__ = this;
var _25826__$1 = this;return (new cljs.core.async.t25824(self__.ch,self__.f,self__.map_LT_,meta25825__$1));
});
cljs.core.async.__GT_t25824 = (function __GT_t25824(ch__$1,f__$1,map_LT___$1,meta25825){return (new cljs.core.async.t25824(ch__$1,f__$1,map_LT___$1,meta25825));
});
}
return (new cljs.core.async.t25824(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25833 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25833 = (function (ch,f,map_GT_,meta25834){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25834 = meta25834;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25833.cljs$lang$type = true;
cljs.core.async.t25833.cljs$lang$ctorStr = "cljs.core.async/t25833";
cljs.core.async.t25833.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25833");
});
cljs.core.async.t25833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25833.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25835){var self__ = this;
var _25835__$1 = this;return self__.meta25834;
});
cljs.core.async.t25833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25835,meta25834__$1){var self__ = this;
var _25835__$1 = this;return (new cljs.core.async.t25833(self__.ch,self__.f,self__.map_GT_,meta25834__$1));
});
cljs.core.async.__GT_t25833 = (function __GT_t25833(ch__$1,f__$1,map_GT___$1,meta25834){return (new cljs.core.async.t25833(ch__$1,f__$1,map_GT___$1,meta25834));
});
}
return (new cljs.core.async.t25833(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25839 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25839 = (function (ch,p,filter_GT_,meta25840){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25840 = meta25840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25839.cljs$lang$type = true;
cljs.core.async.t25839.cljs$lang$ctorStr = "cljs.core.async/t25839";
cljs.core.async.t25839.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25839");
});
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25841){var self__ = this;
var _25841__$1 = this;return self__.meta25840;
});
cljs.core.async.t25839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25841,meta25840__$1){var self__ = this;
var _25841__$1 = this;return (new cljs.core.async.t25839(self__.ch,self__.p,self__.filter_GT_,meta25840__$1));
});
cljs.core.async.__GT_t25839 = (function __GT_t25839(ch__$1,p__$1,filter_GT___$1,meta25840){return (new cljs.core.async.t25839(ch__$1,p__$1,filter_GT___$1,meta25840));
});
}
return (new cljs.core.async.t25839(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25924 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25924,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25924,out){
return (function (state_25903){var state_val_25904 = (state_25903[(1)]);if((state_val_25904 === (7)))
{var inst_25899 = (state_25903[(2)]);var state_25903__$1 = state_25903;var statearr_25905_25925 = state_25903__$1;(statearr_25905_25925[(2)] = inst_25899);
(statearr_25905_25925[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (1)))
{var state_25903__$1 = state_25903;var statearr_25906_25926 = state_25903__$1;(statearr_25906_25926[(2)] = null);
(statearr_25906_25926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (4)))
{var inst_25885 = (state_25903[(7)]);var inst_25885__$1 = (state_25903[(2)]);var inst_25886 = (inst_25885__$1 == null);var state_25903__$1 = (function (){var statearr_25907 = state_25903;(statearr_25907[(7)] = inst_25885__$1);
return statearr_25907;
})();if(cljs.core.truth_(inst_25886))
{var statearr_25908_25927 = state_25903__$1;(statearr_25908_25927[(1)] = (5));
} else
{var statearr_25909_25928 = state_25903__$1;(statearr_25909_25928[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (6)))
{var inst_25885 = (state_25903[(7)]);var inst_25890 = p.call(null,inst_25885);var state_25903__$1 = state_25903;if(cljs.core.truth_(inst_25890))
{var statearr_25910_25929 = state_25903__$1;(statearr_25910_25929[(1)] = (8));
} else
{var statearr_25911_25930 = state_25903__$1;(statearr_25911_25930[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (3)))
{var inst_25901 = (state_25903[(2)]);var state_25903__$1 = state_25903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25903__$1,inst_25901);
} else
{if((state_val_25904 === (2)))
{var state_25903__$1 = state_25903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25903__$1,(4),ch);
} else
{if((state_val_25904 === (11)))
{var inst_25893 = (state_25903[(2)]);var state_25903__$1 = state_25903;var statearr_25912_25931 = state_25903__$1;(statearr_25912_25931[(2)] = inst_25893);
(statearr_25912_25931[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (9)))
{var state_25903__$1 = state_25903;var statearr_25913_25932 = state_25903__$1;(statearr_25913_25932[(2)] = null);
(statearr_25913_25932[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (5)))
{var inst_25888 = cljs.core.async.close_BANG_.call(null,out);var state_25903__$1 = state_25903;var statearr_25914_25933 = state_25903__$1;(statearr_25914_25933[(2)] = inst_25888);
(statearr_25914_25933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (10)))
{var inst_25896 = (state_25903[(2)]);var state_25903__$1 = (function (){var statearr_25915 = state_25903;(statearr_25915[(8)] = inst_25896);
return statearr_25915;
})();var statearr_25916_25934 = state_25903__$1;(statearr_25916_25934[(2)] = null);
(statearr_25916_25934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25904 === (8)))
{var inst_25885 = (state_25903[(7)]);var state_25903__$1 = state_25903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25903__$1,(11),out,inst_25885);
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
});})(c__9125__auto___25924,out))
;return ((function (switch__9110__auto__,c__9125__auto___25924,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25920 = [null,null,null,null,null,null,null,null,null];(statearr_25920[(0)] = state_machine__9111__auto__);
(statearr_25920[(1)] = (1));
return statearr_25920;
});
var state_machine__9111__auto____1 = (function (state_25903){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25903);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25921){if((e25921 instanceof Object))
{var ex__9114__auto__ = e25921;var statearr_25922_25935 = state_25903;(statearr_25922_25935[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25903);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25921;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25936 = state_25903;
state_25903 = G__25936;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25903){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25924,out))
})();var state__9127__auto__ = (function (){var statearr_25923 = f__9126__auto__.call(null);(statearr_25923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25924);
return statearr_25923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25924,out))
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
return (function (state_26102){var state_val_26103 = (state_26102[(1)]);if((state_val_26103 === (7)))
{var inst_26098 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26104_26145 = state_26102__$1;(statearr_26104_26145[(2)] = inst_26098);
(statearr_26104_26145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (20)))
{var inst_26068 = (state_26102[(7)]);var inst_26079 = (state_26102[(2)]);var inst_26080 = cljs.core.next.call(null,inst_26068);var inst_26054 = inst_26080;var inst_26055 = null;var inst_26056 = (0);var inst_26057 = (0);var state_26102__$1 = (function (){var statearr_26105 = state_26102;(statearr_26105[(8)] = inst_26054);
(statearr_26105[(9)] = inst_26056);
(statearr_26105[(10)] = inst_26057);
(statearr_26105[(11)] = inst_26079);
(statearr_26105[(12)] = inst_26055);
return statearr_26105;
})();var statearr_26106_26146 = state_26102__$1;(statearr_26106_26146[(2)] = null);
(statearr_26106_26146[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (1)))
{var state_26102__$1 = state_26102;var statearr_26107_26147 = state_26102__$1;(statearr_26107_26147[(2)] = null);
(statearr_26107_26147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (4)))
{var inst_26043 = (state_26102[(13)]);var inst_26043__$1 = (state_26102[(2)]);var inst_26044 = (inst_26043__$1 == null);var state_26102__$1 = (function (){var statearr_26108 = state_26102;(statearr_26108[(13)] = inst_26043__$1);
return statearr_26108;
})();if(cljs.core.truth_(inst_26044))
{var statearr_26109_26148 = state_26102__$1;(statearr_26109_26148[(1)] = (5));
} else
{var statearr_26110_26149 = state_26102__$1;(statearr_26110_26149[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (15)))
{var state_26102__$1 = state_26102;var statearr_26114_26150 = state_26102__$1;(statearr_26114_26150[(2)] = null);
(statearr_26114_26150[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (21)))
{var state_26102__$1 = state_26102;var statearr_26115_26151 = state_26102__$1;(statearr_26115_26151[(2)] = null);
(statearr_26115_26151[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (13)))
{var inst_26054 = (state_26102[(8)]);var inst_26056 = (state_26102[(9)]);var inst_26057 = (state_26102[(10)]);var inst_26055 = (state_26102[(12)]);var inst_26064 = (state_26102[(2)]);var inst_26065 = (inst_26057 + (1));var tmp26111 = inst_26054;var tmp26112 = inst_26056;var tmp26113 = inst_26055;var inst_26054__$1 = tmp26111;var inst_26055__$1 = tmp26113;var inst_26056__$1 = tmp26112;var inst_26057__$1 = inst_26065;var state_26102__$1 = (function (){var statearr_26116 = state_26102;(statearr_26116[(8)] = inst_26054__$1);
(statearr_26116[(9)] = inst_26056__$1);
(statearr_26116[(10)] = inst_26057__$1);
(statearr_26116[(12)] = inst_26055__$1);
(statearr_26116[(14)] = inst_26064);
return statearr_26116;
})();var statearr_26117_26152 = state_26102__$1;(statearr_26117_26152[(2)] = null);
(statearr_26117_26152[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (22)))
{var state_26102__$1 = state_26102;var statearr_26118_26153 = state_26102__$1;(statearr_26118_26153[(2)] = null);
(statearr_26118_26153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (6)))
{var inst_26043 = (state_26102[(13)]);var inst_26052 = f.call(null,inst_26043);var inst_26053 = cljs.core.seq.call(null,inst_26052);var inst_26054 = inst_26053;var inst_26055 = null;var inst_26056 = (0);var inst_26057 = (0);var state_26102__$1 = (function (){var statearr_26119 = state_26102;(statearr_26119[(8)] = inst_26054);
(statearr_26119[(9)] = inst_26056);
(statearr_26119[(10)] = inst_26057);
(statearr_26119[(12)] = inst_26055);
return statearr_26119;
})();var statearr_26120_26154 = state_26102__$1;(statearr_26120_26154[(2)] = null);
(statearr_26120_26154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (17)))
{var inst_26068 = (state_26102[(7)]);var inst_26072 = cljs.core.chunk_first.call(null,inst_26068);var inst_26073 = cljs.core.chunk_rest.call(null,inst_26068);var inst_26074 = cljs.core.count.call(null,inst_26072);var inst_26054 = inst_26073;var inst_26055 = inst_26072;var inst_26056 = inst_26074;var inst_26057 = (0);var state_26102__$1 = (function (){var statearr_26121 = state_26102;(statearr_26121[(8)] = inst_26054);
(statearr_26121[(9)] = inst_26056);
(statearr_26121[(10)] = inst_26057);
(statearr_26121[(12)] = inst_26055);
return statearr_26121;
})();var statearr_26122_26155 = state_26102__$1;(statearr_26122_26155[(2)] = null);
(statearr_26122_26155[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (3)))
{var inst_26100 = (state_26102[(2)]);var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26102__$1,inst_26100);
} else
{if((state_val_26103 === (12)))
{var inst_26088 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26123_26156 = state_26102__$1;(statearr_26123_26156[(2)] = inst_26088);
(statearr_26123_26156[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (2)))
{var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26102__$1,(4),in$);
} else
{if((state_val_26103 === (23)))
{var inst_26096 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26124_26157 = state_26102__$1;(statearr_26124_26157[(2)] = inst_26096);
(statearr_26124_26157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (19)))
{var inst_26083 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26125_26158 = state_26102__$1;(statearr_26125_26158[(2)] = inst_26083);
(statearr_26125_26158[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (11)))
{var inst_26054 = (state_26102[(8)]);var inst_26068 = (state_26102[(7)]);var inst_26068__$1 = cljs.core.seq.call(null,inst_26054);var state_26102__$1 = (function (){var statearr_26126 = state_26102;(statearr_26126[(7)] = inst_26068__$1);
return statearr_26126;
})();if(inst_26068__$1)
{var statearr_26127_26159 = state_26102__$1;(statearr_26127_26159[(1)] = (14));
} else
{var statearr_26128_26160 = state_26102__$1;(statearr_26128_26160[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (9)))
{var inst_26090 = (state_26102[(2)]);var inst_26091 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26102__$1 = (function (){var statearr_26129 = state_26102;(statearr_26129[(15)] = inst_26090);
return statearr_26129;
})();if(cljs.core.truth_(inst_26091))
{var statearr_26130_26161 = state_26102__$1;(statearr_26130_26161[(1)] = (21));
} else
{var statearr_26131_26162 = state_26102__$1;(statearr_26131_26162[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (5)))
{var inst_26046 = cljs.core.async.close_BANG_.call(null,out);var state_26102__$1 = state_26102;var statearr_26132_26163 = state_26102__$1;(statearr_26132_26163[(2)] = inst_26046);
(statearr_26132_26163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (14)))
{var inst_26068 = (state_26102[(7)]);var inst_26070 = cljs.core.chunked_seq_QMARK_.call(null,inst_26068);var state_26102__$1 = state_26102;if(inst_26070)
{var statearr_26133_26164 = state_26102__$1;(statearr_26133_26164[(1)] = (17));
} else
{var statearr_26134_26165 = state_26102__$1;(statearr_26134_26165[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (16)))
{var inst_26086 = (state_26102[(2)]);var state_26102__$1 = state_26102;var statearr_26135_26166 = state_26102__$1;(statearr_26135_26166[(2)] = inst_26086);
(statearr_26135_26166[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26103 === (10)))
{var inst_26057 = (state_26102[(10)]);var inst_26055 = (state_26102[(12)]);var inst_26062 = cljs.core._nth.call(null,inst_26055,inst_26057);var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26102__$1,(13),out,inst_26062);
} else
{if((state_val_26103 === (18)))
{var inst_26068 = (state_26102[(7)]);var inst_26077 = cljs.core.first.call(null,inst_26068);var state_26102__$1 = state_26102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26102__$1,(20),out,inst_26077);
} else
{if((state_val_26103 === (8)))
{var inst_26056 = (state_26102[(9)]);var inst_26057 = (state_26102[(10)]);var inst_26059 = (inst_26057 < inst_26056);var inst_26060 = inst_26059;var state_26102__$1 = state_26102;if(cljs.core.truth_(inst_26060))
{var statearr_26136_26167 = state_26102__$1;(statearr_26136_26167[(1)] = (10));
} else
{var statearr_26137_26168 = state_26102__$1;(statearr_26137_26168[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26141[(0)] = state_machine__9111__auto__);
(statearr_26141[(1)] = (1));
return statearr_26141;
});
var state_machine__9111__auto____1 = (function (state_26102){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26102);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26142){if((e26142 instanceof Object))
{var ex__9114__auto__ = e26142;var statearr_26143_26169 = state_26102;(statearr_26143_26169[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26142;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26170 = state_26102;
state_26102 = G__26170;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26102){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26144 = f__9126__auto__.call(null);(statearr_26144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26144;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26267 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26267,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26267,out){
return (function (state_26242){var state_val_26243 = (state_26242[(1)]);if((state_val_26243 === (7)))
{var inst_26237 = (state_26242[(2)]);var state_26242__$1 = state_26242;var statearr_26244_26268 = state_26242__$1;(statearr_26244_26268[(2)] = inst_26237);
(statearr_26244_26268[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (1)))
{var inst_26219 = null;var state_26242__$1 = (function (){var statearr_26245 = state_26242;(statearr_26245[(7)] = inst_26219);
return statearr_26245;
})();var statearr_26246_26269 = state_26242__$1;(statearr_26246_26269[(2)] = null);
(statearr_26246_26269[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (4)))
{var inst_26222 = (state_26242[(8)]);var inst_26222__$1 = (state_26242[(2)]);var inst_26223 = (inst_26222__$1 == null);var inst_26224 = cljs.core.not.call(null,inst_26223);var state_26242__$1 = (function (){var statearr_26247 = state_26242;(statearr_26247[(8)] = inst_26222__$1);
return statearr_26247;
})();if(inst_26224)
{var statearr_26248_26270 = state_26242__$1;(statearr_26248_26270[(1)] = (5));
} else
{var statearr_26249_26271 = state_26242__$1;(statearr_26249_26271[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (6)))
{var state_26242__$1 = state_26242;var statearr_26250_26272 = state_26242__$1;(statearr_26250_26272[(2)] = null);
(statearr_26250_26272[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (3)))
{var inst_26239 = (state_26242[(2)]);var inst_26240 = cljs.core.async.close_BANG_.call(null,out);var state_26242__$1 = (function (){var statearr_26251 = state_26242;(statearr_26251[(9)] = inst_26239);
return statearr_26251;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26242__$1,inst_26240);
} else
{if((state_val_26243 === (2)))
{var state_26242__$1 = state_26242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26242__$1,(4),ch);
} else
{if((state_val_26243 === (11)))
{var inst_26222 = (state_26242[(8)]);var inst_26231 = (state_26242[(2)]);var inst_26219 = inst_26222;var state_26242__$1 = (function (){var statearr_26252 = state_26242;(statearr_26252[(7)] = inst_26219);
(statearr_26252[(10)] = inst_26231);
return statearr_26252;
})();var statearr_26253_26273 = state_26242__$1;(statearr_26253_26273[(2)] = null);
(statearr_26253_26273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (9)))
{var inst_26222 = (state_26242[(8)]);var state_26242__$1 = state_26242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26242__$1,(11),out,inst_26222);
} else
{if((state_val_26243 === (5)))
{var inst_26219 = (state_26242[(7)]);var inst_26222 = (state_26242[(8)]);var inst_26226 = cljs.core._EQ_.call(null,inst_26222,inst_26219);var state_26242__$1 = state_26242;if(inst_26226)
{var statearr_26255_26274 = state_26242__$1;(statearr_26255_26274[(1)] = (8));
} else
{var statearr_26256_26275 = state_26242__$1;(statearr_26256_26275[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (10)))
{var inst_26234 = (state_26242[(2)]);var state_26242__$1 = state_26242;var statearr_26257_26276 = state_26242__$1;(statearr_26257_26276[(2)] = inst_26234);
(statearr_26257_26276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26243 === (8)))
{var inst_26219 = (state_26242[(7)]);var tmp26254 = inst_26219;var inst_26219__$1 = tmp26254;var state_26242__$1 = (function (){var statearr_26258 = state_26242;(statearr_26258[(7)] = inst_26219__$1);
return statearr_26258;
})();var statearr_26259_26277 = state_26242__$1;(statearr_26259_26277[(2)] = null);
(statearr_26259_26277[(1)] = (2));
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
});})(c__9125__auto___26267,out))
;return ((function (switch__9110__auto__,c__9125__auto___26267,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26263 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26263[(0)] = state_machine__9111__auto__);
(statearr_26263[(1)] = (1));
return statearr_26263;
});
var state_machine__9111__auto____1 = (function (state_26242){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26242);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26264){if((e26264 instanceof Object))
{var ex__9114__auto__ = e26264;var statearr_26265_26278 = state_26242;(statearr_26265_26278[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26264;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26279 = state_26242;
state_26242 = G__26279;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26242){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26267,out))
})();var state__9127__auto__ = (function (){var statearr_26266 = f__9126__auto__.call(null);(statearr_26266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26267);
return statearr_26266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26267,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26414 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26414,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26414,out){
return (function (state_26384){var state_val_26385 = (state_26384[(1)]);if((state_val_26385 === (7)))
{var inst_26380 = (state_26384[(2)]);var state_26384__$1 = state_26384;var statearr_26386_26415 = state_26384__$1;(statearr_26386_26415[(2)] = inst_26380);
(statearr_26386_26415[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (1)))
{var inst_26347 = (new Array(n));var inst_26348 = inst_26347;var inst_26349 = (0);var state_26384__$1 = (function (){var statearr_26387 = state_26384;(statearr_26387[(7)] = inst_26348);
(statearr_26387[(8)] = inst_26349);
return statearr_26387;
})();var statearr_26388_26416 = state_26384__$1;(statearr_26388_26416[(2)] = null);
(statearr_26388_26416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (4)))
{var inst_26352 = (state_26384[(9)]);var inst_26352__$1 = (state_26384[(2)]);var inst_26353 = (inst_26352__$1 == null);var inst_26354 = cljs.core.not.call(null,inst_26353);var state_26384__$1 = (function (){var statearr_26389 = state_26384;(statearr_26389[(9)] = inst_26352__$1);
return statearr_26389;
})();if(inst_26354)
{var statearr_26390_26417 = state_26384__$1;(statearr_26390_26417[(1)] = (5));
} else
{var statearr_26391_26418 = state_26384__$1;(statearr_26391_26418[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (15)))
{var inst_26374 = (state_26384[(2)]);var state_26384__$1 = state_26384;var statearr_26392_26419 = state_26384__$1;(statearr_26392_26419[(2)] = inst_26374);
(statearr_26392_26419[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (13)))
{var state_26384__$1 = state_26384;var statearr_26393_26420 = state_26384__$1;(statearr_26393_26420[(2)] = null);
(statearr_26393_26420[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (6)))
{var inst_26349 = (state_26384[(8)]);var inst_26370 = (inst_26349 > (0));var state_26384__$1 = state_26384;if(cljs.core.truth_(inst_26370))
{var statearr_26394_26421 = state_26384__$1;(statearr_26394_26421[(1)] = (12));
} else
{var statearr_26395_26422 = state_26384__$1;(statearr_26395_26422[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (3)))
{var inst_26382 = (state_26384[(2)]);var state_26384__$1 = state_26384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26384__$1,inst_26382);
} else
{if((state_val_26385 === (12)))
{var inst_26348 = (state_26384[(7)]);var inst_26372 = cljs.core.vec.call(null,inst_26348);var state_26384__$1 = state_26384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26384__$1,(15),out,inst_26372);
} else
{if((state_val_26385 === (2)))
{var state_26384__$1 = state_26384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26384__$1,(4),ch);
} else
{if((state_val_26385 === (11)))
{var inst_26364 = (state_26384[(2)]);var inst_26365 = (new Array(n));var inst_26348 = inst_26365;var inst_26349 = (0);var state_26384__$1 = (function (){var statearr_26396 = state_26384;(statearr_26396[(10)] = inst_26364);
(statearr_26396[(7)] = inst_26348);
(statearr_26396[(8)] = inst_26349);
return statearr_26396;
})();var statearr_26397_26423 = state_26384__$1;(statearr_26397_26423[(2)] = null);
(statearr_26397_26423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (9)))
{var inst_26348 = (state_26384[(7)]);var inst_26362 = cljs.core.vec.call(null,inst_26348);var state_26384__$1 = state_26384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26384__$1,(11),out,inst_26362);
} else
{if((state_val_26385 === (5)))
{var inst_26348 = (state_26384[(7)]);var inst_26349 = (state_26384[(8)]);var inst_26357 = (state_26384[(11)]);var inst_26352 = (state_26384[(9)]);var inst_26356 = (inst_26348[inst_26349] = inst_26352);var inst_26357__$1 = (inst_26349 + (1));var inst_26358 = (inst_26357__$1 < n);var state_26384__$1 = (function (){var statearr_26398 = state_26384;(statearr_26398[(11)] = inst_26357__$1);
(statearr_26398[(12)] = inst_26356);
return statearr_26398;
})();if(cljs.core.truth_(inst_26358))
{var statearr_26399_26424 = state_26384__$1;(statearr_26399_26424[(1)] = (8));
} else
{var statearr_26400_26425 = state_26384__$1;(statearr_26400_26425[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (14)))
{var inst_26377 = (state_26384[(2)]);var inst_26378 = cljs.core.async.close_BANG_.call(null,out);var state_26384__$1 = (function (){var statearr_26402 = state_26384;(statearr_26402[(13)] = inst_26377);
return statearr_26402;
})();var statearr_26403_26426 = state_26384__$1;(statearr_26403_26426[(2)] = inst_26378);
(statearr_26403_26426[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (10)))
{var inst_26368 = (state_26384[(2)]);var state_26384__$1 = state_26384;var statearr_26404_26427 = state_26384__$1;(statearr_26404_26427[(2)] = inst_26368);
(statearr_26404_26427[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26385 === (8)))
{var inst_26348 = (state_26384[(7)]);var inst_26357 = (state_26384[(11)]);var tmp26401 = inst_26348;var inst_26348__$1 = tmp26401;var inst_26349 = inst_26357;var state_26384__$1 = (function (){var statearr_26405 = state_26384;(statearr_26405[(7)] = inst_26348__$1);
(statearr_26405[(8)] = inst_26349);
return statearr_26405;
})();var statearr_26406_26428 = state_26384__$1;(statearr_26406_26428[(2)] = null);
(statearr_26406_26428[(1)] = (2));
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
});})(c__9125__auto___26414,out))
;return ((function (switch__9110__auto__,c__9125__auto___26414,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26410[(0)] = state_machine__9111__auto__);
(statearr_26410[(1)] = (1));
return statearr_26410;
});
var state_machine__9111__auto____1 = (function (state_26384){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26384);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26411){if((e26411 instanceof Object))
{var ex__9114__auto__ = e26411;var statearr_26412_26429 = state_26384;(statearr_26412_26429[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26384);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26411;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26430 = state_26384;
state_26384 = G__26430;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26384){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26414,out))
})();var state__9127__auto__ = (function (){var statearr_26413 = f__9126__auto__.call(null);(statearr_26413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26414);
return statearr_26413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26414,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26573 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26573,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26573,out){
return (function (state_26543){var state_val_26544 = (state_26543[(1)]);if((state_val_26544 === (7)))
{var inst_26539 = (state_26543[(2)]);var state_26543__$1 = state_26543;var statearr_26545_26574 = state_26543__$1;(statearr_26545_26574[(2)] = inst_26539);
(statearr_26545_26574[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (1)))
{var inst_26502 = [];var inst_26503 = inst_26502;var inst_26504 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26543__$1 = (function (){var statearr_26546 = state_26543;(statearr_26546[(7)] = inst_26503);
(statearr_26546[(8)] = inst_26504);
return statearr_26546;
})();var statearr_26547_26575 = state_26543__$1;(statearr_26547_26575[(2)] = null);
(statearr_26547_26575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (4)))
{var inst_26507 = (state_26543[(9)]);var inst_26507__$1 = (state_26543[(2)]);var inst_26508 = (inst_26507__$1 == null);var inst_26509 = cljs.core.not.call(null,inst_26508);var state_26543__$1 = (function (){var statearr_26548 = state_26543;(statearr_26548[(9)] = inst_26507__$1);
return statearr_26548;
})();if(inst_26509)
{var statearr_26549_26576 = state_26543__$1;(statearr_26549_26576[(1)] = (5));
} else
{var statearr_26550_26577 = state_26543__$1;(statearr_26550_26577[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (15)))
{var inst_26533 = (state_26543[(2)]);var state_26543__$1 = state_26543;var statearr_26551_26578 = state_26543__$1;(statearr_26551_26578[(2)] = inst_26533);
(statearr_26551_26578[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (13)))
{var state_26543__$1 = state_26543;var statearr_26552_26579 = state_26543__$1;(statearr_26552_26579[(2)] = null);
(statearr_26552_26579[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (6)))
{var inst_26503 = (state_26543[(7)]);var inst_26528 = inst_26503.length;var inst_26529 = (inst_26528 > (0));var state_26543__$1 = state_26543;if(cljs.core.truth_(inst_26529))
{var statearr_26553_26580 = state_26543__$1;(statearr_26553_26580[(1)] = (12));
} else
{var statearr_26554_26581 = state_26543__$1;(statearr_26554_26581[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (3)))
{var inst_26541 = (state_26543[(2)]);var state_26543__$1 = state_26543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26543__$1,inst_26541);
} else
{if((state_val_26544 === (12)))
{var inst_26503 = (state_26543[(7)]);var inst_26531 = cljs.core.vec.call(null,inst_26503);var state_26543__$1 = state_26543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26543__$1,(15),out,inst_26531);
} else
{if((state_val_26544 === (2)))
{var state_26543__$1 = state_26543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26543__$1,(4),ch);
} else
{if((state_val_26544 === (11)))
{var inst_26511 = (state_26543[(10)]);var inst_26507 = (state_26543[(9)]);var inst_26521 = (state_26543[(2)]);var inst_26522 = [];var inst_26523 = inst_26522.push(inst_26507);var inst_26503 = inst_26522;var inst_26504 = inst_26511;var state_26543__$1 = (function (){var statearr_26555 = state_26543;(statearr_26555[(7)] = inst_26503);
(statearr_26555[(8)] = inst_26504);
(statearr_26555[(11)] = inst_26521);
(statearr_26555[(12)] = inst_26523);
return statearr_26555;
})();var statearr_26556_26582 = state_26543__$1;(statearr_26556_26582[(2)] = null);
(statearr_26556_26582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (9)))
{var inst_26503 = (state_26543[(7)]);var inst_26519 = cljs.core.vec.call(null,inst_26503);var state_26543__$1 = state_26543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26543__$1,(11),out,inst_26519);
} else
{if((state_val_26544 === (5)))
{var inst_26504 = (state_26543[(8)]);var inst_26511 = (state_26543[(10)]);var inst_26507 = (state_26543[(9)]);var inst_26511__$1 = f.call(null,inst_26507);var inst_26512 = cljs.core._EQ_.call(null,inst_26511__$1,inst_26504);var inst_26513 = cljs.core.keyword_identical_QMARK_.call(null,inst_26504,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26514 = (inst_26512) || (inst_26513);var state_26543__$1 = (function (){var statearr_26557 = state_26543;(statearr_26557[(10)] = inst_26511__$1);
return statearr_26557;
})();if(cljs.core.truth_(inst_26514))
{var statearr_26558_26583 = state_26543__$1;(statearr_26558_26583[(1)] = (8));
} else
{var statearr_26559_26584 = state_26543__$1;(statearr_26559_26584[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (14)))
{var inst_26536 = (state_26543[(2)]);var inst_26537 = cljs.core.async.close_BANG_.call(null,out);var state_26543__$1 = (function (){var statearr_26561 = state_26543;(statearr_26561[(13)] = inst_26536);
return statearr_26561;
})();var statearr_26562_26585 = state_26543__$1;(statearr_26562_26585[(2)] = inst_26537);
(statearr_26562_26585[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (10)))
{var inst_26526 = (state_26543[(2)]);var state_26543__$1 = state_26543;var statearr_26563_26586 = state_26543__$1;(statearr_26563_26586[(2)] = inst_26526);
(statearr_26563_26586[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26544 === (8)))
{var inst_26503 = (state_26543[(7)]);var inst_26511 = (state_26543[(10)]);var inst_26507 = (state_26543[(9)]);var inst_26516 = inst_26503.push(inst_26507);var tmp26560 = inst_26503;var inst_26503__$1 = tmp26560;var inst_26504 = inst_26511;var state_26543__$1 = (function (){var statearr_26564 = state_26543;(statearr_26564[(7)] = inst_26503__$1);
(statearr_26564[(8)] = inst_26504);
(statearr_26564[(14)] = inst_26516);
return statearr_26564;
})();var statearr_26565_26587 = state_26543__$1;(statearr_26565_26587[(2)] = null);
(statearr_26565_26587[(1)] = (2));
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
});})(c__9125__auto___26573,out))
;return ((function (switch__9110__auto__,c__9125__auto___26573,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26569[(0)] = state_machine__9111__auto__);
(statearr_26569[(1)] = (1));
return statearr_26569;
});
var state_machine__9111__auto____1 = (function (state_26543){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26543);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26570){if((e26570 instanceof Object))
{var ex__9114__auto__ = e26570;var statearr_26571_26588 = state_26543;(statearr_26571_26588[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26570;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26589 = state_26543;
state_26543 = G__26589;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26543){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26573,out))
})();var state__9127__auto__ = (function (){var statearr_26572 = f__9126__auto__.call(null);(statearr_26572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26573);
return statearr_26572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26573,out))
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
