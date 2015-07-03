// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21145 = {};return obj21145;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21149 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21149 = (function (evt,f,create_listener_function,meta21150){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21150 = meta21150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21149.cljs$lang$type = true;
domina.events.t21149.cljs$lang$ctorStr = "domina.events/t21149";
domina.events.t21149.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t21149");
});
domina.events.t21149.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21149.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t21149.prototype.domina$events$Event$ = true;
domina.events.t21149.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21149.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21149.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21149.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21149.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21149.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21151){var self__ = this;
var _21151__$1 = this;return self__.meta21150;
});
domina.events.t21149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21151,meta21150__$1){var self__ = this;
var _21151__$1 = this;return (new domina.events.t21149(self__.evt,self__.f,self__.create_listener_function,meta21150__$1));
});
domina.events.__GT_t21149 = (function __GT_t21149(evt__$1,f__$1,create_listener_function__$1,meta21150){return (new domina.events.t21149(evt__$1,f__$1,create_listener_function__$1,meta21150));
});
}
return (new domina.events.t21149(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__21156(s__21157){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21157__$1 = s__21157;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21157__$1);if(temp__4126__auto__)
{var s__21157__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21157__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21157__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21159 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21158 = (0);while(true){
if((i__21158 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__21158);cljs.core.chunk_append.call(null,b__21159,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21160 = (i__21158 + (1));
i__21158 = G__21160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21159),iter__21156.call(null,cljs.core.chunk_rest.call(null,s__21157__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21159),null);
}
} else
{var node = cljs.core.first.call(null,s__21157__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21156.call(null,cljs.core.rest.call(null,s__21157__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21169 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21170 = null;var count__21171 = (0);var i__21172 = (0);while(true){
if((i__21172 < count__21171))
{var node = cljs.core._nth.call(null,chunk__21170,i__21172);goog.events.removeAll(node);
{
var G__21177 = seq__21169;
var G__21178 = chunk__21170;
var G__21179 = count__21171;
var G__21180 = (i__21172 + (1));
seq__21169 = G__21177;
chunk__21170 = G__21178;
count__21171 = G__21179;
i__21172 = G__21180;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21169);if(temp__4126__auto__)
{var seq__21169__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21169__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21169__$1);{
var G__21181 = cljs.core.chunk_rest.call(null,seq__21169__$1);
var G__21182 = c__4408__auto__;
var G__21183 = cljs.core.count.call(null,c__4408__auto__);
var G__21184 = (0);
seq__21169 = G__21181;
chunk__21170 = G__21182;
count__21171 = G__21183;
i__21172 = G__21184;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21169__$1);goog.events.removeAll(node);
{
var G__21185 = cljs.core.next.call(null,seq__21169__$1);
var G__21186 = null;
var G__21187 = (0);
var G__21188 = (0);
seq__21169 = G__21185;
chunk__21170 = G__21186;
count__21171 = G__21187;
i__21172 = G__21188;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21173 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21174 = null;var count__21175 = (0);var i__21176 = (0);while(true){
if((i__21176 < count__21175))
{var node = cljs.core._nth.call(null,chunk__21174,i__21176);goog.events.removeAll(node,type__$1);
{
var G__21189 = seq__21173;
var G__21190 = chunk__21174;
var G__21191 = count__21175;
var G__21192 = (i__21176 + (1));
seq__21173 = G__21189;
chunk__21174 = G__21190;
count__21175 = G__21191;
i__21176 = G__21192;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21173);if(temp__4126__auto__)
{var seq__21173__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21173__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__21173__$1);{
var G__21193 = cljs.core.chunk_rest.call(null,seq__21173__$1);
var G__21194 = c__4408__auto__;
var G__21195 = cljs.core.count.call(null,c__4408__auto__);
var G__21196 = (0);
seq__21173 = G__21193;
chunk__21174 = G__21194;
count__21175 = G__21195;
i__21176 = G__21196;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21173__$1);goog.events.removeAll(node,type__$1);
{
var G__21197 = cljs.core.next.call(null,seq__21173__$1);
var G__21198 = null;
var G__21199 = (0);
var G__21200 = (0);
seq__21173 = G__21197;
chunk__21174 = G__21198;
count__21175 = G__21199;
i__21176 = G__21200;
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
var G__21201 = parent;
var G__21202 = cljs.core.cons.call(null,parent,so_far);
n = G__21201;
so_far = G__21202;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21211_21219 = cljs.core.seq.call(null,ancestors);var chunk__21212_21220 = null;var count__21213_21221 = (0);var i__21214_21222 = (0);while(true){
if((i__21214_21222 < count__21213_21221))
{var n_21223 = cljs.core._nth.call(null,chunk__21212_21220,i__21214_21222);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21223;
goog.events.fireListeners(n_21223,evt.type,true,evt);
}
{
var G__21224 = seq__21211_21219;
var G__21225 = chunk__21212_21220;
var G__21226 = count__21213_21221;
var G__21227 = (i__21214_21222 + (1));
seq__21211_21219 = G__21224;
chunk__21212_21220 = G__21225;
count__21213_21221 = G__21226;
i__21214_21222 = G__21227;
continue;
}
} else
{var temp__4126__auto___21228 = cljs.core.seq.call(null,seq__21211_21219);if(temp__4126__auto___21228)
{var seq__21211_21229__$1 = temp__4126__auto___21228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21211_21229__$1))
{var c__4408__auto___21230 = cljs.core.chunk_first.call(null,seq__21211_21229__$1);{
var G__21231 = cljs.core.chunk_rest.call(null,seq__21211_21229__$1);
var G__21232 = c__4408__auto___21230;
var G__21233 = cljs.core.count.call(null,c__4408__auto___21230);
var G__21234 = (0);
seq__21211_21219 = G__21231;
chunk__21212_21220 = G__21232;
count__21213_21221 = G__21233;
i__21214_21222 = G__21234;
continue;
}
} else
{var n_21235 = cljs.core.first.call(null,seq__21211_21229__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21235;
goog.events.fireListeners(n_21235,evt.type,true,evt);
}
{
var G__21236 = cljs.core.next.call(null,seq__21211_21229__$1);
var G__21237 = null;
var G__21238 = (0);
var G__21239 = (0);
seq__21211_21219 = G__21236;
chunk__21212_21220 = G__21237;
count__21213_21221 = G__21238;
i__21214_21222 = G__21239;
continue;
}
}
} else
{}
}
break;
}
var seq__21215_21240 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21216_21241 = null;var count__21217_21242 = (0);var i__21218_21243 = (0);while(true){
if((i__21218_21243 < count__21217_21242))
{var n_21244 = cljs.core._nth.call(null,chunk__21216_21241,i__21218_21243);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21244;
goog.events.fireListeners(n_21244,evt.type,false,evt);
}
{
var G__21245 = seq__21215_21240;
var G__21246 = chunk__21216_21241;
var G__21247 = count__21217_21242;
var G__21248 = (i__21218_21243 + (1));
seq__21215_21240 = G__21245;
chunk__21216_21241 = G__21246;
count__21217_21242 = G__21247;
i__21218_21243 = G__21248;
continue;
}
} else
{var temp__4126__auto___21249 = cljs.core.seq.call(null,seq__21215_21240);if(temp__4126__auto___21249)
{var seq__21215_21250__$1 = temp__4126__auto___21249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21215_21250__$1))
{var c__4408__auto___21251 = cljs.core.chunk_first.call(null,seq__21215_21250__$1);{
var G__21252 = cljs.core.chunk_rest.call(null,seq__21215_21250__$1);
var G__21253 = c__4408__auto___21251;
var G__21254 = cljs.core.count.call(null,c__4408__auto___21251);
var G__21255 = (0);
seq__21215_21240 = G__21252;
chunk__21216_21241 = G__21253;
count__21217_21242 = G__21254;
i__21218_21243 = G__21255;
continue;
}
} else
{var n_21256 = cljs.core.first.call(null,seq__21215_21250__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21256;
goog.events.fireListeners(n_21256,evt.type,false,evt);
}
{
var G__21257 = cljs.core.next.call(null,seq__21215_21250__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__21215_21240 = G__21257;
chunk__21216_21241 = G__21258;
count__21217_21242 = G__21259;
i__21218_21243 = G__21260;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21267_21273 = cljs.core.seq.call(null,evt_map);var chunk__21268_21274 = null;var count__21269_21275 = (0);var i__21270_21276 = (0);while(true){
if((i__21270_21276 < count__21269_21275))
{var vec__21271_21277 = cljs.core._nth.call(null,chunk__21268_21274,i__21270_21276);var k_21278 = cljs.core.nth.call(null,vec__21271_21277,(0),null);var v_21279 = cljs.core.nth.call(null,vec__21271_21277,(1),null);(evt[k_21278] = v_21279);
{
var G__21280 = seq__21267_21273;
var G__21281 = chunk__21268_21274;
var G__21282 = count__21269_21275;
var G__21283 = (i__21270_21276 + (1));
seq__21267_21273 = G__21280;
chunk__21268_21274 = G__21281;
count__21269_21275 = G__21282;
i__21270_21276 = G__21283;
continue;
}
} else
{var temp__4126__auto___21284 = cljs.core.seq.call(null,seq__21267_21273);if(temp__4126__auto___21284)
{var seq__21267_21285__$1 = temp__4126__auto___21284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21267_21285__$1))
{var c__4408__auto___21286 = cljs.core.chunk_first.call(null,seq__21267_21285__$1);{
var G__21287 = cljs.core.chunk_rest.call(null,seq__21267_21285__$1);
var G__21288 = c__4408__auto___21286;
var G__21289 = cljs.core.count.call(null,c__4408__auto___21286);
var G__21290 = (0);
seq__21267_21273 = G__21287;
chunk__21268_21274 = G__21288;
count__21269_21275 = G__21289;
i__21270_21276 = G__21290;
continue;
}
} else
{var vec__21272_21291 = cljs.core.first.call(null,seq__21267_21285__$1);var k_21292 = cljs.core.nth.call(null,vec__21272_21291,(0),null);var v_21293 = cljs.core.nth.call(null,vec__21272_21291,(1),null);(evt[k_21292] = v_21293);
{
var G__21294 = cljs.core.next.call(null,seq__21267_21285__$1);
var G__21295 = null;
var G__21296 = (0);
var G__21297 = (0);
seq__21267_21273 = G__21294;
chunk__21268_21274 = G__21295;
count__21269_21275 = G__21296;
i__21270_21276 = G__21297;
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
return (function (p1__21298_SHARP_){return goog.events.getListeners(p1__21298_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
