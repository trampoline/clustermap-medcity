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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23517 = (function (f,fn_handler,meta23518){
this.f = f;
this.fn_handler = fn_handler;
this.meta23518 = meta23518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23517.cljs$lang$type = true;
cljs.core.async.t23517.cljs$lang$ctorStr = "cljs.core.async/t23517";
cljs.core.async.t23517.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23517");
});
cljs.core.async.t23517.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23519){var self__ = this;
var _23519__$1 = this;return self__.meta23518;
});
cljs.core.async.t23517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23519,meta23518__$1){var self__ = this;
var _23519__$1 = this;return (new cljs.core.async.t23517(self__.f,self__.fn_handler,meta23518__$1));
});
cljs.core.async.__GT_t23517 = (function __GT_t23517(f__$1,fn_handler__$1,meta23518){return (new cljs.core.async.t23517(f__$1,fn_handler__$1,meta23518));
});
}
return (new cljs.core.async.t23517(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23521 = buff;if(G__23521)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23521.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23521.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23521);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23521);
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
{var val_23522 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23522);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23522,ret){
return (function (){return fn1.call(null,val_23522);
});})(val_23522,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23523 = n;var x_23524 = (0);while(true){
if((x_23524 < n__4508__auto___23523))
{(a[x_23524] = (0));
{
var G__23525 = (x_23524 + (1));
x_23524 = G__23525;
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
var G__23526 = (i + (1));
i = G__23526;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23530 = (function (flag,alt_flag,meta23531){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23531 = meta23531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23530.cljs$lang$type = true;
cljs.core.async.t23530.cljs$lang$ctorStr = "cljs.core.async/t23530";
cljs.core.async.t23530.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23530");
});})(flag))
;
cljs.core.async.t23530.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23532){var self__ = this;
var _23532__$1 = this;return self__.meta23531;
});})(flag))
;
cljs.core.async.t23530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23532,meta23531__$1){var self__ = this;
var _23532__$1 = this;return (new cljs.core.async.t23530(self__.flag,self__.alt_flag,meta23531__$1));
});})(flag))
;
cljs.core.async.__GT_t23530 = ((function (flag){
return (function __GT_t23530(flag__$1,alt_flag__$1,meta23531){return (new cljs.core.async.t23530(flag__$1,alt_flag__$1,meta23531));
});})(flag))
;
}
return (new cljs.core.async.t23530(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23536 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23536 = (function (cb,flag,alt_handler,meta23537){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23537 = meta23537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23536.cljs$lang$type = true;
cljs.core.async.t23536.cljs$lang$ctorStr = "cljs.core.async/t23536";
cljs.core.async.t23536.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23536");
});
cljs.core.async.t23536.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23538){var self__ = this;
var _23538__$1 = this;return self__.meta23537;
});
cljs.core.async.t23536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23538,meta23537__$1){var self__ = this;
var _23538__$1 = this;return (new cljs.core.async.t23536(self__.cb,self__.flag,self__.alt_handler,meta23537__$1));
});
cljs.core.async.__GT_t23536 = (function __GT_t23536(cb__$1,flag__$1,alt_handler__$1,meta23537){return (new cljs.core.async.t23536(cb__$1,flag__$1,alt_handler__$1,meta23537));
});
}
return (new cljs.core.async.t23536(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23539_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23539_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23540_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23540_SHARP_,port], null));
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
var G__23541 = (i + (1));
i = G__23541;
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
var alts_BANG___delegate = function (ports,p__23542){var map__23544 = p__23542;var map__23544__$1 = ((cljs.core.seq_QMARK_.call(null,map__23544))?cljs.core.apply.call(null,cljs.core.hash_map,map__23544):map__23544);var opts = map__23544__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23542 = null;if (arguments.length > 1) {
  p__23542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23542);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23545){
var ports = cljs.core.first(arglist__23545);
var p__23542 = cljs.core.rest(arglist__23545);
return alts_BANG___delegate(ports,p__23542);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23640 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23640){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23640){
return (function (state_23616){var state_val_23617 = (state_23616[(1)]);if((state_val_23617 === (7)))
{var inst_23612 = (state_23616[(2)]);var state_23616__$1 = state_23616;var statearr_23618_23641 = state_23616__$1;(statearr_23618_23641[(2)] = inst_23612);
(statearr_23618_23641[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (1)))
{var state_23616__$1 = state_23616;var statearr_23619_23642 = state_23616__$1;(statearr_23619_23642[(2)] = null);
(statearr_23619_23642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (4)))
{var inst_23595 = (state_23616[(7)]);var inst_23595__$1 = (state_23616[(2)]);var inst_23596 = (inst_23595__$1 == null);var state_23616__$1 = (function (){var statearr_23620 = state_23616;(statearr_23620[(7)] = inst_23595__$1);
return statearr_23620;
})();if(cljs.core.truth_(inst_23596))
{var statearr_23621_23643 = state_23616__$1;(statearr_23621_23643[(1)] = (5));
} else
{var statearr_23622_23644 = state_23616__$1;(statearr_23622_23644[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (13)))
{var state_23616__$1 = state_23616;var statearr_23623_23645 = state_23616__$1;(statearr_23623_23645[(2)] = null);
(statearr_23623_23645[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (6)))
{var inst_23595 = (state_23616[(7)]);var state_23616__$1 = state_23616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23616__$1,(11),to,inst_23595);
} else
{if((state_val_23617 === (3)))
{var inst_23614 = (state_23616[(2)]);var state_23616__$1 = state_23616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23616__$1,inst_23614);
} else
{if((state_val_23617 === (12)))
{var state_23616__$1 = state_23616;var statearr_23624_23646 = state_23616__$1;(statearr_23624_23646[(2)] = null);
(statearr_23624_23646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (2)))
{var state_23616__$1 = state_23616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23616__$1,(4),from);
} else
{if((state_val_23617 === (11)))
{var inst_23605 = (state_23616[(2)]);var state_23616__$1 = state_23616;if(cljs.core.truth_(inst_23605))
{var statearr_23625_23647 = state_23616__$1;(statearr_23625_23647[(1)] = (12));
} else
{var statearr_23626_23648 = state_23616__$1;(statearr_23626_23648[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (9)))
{var state_23616__$1 = state_23616;var statearr_23627_23649 = state_23616__$1;(statearr_23627_23649[(2)] = null);
(statearr_23627_23649[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (5)))
{var state_23616__$1 = state_23616;if(cljs.core.truth_(close_QMARK_))
{var statearr_23628_23650 = state_23616__$1;(statearr_23628_23650[(1)] = (8));
} else
{var statearr_23629_23651 = state_23616__$1;(statearr_23629_23651[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (14)))
{var inst_23610 = (state_23616[(2)]);var state_23616__$1 = state_23616;var statearr_23630_23652 = state_23616__$1;(statearr_23630_23652[(2)] = inst_23610);
(statearr_23630_23652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (10)))
{var inst_23602 = (state_23616[(2)]);var state_23616__$1 = state_23616;var statearr_23631_23653 = state_23616__$1;(statearr_23631_23653[(2)] = inst_23602);
(statearr_23631_23653[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23617 === (8)))
{var inst_23599 = cljs.core.async.close_BANG_.call(null,to);var state_23616__$1 = state_23616;var statearr_23632_23654 = state_23616__$1;(statearr_23632_23654[(2)] = inst_23599);
(statearr_23632_23654[(1)] = (10));
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
});})(c__9125__auto___23640))
;return ((function (switch__9110__auto__,c__9125__auto___23640){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23636 = [null,null,null,null,null,null,null,null];(statearr_23636[(0)] = state_machine__9111__auto__);
(statearr_23636[(1)] = (1));
return statearr_23636;
});
var state_machine__9111__auto____1 = (function (state_23616){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23616);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23637){if((e23637 instanceof Object))
{var ex__9114__auto__ = e23637;var statearr_23638_23655 = state_23616;(statearr_23638_23655[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23637;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23656 = state_23616;
state_23616 = G__23656;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23616){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23640))
})();var state__9127__auto__ = (function (){var statearr_23639 = f__9126__auto__.call(null);(statearr_23639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23640);
return statearr_23639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23640))
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
return (function (p__23840){var vec__23841 = p__23840;var v = cljs.core.nth.call(null,vec__23841,(0),null);var p = cljs.core.nth.call(null,vec__23841,(1),null);var job = vec__23841;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___24023 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24023,res,vec__23841,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24023,res,vec__23841,v,p,job,jobs,results){
return (function (state_23846){var state_val_23847 = (state_23846[(1)]);if((state_val_23847 === (2)))
{var inst_23843 = (state_23846[(2)]);var inst_23844 = cljs.core.async.close_BANG_.call(null,res);var state_23846__$1 = (function (){var statearr_23848 = state_23846;(statearr_23848[(7)] = inst_23843);
return statearr_23848;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23846__$1,inst_23844);
} else
{if((state_val_23847 === (1)))
{var state_23846__$1 = state_23846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23846__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___24023,res,vec__23841,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___24023,res,vec__23841,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23852 = [null,null,null,null,null,null,null,null];(statearr_23852[(0)] = state_machine__9111__auto__);
(statearr_23852[(1)] = (1));
return statearr_23852;
});
var state_machine__9111__auto____1 = (function (state_23846){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23846);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23853){if((e23853 instanceof Object))
{var ex__9114__auto__ = e23853;var statearr_23854_24024 = state_23846;(statearr_23854_24024[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24025 = state_23846;
state_23846 = G__24025;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23846){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24023,res,vec__23841,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23855 = f__9126__auto__.call(null);(statearr_23855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24023);
return statearr_23855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24023,res,vec__23841,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23856){var vec__23857 = p__23856;var v = cljs.core.nth.call(null,vec__23857,(0),null);var p = cljs.core.nth.call(null,vec__23857,(1),null);var job = vec__23857;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24026 = n;var __24027 = (0);while(true){
if((__24027 < n__4508__auto___24026))
{var G__23858_24028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23858_24028) {
case "async":
var c__9125__auto___24030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24027,c__9125__auto___24030,G__23858_24028,n__4508__auto___24026,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24027,c__9125__auto___24030,G__23858_24028,n__4508__auto___24026,jobs,results,process,async){
return (function (state_23871){var state_val_23872 = (state_23871[(1)]);if((state_val_23872 === (7)))
{var inst_23867 = (state_23871[(2)]);var state_23871__$1 = state_23871;var statearr_23873_24031 = state_23871__$1;(statearr_23873_24031[(2)] = inst_23867);
(statearr_23873_24031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23872 === (6)))
{var state_23871__$1 = state_23871;var statearr_23874_24032 = state_23871__$1;(statearr_23874_24032[(2)] = null);
(statearr_23874_24032[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23872 === (5)))
{var state_23871__$1 = state_23871;var statearr_23875_24033 = state_23871__$1;(statearr_23875_24033[(2)] = null);
(statearr_23875_24033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23872 === (4)))
{var inst_23861 = (state_23871[(2)]);var inst_23862 = async.call(null,inst_23861);var state_23871__$1 = state_23871;if(cljs.core.truth_(inst_23862))
{var statearr_23876_24034 = state_23871__$1;(statearr_23876_24034[(1)] = (5));
} else
{var statearr_23877_24035 = state_23871__$1;(statearr_23877_24035[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23872 === (3)))
{var inst_23869 = (state_23871[(2)]);var state_23871__$1 = state_23871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23871__$1,inst_23869);
} else
{if((state_val_23872 === (2)))
{var state_23871__$1 = state_23871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23871__$1,(4),jobs);
} else
{if((state_val_23872 === (1)))
{var state_23871__$1 = state_23871;var statearr_23878_24036 = state_23871__$1;(statearr_23878_24036[(2)] = null);
(statearr_23878_24036[(1)] = (2));
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
});})(__24027,c__9125__auto___24030,G__23858_24028,n__4508__auto___24026,jobs,results,process,async))
;return ((function (__24027,switch__9110__auto__,c__9125__auto___24030,G__23858_24028,n__4508__auto___24026,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23882 = [null,null,null,null,null,null,null];(statearr_23882[(0)] = state_machine__9111__auto__);
(statearr_23882[(1)] = (1));
return statearr_23882;
});
var state_machine__9111__auto____1 = (function (state_23871){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23871);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23883){if((e23883 instanceof Object))
{var ex__9114__auto__ = e23883;var statearr_23884_24037 = state_23871;(statearr_23884_24037[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23871);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23883;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24038 = state_23871;
state_23871 = G__24038;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23871){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24027,switch__9110__auto__,c__9125__auto___24030,G__23858_24028,n__4508__auto___24026,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23885 = f__9126__auto__.call(null);(statearr_23885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24030);
return statearr_23885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24027,c__9125__auto___24030,G__23858_24028,n__4508__auto___24026,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24039 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24027,c__9125__auto___24039,G__23858_24028,n__4508__auto___24026,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24027,c__9125__auto___24039,G__23858_24028,n__4508__auto___24026,jobs,results,process,async){
return (function (state_23898){var state_val_23899 = (state_23898[(1)]);if((state_val_23899 === (7)))
{var inst_23894 = (state_23898[(2)]);var state_23898__$1 = state_23898;var statearr_23900_24040 = state_23898__$1;(statearr_23900_24040[(2)] = inst_23894);
(statearr_23900_24040[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23899 === (6)))
{var state_23898__$1 = state_23898;var statearr_23901_24041 = state_23898__$1;(statearr_23901_24041[(2)] = null);
(statearr_23901_24041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23899 === (5)))
{var state_23898__$1 = state_23898;var statearr_23902_24042 = state_23898__$1;(statearr_23902_24042[(2)] = null);
(statearr_23902_24042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23899 === (4)))
{var inst_23888 = (state_23898[(2)]);var inst_23889 = process.call(null,inst_23888);var state_23898__$1 = state_23898;if(cljs.core.truth_(inst_23889))
{var statearr_23903_24043 = state_23898__$1;(statearr_23903_24043[(1)] = (5));
} else
{var statearr_23904_24044 = state_23898__$1;(statearr_23904_24044[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23899 === (3)))
{var inst_23896 = (state_23898[(2)]);var state_23898__$1 = state_23898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23898__$1,inst_23896);
} else
{if((state_val_23899 === (2)))
{var state_23898__$1 = state_23898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23898__$1,(4),jobs);
} else
{if((state_val_23899 === (1)))
{var state_23898__$1 = state_23898;var statearr_23905_24045 = state_23898__$1;(statearr_23905_24045[(2)] = null);
(statearr_23905_24045[(1)] = (2));
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
});})(__24027,c__9125__auto___24039,G__23858_24028,n__4508__auto___24026,jobs,results,process,async))
;return ((function (__24027,switch__9110__auto__,c__9125__auto___24039,G__23858_24028,n__4508__auto___24026,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23909 = [null,null,null,null,null,null,null];(statearr_23909[(0)] = state_machine__9111__auto__);
(statearr_23909[(1)] = (1));
return statearr_23909;
});
var state_machine__9111__auto____1 = (function (state_23898){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23898);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23910){if((e23910 instanceof Object))
{var ex__9114__auto__ = e23910;var statearr_23911_24046 = state_23898;(statearr_23911_24046[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23910;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24047 = state_23898;
state_23898 = G__24047;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23898){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24027,switch__9110__auto__,c__9125__auto___24039,G__23858_24028,n__4508__auto___24026,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23912 = f__9126__auto__.call(null);(statearr_23912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24039);
return statearr_23912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24027,c__9125__auto___24039,G__23858_24028,n__4508__auto___24026,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24048 = (__24027 + (1));
__24027 = G__24048;
continue;
}
} else
{}
break;
}
var c__9125__auto___24049 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24049,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24049,jobs,results,process,async){
return (function (state_23934){var state_val_23935 = (state_23934[(1)]);if((state_val_23935 === (9)))
{var inst_23927 = (state_23934[(2)]);var state_23934__$1 = (function (){var statearr_23936 = state_23934;(statearr_23936[(7)] = inst_23927);
return statearr_23936;
})();var statearr_23937_24050 = state_23934__$1;(statearr_23937_24050[(2)] = null);
(statearr_23937_24050[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23935 === (8)))
{var inst_23920 = (state_23934[(8)]);var inst_23925 = (state_23934[(2)]);var state_23934__$1 = (function (){var statearr_23938 = state_23934;(statearr_23938[(9)] = inst_23925);
return statearr_23938;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23934__$1,(9),results,inst_23920);
} else
{if((state_val_23935 === (7)))
{var inst_23930 = (state_23934[(2)]);var state_23934__$1 = state_23934;var statearr_23939_24051 = state_23934__$1;(statearr_23939_24051[(2)] = inst_23930);
(statearr_23939_24051[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23935 === (6)))
{var inst_23915 = (state_23934[(10)]);var inst_23920 = (state_23934[(8)]);var inst_23920__$1 = cljs.core.async.chan.call(null,(1));var inst_23921 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23922 = [inst_23915,inst_23920__$1];var inst_23923 = (new cljs.core.PersistentVector(null,2,(5),inst_23921,inst_23922,null));var state_23934__$1 = (function (){var statearr_23940 = state_23934;(statearr_23940[(8)] = inst_23920__$1);
return statearr_23940;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23934__$1,(8),jobs,inst_23923);
} else
{if((state_val_23935 === (5)))
{var inst_23918 = cljs.core.async.close_BANG_.call(null,jobs);var state_23934__$1 = state_23934;var statearr_23941_24052 = state_23934__$1;(statearr_23941_24052[(2)] = inst_23918);
(statearr_23941_24052[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23935 === (4)))
{var inst_23915 = (state_23934[(10)]);var inst_23915__$1 = (state_23934[(2)]);var inst_23916 = (inst_23915__$1 == null);var state_23934__$1 = (function (){var statearr_23942 = state_23934;(statearr_23942[(10)] = inst_23915__$1);
return statearr_23942;
})();if(cljs.core.truth_(inst_23916))
{var statearr_23943_24053 = state_23934__$1;(statearr_23943_24053[(1)] = (5));
} else
{var statearr_23944_24054 = state_23934__$1;(statearr_23944_24054[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23935 === (3)))
{var inst_23932 = (state_23934[(2)]);var state_23934__$1 = state_23934;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23934__$1,inst_23932);
} else
{if((state_val_23935 === (2)))
{var state_23934__$1 = state_23934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23934__$1,(4),from);
} else
{if((state_val_23935 === (1)))
{var state_23934__$1 = state_23934;var statearr_23945_24055 = state_23934__$1;(statearr_23945_24055[(2)] = null);
(statearr_23945_24055[(1)] = (2));
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
});})(c__9125__auto___24049,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24049,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23949 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23949[(0)] = state_machine__9111__auto__);
(statearr_23949[(1)] = (1));
return statearr_23949;
});
var state_machine__9111__auto____1 = (function (state_23934){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23934);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23950){if((e23950 instanceof Object))
{var ex__9114__auto__ = e23950;var statearr_23951_24056 = state_23934;(statearr_23951_24056[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24057 = state_23934;
state_23934 = G__24057;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23934){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24049,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23952 = f__9126__auto__.call(null);(statearr_23952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24049);
return statearr_23952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24049,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23990){var state_val_23991 = (state_23990[(1)]);if((state_val_23991 === (7)))
{var inst_23986 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_23992_24058 = state_23990__$1;(statearr_23992_24058[(2)] = inst_23986);
(statearr_23992_24058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (20)))
{var state_23990__$1 = state_23990;var statearr_23993_24059 = state_23990__$1;(statearr_23993_24059[(2)] = null);
(statearr_23993_24059[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (1)))
{var state_23990__$1 = state_23990;var statearr_23994_24060 = state_23990__$1;(statearr_23994_24060[(2)] = null);
(statearr_23994_24060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (4)))
{var inst_23955 = (state_23990[(7)]);var inst_23955__$1 = (state_23990[(2)]);var inst_23956 = (inst_23955__$1 == null);var state_23990__$1 = (function (){var statearr_23995 = state_23990;(statearr_23995[(7)] = inst_23955__$1);
return statearr_23995;
})();if(cljs.core.truth_(inst_23956))
{var statearr_23996_24061 = state_23990__$1;(statearr_23996_24061[(1)] = (5));
} else
{var statearr_23997_24062 = state_23990__$1;(statearr_23997_24062[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (15)))
{var inst_23968 = (state_23990[(8)]);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23990__$1,(18),to,inst_23968);
} else
{if((state_val_23991 === (21)))
{var inst_23981 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_23998_24063 = state_23990__$1;(statearr_23998_24063[(2)] = inst_23981);
(statearr_23998_24063[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (13)))
{var inst_23983 = (state_23990[(2)]);var state_23990__$1 = (function (){var statearr_23999 = state_23990;(statearr_23999[(9)] = inst_23983);
return statearr_23999;
})();var statearr_24000_24064 = state_23990__$1;(statearr_24000_24064[(2)] = null);
(statearr_24000_24064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (6)))
{var inst_23955 = (state_23990[(7)]);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23990__$1,(11),inst_23955);
} else
{if((state_val_23991 === (17)))
{var inst_23976 = (state_23990[(2)]);var state_23990__$1 = state_23990;if(cljs.core.truth_(inst_23976))
{var statearr_24001_24065 = state_23990__$1;(statearr_24001_24065[(1)] = (19));
} else
{var statearr_24002_24066 = state_23990__$1;(statearr_24002_24066[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (3)))
{var inst_23988 = (state_23990[(2)]);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23990__$1,inst_23988);
} else
{if((state_val_23991 === (12)))
{var inst_23965 = (state_23990[(10)]);var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23990__$1,(14),inst_23965);
} else
{if((state_val_23991 === (2)))
{var state_23990__$1 = state_23990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23990__$1,(4),results);
} else
{if((state_val_23991 === (19)))
{var state_23990__$1 = state_23990;var statearr_24003_24067 = state_23990__$1;(statearr_24003_24067[(2)] = null);
(statearr_24003_24067[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (11)))
{var inst_23965 = (state_23990[(2)]);var state_23990__$1 = (function (){var statearr_24004 = state_23990;(statearr_24004[(10)] = inst_23965);
return statearr_24004;
})();var statearr_24005_24068 = state_23990__$1;(statearr_24005_24068[(2)] = null);
(statearr_24005_24068[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (9)))
{var state_23990__$1 = state_23990;var statearr_24006_24069 = state_23990__$1;(statearr_24006_24069[(2)] = null);
(statearr_24006_24069[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (5)))
{var state_23990__$1 = state_23990;if(cljs.core.truth_(close_QMARK_))
{var statearr_24007_24070 = state_23990__$1;(statearr_24007_24070[(1)] = (8));
} else
{var statearr_24008_24071 = state_23990__$1;(statearr_24008_24071[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (14)))
{var inst_23970 = (state_23990[(11)]);var inst_23968 = (state_23990[(8)]);var inst_23968__$1 = (state_23990[(2)]);var inst_23969 = (inst_23968__$1 == null);var inst_23970__$1 = cljs.core.not.call(null,inst_23969);var state_23990__$1 = (function (){var statearr_24009 = state_23990;(statearr_24009[(11)] = inst_23970__$1);
(statearr_24009[(8)] = inst_23968__$1);
return statearr_24009;
})();if(inst_23970__$1)
{var statearr_24010_24072 = state_23990__$1;(statearr_24010_24072[(1)] = (15));
} else
{var statearr_24011_24073 = state_23990__$1;(statearr_24011_24073[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (16)))
{var inst_23970 = (state_23990[(11)]);var state_23990__$1 = state_23990;var statearr_24012_24074 = state_23990__$1;(statearr_24012_24074[(2)] = inst_23970);
(statearr_24012_24074[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (10)))
{var inst_23962 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_24013_24075 = state_23990__$1;(statearr_24013_24075[(2)] = inst_23962);
(statearr_24013_24075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (18)))
{var inst_23973 = (state_23990[(2)]);var state_23990__$1 = state_23990;var statearr_24014_24076 = state_23990__$1;(statearr_24014_24076[(2)] = inst_23973);
(statearr_24014_24076[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23991 === (8)))
{var inst_23959 = cljs.core.async.close_BANG_.call(null,to);var state_23990__$1 = state_23990;var statearr_24015_24077 = state_23990__$1;(statearr_24015_24077[(2)] = inst_23959);
(statearr_24015_24077[(1)] = (10));
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
var state_machine__9111__auto____0 = (function (){var statearr_24019 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24019[(0)] = state_machine__9111__auto__);
(statearr_24019[(1)] = (1));
return statearr_24019;
});
var state_machine__9111__auto____1 = (function (state_23990){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23990);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24020){if((e24020 instanceof Object))
{var ex__9114__auto__ = e24020;var statearr_24021_24078 = state_23990;(statearr_24021_24078[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24020;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24079 = state_23990;
state_23990 = G__24079;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23990){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_24022 = f__9126__auto__.call(null);(statearr_24022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24022;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24180 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24180,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24180,tc,fc){
return (function (state_24155){var state_val_24156 = (state_24155[(1)]);if((state_val_24156 === (7)))
{var inst_24151 = (state_24155[(2)]);var state_24155__$1 = state_24155;var statearr_24157_24181 = state_24155__$1;(statearr_24157_24181[(2)] = inst_24151);
(statearr_24157_24181[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (1)))
{var state_24155__$1 = state_24155;var statearr_24158_24182 = state_24155__$1;(statearr_24158_24182[(2)] = null);
(statearr_24158_24182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (4)))
{var inst_24132 = (state_24155[(7)]);var inst_24132__$1 = (state_24155[(2)]);var inst_24133 = (inst_24132__$1 == null);var state_24155__$1 = (function (){var statearr_24159 = state_24155;(statearr_24159[(7)] = inst_24132__$1);
return statearr_24159;
})();if(cljs.core.truth_(inst_24133))
{var statearr_24160_24183 = state_24155__$1;(statearr_24160_24183[(1)] = (5));
} else
{var statearr_24161_24184 = state_24155__$1;(statearr_24161_24184[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (13)))
{var state_24155__$1 = state_24155;var statearr_24162_24185 = state_24155__$1;(statearr_24162_24185[(2)] = null);
(statearr_24162_24185[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (6)))
{var inst_24132 = (state_24155[(7)]);var inst_24138 = p.call(null,inst_24132);var state_24155__$1 = state_24155;if(cljs.core.truth_(inst_24138))
{var statearr_24163_24186 = state_24155__$1;(statearr_24163_24186[(1)] = (9));
} else
{var statearr_24164_24187 = state_24155__$1;(statearr_24164_24187[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (3)))
{var inst_24153 = (state_24155[(2)]);var state_24155__$1 = state_24155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24155__$1,inst_24153);
} else
{if((state_val_24156 === (12)))
{var state_24155__$1 = state_24155;var statearr_24165_24188 = state_24155__$1;(statearr_24165_24188[(2)] = null);
(statearr_24165_24188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (2)))
{var state_24155__$1 = state_24155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24155__$1,(4),ch);
} else
{if((state_val_24156 === (11)))
{var inst_24132 = (state_24155[(7)]);var inst_24142 = (state_24155[(2)]);var state_24155__$1 = state_24155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24155__$1,(8),inst_24142,inst_24132);
} else
{if((state_val_24156 === (9)))
{var state_24155__$1 = state_24155;var statearr_24166_24189 = state_24155__$1;(statearr_24166_24189[(2)] = tc);
(statearr_24166_24189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (5)))
{var inst_24135 = cljs.core.async.close_BANG_.call(null,tc);var inst_24136 = cljs.core.async.close_BANG_.call(null,fc);var state_24155__$1 = (function (){var statearr_24167 = state_24155;(statearr_24167[(8)] = inst_24135);
return statearr_24167;
})();var statearr_24168_24190 = state_24155__$1;(statearr_24168_24190[(2)] = inst_24136);
(statearr_24168_24190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (14)))
{var inst_24149 = (state_24155[(2)]);var state_24155__$1 = state_24155;var statearr_24169_24191 = state_24155__$1;(statearr_24169_24191[(2)] = inst_24149);
(statearr_24169_24191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (10)))
{var state_24155__$1 = state_24155;var statearr_24170_24192 = state_24155__$1;(statearr_24170_24192[(2)] = fc);
(statearr_24170_24192[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24156 === (8)))
{var inst_24144 = (state_24155[(2)]);var state_24155__$1 = state_24155;if(cljs.core.truth_(inst_24144))
{var statearr_24171_24193 = state_24155__$1;(statearr_24171_24193[(1)] = (12));
} else
{var statearr_24172_24194 = state_24155__$1;(statearr_24172_24194[(1)] = (13));
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
});})(c__9125__auto___24180,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24180,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24176 = [null,null,null,null,null,null,null,null,null];(statearr_24176[(0)] = state_machine__9111__auto__);
(statearr_24176[(1)] = (1));
return statearr_24176;
});
var state_machine__9111__auto____1 = (function (state_24155){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24155);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24177){if((e24177 instanceof Object))
{var ex__9114__auto__ = e24177;var statearr_24178_24195 = state_24155;(statearr_24178_24195[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24196 = state_24155;
state_24155 = G__24196;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24155){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24180,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24179 = f__9126__auto__.call(null);(statearr_24179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24180);
return statearr_24179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24180,tc,fc))
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
return (function (state_24243){var state_val_24244 = (state_24243[(1)]);if((state_val_24244 === (7)))
{var inst_24239 = (state_24243[(2)]);var state_24243__$1 = state_24243;var statearr_24245_24261 = state_24243__$1;(statearr_24245_24261[(2)] = inst_24239);
(statearr_24245_24261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24244 === (6)))
{var inst_24232 = (state_24243[(7)]);var inst_24229 = (state_24243[(8)]);var inst_24236 = f.call(null,inst_24229,inst_24232);var inst_24229__$1 = inst_24236;var state_24243__$1 = (function (){var statearr_24246 = state_24243;(statearr_24246[(8)] = inst_24229__$1);
return statearr_24246;
})();var statearr_24247_24262 = state_24243__$1;(statearr_24247_24262[(2)] = null);
(statearr_24247_24262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24244 === (5)))
{var inst_24229 = (state_24243[(8)]);var state_24243__$1 = state_24243;var statearr_24248_24263 = state_24243__$1;(statearr_24248_24263[(2)] = inst_24229);
(statearr_24248_24263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24244 === (4)))
{var inst_24232 = (state_24243[(7)]);var inst_24232__$1 = (state_24243[(2)]);var inst_24233 = (inst_24232__$1 == null);var state_24243__$1 = (function (){var statearr_24249 = state_24243;(statearr_24249[(7)] = inst_24232__$1);
return statearr_24249;
})();if(cljs.core.truth_(inst_24233))
{var statearr_24250_24264 = state_24243__$1;(statearr_24250_24264[(1)] = (5));
} else
{var statearr_24251_24265 = state_24243__$1;(statearr_24251_24265[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24244 === (3)))
{var inst_24241 = (state_24243[(2)]);var state_24243__$1 = state_24243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24243__$1,inst_24241);
} else
{if((state_val_24244 === (2)))
{var state_24243__$1 = state_24243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24243__$1,(4),ch);
} else
{if((state_val_24244 === (1)))
{var inst_24229 = init;var state_24243__$1 = (function (){var statearr_24252 = state_24243;(statearr_24252[(8)] = inst_24229);
return statearr_24252;
})();var statearr_24253_24266 = state_24243__$1;(statearr_24253_24266[(2)] = null);
(statearr_24253_24266[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24257 = [null,null,null,null,null,null,null,null,null];(statearr_24257[(0)] = state_machine__9111__auto__);
(statearr_24257[(1)] = (1));
return statearr_24257;
});
var state_machine__9111__auto____1 = (function (state_24243){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24243);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24258){if((e24258 instanceof Object))
{var ex__9114__auto__ = e24258;var statearr_24259_24267 = state_24243;(statearr_24259_24267[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24258;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24268 = state_24243;
state_24243 = G__24268;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24243){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24260 = f__9126__auto__.call(null);(statearr_24260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24260;
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
return (function (state_24342){var state_val_24343 = (state_24342[(1)]);if((state_val_24343 === (7)))
{var inst_24324 = (state_24342[(2)]);var state_24342__$1 = state_24342;var statearr_24344_24367 = state_24342__$1;(statearr_24344_24367[(2)] = inst_24324);
(statearr_24344_24367[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (1)))
{var inst_24318 = cljs.core.seq.call(null,coll);var inst_24319 = inst_24318;var state_24342__$1 = (function (){var statearr_24345 = state_24342;(statearr_24345[(7)] = inst_24319);
return statearr_24345;
})();var statearr_24346_24368 = state_24342__$1;(statearr_24346_24368[(2)] = null);
(statearr_24346_24368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (4)))
{var inst_24319 = (state_24342[(7)]);var inst_24322 = cljs.core.first.call(null,inst_24319);var state_24342__$1 = state_24342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24342__$1,(7),ch,inst_24322);
} else
{if((state_val_24343 === (13)))
{var inst_24336 = (state_24342[(2)]);var state_24342__$1 = state_24342;var statearr_24347_24369 = state_24342__$1;(statearr_24347_24369[(2)] = inst_24336);
(statearr_24347_24369[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (6)))
{var inst_24327 = (state_24342[(2)]);var state_24342__$1 = state_24342;if(cljs.core.truth_(inst_24327))
{var statearr_24348_24370 = state_24342__$1;(statearr_24348_24370[(1)] = (8));
} else
{var statearr_24349_24371 = state_24342__$1;(statearr_24349_24371[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (3)))
{var inst_24340 = (state_24342[(2)]);var state_24342__$1 = state_24342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else
{if((state_val_24343 === (12)))
{var state_24342__$1 = state_24342;var statearr_24350_24372 = state_24342__$1;(statearr_24350_24372[(2)] = null);
(statearr_24350_24372[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (2)))
{var inst_24319 = (state_24342[(7)]);var state_24342__$1 = state_24342;if(cljs.core.truth_(inst_24319))
{var statearr_24351_24373 = state_24342__$1;(statearr_24351_24373[(1)] = (4));
} else
{var statearr_24352_24374 = state_24342__$1;(statearr_24352_24374[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (11)))
{var inst_24333 = cljs.core.async.close_BANG_.call(null,ch);var state_24342__$1 = state_24342;var statearr_24353_24375 = state_24342__$1;(statearr_24353_24375[(2)] = inst_24333);
(statearr_24353_24375[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (9)))
{var state_24342__$1 = state_24342;if(cljs.core.truth_(close_QMARK_))
{var statearr_24354_24376 = state_24342__$1;(statearr_24354_24376[(1)] = (11));
} else
{var statearr_24355_24377 = state_24342__$1;(statearr_24355_24377[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (5)))
{var inst_24319 = (state_24342[(7)]);var state_24342__$1 = state_24342;var statearr_24356_24378 = state_24342__$1;(statearr_24356_24378[(2)] = inst_24319);
(statearr_24356_24378[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (10)))
{var inst_24338 = (state_24342[(2)]);var state_24342__$1 = state_24342;var statearr_24357_24379 = state_24342__$1;(statearr_24357_24379[(2)] = inst_24338);
(statearr_24357_24379[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24343 === (8)))
{var inst_24319 = (state_24342[(7)]);var inst_24329 = cljs.core.next.call(null,inst_24319);var inst_24319__$1 = inst_24329;var state_24342__$1 = (function (){var statearr_24358 = state_24342;(statearr_24358[(7)] = inst_24319__$1);
return statearr_24358;
})();var statearr_24359_24380 = state_24342__$1;(statearr_24359_24380[(2)] = null);
(statearr_24359_24380[(1)] = (2));
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
var state_machine__9111__auto____0 = (function (){var statearr_24363 = [null,null,null,null,null,null,null,null];(statearr_24363[(0)] = state_machine__9111__auto__);
(statearr_24363[(1)] = (1));
return statearr_24363;
});
var state_machine__9111__auto____1 = (function (state_24342){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24342);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24364){if((e24364 instanceof Object))
{var ex__9114__auto__ = e24364;var statearr_24365_24381 = state_24342;(statearr_24365_24381[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24364;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24382 = state_24342;
state_24342 = G__24382;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24366 = f__9126__auto__.call(null);(statearr_24366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24366;
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
cljs.core.async.Mux = (function (){var obj24384 = {};return obj24384;
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
cljs.core.async.Mult = (function (){var obj24386 = {};return obj24386;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24608 = (function (cs,ch,mult,meta24609){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24609 = meta24609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24608.cljs$lang$type = true;
cljs.core.async.t24608.cljs$lang$ctorStr = "cljs.core.async/t24608";
cljs.core.async.t24608.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24608");
});})(cs))
;
cljs.core.async.t24608.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24608.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24608.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24608.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24608.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24610){var self__ = this;
var _24610__$1 = this;return self__.meta24609;
});})(cs))
;
cljs.core.async.t24608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24610,meta24609__$1){var self__ = this;
var _24610__$1 = this;return (new cljs.core.async.t24608(self__.cs,self__.ch,self__.mult,meta24609__$1));
});})(cs))
;
cljs.core.async.__GT_t24608 = ((function (cs){
return (function __GT_t24608(cs__$1,ch__$1,mult__$1,meta24609){return (new cljs.core.async.t24608(cs__$1,ch__$1,mult__$1,meta24609));
});})(cs))
;
}
return (new cljs.core.async.t24608(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24829,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24829,cs,m,dchan,dctr,done){
return (function (state_24741){var state_val_24742 = (state_24741[(1)]);if((state_val_24742 === (7)))
{var inst_24737 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24743_24830 = state_24741__$1;(statearr_24743_24830[(2)] = inst_24737);
(statearr_24743_24830[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (20)))
{var inst_24642 = (state_24741[(7)]);var inst_24652 = cljs.core.first.call(null,inst_24642);var inst_24653 = cljs.core.nth.call(null,inst_24652,(0),null);var inst_24654 = cljs.core.nth.call(null,inst_24652,(1),null);var state_24741__$1 = (function (){var statearr_24744 = state_24741;(statearr_24744[(8)] = inst_24653);
return statearr_24744;
})();if(cljs.core.truth_(inst_24654))
{var statearr_24745_24831 = state_24741__$1;(statearr_24745_24831[(1)] = (22));
} else
{var statearr_24746_24832 = state_24741__$1;(statearr_24746_24832[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (27)))
{var inst_24689 = (state_24741[(9)]);var inst_24613 = (state_24741[(10)]);var inst_24682 = (state_24741[(11)]);var inst_24684 = (state_24741[(12)]);var inst_24689__$1 = cljs.core._nth.call(null,inst_24682,inst_24684);var inst_24690 = cljs.core.async.put_BANG_.call(null,inst_24689__$1,inst_24613,done);var state_24741__$1 = (function (){var statearr_24747 = state_24741;(statearr_24747[(9)] = inst_24689__$1);
return statearr_24747;
})();if(cljs.core.truth_(inst_24690))
{var statearr_24748_24833 = state_24741__$1;(statearr_24748_24833[(1)] = (30));
} else
{var statearr_24749_24834 = state_24741__$1;(statearr_24749_24834[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (1)))
{var state_24741__$1 = state_24741;var statearr_24750_24835 = state_24741__$1;(statearr_24750_24835[(2)] = null);
(statearr_24750_24835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (24)))
{var inst_24642 = (state_24741[(7)]);var inst_24659 = (state_24741[(2)]);var inst_24660 = cljs.core.next.call(null,inst_24642);var inst_24622 = inst_24660;var inst_24623 = null;var inst_24624 = (0);var inst_24625 = (0);var state_24741__$1 = (function (){var statearr_24751 = state_24741;(statearr_24751[(13)] = inst_24659);
(statearr_24751[(14)] = inst_24623);
(statearr_24751[(15)] = inst_24624);
(statearr_24751[(16)] = inst_24622);
(statearr_24751[(17)] = inst_24625);
return statearr_24751;
})();var statearr_24752_24836 = state_24741__$1;(statearr_24752_24836[(2)] = null);
(statearr_24752_24836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (39)))
{var state_24741__$1 = state_24741;var statearr_24756_24837 = state_24741__$1;(statearr_24756_24837[(2)] = null);
(statearr_24756_24837[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (4)))
{var inst_24613 = (state_24741[(10)]);var inst_24613__$1 = (state_24741[(2)]);var inst_24614 = (inst_24613__$1 == null);var state_24741__$1 = (function (){var statearr_24757 = state_24741;(statearr_24757[(10)] = inst_24613__$1);
return statearr_24757;
})();if(cljs.core.truth_(inst_24614))
{var statearr_24758_24838 = state_24741__$1;(statearr_24758_24838[(1)] = (5));
} else
{var statearr_24759_24839 = state_24741__$1;(statearr_24759_24839[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (15)))
{var inst_24623 = (state_24741[(14)]);var inst_24624 = (state_24741[(15)]);var inst_24622 = (state_24741[(16)]);var inst_24625 = (state_24741[(17)]);var inst_24638 = (state_24741[(2)]);var inst_24639 = (inst_24625 + (1));var tmp24753 = inst_24623;var tmp24754 = inst_24624;var tmp24755 = inst_24622;var inst_24622__$1 = tmp24755;var inst_24623__$1 = tmp24753;var inst_24624__$1 = tmp24754;var inst_24625__$1 = inst_24639;var state_24741__$1 = (function (){var statearr_24760 = state_24741;(statearr_24760[(14)] = inst_24623__$1);
(statearr_24760[(18)] = inst_24638);
(statearr_24760[(15)] = inst_24624__$1);
(statearr_24760[(16)] = inst_24622__$1);
(statearr_24760[(17)] = inst_24625__$1);
return statearr_24760;
})();var statearr_24761_24840 = state_24741__$1;(statearr_24761_24840[(2)] = null);
(statearr_24761_24840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (21)))
{var inst_24663 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24765_24841 = state_24741__$1;(statearr_24765_24841[(2)] = inst_24663);
(statearr_24765_24841[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (31)))
{var inst_24689 = (state_24741[(9)]);var inst_24693 = done.call(null,null);var inst_24694 = cljs.core.async.untap_STAR_.call(null,m,inst_24689);var state_24741__$1 = (function (){var statearr_24766 = state_24741;(statearr_24766[(19)] = inst_24693);
return statearr_24766;
})();var statearr_24767_24842 = state_24741__$1;(statearr_24767_24842[(2)] = inst_24694);
(statearr_24767_24842[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (32)))
{var inst_24683 = (state_24741[(20)]);var inst_24681 = (state_24741[(21)]);var inst_24682 = (state_24741[(11)]);var inst_24684 = (state_24741[(12)]);var inst_24696 = (state_24741[(2)]);var inst_24697 = (inst_24684 + (1));var tmp24762 = inst_24683;var tmp24763 = inst_24681;var tmp24764 = inst_24682;var inst_24681__$1 = tmp24763;var inst_24682__$1 = tmp24764;var inst_24683__$1 = tmp24762;var inst_24684__$1 = inst_24697;var state_24741__$1 = (function (){var statearr_24768 = state_24741;(statearr_24768[(20)] = inst_24683__$1);
(statearr_24768[(21)] = inst_24681__$1);
(statearr_24768[(11)] = inst_24682__$1);
(statearr_24768[(22)] = inst_24696);
(statearr_24768[(12)] = inst_24684__$1);
return statearr_24768;
})();var statearr_24769_24843 = state_24741__$1;(statearr_24769_24843[(2)] = null);
(statearr_24769_24843[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (40)))
{var inst_24709 = (state_24741[(23)]);var inst_24713 = done.call(null,null);var inst_24714 = cljs.core.async.untap_STAR_.call(null,m,inst_24709);var state_24741__$1 = (function (){var statearr_24770 = state_24741;(statearr_24770[(24)] = inst_24713);
return statearr_24770;
})();var statearr_24771_24844 = state_24741__$1;(statearr_24771_24844[(2)] = inst_24714);
(statearr_24771_24844[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (33)))
{var inst_24700 = (state_24741[(25)]);var inst_24702 = cljs.core.chunked_seq_QMARK_.call(null,inst_24700);var state_24741__$1 = state_24741;if(inst_24702)
{var statearr_24772_24845 = state_24741__$1;(statearr_24772_24845[(1)] = (36));
} else
{var statearr_24773_24846 = state_24741__$1;(statearr_24773_24846[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (13)))
{var inst_24632 = (state_24741[(26)]);var inst_24635 = cljs.core.async.close_BANG_.call(null,inst_24632);var state_24741__$1 = state_24741;var statearr_24774_24847 = state_24741__$1;(statearr_24774_24847[(2)] = inst_24635);
(statearr_24774_24847[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (22)))
{var inst_24653 = (state_24741[(8)]);var inst_24656 = cljs.core.async.close_BANG_.call(null,inst_24653);var state_24741__$1 = state_24741;var statearr_24775_24848 = state_24741__$1;(statearr_24775_24848[(2)] = inst_24656);
(statearr_24775_24848[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (36)))
{var inst_24700 = (state_24741[(25)]);var inst_24704 = cljs.core.chunk_first.call(null,inst_24700);var inst_24705 = cljs.core.chunk_rest.call(null,inst_24700);var inst_24706 = cljs.core.count.call(null,inst_24704);var inst_24681 = inst_24705;var inst_24682 = inst_24704;var inst_24683 = inst_24706;var inst_24684 = (0);var state_24741__$1 = (function (){var statearr_24776 = state_24741;(statearr_24776[(20)] = inst_24683);
(statearr_24776[(21)] = inst_24681);
(statearr_24776[(11)] = inst_24682);
(statearr_24776[(12)] = inst_24684);
return statearr_24776;
})();var statearr_24777_24849 = state_24741__$1;(statearr_24777_24849[(2)] = null);
(statearr_24777_24849[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (41)))
{var inst_24700 = (state_24741[(25)]);var inst_24716 = (state_24741[(2)]);var inst_24717 = cljs.core.next.call(null,inst_24700);var inst_24681 = inst_24717;var inst_24682 = null;var inst_24683 = (0);var inst_24684 = (0);var state_24741__$1 = (function (){var statearr_24778 = state_24741;(statearr_24778[(20)] = inst_24683);
(statearr_24778[(21)] = inst_24681);
(statearr_24778[(27)] = inst_24716);
(statearr_24778[(11)] = inst_24682);
(statearr_24778[(12)] = inst_24684);
return statearr_24778;
})();var statearr_24779_24850 = state_24741__$1;(statearr_24779_24850[(2)] = null);
(statearr_24779_24850[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (43)))
{var state_24741__$1 = state_24741;var statearr_24780_24851 = state_24741__$1;(statearr_24780_24851[(2)] = null);
(statearr_24780_24851[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (29)))
{var inst_24725 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24781_24852 = state_24741__$1;(statearr_24781_24852[(2)] = inst_24725);
(statearr_24781_24852[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (44)))
{var inst_24734 = (state_24741[(2)]);var state_24741__$1 = (function (){var statearr_24782 = state_24741;(statearr_24782[(28)] = inst_24734);
return statearr_24782;
})();var statearr_24783_24853 = state_24741__$1;(statearr_24783_24853[(2)] = null);
(statearr_24783_24853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (6)))
{var inst_24673 = (state_24741[(29)]);var inst_24672 = cljs.core.deref.call(null,cs);var inst_24673__$1 = cljs.core.keys.call(null,inst_24672);var inst_24674 = cljs.core.count.call(null,inst_24673__$1);var inst_24675 = cljs.core.reset_BANG_.call(null,dctr,inst_24674);var inst_24680 = cljs.core.seq.call(null,inst_24673__$1);var inst_24681 = inst_24680;var inst_24682 = null;var inst_24683 = (0);var inst_24684 = (0);var state_24741__$1 = (function (){var statearr_24784 = state_24741;(statearr_24784[(20)] = inst_24683);
(statearr_24784[(21)] = inst_24681);
(statearr_24784[(11)] = inst_24682);
(statearr_24784[(30)] = inst_24675);
(statearr_24784[(12)] = inst_24684);
(statearr_24784[(29)] = inst_24673__$1);
return statearr_24784;
})();var statearr_24785_24854 = state_24741__$1;(statearr_24785_24854[(2)] = null);
(statearr_24785_24854[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (28)))
{var inst_24681 = (state_24741[(21)]);var inst_24700 = (state_24741[(25)]);var inst_24700__$1 = cljs.core.seq.call(null,inst_24681);var state_24741__$1 = (function (){var statearr_24786 = state_24741;(statearr_24786[(25)] = inst_24700__$1);
return statearr_24786;
})();if(inst_24700__$1)
{var statearr_24787_24855 = state_24741__$1;(statearr_24787_24855[(1)] = (33));
} else
{var statearr_24788_24856 = state_24741__$1;(statearr_24788_24856[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (25)))
{var inst_24683 = (state_24741[(20)]);var inst_24684 = (state_24741[(12)]);var inst_24686 = (inst_24684 < inst_24683);var inst_24687 = inst_24686;var state_24741__$1 = state_24741;if(cljs.core.truth_(inst_24687))
{var statearr_24789_24857 = state_24741__$1;(statearr_24789_24857[(1)] = (27));
} else
{var statearr_24790_24858 = state_24741__$1;(statearr_24790_24858[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (34)))
{var state_24741__$1 = state_24741;var statearr_24791_24859 = state_24741__$1;(statearr_24791_24859[(2)] = null);
(statearr_24791_24859[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (17)))
{var state_24741__$1 = state_24741;var statearr_24792_24860 = state_24741__$1;(statearr_24792_24860[(2)] = null);
(statearr_24792_24860[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (3)))
{var inst_24739 = (state_24741[(2)]);var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24741__$1,inst_24739);
} else
{if((state_val_24742 === (12)))
{var inst_24668 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24793_24861 = state_24741__$1;(statearr_24793_24861[(2)] = inst_24668);
(statearr_24793_24861[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (2)))
{var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24741__$1,(4),ch);
} else
{if((state_val_24742 === (23)))
{var state_24741__$1 = state_24741;var statearr_24794_24862 = state_24741__$1;(statearr_24794_24862[(2)] = null);
(statearr_24794_24862[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (35)))
{var inst_24723 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24795_24863 = state_24741__$1;(statearr_24795_24863[(2)] = inst_24723);
(statearr_24795_24863[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (19)))
{var inst_24642 = (state_24741[(7)]);var inst_24646 = cljs.core.chunk_first.call(null,inst_24642);var inst_24647 = cljs.core.chunk_rest.call(null,inst_24642);var inst_24648 = cljs.core.count.call(null,inst_24646);var inst_24622 = inst_24647;var inst_24623 = inst_24646;var inst_24624 = inst_24648;var inst_24625 = (0);var state_24741__$1 = (function (){var statearr_24796 = state_24741;(statearr_24796[(14)] = inst_24623);
(statearr_24796[(15)] = inst_24624);
(statearr_24796[(16)] = inst_24622);
(statearr_24796[(17)] = inst_24625);
return statearr_24796;
})();var statearr_24797_24864 = state_24741__$1;(statearr_24797_24864[(2)] = null);
(statearr_24797_24864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (11)))
{var inst_24622 = (state_24741[(16)]);var inst_24642 = (state_24741[(7)]);var inst_24642__$1 = cljs.core.seq.call(null,inst_24622);var state_24741__$1 = (function (){var statearr_24798 = state_24741;(statearr_24798[(7)] = inst_24642__$1);
return statearr_24798;
})();if(inst_24642__$1)
{var statearr_24799_24865 = state_24741__$1;(statearr_24799_24865[(1)] = (16));
} else
{var statearr_24800_24866 = state_24741__$1;(statearr_24800_24866[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (9)))
{var inst_24670 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24801_24867 = state_24741__$1;(statearr_24801_24867[(2)] = inst_24670);
(statearr_24801_24867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (5)))
{var inst_24620 = cljs.core.deref.call(null,cs);var inst_24621 = cljs.core.seq.call(null,inst_24620);var inst_24622 = inst_24621;var inst_24623 = null;var inst_24624 = (0);var inst_24625 = (0);var state_24741__$1 = (function (){var statearr_24802 = state_24741;(statearr_24802[(14)] = inst_24623);
(statearr_24802[(15)] = inst_24624);
(statearr_24802[(16)] = inst_24622);
(statearr_24802[(17)] = inst_24625);
return statearr_24802;
})();var statearr_24803_24868 = state_24741__$1;(statearr_24803_24868[(2)] = null);
(statearr_24803_24868[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (14)))
{var state_24741__$1 = state_24741;var statearr_24804_24869 = state_24741__$1;(statearr_24804_24869[(2)] = null);
(statearr_24804_24869[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (45)))
{var inst_24731 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24805_24870 = state_24741__$1;(statearr_24805_24870[(2)] = inst_24731);
(statearr_24805_24870[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (26)))
{var inst_24673 = (state_24741[(29)]);var inst_24727 = (state_24741[(2)]);var inst_24728 = cljs.core.seq.call(null,inst_24673);var state_24741__$1 = (function (){var statearr_24806 = state_24741;(statearr_24806[(31)] = inst_24727);
return statearr_24806;
})();if(inst_24728)
{var statearr_24807_24871 = state_24741__$1;(statearr_24807_24871[(1)] = (42));
} else
{var statearr_24808_24872 = state_24741__$1;(statearr_24808_24872[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (16)))
{var inst_24642 = (state_24741[(7)]);var inst_24644 = cljs.core.chunked_seq_QMARK_.call(null,inst_24642);var state_24741__$1 = state_24741;if(inst_24644)
{var statearr_24809_24873 = state_24741__$1;(statearr_24809_24873[(1)] = (19));
} else
{var statearr_24810_24874 = state_24741__$1;(statearr_24810_24874[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (38)))
{var inst_24720 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24811_24875 = state_24741__$1;(statearr_24811_24875[(2)] = inst_24720);
(statearr_24811_24875[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (30)))
{var state_24741__$1 = state_24741;var statearr_24812_24876 = state_24741__$1;(statearr_24812_24876[(2)] = null);
(statearr_24812_24876[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (10)))
{var inst_24623 = (state_24741[(14)]);var inst_24625 = (state_24741[(17)]);var inst_24631 = cljs.core._nth.call(null,inst_24623,inst_24625);var inst_24632 = cljs.core.nth.call(null,inst_24631,(0),null);var inst_24633 = cljs.core.nth.call(null,inst_24631,(1),null);var state_24741__$1 = (function (){var statearr_24813 = state_24741;(statearr_24813[(26)] = inst_24632);
return statearr_24813;
})();if(cljs.core.truth_(inst_24633))
{var statearr_24814_24877 = state_24741__$1;(statearr_24814_24877[(1)] = (13));
} else
{var statearr_24815_24878 = state_24741__$1;(statearr_24815_24878[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (18)))
{var inst_24666 = (state_24741[(2)]);var state_24741__$1 = state_24741;var statearr_24816_24879 = state_24741__$1;(statearr_24816_24879[(2)] = inst_24666);
(statearr_24816_24879[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (42)))
{var state_24741__$1 = state_24741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24741__$1,(45),dchan);
} else
{if((state_val_24742 === (37)))
{var inst_24613 = (state_24741[(10)]);var inst_24700 = (state_24741[(25)]);var inst_24709 = (state_24741[(23)]);var inst_24709__$1 = cljs.core.first.call(null,inst_24700);var inst_24710 = cljs.core.async.put_BANG_.call(null,inst_24709__$1,inst_24613,done);var state_24741__$1 = (function (){var statearr_24817 = state_24741;(statearr_24817[(23)] = inst_24709__$1);
return statearr_24817;
})();if(cljs.core.truth_(inst_24710))
{var statearr_24818_24880 = state_24741__$1;(statearr_24818_24880[(1)] = (39));
} else
{var statearr_24819_24881 = state_24741__$1;(statearr_24819_24881[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24742 === (8)))
{var inst_24624 = (state_24741[(15)]);var inst_24625 = (state_24741[(17)]);var inst_24627 = (inst_24625 < inst_24624);var inst_24628 = inst_24627;var state_24741__$1 = state_24741;if(cljs.core.truth_(inst_24628))
{var statearr_24820_24882 = state_24741__$1;(statearr_24820_24882[(1)] = (10));
} else
{var statearr_24821_24883 = state_24741__$1;(statearr_24821_24883[(1)] = (11));
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
});})(c__9125__auto___24829,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24829,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24825[(0)] = state_machine__9111__auto__);
(statearr_24825[(1)] = (1));
return statearr_24825;
});
var state_machine__9111__auto____1 = (function (state_24741){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24741);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24826){if((e24826 instanceof Object))
{var ex__9114__auto__ = e24826;var statearr_24827_24884 = state_24741;(statearr_24827_24884[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24885 = state_24741;
state_24741 = G__24885;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24741){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24829,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24828 = f__9126__auto__.call(null);(statearr_24828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24829);
return statearr_24828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24829,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24887 = {};return obj24887;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24888){var map__24893 = p__24888;var map__24893__$1 = ((cljs.core.seq_QMARK_.call(null,map__24893))?cljs.core.apply.call(null,cljs.core.hash_map,map__24893):map__24893);var opts = map__24893__$1;var statearr_24894_24897 = state;(statearr_24894_24897[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24893,map__24893__$1,opts){
return (function (val){var statearr_24895_24898 = state;(statearr_24895_24898[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24893,map__24893__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24896_24899 = state;(statearr_24896_24899[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24888 = null;if (arguments.length > 3) {
  p__24888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24888);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24900){
var state = cljs.core.first(arglist__24900);
arglist__24900 = cljs.core.next(arglist__24900);
var cont_block = cljs.core.first(arglist__24900);
arglist__24900 = cljs.core.next(arglist__24900);
var ports = cljs.core.first(arglist__24900);
var p__24888 = cljs.core.rest(arglist__24900);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24888);
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
;var m = (function (){if(typeof cljs.core.async.t25020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25020 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25021){
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
this.meta25021 = meta25021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25020.cljs$lang$type = true;
cljs.core.async.t25020.cljs$lang$ctorStr = "cljs.core.async/t25020";
cljs.core.async.t25020.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25020");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25020.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25022){var self__ = this;
var _25022__$1 = this;return self__.meta25021;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25022,meta25021__$1){var self__ = this;
var _25022__$1 = this;return (new cljs.core.async.t25020(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25021__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25020 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25020(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25021){return (new cljs.core.async.t25020(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25021));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25020(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25092){var state_val_25093 = (state_25092[(1)]);if((state_val_25093 === (7)))
{var inst_25036 = (state_25092[(7)]);var inst_25041 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25036);var state_25092__$1 = state_25092;var statearr_25094_25140 = state_25092__$1;(statearr_25094_25140[(2)] = inst_25041);
(statearr_25094_25140[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (20)))
{var inst_25051 = (state_25092[(8)]);var state_25092__$1 = state_25092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25092__$1,(23),out,inst_25051);
} else
{if((state_val_25093 === (1)))
{var inst_25026 = (state_25092[(9)]);var inst_25026__$1 = calc_state.call(null);var inst_25027 = cljs.core.seq_QMARK_.call(null,inst_25026__$1);var state_25092__$1 = (function (){var statearr_25095 = state_25092;(statearr_25095[(9)] = inst_25026__$1);
return statearr_25095;
})();if(inst_25027)
{var statearr_25096_25141 = state_25092__$1;(statearr_25096_25141[(1)] = (2));
} else
{var statearr_25097_25142 = state_25092__$1;(statearr_25097_25142[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (24)))
{var inst_25044 = (state_25092[(10)]);var inst_25036 = inst_25044;var state_25092__$1 = (function (){var statearr_25098 = state_25092;(statearr_25098[(7)] = inst_25036);
return statearr_25098;
})();var statearr_25099_25143 = state_25092__$1;(statearr_25099_25143[(2)] = null);
(statearr_25099_25143[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (4)))
{var inst_25026 = (state_25092[(9)]);var inst_25032 = (state_25092[(2)]);var inst_25033 = cljs.core.get.call(null,inst_25032,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25034 = cljs.core.get.call(null,inst_25032,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25035 = cljs.core.get.call(null,inst_25032,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25036 = inst_25026;var state_25092__$1 = (function (){var statearr_25100 = state_25092;(statearr_25100[(11)] = inst_25035);
(statearr_25100[(12)] = inst_25034);
(statearr_25100[(7)] = inst_25036);
(statearr_25100[(13)] = inst_25033);
return statearr_25100;
})();var statearr_25101_25144 = state_25092__$1;(statearr_25101_25144[(2)] = null);
(statearr_25101_25144[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (15)))
{var state_25092__$1 = state_25092;var statearr_25102_25145 = state_25092__$1;(statearr_25102_25145[(2)] = null);
(statearr_25102_25145[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (21)))
{var inst_25044 = (state_25092[(10)]);var inst_25036 = inst_25044;var state_25092__$1 = (function (){var statearr_25103 = state_25092;(statearr_25103[(7)] = inst_25036);
return statearr_25103;
})();var statearr_25104_25146 = state_25092__$1;(statearr_25104_25146[(2)] = null);
(statearr_25104_25146[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (13)))
{var inst_25088 = (state_25092[(2)]);var state_25092__$1 = state_25092;var statearr_25105_25147 = state_25092__$1;(statearr_25105_25147[(2)] = inst_25088);
(statearr_25105_25147[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (22)))
{var inst_25086 = (state_25092[(2)]);var state_25092__$1 = state_25092;var statearr_25106_25148 = state_25092__$1;(statearr_25106_25148[(2)] = inst_25086);
(statearr_25106_25148[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (6)))
{var inst_25090 = (state_25092[(2)]);var state_25092__$1 = state_25092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25092__$1,inst_25090);
} else
{if((state_val_25093 === (25)))
{var state_25092__$1 = state_25092;var statearr_25107_25149 = state_25092__$1;(statearr_25107_25149[(2)] = null);
(statearr_25107_25149[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (17)))
{var inst_25066 = (state_25092[(14)]);var state_25092__$1 = state_25092;var statearr_25108_25150 = state_25092__$1;(statearr_25108_25150[(2)] = inst_25066);
(statearr_25108_25150[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (3)))
{var inst_25026 = (state_25092[(9)]);var state_25092__$1 = state_25092;var statearr_25109_25151 = state_25092__$1;(statearr_25109_25151[(2)] = inst_25026);
(statearr_25109_25151[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (12)))
{var inst_25047 = (state_25092[(15)]);var inst_25066 = (state_25092[(14)]);var inst_25052 = (state_25092[(16)]);var inst_25066__$1 = inst_25047.call(null,inst_25052);var state_25092__$1 = (function (){var statearr_25110 = state_25092;(statearr_25110[(14)] = inst_25066__$1);
return statearr_25110;
})();if(cljs.core.truth_(inst_25066__$1))
{var statearr_25111_25152 = state_25092__$1;(statearr_25111_25152[(1)] = (17));
} else
{var statearr_25112_25153 = state_25092__$1;(statearr_25112_25153[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (2)))
{var inst_25026 = (state_25092[(9)]);var inst_25029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25026);var state_25092__$1 = state_25092;var statearr_25113_25154 = state_25092__$1;(statearr_25113_25154[(2)] = inst_25029);
(statearr_25113_25154[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (23)))
{var inst_25077 = (state_25092[(2)]);var state_25092__$1 = state_25092;if(cljs.core.truth_(inst_25077))
{var statearr_25114_25155 = state_25092__$1;(statearr_25114_25155[(1)] = (24));
} else
{var statearr_25115_25156 = state_25092__$1;(statearr_25115_25156[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (19)))
{var inst_25074 = (state_25092[(2)]);var state_25092__$1 = state_25092;if(cljs.core.truth_(inst_25074))
{var statearr_25116_25157 = state_25092__$1;(statearr_25116_25157[(1)] = (20));
} else
{var statearr_25117_25158 = state_25092__$1;(statearr_25117_25158[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (11)))
{var inst_25051 = (state_25092[(8)]);var inst_25057 = (inst_25051 == null);var state_25092__$1 = state_25092;if(cljs.core.truth_(inst_25057))
{var statearr_25118_25159 = state_25092__$1;(statearr_25118_25159[(1)] = (14));
} else
{var statearr_25119_25160 = state_25092__$1;(statearr_25119_25160[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (9)))
{var inst_25044 = (state_25092[(10)]);var inst_25044__$1 = (state_25092[(2)]);var inst_25045 = cljs.core.get.call(null,inst_25044__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25046 = cljs.core.get.call(null,inst_25044__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25047 = cljs.core.get.call(null,inst_25044__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25092__$1 = (function (){var statearr_25120 = state_25092;(statearr_25120[(15)] = inst_25047);
(statearr_25120[(17)] = inst_25046);
(statearr_25120[(10)] = inst_25044__$1);
return statearr_25120;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25092__$1,(10),inst_25045);
} else
{if((state_val_25093 === (5)))
{var inst_25036 = (state_25092[(7)]);var inst_25039 = cljs.core.seq_QMARK_.call(null,inst_25036);var state_25092__$1 = state_25092;if(inst_25039)
{var statearr_25121_25161 = state_25092__$1;(statearr_25121_25161[(1)] = (7));
} else
{var statearr_25122_25162 = state_25092__$1;(statearr_25122_25162[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (14)))
{var inst_25052 = (state_25092[(16)]);var inst_25059 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25052);var state_25092__$1 = state_25092;var statearr_25123_25163 = state_25092__$1;(statearr_25123_25163[(2)] = inst_25059);
(statearr_25123_25163[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (26)))
{var inst_25082 = (state_25092[(2)]);var state_25092__$1 = state_25092;var statearr_25124_25164 = state_25092__$1;(statearr_25124_25164[(2)] = inst_25082);
(statearr_25124_25164[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (16)))
{var inst_25062 = (state_25092[(2)]);var inst_25063 = calc_state.call(null);var inst_25036 = inst_25063;var state_25092__$1 = (function (){var statearr_25125 = state_25092;(statearr_25125[(18)] = inst_25062);
(statearr_25125[(7)] = inst_25036);
return statearr_25125;
})();var statearr_25126_25165 = state_25092__$1;(statearr_25126_25165[(2)] = null);
(statearr_25126_25165[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (10)))
{var inst_25051 = (state_25092[(8)]);var inst_25052 = (state_25092[(16)]);var inst_25050 = (state_25092[(2)]);var inst_25051__$1 = cljs.core.nth.call(null,inst_25050,(0),null);var inst_25052__$1 = cljs.core.nth.call(null,inst_25050,(1),null);var inst_25053 = (inst_25051__$1 == null);var inst_25054 = cljs.core._EQ_.call(null,inst_25052__$1,change);var inst_25055 = (inst_25053) || (inst_25054);var state_25092__$1 = (function (){var statearr_25127 = state_25092;(statearr_25127[(8)] = inst_25051__$1);
(statearr_25127[(16)] = inst_25052__$1);
return statearr_25127;
})();if(cljs.core.truth_(inst_25055))
{var statearr_25128_25166 = state_25092__$1;(statearr_25128_25166[(1)] = (11));
} else
{var statearr_25129_25167 = state_25092__$1;(statearr_25129_25167[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (18)))
{var inst_25047 = (state_25092[(15)]);var inst_25052 = (state_25092[(16)]);var inst_25046 = (state_25092[(17)]);var inst_25069 = cljs.core.empty_QMARK_.call(null,inst_25047);var inst_25070 = inst_25046.call(null,inst_25052);var inst_25071 = cljs.core.not.call(null,inst_25070);var inst_25072 = (inst_25069) && (inst_25071);var state_25092__$1 = state_25092;var statearr_25130_25168 = state_25092__$1;(statearr_25130_25168[(2)] = inst_25072);
(statearr_25130_25168[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25093 === (8)))
{var inst_25036 = (state_25092[(7)]);var state_25092__$1 = state_25092;var statearr_25131_25169 = state_25092__$1;(statearr_25131_25169[(2)] = inst_25036);
(statearr_25131_25169[(1)] = (9));
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
});})(c__9125__auto___25139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25135[(0)] = state_machine__9111__auto__);
(statearr_25135[(1)] = (1));
return statearr_25135;
});
var state_machine__9111__auto____1 = (function (state_25092){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25092);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25136){if((e25136 instanceof Object))
{var ex__9114__auto__ = e25136;var statearr_25137_25170 = state_25092;(statearr_25137_25170[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25171 = state_25092;
state_25092 = G__25171;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25092){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25138 = f__9126__auto__.call(null);(statearr_25138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25139);
return statearr_25138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25139,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj25173 = {};return obj25173;
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
return (function (p1__25174_SHARP_){if(cljs.core.truth_(p1__25174_SHARP_.call(null,topic)))
{return p1__25174_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25297 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25298){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25298 = meta25298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25297.cljs$lang$type = true;
cljs.core.async.t25297.cljs$lang$ctorStr = "cljs.core.async/t25297";
cljs.core.async.t25297.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25297");
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25297.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25299){var self__ = this;
var _25299__$1 = this;return self__.meta25298;
});})(mults,ensure_mult))
;
cljs.core.async.t25297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25299,meta25298__$1){var self__ = this;
var _25299__$1 = this;return (new cljs.core.async.t25297(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25298__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25297 = ((function (mults,ensure_mult){
return (function __GT_t25297(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25298){return (new cljs.core.async.t25297(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25298));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25297(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25419 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25419,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25419,mults,ensure_mult,p){
return (function (state_25371){var state_val_25372 = (state_25371[(1)]);if((state_val_25372 === (7)))
{var inst_25367 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25373_25420 = state_25371__$1;(statearr_25373_25420[(2)] = inst_25367);
(statearr_25373_25420[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (20)))
{var state_25371__$1 = state_25371;var statearr_25374_25421 = state_25371__$1;(statearr_25374_25421[(2)] = null);
(statearr_25374_25421[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (1)))
{var state_25371__$1 = state_25371;var statearr_25375_25422 = state_25371__$1;(statearr_25375_25422[(2)] = null);
(statearr_25375_25422[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (24)))
{var inst_25350 = (state_25371[(7)]);var inst_25359 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25350);var state_25371__$1 = state_25371;var statearr_25376_25423 = state_25371__$1;(statearr_25376_25423[(2)] = inst_25359);
(statearr_25376_25423[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (4)))
{var inst_25302 = (state_25371[(8)]);var inst_25302__$1 = (state_25371[(2)]);var inst_25303 = (inst_25302__$1 == null);var state_25371__$1 = (function (){var statearr_25377 = state_25371;(statearr_25377[(8)] = inst_25302__$1);
return statearr_25377;
})();if(cljs.core.truth_(inst_25303))
{var statearr_25378_25424 = state_25371__$1;(statearr_25378_25424[(1)] = (5));
} else
{var statearr_25379_25425 = state_25371__$1;(statearr_25379_25425[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (15)))
{var inst_25344 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25380_25426 = state_25371__$1;(statearr_25380_25426[(2)] = inst_25344);
(statearr_25380_25426[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (21)))
{var inst_25364 = (state_25371[(2)]);var state_25371__$1 = (function (){var statearr_25381 = state_25371;(statearr_25381[(9)] = inst_25364);
return statearr_25381;
})();var statearr_25382_25427 = state_25371__$1;(statearr_25382_25427[(2)] = null);
(statearr_25382_25427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (13)))
{var inst_25326 = (state_25371[(10)]);var inst_25328 = cljs.core.chunked_seq_QMARK_.call(null,inst_25326);var state_25371__$1 = state_25371;if(inst_25328)
{var statearr_25383_25428 = state_25371__$1;(statearr_25383_25428[(1)] = (16));
} else
{var statearr_25384_25429 = state_25371__$1;(statearr_25384_25429[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (22)))
{var inst_25356 = (state_25371[(2)]);var state_25371__$1 = state_25371;if(cljs.core.truth_(inst_25356))
{var statearr_25385_25430 = state_25371__$1;(statearr_25385_25430[(1)] = (23));
} else
{var statearr_25386_25431 = state_25371__$1;(statearr_25386_25431[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (6)))
{var inst_25302 = (state_25371[(8)]);var inst_25350 = (state_25371[(7)]);var inst_25352 = (state_25371[(11)]);var inst_25350__$1 = topic_fn.call(null,inst_25302);var inst_25351 = cljs.core.deref.call(null,mults);var inst_25352__$1 = cljs.core.get.call(null,inst_25351,inst_25350__$1);var state_25371__$1 = (function (){var statearr_25387 = state_25371;(statearr_25387[(7)] = inst_25350__$1);
(statearr_25387[(11)] = inst_25352__$1);
return statearr_25387;
})();if(cljs.core.truth_(inst_25352__$1))
{var statearr_25388_25432 = state_25371__$1;(statearr_25388_25432[(1)] = (19));
} else
{var statearr_25389_25433 = state_25371__$1;(statearr_25389_25433[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (25)))
{var inst_25361 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25390_25434 = state_25371__$1;(statearr_25390_25434[(2)] = inst_25361);
(statearr_25390_25434[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (17)))
{var inst_25326 = (state_25371[(10)]);var inst_25335 = cljs.core.first.call(null,inst_25326);var inst_25336 = cljs.core.async.muxch_STAR_.call(null,inst_25335);var inst_25337 = cljs.core.async.close_BANG_.call(null,inst_25336);var inst_25338 = cljs.core.next.call(null,inst_25326);var inst_25312 = inst_25338;var inst_25313 = null;var inst_25314 = (0);var inst_25315 = (0);var state_25371__$1 = (function (){var statearr_25391 = state_25371;(statearr_25391[(12)] = inst_25337);
(statearr_25391[(13)] = inst_25315);
(statearr_25391[(14)] = inst_25314);
(statearr_25391[(15)] = inst_25312);
(statearr_25391[(16)] = inst_25313);
return statearr_25391;
})();var statearr_25392_25435 = state_25371__$1;(statearr_25392_25435[(2)] = null);
(statearr_25392_25435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (3)))
{var inst_25369 = (state_25371[(2)]);var state_25371__$1 = state_25371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25371__$1,inst_25369);
} else
{if((state_val_25372 === (12)))
{var inst_25346 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25393_25436 = state_25371__$1;(statearr_25393_25436[(2)] = inst_25346);
(statearr_25393_25436[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (2)))
{var state_25371__$1 = state_25371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25371__$1,(4),ch);
} else
{if((state_val_25372 === (23)))
{var state_25371__$1 = state_25371;var statearr_25394_25437 = state_25371__$1;(statearr_25394_25437[(2)] = null);
(statearr_25394_25437[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (19)))
{var inst_25302 = (state_25371[(8)]);var inst_25352 = (state_25371[(11)]);var inst_25354 = cljs.core.async.muxch_STAR_.call(null,inst_25352);var state_25371__$1 = state_25371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25371__$1,(22),inst_25354,inst_25302);
} else
{if((state_val_25372 === (11)))
{var inst_25326 = (state_25371[(10)]);var inst_25312 = (state_25371[(15)]);var inst_25326__$1 = cljs.core.seq.call(null,inst_25312);var state_25371__$1 = (function (){var statearr_25395 = state_25371;(statearr_25395[(10)] = inst_25326__$1);
return statearr_25395;
})();if(inst_25326__$1)
{var statearr_25396_25438 = state_25371__$1;(statearr_25396_25438[(1)] = (13));
} else
{var statearr_25397_25439 = state_25371__$1;(statearr_25397_25439[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (9)))
{var inst_25348 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25398_25440 = state_25371__$1;(statearr_25398_25440[(2)] = inst_25348);
(statearr_25398_25440[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (5)))
{var inst_25309 = cljs.core.deref.call(null,mults);var inst_25310 = cljs.core.vals.call(null,inst_25309);var inst_25311 = cljs.core.seq.call(null,inst_25310);var inst_25312 = inst_25311;var inst_25313 = null;var inst_25314 = (0);var inst_25315 = (0);var state_25371__$1 = (function (){var statearr_25399 = state_25371;(statearr_25399[(13)] = inst_25315);
(statearr_25399[(14)] = inst_25314);
(statearr_25399[(15)] = inst_25312);
(statearr_25399[(16)] = inst_25313);
return statearr_25399;
})();var statearr_25400_25441 = state_25371__$1;(statearr_25400_25441[(2)] = null);
(statearr_25400_25441[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (14)))
{var state_25371__$1 = state_25371;var statearr_25404_25442 = state_25371__$1;(statearr_25404_25442[(2)] = null);
(statearr_25404_25442[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (16)))
{var inst_25326 = (state_25371[(10)]);var inst_25330 = cljs.core.chunk_first.call(null,inst_25326);var inst_25331 = cljs.core.chunk_rest.call(null,inst_25326);var inst_25332 = cljs.core.count.call(null,inst_25330);var inst_25312 = inst_25331;var inst_25313 = inst_25330;var inst_25314 = inst_25332;var inst_25315 = (0);var state_25371__$1 = (function (){var statearr_25405 = state_25371;(statearr_25405[(13)] = inst_25315);
(statearr_25405[(14)] = inst_25314);
(statearr_25405[(15)] = inst_25312);
(statearr_25405[(16)] = inst_25313);
return statearr_25405;
})();var statearr_25406_25443 = state_25371__$1;(statearr_25406_25443[(2)] = null);
(statearr_25406_25443[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (10)))
{var inst_25315 = (state_25371[(13)]);var inst_25314 = (state_25371[(14)]);var inst_25312 = (state_25371[(15)]);var inst_25313 = (state_25371[(16)]);var inst_25320 = cljs.core._nth.call(null,inst_25313,inst_25315);var inst_25321 = cljs.core.async.muxch_STAR_.call(null,inst_25320);var inst_25322 = cljs.core.async.close_BANG_.call(null,inst_25321);var inst_25323 = (inst_25315 + (1));var tmp25401 = inst_25314;var tmp25402 = inst_25312;var tmp25403 = inst_25313;var inst_25312__$1 = tmp25402;var inst_25313__$1 = tmp25403;var inst_25314__$1 = tmp25401;var inst_25315__$1 = inst_25323;var state_25371__$1 = (function (){var statearr_25407 = state_25371;(statearr_25407[(17)] = inst_25322);
(statearr_25407[(13)] = inst_25315__$1);
(statearr_25407[(14)] = inst_25314__$1);
(statearr_25407[(15)] = inst_25312__$1);
(statearr_25407[(16)] = inst_25313__$1);
return statearr_25407;
})();var statearr_25408_25444 = state_25371__$1;(statearr_25408_25444[(2)] = null);
(statearr_25408_25444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (18)))
{var inst_25341 = (state_25371[(2)]);var state_25371__$1 = state_25371;var statearr_25409_25445 = state_25371__$1;(statearr_25409_25445[(2)] = inst_25341);
(statearr_25409_25445[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25372 === (8)))
{var inst_25315 = (state_25371[(13)]);var inst_25314 = (state_25371[(14)]);var inst_25317 = (inst_25315 < inst_25314);var inst_25318 = inst_25317;var state_25371__$1 = state_25371;if(cljs.core.truth_(inst_25318))
{var statearr_25410_25446 = state_25371__$1;(statearr_25410_25446[(1)] = (10));
} else
{var statearr_25411_25447 = state_25371__$1;(statearr_25411_25447[(1)] = (11));
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
});})(c__9125__auto___25419,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25419,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25415[(0)] = state_machine__9111__auto__);
(statearr_25415[(1)] = (1));
return statearr_25415;
});
var state_machine__9111__auto____1 = (function (state_25371){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25371);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25416){if((e25416 instanceof Object))
{var ex__9114__auto__ = e25416;var statearr_25417_25448 = state_25371;(statearr_25417_25448[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25371);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25416;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25449 = state_25371;
state_25371 = G__25449;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25371){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25419,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25418 = f__9126__auto__.call(null);(statearr_25418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25419);
return statearr_25418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25419,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9125__auto___25586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25586,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25586,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25556){var state_val_25557 = (state_25556[(1)]);if((state_val_25557 === (7)))
{var state_25556__$1 = state_25556;var statearr_25558_25587 = state_25556__$1;(statearr_25558_25587[(2)] = null);
(statearr_25558_25587[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (1)))
{var state_25556__$1 = state_25556;var statearr_25559_25588 = state_25556__$1;(statearr_25559_25588[(2)] = null);
(statearr_25559_25588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (4)))
{var inst_25520 = (state_25556[(7)]);var inst_25522 = (inst_25520 < cnt);var state_25556__$1 = state_25556;if(cljs.core.truth_(inst_25522))
{var statearr_25560_25589 = state_25556__$1;(statearr_25560_25589[(1)] = (6));
} else
{var statearr_25561_25590 = state_25556__$1;(statearr_25561_25590[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (15)))
{var inst_25552 = (state_25556[(2)]);var state_25556__$1 = state_25556;var statearr_25562_25591 = state_25556__$1;(statearr_25562_25591[(2)] = inst_25552);
(statearr_25562_25591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (13)))
{var inst_25545 = cljs.core.async.close_BANG_.call(null,out);var state_25556__$1 = state_25556;var statearr_25563_25592 = state_25556__$1;(statearr_25563_25592[(2)] = inst_25545);
(statearr_25563_25592[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (6)))
{var state_25556__$1 = state_25556;var statearr_25564_25593 = state_25556__$1;(statearr_25564_25593[(2)] = null);
(statearr_25564_25593[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (3)))
{var inst_25554 = (state_25556[(2)]);var state_25556__$1 = state_25556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25556__$1,inst_25554);
} else
{if((state_val_25557 === (12)))
{var inst_25542 = (state_25556[(8)]);var inst_25542__$1 = (state_25556[(2)]);var inst_25543 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25542__$1);var state_25556__$1 = (function (){var statearr_25565 = state_25556;(statearr_25565[(8)] = inst_25542__$1);
return statearr_25565;
})();if(cljs.core.truth_(inst_25543))
{var statearr_25566_25594 = state_25556__$1;(statearr_25566_25594[(1)] = (13));
} else
{var statearr_25567_25595 = state_25556__$1;(statearr_25567_25595[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (2)))
{var inst_25519 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25520 = (0);var state_25556__$1 = (function (){var statearr_25568 = state_25556;(statearr_25568[(7)] = inst_25520);
(statearr_25568[(9)] = inst_25519);
return statearr_25568;
})();var statearr_25569_25596 = state_25556__$1;(statearr_25569_25596[(2)] = null);
(statearr_25569_25596[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (11)))
{var inst_25520 = (state_25556[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25556,(10),Object,null,(9));var inst_25529 = chs__$1.call(null,inst_25520);var inst_25530 = done.call(null,inst_25520);var inst_25531 = cljs.core.async.take_BANG_.call(null,inst_25529,inst_25530);var state_25556__$1 = state_25556;var statearr_25570_25597 = state_25556__$1;(statearr_25570_25597[(2)] = inst_25531);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (9)))
{var inst_25520 = (state_25556[(7)]);var inst_25533 = (state_25556[(2)]);var inst_25534 = (inst_25520 + (1));var inst_25520__$1 = inst_25534;var state_25556__$1 = (function (){var statearr_25571 = state_25556;(statearr_25571[(10)] = inst_25533);
(statearr_25571[(7)] = inst_25520__$1);
return statearr_25571;
})();var statearr_25572_25598 = state_25556__$1;(statearr_25572_25598[(2)] = null);
(statearr_25572_25598[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (5)))
{var inst_25540 = (state_25556[(2)]);var state_25556__$1 = (function (){var statearr_25573 = state_25556;(statearr_25573[(11)] = inst_25540);
return statearr_25573;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25556__$1,(12),dchan);
} else
{if((state_val_25557 === (14)))
{var inst_25542 = (state_25556[(8)]);var inst_25547 = cljs.core.apply.call(null,f,inst_25542);var state_25556__$1 = state_25556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25556__$1,(16),out,inst_25547);
} else
{if((state_val_25557 === (16)))
{var inst_25549 = (state_25556[(2)]);var state_25556__$1 = (function (){var statearr_25574 = state_25556;(statearr_25574[(12)] = inst_25549);
return statearr_25574;
})();var statearr_25575_25599 = state_25556__$1;(statearr_25575_25599[(2)] = null);
(statearr_25575_25599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (10)))
{var inst_25524 = (state_25556[(2)]);var inst_25525 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25556__$1 = (function (){var statearr_25576 = state_25556;(statearr_25576[(13)] = inst_25524);
return statearr_25576;
})();var statearr_25577_25600 = state_25556__$1;(statearr_25577_25600[(2)] = inst_25525);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25557 === (8)))
{var inst_25538 = (state_25556[(2)]);var state_25556__$1 = state_25556;var statearr_25578_25601 = state_25556__$1;(statearr_25578_25601[(2)] = inst_25538);
(statearr_25578_25601[(1)] = (5));
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
});})(c__9125__auto___25586,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25586,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25582[(0)] = state_machine__9111__auto__);
(statearr_25582[(1)] = (1));
return statearr_25582;
});
var state_machine__9111__auto____1 = (function (state_25556){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25556);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25583){if((e25583 instanceof Object))
{var ex__9114__auto__ = e25583;var statearr_25584_25602 = state_25556;(statearr_25584_25602[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25603 = state_25556;
state_25556 = G__25603;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25556){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25586,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25585 = f__9126__auto__.call(null);(statearr_25585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25586);
return statearr_25585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25586,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25711,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25711,out){
return (function (state_25687){var state_val_25688 = (state_25687[(1)]);if((state_val_25688 === (7)))
{var inst_25667 = (state_25687[(7)]);var inst_25666 = (state_25687[(8)]);var inst_25666__$1 = (state_25687[(2)]);var inst_25667__$1 = cljs.core.nth.call(null,inst_25666__$1,(0),null);var inst_25668 = cljs.core.nth.call(null,inst_25666__$1,(1),null);var inst_25669 = (inst_25667__$1 == null);var state_25687__$1 = (function (){var statearr_25689 = state_25687;(statearr_25689[(9)] = inst_25668);
(statearr_25689[(7)] = inst_25667__$1);
(statearr_25689[(8)] = inst_25666__$1);
return statearr_25689;
})();if(cljs.core.truth_(inst_25669))
{var statearr_25690_25712 = state_25687__$1;(statearr_25690_25712[(1)] = (8));
} else
{var statearr_25691_25713 = state_25687__$1;(statearr_25691_25713[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (1)))
{var inst_25658 = cljs.core.vec.call(null,chs);var inst_25659 = inst_25658;var state_25687__$1 = (function (){var statearr_25692 = state_25687;(statearr_25692[(10)] = inst_25659);
return statearr_25692;
})();var statearr_25693_25714 = state_25687__$1;(statearr_25693_25714[(2)] = null);
(statearr_25693_25714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (4)))
{var inst_25659 = (state_25687[(10)]);var state_25687__$1 = state_25687;return cljs.core.async.ioc_alts_BANG_.call(null,state_25687__$1,(7),inst_25659);
} else
{if((state_val_25688 === (6)))
{var inst_25683 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25694_25715 = state_25687__$1;(statearr_25694_25715[(2)] = inst_25683);
(statearr_25694_25715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (3)))
{var inst_25685 = (state_25687[(2)]);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25687__$1,inst_25685);
} else
{if((state_val_25688 === (2)))
{var inst_25659 = (state_25687[(10)]);var inst_25661 = cljs.core.count.call(null,inst_25659);var inst_25662 = (inst_25661 > (0));var state_25687__$1 = state_25687;if(cljs.core.truth_(inst_25662))
{var statearr_25696_25716 = state_25687__$1;(statearr_25696_25716[(1)] = (4));
} else
{var statearr_25697_25717 = state_25687__$1;(statearr_25697_25717[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (11)))
{var inst_25659 = (state_25687[(10)]);var inst_25676 = (state_25687[(2)]);var tmp25695 = inst_25659;var inst_25659__$1 = tmp25695;var state_25687__$1 = (function (){var statearr_25698 = state_25687;(statearr_25698[(10)] = inst_25659__$1);
(statearr_25698[(11)] = inst_25676);
return statearr_25698;
})();var statearr_25699_25718 = state_25687__$1;(statearr_25699_25718[(2)] = null);
(statearr_25699_25718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (9)))
{var inst_25667 = (state_25687[(7)]);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25687__$1,(11),out,inst_25667);
} else
{if((state_val_25688 === (5)))
{var inst_25681 = cljs.core.async.close_BANG_.call(null,out);var state_25687__$1 = state_25687;var statearr_25700_25719 = state_25687__$1;(statearr_25700_25719[(2)] = inst_25681);
(statearr_25700_25719[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (10)))
{var inst_25679 = (state_25687[(2)]);var state_25687__$1 = state_25687;var statearr_25701_25720 = state_25687__$1;(statearr_25701_25720[(2)] = inst_25679);
(statearr_25701_25720[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25688 === (8)))
{var inst_25668 = (state_25687[(9)]);var inst_25667 = (state_25687[(7)]);var inst_25659 = (state_25687[(10)]);var inst_25666 = (state_25687[(8)]);var inst_25671 = (function (){var c = inst_25668;var v = inst_25667;var vec__25664 = inst_25666;var cs = inst_25659;return ((function (c,v,vec__25664,cs,inst_25668,inst_25667,inst_25659,inst_25666,state_val_25688,c__9125__auto___25711,out){
return (function (p1__25604_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25604_SHARP_);
});
;})(c,v,vec__25664,cs,inst_25668,inst_25667,inst_25659,inst_25666,state_val_25688,c__9125__auto___25711,out))
})();var inst_25672 = cljs.core.filterv.call(null,inst_25671,inst_25659);var inst_25659__$1 = inst_25672;var state_25687__$1 = (function (){var statearr_25702 = state_25687;(statearr_25702[(10)] = inst_25659__$1);
return statearr_25702;
})();var statearr_25703_25721 = state_25687__$1;(statearr_25703_25721[(2)] = null);
(statearr_25703_25721[(1)] = (2));
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
});})(c__9125__auto___25711,out))
;return ((function (switch__9110__auto__,c__9125__auto___25711,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25707 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25707[(0)] = state_machine__9111__auto__);
(statearr_25707[(1)] = (1));
return statearr_25707;
});
var state_machine__9111__auto____1 = (function (state_25687){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25687);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25708){if((e25708 instanceof Object))
{var ex__9114__auto__ = e25708;var statearr_25709_25722 = state_25687;(statearr_25709_25722[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25708;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25723 = state_25687;
state_25687 = G__25723;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25687){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25711,out))
})();var state__9127__auto__ = (function (){var statearr_25710 = f__9126__auto__.call(null);(statearr_25710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25711);
return statearr_25710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25711,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25816 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25816,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25816,out){
return (function (state_25793){var state_val_25794 = (state_25793[(1)]);if((state_val_25794 === (7)))
{var inst_25775 = (state_25793[(7)]);var inst_25775__$1 = (state_25793[(2)]);var inst_25776 = (inst_25775__$1 == null);var inst_25777 = cljs.core.not.call(null,inst_25776);var state_25793__$1 = (function (){var statearr_25795 = state_25793;(statearr_25795[(7)] = inst_25775__$1);
return statearr_25795;
})();if(inst_25777)
{var statearr_25796_25817 = state_25793__$1;(statearr_25796_25817[(1)] = (8));
} else
{var statearr_25797_25818 = state_25793__$1;(statearr_25797_25818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (1)))
{var inst_25770 = (0);var state_25793__$1 = (function (){var statearr_25798 = state_25793;(statearr_25798[(8)] = inst_25770);
return statearr_25798;
})();var statearr_25799_25819 = state_25793__$1;(statearr_25799_25819[(2)] = null);
(statearr_25799_25819[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (4)))
{var state_25793__$1 = state_25793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25793__$1,(7),ch);
} else
{if((state_val_25794 === (6)))
{var inst_25788 = (state_25793[(2)]);var state_25793__$1 = state_25793;var statearr_25800_25820 = state_25793__$1;(statearr_25800_25820[(2)] = inst_25788);
(statearr_25800_25820[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (3)))
{var inst_25790 = (state_25793[(2)]);var inst_25791 = cljs.core.async.close_BANG_.call(null,out);var state_25793__$1 = (function (){var statearr_25801 = state_25793;(statearr_25801[(9)] = inst_25790);
return statearr_25801;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else
{if((state_val_25794 === (2)))
{var inst_25770 = (state_25793[(8)]);var inst_25772 = (inst_25770 < n);var state_25793__$1 = state_25793;if(cljs.core.truth_(inst_25772))
{var statearr_25802_25821 = state_25793__$1;(statearr_25802_25821[(1)] = (4));
} else
{var statearr_25803_25822 = state_25793__$1;(statearr_25803_25822[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (11)))
{var inst_25770 = (state_25793[(8)]);var inst_25780 = (state_25793[(2)]);var inst_25781 = (inst_25770 + (1));var inst_25770__$1 = inst_25781;var state_25793__$1 = (function (){var statearr_25804 = state_25793;(statearr_25804[(10)] = inst_25780);
(statearr_25804[(8)] = inst_25770__$1);
return statearr_25804;
})();var statearr_25805_25823 = state_25793__$1;(statearr_25805_25823[(2)] = null);
(statearr_25805_25823[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (9)))
{var state_25793__$1 = state_25793;var statearr_25806_25824 = state_25793__$1;(statearr_25806_25824[(2)] = null);
(statearr_25806_25824[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (5)))
{var state_25793__$1 = state_25793;var statearr_25807_25825 = state_25793__$1;(statearr_25807_25825[(2)] = null);
(statearr_25807_25825[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (10)))
{var inst_25785 = (state_25793[(2)]);var state_25793__$1 = state_25793;var statearr_25808_25826 = state_25793__$1;(statearr_25808_25826[(2)] = inst_25785);
(statearr_25808_25826[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25794 === (8)))
{var inst_25775 = (state_25793[(7)]);var state_25793__$1 = state_25793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25793__$1,(11),out,inst_25775);
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
});})(c__9125__auto___25816,out))
;return ((function (switch__9110__auto__,c__9125__auto___25816,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25812 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25812[(0)] = state_machine__9111__auto__);
(statearr_25812[(1)] = (1));
return statearr_25812;
});
var state_machine__9111__auto____1 = (function (state_25793){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25793);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25813){if((e25813 instanceof Object))
{var ex__9114__auto__ = e25813;var statearr_25814_25827 = state_25793;(statearr_25814_25827[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25828 = state_25793;
state_25793 = G__25828;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25816,out))
})();var state__9127__auto__ = (function (){var statearr_25815 = f__9126__auto__.call(null);(statearr_25815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25816);
return statearr_25815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25816,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25836 = (function (ch,f,map_LT_,meta25837){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25839 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25839 = (function (fn1,_,meta25837,ch,f,map_LT_,meta25840){
this.fn1 = fn1;
this._ = _;
this.meta25837 = meta25837;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25840 = meta25840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25839.cljs$lang$type = true;
cljs.core.async.t25839.cljs$lang$ctorStr = "cljs.core.async/t25839";
cljs.core.async.t25839.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25839");
});})(___$1))
;
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25829_SHARP_){return f1.call(null,(((p1__25829_SHARP_ == null))?null:self__.f.call(null,p1__25829_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25841){var self__ = this;
var _25841__$1 = this;return self__.meta25840;
});})(___$1))
;
cljs.core.async.t25839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25841,meta25840__$1){var self__ = this;
var _25841__$1 = this;return (new cljs.core.async.t25839(self__.fn1,self__._,self__.meta25837,self__.ch,self__.f,self__.map_LT_,meta25840__$1));
});})(___$1))
;
cljs.core.async.__GT_t25839 = ((function (___$1){
return (function __GT_t25839(fn1__$1,___$2,meta25837__$1,ch__$2,f__$2,map_LT___$2,meta25840){return (new cljs.core.async.t25839(fn1__$1,___$2,meta25837__$1,ch__$2,f__$2,map_LT___$2,meta25840));
});})(___$1))
;
}
return (new cljs.core.async.t25839(fn1,___$1,self__.meta25837,self__.ch,self__.f,self__.map_LT_,null));
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
var _25838__$1 = this;return (new cljs.core.async.t25836(self__.ch,self__.f,self__.map_LT_,meta25837__$1));
});
cljs.core.async.__GT_t25836 = (function __GT_t25836(ch__$1,f__$1,map_LT___$1,meta25837){return (new cljs.core.async.t25836(ch__$1,f__$1,map_LT___$1,meta25837));
});
}
return (new cljs.core.async.t25836(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25845 = (function (ch,f,map_GT_,meta25846){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25847){var self__ = this;
var _25847__$1 = this;return self__.meta25846;
});
cljs.core.async.t25845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25847,meta25846__$1){var self__ = this;
var _25847__$1 = this;return (new cljs.core.async.t25845(self__.ch,self__.f,self__.map_GT_,meta25846__$1));
});
cljs.core.async.__GT_t25845 = (function __GT_t25845(ch__$1,f__$1,map_GT___$1,meta25846){return (new cljs.core.async.t25845(ch__$1,f__$1,map_GT___$1,meta25846));
});
}
return (new cljs.core.async.t25845(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25851 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25851 = (function (ch,p,filter_GT_,meta25852){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25852 = meta25852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25851.cljs$lang$type = true;
cljs.core.async.t25851.cljs$lang$ctorStr = "cljs.core.async/t25851";
cljs.core.async.t25851.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25851");
});
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25851.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25853){var self__ = this;
var _25853__$1 = this;return self__.meta25852;
});
cljs.core.async.t25851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25853,meta25852__$1){var self__ = this;
var _25853__$1 = this;return (new cljs.core.async.t25851(self__.ch,self__.p,self__.filter_GT_,meta25852__$1));
});
cljs.core.async.__GT_t25851 = (function __GT_t25851(ch__$1,p__$1,filter_GT___$1,meta25852){return (new cljs.core.async.t25851(ch__$1,p__$1,filter_GT___$1,meta25852));
});
}
return (new cljs.core.async.t25851(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25936 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25936,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25936,out){
return (function (state_25915){var state_val_25916 = (state_25915[(1)]);if((state_val_25916 === (7)))
{var inst_25911 = (state_25915[(2)]);var state_25915__$1 = state_25915;var statearr_25917_25937 = state_25915__$1;(statearr_25917_25937[(2)] = inst_25911);
(statearr_25917_25937[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (1)))
{var state_25915__$1 = state_25915;var statearr_25918_25938 = state_25915__$1;(statearr_25918_25938[(2)] = null);
(statearr_25918_25938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (4)))
{var inst_25897 = (state_25915[(7)]);var inst_25897__$1 = (state_25915[(2)]);var inst_25898 = (inst_25897__$1 == null);var state_25915__$1 = (function (){var statearr_25919 = state_25915;(statearr_25919[(7)] = inst_25897__$1);
return statearr_25919;
})();if(cljs.core.truth_(inst_25898))
{var statearr_25920_25939 = state_25915__$1;(statearr_25920_25939[(1)] = (5));
} else
{var statearr_25921_25940 = state_25915__$1;(statearr_25921_25940[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (6)))
{var inst_25897 = (state_25915[(7)]);var inst_25902 = p.call(null,inst_25897);var state_25915__$1 = state_25915;if(cljs.core.truth_(inst_25902))
{var statearr_25922_25941 = state_25915__$1;(statearr_25922_25941[(1)] = (8));
} else
{var statearr_25923_25942 = state_25915__$1;(statearr_25923_25942[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (3)))
{var inst_25913 = (state_25915[(2)]);var state_25915__$1 = state_25915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25915__$1,inst_25913);
} else
{if((state_val_25916 === (2)))
{var state_25915__$1 = state_25915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25915__$1,(4),ch);
} else
{if((state_val_25916 === (11)))
{var inst_25905 = (state_25915[(2)]);var state_25915__$1 = state_25915;var statearr_25924_25943 = state_25915__$1;(statearr_25924_25943[(2)] = inst_25905);
(statearr_25924_25943[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (9)))
{var state_25915__$1 = state_25915;var statearr_25925_25944 = state_25915__$1;(statearr_25925_25944[(2)] = null);
(statearr_25925_25944[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (5)))
{var inst_25900 = cljs.core.async.close_BANG_.call(null,out);var state_25915__$1 = state_25915;var statearr_25926_25945 = state_25915__$1;(statearr_25926_25945[(2)] = inst_25900);
(statearr_25926_25945[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (10)))
{var inst_25908 = (state_25915[(2)]);var state_25915__$1 = (function (){var statearr_25927 = state_25915;(statearr_25927[(8)] = inst_25908);
return statearr_25927;
})();var statearr_25928_25946 = state_25915__$1;(statearr_25928_25946[(2)] = null);
(statearr_25928_25946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25916 === (8)))
{var inst_25897 = (state_25915[(7)]);var state_25915__$1 = state_25915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25915__$1,(11),out,inst_25897);
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
});})(c__9125__auto___25936,out))
;return ((function (switch__9110__auto__,c__9125__auto___25936,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25932 = [null,null,null,null,null,null,null,null,null];(statearr_25932[(0)] = state_machine__9111__auto__);
(statearr_25932[(1)] = (1));
return statearr_25932;
});
var state_machine__9111__auto____1 = (function (state_25915){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25915);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25933){if((e25933 instanceof Object))
{var ex__9114__auto__ = e25933;var statearr_25934_25947 = state_25915;(statearr_25934_25947[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25933;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25948 = state_25915;
state_25915 = G__25948;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25915){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25936,out))
})();var state__9127__auto__ = (function (){var statearr_25935 = f__9126__auto__.call(null);(statearr_25935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25936);
return statearr_25935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25936,out))
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
return (function (state_26114){var state_val_26115 = (state_26114[(1)]);if((state_val_26115 === (7)))
{var inst_26110 = (state_26114[(2)]);var state_26114__$1 = state_26114;var statearr_26116_26157 = state_26114__$1;(statearr_26116_26157[(2)] = inst_26110);
(statearr_26116_26157[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (20)))
{var inst_26080 = (state_26114[(7)]);var inst_26091 = (state_26114[(2)]);var inst_26092 = cljs.core.next.call(null,inst_26080);var inst_26066 = inst_26092;var inst_26067 = null;var inst_26068 = (0);var inst_26069 = (0);var state_26114__$1 = (function (){var statearr_26117 = state_26114;(statearr_26117[(8)] = inst_26066);
(statearr_26117[(9)] = inst_26091);
(statearr_26117[(10)] = inst_26067);
(statearr_26117[(11)] = inst_26068);
(statearr_26117[(12)] = inst_26069);
return statearr_26117;
})();var statearr_26118_26158 = state_26114__$1;(statearr_26118_26158[(2)] = null);
(statearr_26118_26158[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (1)))
{var state_26114__$1 = state_26114;var statearr_26119_26159 = state_26114__$1;(statearr_26119_26159[(2)] = null);
(statearr_26119_26159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (4)))
{var inst_26055 = (state_26114[(13)]);var inst_26055__$1 = (state_26114[(2)]);var inst_26056 = (inst_26055__$1 == null);var state_26114__$1 = (function (){var statearr_26120 = state_26114;(statearr_26120[(13)] = inst_26055__$1);
return statearr_26120;
})();if(cljs.core.truth_(inst_26056))
{var statearr_26121_26160 = state_26114__$1;(statearr_26121_26160[(1)] = (5));
} else
{var statearr_26122_26161 = state_26114__$1;(statearr_26122_26161[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (15)))
{var state_26114__$1 = state_26114;var statearr_26126_26162 = state_26114__$1;(statearr_26126_26162[(2)] = null);
(statearr_26126_26162[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (21)))
{var state_26114__$1 = state_26114;var statearr_26127_26163 = state_26114__$1;(statearr_26127_26163[(2)] = null);
(statearr_26127_26163[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (13)))
{var inst_26066 = (state_26114[(8)]);var inst_26067 = (state_26114[(10)]);var inst_26068 = (state_26114[(11)]);var inst_26069 = (state_26114[(12)]);var inst_26076 = (state_26114[(2)]);var inst_26077 = (inst_26069 + (1));var tmp26123 = inst_26066;var tmp26124 = inst_26067;var tmp26125 = inst_26068;var inst_26066__$1 = tmp26123;var inst_26067__$1 = tmp26124;var inst_26068__$1 = tmp26125;var inst_26069__$1 = inst_26077;var state_26114__$1 = (function (){var statearr_26128 = state_26114;(statearr_26128[(14)] = inst_26076);
(statearr_26128[(8)] = inst_26066__$1);
(statearr_26128[(10)] = inst_26067__$1);
(statearr_26128[(11)] = inst_26068__$1);
(statearr_26128[(12)] = inst_26069__$1);
return statearr_26128;
})();var statearr_26129_26164 = state_26114__$1;(statearr_26129_26164[(2)] = null);
(statearr_26129_26164[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (22)))
{var state_26114__$1 = state_26114;var statearr_26130_26165 = state_26114__$1;(statearr_26130_26165[(2)] = null);
(statearr_26130_26165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (6)))
{var inst_26055 = (state_26114[(13)]);var inst_26064 = f.call(null,inst_26055);var inst_26065 = cljs.core.seq.call(null,inst_26064);var inst_26066 = inst_26065;var inst_26067 = null;var inst_26068 = (0);var inst_26069 = (0);var state_26114__$1 = (function (){var statearr_26131 = state_26114;(statearr_26131[(8)] = inst_26066);
(statearr_26131[(10)] = inst_26067);
(statearr_26131[(11)] = inst_26068);
(statearr_26131[(12)] = inst_26069);
return statearr_26131;
})();var statearr_26132_26166 = state_26114__$1;(statearr_26132_26166[(2)] = null);
(statearr_26132_26166[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (17)))
{var inst_26080 = (state_26114[(7)]);var inst_26084 = cljs.core.chunk_first.call(null,inst_26080);var inst_26085 = cljs.core.chunk_rest.call(null,inst_26080);var inst_26086 = cljs.core.count.call(null,inst_26084);var inst_26066 = inst_26085;var inst_26067 = inst_26084;var inst_26068 = inst_26086;var inst_26069 = (0);var state_26114__$1 = (function (){var statearr_26133 = state_26114;(statearr_26133[(8)] = inst_26066);
(statearr_26133[(10)] = inst_26067);
(statearr_26133[(11)] = inst_26068);
(statearr_26133[(12)] = inst_26069);
return statearr_26133;
})();var statearr_26134_26167 = state_26114__$1;(statearr_26134_26167[(2)] = null);
(statearr_26134_26167[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (3)))
{var inst_26112 = (state_26114[(2)]);var state_26114__$1 = state_26114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26114__$1,inst_26112);
} else
{if((state_val_26115 === (12)))
{var inst_26100 = (state_26114[(2)]);var state_26114__$1 = state_26114;var statearr_26135_26168 = state_26114__$1;(statearr_26135_26168[(2)] = inst_26100);
(statearr_26135_26168[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (2)))
{var state_26114__$1 = state_26114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26114__$1,(4),in$);
} else
{if((state_val_26115 === (23)))
{var inst_26108 = (state_26114[(2)]);var state_26114__$1 = state_26114;var statearr_26136_26169 = state_26114__$1;(statearr_26136_26169[(2)] = inst_26108);
(statearr_26136_26169[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (19)))
{var inst_26095 = (state_26114[(2)]);var state_26114__$1 = state_26114;var statearr_26137_26170 = state_26114__$1;(statearr_26137_26170[(2)] = inst_26095);
(statearr_26137_26170[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (11)))
{var inst_26066 = (state_26114[(8)]);var inst_26080 = (state_26114[(7)]);var inst_26080__$1 = cljs.core.seq.call(null,inst_26066);var state_26114__$1 = (function (){var statearr_26138 = state_26114;(statearr_26138[(7)] = inst_26080__$1);
return statearr_26138;
})();if(inst_26080__$1)
{var statearr_26139_26171 = state_26114__$1;(statearr_26139_26171[(1)] = (14));
} else
{var statearr_26140_26172 = state_26114__$1;(statearr_26140_26172[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (9)))
{var inst_26102 = (state_26114[(2)]);var inst_26103 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26114__$1 = (function (){var statearr_26141 = state_26114;(statearr_26141[(15)] = inst_26102);
return statearr_26141;
})();if(cljs.core.truth_(inst_26103))
{var statearr_26142_26173 = state_26114__$1;(statearr_26142_26173[(1)] = (21));
} else
{var statearr_26143_26174 = state_26114__$1;(statearr_26143_26174[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (5)))
{var inst_26058 = cljs.core.async.close_BANG_.call(null,out);var state_26114__$1 = state_26114;var statearr_26144_26175 = state_26114__$1;(statearr_26144_26175[(2)] = inst_26058);
(statearr_26144_26175[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (14)))
{var inst_26080 = (state_26114[(7)]);var inst_26082 = cljs.core.chunked_seq_QMARK_.call(null,inst_26080);var state_26114__$1 = state_26114;if(inst_26082)
{var statearr_26145_26176 = state_26114__$1;(statearr_26145_26176[(1)] = (17));
} else
{var statearr_26146_26177 = state_26114__$1;(statearr_26146_26177[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (16)))
{var inst_26098 = (state_26114[(2)]);var state_26114__$1 = state_26114;var statearr_26147_26178 = state_26114__$1;(statearr_26147_26178[(2)] = inst_26098);
(statearr_26147_26178[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26115 === (10)))
{var inst_26067 = (state_26114[(10)]);var inst_26069 = (state_26114[(12)]);var inst_26074 = cljs.core._nth.call(null,inst_26067,inst_26069);var state_26114__$1 = state_26114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26114__$1,(13),out,inst_26074);
} else
{if((state_val_26115 === (18)))
{var inst_26080 = (state_26114[(7)]);var inst_26089 = cljs.core.first.call(null,inst_26080);var state_26114__$1 = state_26114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26114__$1,(20),out,inst_26089);
} else
{if((state_val_26115 === (8)))
{var inst_26068 = (state_26114[(11)]);var inst_26069 = (state_26114[(12)]);var inst_26071 = (inst_26069 < inst_26068);var inst_26072 = inst_26071;var state_26114__$1 = state_26114;if(cljs.core.truth_(inst_26072))
{var statearr_26148_26179 = state_26114__$1;(statearr_26148_26179[(1)] = (10));
} else
{var statearr_26149_26180 = state_26114__$1;(statearr_26149_26180[(1)] = (11));
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
var state_machine__9111__auto____0 = (function (){var statearr_26153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26153[(0)] = state_machine__9111__auto__);
(statearr_26153[(1)] = (1));
return statearr_26153;
});
var state_machine__9111__auto____1 = (function (state_26114){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26114);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26154){if((e26154 instanceof Object))
{var ex__9114__auto__ = e26154;var statearr_26155_26181 = state_26114;(statearr_26155_26181[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26154;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26182 = state_26114;
state_26114 = G__26182;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26114){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26156 = f__9126__auto__.call(null);(statearr_26156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26156;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26279 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26279,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26279,out){
return (function (state_26254){var state_val_26255 = (state_26254[(1)]);if((state_val_26255 === (7)))
{var inst_26249 = (state_26254[(2)]);var state_26254__$1 = state_26254;var statearr_26256_26280 = state_26254__$1;(statearr_26256_26280[(2)] = inst_26249);
(statearr_26256_26280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (1)))
{var inst_26231 = null;var state_26254__$1 = (function (){var statearr_26257 = state_26254;(statearr_26257[(7)] = inst_26231);
return statearr_26257;
})();var statearr_26258_26281 = state_26254__$1;(statearr_26258_26281[(2)] = null);
(statearr_26258_26281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (4)))
{var inst_26234 = (state_26254[(8)]);var inst_26234__$1 = (state_26254[(2)]);var inst_26235 = (inst_26234__$1 == null);var inst_26236 = cljs.core.not.call(null,inst_26235);var state_26254__$1 = (function (){var statearr_26259 = state_26254;(statearr_26259[(8)] = inst_26234__$1);
return statearr_26259;
})();if(inst_26236)
{var statearr_26260_26282 = state_26254__$1;(statearr_26260_26282[(1)] = (5));
} else
{var statearr_26261_26283 = state_26254__$1;(statearr_26261_26283[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (6)))
{var state_26254__$1 = state_26254;var statearr_26262_26284 = state_26254__$1;(statearr_26262_26284[(2)] = null);
(statearr_26262_26284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (3)))
{var inst_26251 = (state_26254[(2)]);var inst_26252 = cljs.core.async.close_BANG_.call(null,out);var state_26254__$1 = (function (){var statearr_26263 = state_26254;(statearr_26263[(9)] = inst_26251);
return statearr_26263;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26254__$1,inst_26252);
} else
{if((state_val_26255 === (2)))
{var state_26254__$1 = state_26254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26254__$1,(4),ch);
} else
{if((state_val_26255 === (11)))
{var inst_26234 = (state_26254[(8)]);var inst_26243 = (state_26254[(2)]);var inst_26231 = inst_26234;var state_26254__$1 = (function (){var statearr_26264 = state_26254;(statearr_26264[(7)] = inst_26231);
(statearr_26264[(10)] = inst_26243);
return statearr_26264;
})();var statearr_26265_26285 = state_26254__$1;(statearr_26265_26285[(2)] = null);
(statearr_26265_26285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (9)))
{var inst_26234 = (state_26254[(8)]);var state_26254__$1 = state_26254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26254__$1,(11),out,inst_26234);
} else
{if((state_val_26255 === (5)))
{var inst_26231 = (state_26254[(7)]);var inst_26234 = (state_26254[(8)]);var inst_26238 = cljs.core._EQ_.call(null,inst_26234,inst_26231);var state_26254__$1 = state_26254;if(inst_26238)
{var statearr_26267_26286 = state_26254__$1;(statearr_26267_26286[(1)] = (8));
} else
{var statearr_26268_26287 = state_26254__$1;(statearr_26268_26287[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (10)))
{var inst_26246 = (state_26254[(2)]);var state_26254__$1 = state_26254;var statearr_26269_26288 = state_26254__$1;(statearr_26269_26288[(2)] = inst_26246);
(statearr_26269_26288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26255 === (8)))
{var inst_26231 = (state_26254[(7)]);var tmp26266 = inst_26231;var inst_26231__$1 = tmp26266;var state_26254__$1 = (function (){var statearr_26270 = state_26254;(statearr_26270[(7)] = inst_26231__$1);
return statearr_26270;
})();var statearr_26271_26289 = state_26254__$1;(statearr_26271_26289[(2)] = null);
(statearr_26271_26289[(1)] = (2));
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
});})(c__9125__auto___26279,out))
;return ((function (switch__9110__auto__,c__9125__auto___26279,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26275 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26275[(0)] = state_machine__9111__auto__);
(statearr_26275[(1)] = (1));
return statearr_26275;
});
var state_machine__9111__auto____1 = (function (state_26254){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26254);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26276){if((e26276 instanceof Object))
{var ex__9114__auto__ = e26276;var statearr_26277_26290 = state_26254;(statearr_26277_26290[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26276;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26291 = state_26254;
state_26254 = G__26291;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26254){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26279,out))
})();var state__9127__auto__ = (function (){var statearr_26278 = f__9126__auto__.call(null);(statearr_26278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26279);
return statearr_26278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26279,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26426 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26426,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26426,out){
return (function (state_26396){var state_val_26397 = (state_26396[(1)]);if((state_val_26397 === (7)))
{var inst_26392 = (state_26396[(2)]);var state_26396__$1 = state_26396;var statearr_26398_26427 = state_26396__$1;(statearr_26398_26427[(2)] = inst_26392);
(statearr_26398_26427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (1)))
{var inst_26359 = (new Array(n));var inst_26360 = inst_26359;var inst_26361 = (0);var state_26396__$1 = (function (){var statearr_26399 = state_26396;(statearr_26399[(7)] = inst_26360);
(statearr_26399[(8)] = inst_26361);
return statearr_26399;
})();var statearr_26400_26428 = state_26396__$1;(statearr_26400_26428[(2)] = null);
(statearr_26400_26428[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (4)))
{var inst_26364 = (state_26396[(9)]);var inst_26364__$1 = (state_26396[(2)]);var inst_26365 = (inst_26364__$1 == null);var inst_26366 = cljs.core.not.call(null,inst_26365);var state_26396__$1 = (function (){var statearr_26401 = state_26396;(statearr_26401[(9)] = inst_26364__$1);
return statearr_26401;
})();if(inst_26366)
{var statearr_26402_26429 = state_26396__$1;(statearr_26402_26429[(1)] = (5));
} else
{var statearr_26403_26430 = state_26396__$1;(statearr_26403_26430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (15)))
{var inst_26386 = (state_26396[(2)]);var state_26396__$1 = state_26396;var statearr_26404_26431 = state_26396__$1;(statearr_26404_26431[(2)] = inst_26386);
(statearr_26404_26431[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (13)))
{var state_26396__$1 = state_26396;var statearr_26405_26432 = state_26396__$1;(statearr_26405_26432[(2)] = null);
(statearr_26405_26432[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (6)))
{var inst_26361 = (state_26396[(8)]);var inst_26382 = (inst_26361 > (0));var state_26396__$1 = state_26396;if(cljs.core.truth_(inst_26382))
{var statearr_26406_26433 = state_26396__$1;(statearr_26406_26433[(1)] = (12));
} else
{var statearr_26407_26434 = state_26396__$1;(statearr_26407_26434[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (3)))
{var inst_26394 = (state_26396[(2)]);var state_26396__$1 = state_26396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26396__$1,inst_26394);
} else
{if((state_val_26397 === (12)))
{var inst_26360 = (state_26396[(7)]);var inst_26384 = cljs.core.vec.call(null,inst_26360);var state_26396__$1 = state_26396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26396__$1,(15),out,inst_26384);
} else
{if((state_val_26397 === (2)))
{var state_26396__$1 = state_26396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26396__$1,(4),ch);
} else
{if((state_val_26397 === (11)))
{var inst_26376 = (state_26396[(2)]);var inst_26377 = (new Array(n));var inst_26360 = inst_26377;var inst_26361 = (0);var state_26396__$1 = (function (){var statearr_26408 = state_26396;(statearr_26408[(7)] = inst_26360);
(statearr_26408[(8)] = inst_26361);
(statearr_26408[(10)] = inst_26376);
return statearr_26408;
})();var statearr_26409_26435 = state_26396__$1;(statearr_26409_26435[(2)] = null);
(statearr_26409_26435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (9)))
{var inst_26360 = (state_26396[(7)]);var inst_26374 = cljs.core.vec.call(null,inst_26360);var state_26396__$1 = state_26396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26396__$1,(11),out,inst_26374);
} else
{if((state_val_26397 === (5)))
{var inst_26364 = (state_26396[(9)]);var inst_26360 = (state_26396[(7)]);var inst_26369 = (state_26396[(11)]);var inst_26361 = (state_26396[(8)]);var inst_26368 = (inst_26360[inst_26361] = inst_26364);var inst_26369__$1 = (inst_26361 + (1));var inst_26370 = (inst_26369__$1 < n);var state_26396__$1 = (function (){var statearr_26410 = state_26396;(statearr_26410[(12)] = inst_26368);
(statearr_26410[(11)] = inst_26369__$1);
return statearr_26410;
})();if(cljs.core.truth_(inst_26370))
{var statearr_26411_26436 = state_26396__$1;(statearr_26411_26436[(1)] = (8));
} else
{var statearr_26412_26437 = state_26396__$1;(statearr_26412_26437[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (14)))
{var inst_26389 = (state_26396[(2)]);var inst_26390 = cljs.core.async.close_BANG_.call(null,out);var state_26396__$1 = (function (){var statearr_26414 = state_26396;(statearr_26414[(13)] = inst_26389);
return statearr_26414;
})();var statearr_26415_26438 = state_26396__$1;(statearr_26415_26438[(2)] = inst_26390);
(statearr_26415_26438[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (10)))
{var inst_26380 = (state_26396[(2)]);var state_26396__$1 = state_26396;var statearr_26416_26439 = state_26396__$1;(statearr_26416_26439[(2)] = inst_26380);
(statearr_26416_26439[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26397 === (8)))
{var inst_26360 = (state_26396[(7)]);var inst_26369 = (state_26396[(11)]);var tmp26413 = inst_26360;var inst_26360__$1 = tmp26413;var inst_26361 = inst_26369;var state_26396__$1 = (function (){var statearr_26417 = state_26396;(statearr_26417[(7)] = inst_26360__$1);
(statearr_26417[(8)] = inst_26361);
return statearr_26417;
})();var statearr_26418_26440 = state_26396__$1;(statearr_26418_26440[(2)] = null);
(statearr_26418_26440[(1)] = (2));
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
});})(c__9125__auto___26426,out))
;return ((function (switch__9110__auto__,c__9125__auto___26426,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26422[(0)] = state_machine__9111__auto__);
(statearr_26422[(1)] = (1));
return statearr_26422;
});
var state_machine__9111__auto____1 = (function (state_26396){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26396);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26423){if((e26423 instanceof Object))
{var ex__9114__auto__ = e26423;var statearr_26424_26441 = state_26396;(statearr_26424_26441[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26423;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26442 = state_26396;
state_26396 = G__26442;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26396){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26426,out))
})();var state__9127__auto__ = (function (){var statearr_26425 = f__9126__auto__.call(null);(statearr_26425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26426);
return statearr_26425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26426,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26585,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26585,out){
return (function (state_26555){var state_val_26556 = (state_26555[(1)]);if((state_val_26556 === (7)))
{var inst_26551 = (state_26555[(2)]);var state_26555__$1 = state_26555;var statearr_26557_26586 = state_26555__$1;(statearr_26557_26586[(2)] = inst_26551);
(statearr_26557_26586[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (1)))
{var inst_26514 = [];var inst_26515 = inst_26514;var inst_26516 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26555__$1 = (function (){var statearr_26558 = state_26555;(statearr_26558[(7)] = inst_26515);
(statearr_26558[(8)] = inst_26516);
return statearr_26558;
})();var statearr_26559_26587 = state_26555__$1;(statearr_26559_26587[(2)] = null);
(statearr_26559_26587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (4)))
{var inst_26519 = (state_26555[(9)]);var inst_26519__$1 = (state_26555[(2)]);var inst_26520 = (inst_26519__$1 == null);var inst_26521 = cljs.core.not.call(null,inst_26520);var state_26555__$1 = (function (){var statearr_26560 = state_26555;(statearr_26560[(9)] = inst_26519__$1);
return statearr_26560;
})();if(inst_26521)
{var statearr_26561_26588 = state_26555__$1;(statearr_26561_26588[(1)] = (5));
} else
{var statearr_26562_26589 = state_26555__$1;(statearr_26562_26589[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (15)))
{var inst_26545 = (state_26555[(2)]);var state_26555__$1 = state_26555;var statearr_26563_26590 = state_26555__$1;(statearr_26563_26590[(2)] = inst_26545);
(statearr_26563_26590[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (13)))
{var state_26555__$1 = state_26555;var statearr_26564_26591 = state_26555__$1;(statearr_26564_26591[(2)] = null);
(statearr_26564_26591[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (6)))
{var inst_26515 = (state_26555[(7)]);var inst_26540 = inst_26515.length;var inst_26541 = (inst_26540 > (0));var state_26555__$1 = state_26555;if(cljs.core.truth_(inst_26541))
{var statearr_26565_26592 = state_26555__$1;(statearr_26565_26592[(1)] = (12));
} else
{var statearr_26566_26593 = state_26555__$1;(statearr_26566_26593[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (3)))
{var inst_26553 = (state_26555[(2)]);var state_26555__$1 = state_26555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26555__$1,inst_26553);
} else
{if((state_val_26556 === (12)))
{var inst_26515 = (state_26555[(7)]);var inst_26543 = cljs.core.vec.call(null,inst_26515);var state_26555__$1 = state_26555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26555__$1,(15),out,inst_26543);
} else
{if((state_val_26556 === (2)))
{var state_26555__$1 = state_26555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26555__$1,(4),ch);
} else
{if((state_val_26556 === (11)))
{var inst_26519 = (state_26555[(9)]);var inst_26523 = (state_26555[(10)]);var inst_26533 = (state_26555[(2)]);var inst_26534 = [];var inst_26535 = inst_26534.push(inst_26519);var inst_26515 = inst_26534;var inst_26516 = inst_26523;var state_26555__$1 = (function (){var statearr_26567 = state_26555;(statearr_26567[(7)] = inst_26515);
(statearr_26567[(11)] = inst_26533);
(statearr_26567[(12)] = inst_26535);
(statearr_26567[(8)] = inst_26516);
return statearr_26567;
})();var statearr_26568_26594 = state_26555__$1;(statearr_26568_26594[(2)] = null);
(statearr_26568_26594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (9)))
{var inst_26515 = (state_26555[(7)]);var inst_26531 = cljs.core.vec.call(null,inst_26515);var state_26555__$1 = state_26555;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26555__$1,(11),out,inst_26531);
} else
{if((state_val_26556 === (5)))
{var inst_26519 = (state_26555[(9)]);var inst_26516 = (state_26555[(8)]);var inst_26523 = (state_26555[(10)]);var inst_26523__$1 = f.call(null,inst_26519);var inst_26524 = cljs.core._EQ_.call(null,inst_26523__$1,inst_26516);var inst_26525 = cljs.core.keyword_identical_QMARK_.call(null,inst_26516,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26526 = (inst_26524) || (inst_26525);var state_26555__$1 = (function (){var statearr_26569 = state_26555;(statearr_26569[(10)] = inst_26523__$1);
return statearr_26569;
})();if(cljs.core.truth_(inst_26526))
{var statearr_26570_26595 = state_26555__$1;(statearr_26570_26595[(1)] = (8));
} else
{var statearr_26571_26596 = state_26555__$1;(statearr_26571_26596[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (14)))
{var inst_26548 = (state_26555[(2)]);var inst_26549 = cljs.core.async.close_BANG_.call(null,out);var state_26555__$1 = (function (){var statearr_26573 = state_26555;(statearr_26573[(13)] = inst_26548);
return statearr_26573;
})();var statearr_26574_26597 = state_26555__$1;(statearr_26574_26597[(2)] = inst_26549);
(statearr_26574_26597[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (10)))
{var inst_26538 = (state_26555[(2)]);var state_26555__$1 = state_26555;var statearr_26575_26598 = state_26555__$1;(statearr_26575_26598[(2)] = inst_26538);
(statearr_26575_26598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26556 === (8)))
{var inst_26515 = (state_26555[(7)]);var inst_26519 = (state_26555[(9)]);var inst_26523 = (state_26555[(10)]);var inst_26528 = inst_26515.push(inst_26519);var tmp26572 = inst_26515;var inst_26515__$1 = tmp26572;var inst_26516 = inst_26523;var state_26555__$1 = (function (){var statearr_26576 = state_26555;(statearr_26576[(7)] = inst_26515__$1);
(statearr_26576[(14)] = inst_26528);
(statearr_26576[(8)] = inst_26516);
return statearr_26576;
})();var statearr_26577_26599 = state_26555__$1;(statearr_26577_26599[(2)] = null);
(statearr_26577_26599[(1)] = (2));
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
});})(c__9125__auto___26585,out))
;return ((function (switch__9110__auto__,c__9125__auto___26585,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26581[(0)] = state_machine__9111__auto__);
(statearr_26581[(1)] = (1));
return statearr_26581;
});
var state_machine__9111__auto____1 = (function (state_26555){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26555);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26582){if((e26582 instanceof Object))
{var ex__9114__auto__ = e26582;var statearr_26583_26600 = state_26555;(statearr_26583_26600[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26555);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26601 = state_26555;
state_26555 = G__26601;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26555){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26585,out))
})();var state__9127__auto__ = (function (){var statearr_26584 = f__9126__auto__.call(null);(statearr_26584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26585);
return statearr_26584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26585,out))
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
