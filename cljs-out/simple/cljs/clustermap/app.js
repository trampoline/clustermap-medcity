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
clustermap.app.IAppService = (function (){var obj29235 = {};return obj29235;
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
clustermap.app.IAppControl = (function (){var obj29237 = {};return obj29237;
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
clustermap.app.IApp = (function (){var obj29239 = {};return obj29239;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29296 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29296 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29297){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29297 = meta29297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29296.cljs$lang$type = true;
clustermap.app.t29296.cljs$lang$ctorStr = "clustermap.app/t29296";
clustermap.app.t29296.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29296");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29296.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29296.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29299_29352 = cljs.core.seq.call(null,self__.component_defs);var chunk__29300_29353 = null;var count__29301_29354 = (0);var i__29302_29355 = (0);while(true){
if((i__29302_29355 < count__29301_29354))
{var map__29303_29356 = cljs.core._nth.call(null,chunk__29300_29353,i__29302_29355);var map__29303_29357__$1 = ((cljs.core.seq_QMARK_.call(null,map__29303_29356))?cljs.core.apply.call(null,cljs.core.hash_map,map__29303_29356):map__29303_29356);var paths_29358 = cljs.core.get.call(null,map__29303_29357__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29359 = cljs.core.get.call(null,map__29303_29357__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29360 = cljs.core.get.call(null,map__29303_29357__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29361 = cljs.core.get.call(null,map__29303_29357__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29362 = cljs.core.get.call(null,map__29303_29357__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29362,f_29361,target_29360,paths_29358], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29362,f_29361,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29360,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29359,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29358);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29362,f_29361,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29360,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29359,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29358);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29362,f_29361,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29360,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29359,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29358);
}
{
var G__29363 = seq__29299_29352;
var G__29364 = chunk__29300_29353;
var G__29365 = count__29301_29354;
var G__29366 = (i__29302_29355 + (1));
seq__29299_29352 = G__29363;
chunk__29300_29353 = G__29364;
count__29301_29354 = G__29365;
i__29302_29355 = G__29366;
continue;
}
} else
{var temp__4126__auto___29367 = cljs.core.seq.call(null,seq__29299_29352);if(temp__4126__auto___29367)
{var seq__29299_29368__$1 = temp__4126__auto___29367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29299_29368__$1))
{var c__4408__auto___29369 = cljs.core.chunk_first.call(null,seq__29299_29368__$1);{
var G__29370 = cljs.core.chunk_rest.call(null,seq__29299_29368__$1);
var G__29371 = c__4408__auto___29369;
var G__29372 = cljs.core.count.call(null,c__4408__auto___29369);
var G__29373 = (0);
seq__29299_29352 = G__29370;
chunk__29300_29353 = G__29371;
count__29301_29354 = G__29372;
i__29302_29355 = G__29373;
continue;
}
} else
{var map__29304_29374 = cljs.core.first.call(null,seq__29299_29368__$1);var map__29304_29375__$1 = ((cljs.core.seq_QMARK_.call(null,map__29304_29374))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304_29374):map__29304_29374);var paths_29376 = cljs.core.get.call(null,map__29304_29375__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29377 = cljs.core.get.call(null,map__29304_29375__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29378 = cljs.core.get.call(null,map__29304_29375__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29379 = cljs.core.get.call(null,map__29304_29375__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29380 = cljs.core.get.call(null,map__29304_29375__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29380,f_29379,target_29378,paths_29376], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29380,f_29379,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29378,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29377,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29376);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29380,f_29379,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29378,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29377,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29376);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29380,f_29379,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29378,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29377,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29376);
}
{
var G__29381 = cljs.core.next.call(null,seq__29299_29368__$1);
var G__29382 = null;
var G__29383 = (0);
var G__29384 = (0);
seq__29299_29352 = G__29381;
chunk__29300_29353 = G__29382;
count__29301_29354 = G__29383;
i__29302_29355 = G__29384;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29385,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29385,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29325){var state_val_29326 = (state_29325[(1)]);if((state_val_29326 === (7)))
{var inst_29309 = (state_29325[(7)]);var inst_29309__$1 = (state_29325[(2)]);var inst_29310 = cljs.core.seq_QMARK_.call(null,inst_29309__$1);var state_29325__$1 = (function (){var statearr_29327 = state_29325;(statearr_29327[(7)] = inst_29309__$1);
return statearr_29327;
})();if(inst_29310)
{var statearr_29328_29386 = state_29325__$1;(statearr_29328_29386[(1)] = (8));
} else
{var statearr_29329_29387 = state_29325__$1;(statearr_29329_29387[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (1)))
{var state_29325__$1 = state_29325;var statearr_29330_29388 = state_29325__$1;(statearr_29330_29388[(2)] = null);
(statearr_29330_29388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (4)))
{var state_29325__$1 = state_29325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29325__$1,(7),self__.comm);
} else
{if((state_val_29326 === (6)))
{var inst_29321 = (state_29325[(2)]);var state_29325__$1 = state_29325;var statearr_29331_29389 = state_29325__$1;(statearr_29331_29389[(2)] = inst_29321);
(statearr_29331_29389[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (3)))
{var inst_29323 = (state_29325[(2)]);var state_29325__$1 = state_29325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29325__$1,inst_29323);
} else
{if((state_val_29326 === (2)))
{var state_29325__$1 = state_29325;var statearr_29332_29390 = state_29325__$1;(statearr_29332_29390[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (9)))
{var inst_29309 = (state_29325[(7)]);var state_29325__$1 = state_29325;var statearr_29334_29391 = state_29325__$1;(statearr_29334_29391[(2)] = inst_29309);
(statearr_29334_29391[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (5)))
{var state_29325__$1 = state_29325;var statearr_29335_29392 = state_29325__$1;(statearr_29335_29392[(2)] = null);
(statearr_29335_29392[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (10)))
{var inst_29315 = (state_29325[(2)]);var inst_29316 = cljs.core.get.call(null,inst_29315,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29317 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29316,inst_29315);var state_29325__$1 = (function (){var statearr_29336 = state_29325;(statearr_29336[(8)] = inst_29317);
return statearr_29336;
})();var statearr_29337_29393 = state_29325__$1;(statearr_29337_29393[(2)] = null);
(statearr_29337_29393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29326 === (8)))
{var inst_29309 = (state_29325[(7)]);var inst_29312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29309);var state_29325__$1 = state_29325;var statearr_29338_29394 = state_29325__$1;(statearr_29338_29394[(2)] = inst_29312);
(statearr_29338_29394[(1)] = (10));
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
});})(c__9125__auto___29385,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29385,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29342 = [null,null,null,null,null,null,null,null,null];(statearr_29342[(0)] = state_machine__9111__auto__);
(statearr_29342[(1)] = (1));
return statearr_29342;
});
var state_machine__9111__auto____1 = (function (state_29325){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29325);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29343){if((e29343 instanceof Object))
{var ex__9114__auto__ = e29343;var statearr_29344_29395 = state_29325;(statearr_29344_29395[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29343;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29396 = state_29325;
state_29325 = G__29396;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29325){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29385,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29345 = f__9126__auto__.call(null);(statearr_29345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29385);
return statearr_29345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29385,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29346_29397 = cljs.core.seq.call(null,self__.component_defs);var chunk__29347_29398 = null;var count__29348_29399 = (0);var i__29349_29400 = (0);while(true){
if((i__29349_29400 < count__29348_29399))
{var map__29350_29401 = cljs.core._nth.call(null,chunk__29347_29398,i__29349_29400);var map__29350_29402__$1 = ((cljs.core.seq_QMARK_.call(null,map__29350_29401))?cljs.core.apply.call(null,cljs.core.hash_map,map__29350_29401):map__29350_29401);var target_29403 = cljs.core.get.call(null,map__29350_29402__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29403);
{
var G__29404 = seq__29346_29397;
var G__29405 = chunk__29347_29398;
var G__29406 = count__29348_29399;
var G__29407 = (i__29349_29400 + (1));
seq__29346_29397 = G__29404;
chunk__29347_29398 = G__29405;
count__29348_29399 = G__29406;
i__29349_29400 = G__29407;
continue;
}
} else
{var temp__4126__auto___29408 = cljs.core.seq.call(null,seq__29346_29397);if(temp__4126__auto___29408)
{var seq__29346_29409__$1 = temp__4126__auto___29408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29346_29409__$1))
{var c__4408__auto___29410 = cljs.core.chunk_first.call(null,seq__29346_29409__$1);{
var G__29411 = cljs.core.chunk_rest.call(null,seq__29346_29409__$1);
var G__29412 = c__4408__auto___29410;
var G__29413 = cljs.core.count.call(null,c__4408__auto___29410);
var G__29414 = (0);
seq__29346_29397 = G__29411;
chunk__29347_29398 = G__29412;
count__29348_29399 = G__29413;
i__29349_29400 = G__29414;
continue;
}
} else
{var map__29351_29415 = cljs.core.first.call(null,seq__29346_29409__$1);var map__29351_29416__$1 = ((cljs.core.seq_QMARK_.call(null,map__29351_29415))?cljs.core.apply.call(null,cljs.core.hash_map,map__29351_29415):map__29351_29415);var target_29417 = cljs.core.get.call(null,map__29351_29416__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29417);
{
var G__29418 = cljs.core.next.call(null,seq__29346_29409__$1);
var G__29419 = null;
var G__29420 = (0);
var G__29421 = (0);
seq__29346_29397 = G__29418;
chunk__29347_29398 = G__29419;
count__29348_29399 = G__29420;
i__29349_29400 = G__29421;
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
clustermap.app.t29296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29298){var self__ = this;
var _29298__$1 = this;return self__.meta29297;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29298,meta29297__$1){var self__ = this;
var _29298__$1 = this;return (new clustermap.app.t29296(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29297__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29296 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29296(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29297){return (new clustermap.app.t29296(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29297));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29296(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
