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
cljs.core.enable_console_print_BANG_.call(null);
if(typeof clustermap.app.history_STAR_ !== 'undefined')
{} else
{clustermap.app.history_STAR_ = (new goog.History());
}
clustermap.app.IAppService = (function (){var obj29304 = {};return obj29304;
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
clustermap.app.IAppControl = (function (){var obj29306 = {};return obj29306;
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
clustermap.app.IApp = (function (){var obj29308 = {};return obj29308;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29365 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29365 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29366){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29366 = meta29366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29365.cljs$lang$type = true;
clustermap.app.t29365.cljs$lang$ctorStr = "clustermap.app/t29365";
clustermap.app.t29365.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29365");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29365.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;console.log("in navigate: ",view);
return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29365.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29368_29421 = cljs.core.seq.call(null,self__.component_defs);var chunk__29369_29422 = null;var count__29370_29423 = (0);var i__29371_29424 = (0);while(true){
if((i__29371_29424 < count__29370_29423))
{var map__29372_29425 = cljs.core._nth.call(null,chunk__29369_29422,i__29371_29424);var map__29372_29426__$1 = ((cljs.core.seq_QMARK_.call(null,map__29372_29425))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372_29425):map__29372_29425);var paths_29427 = cljs.core.get.call(null,map__29372_29426__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29428 = cljs.core.get.call(null,map__29372_29426__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29429 = cljs.core.get.call(null,map__29372_29426__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29430 = cljs.core.get.call(null,map__29372_29426__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29431 = cljs.core.get.call(null,map__29372_29426__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29431,f_29430,target_29429,paths_29427], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29431,f_29430,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29429,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29428,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29427);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29431,f_29430,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29429,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29428,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29427);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29431,f_29430,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29429,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29428,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29427);
}
{
var G__29432 = seq__29368_29421;
var G__29433 = chunk__29369_29422;
var G__29434 = count__29370_29423;
var G__29435 = (i__29371_29424 + (1));
seq__29368_29421 = G__29432;
chunk__29369_29422 = G__29433;
count__29370_29423 = G__29434;
i__29371_29424 = G__29435;
continue;
}
} else
{var temp__4126__auto___29436 = cljs.core.seq.call(null,seq__29368_29421);if(temp__4126__auto___29436)
{var seq__29368_29437__$1 = temp__4126__auto___29436;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29368_29437__$1))
{var c__4408__auto___29438 = cljs.core.chunk_first.call(null,seq__29368_29437__$1);{
var G__29439 = cljs.core.chunk_rest.call(null,seq__29368_29437__$1);
var G__29440 = c__4408__auto___29438;
var G__29441 = cljs.core.count.call(null,c__4408__auto___29438);
var G__29442 = (0);
seq__29368_29421 = G__29439;
chunk__29369_29422 = G__29440;
count__29370_29423 = G__29441;
i__29371_29424 = G__29442;
continue;
}
} else
{var map__29373_29443 = cljs.core.first.call(null,seq__29368_29437__$1);var map__29373_29444__$1 = ((cljs.core.seq_QMARK_.call(null,map__29373_29443))?cljs.core.apply.call(null,cljs.core.hash_map,map__29373_29443):map__29373_29443);var paths_29445 = cljs.core.get.call(null,map__29373_29444__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29446 = cljs.core.get.call(null,map__29373_29444__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29447 = cljs.core.get.call(null,map__29373_29444__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29448 = cljs.core.get.call(null,map__29373_29444__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29449 = cljs.core.get.call(null,map__29373_29444__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29449,f_29448,target_29447,paths_29445], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29449,f_29448,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29447,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29446,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29445);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29449,f_29448,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29447,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29446,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29445);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29449,f_29448,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29447,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29446,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29445);
}
{
var G__29450 = cljs.core.next.call(null,seq__29368_29437__$1);
var G__29451 = null;
var G__29452 = (0);
var G__29453 = (0);
seq__29368_29421 = G__29450;
chunk__29369_29422 = G__29451;
count__29370_29423 = G__29452;
i__29371_29424 = G__29453;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29454 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29454,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29454,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29394){var state_val_29395 = (state_29394[(1)]);if((state_val_29395 === (7)))
{var inst_29378 = (state_29394[(7)]);var inst_29378__$1 = (state_29394[(2)]);var inst_29379 = cljs.core.seq_QMARK_.call(null,inst_29378__$1);var state_29394__$1 = (function (){var statearr_29396 = state_29394;(statearr_29396[(7)] = inst_29378__$1);
return statearr_29396;
})();if(inst_29379)
{var statearr_29397_29455 = state_29394__$1;(statearr_29397_29455[(1)] = (8));
} else
{var statearr_29398_29456 = state_29394__$1;(statearr_29398_29456[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (1)))
{var state_29394__$1 = state_29394;var statearr_29399_29457 = state_29394__$1;(statearr_29399_29457[(2)] = null);
(statearr_29399_29457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (4)))
{var state_29394__$1 = state_29394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29394__$1,(7),self__.comm);
} else
{if((state_val_29395 === (6)))
{var inst_29390 = (state_29394[(2)]);var state_29394__$1 = state_29394;var statearr_29400_29458 = state_29394__$1;(statearr_29400_29458[(2)] = inst_29390);
(statearr_29400_29458[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (3)))
{var inst_29392 = (state_29394[(2)]);var state_29394__$1 = state_29394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29394__$1,inst_29392);
} else
{if((state_val_29395 === (2)))
{var state_29394__$1 = state_29394;var statearr_29401_29459 = state_29394__$1;(statearr_29401_29459[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (9)))
{var inst_29378 = (state_29394[(7)]);var state_29394__$1 = state_29394;var statearr_29403_29460 = state_29394__$1;(statearr_29403_29460[(2)] = inst_29378);
(statearr_29403_29460[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (5)))
{var state_29394__$1 = state_29394;var statearr_29404_29461 = state_29394__$1;(statearr_29404_29461[(2)] = null);
(statearr_29404_29461[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (10)))
{var inst_29384 = (state_29394[(2)]);var inst_29385 = cljs.core.get.call(null,inst_29384,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29386 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29385,inst_29384);var state_29394__$1 = (function (){var statearr_29405 = state_29394;(statearr_29405[(8)] = inst_29386);
return statearr_29405;
})();var statearr_29406_29462 = state_29394__$1;(statearr_29406_29462[(2)] = null);
(statearr_29406_29462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29395 === (8)))
{var inst_29378 = (state_29394[(7)]);var inst_29381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29378);var state_29394__$1 = state_29394;var statearr_29407_29463 = state_29394__$1;(statearr_29407_29463[(2)] = inst_29381);
(statearr_29407_29463[(1)] = (10));
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
});})(c__9125__auto___29454,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29454,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29411 = [null,null,null,null,null,null,null,null,null];(statearr_29411[(0)] = state_machine__9111__auto__);
(statearr_29411[(1)] = (1));
return statearr_29411;
});
var state_machine__9111__auto____1 = (function (state_29394){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29394);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29412){if((e29412 instanceof Object))
{var ex__9114__auto__ = e29412;var statearr_29413_29464 = state_29394;(statearr_29413_29464[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29412;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29465 = state_29394;
state_29394 = G__29465;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29394){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29454,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29414 = f__9126__auto__.call(null);(statearr_29414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29454);
return statearr_29414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29454,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29415_29466 = cljs.core.seq.call(null,self__.component_defs);var chunk__29416_29467 = null;var count__29417_29468 = (0);var i__29418_29469 = (0);while(true){
if((i__29418_29469 < count__29417_29468))
{var map__29419_29470 = cljs.core._nth.call(null,chunk__29416_29467,i__29418_29469);var map__29419_29471__$1 = ((cljs.core.seq_QMARK_.call(null,map__29419_29470))?cljs.core.apply.call(null,cljs.core.hash_map,map__29419_29470):map__29419_29470);var target_29472 = cljs.core.get.call(null,map__29419_29471__$1,new cljs.core.Keyword(null,"target","target",253001721));console.log(target_29472);
clustermap.components.mount.unmount.call(null,target_29472);
{
var G__29473 = seq__29415_29466;
var G__29474 = chunk__29416_29467;
var G__29475 = count__29417_29468;
var G__29476 = (i__29418_29469 + (1));
seq__29415_29466 = G__29473;
chunk__29416_29467 = G__29474;
count__29417_29468 = G__29475;
i__29418_29469 = G__29476;
continue;
}
} else
{var temp__4126__auto___29477 = cljs.core.seq.call(null,seq__29415_29466);if(temp__4126__auto___29477)
{var seq__29415_29478__$1 = temp__4126__auto___29477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29415_29478__$1))
{var c__4408__auto___29479 = cljs.core.chunk_first.call(null,seq__29415_29478__$1);{
var G__29480 = cljs.core.chunk_rest.call(null,seq__29415_29478__$1);
var G__29481 = c__4408__auto___29479;
var G__29482 = cljs.core.count.call(null,c__4408__auto___29479);
var G__29483 = (0);
seq__29415_29466 = G__29480;
chunk__29416_29467 = G__29481;
count__29417_29468 = G__29482;
i__29418_29469 = G__29483;
continue;
}
} else
{var map__29420_29484 = cljs.core.first.call(null,seq__29415_29478__$1);var map__29420_29485__$1 = ((cljs.core.seq_QMARK_.call(null,map__29420_29484))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420_29484):map__29420_29484);var target_29486 = cljs.core.get.call(null,map__29420_29485__$1,new cljs.core.Keyword(null,"target","target",253001721));console.log(target_29486);
clustermap.components.mount.unmount.call(null,target_29486);
{
var G__29487 = cljs.core.next.call(null,seq__29415_29478__$1);
var G__29488 = null;
var G__29489 = (0);
var G__29490 = (0);
seq__29415_29466 = G__29487;
chunk__29416_29467 = G__29488;
count__29417_29468 = G__29489;
i__29418_29469 = G__29490;
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
clustermap.app.t29365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29367){var self__ = this;
var _29367__$1 = this;return self__.meta29366;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29367,meta29366__$1){var self__ = this;
var _29367__$1 = this;return (new clustermap.app.t29365(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29366__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29365 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29365(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29366){return (new clustermap.app.t29365(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29366));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29365(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
