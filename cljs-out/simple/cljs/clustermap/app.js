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
clustermap.app.IAppService = (function (){var obj29295 = {};return obj29295;
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
clustermap.app.IAppControl = (function (){var obj29297 = {};return obj29297;
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
clustermap.app.IApp = (function (){var obj29299 = {};return obj29299;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29356 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29356 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29357){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29357 = meta29357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29356.cljs$lang$type = true;
clustermap.app.t29356.cljs$lang$ctorStr = "clustermap.app/t29356";
clustermap.app.t29356.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29356");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29356.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29356.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29359_29412 = cljs.core.seq.call(null,self__.component_defs);var chunk__29360_29413 = null;var count__29361_29414 = (0);var i__29362_29415 = (0);while(true){
if((i__29362_29415 < count__29361_29414))
{var map__29363_29416 = cljs.core._nth.call(null,chunk__29360_29413,i__29362_29415);var map__29363_29417__$1 = ((cljs.core.seq_QMARK_.call(null,map__29363_29416))?cljs.core.apply.call(null,cljs.core.hash_map,map__29363_29416):map__29363_29416);var paths_29418 = cljs.core.get.call(null,map__29363_29417__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29419 = cljs.core.get.call(null,map__29363_29417__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29420 = cljs.core.get.call(null,map__29363_29417__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29421 = cljs.core.get.call(null,map__29363_29417__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29422 = cljs.core.get.call(null,map__29363_29417__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29422,f_29421,target_29420,paths_29418], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29422,f_29421,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29420,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29419,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29418);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29422,f_29421,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29420,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29419,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29418);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29422,f_29421,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29420,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29419,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29418);
}
{
var G__29423 = seq__29359_29412;
var G__29424 = chunk__29360_29413;
var G__29425 = count__29361_29414;
var G__29426 = (i__29362_29415 + (1));
seq__29359_29412 = G__29423;
chunk__29360_29413 = G__29424;
count__29361_29414 = G__29425;
i__29362_29415 = G__29426;
continue;
}
} else
{var temp__4126__auto___29427 = cljs.core.seq.call(null,seq__29359_29412);if(temp__4126__auto___29427)
{var seq__29359_29428__$1 = temp__4126__auto___29427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29359_29428__$1))
{var c__4408__auto___29429 = cljs.core.chunk_first.call(null,seq__29359_29428__$1);{
var G__29430 = cljs.core.chunk_rest.call(null,seq__29359_29428__$1);
var G__29431 = c__4408__auto___29429;
var G__29432 = cljs.core.count.call(null,c__4408__auto___29429);
var G__29433 = (0);
seq__29359_29412 = G__29430;
chunk__29360_29413 = G__29431;
count__29361_29414 = G__29432;
i__29362_29415 = G__29433;
continue;
}
} else
{var map__29364_29434 = cljs.core.first.call(null,seq__29359_29428__$1);var map__29364_29435__$1 = ((cljs.core.seq_QMARK_.call(null,map__29364_29434))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364_29434):map__29364_29434);var paths_29436 = cljs.core.get.call(null,map__29364_29435__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29437 = cljs.core.get.call(null,map__29364_29435__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29438 = cljs.core.get.call(null,map__29364_29435__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29439 = cljs.core.get.call(null,map__29364_29435__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29440 = cljs.core.get.call(null,map__29364_29435__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29440,f_29439,target_29438,paths_29436], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29440,f_29439,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29438,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29437,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29436);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29440,f_29439,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29438,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29437,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29436);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29440,f_29439,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29438,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29437,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29436);
}
{
var G__29441 = cljs.core.next.call(null,seq__29359_29428__$1);
var G__29442 = null;
var G__29443 = (0);
var G__29444 = (0);
seq__29359_29412 = G__29441;
chunk__29360_29413 = G__29442;
count__29361_29414 = G__29443;
i__29362_29415 = G__29444;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29445 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29445,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29445,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29385){var state_val_29386 = (state_29385[(1)]);if((state_val_29386 === (7)))
{var inst_29369 = (state_29385[(7)]);var inst_29369__$1 = (state_29385[(2)]);var inst_29370 = cljs.core.seq_QMARK_.call(null,inst_29369__$1);var state_29385__$1 = (function (){var statearr_29387 = state_29385;(statearr_29387[(7)] = inst_29369__$1);
return statearr_29387;
})();if(inst_29370)
{var statearr_29388_29446 = state_29385__$1;(statearr_29388_29446[(1)] = (8));
} else
{var statearr_29389_29447 = state_29385__$1;(statearr_29389_29447[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (1)))
{var state_29385__$1 = state_29385;var statearr_29390_29448 = state_29385__$1;(statearr_29390_29448[(2)] = null);
(statearr_29390_29448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (4)))
{var state_29385__$1 = state_29385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29385__$1,(7),self__.comm);
} else
{if((state_val_29386 === (6)))
{var inst_29381 = (state_29385[(2)]);var state_29385__$1 = state_29385;var statearr_29391_29449 = state_29385__$1;(statearr_29391_29449[(2)] = inst_29381);
(statearr_29391_29449[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (3)))
{var inst_29383 = (state_29385[(2)]);var state_29385__$1 = state_29385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29385__$1,inst_29383);
} else
{if((state_val_29386 === (2)))
{var state_29385__$1 = state_29385;var statearr_29392_29450 = state_29385__$1;(statearr_29392_29450[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (9)))
{var inst_29369 = (state_29385[(7)]);var state_29385__$1 = state_29385;var statearr_29394_29451 = state_29385__$1;(statearr_29394_29451[(2)] = inst_29369);
(statearr_29394_29451[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (5)))
{var state_29385__$1 = state_29385;var statearr_29395_29452 = state_29385__$1;(statearr_29395_29452[(2)] = null);
(statearr_29395_29452[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (10)))
{var inst_29375 = (state_29385[(2)]);var inst_29376 = cljs.core.get.call(null,inst_29375,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29377 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29376,inst_29375);var state_29385__$1 = (function (){var statearr_29396 = state_29385;(statearr_29396[(8)] = inst_29377);
return statearr_29396;
})();var statearr_29397_29453 = state_29385__$1;(statearr_29397_29453[(2)] = null);
(statearr_29397_29453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29386 === (8)))
{var inst_29369 = (state_29385[(7)]);var inst_29372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29369);var state_29385__$1 = state_29385;var statearr_29398_29454 = state_29385__$1;(statearr_29398_29454[(2)] = inst_29372);
(statearr_29398_29454[(1)] = (10));
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
});})(c__9125__auto___29445,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29445,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29402 = [null,null,null,null,null,null,null,null,null];(statearr_29402[(0)] = state_machine__9111__auto__);
(statearr_29402[(1)] = (1));
return statearr_29402;
});
var state_machine__9111__auto____1 = (function (state_29385){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29385);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29403){if((e29403 instanceof Object))
{var ex__9114__auto__ = e29403;var statearr_29404_29455 = state_29385;(statearr_29404_29455[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29403;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29456 = state_29385;
state_29385 = G__29456;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29385){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29445,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29405 = f__9126__auto__.call(null);(statearr_29405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29445);
return statearr_29405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29445,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29406_29457 = cljs.core.seq.call(null,self__.component_defs);var chunk__29407_29458 = null;var count__29408_29459 = (0);var i__29409_29460 = (0);while(true){
if((i__29409_29460 < count__29408_29459))
{var map__29410_29461 = cljs.core._nth.call(null,chunk__29407_29458,i__29409_29460);var map__29410_29462__$1 = ((cljs.core.seq_QMARK_.call(null,map__29410_29461))?cljs.core.apply.call(null,cljs.core.hash_map,map__29410_29461):map__29410_29461);var target_29463 = cljs.core.get.call(null,map__29410_29462__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29463);
{
var G__29464 = seq__29406_29457;
var G__29465 = chunk__29407_29458;
var G__29466 = count__29408_29459;
var G__29467 = (i__29409_29460 + (1));
seq__29406_29457 = G__29464;
chunk__29407_29458 = G__29465;
count__29408_29459 = G__29466;
i__29409_29460 = G__29467;
continue;
}
} else
{var temp__4126__auto___29468 = cljs.core.seq.call(null,seq__29406_29457);if(temp__4126__auto___29468)
{var seq__29406_29469__$1 = temp__4126__auto___29468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29406_29469__$1))
{var c__4408__auto___29470 = cljs.core.chunk_first.call(null,seq__29406_29469__$1);{
var G__29471 = cljs.core.chunk_rest.call(null,seq__29406_29469__$1);
var G__29472 = c__4408__auto___29470;
var G__29473 = cljs.core.count.call(null,c__4408__auto___29470);
var G__29474 = (0);
seq__29406_29457 = G__29471;
chunk__29407_29458 = G__29472;
count__29408_29459 = G__29473;
i__29409_29460 = G__29474;
continue;
}
} else
{var map__29411_29475 = cljs.core.first.call(null,seq__29406_29469__$1);var map__29411_29476__$1 = ((cljs.core.seq_QMARK_.call(null,map__29411_29475))?cljs.core.apply.call(null,cljs.core.hash_map,map__29411_29475):map__29411_29475);var target_29477 = cljs.core.get.call(null,map__29411_29476__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29477);
{
var G__29478 = cljs.core.next.call(null,seq__29406_29469__$1);
var G__29479 = null;
var G__29480 = (0);
var G__29481 = (0);
seq__29406_29457 = G__29478;
chunk__29407_29458 = G__29479;
count__29408_29459 = G__29480;
i__29409_29460 = G__29481;
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
clustermap.app.t29356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29358){var self__ = this;
var _29358__$1 = this;return self__.meta29357;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29358,meta29357__$1){var self__ = this;
var _29358__$1 = this;return (new clustermap.app.t29356(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29357__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29356 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29356(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29357){return (new clustermap.app.t29356(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29357));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29356(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
