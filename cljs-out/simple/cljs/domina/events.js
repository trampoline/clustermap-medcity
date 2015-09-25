// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21166 = {};return obj21166;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.prevent_default[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.prevent_default["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.current_target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.current_target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.event_type[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.event_type["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.raw_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.raw_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21170 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21170 = (function (evt,f,create_listener_function,meta21171){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21171 = meta21171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21170.cljs$lang$type = true;
domina.events.t21170.cljs$lang$ctorStr = "domina.events/t21170";
domina.events.t21170.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21170");
});
domina.events.t21170.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21170.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21170.prototype.domina$events$Event$ = true;
domina.events.t21170.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21170.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21170.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21170.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21170.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21170.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21172){var self__ = this;
var _21172__$1 = this;return self__.meta21171;
});
domina.events.t21170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21172,meta21171__$1){var self__ = this;
var _21172__$1 = this;return (new domina.events.t21170(self__.evt,self__.f,self__.create_listener_function,meta21171__$1));
});
domina.events.__GT_t21170 = (function __GT_t21170(evt__$1,f__$1,create_listener_function__$1,meta21171){return (new domina.events.t21170(evt__$1,f__$1,create_listener_function__$1,meta21171));
});
}
return (new domina.events.t21170(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21177(s__21178){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21178__$1 = s__21178;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21178__$1);if(temp__4126__auto__)
{var s__21178__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21178__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21178__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21180 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21179 = (0);while(true){
if((i__21179 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21179);cljs.core.chunk_append.call(null,b__21180,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21181 = (i__21179 + (1));
i__21179 = G__21181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21180),iter__21177.call(null,cljs.core.chunk_rest.call(null,s__21178__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21180),null);
}
} else
{var node = cljs.core.first.call(null,s__21178__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21177.call(null,cljs.core.rest.call(null,s__21178__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4377__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__21190 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21191 = null;var count__21192 = (0);var i__21193 = (0);while(true){
if((i__21193 < count__21192))
{var node = cljs.core._nth.call(null,chunk__21191,i__21193);goog.events.removeAll(node);
{
var G__21198 = seq__21190;
var G__21199 = chunk__21191;
var G__21200 = count__21192;
var G__21201 = (i__21193 + (1));
seq__21190 = G__21198;
chunk__21191 = G__21199;
count__21192 = G__21200;
i__21193 = G__21201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21190);if(temp__4126__auto__)
{var seq__21190__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21190__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21190__$1);{
var G__21202 = cljs.core.chunk_rest.call(null,seq__21190__$1);
var G__21203 = c__4408__auto__;
var G__21204 = cljs.core.count.call(null,c__4408__auto__);
var G__21205 = (0);
seq__21190 = G__21202;
chunk__21191 = G__21203;
count__21192 = G__21204;
i__21193 = G__21205;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21190__$1);goog.events.removeAll(node);
{
var G__21206 = cljs.core.next.call(null,seq__21190__$1);
var G__21207 = null;
var G__21208 = (0);
var G__21209 = (0);
seq__21190 = G__21206;
chunk__21191 = G__21207;
count__21192 = G__21208;
i__21193 = G__21209;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21194 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21195 = null;var count__21196 = (0);var i__21197 = (0);while(true){
if((i__21197 < count__21196))
{var node = cljs.core._nth.call(null,chunk__21195,i__21197);goog.events.removeAll(node,type__$1);
{
var G__21210 = seq__21194;
var G__21211 = chunk__21195;
var G__21212 = count__21196;
var G__21213 = (i__21197 + (1));
seq__21194 = G__21210;
chunk__21195 = G__21211;
count__21196 = G__21212;
i__21197 = G__21213;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21194);if(temp__4126__auto__)
{var seq__21194__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21194__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21194__$1);{
var G__21214 = cljs.core.chunk_rest.call(null,seq__21194__$1);
var G__21215 = c__4408__auto__;
var G__21216 = cljs.core.count.call(null,c__4408__auto__);
var G__21217 = (0);
seq__21194 = G__21214;
chunk__21195 = G__21215;
count__21196 = G__21216;
i__21197 = G__21217;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21194__$1);goog.events.removeAll(node,type__$1);
{
var G__21218 = cljs.core.next.call(null,seq__21194__$1);
var G__21219 = null;
var G__21220 = (0);
var G__21221 = (0);
seq__21194 = G__21218;
chunk__21195 = G__21219;
count__21196 = G__21220;
i__21197 = G__21221;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__21222 = parent;
var G__21223 = cljs.core.cons.call(null,parent,so_far);
n = G__21222;
so_far = G__21223;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21232_21240 = cljs.core.seq.call(null,ancestors);var chunk__21233_21241 = null;var count__21234_21242 = (0);var i__21235_21243 = (0);while(true){
if((i__21235_21243 < count__21234_21242))
{var n_21244 = cljs.core._nth.call(null,chunk__21233_21241,i__21235_21243);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21244;
goog.events.fireListeners(n_21244,evt.type,true,evt);
}
{
var G__21245 = seq__21232_21240;
var G__21246 = chunk__21233_21241;
var G__21247 = count__21234_21242;
var G__21248 = (i__21235_21243 + (1));
seq__21232_21240 = G__21245;
chunk__21233_21241 = G__21246;
count__21234_21242 = G__21247;
i__21235_21243 = G__21248;
continue;
}
} else
{var temp__4126__auto___21249 = cljs.core.seq.call(null,seq__21232_21240);if(temp__4126__auto___21249)
{var seq__21232_21250__$1 = temp__4126__auto___21249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21232_21250__$1))
{var c__4408__auto___21251 = cljs.core.chunk_first.call(null,seq__21232_21250__$1);{
var G__21252 = cljs.core.chunk_rest.call(null,seq__21232_21250__$1);
var G__21253 = c__4408__auto___21251;
var G__21254 = cljs.core.count.call(null,c__4408__auto___21251);
var G__21255 = (0);
seq__21232_21240 = G__21252;
chunk__21233_21241 = G__21253;
count__21234_21242 = G__21254;
i__21235_21243 = G__21255;
continue;
}
} else
{var n_21256 = cljs.core.first.call(null,seq__21232_21250__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21256;
goog.events.fireListeners(n_21256,evt.type,true,evt);
}
{
var G__21257 = cljs.core.next.call(null,seq__21232_21250__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__21232_21240 = G__21257;
chunk__21233_21241 = G__21258;
count__21234_21242 = G__21259;
i__21235_21243 = G__21260;
continue;
}
}
} else
{}
}
break;
}
var seq__21236_21261 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21237_21262 = null;var count__21238_21263 = (0);var i__21239_21264 = (0);while(true){
if((i__21239_21264 < count__21238_21263))
{var n_21265 = cljs.core._nth.call(null,chunk__21237_21262,i__21239_21264);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21265;
goog.events.fireListeners(n_21265,evt.type,false,evt);
}
{
var G__21266 = seq__21236_21261;
var G__21267 = chunk__21237_21262;
var G__21268 = count__21238_21263;
var G__21269 = (i__21239_21264 + (1));
seq__21236_21261 = G__21266;
chunk__21237_21262 = G__21267;
count__21238_21263 = G__21268;
i__21239_21264 = G__21269;
continue;
}
} else
{var temp__4126__auto___21270 = cljs.core.seq.call(null,seq__21236_21261);if(temp__4126__auto___21270)
{var seq__21236_21271__$1 = temp__4126__auto___21270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21236_21271__$1))
{var c__4408__auto___21272 = cljs.core.chunk_first.call(null,seq__21236_21271__$1);{
var G__21273 = cljs.core.chunk_rest.call(null,seq__21236_21271__$1);
var G__21274 = c__4408__auto___21272;
var G__21275 = cljs.core.count.call(null,c__4408__auto___21272);
var G__21276 = (0);
seq__21236_21261 = G__21273;
chunk__21237_21262 = G__21274;
count__21238_21263 = G__21275;
i__21239_21264 = G__21276;
continue;
}
} else
{var n_21277 = cljs.core.first.call(null,seq__21236_21271__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21277;
goog.events.fireListeners(n_21277,evt.type,false,evt);
}
{
var G__21278 = cljs.core.next.call(null,seq__21236_21271__$1);
var G__21279 = null;
var G__21280 = (0);
var G__21281 = (0);
seq__21236_21261 = G__21278;
chunk__21237_21262 = G__21279;
count__21238_21263 = G__21280;
i__21239_21264 = G__21281;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3627__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3627__auto__))
{return o.dispatchEvent;
} else
{return and__3627__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21288_21294 = cljs.core.seq.call(null,evt_map);var chunk__21289_21295 = null;var count__21290_21296 = (0);var i__21291_21297 = (0);while(true){
if((i__21291_21297 < count__21290_21296))
{var vec__21292_21298 = cljs.core._nth.call(null,chunk__21289_21295,i__21291_21297);var k_21299 = cljs.core.nth.call(null,vec__21292_21298,(0),null);var v_21300 = cljs.core.nth.call(null,vec__21292_21298,(1),null);(evt[k_21299] = v_21300);
{
var G__21301 = seq__21288_21294;
var G__21302 = chunk__21289_21295;
var G__21303 = count__21290_21296;
var G__21304 = (i__21291_21297 + (1));
seq__21288_21294 = G__21301;
chunk__21289_21295 = G__21302;
count__21290_21296 = G__21303;
i__21291_21297 = G__21304;
continue;
}
} else
{var temp__4126__auto___21305 = cljs.core.seq.call(null,seq__21288_21294);if(temp__4126__auto___21305)
{var seq__21288_21306__$1 = temp__4126__auto___21305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21288_21306__$1))
{var c__4408__auto___21307 = cljs.core.chunk_first.call(null,seq__21288_21306__$1);{
var G__21308 = cljs.core.chunk_rest.call(null,seq__21288_21306__$1);
var G__21309 = c__4408__auto___21307;
var G__21310 = cljs.core.count.call(null,c__4408__auto___21307);
var G__21311 = (0);
seq__21288_21294 = G__21308;
chunk__21289_21295 = G__21309;
count__21290_21296 = G__21310;
i__21291_21297 = G__21311;
continue;
}
} else
{var vec__21293_21312 = cljs.core.first.call(null,seq__21288_21306__$1);var k_21313 = cljs.core.nth.call(null,vec__21293_21312,(0),null);var v_21314 = cljs.core.nth.call(null,vec__21293_21312,(1),null);(evt[k_21313] = v_21314);
{
var G__21315 = cljs.core.next.call(null,seq__21288_21306__$1);
var G__21316 = null;
var G__21317 = (0);
var G__21318 = (0);
seq__21288_21294 = G__21315;
chunk__21289_21295 = G__21316;
count__21290_21296 = G__21317;
i__21291_21297 = G__21318;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__21319_SHARP_){return goog.events.getListeners(p1__21319_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
