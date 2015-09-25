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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23522 = (function (f,fn_handler,meta23523){
this.f = f;
this.fn_handler = fn_handler;
this.meta23523 = meta23523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23522.cljs$lang$type = true;
cljs.core.async.t23522.cljs$lang$ctorStr = "cljs.core.async/t23522";
cljs.core.async.t23522.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23522");
});
cljs.core.async.t23522.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23524){var self__ = this;
var _23524__$1 = this;return self__.meta23523;
});
cljs.core.async.t23522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23524,meta23523__$1){var self__ = this;
var _23524__$1 = this;return (new cljs.core.async.t23522(self__.f,self__.fn_handler,meta23523__$1));
});
cljs.core.async.__GT_t23522 = (function __GT_t23522(f__$1,fn_handler__$1,meta23523){return (new cljs.core.async.t23522(f__$1,fn_handler__$1,meta23523));
});
}
return (new cljs.core.async.t23522(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23526 = buff;if(G__23526)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23526.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23526.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23526);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23526);
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
{var val_23527 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23527);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23527,ret){
return (function (){return fn1.call(null,val_23527);
});})(val_23527,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23528 = n;var x_23529 = (0);while(true){
if((x_23529 < n__4508__auto___23528))
{(a[x_23529] = (0));
{
var G__23530 = (x_23529 + (1));
x_23529 = G__23530;
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
var G__23531 = (i + (1));
i = G__23531;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23535 = (function (flag,alt_flag,meta23536){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23536 = meta23536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23535.cljs$lang$type = true;
cljs.core.async.t23535.cljs$lang$ctorStr = "cljs.core.async/t23535";
cljs.core.async.t23535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23535");
});})(flag))
;
cljs.core.async.t23535.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23537){var self__ = this;
var _23537__$1 = this;return self__.meta23536;
});})(flag))
;
cljs.core.async.t23535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23537,meta23536__$1){var self__ = this;
var _23537__$1 = this;return (new cljs.core.async.t23535(self__.flag,self__.alt_flag,meta23536__$1));
});})(flag))
;
cljs.core.async.__GT_t23535 = ((function (flag){
return (function __GT_t23535(flag__$1,alt_flag__$1,meta23536){return (new cljs.core.async.t23535(flag__$1,alt_flag__$1,meta23536));
});})(flag))
;
}
return (new cljs.core.async.t23535(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23541 = (function (cb,flag,alt_handler,meta23542){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23542 = meta23542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23541.cljs$lang$type = true;
cljs.core.async.t23541.cljs$lang$ctorStr = "cljs.core.async/t23541";
cljs.core.async.t23541.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23541");
});
cljs.core.async.t23541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23543){var self__ = this;
var _23543__$1 = this;return self__.meta23542;
});
cljs.core.async.t23541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23543,meta23542__$1){var self__ = this;
var _23543__$1 = this;return (new cljs.core.async.t23541(self__.cb,self__.flag,self__.alt_handler,meta23542__$1));
});
cljs.core.async.__GT_t23541 = (function __GT_t23541(cb__$1,flag__$1,alt_handler__$1,meta23542){return (new cljs.core.async.t23541(cb__$1,flag__$1,alt_handler__$1,meta23542));
});
}
return (new cljs.core.async.t23541(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23544_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23544_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23545_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23545_SHARP_,port], null));
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
var G__23546 = (i + (1));
i = G__23546;
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
var alts_BANG___delegate = function (ports,p__23547){var map__23549 = p__23547;var map__23549__$1 = ((cljs.core.seq_QMARK_.call(null,map__23549))?cljs.core.apply.call(null,cljs.core.hash_map,map__23549):map__23549);var opts = map__23549__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23547 = null;if (arguments.length > 1) {
  p__23547 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23547);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23550){
var ports = cljs.core.first(arglist__23550);
var p__23547 = cljs.core.rest(arglist__23550);
return alts_BANG___delegate(ports,p__23547);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23645 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23645){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23645){
return (function (state_23621){var state_val_23622 = (state_23621[(1)]);if((state_val_23622 === (7)))
{var inst_23617 = (state_23621[(2)]);var state_23621__$1 = state_23621;var statearr_23623_23646 = state_23621__$1;(statearr_23623_23646[(2)] = inst_23617);
(statearr_23623_23646[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (1)))
{var state_23621__$1 = state_23621;var statearr_23624_23647 = state_23621__$1;(statearr_23624_23647[(2)] = null);
(statearr_23624_23647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (4)))
{var inst_23600 = (state_23621[(7)]);var inst_23600__$1 = (state_23621[(2)]);var inst_23601 = (inst_23600__$1 == null);var state_23621__$1 = (function (){var statearr_23625 = state_23621;(statearr_23625[(7)] = inst_23600__$1);
return statearr_23625;
})();if(cljs.core.truth_(inst_23601))
{var statearr_23626_23648 = state_23621__$1;(statearr_23626_23648[(1)] = (5));
} else
{var statearr_23627_23649 = state_23621__$1;(statearr_23627_23649[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (13)))
{var state_23621__$1 = state_23621;var statearr_23628_23650 = state_23621__$1;(statearr_23628_23650[(2)] = null);
(statearr_23628_23650[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (6)))
{var inst_23600 = (state_23621[(7)]);var state_23621__$1 = state_23621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,(11),to,inst_23600);
} else
{if((state_val_23622 === (3)))
{var inst_23619 = (state_23621[(2)]);var state_23621__$1 = state_23621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23621__$1,inst_23619);
} else
{if((state_val_23622 === (12)))
{var state_23621__$1 = state_23621;var statearr_23629_23651 = state_23621__$1;(statearr_23629_23651[(2)] = null);
(statearr_23629_23651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (2)))
{var state_23621__$1 = state_23621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23621__$1,(4),from);
} else
{if((state_val_23622 === (11)))
{var inst_23610 = (state_23621[(2)]);var state_23621__$1 = state_23621;if(cljs.core.truth_(inst_23610))
{var statearr_23630_23652 = state_23621__$1;(statearr_23630_23652[(1)] = (12));
} else
{var statearr_23631_23653 = state_23621__$1;(statearr_23631_23653[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (9)))
{var state_23621__$1 = state_23621;var statearr_23632_23654 = state_23621__$1;(statearr_23632_23654[(2)] = null);
(statearr_23632_23654[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (5)))
{var state_23621__$1 = state_23621;if(cljs.core.truth_(close_QMARK_))
{var statearr_23633_23655 = state_23621__$1;(statearr_23633_23655[(1)] = (8));
} else
{var statearr_23634_23656 = state_23621__$1;(statearr_23634_23656[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (14)))
{var inst_23615 = (state_23621[(2)]);var state_23621__$1 = state_23621;var statearr_23635_23657 = state_23621__$1;(statearr_23635_23657[(2)] = inst_23615);
(statearr_23635_23657[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (10)))
{var inst_23607 = (state_23621[(2)]);var state_23621__$1 = state_23621;var statearr_23636_23658 = state_23621__$1;(statearr_23636_23658[(2)] = inst_23607);
(statearr_23636_23658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23622 === (8)))
{var inst_23604 = cljs.core.async.close_BANG_.call(null,to);var state_23621__$1 = state_23621;var statearr_23637_23659 = state_23621__$1;(statearr_23637_23659[(2)] = inst_23604);
(statearr_23637_23659[(1)] = (10));
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
});})(c__9125__auto___23645))
;return ((function (switch__9110__auto__,c__9125__auto___23645){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23641 = [null,null,null,null,null,null,null,null];(statearr_23641[(0)] = state_machine__9111__auto__);
(statearr_23641[(1)] = (1));
return statearr_23641;
});
var state_machine__9111__auto____1 = (function (state_23621){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23621);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23642){if((e23642 instanceof Object))
{var ex__9114__auto__ = e23642;var statearr_23643_23660 = state_23621;(statearr_23643_23660[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23642;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23661 = state_23621;
state_23621 = G__23661;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23621){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23645))
})();var state__9127__auto__ = (function (){var statearr_23644 = f__9126__auto__.call(null);(statearr_23644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23645);
return statearr_23644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23645))
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
return (function (p__23845){var vec__23846 = p__23845;var v = cljs.core.nth.call(null,vec__23846,(0),null);var p = cljs.core.nth.call(null,vec__23846,(1),null);var job = vec__23846;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___24028 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24028,res,vec__23846,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24028,res,vec__23846,v,p,job,jobs,results){
return (function (state_23851){var state_val_23852 = (state_23851[(1)]);if((state_val_23852 === (2)))
{var inst_23848 = (state_23851[(2)]);var inst_23849 = cljs.core.async.close_BANG_.call(null,res);var state_23851__$1 = (function (){var statearr_23853 = state_23851;(statearr_23853[(7)] = inst_23848);
return statearr_23853;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23851__$1,inst_23849);
} else
{if((state_val_23852 === (1)))
{var state_23851__$1 = state_23851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23851__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___24028,res,vec__23846,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___24028,res,vec__23846,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23857 = [null,null,null,null,null,null,null,null];(statearr_23857[(0)] = state_machine__9111__auto__);
(statearr_23857[(1)] = (1));
return statearr_23857;
});
var state_machine__9111__auto____1 = (function (state_23851){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23851);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23858){if((e23858 instanceof Object))
{var ex__9114__auto__ = e23858;var statearr_23859_24029 = state_23851;(statearr_23859_24029[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23858;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24030 = state_23851;
state_23851 = G__24030;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23851){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24028,res,vec__23846,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23860 = f__9126__auto__.call(null);(statearr_23860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24028);
return statearr_23860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24028,res,vec__23846,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23861){var vec__23862 = p__23861;var v = cljs.core.nth.call(null,vec__23862,(0),null);var p = cljs.core.nth.call(null,vec__23862,(1),null);var job = vec__23862;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24031 = n;var __24032 = (0);while(true){
if((__24032 < n__4508__auto___24031))
{var G__23863_24033 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23863_24033) {
case "async":
var c__9125__auto___24035 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24032,c__9125__auto___24035,G__23863_24033,n__4508__auto___24031,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24032,c__9125__auto___24035,G__23863_24033,n__4508__auto___24031,jobs,results,process,async){
return (function (state_23876){var state_val_23877 = (state_23876[(1)]);if((state_val_23877 === (7)))
{var inst_23872 = (state_23876[(2)]);var state_23876__$1 = state_23876;var statearr_23878_24036 = state_23876__$1;(statearr_23878_24036[(2)] = inst_23872);
(statearr_23878_24036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23877 === (6)))
{var state_23876__$1 = state_23876;var statearr_23879_24037 = state_23876__$1;(statearr_23879_24037[(2)] = null);
(statearr_23879_24037[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23877 === (5)))
{var state_23876__$1 = state_23876;var statearr_23880_24038 = state_23876__$1;(statearr_23880_24038[(2)] = null);
(statearr_23880_24038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23877 === (4)))
{var inst_23866 = (state_23876[(2)]);var inst_23867 = async.call(null,inst_23866);var state_23876__$1 = state_23876;if(cljs.core.truth_(inst_23867))
{var statearr_23881_24039 = state_23876__$1;(statearr_23881_24039[(1)] = (5));
} else
{var statearr_23882_24040 = state_23876__$1;(statearr_23882_24040[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23877 === (3)))
{var inst_23874 = (state_23876[(2)]);var state_23876__$1 = state_23876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23876__$1,inst_23874);
} else
{if((state_val_23877 === (2)))
{var state_23876__$1 = state_23876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23876__$1,(4),jobs);
} else
{if((state_val_23877 === (1)))
{var state_23876__$1 = state_23876;var statearr_23883_24041 = state_23876__$1;(statearr_23883_24041[(2)] = null);
(statearr_23883_24041[(1)] = (2));
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
});})(__24032,c__9125__auto___24035,G__23863_24033,n__4508__auto___24031,jobs,results,process,async))
;return ((function (__24032,switch__9110__auto__,c__9125__auto___24035,G__23863_24033,n__4508__auto___24031,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23887 = [null,null,null,null,null,null,null];(statearr_23887[(0)] = state_machine__9111__auto__);
(statearr_23887[(1)] = (1));
return statearr_23887;
});
var state_machine__9111__auto____1 = (function (state_23876){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23876);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23888){if((e23888 instanceof Object))
{var ex__9114__auto__ = e23888;var statearr_23889_24042 = state_23876;(statearr_23889_24042[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23888;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24043 = state_23876;
state_23876 = G__24043;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23876){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24032,switch__9110__auto__,c__9125__auto___24035,G__23863_24033,n__4508__auto___24031,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23890 = f__9126__auto__.call(null);(statearr_23890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24035);
return statearr_23890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24032,c__9125__auto___24035,G__23863_24033,n__4508__auto___24031,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24032,c__9125__auto___24044,G__23863_24033,n__4508__auto___24031,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24032,c__9125__auto___24044,G__23863_24033,n__4508__auto___24031,jobs,results,process,async){
return (function (state_23903){var state_val_23904 = (state_23903[(1)]);if((state_val_23904 === (7)))
{var inst_23899 = (state_23903[(2)]);var state_23903__$1 = state_23903;var statearr_23905_24045 = state_23903__$1;(statearr_23905_24045[(2)] = inst_23899);
(statearr_23905_24045[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23904 === (6)))
{var state_23903__$1 = state_23903;var statearr_23906_24046 = state_23903__$1;(statearr_23906_24046[(2)] = null);
(statearr_23906_24046[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23904 === (5)))
{var state_23903__$1 = state_23903;var statearr_23907_24047 = state_23903__$1;(statearr_23907_24047[(2)] = null);
(statearr_23907_24047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23904 === (4)))
{var inst_23893 = (state_23903[(2)]);var inst_23894 = process.call(null,inst_23893);var state_23903__$1 = state_23903;if(cljs.core.truth_(inst_23894))
{var statearr_23908_24048 = state_23903__$1;(statearr_23908_24048[(1)] = (5));
} else
{var statearr_23909_24049 = state_23903__$1;(statearr_23909_24049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23904 === (3)))
{var inst_23901 = (state_23903[(2)]);var state_23903__$1 = state_23903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23903__$1,inst_23901);
} else
{if((state_val_23904 === (2)))
{var state_23903__$1 = state_23903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23903__$1,(4),jobs);
} else
{if((state_val_23904 === (1)))
{var state_23903__$1 = state_23903;var statearr_23910_24050 = state_23903__$1;(statearr_23910_24050[(2)] = null);
(statearr_23910_24050[(1)] = (2));
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
});})(__24032,c__9125__auto___24044,G__23863_24033,n__4508__auto___24031,jobs,results,process,async))
;return ((function (__24032,switch__9110__auto__,c__9125__auto___24044,G__23863_24033,n__4508__auto___24031,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23914 = [null,null,null,null,null,null,null];(statearr_23914[(0)] = state_machine__9111__auto__);
(statearr_23914[(1)] = (1));
return statearr_23914;
});
var state_machine__9111__auto____1 = (function (state_23903){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23903);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23915){if((e23915 instanceof Object))
{var ex__9114__auto__ = e23915;var statearr_23916_24051 = state_23903;(statearr_23916_24051[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23903);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23915;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24052 = state_23903;
state_23903 = G__24052;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23903){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24032,switch__9110__auto__,c__9125__auto___24044,G__23863_24033,n__4508__auto___24031,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23917 = f__9126__auto__.call(null);(statearr_23917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24044);
return statearr_23917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24032,c__9125__auto___24044,G__23863_24033,n__4508__auto___24031,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24053 = (__24032 + (1));
__24032 = G__24053;
continue;
}
} else
{}
break;
}
var c__9125__auto___24054 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24054,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24054,jobs,results,process,async){
return (function (state_23939){var state_val_23940 = (state_23939[(1)]);if((state_val_23940 === (9)))
{var inst_23932 = (state_23939[(2)]);var state_23939__$1 = (function (){var statearr_23941 = state_23939;(statearr_23941[(7)] = inst_23932);
return statearr_23941;
})();var statearr_23942_24055 = state_23939__$1;(statearr_23942_24055[(2)] = null);
(statearr_23942_24055[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (8)))
{var inst_23925 = (state_23939[(8)]);var inst_23930 = (state_23939[(2)]);var state_23939__$1 = (function (){var statearr_23943 = state_23939;(statearr_23943[(9)] = inst_23930);
return statearr_23943;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23939__$1,(9),results,inst_23925);
} else
{if((state_val_23940 === (7)))
{var inst_23935 = (state_23939[(2)]);var state_23939__$1 = state_23939;var statearr_23944_24056 = state_23939__$1;(statearr_23944_24056[(2)] = inst_23935);
(statearr_23944_24056[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (6)))
{var inst_23925 = (state_23939[(8)]);var inst_23920 = (state_23939[(10)]);var inst_23925__$1 = cljs.core.async.chan.call(null,(1));var inst_23926 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23927 = [inst_23920,inst_23925__$1];var inst_23928 = (new cljs.core.PersistentVector(null,2,(5),inst_23926,inst_23927,null));var state_23939__$1 = (function (){var statearr_23945 = state_23939;(statearr_23945[(8)] = inst_23925__$1);
return statearr_23945;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23939__$1,(8),jobs,inst_23928);
} else
{if((state_val_23940 === (5)))
{var inst_23923 = cljs.core.async.close_BANG_.call(null,jobs);var state_23939__$1 = state_23939;var statearr_23946_24057 = state_23939__$1;(statearr_23946_24057[(2)] = inst_23923);
(statearr_23946_24057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (4)))
{var inst_23920 = (state_23939[(10)]);var inst_23920__$1 = (state_23939[(2)]);var inst_23921 = (inst_23920__$1 == null);var state_23939__$1 = (function (){var statearr_23947 = state_23939;(statearr_23947[(10)] = inst_23920__$1);
return statearr_23947;
})();if(cljs.core.truth_(inst_23921))
{var statearr_23948_24058 = state_23939__$1;(statearr_23948_24058[(1)] = (5));
} else
{var statearr_23949_24059 = state_23939__$1;(statearr_23949_24059[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23940 === (3)))
{var inst_23937 = (state_23939[(2)]);var state_23939__$1 = state_23939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else
{if((state_val_23940 === (2)))
{var state_23939__$1 = state_23939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(4),from);
} else
{if((state_val_23940 === (1)))
{var state_23939__$1 = state_23939;var statearr_23950_24060 = state_23939__$1;(statearr_23950_24060[(2)] = null);
(statearr_23950_24060[(1)] = (2));
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
});})(c__9125__auto___24054,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24054,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23954 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23954[(0)] = state_machine__9111__auto__);
(statearr_23954[(1)] = (1));
return statearr_23954;
});
var state_machine__9111__auto____1 = (function (state_23939){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23939);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23955){if((e23955 instanceof Object))
{var ex__9114__auto__ = e23955;var statearr_23956_24061 = state_23939;(statearr_23956_24061[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24062 = state_23939;
state_23939 = G__24062;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24054,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23957 = f__9126__auto__.call(null);(statearr_23957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24054);
return statearr_23957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24054,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23995){var state_val_23996 = (state_23995[(1)]);if((state_val_23996 === (7)))
{var inst_23991 = (state_23995[(2)]);var state_23995__$1 = state_23995;var statearr_23997_24063 = state_23995__$1;(statearr_23997_24063[(2)] = inst_23991);
(statearr_23997_24063[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (20)))
{var state_23995__$1 = state_23995;var statearr_23998_24064 = state_23995__$1;(statearr_23998_24064[(2)] = null);
(statearr_23998_24064[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (1)))
{var state_23995__$1 = state_23995;var statearr_23999_24065 = state_23995__$1;(statearr_23999_24065[(2)] = null);
(statearr_23999_24065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (4)))
{var inst_23960 = (state_23995[(7)]);var inst_23960__$1 = (state_23995[(2)]);var inst_23961 = (inst_23960__$1 == null);var state_23995__$1 = (function (){var statearr_24000 = state_23995;(statearr_24000[(7)] = inst_23960__$1);
return statearr_24000;
})();if(cljs.core.truth_(inst_23961))
{var statearr_24001_24066 = state_23995__$1;(statearr_24001_24066[(1)] = (5));
} else
{var statearr_24002_24067 = state_23995__$1;(statearr_24002_24067[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (15)))
{var inst_23973 = (state_23995[(8)]);var state_23995__$1 = state_23995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23995__$1,(18),to,inst_23973);
} else
{if((state_val_23996 === (21)))
{var inst_23986 = (state_23995[(2)]);var state_23995__$1 = state_23995;var statearr_24003_24068 = state_23995__$1;(statearr_24003_24068[(2)] = inst_23986);
(statearr_24003_24068[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (13)))
{var inst_23988 = (state_23995[(2)]);var state_23995__$1 = (function (){var statearr_24004 = state_23995;(statearr_24004[(9)] = inst_23988);
return statearr_24004;
})();var statearr_24005_24069 = state_23995__$1;(statearr_24005_24069[(2)] = null);
(statearr_24005_24069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (6)))
{var inst_23960 = (state_23995[(7)]);var state_23995__$1 = state_23995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23995__$1,(11),inst_23960);
} else
{if((state_val_23996 === (17)))
{var inst_23981 = (state_23995[(2)]);var state_23995__$1 = state_23995;if(cljs.core.truth_(inst_23981))
{var statearr_24006_24070 = state_23995__$1;(statearr_24006_24070[(1)] = (19));
} else
{var statearr_24007_24071 = state_23995__$1;(statearr_24007_24071[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (3)))
{var inst_23993 = (state_23995[(2)]);var state_23995__$1 = state_23995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23995__$1,inst_23993);
} else
{if((state_val_23996 === (12)))
{var inst_23970 = (state_23995[(10)]);var state_23995__$1 = state_23995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23995__$1,(14),inst_23970);
} else
{if((state_val_23996 === (2)))
{var state_23995__$1 = state_23995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23995__$1,(4),results);
} else
{if((state_val_23996 === (19)))
{var state_23995__$1 = state_23995;var statearr_24008_24072 = state_23995__$1;(statearr_24008_24072[(2)] = null);
(statearr_24008_24072[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (11)))
{var inst_23970 = (state_23995[(2)]);var state_23995__$1 = (function (){var statearr_24009 = state_23995;(statearr_24009[(10)] = inst_23970);
return statearr_24009;
})();var statearr_24010_24073 = state_23995__$1;(statearr_24010_24073[(2)] = null);
(statearr_24010_24073[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (9)))
{var state_23995__$1 = state_23995;var statearr_24011_24074 = state_23995__$1;(statearr_24011_24074[(2)] = null);
(statearr_24011_24074[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (5)))
{var state_23995__$1 = state_23995;if(cljs.core.truth_(close_QMARK_))
{var statearr_24012_24075 = state_23995__$1;(statearr_24012_24075[(1)] = (8));
} else
{var statearr_24013_24076 = state_23995__$1;(statearr_24013_24076[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (14)))
{var inst_23975 = (state_23995[(11)]);var inst_23973 = (state_23995[(8)]);var inst_23973__$1 = (state_23995[(2)]);var inst_23974 = (inst_23973__$1 == null);var inst_23975__$1 = cljs.core.not.call(null,inst_23974);var state_23995__$1 = (function (){var statearr_24014 = state_23995;(statearr_24014[(11)] = inst_23975__$1);
(statearr_24014[(8)] = inst_23973__$1);
return statearr_24014;
})();if(inst_23975__$1)
{var statearr_24015_24077 = state_23995__$1;(statearr_24015_24077[(1)] = (15));
} else
{var statearr_24016_24078 = state_23995__$1;(statearr_24016_24078[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (16)))
{var inst_23975 = (state_23995[(11)]);var state_23995__$1 = state_23995;var statearr_24017_24079 = state_23995__$1;(statearr_24017_24079[(2)] = inst_23975);
(statearr_24017_24079[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (10)))
{var inst_23967 = (state_23995[(2)]);var state_23995__$1 = state_23995;var statearr_24018_24080 = state_23995__$1;(statearr_24018_24080[(2)] = inst_23967);
(statearr_24018_24080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (18)))
{var inst_23978 = (state_23995[(2)]);var state_23995__$1 = state_23995;var statearr_24019_24081 = state_23995__$1;(statearr_24019_24081[(2)] = inst_23978);
(statearr_24019_24081[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23996 === (8)))
{var inst_23964 = cljs.core.async.close_BANG_.call(null,to);var state_23995__$1 = state_23995;var statearr_24020_24082 = state_23995__$1;(statearr_24020_24082[(2)] = inst_23964);
(statearr_24020_24082[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_24024 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24024[(0)] = state_machine__9111__auto__);
(statearr_24024[(1)] = (1));
return statearr_24024;
});
var state_machine__9111__auto____1 = (function (state_23995){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23995);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24025){if((e24025 instanceof Object))
{var ex__9114__auto__ = e24025;var statearr_24026_24083 = state_23995;(statearr_24026_24083[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24025;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24084 = state_23995;
state_23995 = G__24084;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23995){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_24027 = f__9126__auto__.call(null);(statearr_24027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24027;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24185 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24185,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24185,tc,fc){
return (function (state_24160){var state_val_24161 = (state_24160[(1)]);if((state_val_24161 === (7)))
{var inst_24156 = (state_24160[(2)]);var state_24160__$1 = state_24160;var statearr_24162_24186 = state_24160__$1;(statearr_24162_24186[(2)] = inst_24156);
(statearr_24162_24186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (1)))
{var state_24160__$1 = state_24160;var statearr_24163_24187 = state_24160__$1;(statearr_24163_24187[(2)] = null);
(statearr_24163_24187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (4)))
{var inst_24137 = (state_24160[(7)]);var inst_24137__$1 = (state_24160[(2)]);var inst_24138 = (inst_24137__$1 == null);var state_24160__$1 = (function (){var statearr_24164 = state_24160;(statearr_24164[(7)] = inst_24137__$1);
return statearr_24164;
})();if(cljs.core.truth_(inst_24138))
{var statearr_24165_24188 = state_24160__$1;(statearr_24165_24188[(1)] = (5));
} else
{var statearr_24166_24189 = state_24160__$1;(statearr_24166_24189[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (13)))
{var state_24160__$1 = state_24160;var statearr_24167_24190 = state_24160__$1;(statearr_24167_24190[(2)] = null);
(statearr_24167_24190[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (6)))
{var inst_24137 = (state_24160[(7)]);var inst_24143 = p.call(null,inst_24137);var state_24160__$1 = state_24160;if(cljs.core.truth_(inst_24143))
{var statearr_24168_24191 = state_24160__$1;(statearr_24168_24191[(1)] = (9));
} else
{var statearr_24169_24192 = state_24160__$1;(statearr_24169_24192[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (3)))
{var inst_24158 = (state_24160[(2)]);var state_24160__$1 = state_24160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24160__$1,inst_24158);
} else
{if((state_val_24161 === (12)))
{var state_24160__$1 = state_24160;var statearr_24170_24193 = state_24160__$1;(statearr_24170_24193[(2)] = null);
(statearr_24170_24193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (2)))
{var state_24160__$1 = state_24160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24160__$1,(4),ch);
} else
{if((state_val_24161 === (11)))
{var inst_24137 = (state_24160[(7)]);var inst_24147 = (state_24160[(2)]);var state_24160__$1 = state_24160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24160__$1,(8),inst_24147,inst_24137);
} else
{if((state_val_24161 === (9)))
{var state_24160__$1 = state_24160;var statearr_24171_24194 = state_24160__$1;(statearr_24171_24194[(2)] = tc);
(statearr_24171_24194[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (5)))
{var inst_24140 = cljs.core.async.close_BANG_.call(null,tc);var inst_24141 = cljs.core.async.close_BANG_.call(null,fc);var state_24160__$1 = (function (){var statearr_24172 = state_24160;(statearr_24172[(8)] = inst_24140);
return statearr_24172;
})();var statearr_24173_24195 = state_24160__$1;(statearr_24173_24195[(2)] = inst_24141);
(statearr_24173_24195[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (14)))
{var inst_24154 = (state_24160[(2)]);var state_24160__$1 = state_24160;var statearr_24174_24196 = state_24160__$1;(statearr_24174_24196[(2)] = inst_24154);
(statearr_24174_24196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (10)))
{var state_24160__$1 = state_24160;var statearr_24175_24197 = state_24160__$1;(statearr_24175_24197[(2)] = fc);
(statearr_24175_24197[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24161 === (8)))
{var inst_24149 = (state_24160[(2)]);var state_24160__$1 = state_24160;if(cljs.core.truth_(inst_24149))
{var statearr_24176_24198 = state_24160__$1;(statearr_24176_24198[(1)] = (12));
} else
{var statearr_24177_24199 = state_24160__$1;(statearr_24177_24199[(1)] = (13));
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
});})(c__9125__auto___24185,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24185,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24181 = [null,null,null,null,null,null,null,null,null];(statearr_24181[(0)] = state_machine__9111__auto__);
(statearr_24181[(1)] = (1));
return statearr_24181;
});
var state_machine__9111__auto____1 = (function (state_24160){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24160);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24182){if((e24182 instanceof Object))
{var ex__9114__auto__ = e24182;var statearr_24183_24200 = state_24160;(statearr_24183_24200[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24182;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24201 = state_24160;
state_24160 = G__24201;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24160){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24185,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24184 = f__9126__auto__.call(null);(statearr_24184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24185);
return statearr_24184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24185,tc,fc))
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
return (function (state_24248){var state_val_24249 = (state_24248[(1)]);if((state_val_24249 === (7)))
{var inst_24244 = (state_24248[(2)]);var state_24248__$1 = state_24248;var statearr_24250_24266 = state_24248__$1;(statearr_24250_24266[(2)] = inst_24244);
(statearr_24250_24266[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24249 === (6)))
{var inst_24237 = (state_24248[(7)]);var inst_24234 = (state_24248[(8)]);var inst_24241 = f.call(null,inst_24234,inst_24237);var inst_24234__$1 = inst_24241;var state_24248__$1 = (function (){var statearr_24251 = state_24248;(statearr_24251[(8)] = inst_24234__$1);
return statearr_24251;
})();var statearr_24252_24267 = state_24248__$1;(statearr_24252_24267[(2)] = null);
(statearr_24252_24267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24249 === (5)))
{var inst_24234 = (state_24248[(8)]);var state_24248__$1 = state_24248;var statearr_24253_24268 = state_24248__$1;(statearr_24253_24268[(2)] = inst_24234);
(statearr_24253_24268[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24249 === (4)))
{var inst_24237 = (state_24248[(7)]);var inst_24237__$1 = (state_24248[(2)]);var inst_24238 = (inst_24237__$1 == null);var state_24248__$1 = (function (){var statearr_24254 = state_24248;(statearr_24254[(7)] = inst_24237__$1);
return statearr_24254;
})();if(cljs.core.truth_(inst_24238))
{var statearr_24255_24269 = state_24248__$1;(statearr_24255_24269[(1)] = (5));
} else
{var statearr_24256_24270 = state_24248__$1;(statearr_24256_24270[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24249 === (3)))
{var inst_24246 = (state_24248[(2)]);var state_24248__$1 = state_24248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24248__$1,inst_24246);
} else
{if((state_val_24249 === (2)))
{var state_24248__$1 = state_24248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(4),ch);
} else
{if((state_val_24249 === (1)))
{var inst_24234 = init;var state_24248__$1 = (function (){var statearr_24257 = state_24248;(statearr_24257[(8)] = inst_24234);
return statearr_24257;
})();var statearr_24258_24271 = state_24248__$1;(statearr_24258_24271[(2)] = null);
(statearr_24258_24271[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24262 = [null,null,null,null,null,null,null,null,null];(statearr_24262[(0)] = state_machine__9111__auto__);
(statearr_24262[(1)] = (1));
return statearr_24262;
});
var state_machine__9111__auto____1 = (function (state_24248){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24248);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24263){if((e24263 instanceof Object))
{var ex__9114__auto__ = e24263;var statearr_24264_24272 = state_24248;(statearr_24264_24272[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24263;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24273 = state_24248;
state_24248 = G__24273;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24248){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24265 = f__9126__auto__.call(null);(statearr_24265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24265;
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
return (function (state_24347){var state_val_24348 = (state_24347[(1)]);if((state_val_24348 === (7)))
{var inst_24329 = (state_24347[(2)]);var state_24347__$1 = state_24347;var statearr_24349_24372 = state_24347__$1;(statearr_24349_24372[(2)] = inst_24329);
(statearr_24349_24372[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (1)))
{var inst_24323 = cljs.core.seq.call(null,coll);var inst_24324 = inst_24323;var state_24347__$1 = (function (){var statearr_24350 = state_24347;(statearr_24350[(7)] = inst_24324);
return statearr_24350;
})();var statearr_24351_24373 = state_24347__$1;(statearr_24351_24373[(2)] = null);
(statearr_24351_24373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (4)))
{var inst_24324 = (state_24347[(7)]);var inst_24327 = cljs.core.first.call(null,inst_24324);var state_24347__$1 = state_24347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24347__$1,(7),ch,inst_24327);
} else
{if((state_val_24348 === (13)))
{var inst_24341 = (state_24347[(2)]);var state_24347__$1 = state_24347;var statearr_24352_24374 = state_24347__$1;(statearr_24352_24374[(2)] = inst_24341);
(statearr_24352_24374[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (6)))
{var inst_24332 = (state_24347[(2)]);var state_24347__$1 = state_24347;if(cljs.core.truth_(inst_24332))
{var statearr_24353_24375 = state_24347__$1;(statearr_24353_24375[(1)] = (8));
} else
{var statearr_24354_24376 = state_24347__$1;(statearr_24354_24376[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (3)))
{var inst_24345 = (state_24347[(2)]);var state_24347__$1 = state_24347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24347__$1,inst_24345);
} else
{if((state_val_24348 === (12)))
{var state_24347__$1 = state_24347;var statearr_24355_24377 = state_24347__$1;(statearr_24355_24377[(2)] = null);
(statearr_24355_24377[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (2)))
{var inst_24324 = (state_24347[(7)]);var state_24347__$1 = state_24347;if(cljs.core.truth_(inst_24324))
{var statearr_24356_24378 = state_24347__$1;(statearr_24356_24378[(1)] = (4));
} else
{var statearr_24357_24379 = state_24347__$1;(statearr_24357_24379[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (11)))
{var inst_24338 = cljs.core.async.close_BANG_.call(null,ch);var state_24347__$1 = state_24347;var statearr_24358_24380 = state_24347__$1;(statearr_24358_24380[(2)] = inst_24338);
(statearr_24358_24380[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (9)))
{var state_24347__$1 = state_24347;if(cljs.core.truth_(close_QMARK_))
{var statearr_24359_24381 = state_24347__$1;(statearr_24359_24381[(1)] = (11));
} else
{var statearr_24360_24382 = state_24347__$1;(statearr_24360_24382[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (5)))
{var inst_24324 = (state_24347[(7)]);var state_24347__$1 = state_24347;var statearr_24361_24383 = state_24347__$1;(statearr_24361_24383[(2)] = inst_24324);
(statearr_24361_24383[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (10)))
{var inst_24343 = (state_24347[(2)]);var state_24347__$1 = state_24347;var statearr_24362_24384 = state_24347__$1;(statearr_24362_24384[(2)] = inst_24343);
(statearr_24362_24384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24348 === (8)))
{var inst_24324 = (state_24347[(7)]);var inst_24334 = cljs.core.next.call(null,inst_24324);var inst_24324__$1 = inst_24334;var state_24347__$1 = (function (){var statearr_24363 = state_24347;(statearr_24363[(7)] = inst_24324__$1);
return statearr_24363;
})();var statearr_24364_24385 = state_24347__$1;(statearr_24364_24385[(2)] = null);
(statearr_24364_24385[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24368 = [null,null,null,null,null,null,null,null];(statearr_24368[(0)] = state_machine__9111__auto__);
(statearr_24368[(1)] = (1));
return statearr_24368;
});
var state_machine__9111__auto____1 = (function (state_24347){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24347);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24369){if((e24369 instanceof Object))
{var ex__9114__auto__ = e24369;var statearr_24370_24386 = state_24347;(statearr_24370_24386[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24387 = state_24347;
state_24347 = G__24387;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24347){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24371 = f__9126__auto__.call(null);(statearr_24371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24371;
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
cljs.core.async.Mux = (function (){var obj24389 = {};return obj24389;
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
cljs.core.async.Mult = (function (){var obj24391 = {};return obj24391;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24613 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24613 = (function (cs,ch,mult,meta24614){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24614 = meta24614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24613.cljs$lang$type = true;
cljs.core.async.t24613.cljs$lang$ctorStr = "cljs.core.async/t24613";
cljs.core.async.t24613.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24613");
});})(cs))
;
cljs.core.async.t24613.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24613.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24613.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24613.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24613.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24615){var self__ = this;
var _24615__$1 = this;return self__.meta24614;
});})(cs))
;
cljs.core.async.t24613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24615,meta24614__$1){var self__ = this;
var _24615__$1 = this;return (new cljs.core.async.t24613(self__.cs,self__.ch,self__.mult,meta24614__$1));
});})(cs))
;
cljs.core.async.__GT_t24613 = ((function (cs){
return (function __GT_t24613(cs__$1,ch__$1,mult__$1,meta24614){return (new cljs.core.async.t24613(cs__$1,ch__$1,mult__$1,meta24614));
});})(cs))
;
}
return (new cljs.core.async.t24613(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24834,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24834,cs,m,dchan,dctr,done){
return (function (state_24746){var state_val_24747 = (state_24746[(1)]);if((state_val_24747 === (7)))
{var inst_24742 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24748_24835 = state_24746__$1;(statearr_24748_24835[(2)] = inst_24742);
(statearr_24748_24835[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (20)))
{var inst_24647 = (state_24746[(7)]);var inst_24657 = cljs.core.first.call(null,inst_24647);var inst_24658 = cljs.core.nth.call(null,inst_24657,(0),null);var inst_24659 = cljs.core.nth.call(null,inst_24657,(1),null);var state_24746__$1 = (function (){var statearr_24749 = state_24746;(statearr_24749[(8)] = inst_24658);
return statearr_24749;
})();if(cljs.core.truth_(inst_24659))
{var statearr_24750_24836 = state_24746__$1;(statearr_24750_24836[(1)] = (22));
} else
{var statearr_24751_24837 = state_24746__$1;(statearr_24751_24837[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (27)))
{var inst_24689 = (state_24746[(9)]);var inst_24687 = (state_24746[(10)]);var inst_24618 = (state_24746[(11)]);var inst_24694 = (state_24746[(12)]);var inst_24694__$1 = cljs.core._nth.call(null,inst_24687,inst_24689);var inst_24695 = cljs.core.async.put_BANG_.call(null,inst_24694__$1,inst_24618,done);var state_24746__$1 = (function (){var statearr_24752 = state_24746;(statearr_24752[(12)] = inst_24694__$1);
return statearr_24752;
})();if(cljs.core.truth_(inst_24695))
{var statearr_24753_24838 = state_24746__$1;(statearr_24753_24838[(1)] = (30));
} else
{var statearr_24754_24839 = state_24746__$1;(statearr_24754_24839[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (1)))
{var state_24746__$1 = state_24746;var statearr_24755_24840 = state_24746__$1;(statearr_24755_24840[(2)] = null);
(statearr_24755_24840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (24)))
{var inst_24647 = (state_24746[(7)]);var inst_24664 = (state_24746[(2)]);var inst_24665 = cljs.core.next.call(null,inst_24647);var inst_24627 = inst_24665;var inst_24628 = null;var inst_24629 = (0);var inst_24630 = (0);var state_24746__$1 = (function (){var statearr_24756 = state_24746;(statearr_24756[(13)] = inst_24628);
(statearr_24756[(14)] = inst_24630);
(statearr_24756[(15)] = inst_24627);
(statearr_24756[(16)] = inst_24664);
(statearr_24756[(17)] = inst_24629);
return statearr_24756;
})();var statearr_24757_24841 = state_24746__$1;(statearr_24757_24841[(2)] = null);
(statearr_24757_24841[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (39)))
{var state_24746__$1 = state_24746;var statearr_24761_24842 = state_24746__$1;(statearr_24761_24842[(2)] = null);
(statearr_24761_24842[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (4)))
{var inst_24618 = (state_24746[(11)]);var inst_24618__$1 = (state_24746[(2)]);var inst_24619 = (inst_24618__$1 == null);var state_24746__$1 = (function (){var statearr_24762 = state_24746;(statearr_24762[(11)] = inst_24618__$1);
return statearr_24762;
})();if(cljs.core.truth_(inst_24619))
{var statearr_24763_24843 = state_24746__$1;(statearr_24763_24843[(1)] = (5));
} else
{var statearr_24764_24844 = state_24746__$1;(statearr_24764_24844[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (15)))
{var inst_24628 = (state_24746[(13)]);var inst_24630 = (state_24746[(14)]);var inst_24627 = (state_24746[(15)]);var inst_24629 = (state_24746[(17)]);var inst_24643 = (state_24746[(2)]);var inst_24644 = (inst_24630 + (1));var tmp24758 = inst_24628;var tmp24759 = inst_24627;var tmp24760 = inst_24629;var inst_24627__$1 = tmp24759;var inst_24628__$1 = tmp24758;var inst_24629__$1 = tmp24760;var inst_24630__$1 = inst_24644;var state_24746__$1 = (function (){var statearr_24765 = state_24746;(statearr_24765[(13)] = inst_24628__$1);
(statearr_24765[(14)] = inst_24630__$1);
(statearr_24765[(15)] = inst_24627__$1);
(statearr_24765[(17)] = inst_24629__$1);
(statearr_24765[(18)] = inst_24643);
return statearr_24765;
})();var statearr_24766_24845 = state_24746__$1;(statearr_24766_24845[(2)] = null);
(statearr_24766_24845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (21)))
{var inst_24668 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24770_24846 = state_24746__$1;(statearr_24770_24846[(2)] = inst_24668);
(statearr_24770_24846[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (31)))
{var inst_24694 = (state_24746[(12)]);var inst_24698 = done.call(null,null);var inst_24699 = cljs.core.async.untap_STAR_.call(null,m,inst_24694);var state_24746__$1 = (function (){var statearr_24771 = state_24746;(statearr_24771[(19)] = inst_24698);
return statearr_24771;
})();var statearr_24772_24847 = state_24746__$1;(statearr_24772_24847[(2)] = inst_24699);
(statearr_24772_24847[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (32)))
{var inst_24689 = (state_24746[(9)]);var inst_24687 = (state_24746[(10)]);var inst_24686 = (state_24746[(20)]);var inst_24688 = (state_24746[(21)]);var inst_24701 = (state_24746[(2)]);var inst_24702 = (inst_24689 + (1));var tmp24767 = inst_24687;var tmp24768 = inst_24686;var tmp24769 = inst_24688;var inst_24686__$1 = tmp24768;var inst_24687__$1 = tmp24767;var inst_24688__$1 = tmp24769;var inst_24689__$1 = inst_24702;var state_24746__$1 = (function (){var statearr_24773 = state_24746;(statearr_24773[(9)] = inst_24689__$1);
(statearr_24773[(10)] = inst_24687__$1);
(statearr_24773[(20)] = inst_24686__$1);
(statearr_24773[(22)] = inst_24701);
(statearr_24773[(21)] = inst_24688__$1);
return statearr_24773;
})();var statearr_24774_24848 = state_24746__$1;(statearr_24774_24848[(2)] = null);
(statearr_24774_24848[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (40)))
{var inst_24714 = (state_24746[(23)]);var inst_24718 = done.call(null,null);var inst_24719 = cljs.core.async.untap_STAR_.call(null,m,inst_24714);var state_24746__$1 = (function (){var statearr_24775 = state_24746;(statearr_24775[(24)] = inst_24718);
return statearr_24775;
})();var statearr_24776_24849 = state_24746__$1;(statearr_24776_24849[(2)] = inst_24719);
(statearr_24776_24849[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (33)))
{var inst_24705 = (state_24746[(25)]);var inst_24707 = cljs.core.chunked_seq_QMARK_.call(null,inst_24705);var state_24746__$1 = state_24746;if(inst_24707)
{var statearr_24777_24850 = state_24746__$1;(statearr_24777_24850[(1)] = (36));
} else
{var statearr_24778_24851 = state_24746__$1;(statearr_24778_24851[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (13)))
{var inst_24637 = (state_24746[(26)]);var inst_24640 = cljs.core.async.close_BANG_.call(null,inst_24637);var state_24746__$1 = state_24746;var statearr_24779_24852 = state_24746__$1;(statearr_24779_24852[(2)] = inst_24640);
(statearr_24779_24852[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (22)))
{var inst_24658 = (state_24746[(8)]);var inst_24661 = cljs.core.async.close_BANG_.call(null,inst_24658);var state_24746__$1 = state_24746;var statearr_24780_24853 = state_24746__$1;(statearr_24780_24853[(2)] = inst_24661);
(statearr_24780_24853[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (36)))
{var inst_24705 = (state_24746[(25)]);var inst_24709 = cljs.core.chunk_first.call(null,inst_24705);var inst_24710 = cljs.core.chunk_rest.call(null,inst_24705);var inst_24711 = cljs.core.count.call(null,inst_24709);var inst_24686 = inst_24710;var inst_24687 = inst_24709;var inst_24688 = inst_24711;var inst_24689 = (0);var state_24746__$1 = (function (){var statearr_24781 = state_24746;(statearr_24781[(9)] = inst_24689);
(statearr_24781[(10)] = inst_24687);
(statearr_24781[(20)] = inst_24686);
(statearr_24781[(21)] = inst_24688);
return statearr_24781;
})();var statearr_24782_24854 = state_24746__$1;(statearr_24782_24854[(2)] = null);
(statearr_24782_24854[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (41)))
{var inst_24705 = (state_24746[(25)]);var inst_24721 = (state_24746[(2)]);var inst_24722 = cljs.core.next.call(null,inst_24705);var inst_24686 = inst_24722;var inst_24687 = null;var inst_24688 = (0);var inst_24689 = (0);var state_24746__$1 = (function (){var statearr_24783 = state_24746;(statearr_24783[(9)] = inst_24689);
(statearr_24783[(10)] = inst_24687);
(statearr_24783[(20)] = inst_24686);
(statearr_24783[(21)] = inst_24688);
(statearr_24783[(27)] = inst_24721);
return statearr_24783;
})();var statearr_24784_24855 = state_24746__$1;(statearr_24784_24855[(2)] = null);
(statearr_24784_24855[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (43)))
{var state_24746__$1 = state_24746;var statearr_24785_24856 = state_24746__$1;(statearr_24785_24856[(2)] = null);
(statearr_24785_24856[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (29)))
{var inst_24730 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24786_24857 = state_24746__$1;(statearr_24786_24857[(2)] = inst_24730);
(statearr_24786_24857[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (44)))
{var inst_24739 = (state_24746[(2)]);var state_24746__$1 = (function (){var statearr_24787 = state_24746;(statearr_24787[(28)] = inst_24739);
return statearr_24787;
})();var statearr_24788_24858 = state_24746__$1;(statearr_24788_24858[(2)] = null);
(statearr_24788_24858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (6)))
{var inst_24678 = (state_24746[(29)]);var inst_24677 = cljs.core.deref.call(null,cs);var inst_24678__$1 = cljs.core.keys.call(null,inst_24677);var inst_24679 = cljs.core.count.call(null,inst_24678__$1);var inst_24680 = cljs.core.reset_BANG_.call(null,dctr,inst_24679);var inst_24685 = cljs.core.seq.call(null,inst_24678__$1);var inst_24686 = inst_24685;var inst_24687 = null;var inst_24688 = (0);var inst_24689 = (0);var state_24746__$1 = (function (){var statearr_24789 = state_24746;(statearr_24789[(9)] = inst_24689);
(statearr_24789[(29)] = inst_24678__$1);
(statearr_24789[(10)] = inst_24687);
(statearr_24789[(20)] = inst_24686);
(statearr_24789[(21)] = inst_24688);
(statearr_24789[(30)] = inst_24680);
return statearr_24789;
})();var statearr_24790_24859 = state_24746__$1;(statearr_24790_24859[(2)] = null);
(statearr_24790_24859[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (28)))
{var inst_24686 = (state_24746[(20)]);var inst_24705 = (state_24746[(25)]);var inst_24705__$1 = cljs.core.seq.call(null,inst_24686);var state_24746__$1 = (function (){var statearr_24791 = state_24746;(statearr_24791[(25)] = inst_24705__$1);
return statearr_24791;
})();if(inst_24705__$1)
{var statearr_24792_24860 = state_24746__$1;(statearr_24792_24860[(1)] = (33));
} else
{var statearr_24793_24861 = state_24746__$1;(statearr_24793_24861[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (25)))
{var inst_24689 = (state_24746[(9)]);var inst_24688 = (state_24746[(21)]);var inst_24691 = (inst_24689 < inst_24688);var inst_24692 = inst_24691;var state_24746__$1 = state_24746;if(cljs.core.truth_(inst_24692))
{var statearr_24794_24862 = state_24746__$1;(statearr_24794_24862[(1)] = (27));
} else
{var statearr_24795_24863 = state_24746__$1;(statearr_24795_24863[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (34)))
{var state_24746__$1 = state_24746;var statearr_24796_24864 = state_24746__$1;(statearr_24796_24864[(2)] = null);
(statearr_24796_24864[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (17)))
{var state_24746__$1 = state_24746;var statearr_24797_24865 = state_24746__$1;(statearr_24797_24865[(2)] = null);
(statearr_24797_24865[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (3)))
{var inst_24744 = (state_24746[(2)]);var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24746__$1,inst_24744);
} else
{if((state_val_24747 === (12)))
{var inst_24673 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24798_24866 = state_24746__$1;(statearr_24798_24866[(2)] = inst_24673);
(statearr_24798_24866[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (2)))
{var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24746__$1,(4),ch);
} else
{if((state_val_24747 === (23)))
{var state_24746__$1 = state_24746;var statearr_24799_24867 = state_24746__$1;(statearr_24799_24867[(2)] = null);
(statearr_24799_24867[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (35)))
{var inst_24728 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24800_24868 = state_24746__$1;(statearr_24800_24868[(2)] = inst_24728);
(statearr_24800_24868[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (19)))
{var inst_24647 = (state_24746[(7)]);var inst_24651 = cljs.core.chunk_first.call(null,inst_24647);var inst_24652 = cljs.core.chunk_rest.call(null,inst_24647);var inst_24653 = cljs.core.count.call(null,inst_24651);var inst_24627 = inst_24652;var inst_24628 = inst_24651;var inst_24629 = inst_24653;var inst_24630 = (0);var state_24746__$1 = (function (){var statearr_24801 = state_24746;(statearr_24801[(13)] = inst_24628);
(statearr_24801[(14)] = inst_24630);
(statearr_24801[(15)] = inst_24627);
(statearr_24801[(17)] = inst_24629);
return statearr_24801;
})();var statearr_24802_24869 = state_24746__$1;(statearr_24802_24869[(2)] = null);
(statearr_24802_24869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (11)))
{var inst_24647 = (state_24746[(7)]);var inst_24627 = (state_24746[(15)]);var inst_24647__$1 = cljs.core.seq.call(null,inst_24627);var state_24746__$1 = (function (){var statearr_24803 = state_24746;(statearr_24803[(7)] = inst_24647__$1);
return statearr_24803;
})();if(inst_24647__$1)
{var statearr_24804_24870 = state_24746__$1;(statearr_24804_24870[(1)] = (16));
} else
{var statearr_24805_24871 = state_24746__$1;(statearr_24805_24871[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (9)))
{var inst_24675 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24806_24872 = state_24746__$1;(statearr_24806_24872[(2)] = inst_24675);
(statearr_24806_24872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (5)))
{var inst_24625 = cljs.core.deref.call(null,cs);var inst_24626 = cljs.core.seq.call(null,inst_24625);var inst_24627 = inst_24626;var inst_24628 = null;var inst_24629 = (0);var inst_24630 = (0);var state_24746__$1 = (function (){var statearr_24807 = state_24746;(statearr_24807[(13)] = inst_24628);
(statearr_24807[(14)] = inst_24630);
(statearr_24807[(15)] = inst_24627);
(statearr_24807[(17)] = inst_24629);
return statearr_24807;
})();var statearr_24808_24873 = state_24746__$1;(statearr_24808_24873[(2)] = null);
(statearr_24808_24873[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (14)))
{var state_24746__$1 = state_24746;var statearr_24809_24874 = state_24746__$1;(statearr_24809_24874[(2)] = null);
(statearr_24809_24874[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (45)))
{var inst_24736 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24810_24875 = state_24746__$1;(statearr_24810_24875[(2)] = inst_24736);
(statearr_24810_24875[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (26)))
{var inst_24678 = (state_24746[(29)]);var inst_24732 = (state_24746[(2)]);var inst_24733 = cljs.core.seq.call(null,inst_24678);var state_24746__$1 = (function (){var statearr_24811 = state_24746;(statearr_24811[(31)] = inst_24732);
return statearr_24811;
})();if(inst_24733)
{var statearr_24812_24876 = state_24746__$1;(statearr_24812_24876[(1)] = (42));
} else
{var statearr_24813_24877 = state_24746__$1;(statearr_24813_24877[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (16)))
{var inst_24647 = (state_24746[(7)]);var inst_24649 = cljs.core.chunked_seq_QMARK_.call(null,inst_24647);var state_24746__$1 = state_24746;if(inst_24649)
{var statearr_24814_24878 = state_24746__$1;(statearr_24814_24878[(1)] = (19));
} else
{var statearr_24815_24879 = state_24746__$1;(statearr_24815_24879[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (38)))
{var inst_24725 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24816_24880 = state_24746__$1;(statearr_24816_24880[(2)] = inst_24725);
(statearr_24816_24880[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (30)))
{var state_24746__$1 = state_24746;var statearr_24817_24881 = state_24746__$1;(statearr_24817_24881[(2)] = null);
(statearr_24817_24881[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (10)))
{var inst_24628 = (state_24746[(13)]);var inst_24630 = (state_24746[(14)]);var inst_24636 = cljs.core._nth.call(null,inst_24628,inst_24630);var inst_24637 = cljs.core.nth.call(null,inst_24636,(0),null);var inst_24638 = cljs.core.nth.call(null,inst_24636,(1),null);var state_24746__$1 = (function (){var statearr_24818 = state_24746;(statearr_24818[(26)] = inst_24637);
return statearr_24818;
})();if(cljs.core.truth_(inst_24638))
{var statearr_24819_24882 = state_24746__$1;(statearr_24819_24882[(1)] = (13));
} else
{var statearr_24820_24883 = state_24746__$1;(statearr_24820_24883[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (18)))
{var inst_24671 = (state_24746[(2)]);var state_24746__$1 = state_24746;var statearr_24821_24884 = state_24746__$1;(statearr_24821_24884[(2)] = inst_24671);
(statearr_24821_24884[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (42)))
{var state_24746__$1 = state_24746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24746__$1,(45),dchan);
} else
{if((state_val_24747 === (37)))
{var inst_24705 = (state_24746[(25)]);var inst_24618 = (state_24746[(11)]);var inst_24714 = (state_24746[(23)]);var inst_24714__$1 = cljs.core.first.call(null,inst_24705);var inst_24715 = cljs.core.async.put_BANG_.call(null,inst_24714__$1,inst_24618,done);var state_24746__$1 = (function (){var statearr_24822 = state_24746;(statearr_24822[(23)] = inst_24714__$1);
return statearr_24822;
})();if(cljs.core.truth_(inst_24715))
{var statearr_24823_24885 = state_24746__$1;(statearr_24823_24885[(1)] = (39));
} else
{var statearr_24824_24886 = state_24746__$1;(statearr_24824_24886[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24747 === (8)))
{var inst_24630 = (state_24746[(14)]);var inst_24629 = (state_24746[(17)]);var inst_24632 = (inst_24630 < inst_24629);var inst_24633 = inst_24632;var state_24746__$1 = state_24746;if(cljs.core.truth_(inst_24633))
{var statearr_24825_24887 = state_24746__$1;(statearr_24825_24887[(1)] = (10));
} else
{var statearr_24826_24888 = state_24746__$1;(statearr_24826_24888[(1)] = (11));
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
});})(c__9125__auto___24834,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24834,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24830[(0)] = state_machine__9111__auto__);
(statearr_24830[(1)] = (1));
return statearr_24830;
});
var state_machine__9111__auto____1 = (function (state_24746){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24746);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24831){if((e24831 instanceof Object))
{var ex__9114__auto__ = e24831;var statearr_24832_24889 = state_24746;(statearr_24832_24889[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24746);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24831;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24890 = state_24746;
state_24746 = G__24890;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24746){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24834,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24833 = f__9126__auto__.call(null);(statearr_24833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24834);
return statearr_24833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24834,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24892 = {};return obj24892;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24893){var map__24898 = p__24893;var map__24898__$1 = ((cljs.core.seq_QMARK_.call(null,map__24898))?cljs.core.apply.call(null,cljs.core.hash_map,map__24898):map__24898);var opts = map__24898__$1;var statearr_24899_24902 = state;(statearr_24899_24902[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24898,map__24898__$1,opts){
return (function (val){var statearr_24900_24903 = state;(statearr_24900_24903[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24898,map__24898__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24901_24904 = state;(statearr_24901_24904[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24893 = null;if (arguments.length > 3) {
  p__24893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24893);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24905){
var state = cljs.core.first(arglist__24905);
arglist__24905 = cljs.core.next(arglist__24905);
var cont_block = cljs.core.first(arglist__24905);
arglist__24905 = cljs.core.next(arglist__24905);
var ports = cljs.core.first(arglist__24905);
var p__24893 = cljs.core.rest(arglist__24905);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24893);
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
;var m = (function (){if(typeof cljs.core.async.t25025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25025 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25026){
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
this.meta25026 = meta25026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25025.cljs$lang$type = true;
cljs.core.async.t25025.cljs$lang$ctorStr = "cljs.core.async/t25025";
cljs.core.async.t25025.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25025");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25025.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25027){var self__ = this;
var _25027__$1 = this;return self__.meta25026;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25027,meta25026__$1){var self__ = this;
var _25027__$1 = this;return (new cljs.core.async.t25025(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25026__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25025 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25025(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25026){return (new cljs.core.async.t25025(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25026));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25025(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25097){var state_val_25098 = (state_25097[(1)]);if((state_val_25098 === (7)))
{var inst_25041 = (state_25097[(7)]);var inst_25046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25041);var state_25097__$1 = state_25097;var statearr_25099_25145 = state_25097__$1;(statearr_25099_25145[(2)] = inst_25046);
(statearr_25099_25145[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (20)))
{var inst_25056 = (state_25097[(8)]);var state_25097__$1 = state_25097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25097__$1,(23),out,inst_25056);
} else
{if((state_val_25098 === (1)))
{var inst_25031 = (state_25097[(9)]);var inst_25031__$1 = calc_state.call(null);var inst_25032 = cljs.core.seq_QMARK_.call(null,inst_25031__$1);var state_25097__$1 = (function (){var statearr_25100 = state_25097;(statearr_25100[(9)] = inst_25031__$1);
return statearr_25100;
})();if(inst_25032)
{var statearr_25101_25146 = state_25097__$1;(statearr_25101_25146[(1)] = (2));
} else
{var statearr_25102_25147 = state_25097__$1;(statearr_25102_25147[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (24)))
{var inst_25049 = (state_25097[(10)]);var inst_25041 = inst_25049;var state_25097__$1 = (function (){var statearr_25103 = state_25097;(statearr_25103[(7)] = inst_25041);
return statearr_25103;
})();var statearr_25104_25148 = state_25097__$1;(statearr_25104_25148[(2)] = null);
(statearr_25104_25148[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (4)))
{var inst_25031 = (state_25097[(9)]);var inst_25037 = (state_25097[(2)]);var inst_25038 = cljs.core.get.call(null,inst_25037,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25039 = cljs.core.get.call(null,inst_25037,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25040 = cljs.core.get.call(null,inst_25037,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25041 = inst_25031;var state_25097__$1 = (function (){var statearr_25105 = state_25097;(statearr_25105[(11)] = inst_25040);
(statearr_25105[(7)] = inst_25041);
(statearr_25105[(12)] = inst_25039);
(statearr_25105[(13)] = inst_25038);
return statearr_25105;
})();var statearr_25106_25149 = state_25097__$1;(statearr_25106_25149[(2)] = null);
(statearr_25106_25149[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (15)))
{var state_25097__$1 = state_25097;var statearr_25107_25150 = state_25097__$1;(statearr_25107_25150[(2)] = null);
(statearr_25107_25150[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (21)))
{var inst_25049 = (state_25097[(10)]);var inst_25041 = inst_25049;var state_25097__$1 = (function (){var statearr_25108 = state_25097;(statearr_25108[(7)] = inst_25041);
return statearr_25108;
})();var statearr_25109_25151 = state_25097__$1;(statearr_25109_25151[(2)] = null);
(statearr_25109_25151[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (13)))
{var inst_25093 = (state_25097[(2)]);var state_25097__$1 = state_25097;var statearr_25110_25152 = state_25097__$1;(statearr_25110_25152[(2)] = inst_25093);
(statearr_25110_25152[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (22)))
{var inst_25091 = (state_25097[(2)]);var state_25097__$1 = state_25097;var statearr_25111_25153 = state_25097__$1;(statearr_25111_25153[(2)] = inst_25091);
(statearr_25111_25153[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (6)))
{var inst_25095 = (state_25097[(2)]);var state_25097__$1 = state_25097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25097__$1,inst_25095);
} else
{if((state_val_25098 === (25)))
{var state_25097__$1 = state_25097;var statearr_25112_25154 = state_25097__$1;(statearr_25112_25154[(2)] = null);
(statearr_25112_25154[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (17)))
{var inst_25071 = (state_25097[(14)]);var state_25097__$1 = state_25097;var statearr_25113_25155 = state_25097__$1;(statearr_25113_25155[(2)] = inst_25071);
(statearr_25113_25155[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (3)))
{var inst_25031 = (state_25097[(9)]);var state_25097__$1 = state_25097;var statearr_25114_25156 = state_25097__$1;(statearr_25114_25156[(2)] = inst_25031);
(statearr_25114_25156[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (12)))
{var inst_25071 = (state_25097[(14)]);var inst_25052 = (state_25097[(15)]);var inst_25057 = (state_25097[(16)]);var inst_25071__$1 = inst_25052.call(null,inst_25057);var state_25097__$1 = (function (){var statearr_25115 = state_25097;(statearr_25115[(14)] = inst_25071__$1);
return statearr_25115;
})();if(cljs.core.truth_(inst_25071__$1))
{var statearr_25116_25157 = state_25097__$1;(statearr_25116_25157[(1)] = (17));
} else
{var statearr_25117_25158 = state_25097__$1;(statearr_25117_25158[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (2)))
{var inst_25031 = (state_25097[(9)]);var inst_25034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25031);var state_25097__$1 = state_25097;var statearr_25118_25159 = state_25097__$1;(statearr_25118_25159[(2)] = inst_25034);
(statearr_25118_25159[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (23)))
{var inst_25082 = (state_25097[(2)]);var state_25097__$1 = state_25097;if(cljs.core.truth_(inst_25082))
{var statearr_25119_25160 = state_25097__$1;(statearr_25119_25160[(1)] = (24));
} else
{var statearr_25120_25161 = state_25097__$1;(statearr_25120_25161[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (19)))
{var inst_25079 = (state_25097[(2)]);var state_25097__$1 = state_25097;if(cljs.core.truth_(inst_25079))
{var statearr_25121_25162 = state_25097__$1;(statearr_25121_25162[(1)] = (20));
} else
{var statearr_25122_25163 = state_25097__$1;(statearr_25122_25163[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (11)))
{var inst_25056 = (state_25097[(8)]);var inst_25062 = (inst_25056 == null);var state_25097__$1 = state_25097;if(cljs.core.truth_(inst_25062))
{var statearr_25123_25164 = state_25097__$1;(statearr_25123_25164[(1)] = (14));
} else
{var statearr_25124_25165 = state_25097__$1;(statearr_25124_25165[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (9)))
{var inst_25049 = (state_25097[(10)]);var inst_25049__$1 = (state_25097[(2)]);var inst_25050 = cljs.core.get.call(null,inst_25049__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25051 = cljs.core.get.call(null,inst_25049__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25052 = cljs.core.get.call(null,inst_25049__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25097__$1 = (function (){var statearr_25125 = state_25097;(statearr_25125[(10)] = inst_25049__$1);
(statearr_25125[(17)] = inst_25051);
(statearr_25125[(15)] = inst_25052);
return statearr_25125;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25097__$1,(10),inst_25050);
} else
{if((state_val_25098 === (5)))
{var inst_25041 = (state_25097[(7)]);var inst_25044 = cljs.core.seq_QMARK_.call(null,inst_25041);var state_25097__$1 = state_25097;if(inst_25044)
{var statearr_25126_25166 = state_25097__$1;(statearr_25126_25166[(1)] = (7));
} else
{var statearr_25127_25167 = state_25097__$1;(statearr_25127_25167[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (14)))
{var inst_25057 = (state_25097[(16)]);var inst_25064 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25057);var state_25097__$1 = state_25097;var statearr_25128_25168 = state_25097__$1;(statearr_25128_25168[(2)] = inst_25064);
(statearr_25128_25168[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (26)))
{var inst_25087 = (state_25097[(2)]);var state_25097__$1 = state_25097;var statearr_25129_25169 = state_25097__$1;(statearr_25129_25169[(2)] = inst_25087);
(statearr_25129_25169[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (16)))
{var inst_25067 = (state_25097[(2)]);var inst_25068 = calc_state.call(null);var inst_25041 = inst_25068;var state_25097__$1 = (function (){var statearr_25130 = state_25097;(statearr_25130[(7)] = inst_25041);
(statearr_25130[(18)] = inst_25067);
return statearr_25130;
})();var statearr_25131_25170 = state_25097__$1;(statearr_25131_25170[(2)] = null);
(statearr_25131_25170[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (10)))
{var inst_25057 = (state_25097[(16)]);var inst_25056 = (state_25097[(8)]);var inst_25055 = (state_25097[(2)]);var inst_25056__$1 = cljs.core.nth.call(null,inst_25055,(0),null);var inst_25057__$1 = cljs.core.nth.call(null,inst_25055,(1),null);var inst_25058 = (inst_25056__$1 == null);var inst_25059 = cljs.core._EQ_.call(null,inst_25057__$1,change);var inst_25060 = (inst_25058) || (inst_25059);var state_25097__$1 = (function (){var statearr_25132 = state_25097;(statearr_25132[(16)] = inst_25057__$1);
(statearr_25132[(8)] = inst_25056__$1);
return statearr_25132;
})();if(cljs.core.truth_(inst_25060))
{var statearr_25133_25171 = state_25097__$1;(statearr_25133_25171[(1)] = (11));
} else
{var statearr_25134_25172 = state_25097__$1;(statearr_25134_25172[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (18)))
{var inst_25051 = (state_25097[(17)]);var inst_25052 = (state_25097[(15)]);var inst_25057 = (state_25097[(16)]);var inst_25074 = cljs.core.empty_QMARK_.call(null,inst_25052);var inst_25075 = inst_25051.call(null,inst_25057);var inst_25076 = cljs.core.not.call(null,inst_25075);var inst_25077 = (inst_25074) && (inst_25076);var state_25097__$1 = state_25097;var statearr_25135_25173 = state_25097__$1;(statearr_25135_25173[(2)] = inst_25077);
(statearr_25135_25173[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25098 === (8)))
{var inst_25041 = (state_25097[(7)]);var state_25097__$1 = state_25097;var statearr_25136_25174 = state_25097__$1;(statearr_25136_25174[(2)] = inst_25041);
(statearr_25136_25174[(1)] = (9));
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
});})(c__9125__auto___25144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25140[(0)] = state_machine__9111__auto__);
(statearr_25140[(1)] = (1));
return statearr_25140;
});
var state_machine__9111__auto____1 = (function (state_25097){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25097);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25141){if((e25141 instanceof Object))
{var ex__9114__auto__ = e25141;var statearr_25142_25175 = state_25097;(statearr_25142_25175[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25141;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25176 = state_25097;
state_25097 = G__25176;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25097){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25143 = f__9126__auto__.call(null);(statearr_25143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25144);
return statearr_25143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25178 = {};return obj25178;
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
return (function (p1__25179_SHARP_){if(cljs.core.truth_(p1__25179_SHARP_.call(null,topic)))
{return p1__25179_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25179_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25302 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25303){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25303 = meta25303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25302.cljs$lang$type = true;
cljs.core.async.t25302.cljs$lang$ctorStr = "cljs.core.async/t25302";
cljs.core.async.t25302.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25302");
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25302.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25304){var self__ = this;
var _25304__$1 = this;return self__.meta25303;
});})(mults,ensure_mult))
;
cljs.core.async.t25302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25304,meta25303__$1){var self__ = this;
var _25304__$1 = this;return (new cljs.core.async.t25302(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25303__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25302 = ((function (mults,ensure_mult){
return (function __GT_t25302(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25303){return (new cljs.core.async.t25302(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25303));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25302(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25424 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25424,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25424,mults,ensure_mult,p){
return (function (state_25376){var state_val_25377 = (state_25376[(1)]);if((state_val_25377 === (7)))
{var inst_25372 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25378_25425 = state_25376__$1;(statearr_25378_25425[(2)] = inst_25372);
(statearr_25378_25425[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (20)))
{var state_25376__$1 = state_25376;var statearr_25379_25426 = state_25376__$1;(statearr_25379_25426[(2)] = null);
(statearr_25379_25426[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (1)))
{var state_25376__$1 = state_25376;var statearr_25380_25427 = state_25376__$1;(statearr_25380_25427[(2)] = null);
(statearr_25380_25427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (24)))
{var inst_25355 = (state_25376[(7)]);var inst_25364 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25355);var state_25376__$1 = state_25376;var statearr_25381_25428 = state_25376__$1;(statearr_25381_25428[(2)] = inst_25364);
(statearr_25381_25428[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (4)))
{var inst_25307 = (state_25376[(8)]);var inst_25307__$1 = (state_25376[(2)]);var inst_25308 = (inst_25307__$1 == null);var state_25376__$1 = (function (){var statearr_25382 = state_25376;(statearr_25382[(8)] = inst_25307__$1);
return statearr_25382;
})();if(cljs.core.truth_(inst_25308))
{var statearr_25383_25429 = state_25376__$1;(statearr_25383_25429[(1)] = (5));
} else
{var statearr_25384_25430 = state_25376__$1;(statearr_25384_25430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (15)))
{var inst_25349 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25385_25431 = state_25376__$1;(statearr_25385_25431[(2)] = inst_25349);
(statearr_25385_25431[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (21)))
{var inst_25369 = (state_25376[(2)]);var state_25376__$1 = (function (){var statearr_25386 = state_25376;(statearr_25386[(9)] = inst_25369);
return statearr_25386;
})();var statearr_25387_25432 = state_25376__$1;(statearr_25387_25432[(2)] = null);
(statearr_25387_25432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (13)))
{var inst_25331 = (state_25376[(10)]);var inst_25333 = cljs.core.chunked_seq_QMARK_.call(null,inst_25331);var state_25376__$1 = state_25376;if(inst_25333)
{var statearr_25388_25433 = state_25376__$1;(statearr_25388_25433[(1)] = (16));
} else
{var statearr_25389_25434 = state_25376__$1;(statearr_25389_25434[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (22)))
{var inst_25361 = (state_25376[(2)]);var state_25376__$1 = state_25376;if(cljs.core.truth_(inst_25361))
{var statearr_25390_25435 = state_25376__$1;(statearr_25390_25435[(1)] = (23));
} else
{var statearr_25391_25436 = state_25376__$1;(statearr_25391_25436[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (6)))
{var inst_25307 = (state_25376[(8)]);var inst_25357 = (state_25376[(11)]);var inst_25355 = (state_25376[(7)]);var inst_25355__$1 = topic_fn.call(null,inst_25307);var inst_25356 = cljs.core.deref.call(null,mults);var inst_25357__$1 = cljs.core.get.call(null,inst_25356,inst_25355__$1);var state_25376__$1 = (function (){var statearr_25392 = state_25376;(statearr_25392[(11)] = inst_25357__$1);
(statearr_25392[(7)] = inst_25355__$1);
return statearr_25392;
})();if(cljs.core.truth_(inst_25357__$1))
{var statearr_25393_25437 = state_25376__$1;(statearr_25393_25437[(1)] = (19));
} else
{var statearr_25394_25438 = state_25376__$1;(statearr_25394_25438[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (25)))
{var inst_25366 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25395_25439 = state_25376__$1;(statearr_25395_25439[(2)] = inst_25366);
(statearr_25395_25439[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (17)))
{var inst_25331 = (state_25376[(10)]);var inst_25340 = cljs.core.first.call(null,inst_25331);var inst_25341 = cljs.core.async.muxch_STAR_.call(null,inst_25340);var inst_25342 = cljs.core.async.close_BANG_.call(null,inst_25341);var inst_25343 = cljs.core.next.call(null,inst_25331);var inst_25317 = inst_25343;var inst_25318 = null;var inst_25319 = (0);var inst_25320 = (0);var state_25376__$1 = (function (){var statearr_25396 = state_25376;(statearr_25396[(12)] = inst_25320);
(statearr_25396[(13)] = inst_25318);
(statearr_25396[(14)] = inst_25319);
(statearr_25396[(15)] = inst_25317);
(statearr_25396[(16)] = inst_25342);
return statearr_25396;
})();var statearr_25397_25440 = state_25376__$1;(statearr_25397_25440[(2)] = null);
(statearr_25397_25440[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (3)))
{var inst_25374 = (state_25376[(2)]);var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25376__$1,inst_25374);
} else
{if((state_val_25377 === (12)))
{var inst_25351 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25398_25441 = state_25376__$1;(statearr_25398_25441[(2)] = inst_25351);
(statearr_25398_25441[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (2)))
{var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25376__$1,(4),ch);
} else
{if((state_val_25377 === (23)))
{var state_25376__$1 = state_25376;var statearr_25399_25442 = state_25376__$1;(statearr_25399_25442[(2)] = null);
(statearr_25399_25442[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (19)))
{var inst_25307 = (state_25376[(8)]);var inst_25357 = (state_25376[(11)]);var inst_25359 = cljs.core.async.muxch_STAR_.call(null,inst_25357);var state_25376__$1 = state_25376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25376__$1,(22),inst_25359,inst_25307);
} else
{if((state_val_25377 === (11)))
{var inst_25331 = (state_25376[(10)]);var inst_25317 = (state_25376[(15)]);var inst_25331__$1 = cljs.core.seq.call(null,inst_25317);var state_25376__$1 = (function (){var statearr_25400 = state_25376;(statearr_25400[(10)] = inst_25331__$1);
return statearr_25400;
})();if(inst_25331__$1)
{var statearr_25401_25443 = state_25376__$1;(statearr_25401_25443[(1)] = (13));
} else
{var statearr_25402_25444 = state_25376__$1;(statearr_25402_25444[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (9)))
{var inst_25353 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25403_25445 = state_25376__$1;(statearr_25403_25445[(2)] = inst_25353);
(statearr_25403_25445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (5)))
{var inst_25314 = cljs.core.deref.call(null,mults);var inst_25315 = cljs.core.vals.call(null,inst_25314);var inst_25316 = cljs.core.seq.call(null,inst_25315);var inst_25317 = inst_25316;var inst_25318 = null;var inst_25319 = (0);var inst_25320 = (0);var state_25376__$1 = (function (){var statearr_25404 = state_25376;(statearr_25404[(12)] = inst_25320);
(statearr_25404[(13)] = inst_25318);
(statearr_25404[(14)] = inst_25319);
(statearr_25404[(15)] = inst_25317);
return statearr_25404;
})();var statearr_25405_25446 = state_25376__$1;(statearr_25405_25446[(2)] = null);
(statearr_25405_25446[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (14)))
{var state_25376__$1 = state_25376;var statearr_25409_25447 = state_25376__$1;(statearr_25409_25447[(2)] = null);
(statearr_25409_25447[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (16)))
{var inst_25331 = (state_25376[(10)]);var inst_25335 = cljs.core.chunk_first.call(null,inst_25331);var inst_25336 = cljs.core.chunk_rest.call(null,inst_25331);var inst_25337 = cljs.core.count.call(null,inst_25335);var inst_25317 = inst_25336;var inst_25318 = inst_25335;var inst_25319 = inst_25337;var inst_25320 = (0);var state_25376__$1 = (function (){var statearr_25410 = state_25376;(statearr_25410[(12)] = inst_25320);
(statearr_25410[(13)] = inst_25318);
(statearr_25410[(14)] = inst_25319);
(statearr_25410[(15)] = inst_25317);
return statearr_25410;
})();var statearr_25411_25448 = state_25376__$1;(statearr_25411_25448[(2)] = null);
(statearr_25411_25448[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (10)))
{var inst_25320 = (state_25376[(12)]);var inst_25318 = (state_25376[(13)]);var inst_25319 = (state_25376[(14)]);var inst_25317 = (state_25376[(15)]);var inst_25325 = cljs.core._nth.call(null,inst_25318,inst_25320);var inst_25326 = cljs.core.async.muxch_STAR_.call(null,inst_25325);var inst_25327 = cljs.core.async.close_BANG_.call(null,inst_25326);var inst_25328 = (inst_25320 + (1));var tmp25406 = inst_25318;var tmp25407 = inst_25319;var tmp25408 = inst_25317;var inst_25317__$1 = tmp25408;var inst_25318__$1 = tmp25406;var inst_25319__$1 = tmp25407;var inst_25320__$1 = inst_25328;var state_25376__$1 = (function (){var statearr_25412 = state_25376;(statearr_25412[(12)] = inst_25320__$1);
(statearr_25412[(13)] = inst_25318__$1);
(statearr_25412[(14)] = inst_25319__$1);
(statearr_25412[(15)] = inst_25317__$1);
(statearr_25412[(17)] = inst_25327);
return statearr_25412;
})();var statearr_25413_25449 = state_25376__$1;(statearr_25413_25449[(2)] = null);
(statearr_25413_25449[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (18)))
{var inst_25346 = (state_25376[(2)]);var state_25376__$1 = state_25376;var statearr_25414_25450 = state_25376__$1;(statearr_25414_25450[(2)] = inst_25346);
(statearr_25414_25450[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25377 === (8)))
{var inst_25320 = (state_25376[(12)]);var inst_25319 = (state_25376[(14)]);var inst_25322 = (inst_25320 < inst_25319);var inst_25323 = inst_25322;var state_25376__$1 = state_25376;if(cljs.core.truth_(inst_25323))
{var statearr_25415_25451 = state_25376__$1;(statearr_25415_25451[(1)] = (10));
} else
{var statearr_25416_25452 = state_25376__$1;(statearr_25416_25452[(1)] = (11));
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
});})(c__9125__auto___25424,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25424,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25420[(0)] = state_machine__9111__auto__);
(statearr_25420[(1)] = (1));
return statearr_25420;
});
var state_machine__9111__auto____1 = (function (state_25376){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25376);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25421){if((e25421 instanceof Object))
{var ex__9114__auto__ = e25421;var statearr_25422_25453 = state_25376;(statearr_25422_25453[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25421;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25454 = state_25376;
state_25376 = G__25454;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25376){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25424,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25423 = f__9126__auto__.call(null);(statearr_25423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25424);
return statearr_25423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25424,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25591 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25561){var state_val_25562 = (state_25561[(1)]);if((state_val_25562 === (7)))
{var state_25561__$1 = state_25561;var statearr_25563_25592 = state_25561__$1;(statearr_25563_25592[(2)] = null);
(statearr_25563_25592[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (1)))
{var state_25561__$1 = state_25561;var statearr_25564_25593 = state_25561__$1;(statearr_25564_25593[(2)] = null);
(statearr_25564_25593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (4)))
{var inst_25525 = (state_25561[(7)]);var inst_25527 = (inst_25525 < cnt);var state_25561__$1 = state_25561;if(cljs.core.truth_(inst_25527))
{var statearr_25565_25594 = state_25561__$1;(statearr_25565_25594[(1)] = (6));
} else
{var statearr_25566_25595 = state_25561__$1;(statearr_25566_25595[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (15)))
{var inst_25557 = (state_25561[(2)]);var state_25561__$1 = state_25561;var statearr_25567_25596 = state_25561__$1;(statearr_25567_25596[(2)] = inst_25557);
(statearr_25567_25596[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (13)))
{var inst_25550 = cljs.core.async.close_BANG_.call(null,out);var state_25561__$1 = state_25561;var statearr_25568_25597 = state_25561__$1;(statearr_25568_25597[(2)] = inst_25550);
(statearr_25568_25597[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (6)))
{var state_25561__$1 = state_25561;var statearr_25569_25598 = state_25561__$1;(statearr_25569_25598[(2)] = null);
(statearr_25569_25598[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (3)))
{var inst_25559 = (state_25561[(2)]);var state_25561__$1 = state_25561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25561__$1,inst_25559);
} else
{if((state_val_25562 === (12)))
{var inst_25547 = (state_25561[(8)]);var inst_25547__$1 = (state_25561[(2)]);var inst_25548 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25547__$1);var state_25561__$1 = (function (){var statearr_25570 = state_25561;(statearr_25570[(8)] = inst_25547__$1);
return statearr_25570;
})();if(cljs.core.truth_(inst_25548))
{var statearr_25571_25599 = state_25561__$1;(statearr_25571_25599[(1)] = (13));
} else
{var statearr_25572_25600 = state_25561__$1;(statearr_25572_25600[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (2)))
{var inst_25524 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25525 = (0);var state_25561__$1 = (function (){var statearr_25573 = state_25561;(statearr_25573[(7)] = inst_25525);
(statearr_25573[(9)] = inst_25524);
return statearr_25573;
})();var statearr_25574_25601 = state_25561__$1;(statearr_25574_25601[(2)] = null);
(statearr_25574_25601[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (11)))
{var inst_25525 = (state_25561[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25561,(10),Object,null,(9));var inst_25534 = chs__$1.call(null,inst_25525);var inst_25535 = done.call(null,inst_25525);var inst_25536 = cljs.core.async.take_BANG_.call(null,inst_25534,inst_25535);var state_25561__$1 = state_25561;var statearr_25575_25602 = state_25561__$1;(statearr_25575_25602[(2)] = inst_25536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25561__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (9)))
{var inst_25525 = (state_25561[(7)]);var inst_25538 = (state_25561[(2)]);var inst_25539 = (inst_25525 + (1));var inst_25525__$1 = inst_25539;var state_25561__$1 = (function (){var statearr_25576 = state_25561;(statearr_25576[(10)] = inst_25538);
(statearr_25576[(7)] = inst_25525__$1);
return statearr_25576;
})();var statearr_25577_25603 = state_25561__$1;(statearr_25577_25603[(2)] = null);
(statearr_25577_25603[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (5)))
{var inst_25545 = (state_25561[(2)]);var state_25561__$1 = (function (){var statearr_25578 = state_25561;(statearr_25578[(11)] = inst_25545);
return statearr_25578;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25561__$1,(12),dchan);
} else
{if((state_val_25562 === (14)))
{var inst_25547 = (state_25561[(8)]);var inst_25552 = cljs.core.apply.call(null,f,inst_25547);var state_25561__$1 = state_25561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25561__$1,(16),out,inst_25552);
} else
{if((state_val_25562 === (16)))
{var inst_25554 = (state_25561[(2)]);var state_25561__$1 = (function (){var statearr_25579 = state_25561;(statearr_25579[(12)] = inst_25554);
return statearr_25579;
})();var statearr_25580_25604 = state_25561__$1;(statearr_25580_25604[(2)] = null);
(statearr_25580_25604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (10)))
{var inst_25529 = (state_25561[(2)]);var inst_25530 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25561__$1 = (function (){var statearr_25581 = state_25561;(statearr_25581[(13)] = inst_25529);
return statearr_25581;
})();var statearr_25582_25605 = state_25561__$1;(statearr_25582_25605[(2)] = inst_25530);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25561__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25562 === (8)))
{var inst_25543 = (state_25561[(2)]);var state_25561__$1 = state_25561;var statearr_25583_25606 = state_25561__$1;(statearr_25583_25606[(2)] = inst_25543);
(statearr_25583_25606[(1)] = (5));
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
});})(c__9125__auto___25591,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25587[(0)] = state_machine__9111__auto__);
(statearr_25587[(1)] = (1));
return statearr_25587;
});
var state_machine__9111__auto____1 = (function (state_25561){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25561);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25588){if((e25588 instanceof Object))
{var ex__9114__auto__ = e25588;var statearr_25589_25607 = state_25561;(statearr_25589_25607[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25588;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25608 = state_25561;
state_25561 = G__25608;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25561){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25591,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25590 = f__9126__auto__.call(null);(statearr_25590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25591);
return statearr_25590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25591,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25716 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25716,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25716,out){
return (function (state_25692){var state_val_25693 = (state_25692[(1)]);if((state_val_25693 === (7)))
{var inst_25671 = (state_25692[(7)]);var inst_25672 = (state_25692[(8)]);var inst_25671__$1 = (state_25692[(2)]);var inst_25672__$1 = cljs.core.nth.call(null,inst_25671__$1,(0),null);var inst_25673 = cljs.core.nth.call(null,inst_25671__$1,(1),null);var inst_25674 = (inst_25672__$1 == null);var state_25692__$1 = (function (){var statearr_25694 = state_25692;(statearr_25694[(9)] = inst_25673);
(statearr_25694[(7)] = inst_25671__$1);
(statearr_25694[(8)] = inst_25672__$1);
return statearr_25694;
})();if(cljs.core.truth_(inst_25674))
{var statearr_25695_25717 = state_25692__$1;(statearr_25695_25717[(1)] = (8));
} else
{var statearr_25696_25718 = state_25692__$1;(statearr_25696_25718[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (1)))
{var inst_25663 = cljs.core.vec.call(null,chs);var inst_25664 = inst_25663;var state_25692__$1 = (function (){var statearr_25697 = state_25692;(statearr_25697[(10)] = inst_25664);
return statearr_25697;
})();var statearr_25698_25719 = state_25692__$1;(statearr_25698_25719[(2)] = null);
(statearr_25698_25719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (4)))
{var inst_25664 = (state_25692[(10)]);var state_25692__$1 = state_25692;return cljs.core.async.ioc_alts_BANG_.call(null,state_25692__$1,(7),inst_25664);
} else
{if((state_val_25693 === (6)))
{var inst_25688 = (state_25692[(2)]);var state_25692__$1 = state_25692;var statearr_25699_25720 = state_25692__$1;(statearr_25699_25720[(2)] = inst_25688);
(statearr_25699_25720[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (3)))
{var inst_25690 = (state_25692[(2)]);var state_25692__$1 = state_25692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25692__$1,inst_25690);
} else
{if((state_val_25693 === (2)))
{var inst_25664 = (state_25692[(10)]);var inst_25666 = cljs.core.count.call(null,inst_25664);var inst_25667 = (inst_25666 > (0));var state_25692__$1 = state_25692;if(cljs.core.truth_(inst_25667))
{var statearr_25701_25721 = state_25692__$1;(statearr_25701_25721[(1)] = (4));
} else
{var statearr_25702_25722 = state_25692__$1;(statearr_25702_25722[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (11)))
{var inst_25664 = (state_25692[(10)]);var inst_25681 = (state_25692[(2)]);var tmp25700 = inst_25664;var inst_25664__$1 = tmp25700;var state_25692__$1 = (function (){var statearr_25703 = state_25692;(statearr_25703[(10)] = inst_25664__$1);
(statearr_25703[(11)] = inst_25681);
return statearr_25703;
})();var statearr_25704_25723 = state_25692__$1;(statearr_25704_25723[(2)] = null);
(statearr_25704_25723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (9)))
{var inst_25672 = (state_25692[(8)]);var state_25692__$1 = state_25692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25692__$1,(11),out,inst_25672);
} else
{if((state_val_25693 === (5)))
{var inst_25686 = cljs.core.async.close_BANG_.call(null,out);var state_25692__$1 = state_25692;var statearr_25705_25724 = state_25692__$1;(statearr_25705_25724[(2)] = inst_25686);
(statearr_25705_25724[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (10)))
{var inst_25684 = (state_25692[(2)]);var state_25692__$1 = state_25692;var statearr_25706_25725 = state_25692__$1;(statearr_25706_25725[(2)] = inst_25684);
(statearr_25706_25725[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25693 === (8)))
{var inst_25673 = (state_25692[(9)]);var inst_25664 = (state_25692[(10)]);var inst_25671 = (state_25692[(7)]);var inst_25672 = (state_25692[(8)]);var inst_25676 = (function (){var c = inst_25673;var v = inst_25672;var vec__25669 = inst_25671;var cs = inst_25664;return ((function (c,v,vec__25669,cs,inst_25673,inst_25664,inst_25671,inst_25672,state_val_25693,c__9125__auto___25716,out){
return (function (p1__25609_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25609_SHARP_);
});
;})(c,v,vec__25669,cs,inst_25673,inst_25664,inst_25671,inst_25672,state_val_25693,c__9125__auto___25716,out))
})();var inst_25677 = cljs.core.filterv.call(null,inst_25676,inst_25664);var inst_25664__$1 = inst_25677;var state_25692__$1 = (function (){var statearr_25707 = state_25692;(statearr_25707[(10)] = inst_25664__$1);
return statearr_25707;
})();var statearr_25708_25726 = state_25692__$1;(statearr_25708_25726[(2)] = null);
(statearr_25708_25726[(1)] = (2));
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
});})(c__9125__auto___25716,out))
;return ((function (switch__9110__auto__,c__9125__auto___25716,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25712 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25712[(0)] = state_machine__9111__auto__);
(statearr_25712[(1)] = (1));
return statearr_25712;
});
var state_machine__9111__auto____1 = (function (state_25692){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25692);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25713){if((e25713 instanceof Object))
{var ex__9114__auto__ = e25713;var statearr_25714_25727 = state_25692;(statearr_25714_25727[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25713;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25728 = state_25692;
state_25692 = G__25728;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25692){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25716,out))
})();var state__9127__auto__ = (function (){var statearr_25715 = f__9126__auto__.call(null);(statearr_25715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25716);
return statearr_25715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25716,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25821 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25821,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25821,out){
return (function (state_25798){var state_val_25799 = (state_25798[(1)]);if((state_val_25799 === (7)))
{var inst_25780 = (state_25798[(7)]);var inst_25780__$1 = (state_25798[(2)]);var inst_25781 = (inst_25780__$1 == null);var inst_25782 = cljs.core.not.call(null,inst_25781);var state_25798__$1 = (function (){var statearr_25800 = state_25798;(statearr_25800[(7)] = inst_25780__$1);
return statearr_25800;
})();if(inst_25782)
{var statearr_25801_25822 = state_25798__$1;(statearr_25801_25822[(1)] = (8));
} else
{var statearr_25802_25823 = state_25798__$1;(statearr_25802_25823[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (1)))
{var inst_25775 = (0);var state_25798__$1 = (function (){var statearr_25803 = state_25798;(statearr_25803[(8)] = inst_25775);
return statearr_25803;
})();var statearr_25804_25824 = state_25798__$1;(statearr_25804_25824[(2)] = null);
(statearr_25804_25824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (4)))
{var state_25798__$1 = state_25798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25798__$1,(7),ch);
} else
{if((state_val_25799 === (6)))
{var inst_25793 = (state_25798[(2)]);var state_25798__$1 = state_25798;var statearr_25805_25825 = state_25798__$1;(statearr_25805_25825[(2)] = inst_25793);
(statearr_25805_25825[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (3)))
{var inst_25795 = (state_25798[(2)]);var inst_25796 = cljs.core.async.close_BANG_.call(null,out);var state_25798__$1 = (function (){var statearr_25806 = state_25798;(statearr_25806[(9)] = inst_25795);
return statearr_25806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25798__$1,inst_25796);
} else
{if((state_val_25799 === (2)))
{var inst_25775 = (state_25798[(8)]);var inst_25777 = (inst_25775 < n);var state_25798__$1 = state_25798;if(cljs.core.truth_(inst_25777))
{var statearr_25807_25826 = state_25798__$1;(statearr_25807_25826[(1)] = (4));
} else
{var statearr_25808_25827 = state_25798__$1;(statearr_25808_25827[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (11)))
{var inst_25775 = (state_25798[(8)]);var inst_25785 = (state_25798[(2)]);var inst_25786 = (inst_25775 + (1));var inst_25775__$1 = inst_25786;var state_25798__$1 = (function (){var statearr_25809 = state_25798;(statearr_25809[(8)] = inst_25775__$1);
(statearr_25809[(10)] = inst_25785);
return statearr_25809;
})();var statearr_25810_25828 = state_25798__$1;(statearr_25810_25828[(2)] = null);
(statearr_25810_25828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (9)))
{var state_25798__$1 = state_25798;var statearr_25811_25829 = state_25798__$1;(statearr_25811_25829[(2)] = null);
(statearr_25811_25829[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (5)))
{var state_25798__$1 = state_25798;var statearr_25812_25830 = state_25798__$1;(statearr_25812_25830[(2)] = null);
(statearr_25812_25830[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (10)))
{var inst_25790 = (state_25798[(2)]);var state_25798__$1 = state_25798;var statearr_25813_25831 = state_25798__$1;(statearr_25813_25831[(2)] = inst_25790);
(statearr_25813_25831[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25799 === (8)))
{var inst_25780 = (state_25798[(7)]);var state_25798__$1 = state_25798;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25798__$1,(11),out,inst_25780);
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
});})(c__9125__auto___25821,out))
;return ((function (switch__9110__auto__,c__9125__auto___25821,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25817 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25817[(0)] = state_machine__9111__auto__);
(statearr_25817[(1)] = (1));
return statearr_25817;
});
var state_machine__9111__auto____1 = (function (state_25798){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25798);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25818){if((e25818 instanceof Object))
{var ex__9114__auto__ = e25818;var statearr_25819_25832 = state_25798;(statearr_25819_25832[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25818;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25833 = state_25798;
state_25798 = G__25833;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25798){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25821,out))
})();var state__9127__auto__ = (function (){var statearr_25820 = f__9126__auto__.call(null);(statearr_25820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25821);
return statearr_25820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25821,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25841 = (function (ch,f,map_LT_,meta25842){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25842 = meta25842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25841.cljs$lang$type = true;
cljs.core.async.t25841.cljs$lang$ctorStr = "cljs.core.async/t25841";
cljs.core.async.t25841.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25841");
});
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25844 = (function (fn1,_,meta25842,ch,f,map_LT_,meta25845){
this.fn1 = fn1;
this._ = _;
this.meta25842 = meta25842;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25845 = meta25845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25844.cljs$lang$type = true;
cljs.core.async.t25844.cljs$lang$ctorStr = "cljs.core.async/t25844";
cljs.core.async.t25844.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25844");
});})(___$1))
;
cljs.core.async.t25844.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25834_SHARP_){return f1.call(null,(((p1__25834_SHARP_ == null))?null:self__.f.call(null,p1__25834_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25846){var self__ = this;
var _25846__$1 = this;return self__.meta25845;
});})(___$1))
;
cljs.core.async.t25844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25846,meta25845__$1){var self__ = this;
var _25846__$1 = this;return (new cljs.core.async.t25844(self__.fn1,self__._,self__.meta25842,self__.ch,self__.f,self__.map_LT_,meta25845__$1));
});})(___$1))
;
cljs.core.async.__GT_t25844 = ((function (___$1){
return (function __GT_t25844(fn1__$1,___$2,meta25842__$1,ch__$2,f__$2,map_LT___$2,meta25845){return (new cljs.core.async.t25844(fn1__$1,___$2,meta25842__$1,ch__$2,f__$2,map_LT___$2,meta25845));
});})(___$1))
;
}
return (new cljs.core.async.t25844(fn1,___$1,self__.meta25842,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25843){var self__ = this;
var _25843__$1 = this;return self__.meta25842;
});
cljs.core.async.t25841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25843,meta25842__$1){var self__ = this;
var _25843__$1 = this;return (new cljs.core.async.t25841(self__.ch,self__.f,self__.map_LT_,meta25842__$1));
});
cljs.core.async.__GT_t25841 = (function __GT_t25841(ch__$1,f__$1,map_LT___$1,meta25842){return (new cljs.core.async.t25841(ch__$1,f__$1,map_LT___$1,meta25842));
});
}
return (new cljs.core.async.t25841(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25850 = (function (ch,f,map_GT_,meta25851){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25851 = meta25851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25850.cljs$lang$type = true;
cljs.core.async.t25850.cljs$lang$ctorStr = "cljs.core.async/t25850";
cljs.core.async.t25850.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25850");
});
cljs.core.async.t25850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25850.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25852){var self__ = this;
var _25852__$1 = this;return self__.meta25851;
});
cljs.core.async.t25850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25852,meta25851__$1){var self__ = this;
var _25852__$1 = this;return (new cljs.core.async.t25850(self__.ch,self__.f,self__.map_GT_,meta25851__$1));
});
cljs.core.async.__GT_t25850 = (function __GT_t25850(ch__$1,f__$1,map_GT___$1,meta25851){return (new cljs.core.async.t25850(ch__$1,f__$1,map_GT___$1,meta25851));
});
}
return (new cljs.core.async.t25850(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25856 = (function (ch,p,filter_GT_,meta25857){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25857 = meta25857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25856.cljs$lang$type = true;
cljs.core.async.t25856.cljs$lang$ctorStr = "cljs.core.async/t25856";
cljs.core.async.t25856.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25856");
});
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25858){var self__ = this;
var _25858__$1 = this;return self__.meta25857;
});
cljs.core.async.t25856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25858,meta25857__$1){var self__ = this;
var _25858__$1 = this;return (new cljs.core.async.t25856(self__.ch,self__.p,self__.filter_GT_,meta25857__$1));
});
cljs.core.async.__GT_t25856 = (function __GT_t25856(ch__$1,p__$1,filter_GT___$1,meta25857){return (new cljs.core.async.t25856(ch__$1,p__$1,filter_GT___$1,meta25857));
});
}
return (new cljs.core.async.t25856(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25941 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25941,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25941,out){
return (function (state_25920){var state_val_25921 = (state_25920[(1)]);if((state_val_25921 === (7)))
{var inst_25916 = (state_25920[(2)]);var state_25920__$1 = state_25920;var statearr_25922_25942 = state_25920__$1;(statearr_25922_25942[(2)] = inst_25916);
(statearr_25922_25942[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (1)))
{var state_25920__$1 = state_25920;var statearr_25923_25943 = state_25920__$1;(statearr_25923_25943[(2)] = null);
(statearr_25923_25943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (4)))
{var inst_25902 = (state_25920[(7)]);var inst_25902__$1 = (state_25920[(2)]);var inst_25903 = (inst_25902__$1 == null);var state_25920__$1 = (function (){var statearr_25924 = state_25920;(statearr_25924[(7)] = inst_25902__$1);
return statearr_25924;
})();if(cljs.core.truth_(inst_25903))
{var statearr_25925_25944 = state_25920__$1;(statearr_25925_25944[(1)] = (5));
} else
{var statearr_25926_25945 = state_25920__$1;(statearr_25926_25945[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (6)))
{var inst_25902 = (state_25920[(7)]);var inst_25907 = p.call(null,inst_25902);var state_25920__$1 = state_25920;if(cljs.core.truth_(inst_25907))
{var statearr_25927_25946 = state_25920__$1;(statearr_25927_25946[(1)] = (8));
} else
{var statearr_25928_25947 = state_25920__$1;(statearr_25928_25947[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (3)))
{var inst_25918 = (state_25920[(2)]);var state_25920__$1 = state_25920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25920__$1,inst_25918);
} else
{if((state_val_25921 === (2)))
{var state_25920__$1 = state_25920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25920__$1,(4),ch);
} else
{if((state_val_25921 === (11)))
{var inst_25910 = (state_25920[(2)]);var state_25920__$1 = state_25920;var statearr_25929_25948 = state_25920__$1;(statearr_25929_25948[(2)] = inst_25910);
(statearr_25929_25948[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (9)))
{var state_25920__$1 = state_25920;var statearr_25930_25949 = state_25920__$1;(statearr_25930_25949[(2)] = null);
(statearr_25930_25949[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (5)))
{var inst_25905 = cljs.core.async.close_BANG_.call(null,out);var state_25920__$1 = state_25920;var statearr_25931_25950 = state_25920__$1;(statearr_25931_25950[(2)] = inst_25905);
(statearr_25931_25950[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (10)))
{var inst_25913 = (state_25920[(2)]);var state_25920__$1 = (function (){var statearr_25932 = state_25920;(statearr_25932[(8)] = inst_25913);
return statearr_25932;
})();var statearr_25933_25951 = state_25920__$1;(statearr_25933_25951[(2)] = null);
(statearr_25933_25951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25921 === (8)))
{var inst_25902 = (state_25920[(7)]);var state_25920__$1 = state_25920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25920__$1,(11),out,inst_25902);
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
});})(c__9125__auto___25941,out))
;return ((function (switch__9110__auto__,c__9125__auto___25941,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25937 = [null,null,null,null,null,null,null,null,null];(statearr_25937[(0)] = state_machine__9111__auto__);
(statearr_25937[(1)] = (1));
return statearr_25937;
});
var state_machine__9111__auto____1 = (function (state_25920){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25920);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25938){if((e25938 instanceof Object))
{var ex__9114__auto__ = e25938;var statearr_25939_25952 = state_25920;(statearr_25939_25952[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25920);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25938;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25953 = state_25920;
state_25920 = G__25953;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25920){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25941,out))
})();var state__9127__auto__ = (function (){var statearr_25940 = f__9126__auto__.call(null);(statearr_25940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25941);
return statearr_25940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25941,out))
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
return (function (state_26119){var state_val_26120 = (state_26119[(1)]);if((state_val_26120 === (7)))
{var inst_26115 = (state_26119[(2)]);var state_26119__$1 = state_26119;var statearr_26121_26162 = state_26119__$1;(statearr_26121_26162[(2)] = inst_26115);
(statearr_26121_26162[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (20)))
{var inst_26085 = (state_26119[(7)]);var inst_26096 = (state_26119[(2)]);var inst_26097 = cljs.core.next.call(null,inst_26085);var inst_26071 = inst_26097;var inst_26072 = null;var inst_26073 = (0);var inst_26074 = (0);var state_26119__$1 = (function (){var statearr_26122 = state_26119;(statearr_26122[(8)] = inst_26073);
(statearr_26122[(9)] = inst_26071);
(statearr_26122[(10)] = inst_26096);
(statearr_26122[(11)] = inst_26074);
(statearr_26122[(12)] = inst_26072);
return statearr_26122;
})();var statearr_26123_26163 = state_26119__$1;(statearr_26123_26163[(2)] = null);
(statearr_26123_26163[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (1)))
{var state_26119__$1 = state_26119;var statearr_26124_26164 = state_26119__$1;(statearr_26124_26164[(2)] = null);
(statearr_26124_26164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (4)))
{var inst_26060 = (state_26119[(13)]);var inst_26060__$1 = (state_26119[(2)]);var inst_26061 = (inst_26060__$1 == null);var state_26119__$1 = (function (){var statearr_26125 = state_26119;(statearr_26125[(13)] = inst_26060__$1);
return statearr_26125;
})();if(cljs.core.truth_(inst_26061))
{var statearr_26126_26165 = state_26119__$1;(statearr_26126_26165[(1)] = (5));
} else
{var statearr_26127_26166 = state_26119__$1;(statearr_26127_26166[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (15)))
{var state_26119__$1 = state_26119;var statearr_26131_26167 = state_26119__$1;(statearr_26131_26167[(2)] = null);
(statearr_26131_26167[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (21)))
{var state_26119__$1 = state_26119;var statearr_26132_26168 = state_26119__$1;(statearr_26132_26168[(2)] = null);
(statearr_26132_26168[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (13)))
{var inst_26073 = (state_26119[(8)]);var inst_26071 = (state_26119[(9)]);var inst_26074 = (state_26119[(11)]);var inst_26072 = (state_26119[(12)]);var inst_26081 = (state_26119[(2)]);var inst_26082 = (inst_26074 + (1));var tmp26128 = inst_26073;var tmp26129 = inst_26071;var tmp26130 = inst_26072;var inst_26071__$1 = tmp26129;var inst_26072__$1 = tmp26130;var inst_26073__$1 = tmp26128;var inst_26074__$1 = inst_26082;var state_26119__$1 = (function (){var statearr_26133 = state_26119;(statearr_26133[(8)] = inst_26073__$1);
(statearr_26133[(9)] = inst_26071__$1);
(statearr_26133[(14)] = inst_26081);
(statearr_26133[(11)] = inst_26074__$1);
(statearr_26133[(12)] = inst_26072__$1);
return statearr_26133;
})();var statearr_26134_26169 = state_26119__$1;(statearr_26134_26169[(2)] = null);
(statearr_26134_26169[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (22)))
{var state_26119__$1 = state_26119;var statearr_26135_26170 = state_26119__$1;(statearr_26135_26170[(2)] = null);
(statearr_26135_26170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (6)))
{var inst_26060 = (state_26119[(13)]);var inst_26069 = f.call(null,inst_26060);var inst_26070 = cljs.core.seq.call(null,inst_26069);var inst_26071 = inst_26070;var inst_26072 = null;var inst_26073 = (0);var inst_26074 = (0);var state_26119__$1 = (function (){var statearr_26136 = state_26119;(statearr_26136[(8)] = inst_26073);
(statearr_26136[(9)] = inst_26071);
(statearr_26136[(11)] = inst_26074);
(statearr_26136[(12)] = inst_26072);
return statearr_26136;
})();var statearr_26137_26171 = state_26119__$1;(statearr_26137_26171[(2)] = null);
(statearr_26137_26171[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (17)))
{var inst_26085 = (state_26119[(7)]);var inst_26089 = cljs.core.chunk_first.call(null,inst_26085);var inst_26090 = cljs.core.chunk_rest.call(null,inst_26085);var inst_26091 = cljs.core.count.call(null,inst_26089);var inst_26071 = inst_26090;var inst_26072 = inst_26089;var inst_26073 = inst_26091;var inst_26074 = (0);var state_26119__$1 = (function (){var statearr_26138 = state_26119;(statearr_26138[(8)] = inst_26073);
(statearr_26138[(9)] = inst_26071);
(statearr_26138[(11)] = inst_26074);
(statearr_26138[(12)] = inst_26072);
return statearr_26138;
})();var statearr_26139_26172 = state_26119__$1;(statearr_26139_26172[(2)] = null);
(statearr_26139_26172[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (3)))
{var inst_26117 = (state_26119[(2)]);var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26119__$1,inst_26117);
} else
{if((state_val_26120 === (12)))
{var inst_26105 = (state_26119[(2)]);var state_26119__$1 = state_26119;var statearr_26140_26173 = state_26119__$1;(statearr_26140_26173[(2)] = inst_26105);
(statearr_26140_26173[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (2)))
{var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26119__$1,(4),in$);
} else
{if((state_val_26120 === (23)))
{var inst_26113 = (state_26119[(2)]);var state_26119__$1 = state_26119;var statearr_26141_26174 = state_26119__$1;(statearr_26141_26174[(2)] = inst_26113);
(statearr_26141_26174[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (19)))
{var inst_26100 = (state_26119[(2)]);var state_26119__$1 = state_26119;var statearr_26142_26175 = state_26119__$1;(statearr_26142_26175[(2)] = inst_26100);
(statearr_26142_26175[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (11)))
{var inst_26071 = (state_26119[(9)]);var inst_26085 = (state_26119[(7)]);var inst_26085__$1 = cljs.core.seq.call(null,inst_26071);var state_26119__$1 = (function (){var statearr_26143 = state_26119;(statearr_26143[(7)] = inst_26085__$1);
return statearr_26143;
})();if(inst_26085__$1)
{var statearr_26144_26176 = state_26119__$1;(statearr_26144_26176[(1)] = (14));
} else
{var statearr_26145_26177 = state_26119__$1;(statearr_26145_26177[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (9)))
{var inst_26107 = (state_26119[(2)]);var inst_26108 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26119__$1 = (function (){var statearr_26146 = state_26119;(statearr_26146[(15)] = inst_26107);
return statearr_26146;
})();if(cljs.core.truth_(inst_26108))
{var statearr_26147_26178 = state_26119__$1;(statearr_26147_26178[(1)] = (21));
} else
{var statearr_26148_26179 = state_26119__$1;(statearr_26148_26179[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (5)))
{var inst_26063 = cljs.core.async.close_BANG_.call(null,out);var state_26119__$1 = state_26119;var statearr_26149_26180 = state_26119__$1;(statearr_26149_26180[(2)] = inst_26063);
(statearr_26149_26180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (14)))
{var inst_26085 = (state_26119[(7)]);var inst_26087 = cljs.core.chunked_seq_QMARK_.call(null,inst_26085);var state_26119__$1 = state_26119;if(inst_26087)
{var statearr_26150_26181 = state_26119__$1;(statearr_26150_26181[(1)] = (17));
} else
{var statearr_26151_26182 = state_26119__$1;(statearr_26151_26182[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (16)))
{var inst_26103 = (state_26119[(2)]);var state_26119__$1 = state_26119;var statearr_26152_26183 = state_26119__$1;(statearr_26152_26183[(2)] = inst_26103);
(statearr_26152_26183[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26120 === (10)))
{var inst_26074 = (state_26119[(11)]);var inst_26072 = (state_26119[(12)]);var inst_26079 = cljs.core._nth.call(null,inst_26072,inst_26074);var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26119__$1,(13),out,inst_26079);
} else
{if((state_val_26120 === (18)))
{var inst_26085 = (state_26119[(7)]);var inst_26094 = cljs.core.first.call(null,inst_26085);var state_26119__$1 = state_26119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26119__$1,(20),out,inst_26094);
} else
{if((state_val_26120 === (8)))
{var inst_26073 = (state_26119[(8)]);var inst_26074 = (state_26119[(11)]);var inst_26076 = (inst_26074 < inst_26073);var inst_26077 = inst_26076;var state_26119__$1 = state_26119;if(cljs.core.truth_(inst_26077))
{var statearr_26153_26184 = state_26119__$1;(statearr_26153_26184[(1)] = (10));
} else
{var statearr_26154_26185 = state_26119__$1;(statearr_26154_26185[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26158[(0)] = state_machine__9111__auto__);
(statearr_26158[(1)] = (1));
return statearr_26158;
});
var state_machine__9111__auto____1 = (function (state_26119){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26119);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26159){if((e26159 instanceof Object))
{var ex__9114__auto__ = e26159;var statearr_26160_26186 = state_26119;(statearr_26160_26186[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26159;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26187 = state_26119;
state_26119 = G__26187;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26119){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26161 = f__9126__auto__.call(null);(statearr_26161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26161;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26284,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26284,out){
return (function (state_26259){var state_val_26260 = (state_26259[(1)]);if((state_val_26260 === (7)))
{var inst_26254 = (state_26259[(2)]);var state_26259__$1 = state_26259;var statearr_26261_26285 = state_26259__$1;(statearr_26261_26285[(2)] = inst_26254);
(statearr_26261_26285[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (1)))
{var inst_26236 = null;var state_26259__$1 = (function (){var statearr_26262 = state_26259;(statearr_26262[(7)] = inst_26236);
return statearr_26262;
})();var statearr_26263_26286 = state_26259__$1;(statearr_26263_26286[(2)] = null);
(statearr_26263_26286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (4)))
{var inst_26239 = (state_26259[(8)]);var inst_26239__$1 = (state_26259[(2)]);var inst_26240 = (inst_26239__$1 == null);var inst_26241 = cljs.core.not.call(null,inst_26240);var state_26259__$1 = (function (){var statearr_26264 = state_26259;(statearr_26264[(8)] = inst_26239__$1);
return statearr_26264;
})();if(inst_26241)
{var statearr_26265_26287 = state_26259__$1;(statearr_26265_26287[(1)] = (5));
} else
{var statearr_26266_26288 = state_26259__$1;(statearr_26266_26288[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (6)))
{var state_26259__$1 = state_26259;var statearr_26267_26289 = state_26259__$1;(statearr_26267_26289[(2)] = null);
(statearr_26267_26289[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (3)))
{var inst_26256 = (state_26259[(2)]);var inst_26257 = cljs.core.async.close_BANG_.call(null,out);var state_26259__$1 = (function (){var statearr_26268 = state_26259;(statearr_26268[(9)] = inst_26256);
return statearr_26268;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26259__$1,inst_26257);
} else
{if((state_val_26260 === (2)))
{var state_26259__$1 = state_26259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26259__$1,(4),ch);
} else
{if((state_val_26260 === (11)))
{var inst_26239 = (state_26259[(8)]);var inst_26248 = (state_26259[(2)]);var inst_26236 = inst_26239;var state_26259__$1 = (function (){var statearr_26269 = state_26259;(statearr_26269[(10)] = inst_26248);
(statearr_26269[(7)] = inst_26236);
return statearr_26269;
})();var statearr_26270_26290 = state_26259__$1;(statearr_26270_26290[(2)] = null);
(statearr_26270_26290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (9)))
{var inst_26239 = (state_26259[(8)]);var state_26259__$1 = state_26259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26259__$1,(11),out,inst_26239);
} else
{if((state_val_26260 === (5)))
{var inst_26236 = (state_26259[(7)]);var inst_26239 = (state_26259[(8)]);var inst_26243 = cljs.core._EQ_.call(null,inst_26239,inst_26236);var state_26259__$1 = state_26259;if(inst_26243)
{var statearr_26272_26291 = state_26259__$1;(statearr_26272_26291[(1)] = (8));
} else
{var statearr_26273_26292 = state_26259__$1;(statearr_26273_26292[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (10)))
{var inst_26251 = (state_26259[(2)]);var state_26259__$1 = state_26259;var statearr_26274_26293 = state_26259__$1;(statearr_26274_26293[(2)] = inst_26251);
(statearr_26274_26293[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26260 === (8)))
{var inst_26236 = (state_26259[(7)]);var tmp26271 = inst_26236;var inst_26236__$1 = tmp26271;var state_26259__$1 = (function (){var statearr_26275 = state_26259;(statearr_26275[(7)] = inst_26236__$1);
return statearr_26275;
})();var statearr_26276_26294 = state_26259__$1;(statearr_26276_26294[(2)] = null);
(statearr_26276_26294[(1)] = (2));
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
});})(c__9125__auto___26284,out))
;return ((function (switch__9110__auto__,c__9125__auto___26284,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26280 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26280[(0)] = state_machine__9111__auto__);
(statearr_26280[(1)] = (1));
return statearr_26280;
});
var state_machine__9111__auto____1 = (function (state_26259){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26259);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26281){if((e26281 instanceof Object))
{var ex__9114__auto__ = e26281;var statearr_26282_26295 = state_26259;(statearr_26282_26295[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26281;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26296 = state_26259;
state_26259 = G__26296;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26259){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26284,out))
})();var state__9127__auto__ = (function (){var statearr_26283 = f__9126__auto__.call(null);(statearr_26283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26284);
return statearr_26283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26284,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26431 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26431,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26431,out){
return (function (state_26401){var state_val_26402 = (state_26401[(1)]);if((state_val_26402 === (7)))
{var inst_26397 = (state_26401[(2)]);var state_26401__$1 = state_26401;var statearr_26403_26432 = state_26401__$1;(statearr_26403_26432[(2)] = inst_26397);
(statearr_26403_26432[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (1)))
{var inst_26364 = (new Array(n));var inst_26365 = inst_26364;var inst_26366 = (0);var state_26401__$1 = (function (){var statearr_26404 = state_26401;(statearr_26404[(7)] = inst_26366);
(statearr_26404[(8)] = inst_26365);
return statearr_26404;
})();var statearr_26405_26433 = state_26401__$1;(statearr_26405_26433[(2)] = null);
(statearr_26405_26433[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (4)))
{var inst_26369 = (state_26401[(9)]);var inst_26369__$1 = (state_26401[(2)]);var inst_26370 = (inst_26369__$1 == null);var inst_26371 = cljs.core.not.call(null,inst_26370);var state_26401__$1 = (function (){var statearr_26406 = state_26401;(statearr_26406[(9)] = inst_26369__$1);
return statearr_26406;
})();if(inst_26371)
{var statearr_26407_26434 = state_26401__$1;(statearr_26407_26434[(1)] = (5));
} else
{var statearr_26408_26435 = state_26401__$1;(statearr_26408_26435[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (15)))
{var inst_26391 = (state_26401[(2)]);var state_26401__$1 = state_26401;var statearr_26409_26436 = state_26401__$1;(statearr_26409_26436[(2)] = inst_26391);
(statearr_26409_26436[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (13)))
{var state_26401__$1 = state_26401;var statearr_26410_26437 = state_26401__$1;(statearr_26410_26437[(2)] = null);
(statearr_26410_26437[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (6)))
{var inst_26366 = (state_26401[(7)]);var inst_26387 = (inst_26366 > (0));var state_26401__$1 = state_26401;if(cljs.core.truth_(inst_26387))
{var statearr_26411_26438 = state_26401__$1;(statearr_26411_26438[(1)] = (12));
} else
{var statearr_26412_26439 = state_26401__$1;(statearr_26412_26439[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (3)))
{var inst_26399 = (state_26401[(2)]);var state_26401__$1 = state_26401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26401__$1,inst_26399);
} else
{if((state_val_26402 === (12)))
{var inst_26365 = (state_26401[(8)]);var inst_26389 = cljs.core.vec.call(null,inst_26365);var state_26401__$1 = state_26401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(15),out,inst_26389);
} else
{if((state_val_26402 === (2)))
{var state_26401__$1 = state_26401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26401__$1,(4),ch);
} else
{if((state_val_26402 === (11)))
{var inst_26381 = (state_26401[(2)]);var inst_26382 = (new Array(n));var inst_26365 = inst_26382;var inst_26366 = (0);var state_26401__$1 = (function (){var statearr_26413 = state_26401;(statearr_26413[(7)] = inst_26366);
(statearr_26413[(10)] = inst_26381);
(statearr_26413[(8)] = inst_26365);
return statearr_26413;
})();var statearr_26414_26440 = state_26401__$1;(statearr_26414_26440[(2)] = null);
(statearr_26414_26440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (9)))
{var inst_26365 = (state_26401[(8)]);var inst_26379 = cljs.core.vec.call(null,inst_26365);var state_26401__$1 = state_26401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26401__$1,(11),out,inst_26379);
} else
{if((state_val_26402 === (5)))
{var inst_26366 = (state_26401[(7)]);var inst_26374 = (state_26401[(11)]);var inst_26369 = (state_26401[(9)]);var inst_26365 = (state_26401[(8)]);var inst_26373 = (inst_26365[inst_26366] = inst_26369);var inst_26374__$1 = (inst_26366 + (1));var inst_26375 = (inst_26374__$1 < n);var state_26401__$1 = (function (){var statearr_26415 = state_26401;(statearr_26415[(12)] = inst_26373);
(statearr_26415[(11)] = inst_26374__$1);
return statearr_26415;
})();if(cljs.core.truth_(inst_26375))
{var statearr_26416_26441 = state_26401__$1;(statearr_26416_26441[(1)] = (8));
} else
{var statearr_26417_26442 = state_26401__$1;(statearr_26417_26442[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (14)))
{var inst_26394 = (state_26401[(2)]);var inst_26395 = cljs.core.async.close_BANG_.call(null,out);var state_26401__$1 = (function (){var statearr_26419 = state_26401;(statearr_26419[(13)] = inst_26394);
return statearr_26419;
})();var statearr_26420_26443 = state_26401__$1;(statearr_26420_26443[(2)] = inst_26395);
(statearr_26420_26443[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (10)))
{var inst_26385 = (state_26401[(2)]);var state_26401__$1 = state_26401;var statearr_26421_26444 = state_26401__$1;(statearr_26421_26444[(2)] = inst_26385);
(statearr_26421_26444[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26402 === (8)))
{var inst_26374 = (state_26401[(11)]);var inst_26365 = (state_26401[(8)]);var tmp26418 = inst_26365;var inst_26365__$1 = tmp26418;var inst_26366 = inst_26374;var state_26401__$1 = (function (){var statearr_26422 = state_26401;(statearr_26422[(7)] = inst_26366);
(statearr_26422[(8)] = inst_26365__$1);
return statearr_26422;
})();var statearr_26423_26445 = state_26401__$1;(statearr_26423_26445[(2)] = null);
(statearr_26423_26445[(1)] = (2));
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
});})(c__9125__auto___26431,out))
;return ((function (switch__9110__auto__,c__9125__auto___26431,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26427[(0)] = state_machine__9111__auto__);
(statearr_26427[(1)] = (1));
return statearr_26427;
});
var state_machine__9111__auto____1 = (function (state_26401){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26401);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26428){if((e26428 instanceof Object))
{var ex__9114__auto__ = e26428;var statearr_26429_26446 = state_26401;(statearr_26429_26446[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26401);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26428;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26447 = state_26401;
state_26401 = G__26447;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26401){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26431,out))
})();var state__9127__auto__ = (function (){var statearr_26430 = f__9126__auto__.call(null);(statearr_26430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26431);
return statearr_26430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26431,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26590,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26590,out){
return (function (state_26560){var state_val_26561 = (state_26560[(1)]);if((state_val_26561 === (7)))
{var inst_26556 = (state_26560[(2)]);var state_26560__$1 = state_26560;var statearr_26562_26591 = state_26560__$1;(statearr_26562_26591[(2)] = inst_26556);
(statearr_26562_26591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (1)))
{var inst_26519 = [];var inst_26520 = inst_26519;var inst_26521 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26560__$1 = (function (){var statearr_26563 = state_26560;(statearr_26563[(7)] = inst_26521);
(statearr_26563[(8)] = inst_26520);
return statearr_26563;
})();var statearr_26564_26592 = state_26560__$1;(statearr_26564_26592[(2)] = null);
(statearr_26564_26592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (4)))
{var inst_26524 = (state_26560[(9)]);var inst_26524__$1 = (state_26560[(2)]);var inst_26525 = (inst_26524__$1 == null);var inst_26526 = cljs.core.not.call(null,inst_26525);var state_26560__$1 = (function (){var statearr_26565 = state_26560;(statearr_26565[(9)] = inst_26524__$1);
return statearr_26565;
})();if(inst_26526)
{var statearr_26566_26593 = state_26560__$1;(statearr_26566_26593[(1)] = (5));
} else
{var statearr_26567_26594 = state_26560__$1;(statearr_26567_26594[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (15)))
{var inst_26550 = (state_26560[(2)]);var state_26560__$1 = state_26560;var statearr_26568_26595 = state_26560__$1;(statearr_26568_26595[(2)] = inst_26550);
(statearr_26568_26595[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (13)))
{var state_26560__$1 = state_26560;var statearr_26569_26596 = state_26560__$1;(statearr_26569_26596[(2)] = null);
(statearr_26569_26596[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (6)))
{var inst_26520 = (state_26560[(8)]);var inst_26545 = inst_26520.length;var inst_26546 = (inst_26545 > (0));var state_26560__$1 = state_26560;if(cljs.core.truth_(inst_26546))
{var statearr_26570_26597 = state_26560__$1;(statearr_26570_26597[(1)] = (12));
} else
{var statearr_26571_26598 = state_26560__$1;(statearr_26571_26598[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (3)))
{var inst_26558 = (state_26560[(2)]);var state_26560__$1 = state_26560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26560__$1,inst_26558);
} else
{if((state_val_26561 === (12)))
{var inst_26520 = (state_26560[(8)]);var inst_26548 = cljs.core.vec.call(null,inst_26520);var state_26560__$1 = state_26560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26560__$1,(15),out,inst_26548);
} else
{if((state_val_26561 === (2)))
{var state_26560__$1 = state_26560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26560__$1,(4),ch);
} else
{if((state_val_26561 === (11)))
{var inst_26524 = (state_26560[(9)]);var inst_26528 = (state_26560[(10)]);var inst_26538 = (state_26560[(2)]);var inst_26539 = [];var inst_26540 = inst_26539.push(inst_26524);var inst_26520 = inst_26539;var inst_26521 = inst_26528;var state_26560__$1 = (function (){var statearr_26572 = state_26560;(statearr_26572[(11)] = inst_26538);
(statearr_26572[(12)] = inst_26540);
(statearr_26572[(7)] = inst_26521);
(statearr_26572[(8)] = inst_26520);
return statearr_26572;
})();var statearr_26573_26599 = state_26560__$1;(statearr_26573_26599[(2)] = null);
(statearr_26573_26599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (9)))
{var inst_26520 = (state_26560[(8)]);var inst_26536 = cljs.core.vec.call(null,inst_26520);var state_26560__$1 = state_26560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26560__$1,(11),out,inst_26536);
} else
{if((state_val_26561 === (5)))
{var inst_26521 = (state_26560[(7)]);var inst_26524 = (state_26560[(9)]);var inst_26528 = (state_26560[(10)]);var inst_26528__$1 = f.call(null,inst_26524);var inst_26529 = cljs.core._EQ_.call(null,inst_26528__$1,inst_26521);var inst_26530 = cljs.core.keyword_identical_QMARK_.call(null,inst_26521,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26531 = (inst_26529) || (inst_26530);var state_26560__$1 = (function (){var statearr_26574 = state_26560;(statearr_26574[(10)] = inst_26528__$1);
return statearr_26574;
})();if(cljs.core.truth_(inst_26531))
{var statearr_26575_26600 = state_26560__$1;(statearr_26575_26600[(1)] = (8));
} else
{var statearr_26576_26601 = state_26560__$1;(statearr_26576_26601[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (14)))
{var inst_26553 = (state_26560[(2)]);var inst_26554 = cljs.core.async.close_BANG_.call(null,out);var state_26560__$1 = (function (){var statearr_26578 = state_26560;(statearr_26578[(13)] = inst_26553);
return statearr_26578;
})();var statearr_26579_26602 = state_26560__$1;(statearr_26579_26602[(2)] = inst_26554);
(statearr_26579_26602[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (10)))
{var inst_26543 = (state_26560[(2)]);var state_26560__$1 = state_26560;var statearr_26580_26603 = state_26560__$1;(statearr_26580_26603[(2)] = inst_26543);
(statearr_26580_26603[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26561 === (8)))
{var inst_26524 = (state_26560[(9)]);var inst_26528 = (state_26560[(10)]);var inst_26520 = (state_26560[(8)]);var inst_26533 = inst_26520.push(inst_26524);var tmp26577 = inst_26520;var inst_26520__$1 = tmp26577;var inst_26521 = inst_26528;var state_26560__$1 = (function (){var statearr_26581 = state_26560;(statearr_26581[(14)] = inst_26533);
(statearr_26581[(7)] = inst_26521);
(statearr_26581[(8)] = inst_26520__$1);
return statearr_26581;
})();var statearr_26582_26604 = state_26560__$1;(statearr_26582_26604[(2)] = null);
(statearr_26582_26604[(1)] = (2));
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
});})(c__9125__auto___26590,out))
;return ((function (switch__9110__auto__,c__9125__auto___26590,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26586[(0)] = state_machine__9111__auto__);
(statearr_26586[(1)] = (1));
return statearr_26586;
});
var state_machine__9111__auto____1 = (function (state_26560){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26560);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26587){if((e26587 instanceof Object))
{var ex__9114__auto__ = e26587;var statearr_26588_26605 = state_26560;(statearr_26588_26605[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26606 = state_26560;
state_26560 = G__26606;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26560){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26590,out))
})();var state__9127__auto__ = (function (){var statearr_26589 = f__9126__auto__.call(null);(statearr_26589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26590);
return statearr_26589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26590,out))
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
