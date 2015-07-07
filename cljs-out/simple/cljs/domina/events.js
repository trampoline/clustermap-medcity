// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21157 = {};return obj21157;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21161 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21161 = (function (evt,f,create_listener_function,meta21162){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21162 = meta21162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21161.cljs$lang$type = true;
domina.events.t21161.cljs$lang$ctorStr = "domina.events/t21161";
domina.events.t21161.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21161");
});
domina.events.t21161.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21161.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21161.prototype.domina$events$Event$ = true;
domina.events.t21161.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21161.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21161.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21161.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21161.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21161.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21163){var self__ = this;
var _21163__$1 = this;return self__.meta21162;
});
domina.events.t21161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21163,meta21162__$1){var self__ = this;
var _21163__$1 = this;return (new domina.events.t21161(self__.evt,self__.f,self__.create_listener_function,meta21162__$1));
});
domina.events.__GT_t21161 = (function __GT_t21161(evt__$1,f__$1,create_listener_function__$1,meta21162){return (new domina.events.t21161(evt__$1,f__$1,create_listener_function__$1,meta21162));
});
}
return (new domina.events.t21161(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21168(s__21169){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21169__$1 = s__21169;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21169__$1);if(temp__4126__auto__)
{var s__21169__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21169__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21169__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21171 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21170 = (0);while(true){
if((i__21170 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21170);cljs.core.chunk_append.call(null,b__21171,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21172 = (i__21170 + (1));
i__21170 = G__21172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21171),iter__21168.call(null,cljs.core.chunk_rest.call(null,s__21169__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21171),null);
}
} else
{var node = cljs.core.first.call(null,s__21169__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21168.call(null,cljs.core.rest.call(null,s__21169__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21181 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21182 = null;var count__21183 = (0);var i__21184 = (0);while(true){
if((i__21184 < count__21183))
{var node = cljs.core._nth.call(null,chunk__21182,i__21184);goog.events.removeAll(node);
{
var G__21189 = seq__21181;
var G__21190 = chunk__21182;
var G__21191 = count__21183;
var G__21192 = (i__21184 + (1));
seq__21181 = G__21189;
chunk__21182 = G__21190;
count__21183 = G__21191;
i__21184 = G__21192;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21181);if(temp__4126__auto__)
{var seq__21181__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21181__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21181__$1);{
var G__21193 = cljs.core.chunk_rest.call(null,seq__21181__$1);
var G__21194 = c__4408__auto__;
var G__21195 = cljs.core.count.call(null,c__4408__auto__);
var G__21196 = (0);
seq__21181 = G__21193;
chunk__21182 = G__21194;
count__21183 = G__21195;
i__21184 = G__21196;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21181__$1);goog.events.removeAll(node);
{
var G__21197 = cljs.core.next.call(null,seq__21181__$1);
var G__21198 = null;
var G__21199 = (0);
var G__21200 = (0);
seq__21181 = G__21197;
chunk__21182 = G__21198;
count__21183 = G__21199;
i__21184 = G__21200;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21186 = null;var count__21187 = (0);var i__21188 = (0);while(true){
if((i__21188 < count__21187))
{var node = cljs.core._nth.call(null,chunk__21186,i__21188);goog.events.removeAll(node,type__$1);
{
var G__21201 = seq__21185;
var G__21202 = chunk__21186;
var G__21203 = count__21187;
var G__21204 = (i__21188 + (1));
seq__21185 = G__21201;
chunk__21186 = G__21202;
count__21187 = G__21203;
i__21188 = G__21204;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21185);if(temp__4126__auto__)
{var seq__21185__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21185__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21185__$1);{
var G__21205 = cljs.core.chunk_rest.call(null,seq__21185__$1);
var G__21206 = c__4408__auto__;
var G__21207 = cljs.core.count.call(null,c__4408__auto__);
var G__21208 = (0);
seq__21185 = G__21205;
chunk__21186 = G__21206;
count__21187 = G__21207;
i__21188 = G__21208;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21185__$1);goog.events.removeAll(node,type__$1);
{
var G__21209 = cljs.core.next.call(null,seq__21185__$1);
var G__21210 = null;
var G__21211 = (0);
var G__21212 = (0);
seq__21185 = G__21209;
chunk__21186 = G__21210;
count__21187 = G__21211;
i__21188 = G__21212;
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
var G__21213 = parent;
var G__21214 = cljs.core.cons.call(null,parent,so_far);
n = G__21213;
so_far = G__21214;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21223_21231 = cljs.core.seq.call(null,ancestors);var chunk__21224_21232 = null;var count__21225_21233 = (0);var i__21226_21234 = (0);while(true){
if((i__21226_21234 < count__21225_21233))
{var n_21235 = cljs.core._nth.call(null,chunk__21224_21232,i__21226_21234);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21235;
goog.events.fireListeners(n_21235,evt.type,true,evt);
}
{
var G__21236 = seq__21223_21231;
var G__21237 = chunk__21224_21232;
var G__21238 = count__21225_21233;
var G__21239 = (i__21226_21234 + (1));
seq__21223_21231 = G__21236;
chunk__21224_21232 = G__21237;
count__21225_21233 = G__21238;
i__21226_21234 = G__21239;
continue;
}
} else
{var temp__4126__auto___21240 = cljs.core.seq.call(null,seq__21223_21231);if(temp__4126__auto___21240)
{var seq__21223_21241__$1 = temp__4126__auto___21240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21223_21241__$1))
{var c__4408__auto___21242 = cljs.core.chunk_first.call(null,seq__21223_21241__$1);{
var G__21243 = cljs.core.chunk_rest.call(null,seq__21223_21241__$1);
var G__21244 = c__4408__auto___21242;
var G__21245 = cljs.core.count.call(null,c__4408__auto___21242);
var G__21246 = (0);
seq__21223_21231 = G__21243;
chunk__21224_21232 = G__21244;
count__21225_21233 = G__21245;
i__21226_21234 = G__21246;
continue;
}
} else
{var n_21247 = cljs.core.first.call(null,seq__21223_21241__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21247;
goog.events.fireListeners(n_21247,evt.type,true,evt);
}
{
var G__21248 = cljs.core.next.call(null,seq__21223_21241__$1);
var G__21249 = null;
var G__21250 = (0);
var G__21251 = (0);
seq__21223_21231 = G__21248;
chunk__21224_21232 = G__21249;
count__21225_21233 = G__21250;
i__21226_21234 = G__21251;
continue;
}
}
} else
{}
}
break;
}
var seq__21227_21252 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21228_21253 = null;var count__21229_21254 = (0);var i__21230_21255 = (0);while(true){
if((i__21230_21255 < count__21229_21254))
{var n_21256 = cljs.core._nth.call(null,chunk__21228_21253,i__21230_21255);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21256;
goog.events.fireListeners(n_21256,evt.type,false,evt);
}
{
var G__21257 = seq__21227_21252;
var G__21258 = chunk__21228_21253;
var G__21259 = count__21229_21254;
var G__21260 = (i__21230_21255 + (1));
seq__21227_21252 = G__21257;
chunk__21228_21253 = G__21258;
count__21229_21254 = G__21259;
i__21230_21255 = G__21260;
continue;
}
} else
{var temp__4126__auto___21261 = cljs.core.seq.call(null,seq__21227_21252);if(temp__4126__auto___21261)
{var seq__21227_21262__$1 = temp__4126__auto___21261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21227_21262__$1))
{var c__4408__auto___21263 = cljs.core.chunk_first.call(null,seq__21227_21262__$1);{
var G__21264 = cljs.core.chunk_rest.call(null,seq__21227_21262__$1);
var G__21265 = c__4408__auto___21263;
var G__21266 = cljs.core.count.call(null,c__4408__auto___21263);
var G__21267 = (0);
seq__21227_21252 = G__21264;
chunk__21228_21253 = G__21265;
count__21229_21254 = G__21266;
i__21230_21255 = G__21267;
continue;
}
} else
{var n_21268 = cljs.core.first.call(null,seq__21227_21262__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21268;
goog.events.fireListeners(n_21268,evt.type,false,evt);
}
{
var G__21269 = cljs.core.next.call(null,seq__21227_21262__$1);
var G__21270 = null;
var G__21271 = (0);
var G__21272 = (0);
seq__21227_21252 = G__21269;
chunk__21228_21253 = G__21270;
count__21229_21254 = G__21271;
i__21230_21255 = G__21272;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21279_21285 = cljs.core.seq.call(null,evt_map);var chunk__21280_21286 = null;var count__21281_21287 = (0);var i__21282_21288 = (0);while(true){
if((i__21282_21288 < count__21281_21287))
{var vec__21283_21289 = cljs.core._nth.call(null,chunk__21280_21286,i__21282_21288);var k_21290 = cljs.core.nth.call(null,vec__21283_21289,(0),null);var v_21291 = cljs.core.nth.call(null,vec__21283_21289,(1),null);(evt[k_21290] = v_21291);
{
var G__21292 = seq__21279_21285;
var G__21293 = chunk__21280_21286;
var G__21294 = count__21281_21287;
var G__21295 = (i__21282_21288 + (1));
seq__21279_21285 = G__21292;
chunk__21280_21286 = G__21293;
count__21281_21287 = G__21294;
i__21282_21288 = G__21295;
continue;
}
} else
{var temp__4126__auto___21296 = cljs.core.seq.call(null,seq__21279_21285);if(temp__4126__auto___21296)
{var seq__21279_21297__$1 = temp__4126__auto___21296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21279_21297__$1))
{var c__4408__auto___21298 = cljs.core.chunk_first.call(null,seq__21279_21297__$1);{
var G__21299 = cljs.core.chunk_rest.call(null,seq__21279_21297__$1);
var G__21300 = c__4408__auto___21298;
var G__21301 = cljs.core.count.call(null,c__4408__auto___21298);
var G__21302 = (0);
seq__21279_21285 = G__21299;
chunk__21280_21286 = G__21300;
count__21281_21287 = G__21301;
i__21282_21288 = G__21302;
continue;
}
} else
{var vec__21284_21303 = cljs.core.first.call(null,seq__21279_21297__$1);var k_21304 = cljs.core.nth.call(null,vec__21284_21303,(0),null);var v_21305 = cljs.core.nth.call(null,vec__21284_21303,(1),null);(evt[k_21304] = v_21305);
{
var G__21306 = cljs.core.next.call(null,seq__21279_21297__$1);
var G__21307 = null;
var G__21308 = (0);
var G__21309 = (0);
seq__21279_21285 = G__21306;
chunk__21280_21286 = G__21307;
count__21281_21287 = G__21308;
i__21282_21288 = G__21309;
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
return (function (p1__21310_SHARP_){return goog.events.getListeners(p1__21310_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
