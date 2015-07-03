// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('schema.core');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.api');
if(typeof clustermap.app.history_STAR_ !== 'undefined')
{} else
{clustermap.app.history_STAR_ = (new goog.History());
}
clustermap.app.IAppService = (function (){var obj29238 = {};return obj29238;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.init[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.init["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.destroy[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.destroy["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.handle_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.handle_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.dev_mode_QMARK_ = (function dev_mode_QMARK_(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.dev_mode_QMARK_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.dev_mode_QMARK_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.dev-mode?",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IAppControl = (function (){var obj29240 = {};return obj29240;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.start[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.start["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.stop[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.stop["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj29242 = {};return obj29242;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_comm[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_comm["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_filter_rq = (function get_filter_rq(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_filter_rq$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_filter_rq$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_filter_rq[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_filter_rq["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-filter-rq",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_history[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_history["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_navigator_fn = (function get_navigator_fn(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_navigator_fn[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_navigator_fn["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-navigator-fn",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.navigate = (function navigate(this$,view){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$navigate$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$navigate$arity$2(this$,view);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.navigate[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.navigate["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.navigate",this$);
}
}
})().call(null,this$,view);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29299 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29299 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29300){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29300 = meta29300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29299.cljs$lang$type = true;
clustermap.app.t29299.cljs$lang$ctorStr = "clustermap.app/t29299";
clustermap.app.t29299.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29299");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29299.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29299.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29302_29355 = cljs.core.seq.call(null,self__.component_defs);var chunk__29303_29356 = null;var count__29304_29357 = (0);var i__29305_29358 = (0);while(true){
if((i__29305_29358 < count__29304_29357))
{var map__29306_29359 = cljs.core._nth.call(null,chunk__29303_29356,i__29305_29358);var map__29306_29360__$1 = ((cljs.core.seq_QMARK_.call(null,map__29306_29359))?cljs.core.apply.call(null,cljs.core.hash_map,map__29306_29359):map__29306_29359);var paths_29361 = cljs.core.get.call(null,map__29306_29360__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29362 = cljs.core.get.call(null,map__29306_29360__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29363 = cljs.core.get.call(null,map__29306_29360__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29364 = cljs.core.get.call(null,map__29306_29360__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29365 = cljs.core.get.call(null,map__29306_29360__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29365,f_29364,target_29363,paths_29361], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29365,f_29364,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29363,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29362,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29361);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29365,f_29364,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29363,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29362,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29361);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29365,f_29364,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29363,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29362,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29361);
}
{
var G__29366 = seq__29302_29355;
var G__29367 = chunk__29303_29356;
var G__29368 = count__29304_29357;
var G__29369 = (i__29305_29358 + (1));
seq__29302_29355 = G__29366;
chunk__29303_29356 = G__29367;
count__29304_29357 = G__29368;
i__29305_29358 = G__29369;
continue;
}
} else
{var temp__4126__auto___29370 = cljs.core.seq.call(null,seq__29302_29355);if(temp__4126__auto___29370)
{var seq__29302_29371__$1 = temp__4126__auto___29370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29302_29371__$1))
{var c__4408__auto___29372 = cljs.core.chunk_first.call(null,seq__29302_29371__$1);{
var G__29373 = cljs.core.chunk_rest.call(null,seq__29302_29371__$1);
var G__29374 = c__4408__auto___29372;
var G__29375 = cljs.core.count.call(null,c__4408__auto___29372);
var G__29376 = (0);
seq__29302_29355 = G__29373;
chunk__29303_29356 = G__29374;
count__29304_29357 = G__29375;
i__29305_29358 = G__29376;
continue;
}
} else
{var map__29307_29377 = cljs.core.first.call(null,seq__29302_29371__$1);var map__29307_29378__$1 = ((cljs.core.seq_QMARK_.call(null,map__29307_29377))?cljs.core.apply.call(null,cljs.core.hash_map,map__29307_29377):map__29307_29377);var paths_29379 = cljs.core.get.call(null,map__29307_29378__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29380 = cljs.core.get.call(null,map__29307_29378__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29381 = cljs.core.get.call(null,map__29307_29378__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29382 = cljs.core.get.call(null,map__29307_29378__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29383 = cljs.core.get.call(null,map__29307_29378__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29383,f_29382,target_29381,paths_29379], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29383,f_29382,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29381,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29380,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29379);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29383,f_29382,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29381,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29380,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29379);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29383,f_29382,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29381,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29380,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29379);
}
{
var G__29384 = cljs.core.next.call(null,seq__29302_29371__$1);
var G__29385 = null;
var G__29386 = (0);
var G__29387 = (0);
seq__29302_29355 = G__29384;
chunk__29303_29356 = G__29385;
count__29304_29357 = G__29386;
i__29305_29358 = G__29387;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29388 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29388,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29388,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29328){var state_val_29329 = (state_29328[(1)]);if((state_val_29329 === (7)))
{var inst_29312 = (state_29328[(7)]);var inst_29312__$1 = (state_29328[(2)]);var inst_29313 = cljs.core.seq_QMARK_.call(null,inst_29312__$1);var state_29328__$1 = (function (){var statearr_29330 = state_29328;(statearr_29330[(7)] = inst_29312__$1);
return statearr_29330;
})();if(inst_29313)
{var statearr_29331_29389 = state_29328__$1;(statearr_29331_29389[(1)] = (8));
} else
{var statearr_29332_29390 = state_29328__$1;(statearr_29332_29390[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (1)))
{var state_29328__$1 = state_29328;var statearr_29333_29391 = state_29328__$1;(statearr_29333_29391[(2)] = null);
(statearr_29333_29391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (4)))
{var state_29328__$1 = state_29328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29328__$1,(7),self__.comm);
} else
{if((state_val_29329 === (6)))
{var inst_29324 = (state_29328[(2)]);var state_29328__$1 = state_29328;var statearr_29334_29392 = state_29328__$1;(statearr_29334_29392[(2)] = inst_29324);
(statearr_29334_29392[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (3)))
{var inst_29326 = (state_29328[(2)]);var state_29328__$1 = state_29328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29328__$1,inst_29326);
} else
{if((state_val_29329 === (2)))
{var state_29328__$1 = state_29328;var statearr_29335_29393 = state_29328__$1;(statearr_29335_29393[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (9)))
{var inst_29312 = (state_29328[(7)]);var state_29328__$1 = state_29328;var statearr_29337_29394 = state_29328__$1;(statearr_29337_29394[(2)] = inst_29312);
(statearr_29337_29394[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (5)))
{var state_29328__$1 = state_29328;var statearr_29338_29395 = state_29328__$1;(statearr_29338_29395[(2)] = null);
(statearr_29338_29395[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (10)))
{var inst_29318 = (state_29328[(2)]);var inst_29319 = cljs.core.get.call(null,inst_29318,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29320 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29319,inst_29318);var state_29328__$1 = (function (){var statearr_29339 = state_29328;(statearr_29339[(8)] = inst_29320);
return statearr_29339;
})();var statearr_29340_29396 = state_29328__$1;(statearr_29340_29396[(2)] = null);
(statearr_29340_29396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29329 === (8)))
{var inst_29312 = (state_29328[(7)]);var inst_29315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29312);var state_29328__$1 = state_29328;var statearr_29341_29397 = state_29328__$1;(statearr_29341_29397[(2)] = inst_29315);
(statearr_29341_29397[(1)] = (10));
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
});})(c__9125__auto___29388,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29388,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29345 = [null,null,null,null,null,null,null,null,null];(statearr_29345[(0)] = state_machine__9111__auto__);
(statearr_29345[(1)] = (1));
return statearr_29345;
});
var state_machine__9111__auto____1 = (function (state_29328){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29328);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29346){if((e29346 instanceof Object))
{var ex__9114__auto__ = e29346;var statearr_29347_29398 = state_29328;(statearr_29347_29398[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29346;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29399 = state_29328;
state_29328 = G__29399;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29328){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29388,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29348 = f__9126__auto__.call(null);(statearr_29348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29388);
return statearr_29348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29388,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29349_29400 = cljs.core.seq.call(null,self__.component_defs);var chunk__29350_29401 = null;var count__29351_29402 = (0);var i__29352_29403 = (0);while(true){
if((i__29352_29403 < count__29351_29402))
{var map__29353_29404 = cljs.core._nth.call(null,chunk__29350_29401,i__29352_29403);var map__29353_29405__$1 = ((cljs.core.seq_QMARK_.call(null,map__29353_29404))?cljs.core.apply.call(null,cljs.core.hash_map,map__29353_29404):map__29353_29404);var target_29406 = cljs.core.get.call(null,map__29353_29405__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29406);
{
var G__29407 = seq__29349_29400;
var G__29408 = chunk__29350_29401;
var G__29409 = count__29351_29402;
var G__29410 = (i__29352_29403 + (1));
seq__29349_29400 = G__29407;
chunk__29350_29401 = G__29408;
count__29351_29402 = G__29409;
i__29352_29403 = G__29410;
continue;
}
} else
{var temp__4126__auto___29411 = cljs.core.seq.call(null,seq__29349_29400);if(temp__4126__auto___29411)
{var seq__29349_29412__$1 = temp__4126__auto___29411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29349_29412__$1))
{var c__4408__auto___29413 = cljs.core.chunk_first.call(null,seq__29349_29412__$1);{
var G__29414 = cljs.core.chunk_rest.call(null,seq__29349_29412__$1);
var G__29415 = c__4408__auto___29413;
var G__29416 = cljs.core.count.call(null,c__4408__auto___29413);
var G__29417 = (0);
seq__29349_29400 = G__29414;
chunk__29350_29401 = G__29415;
count__29351_29402 = G__29416;
i__29352_29403 = G__29417;
continue;
}
} else
{var map__29354_29418 = cljs.core.first.call(null,seq__29349_29412__$1);var map__29354_29419__$1 = ((cljs.core.seq_QMARK_.call(null,map__29354_29418))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354_29418):map__29354_29418);var target_29420 = cljs.core.get.call(null,map__29354_29419__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29420);
{
var G__29421 = cljs.core.next.call(null,seq__29349_29412__$1);
var G__29422 = null;
var G__29423 = (0);
var G__29424 = (0);
seq__29349_29400 = G__29421;
chunk__29350_29401 = G__29422;
count__29351_29402 = G__29423;
i__29352_29403 = G__29424;
continue;
}
}
} else
{}
}
break;
}
clustermap.app.destroy.call(null,self__.app_service,this$__$1);
clustermap.nav.destroy.call(null);
return clustermap.app.history_STAR_.removeAllListeners();
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29301){var self__ = this;
var _29301__$1 = this;return self__.meta29300;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29301,meta29300__$1){var self__ = this;
var _29301__$1 = this;return (new clustermap.app.t29299(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29300__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29299 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29299(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29300){return (new clustermap.app.t29299(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29300));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29299(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
