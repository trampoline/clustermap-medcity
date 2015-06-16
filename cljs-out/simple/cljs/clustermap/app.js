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
clustermap.app.IAppService = (function (){var obj29019 = {};return obj29019;
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
clustermap.app.IAppControl = (function (){var obj29021 = {};return obj29021;
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
clustermap.app.IApp = (function (){var obj29023 = {};return obj29023;
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
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29080 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29080 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29081){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29081 = meta29081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29080.cljs$lang$type = true;
clustermap.app.t29080.cljs$lang$ctorStr = "clustermap.app/t29080";
clustermap.app.t29080.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29080");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29080.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29080.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29083_29136 = cljs.core.seq.call(null,self__.component_defs);var chunk__29084_29137 = null;var count__29085_29138 = (0);var i__29086_29139 = (0);while(true){
if((i__29086_29139 < count__29085_29138))
{var map__29087_29140 = cljs.core._nth.call(null,chunk__29084_29137,i__29086_29139);var map__29087_29141__$1 = ((cljs.core.seq_QMARK_.call(null,map__29087_29140))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087_29140):map__29087_29140);var paths_29142 = cljs.core.get.call(null,map__29087_29141__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29143 = cljs.core.get.call(null,map__29087_29141__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29144 = cljs.core.get.call(null,map__29087_29141__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29145 = cljs.core.get.call(null,map__29087_29141__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29146 = cljs.core.get.call(null,map__29087_29141__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29146,f_29145,target_29144,paths_29142], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29146,f_29145,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29144,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29143,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29142);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29146,f_29145,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29144,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29143,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29142);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29146,f_29145,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29144,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29143,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29142);
}
{
var G__29147 = seq__29083_29136;
var G__29148 = chunk__29084_29137;
var G__29149 = count__29085_29138;
var G__29150 = (i__29086_29139 + (1));
seq__29083_29136 = G__29147;
chunk__29084_29137 = G__29148;
count__29085_29138 = G__29149;
i__29086_29139 = G__29150;
continue;
}
} else
{var temp__4126__auto___29151 = cljs.core.seq.call(null,seq__29083_29136);if(temp__4126__auto___29151)
{var seq__29083_29152__$1 = temp__4126__auto___29151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29083_29152__$1))
{var c__4408__auto___29153 = cljs.core.chunk_first.call(null,seq__29083_29152__$1);{
var G__29154 = cljs.core.chunk_rest.call(null,seq__29083_29152__$1);
var G__29155 = c__4408__auto___29153;
var G__29156 = cljs.core.count.call(null,c__4408__auto___29153);
var G__29157 = (0);
seq__29083_29136 = G__29154;
chunk__29084_29137 = G__29155;
count__29085_29138 = G__29156;
i__29086_29139 = G__29157;
continue;
}
} else
{var map__29088_29158 = cljs.core.first.call(null,seq__29083_29152__$1);var map__29088_29159__$1 = ((cljs.core.seq_QMARK_.call(null,map__29088_29158))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088_29158):map__29088_29158);var paths_29160 = cljs.core.get.call(null,map__29088_29159__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29161 = cljs.core.get.call(null,map__29088_29159__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29162 = cljs.core.get.call(null,map__29088_29159__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29163 = cljs.core.get.call(null,map__29088_29159__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29164 = cljs.core.get.call(null,map__29088_29159__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29164,f_29163,target_29162,paths_29160], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29164,f_29163,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29162,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29161,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29160);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29164,f_29163,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29162,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29161,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29160);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29164,f_29163,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29162,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29161,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29160);
}
{
var G__29165 = cljs.core.next.call(null,seq__29083_29152__$1);
var G__29166 = null;
var G__29167 = (0);
var G__29168 = (0);
seq__29083_29136 = G__29165;
chunk__29084_29137 = G__29166;
count__29085_29138 = G__29167;
i__29086_29139 = G__29168;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29169 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29169,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29169,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29109){var state_val_29110 = (state_29109[(1)]);if((state_val_29110 === (7)))
{var inst_29093 = (state_29109[(7)]);var inst_29093__$1 = (state_29109[(2)]);var inst_29094 = cljs.core.seq_QMARK_.call(null,inst_29093__$1);var state_29109__$1 = (function (){var statearr_29111 = state_29109;(statearr_29111[(7)] = inst_29093__$1);
return statearr_29111;
})();if(inst_29094)
{var statearr_29112_29170 = state_29109__$1;(statearr_29112_29170[(1)] = (8));
} else
{var statearr_29113_29171 = state_29109__$1;(statearr_29113_29171[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (1)))
{var state_29109__$1 = state_29109;var statearr_29114_29172 = state_29109__$1;(statearr_29114_29172[(2)] = null);
(statearr_29114_29172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (4)))
{var state_29109__$1 = state_29109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(7),self__.comm);
} else
{if((state_val_29110 === (6)))
{var inst_29105 = (state_29109[(2)]);var state_29109__$1 = state_29109;var statearr_29115_29173 = state_29109__$1;(statearr_29115_29173[(2)] = inst_29105);
(statearr_29115_29173[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (3)))
{var inst_29107 = (state_29109[(2)]);var state_29109__$1 = state_29109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29109__$1,inst_29107);
} else
{if((state_val_29110 === (2)))
{var state_29109__$1 = state_29109;var statearr_29116_29174 = state_29109__$1;(statearr_29116_29174[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (9)))
{var inst_29093 = (state_29109[(7)]);var state_29109__$1 = state_29109;var statearr_29118_29175 = state_29109__$1;(statearr_29118_29175[(2)] = inst_29093);
(statearr_29118_29175[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (5)))
{var state_29109__$1 = state_29109;var statearr_29119_29176 = state_29109__$1;(statearr_29119_29176[(2)] = null);
(statearr_29119_29176[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (10)))
{var inst_29099 = (state_29109[(2)]);var inst_29100 = cljs.core.get.call(null,inst_29099,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29101 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29100,inst_29099);var state_29109__$1 = (function (){var statearr_29120 = state_29109;(statearr_29120[(8)] = inst_29101);
return statearr_29120;
})();var statearr_29121_29177 = state_29109__$1;(statearr_29121_29177[(2)] = null);
(statearr_29121_29177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29110 === (8)))
{var inst_29093 = (state_29109[(7)]);var inst_29096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29093);var state_29109__$1 = state_29109;var statearr_29122_29178 = state_29109__$1;(statearr_29122_29178[(2)] = inst_29096);
(statearr_29122_29178[(1)] = (10));
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
});})(c__9125__auto___29169,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29169,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29126 = [null,null,null,null,null,null,null,null,null];(statearr_29126[(0)] = state_machine__9111__auto__);
(statearr_29126[(1)] = (1));
return statearr_29126;
});
var state_machine__9111__auto____1 = (function (state_29109){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29109);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object))
{var ex__9114__auto__ = e29127;var statearr_29128_29179 = state_29109;(statearr_29128_29179[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29127;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29180 = state_29109;
state_29109 = G__29180;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29109){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29169,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29129 = f__9126__auto__.call(null);(statearr_29129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29169);
return statearr_29129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29169,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29130_29181 = cljs.core.seq.call(null,self__.component_defs);var chunk__29131_29182 = null;var count__29132_29183 = (0);var i__29133_29184 = (0);while(true){
if((i__29133_29184 < count__29132_29183))
{var map__29134_29185 = cljs.core._nth.call(null,chunk__29131_29182,i__29133_29184);var map__29134_29186__$1 = ((cljs.core.seq_QMARK_.call(null,map__29134_29185))?cljs.core.apply.call(null,cljs.core.hash_map,map__29134_29185):map__29134_29185);var target_29187 = cljs.core.get.call(null,map__29134_29186__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29187);
{
var G__29188 = seq__29130_29181;
var G__29189 = chunk__29131_29182;
var G__29190 = count__29132_29183;
var G__29191 = (i__29133_29184 + (1));
seq__29130_29181 = G__29188;
chunk__29131_29182 = G__29189;
count__29132_29183 = G__29190;
i__29133_29184 = G__29191;
continue;
}
} else
{var temp__4126__auto___29192 = cljs.core.seq.call(null,seq__29130_29181);if(temp__4126__auto___29192)
{var seq__29130_29193__$1 = temp__4126__auto___29192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29130_29193__$1))
{var c__4408__auto___29194 = cljs.core.chunk_first.call(null,seq__29130_29193__$1);{
var G__29195 = cljs.core.chunk_rest.call(null,seq__29130_29193__$1);
var G__29196 = c__4408__auto___29194;
var G__29197 = cljs.core.count.call(null,c__4408__auto___29194);
var G__29198 = (0);
seq__29130_29181 = G__29195;
chunk__29131_29182 = G__29196;
count__29132_29183 = G__29197;
i__29133_29184 = G__29198;
continue;
}
} else
{var map__29135_29199 = cljs.core.first.call(null,seq__29130_29193__$1);var map__29135_29200__$1 = ((cljs.core.seq_QMARK_.call(null,map__29135_29199))?cljs.core.apply.call(null,cljs.core.hash_map,map__29135_29199):map__29135_29199);var target_29201 = cljs.core.get.call(null,map__29135_29200__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29201);
{
var G__29202 = cljs.core.next.call(null,seq__29130_29193__$1);
var G__29203 = null;
var G__29204 = (0);
var G__29205 = (0);
seq__29130_29181 = G__29202;
chunk__29131_29182 = G__29203;
count__29132_29183 = G__29204;
i__29133_29184 = G__29205;
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
clustermap.app.t29080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29082){var self__ = this;
var _29082__$1 = this;return self__.meta29081;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29082,meta29081__$1){var self__ = this;
var _29082__$1 = this;return (new clustermap.app.t29080(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29081__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29080 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29080(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29081){return (new clustermap.app.t29080(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29081));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29080(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
